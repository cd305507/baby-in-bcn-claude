import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { RefreshCw, X, Wifi, WifiOff } from 'lucide-react';
// @ts-ignore - virtual module provided by vite-plugin-pwa
import { useRegisterSW } from 'virtual:pwa-register/react';

/**
 * Bottom banner that:
 *  - Pops up when a new app version is available → "Update" button reloads with the latest
 *  - Briefly confirms when the app first becomes available offline
 *  - Re-checks for updates every 60 seconds while the app is open
 */
export const UpdatePrompt: React.FC = () => {
  const {
    needRefresh: [needRefresh, setNeedRefresh],
    offlineReady: [offlineReady, setOfflineReady],
    updateServiceWorker,
  } = useRegisterSW({
    onRegisteredSW(_swUrl: string, r: ServiceWorkerRegistration | undefined) {
      if (!r) return;
      // Poll for new versions in the background. 60s is responsive without being noisy.
      setInterval(() => {
        r.update().catch(() => {});
      }, 60_000);
    },
    onRegisterError(err: unknown) {
      // SW failed to register (e.g. on http://localhost). App still works.
      console.warn('[PWA] service worker registration failed', err);
    },
  });

  const close = () => {
    setNeedRefresh(false);
    setOfflineReady(false);
  };

  if (!needRefresh && !offlineReady) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ y: 120, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 120, opacity: 0 }}
        transition={{ type: 'spring', damping: 25, stiffness: 300 }}
        className="fixed bottom-4 left-4 right-4 z-[200] max-w-md mx-auto"
      >
        {needRefresh ? (
          <div className="bg-med-blue text-white rounded-2xl shadow-2xl shadow-med-blue/40 p-3.5 flex items-center gap-3 border border-white/10">
            <div className="w-9 h-9 bg-white/15 rounded-xl flex items-center justify-center shrink-0">
              <RefreshCw className="w-4 h-4" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-[11px] font-black uppercase tracking-widest leading-none">New version</p>
              <p className="text-[10px] font-bold opacity-75 mt-1">Tap update to get the latest</p>
            </div>
            <button
              onClick={() => updateServiceWorker(true)}
              className="px-3.5 py-2 bg-med-yellow text-med-dark rounded-xl text-[10px] font-black uppercase tracking-widest active:scale-95 transition-transform shrink-0"
            >
              Update
            </button>
            <button
              onClick={close}
              className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center active:scale-90 transition-transform shrink-0"
              aria-label="Dismiss"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        ) : offlineReady ? (
          <div className="bg-med-dark text-white rounded-2xl shadow-xl shadow-med-dark/40 p-3.5 flex items-center gap-3 border border-white/10">
            <div className="w-9 h-9 bg-green-500/20 rounded-xl flex items-center justify-center shrink-0">
              <WifiOff className="w-4 h-4 text-green-400" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-[11px] font-black uppercase tracking-widest leading-none">Offline ready</p>
              <p className="text-[10px] font-bold opacity-70 mt-1">App works without internet now.</p>
            </div>
            <button
              onClick={close}
              className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center active:scale-90 transition-transform shrink-0"
              aria-label="Dismiss"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        ) : null}
      </motion.div>
    </AnimatePresence>
  );
};
