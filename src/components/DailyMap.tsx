import React, { useEffect, useState, useRef, useMemo } from 'react';
import { openExternal } from "../lib/openExternal";
import { MapContainer, TileLayer, Marker, Polyline, useMap, useMapEvents, ZoomControl } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { motion, AnimatePresence } from 'motion/react';
import {
  Navigation,
  MapPin,
  Utensils,
  Bed,
  TreePine,
  Palmtree,
  Info,
  ChevronRight,
  TrendingUp,
  X,
  ExternalLink,
  Star,
} from 'lucide-react';
import type { TransitOption } from '../types';

// Shape of a single leg's transit info as carried through the map.
// Mirrors the inline `transit` object on TimelineEvent.
interface LegTransit {
  from?: string;
  to?: string;
  options: TransitOption[];
  insight?: string;
  departureTime?: string;
}

// Custom Marker Interface (from user request)
export interface MapStop {
  lat: number;
  lng: number;
  name: string;
  visit_order: number;
  place_type: string;
  /** Per-event emoji from the itinerary (e.g. ✈️, 🛂, 🍷). Overrides the place_type emoji when set. */
  emoji?: string;
  transport_to_next?: 'Driving' | 'Walking' | 'Bus' | 'Metro' | 'Flight';
  /** Estimated minutes to reach the NEXT stop, parsed from the recommended transit option's details. */
  transit_minutes?: number;
  /** Full transit detail (all options, insight, etc.) for the leg FROM this stop TO the next.
      Used to populate the tap-to-expand transit modal. */
  transit_info?: LegTransit;
  description?: string;
  address?: string;
  /** Canonical Google Maps URL for this stop (the same name+city format
      used everywhere else in the app). Used by tap-to-navigate buttons in
      the map modal so they land on the right Google Maps place page. */
  mapsUrl?: string;
}

// Mode-specific emoji & color spec:
//   Car   = black, solid, slightly thicker line
//   Walk  = dark grey, dashed
//   Bus   = green, solid (mode-color matches the icon)
//   Metro = red, solid (Barcelona M signage red)
//   Flight= amber, dashed
const TRANSPORT_EMOJI: Record<string, string> = {
  Driving: '🚗',
  Bus: '🚌',
  Metro: '🚇',
  Walking: '🚶',
  Flight: '✈️',
};

const TRANSPORT_COLOR: Record<string, string> = {
  Driving: '#1a1a1a',
  Bus: '#16a34a',
  Metro: '#dc2626',
  Walking: '#525252',
  Flight: '#f59e0b',
};

interface DailyMapProps {
  dayData: MapStop[];
  /** Index of the hotel stop in `dayData` to draw a closing polyline back to.
      Set when the day ends at the hotel and we deduped that final hotel event.
      Undefined / negative = no closing line. */
  loopBackToIndex?: number;
}

// Map Bounds Component to handle fitting markers. Only refits when the
// content of `stops` actually changes (e.g., user switches day), NOT on
// every parent re-render (which would otherwise yank zoom back as soon as
// the user pinches in).
const SetBounds = ({ stops }: { stops: MapStop[] }) => {
  const map = useMap();
  const signature = stops.map(s => `${s.lat.toFixed(4)},${s.lng.toFixed(4)}`).join('|');
  const lastSignature = useRef<string>('');
  useEffect(() => {
    if (!signature || signature === lastSignature.current) return;
    if (stops.length > 0) {
      const bounds = L.latLngBounds(stops.map(s => [s.lat, s.lng]));
      map.fitBounds(bounds, { padding: [50, 50] });
      lastSignature.current = signature;
    }
  }, [signature, stops, map]);
  return null;
};

