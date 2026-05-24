import { DayItinerary } from '../types';
import { BARCELONA_FORECAST, SITGES_FORECAST } from './weather';

export const ITINERARY_DATA: DayItinerary[] = [
  {
    dayNumber: 0,
    date: "Sun May 24",
    weather: "✈️ 81°/66°",
    weatherDetail: BARCELONA_FORECAST[0],
    title: "The Journey: Alexandria to Barcelona",
    vibeCoding: "High-Efficiency Transit & Pre-Flight Zen",
    events: [
      {
        time: "2:40 PM",
        location: "Depart Alexandria",
        address: "618 South Royal Street Alexandria, VA 22314",
        mapsUrl: "https://www.google.com/maps/search/?api=1&query=618+South+Royal+Street+Alexandria+VA",

        babyMode: "Routine",
        gear: "Stroller",
        transit: {
          from: "618 South Royal Street Alexandria, VA 22314",
          to: "IAD",
          options: [
            { method: "Family Car", details: "⭐ Mom & Dad driving (~50 min)", isRecommended: true },
            { method: "Metro", details: "Silver Line to Dulles (75 min)" },
            { method: "Walking", details: "N/A" }
          ],
          insight: "💡 Allow ~50 mins door-to-curbside including drop-off.",
          departureTime: "2:40 PM"
        },
        vibe: "Departure Ritual",
        placeEmoji: "🏡",
        description: "Final bag check. Cameron in stroller. Liquids and formula pre-loaded in an easy-access pouch.",
        localsSecret: "Drop curbside at International Departures (Door 5) if traffic is heavy — saves 5–10 min vs. parking."
      },
      {
        time: "3:30 PM",
        location: "Arrival at IAD",
        address: "Dulles International Airport, Sterling, VA",
        mapsUrl: "https://www.google.com/maps/search/?api=1&query=Dulles+International+Airport",

        babyMode: "Routine",
        gear: "Stroller",
        vibe: "The 3-Hour Rule",
        placeEmoji: "🛫",
        description: "International flight + infant logistics = real buffer. 3 hours pre-departure is the right floor.",
        localsSecret: "Family restroom on the upper level (departures) is cleaner and quieter than anything past security."
      },
      {
        time: "3:45 PM",
        location: "Bag Drop & Passports",
        address: "United International Check-in, IAD",
        mapsUrl: "https://www.google.com/maps/search/?api=1&query=Dulles+International+Airport",

        babyMode: "Routine",
        gear: "Stroller",
        vibe: "Document Checkpoint",
        placeEmoji: "🛂",
        description: "Verify all 3 passports at the counter and drop checked bags. Have Cam's birth certificate handy as a backup.",
        localsSecret: "Ask the agent to print 'INF / Bassinet' on Cam's boarding pass at the counter — speeds up pre-boarding."
      },
      {
        time: "4:20 PM",
        location: "TSA PreCheck",
        address: "IAD Main Security Checkpoint",
        mapsUrl: "https://www.google.com/maps/search/?api=1&query=Dulles+International+Airport",

        babyMode: "Routine",
        gear: "Carrier",
        vibe: "Security Sprint",
        placeEmoji: "🛡️",
        description: "Account for manual screening of milk, formula, or baby gear. Pull liquids out before stepping up to the belt.",
        localsSecret: "At PreCheck you can usually carry Cam through the metal detector in the wrap — no need to take him out."
      },
      {
        time: "4:50 PM",
        location: "Concourse Trek (AeroTrain)",
        address: "IAD AeroTrain to C/D gates",
        mapsUrl: "https://www.google.com/maps/search/?api=1&query=Dulles+International+Airport",

        babyMode: "Routine",
        gear: "Stroller",
        vibe: "Long Hallway",
        placeEmoji: "🚆",
        description: "AeroTrain to C or D gates — plan ~20 min door-to-gate including platform wait.",
        localsSecret: "Cars at the back of the AeroTrain are usually the emptiest — easier with a stroller."
      },
      {
        time: "5:25 PM",
        location: "Gate Tag Check",
        address: "UA 992 Gate, IAD",
        mapsUrl: "https://www.google.com/maps/search/?api=1&query=Dulles+International+Airport",

        babyMode: "Routine",
        gear: "Stroller",
        vibe: "Last-Mile Logistics",
        placeEmoji: "🏷️",
        description: "Visit the gate agent to get 'Gate Check' tags for stroller and car seat. Confirm the bassinet row.",
        localsSecret: "Ask if anything has opened up in a bulkhead or exit-adjacent row — agents will sometimes move you for legroom."
      },
      {
        time: "5:35 PM",
        location: "Pre-Boarding (Carolyn)",
        address: "UA 992 Gate, IAD",
        babyMode: "Routine",
        gear: "Stroller",
        vibe: "Setting Up Camp",
        placeEmoji: "🎟️",
        description: "Board early with car seat, diaper bags, and overhead gear. Get Cam's space set up before the rush.",
        localsSecret: "Wipe down the tray table and armrests with a sanitizing wipe — 30 seconds, huge peace of mind."
      },
      {
        time: "6:05 PM",
        location: "Last Call (Olivia + Cam)",
        address: "UA 992 Gate, IAD",
        babyMode: "Play",
        gear: "Stroller",
        vibe: "Maximize Floor Time",
        placeEmoji: "🚪",
        description: "Board at the last possible minute. Lets Cam stretch, crawl, and burn energy until doors close.",
        localsSecret: "Walk laps in the gate area — the rhythm helps wear him out so the takeoff feed-to-sleep actually takes."
      },
      {
        time: "6:15 PM",
        location: "Doors Close",
        address: "UA 992 Jet Bridge, IAD",
        babyMode: "Routine",
        gear: "N/A",
        vibe: "Strict Cutoff",
        placeEmoji: "🚪",
        description: "All passengers must be on the jet bridge. Doors close 15 min before scheduled departure."
      },
      {
        time: "6:30 PM",
        location: "UA 992 Departure",
        address: "IAD → BCN",
        mapsUrl: "https://www.google.com/maps/search/?api=1&query=Dulles+International+Airport",

        babyMode: "Nap",
        gear: "N/A",
        vibe: "Wheels Up",
        placeEmoji: "✈️",
        description: "Flight duration: 7h 54m. Seats 33D/33F. Use the 'Soft Shift' — feed during ascent to help ears, then ease into the overnight sleep window.",
        bookingDetails: {
          confirmationCode: "UA-992",
          notes: "IAD → BCN. Overnight flight. Arrives 8:20 AM."
        },
        localsSecret: "For overnight flights, use a white-noise app and a lightweight blackout cover for the bassinet to signal 'nighttime' to the baby."
      }
    ]
  },
  {
    dayNumber: 1,
    date: "Mon May 25",
    weather: "⛅ 82°/66°",
    weatherDetail: BARCELONA_FORECAST[1],
    title: "Arrival & Eixample Base Camp",
    vibeCoding: "Smooth Landing & Apartment Settling",
    events: [
      {
        time: "8:20 AM",
        location: "Land at BCN Terminal 1",
        address: "08820 El Prat de Llobregat, Barcelona",
        mapsUrl: "https://www.google.com/maps/search/?api=1&query=Barcelona+Airport+Terminal+1",

        babyMode: "Routine",
        gear: "N/A",
        vibe: "Touchdown",
        placeEmoji: "🛬",
        description: "UA 992 lands. Welcome Pickups driver will be waiting in the arrivals hall.",
        localsSecret: "BCN Terminal 1 has a very clean family room with changing stations near the luggage carousels if you need to reset before the ride."
      },
      {
        time: "9:40 AM",
        location: "Meet Welcome Pickups Driver",
        address: "BCN Terminal 1 Arrivals Hall",
        mapsUrl: "https://www.google.com/maps/search/?api=1&query=Barcelona+Airport+Terminal+1+Arrivals",
        babyMode: "Routine",
        gear: "Stroller",
        vibe: "Curbside Hand-off",
        placeEmoji: "🤝",
        description: "Estimated time to find the driver after clearing EES + baggage. Driver will be holding a sign with our name in the arrivals hall.",
        localsSecret: "Stop at the family room near the carousels for a quick diaper change and reset before the 35-min drive into Eixample."
      },
      {
        time: "10:30 AM",
        location: "Stay U-nique Apartments Pau Claris",
        address: "Carrer de Pau Claris, 99, 08009 Barcelona",
        mapsUrl: "https://www.google.com/maps/search/?api=1&query=Stay+U-nique+Apartments+Pau+Claris+Barcelona",
        babyMode: "Routine",
        gear: "Stroller",
        transit: {
          from: "BCN Terminal 1",
          to: "Carrer de Pau Claris, 99",
          options: [
            { method: "Cabify Kids", details: "⭐ Cabify Kids (35 min)", isRecommended: true, bookingUrl: "cabify://cabify/" },
            { method: "Bus", details: "Aerobús to Plaça de Catalunya (45 min)" },
            { method: "Walking", details: "N/A" }
          ],
          insight: "💡 Stress-free transfer from airport with pre-installed car seat."
        },
        vibe: "Home Base Alpha",
        placeEmoji: "🏠",
        description: "Estimated arrival and check-in. Code 34713/2026. Crib & High Chair pre-set. 10:30 AM early check-in requested via Stay U-nique.",
        localsSecret: "There is a 24-hour pharmacy (Farmàcia 1896) one block away on Carrer d'Aragó for any baby supplies you might have forgotten.",
        bookingDetails: {
          confirmationCode: "34713/2026",
          checkIn: "Ready by 10:30 AM (Requested)",
          notes: "3BR w/ Balcony."
        }
      },
      {
        time: "11:30 AM",
        location: "Passeig de Gràcia: Casa Batlló → Casa Milà",
        address: "Passeig de Gràcia, Barcelona",
        mapsUrl: "https://www.google.com/maps/search/?api=1&query=Passeig+de+Gracia+Barcelona",
        babyMode: "Nap",
        gear: "Stroller",
        transit: {
          from: "Carrer de Pau Claris, 99",
          to: "Passeig de Gràcia, Barcelona",
          options: [{ method: "Walking", details: "🚶 5 min easy walk", isRecommended: true }],
        },
        vibe: "Modernist First Look",
        placeEmoji: "🏙️",
        description: "Walk the 4 blocks from Casa Batlló (Pg Gràcia 43) up to Casa Milà / La Pedrera (Pg Gràcia 92). On the way: look up for the 'Manzana de la Discòrdia' (Casa Lleó-Morera at #35, Casa Amatller at #41, Casa Batlló at #43 — three modernista masters on one block). Stop at Cacao Sampaka (Pg Gràcia 92) for a hot chocolate while Cam naps. Don't queue the buildings today — you have tickets for the inside on Day 5.",
        photoOp: "The stunning facade of Casa Batlló at sunset.",
        localsSecret: "Slip into the Jardins de Palau Robert (Pg Gràcia 107) — free entry, leafy hidden courtyard with benches, perfect to extend a stroller nap away from street noise.",

        pickpocketAlert: "Wide tourist boulevard = opportunistic theft. Watch for the 'help with directions' approach near the Casa Batlló intersection — someone with a map asks for help while a partner closes in on your bag. Keep stroller items zipped and a cross-body bag diagonal across your front.",
      },
      {
        time: "1:00 PM",
        location: "Apartment Reset + Light Lunch",
        address: "Carrer de Pau Claris, 99, Fl 3, Dr 2",
        mapsUrl: "https://www.google.com/maps/search/?api=1&query=Stay+U-nique+Apartments+Pau+Claris+Carrer+de+Pau+Claris+99+Barcelona",
        babyMode: "Routine",
        gear: "N/A",
        transit: {
          from: "Casa Milà",
          to: "Carrer de Pau Claris, 99",
          options: [{ method: "Walking", details: "🚶 6 min easy walk back south on Pau Claris", isRecommended: true }],
        },
        vibe: "Jet-Lag Recovery",
        placeEmoji: "🏠",
        description: "Back to the apartment for a real reset: light lunch from the fridge or a takeaway grab from Las Muns empanadas (Roger de Llúria 109, 6 min) or Honest Greens to-go, then a full nap for Cam + horizontal time for you. Day 1 isn't the day to push — let the jet lag dissolve. Unpack the essentials: bottles, sterilizer, white-noise machine, blackout curtain attached to the crib window.",
        localsSecret: "The Caprabo supermarket at Pau Claris 102 (across the street) has Spain's full baby aisle — Hero Solo & Nutribén purées, Dodot diapers, Mustela wipes. Stock up the first afternoon and you won't think about it again.",
        reminder: "Set the white-noise machine and blackout curtain BEFORE Cam goes down. He's at the +6hr time zone shift point — getting this first nap right anchors the rest of the trip's sleep."
      },
      {
        time: "3:30 PM",
        location: "Plaça de Catalunya + Cafè Zürich",
        address: "Plaça de Catalunya, 1",
        mapsUrl: "https://www.google.com/maps/search/?api=1&query=Cafe+Zurich+Placa+de+Catalunya+Barcelona",
        babyMode: "Routine",
        gear: "Stroller",
        transit: {
          from: "Carrer de Pau Claris, 99",
          to: "Plaça de Catalunya",
          options: [{ method: "Walking", details: "🚶 4 min easy walk south", isRecommended: true }],
        },
        vibe: "Soft City Reentry",
        placeEmoji: "☕",
        description: "Easy afternoon stretch — 4 min walk to Plaça de Catalunya, the city's literal center. Grab an outdoor table at Cafè Zürich (Pl. Catalunya 1) — the historic corner café where every Barcelona local has, at some point, said 'meet me at Zürich.' Watch the buskers + La Rambla flow start, sip a cortado, let Cam take in the square's open air. 45 min here, then back to the apartment to regroup before dinner.",
        recommendedDish: "Café con leche + a slice of tortilla española",
        priceRange: "$15–25",
        localsSecret: "If Zürich is full, walk 1 block east to the El Corte Inglés rooftop terrace (9th floor, free elevator) — panoramic city view, family-clean bathrooms with changing tables, and you can pick up any baby items you forgot to pack.",
        pickpocketAlert: "Plaça de Catalunya is the #1 pickpocket spot in the city — entire Roma networks work this square. Lap-bag on the chair = lap-bag stolen. Bag on the floor between your feet, phone OFF the table. Watch for the 'football trick' (one drops a wallet, accomplices use the moment of distraction) and the 'spilled drink' setup."
      },
      {
        time: "5:30 PM",
        location: "Delivery Dinner (Glovo)",
        address: "Carrer de Pau Claris, 99, Fl 3, Dr 2",
        mapsUrl: "https://glovoapp.com/es/en/barcelona/",
        recommendedDish: "Order by 5:45 PM → food by 6:30 PM (before Cam's 7:15 bedtime)",
        priceRange: "$30–50",
        babyMode: "Routine",
        gear: "N/A",
        transit: {
          from: "Plaça de Catalunya",
          to: "Apartment",
          options: [{ method: "Walking", details: "🚶 4 min walk back to apartment", isRecommended: true }],
        },
        vibe: "Jet-Lag Night",
        placeEmoji: "🛵",
        description: "Don't push for a sit-down dinner on arrival day — Cam will melt down and you'll regret it. Order Glovo by 5:45 PM, food lands by 6:30 PM, you eat on the apartment terrace while Cam plays in the bouncer. Suggested first-night picks (all from the Glovo Early Dinner list on the homepage): (1) **Honest Greens** — roast chicken bowl + salads, 25–35 min, easiest reset food. (2) **La Tagliatella** — pasta + bread, 30–40 min, comfort food. (3) **Goiko Grill** — smash burgers + fries, 30–40 min. Pair with the Caprabo run you did this afternoon (cheese, jamón, fruit, a bottle of Albariño).",
        localsSecret: "Glovo accepts US credit cards. Address is auto-filled if you already used it for the Caprabo afternoon run. Don't tip in-app — round up at the door in cash if you want.",
        backup: {
          name: "Honest Greens (walk-in pickup)",
          reason: "If Glovo is slow or surge-priced, walk 9 min to Honest Greens (Pg de Gràcia 78) and pick up directly. Ready in 10–15 min at the counter, same food, no delivery fee. You'll be back at the apartment before Cam realizes you left.",
          mapsUrl: "https://www.google.com/maps/search/?api=1&query=Honest+Greens+Passeig+de+Gracia+Barcelona"
        }
      },
      {
        time: "7:00 PM",
        location: "Back Home",
        address: "Carrer de Pau Claris, 99",
        mapsUrl: "https://www.google.com/maps/search/?api=1&query=Stay+U-nique+Apartments+Pau+Claris+Carrer+de+Pau+Claris+99+Barcelona",
        babyMode: "Routine",
        gear: "N/A",
        transit: {
          from: "Apartment",
          to: "Apartment",
          options: [{ method: "Walking", details: "🚶 You're already home — just settle in", isRecommended: true }],
        },
        vibe: "Winding Down",
        placeEmoji: "🌙",
        description: "Get settled. Lights out by 8 PM for everyone.",
        localsSecret: "The Condis supermarket nearby on Carrer de València has excellent fresh fruit purees and baby-grade yogurt."
      }
    ]
  },
  {
    dayNumber: 2,
    date: "Tue May 26",
    weather: "☀️ 84°/67°",
    weatherDetail: BARCELONA_FORECAST[2],
    title: "Ciutadella + El Born + Boqueria",
    vibeCoding: "Park Life & Market Wandering",
    events: [
      {
        time: "10:00 AM",
        location: "Parc de la Ciutadella",
        address: "Passeig de Picasso, 21",
        mapsUrl: "https://www.google.com/maps/search/?api=1&query=Parc+de+la+Ciutadella+Barcelona",
        babyMode: "Play",
        gear: "Stroller",
        transit: {
          from: "Carrer de Pau Claris, 99",
          to: "Passeig de Picasso, 21",
          options: [
            { method: "Metro", details: "⭐ L4 Urquinaona to Ciutadella (12 min)", isRecommended: true },
            { method: "Bus", details: "V15/V17 to Parc Ciutadella (15 min)" },
            { method: "Cabify Kids", details: "Cabify (10 min)", bookingUrl: "cabify://cabify/" },
            { method: "Walking", details: "20 min walk" }
          ],
          insight: "💡 Metro L4 is efficient and relatively stroller-friendly at these stations."
        },
        vibe: "Green Space Zen",
        placeEmoji: "🌳",
        description: "Barcelona's central 70-acre park, built on the demolished citadel. A loose 2-hour loop in this order: (1) Enter via Passeig de Picasso through the iron Hivernacle greenhouse (free, glass-roofed Victorian-era tropical hall — Cam will look up at the palms). (2) Walk 4 min north to the **Cascada Monumental** — a massive triumphal-arch waterfall fountain. Antoni Gaudí worked on the hydraulics here as an architecture student (his first paid project, 1875). (3) Pass the **woolly mammoth statue** (the only animal left from a planned prehistoric set) — easy Cam photo. (4) Loop around the central **lake** — you can rent a rowboat for €6, or just watch the ducks for free. (5) End at the **Arc de Triomf** at the north entrance — built for the 1888 World's Fair, brick Catalan modernisme, frames a perfect family photo. Bring a picnic blanket: the central lawns are the city's best tummy-time grass.",
        photoOp: "The Cascada Monumental's central golden Quadriga of Aurora at the top of the staircase — golden hour around 6 PM lights it up.",
        localsSecret: "Behind the Cascada, climb the side staircase to the upper terrace — it's almost always empty, and the view down OVER the fountain back toward the city is the photographer's angle nobody knows. There's also a Hivernacle café with stroller-easy bathrooms if you need a mid-park reset."
      },
      {
        time: "12:30 PM",
        location: "Boqueria Market",
        address: "La Rambla, 91",
        mapsUrl: "https://www.google.com/maps/search/?api=1&query=Mercat+de+Sant+Josep+de+la+Boqueria+Barcelona",
        babyMode: "Routine",
        gear: "Carrier",
        transit: {
          from: "Ciutadella",
          to: "Boqueria",
          options: [
            { method: "Walking", details: "⭐ Walk through Born (20 min)", isRecommended: true },
            { method: "Bus", details: "V15 to Liceu (18 min)" },
            { method: "Metro", details: "L4 to L3 transition (22 min)" },
            { method: "Cabify Kids", details: "Cabify (12 min)", bookingUrl: "cabify://cabify/" }
          ],
          insight: "💡 Carrier wins on this walk — Carrer Montcada is cobbled.",
          walkStops: [
            { name: "Estació de França", note: "1929 Catalan-modernist train station — iron + glass roof, worth a peek inside." },
            { name: "El Born CC", note: "Former 1876 market, now a museum over 1714 Roman + medieval ruins. Pop in if open." },
            { name: "Santa Maria del Mar", note: "Spain's finest Catalan-Gothic basilica — free entry, towering nave." },
            { name: "Carrer Montcada", note: "Medieval palace street with the Picasso Museum facade." }
          ]
        },
        vibe: "Market Energy",
        placeEmoji: "🍅",
        description: "Barcelona's iconic 1217 market — 300+ stalls under a wrought-iron + stained-glass roof. The walk in from Ciutadella through El Born is half the experience (see transit insight). Once inside, do this loop: (1) **Pinotxo Bar** (stall 466–470, right inside the main entrance) — Juanito Bayén's tiny counter, 8 stools, sit and order the chickpeas + baby squid, or whatever he points at. Cash only, 11 AM–2 PM, sometimes a 15-min wait but worth it. (2) **El Quim de la Boqueria** (stall 582–584) — second-most-famous counter, fried eggs over baby squid is the signature. (3) The **fruit pyramid stalls at the main entrance** — Insta-famous but actually overpriced; take the photo, then buy from the back (Plaza de la Gardunya entrance) where the locals shop. (4) Pick up a **tinned-fish + cheese + pa amb tomàquet picnic kit** from the back stalls for tomorrow's beach day. Use the carrier — aisles are too tight for a stroller and the crowd does NOT yield.",
        recommendedDish: "Pinotxo Bar's chickpeas with morcilla (blood sausage) + sautéed baby squid",
        priceRange: "$30–50",
        photoOp: "The mosaic 'BOQUERIA' arch at the main entrance, with Cam in carrier silhouetted against the colors inside.",
        localsSecret: "The back stalls near Pl. de la Gardunya are 30–40% cheaper for identical produce — locals do their daily shopping there. Also: the cured-meat stand 'Jamones Joselito' has the best pata negra in the city; ask for a paper plate of just-shaved jamón ibérico de bellota to eat standing.",

        pickpocketAlert: "Tight crowded aisles are pickpocket gold. Watch for the 'accidental bump' — teens or kids press past you while a partner lifts your wallet. Use the carrier (not the stroller) and keep zipped bags in FRONT of your body, never on your hip or back.",
      },
      {
        time: "2:30 PM",
        location: "Stroller Nap via Rambla de Catalunya",
        address: "Rambla de Catalunya",
        mapsUrl: "https://www.google.com/maps/search/?api=1&query=Rambla+de+Catalunya+Barcelona",
        babyMode: "Nap",
        gear: "Stroller",
        transit: {
          from: "Boqueria",
          to: "Rambla de Catalunya",
          options: [{ method: "Walking", details: "🚶 Walk up La Rambla (10 min)", isRecommended: true }],
        },
        vibe: "City Rhythm",
        placeEmoji: "💤",
        description: "Start at Plaça de Catalunya and walk UP the central pedestrian promenade (linden trees overhead, no scooters allowed in the center lane). Specific landmark sequence: (1) at **Gran Via** intersection — bronze sculpture 'La Coqueta' (the kissing couple) on your right. (2) at **Carrer Aragó** — the bronze 'Giraffe Sense Domador' (giraffe without trainer) by Josep Granyer — Insta-favorite, easy Cam-with-statue photo. (3) at **Carrer Consell de Cent** — Casa Pia Batlló (#118) by Vilaseca, often overlooked but a perfect modernista facade. (4) at **Carrer Diputació** — bronze 'El Bou i l'Elefant' (the bull + elephant, also Granyer). (5) at **Carrer Provença** — the 'Pensadora' (meditating woman) sculpture. (6) at **Carrer Mallorca / 126** — Casa Serra by Puig i Cadafalch, the neo-Gothic palace that's now Barcelona's diputació (provincial council). The full walk is 1.2 km, ~25 min at stroller pace, finishes at the apartment door. All bronze sculptures are at chest height — perfect baby-finger touching.",
        localsSecret: "Stop at Granja Viader (Carrer d'En Xuclà 4, one block off La Rambla) for a Cacaolat — invented here in 1925, the OG chocolate milk. Easy stroller turn into the shop. OR detour 2 min east to Carrer de Pelai for Bubó's window display — Barcelona's most famous pastry shop, the chocolate sculptures are worth a glance even if you don't buy."
      },
      {
        time: "5:30 PM",
        location: "Tapas 24 Dinner",
        address: "Carrer de la Diputació, 269",
        mapsUrl: "https://www.google.com/maps/search/?api=1&query=Tapas+24+Barcelona",
        rating: 4.2,
        reviewCount: 8241,
        recommendedDish: "The 'Bikini' (truffle bikini sandwich) with jamón ibérico",
        priceRange: "$50–70",
        babyMode: "Routine",
        gear: "Stroller",
        transit: {
          from: "Carrer de Pau Claris, 99",
          to: "Carrer de la Diputació, 269",
          options: [{ method: "Walking", details: "🚶 6 min local walk", isRecommended: true }],
        },
        vibe: "Gourmet Tapas",
        placeEmoji: "🥘",
        description: "Famous tapas place, early entry is key for space.",
        localsSecret: "The 'McBaix' (mini burgers) and the 'Bikini' (truffle bikini sandwich) are must-orders here.",
        backup: {
          name: "Cervecería Catalana",
          reason: "10 min walk up Pau Claris from Rambla de Catalunya → Mallorca 236. If the Tapas 24 wait is brutal, Cervecería has more tables, similar Catalan tapas, and you avoid backtracking with a stroller-tired Cam.",
          mapsUrl: "https://www.google.com/maps/search/?api=1&query=Cerveceria+Catalana+Barcelona"
        }
      },
      {
        time: "7:00 PM",
        location: "Back Home",
        address: "Carrer de Pau Claris, 99",
        mapsUrl: "https://www.google.com/maps/search/?api=1&query=Stay+U-nique+Apartments+Pau+Claris+Carrer+de+Pau+Claris+99+Barcelona",
        babyMode: "Routine",
        gear: "N/A",
        transit: {
          from: "Tapas 24",
          to: "Carrer de Pau Claris, 99",
          options: [{ method: "Walking", details: "🚶 6 min local walk", isRecommended: true }],
          departureTime: "6:50 PM"
        },
        vibe: "Winding Down",
        placeEmoji: "🌙",
        description: "Post-tapas stroll back. Bath and bedtime prep.",
        localsSecret: "If you need a quiet evening walk, check out the nearby Passatge de Permanyer—a beautiful English-style mews street that's usually empty.",
        reminder: "Tomorrow: Park Güell 10:30 AM timed entry. Open Cabify Kids by 9:45 AM and request a car seat — Cabify-with-seat can take 10–15 min to match in the morning. Bring a printed backup of the QR.",
      }
    ]
  },
  {
    dayNumber: 3,
    date: "Wed May 27",
    weather: "☀️ 86°/70°",
    weatherDetail: BARCELONA_FORECAST[3],
    title: "Park Güell + Hidden Laberint",
    vibeCoding: "Fairy Tale Views & Maze Garden",
    events: [
      {
        time: "10:30 AM",
        location: "Park Güell",
        address: "08024 Barcelona",
        mapsUrl: "https://www.google.com/maps/search/?api=1&query=Park+Guell+Barcelona",
        babyMode: "Routine",
        gear: "Carrier",
        transit: {
          from: "Carrer de Pau Claris, 99",
          to: "08024 Barcelona",
          options: [
            { method: "Cabify Kids", details: "⭐ Door-to-door Comfort (15 min)", isRecommended: true, bookingUrl: "cabify://cabify/" },
            { method: "Metro", details: "L3 to Vallcarca + Walk (30 min)" },
            { method: "Bus", details: "Bus 24 from Psg Gracia (25 min)" }
          ],
          insight: "💡 Park Güell is hilly - the carrier is essential for the restricted zone.",
          departureTime: "10:00 AM"
        },
        vibe: "Masterpiece Views",
        placeEmoji: "🦎",
        description: "Gaudí's whimsical hilltop park — UNESCO World Heritage, originally designed (1900–14) as a luxury housing estate that never sold. The 10:30 AM ticket gives you 30-min entry window to the **Monumental Zone** (the iconic paid section). Suggested 90-min route once inside: (1) Enter via **Carrer de Larrard south gate** — you immediately see the famous twin **Gingerbread Houses** (the Hansel + Gretel pavilions, one is now the gift shop). (2) Climb the staircase past **El Drac** — the mosaic salamander/dragon fountain — Cam needs to touch the tiles. (3) Continue into the **Hypostyle Hall** — 86 Doric columns originally meant to be the estate's covered market. (4) Up to the **Nature Square (Greek Theatre)** — the massive trencadís (broken-tile mosaic) serpentine bench where Gaudí tested ergonomics by sitting workers on wet plaster. Sit and stare at the city. (5) Exit via the **Austrian Gardens** (free zone) — Catalan-themed children's playground where Cam can crawl in the shade. Picnic on the lawn outside the Monumental Zone with the Boqueria spread from yesterday.",
        prebookInfo: { required: true, note: "BOOKED for 10:30 AM. Show QR at the Carrer de Larrard gate; staff fast-track families." },
        photoOp: "El Drac (the mosaic salamander) head-on at the bottom of the dragon staircase — get there in the first 10 min after your ticket time, before the next entry batch arrives.",
        localsSecret: "The Carmel Bunkers (Turó de la Rovira) are a 20-min walk further up the hill — abandoned anti-aircraft battery with 360° city views and almost no tourists. Skip if Cam is fading, but if he's still up it's the city's best free overlook. Also: the **Casa-Museu Gaudí** (the salmon-pink house where Gaudí lived 1906–25) is in the free zone — €5.50, takes 30 min, easy with a carrier.",

        pickpocketAlert: "Entrance / exit crowds are the target zone — everyone is distracted scanning QR tickets. Watch for the 'do you speak English?' approach: a smiling woman with a map asks for directions while her partner works your back pocket. Wear backpacks ON YOUR FRONT here.",
      },
      {
        time: "12:30 PM",
        location: "La Panxa del Bisbe (Park Güell lunch)",
        address: "Carrer de Rabassa, 37",
        mapsUrl: "https://www.google.com/maps/search/?api=1&query=La+Panxa+del+Bisbe+Gracia+Barcelona",
        rating: 4.4,
        reviewCount: 1124,
        recommendedDish: "Croqueta de jamón ibérico + carpaccio de pulpo + arroz cremoso",
        priceRange: "$50–75",
        babyMode: "Routine",
        gear: "Stroller",
        transit: {
          from: "Park Güell",
          to: "La Panxa del Bisbe",
          options: [
            { method: "Walking", details: "⭐ 12 min downhill walk south on Travessera de Dalt → Carrer Rabassa", isRecommended: true },
            { method: "Cabify Kids", details: "Cabify (6 min)", bookingUrl: "cabify://cabify/" }
          ],
          insight: "💡 Mostly downhill from Park Güell — easy with the stroller after the climb. Stops at one mid-walk pharmacy (Travessera de Dalt 87) if you need anything.",
        },
        vibe: "Hidden Gràcia Lunch",
        placeEmoji: "🍽️",
        description: "La Panxa del Bisbe (literally 'The Bishop's Belly') — a tiny 28-seat Catalan tapas spot in upper Gràcia that locals guard fiercely. Modern takes on Catalan classics: octopus carpaccio, the famous croquetas, creative arroces (rice dishes). Book ahead. Highchair available; baby-warm staff. Perfect post-Park-Güell wind-down before Laberint.",
        localsSecret: "Order the daily 'arroz' — they only make one per day and it sells out by 2 PM. The chef typically does an arròs cremós with seasonal seafood. Pair with a glass of Xarel·lo from the local Penedès hills.",
        backup: {
          name: "El Glop",
          reason: "If La Panxa is fully booked, El Glop (Carrer Sant Lluís 24) is 8 min further south into Gràcia — classic Catalan grill house with rabbit, escalivada, and grilled meats. Big rustic dining rooms, faster service, kid-easy.",
          mapsUrl: "https://www.google.com/maps/search/?api=1&query=El+Glop+Gracia+Barcelona"
        }
      },
      {
        time: "2:00 PM",
        location: "Parc del Laberint d'Horta",
        address: "Passeig dels Castanyers, 1",
        mapsUrl: "https://www.google.com/maps/search/?api=1&query=Parc+del+Laberint+d%27Horta+Barcelona",
        babyMode: "Nap",
        gear: "Stroller",
        vibe: "Hidden Oasis",
        placeEmoji: "🌀",
        description: "Barcelona's oldest preserved garden (1791) and the city's best-kept Gaudí-free secret. Three-tiered Italianate hillside garden in the residential Horta neighborhood — most tourists never make it this far north. Loop in this order: (1) **Lower terrace (the Maze)** — the actual cypress hedge labyrinth, 750m of paths converging on a marble statue of Eros at the center. Cam will love being pushed through. (2) Climb the staircase to the **middle terrace** with the **Neoclassical Pavilion** — pink stuccoed twin colonnades framing a fountain. (3) Up again to the **upper terrace's Romantic Garden** — a wilder, English-style level with a fake medieval-style tower, hidden grottos, a small pond with carp, and benches under cypress trees for a long stroller nap. FREE on Wednesdays (today!) and Sundays; €2.23 other days. About 1.5 hours total at relaxed pace.",
        photoOp: "Top of the maze hedge staircase, looking down INTO the maze with the neoclassical pavilion framing the shot — golden hour around 4 PM lights up the green.",
        transit: {
          from: "La Panxa del Bisbe",
          to: "Laberint d'Horta",
          options: [
            { method: "Cabify Kids", details: "⭐ Direct Ride (12 min north on Ronda de Dalt)", isRecommended: true, bookingUrl: "cabify://cabify/" },
            { method: "Bus", details: "V19 to V21 Connection (35 min)" },
            { method: "Metro", details: "L3 to Mundet + 10 min walk uphill (30 min total)" }
          ],
          insight: "💡 Cabify is the right call — Laberint is in upper Horta, no direct transit and the walk from Mundet metro is uphill."
        },
        localsSecret: "The Eros statue at the maze center has a 'wish slot' under the right foot — local couples leave small notes here. Also: there's a quiet stone bench RIGHT next to the upper pond that's the city's most peaceful nap spot in summer (no tourists ever climb that high)."
      },
      {
        time: "5:30 PM",
        location: "Cervecería Catalana",
        address: "Carrer de Mallorca, 236",
        mapsUrl: "https://www.google.com/maps/search/?api=1&query=Cerveceria+Catalana+Barcelona",
        rating: 4.5,
        reviewCount: 25182,
        recommendedDish: "Solomillo al foie (Sirloin with foie gras)",
        priceRange: "$60–90",
        babyMode: "Routine",
        gear: "Stroller",
        transit: {
          from: "Laberint d'Horta",
          to: "Cervecería Catalana",
          options: [
            { method: "Cabify Kids", details: "⭐ Swift Home (20 min)", isRecommended: true, bookingUrl: "cabify://cabify/" },
            { method: "Metro", details: "L3 Mundet to Psg Gracia (25 min)" },
            { method: "Bus", details: "Bus 7 to Center (35 min)" }
          ],
        },
        vibe: "Early Tapas Frenzy",
        placeEmoji: "🍻",
        description: "One of the best in town. Getting there early is the only way to avoid the 2-hour wait.",
        localsSecret: "Try to sit at the bar if you can leave the stroller at the door—the action is the highlight. Otherwise, the back room is best for infants.",
        backup: {
          name: "Paco Meralgo",
          reason: "8 min walk west to Muntaner 171. Same owners as Cervecería Catalana, same Catalan tapas menu, almost always less of a wait. Perfect Plan B if the line at Cervecería is past the door when you arrive.",
          mapsUrl: "https://www.google.com/maps/search/?api=1&query=Paco+Meralgo+Barcelona"
        }
      },
      {
        time: "7:00 PM",
        location: "Back Home",
        address: "Carrer de Pau Claris, 99",
        mapsUrl: "https://www.google.com/maps/search/?api=1&query=Stay+U-nique+Apartments+Pau+Claris+Carrer+de+Pau+Claris+99+Barcelona",
        babyMode: "Routine",
        gear: "N/A",
        transit: {
          from: "Cervecería Catalana",
          to: "Carrer de Pau Claris, 99",
          options: [
            { method: "Walking", details: "⭐ Street Stroll (12 min)", isRecommended: true },
            { method: "Bus", details: "Bus 7/V15 (10 min)" },
            { method: "Cabify Kids", details: "Cabify (6 min)", bookingUrl: "cabify://cabify/" }
          ],
          departureTime: "6:45 PM"
        },
        vibe: "Winding Down",
        placeEmoji: "🌙",
        description: "Gentle walk home after a busy day of views and mazes.",
        localsSecret: "If you need fresh diapers or wipes, there is a small ‘Caprabo’ supermarket on Carrer de Pau Claris that carries all the major brands.",
        reminder: "Tomorrow: Sagrada Família 9:45 AM entry — must arrive on time. Open Cabify Kids by 9:00 AM, request a car seat. Have the QR pass open (Hub tab → Tickets) before you walk out the door.",
      }
    ]
  },
  {
    dayNumber: 4,
    date: "Thu May 28",
    weather: "☀️ 89°/73°",
    weatherDetail: BARCELONA_FORECAST[4],
    title: "Sagrada Família + Sant Antoni",
    vibeCoding: "Architectural Wonder & Market Vibes",
    events: [
      {
        time: "9:45 AM",
        location: "Sagrada Família",
        address: "Carrer de Mallorca, 401",
        mapsUrl: "https://www.google.com/maps/search/?api=1&query=Sagrada+Familia+Barcelona",
        babyMode: "Routine",
        gear: "Carrier",
        transit: {
          from: "Carrer de Pau Claris, 99",
          to: "Carrer de Mallorca, 401",
          options: [
            { method: "Cabify Kids", details: "⭐ Door-to-door (10 min)", isRecommended: true, bookingUrl: "cabify://cabify/" },
            { method: "Metro", details: "L2 Pg Gràcia → Sag Fm (12 min)" },
            { method: "Bus", details: "Bus 33/34 (15 min)" },
            { method: "Walking", details: "22 min walk" }
          ],
          insight: "💡 Getting to the 9:45 AM entry fresh is key.",
          departureTime: "9:20 AM"
        },
        vibe: "Spiritual Awe",
        placeEmoji: "⛪",
        description: "Gaudí's still-unfinished cathedral, started 1882, projected completion 2026 (the centenary of Gaudí's death). 90-min route inside: (1) Enter through the **Nativity Facade** (east side, the side Gaudí himself finished — see the turtles holding up the columns, the cypress tree, the angels). (2) Walk the central nave — look up at the **tree-form columns** that fan into a forest canopy roof; this is the most photographed interior in modern architecture. (3) Pause in the southern aisle near the **Passion Facade** (Subirachs' angular, modernist counter to the Nativity side). (4) The **stained glass** is the show — east windows are blue/green (cool morning side), west are red/orange (warm afternoon). 10 AM = blue glow on the columns. (5) Skip the tower elevators (carrier-only, twisty, not infant-friendly). (6) Exit through the **museum** in the crypt — models, photographs, Gaudí's actual workshop tools. Total: 90 min walking, 1.5–2 hours including museum.",
        prebookInfo: { required: true, note: "BOOKED for 9:45 AM. Show QR at the Nativity Facade entrance. No restrictions on strollers but carrier easier inside." },
        photoOp: "The interior tree-columns from the central nave looking up — phone in portrait, near the apse — captures the full canopy + stained glass.",
        localsSecret: "The school playground right next to the Nativity Facade often has a small cafe where parents gather—great if you need a quick break. Also: there's a small **plaza behind the Glory Facade** (south side, under construction) with benches and almost no tourists — perfect Cam-feed spot before lunch.",

        pickpocketAlert: "⚠ The 'rosemary lady' scam is famous here — Roma women force a sprig of rosemary into your hand, demand €5–10 'for the blessing,' and a partner picks your pocket while you fumble. If ANYONE tries to push flowers or anything into your hand, keep walking — do not break stride, do not engage.",
      },
      {
        time: "11:45 AM",
        location: "Recinte Modernista de Sant Pau",
        address: "Carrer de Sant Antoni Maria Claret, 167",
        mapsUrl: "https://www.google.com/maps/search/?api=1&query=Recinte+Modernista+de+Sant+Pau+Barcelona",
        babyMode: "Play",
        gear: "Stroller",
        transit: {
          from: "Sagrada Família",
          to: "Recinte Sant Pau",
          options: [{ method: "Walking", details: "⭐ 10 min straight up Av. Gaudí (pedestrian, shaded, no curbs)", isRecommended: true }],
          insight: "💡 Av. Gaudí connects Sagrada (south end) → Sant Pau (north end) — Barcelona's most photogenic single-direction walk, with Sagrada towers in your rearview the whole way."
        },
        vibe: "Hidden Modernista Gem",
        placeEmoji: "🏛️",
        description: "The world's largest Art Nouveau hospital complex (now museum), by Domènech i Montaner (Gaudí's contemporary). 12 brick-and-tile pavilions in a sprawling garden — most tourists skip it for Park Güell and miss the best modernista monument in the city. 45-min walking route: (1) **Sant Salvador Pavilion** (the main entrance dome) — stunning mosaic dome, the original administrative hall. (2) Walk the **central avenue** with the gardens between pavilions — Cam can wander on the grass. (3) **Underground tunnels** between pavilions (used to move patients — fascinating engineering). (4) **Pavilion of Sant Rafael** has the reconstructed early-20th-century hospital room, surprisingly serene. The whole site is stroller-friendly: ramps, wide gravel paths, almost no stairs. €15 entry, free under 12, audio guide included.",
        photoOp: "The central avenue framed by the modernista pavilions — Cam in stroller in the foreground, mosaic-tiled dome in the back.",
        localsSecret: "The on-site café has a hidden patio behind it — almost nobody finds it. Perfect Cam-feed spot with a coffee, totally shaded, looking out at the gardens.",
        prebookInfo: { required: false, note: "Walk-up tickets fine; quieter than Sagrada or Park Güell." }
      },
      {
        time: "12:30 PM",
        location: "La Vinya 1923 (Av. Gaudí terrace)",
        address: "Avinguda de Gaudí, 89",
        mapsUrl: "https://www.google.com/maps/search/?api=1&query=Restaurant+La+Vinya+1923+Avinguda+de+Gaudi+Barcelona",
        babyMode: "Routine",
        gear: "Stroller",
        transit: {
          from: "Sant Pau",
          to: "La Vinya 1923",
          options: [{ method: "Walking", details: "🚶 5 min south back down Av. Gaudí to #89", isRecommended: true }],
        },
        vibe: "Terrace Dining",
        placeEmoji: "🍷",
        description: "Lunch on the wide pedestrian Av. Gaudí. La Vinya 1923 has the best of the row — covered terrace, Sagrada towers framed at the end of the avenue, Catalan classics. Order the patatas bravas, the croquetas de jamón, and the grilled artichokes if in season. Daily menú del día is around €18 and includes wine + dessert. Stroller fits easily.",
        recommendedDish: "Bravas + croquetas de jamón + grilled artichokes",
        rating: 4.4,
        reviewCount: 2218,
        priceRange: "$40–60",
        localsSecret: "If La Vinya is full, the row of terraces marching up Av. Gaudí is solid all the way to Sant Pau — try 4amics (#82) for paellas or El Trapio (#27) for kid-approved pizzas with a Sagrada view.",
        backup: {
          name: "El Trapio",
          reason: "1 block back toward Sagrada at Av. Gaudí 27. Kid-approved Italian-Catalan (wood-fired pizzas, pasta) with the same Sagrada-towers terrace view. Faster turnaround and lower bill — easier if Cam is fading and you need to keep lunch under 45 min.",
          mapsUrl: "https://www.google.com/maps/search/?api=1&query=El+Trapio+Avinguda+de+Gaudi+Barcelona"
        }
      },
      {
        time: "3:00 PM",
        location: "Mercat de Sant Antoni",
        address: "Carrer del Comte d'Urgell, 1",
        mapsUrl: "https://www.google.com/maps/search/?api=1&query=Mercat+de+Sant+Antoni+Barcelona",
        babyMode: "Nap",
        gear: "Stroller",
        transit: {
          from: "Sag Fm",
          to: "Mercat de Sant Antoni",
          options: [
            { method: "Metro", details: "⭐ L2 westbound → Sant Antoni · 15 min", isRecommended: true },
            { method: "Bus", details: "H10/V21 westbound · ~20 min · low-floor" },
            { method: "Cabify Kids", details: "Door-to-door · car seat · 15 min", bookingUrl: "cabify://cabify/" },
            { method: "Walking", details: "35 min flat walk via Aragó · shaded" }
          ],
          insight: "💡 L2 westbound from Sag Fm: Monumental → Tetuan → Pg Gràcia → Universitat → Sant Antoni (5 stops). Lifts at both ends, half the price of Cabify.",
          departureTime: "3:00 PM"
        },
        vibe: "Local Commerce",
        placeEmoji: "🛒",
        description: "Sant Antoni is the locals' market — built 1882 by Antoni Rovira (the architect who designed the Eixample grid), reopened in 2018 after a 9-year restoration that uncovered **Roman city wall ruins** below. Three buildings under one wrought-iron canopy in a giant + cross plan. 60-min route: (1) Walk the **central octagonal hall** — produce, cheese, ibérico stalls — much less touristy than Boqueria, real Barcelona families shopping. (2) Walk DOWN to the **basement archaeology level** — restored Roman walls + medieval Convent of San Antoni Abad ruins, climate-controlled (cool!), eerily quiet — ideal for a stroller nap break. Free entry to the archaeology level. (3) Exit on the south side to **Carrer del Comte d'Urgell** for the cluster of locals' tapas bars — Bar Casa Lolea (Pl. del Camp 7) for vermut, Federal Café (Parlament 39) for coffee. On Sundays the **outdoor market 'Dominical' books-and-coins fair** circles the whole building.",
        photoOp: "The interior iron skeleton from the central crossing point — look up for the cathedral-like ribbed roof.",
        localsSecret: "Sant Antoni was Joan Miró's birth neighborhood — his birth-house plaque is at Passatge del Crèdit 4 (5 min walk north). The underground Roman ruins are usually empty on weekdays and have great natural reverberation for soft baby singing if Cam is fussy.",

        pickpocketAlert: "Less dense than Boqueria but the same 'bump' technique works here. Cross-body bag in front, especially in the tight produce-stall corridors. Keep your phone OUT of your back pocket.",
      },
      {
        time: "5:00 PM",
        location: "Bar Calders",
        address: "Carrer de Parlament, 25",
        mapsUrl: "https://www.google.com/maps/search/?api=1&query=Bar+Calders+Barcelona",
        rating: 4.3,
        reviewCount: 3654,
        recommendedDish: "Chips with Espinaler sauce & craft vermut",
        priceRange: "$35–55",
        babyMode: "Routine",
        gear: "Stroller",
        transit: {
          from: "Mercat de Sant Antoni",
          to: "Bar Calders",
          options: [{ method: "Walking", details: "🚶 4 min short walk", isRecommended: true }],
        },
        vibe: "Vibrant Neighborhood Bar",
        placeEmoji: "🍹",
        description: "Early dinner in the Sant Antoni district.",
        localsSecret: "Ask for the 'Chips with Espinaler sauce'—the most authentic way to enjoy a Barcelona vermut.",
        backup: {
          name: "Federal Café Sant Antoni",
          reason: "2 blocks east at Carrer del Parlament 39 — Aussie-style cafe with kid-easy bowls, brunch all day, and ample stroller space. Open later than most cafés so it works if Bar Calders fills up at golden hour.",
          mapsUrl: "https://www.google.com/maps/search/?api=1&query=Federal+Cafe+Sant+Antoni+Barcelona"
        }
      },
      {
        time: "6:30 PM",
        location: "Back Home",
        address: "Carrer de Pau Claris, 99",
        mapsUrl: "https://www.google.com/maps/search/?api=1&query=Stay+U-nique+Apartments+Pau+Claris+Carrer+de+Pau+Claris+99+Barcelona",
        babyMode: "Routine",
        gear: "N/A",
        transit: {
          from: "Bar Calders",
          to: "Carrer de Pau Claris, 99",
          options: [
            { method: "Cabify Kids", details: "⭐ 12 min ride", isRecommended: true, bookingUrl: "cabify://cabify/" },
            { method: "Metro", details: "L2 Sant Antoni to Psg Gracia (15 min)" },
            { method: "Bus", details: "Bus V13 (20 min)" },
            { method: "Walking", details: "25 min walk" }
          ],
          departureTime: "6:15 PM"
        },
        vibe: "Winding Down",
        placeEmoji: "🌙",
        description: "Quick transit home to stay on schedule for 8 PM sleep.",
        localsSecret: "The building entry is much easier late at night if you use the side entrance which has no steps for the stroller."
      }
    ]
  },
  {
    dayNumber: 5,
    date: "Fri May 29",
    weather: "⛅ 86°/71°",
    weatherDetail: BARCELONA_FORECAST[5],
    title: "Casa Batlló + Casa Vicens",
    vibeCoding: "Double Gaudí & Gràcia Wandering",
    events: [
      {
        time: "9:15 AM",
        location: "Casa Batlló",
        address: "Passeig de Gràcia, 43",
        mapsUrl: "https://www.google.com/maps/search/?api=1&query=Casa+Batllo+Barcelona",
        babyMode: "Routine",
        gear: "Carrier",
        transit: {
          from: "Carrer de Pau Claris, 99",
          to: "Passeig de Gràcia, 43",
          options: [{ method: "Walking", details: "🚶 7 min walk", isRecommended: true }],
          departureTime: "8:55 AM"
        },
        vibe: "Liquid Architecture",
        placeEmoji: "🐉",
        description: "9:15 AM Silver tier entry. Best to book on the ground.",
        prebookInfo: { required: true, note: "Silver tier suggested for faster entry." },
        photoOp: "The dragon-back roof terrace with colorful chimneys.",
        localsSecret: "The roof terrace is the highlight, but the 'Smart Guide' augmented reality tablet is also surprisingly fun for infants to look at.",

        pickpocketAlert: "The entrance queue on Pg de Gràcia is a known target. Beware strangers offering to 'take your family photo' — while your phone is out, an accomplice can grab. Politely decline helpful photographers; ask other parents in line instead.",
      },
      {
        time: "12:00 PM",
        location: "La Pubilla (Plaça de la Llibertat)",
        address: "Plaça de la Llibertat, 23",
        mapsUrl: "https://www.google.com/maps/search/?api=1&query=La+Pubilla+Restaurant+Gracia+Barcelona",
        babyMode: "Routine",
        gear: "Stroller",
        transit: {
          from: "Casa Batlló",
          to: "La Pubilla",
          options: [
            { method: "Walking", details: "⭐ Stroll up Psg Gràcia → Carrer Gran de Gràcia (15 min)", isRecommended: true },
            { method: "Metro", details: "L3 Psg Gràcia → Fontana (10 min)" },
            { method: "Bus", details: "Bus 22/24 (12 min)" },
            { method: "Cabify Kids", details: "Cabify (8 min)", bookingUrl: "cabify://cabify/" }
          ],
        },
        vibe: "Bohemian Village",
        placeEmoji: "🏘️",
        description: "La Pubilla — Gràcia's most-loved lunch spot, tucked next to the Mercat de la Llibertat. Market-to-table Catalan home cooking, daily menú del día around €18 with 3 courses. Book a few days ahead OR show up by 12:00 PM for a walk-in. Locals' lunch — almost no tourists. After eating, walk 3 blocks to the cluster of Gràcia plaças: Plaça del Sol, Plaça de la Virreina, Plaça de la Vila — each its own pocket of village calm.",
        recommendedDish: "Steak tartare or the daily menú del día — bread + olives included",
        rating: 4.5,
        reviewCount: 1846,
        priceRange: "$40–55",
        localsSecret: "Plaça de la Virreina (3 min north) is the most stroller-friendly of the Gràcia plaças — wide open, fewer kids on scooters, shaded benches under the church facade for an after-lunch reset.",
        backup: {
          name: "Bar Bodega Quimet",
          reason: "6 min walk further into Gràcia at Carrer del Vic 23 — historic 1914 vermouth-and-tapas bodega with tile floors and barrel tables. Cheaper, more casual, walk-in only, very kid-tolerant.",
          mapsUrl: "https://www.google.com/maps/search/?api=1&query=Bar+Bodega+Quimet+Gracia+Barcelona"
        }
      },
      {
        time: "2:30 PM",
        location: "Casa Vicens",
        address: "Carrer de les Carolines, 20",
        mapsUrl: "https://www.google.com/maps/search/?api=1&query=Casa+Vicens+Barcelona",
        babyMode: "Nap",
        gear: "Stroller",
        transit: {
          from: "Carrer de Pau Claris, 99",
          to: "Carrer de les Carolines, 20",
          options: [
            { method: "Walking", details: "⭐ Gràcia Wander (12 min)", isRecommended: true },
            { method: "Metro", details: "L3 Urquinaona to Fontana (10 min)" },
            { method: "Cabify Kids", details: "Cabify (6 min)", bookingUrl: "cabify://cabify/" }
          ],
        },
        vibe: "Moorish Inspiration",
        placeEmoji: "🏰",
        description: "Gaudí's FIRST commissioned house (1883–88, age 31) — built before he was Gaudí. Mudéjar/neo-Moorish style: green/white tile facade, palm-leaf wrought iron, smoking room with carved palm-frond ceiling and 1001-Nights vibe. Hidden in residential Gràcia, opened to the public only in 2017. 60-min route: (1) **Ground floor** — see the original tile floors and the famous **smoking room** (the blue + gold geometric ceiling is the Insta shot). (2) **Garden** (back of the house) — tiny modernista paradise with a tile waterfall fountain; the on-site café opens onto it. (3) **Upper floor** — bedrooms and the family chapel. (4) **Top floor** — Casa Vicens' permanent exhibition on Gaudí's evolution from this house to Sagrada Família. €18 entry, walk-up usually fine on weekdays. Strollers parked at reception; lifts to all floors.",
        prebookInfo: { required: true, note: "Walk-up okay weekdays. Stroller stays at reception." },
        photoOp: "The smoking room ceiling — phone in portrait, flash off, lie back if you can — the geometric blue-and-gold pattern needs the full frame.",
        localsSecret: "The garden café is one of the city's best-kept secrets — almost nobody knows it exists since you need a Casa Vicens ticket to enter. Order a chocolate caliente, sit on the iron benches, and let Cam stretch on the lawn. Open until 6 PM."
      },
      {
        time: "3:45 PM",
        location: "Plaça del Sol + Gràcia Plaças Stroll",
        address: "Plaça del Sol, Gràcia",
        mapsUrl: "https://www.google.com/maps/search/?api=1&query=Placa+del+Sol+Gracia+Barcelona",
        babyMode: "Play",
        gear: "Stroller",
        transit: {
          from: "Casa Vicens",
          to: "Plaça del Sol",
          options: [{ method: "Walking", details: "🚶 6 min easy walk south through Gràcia backstreets", isRecommended: true }],
          insight: "💡 The Carrer Verdi pedestrian corridor between Casa Vicens and Plaça del Sol is the heart of bohemian Gràcia — tiny art galleries, indie cinemas, vermouth bars. Slow down."
        },
        vibe: "Village Plaza Life",
        placeEmoji: "☀️",
        description: "Gràcia is a former independent village (annexed 1897) — its character lives in its plaças. Visit 3 in this loop: (1) **Plaça del Sol** — the youth-energy square, dogs + skateboarders + outdoor café tables. The 'Sol Soler' café at the corner has terrace tables under olive trees. (2) Walk 3 min east to **Plaça de la Virreina** — quietest of the three, framed by the Sant Joan church facade, a single fountain, benches under plane trees. (3) Then 4 min north to **Plaça de la Vila de Gràcia** with its iconic **clock tower** (1862, the symbol of the neighborhood's independence). Each plaça is a different mood — show Cam the differences. Easy 45-min loop.",
        recommendedDish: "Café con leche + ensaïmada (Mallorcan pastry) at Sol Soler (Plaça del Sol 21)",
        priceRange: "$10–15",
        localsSecret: "The clock tower in Plaça de la Vila chimes at exactly 4 PM — if you time it right (you will), Cam gets the full bell experience. Locals call it 'el rellotge' and orient their afternoons around it."
      },
      {
        time: "5:00 PM",
        location: "Pepa Tomate",
        address: "Plaça de la Revolució de Setembre de 1868, 17",
        mapsUrl: "https://www.google.com/maps/search/?api=1&query=Pepa+Tomate+Barcelona",
        rating: 4.2,
        reviewCount: 2481,
        recommendedDish: "Pepa Tomate bravas with unique green sauce",
        priceRange: "$40–60",
        babyMode: "Routine",
        gear: "Stroller",
        transit: {
          from: "Plaça del Sol",
          to: "Pepa Tomate",
          options: [{ method: "Walking", details: "🚶 5 min northeast through Gràcia backstreets", isRecommended: true }],
        },
        vibe: "Creative Catalan",
        placeEmoji: "🍅",
        description: "Early dinner in the heart of Gràcia.",
        localsSecret: "The 'Pepa Tomate bravas' are legendary and served with a unique green sauce—be sure to ask for the stroller-accessible tables in the back section.",
        backup: {
          name: "El Glop",
          reason: "5 min walk from Casa Vicens at Carrer Sant Lluís 24 — old-school Catalan grill house (escalivada, grilled meats, rabbit). Family-friendly, large dining rooms, faster service than Pepa Tomate at the dinner rush.",
          mapsUrl: "https://www.google.com/maps/search/?api=1&query=El+Glop+Gracia+Barcelona"
        }
      },
      {
        time: "6:30 PM",
        location: "Back Home",
        address: "Carrer de Pau Claris, 99",
        mapsUrl: "https://www.google.com/maps/search/?api=1&query=Stay+U-nique+Apartments+Pau+Claris+Carrer+de+Pau+Claris+99+Barcelona",
        babyMode: "Routine",
        gear: "N/A",
        transit: {
          from: "Pepa Tomate",
          to: "Carrer de Pau Claris, 99",
          options: [
            { method: "Walking", details: "⭐ Downhill Stroll (15 min)", isRecommended: true },
            { method: "Metro", details: "L3 Fontana to Psg Gracia (12 min)" },
            { method: "Cabify Kids", details: "Cabify (10 min)", bookingUrl: "cabify://cabify/" }
          ],
          departureTime: "6:15 PM"
        },
        vibe: "Winding Down",
        placeEmoji: "🌙",
        description: "Walk down Carrer Gran de Gràcia back into Eixample. On the way: look up at the Casa Comalat (Av. Diagonal 442) — a Gaudí-influenced modernista facade most tourists miss. If Cam's still awake, detour 1 block to Passatge Permanyer (Carrer Pau Claris 120) — a hidden English-style mews lane, completely empty after 7 PM.",
        localsSecret: "Stop at Gelateria Gelaaati! (Carrer Llibreteria 7) for artisan pistachio — they grind their own paste. Sit on the steps of the Cathedral square while you eat.",
        reminder: "WhatsApp the Sitges hotel TONIGHT to arrange key collection for Jun 1:\n📱 +34 607 24 80 11\n\nSuggested message: \"Hi! We're checking in to InSitges Ribera 41 #3 on Jun 1 around 11:30 AM. Can you confirm key collection details and earliest arrival time? — Carolyn (booking 34713/2026).\"",
      }
    ]
  },
  {
    dayNumber: 6,
    date: "Sat May 30",
    weather: "☀️ 84°/70°",
    weatherDetail: BARCELONA_FORECAST[6],
    title: "Gothic + Waterfront + Born",
    vibeCoding: "Old City Soul & Beach Breeze",
    events: [
      {
        time: "10:00 AM",
        location: "Barcelona Cathedral",
        address: "Pla de la Seu, s/n, 08002 Barcelona",
        mapsUrl: "https://www.google.com/maps/search/?api=1&query=Barcelona+Cathedral+Barcelona",
        babyMode: "Routine",
        gear: "Stroller",
        transit: {
          from: "Carrer de Pau Claris, 99",
          to: "Pla de la Seu (Cathedral)",
          options: [
            { method: "Walking", details: "⭐ Scenic Route via Via Laietana (15 min)", isRecommended: true },
            { method: "Metro", details: "L4 Urquinaona → Jaume I (8 min, 1 stop)" },
            { method: "Cabify Kids", details: "Cabify (8 min)", bookingUrl: "cabify://cabify/" }
          ],
          insight: "💡 Walking down Via Laietana gives you the best first reveal of the Cathedral as it appears between the buildings."
        },
        vibe: "Gothic Opening Shot",
        placeEmoji: "⛪",
        description: "Start at the Catedral de la Santa Creu i Santa Eulàlia. Free entry in the morning. Step inside for the soaring nave and 13 white geese in the cloister.",
        photoOp: "Stand back in Pla de la Seu for the full Gothic facade.",
        localsSecret: "Side entrance on Carrer del Bisbe is stroller-friendly; the main steps require carrying. Cloister is a peaceful 5-min loop.",

        pickpocketAlert: "The petition scam is the local classic. A woman with a clipboard for 'deaf children' or 'Ukraine refugees' will try to block your path. While you politely read the form, an accomplice's hand goes into your pocket. Always wave away clipboards and do NOT stop.",
      },
      {
        time: "10:30 AM",
        location: "Pont del Bisbe",
        address: "Carrer del Bisbe, 08002 Barcelona",
        mapsUrl: "https://www.google.com/maps/search/?api=1&query=Pont+del+Bisbe+Barcelona",
        babyMode: "Routine",
        gear: "Stroller",
        transit: {
          from: "Barcelona Cathedral",
          to: "Carrer del Bisbe",
          options: [{ method: "Walking", details: "🚶 2 min stroll south on Carrer del Bisbe", isRecommended: true }]
        },
        vibe: "Iconic Photo Stop",
        placeEmoji: "🌉",
        description: "Stand directly below the neo-Gothic stone bridge linking the Generalitat and Casa dels Canonges. Built 1928, looks medieval. The famous Barcelona postcard shot.",
        photoOp: "Looking straight up from the middle of the alley.",
        localsSecret: "There's a tiny carved skull with a dagger in the bridge's underside — legend says removing it brings disaster.",

        pickpocketAlert: "Narrow stone alley = bottleneck for pickpockets. Bag in front, phone NOT in back pocket. Watch for tourists 'asking for help with a photo' near the bridge — they may be working as a distraction team.",
      },
      {
        time: "10:45 AM",
        location: "Plaça de Sant Felip Neri",
        address: "Plaça de Sant Felip Neri, 5, 08002 Barcelona",
        mapsUrl: "https://www.google.com/maps/search/?api=1&query=Placa+de+Sant+Felip+Neri+Barcelona",
        babyMode: "Routine",
        gear: "Stroller",
        transit: {
          from: "Pont del Bisbe",
          to: "Plaça Sant Felip Neri",
          options: [{ method: "Walking", details: "🚶 3 min through narrow lanes", isRecommended: true }]
        },
        vibe: "Hidden Square",
        placeEmoji: "🕊️",
        description: "Tiny, leafy square behind the Cathedral with a central fountain. Pockmarks on the church facade are from a 1938 Civil War bombing — they kept them as a memorial.",
        localsSecret: "One of the quietest spots in the entire Gothic Quarter. Bench under the trees → perfect 10-min stroller stop / quick feed."
      },
      {
        time: "11:15 AM",
        location: "Plaça del Rei",
        address: "Plaça del Rei, 08002 Barcelona",
        mapsUrl: "https://www.google.com/maps/search/?api=1&query=Placa+del+Rei+Barcelona",
        babyMode: "Routine",
        gear: "Stroller",
        transit: {
          from: "Plaça Sant Felip Neri",
          to: "Plaça del Rei",
          options: [{ method: "Walking", details: "🚶 4 min back through Bisbe", isRecommended: true }]
        },
        vibe: "Medieval Royal Plaza",
        placeEmoji: "👑",
        description: "Stone-walled medieval plaza framed by the Palau Reial Major, the Saló del Tinell, and the Chapel of Santa Àgata. Cam can touch the cool stones in summer.",
        photoOp: "The grand staircase where Columbus reportedly met Ferdinand & Isabella in 1493.",
        localsSecret: "MUHBA museum entrance is here — underground Roman Barcino ruins, full elevator access. €7 entry but skippable with a baby."
      },
      {
        time: "12:00 PM",
        location: "Plaça Reial",
        address: "Plaça Reial, 08002 Barcelona",
        mapsUrl: "https://www.google.com/maps/search/?api=1&query=Placa+Reial+Barcelona",
        babyMode: "Routine",
        gear: "Stroller",
        transit: {
          from: "Plaça del Rei",
          to: "Plaça Reial",
          options: [
            { method: "Walking", details: "⭐ 10 min via Carrer Ferran (open & flat)", isRecommended: true }
          ]
        },
        vibe: "Palm-Lined Finale",
        placeEmoji: "🌴",
        description: "End the Gothic Quarter loop in this palm-lined arcaded square just off La Rambla. Two of the six-armed lampposts here are early Gaudí works (1879).",
        photoOp: "The Gaudí lampposts with the central fountain behind.",
        localsSecret: "Order a horchata from one of the perimeter cafés and let Cam watch the buskers — the easiest stroller terrain on the whole walk.",
        pickpocketAlert: "The famous 'mustard / bird-poop scam' — someone discreetly squirts ketchup, mustard, or fake bird droppings on your shoulder, then a 'helpful' stranger offers to clean it while their partner takes your wallet. If you feel ANYTHING land on you, IGNORE IT and keep moving until you reach a clear, open spot.",
      },
      {
        time: "1:00 PM",
        location: "Salamanca (Barceloneta paella)",
        address: "Carrer de l'Almirall Cervera, 34",
        mapsUrl: "https://www.google.com/maps/search/?api=1&query=Restaurant+Salamanca+Barceloneta+Barcelona",
        rating: 4.1,
        reviewCount: 6452,
        recommendedDish: "Paella de marisco (seafood paella) + grilled sardines",
        priceRange: "$40–55",
        babyMode: "Routine",
        gear: "Stroller",
        transit: {
          from: "Plaça Reial",
          to: "Salamanca",
          options: [
            { method: "Walking", details: "⭐ 15 min harbor stroll", isRecommended: true },
            { method: "Metro", details: "L4 Liceu → Barceloneta (10 min)" },
            { method: "Cabify Kids", details: "Cabify (8 min)", bookingUrl: "cabify://cabify/" }
          ],
        },
        vibe: "Paella by the Sea",
        placeEmoji: "🥘",
        description: "Salamanca — the big, busy Barceloneta paella house where local families actually go. Large dining room (no wait at 1 PM), wide stroller-easy terrace, high chair available, kid-friendly servers. Order one paella to share + a couple of grilled-fish sides — comes in at half the price of the seafront splurge places with food that's just as good.",
        photoOp: "The paella pan landing on the table — they bring it whole to show before plating.",
        localsSecret: "Order the 'paella de marisco' for 2 to share, plus 'sardinas a la plancha' as a starter — that's the locals' default order and arrives in 25 minutes flat. Skip the 'arroz negro' here — Sitges does it better.",
        backup: {
          name: "Can Solé",
          reason: "3 min walk further inland at Carrer Sant Carles 4 — the 1903 classic Barceloneta paella institution. Tile-walled, generations of Catalans. Higher price (~$70–95) but the historic experience if Salamanca feels too casual.",
          mapsUrl: "https://www.google.com/maps/search/?api=1&query=Can+Sole+Barceloneta+Barcelona"
        }
      },
      {
        time: "3:00 PM",
        location: "Barceloneta Beach Time",
        address: "Barceloneta Beach",
        mapsUrl: "https://www.google.com/maps/search/?api=1&query=Barceloneta+Beach+Barcelona",
        babyMode: "Play",
        gear: "Carrier",
        transit: {
          from: "Salamanca",
          to: "Beach",
          options: [{ method: "Walking", details: "🚶 5 min walk to sand", isRecommended: true }],
        },
        vibe: "Mediterranean Sun",
        placeEmoji: "🏖️",
        description: "Relax on the sand and let Cameron feel the sea breeze.",
        photoOp: "The iconic 'Wounded Star' iron cubes on the beach sand.",
        localsSecret: "Walk along the 'Passeig Marítim' towards the W Hotel—the boardwalk is very wide and perfect for keeping the stroller moving for a breeze-induced nap.",
        pickpocketAlert: "Don't leave anything unattended on the sand — not even for a quick swim. Local teens work the beach in pairs: one distracts (asking the time, offering massages, hawking beer), one grabs. Take valuables into the water in a dry bag or leave them at the apartment.",
      },
      {
        time: "5:00 PM",
        location: "Bormuth",
        address: "Carrer del Rec, 31",
        mapsUrl: "https://www.google.com/maps/search/?api=1&query=Bormuth+Barcelona",
        rating: 4.4,
        reviewCount: 4621,
        recommendedDish: "Honeyed cod (Bacalao meloso) & extra crispy bravas",
        priceRange: "$45–65",
        babyMode: "Routine",
        gear: "Stroller",
        transit: {
          from: "Beach",
          to: "El Born",
          options: [
            { method: "Walking", details: "⭐ Village Vibes (12 min)", isRecommended: true },
            { method: "Bus", details: "V15 to Born (10 min)" },
            { method: "Cabify Kids", details: "Cabify (8 min)", bookingUrl: "cabify://cabify/" }
          ],
        },
        vibe: "Hip Tapas & Vermut",
        placeEmoji: "🍷",
        description: "Early dinner in El Born before heading home via Metro L4.",
        localsSecret: "The bravas here are among the best in the city—ask for them extra crispy. The high tables at the back are usually better for strollers.",
        backup: {
          name: "El Xampanyet",
          reason: "5 min walk west at Carrer de Montcada 22 — historic 1929 cava bar with anchovies, jamón, and pickled-everything tapas. Standing-only counter (skip if stroller needs parking), but if you can leave the stroller at the door it's the most iconic Barcelona experience in the neighborhood.",
          mapsUrl: "https://www.google.com/maps/search/?api=1&query=El+Xampanyet+Barcelona"
        }
      },
      {
        time: "7:00 PM",
        location: "Back Home",
        address: "Carrer de Pau Claris, 99",
        mapsUrl: "https://www.google.com/maps/search/?api=1&query=Stay+U-nique+Apartments+Pau+Claris+Carrer+de+Pau+Claris+99+Barcelona",
        babyMode: "Routine",
        gear: "N/A",
        transit: {
          from: "Bormuth",
          to: "Carrer de Pau Claris, 99",
          options: [
            { method: "Metro", details: "🚇 L4 Urquinaona to Psg Gracia (8 min)", isRecommended: true },
            { method: "Walking", details: "🚶 18 min walk via Plaça de Catalunya" }
          ],
          departureTime: "6:40 PM"
        },
        vibe: "Winding Down",
        placeEmoji: "🌙",
        description: "Returning home after the longest walking day of the trip.",
        localsSecret: "If using the Metro, the Jaume I station is very deep; using the Urquinaona lifts is much easier with a stroller."
      }
    ]
  },
  {
    dayNumber: 7,
    date: "Sun May 31",
    weather: "⛅ 83°/69°",
    weatherDetail: BARCELONA_FORECAST[7],
    title: "Montjuïc Mountain Farewell",
    vibeCoding: "Cables, Castles & Gardens",
    events: [
      {
        time: "10:00 AM",
        location: "Telefèric de Montjuïc",
        address: "Avinguda de Miramar, 30",
        mapsUrl: "https://www.google.com/maps/search/?api=1&query=Teleferic+de+Montjuic+Barcelona",
        babyMode: "Routine",
        gear: "Stroller",
        transit: {
          from: "Carrer de Pau Claris, 99",
          to: "Avinguda de Miramar, 30",
          options: [
            { method: "Cabify Kids", details: "⭐ Direct to Cable Car (15 min)", isRecommended: true, bookingUrl: "cabify://cabify/" },
            { method: "Metro", details: "L3 Paral-lel + Funicular (30 min)" },
            { method: "Bus", details: "Bus 150 from Plaça Espanya (35 min)" }
          ],
        },
        vibe: "Aerial Views",
        placeEmoji: "🚠",
        description: "8-minute glass-bottom cable car from Av. de Miramar (Montjuïc's mid-mountain) up to the castle summit. Operating since 1970, refurbished 2007. The gondola swings out over the city — port views to the south, Sagrada Família + Tibidabo in the distance to the north. Each gondola fits 8 passengers; you can usually get one to yourself with a stroller. €15 round-trip per adult, infants free. Buy online to skip the queue (link in Hub tab → Tickets). Total time including queue + ride + photos: ~45 min.",
        photoOp: "Looking BACK at the city through the gondola's glass floor as you ascend — Barceloneta beach + harbor fills the frame.",
        localsSecret: "Buy tickets online to skip the line. With a stroller, the staff usually fast-tracks you to the front of the gondola queue. Sit on the LEFT side going up for the best port view; right side coming down for the Sagrada Família view.",
        pickpocketAlert: "Queue at the base is moderately risky — pickpockets work the bottleneck. Once on the cable car you're fine. Watch for the 'is this the line for the cable car?' approach while a partner closes in.",
      },
      {
        time: "11:30 AM",
        location: "Montjuïc Castle & Gardens",
        address: "Montjuïc, Barcelona",
        mapsUrl: "https://www.google.com/maps/search/?api=1&query=Montjuic+Castle+%26+Gardens+Barcelona",
        babyMode: "Play",
        gear: "Stroller",
        transit: {
          from: "Cable Car",
          to: "Castle",
          options: [
            { method: "Walking", details: "⭐ Summit Walk (10 min)", isRecommended: true },
            { method: "Bus", details: "Bus 150 (5 min)" }
          ],
        },
        vibe: "Summit Exploration",
        placeEmoji: "🏰",
        description: "17th-century star-shaped military fortress at the top of Montjuïc, 173m above sea level. Used as a political prison and execution site through the Franco era (President Lluís Companys was shot here in 1940). Now: a peaceful summit with the city's best 360° panorama. 90-min loop: (1) Cross the **stone drawbridge + moat** entrance (Cam will love the dramatic gate). (2) Walk the **upper rampart walkway** — clockwise — for the full panorama: port + Sagrada Família + Tibidabo + the sea. (3) Inside the courtyard, the **cannons aimed at the city** (a reminder of who the castle was built to control). (4) Skip the museum if Cam is tired — it's about military history and not infant-rewarding. (5) Exit down to the **Jardins del Mirador** (Mirador Gardens) — terraced gardens with shaded benches for a picnic or feeding break. €5 castle entry, free under 16, free Sundays after 3 PM.",
        photoOp: "The stone drawbridge with the moat below and the city framed in the gate arch — Cam in stroller in the foreground.",
        localsSecret: "The gardens surrounding the castle are the best place for a panoramic picnic away from the lunch crowds—plenty of shaded grass spots. Specifically, the **Jardins de Joan Brossa** (5 min walk west) has a kids' playground with view of the harbor — perfect if Cam needs to crawl."
      },
      {
        time: "1:30 PM",
        location: "Maravillas Miró (Fundació café-restaurant)",
        address: "Parc de Montjuïc, s/n (Fundació Joan Miró)",
        mapsUrl: "https://www.google.com/maps/search/?api=1&query=Maravillas+Miro+Restaurant+Fundacio+Joan+Miro+Barcelona",
        rating: 4.2,
        reviewCount: 412,
        recommendedDish: "Vegetable rice + market-fresh fish of the day OR the daily 'menú del Miró'",
        priceRange: "$30–45",
        babyMode: "Routine",
        gear: "Stroller",
        transit: {
          from: "Castle & Gardens",
          to: "Maravillas Miró",
          options: [
            { method: "Walking", details: "⭐ 15 min walk down via Av. Miramar (flat tree-lined ridge)", isRecommended: true },
            { method: "Bus", details: "Bus 150 (5 min, drops you at the Fundació stop)" }
          ],
        },
        vibe: "Museum Café Lunch",
        placeEmoji: "🎨",
        description: "Lunch at the Fundació Joan Miró's restaurant — half cafeteria, half real Catalan kitchen, with an outdoor patio facing the museum's white modernist facade and the cypress trees. Accepts cards, family-friendly, stroller fits easily. Daily 'menú del Miró' is around €18–22 per person with starter, main, dessert, and wine — solidly Catalan (escalivada, grilled fish, paella, crema catalana). After lunch, walk 20 steps into the museum.",
        localsSecret: "You don't need a museum ticket to eat here — the restaurant has its own street access. But if you're going to do the museum anyway (3:15 PM event), eat first; lunch + museum back-to-back is the easiest mountain afternoon. Ask for a patio table away from the school groups.",
        backup: {
          name: "Restaurant Forestier (Hotel Miramar)",
          reason: "5 min walk back up the ridge, at Plaça Carles Ibáñez 3. The casual terrace bar (NOT the formal restaurant) does sandwiches + salads + tapas with port views, ~$40–60. Accepts cards. Pick this if Maravillas is school-group-busy or closed.",
          mapsUrl: "https://www.google.com/maps/search/?api=1&query=Hotel+Miramar+Barcelona+Restaurant+Forestier"
        }
      },
      {
        time: "3:15 PM",
        location: "Fundació Joan Miró",
        address: "Parc de Montjuïc, s/n",
        mapsUrl: "https://www.google.com/maps/search/?api=1&query=Fundacio+Joan+Miro+Barcelona",
        babyMode: "Routine",
        gear: "Stroller",
        transit: {
          from: "Maravillas Miró",
          to: "Fundació Joan Miró",
          options: [
            { method: "Walking", details: "⭐ 30 seconds — the restaurant is on the museum grounds", isRecommended: true }
          ],
          insight: "💡 Walk straight from the restaurant patio into the museum lobby. No re-transit needed."
        },
        vibe: "Surrealist Light",
        placeEmoji: "🎨",
        description: "The museum dedicated to Catalan surrealist Joan Miró, in a stark white building by Josep Lluís Sert (Miró's friend and fellow modernist). Houses Miró's largest collection — over 14,000 works including 217 paintings, 178 sculptures, and his iconic tapestries. 60-min route: (1) **Permanent collection (lower floor)** — chronological: from early Catalan landscapes through his bird/star/woman vocabulary. (2) The **Mercury Fountain** by Alexander Calder (the only kinetic mercury sculpture in a museum, made for the 1937 Republican pavilion at the Paris World's Fair — historically heavy, visually mesmerizing). (3) The **outdoor sculpture garden** on the roof terrace — Cam can crawl among Miró's monumental sculptures with the city as backdrop. (4) Skip the temporary exhibitions if Cam is tired. €15, free under 15. Strollers welcome throughout — lifts to all levels. Closes at 6 PM (Sundays at 2 PM, so today get there by 3:15 latest).",
        photoOp: "The roof sculpture garden with Miró's primary-colored mobile against the white walls + blue sky.",
        localsSecret: "The museum's **library / reading room** has the best view in the building (huge windows over Montjuïc + the city) and is almost always empty. Free entry without museum ticket. Perfect Cam-feed spot."
      },
      {
        time: "5:00 PM",
        location: "Bar Mut (Final BCN Splurge)",
        address: "Carrer de Pau Claris, 192",
        mapsUrl: "https://www.google.com/maps/search/?api=1&query=Bar+Mut+Barcelona",
        rating: 4.4,
        reviewCount: 1542,
        recommendedDish: "Carpaccio de huevos fritos (deep-fried egg carpaccio) + the off-menu 'arroz con huevos'",
        priceRange: "$90–130",
        babyMode: "Routine",
        gear: "Stroller",
        transit: {
          from: "Fundació Miró",
          to: "Cervecería Catalana",
          options: [
            { method: "Cabify Kids", details: "⭐ Direct Museum-to-Door (15 min)", isRecommended: true, bookingUrl: "cabify://cabify/" },
            { method: "Bus", details: "Bus 150 to Plaça Espanya → walk (25 min)" },
            { method: "Metro", details: "Funicular Montjuïc + L3 to Diagonal (30 min)" }
          ],
        },
        vibe: "Farewell Splurge",
        placeEmoji: "🍷",
        description: "Your one Barcelona splurge — and the right night for it. Bar Mut is the elevated Catalan-tapas spot locals send visiting chefs to: wood-paneled, dim, only ~30 seats. Arrive at 5:00 PM open (you're acclimated now, dressed up after 7 days) to get a table without a 90-min wait. Order the deep-fried egg carpaccio, the off-menu 'arroz con huevos,' the seasonal market fish, and let the somm pick a Penedès Xarel·lo. ~$90–130 for 2, every dollar earned. Highchair on request.",
        localsSecret: "Ask for the 'arroz con huevos' even though it's never on the menu — they make it for regulars. Bar Mut's wine list is hand-picked Catalan small producers; tell the server your budget and they'll find the right bottle for under €40.",
        backup: {
          name: "Cervecería Catalana",
          reason: "If Bar Mut is fully booked (likely Friday/Saturday — call ahead), Cervecería Catalana is 4 min south on Pau Claris at Mallorca 236. Same neighborhood, more casual, ~$60–90 for 2, larger space — easier walk-in with a stroller.",
          mapsUrl: "https://www.google.com/maps/search/?api=1&query=Cerveceria+Catalana+Barcelona"
        }
      },
      {
        time: "7:00 PM",
        location: "Back Home",
        address: "Carrer de Pau Claris, 99",
        mapsUrl: "https://www.google.com/maps/search/?api=1&query=Stay+U-nique+Apartments+Pau+Claris+Carrer+de+Pau+Claris+99+Barcelona",
        babyMode: "Routine",
        gear: "N/A",
        transit: {
          from: "Bar Mut",
          to: "Carrer de Pau Claris, 99",
          options: [
            { method: "Walking", details: "⭐ 8 min easy walk south down Pau Claris", isRecommended: true },
            { method: "Cabify Kids", details: "Cabify (4 min)", bookingUrl: "cabify://cabify/" }
          ],
          departureTime: "6:45 PM"
        },
        vibe: "Winding Down",
        placeEmoji: "🌙",
        description: "Final evening in the Barcelona apartment. Packing starts.",
        localsSecret: "Use this time to organize your liquids and heavy gear; the apartment has a small luggage scale in the utility closet if you need it.",
        reminder: "Tomorrow morning: Welcome Pickups car arrives at 9:30 AM for the Sitges transfer (departure 10:00 AM). Confirm pickup in the Welcome Pickups app and have luggage at the door by 9:15. Strip-the-bed / dishwasher-on before you go — Stay U-nique checkout is 11:00 AM.",
      }
    ]
  },
  {
    dayNumber: 8,
    date: "Mon Jun 1",
    weather: "⛅ 82°/67°",
    weatherDetail: SITGES_FORECAST[0],
    title: "Barcelona → Sitges Transfer",
    vibeCoding: "Coastal Transition & Beach Base",
    events: [
      {
        time: "10:00 AM",
        location: "BCN → Sitges Transfer",
        address: "Sitges, Spain",
        mapsUrl: "https://www.google.com/maps/search/?api=1&query=Sitges+Spain",
        babyMode: "Nap",
        gear: "N/A",
        transit: {
          from: "Barcelona",
          to: "Sitges",
          options: [
            { method: "Cabify Kids", details: "⭐ Private Transfer (35 min)", isRecommended: true, bookingUrl: "cabify://cabify/" },
            { method: "Metro", details: "R2S Train from Psg Gracia (45 min)" },
            { method: "Bus", details: "MonBus from Ronda Universitat (50 min)" }
          ],
          insight: "💡 Stress-free transfer between apartments."
        },
        vibe: "Transit",
        placeEmoji: "🚕",
        description: "Welcome Pickups to our new home in Sitges.",
        localsSecret: "The ride is beautiful; if baby is nap-ready, the coastal tunnels usually provide enough white noise to finish a long nap."
      },
      {
        time: "12:00 PM",
        location: "InSitges Ribera's Beach",
        address: "Passeig de la Ribera, 41, 08870 Sitges",
        mapsUrl: "https://www.google.com/maps/search/?api=1&query=InSitges+Ribera%27s+Beach+Sitges",
        babyMode: "Routine",
        gear: "N/A",
        vibe: "Seafront Living",
        placeEmoji: "🏖️",
        description: "Check in at InSitges Ribera's Beach. Booking #6322580576, PIN 7818.",
        localsSecret: "The terrace is private and child-safe—great for early morning coffee while baby plays in the ocean breeze.",
        bookingDetails: {
          confirmationCode: "6322580576",
          pin: "7818",
          notes: "Beachfront apartment."
        }
      },
      {
        time: "1:30 PM",
        location: "Tropical (Sitges classic seafood)",
        address: "Carrer de Bonaire, 11",
        mapsUrl: "https://www.google.com/maps/search/?api=1&query=Tropical+Restaurant+Sitges",
        rating: 4.3,
        reviewCount: 2156,
        recommendedDish: "Suquet de peix (Catalan fish stew) + grilled red mullet",
        priceRange: "$40–55",
        babyMode: "Routine",
        gear: "Stroller",
        transit: {
          from: "InSitges Apartment",
          to: "Tropical",
          options: [{ method: "Walking", details: "⭐ 4 min walk inland into the old town", isRecommended: true }],
          insight: "💡 Carrer de Bonaire is a pedestrian alley — narrow, painted-white walls, bougainvillea spilling over balconies. The walk itself is Sitges in miniature."
        },
        vibe: "Old Town Lunch",
        placeEmoji: "🐟",
        description: "Tropical — a 1962 Sitges institution two blocks back from the seafront, on a tiled pedestrian alley with outdoor tables under canvas awnings. The Catalan family that runs it still buys fish daily from the local cofradía (fishermen's cooperative). The suquet de peix (fish stew with potatoes, almonds, saffron) is the dish you'll remember from the trip. Family-friendly: highchair, small portions on request, the owners genuinely welcome kids.",
        localsSecret: "Ask for a table at the back of the alley (table 12 or 14) — quieter, more shaded, you can hear the conversation at the table. Order the 'menú degustació de mar' if it's on — €35/person, the kitchen sends out 5 small fish dishes and explains each.",
        backup: {
          name: "Maricel Restaurant",
          reason: "5 min walk further south at Passeig de la Ribera 6 — different place from the Maricel Museum (Day 10). Catalan with sea views; if Tropical's tiny dining room is full, Maricel is the easier walk-in. Same neighborhood feel, similar prices.",
          mapsUrl: "https://www.google.com/maps/search/?api=1&query=Maricel+Restaurant+Sitges"
        }
      },
      {
        time: "4:00 PM",
        location: "Platja de Sant Sebastià",
        address: "Sitges",
        mapsUrl: "https://www.google.com/maps/search/?api=1&query=Platja+de+Sant+Sebastia+Sitges",
        babyMode: "Play",
        gear: "Stroller",
        transit: {
          from: "Tropical",
          to: "Platja de Sant Sebastià",
          options: [{ method: "Walking", details: "🚶 7 min stroll south past the church + church-steps Baluard", isRecommended: true }],
        },
        vibe: "Golden Hour Sitges",
        placeEmoji: "🌅",
        description: "Beach time and a sunset stroll to the iconic church.",
        photoOp: "The church silhouette against the sunset from the Baluard.",
        localsSecret: "Walk past the church to the Baluard lookout—it's the best sunset spot in town and completely flat for strollers."
      },
      {
        time: "6:00 PM",
        location: "Costa Dorada (classic Sitges Catalan)",
        address: "Carrer del Port Alegre, 27",
        mapsUrl: "https://www.google.com/maps/search/?api=1&query=Costa+Dorada+Sitges",
        rating: 4.3,
        reviewCount: 2087,
        recommendedDish: "Fideuà (vermicelli paella) + grilled sardines",
        priceRange: "$45–65",
        babyMode: "Routine",
        gear: "Stroller",
        transit: {
          from: "Beach",
          to: "Costa Dorada",
          options: [{ method: "Walking", details: "🚶 3 min flat walk along the paseo", isRecommended: true }],
        },
        vibe: "Relaxed Coastline",
        placeEmoji: "🥘",
        description: "Costa Dorada — old-school Catalan family seafood, two blocks from the apartment. Wide outdoor terrace facing the Mediterranean; the sun sets RIGHT over the water. They're the only place in Sitges still making proper **fideuà** (vermicelli paella with seafood) the traditional way. Family-friendly, kid-tolerant Catalan grandparents in the dining room, highchair available. Way more affordable than the neighboring La Zorra — same view, half the bill.",
        localsSecret: "Order the fideuà to share + a starter of grilled sardines + pan amb tomàquet. Their house Penedès white is €15 and excellent. The 'crema catalana' here is torched tableside — show Cam the flame.",
        backup: {
          name: "La Zorra",
          reason: "Right next door at Carrer del Port Alegre 26 — Sitges' famous fisherman-style rice place. Pricier (~$75–110 for 2) and arroz-focused with longer waits, but if you want the trendier sunset terrace, it's literally 20 paces away.",
          mapsUrl: "https://www.google.com/maps/search/?api=1&query=La+Zorra+Sitges"
        }
      },
      {
        time: "7:30 PM",
        location: "Back Home",
        address: "Passeig de la Ribera, 41",
        mapsUrl: "https://www.google.com/maps/search/?api=1&query=Stay+U-nique+Apartments+Pau+Claris+Carrer+de+Pau+Claris+99+Barcelona",
        babyMode: "Routine",
        gear: "N/A",
        transit: {
          from: "Costa Dorada",
          to: "Passeig de la Ribera, 41",
          options: [{ method: "Walking", details: "🚶 3 min easy walk", isRecommended: true }],
          departureTime: "7:25 PM"
        },
        vibe: "Winding Down",
        placeEmoji: "🌙",
        description: "Quick hop back to the apartment for sleep.",
        localsSecret: "If you need a late-night pharmacy, Farmàcia Morera on Carrer de les Parellades is the most reliable one in the center."
      }
    ]
  },
  {
    dayNumber: 9,
    date: "Tue Jun 2",
    weather: "☁️ 79°/64°",
    weatherDetail: SITGES_FORECAST[1],
    title: "Slow Sitges Vibe",
    vibeCoding: "Picnics & Coastal Museums",
    events: [
      {
        time: "10:00 AM",
        location: "Platja de la Fragata",
        address: "Sitges",
        mapsUrl: "https://www.google.com/maps/search/?api=1&query=Platja+de+la+Fragata+Sitges",
        babyMode: "Play",
        gear: "Stroller",
        transit: {
          from: "Passeig de la Ribera, 41",
          to: "Sitges Beach",
          options: [{ method: "Walking", details: "🚶 2 min beach-front stroll", isRecommended: true }],
        },
        vibe: "Family Beach",
        placeEmoji: "🏖️",
        description: "Relaxed morning at the baby-friendly Fragata beach.",
        localsSecret: "Fragata beach is protected by the breakwater, so the waves are much calmer—it's widely considered the best beach in Sitges for families."
      },
      {
        time: "12:30 PM",
        location: "Mercat Municipal Picnic",
        address: "Sitges Market",
        mapsUrl: "https://www.google.com/maps/search/?api=1&query=Mercat+Municipal+Sitges",
        babyMode: "Routine",
        gear: "Carrier",
        transit: {
          from: "Beach",
          to: "Mercat Municipal",
          options: [
            { method: "Walking", details: "⭐ Up the Lane (10 min)", isRecommended: true },
            { method: "Bus", details: "Bus SL1 (8 min)" }
          ],
        },
        vibe: "Fresh & Local",
        placeEmoji: "🧺",
        description: "Gather supplies for an apartment picnic and rest.",
        localsSecret: "The charcuterie stall at the back has local 'Xató' sauce jars—buy one to add to your picnic for an authentic Sitges flavor."
      },
      {
        time: "3:30 PM",
        location: "Museu Cau Ferrat",
        address: "Carrer del Fonollar, 6",
        mapsUrl: "https://www.google.com/maps/search/?api=1&query=Museu+Cau+Ferrat+Sitges",
        babyMode: "Nap",
        gear: "Carrier",
        transit: {
          from: "Apartment",
          to: "Cau Ferrat",
          options: [{ method: "Walking", details: "🚶 5 min stroll to the headland", isRecommended: true }],
        },
        vibe: "Modernist Art",
        placeEmoji: "🖼️",
        description: "Afternoon exploring the unique cliff-side art museum.",
        localsSecret: "The museum is very quiet on weekdays; the carrier is best here, and the sea views from the windows are spectacular."
      },
      {
        time: "5:30 PM",
        location: "El Pou (Bib Gourmand tapas)",
        address: "Carrer de Sant Pau, 5",
        mapsUrl: "https://www.google.com/maps/search/?api=1&query=El+Pou+Sitges",
        rating: 4.6,
        reviewCount: 1872,
        recommendedDish: "Mini hamburguesa de wagyu + ravioli de Idiazábal con trufa",
        priceRange: "$80–110",
        babyMode: "Routine",
        gear: "Stroller",
        transit: {
          from: "Cau Ferrat",
          to: "El Pou",
          options: [{ method: "Walking", details: "🚶 4 min via Carrer Sant Pau (pedestrian, lit)", isRecommended: true }],
        },
        vibe: "Creative Tapas",
        placeEmoji: "🍴",
        description: "El Pou — Michelin Bib Gourmand creative tapas, a few minutes inland from the seafront. Tiny dining room (book ahead OR arrive at 5:30 PM open). Famous for the wagyu mini-burger and the truffle-Idiazábal raviolis. Order 3–4 tapas to share, plus the daily fish. Service is warm with families; ask them to bring Cam's plate first.",
        localsSecret: "If El Pou is fully booked, walk one street over to Costa Dorada (Carrer Port Alegre 27) — old-school Catalan, terrace tables, the only place in town serving 'fideuà' (vermicelli paella) the traditional way.",
        backup: {
          name: "Beach House Sitges",
          reason: "3 min walk further on Carrer Sant Pau 34 — Aussie-Mediterranean fusion (bowls, grilled fish, wood-fired flatbreads). Family-friendly, faster service than El Pou, opens at 1 PM so easier for an off-rhythm dinner.",
          mapsUrl: "https://www.google.com/maps/search/?api=1&query=Beach+House+Sitges"
        }
      },
      {
        time: "7:00 PM",
        location: "Back Home",
        address: "Passeig de la Ribera, 41",
        mapsUrl: "https://www.google.com/maps/search/?api=1&query=Stay+U-nique+Apartments+Pau+Claris+Carrer+de+Pau+Claris+99+Barcelona",
        babyMode: "Routine",
        gear: "N/A",
        transit: {
          from: "Sitges Center",
          to: "Apartment",
          options: [{ method: "Walking", details: "🚶 8 min walk", isRecommended: true }],
          departureTime: "6:50 PM"
        },
        vibe: "Winding Down",
        placeEmoji: "🌙",
        description: "Cut down to the Passeig Marítim (the seafront promenade) and walk back along the water. Look for: the white-painted fisherman houses on Carrer del Port Alegre, the night-lit Sant Bartomeu church behind you, and the buoy lights bobbing in the harbor. About 8 min flat walking, sea breeze the whole way.",
        localsSecret: "If Cam is still awake, the bandstand 'Glorieta del Passeig de la Ribera' often has live local musicians from 9 PM in summer — usually a Catalan guitarist or accordionist. Free."
      }
    ]
  },
  {
    dayNumber: 10,
    date: "Wed Jun 3",
    weather: "⛅ 77°/63°",
    weatherDetail: SITGES_FORECAST[2],
    title: "Sitges South & Gardens",
    vibeCoding: "Quiet Escapes & Farewell Sitges",
    events: [
      {
        time: "10:00 AM",
        location: "Platja d'Aiguadolç",
        address: "Sitges East",
        mapsUrl: "https://www.google.com/maps/search/?api=1&query=Platja+d%27Aiguadolc+Sitges",
        babyMode: "Play",
        gear: "Stroller",
        transit: {
          from: "Passeig de la Ribera, 41",
          to: "Sitges East",
          options: [
            { method: "Walking", details: "⭐ Sea-front Stroll (15 min)", isRecommended: true },
            { method: "Bus", details: "Bus SL3 (10 min)" },
            { method: "Cabify Kids", details: "Cabify (5 min)", bookingUrl: "cabify://cabify/" }
          ],
        },
        vibe: "Quiet Cove",
        placeEmoji: "🏖️",
        description: "Quiet south beach area, slightly more secluded.",
        localsSecret: "The path leading to Aiguadolç is hilly but smoothed over—ideal for a carrier hike if the stroller feels too bulky."
      },
      {
        time: "12:00 PM",
        location: "Terramar Gardens",
        address: "Sitges West",
        mapsUrl: "https://www.google.com/maps/search/?api=1&query=Terramar+Gardens+Sitges",
        babyMode: "Nap",
        gear: "Stroller",
        transit: {
          from: "Platja d'Aiguadolç",
          to: "Terramar Gardens",
          options: [
            { method: "Walking", details: "⭐ Promenade Walk (25 min)", isRecommended: true },
            { method: "Bus", details: "Bus SL2 (15 min)" },
            { method: "Cabify Kids", details: "Cabify (8 min)", bookingUrl: "cabify://cabify/" }
          ],
          insight: "💡 Long flat walk, perfect for induces the nap with sea views."
        },
        vibe: "Botanical Rest",
        placeEmoji: "🌿",
        description: "Sitges' best-kept secret garden — built 1918 by Catalan industrialist Francesc Cambó as part of his Terramar luxury estate (the original 'Hollywood of the Mediterranean' before WWI dreams collapsed). Today a free public park, almost no tourists. 45-min stroll: (1) Enter via the main wrought-iron gate. (2) The **central palm-lined alley** with the lily pond — Cam can watch the koi from the stroller. (3) The **rose garden** (best in May–June, you're in peak bloom). (4) The **far-end playground** under the pines — the locals' secret you used to be told about. (5) **Pond benches** in the shade for a full stroller nap. Plan to stay for the nap window — Cam will sleep with the cicadas + breeze.",
        photoOp: "The lily pond with the palm reflections + tall cypress in the background — morning light makes the water mirror-flat.",
        localsSecret: "Bring a small picnic — there's no café inside. The bench cluster at the western end (near the wall facing the sea) is the most peaceful spot and almost always empty."
      },
      {
        time: "1:30 PM",
        location: "La Salseta (Sitges Catalan)",
        address: "Carrer de Sant Pau, 35",
        mapsUrl: "https://www.google.com/maps/search/?api=1&query=La+Salseta+Restaurant+Sitges",
        rating: 4.5,
        reviewCount: 1894,
        recommendedDish: "Fideuà negra (squid-ink vermicelli paella) + crema catalana",
        priceRange: "$40–55",
        babyMode: "Routine",
        gear: "Stroller",
        transit: {
          from: "Terramar Gardens",
          to: "La Salseta",
          options: [
            { method: "Walking", details: "⭐ 15 min seafront walk back to old town", isRecommended: true },
            { method: "Bus", details: "Bus SL2 (8 min)" },
            { method: "Cabify Kids", details: "Cabify (5 min)", bookingUrl: "cabify://cabify/" }
          ],
          insight: "💡 The walk back along the Passeig Marítim is the most Mediterranean-feeling stroll of the trip — flat, breezy, the sea on your left the whole way."
        },
        vibe: "Slow Catalan Lunch",
        placeEmoji: "🍝",
        description: "La Salseta — a quiet Catalan family restaurant on a pedestrian alley in Sitges' old town, run by the same chef-owner couple since 1995. Slow-cooked Catalan classics (no fusion, no tasting menu nonsense): cap-i-pota stew, suquet, fideuà negra, escudella. The dining room is small (10 tables) and tile-walled. Highchair available; the owners genuinely warm with kids. Their crema catalana is the city's best — they torch it tableside.",
        localsSecret: "The dessert menu is sometimes mostly verbal — ask what they have today. Their menjar blanc (Catalan almond-milk blancmange, very old recipe) is rarely on the printed menu but they make it most days.",
        backup: {
          name: "Costa Dorada",
          reason: "8 min walk further south on Carrer del Port Alegre 27 — old-school Catalan, only place in town serving fideuà the original way. If La Salseta is closed (Mondays!) or fully booked, Costa Dorada delivers the same Catalan home-cooking energy with a terrace.",
          mapsUrl: "https://www.google.com/maps/search/?api=1&query=Costa+Dorada+Sitges"
        }
      },
      {
        time: "4:00 PM",
        location: "Maricel Museum",
        address: "Carrer del Fonollar, s/n",
        mapsUrl: "https://www.google.com/maps/search/?api=1&query=Maricel+Museum+Sitges",
        babyMode: "Routine",
        gear: "Carrier",
        transit: {
          from: "La Salseta",
          to: "Maricel Museum",
          options: [
            { method: "Walking", details: "⭐ 3 min walk through the alley", isRecommended: true }
          ],
        },
        vibe: "Cliffside Elegance",
        placeEmoji: "🖼️",
        description: "Final museum visit. Maricel's views over the water are unmatched.",
        localsSecret: "The Cloister area has the most incredible acoustics—if you're lucky, you might catch a rehearsal for an evening concert."
      },
      {
        time: "6:30 PM",
        location: "Fragata (church-view farewell)",
        address: "Passeig de la Ribera, 1",
        mapsUrl: "https://www.google.com/maps/search/?api=1&query=Restaurant+Fragata+Sitges",
        rating: 4.3,
        reviewCount: 2845,
        recommendedDish: "Arroz negro (squid-ink rice) + grilled prawns",
        priceRange: "$90–130",
        babyMode: "Routine",
        gear: "Stroller",
        transit: {
          from: "Maricel",
          to: "Fragata",
          options: [{ method: "Walking", details: "🚶 2 min down to the seafront", isRecommended: true }],
        },
        vibe: "Sunset Grand Finale",
        placeEmoji: "🌅",
        description: "Fragata — the 100+ year old Sitges institution at the foot of the Sant Bartomeu church steps. Ask the host for an outdoor table at the corner facing UP toward the church — that's the postcard view as the sun goes down behind you and the church glows pink. Catalan seafood done classic: arroz negro, grilled gambas, baked sea bream. After dinner, climb the 60-second staircase up to the church terrace itself (Baluard de la Ribera) for the final family photo of the trip.",
        localsSecret: "Order the 'crema catalana' for dessert — Fragata's is torched table-side with a wide caramelized crust. Show Cam the flame from a safe distance; he'll be hypnotized.",
        backup: {
          name: "Boia Nit",
          reason: "3 min walk back along the seafront at Passeig de la Ribera 27 — popular paella + cocktails sundeck terrace with a slightly more contemporary feel. Often easier to walk in late if Fragata is fully booked for the sunset hour.",
          mapsUrl: "https://www.google.com/maps/search/?api=1&query=Boia+Nit+Sitges"
        }
      },
      {
        time: "7:30 PM",
        location: "Back Home",
        address: "Passeig de la Ribera, 41",
        mapsUrl: "https://www.google.com/maps/search/?api=1&query=Stay+U-nique+Apartments+Pau+Claris+Carrer+de+Pau+Claris+99+Barcelona",
        babyMode: "Routine",
        gear: "N/A",
        transit: {
          from: "Church Terrace",
          to: "Apartment",
          options: [{ method: "Walking", details: "🚶 5 min sunset wander", isRecommended: true }],
          departureTime: "7:25 PM"
        },
        vibe: "Winding Down",
        placeEmoji: "🌙",
        description: "Last night in Spain. Final pack before the early wake-up call.",
        localsSecret: "A nightcap on the apartment balcony while baby sleeps is the perfect way to soak in the final Mediterranean sounds.",
        reminder: "🚨 Pre-booked car arrives Sitges 7:00 AM tomorrow for BCN airport (UA 991 departs 11:15 AM). Set 2 alarms (5:30 + 5:45 AM). Lay out passports + Cam's documents tonight. Bottles + formula for the flight pre-portioned. Stroller and car seat by the door.",
      }
    ]
  },
  {
    dayNumber: 11,
    date: "Thu Jun 4",
    weather: "✈️ 78°/64°",
    weatherDetail: SITGES_FORECAST[3],
    title: "Homeward Bound",
    vibeCoding: "Early Exit & Mission Accomplished",
    events: [
      {
        time: "7:00 AM",
        location: "Pre-booked Car Departure (Sitges)",
        address: "Passeig de la Ribera, 41, 08870 Sitges",
        mapsUrl: "https://www.google.com/maps/search/?api=1&query=InSitges+Ribera+41+Passeig+de+la+Ribera+Sitges",

        babyMode: "Routine",
        gear: "Stroller",
        transit: {
          from: "Passeig de la Ribera, 41",
          to: "BCN Terminal 1",
          options: [
            { method: "Pre-booked Car", details: "⭐ Pre-installed car seat, ~40 min via C-32", isRecommended: true }
          ],
          insight: "💡 ~40 min ride at 7 AM (off-peak). Garraf tunnel can stall behind a slow truck — leave a small buffer.",
          departureTime: "7:00 AM"
        },
        vibe: "Coastal Goodbye",
        placeEmoji: "🚕",
        description: "Final apartment sweep, strip the crib, leave the host a thank-you note. Strap Cam into the pre-installed seat.",
        localsSecret: "Sit on the left side for one last ocean view before the tunnels."
      },
      {
        time: "7:50 AM",
        location: "BCN T1 Curbside Drop",
        address: "08820 El Prat de Llobregat, Barcelona",
        mapsUrl: "https://www.google.com/maps/search/?api=1&query=Barcelona+Airport+Terminal+1",

        babyMode: "Routine",
        gear: "Stroller",
        vibe: "The 3-Hour Rule",
        placeEmoji: "🛫",
        description: "International + infant + EES = arrive 3+ hours early. Grab a free luggage trolley before security.",
        localsSecret: "Trolleys (carros portaequipajes) are free at BCN — return them in the rack before the EES kiosk hall."
      },
      {
        time: "8:05 AM",
        location: "United Check-in & Bag Drop",
        address: "BCN T1, United Airlines Counter",
        babyMode: "Routine",
        gear: "Stroller",
        vibe: "Document Checkpoint",
        placeEmoji: "🛂",
        description: "Drop checked bags, confirm seats 33D/33F, gate-check tags for stroller and car seat.",
        localsSecret: "Ask the agent to re-confirm Cam's bassinet — last leg of the trip is when you really need it."
      },
      {
        time: "8:40 AM",
        location: "Security Screening",
        address: "BCN T1 Security",
        babyMode: "Routine",
        gear: "Carrier",
        vibe: "Liquid Audit",
        placeEmoji: "🛡️",
        description: "Spanish security is relaxed about formula and baby food. Pull electronics out; shoes usually stay on.",
        localsSecret: "If the main lane is slammed, the far-right family lane is almost always shorter."
      },
      {
        time: "9:05 AM",
        location: "EES Exit Kiosk",
        address: "BCN T1 Schengen Exit Passport Control",
        babyMode: "Routine",
        gear: "Carrier",
        vibe: "Biometric Stamp-Out",
        placeEmoji: "🧬",
        description: "Spain's EES (Entry/Exit System) is fully live as of 2026. Since you enrolled on arrival (May 25), exit is a quick face-scan re-verification — no fingerprints. Budget 15–25 min in line, ~3 min at the kiosk.",
        localsSecret: "Cam (under 12) only needs a face photo, no fingerprints. Hold him at chest height facing the camera; the kiosk auto-detects."
      },
      {
        time: "9:35 AM",
        location: "Family Play Area & Breakfast",
        address: "BCN T1 Central Concourse",
        babyMode: "Play",
        gear: "Stroller",
        vibe: "Burn Energy Pre-Flight",
        placeEmoji: "🧸",
        description: "BCN T1 has a great kids' play area in the middle of the terminal. Coffee, Cam crawls, last diaper change before the 9-hour stretch.",
        localsSecret: "Play area is past duty-free, on the way to the C/D gate fork — under-marked but well worth finding."
      },
      {
        time: "10:30 AM",
        location: "Walk to Gate",
        address: "BCN T1, UA 991 Gate",
        babyMode: "Routine",
        gear: "Stroller",
        vibe: "Final Approach",
        placeEmoji: "🚪",
        description: "Head to the gate ~45 min before departure. Confirm bassinet row and check for last-minute upgrade openings.",
        localsSecret: "BCN gate areas in T1 have charging strips along the walls — top up devices for the flight."
      },
      {
        time: "10:45 AM",
        location: "Pre-Boarding (BCN)",
        address: "UA 991 Gate, BCN T1",
        babyMode: "Routine",
        gear: "Stroller",
        vibe: "Setting Up Camp",
        placeEmoji: "🎟️",
        description: "Board early with car seat, diaper bags, overhead gear. Set up Cam's space before the cabin fills.",
        localsSecret: "Sanitizer-wipe ritual again: tray, armrests, window. 30 seconds for 9 hours of peace of mind."
      },
      {
        time: "10:55 AM",
        location: "Last Call (BCN)",
        address: "UA 991 Gate, BCN T1",
        babyMode: "Play",
        gear: "Stroller",
        vibe: "Maximize Floor Time",
        placeEmoji: "🚪",
        description: "Walk the gate area until final boarding is called. Squeeze one more diaper change in before doors close.",
        localsSecret: "Stand near the gate agent — they'll wave you forward as soon as it's clear."
      },
      {
        time: "11:00 AM",
        location: "Doors Close (BCN)",
        address: "UA 991 Jet Bridge, BCN T1",
        babyMode: "Routine",
        gear: "N/A",
        vibe: "Strict Cutoff",
        placeEmoji: "🚪",
        description: "All passengers on the jet bridge. 15 minutes to scheduled departure."
      },
      {
        time: "11:15 AM",
        location: "UA 991 Departure",
        address: "BCN → IAD",
        mapsUrl: "https://www.google.com/maps/search/?api=1&query=Barcelona+Airport+Terminal+1",

        babyMode: "Nap",
        gear: "N/A",
        vibe: "Adiós, Spain",
        placeEmoji: "✈️",
        description: "Flight duration: 8h 50m (westbound is longer — headwinds). Lunch service ~1 hour in.",
        bookingDetails: {
          confirmationCode: "UA-991",
          notes: "BCN → IAD. Arrives 2:00 PM EST."
        },
        localsSecret: "Chase the sun westbound — keep window shades down to encourage Cam's sleep schedule."
      },
      {
        time: "2:00 PM",
        location: "Land at IAD",
        address: "Dulles International Airport",
        mapsUrl: "https://www.google.com/maps/search/?api=1&query=Dulles+International+Airport",

        babyMode: "Routine",
        gear: "Stroller",
        vibe: "Touchdown",
        placeEmoji: "🛬",
        description: "Wheels down at IAD. Stroller and car seat usually delivered to the jet bridge."
      },
      {
        time: "2:25 PM",
        location: "US Customs (CBP)",
        address: "IAD Federal Inspection Services",
        babyMode: "Routine",
        gear: "Stroller",
        vibe: "Welcome Home",
        placeEmoji: "🛂",
        description: "Use Mobile Passport Control (free) or Global Entry — family lane is usually shorter than the general queue.",
        localsSecret: "Open MPC on the jet bridge so your submission is ready by the time you reach the agent — saves 20+ min vs. the standard lane."
      },
      {
        time: "3:00 PM",
        location: "Baggage Claim",
        address: "IAD International Arrivals",
        babyMode: "Routine",
        gear: "Stroller",
        vibe: "Last Logistics",
        placeEmoji: "🧳",
        description: "Grab bags, recheck stroller and car seat, text the pickup driver."
      },
      {
        time: "3:45 PM",
        location: "Meet Parents at IAD",
        address: "Dulles International Airport",
        mapsUrl: "https://www.google.com/maps/search/?api=1&query=Dulles+International+Airport",

        babyMode: "Routine",
        gear: "Stroller",
        transit: {
          from: "IAD Arrivals",
          to: "618 South Royal Street Alexandria, VA",
          options: [{ method: "Family Car", details: "⭐ Parents' car (~45 min via Dulles Access Rd)", isRecommended: true }]
        },
        vibe: "Reunion",
        placeEmoji: "🫂",
        description: "Parents picking up. 45 min drive back to Alexandria via the Dulles Access Road.",
        localsSecret: "If Cam is wide awake, the Access Road is the smoothest route — no stop-and-go to reset him."
      },
      {
        time: "4:30 PM",
        location: "Home Sweet Home",
        address: "618 South Royal Street Alexandria, VA 22314",
        mapsUrl: "https://www.google.com/maps/search/?api=1&query=618+South+Royal+Street+Alexandria+VA",

        babyMode: "Routine",
        gear: "N/A",
        vibe: "Mission Accomplished",
        placeEmoji: "🏡",
        description: "First international trip — done. Long shower. Order takeout. You earned it.",
        localsSecret: "Cam's body clock will be wrecked for ~5 days. Strict 7 AM wake-ups + morning sun speeds the reset."
      }
    ]
  }
];
