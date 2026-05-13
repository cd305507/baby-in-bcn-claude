# BABY IN BCN — Project Context for Claude

> This file is auto-loaded whenever Claude works in this repo. It captures
> everything Claude needs to pick up the project from a cold start —
> survives any conversation compaction or session loss. Keep it current.

## What this is

A React/Vite/Firebase trip-companion app for **Carolyn + Olivia + baby Cameron**
visiting Barcelona + Sitges, **May 24 → June 4, 2026**.

- **Live URL:** https://baby-in-bcn-claude.web.app
- **Local source:** `/Users/cadavids/baby-in-bcn`
- **GitHub repo:** https://github.com/cd305507/baby-in-bcn (private)
- **Deploy:** `npm run deploy` (runs `vite build` then `firebase deploy --only hosting,firestore:rules --non-interactive`)
- **Local dev:** `npm run dev` → http://localhost:3000

## Stack

- React 19 + TypeScript + Vite 6
- Tailwind 4 (`@tailwindcss/vite`)
- Framer Motion (`motion/react`)
- react-leaflet + leaflet
- @dnd-kit (packing list drag-to-reorder)
- firebase 12 (auth + firestore + hosting)
- vite-plugin-pwa (service worker, offline, update banner)

## Firebase

- **Project ID:** `baby-in-bcn-claude` (separate from user's other Firebase
  project `gen-lang-client-0392630404` which is her family fitness game).
  Never touch that other project.
- **Web app config** in `.env.local` (NOT committed). Vite env vars all
  prefixed `VITE_FIREBASE_*`.
- **Auth:** Google sign-in. User is `carolynmdavidson2@gmail.com`.
- **Firestore rules:** `firestore.rules` — only signed-in users can r/w
  `trips/baby-in-bcn` (the single shared doc).
- **Hosting headers:** `firebase.json` sets `no-store` on `index.html` so
  deploys appear on phones immediately (modulo service worker — see PWA).
- The CLI is logged in. Deploys work without prompts.
- Stranded old project at https://gen-lang-client-0392630404.web.app still
  serves an old snapshot but never gets new deploys (`.firebaserc` points
  to `baby-in-bcn-claude`).

## Architecture

```
src/
├── App.tsx              ← root: tab state, hash routing, live status bar
├── main.tsx             ← React root, wraps AuthProvider
├── index.css            ← Tailwind theme + iOS safe-area + custom colors
├── types.ts             ← all data interfaces
├── vite-env.d.ts        ← PWA types
├── lib/
│   ├── firebase.ts      ← Firebase SDK init, single TRIP_DOC_PATH
│   ├── auth.tsx         ← AuthContext + useAuth hook
│   └── sync.ts          ← useTripState() → reads/writes trips/baby-in-bcn
├── components/
│   ├── icons/ZzzIcon.tsx
│   ├── AuthChip.tsx
│   ├── UpdatePrompt.tsx ← PWA update banner
│   ├── WelcomeTab.tsx   ← homepage (hero, today's adventure, spotlight, etc.)
│   ├── ItineraryTab.tsx ← day-by-day timeline + map modal
│   ├── HubTab.tsx       ← flights, lodging, weather, bookings, emergency
│   ├── PackingTab.tsx   ← drag-sortable packing + outfit guide
│   ├── ExplorerTab.tsx  ← 41 places, search/filter, gamified visited XP
│   ├── NapTab.tsx       ← jet-lag plan with assumption card
│   └── DailyMap.tsx     ← Leaflet map with transit pills (zoom>=13) +
│                          tap-to-expand transit detail modal
└── data/
    ├── itinerary.ts     ← ITINERARY_DATA (12 days, Day 0-11)
    ├── logistics.ts     ← FLIGHTS, LODGING, TICKETS, EMERGENCY
    ├── weather.ts       ← BARCELONA_FORECAST, SITGES_FORECAST, FULL_FORECAST
    ├── places.ts        ← PLACES_DATA (41 attractions, isBackup tagged)
    ├── packing.ts       ← INITIAL_PACKING_LIST, outfits, recommendations
    ├── sleep.ts         ← SLEEP_DATA (per-day jet-lag plan)
    └── locations.ts     ← LOCATION_COORDINATES (name → {lat, lng})
```

## Critical product decisions (don't re-litigate)

- **TRIP_START** is hardcoded `new Date('2026-05-24T00:00:00')` in `App.tsx`
  and `WelcomeTab.tsx`. Update both if the date changes.
- **Cam's home sleep baseline:** Wake 8:15 AM EST, Bedtime 7:15 PM EST, +7h
  to BCN. Updated based on his actual last-7-days rhythm. Lives in
  `sleep.ts` for Day 0 and in `NapTab.tsx` Plan Assumptions card.
- **Live nap chip rules** (`App.tsx` `liveStatus`):
  - Overnight (7:15 PM – 8:15 AM local clock) → `SLEEPING` (indigo, pulse).
  - Pre-trip: hardcoded nap windows 10:00–11:30 AM and 2:30–3:30 PM →
    `NAPPING`. Otherwise countdown to next nap/sleep.
  - On-trip: active event tagged `babyMode: 'Nap'` in daytime window →
    `NAPPING`. Otherwise countdown via itinerary's next Nap event, rolling
    over to tomorrow's first if today's are exhausted.
  - Countdown format: `Xhr Ym UNTIL NAP` or `Xhr Ym UNTIL SLEEP`. Never
    "DONE" — there's always a next event.
  - `LIVE: PACKING` pre-trip, otherwise the active event's location.
