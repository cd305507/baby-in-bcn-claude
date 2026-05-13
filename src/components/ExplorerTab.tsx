import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, Filter, MapPin, Star, Navigation, Baby, ExternalLink, CheckCircle2, Info, Ticket, X, Calendar, Trophy, Sparkles } from 'lucide-react';
import { PLACES_DATA } from '../data/places';
import { TICKETS } from '../data/logistics';
import { ITINERARY_DATA } from '../data/itinerary';
import { PlaceExplorerItem, TicketInfo } from '../types';
import { useTripState } from '../lib/sync';

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

export const ExplorerTab = () => {
  const trip = useTripState();
  const [search, setSearch] = useState('');
  const [activeFilter, setActiveFilter] = useState<string>('All');
  const [selectedTicket, setSelectedTicket] = useState<TicketInfo | null>(null);

  // Places list is bundled in code; isVisited comes from Firestore (when signed in)
  // or from a local fallback (when not).
  const places = useMemo(() => {
    const visited = new Set(trip.visitedIds);
    return PLACES_DATA.map((p) => ({ ...p, isVisited: visited.has(p.id) }));
  }, [trip.visitedIds]);

  const filteredPlaces = useMemo(() => {
    return places.filter(place => {
      const matchesSearch = place.name.toLowerCase().includes(search.toLowerCase());

      let matchesFilter = true;
      if (activeFilter === 'Backups') {
        matchesFilter = !!place.isBackup;
      } else if (activeFilter === 'Sitges') {
        matchesFilter = place.location === 'Sitges';
      } else if (activeFilter !== 'All') {
        matchesFilter = place.category === activeFilter;
      }

      return matchesSearch && matchesFilter;
    });
  }, [search, activeFilter, places]);

  const categories = ['All', 'Sight', 'Restaurant', 'Museum', 'Beach', 'Park', 'Sitges', 'Backups'];

  const toggleVisited = (id: string) => {
    trip.setVisited(id, !trip.visitedIds.includes(id));
  };

  // Trip XP gamification: count visited, derive a level + progress.
  const totalPlaces = places.length;
  const visitedCount = useMemo(() => places.filter(p => p.isVisited).length, [places]);
  const visitedPct = totalPlaces > 0 ? (visitedCount / totalPlaces) * 100 : 0;

  const tripLevel = useMemo(() => {
    if (visitedCount === 0) return { title: 'Newcomer', emoji: '🛬', color: 'text-gray-400' };
    if (visitedCount < 5) return { title: 'Wanderer', emoji: '🚶', color: 'text-med-blue' };
    if (visitedCount < 10) return { title: 'Local Vibes', emoji: '☕', color: 'text-med-azure' };
    if (visitedCount < 15) return { title: 'Like a Native', emoji: '🥘', color: 'text-med-coral' };
    if (visitedCount < totalPlaces) return { title: 'BCN Insider', emoji: '🌆', color: 'text-med-blue' };
    return { title: 'Barcelona Conquered', emoji: '👑', color: 'text-med-yellow' };
  }, [visitedCount, totalPlaces]);

  return (
    <div className="space-y-6">
      {/* Trip XP Header — gamified visited counter */}
      <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-med-blue via-med-blue to-med-azure text-white p-5 shadow-xl shadow-med-blue/20">
        <motion.div
          aria-hidden
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
          className="absolute -top-16 -right-16 w-48 h-48 bg-med-yellow/20 rounded-full blur-3xl pointer-events-none"
        />
        <div className="relative z-10 flex items-start justify-between gap-4 mb-3">
          <div className="min-w-0">
            <p className="text-[9px] font-black text-white/60 uppercase tracking-[0.25em] mb-1">Trip XP</p>
            <h2 className="text-2xl font-black leading-tight tracking-tight flex items-center gap-2">
              <span>{tripLevel.emoji}</span>
              <span>{tripLevel.title}</span>
            </h2>
          </div>
          <div className="text-right shrink-0">
            <p className="text-[8px] font-black text-white/50 uppercase tracking-widest">Visited</p>
            <p className="text-3xl font-black tabular-nums leading-none">
              <span className="text-med-yellow">{visitedCount}</span>
              <span className="text-white/40 text-xl"> / {totalPlaces}</span>
            </p>
          </div>
        </div>
        <div className="relative z-10 h-2 bg-white/15 rounded-full overflow-hidden">
          <motion.div
            initial={false}
            animate={{ width: `${visitedPct}%` }}
            transition={{ type: 'spring', stiffness: 140, damping: 22 }}
            className="h-full bg-gradient-to-r from-med-yellow to-white rounded-full shadow-[0_0_12px_rgba(254,206,2,0.6)]"
          />
        </div>
      </div>

      {/* Search and Filters - Compact Sticky Header */}
      <div className="sticky top-[52px] z-20 bg-med-bg/80 backdrop-blur-xl pt-2 pb-4 space-y-3 -mx-6 px-6 border-b border-gray-100/50">
        <div className="relative group">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 group-focus-within:text-med-blue transition-colors" />
          <input 
            type="text" 
            placeholder="Search attractions..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-white/80 border border-gray-100 rounded-2xl pl-11 pr-4 py-3 text-xs font-bold focus:ring-2 focus:ring-med-blue/20 focus:bg-white focus:outline-none shadow-sm transition-all"
          />
        </div>

        {/* Category Filters (Sitges acts as a location chip) */}
        <div className="flex gap-2 overflow-x-auto no-scrollbar py-1 -mx-6 px-6">
          <div className="flex items-center pr-2 border-r border-gray-100 mr-1 flex-shrink-0">
            <Filter className="w-3 h-3 text-gray-400 mr-1" />
            <span className="text-[8px] font-black text-gray-400 uppercase tracking-tighter">Filter</span>
          </div>
          {categories.map((cat) => {
            const isActive = activeFilter === cat;
            const isSitges = cat === 'Sitges';
            const isBackups = cat === 'Backups';
            return (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat as any)}
                className={`flex-shrink-0 px-4 py-1.5 rounded-full text-[9px] font-black uppercase tracking-widest transition-all duration-300 flex items-center gap-1.5 ${
                  isActive
                    ? (isSitges
                        ? 'bg-med-blue text-white shadow-lg shadow-med-blue/20'
                        : 'bg-med-dark text-white shadow-lg shadow-med-dark/20')
                    : (isBackups
                        ? 'bg-med-yellow/10 text-med-yellow border-med-yellow/20 hover:bg-med-yellow/30'
                        : isSitges
                          ? 'bg-med-blue/10 text-med-blue border border-med-blue/20 hover:bg-med-blue/20'
                          : 'bg-white/50 text-gray-400 hover:text-med-dark border border-gray-100')
                }`}
              >
                {isSitges && <MapPin className="w-2.5 h-2.5" />}
                {isBackups ? 'Extras/Backups' : cat}
              </button>
            );
          })}
        </div>
      </div>

      {/* Places Grid */}
      <div className="grid gap-6">
        <AnimatePresence mode="popLayout">
          {filteredPlaces.map((place) => (
            <motion.div
              layout
              key={place.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-white rounded-[2.5rem] overflow-hidden shadow-sm border border-gray-50 flex flex-col group"
            >
              {/* Image Header */}
              <div className="relative h-64 overflow-hidden bg-gray-100">
                <img 
                  src={place.image} 
                  alt={place.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    if (!target.src.includes('placeholder')) {
                      target.src = `https://images.unsplash.com/photo-1583772210152-03d7b4e57140?auto=format&fit=crop&q=80&w=800`;
                    }
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-med-dark/60 via-transparent to-transparent" />
                
                <div className="absolute top-4 left-4 flex gap-2 items-center">
                  <div className="h-8 px-4 bg-white/90 backdrop-blur-sm rounded-full text-[9px] font-black uppercase tracking-widest text-med-dark flex items-center justify-center shadow-sm leading-none">
                    {place.category}
                  </div>
                  {place.isBackup && (
                    <div className="h-8 px-4 bg-med-yellow text-med-dark rounded-full text-[9px] font-black uppercase tracking-widest shadow-lg flex items-center justify-center leading-none">
                       Backup Option
                    </div>
                  )}
                  {(() => {
                    const ticket = TICKETS.find(t => t.name.toLowerCase().includes(place.name.toLowerCase()));
                    if (!ticket) return null;
                    return (
                      <div className="flex gap-2 items-center">
                        {ticket.isBooked && (
                          <button 
                            onClick={() => window.location.hash = ticket.id}
                            className="h-8 px-4 bg-green-500 text-white rounded-full text-[9px] font-black uppercase tracking-widest shadow-lg flex items-center justify-center gap-2 active:scale-95 transition-all leading-none"
                          >
                            <Ticket className="w-3.5 h-3.5" /> Booked
                          </button>
                        )}
                        {ticket.details && (
                          <button 
                            onClick={() => setSelectedTicket(ticket)}
                            className="w-8 h-8 bg-med-coral text-white rounded-full flex items-center justify-center shadow-lg active:scale-95 transition-all"
                          >
                            <Info className="w-4 h-4" />
                          </button>
                        )}
                      </div>
                    );
                  })()}
                </div>

                <div className="absolute bottom-4 left-6 right-6 flex items-end justify-between">
                  <div className="flex-1 min-w-0">
                    <h3 
                      onClick={() => window.open(place.mapsUrl, '_blank')}
                      className="text-3xl font-black text-white leading-tight drop-shadow-md truncate cursor-pointer hover:text-med-blue transition-colors flex items-center gap-2"
                    >
                      {place.name}
                      <ExternalLink className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </h3>
                  </div>
                  <div className="flex items-center gap-1 bg-white/20 backdrop-blur-md px-2 py-1 rounded-lg">
                    <Star className="w-3 h-3 text-med-yellow fill-med-yellow" />
                    <span className="text-white text-[11px] font-black">{place.rating}</span>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                <div className="flex flex-wrap items-center gap-4 mb-6">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center h-8 text-med-azure leading-none">
                      {[...Array(3)].map((_, i) => (
                        <span key={i} className={`text-sm font-black leading-none ${i < place.priceLevel ? 'opacity-100' : 'opacity-20'}`}>$</span>
                      ))}
                    </div>

                    {(() => {
                      // Find if this place is in the itinerary
                      let foundDayIdx = -1;
                      let foundEventIdx = -1;
                      
                      ITINERARY_DATA.forEach((day, dIdx) => {
                        const eIdx = day.events.findIndex(e => 
                          e.location.toLowerCase().includes(place.name.toLowerCase()) || 
                          place.name.toLowerCase().includes(e.location.toLowerCase())
                        );
                        if (eIdx !== -1) {
                          foundDayIdx = dIdx;
                          foundEventIdx = eIdx;
                        }
                      });

                      if (foundDayIdx === -1) return null;

                      return (
                        <button 
                          onClick={(e) => {
                            e.stopPropagation();
                            window.location.hash = `#itinerary-day-${foundDayIdx}-event-${foundEventIdx}`;
                          }}
                          className="w-8 h-8 flex items-center justify-center bg-med-blue/10 text-med-blue rounded-full hover:bg-med-blue hover:text-white transition-all active:scale-95 group/itinerary shadow-sm"
                          title="View in Itinerary"
                        >
                          <Calendar className="w-4 h-4 group-hover/itinerary:scale-110 transition-transform" /> 
                        </button>
                      );
                    })()}
                  </div>
                  <div className="w-px h-4 bg-gray-100" />
                  <div className="flex items-center h-8 text-[10px] font-black text-gray-400 uppercase tracking-widest leading-none">
                    Hours: {place.hours}
                  </div>
                </div>

                <p className="text-gray-500 text-sm font-medium leading-relaxed mb-8">
                  {place.description}
                </p>

                {/* Baby-ability Section */}
                <div className="mb-8 p-5 bg-med-coral/5 rounded-3xl border border-med-coral/10">
                  <div className="flex items-center gap-2 mb-2">
                    <Baby className="w-4 h-4 text-med-coral" />
                    <p className="text-[10px] font-black text-med-coral uppercase tracking-widest leading-none">Baby-Friendly Tips</p>
                  </div>
                  <p className="text-xs font-bold text-med-dark leading-relaxed">
                    {place.babyFriendlyTips}
                  </p>
                </div>

                {/* Actions */}
                <div className="flex gap-3">
                  <button 
                    onClick={() => window.open(place.mapsUrl, '_blank')}
                    className="flex-1 bg-med-blue text-white rounded-2xl py-4 flex items-center justify-center gap-2 font-black text-xs uppercase tracking-widest shadow-lg shadow-med-blue/20 hover:scale-[1.02] active:scale-95 transition-all"
                  >
                    <Navigation className="w-4 h-4" />
                    Directions
                  </button>
                  <motion.button
                    onClick={() => toggleVisited(place.id)}
                    whileTap={{ scale: 0.92 }}
                    className={`relative px-5 rounded-2xl border transition-all flex items-center gap-2 font-black text-[10px] uppercase tracking-widest overflow-visible ${
                      place.isVisited
                        ? 'bg-gradient-to-br from-green-500 to-emerald-600 border-emerald-600 text-white shadow-lg shadow-green-500/30'
                        : 'border-gray-100 text-gray-400 hover:border-med-blue hover:text-med-blue bg-white'
                    }`}
                  >
                    <AnimatePresence>
                      {place.isVisited && (
                        <>
                          {/* sparkle burst */}
                          {[0, 1, 2, 3, 4, 5].map((i) => {
                            const angle = (i / 6) * Math.PI * 2;
                            return (
                              <motion.span
                                key={`spark-${i}`}
                                initial={{ opacity: 1, x: 0, y: 0, scale: 0.6 }}
                                animate={{
                                  opacity: 0,
                                  x: Math.cos(angle) * 28,
                                  y: Math.sin(angle) * 28,
                                  scale: 0,
                                }}
                                transition={{ duration: 0.6, ease: 'easeOut' }}
                                className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-base"
                              >
                                ✨
                              </motion.span>
                            );
                          })}
                        </>
                      )}
                    </AnimatePresence>
                    <motion.span
                      key={place.isVisited ? 'on' : 'off'}
                      initial={{ scale: 0.7, rotate: place.isVisited ? -10 : 0 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{ type: 'spring', stiffness: 380, damping: 18 }}
                      className="inline-flex items-center"
                    >
                      <CheckCircle2 className="w-4 h-4" />
                    </motion.span>
                    {place.isVisited ? 'Visited' : 'Visit'}
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Ticket Info Modal */}
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
