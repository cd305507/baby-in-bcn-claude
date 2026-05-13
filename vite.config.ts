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
              // Wikimedia attraction images: stale-while-revalidate.
              urlPattern: /^https:\/\/(upload|commons)\.wikimedia\.org\//,
              handler: 'StaleWhileRevalidate',
              options: {
                cacheName: 'wikimedia-images',
                expiration: { maxEntries: 200, maxAgeSeconds: 60 * 60 * 24 * 30 },
              },
            },
            {
              // Google/Unsplash photos used in Explorer + Welcome.
              urlPattern: /^https:\/\/(images\.unsplash\.com|lh3\.googleusercontent\.com|.*\.ctfassets\.net|cdn\.britannica\.com|touringbee\.com|www\.exp1\.com|media\.timeout\.com|www\.skipthelinebarcelona\.com)\//,
              handler: 'StaleWhileRevalidate',
              options: {
                cacheName: 'place-images',
                expiration: { maxEntries: 200, maxAgeSeconds: 60 * 60 * 24 * 30 },
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
