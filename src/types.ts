export type BabyMode = 'Nap' | 'Routine' | 'Play';

export interface TransitInfo {
  method: 'Walking' | 'Bus' | 'Metro' | 'Cabify Kids' | 'Family Car' | 'Pre-booked Car';
  duration: string;
  costUSD: number;
  accessibilityNotes?: string;
}

export interface TransitOption {
  method: 'Walking' | 'Bus' | 'Metro' | 'Cabify Kids' | 'Family Car' | 'Pre-booked Car';
  details: string;
  isRecommended?: boolean;
  bookingUrl?: string;
}

export interface WalkStop {
  /** Landmark name — rendered as a clickable Google Maps link. */
  name: string;
  /** One short clause describing what to look for. Keep to ~10 words. */
  note?: string;
  /** Optional override map URL — otherwise auto-built from name + city. */
  mapsUrl?: string;
}

export interface BookingDetails {
  confirmationCode?: string;
  pin?: string;
  phone?: string;
  checkIn?: string;
  checkOut?: string;
  notes?: string;
  url?: string;
}

export interface TimelineEvent {
  time: string;
  location: string;
  address: string;
  mapsUrl?: string;
  babyMode: BabyMode;
  gear: 'Stroller' | 'Carrier' | 'N/A';
  transit?: {
    from: string;
    to: string;
    options: TransitOption[];
    insight?: string;
    departureTime?: string;
    /** Sequential stops along the recommended walking route. Rendered as a
        vertical timeline list. Use this INSTEAD of cramming landmarks into
        the `insight` prose when the walk has 3+ named stops. */
    walkStops?: WalkStop[];
  };
  vibe: string;
  placeEmoji?: string;
  description: string;
  avgCostUSD?: number;
  prebookInfo?: {
    required: boolean;
    costPerPersonUSD?: number;
    note?: string;
    bookingUrl?: string;
  };
  bookingDetails?: BookingDetails;
  photoOp?: string;
  localsSecret?: string;
  /** Location-specific pickpocket / scam warning. Renders as a coral
      sub-box on the event card. Only set for known hot spots — La Rambla,
      Boqueria, Sagrada queue, Plaça Reial, etc. */
  pickpocketAlert?: string;
  /** Evening reminder shown as a yellow sub-box on the event card. Used
      to surface "tomorrow you need to..." prompts (book Cabify the night
      before, WhatsApp Sitges hotel, etc.). */
  reminder?: string;
  rating?: number;
  reviewCount?: number;
  recommendedDish?: string;
  /** Estimated total for 2 people in USD as a compact range, e.g. "$60–90". Shown next to rating chip on mobile, so do NOT append "for 2" — it overflows. */
  priceRange?: string;
  /** A second restaurant to try if this one is full / closed / not appealing.
      Chosen to be near the PREVIOUS itinerary stop so it's easy to detour to. */
  backup?: {
    name: string;
    reason: string;
    mapsUrl?: string;
  };
}

export interface WeatherForecastDay {
  date: string;
  dayOfWeek: string;
  tripDay: number;
  location: string;
  high: string;
  low: string;
  conditions: string;
  realFeelHigh: string;
  realFeelShade: string;
  precipProb: string;
  cloudCover: string;
  uvIndex: number;
  uvLevel: 'Low' | 'Moderate' | 'High' | 'Very High' | 'Extreme';
  accuweatherUrl: string;
}

export interface DayItinerary {
  dayNumber: number;
  date: string;
  weather: string;
  weatherDetail?: WeatherForecastDay;
  title: string;
  vibeCoding: string;
  events: TimelineEvent[];
}

export interface FlightInfo {
  flightNumber: string;
  airline: string;
  departure: {
    airport: string;
    time: string;
    date: string;
  };
  arrival: {
    airport: string;
    time: string;
  };
  duration?: string;
  confirmation: string;
  seats: string[];
  gate?: string;
  status?: string;
}

export interface LodgingInfo {
  name: string;
  address: string;
  checkIn: string;
  checkOut: string;
  confirmation: string;
  pin?: string;
  bookedVia?: string;
  wifiName?: string;
  wifiPassword?: string;
  url: string;
  phone?: string;
  whatsapp?: string;
  email?: string;
  heroImage?: string;
  gallery?: string[];
  amenities?: string[];
  notes?: string;
  bookingRating?: string;
  bookingRatingUrl?: string;
  guestPortalUrl?: string;
  checkInInstructionsUrl?: string;
  detailedCheckIn?: {
    steps: {
      title: string;
      content: string;
      items?: string[];
      links?: { label: string; url: string }[];
    }[];
  };
  cribRequestNote?: string;
  cribRequestUrl?: string;
  /** Path to a confirmation / booking PDF bundled with the site
      (e.g. `/lodging/barcelona-hotel-confirmation.pdf`). */
  attachmentUrl?: string;
  /** Label for the open-attachment button (defaults to "View Confirmation"). */
  attachmentLabel?: string;
}

export interface TicketDetailSection {
  title: string;
  content: string;
  items?: string[];
  links?: { label: string; url: string }[];
}

export interface TicketInfo {
  id: string;
  name: string;
  date: string;
  time: string;
  location: string;
  confirmation: string;
  proofOfPurchase?: string;
  bookedVia?: string;
  isBooked: boolean;
  bookingUrl?: string;
  price?: string;
  details?: TicketDetailSection[];
  /** Path/URL to the actual ticket file (PDF, JPG, PNG) bundled with the site. */
  attachmentUrl?: string;
  /** Label shown on the open-attachment button (defaults to "View Ticket"). */
  attachmentLabel?: string;
  /** One or more scannable passes (QR / DataMatrix) that staff scan at the door. */
  passes?: TicketPass[];
}

export interface TicketPass {
  /** Friendly label e.g. "Carolyn", "Olivia", "Cameron". */
  label: string;
  /** Optional group e.g. "General", "Child under 11". */
  group?: string;
  /** URL to the QR/DataMatrix image. */
  qrUrl: string;
  /** Optional ticket locator / reference printed under the code. */
  code?: string;
}

export interface EmergencyContact {
  label: string;
  number: string;
  location: string;
  description: string;
}

export interface DailyOutfit {
  date: string;
  activity: string;
  weather: string;
  recommendation: string;
}

export type PackingCategory = 'Family Essentials' | 'Adult Apparel' | 'Beach Gear' | 'Electronics' | 'Baby Clothes' | 'Toiletries';

export interface PackingItem {
  id: string;
  name: string;
  category: PackingCategory;
  isPacked: boolean;
  isCustom?: boolean;
  notes?: string;
}

export interface PlaceExplorerItem {
  id: string;
  name: string;
  image: string;
  category: 'Sight' | 'Restaurant' | 'Museum' | 'Beach' | 'Attraction' | 'Park' | 'Market' | 'Church';
  location: 'Barcelona' | 'Sitges';
  rating: number;
  priceLevel: 0 | 1 | 2 | 3;
  hours: string;
  description: string;
  babyFriendlyTips: string;
  mapsUrl: string;
  isVisited: boolean;
  isBackup?: boolean;
}
