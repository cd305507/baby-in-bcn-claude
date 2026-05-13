import { DayItinerary } from '../types';
import { BARCELONA_FORECAST, SITGES_FORECAST } from './weather';

export const ITINERARY_DATA: DayItinerary[] = [
  {
    dayNumber: 0,
    date: "Sun May 24",
    weather: "✈️ 67°/55°",
    weatherDetail: BARCELONA_FORECAST[0],
    title: "The Journey: Alexandria to Barcelona",
    vibeCoding: "High-Efficiency Transit & Pre-Flight Zen",
    events: [
      {
        time: "2:40 PM",
        location: "Depart Alexandria",
        address: "618 South Royal Street Alexandria, VA 22314",
        mapsUrl: "https://www.google.com/maps/search/?api=1&query=618+South+Royal+Street+Alexandria+VA+22314",
        babyMode: "Routine",
        gear: "Stroller",
        transit: {
          from: "618 South Royal Street Alexandria, VA 22314",
          to: "IAD",
          options: [
            { method: "Cabify Kids", details: "⭐ Private Car (~50 min in Saturday traffic)", isRecommended: true, bookingUrl: "cabify://cabify/" },
            { method: "Metro", details: "Silver Line to Dulles (75 min)" },
            { method: "Walking", details: "N/A" }
          ],
          insight: "💡 Allow ~50 mins for Saturday traffic and parking/drop-off.",
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
        mapsUrl: "https://www.google.com/maps/search/?api=1&query=United+International+Check-in+Dulles",
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
        mapsUrl: "https://www.google.com/maps/search/?api=1&query=Dulles+IAD+TSA",
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
        mapsUrl: "https://www.google.com/maps/search/?api=1&query=Dulles+AeroTrain",
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
        mapsUrl: "https://www.google.com/maps/search/?api=1&query=Dulles+International+Airport+Gate+C",
        babyMode: "Routine",
        gear: "Stroller",
        vibe: "Last-Mile Logistics",
        placeEmoji: "🏷️",
        description: "Visit the gate agent to get 'Gate Check' tags for stroller and car seat. Confirm the bassinet row.",
        localsSecret: "Ask if anything has opened up in a bulkhead or exit-adjacent row — agents will sometimes move you for legroom."
      },
      {
        time: "5:35 PM",
        location: "Pre-Boarding (User)",
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
        location: "Last Call (Partner + Cam)",
        address: "UA 992 Gate, IAD",
        babyMode: "Play",
        gear: "Stroller",
        vibe: "Maximize Floor Time",
        placeEmoji: "🚶",
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
    weather: "⛅ 67°/56°",
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
        time: "9:30 AM",
        location: "Stay U-nique Apartments Pau Claris",
        address: "Carrer de Pau Claris, 99, 08009 Barcelona",
        mapsUrl: "https://www.google.com/maps/search/?api=1&query=Stay+U-nique+Apartments+Pau+Claris+Carrer+de+Pau+Claris+99+08009+Barcelona",
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
        description: "Arrival at the apartment. Code 34713/2026. Crib & High Chair pre-set.",
        localsSecret: "There is a 24-hour pharmacy (Farmàcia 1896) one block away on Carrer d'Aragó for any baby supplies you might have forgotten.",
        bookingDetails: {
          confirmationCode: "34713/2026",
          checkIn: "Ready by 9:30 AM (Requested)",
          notes: "3BR w/ Balcony."
        }
      },
      {
        time: "11:30 AM",
        location: "Passeig de Gràcia Stroll",
        address: "Passeig de Gràcia, Barcelona",
        mapsUrl: "https://www.google.com/maps/search/?api=1&query=Passeig+de+Gràcia+Barcelona",
        babyMode: "Nap",
        gear: "Stroller",
        transit: {
          from: "Carrer de Pau Claris, 99",
          to: "Passeig de Gràcia, Barcelona",
          options: [{ method: "Walking", details: "🚶 5 min easy walk", isRecommended: true }],
        },
        vibe: "Modernist First Look",
        placeEmoji: "🏙️",
        description: "Stroll Passeig de Gràcia, grab coffee, and let Cameron let baby nap in the stroller.",
        photoOp: "The stunning facade of Casa Batlló at sunset.",
        localsSecret: "The interior courtyards of the Eixample blocks (like Jardins de Palau Robert) are hidden quiet oases away from street noise, perfect for keeping a nap going."
      },
      {
        time: "5:30 PM",
        location: "Bar Mut Early Dinner",
        address: "Carrer de Pau Claris, 192",
        mapsUrl: "https://www.google.com/maps/search/?api=1&query=Bar+Mut+Barcelona",
        rating: 4.4,
        reviewCount: 1542,
        recommendedDish: "Carpaccio de huevos fritos (Deep-fried egg carpaccio with pine nuts)",
        babyMode: "Routine",
        gear: "Stroller",
        transit: {
          from: "Passeig de Gràcia",
          to: "Bar Mut",
          options: [{ method: "Walking", details: "🚶 8 min walk up Pau Claris", isRecommended: true }],
        },
        vibe: "First Catalan Bites",
        placeEmoji: "🍽️",
        description: "Early dinner to beat the rush and manage jet lag.",
        localsSecret: "Ask for the 'Arroz con huevos'—it's not on the menu but it's arguably the best comfort dish in the neighborhood."
      },
      {
        time: "7:00 PM",
        location: "Back Home",
        address: "Carrer de Pau Claris, 99",
        mapsUrl: "https://www.google.com/maps/search/?api=1&query=Carrer+de+Pau+Claris+99+08009+Barcelona",
        babyMode: "Routine",
        gear: "N/A",
        transit: {
          from: "Bar Mut",
          to: "Apartment",
          options: [{ method: "Walking", details: "🚶 10 min easy walk home", isRecommended: true }],
          departureTime: "6:45 PM"
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
    weather: "☀️ 68°/57°",
    weatherDetail: BARCELONA_FORECAST[2],
    title: "Ciutadella + El Born + Boqueria",
    vibeCoding: "Park Life & Market Wandering",
    events: [
      {
        time: "10:00 AM",
        location: "Parc de la Ciutadella",
        address: "Passeig de Picasso, 21",
        mapsUrl: "https://www.google.com/maps/search/?api=1&query=Ciutadella+Park+Barcelona",
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
        description: "Morning in the park. Great for baby's tummy time on the grass.",
        photoOp: "The grand Cascada Monumental waterfall fountain.",
        localsSecret: "Head to the 'Cascada Monumental' (waterfall)—there's a shaded path behind it that's significantly quieter than the main central lawns."
      },
      {
        time: "12:30 PM",
        location: "Boqueria Market",
        address: "La Rambla, 91",
        mapsUrl: "https://www.google.com/maps/search/?api=1&query=Mercado+de+La+Boqueria",
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
          insight: "💡 Beautiful architecture in El Born, but can be narrow for strollers - carrier suggested."
        },
        vibe: "Market Energy",
        placeEmoji: "🍅",
        description: "Walk through El Born to the Boqueria for an early lunch. Use carrier as it gets crowded.",
        photoOp: "Colorful fruit displays of the market.",
        localsSecret: "The back stalls (near the Plaza de la Gardunya entrance) are less crowded and have the same quality produce for lower prices."
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
        placeEmoji: "🚶",
        description: "Walk home via the beautiful Rambla de Catalunya while baby naps.",
        localsSecret: "Rambla de Catalunya has a central pedestrian promenade with plenty of shade and smooth paving—much better for a sleeping baby than the bumpy Gothic Quarter."
      },
      {
        time: "5:30 PM",
        location: "Tapas 24 Dinner",
        address: "Carrer de la Diputació, 269",
        mapsUrl: "https://www.google.com/maps/search/?api=1&query=Tapas+24+Barcelona",
        rating: 4.2,
        reviewCount: 8241,
        recommendedDish: "The 'Bikini' (truffle bikini sandwich) with jamón ibérico",
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
        localsSecret: "The 'McBaix' (mini burgers) and the 'Bikini' (truffle bikini sandwich) are must-orders here."
      },
      {
        time: "7:00 PM",
        location: "Back Home",
        address: "Carrer de Pau Claris, 99",
        mapsUrl: "https://www.google.com/maps/search/?api=1&query=Carrer+de+Pau+Claris+99+08009+Barcelona",
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
        localsSecret: "If you need a quiet evening walk, check out the nearby Passatge de Permanyer—a beautiful English-style mews street that's usually empty."
      }
    ]
  },
  {
    dayNumber: 3,
    date: "Wed May 27",
    weather: "⛅ 67°/58°",
    weatherDetail: BARCELONA_FORECAST[3],
    title: "Park Güell + Hidden Laberint",
    vibeCoding: "Fairy Tale Views & Maze Garden",
    events: [
      {
        time: "10:30 AM",
        location: "Park Güell",
        address: "08024 Barcelona",
        mapsUrl: "https://www.google.com/maps/search/?api=1&query=Park+Güell",
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
        description: "Timed entry at 10:30 AM. Picnic in the free zone afterwards.",
        prebookInfo: { required: true, note: "BOOKED for 10:30 AM." },
        photoOp: "The gingerbread-style houses from the hypostyle room.",
        localsSecret: "Enter via the Carrer de Larrard entrance (south gate) for the most iconic views immediately upon entry."
      },
      {
        time: "2:00 PM",
        location: "Parc del Laberint d'Horta",
        address: "Passeig dels Castanyers, 1",
        mapsUrl: "https://www.google.com/maps/search/?api=1&query=Parc+del+Laberint+d'Horta",
        babyMode: "Nap",
        gear: "Stroller",
        vibe: "Hidden Oasis",
        placeEmoji: "🌀",
        description: "Hedge maze garden. FREE on Wednesdays! A true hidden gem for a quiet afternoon.",
        photoOp: "The neoclassical pavilion staircase overlooking the green hedge maze.",
        transit: {
          from: "Park Güell",
          to: "Laberint d'Horta",
          options: [
            { method: "Cabify Kids", details: "⭐ Direct Ride (15 min)", isRecommended: true, bookingUrl: "cabify://cabify/" },
            { method: "Bus", details: "V19 to V21 Connection (35 min)" },
            { method: "Metro", details: "L3 to Mundet (30 min)" }
          ],
          insight: "💡 Easiest to use Cabify Kids between these two hillside spots."
        },
        localsSecret: "The upper gardens near the neo-classical pavilion are incredibly quiet for a stroller nap—almost no tourists make it up there."
      },
      {
        time: "5:30 PM",
        location: "Cervecería Catalana",
        address: "Carrer de Mallorca, 236",
        mapsUrl: "https://www.google.com/maps/search/?api=1&query=Cervecería+Catalana",
        rating: 4.5,
        reviewCount: 25182,
        recommendedDish: "Solomillo al foie (Sirloin with foie gras)",
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
        localsSecret: "Try to sit at the bar if you can leave the stroller at the door—the action is the highlight. Otherwise, the back room is best for infants."
      },
      {
        time: "7:00 PM",
        location: "Back Home",
        address: "Carrer de Pau Claris, 99",
        mapsUrl: "https://www.google.com/maps/search/?api=1&query=Carrer+de+Pau+Claris+99+08009+Barcelona",
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
        localsSecret: "If you need fresh diapers or wipes, there is a small ‘Caprabo’ supermarket on Carrer de Pau Claris that carries all the major brands."
      }
    ]
  },
  {
    dayNumber: 4,
    date: "Thu May 28",
    weather: "☀️ 68°/57°",
    weatherDetail: BARCELONA_FORECAST[4],
    title: "Sagrada Família + Sant Antoni",
    vibeCoding: "Architectural Wonder & Market Vibes",
    events: [
      {
        time: "9:45 AM",
        location: "Sagrada Família",
        address: "Carrer de Mallorca, 401",
        mapsUrl: "https://www.google.com/maps/search/?api=1&query=Sagrada+Familia+barcelona",
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
        description: "9:45 AM entry. Indoor day means rain doesn't matter.",
        prebookInfo: { required: true, note: "BOOKED for 9:45 AM." },
        photoOp: "The light streaming through the stained glass inside.",
        localsSecret: "The school playground right next to the Nativity Facade often has a small cafe where parents gather—great if you need a quick break."
      },
      {
        time: "12:30 PM",
        location: "Avinguda de Gaudí Lunch",
        address: "Avinguda de Gaudí",
        mapsUrl: "https://www.google.com/maps/search/?api=1&query=Avinguda+de+Gaudí+Barcelona",
        babyMode: "Routine",
        gear: "Stroller",
        transit: {
          from: "Sag Fm",
          to: "Avinguda de Gaudí",
          options: [{ method: "Walking", details: "🚶 2 min stroll to cafe area", isRecommended: true }],
        },
        vibe: "Terrace Dining",
        placeEmoji: "☕",
        description: "Lunch at one of the terrace cafés with a view of the basilica.",
        localsSecret: "Walk a further 2 blocks up Gaudí to find 'Badiu'—it's less touristy and has actual Catalan specialties."
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
        description: "Afternoon exploring the impressive Sant Antoni market building.",
        photoOp: "The incredible central octagonal hall with its iron architecture.",
        localsSecret: "The underground level excavated Roman ruins are visible and very quiet—perfect for a peaceful stroller nap while seeing some history."
      },
      {
        time: "5:00 PM",
        location: "Bar Calders",
        address: "Carrer de Parlament, 25",
        mapsUrl: "https://www.google.com/maps/search/?api=1&query=Bar+Calders",
        rating: 4.3,
        reviewCount: 3654,
        recommendedDish: "Chips with Espinaler sauce & craft vermut",
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
        localsSecret: "Ask for the 'Chips with Espinaler sauce'—the most authentic way to enjoy a Barcelona vermut."
      },
      {
        time: "6:30 PM",
        location: "Back Home",
        address: "Carrer de Pau Claris, 99",
        mapsUrl: "https://www.google.com/maps/search/?api=1&query=Carrer+de+Pau+Claris+99+08009+Barcelona",
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
    weather: "☀️ 69°/58°",
    weatherDetail: BARCELONA_FORECAST[5],
    title: "Casa Batlló + Casa Vicens",
    vibeCoding: "Double Gaudí & Gràcia Wandering",
    events: [
      {
        time: "9:15 AM",
        location: "Casa Batlló",
        address: "Passeig de Gràcia, 43",
        mapsUrl: "https://www.google.com/maps/search/?api=1&query=Casa+Batlló",
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
        localsSecret: "The roof terrace is the highlight, but the 'Smart Guide' augmented reality tablet is also surprisingly fun for infants to look at."
      },
      {
        time: "12:00 PM",
        location: "Gràcia Lunch",
        address: "Gràcia neighborhood",
        mapsUrl: "https://www.google.com/maps/search/?api=1&query=Gràcia+Barcelona",
        babyMode: "Routine",
        gear: "Stroller",
        transit: {
          from: "Casa Batlló",
          to: "Gràcia",
          options: [
            { method: "Walking", details: "⭐ Stroll up Psg Gracia (15 min)", isRecommended: true },
            { method: "Metro", details: "L3 Psg Gracia to Fontana (10 min)" },
            { method: "Bus", details: "Bus 22/24 (12 min)" },
            { method: "Cabify Kids", details: "Cabify (8 min)", bookingUrl: "cabify://cabify/" }
          ],
        },
        vibe: "Bohemian Village",
        placeEmoji: "🏘️",
        description: "Walk up into Gràcia for lunch near the Cervecería Catalana area.",
        localsSecret: "The plaza 'Plaça de la Virreina' is one of the most baby-friendly spots in Gràcia—plenty of space for a stroller and a calm atmosphere."
      },
      {
        time: "2:30 PM",
        location: "Casa Vicens",
        address: "Carrer de les Carolines, 20",
        mapsUrl: "https://www.google.com/maps/search/?api=1&query=Casa+Vicens",
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
        description: "Explore Gaudí's first house. Typically quieter than the big two.",
        prebookInfo: { required: true, note: "Book on the ground." },
        photoOp: "The stunning smoking room with its intricate blue and gold ceiling.",
        localsSecret: "The garden at Casa Vicens is a tiny paradise. The corner table in the cafe is the quietest spot for a resting infant while you enjoy the architecture."
      },
      {
        time: "5:00 PM",
        location: "Pepa Tomate",
        address: "Plaça de la Revolució de Setembre de 1868, 17",
        mapsUrl: "https://www.google.com/maps/search/?api=1&query=Pepa+Tomate",
        rating: 4.2,
        reviewCount: 2481,
        recommendedDish: "Pepa Tomate bravas with unique green sauce",
        babyMode: "Routine",
        gear: "Stroller",
        transit: {
          from: "Casa Vicens",
          to: "Pepa Tomate",
          options: [{ method: "Walking", details: "🚶 10 min easy walk in Gràcia", isRecommended: true }],
        },
        vibe: "Creative Catalan",
        placeEmoji: "🍅",
        description: "Early dinner in the heart of Gràcia.",
        localsSecret: "The 'Pepa Tomate bravas' are legendary and served with a unique green sauce—be sure to ask for the stroller-accessible tables in the back section."
      },
      {
        time: "6:30 PM",
        location: "Back Home",
        address: "Carrer de Pau Claris, 99",
        mapsUrl: "https://www.google.com/maps/search/?api=1&query=Carrer+de+Pau+Claris+99+08009+Barcelona",
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
        description: "Wander back through the evening streets of Eixample.",
        localsSecret: "Stop by the 'Gelateria Gelaaati!' on the way back for the best artisan pistachio gelato in the area."
      }
    ]
  },
  {
    dayNumber: 6,
    date: "Sat May 30",
    weather: "⛅ 71°/59°",
    weatherDetail: BARCELONA_FORECAST[6],
    title: "Gothic + Waterfront + Born",
    vibeCoding: "Old City Soul & Beach Breeze",
    events: [
      {
        time: "10:00 AM",
        location: "Barcelona Cathedral",
        address: "Pla de la Seu, s/n, 08002 Barcelona",
        mapsUrl: "https://www.google.com/maps/search/?api=1&query=Barcelona+Cathedral",
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
        localsSecret: "Side entrance on Carrer del Bisbe is stroller-friendly; the main steps require carrying. Cloister is a peaceful 5-min loop."
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
        localsSecret: "There's a tiny carved skull with a dagger in the bridge's underside — legend says removing it brings disaster."
      },
      {
        time: "10:45 AM",
        location: "Plaça de Sant Felip Neri",
        address: "Plaça de Sant Felip Neri, 5, 08002 Barcelona",
        mapsUrl: "https://www.google.com/maps/search/?api=1&query=Pla%C3%A7a+de+Sant+Felip+Neri+Barcelona",
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
        mapsUrl: "https://www.google.com/maps/search/?api=1&query=Pla%C3%A7a+del+Rei+Barcelona",
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
        mapsUrl: "https://www.google.com/maps/search/?api=1&query=Pla%C3%A7a+Reial+Barcelona",
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
        localsSecret: "Order a horchata from one of the perimeter cafés and let Cam watch the buskers — the easiest stroller terrain on the whole walk."
      },
      {
        time: "1:00 PM",
        location: "La Mar Salada Lunch",
        address: "Passeig de Joan de Borbó, 58",
        mapsUrl: "https://www.google.com/maps/search/?api=1&query=La+Mar+Salada",
        rating: 4.3,
        reviewCount: 3512,
        recommendedDish: "Arroz de Senyoret (Peeled seafood rice)",
        babyMode: "Routine",
        gear: "Stroller",
        transit: {
          from: "Gothic Quarter",
          to: "Barceloneta",
          options: [
            { method: "Walking", details: "⭐ Harbor Stroll (15 min)", isRecommended: true },
            { method: "Metro", details: "L4 Jaume I to Barceloneta (10 min)" },
            { method: "Cabify Kids", details: "Cabify (8 min)", bookingUrl: "cabify://cabify/" }
          ],
        },
        vibe: "Paella by the Sea",
        placeEmoji: "🥘",
        description: "Barceloneta paella lunch. Excellent quality overlooking the harbor.",
        photoOp: "Paella pan with the sea in the background.",
        localsSecret: "This is one of the few places in Barceloneta that locals actually frequent for paella; the 'Arroz de Senyoret' is fantastic."
      },
      {
        time: "3:00 PM",
        location: "Barceloneta Beach Time",
        address: "Barceloneta Beach",
        mapsUrl: "https://www.google.com/maps/search/?api=1&query=Barceloneta+Beach+Barcelona",
        babyMode: "Play",
        gear: "Carrier",
        transit: {
          from: "Restaurant",
          to: "Beach",
          options: [{ method: "Walking", details: "🚶 5 min walk to sand", isRecommended: true }],
        },
        vibe: "Mediterranean Sun",
        placeEmoji: "🏖️",
        description: "Relax on the sand and let Cameron feel the sea breeze.",
        photoOp: "The iconic 'Wounded Star' iron cubes on the beach sand.",
        localsSecret: "Walk along the 'Passeig Marítim' towards the W Hotel—the boardwalk is very wide and perfect for keeping the stroller moving for a breeze-induced nap."
      },
      {
        time: "5:00 PM",
        location: "Bormuth",
        address: "Carrer del Rec, 31",
        mapsUrl: "https://www.google.com/maps/search/?api=1&query=Bormuth",
        rating: 4.4,
        reviewCount: 4621,
        recommendedDish: "Honeyed cod (Bacalao meloso) & extra crispy bravas",
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
        localsSecret: "The bravas here are among the best in the city—ask for them extra crispy. The high tables at the back are usually better for strollers."
      },
      {
        time: "7:00 PM",
        location: "Back Home",
        address: "Carrer de Pau Claris, 99",
        mapsUrl: "https://www.google.com/maps/search/?api=1&query=Carrer+de+Pau+Claris+99+08009+Barcelona",
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
    weather: "⛅ 72°/60°",
    weatherDetail: BARCELONA_FORECAST[7],
    title: "Montjuïc Mountain Farewell",
    vibeCoding: "Cables, Castles & Gardens",
    events: [
      {
        time: "10:00 AM",
        location: "Telefèric de Montjuïc",
        address: "Avinguda de Miramar, 30",
        mapsUrl: "https://maps.app.goo.gl/cd8fFPdP5jqRAtdHA",
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
        description: "Cable car up to the Montjuïc Castle. Great views of the city.",
        photoOp: "Sweeping city views from the gondola ride up.",
        localsSecret: "Buy tickets online to skip the line—with a stroller, the staff usually fast-tracks you to the front of the gondola queue."
      },
      {
        time: "11:30 AM",
        location: "Montjuïc Castle & Gardens",
        address: "Montjuïc, Barcelona",
        mapsUrl: "https://www.google.com/maps/search/?api=1&query=Castell+de+Montjuïc",
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
        description: "Walk to the Botanical Garden and Fundació Miró.",
        photoOp: "The stone bridge at the castle entrance with the city below.",
        localsSecret: "The gardens surrounding the castle are the best place for a panoramic picnic away from the lunch crowds—plenty of shaded grass spots."
      },
      {
        time: "1:30 PM",
        location: "Restaurant Montjuïc",
        address: "Montjuïc Mountain",
        mapsUrl: "https://www.google.com/maps/search/?api=1&query=Montjuïc+Barcelona",
        rating: 4.2,
        reviewCount: 4102,
        recommendedDish: "Arroz de gamba roja (Red prawn rice) with port views",
        babyMode: "Routine",
        gear: "Stroller",
        transit: {
          from: "Gardens",
          to: "Restaurant",
          options: [
            { method: "Walking", details: "⭐ Scenic Path (10 min)", isRecommended: true },
            { method: "Bus", details: "Bus 150 (5 min)" }
          ],
        },
        vibe: "Panoramic Lunch",
        placeEmoji: "🍽️",
        description: "Lunch on the mountain with views of the port.",
        localsSecret: "If the main terrace is full, the smaller side balcony has even better views of the container port below."
      },
      {
        time: "5:00 PM",
        location: "Final BCN Cervecería Catalana",
        address: "Carrer de Mallorca, 236",
        mapsUrl: "https://www.google.com/maps/search/?api=1&query=Cervecería+Catalana+Barcelona",
        rating: 4.5,
        reviewCount: 25182,
        recommendedDish: "The famous Solomillo al foie for a final tribute",
        babyMode: "Routine",
        gear: "Stroller",
        transit: {
          from: "Montjuïc",
          to: "Eixample",
          options: [
            { method: "Cabify Kids", details: "⭐ Direct Peak-to-Door (20 min)", isRecommended: true, bookingUrl: "cabify://cabify/" },
            { method: "Bus", details: "Bus 150 to Plaça Espanya (25 min)" },
            { method: "Metro", details: "Funicular + L3 (35 min)" }
          ],
        },
        vibe: "Farewell Tapas",
        placeEmoji: "🥘",
        description: "One last visit to our favorite spot before checking out of BCN.",
        localsSecret: "Ordering the 'Solomillo al foie' as a final tribute—it's their most famous tapa for a reason."
      },
      {
        time: "7:00 PM",
        location: "Back Home",
        address: "Carrer de Pau Claris, 99",
        mapsUrl: "https://www.google.com/maps/search/?api=1&query=Carrer+de+Pau+Claris+99+08009+Barcelona",
        babyMode: "Routine",
        gear: "N/A",
        transit: {
          from: "Cervecería Catalana",
          to: "Carrer de Pau Claris, 99",
          options: [
            { method: "Walking", details: "⭐ Final Stroll (12 min)", isRecommended: true },
            { method: "Cabify Kids", details: "Cabify (6 min)", bookingUrl: "cabify://cabify/" }
          ],
          departureTime: "6:45 PM"
        },
        vibe: "Winding Down",
        placeEmoji: "🌙",
        description: "Final evening in the Barcelona apartment. Packing starts.",
        localsSecret: "Use this time to organize your liquids and heavy gear; the apartment has a small luggage scale in the utility closet if you need it."
      }
    ]
  },
  {
    dayNumber: 8,
    date: "Mon Jun 1",
    weather: "⛅ 70°/57°",
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
        mapsUrl: "https://www.google.com/maps/search/?api=1&query=InSitges+Ribera's+Beach+Passeig+de+la+Ribera+41+08870+Sitges",
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
        time: "4:00 PM",
        location: "Platja de Sant Sebastià",
        address: "Sitges",
        mapsUrl: "https://www.google.com/maps/search/?api=1&query=Platja+de+Sant+Sebastià+Sitges",
        babyMode: "Play",
        gear: "Stroller",
        transit: {
          from: "Apartment",
          to: "Platja de Sant Sebastià",
          options: [{ method: "Walking", details: "🚶 5 min stroll along the sea", isRecommended: true }],
        },
        vibe: "Golden Hour Sitges",
        placeEmoji: "🌅",
        description: "Beach time and a sunset stroll to the iconic church.",
        photoOp: "The church silhouette against the sunset from the Baluard.",
        localsSecret: "Walk past the church to the Baluard lookout—it's the best sunset spot in town and completely flat for strollers."
      },
      {
        time: "6:00 PM",
        location: "Beachfront Dinner",
        address: "Sitges Paseo",
        mapsUrl: "https://www.google.com/maps/search/?api=1&query=Passeig+de+la+Ribera+Sitges",
        rating: 4.4,
        reviewCount: 1245,
        recommendedDish: "Creative rice dishes at 'La Zorra' (Fisherman's style)",
        babyMode: "Routine",
        gear: "Stroller",
        transit: {
          from: "Beach",
          to: "Paseo",
          options: [{ method: "Walking", details: "🚶 2 min walk", isRecommended: true }],
        },
        vibe: "Relaxed Coastline",
        placeEmoji: "🍽️",
        description: "Early dinner with a view of the sunset over the Mediterranean.",
        localsSecret: "The restaurant ‘La Zorra’ nearby is famous for its creative rice dishes if you want a local alternative to standard paella."
      },
      {
        time: "7:30 PM",
        location: "Back Home",
        address: "Passeig de la Ribera, 41",
        mapsUrl: "https://www.google.com/maps/search/?api=1&query=Passeig+de+la+Ribera+41+Sitges",
        babyMode: "Routine",
        gear: "N/A",
        transit: {
          from: "Sitges Paseo",
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
    weather: "⛅ 70°/56°",
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
        location: "Al Fresco Dinner",
        address: "Sitges Center",
        mapsUrl: "https://www.google.com/maps/search/?api=1&query=Sitges+Center",
        babyMode: "Routine",
        gear: "Stroller",
        transit: {
          from: "Cau Ferrat",
          to: "Sitges Center",
          options: [{ method: "Walking", details: "🚶 5 min walk", isRecommended: true }],
        },
        vibe: "Patio Pacing",
        placeEmoji: "🏡",
        description: "Quiet dinner in one of the pedestrian alleyways.",
        localsSecret: "Find a table on Carrer de San Pere for a more local, less commercial dining vibe."
      },
      {
        time: "7:00 PM",
        location: "Back Home",
        address: "Passeig de la Ribera, 41",
        mapsUrl: "https://www.google.com/maps/search/?api=1&query=Passeig+de+la+Ribera+41+Sitges",
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
        description: "Stroll back to the seafront apartment.",
        localsSecret: "The beachfront promenade is best for a late-night cool-down; the sea air usually helps everyone sleep better."
      }
    ]
  },
  {
    dayNumber: 10,
    date: "Wed Jun 3",
    weather: "⛅ 71°/59°",
    weatherDetail: SITGES_FORECAST[2],
    title: "Sitges South & Gardens",
    vibeCoding: "Quiet Escapes & Farewell Sitges",
    events: [
      {
        time: "10:00 AM",
        location: "Platja d'Aiguadolç",
        address: "Sitges East",
        mapsUrl: "https://www.google.com/maps/search/?api=1&query=Platja+d'Aiguadolç+Sitges",
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
        mapsUrl: "https://www.google.com/maps/search/?api=1&query=Jardins+de+Terramar+Sitges",
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
        description: "Walk to the beautiful Terramar gardens for a shaded stroller nap.",
        photoOp: "The lily pond reflections with the tall palm trees.",
        localsSecret: "There's a small hidden playground at the furthest end of the gardens that is almost exclusively frequented by locals."
      },
      {
        time: "4:00 PM",
        location: "Maricel Museum",
        address: "Carrer del Fonollar, s/n",
        mapsUrl: "https://www.google.com/maps/search/?api=1&query=Museu+de+Maricel+Sitges",
        babyMode: "Routine",
        gear: "Carrier",
        transit: {
          from: "Terramar",
          to: "Maricel",
          options: [
            { method: "Walking", details: "⭐ Center Walk (20 min)", isRecommended: true },
            { method: "Bus", details: "Bus SL2 (12 min)" },
            { method: "Cabify Kids", details: "Cabify (6 min)", bookingUrl: "cabify://cabify/" }
          ],
        },
        vibe: "Cliffside Elegance",
        placeEmoji: "🖼️",
        description: "Final museum visit. Maricel's views over the water are unmatched.",
        localsSecret: "The Cloister area has the most incredible acoustics—if you're lucky, you might catch a rehearsal for an evening concert."
      },
      {
        time: "6:30 PM",
        location: "Farewell Sitges Dinner",
        address: "Church Terrace",
        mapsUrl: "https://www.google.com/maps/search/?api=1&query=Església+de+Sant+Bartomeu+i+Santa+Tecla+Sitges",
        babyMode: "Routine",
        gear: "Stroller",
        transit: {
          from: "Maricel",
          to: "Church Terrace",
          options: [{ method: "Walking", details: "🚶 1 min around the corner", isRecommended: true }],
        },
        vibe: "Sunset Grand Finale",
        placeEmoji: "🍽️",
        description: "Last dinner on the church terrace at sunset. Pack for flight home.",
        localsSecret: "The bar at the very edge of the terrace has the best unobstructed view of the coastline—great for a final photo."
      },
      {
        time: "7:30 PM",
        location: "Back Home",
        address: "Passeig de la Ribera, 41",
        mapsUrl: "https://www.google.com/maps/search/?api=1&query=Passeig+de+la+Ribera+41+Sitges",
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
        localsSecret: "A nightcap on the apartment balcony while baby sleeps is the perfect way to soak in the final Mediterranean sounds."
      }
    ]
  },
  {
    dayNumber: 11,
    date: "Thu Jun 4",
    weather: "✈️ 71°/59°",
    weatherDetail: SITGES_FORECAST[3],
    title: "Homeward Bound",
    vibeCoding: "Early Exit & Mission Accomplished",
    events: [
      {
        time: "7:00 AM",
        location: "Cabify Departure (Sitges)",
        address: "Passeig de la Ribera, 41, 08870 Sitges",
        mapsUrl: "https://www.google.com/maps/search/?api=1&query=Passeig+de+la+Ribera+41+Sitges",
        babyMode: "Routine",
        gear: "Stroller",
        transit: {
          from: "Passeig de la Ribera, 41",
          to: "BCN Terminal 1",
          options: [
            { method: "Cabify Kids", details: "⭐ Pre-installed car seat, ~50 min in light AM traffic", isRecommended: true, bookingUrl: "cabify://cabify/" }
          ],
          insight: "💡 ~50 min ride. Garraf tunnel can stall behind a slow truck — leave the buffer.",
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
        mapsUrl: "https://www.google.com/maps/search/?api=1&query=Barcelona+Airport+Terminal+1+Departures",
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
        placeEmoji: "🚶",
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
        placeEmoji: "🚶",
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
          options: [{ method: "Walking", details: "🚗 Parents' car (~45 min)", isRecommended: true }]
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
        mapsUrl: "https://www.google.com/maps/search/?api=1&query=618+South+Royal+Street+Alexandria+VA+22314",
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