- **Day map (`DailyMap.tsx`):**
  - Hotel always rendered as stop #1 on regular days. On arrival days
    (first event has no `transit` field, e.g. Day 1 "Land at BCN") the
    hotel is NOT prepended.
  - Consecutive events at the same coords merge into one marker
    (Day 0's 10 IAD events → one IAD marker).
  - Transit pills only render when `zoom >= 13`. Color-coded to the line
    (Driving=indigo, Transit=teal, Walking=gray, Flight=amber).
  - Flight detection: legs > 10° apart (~1100km) auto-detected → ✈️
    with amber dashed line.
  - Tap a pill → opens `selectedLeg` modal with all transit options.
  - `loopBackToIndex` prop draws a closing polyline from last stop to the
    hotel when the day ends at the hotel (with deduplication).
- **PWA:** vite-plugin-pwa with `registerType: 'prompt'`. Update banner
  fires when a new SW is detected. Service worker requires Node
  `--experimental-global-webcrypto` flag (set in `build` script).
- **Firestore sync:** `trips/baby-in-bcn` single doc holds
  `{ packedIds, customPacking, visitedIds }`. `useTripState()` provides
  optimistic local state + Firestore sync.
- **Tickets bundled as static files** in `public/tickets/`, NOT Firebase
  Storage (avoids Blaze plan / credit card requirement). PDF + per-pass
  QR images. Sagrada Família and Park Güell are wired. Casa Batlló /
  Casa Vicens / Telefèric still pending PDFs from user.

## Style / data conventions

- Brand colors are in `src/index.css` `@theme`: `med-blue`, `med-dark`,
  `med-yellow`, `med-coral`, `med-orange`, `med-azure`, `med-bg`.
- Tailwind utility-only — no separate stylesheets.
- Use `tabular-nums` for any time/number that should not jiggle on tick.
- All emoji-as-text for icons preferred over Lucide where the emoji is
  more semantic (place markers especially).
- The Sagrada Família reference is abbreviated to **"Sag Fm"** in
  transit-leg copy (where text gets cramped). Full name everywhere else.
- "Sleep" labels: NAPPING vs SLEEPING is a hard split — naps are
  daytime only (7 AM – 5 PM); anything outside is SLEEPING.

## User preferences (from working with Carolyn)

- Wants minimal jargon. Plain English over technical detail. If you find
  yourself dumping bullet lists of code paths, you've already lost her.
- "What do you recommend?" → commit to one answer with reasoning, don't
  fork the conversation into more options.
- Iterations on UI: she'll tell you exactly what's off ("the line is
  shifted right", "the pill is overlapping"). Trust her eyeballs over
  your math.
- Wants the chip / countdown / live state to **always show something
  useful** — never blank, never "DONE", never silently hidden.
- Will swap to "Other" custom answers in option pickers if none of the
  given options fit.

## Workflow

When a change is requested:
1. Edit code.
2. Run `npm run deploy` from `/Users/cadavids/baby-in-bcn`.
3. Report deploy success + URL.
4. Carolyn refreshes phone; if cached, the PWA update banner fires.

Common commands:
- `npm run dev` — local dev server (port 3000)
- `npm run build` — Vite build (needs `--experimental-global-webcrypto`)
- `npm run deploy` — build + Firebase deploy
- `npm run lint` — `tsc --noEmit`
- `./node_modules/.bin/tsc --noEmit` — typecheck only

## Trip-specific data

| | |
|---|---|
| Outbound flight | UA 992 · IAD → BCN · May 24 6:30 PM · 7h 50m |
| Return flight | UA 991 · BCN → IAD · Jun 4 11:15 AM · 8h 45m |
| Seats | 33D & 33F (out), 34A & 34C (return) |
| Apartment (BCN) | Stay U-nique Pau Claris · Carrer de Pau Claris 99 |
| Apartment (Sitges) | InSitges Ribera 41 #3 · Passeig de la Ribera 41 |
| Tickets purchased | Sagrada Família, Park Güell, Casa Batlló, Casa Vicens, Telefèric de Montjuïc |
| Tickets with PDF + QR wired | Sagrada Família (3 passes), Park Güell (3 passes) |
| Tickets awaiting PDF from user | Casa Batlló, Casa Vicens, Telefèric |

## Open work

- Casa Batlló, Casa Vicens, Telefèric — wire their PDFs + QR codes when
  Carolyn provides them. Process: copy PDF to `public/tickets/`, extract
  embedded QRs with the pymupdf script (in `/tmp/extract_qr.py` last
  used), add `attachmentUrl` and `passes[]` to the entry in
  `src/data/logistics.ts`.

## What NOT to do

- Don't change `TRIP_START` or trip dates without explicit ask.
- Don't touch the other Firebase project `gen-lang-client-0392630404`.
- Don't push to the GitHub repo without explicit ask (private repo,
  she's careful about it after a GitGuardian false-positive scare).
- Don't reintroduce a separate "panel below the map" — the transit pills
  belong ON the map (color-coded, zoom-gated).
- Don't add a transit pill that says "NAP DONE" / "SLEEP DONE" — Carolyn
  hates these.
- Don't suggest re-architecting things she's already accepted.
