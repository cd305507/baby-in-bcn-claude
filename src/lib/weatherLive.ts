/**
 * Live weather forecast from Open-Meteo (no API key, no signup, free).
 * Fetched once on app boot, cached to localStorage, refreshed every 6 hours.
 * Falls back to the hardcoded BARCELONA_FORECAST / SITGES_FORECAST shipped
 * in /data/weather.ts when the API fails or isn't yet cached.
 *
 * Why Open-Meteo: aggregates the same ECMWF / GFS / ICON models that
 * AccuWeather, Apple Weather, and WeatherKit consume, so quality matches
 * what the AccuWeather click-through pages show.
 */
import { useEffect, useState } from 'react';
import type { WeatherForecastDay } from '../types';

const CACHE_KEY = 'baby-bcn:weather-live-v1';
const CACHE_TTL_MS = 6 * 60 * 60 * 1000; // 6 hours

// Coordinates for the two trip locations.
const BCN = { lat: 41.39, lng: 2.16 };
const SITGES = { lat: 41.23, lng: 1.8 };
const TZ = 'Europe/Madrid';
const TRIP_START = '2026-05-24';
const TRIP_END = '2026-06-04';

const BCN_ACCU = 'https://www.accuweather.com/en/es/barcelona/307297/may-weather/307297';
const SITGES_ACCU = 'https://www.accuweather.com/en/es/sitges/308420/june-weather/308420';

interface CacheShape {
  ts: number;
  bcn: WeatherForecastDay[];
  sitges: WeatherForecastDay[];
}

// WMO weather-code → human label. Source: Open-Meteo docs.
const WMO_LABELS: Record<number, string> = {
  0: 'Sunny',
  1: 'Mostly sunny',
  2: 'Partly cloudy',
  3: 'Overcast',
  45: 'Foggy',
  48: 'Foggy',
  51: 'Light drizzle',
  53: 'Drizzle',
  55: 'Heavy drizzle',
  61: 'Light rain',
  63: 'Rain',
  65: 'Heavy rain',
  71: 'Light snow',
  73: 'Snow',
  75: 'Heavy snow',
  80: 'Showers',
  81: 'Showers',
  82: 'Heavy showers',
  95: 'Thunderstorms',
  96: 'Thunderstorms',
  99: 'Thunderstorms',
};

function uvLevelFor(uv: number): WeatherForecastDay['uvLevel'] {
  if (uv < 3) return 'Low';
  if (uv < 6) return 'Moderate';
  if (uv < 8) return 'High';
  if (uv < 11) return 'Very High';
  return 'Extreme';
}

function formatDate(iso: string): { dayOfWeek: string; date: string } {
  // ISO is yyyy-mm-dd. Anchor to noon local so timezones don't roll the day.
  const d = new Date(`${iso}T12:00:00`);
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  return {
    dayOfWeek: days[d.getDay()],
    date: `${months[d.getMonth()]} ${d.getDate()}`,
  };
}

async function fetchForLocation(
  lat: number,
  lng: number,
  name: string,
  accuUrl: string,
): Promise<WeatherForecastDay[]> {
  const url =
    `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lng}` +
    `&daily=temperature_2m_max,temperature_2m_min,precipitation_probability_max,uv_index_max,cloud_cover_mean,weathercode,apparent_temperature_max` +
    `&temperature_unit=fahrenheit&timezone=${encodeURIComponent(TZ)}` +
    `&start_date=${TRIP_START}&end_date=${TRIP_END}`;

  const res = await fetch(url);
  if (!res.ok) throw new Error(`open-meteo ${res.status}`);
  const data = await res.json();
  if (!data.daily || !data.daily.time) throw new Error('open-meteo: malformed payload');

  const d = data.daily;
  return d.time.map((iso: string, i: number) => {
    const hi = Math.round(d.temperature_2m_max[i]);
    const lo = Math.round(d.temperature_2m_min[i]);
    const feel = Math.round(d.apparent_temperature_max[i] ?? hi);
    const uv = d.uv_index_max[i] ?? 0;
    const cloud = d.cloud_cover_mean[i] ?? 0;
    const prec = d.precipitation_probability_max[i] ?? 0;
    const wmo = d.weathercode[i];
    const { dayOfWeek, date } = formatDate(iso);
    return {
      date,
      dayOfWeek,
      tripDay: i + 1,
      location: name,
      high: `${hi}°`,
      low: `${lo}°`,
      conditions: WMO_LABELS[wmo] || 'Mixed conditions',
      realFeelHigh: `${feel}°`,
      // "Shade" is informal — approximate as ~8°F below the real-feel high.
      realFeelShade: `${Math.max(feel - 8, lo)}°`,
      precipProb: `${prec}%`,
      cloudCover: `${cloud}%`,
      uvIndex: Math.round(uv),
      uvLevel: uvLevelFor(uv),
      accuweatherUrl: accuUrl,
    } as WeatherForecastDay;
  });
}

