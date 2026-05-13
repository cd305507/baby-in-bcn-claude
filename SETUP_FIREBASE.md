# Firebase Setup (10 minutes)

This unlocks **Google sign-in**, **cross-device sync** of packing/visited state, and **PDF/photo uploads** on tickets. All four steps are point-and-click in the Firebase Console — no terminal required.

## 1. Create the Firebase project

1. Open [console.firebase.google.com](https://console.firebase.google.com).
2. Click **Add project** → name it **`baby-in-bcn`** (or whatever you want) → Continue.
3. Disable Google Analytics (not needed) → Create project.

## 2. Add a Web app & copy the config

1. From the project dashboard, click the **`</>`** (Web) icon to add a web app.
2. App nickname: `Baby in BCN Web` → Register app (skip Hosting setup).
3. You'll see a `firebaseConfig` snippet like:

   ```js
   const firebaseConfig = {
     apiKey: "AIza...",
     authDomain: "baby-in-bcn.firebaseapp.com",
     projectId: "baby-in-bcn",
     storageBucket: "baby-in-bcn.appspot.com",
     messagingSenderId: "1234567890",
     appId: "1:1234567890:web:abc123..."
   };
   ```

4. In this repo, **copy `.env.example` to `.env.local`** and paste the values:

   ```bash
   cp .env.example .env.local
   ```

   Then edit `.env.local` and fill in:

   ```env
   VITE_FIREBASE_API_KEY=AIza...
   VITE_FIREBASE_AUTH_DOMAIN=baby-in-bcn.firebaseapp.com
   VITE_FIREBASE_PROJECT_ID=baby-in-bcn
   VITE_FIREBASE_STORAGE_BUCKET=baby-in-bcn.appspot.com
   VITE_FIREBASE_MESSAGING_SENDER_ID=1234567890
   VITE_FIREBASE_APP_ID=1:1234567890:web:abc123...
   ```

## 3. Enable Authentication (Google sign-in)

1. Left sidebar → **Build → Authentication** → Get started.
2. **Sign-in method** tab → click **Google** → toggle Enable.
3. Set the **project support email** to your own email → Save.
4. The Authorized domains section already includes `localhost` — leave it.

## 4. Enable Cloud Firestore

1. Left sidebar → **Build → Firestore Database** → Create database.
2. **Start in test mode** (we'll lock it down once it's working).
3. Pick a location near you (e.g. `us-east1`) → Enable.

## 5. Enable Storage (for ticket PDFs/images)

1. Left sidebar → **Build → Storage** → Get started.
2. **Start in test mode** → same region as Firestore → Done.

## 6. Restart the dev server

```bash
# Stop the existing server (Ctrl-C in its terminal, or:)
kill $(lsof -ti:3000)
npm run dev
```

Open http://localhost:3000. The **⚙ Setup** chip in the top-right should now be a yellow **Sign in** button.

## 7. Sign in & test

1. Click **Sign in** in the header → Google popup → pick your account.
2. The chip becomes your avatar + first name.
3. Have Olivia sign in on her phone with her own Google account — same trip, same data.

---

## Security note (do this later, after testing)

Right now the rules are wide open ("test mode"). Once you've confirmed everything works, lock them down so only you + Olivia can read/write the trip data:

**Firestore Rules** (Build → Firestore → Rules tab):

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Allow any signed-in user (you and Olivia)
    match /trips/baby-in-bcn {
      allow read, write: if request.auth != null;
    }
  }
}
```

If you want only specific email addresses:

```javascript
match /trips/baby-in-bcn {
  allow read, write:
    if request.auth != null &&
    request.auth.token.email in [
      'you@gmail.com',
      'olivia@gmail.com'
    ];
}
```

**Storage Rules** (Build → Storage → Rules tab):

```javascript
rules_version = '2';
service firebase.storage {
  match /b/{bucket}/o {
    match /tickets/{ticketId}/{file=**} {
      allow read, write: if request.auth != null;
    }
  }
}
```

---

## What this unlocks

Once configured, on the next dev iteration we'll wire up:

- **Packing list** — checks sync to Firestore in real-time, both phones stay in sync
- **Visited places** — same as above
- **Ticket PDFs/photos** — drag-and-drop on each ticket card, uploads to Storage, visible to both of you across devices

Until then, the app still works fully — just everything is in-memory per device.
