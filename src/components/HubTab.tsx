import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plane, Home, Ticket, Phone, ExternalLink, Wifi, MapPin, Navigation, MessageCircle, Mail, X, ChevronLeft, ChevronRight, Info, LogIn, Sun, Cloud, Cloudy, CloudRain, CloudSun, Wind, Thermometer, Calendar, QrCode, Maximize2 } from 'lucide-react';
import { FLIGHTS, LODGING, TICKETS, EMERGENCY } from '../data/logistics';
import { FULL_FORECAST } from '../data/weather';
import { LodgingInfo, FlightInfo, TicketInfo, EmergencyContact, WeatherForecastDay } from '../types';

const CheckInModal: React.FC<{ 
  lodging: LodgingInfo; 
  isOpen: boolean; 
  onClose: () => void 
}> = ({ lodging, isOpen, onClose }) => {
  if (!lodging.detailedCheckIn) return null;

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
                <h3 className="text-xl font-black text-med-dark uppercase leading-none mb-1">Check-in Steps</h3>
                <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest leading-none">{lodging.name}</p>
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
                {lodging.detailedCheckIn.steps.map((step, idx) => (
                  <div key={idx} className="relative pl-6 border-l-2 border-med-blue/10">
                    <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-med-blue shadow-[0_0_10px_rgba(30,132,187,0.4)] ring-4 ring-white" />
                    <h4 className="text-sm font-black text-med-blue uppercase tracking-wider mb-2">{step.title}</h4>
                    <p className="text-xs font-medium text-med-dark leading-relaxed mb-3 whitespace-pre-wrap">
                      {step.content}
                    </p>
                    
                    {step.items && step.items.length > 0 && (
                      <div className="space-y-2 mb-4">
                        {step.items.map((item, i) => (
                          <div key={i} className="flex items-start gap-2 bg-gray-50 p-2.5 rounded-xl border border-gray-100">
                            <div className="w-1.5 h-1.5 rounded-full bg-med-blue/40 mt-1.5 flex-shrink-0" />
                            <p className="text-xs font-bold text-med-dark">{item}</p>
                          </div>
                        ))}
                      </div>
                    )}

                    {step.links && step.links.length > 0 && (
                      <div className="grid grid-cols-1 gap-2">
                        {step.links.map((link, i) => (
                          <button
                            key={i}
                            onClick={() => window.open(link.url, '_blank')}
                            className="flex items-center justify-between gap-3 p-3 bg-white border border-gray-100 rounded-2xl hover:border-med-blue hover:bg-blue-50/30 transition-all group"
                          >
                            <span className="text-[10px] font-black text-med-dark uppercase tracking-tight">{link.label}</span>
                            <ExternalLink className="w-3.5 h-3.5 text-med-blue group-hover:translate-x-0.5 transition-transform" />
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
              {lodging.checkInInstructionsUrl && (
                <button
                  onClick={() => window.open(lodging.checkInInstructionsUrl, '_blank')}
                  className="w-full py-4 bg-med-dark text-white rounded-3xl text-xs font-black uppercase tracking-widest flex items-center justify-center gap-2 shadow-lg shadow-med-dark/10 hover:scale-[1.02] active:scale-[0.98] transition-all"
                >
                  <ExternalLink className="w-4 h-4" />
                  Official Instructions
                </button>
              )}
              <p className="text-[10px] font-bold text-gray-400 text-center uppercase tracking-widest">
                Safe Travels!
              </p>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

const FlightCard: React.FC<{ flight: FlightInfo }> = ({ flight }) => (
  <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100 overflow-hidden relative group">
    <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
      <Plane className="w-16 h-16 rotate-45" />
    </div>
    <div className="flex justify-between items-start mb-6">
      <div>
        <p className="text-[10px] font-black text-med-blue uppercase tracking-widest">{flight.airline}</p>
        <h3 className="text-2xl font-black text-med-dark">{flight.flightNumber}</h3>
      </div>
      <div className="text-right">
        <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Conf #</p>
        <p className="text-sm font-black text-med-coral">{flight.confirmation}</p>
      </div>
    </div>
    {/* 3-column × 3-row grid so the line lives in the SAME ROW as the time
        text (perfectly vertically aligned with the time middle), the airplane
        icon sits dead-center on the line, and the duration label sits in the
        row above the plane (so it's centered horizontally over the icon). */}
    <div className="grid grid-cols-[auto_1fr_auto] gap-x-3 gap-y-0 mb-6">
      {/* Row 1: airport codes + duration label */}
      <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">{flight.departure.airport}</p>
      <p className="text-[9px] font-black text-med-blue uppercase tracking-wider whitespace-nowrap text-center self-end">
        {flight.duration || ''}
      </p>
      <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest text-right">{flight.arrival.airport}</p>

      {/* Row 2: TIME — line — TIME (line vertically centered on the time row) */}
      <p className="text-xl font-black text-med-dark leading-tight">{flight.departure.time}</p>
      <div className="relative h-full min-h-[28px] flex items-center">
        <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 border-t-2 border-dashed border-med-blue/25" />
        <span className="relative mx-auto bg-white px-1 leading-none flex items-center justify-center z-10">
          <Plane className="w-3.5 h-3.5 text-med-blue rotate-90" />
        </span>
      </div>
      <p className="text-xl font-black text-med-dark leading-tight text-right">{flight.arrival.time}</p>

      {/* Row 3: date / spacer / Arrival */}
      <p className="text-[10px] font-bold text-gray-500">{flight.departure.date}</p>
      <span />
      <p className="text-[10px] font-bold text-gray-500 text-right">Arrival</p>
    </div>
    <div className="flex gap-4 pt-4 border-t border-gray-50">
      <div className="flex-1">
        <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest leading-none mb-1">Seats</p>
        <p className="text-xs font-black text-med-dark">{flight.seats.join(' & ')}</p>
      </div>
      {flight.gate && (
        <div className="flex-1">
          <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest leading-none mb-1">Gate</p>
          <p className="text-xs font-black text-med-dark">{flight.gate}</p>
        </div>
      )}
    </div>
  </div>
);

const LodgingCard: React.FC<{ lodging: LodgingInfo }> = ({ lodging }) => {
  const [showGallery, setShowGallery] = useState(false);
  const [showCheckIn, setShowCheckIn] = useState(false);
  const [currentIdx, setCurrentIdx] = useState(0);

  const nextImg = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lodging.gallery) {
      setCurrentIdx((currentIdx + 1) % lodging.gallery.length);
    }
  };

  const prevImg = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lodging.gallery) {
      setCurrentIdx((currentIdx - 1 + lodging.gallery.length) % lodging.gallery.length);
    }
  };

  return (
    <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden relative">
      {lodging.gallery && lodging.gallery.length > 0 ? (
        <div className="relative h-56 w-full cursor-pointer group overflow-hidden bg-gray-100">
          <AnimatePresence initial={false} mode="wait">
            <motion.img 
              key={currentIdx}
              src={lodging.gallery[currentIdx]} 
              alt={lodging.name}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="absolute inset-0 w-full h-full object-cover"
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              onDragEnd={(_, info) => {
                if (info.offset.x > 50) prevImg({ stopPropagation: () => {} } as any);
                else if (info.offset.x < -50) nextImg({ stopPropagation: () => {} } as any);
              }}
              onClick={() => setShowGallery(true)}
              referrerPolicy="no-referrer"
            />
          </AnimatePresence>
          
          <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors pointer-events-none" />
          
          {/* Progress dots */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
            {lodging.gallery.slice(0, 5).map((_, i) => (
              <div 
                key={i}
                className={`h-1 rounded-full transition-all ${i === currentIdx ? 'w-4 bg-white shadow-sm' : 'w-1 bg-white/40'}`}
              />
            ))}
          </div>

          <div className="absolute bottom-3 right-3 bg-black/50 backdrop-blur-md px-2 py-1 rounded-lg text-[8px] font-black text-white uppercase tracking-widest border border-white/10 z-10">
            {lodging.gallery.length} Photos
          </div>

          <div className="absolute inset-y-0 left-0 flex items-center opacity-0 group-hover:opacity-100 transition-opacity">
            <button 
              onClick={prevImg}
              className="p-2 bg-white/20 backdrop-blur-md text-white rounded-r-xl hover:bg-white/40 transition-all border-y border-r border-white/20"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center opacity-0 group-hover:opacity-100 transition-opacity">
            <button 
              onClick={nextImg}
              className="p-2 bg-white/20 backdrop-blur-md text-white rounded-l-xl hover:bg-white/40 transition-all border-y border-l border-white/20"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      ) : lodging.heroImage && (
        <div 
          className="relative h-48 w-full cursor-pointer group overflow-hidden"
          onClick={() => setShowGallery(true)}
        >
          <img 
            src={lodging.heroImage} 
            alt={lodging.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
            <p className="text-white text-[10px] font-black uppercase tracking-widest bg-white/20 backdrop-blur-md px-3 py-1 rounded-full border border-white/30">
              View Gallery
            </p>
          </div>
        </div>
      )}
      
      <div className="p-6 space-y-5">
        {/* Eyebrow + Booking rating */}
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <Home className="w-3.5 h-3.5 text-med-blue" />
            <p className="text-[10px] font-black text-med-blue uppercase tracking-widest">Lodging</p>
          </div>
          {lodging.bookingRating && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                if (lodging.bookingRatingUrl) {
                  window.open(lodging.bookingRatingUrl, '_blank');
                }
              }}
              className="inline-flex items-center gap-2 rounded-full bg-[#003580] pl-1 pr-3 py-1 shadow-sm hover:bg-[#002766] transition-colors"
            >
              <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-white text-[#003580] text-[11px] font-black tabular-nums leading-none">
                {lodging.bookingRating}
              </span>
              <span className="text-[10px] font-bold text-white tracking-wide leading-none">
                Booking.com
              </span>
            </button>
          )}
        </div>

        {/* Name */}
        <h3 className="text-2xl font-black text-med-dark leading-tight tracking-tight -mt-2">
          {lodging.name}
        </h3>

        {/* Address card */}
        <button
          onClick={() => window.open(`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(lodging.address)}`, '_blank')}
          className="flex items-start gap-2.5 w-full text-left bg-gray-50 hover:bg-white hover:border-med-blue/30 border border-gray-100 p-3.5 rounded-2xl transition-all group"
        >
          <MapPin className="w-4 h-4 text-med-blue mt-0.5 shrink-0" />
          <p className="text-xs font-bold text-med-dark leading-snug">{lodging.address}</p>
          <ExternalLink className="w-3.5 h-3.5 text-gray-300 ml-auto mt-0.5 shrink-0 group-hover:text-med-blue transition-colors" />
        </button>

        {/* Stats grid: dates + confirmation + PIN */}
        <div className="grid grid-cols-2 gap-2.5">
          <div className="p-3 bg-gray-50/80 rounded-2xl border border-gray-100">
            <p className="text-[8px] font-black text-gray-400 uppercase mb-1 tracking-widest">Check-In</p>
            <p className="text-xs font-black text-med-dark leading-tight">{lodging.checkIn}</p>
          </div>
          <div className="p-3 bg-gray-50/80 rounded-2xl border border-gray-100">
            <p className="text-[8px] font-black text-gray-400 uppercase mb-1 tracking-widest">Check-Out</p>
            <p className="text-xs font-black text-med-dark leading-tight">{lodging.checkOut}</p>
          </div>
          <div className="p-3 bg-gray-50/80 rounded-2xl border border-gray-100">
            <p className="text-[8px] font-black text-gray-400 uppercase mb-1 tracking-widest">
              {lodging.bookedVia ? `Via ${lodging.bookedVia}` : 'Confirmation'}
            </p>
            <p className="text-xs font-black text-med-coral leading-tight font-mono">{lodging.confirmation}</p>
          </div>
          <div className={`p-3 rounded-2xl border ${lodging.pin ? 'bg-med-azure/5 border-med-azure/20' : 'bg-gray-50/40 border-gray-100/60'}`}>
            <p className="text-[8px] font-black text-gray-400 uppercase mb-1 tracking-widest">Entry PIN</p>
            <p className={`text-xs font-black leading-tight font-mono ${lodging.pin ? 'text-med-azure' : 'text-gray-300'}`}>
              {lodging.pin || '—'}
            </p>
          </div>
        </div>

        {/* Action row: Check-in steps + contacts */}
        <div className="flex items-stretch gap-2">
          {lodging.detailedCheckIn && (
            <button
              onClick={() => setShowCheckIn(true)}
              className="flex-1 py-3 bg-med-blue text-white rounded-2xl text-[10px] font-black uppercase tracking-[0.18em] shadow-md shadow-med-blue/20 flex items-center justify-center gap-2 hover:bg-med-dark active:scale-[0.98] transition-all"
            >
              <LogIn className="w-3.5 h-3.5" />
              Check-In Steps
            </button>
          )}
          <div className="flex gap-2">
            {lodging.whatsapp && (
              <button
                onClick={() => window.open(`https://wa.me/${lodging.whatsapp!.replace(/\D/g, '')}`, '_blank')}
                className="w-11 bg-green-50 text-green-600 hover:bg-green-600 hover:text-white rounded-2xl flex items-center justify-center transition-all active:scale-90"
                title="WhatsApp"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
              </button>
            )}
            {lodging.email && (
              <button
                onClick={() => window.open(`mailto:${lodging.email}`, '_blank')}
                className="w-11 bg-med-blue/5 text-med-blue hover:bg-med-blue hover:text-white rounded-2xl flex items-center justify-center transition-all active:scale-90"
                title="Email"
              >
                <Mail className="w-4 h-4" />
              </button>
            )}
            <button
              onClick={() => window.open(lodging.url, '_blank')}
              className="w-11 bg-med-azure/10 text-med-azure hover:bg-med-azure hover:text-white rounded-2xl flex items-center justify-center transition-all active:scale-90"
              title="Listing"
            >
              <ExternalLink className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* WiFi */}
        {lodging.wifiPassword && (
          <div className="p-3.5 bg-amber-50/60 rounded-2xl border border-amber-100 flex items-center gap-3">
            <div className="w-9 h-9 bg-amber-100 rounded-xl flex items-center justify-center text-amber-600 shrink-0">
              <Wifi className="w-4 h-4" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-[8px] font-black text-amber-600 uppercase tracking-widest">Wi-Fi</p>
              {lodging.wifiName && (
                <p className="text-[10px] font-bold text-med-dark/60 leading-tight truncate">{lodging.wifiName}</p>
              )}
              <p className="text-[11px] font-mono font-black text-med-dark leading-tight selection:bg-amber-200 truncate">{lodging.wifiPassword}</p>
            </div>
          </div>
        )}

        {/* Crib request callout */}
        {lodging.cribRequestNote && (
          <button
            onClick={() => lodging.cribRequestUrl && window.open(lodging.cribRequestUrl, '_blank')}
            className="w-full p-3.5 bg-med-blue/5 rounded-2xl border border-med-blue/20 flex items-start gap-3 hover:bg-med-blue/10 transition-colors group text-left"
          >
            <div className="w-8 h-8 bg-med-blue/15 rounded-lg flex items-center justify-center text-med-blue mt-0.5 shrink-0">
              <Info className="w-4 h-4" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-[8px] font-black text-med-blue uppercase tracking-widest mb-0.5">Action Required</p>
              <p className="text-[11px] font-bold text-med-dark leading-snug">{lodging.cribRequestNote}</p>
              {lodging.cribRequestUrl && (
                <span className="inline-block mt-1 text-[9px] font-black text-med-blue uppercase tracking-tight group-hover:text-med-azure">Open Guest Portal →</span>
              )}
            </div>
          </button>
        )}

        {/* Amenities */}
        {lodging.amenities && lodging.amenities.length > 0 && (
          <div className="flex flex-wrap gap-1.5">
            {lodging.amenities.map(amenity => (
              <span key={amenity} className="px-2.5 py-1 bg-gray-50 text-med-dark rounded-full text-[9px] font-black uppercase tracking-tight border border-gray-100">
                {amenity}
              </span>
            ))}
          </div>
        )}

        {/* Notes */}
        {lodging.notes && (
          <div className="p-3.5 bg-med-coral/5 rounded-2xl border border-med-coral/10 border-l-4 border-l-med-coral/40">
            <p className="text-[11px] font-medium text-med-dark/80 leading-relaxed italic">
              {lodging.notes}
            </p>
          </div>
        )}
      </div>

      <CheckInModal 
        lodging={lodging} 
        isOpen={showCheckIn} 
        onClose={() => setShowCheckIn(false)} 
      />

      <AnimatePresence>
        {showGallery && lodging.gallery && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 flex flex-col items-center justify-center p-4 md:p-12"
            onClick={() => setShowGallery(false)}
          >
            <button 
              className="absolute top-6 right-6 p-3 text-white/50 hover:text-white hover:bg-white/10 rounded-full transition-all z-[60]"
              onClick={() => setShowGallery(false)}
            >
              <X className="w-6 h-6" />
            </button>

            <div className="relative w-full max-w-5xl aspect-[4/3] flex items-center justify-center">
              <button 
                className="absolute left-0 p-4 text-white/30 hover:text-white hover:bg-white/10 rounded-full transition-all z-[60] -translate-x-1/2 md:translate-x-0"
                onClick={prevImg}
              >
                <ChevronLeft className="w-8 h-8" />
              </button>

              <motion.img 
                key={currentIdx}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={1}
                onDragEnd={(_, info) => {
                  if (info.offset.x > 100) prevImg({ stopPropagation: () => {} } as any);
                  else if (info.offset.x < -100) nextImg({ stopPropagation: () => {} } as any);
                }}
                src={lodging.gallery[currentIdx]} 
                className="max-w-full max-h-full object-contain rounded-2xl shadow-2xl cursor-grab active:cursor-grabbing"
                referrerPolicy="no-referrer"
              />

              <button 
                className="absolute right-0 p-4 text-white/30 hover:text-white hover:bg-white/10 rounded-full transition-all z-[60] translate-x-1/2 md:translate-x-0"
                onClick={nextImg}
              >
                <ChevronRight className="w-8 h-8" />
              </button>
            </div>

            <div className="mt-8 flex gap-2 overflow-x-auto pb-4 max-w-full no-scrollbar px-4">
              {lodging.gallery.map((img, idx) => (
                <button 
                  key={idx}
                  onClick={(e) => {
                    e.stopPropagation();
                    setCurrentIdx(idx);
                  }}
                  className={`flex-shrink-0 w-16 h-16 rounded-xl overflow-hidden border-2 transition-all ${idx === currentIdx ? 'border-med-azure scale-110 shadow-lg shadow-med-azure/20' : 'border-transparent opacity-40 hover:opacity-100'}`}
                >
                  <img src={img} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </button>
              ))}
            </div>

            <p className="fixed bottom-8 left-1/2 -translate-x-1/2 text-white/40 text-[10px] font-black uppercase tracking-[0.2em]">
              Photo {currentIdx + 1} of {lodging.gallery.length}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};


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

const WeatherDetailModal: React.FC<{ 
  day: WeatherForecastDay | null; 
  isOpen: boolean; 
  onClose: () => void 
}> = ({ day, isOpen, onClose }) => {
  if (!day) return null;

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
                <Sun className="w-5 h-5 text-med-yellow" />
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

const WeatherCard: React.FC<{ day: WeatherForecastDay; onClick: () => void }> = ({ day, onClick }) => {
  const cond = day.conditions.toLowerCase();
  const isRainy = cond.includes('rain');
  const isPartly = cond.includes('partly') || cond.includes('cloud');
  const isSunny = cond.includes('sunny') && !isPartly;
  
  return (
    <button 
      onClick={onClick}
      className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 flex flex-col items-center text-center hover:border-med-blue hover:bg-blue-50/30 transition-all group scale-100 active:scale-95"
    >
      <p className="text-[8px] font-black text-gray-400 uppercase tracking-widest mb-1 group-hover:text-med-blue transition-colors">{day.dayOfWeek} {day.date}</p>
      <div className="w-8 h-8 bg-gray-50 rounded-lg flex items-center justify-center mb-2 group-hover:bg-white transition-colors">
        {isRainy ? (
          <CloudRain className="w-4 h-4 text-med-blue" />
        ) : isPartly ? (
          <Cloudy className="w-4 h-4 text-gray-500" />
        ) : isSunny ? (
          <Sun className="w-4 h-4 text-med-orange" />
        ) : (
          <Cloud className="w-4 h-4 text-gray-400" />
        )}
      </div>
      <p className="text-sm font-black text-med-dark leading-none mb-1">{day.high}/{day.low}</p>
      <p className="text-[7px] font-bold text-gray-500 uppercase tracking-tight leading-none italic">{day.conditions}</p>
      <div className="mt-2 pt-2 border-t border-gray-50 w-full">
        <p className="text-xs font-black text-med-coral uppercase tracking-tighter">Day {day.tripDay}</p>
      </div>
    </button>
  );
};

// ───────────────────────────────────────────────────────────────────
// ScanModal — fullscreen "show this at the door" view.
// White background to maximize scanner contrast; pagination between
// passes; entry details fixed below the QR so staff can verify.
// ───────────────────────────────────────────────────────────────────
const ScanModal: React.FC<{
  ticket: TicketInfo;
  isOpen: boolean;
  onClose: () => void;
}> = ({ ticket, isOpen, onClose }) => {
  const [idx, setIdx] = useState(0);

  // Reset to first pass whenever modal opens
  React.useEffect(() => {
    if (isOpen) setIdx(0);
  }, [isOpen]);

  // Try to bump screen brightness via wake-lock + fullscreen on supported devices
  React.useEffect(() => {
    if (!isOpen) return;
    // @ts-ignore: experimental API
    let wakeLock: any = null;
    if ('wakeLock' in navigator) {
      // @ts-ignore
      navigator.wakeLock.request('screen').then((w) => { wakeLock = w; }).catch(() => {});
    }
    return () => { if (wakeLock?.release) wakeLock.release().catch(() => {}); };
  }, [isOpen]);

  if (!ticket.passes || ticket.passes.length === 0) return null;
  const pass = ticket.passes[idx];
  const total = ticket.passes.length;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[200] bg-white flex flex-col"
        >
          {/* Header bar */}
          <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100 shrink-0">
            <div className="min-w-0">
              <p className="text-[9px] font-black text-med-coral uppercase tracking-[0.3em]">Scan at the door</p>
              <p className="text-sm font-black text-med-dark truncate mt-0.5">{ticket.name}</p>
            </div>
            <button
              onClick={onClose}
              className="w-10 h-10 rounded-full bg-gray-100 text-med-dark flex items-center justify-center active:scale-90 transition-transform shrink-0 ml-3"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Passenger label + index */}
          <div className="px-5 pt-5 text-center shrink-0">
            <p className="text-[10px] font-black text-gray-400 uppercase tracking-[0.3em]">
              {pass.group || 'Ticket'} · {idx + 1} of {total}
            </p>
            <h2 className="text-3xl font-black text-med-dark mt-1 tracking-tight">
              {pass.label}
            </h2>
          </div>

          {/* QR — fills available space, white bg for max contrast */}
          <div className="flex-1 flex items-center justify-center px-6 py-4 min-h-0">
            <img
              src={pass.qrUrl}
              alt={`Scan code for ${pass.label}`}
              className="w-full max-w-[min(420px,80vw)] h-auto aspect-square object-contain rounded-2xl shadow-[0_0_0_8px_white,0_0_40px_rgba(0,0,0,0.08)]"
              style={{ imageRendering: 'pixelated' }}
            />
          </div>

          {/* Entry details */}
          <div className="px-5 pb-4 shrink-0">
            <div className="rounded-2xl bg-gray-50 border border-gray-100 p-4 grid grid-cols-3 gap-3 text-center">
              <div>
                <p className="text-[8px] font-black text-gray-400 uppercase tracking-widest">Date</p>
                <p className="text-xs font-black text-med-dark mt-1 tabular-nums">{ticket.date}</p>
              </div>
              <div>
                <p className="text-[8px] font-black text-gray-400 uppercase tracking-widest">Time</p>
                <p className="text-xs font-black text-med-coral mt-1 tabular-nums">{ticket.time}</p>
              </div>
              <div>
                <p className="text-[8px] font-black text-gray-400 uppercase tracking-widest">Code</p>
                <p className="text-xs font-black text-med-azure mt-1 font-mono">{pass.code || ticket.confirmation}</p>
              </div>
            </div>
          </div>

          {/* Pagination — only if more than one pass */}
          {total > 1 && (
            <div className="px-5 pb-6 flex items-center justify-between gap-3 shrink-0 border-t border-gray-100 pt-4">
              <button
                onClick={() => setIdx((i) => (i - 1 + total) % total)}
                className="flex-1 py-3 bg-gray-100 text-med-dark rounded-2xl text-[10px] font-black uppercase tracking-widest flex items-center justify-center gap-1 active:scale-95 transition-transform"
              >
                <ChevronLeft className="w-3.5 h-3.5" /> Prev
              </button>
              <div className="flex gap-1.5">
                {ticket.passes.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setIdx(i)}
                    className={`transition-all rounded-full ${i === idx ? 'w-6 h-1.5 bg-med-dark' : 'w-1.5 h-1.5 bg-gray-300'}`}
                    aria-label={`Show pass ${i + 1}`}
                  />
                ))}
              </div>
              <button
                onClick={() => setIdx((i) => (i + 1) % total)}
                className="flex-1 py-3 bg-med-dark text-white rounded-2xl text-[10px] font-black uppercase tracking-widest flex items-center justify-center gap-1 active:scale-95 transition-transform"
              >
                Next <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const TicketCard: React.FC<{ ticket: TicketInfo }> = ({ ticket }) => {
  const [showInfo, setShowInfo] = useState(false);
  const [showScan, setShowScan] = useState(false);
  const isHighlighted = window.location.hash.slice(1) === ticket.id;

  return (
    <div 
      id={ticket.id}
      className={`bg-white rounded-3xl p-5 shadow-sm border transition-all duration-500 overflow-hidden relative group ${isHighlighted ? 'border-med-coral ring-2 ring-med-coral/20 ring-offset-2' : 'border-gray-100'}`}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-colors ${ticket.isBooked ? 'bg-green-100 text-green-600' : 'bg-med-orange/10 text-med-orange'}`}>
            <Ticket className="w-6 h-6" />
          </div>
          <div>
            <h3 className="font-black text-med-dark uppercase tracking-tight">{ticket.name}</h3>
            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
              {ticket.date} • {ticket.time}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          {ticket.details && (
            <button 
              onClick={() => setShowInfo(true)}
              className="p-2 bg-med-coral/10 rounded-xl text-med-coral hover:bg-med-coral hover:text-white transition-all shadow-sm active:scale-90"
            >
              <Info className="w-4 h-4" />
            </button>
          )}
          <div className="text-right">
            {ticket.isBooked ? (
              <div className="flex flex-col items-end min-w-[80px]">
                <p className="text-[8px] font-black text-green-600 uppercase mb-1 tracking-widest">Confirmed</p>
                <p className="text-[10px] font-mono font-black text-med-dark leading-none">{ticket.confirmation}</p>
              </div>
            ) : (
              <button 
                onClick={() => ticket.bookingUrl && window.open(ticket.bookingUrl, '_blank')}
                className="px-4 py-2 bg-med-orange text-white rounded-xl text-[10px] font-black uppercase tracking-widest leading-tight shadow-md shadow-med-orange/20 hover:scale-105 active:scale-95 transition-all"
              >
                Book<br />Now
              </button>
            )}
          </div>
        </div>
      </div>
      
      {ticket.proofOfPurchase && (
        <div className="pt-3 mt-3 border-t border-gray-50 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-gray-50 rounded-lg flex items-center justify-center text-gray-400">
              <MapPin className="w-3 h-3" />
            </div>
            <p className="text-[10px] font-bold text-gray-500 uppercase tracking-tight truncate max-w-[150px]">{ticket.location}</p>
          </div>
          <div className="flex flex-col items-end">
            <p className="text-[8px] font-black text-gray-400 uppercase tracking-widest">Reference</p>
            <p className="text-[10px] font-mono font-black text-med-azure">{ticket.proofOfPurchase}</p>
          </div>
        </div>
      )}

      {(ticket.passes && ticket.passes.length > 0) || ticket.attachmentUrl ? (
        <div className="mt-3 flex flex-col gap-2">
          {ticket.passes && ticket.passes.length > 0 && (
            <button
              onClick={() => setShowScan(true)}
              className="w-full flex items-center justify-center gap-2 py-3.5 bg-gradient-to-br from-med-yellow to-amber-400 text-med-dark rounded-2xl text-[11px] font-black uppercase tracking-[0.2em] shadow-lg shadow-med-yellow/30 hover:scale-[1.02] active:scale-[0.98] transition-transform"
            >
              <QrCode className="w-4 h-4" />
              Scan at door
              {ticket.passes.length > 1 && (
                <span className="text-[10px] tabular-nums opacity-70">· {ticket.passes.length} passes</span>
              )}
            </button>
          )}
          {ticket.attachmentUrl && (
            <a
              href={ticket.attachmentUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-2.5 bg-white border border-gray-200 text-med-dark rounded-2xl text-[10px] font-black uppercase tracking-[0.2em] hover:bg-gray-50 active:scale-[0.98] transition-transform"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              {ticket.attachmentLabel || 'View Full Voucher (PDF)'}
            </a>
          )}
        </div>
      ) : null}

      <TicketInfoModal
        ticket={ticket}
        isOpen={showInfo}
        onClose={() => setShowInfo(false)}
      />
      <ScanModal
        ticket={ticket}
        isOpen={showScan}
        onClose={() => setShowScan(false)}
      />
    </div>
  );
};


export const HubTab = () => {
  const [selectedWeatherDay, setSelectedWeatherDay] = useState<WeatherForecastDay | null>(null);

  React.useEffect(() => {
    const handleHashScroll = () => {
      const hash = window.location.hash;
      if (hash && hash.startsWith('#t-')) {
        const id = hash.slice(1);
        const element = document.getElementById(id);
        if (element) {
          // Small delay to allow tab transition and rendering
          setTimeout(() => {
            element.scrollIntoView({ behavior: 'smooth', block: 'center' });
            
            // Clear hash after a delay so highlight isn't permanent and doesn't trigger scroll again
            setTimeout(() => {
              if (window.location.hash === hash) {
                window.history.replaceState(null, '', window.location.pathname + window.location.search);
              }
            }, 3000);
          }, 300);
        }
      }
    };

    handleHashScroll();
    window.addEventListener('hashchange', handleHashScroll);
    return () => window.removeEventListener('hashchange', handleHashScroll);
  }, []);

  return (
    <div className="space-y-10">
      <section>
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 bg-med-blue/10 rounded-2xl flex items-center justify-center text-med-blue">
            <Plane className="w-5 h-5" />
          </div>
          <h2 className="text-3xl font-black text-med-dark">FLIGHTS</h2>
        </div>
        <div className="grid gap-4">
          {FLIGHTS.map((flight, i) => (
            <FlightCard key={i} flight={flight} />
          ))}
        </div>
      </section>

      <section>
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 bg-med-orange/10 rounded-2xl flex items-center justify-center text-med-orange">
            <Home className="w-5 h-5" />
          </div>
          <h2 className="text-3xl font-black text-med-dark">LODGING</h2>
        </div>
        <div className="grid gap-4">
          {LODGING.map((lodging, i) => (
            <LodgingCard key={i} lodging={lodging} />
          ))}
        </div>
      </section>

      <section>
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 bg-med-blue/10 rounded-2xl flex items-center justify-center text-med-blue">
            <Sun className="w-5 h-5" />
          </div>
          <h2 className="text-3xl font-black text-med-dark uppercase leading-tight">Weather</h2>
        </div>
        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
          {FULL_FORECAST.map((day, i) => (
            <WeatherCard key={i} day={day} onClick={() => setSelectedWeatherDay(day)} />
          ))}
        </div>
      </section>

      {selectedWeatherDay && (
        <WeatherDetailModal 
          day={selectedWeatherDay} 
          isOpen={!!selectedWeatherDay} 
          onClose={() => setSelectedWeatherDay(null)} 
        />
      )}

      <section>
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 bg-med-yellow/10 rounded-2xl flex items-center justify-center text-med-yellow">
            <Ticket className="w-5 h-5" />
          </div>
          <h2 className="text-3xl font-black text-med-dark">BOOKINGS</h2>
        </div>
        <div className="grid gap-4">
          {TICKETS.map((ticket, i) => (
            <TicketCard key={i} ticket={ticket} />
          ))}
        </div>
      </section>

      <section>
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 bg-med-coral/10 rounded-2xl flex items-center justify-center text-med-coral">
            <Phone className="w-5 h-5" />
          </div>
          <h2 className="text-3xl font-black text-med-dark">EMERGENCY</h2>
        </div>
        <div className="grid gap-3">
          {EMERGENCY.map((contact, i) => (
            <a 
              key={i} 
              href={`tel:${contact.number.replace(/\s/g, '')}`}
              className="bg-white rounded-3xl p-5 shadow-sm border border-gray-100 flex items-center justify-between group hover:border-med-coral transition-colors"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gray-50 rounded-2xl flex items-center justify-center text-gray-400 group-hover:bg-med-coral group-hover:text-white transition-all">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-black text-med-dark uppercase leading-tight tracking-tight">{contact.label}</h3>
                  <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{contact.location}</p>
                </div>
              </div>
              <div className="text-right font-black text-med-dark tabular-nums">
                {contact.number}
              </div>
            </a>
          ))}
        </div>
      </section>
    </div>
  );
};