let inFlight: Promise<CacheShape | null> | null = null;

async function fetchLive(): Promise<CacheShape | null> {
  if (inFlight) return inFlight;
  inFlight = (async () => {
    try {
      const [bcn, sitges] = await Promise.all([
        fetchForLocation(BCN.lat, BCN.lng, 'Barcelona', BCN_ACCU),
        fetchForLocation(SITGES.lat, SITGES.lng, 'Sitges', SITGES_ACCU),
      ]);
      const cache: CacheShape = { ts: Date.now(), bcn, sitges };
      try {
        localStorage.setItem(CACHE_KEY, JSON.stringify(cache));
      } catch {
        /* localStorage may be full or disabled */
      }
      return cache;
    } catch (e) {
      console.warn('[weatherLive] fetch failed; using static fallback', e);
      return null;
    } finally {
      inFlight = null;
    }
  })();
  return inFlight;
}

function loadCache(): CacheShape | null {
  try {
    const raw = localStorage.getItem(CACHE_KEY);
    if (!raw) return null;
    return JSON.parse(raw) as CacheShape;
  } catch {
    return null;
  }
}

/**
 * React hook returning Barcelona + Sitges forecasts from Open-Meteo (with
 * tripDay numbering aligned to the static schedule: Days 1-8 = BCN, Days
 * 9-12 = Sitges). Falls back to the static arrays you pass in if the API
 * call hasn't completed or has failed.
 */
export function useLiveForecast(
  fallbackBcn: WeatherForecastDay[],
  fallbackSitges: WeatherForecastDay[],
): {
  bcn: WeatherForecastDay[];
  sitges: WeatherForecastDay[];
  full: WeatherForecastDay[];
  isLive: boolean;
} {
  const initial = loadCache();
  const [state, setState] = useState<{ bcn: WeatherForecastDay[]; sitges: WeatherForecastDay[]; isLive: boolean }>(
    () => ({
      bcn: initial ? alignTripDays(initial.bcn, fallbackBcn) : fallbackBcn,
      sitges: initial ? alignTripDays(initial.sitges, fallbackSitges, 9) : fallbackSitges,
      isLive: !!initial,
    }),
  );

  useEffect(() => {
    const cached = loadCache();
    if (cached && Date.now() - cached.ts < CACHE_TTL_MS) {
      // Already fresh — nothing to do
      return;
    }
    fetchLive().then((result) => {
      if (!result) return;
      setState({
        bcn: alignTripDays(result.bcn, fallbackBcn),
        sitges: alignTripDays(result.sitges, fallbackSitges, 9),
        isLive: true,
      });
    });
    // We intentionally don't depend on fallback arrays — they're stable
    // module-level exports.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Construct the full 12-day timeline the same way as the static FULL_FORECAST:
  // BCN days 1-8 (May 24-31), Sitges days 9-12 (Jun 1-4).
  const full = [...state.bcn.slice(0, 8), ...state.sitges.slice(8, 12)];
  return { bcn: state.bcn, sitges: state.sitges, full, isLive: state.isLive };
}

/**
 * Open-Meteo numbers the returned days 1..N starting from start_date. The
 * static arrays in /data/weather.ts use the trip-day convention where
 * BCN days are 1-8 and Sitges days are 9-12. This helper re-assigns
 * tripDay so the live data slots into the same display logic, and it
 * also passes through the static `location` label.
 */
function alignTripDays(
  live: WeatherForecastDay[],
  staticArr: WeatherForecastDay[],
  startTripDay = 1,
): WeatherForecastDay[] {
  return live.map((d, i) => ({
    ...d,
    tripDay: staticArr[i]?.tripDay ?? startTripDay + i,
    location: staticArr[i]?.location ?? d.location,
  }));
}