// Track the current zoom so we can hide transit pills when zoomed too far out
// (where they'd inevitably overlap markers).
const ZoomTracker: React.FC<{ onZoom: (z: number) => void }> = ({ onZoom }) => {
  const map = useMapEvents({
    zoomend: () => onZoom(map.getZoom()),
    moveend: () => onZoom(map.getZoom()),
  });
  useEffect(() => {
    onZoom(map.getZoom());
  }, [map, onZoom]);
  return null;
};

// Helper to get Emoji for place type
const getPlaceEmoji = (type: string) => {
  switch (type.toLowerCase()) {
    case 'restaurant': return '🍽️';
    case 'hotel': return '🏠';
    case 'park': return '🌳';
    case 'beach': return '🏖️';
    case 'transit': return '🚇';
    default: return '📍';
  }
};


interface SelectedLeg {
  transit?: LegTransit;
  fromName: string;
  toName: string;
  /** Name+city query string for Google Maps directions (e.g. "Sagrada Familia Barcelona"). */
  fromQuery: string;
  toQuery: string;
  type: string;
  minutes?: number;
}

// At which zoom level pills are useful. Below this the map is so dense pills
// inevitably stack on top of markers.
const MIN_ZOOM_FOR_PILLS = 13;

export const DailyMap = ({ dayData, loopBackToIndex }: DailyMapProps) => {
  const [selectedStop, setSelectedStop] = useState<MapStop | null>(null);
  const [selectedLeg, setSelectedLeg] = useState<SelectedLeg | null>(null);
  const [zoom, setZoom] = useState(13);

  // Filter dayData to ensure we have valid coordinates.
  // Memoize so the reference is stable across re-renders (zoom changes don't
  // produce a fresh array → SetBounds doesn't re-fit and yank zoom out).
  const validStops = useMemo(
    () => dayData.filter(s => s.lat !== 0 && s.lng !== 0),
    [dayData],
  );

  // Group stops into pairs for polylines, carrying transport mode + minutes + full transit info.
  // Auto-detect Flight legs by raw distance (~> ~1100 km in degrees) so transatlantic
  // hops on travel days render with ✈️ instead of a car/walk emoji "across the ocean".
  // Extract the `query=` value from a canonical mapsUrl. We pass these
  // through so the route-directions button uses the same name+city strings
  // (e.g. "Sagrada Familia Barcelona") that the rest of the app uses,
  // never bare coordinates.
  const queryFromMapsUrl = (mapsUrl?: string, fallbackName?: string): string => {
    if (mapsUrl) {
      const m = mapsUrl.match(/[?&]query=([^&]+)/);
      if (m) return decodeURIComponent(m[1].replace(/\+/g, ' '));
    }
    return fallbackName || '';
  };

  const polylineGroups = validStops.slice(0, -1).map((stop, i) => {
    const nextStop = validStops[i + 1];
    const dLat = nextStop.lat - stop.lat;
    const dLng = nextStop.lng - stop.lng;
    const legDeg = Math.hypot(dLat, dLng);
    const isFlight = legDeg > 10; // ~ > 1100 km in degree-space
    return {
      positions: [[stop.lat, stop.lng] as L.LatLngTuple, [nextStop.lat, nextStop.lng] as L.LatLngTuple],
      type: isFlight ? 'Flight' : (stop.transport_to_next || 'Walking'),
      minutes: stop.transit_minutes,
      transit: stop.transit_info,
      fromName: stop.name,
      toName: nextStop.name,
      fromQuery: queryFromMapsUrl(stop.mapsUrl, stop.name),
      toQuery: queryFromMapsUrl(nextStop.mapsUrl, nextStop.name),
    };
  });

  // Closing loop: when the day's events ended at the hotel, draw a line back
  // from the last visible stop to the hotel stop (whichever index it lives at).
  if (
    loopBackToIndex !== undefined &&
    loopBackToIndex >= 0 &&
    loopBackToIndex < validStops.length &&
    validStops.length > 1 &&
    loopBackToIndex !== validStops.length - 1
  ) {
    const last = validStops[validStops.length - 1];
    const target = validStops[loopBackToIndex];
    polylineGroups.push({
      positions: [[last.lat, last.lng] as L.LatLngTuple, [target.lat, target.lng] as L.LatLngTuple],
      type: last.transport_to_next || 'Walking',
      minutes: last.transit_minutes,
      transit: last.transit_info,
      fromName: last.name,
      toName: target.name,
      fromQuery: queryFromMapsUrl(last.mapsUrl, last.name),
      toQuery: queryFromMapsUrl(target.mapsUrl, target.name),
    });
  }

  // Line styles per user spec:
  //   Car   → slightly thicker BLACK solid
  //   Walk  → dark grey dashed
  //   Bus   → solid green (mode color)
  //   Metro → solid red (mode color)
  //   Flight→ amber dashed
  const getPolylineStyles = (type: string) => {
    switch (type) {
      case 'Driving':
        return { color: '#1a1a1a', weight: 5, dashArray: undefined };
      case 'Bus':
        return { color: '#16a34a', weight: 4, dashArray: undefined };
      case 'Metro':
        return { color: '#dc2626', weight: 4, dashArray: undefined };
      case 'Flight':
        return { color: '#f59e0b', weight: 4, dashArray: '12, 8' };
      default: // Walking
        return { color: '#525252', weight: 3, dashArray: '5, 10' };
    }
  };

  return (
    <div className="w-full flex flex-col rounded-xl overflow-hidden border border-gray-100 shadow-xl bg-white mb-8">
      <div className="relative w-full h-[400px] bg-gray-50">
      <MapContainer
        center={[validStops[0]?.lat || 41.3851, validStops[0]?.lng || 2.1734]}
        zoom={13}
        scrollWheelZoom={false}
        className="w-full h-full"
        zoomControl={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://carto.com/attributions">CARTO</a>'
          url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
        />
        <ZoomControl position="topright" />
        
        <SetBounds stops={validStops} />
        <ZoomTracker onZoom={setZoom} />

        {polylineGroups.map((group, i) => (
          // react-leaflet v5 requires path styles to go through `pathOptions`
          // — passing color/weight/dashArray as direct props only applies on
          // first mount and leaks across day switches. The key includes
          // group.type so React re-creates the polyline when the mode changes,
          // forcing fresh styling.
          <Polyline
            key={`${i}-${group.type}`}
            positions={group.positions}
            pathOptions={getPolylineStyles(group.type)}
            smoothFactor={1.5}
          />
        ))}

        {/* Tappable transit pills at line midpoints. Color-coded to match the line.
            Hidden below MIN_ZOOM_FOR_PILLS so they never overlap markers when the
            map is zoomed all the way out. Pills sit RIGHT on the line midpoint
            (no perpendicular offset) so it's unambiguous which line each pill
            describes — earlier 500m offset put pills closer to adjacent lines
            than their own. */}
        {zoom >= MIN_ZOOM_FOR_PILLS && polylineGroups.map((group, i) => {
          const [a, b] = group.positions;
          const dLat = b[0] - a[0];
          const dLng = b[1] - a[1];
          const len = Math.hypot(dLat, dLng);
          // Skip super-short legs entirely (~< 350m): midpoint would collide with markers
          if (len < 0.0035 && group.type !== 'Flight') return null;

          const pillLat = (a[0] + b[0]) / 2;
          const pillLng = (a[1] + b[1]) / 2;

          const emoji = TRANSPORT_EMOJI[group.type] || '🚶';
          const color = TRANSPORT_COLOR[group.type] || '#6b7280';
          // For flights without a minute count, label the pill "FLIGHT" so it
          // reads as a flight from a glance — without a label, ✈️ alone over
          // an ocean can be mistaken for a generic icon.
          const minutesLabel = group.minutes
            ? `${group.minutes}m`
            : group.type === 'Flight'
              ? 'FLIGHT'
              : '';
          const W = group.type === 'Flight' && !group.minutes ? 76 : 62;
          const H = 22;
          return (
            <Marker
              key={`pill-${i}-${group.type}`}
              position={[pillLat, pillLng]}
              interactive={true}
              zIndexOffset={-300}
              eventHandlers={{
                click: () =>
                  setSelectedLeg({
                    transit: group.transit,
                    fromName: group.fromName,
                    toName: group.toName,
                    fromQuery: group.fromQuery,
                    toQuery: group.toQuery,
                    type: group.type,
                    minutes: group.minutes,
                  }),
              }}
              icon={L.divIcon({
                className: '',
                html: `
                  <div style="
                    width: ${W}px;
                    height: ${H}px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    cursor: pointer;
                  ">
                    <div style="
                      display: inline-flex;
                      align-items: center;
                      gap: 3px;
                      background: white;
                      border: 2px solid ${color};
                      border-radius: 999px;
                      padding: 2px 7px;
                      font-size: 10px;
                      font-weight: 900;
                      color: ${color};
                      box-shadow: 0 2px 5px rgba(0,0,0,0.18);
                      white-space: nowrap;
                      line-height: 1;
                      font-family: -apple-system, BlinkMacSystemFont, 'Inter', system-ui, sans-serif;
                    ">
                      <span style="font-size: 12px; line-height: 1;">${emoji}</span>
                      ${minutesLabel ? `<span style="line-height: 1;">${minutesLabel}</span>` : ''}
                    </div>
                  </div>
                `,
                iconSize: [W, H],
                iconAnchor: [W / 2, H / 2],
              })}
            />
          );
        })}

        {/* Marker rendering — uses each event's specific placeEmoji when set
            (✈️ / 🛂 / 🍷 / 🏖️ / etc), falling back to the place_type emoji. */}
        {validStops.map((stop, i) => {
          const emoji = stop.emoji || getPlaceEmoji(stop.place_type);
          return (
            <Marker
              key={`real-${i}`}
              position={[stop.lat, stop.lng]}
              icon={L.divIcon({
                className: '',
                html: `
                  <div class="group relative flex items-center justify-center" style="width: 44px; height: 44px;">
                    <div style="
                      width: 44px;
                      height: 44px;
                      background: white;
                      border: 2px solid #D4AF37;
                      border-radius: 50%;
                      display: flex;
                      align-items: center;
                      justify-content: center;
                      box-shadow: 0 4px 12px rgba(0,0,0,0.15);
                      transition: all 0.2s ease;
                      font-size: 24px;
                      line-height: 1;
                    ">
                      ${emoji}
                    </div>
                    <div style="
                      position: absolute;
                      top: -2px;
                      right: -2px;
                      background: #D4AF37;
                      color: white;
                      border-radius: 50%;
                      width: 18px;
                      height: 18px;
                      font-size: 9px;
                      font-weight: 900;
                      display: flex;
                      align-items: center;
                      justify-content: center;
                      border: 2px solid white;
                      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
                    ">
                      ${stop.visit_order}
                    </div>
                  </div>
                `,
                iconSize: [44, 44],
                iconAnchor: [22, 22],
              })}
              eventHandlers={{
                click: () => setSelectedStop(stop),
              }}
            />
          );
        })}
      </MapContainer>

      {/* Transit detail modal — opens when a transit pill is tapped */}
      <AnimatePresence>
        {selectedLeg && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedLeg(null)}
              className="absolute inset-0 z-[999] bg-med-dark/40 backdrop-blur-[2px]"
            />
            <motion.div
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 40, opacity: 0 }}
              transition={{ type: 'spring', damping: 26, stiffness: 320 }}
              className="absolute inset-x-3 bottom-3 top-auto sm:inset-x-6 sm:bottom-6 z-[1001] bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden max-h-[85%] flex flex-col"
            >
              {/* Header */}
              <div
                className="px-5 py-4 flex items-start justify-between gap-3 border-b border-gray-100"
                style={{
                  background:
                    selectedLeg.type === 'Driving'
                      ? 'linear-gradient(135deg, #f5f5f5 0%, #ffffff 100%)'
                      : selectedLeg.type === 'Bus'
                        ? 'linear-gradient(135deg, #dcfce7 0%, #ffffff 100%)'
                        : selectedLeg.type === 'Metro'
                          ? 'linear-gradient(135deg, #fee2e2 0%, #ffffff 100%)'
                          : selectedLeg.type === 'Flight'
                            ? 'linear-gradient(135deg, #fef3c7 0%, #ffffff 100%)'
                            : 'linear-gradient(135deg, #f3f4f6 0%, #ffffff 100%)',
                }}
              >
                <div className="min-w-0 flex items-start gap-3">
                  <div
                    className="w-11 h-11 rounded-2xl flex items-center justify-center text-2xl shrink-0 bg-white shadow-sm border"
                    style={{ borderColor: TRANSPORT_COLOR[selectedLeg.type] || '#6b7280' }}
                  >
                    {TRANSPORT_EMOJI[selectedLeg.type] || '🚶'}
                  </div>
                  <div className="min-w-0">
                    <p className="text-[9px] font-black text-gray-400 uppercase tracking-[0.25em] leading-none mb-1">
                      How to get there
                    </p>
                    <p className="text-[15px] font-black text-med-dark leading-tight tracking-tight truncate">
                      {selectedLeg.fromName} <span className="text-gray-300">→</span> {selectedLeg.toName}
                    </p>
                    {selectedLeg.minutes && (
                      <p
                        className="text-[10px] font-black uppercase tracking-widest mt-1.5"
                        style={{ color: TRANSPORT_COLOR[selectedLeg.type] || '#6b7280' }}
                      >
                        ~{selectedLeg.minutes} min · recommended
                      </p>
                    )}
                  </div>
                </div>
                <button
                  onClick={() => setSelectedLeg(null)}
                  className="w-9 h-9 bg-white border border-gray-100 rounded-xl text-gray-400 hover:text-med-coral transition-colors shrink-0 flex items-center justify-center"
                  aria-label="Close"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Body — options */}
              <div className="overflow-y-auto px-5 py-4 space-y-2.5">
                {selectedLeg.transit?.options && selectedLeg.transit.options.length > 0 ? (
                  selectedLeg.transit.options.map((opt, i) => {
                    const baseEmoji =
                      opt.method === 'Cabify Kids' ? '🚕' :
                      opt.method === 'Family Car' ? '🚗' :
                      opt.method === 'Pre-booked Car' ? '🚗' :
                      opt.method === 'Metro' ? '🚇' :
                      opt.method === 'Bus' ? '🚌' :
                      '🚶';
                    const clean = opt.details.replace(/⭐ |🚕 |🚶 |🚌 |🚇 /g, '');
                    return (
                      <button
                        key={i}
                        onClick={() => opt.bookingUrl && openExternal(opt.bookingUrl)}
                        disabled={!opt.bookingUrl}
                        className={`w-full text-left px-3.5 py-3 rounded-2xl border flex items-start gap-3 transition-all ${
                          opt.isRecommended
                            ? 'bg-white border-med-blue/30 shadow-md ring-1 ring-med-blue/15'
                            : 'bg-gray-50 border-gray-100'
                        } ${opt.bookingUrl ? 'hover:scale-[1.01] active:scale-[0.99] cursor-pointer' : 'cursor-default'}`}
                      >
                        <span className="text-xl leading-none mt-0.5">{baseEmoji}</span>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-1.5 mb-0.5">
                            <p className="text-[11px] font-black text-med-dark uppercase tracking-wider">
                              {opt.method}
                            </p>
                            {opt.isRecommended && (
                              <span className="inline-flex items-center gap-0.5 text-[8px] font-black text-med-blue uppercase tracking-widest bg-med-blue/10 px-1.5 py-0.5 rounded">
                                <Star className="w-2.5 h-2.5 fill-med-blue text-med-blue" /> Pick
                              </span>
                            )}
                          </div>
                          <p className="text-[11px] font-bold text-gray-600 leading-snug">
                            {clean}
                          </p>
                        </div>
                        {opt.bookingUrl && (
                          <ExternalLink className="w-3.5 h-3.5 text-med-blue shrink-0 mt-0.5" />
                        )}
                      </button>
                    );
                  })
                ) : (
                  <p className="text-xs font-bold text-gray-400 italic px-1">
                    {selectedLeg.minutes
                      ? `Approx. ${selectedLeg.minutes} min by ${selectedLeg.type.toLowerCase()}.`
                      : 'No transit details recorded for this leg.'}
                  </p>
                )}

                {selectedLeg.transit?.insight && (
                  <div className="mt-3 p-3 rounded-2xl bg-med-yellow/15 border border-med-yellow/40 flex items-start gap-2">
                    <Info className="w-3.5 h-3.5 text-med-yellow-dark mt-0.5 shrink-0" />
                    <p className="text-[11px] font-bold text-med-dark leading-snug">
                      {selectedLeg.transit.insight}
                    </p>
                  </div>
                )}
              </div>

              {/* Footer — open in maps */}
              <div className="px-5 pb-4 pt-2 border-t border-gray-50">
                <button
                  onClick={() => {
                    // Use the name+city query strings (e.g. "Sagrada Familia
                    // Barcelona") so Google Maps directions resolves each end
                    // to the right place page, not bare coords.
                    openExternal(`https://www.google.com/maps/dir/?api=1&origin=${encodeURIComponent(selectedLeg.fromQuery || selectedLeg.fromName)}&destination=${encodeURIComponent(selectedLeg.toQuery || selectedLeg.toName)}`);
                  }}
                  className="w-full py-3 bg-med-dark text-white rounded-2xl text-[10px] font-black uppercase tracking-[0.2em] flex items-center justify-center gap-2 active:scale-[0.98] transition-transform"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  Open route in Google Maps
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Bottom Sheet UI */}
      <AnimatePresence>
        {selectedStop && (
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            className="absolute bottom-4 left-4 right-4 z-[1000] bg-white rounded-2xl shadow-2xl border border-gray-100 p-4 transition-all"
          >
            <div
              className="flex items-center justify-between gap-4 cursor-pointer"
              onClick={() => {
                // Prefer the canonical name+city URL from the data file —
                // the same one used in the itinerary list, so taps from the
                // map and from the timeline always land on the same Google
                // Maps place page. Fall back to address only if no canonical
                // URL is set.
                const url =
                  selectedStop.mapsUrl ||
                  `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(selectedStop.address || selectedStop.name)}`;
                openExternal(url);
              }}
            >
              <div className="flex items-center gap-3 min-w-0">
                <div className="w-12 h-12 bg-med-blue/10 rounded-2xl flex items-center justify-center shrink-0 shadow-inner text-2xl">
                  {selectedStop.emoji || getPlaceEmoji(selectedStop.place_type)}
                </div>
                <div className="min-w-0">
                  <h3 className="text-lg font-black text-med-dark truncate tracking-tight">
                    {selectedStop.visit_order}. {selectedStop.name}
                  </h3>
                  <p className="text-[10px] font-bold text-med-blue uppercase tracking-widest flex items-center gap-1">
                    <Navigation className="w-2.5 h-2.5" /> Tap to navigate
                  </p>
                </div>
              </div>
              
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedStop(null);
                }}
                className="p-2 bg-gray-50 rounded-xl text-gray-400 hover:text-med-coral transition-colors"
                title="Close"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      </div>
    </div>
  );
};

