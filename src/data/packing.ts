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
  
  // Adult Apparel (11-Day Supply)
  { id: '8', name: '8x Breathable Cotton/Linen Tees', category: 'Adult Apparel', isPacked: false },
  { id: '9', name: '3x Lightweight Trousers/Chinos', category: 'Adult Apparel', isPacked: false },
  { id: '10', name: '3x Walking Shorts', category: 'Adult Apparel', isPacked: false },
  { id: '11', name: '1x Denim/Lightweight Jacket', category: 'Adult Apparel', isPacked: false },
  { id: '12', name: '12x Sets of Underwear', category: 'Adult Apparel', isPacked: false },
  { id: '13', name: '1x Comfortable Walking Sneakers', category: 'Adult Apparel', isPacked: false },
  { id: '14', name: '1x Pair of Dressy Sandals', category: 'Adult Apparel', isPacked: false },
  
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

  // Baby Clothes
  { id: '24', name: '10x Short-Sleeve Onesies (Breathable Cotton)', category: 'Baby Clothes', isPacked: false },
  { id: '25', name: '5x Long-Sleeve Onesies (For Cooler Evenings)', category: 'Baby Clothes', isPacked: false },
  { id: '26', name: '4x Lightweight Cotton Trousers', category: 'Baby Clothes', isPacked: false },
  { id: '27', name: '2x Lightweight Cardigans/Sweaters', category: 'Baby Clothes', isPacked: false },
  { id: '28', name: '6x Pairs of Cotton Socks', category: 'Baby Clothes', isPacked: false },
  { id: '29', name: '2x Sun Hats (Broad Brim, UPF 50+)', category: 'Baby Clothes', isPacked: false },
  { id: '30', name: '2x UV-Protection Swimsuits', category: 'Baby Clothes', isPacked: false },
  { id: '31', name: '3x Soft Cotton Bibs', category: 'Baby Clothes', isPacked: false },
  { id: '32', name: 'Footie Pajamas (Double Zipper)', category: 'Baby Clothes', isPacked: false },
  { id: '33', name: 'Infant Beanie (Soft Cotton)', category: 'Baby Clothes', isPacked: false },
  { id: '34', name: 'Sleeveless Rompers (Gràcia Heat)', category: 'Baby Clothes', isPacked: false },
  { id: '35', name: 'Airy Cotton Rompers (Sitges Naps)', category: 'Baby Clothes', isPacked: false },

  // Adult Apparel (Outfit Guide)
  { id: '36', name: 'Layered Cotton Tees', category: 'Adult Apparel', isPacked: false },
  { id: '37', name: 'Medium-Weight Hoodie (Transit)', category: 'Adult Apparel', isPacked: false },
  { id: '38', name: 'Linen Button-Down Shirts', category: 'Adult Apparel', isPacked: false },
  { id: '39', name: 'Technical Tees (Hills/Montjuïc)', category: 'Adult Apparel', isPacked: false },
  { id: '40', name: 'Midi-Dress / Smart Casual Outfit', category: 'Adult Apparel', isPacked: false },
  { id: '41', name: 'Compression Socks (Long Flight)', category: 'Adult Apparel', isPacked: false },
  { id: '42', name: 'Cross-Body Bag (Security)', category: 'Adult Apparel', isPacked: false },
  { id: '43', name: 'Versatile Wrap / Sarong', category: 'Beach Gear', isPacked: false },
  { id: '44', name: 'Beach Flip-Flops', category: 'Beach Gear', isPacked: false }
];

export const DAILY_OUTFIT_RECOMMENDATIONS: DailyOutfit[] = [
  {
    date: 'May 24',
    activity: 'Flight from Alexandria',
    weather: '67°/55° • Sunny',
    recommendation: 'Comfortable transit wear: **Layered cotton tee** with a **medium-weight hoodie**. **Lightweight joggers** or **stretchy chinos**. Wear **compression socks** for the long-haul flight. For Cameron: **Footie pajamas** with a double zipper and a **soft beanie**.'
  },
  {
    date: 'May 25',
    activity: 'Arrival & Psg. de Gràcia',
    weather: '67°/56° • Partly Cloudy',
    recommendation: 'Casual chic Eixample look: **Linen button-down** or **high-quality tee** with **comfortable chinos**. A **light denim jacket** is perfect for fluctuating weather. **Sneakers** with good arch support. For Cameron: **Short-sleeve onesie** with **lightweight cotton leggings** and a **sun hat**.'
  },
  {
    date: 'May 26',
    activity: 'Park & Market Day',
    weather: '68°/57° • Sunny',
    recommendation: 'Mobile Exploration: **Breathable cotton polo** or **midi-dress**. A **cross-body bag** for the Boqueria crowds. **Sunglasses and SPF** are a must. For Cameron: **Sleeveless cotton romper** for play at Ciutadella, carry a **light blanket** for the stroller nap.'
  },
  {
    date: 'May 27',
    activity: 'Park Güell & Horta',
    weather: '67°/58° • Partly Cloudy',
    recommendation: 'Landscape Ready: **Sturdy sneakers** for hills. **Breathable layers** like a **technical tee** under a light sweater. For Cameron: **Layered look (onesie + light cardigan)**. In the carrier, ensure he has **soft socks** to protect legs from straps.'
  },
  {
    date: 'May 28',
    activity: 'Sagrada Família',
    weather: '68°/57° • Sunny',
    recommendation: 'Respectful & Smart: A **polo or blouse** (shoulders covered). **Dark denim** or **crisp chinos**. For Cameron: His **"nicer" cotton set** for photos. Keep the **sun hat** handy for the walk to Sant Antoni.'
  },
  {
    date: 'May 29',
    activity: 'Gaudí Houses & Gràcia',
    weather: '69°/58° • Sunny',
    recommendation: 'Village Aesthetic: **Comfortable loafers** or **trendy sneakers**. A **light linen shirt**. For Cameron: **Short-sleeve onesie** and **lightweight shorts**. Keep him in his most **breathable cotton**.'
  },
  {
    date: 'May 30',
    activity: 'Gothic & Beach Breeze',
    weather: '71°/59° • Partly Cloudy',
    recommendation: 'Coastal Hybrid: **Swimwear** underneath your casuals. A **loose linen shirt** and **shorts**. Bring a **versatile wrap** (towel/evening layer). For Cameron: **UV swim suit** for sand play, plus a **backup onesie**.'
  },
  {
    date: 'May 31',
    activity: 'Montjuïc Mountain',
    weather: '72°/60° • Partly Cloudy',
    recommendation: 'Active Outdoor: **Breathable activewear** or **light cotton layers**. **Wind-resistant layer** for the cable car summit. For Cameron: **Long-sleeve lightweight UV tee** and a **sun hat**.'
  },
  {
    date: 'June 1-4',
    activity: 'Sitges Beach Life',
    weather: '70°/57° • Coastal',
    recommendation: 'Total Relaxation: **Linen everything**. Various **swimsuits and cover-ups**. **Flip-flops** and town **sandals**. For Cameron: **UV suits** for water and **loose, airy cotton rompers** for afternoon naps.'
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
