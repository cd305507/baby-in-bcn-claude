import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import { VitePWA } from 'vite-plugin-pwa';
import { webcrypto } from 'node:crypto';

// Node 18 doesn't expose Web Crypto as a global; workbox's bundler needs it.
if (typeof globalThis.crypto === 'undefined') {
  (globalThis as any).crypto = webcrypto;
}

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, '.', '');
  return {
    plugins: [
      react(),
      tailwindcss(),
      VitePWA({
        registerType: 'prompt',
        includeAssets: [
          'apple-touch-icon.png',
          'favicon-64.png',
          'icon-192.png',
          'icon-512.png',
          'icon-maskable-512.png',
        ],
        manifest: {
          name: 'Baby in BCN',
          short_name: 'BABY in BCN',
          description: 'Itinerary, packing, naps, and bookings for the Barcelona trip.',
          start_url: '/',
          scope: '/',
          display: 'standalone',
          orientation: 'portrait',
          background_color: '#0E172E',
          theme_color: '#0E172E',
          icons: [
            { src: '/icon-192.png', sizes: '192x192', type: 'image/png' },
            { src: '/icon-512.png', sizes: '512x512', type: 'image/png' },
            { src: '/icon-maskable-512.png', sizes: '512x512', type: 'image/png', purpose: 'maskable' },
          ],
        },
        workbox: {
          // Precache the built bundle + every static file in public/ that matches.
          globPatterns: ['**/*.{js,css,html,ico,png,svg,jpg,jpeg,webp,woff,woff2,webmanifest}'],
          // index.html must be revalidated on every navigation so updates surface fast.
          navigateFallback: '/index.html',
          // ...except for direct navigations to ticket assets — without this,
          // opening a /tickets/*.pdf in a new tab gets swallowed by the SPA
          // fallback and the user sees the app homepage instead of the PDF.
          navigateFallbackDenylist: [/^\/tickets\//, /^\/lodging\//],
          // Limit precache size — big PDFs go through runtime caching instead.
          maximumFileSizeToCacheInBytes: 5 * 1024 * 1024,
          runtimeCaching: [
            {
              // Ticket PDFs + QR images: cache for offline use, prefer cache.
              urlPattern: ({ url }) => url.pathname.startsWith('/tickets/'),
              handler: 'CacheFirst',
              options: {
                cacheName: 'tickets',
                expiration: { maxEntries: 100, maxAgeSeconds: 60 * 60 * 24 * 365 },
              },
            },
            {
              // Lodging confirmation PDFs: same offline-first caching as tickets.
              urlPattern: ({ url }) => url.pathname.startsWith('/lodging/'),
              handler: 'CacheFirst',
              options: {
                cacheName: 'lodging',
                expiration: { maxEntries: 20, maxAgeSeconds: 60 * 60 * 24 * 365 },
              },
            },
            {
              // Wikimedia attraction images: stale-while-revalidate.
              urlPattern: /^https:\/\/(upload|commons)\.wikimedia\.org\//,
              handler: 'StaleWhileRevalidate',
              options: {
                cacheName: 'wikimedia-images',
                expiration: { maxEntries: 200, maxAgeSeconds: 60 * 60 * 24 * 30 },
              },
            },
            {
              // Photos used across Explorer + Welcome + Tapas Roulette.
              // Add new image hosts here when introducing card art so the
              // images survive airplane-mode reloads.
              urlPattern: /^https:\/\/(images\.unsplash\.com|lh3\.googleusercontent\.com|.*\.ctfassets\.net|cdn\.britannica\.com|touringbee\.com|www\.exp1\.com|media\.timeout\.com|www\.skipthelinebarcelona\.com|a\.storyblok\.com|www\.barcelonaturisme\.com|travel\.usnews\.com|museusdesitges\.cat|www\.allrecipes\.com|encrypted-tbn0\.gstatic\.com|www\.cilantroandcitronella\.com|cf\.bstatic\.com|cdn\.krossbooking\.com)\//,
              handler: 'StaleWhileRevalidate',
              options: {
                cacheName: 'place-images',
                expiration: { maxEntries: 300, maxAgeSeconds: 60 * 60 * 24 * 30 },
              },
            },
            {
              // CARTO basemap tiles for the daily route map. CacheFirst so
              // once you've viewed a day's map on wifi, those tiles work in
              // airplane mode. 90-day TTL. Generous maxEntries to cover all
              // zoom levels across Barcelona + Sitges + DC + Spain-air-route.
              urlPattern: /^https:\/\/[a-d]\.basemaps\.cartocdn\.com\//,
              handler: 'CacheFirst',
              options: {
                cacheName: 'map-tiles',
                expiration: { maxEntries: 2000, maxAgeSeconds: 60 * 60 * 24 * 90 },
              },
            },
            {
              // Google Fonts: long-lived, never break.
              urlPattern: /^https:\/\/fonts\.(googleapis|gstatic)\.com\//,
              handler: 'CacheFirst',
              options: {
                cacheName: 'google-fonts',
                expiration: { maxEntries: 30, maxAgeSeconds: 60 * 60 * 24 * 365 },
              },
            },
            {
              // Open-Meteo live forecast: prefer the network so the app
              // gets fresh numbers each open, but fall back to the cached
              // response in airplane mode so the weather isn't blank.
              urlPattern: /^https:\/\/api\.open-meteo\.com\//,
              handler: 'NetworkFirst',
              options: {
                cacheName: 'open-meteo',
                networkTimeoutSeconds: 5,
                expiration: { maxEntries: 10, maxAgeSeconds: 60 * 60 * 24 * 14 },
              },
            },
          ],
        },
      }),
    ],
    define: {
      'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY),
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      hmr: process.env.DISABLE_HMR !== 'true',
    },
  };
});
