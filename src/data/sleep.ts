export interface NapSession {
  time: string;
  duration: string;
  note: string;
}

export interface DaySleep {
  dayNumber: number;
  date: string;
  wakeTime: string;
  bodyWakeTime: string; // DC Time equivalent
  bedtime: string;
  bodyBedtime: string; // DC Time equivalent
  naps: NapSession[];
  adjustmentLevel: number; // 0-100
}

// =============================================================================
// SLEEP PLAN — tuned to Cam's observed baseline over the last 7 days:
//   • Wake     8:15 AM EST
//   • Bedtime  7:15 PM EST
// BCN local = EST + 7 hours (during DST overlap; treat as the body-clock offset).
// Strategy: soft shift — flight-anchored overnight + 2 daytime naps that
// progressively pull the body forward each day until ~Day 5–6.
// =============================================================================
export const SLEEP_DATA: DaySleep[] = [
  {
    dayNumber: 0,
    date: "Sun May 24",
    wakeTime: "8:15 AM",
    bodyWakeTime: "8:15 AM",
    // Real sleep onset on the plane = ~8:15 PM EDT (his normal bedtime),
    // after takeoff, dinner service, and a feed-down for ear pressure.
    bedtime: "~8:15 PM (in-flight)",
    bodyBedtime: "~8:15 PM EDT",
    naps: [
      { time: "1:00 PM", duration: "1h", note: "Pre-flight power nap at home" },
      { time: "~8:15 PM", duration: "~6h", note: "In-flight sleep onset → lands ~8:20 AM BCN" }
    ],
    adjustmentLevel: 100 // At home, no jet lag yet
  },
  {
    dayNumber: 1,
    date: "Mon May 25",
    wakeTime: "8:20 AM",
    bodyWakeTime: "1:20 AM",
    // Anchor an early local bedtime to start the shift — body wants to sleep mid-day.
    bedtime: "7:30 PM",
    bodyBedtime: "12:30 PM",
    naps: [
      { time: "11:30 AM", duration: "1.5h", note: "Arrival crash nap (body still wants overnight sleep)" },
      { time: "3:30 PM", duration: "45m", note: "Refresh nap before bedtime windup" }
    ],
    adjustmentLevel: 20 // Major jet lag — landed on a 7-hour shift
  },
  {
    dayNumber: 2,
    date: "Tue May 26",
    wakeTime: "7:30 AM",
    bodyWakeTime: "12:30 AM",
    bedtime: "8:00 PM",
    bodyBedtime: "1:00 PM",
    naps: [
      { time: "10:30 AM", duration: "1.5h", note: "Morning stroller nap (Ciutadella)" },
      { time: "3:00 PM", duration: "1h", note: "Quiet afternoon nap" }
    ],
    adjustmentLevel: 45
  },
  {
    dayNumber: 3,
    date: "Wed May 27",
    wakeTime: "7:45 AM",
    bodyWakeTime: "12:45 AM",
    bedtime: "8:00 PM",
    bodyBedtime: "1:00 PM",
    naps: [
      { time: "11:00 AM", duration: "1.5h", note: "Park Güell carrier nap" },
      { time: "3:30 PM", duration: "1h", note: "Late afternoon rest" }
    ],
    adjustmentLevel: 70
  },
  {
    dayNumber: 4,
    date: "Thu May 28",
    wakeTime: "8:00 AM",
    bodyWakeTime: "1:00 AM",
    bedtime: "7:30 PM",
    bodyBedtime: "12:30 PM",
    naps: [
      { time: "11:30 AM", duration: "1h", note: "Museum stroll nap after Sagrada" },
      { time: "4:00 PM", duration: "1h", note: "Nap before dinner" }
    ],
    adjustmentLevel: 85
  },
  {
    dayNumber: 5,
    date: "Fri May 29",
    // Hits target baseline today — fully shifted.
    wakeTime: "8:15 AM",
    bodyWakeTime: "1:15 AM",
    bedtime: "7:15 PM",
    bodyBedtime: "12:15 PM",
    naps: [
      { time: "12:00 PM", duration: "1.5h", note: "Midday recharge between Casa Batlló & Vicens" },
      { time: "4:30 PM", duration: "45m", note: "Quick snooze before Gràcia dinner" }
    ],
    adjustmentLevel: 95
  },
  {
    dayNumber: 6,
    date: "Sat May 30",
    wakeTime: "8:15 AM",
    bodyWakeTime: "1:15 AM",
    bedtime: "7:30 PM",
    bodyBedtime: "12:30 PM",
    naps: [
      { time: "1:00 PM", duration: "2h", note: "Long beach nap on Barceloneta" }
    ],
    adjustmentLevel: 100 // Fully adjusted
  },
  {
    dayNumber: 7,
    date: "Sun May 31",
    wakeTime: "8:15 AM",
    bodyWakeTime: "1:15 AM",
    bedtime: "7:30 PM",
    bodyBedtime: "12:30 PM",
    naps: [
      { time: "12:30 PM", duration: "1.5h", note: "Midday rest after Montjuïc cable car" },
      { time: "4:30 PM", duration: "45m", note: "Pre-farewell-dinner nap" }
    ],
    adjustmentLevel: 100
  },
  {
    dayNumber: 8,
    date: "Mon Jun 1",
    wakeTime: "8:15 AM",
    bodyWakeTime: "1:15 AM",
    bedtime: "7:30 PM",
    bodyBedtime: "12:30 PM",
    naps: [
      { time: "11:30 AM", duration: "1.5h", note: "Nap during the BCN → Sitges transfer" },
      { time: "4:00 PM", duration: "1h", note: "Sea-breeze nap once settled" }
    ],
    adjustmentLevel: 100
  },
  {
    dayNumber: 9,
    date: "Tue Jun 2",
    wakeTime: "8:30 AM",
    bodyWakeTime: "1:30 AM",
    bedtime: "7:30 PM",
    bodyBedtime: "12:30 PM",
    naps: [
      { time: "12:30 PM", duration: "1.5h", note: "Beach-day stroller nap" },
      { time: "4:00 PM", duration: "45m", note: "Afternoon doze on the promenade" }
    ],
    adjustmentLevel: 100
  },
  {
    dayNumber: 10,
    date: "Wed Jun 3",
    wakeTime: "8:30 AM",
    bodyWakeTime: "1:30 AM",
    bedtime: "7:30 PM",
    bodyBedtime: "12:30 PM",
    naps: [
      { time: "12:00 PM", duration: "2h", note: "Long Sitges beach nap (final full day)" }
    ],
    adjustmentLevel: 100
  },
  {
    dayNumber: 11,
    date: "Thu Jun 4",
    // Early wake to make the 11:15 AM BCN flight; bedtime is post-arrival home.
    wakeTime: "6:30 AM",
    bodyWakeTime: "11:30 PM (prev night)",
    bedtime: "9:00 PM EDT",
    bodyBedtime: "9:00 PM EDT",
    naps: [
      { time: "9:00 AM BCN", duration: "1.5h", note: "In-flight nap after takeoff" },
      { time: "1:00 PM EDT", duration: "1h", note: "Post-customs crash nap on the drive home" }
    ],
    adjustmentLevel: 100 // Back home; body re-syncs to EST within ~3–5 days after
  }
];
