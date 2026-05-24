import { PackingItem, DailyOutfit } from '../types';

export const INITIAL_PACKING_LIST: PackingItem[] = [
  // Family Essentials
  { id: '1', name: 'Travel Stroller (UPPAbaby Minu)', category: 'Family Essentials', isPacked: false },
  { id: '2', name: 'Ergobaby Omni 360 Carrier', category: 'Family Essentials', isPacked: false },
  { id: '3', name: '15x Infant Onesies (Cotton)', category: 'Family Essentials', isPacked: false },
  { id: '4', name: '48x Diapers (Travel + 3 Days)', category: 'Family Essentials', isPacked: false },
  { id: '5', name: 'Portable Blackout Curtains', category: 'Family Essentials', isPacked: false },
  { id: '6', name: '2x Lightweight Sleep Sacks', category: 'Family Essentials', isPacked: false },
  { id: '7', name: 'Portable White Noise Machine', category: 'Family Essentials', isPacked: false },
  
  // Adult Apparel (11-Day Supply) — rebalanced for hot weather (80°F+ most days)
  { id: '8', name: '10x Breathable Cotton/Linen Tees', category: 'Adult Apparel', isPacked: false },
  { id: '9', name: '2x Linen Pants (Sagrada Modesty + Cool Evenings)', category: 'Adult Apparel', isPacked: false },
  { id: '10', name: '5x Walking Shorts', category: 'Adult Apparel', isPacked: false },
  { id: '11', name: '1x Lightweight Hoodie (Plane Only)', category: 'Adult Apparel', isPacked: false },
  { id: '12', name: '12x Sets of Underwear', category: 'Adult Apparel', isPacked: false },
  { id: '13', name: '1x Comfortable Walking Sneakers', category: 'Adult Apparel', isPacked: false },
  { id: '14', name: '2x Pairs of Sandals (Walking + Dressy)', category: 'Adult Apparel', isPacked: false },
  
  // Beach Gear
  { id: '15', name: '2x Adult Swimsuits', category: 'Beach Gear', isPacked: false },
  { id: '16', name: '2x Infant UV Swim Suits', category: 'Beach Gear', isPacked: false },
  { id: '17', name: '2x Quick-Dry Beach Towels', category: 'Beach Gear', isPacked: false },
  { id: '18', name: 'Infant Sun Hat (Wide Brim)', category: 'Beach Gear', isPacked: false },
  { id: '19', name: 'Water-Resistant Beach Bag', category: 'Beach Gear', isPacked: false },
  
  // Electronics
  { id: '20', name: '2x Universal Travel Adapters', category: 'Electronics', isPacked: false },
  { id: '21', name: 'High-Capacity Power Bank', category: 'Electronics', isPacked: false },
  { id: '22', name: 'iPad (Pre-loaded with Shows)', category: 'Electronics', isPacked: false },
  { id: '23', name: 'Phone Charging Cables (Long)', category: 'Electronics', isPacked: false },

  // Baby Clothes — heat-weighted (most days in the 80s; more changes needed)
  { id: '24', name: '12x Short-Sleeve Onesies (Breathable Cotton)', category: 'Baby Clothes', isPacked: false },
  { id: '25', name: '2x Long-Sleeve Onesies (Plane + AC Sleep)', category: 'Baby Clothes', isPacked: false },
  { id: '26', name: '2x Lightweight Cotton Trousers (Cool Evenings)', category: 'Baby Clothes', isPacked: false },
  { id: '27', name: '1x Lightweight Cardigan (Indoor AC)', category: 'Baby Clothes', isPacked: false },
  { id: '28', name: '6x Pairs of Cotton Socks', category: 'Baby Clothes', isPacked: false },
  { id: '29', name: '2x Sun Hats (Broad Brim, UPF 50+)', category: 'Baby Clothes', isPacked: false },
  { id: '30', name: '2x UV-Protection Swimsuits', category: 'Baby Clothes', isPacked: false },
  { id: '31', name: '3x Soft Cotton Bibs', category: 'Baby Clothes', isPacked: false },
  { id: '32', name: 'Footie Pajamas (Double Zipper)', category: 'Baby Clothes', isPacked: false },
  { id: '33', name: 'Infant Beanie (Plane Only)', category: 'Baby Clothes', isPacked: false },
  { id: '34', name: 'Sleeveless Rompers (Gràcia Heat)', category: 'Baby Clothes', isPacked: false },
  { id: '35', name: 'Airy Cotton Rompers (Sitges Naps)', category: 'Baby Clothes', isPacked: false },

  // Adult Apparel (Outfit Guide)
  { id: '36', name: 'Layered Cotton Tees', category: 'Adult Apparel', isPacked: false },
  { id: '37', name: 'Lightweight Hoodie (Plane Layer)', category: 'Adult Apparel', isPacked: false },
  { id: '38', name: 'Linen Button-Down Shirts', category: 'Adult Apparel', isPacked: false },
  { id: '39', name: 'Technical Tees (Hot/Active Days)', category: 'Adult Apparel', isPacked: false },
  { id: '40', name: 'Midi-Dress / Smart Casual Outfit', category: 'Adult Apparel', isPacked: false },
  { id: '41', name: 'Compression Socks (Long Flight)', category: 'Adult Apparel', isPacked: false },
  { id: '42', name: 'Cross-Body Bag (Security)', category: 'Adult Apparel', isPacked: false },
  { id: '43', name: 'Versatile Wrap / Sarong', category: 'Beach Gear', isPacked: false },
  { id: '44', name: 'Beach Flip-Flops', category: 'Beach Gear', isPacked: false },

  // Toiletries
  { id: '45', name: 'Toothbrushes (x3)', category: 'Toiletries', isPacked: false },
  { id: '46', name: 'Toothpaste', category: 'Toiletries', isPacked: false },
  { id: '47', name: 'Baby Toothbrush + Training Paste', category: 'Toiletries', isPacked: false },
  { id: '48', name: 'Floss', category: 'Toiletries', isPacked: false },
  { id: '49', name: 'Deodorant (x2)', category: 'Toiletries', isPacked: false },
  { id: '50', name: 'Travel-Size Shampoo & Conditioner', category: 'Toiletries', isPacked: false },
  { id: '51', name: 'Body Wash (Adult + Baby Gentle)', category: 'Toiletries', isPacked: false },
  { id: '52', name: 'Mineral SPF 50 (Baby-Safe)', category: 'Toiletries', isPacked: false },
  { id: '53', name: 'Adult SPF 30+', category: 'Toiletries', isPacked: false },
  { id: '54', name: 'Aquaphor / Diaper Cream', category: 'Toiletries', isPacked: false },
  { id: '55', name: 'Baby Lotion', category: 'Toiletries', isPacked: false },
  { id: '56', name: 'Hand Sanitizer (Travel Bottles)', category: 'Toiletries', isPacked: false },
  { id: '57', name: 'Wet Wipes (Multi-Pack)', category: 'Toiletries', isPacked: false },
  { id: '58', name: 'Tylenol / Ibuprofen (Adult)', category: 'Toiletries', isPacked: false },
  { id: '59', name: 'Infant Tylenol', category: 'Toiletries', isPacked: false },
  { id: '60', name: 'Band-Aids + Travel First Aid', category: 'Toiletries', isPacked: false },
  { id: '61', name: 'Thermometer', category: 'Toiletries', isPacked: false },
  { id: '62', name: 'Nail Clippers (Adult + Baby)', category: 'Toiletries', isPacked: false },
  { id: '63', name: 'Hairbrush / Comb', category: 'Toiletries', isPacked: false },
  { id: '64', name: 'Hair Ties + Bobby Pins', category: 'Toiletries', isPacked: false },
  { id: '65', name: 'Makeup Basics + Remover Wipes', category: 'Toiletries', isPacked: false },
  { id: '66', name: 'Razor + Travel Shaving Cream', category: 'Toiletries', isPacked: false },
  { id: '67', name: 'Contacts + Solution / Glasses', category: 'Toiletries', isPacked: false },
  { id: '68', name: 'Prescription Meds (Original Bottles)', category: 'Toiletries', isPacked: false },

  // Heat-Specific Additions (80°F+ forecast — added when the live Open-Meteo
  // forecast came in 10–20°F hotter than the original spring planning).
  { id: '69', name: '2x Cooling Towels (Wet-Activated)', category: 'Family Essentials', isPacked: false },
  { id: '70', name: 'Handheld USB Fan (Pocket / Stroller-Clip)', category: 'Electronics', isPacked: false },
  { id: '71', name: 'Clip-On Stroller Fan', category: 'Family Essentials', isPacked: false },
  { id: '72', name: '2x Insulated Water Bottles', category: 'Family Essentials', isPacked: false },
  { id: '73', name: 'Travel Mister Spray Bottle', category: 'Family Essentials', isPacked: false },
  { id: '74', name: 'Insect Repellent (DEET-Free for Baby)', category: 'Toiletries', isPacked: false },
  { id: '75', name: 'UPF Long-Sleeve Sun Top (Baby)', category: 'Baby Clothes', isPacked: false },
  { id: '76', name: 'Sunglasses for Cam (Strap-Style, Optional)', category: 'Baby Clothes', isPacked: false },

  // Shopping List — pre-trip + in-Barcelona items to acquire. Check off as bought.
  { id: '77', name: 'Stroller Gate-Check Travel Bag', category: 'Shopping List', isPacked: false, notes: 'Buy before trip — Amazon, ~$25. Protects UPPAbaby during gate-check.' },
  { id: '78', name: 'Diaper Refill at Caprabo (Pau Claris 102)', category: 'Shopping List', isPacked: false, notes: 'Dodot brand. Across the street from apartment.' },
  { id: '79', name: 'Spanish Baby Sunscreen — Mustela Mineral', category: 'Shopping List', isPacked: false, notes: 'Better SPF + reef-safe than what we have. Any Barcelona pharmacy.' },
  { id: '80', name: 'Vacuum-Sealed Jamón Ibérico (Boqueria back stalls)', category: 'Shopping List', isPacked: false, notes: 'For home. Joselito stall has the best. Vacuum-pack for TSA.' },
  { id: '81', name: 'Spanish Olive Oil (Souvenir)', category: 'Shopping List', isPacked: false, notes: 'Caprabo or any Carrefour — pick a Catalan Arbequina varietal.' },
  { id: '82', name: 'Postcards for Family', category: 'Shopping List', isPacked: false, notes: 'La Rambla newsstands, ~€1 each. Mail from Sitges post office.' },
  { id: '83', name: 'Sagrada Família Magnet for the Fridge', category: 'Shopping List', isPacked: false, notes: 'Inside the basilica gift shop on the way out.' },
];

