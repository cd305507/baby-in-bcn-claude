import React from 'react';
import { motion } from 'motion/react';
import { Sun, Clock, Coffee, Sparkles, Brain, ArrowRight } from 'lucide-react';
import { ZzzIcon } from './icons/ZzzIcon';
import { SLEEP_DATA, DaySleep } from '../data/sleep';

const SleepCard = ({ day, isCurrent }: { day: DaySleep; isCurrent: boolean; key?: React.Key }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    className={`bg-white rounded-3xl p-6 shadow-sm border ${isCurrent ? 'border-indigo-200 ring-2 ring-indigo-500/20' : 'border-gray-100'} relative overflow-hidden`}
  >
    {isCurrent && (
      <div className="absolute top-4 right-4 px-2 py-1 bg-indigo-500 text-white text-[8px] font-black uppercase tracking-widest rounded-md animate-pulse">
        Current Day
      </div>
    )}
    
    <div className="flex items-center gap-3 mb-6">
      <div className="w-10 h-10 bg-indigo-50 rounded-2xl flex items-center justify-center text-indigo-500">
        <ZzzIcon className="w-5 h-5" />
      </div>
      <div>
        <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">{day.date}</p>
        <h3 className="text-xl font-black text-med-dark">Day {day.dayNumber} Schedule</h3>
      </div>
    </div>

    <div className="grid grid-cols-2 gap-4 mb-6">
      <div className="p-4 bg-yellow-50 rounded-2xl relative overflow-hidden group">
        <Sun className="absolute -bottom-2 -right-2 w-12 h-12 text-yellow-200 opacity-20 group-hover:rotate-12 transition-transform" />
        <p className="text-[10px] font-black text-yellow-600 uppercase mb-2">Estimated Wake</p>
        <p className="text-2xl font-black text-med-dark leading-none mb-1">{day.wakeTime}</p>
        <p className="text-[9px] font-bold text-yellow-600/60 uppercase">Body: {day.bodyWakeTime} DC</p>
      </div>
      <div className="p-4 bg-indigo-50 rounded-2xl relative overflow-hidden group">
        <ZzzIcon className="absolute -bottom-2 -right-2 w-12 h-12 text-indigo-200 opacity-20 group-hover:-rotate-12 transition-transform" />
        <p className="text-[10px] font-black text-indigo-600 uppercase mb-2">Target Bedtime</p>
        <p className="text-2xl font-black text-med-dark leading-none mb-1">{day.bedtime}</p>
        <p className="text-[9px] font-bold text-indigo-600/60 uppercase">Body: {day.bodyBedtime} DC</p>
      </div>
    </div>

    <div>
      <div className="flex items-center gap-2 mb-3">
        <Clock className="w-3.5 h-3.5 text-indigo-400" />
        <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Planned Naps</p>
      </div>
      <div className="space-y-2">
        {day.naps.map((nap, i) => (
          <div key={i} className="flex items-center justify-between p-3 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center text-indigo-500 shadow-sm">
                <Coffee className="w-4 h-4" />
              </div>
              <div>
                <p className="text-xs font-black text-med-dark">{nap.time}</p>
                <p className="text-[9px] text-gray-400 uppercase font-bold">{nap.note}</p>
              </div>
            </div>
            <div className="text-right">
              <span className="text-[10px] font-black text-indigo-500 bg-white px-2 py-1 rounded-md shadow-sm">
                {nap.duration}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>

    <div className="mt-6 pt-4 border-t border-gray-100">
      <div className="flex items-center justify-between mb-1.5">
        <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Adjustment Level</p>
        <p className="text-[10px] font-black text-indigo-500">{day.adjustmentLevel}%</p>
      </div>
      <div className="h-1.5 w-full bg-gray-100 rounded-full overflow-hidden">
        <motion.div 
          initial={{ width: 0 }}
          animate={{ width: `${day.adjustmentLevel}%` }}
          className="h-full bg-gradient-to-r from-indigo-300 to-indigo-500" 
        />
      </div>
    </div>
  </motion.div>
);

export const NapTab = () => {
  // Compute the live day from the real calendar relative to trip start.
  // Returns -1 pre-trip and post-trip so nothing is highlighted.
  const TRIP_START = new Date('2026-05-24T00:00:00');
  const today = new Date();
  const diffDays = Math.floor((today.getTime() - TRIP_START.getTime()) / (1000 * 60 * 60 * 24));
  const currentDayIndex = SLEEP_DATA.findIndex(d => d.dayNumber === diffDays);

  return (
    <div className="space-y-8">
      <header className="relative py-10 px-8 bg-indigo-600 rounded-[2.5rem] text-white overflow-hidden shadow-xl shadow-indigo-200">
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
          className="absolute -top-12 -right-12 w-48 h-48 bg-indigo-500/20 rounded-full blur-3xl" 
        />
        <div className="relative z-10 flex flex-col items-center text-center">
          <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center mb-6 shadow-xl">
            <Sparkles className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-4xl font-black mb-2 tracking-tighter uppercase font-display leading-[0.85]">
            JET LAG<br />DEFENDER
          </h2>
          <p className="text-indigo-100 text-xs font-bold uppercase tracking-widest leading-relaxed max-w-[200px]">
            Managing the 7-hour shift from DC to BCN
          </p>
        </div>
      </header>

      <section className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100 relative overflow-hidden">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 bg-indigo-50 rounded-2xl flex items-center justify-center text-indigo-500">
            <Brain className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-xl font-black text-med-dark uppercase leading-none">The 7-Hour Rule</h3>
            <p className="text-[10px] font-bold text-gray-400 mt-1 uppercase tracking-widest">Shift Strategy</p>
          </div>
        </div>
        
        <div className="space-y-4">
          <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-2xl">
            <div className="flex-1 text-center">
              <p className="text-[10px] font-black text-gray-400 uppercase mb-1">DC Time</p>
              <p className="text-lg font-black text-med-dark capitalize">DC Est</p>
            </div>
            <ArrowRight className="w-4 h-4 text-indigo-200" />
            <div className="flex-1 text-center">
              <p className="text-[10px] font-black text-indigo-500 uppercase mb-1">+7 Hours</p>
              <p className="text-lg font-black text-med-dark capitalize font-display">Barcelona</p>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-3">
            <div className="p-3 border border-gray-100 rounded-2xl">
              <p className="text-[9px] font-black text-gray-400 uppercase mb-1">Cam's wake (EST)</p>
              <p className="text-xs font-black text-med-dark">3:15 PM BCN</p>
            </div>
            <div className="p-3 border border-gray-100 rounded-2xl">
              <p className="text-[9px] font-black text-gray-400 uppercase mb-1">Cam's bedtime (EST)</p>
              <p className="text-xs font-black text-med-dark">2:15 AM BCN</p>
            </div>
          </div>
        </div>
      </section>

      {/* Plan Assumptions — the baseline the rest of this tab's schedule is built on. */}
      <section className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 bg-med-yellow/15 rounded-2xl flex items-center justify-center text-med-yellow-dark">
            <Sparkles className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-xl font-black text-med-dark uppercase leading-none">Plan Assumptions</h3>
            <p className="text-[10px] font-bold text-gray-400 mt-1 uppercase tracking-widest">What this schedule is built on</p>
          </div>
        </div>

        <div className="space-y-2.5">
          <div className="flex items-center justify-between p-3 rounded-2xl bg-yellow-50 border border-yellow-100">
            <div className="flex items-center gap-2.5">
              <Sun className="w-4 h-4 text-yellow-600" />
              <p className="text-[11px] font-black text-med-dark uppercase tracking-wider">Home wake</p>
            </div>
            <p className="text-sm font-black text-med-dark tabular-nums">8:15 AM <span className="text-[9px] text-gray-400 font-bold tracking-widest">EST</span></p>
          </div>

          <div className="flex items-center justify-between p-3 rounded-2xl bg-indigo-50 border border-indigo-100">
            <div className="flex items-center gap-2.5">
              <ZzzIcon className="w-4 h-4 text-indigo-500" />
              <p className="text-[11px] font-black text-med-dark uppercase tracking-wider">Home bedtime</p>
            </div>
            <p className="text-sm font-black text-med-dark tabular-nums">7:15 PM <span className="text-[9px] text-gray-400 font-bold tracking-widest">EST</span></p>
          </div>

          <div className="flex items-center justify-between p-3 rounded-2xl bg-med-blue/5 border border-med-blue/10">
            <div className="flex items-center gap-2.5">
              <ArrowRight className="w-4 h-4 text-med-blue" />
              <p className="text-[11px] font-black text-med-dark uppercase tracking-wider">Time zone shift</p>
            </div>
            <p className="text-sm font-black text-med-dark">BCN is <span className="text-med-blue">+7 hours</span></p>
          </div>

          <div className="flex items-center justify-between p-3 rounded-2xl bg-gray-50 border border-gray-100">
            <div className="flex items-center gap-2.5">
              <Brain className="w-4 h-4 text-gray-500" />
              <p className="text-[11px] font-black text-med-dark uppercase tracking-wider">Strategy</p>
            </div>
            <p className="text-[11px] font-bold text-med-dark text-right">Soft shift via flight sleep + 2 naps/day</p>
          </div>
        </div>

        <p className="text-[10px] font-bold text-gray-400 leading-snug mt-4 px-1">
          Based on Cam's typical rise &amp; bedtime over the last 7 days. The full schedule
          below is tuned to these numbers — if anything drifts before the trip, tell
          Claude and the plan will be re-tuned.
        </p>
      </section>

      <div className="space-y-4">
        <div className="flex items-center justify-between px-2">
          <h3 className="text-xs font-black text-gray-400 uppercase tracking-widest">Planned Schedule</h3>
          <span className="text-[10px] font-bold text-indigo-500 bg-indigo-50 px-2 py-0.5 rounded-full">Transition Phase</span>
        </div>
        
        <div className="grid gap-6">
          {SLEEP_DATA.map((day, i) => (
            <SleepCard key={i} day={day} isCurrent={i === currentDayIndex} />
          ))}
        </div>
      </div>
    </div>
  );
};
