/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Clock,
  ChevronRight,
  ChevronLeft,
  Calendar,
  Briefcase,
  MapPin,
  Plane,
  ArrowUp
} from 'lucide-react';
import { ZzzIcon } from './components/icons/ZzzIcon';
import { AuthChip } from './components/AuthChip';
import { UpdatePrompt } from './components/UpdatePrompt';
import { ITINERARY_DATA } from './data/itinerary';
import { ItineraryTab } from './components/ItineraryTab';
import { HubTab } from './components/HubTab';
import { PackingTab } from './components/PackingTab';
import { ExplorerTab } from './components/ExplorerTab';
import { NapTab } from './components/NapTab';
import { WelcomeTab } from './components/WelcomeTab';

type TabType = 'itinerary' | 'hub' | 'packing' | 'explorer' | 'nap' | 'welcome';

export default function App() {
  const [activeTab, setActiveTab] = useState<TabType>('welcome');
  // Lazy-init to today's day index so the first paint is correct even if the
  // user never clicks the bottom-nav icon (e.g., they land via a Welcome CTA
  // or a deep link). Before May 24 the diff is negative → falls back to Day 0.
  // The bottom-nav handler further down re-snaps to today on every icon click.
  const [currentDayIndex, setCurrentDayIndex] = useState(() => {
    const tripStart = new Date('2026-05-24T00:00:00').getTime();
    const diffDays = Math.floor((Date.now() - tripStart) / (1000 * 60 * 60 * 24));
    const idx = ITINERARY_DATA.findIndex(d => d.dayNumber === diffDays);
    return idx !== -1 ? idx : 0;
  });
  const [currentTime, setCurrentTime] = useState(new Date());
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [itinerarySticky, setItinerarySticky] = useState(false);

  // Handle hash-based navigation for tickets
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash.startsWith('#t-')) {
        setActiveTab('hub');
        // Let HubTab handle the scroll as it has IDs on cards
      } else if (hash.startsWith('#place-')) {
        // Jump from the Welcome Today's Spotlight (or anywhere else) straight
        // to a specific attraction card in the Explorer tab. The Explorer
        // tab may not be mounted yet when the hash changes, and react-leaflet
        // / framer-motion can delay paint of the card list — so we poll a
        // few times for the element to exist before giving up.
        setActiveTab('explorer');
        const id = hash.slice(1); // drop the leading '#'
        let tries = 0;
        const findAndScroll = () => {
          const el = document.getElementById(id);
          if (el) {
            el.scrollIntoView({ behavior: 'smooth', block: 'start' });
            // Add a brief highlight ring so the user sees which card they landed on
            el.classList.add('ring-2', 'ring-med-coral', 'ring-offset-2');
            setTimeout(() => {
              el.classList.remove('ring-2', 'ring-med-coral', 'ring-offset-2');
            }, 2500);
            // Clear the hash so back-navigation doesn't loop
            setTimeout(() => {
              if (window.location.hash === hash) {
                window.history.replaceState(null, '', window.location.pathname + window.location.search);
              }
            }, 2000);
            return;
          }
          tries++;
          if (tries < 10) setTimeout(findAndScroll, 150);
        };
        setTimeout(findAndScroll, 200);
      } else if (hash.startsWith('#itinerary-day-')) {
        const parts = hash.split('-');
        const dayIdx = parseInt(parts[2]);
        if (!isNaN(dayIdx)) {
          setActiveTab('itinerary');
          setCurrentDayIndex(dayIdx);
          
          // Optional: handle event scrolling if index provided
          if (parts.length > 4 && parts[3] === 'event') {
            const eventIdx = parseInt(parts[4]);
            if (!isNaN(eventIdx)) {
              setTimeout(() => {
                const el = document.getElementById(`event-${eventIdx}`);
                if (el) el.scrollIntoView({ behavior: 'smooth', block: 'center' });
              }, 500);
            }
          }
        }
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    // Initial check
    handleHashChange();
    
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // For Demo: Set trip start to May 24, 2026
  const TRIP_START = useMemo(() => {
    return new Date('2026-05-24T00:00:00');
  }, []);

  const liveDayIndex = useMemo(() => {
    const diffDays = Math.floor((currentTime.getTime() - TRIP_START.getTime()) / (1000 * 60 * 60 * 24));
    const day = ITINERARY_DATA.findIndex(d => d.dayNumber === diffDays);
    return day !== -1 ? day : 0;
  }, [currentTime, TRIP_START]);

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 60000);
    return () => clearInterval(timer);
  }, []);

  // Scroll listener for top button with simple threshold for non-itinerary tabs
  useEffect(() => {
    if (activeTab === 'itinerary') {
      setShowScrollTop(itinerarySticky);
      return;
    }

    let timeoutId: ReturnType<typeof setTimeout>;
    const handleScroll = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        const scrolled = window.scrollY > 500;
        if (scrolled !== showScrollTop) {
          setShowScrollTop(scrolled);
        }
      }, 10);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timeoutId);
    };
  }, [showScrollTop, activeTab, itinerarySticky]);

  const liveStatus = useMemo(() => {
    const nowMinutes = currentTime.getHours() * 60 + currentTime.getMinutes();
    const isPreTrip = currentTime < TRIP_START;

    // Cam's overnight sleep window (matches the home baseline in the Nap tab).
    // 7:15 PM → 8:15 AM local clock = SLEEPING.
    const BEDTIME_MIN = 19 * 60 + 15;   // 7:15 PM
    const WAKE_MIN = 8 * 60 + 15;       // 8:15 AM
    const isOvernightHours = nowMinutes >= BEDTIME_MIN || nowMinutes < WAKE_MIN;
    const isDaytimeMin = (m: number) => m >= 420 && m < 1020;

    // PRE-TRIP: use a plausible home-baseline nap schedule so the chip always
    // shows something useful — SLEEPING overnight, NAPPING during the two
    // assumed daytime naps, and an "Xhr Ym TO NAP/SLEEP" countdown in between.
    if (isPreTrip) {
      const MORNING_NAP_START = 10 * 60;          // 10:00 AM
      const MORNING_NAP_END   = 11 * 60 + 30;     // 11:30 AM
      const AFTERNOON_NAP_START = 14 * 60 + 30;   // 2:30 PM
      const AFTERNOON_NAP_END   = 15 * 60 + 30;   // 3:30 PM

      const inMorningNap = nowMinutes >= MORNING_NAP_START && nowMinutes < MORNING_NAP_END;
      const inAfternoonNap = nowMinutes >= AFTERNOON_NAP_START && nowMinutes < AFTERNOON_NAP_END;
      const isPreTripNapping = inMorningNap || inAfternoonNap;

      // Pick the next sleep event for the countdown.
      let nextEventMin: number | null = null;
      let nextIsOvernightLocal = false;
      if (!isOvernightHours && !isPreTripNapping) {
        if (nowMinutes < MORNING_NAP_START) {
          nextEventMin = MORNING_NAP_START;
        } else if (nowMinutes < AFTERNOON_NAP_START) {
          nextEventMin = AFTERNOON_NAP_START;
        } else {
          nextEventMin = BEDTIME_MIN;
          nextIsOvernightLocal = true;
        }
      }

      return {
        current: 'Packing',
        nextNapMins: nextEventMin !== null ? nextEventMin - nowMinutes : null,
        isNapping: isPreTripNapping && !isOvernightHours,
        isOvernightSleep: isOvernightHours,
        nextIsOvernight: nextIsOvernightLocal,
        showNapChip: true,
        eventIndex: 0,
      };
    }

    // ON-TRIP: full event-based logic.
    const liveDay = ITINERARY_DATA[liveDayIndex];
    const parsedEvents = liveDay.events.map((e, idx) => ({
      ...e,
      index: idx,
      minutes: (() => {
        const [time, period] = e.time.split(' ');
        let [hours, minutes] = time.split(':').map(Number);
        if (period === 'PM' && hours !== 12) hours += 12;
        if (period === 'AM' && hours === 12) hours = 0;
        return hours * 60 + (minutes || 0);
      })()
    })).sort((a, b) => a.minutes - b.minutes);

    const firstEvent = parsedEvents[0];
    const lastEvent = parsedEvents[parsedEvents.length - 1];

    const activeEvent = [...parsedEvents].reverse().find(e => e.minutes <= nowMinutes);
    const current = (
      nowMinutes < firstEvent.minutes - 60 ? "Resting at Hotel" :
      nowMinutes < firstEvent.minutes ? "Getting Ready" :
      nowMinutes > lastEvent.minutes + 120 ? "Day Complete" :
      activeEvent ? activeEvent.location : "In Transit"
    );

    const isOnEvent = !!activeEvent && current === activeEvent.location;
    const isNapping =
      isOnEvent &&
      activeEvent!.babyMode === 'Nap' &&
      isDaytimeMin(activeEvent!.minutes) &&
      !isOvernightHours;

    const isOvernightSleep =
      isOvernightHours ||
      (isOnEvent && activeEvent!.babyMode === 'Nap' && !isDaytimeMin(activeEvent!.minutes));

    // Next sleep countdown: today's remaining naps, then tomorrow's first.
    let nextNap = parsedEvents.find(e => e.babyMode === 'Nap' && e.minutes > nowMinutes);
    let nextNapMins: number | null = nextNap ? nextNap.minutes - nowMinutes : null;
    let nextIsOvernight = !!(nextNap && !isDaytimeMin(nextNap.minutes));

    if (nextNapMins === null) {
      const tomorrow = ITINERARY_DATA[liveDayIndex + 1];
      if (tomorrow) {
        const tomorrowNaps = tomorrow.events
          .filter(e => e.babyMode === 'Nap')
          .map(e => {
            const [t, period] = e.time.split(' ');
            let [h, m] = t.split(':').map(Number);
            if (period === 'PM' && h !== 12) h += 12;
            if (period === 'AM' && h === 12) h = 0;
            return h * 60 + (m || 0);
          })
          .sort((a, b) => a - b);
        if (tomorrowNaps.length > 0) {
          nextNapMins = (24 * 60 - nowMinutes) + tomorrowNaps[0];
          nextIsOvernight = !isDaytimeMin(tomorrowNaps[0]);
        }
      }
    }

    return {
      current,
      nextNapMins,
      isNapping,
      isOvernightSleep,
      nextIsOvernight,
      showNapChip: true,
      eventIndex: activeEvent ? activeEvent.index : 0,
    };
  }, [liveDayIndex, currentTime]);

  const formatCountdown = (mins: number | null, label: 'NAP' | 'SLEEP' = 'NAP') => {
    if (mins === null) return 'AWAKE';
    if (mins < 60) return `${mins}m UNTIL ${label}`;
    const h = Math.floor(mins / 60);
    const m = mins % 60;
    return `${h}hr ${m}m UNTIL ${label}`;
  };

  const tabs: { id: TabType; label: string; icon: React.ReactNode }[] = [
    { id: 'itinerary', label: 'Itinerary', icon: <Calendar className="w-6 h-6" /> },
    { id: 'hub', label: 'The Hub', icon: <Plane className="w-6 h-6" /> },
    { id: 'packing', label: 'Packing', icon: <Briefcase className="w-6 h-6" /> },
    { id: 'explorer', label: 'Explorer', icon: <MapPin className="w-6 h-6" /> },
    { id: 'nap', label: 'Nap Schedule', icon: <ZzzIcon className="w-6 h-6" /> }
  ];

  return (
    <div className="min-h-screen bg-med-bg text-med-dark font-sans selection:bg-med-orange/30 pb-32">
      {/* Scrollable Header Section (Branding + Nav) */}
      <div className="bg-med-blue text-white shadow-xl">
        <div 
          onClick={() => {
            setActiveTab('welcome');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="px-6 py-4 flex justify-between items-center border-b border-white/10 cursor-pointer group active:bg-white/5 transition-colors"
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-med-yellow rounded-xl flex items-center justify-center text-med-dark font-black text-xl shadow-inner group-hover:rotate-12 transition-transform">
              B
            </div>
            <div>
              <h1 className="text-lg font-black tracking-tighter leading-none group-hover:text-med-yellow transition-colors">BABY IN BCN</h1>
            </div>
          </div>
          <div
            className="flex items-center gap-3"
            onClick={(e) => e.stopPropagation()}
          >
            <span className="text-white/40 tabular-nums font-medium hidden xs:inline text-xs">
              {currentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
            </span>
            <AuthChip />
          </div>
        </div>
        
        {/* Main Tabs Navigation */}
        <div className="bg-med-blue/80 backdrop-blur-md border-b border-white/10 flex">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => {
                setActiveTab(tab.id);
                // Switching to Itinerary always jumps to today's day
                // (defaults to Day 0 before the trip starts).
                if (tab.id === 'itinerary') {
                  setCurrentDayIndex(liveDayIndex);
                }
                window.scrollTo({ top: 0, behavior: 'smooth' });
                // Clear hash when manually switching tabs to prevent sticky highlights/scrolling
                if (window.location.hash) {
                  window.history.replaceState(null, '', window.location.pathname + window.location.search);
                }
              }}
              title={tab.label}
              className={`flex-1 py-5 transition-all relative flex items-center justify-center ${
                activeTab === tab.id 
                  ? 'text-med-yellow' 
                  : 'text-white/30 hover:text-white/60'
              }`}
            >
              <div className={`transition-transform duration-300 ${activeTab === tab.id ? 'scale-110' : 'scale-100'}`}>
                {tab.icon}
              </div>
              {activeTab === tab.id && (
                <motion.div 
                  layoutId="activeTabUnderline"
                  className="absolute bottom-0 left-4 right-4 h-1 bg-med-yellow rounded-t-full shadow-[0_-2px_10px_rgba(255,191,0,0.5)]" 
                />
              )}
            </button>
          ))}
        </div>
      </div>
      
      {/* Live Status Bar - Stays Sticky at the Top */}
      <div 
        className="sticky top-0 z-50 bg-med-dark/95 px-6 py-2.5 flex items-center justify-between text-[10px] font-black uppercase tracking-widest backdrop-blur-md border-b border-white/5 shadow-lg"
      >
          <div 
            onClick={() => {
              setActiveTab('itinerary');
              setCurrentDayIndex(liveDayIndex);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex items-center gap-3 cursor-pointer hover:opacity-80 transition-opacity flex-1 min-w-0"
          >
            <div className="relative flex items-center justify-center h-2 w-2 shrink-0">
              <motion.span 
                animate={{ scale: [1, 2.5, 1], opacity: [0.5, 0, 0.5] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="absolute h-full w-full rounded-full bg-green-400"
              />
              <span className="relative h-1.5 w-1.5 rounded-full bg-green-400 shadow-[0_0_8px_rgba(74,222,128,0.5)]" />
            </div>
            <div className="truncate flex items-center gap-1.5 min-w-0">
              <span className="text-white/50 shrink-0 text-[10px]">LIVE:</span>
              <span className="text-white truncate hover:text-med-yellow transition-colors">{liveStatus.current}</span>
            </div>
          </div>
          
          {liveStatus.showNapChip && (
            <div className="flex items-center gap-4 shrink-0 border-l border-white/10 pl-4 ml-4">
              <button
                onClick={() => {
                  setActiveTab('nap');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className={`flex items-center gap-2 px-2 py-1 rounded-md transition-all duration-500 scale-100 hover:scale-105 active:scale-95 ${
                  liveStatus.isOvernightSleep || liveStatus.isNapping
                    ? 'bg-indigo-500 text-white shadow-lg shadow-indigo-500/30'
                    : liveStatus.nextNapMins !== null && liveStatus.nextNapMins <= 30
                      ? 'bg-indigo-500/30 text-indigo-200'
                      : 'text-med-yellow bg-med-yellow/10 hover:bg-med-yellow/20'
                }`}
              >
                <ZzzIcon
                  className={`w-3 h-3 ${liveStatus.isOvernightSleep || liveStatus.isNapping ? 'animate-pulse' : ''}`}
                />
                <span className="font-bold">
                  {liveStatus.isOvernightSleep
                    ? 'SLEEPING'
                    : liveStatus.isNapping
                      ? 'NAPPING'
                      : formatCountdown(
                          liveStatus.nextNapMins,
                          liveStatus.nextIsOvernight ? 'SLEEP' : 'NAP'
                        )}
                </span>
              </button>
            </div>
          )}
        </div>
      <main className="max-w-2xl mx-auto px-6 py-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
          >
            {activeTab === 'itinerary' && (
              <ItineraryTab 
                currentDayIndex={currentDayIndex} 
                setCurrentDayIndex={setCurrentDayIndex} 
                liveStatus={liveStatus}
                onStickyChange={setItinerarySticky}
              />
            )}
            {activeTab === 'hub' && <HubTab />}
            {activeTab === 'packing' && <PackingTab />}
            {activeTab === 'explorer' && <ExplorerTab />}
            {activeTab === 'nap' && <NapTab />}
            {activeTab === 'welcome' && <WelcomeTab setActiveTab={setActiveTab} liveStatus={liveStatus} />}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Floating Scroll to Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, y: 10, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.9 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="fixed bottom-8 right-6 z-[60] w-12 h-12 bg-med-blue text-white rounded-2xl shadow-xl shadow-med-blue/30 flex items-center justify-center hover:bg-med-dark active:scale-95 transition-all border border-white/10"
          >
            <ArrowUp className="w-6 h-6" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* PWA update / offline-ready banner */}
      <UpdatePrompt />
    </div>
  );
}