export const DAILY_OUTFIT_RECOMMENDATIONS: DailyOutfit[] = [
  {
    date: 'May 24',
    activity: 'Flight from Alexandria',
    weather: '79°/64° • Mostly Sunny (BCN arrival)',
    recommendation: 'Transit wear that handles cold planes AND hot BCN arrival: **Breathable cotton tee** with a **lightweight hoodie** (peel off in Barcelona). **Lightweight joggers** or **leggings**. **Compression socks** for the long-haul flight. For Cameron: **Footie pajamas** with a double zipper + **soft beanie** for the plane — strip down to a short-sleeve onesie once you land.'
  },
  {
    date: 'May 25',
    activity: 'Arrival & Psg. de Gràcia',
    weather: '79°/66° • Mostly Sunny',
    recommendation: 'Hot Eixample stroll: **Linen tee** or **breathable polo** with **walking shorts** or a midi skirt. Skip the jacket — the air is mild but the sun is strong. **Sneakers** with good arch support. **SPF + sunglasses** packed. For Cameron: **Sleeveless cotton romper** + **sun hat**. Apply **mineral SPF** before the walk; reapply at the apartment.'
  },
  {
    date: 'May 26',
    activity: 'Park & Market Day',
    weather: '78°/65° • Sunny',
    recommendation: 'Sun + crowds combo: **Breathable cotton polo** or a **midi-dress**. **Cross-body bag** for the Boqueria. Hydrate — bring an **insulated water bottle**. For Cameron: **Sleeveless cotton romper** + sun hat. Clip-on **stroller fan** is your friend at Ciutadella. Carry a **light muslin** instead of a blanket for the stroller nap.'
  },
  {
    date: 'May 27',
    activity: 'Park Güell & Horta',
    weather: '86°/63° • Sunny (Hot)',
    recommendation: 'Active heat: **Tank top** or **technical tee** + **walking shorts** + sturdy sneakers (no sweater needed). Sunglasses + hat mandatory; bring a **cooling towel** for the climb. For Cameron: **Sleeveless onesie** (skip the cardigan) + **soft socks** to protect legs from carrier straps + sun hat. **Reapply SPF** every 90 min in the park.'
  },
  {
    date: 'May 28',
    activity: 'Sagrada Família',
    weather: '93°/65° • Sunny (HOTTEST DAY) 🔥',
    recommendation: 'Modesty + heat — the tricky combo. Wear a **linen sleeve-cap blouse** or short-sleeve top that covers shoulders, with **lightweight linen pants** or a midi skirt (knees covered for the church interior). Light colors only. **Cooling towel** in bag, **handheld fan** for the security queue. For Cameron: **Short-sleeve onesie** + **UPF long-sleeve sun top** for the walk back to Sant Antoni. Reapply mineral SPF every hour. Hydrate before, during, after.'
  },
  {
    date: 'May 29',
    activity: 'Gaudí Houses & Gràcia',
    weather: '83°/74° • Partly Cloudy',
    recommendation: 'Warm village wander: **Light linen shirt** + **walking shorts** + comfortable sandals. The lows stay in the 70s overnight so no need for layers. For Cameron: **Short-sleeve onesie** with **lightweight cotton shorts** (skip trousers). Carry a small **mister bottle** for face-cooling. Tag the most breathable rompers for naptime.'
  },
  {
    date: 'May 30',
    activity: 'Gothic & Beach Breeze',
    weather: '81°/73° • Partly Cloudy',
    recommendation: 'Hybrid Gothic-then-beach day: **Swimwear** underneath your casuals. **Loose linen shirt** + shorts. **Versatile wrap** doubles as a towel + light cover-up. For Cameron: **UV swim suit** for sand play + **backup onesie** for the walk home. Stroller fan + cooling towel make the cobblestone walk much more pleasant.'
  },
  {
    date: 'May 31',
    activity: 'Montjuïc Mountain',
    weather: '85°/73° • Partly Cloudy',
    recommendation: 'Active outdoor in real heat: **Breathable activewear** — tank or technical tee + athletic shorts. Skip the wind layer (summit breeze is mild, not cold). **Insulated water bottle** essential. For Cameron: **UPF long-sleeve sun top** + **wide-brim sun hat**. Lock in shade breaks at the cable-car summit + castle gardens.'
  },
  {
    date: 'June 1-4',
    activity: 'Sitges Beach Life',
    weather: '82° → 72° • Coastal Cool-Down',
    recommendation: 'First two days are hot beach weather (82°/71°); Jun 3-4 cools off to 72°. **Linen everything**, **swimsuits and cover-ups**, **flip-flops + dressy sandals** for evening. Pack one **light cardigan** for the cooler evenings. For Cameron: **UV suits** + **loose airy rompers**. Use the **insect repellent** near the marshes between Sitges and Aiguadolç.'
  }
];

export const PACKING_RECOMMENDATIONS = {
  weather: [
    { type: 'Daytime (Mediterranean)', items: ['7-8x Breathable cotton layers', 'Sun hats', 'Comfortable walking sandals'] },
    { type: 'Evening (Coastal Breeze)', items: ['Light sweater or cardigan', 'Chinos/Midi dress', 'Multi-purpose sneakers'] }
  ],
  infantSpecific: [
    { 
      type: 'Cabin Essentials (767-400ER)', 
      items: ['Change of clothes (x3)', 'Enough diapers for 12 hours', 'Interactive silent toys', 'Feeding supplies for ascent/descent'] 
    },
    { 
      type: 'Stroller Gear', 
      items: ['Clip-on stroller fan', 'Universal sun shade extension', 'Compact rain cover'] 
    }
  ]
};
