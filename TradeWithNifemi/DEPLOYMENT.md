# Deployment Guide

## Local Development (Current Setup)

- **Frontend:** `npm run dev` → Vite dev server on http://localhost:5176
- **Backend:** `npm run server` → Express server on http://localhost:3001
- **Both:** `npm run dev` in package.json runs both concurrently

The Vite proxy in `vite.config.js` routes `/api/*` requests to the Express server.

---

## Option A: Separate Hosting

- **Frontend:** Deploy to Vercel
- **Backend:** Deploy Express server to Render, Railway, or Heroku
- **Setup:**
  1. Push code to GitHub
  2. Deploy frontend to Vercel
  3. Deploy `server.js` to Render/Railway/Heroku
  4. In Vercel env vars, set `VITE_API_URL=https://your-backend-url`
  5. Update `vite.config.js` proxy to use env var in production

---

## Option B: Vercel Serverless (Recommended)

- **Frontend & Backend:** Both deploy to Vercel
- **Backend:** `/api` folder → Auto-detected as serverless functions
- **Files:**
  - Frontend: `src/`, `index.html`, `package.json`, `vite.config.js`
  - API: `api/contact.js` (handles POST /api/contact)
  - `.env.local` → Not committed; add vars in Vercel dashboard

### Option B Setup Steps:

1. **Prepare for deployment:**

   ```bash
   # Add .env.local to .gitignore
   echo ".env.local" >> .gitignore

   # Untrack .env.local from git (if already committed)
   git rm --cached .env.local
   git add .gitignore
   git commit -m "chore: ignore .env.local"
   ```

2. **Push to GitHub:**

   ```bash
   git add .
   git commit -m "feat: add serverless API and improve contact form UX"
   git push
   ```

3. **Deploy to Vercel:**
   - Go to https://vercel.com/dashboard
   - Click "Add New..." → "Project"
   - Import your GitHub repo
   - **Environment Variables:** Set these in Vercel dashboard:
     - `SMTP_USER` = `nif3mi123@gmail.com`
     - `SMTP_PASSWORD` = `<your 16-char Gmail App Password>`
     - `ADMIN_EMAIL` = `nif3mi123@gmail.com`
   - Click "Deploy"

4. **Post-Deploy:**
   - Test contact form at `https://your-vercel-url.com`
   - Form POSTs to `/api/contact` (serverless function)
   - Emails sent via Gmail SMTP
   - Success message displays in form

---

## Local Testing for Option B

Even though we're using serverless on Vercel, you can still test locally:

1. `npm run dev` starts Vite + Express server
2. The Vite proxy still routes `/api` → Express server
3. When you push to GitHub, Vercel uses `api/contact.js` instead

---

## Directory Structure

```
TradeWithNifemi/
  api/                    ← Vercel serverless functions
    contact.js           ← POST /api/contact endpoint
  src/
    Components/
      Sections/
        Contact.jsx      ← Updated with loading/message UI
  server.js              ← Local dev Express server (not used on Vercel)
  .env.local             ← Local dev only (not committed)
  package.json
  vite.config.js
```

---

## Current Status

✅ **Local testing:** Working (server.js + frontend)
✅ **Serverless API:** Ready (`api/contact.js`)
✅ **Contact form UI:** Enhanced with loading state & messages
⏳ **Vercel deployment:** Ready (just follow steps above)
