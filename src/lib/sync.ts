/**
 * Real-time trip sync via Firestore.
 *
 * One shared document at `trips/baby-in-bcn` holds the mutable per-trip state
 * — which packing items are packed, which places have been visited, any custom
 * packing items the user added. Both signed-in users (you + Olivia) read/write
 * the same doc, and `onSnapshot` pushes updates to every connected device.
 *
 * When the user is signed out (or Firebase isn't configured), the hook
 * gracefully falls back to local component state — the app still works,
 * just without cross-device sync.
 */
import { useCallback, useEffect, useState } from 'react';
import { doc, onSnapshot, setDoc } from 'firebase/firestore';
import { db, TRIP_DOC_PATH } from './firebase';
import { useAuth } from './auth';
import { PackingItem } from '../types';

export interface NapBaseline {
  /** Home-time (EST/EDT) wake time, displayed as e.g. "7:00 AM". */
  wakeTime: string;
  /** Home-time bedtime, displayed as e.g. "7:00 PM". */
  bedtime: string;
  /** Hours BCN is ahead of US East Coast (6 during DST overlap, 7 if EST/CET). */
  offsetHours: number;
}

interface TripState {
  packedIds: string[];
  customPacking: PackingItem[];
  visitedIds: string[];
  /** IDs of bundled packing items that the user swiped to delete.
      Custom items get removed from customPacking directly; bundled items
      can't be removed from code, so we hide them via this list. */
  hiddenIds: string[];
  napBaseline?: NapBaseline;
}

export const DEFAULT_NAP_BASELINE: NapBaseline = {
  wakeTime: '7:00 AM',
  bedtime: '7:00 PM',
  offsetHours: 7,
};

const EMPTY: TripState = { packedIds: [], customPacking: [], visitedIds: [], hiddenIds: [] };

const uniq = (arr: string[]) => Array.from(new Set(arr));

export function useTripState() {
  const { user, isConfigured } = useAuth();
  const [state, setState] = useState<TripState>(EMPTY);
  const [synced, setSynced] = useState(false);

  // Subscribe to the trip document when the user signs in.
  useEffect(() => {
    if (!isConfigured || !user || !db) {
      setSynced(false);
      return;
    }
    const ref = doc(db, TRIP_DOC_PATH);
    const unsub = onSnapshot(
      ref,
      (snap) => {
        const data = (snap.data() ?? {}) as Partial<TripState>;
        setState({
          packedIds: data.packedIds ?? [],
          customPacking: data.customPacking ?? [],
          visitedIds: data.visitedIds ?? [],
          hiddenIds: data.hiddenIds ?? [],
        });
        setSynced(true);
      },
      (err) => {
        console.warn('[sync] subscribe failed:', err);
        setSynced(false);
      },
    );
    return unsub;
  }, [user, isConfigured]);

  // Merge-write a single field into the shared doc.
  const writeField = useCallback(
    <K extends keyof TripState>(field: K, value: TripState[K]) => {
      // Optimistic local update so the UI feels instant even if the network is slow.
      setState((prev) => ({ ...prev, [field]: value }));
      if (!isConfigured || !user || !db) return;
      const ref = doc(db, TRIP_DOC_PATH);
      setDoc(ref, { [field]: value }, { merge: true }).catch((err) =>
        console.warn('[sync] write failed:', err),
      );
    },
    [user, isConfigured],
  );

  return {
    /** True once the first snapshot has loaded for a signed-in user. */
    isSynced: synced && !!user,
    /** True when sync is active right now (signed in + configured). */
    isLive: !!user && isConfigured,

    packedIds: state.packedIds,
    customPacking: state.customPacking,
    visitedIds: state.visitedIds,
    hiddenIds: state.hiddenIds,

    setHidden: (id: string, hidden: boolean) => {
      const next = hidden
        ? uniq([...state.hiddenIds, id])
        : state.hiddenIds.filter((x) => x !== id);
      writeField('hiddenIds', next);
    },

    setPacked: (id: string, packed: boolean) => {
      const next = packed
        ? uniq([...state.packedIds, id])
        : state.packedIds.filter((x) => x !== id);
      writeField('packedIds', next);
    },

    setVisited: (id: string, visited: boolean) => {
      const next = visited
        ? uniq([...state.visitedIds, id])
        : state.visitedIds.filter((x) => x !== id);
      writeField('visitedIds', next);
    },

    addCustomItem: (item: PackingItem) =>
      writeField('customPacking', [...state.customPacking, item]),

    removeCustomItem: (id: string) =>
      writeField(
        'customPacking',
        state.customPacking.filter((i) => i.id !== id),
      ),

    renameCustomItem: (id: string, name: string) =>
      writeField(
        'customPacking',
        state.customPacking.map((i) => (i.id === id ? { ...i, name } : i)),
      ),
  };
}
