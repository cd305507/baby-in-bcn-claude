import { initializeApp, getApps, type FirebaseApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, type Auth } from 'firebase/auth';
import {
  initializeFirestore,
  persistentLocalCache,
  persistentMultipleTabManager,
  type Firestore,
} from 'firebase/firestore';
import { getStorage, type FirebaseStorage } from 'firebase/storage';

const config = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
};

export const isFirebaseConfigured = Boolean(config.apiKey && config.projectId);

let app: FirebaseApp | null = null;
let _auth: Auth | null = null;
let _db: Firestore | null = null;
let _storage: FirebaseStorage | null = null;

if (isFirebaseConfigured) {
  app = getApps().length > 0 ? getApps()[0] : initializeApp(config);
  _auth = getAuth(app);
  // Use IndexedDB-backed persistent local cache so reads + writes work in
  // airplane mode. `persistentMultipleTabManager` lets two app instances
  // (e.g., a browser tab + an installed PWA) share the same cache without
  // locking each other out. Writes made offline queue up and sync when
  // the device reconnects.
  _db = initializeFirestore(app, {
    localCache: persistentLocalCache({
      tabManager: persistentMultipleTabManager(),
    }),
  });
  _storage = getStorage(app);
}

export const auth = _auth;
export const db = _db;
export const storage = _storage;
export const googleProvider = new GoogleAuthProvider();
export { app };

// Single shared workspace document for the trip — both authenticated users
// (you + Olivia) read/write the same doc so changes sync across phones.
export const TRIP_DOC_PATH = 'trips/baby-in-bcn';
