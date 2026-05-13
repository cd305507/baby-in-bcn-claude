export type BabyMode = 'Nap' | 'Routine' | 'Play';

export interface TransitInfo {
  method: 'Walking' | 'Bus' | 'Metro' | 'Cabify Kids';
  duration: string;
  costUSD: number;
  accessibilityNotes?: string;
}

export interface TransitOption {
  method: 'Walking' | 'Bus' | 'Metro' | 'Cabify Kids';
  details: string;
  isRecommended?: boolean;
  bookingUrl?: string;
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
  rating?: number;
  reviewCount?: number;
  recommendedDish?: string;
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

export type PackingCategory = 'Family Essentials' | 'Adult Apparel' | 'Beach Gear' | 'Electronics' | 'Baby Clothes';

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
