import React, { useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { WifiOff } from 'lucide-react';
// @ts-ignore - virtual module provided by vite-plugin-pwa
import { useRegisterSW } from 'virtual:pwa-register/react';

/**
 * Silent auto-update PWA controller.
 *
 *  - registerType is set to `autoUpdate` in vite.config.ts: when a new service
 *    worker is detected, it skip-waits and clients.claim()s automatically.
 *  - We listen for `controllerchange` and reload the page once — that picks
 *    up the new HTML/JS without the user ever seeing an "Update" banner.
 *  - A small "Offline ready" toast still pops up the FIRST time the SW
 *    caches the app, so the user knows the airplane-mode promise holds.
 *  - The SW is also polled every 60s while the app is open so updates land
 *    even on a long-lived tab.
 */
export const UpdatePrompt: React.FC = () => {
  const reloadedRef = useRef(false);

  // Reload the page once when a new SW takes over. Guarded against the
  // double-reload that can happen on first SW registration.
  useEffect(() => {
    if (!('serviceWorker' in navigator)) return;
    const onChange = () => {
      if (reloadedRef.current) return;
      reloadedRef.current = true;
      window.location.reload();
    };
    navigator.serviceWorker.addEventListener('controllerchange', onChange);
    return () => navigator.serviceWorker.removeEventListener('controllerchange', onChange);
  }, []);

  const {
    offlineReady: [offlineReady, setOfflineReady],
  } = useRegisterSW({
    onRegisteredSW(_swUrl: string, r: ServiceWorkerRegistration | undefined) {
      if (!r) return;
      // Poll for new versions in the background. 60s = responsive but not noisy.
      setInterval(() => {
        r.update().catch(() => {});
      }, 60_000);
    },
    onRegisterError(err: unknown) {
      console.warn('[PWA] service worker registration failed', err);
    },
  });

  if (!offlineReady) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ y: 120, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 120, opacity: 0 }}
        transition={{ type: 'spring', damping: 25, stiffness: 300 }}
        className="fixed bottom-4 left-4 right-4 z-[200] max-w-md mx-auto"
      >
        <div className="bg-med-dark text-white rounded-2xl shadow-xl shadow-med-dark/40 p-3.5 flex items-center gap-3 border border-white/10">
          <div className="w-9 h-9 bg-green-500/20 rounded-xl flex items-center justify-center shrink-0">
            <WifiOff className="w-4 h-4 text-green-400" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-[11px] font-black uppercase tracking-widest leading-none">Offline ready</p>
            <p className="text-[10px] font-bold opacity-70 mt-1">App works without internet now.</p>
          </div>
          <button
            onClick={() => setOfflineReady(false)}
            className="px-3 py-2 bg-white/10 rounded-lg text-[10px] font-black uppercase tracking-widest active:scale-95 transition-transform shrink-0"
            aria-label="Dismiss"
          >
            OK
          </button>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
