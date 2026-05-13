import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Clock, Navigation, ExternalLink, Ticket, ChevronLeft, ChevronRight, Calendar, Star, Map, X, Info, Sun, Cloud, CloudRain, CloudSun } from 'lucide-react';
import { ITINERARY_DATA } from '../data/itinerary';
import { TICKETS } from '../data/logistics';
import { TimelineEvent, BabyMode, TicketInfo, WeatherForecastDay } from '../types';
import { DailyMap, MapStop } from './DailyMap';
import { LOCATION_COORDINATES } from '../data/locations';

const TicketInfoModal: React.FC<{ 
  ticket: TicketInfo; 
  isOpen: boolean; 
  onClose: () => void 
}> = ({ ticket, isOpen, onClose }) => {
  if (!ticket.details) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-med-dark/60 backdrop-blur-xl"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative bg-white w-full max-w-lg rounded-[2.5rem] shadow-2xl overflow-hidden flex flex-col max-h-[85vh]"
          >
            {/* Header */}
            <div className="p-6 bg-gray-50 border-b border-gray-100 flex justify-between items-center">
              <div>
                <h3 className="text-xl font-black text-med-dark uppercase leading-none mb-1">Ticket Information</h3>
                <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest leading-none">{ticket.name}</p>
              </div>
              <button 
                onClick={onClose}
                className="p-2 bg-white border border-gray-100 rounded-2xl text-gray-400 hover:text-med-coral transition-colors shadow-sm active:scale-95"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Content */}
            <div className="p-6 overflow-y-auto custom-scrollbar">
              <div className="space-y-8">
                {ticket.details.map((section, idx) => (
                  <div key={idx} className="relative pl-6 border-l-2 border-med-coral/10">
                    <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-med-coral shadow-[0_0_10px_rgba(235,108,102,0.4)] ring-4 ring-white" />
                    <h4 className="text-sm font-black text-med-coral uppercase tracking-wider mb-2">{section.title}</h4>
                    <p className="text-xs font-medium text-med-dark leading-relaxed mb-3 whitespace-pre-wrap">
                       {section.content}
                    </p>
                    
                    {section.items && section.items.length > 0 && (
                      <div className="space-y-2 mb-4">
                        {section.items.map((item, i) => (
                          <div key={i} className="flex items-start gap-2 bg-gray-50 p-2.5 rounded-xl border border-gray-100">
                            <div className="w-1.5 h-1.5 rounded-full bg-med-coral/40 mt-1.5 flex-shrink-0" />
                            <p className="text-xs font-bold text-med-dark">{item}</p>
                          </div>
                        ))}
                      </div>
                    )}

                    {section.links && section.links.length > 0 && (
                      <div className="grid grid-cols-1 gap-2">
                        {section.links.map((link, i) => (
                          <button
                            key={i}
                            onClick={() => window.open(link.url, '_blank')}
                            className="flex items-center justify-between gap-3 p-3 bg-white border border-gray-100 rounded-2xl hover:border-med-coral hover:bg-coral-50/30 transition-all group"
                          >
                            <span className="text-[10px] font-black text-med-dark uppercase tracking-tight">{link.label}</span>
                            <ExternalLink className="w-3.5 h-3.5 text-med-coral group-hover:translate-x-0.5 transition-transform" />
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Footer */}
            <div className="p-6 border-t border-gray-100 bg-gray-50/50 flex flex-col gap-3">
              {ticket.bookingUrl && (
                <button
                  onClick={() => window.open(ticket.bookingUrl, '_blank')}
                  className="w-full py-4 bg-med-coral text-white rounded-3xl text-xs font-black uppercase tracking-widest flex items-center justify-center gap-2 shadow-lg shadow-med-coral/10 hover:scale-[1.02] active:scale-[0.98] transition-all"
                >
                  <ExternalLink className="w-4 h-4" />
                  Official Site
                </button>
              )}
              <p className="text-[10px] font-bold text-gray-400 text-center uppercase tracking-widest">
                Please verify details on your official ticket
              </p>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

interface ItineraryTabProps {
  currentDayIndex: number;
  setCurrentDayIndex: (idx: number) => void;
  liveStatus: {
    current: string;
    nextNapMins: number | null;
    isNapping: boolean;
    eventIndex: number;
  };
  onStickyChange?: (isSticky: boolean) => void;
}

const TransitIcon = ({ method }: { method: string }) => {
  switch (method) {
    case 'Walking': return '🚶';
    case 'Bus': return '🚌';
    case 'Metro': return '🚇';
    case 'Cabify Kids': return '🚕';
    default: return '➡️';
  }
};

const getMetroLineInfo = (details: string) => {
  if (details.includes('L1')) return { bg: 'bg-red-50', text: 'text-red-700', border: 'border-red-200' };
  if (details.includes('L2')) return { bg: 'bg-purple-50', text: 'text-purple-700', border: 'border-purple-200' };
  if (details.includes('L3')) return { bg: 'bg-green-50', text: 'text-green-700', border: 'border-green-200' };
  if (details.includes('L4')) return { bg: 'bg-amber-50', text: 'text-amber-700', border: 'border-amber-200' };
  if (details.includes('L5')) return { bg: 'bg-blue-50', text: 'text-blue-700', border: 'border-blue-200' };
  return null;
};

const WeatherDetailModal: React.FC<{ 
  day: WeatherForecastDay | null; 
  isOpen: boolean; 
  onClose: () => void 
}> = ({ day, isOpen, onClose }) => {
  if (!day) return null;

  const cond = day.conditions.toLowerCase();
  const isRainy = cond.includes('rain');
  const isPartly = cond.includes('partly') || cond.includes('cloud');
  const isSunny = cond.includes('sunny') && !isPartly;

  let HeaderIcon = Cloud;
  if (isRainy) HeaderIcon = CloudRain;
  else if (isPartly) HeaderIcon = CloudSun;
  else if (isSunny) HeaderIcon = Sun;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-med-dark/60 backdrop-blur-xl"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative bg-white w-full max-w-sm rounded-[2.5rem] shadow-2xl overflow-hidden flex flex-col"
          >
            {/* Header */}
            <div className="p-6 bg-med-blue border-b border-white/10 flex justify-between items-center text-white">
              <div className="flex items-center gap-3">
                <HeaderIcon className="w-5 h-5 text-med-yellow" />
                <div>
                  <h3 className="text-xl font-black uppercase leading-none mb-1">Weather Forecast</h3>
                  <p className="text-[10px] font-black text-white/60 uppercase tracking-widest leading-none">{day.date} • Day {day.tripDay}</p>
                </div>
              </div>
              <button 
                onClick={onClose}
                className="p-2 bg-white/10 border border-white/10 rounded-2xl text-white hover:bg-white/20 transition-all shadow-sm active:scale-95"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Content */}
            <div className="p-6 space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-50 p-4 rounded-3xl border border-gray-100 flex flex-col items-center justify-center text-center">
                  <p className="text-[8px] font-black text-gray-400 uppercase tracking-widest mb-1">High / Low</p>
                  <p className="text-2xl font-black text-med-dark">{day.high} / {day.low}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-3xl border border-gray-100 flex flex-col items-center justify-center text-center">
                  <p className="text-[8px] font-black text-gray-400 uppercase tracking-widest mb-1">Conditions</p>
                  <p className="text-xs font-black text-med-dark uppercase leading-tight">{day.conditions}</p>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-2xl border border-gray-100">
                  <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">RealFeel®</span>
                  <span className="text-xs font-black text-med-dark">{day.realFeelHigh} High / {day.realFeelShade} Shade</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-2xl border border-gray-100">
                  <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Precipitation</span>
                  <span className="text-xs font-black text-med-dark">{day.precipProb}</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-2xl border border-gray-100">
                  <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Cloud Coverage</span>
                  <span className="text-xs font-black text-med-dark">{day.cloudCover}</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-2xl border border-gray-100">
                  <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Max UV Index</span>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-black text-med-dark">{day.uvIndex} ({day.uvLevel})</span>
                    <div className={`w-2 h-2 rounded-full ${day.uvIndex >= 11 ? 'bg-purple-500' : day.uvIndex >= 8 ? 'bg-red-500' : 'bg-orange-500'}`} />
                  </div>
                </div>
              </div>

              <button 
                onClick={() => window.open(day.accuweatherUrl, '_blank')}
                className="w-full py-4 bg-med-dark text-white rounded-3xl text-[10px] font-black uppercase tracking-widest flex items-center justify-center gap-2 shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all"
              >
                Full AccuWeather Details
                <ExternalLink className="w-3.5 h-3.5" />
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

const DailyMapModal: React.FC<{
  isOpen: boolean;
  onClose: () => void;
  currentDay: any;
  currentDayIndex: number;
}> = ({ isOpen, onClose, currentDay, currentDayIndex }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-med-dark/90 backdrop-blur-xl"
          />
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative w-full max-w-4xl max-h-[90vh] bg-white rounded-[2rem] overflow-hidden shadow-2xl flex flex-col"
          >
            <div className="px-6 py-4 bg-med-blue flex items-center justify-between">
              <div className="flex items-center gap-3 text-white">
                <Map className="w-5 h-5 text-med-yellow" />
                <div>
                  <h3 className="font-black text-sm uppercase tracking-wider">Day {currentDay.dayNumber} Route</h3>
                  <p className="text-white/60 text-[10px] font-bold uppercase">{currentDay.date}</p>
                </div>
              </div>
              <button 
                onClick={onClose}
                className="p-2 bg-white/10 hover:bg-white/20 rounded-xl transition-colors text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <div className="flex-1 min-h-[400px]">
              {(() => {
                const isSitges = currentDayIndex >= 8;
                const hotelName = isSitges ? "InSitges Ribera's Beach" : "Stay U-nique Apartments Pau Claris";
                const hotelCoords = LOCATION_COORDINATES[hotelName];

                const getTransportType = (method: string): 'Driving' | 'Walking' | 'Transit' => {
                  const m = method.toLowerCase();
                  if (m.includes('cabify') || m.includes('driving')) return 'Driving';
                  if (m.includes('metro') || m.includes('bus') || m.includes('train')) return 'Transit';
                  return 'Walking';
                };

                /** Pick the recommended transit option (or first), parse "(45 min)" out of its details. */
                const summarizeTransit = (transit: any | undefined): { type: 'Driving' | 'Walking' | 'Transit'; minutes?: number } | null => {
                  if (!transit?.options?.length) return null;
                  const opt = transit.options.find((o: any) => o.isRecommended) || transit.options[0];
                  const match = (opt.details || '').match(/(\d+)\s*min/i);
                  return {
                    type: getTransportType(opt.method),
                    minutes: match ? parseInt(match[1], 10) : undefined,
                  };
                };

                const eventStops: MapStop[] = currentDay.events.map((event: any, i: number) => {
                  const loc = event.location.toLowerCase();
                  let coords = LOCATION_COORDINATES[event.location];

                  if (!coords && (loc.includes('home') || loc.includes('apartment'))) {
                    coords = hotelCoords;
                  }

                  const finalCoords = coords || { lat: 0, lng: 0 };
                  const nextEvent = currentDay.events[i + 1];

                  let placeType = 'attraction';
                  if (loc.includes('apartment') || loc.includes('stay u-nique') || loc.includes('home') || loc.includes('ribera')) {
                    placeType = 'hotel';
                  } else if (loc.includes('dinner') || loc.includes('lunch') || loc.includes('bar') || loc.includes('tapas') || loc.includes('catalana') || loc.includes('mut') || loc.includes('tomate') || loc.includes('bormuth')) {
                    placeType = 'restaurant';
                  } else if (event.placeEmoji === '🌳' || event.placeEmoji === '🎡' || loc.includes('park') || loc.includes('laberint')) {
                    placeType = 'park';
                  } else if (event.placeEmoji === '🏖️' || loc.includes('beach') || loc.includes('platja')) {
                    placeType = 'beach';
                  } else if (event.placeEmoji === '✈️' || event.placeEmoji === '🛬' || loc.includes('992') || loc.includes('transfer') || loc.includes('transit')) {
                    placeType = 'transit';
                  }

                  // Transit data describing the leg FROM this event TO the next can live
                  // on EITHER event. Prefer the NEXT event's transit (which describes
                  // arriving at the next stop — the common pattern), and fall back to
                  // THIS event's transit (used by Day 0 "Depart Alexandria" → IAD).
                  const legTransit =
                    nextEvent?.transit ||
                    event?.transit ||
                    undefined;
                  const legSummary = summarizeTransit(legTransit);

                  return {
                    lat: finalCoords.lat,
                    lng: finalCoords.lng,
                    name: event.location,
                    address: event.address,
                    visit_order: i + 1,
                    place_type: placeType,
                    emoji: event.placeEmoji,
                    transport_to_next: legSummary?.type || 'Walking',
                    transit_minutes: legSummary?.minutes,
                    transit_info: legTransit,
                  };
                });

                const finalStops: MapStop[] = [];
                let endedAtHotel = false;
                let hotelStopIndex = -1; // tracks where the hotel marker lives in finalStops

                // Arrival days (e.g. Day 1: you land at BCN before the hotel exists
                // in your journey) start at an external location — their first
                // event has no `transit` field. On those days we DON'T prepend the
                // hotel: the natural event order is correct.
                const firstEvent = currentDay.events[0];
                const isArrivalDay = currentDayIndex > 0 && !firstEvent?.transit;
                const prependHotel = currentDayIndex > 0 && !isArrivalDay && !!hotelCoords;

                if (prependHotel) {
                  const firstLeg = summarizeTransit(firstEvent?.transit);
                  finalStops.push({
                    lat: hotelCoords.lat,
                    lng: hotelCoords.lng,
                    name: 'Home Base',
                    address: isSitges ? "Passeig de la Ribera, 41" : "Carrer de Pau Claris, 99",
                    visit_order: 1,
                    place_type: 'hotel',
                    transport_to_next: firstLeg?.type || 'Walking',
                    transit_minutes: firstLeg?.minutes,
                    transit_info: firstEvent?.transit,
                  });
                  hotelStopIndex = 0;
                }

                // Add event stops, with TWO kinds of deduplication:
                //  1. Consecutive same-coord merge — Day 0's 9 events at IAD become
                //     a single map stop. The previous stop inherits the merged event's
                //     transport data forward.
                //  2. Hotel dedup — any non-consecutive event at hotel coords is skipped
                //     (so "Back Home" doesn't add a duplicate marker).
                eventStops.forEach((stop, idx) => {
                  const isAtHotel =
                    stop.place_type === 'hotel' ||
                    (hotelCoords && stop.lat === hotelCoords.lat && stop.lng === hotelCoords.lng);

                  const prev = finalStops[finalStops.length - 1];
                  const sharesCoordsWithPrev =
                    prev && prev.lat === stop.lat && prev.lng === stop.lng;

                  if (sharesCoordsWithPrev) {
                    // Merge: this event happens at the same physical place as the previous
                    // marker — don't add a new dot. Carry its onward transit info forward
                    // so the line LEAVING this merged stop reflects the latest event's plan.
                    prev.transport_to_next = stop.transport_to_next || prev.transport_to_next;
                    prev.transit_minutes = stop.transit_minutes ?? prev.transit_minutes;
                    prev.transit_info = stop.transit_info ?? prev.transit_info;
                    if (isAtHotel && idx === eventStops.length - 1) endedAtHotel = true;
                    return;
                  }

                  if (isAtHotel && hotelStopIndex !== -1) {
                    // Already have a hotel marker elsewhere — skip and flag the loop.
                    if (idx === eventStops.length - 1) endedAtHotel = true;
                    return;
                  }

                  finalStops.push({
                    ...stop,
                    visit_order: finalStops.length + 1,
                  });
                  if (isAtHotel && hotelStopIndex === -1) {
                    hotelStopIndex = finalStops.length - 1;
                  }
                });

                return (
                  <DailyMap
                    dayData={finalStops}
                    loopBackToIndex={endedAtHotel && hotelStopIndex >= 0 ? hotelStopIndex : undefined}
                  />
                );
              })()}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export const ItineraryTab = ({ currentDayIndex, setCurrentDayIndex, liveStatus, onStickyChange }: ItineraryTabProps) => {
  const currentDay = ITINERARY_DATA[currentDayIndex];
  const [showSticky, setShowSticky] = React.useState(false);
  const [isMapOpen, setIsMapOpen] = React.useState(false);
  const [selectedTicket, setSelectedTicket] = React.useState<TicketInfo | null>(null);
  const [selectedWeatherDay, setSelectedWeatherDay] = React.useState<WeatherForecastDay | null>(null);

  const daySelectorRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Show sticky banner when the main day selector is NOT visible
        const isSticky = !entry.isIntersecting;
        setShowSticky(isSticky);
        onStickyChange?.(isSticky);
      },
      { threshold: 0, rootMargin: '-42px 0px 0px 0px' } // 42px is approx height of sticky live bar
    );

    if (daySelectorRef.current) {
      observer.observe(daySelectorRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Ensure we start at the top when changing days
  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' as any });
  }, [currentDayIndex]);

  const nextDay = () => {
    if (currentDayIndex < ITINERARY_DATA.length - 1) {
      setCurrentDayIndex(currentDayIndex + 1);
    }
  };

  const prevDay = () => {
    if (currentDayIndex > 0) {
      setCurrentDayIndex(currentDayIndex - 1);
    }
  };

  const openInMaps = (address: string) => {
    const url = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;
    window.open(url, '_blank');
  };

  const openRouteInMaps = (from: string, to: string) => {
    const url = `https://www.google.com/maps/dir/?api=1&origin=${encodeURIComponent(from)}&destination=${encodeURIComponent(to)}&travelmode=transit`;
    window.open(url, '_blank');
  };

  return (
    <div className="relative">
      <AnimatePresence>
        {showSticky && (
          <motion.div
            initial={{ y: -50, opacity: 0 }}
            animate={{ 
              y: 0,
              opacity: 1 
            }}
            exit={{ y: -50, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
            className="fixed top-[52px] left-0 right-0 z-40 px-4 pointer-events-none"
          >
            <div className="max-w-md mx-auto bg-med-dark/95 backdrop-blur-xl rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.3)] border border-white/20 p-2 flex items-center justify-between pointer-events-auto ring-1 ring-med-coral/40">
              <button 
                onClick={prevDay} 
                disabled={currentDayIndex === 0}
                className="p-2.5 bg-white/5 hover:bg-white/10 rounded-xl disabled:opacity-5 active:scale-90 transition-all text-white border border-white/5"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              
              <div className="flex flex-col items-center px-4 overflow-hidden flex-1">
                <div className="flex items-center gap-2 mb-0.5">
                  <div className="h-1 w-1 rounded-full bg-med-coral animate-pulse" />
                  <span className="text-[9px] font-black text-med-coral uppercase tracking-[0.2em]">{currentDay.date}</span>
                </div>
                <h3 className="text-[11px] font-black text-white tracking-widest truncate w-full text-center uppercase">
                  DAY {currentDay.dayNumber}: {currentDay.title}
                </h3>
              </div>

              <div className="flex items-center gap-1">
                <button 
                  onClick={nextDay} 
                  disabled={currentDayIndex === ITINERARY_DATA.length - 1}
                  className="p-2.5 bg-white/5 hover:bg-white/10 rounded-xl disabled:opacity-5 active:scale-90 transition-all text-white border border-white/5"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Day Selector */}
      <div ref={daySelectorRef} className="flex items-center justify-between mb-8">
        <button 
          onClick={prevDay} 
          disabled={currentDayIndex === 0}
          className="p-3 bg-white rounded-2xl shadow-sm border border-gray-100 disabled:opacity-20 hover:scale-105 active:scale-95 transition-all"
        >
          <ChevronLeft className="w-6 h-6 text-med-blue" />
        </button>
        
        <div className="text-center">
          <div className="px-4 py-1.5 bg-med-blue/10 text-med-blue rounded-full text-[10px] font-black uppercase tracking-widest mb-1">
            {currentDay.date}
          </div>
          <h2 className="text-2xl font-black text-med-dark capitalize font-display">Day {currentDay.dayNumber}</h2>
        </div>

        <button 
          onClick={nextDay} 
          disabled={currentDayIndex === ITINERARY_DATA.length - 1}
          className="p-3 bg-white rounded-2xl shadow-sm border border-gray-100 disabled:opacity-20 hover:scale-105 active:scale-95 transition-all"
        >
          <ChevronRight className="w-6 h-6 text-med-blue" />
        </button>
      </div>

      {/* Day Title Card */}
      <div className="mb-6 text-center">
        <h2 className="text-5xl md:text-7xl font-black mb-4 leading-[0.85] text-med-blue drop-shadow-sm uppercase font-display">
          {currentDay.title}
        </h2>
        <div className="flex items-center justify-center gap-2 mt-4">
          <button
            onClick={() => currentDay.weatherDetail && setSelectedWeatherDay(currentDay.weatherDetail)}
            className="inline-flex items-center justify-center gap-2 px-4 py-1.5 bg-white rounded-full shadow-sm border border-gray-100 hover:bg-gray-50 active:scale-95 transition-all"
          >
            <p className="text-[11px] font-black text-med-dark leading-none whitespace-nowrap">{currentDay.weather}</p>
          </button>
          <button 
            onClick={() => setIsMapOpen(true)}
            className="inline-flex items-center justify-center gap-2 px-4 py-1.5 bg-white rounded-full shadow-sm border border-gray-100 hover:bg-gray-50 active:scale-95 transition-all text-med-blue"
          >
            <Map className="w-3.5 h-3.5" />
            <span className="text-[11px] font-black uppercase tracking-widest">Route Map</span>
          </button>
        </div>
      </div>

      {/* Timeline */}
      <div className="space-y-4">
        {currentDay.events.map((event, index) => (
          <React.Fragment key={index}>
            {event.transit && (
              <div className={`flex flex-col items-center ${index === 0 ? 'pb-2' : 'py-2'}`}>
                {index > 0 && <div className="w-1 h-8 bg-gradient-to-b from-gray-200 to-med-blue/20 rounded-full mb-2" />}
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="w-full max-w-[280px] bg-med-dark/5 backdrop-blur-sm rounded-2xl p-4 border border-med-blue/10 shadow-sm"
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <span className="text-sm">🚀</span>
                      <div className="flex flex-col">
                        <p className="text-[10px] font-black text-med-blue uppercase tracking-widest">Transit Journey</p>
                        {event.transit.departureTime && (
                          <p className="text-[9px] font-black text-med-coral uppercase animate-pulse">Leave by {event.transit.departureTime}</p>
                        )}
                      </div>
                    </div>
                    <button 
                      onClick={() => openRouteInMaps(event.transit!.from, event.transit!.to)}
                      className="p-2 bg-white rounded-xl shadow-sm border border-gray-100 text-med-blue hover:scale-110"
                    >
                      <Navigation className="w-4 h-4" />
                    </button>
                  </div>
                  <div className="flex flex-col gap-2">
                    {event.transit.options.map((opt, i) => {
                      const isClickable = !!opt.bookingUrl;
                      const metroInfo = opt.method === 'Metro' ? getMetroLineInfo(opt.details) : null;
                      
                      const baseClasses = `px-3 py-2 rounded-xl border text-[10px] font-bold flex items-center gap-2 transition-all ${isClickable ? 'cursor-pointer hover:scale-[1.02] active:scale-[0.98]' : ''}`;
                      
                      let appearanceClasses = '';
                      if (metroInfo) {
                        appearanceClasses = `${metroInfo.bg} ${metroInfo.text} ${metroInfo.border} shadow-sm`;
                        if (opt.isRecommended) {
                          appearanceClasses += ' ring-2 ring-offset-1 ring-med-blue/30';
                        }
                      } else if (opt.isRecommended) {
                        appearanceClasses = 'bg-white border-med-blue/30 text-med-dark shadow-md ring-1 ring-med-blue/20';
                      } else {
                        appearanceClasses = 'bg-gray-50/50 border-transparent text-gray-400 opacity-80';
                      }

                      return (
                        <div 
                          key={i} 
                          onClick={() => opt.bookingUrl && window.open(opt.bookingUrl, '_blank')}
                          className={`${baseClasses} ${appearanceClasses}`}
                        >
                          <span className="text-base">{TransitIcon({ method: opt.method })}</span>
                          <span className="flex-1 truncate">{opt.details.replace(/⭐ |🚕 |🚶 |🚌 |🚇 /g, '')}</span>
                          {isClickable && <ExternalLink className="w-3 h-3" />}
                        </div>
                      );
                    })}
                  </div>
                  <p className="text-[10px] font-bold text-med-blue/80 italic leading-tight px-1 mt-3">
                    {event.transit.insight}
                  </p>
                </motion.div>
                <div className="w-1 h-8 bg-gradient-to-b from-med-blue/20 to-gray-200 rounded-full mt-2" />
              </div>
            )}

            <motion.div 
              id={`event-${index}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className={`bg-white rounded-[2.5rem] p-6 shadow-[0_10px_30px_-10px_rgba(0,119,182,0.15)] border border-white relative overflow-hidden group ${event.babyMode === 'Nap' ? 'bg-gradient-to-br from-white to-indigo-50/30' : ''}`}
            >
              <div className={`absolute top-0 left-0 w-2 h-full ${event.babyMode === 'Nap' ? 'bg-indigo-400' : index % 3 === 0 ? 'bg-med-orange' : index % 3 === 1 ? 'bg-med-azure' : 'bg-med-coral'}`} />
              
              <div className="flex flex-col gap-4">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-3">
                  <div className="flex items-center gap-3 shrink-0">
                    <div className="flex items-center gap-2">
                      <div className="text-2xl font-black tabular-nums tracking-tighter text-med-dark">{event.time}</div>
                      {event.placeEmoji && <span className="text-xl">{event.placeEmoji}</span>}
                    </div>
                    {event.babyMode === 'Nap' && (
                       <span className="px-2 py-0.5 bg-indigo-100 text-indigo-600 rounded-full text-[8px] font-black uppercase tracking-widest border border-indigo-200/50">Nap</span>
                    )}
                  </div>
                  <div className="flex gap-2">
                    {event.gear !== 'N/A' && (
                      <div className="px-2 py-1 rounded-lg text-[8px] font-black bg-gray-50 border border-gray-100 uppercase tracking-widest">{event.gear}</div>
                    )}
                    {(() => {
                      const ticket = TICKETS.find(t => t.name.toLowerCase().includes(event.location.toLowerCase()) || event.location.toLowerCase().includes(t.name.toLowerCase()));
                      return (
                        <div className="flex gap-2">
                          {ticket?.details && (
                            <button 
                              onClick={() => setSelectedTicket(ticket)}
                              className="p-1.5 bg-med-coral/10 rounded-lg text-med-coral hover:bg-med-coral hover:text-white transition-all shadow-sm active:scale-90"
                            >
                              <Info className="w-3 h-3" />
                            </button>
                          )}
                          {event.prebookInfo?.required && (
                            <button 
                              onClick={() => {
                                if (ticket) {
                                  window.location.hash = ticket.id;
                                } else {
                                  window.scrollTo({ top: 0, behavior: 'smooth' });
                                  // This is a fallback if no specific ticket is found but it's marked as booked
                                  // We at least switch to hub via the App.tsx listener if we set a generic hub hash or state
                                }
                              }}
                              className="bg-med-orange/10 text-med-orange px-3 py-1 rounded-full text-[8px] font-black uppercase tracking-widest border border-med-orange/20 flex items-center gap-1 hover:bg-med-orange hover:text-white transition-all active:scale-95"
                            >
                              <Ticket className="w-3 h-3" /> Booked
                            </button>
                          )}
                        </div>
                      );
                    })()}
                  </div>
                </div>

                <div className="text-left">
                  {event.mapsUrl ? (
                    <div 
                      onClick={() => window.open(event.mapsUrl, '_blank')}
                      className="group/title block cursor-pointer"
                    >
                      <h3 className="text-2xl font-black leading-tight mb-1 text-med-dark group-hover/title:text-med-blue transition-colors flex items-center gap-2">
                        {event.location}
                        <ExternalLink className="w-4 h-4 opacity-0 group-hover/title:opacity-100 transition-opacity" />
                      </h3>
                    </div>
                  ) : (
                    <h3 className="text-2xl font-black leading-tight mb-1 text-med-dark">{event.location}</h3>
                  )}
                  <button 
                    onClick={() => event.mapsUrl ? window.open(event.mapsUrl, '_blank') : openInMaps(event.address)} 
                    className="flex items-center justify-start gap-1 text-med-azure text-[10px] font-black uppercase tracking-wider w-full text-left"
                  >
                    <Navigation className="w-3 h-3 flex-shrink-0" /> {event.address}
                  </button>
                </div>

                <p className="text-gray-500 text-sm font-medium leading-relaxed">{event.description}</p>
                
                {event.recommendedDish && (
                  <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-med-coral/10 via-white to-med-yellow/10 border border-med-coral/20 shadow-sm">
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-med-coral via-med-yellow to-med-coral" />
                    <div className="px-5 pt-5 pb-4 flex items-start gap-4">
                      <div className="shrink-0 w-12 h-12 rounded-2xl bg-white shadow-md border border-med-coral/10 flex items-center justify-center text-2xl">
                        👨‍🍳
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="flex items-center gap-2 mb-1.5">
                          <p className="text-[9px] font-black text-med-coral uppercase tracking-[0.22em]">Chef's Pick</p>
                          {event.rating && (
                            <div className="flex items-center gap-1 bg-white/80 px-2 py-0.5 rounded-full border border-yellow-100">
                              <Star className="w-2.5 h-2.5 text-yellow-400 fill-yellow-400" />
                              <span className="text-[9px] font-black text-med-dark tabular-nums">{event.rating.toFixed(1)}</span>
                              {event.reviewCount && (
                                <span className="text-[8px] font-bold text-gray-400 tabular-nums">({event.reviewCount.toLocaleString()})</span>
                              )}
                            </div>
                          )}
                        </div>
                        <p className="text-base font-black text-med-dark leading-tight tracking-tight">
                          {event.recommendedDish}
                        </p>
                      </div>
                    </div>
                  </div>
                )}
                
                {event.localsSecret && (
                  <div className="p-3 bg-med-yellow/10 rounded-2xl border border-med-yellow/20 flex items-center gap-3">
                    <span className="text-xl">🤫</span>
                    <p className="text-[10px] font-bold text-med-dark leading-tight">{event.localsSecret}</p>
                  </div>
                )}

                {event.photoOp && (
                  <div className="p-3 bg-med-coral/10 rounded-2xl border border-med-coral/20 flex items-center gap-3">
                    <span className="text-xl">📸</span>
                    <p className="text-[10px] font-bold text-med-dark leading-tight italic">
                      <span className="text-med-coral font-black uppercase tracking-widest mr-1">Instagram Spot:</span> {event.photoOp}
                    </p>
                  </div>
                )}
              </div>
            </motion.div>
          </React.Fragment>
        ))}
      </div>

      <DailyMapModal 
        isOpen={isMapOpen} 
        onClose={() => setIsMapOpen(false)} 
        currentDay={currentDay}
        currentDayIndex={currentDayIndex}
      />

      <WeatherDetailModal 
        day={selectedWeatherDay} 
        isOpen={!!selectedWeatherDay} 
        onClose={() => setSelectedWeatherDay(null)} 
      />

      {selectedTicket && (
        <TicketInfoModal 
          ticket={selectedTicket} 
          isOpen={!!selectedTicket} 
          onClose={() => setSelectedTicket(null)} 
        />
      )}
    </div>
  );
};
