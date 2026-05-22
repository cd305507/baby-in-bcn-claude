# Setting up Baby in BCN on a second device / account

You've already got the work laptop running. This is the one-page checklist
for getting your **personal laptop / Claude Code account** working on the
same project. Most of it is point-and-click — only one terminal command.

## What you'll do (≈ 10 minutes total)

### 1. Install the basics on the personal laptop

If you haven't already:
- **Node.js** (v20+): https://nodejs.org → install the LTS .pkg
- **Claude Code**: install per your usual flow
- **VS Code** + the Claude Code extension (if that's how you use it)

### 2. Clone the repo

Open Terminal on the personal laptop and run:

```bash
cd ~/Desktop          # or wherever you want it
git clone https://github.com/cd305507/baby-in-bcn-claude.git
cd baby-in-bcn-claude
npm install
```

(You may be prompted to sign in to GitHub — sign in as `cd305507`, your
personal account.)

### 3. Copy the secrets file

The `.env.local` file holds your Firebase API keys. It's NOT in git (on
purpose — secrets should never be in version control). You need to copy
it manually from the work laptop to the personal laptop.

**Work laptop side** (one time):
1. Open the file: `/Users/cadavids/baby-in-bcn/.env.local`
2. Copy all 6 lines (the `VITE_FIREBASE_*` lines)
3. Save them to a **locked Apple Note** titled "Baby in BCN env"

**Personal laptop side**:
1. Open the same locked Apple Note
2. Create a new file at `baby-in-bcn-claude/.env.local` (note the dot)
3. Paste the 6 lines in, save

### 4. Add your personal Gmail to Firebase (so you can deploy)

1. Go to https://console.firebase.google.com/project/baby-in-bcn-claude/settings/iam
2. Click **Add member** (top right)
3. Paste your personal Gmail (same one you use for your personal GitHub)
4. Role: **Editor**
5. Click **Add member**

On the personal laptop:
```bash
firebase login
```
Pick the personal Gmail when the browser opens.

### 5. Verify it works

On the personal laptop:
```bash
npm run dev           # should start the dev server at http://localhost:3000
```

You should see the same app. Done!

## Everyday two-laptop workflow

Whichever laptop you're editing on:

**Before you start:**
```bash
git pull
```
(downloads anything that was changed on the other laptop)

**While editing:**
- Just use Claude Code normally. It'll commit and push when you tell it to.

**When you're done:**
```bash
git add -A
git commit -m "what you did"
git push
```
(uploads your changes; the other laptop will see them next time it pulls)

For deploying:
```bash
npm run deploy
```
Works the same on both laptops once step 4 above is done.

## Claude Code on the personal account

When you start Claude Code in this repo on the personal laptop:
- **It auto-loads `CLAUDE.md`** at the repo root — so the new Claude has all the
  architectural context (file map, decisions, conventions, "don't do X" rules)
  from day one. You won't have to re-explain anything.
- **It does NOT inherit our conversation history** — Claude Code sessions are
  per-account. But the conversation log is committed to `conversation-archive/`
  in the repo so you can scroll back through it if you ever need to refer
  to a specific decision.

## Troubleshooting

**`npm run dev` says "Firebase not configured"**
→ `.env.local` is missing or has typos. Re-paste from your Apple Note.

**`npm run deploy` says "Permission denied"**
→ You haven't run `firebase login` yet on the personal laptop, or your
   personal Gmail isn't an Editor on the project. Redo step 4.

**`git push` says "Permission denied" or "Repository not found"**
→ Git is using credentials for the wrong GitHub account. Run:
   ```bash
   gh auth login
   ```
   and sign in as `cd305507`.

**Different version of the app on the two laptops**
→ You forgot to `git pull` before starting. Always pull first.
