import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Map as MapIcon, 
  Camera, 
  Heart, 
  Plane, 
  Sparkles, 
  MapPin, 
  Languages, 
  UtensilsCrossed, 
  Star,
  Baby,
  Palmtree,
  Waves,
  Calendar,
  Briefcase,
  Ticket,
  ChevronRight
} from 'lucide-react';
import { ZzzIcon } from './icons/ZzzIcon';
import { ITINERARY_DATA } from '../data/itinerary';
import { PLACES_DATA } from '../data/places';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

interface WelcomeTabProps {
  setActiveTab: (tab: any) => void;
  liveStatus: {
    current: string;
    nextNapMins: number | null;
    isNapping: boolean;
    eventIndex: number;
  };
}

const MilestoneItem = ({ title, icon, completed }: { title: string; icon: React.ReactNode, completed?: boolean }) => (
  <div className="flex items-center gap-3 p-3 bg-white rounded-2xl border border-gray-100 shadow-sm">
    <div className={`w-8 h-8 rounded-xl flex items-center justify-center ${completed ? 'bg-green-50 text-green-500' : 'bg-med-blue/5 text-med-blue'}`}>
      {icon}
    </div>
    <span className="text-[11px] font-bold text-med-dark uppercase tracking-tight">{title}</span>
    {completed && <div className="ml-auto w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />}
  </div>
);

const TapaCard = ({ name, description }: { name: string; description: string }) => (
  <div className="p-4 bg-med-coral/5 rounded-2xl border border-med-coral/10 hover:bg-med-coral/10 transition-colors">
    <p className="text-xs font-black text-med-coral uppercase mb-1">{name}</p>
    <p className="text-[10px] text-gray-500 font-medium leading-tight">{description}</p>
  </div>
);

const PHOTO_CHECKPOINTS = [
  {
    id: 'sagrada',
    name: 'Sagrada Família',
    image: 'https://cdn.britannica.com/15/194815-050-08B5E7D1/Nativity-facade-Sagrada-Familia-cathedral-Barcelona-Spain.jpg',
    location: 'Plaça de Gaudí',
    tip: 'Stand across the pond in Plaça de Gaudí for the perfect reflection shot of the Nativity Facade.',
    time: 'Golden Hour (Sunset)',
    babyTip: 'The park across has a great playground if baby needs a break from the stroller.'
  },
  {
    id: 'parkguell',
    name: 'Park Güell',
    image: 'https://images.unsplash.com/photo-1523531294919-4bcd7c65e216?auto=format&fit=crop&q=80&w=800',
    location: 'Nature Square',
    tip: 'Head to the serpentine bench early. The views of the city with the ginger-bread houses are unmatched.',
    time: 'Early Morning (8 AM)',
    babyTip: 'Use a carrier here! Some paths are manageable with a stroller, but the best views have stairs.'
  },
  {
    id: 'montjuic',
    name: 'Montjuïc Castle',
    image: 'https://www.exp1.com/wp-content/uploads/sites/10/2022/04/Montjuic-Castle-1000x660.webp',
    location: 'Castle Walls',
    tip: 'Walk the full perimeter of the walls for 360-degree views of the harbor and Tibidabo.',
    time: 'Late Afternoon',
    babyTip: 'The cable car up is a fun, sensory experience for the little one.'
  },
  {
    id: 'gothic',
    name: 'Gothic Quarter',
    image: 'https://touringbee.com/wp-content/uploads/barcelonat1_promo_3-scaled.jpg',
    location: 'Carrer del Bisbe',
    tip: 'The iconic bridge is best shot looking up from the narrow alleyway to capture the neo-Gothic details.',
    time: 'Weekday Mornings',
    babyTip: 'Very narrow streets—watch out for bikes and keep the stroller compact.'
  }
];

export const WelcomeTab = ({ setActiveTab, liveStatus }: WelcomeTabProps) => {
  const TRIP_START = new Date('2026-05-24T00:00:00');
  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(null);
  const [selectedPhoto, setSelectedPhoto] = useState<typeof PHOTO_CHECKPOINTS[0] | null>(null);

  // Find today's events if trip is active
  const today = new Date();
  const diffDays = Math.floor((today.getTime() - TRIP_START.getTime()) / (1000 * 60 * 60 * 24));
  const todayItinerary = ITINERARY_DATA.find(d => d.dayNumber === diffDays) || ITINERARY_DATA[0];

  // Pick a "spotlight place" — stable per calendar day so it doesn't reroll every refresh.
  // Skip backups + places whose image URL is a known-broken Google placeholder.
  const spotlightPlace = React.useMemo(() => {
    const candidates = PLACES_DATA.filter(p => !p.isBackup && !p.image.includes('V8V8V8'));
    const seed = today.getFullYear() * 1000 + today.getMonth() * 50 + today.getDate();
    return candidates[seed % candidates.length] || PLACES_DATA[0];
  }, [today.toDateString()]);

  // Pre-loaded into the storyboard preview.
  const adventureEvents = todayItinerary.events.slice(0, 5);

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = +TRIP_START - +new Date();
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      } else {
        setTimeLeft(null);
      }
    };

    const timer = setInterval(calculateTimeLeft, 1000);
    calculateTimeLeft();
    return () => clearInterval(timer);
  }, []);

  const stats = [
    { label: 'Avg Temp', value: '22°C', icon: <Sparkles className="w-4 h-4" /> },
    { label: 'Sunlight', value: '14h', icon: <Camera className="w-4 h-4" /> },
    { label: 'Vibe', value: 'Magic', icon: <Heart className="w-4 h-4" /> },
  ];

  return (
    <div className="space-y-10 pb-20">
      {/* Hero Section */}
      <section className="relative min-h-[520px] rounded-[3.5rem] overflow-hidden bg-med-dark shadow-2xl flex flex-col">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1583422409516-2895a77efded?auto=format&fit=crop&q=80&w=1200"
            alt="Barcelona"
            className="w-full h-full object-cover opacity-50 scale-105"
          />
          <div className="absolute inset-x-0 bottom-0 h-3/4 bg-gradient-to-t from-med-dark via-med-dark/60 to-transparent" />
        </div>

        {/* Top Header Icons */}
        <div className="relative z-10 p-6 flex justify-end items-start">
          <div className="w-10 h-10 bg-white/10 backdrop-blur-md rounded-xl flex items-center justify-center border border-white/20">
            <Plane className="w-5 h-5 text-white" />
          </div>
        </div>

        {/* Center Content */}
        <div className="relative z-10 mt-auto p-8 space-y-8">
          <div className="space-y-1">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              className="text-white text-[10px] font-black uppercase tracking-[0.4em] ml-1"
            >
              Final Destination
            </motion.p>
            <h2 className="text-7xl font-black leading-[0.8] tracking-tighter uppercase font-display text-white italic">
              BARCE<br/><span className="text-med-yellow not-italic">LONA</span>
            </h2>
          </div>

          {!timeLeft ? (
            <motion.button
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              onClick={() => setActiveTab('itinerary')}
              className="w-full py-5 bg-med-yellow text-med-dark rounded-2xl flex items-center justify-center gap-3 font-black uppercase tracking-[0.2em] text-sm shadow-xl group"
            >
              <Calendar className="w-5 h-5 group-hover:rotate-12 transition-transform" />
              View Today's Itinerary
            </motion.button>
          ) : (
            /* Compact Grid Countdown */
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="h-[2px] w-6 bg-med-coral rounded-full" />
                <p className="text-[9px] font-black text-white/40 uppercase tracking-widest">Countdown to Takeoff</p>
              </div>

              <div className="flex gap-2">
                {Object.entries(timeLeft).map(([unit, value], idx) => (
                    <motion.div
                      key={unit}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: idx * 0.1 }}
                      className="flex-1 bg-white/95 backdrop-blur-xl p-3 py-4 rounded-2xl shadow-xl flex flex-col items-center justify-center group hover:bg-med-yellow transition-all duration-300 cursor-default"
                    >
                      <p className="text-2xl font-black tabular-nums text-med-dark leading-none tracking-tighter">
                        {(value as number) < 10 ? `0${value}` : value}
                      </p>
                      <p className="text-[7px] font-black text-gray-400 uppercase tracking-[0.1em] mt-1.5 group-hover:text-med-dark/60 leading-none">
                        {unit === 'days' ? 'Days' : unit === 'hours' ? 'Hrs' : unit === 'minutes' ? 'Min' : 'Sec'}
                      </p>
                    </motion.div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>


      {/* Today's Adventure — visual storyboard for today's plan */}
      <section className="space-y-3">
        <div className="flex items-baseline justify-between px-2">
          <p className="text-[9px] font-black text-gray-400 uppercase tracking-[0.25em]">
            {timeLeft ? 'Day 1 preview' : `Day ${todayItinerary.dayNumber} · ${todayItinerary.date}`}
          </p>
          <span className="text-[10px] font-black text-med-coral uppercase tracking-wider bg-med-coral/10 px-2.5 py-1 rounded-full">
            {todayItinerary.weather}
          </span>
        </div>

        <button
          onClick={() => setActiveTab('itinerary')}
          className="block w-full text-left relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-med-blue via-med-dark to-med-blue shadow-2xl shadow-med-blue/20 group"
        >
          {/* Animated background blobs */}
          <motion.div
            aria-hidden
            animate={{ scale: [1, 1.2, 1], rotate: [0, 30, 0] }}
            transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute -top-16 -right-16 w-56 h-56 bg-med-yellow/25 rounded-full blur-3xl pointer-events-none"
          />
          <motion.div
            aria-hidden
            animate={{ scale: [1.1, 1, 1.1], rotate: [0, -20, 0] }}
            transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute -bottom-12 -left-12 w-48 h-48 bg-med-coral/30 rounded-full blur-3xl pointer-events-none"
          />

          <div className="relative z-10 px-6 pt-6 pb-2 flex items-start justify-between gap-3">
            <div className="min-w-0">
              <p className="text-[9px] font-black text-med-yellow uppercase tracking-[0.3em] mb-2">Today's Adventure</p>
              <h3 className="text-white text-3xl font-black tracking-tighter leading-[0.95] uppercase">
                {todayItinerary.title}
              </h3>
              <p className="text-white/60 text-[10px] font-bold uppercase tracking-widest mt-2">
                {todayItinerary.vibeCoding}
              </p>
            </div>
          </div>

          {/* Emoji story strip */}
          <div className="relative z-10 flex gap-3 overflow-x-auto no-scrollbar px-6 pt-5 pb-5">
            {adventureEvents.map((event, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
                className="shrink-0 w-[88px] bg-white/95 backdrop-blur-md rounded-2xl px-2 py-3 text-center shadow-xl border border-white/40"
              >
                <div className="text-3xl leading-none mb-1.5">{event.placeEmoji || '📍'}</div>
                <p className="text-[9px] font-black text-med-blue tabular-nums leading-none mb-1">{event.time}</p>
                <p className="text-[8px] font-bold text-gray-500 uppercase tracking-tight leading-tight line-clamp-2">
                  {event.location}
                </p>
              </motion.div>
            ))}
          </div>

          <div className="relative z-10 w-full py-4 bg-med-yellow text-med-dark font-black text-[11px] uppercase tracking-[0.25em] flex items-center justify-center gap-2 group-hover:bg-white transition-colors">
            See full day plan
            <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </div>
        </button>
      </section>

      {/* Spotlight Place — pulls from Explorer to spark curiosity */}
      <section className="space-y-3">
        <div className="flex items-baseline justify-between px-2">
          <p className="text-[9px] font-black text-gray-400 uppercase tracking-[0.25em]">Today's Spotlight</p>
          <button
            onClick={() => setActiveTab('explorer')}
            className="text-[10px] font-black text-med-blue uppercase tracking-wider hover:text-med-dark transition-colors flex items-center gap-1"
          >
            See all places <ChevronRight className="w-3 h-3" />
          </button>
        </div>

        <button
          onClick={() => setActiveTab('explorer')}
          className="block w-full text-left relative h-72 rounded-[2.5rem] overflow-hidden shadow-xl group"
        >
          <img
            src={spotlightPlace.image}
            alt={spotlightPlace.name}
            referrerPolicy="no-referrer"
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

          {/* Category chip + rating */}
          <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
            <span className="px-3 py-1.5 bg-med-yellow text-med-dark text-[10px] font-black uppercase tracking-widest rounded-full shadow-lg">
              {spotlightPlace.category}
            </span>
            <span className="px-2.5 py-1 bg-white/90 backdrop-blur-md text-med-dark text-[10px] font-black tracking-wider rounded-full shadow-md flex items-center gap-1">
              <Star className="w-3 h-3 text-yellow-400 fill-yellow-400" />
              <span className="tabular-nums">{spotlightPlace.rating.toFixed(1)}</span>
            </span>
          </div>

          {/* Bottom content */}
          <div className="absolute bottom-0 left-0 right-0 p-6 space-y-2">
            <p className="text-[9px] font-black text-med-yellow uppercase tracking-[0.3em] flex items-center gap-1.5">
              <Sparkles className="w-3 h-3" /> {spotlightPlace.location}
            </p>
            <h3 className="text-white text-3xl font-black tracking-tighter leading-[0.95] uppercase">
              {spotlightPlace.name}
            </h3>
            <p className="text-white/85 text-[11px] font-bold leading-snug flex items-start gap-1.5 line-clamp-2">
              <Baby className="w-3 h-3 mt-0.5 shrink-0 text-med-coral" />
              {spotlightPlace.babyFriendlyTips}
            </p>
          </div>
        </button>
      </section>

      {/* Trip Milestones (The "Baby" Factor) */}
      <section className="space-y-4">
        <div className="flex items-center justify-between px-2">
          <h3 className="text-xs font-black text-gray-400 uppercase tracking-widest">Baby's First Highlights</h3>
          <Star className="w-4 h-4 text-med-yellow" />
        </div>
        <div className="grid grid-cols-2 gap-3">
          <MilestoneItem title="Beach Sand Toes" icon={<Waves className="w-4 h-4" />} />
          <MilestoneItem title="Sagrada Stroll" icon={<Sparkles className="w-4 h-4" />} />
          <MilestoneItem title="First Gelato Link" icon={<UtensilsCrossed className="w-4 h-4" />} />
          <MilestoneItem title="Park Güell Nap" icon={<Baby className="w-4 h-4" />} />
        </div>
      </section>

      {/* Tapas Roulette */}
      <section className="bg-white rounded-[2.5rem] p-8 shadow-sm border border-gray-100 overflow-hidden relative">
        <div className="absolute -top-10 -right-10 w-40 h-40 bg-med-coral/5 rounded-full blur-3xl" />
        <div className="flex items-center gap-4 mb-8">
          <div className="w-12 h-12 bg-med-coral/10 rounded-2xl flex items-center justify-center text-med-coral">
            <UtensilsCrossed className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-2xl font-black text-med-dark uppercase leading-none">TAPAS ROULETTE</h3>
            <p className="text-[10px] font-bold text-gray-400 mt-1 uppercase tracking-widest">Must-try local bites</p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <TapaCard name="Patatas Bravas" description="Spicy potatoes with alioli. The ultimate classic." />
          <TapaCard name="Pan con Tomate" description="Garlic, tomato, olive oil on toast. Simplicity." />
          <TapaCard name="Croquetas" description="Creamy ham or mushroom bites. Crowd pleaser." />
          <TapaCard name="Bombas" description="Barceloneta potato-meat balls with spicy sauce." />
        </div>
      </section>

      {/* Local Lingo */}
      <section className="space-y-4">
        <h3 className="text-xs font-black text-gray-400 uppercase tracking-widest px-2">Catalan Essentials</h3>
        <div className="bg-med-dark rounded-[2.5rem] p-8 text-white">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center text-med-yellow">
              <Languages className="w-5 h-5" />
            </div>
            <p className="text-sm font-black uppercase tracking-widest">Speak like a local</p>
          </div>
          
          <div className="space-y-4">
            <div className="flex justify-between items-center group">
              <div>
                <p className="text-med-yellow text-lg font-black italic">Bon Dia!</p>
                <p className="text-[10px] uppercase font-bold opacity-50">Good Morning</p>
              </div>
              <Heart className="w-4 h-4 text-med-coral opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <div className="h-px bg-white/10 w-full" />
            <div className="flex justify-between items-center group">
              <div>
                <p className="text-med-yellow text-lg font-black italic">Si Us Plau</p>
                <p className="text-[10px] uppercase font-bold opacity-50">Please</p>
              </div>
              <Heart className="w-4 h-4 text-med-coral opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <div className="h-px bg-white/10 w-full" />
            <div className="flex justify-between items-center group">
              <div>
                <p className="text-med-yellow text-lg font-black italic">Moltes Gràcies</p>
                <p className="text-[10px] uppercase font-bold opacity-50">Thank you very much</p>
              </div>
              <Heart className="w-4 h-4 text-med-coral opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          </div>
        </div>
      </section>

      {/* The Mood Section */}
      <section className="grid grid-cols-2 gap-4">
        <div className="bg-med-blue rounded-[2.5rem] p-6 text-white text-center aspect-square flex flex-col items-center justify-center space-y-3">
          <Palmtree className="w-8 h-8 text-med-yellow" />
          <h4 className="text-xl font-black uppercase tracking-tighter leading-none">BEACH<br/>VIBES</h4>
          <p className="text-[9px] font-bold tracking-[0.2em] opacity-60">BARCELONETA</p>
        </div>
        <div className="bg-med-orange rounded-[2.5rem] p-6 text-white text-center aspect-square flex flex-col items-center justify-center space-y-3">
          <MapPin className="w-8 h-8 text-white" />
          <h4 className="text-xl font-black uppercase tracking-tighter leading-none">HIDDEN<br/>GEMS</h4>
          <p className="text-[9px] font-bold tracking-[0.2em] opacity-60">GOTHIC QUARTER</p>
        </div>
      </section>

      {/* Photo Checkpoints */}
      <section className="space-y-4">
        <h3 className="text-xs font-black text-gray-400 uppercase tracking-widest px-2">Iconic Photo Checkpoints</h3>
        <div className="flex gap-4 overflow-x-auto no-scrollbar py-2 -mx-6 px-6">
          {PHOTO_CHECKPOINTS.map((photo) => (
            <motion.button
              key={photo.id}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedPhoto(photo)}
              className="min-w-[200px] text-left aspect-[4/5] relative rounded-[2rem] overflow-hidden shadow-md shrink-0 group border-none p-0 cursor-pointer"
            >
              <img src={photo.image} className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent rotate-180" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-4 left-4">
                <p className="text-white text-xs font-black uppercase tracking-widest">{photo.name}</p>
                <div className="w-6 h-0.5 bg-med-yellow mt-1 rounded-full group-hover:w-12 transition-all" />
              </div>
            </motion.button>
          ))}
        </div>
      </section>

      {/* Photo Info Modal */}
      <AnimatePresence>
        {selectedPhoto && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedPhoto(null)}
              className="fixed inset-0 bg-med-dark/60 backdrop-blur-sm z-[70]"
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-[80] w-[calc(100%-3rem)] max-w-md bg-white rounded-[3rem] shadow-[0_32px_64px_-16px_rgba(0,0,0,0.3)] overflow-hidden border border-white/20"
            >
              <div className="h-48 relative">
                <img src={selectedPhoto.image} className="w-full h-full object-cover" />
                <button 
                  onClick={() => setSelectedPhoto(null)}
                  className="absolute top-4 right-4 w-10 h-10 bg-black/20 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-black/40 transition-colors"
                >
                  <Sparkles className="w-5 h-5 rotate-45" />
                </button>
                <div className="absolute inset-0 bg-gradient-to-t from-white via-white/20 to-transparent" />
              </div>

              <div className="p-8 pt-4 space-y-6">
                <div>
                  <h4 className="text-[10px] font-black text-med-coral uppercase tracking-[0.2em] mb-1">{selectedPhoto.location}</h4>
                  <h3 className="text-3xl font-black text-med-dark leading-[0.9] uppercase tracking-tighter">{selectedPhoto.name}</h3>
                </div>

                <div className="space-y-4">
                  <div className="flex gap-4 items-start p-4 bg-med-blue/5 rounded-2xl">
                    <div className="w-10 h-10 bg-white shadow-sm rounded-xl flex items-center justify-center text-med-blue shrink-0">
                      <Camera className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-[9px] font-black text-gray-400 uppercase tracking-widest mb-0.5">Photography Tip</p>
                      <p className="text-xs text-med-dark font-bold leading-relaxed">{selectedPhoto.tip}</p>
                    </div>
                  </div>

                  <div className="flex gap-4 items-start p-4 bg-med-yellow/5 rounded-2xl">
                    <div className="w-10 h-10 bg-white shadow-sm rounded-xl flex items-center justify-center text-med-yellow-dark shrink-0">
                      <Baby className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-[9px] font-black text-gray-400 uppercase tracking-widest mb-0.5">With the Little One</p>
                      <p className="text-xs text-med-dark font-bold leading-relaxed">{selectedPhoto.babyTip}</p>
                    </div>
                  </div>
                </div>

                <div className="pt-4 flex items-center justify-between border-t border-gray-100">
                  <div className="flex flex-col">
                    <span className="text-[8px] font-black text-gray-400 uppercase tracking-widest leading-none mb-1">Recommended Time</span>
                    <span className="text-[10px] font-black text-med-blue uppercase tracking-tight">{selectedPhoto.time}</span>
                  </div>
                  <button 
                    onClick={() => setSelectedPhoto(null)}
                    className="bg-med-dark text-white px-8 py-4 rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-med-blue transition-colors shadow-lg shadow-med-dark/20"
                  >
                    Got it!
                  </button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Pro Traveler Tips */}
      <section className="space-y-4">
        <h3 className="text-xs font-black text-gray-400 uppercase tracking-widest px-2">Pro Traveler Tips</h3>
        <div className="grid grid-cols-1 gap-4">
          <div className="flex gap-4 bg-white p-6 rounded-[2.5rem] shadow-sm border border-gray-100 items-center">
            <div className="w-12 h-12 bg-med-blue/5 rounded-2xl flex items-center justify-center text-med-blue shrink-0">
              <span className="text-xl font-black">9</span>
            </div>
            <div>
              <h4 className="text-sm font-black text-med-dark uppercase">Dinner starts late</h4>
              <p className="text-[10px] text-gray-400 font-bold uppercase tracking-tight">Most restaurants open at 8:30 PM for dinner. Plan baby's snacks accordingly!</p>
            </div>
          </div>
          
          <div className="flex gap-4 bg-white p-6 rounded-[2.5rem] shadow-sm border border-gray-100 items-center">
            <div className="w-12 h-12 bg-med-orange/5 rounded-2xl flex items-center justify-center text-med-orange shrink-0">
              <span className="text-xl font-black">M</span>
            </div>
            <div>
              <h4 className="text-sm font-black text-med-dark uppercase">Metro is your friend</h4>
              <p className="text-[10px] text-gray-400 font-bold uppercase tracking-tight">The T-Casual card is the best value. Strollers are common and most stations have lifts.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Vibe Check / Playlist */}
      <section className="bg-gradient-to-br from-med-blue to-med-dark rounded-[3rem] p-10 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -mr-20 -mt-20" />
        <h3 className="text-3xl font-black uppercase tracking-tighter mb-8 leading-none">THE TRIP<br/><span className="text-med-yellow">SOUNDTRACK</span></h3>
        
        <div className="space-y-4">
          <div className="flex items-center gap-4 bg-white/5 p-3 rounded-2xl border border-white/10">
            <div className="w-8 h-8 bg-med-yellow rounded-lg flex items-center justify-center text-med-dark">
              <span className="font-black text-xs">01</span>
            </div>
            <div className="flex-1">
              <p className="text-[11px] font-black uppercase tracking-tight italic">"Barcelona"</p>
              <p className="text-[9px] font-bold opacity-50 uppercase">Freddie Mercury & Montserrat Caballé</p>
            </div>
          </div>

          <div className="flex items-center gap-4 bg-white/5 p-3 rounded-2xl border border-white/10">
            <div className="w-8 h-8 bg-med-coral rounded-lg flex items-center justify-center text-white">
              <span className="font-black text-xs">02</span>
            </div>
            <div className="flex-1">
              <p className="text-[11px] font-black uppercase tracking-tight italic">"Mediterranean Sky"</p>
              <p className="text-[9px] font-bold opacity-50 uppercase">Rumba Catalana Mix</p>
            </div>
          </div>

          <div className="flex items-center gap-4 bg-white/5 p-3 rounded-2xl border border-white/10">
            <div className="w-8 h-8 bg-med-blue rounded-lg flex items-center justify-center text-white">
              <span className="font-black text-xs">03</span>
            </div>
            <div className="flex-1">
              <p className="text-[11px] font-black uppercase tracking-tight italic">"Solar Power"</p>
              <p className="text-[9px] font-bold opacity-50 uppercase">Summer Vibes Only</p>
            </div>
          </div>
        </div>

        <a 
          href="https://open.spotify.com/playlist/4x9PGMnrcrkMiITFlhl8FU?si=-984o_cXQnyQ_XPMe_3ZXw&pi=iMflwcWGR7qDo"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 w-full py-4 bg-white text-med-dark rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-med-yellow transition-colors block text-center"
        >
          Open Shared Playlist
        </a>
      </section>
    </div>
  );
};

