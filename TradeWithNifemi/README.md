# TradeWithNifemi — Premium Forex & Crypto Signals

A modern, fintech-focused web application showcasing premium trading signals and discretionary account management services. Built with React + Vite, featuring a comprehensive backend integration for email notifications and contact management.

---

## 🚀 Quick Start

### Prerequisites

- Node.js 16+
- npm or yarn
- (For local email testing) Gmail account with App Password

### Installation

```bash
# Install dependencies
npm install

# Start development server (with API proxy)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

The dev server runs at `http://localhost:5173` with API proxy to `http://localhost:3001`.

---

## 📋 Features

### Frontend

- **Hero Section** — Animated hero with floating chart card and signal tickets
- **Services** — Trading signal packages and account management offerings
- **Process** — Step-by-step onboarding workflow
- **Results** — Performance equity curve, key metrics (Avg ROI, Max Drawdown, Profit Factor), and recent verified trades
- **Testimonials** — Client feedback carousel
- **FAQ** — Accordion with 6 common questions
- **Contact Form** — Full-featured contact with phone validation (Nigeria + international)
- **Ticker** — Live forex & crypto pair scroller with price updates
- **Navbar** — Sticky navigation with smooth scroll anchors
- **Footer** — Company info, social links, legal navigation

### Backend (Node.js + Express)

- **Email Service** — Nodemailer integration via Gmail SMTP
- **Contact Endpoint** — `POST /api/contact` validates and sends emails (admin + user confirmation)
- **Phone Validation** — Supports Nigeria (+234/0) and international formats
- **CORS Enabled** — Cross-origin requests from localhost dev
- **Error Handling** — Validation errors returned with clear messages

### Design System

- **Color Palette** — Green (#22f562) primary, dark backgrounds (#0a1410), semantic reds/blues
- **Typography** — Fraunces (display), Inter (body), JetBrains Mono (mono)
- **Components** — Glass-morphism cards, gradient text, smooth animations
- **Responsive** — Mobile-first design with Tailwind utilities

---

## 🛠️ Tech Stack

### Frontend

- **Framework:** React 18
- **Build Tool:** Vite 8
- **Styling:** Tailwind CSS + custom CSS variables
- **Icons:** Lucide React
- **State Management:** React Hooks (useState, useRef, useEffect)

### Backend

- **Runtime:** Node.js
- **Framework:** Express.js
- **Email:** Nodemailer (Gmail SMTP)
- **Environment:** dotenv for secrets

### Deployment

- **Frontend:** Vercel (configured)
- **Backend:** Node/Express serverless function ready
- **Email SMTP:** Gmail (requires App Password)

---

## 📂 Project Structure

```
TradeWithNifemi/
├── src/
│   ├── App.jsx                    # Main app wrapper with overflow constraint
│   ├── index.css                  # Global styles, animations, utilities
│   ├── main.jsx                   # React entry point
│   ├── Components/
│   │   ├── Sections/
│   │   │   ├── Hero.jsx           # Hero with chart card + floating tickets
│   │   │   ├── Services.jsx       # Service cards grid
│   │   │   ├── Process.jsx        # Onboarding steps
│   │   │   ├── Result.jsx         # Performance chart + metrics + recent trades
│   │   │   ├── Testimonials.jsx   # Client feedback carousel
│   │   │   ├── Faq.jsx            # FAQ accordion
│   │   │   ├── Contact.jsx        # Contact form with validation
│   │   │   ├── Ticker.jsx         # Live forex/crypto ticker
│   │   │   ├── Navbar.jsx         # Top navigation
│   │   │   ├── Footer.jsx         # Footer with links
│   │   │   └── begin.jsx          # CTA section
│   │   └── UI/
│   │       ├── HeroChart.jsx      # SVG chart for hero
│   │       ├── PerformanceChart.jsx # Equity curve chart
│   │       └── Accordion.jsx      # Reusable accordion component
│   └── assets/                    # Images, SVGs
├── server.js                      # Express backend (port 3001)
├── api/
│   └── contact.js                 # Serverless contact endpoint (Vercel)
├── .env.local                     # Local secrets (not committed)
├── vercel.json                    # Vercel deployment config
├── vite.config.js                 # Vite build config
├── package.json                   # Dependencies and scripts
└── README.md                      # This file
```

---

## 🎨 Styling & Animations

### CSS Variables (`:root`)

```css
--primary: #22f562; /* Green */
--primary-glow: #66ffa0; /* Light green */
--background: #0a1410; /* Dark navy */
--surface: #0d1815; /* Card bg */
--border: #1d2c26; /* Border color */
--bull: 145 95% 55%; /* Green (HSL) */
--bear: 8 88% 60%; /* Red (HSL) */
--shadow-elevated: /* Multi-layer shadow */ --shadow-inset:
  /* Inner glow effect */;
```

### Key Utilities

- `.glass-strong` — Frosted glass backdrop effect
- `.text-gradient-primary` — Gradient text (green to light green)
- `.chip` — Badge with green background
- `.label` — Mono uppercase utility text
- `.grid-bg` — Subtle grid pattern with fade mask
- `.animate-fade-up` — Entrance animation (0.8s)
- `.animate-float` — Floating motion (7s loop)
- `.animate-marquee` — Horizontal scroll animation (40s)
- `.ticker-mask` — Fade gradient edges for ticker

---

## 📧 Contact Form & Email

### Setup

1. **Create Gmail App Password:**
   - Enable 2FA on Google Account
   - Go to Security → App Passwords
   - Select "Mail" and "Windows Computer"
   - Copy generated 16-char password

2. **Create `.env.local`:**

```env
SMTP_USER=your-email@gmail.com
SMTP_PASSWORD=xxxx xxxx xxxx xxxx
ADMIN_EMAIL=nif3mi123@gmail.com
```

3. **Start backend server:**

```bash
node server.js
```

Backend runs on `http://localhost:3001`.

### Contact Form Fields

- **Name** — Letters and spaces only
- **Email** — Standard email regex validation
- **Phone** — Nigeria (+234/0) + international formats
- **Interest** — Select from dropdown (Signals / Account Management / Both)
- **Message** — Min 10 characters

### Email Sent

- **To Admin:** Full contact details + inquiry type
- **To User:** Confirmation + support email

---

## 🚀 Deployment

### Vercel (Frontend)

```bash
# Push to GitHub, connect repo to Vercel
# Auto-deploy on push to main
vercel deploy
```

### Environment Variables (Vercel)

Set in Vercel Project Settings → Environment Variables:

```
VITE_API_URL=https://your-api-domain.com
```

### Backend on Vercel (Serverless)

```javascript
// api/contact.js is ready as Vercel Function
// Deploy function separately or use external Node server
```

---

## 📱 Responsive Breakpoints

- **Mobile:** < 640px (sm)
- **Tablet:** 640px – 1024px (md, lg)
- **Desktop:** > 1024px (lg, xl)

All sections use responsive padding and grid layouts. Mobile navigation collapses, charts scale, and padding adjusts per breakpoint.

---

## 🔧 Build & Optimization

### Production Build

```bash
npm run build
# Output: dist/ folder (~230KB JS, ~44KB CSS gzipped)
```

### Performance

- Vite tree-shaking removes unused code
- CSS optimized with Tailwind purge
- SVG charts use inline `<path>` for fast rendering
- Intersection Observer lazy-loads animations
- Image optimization with Tailwind sizing

---

## 🐛 Troubleshooting

### Email Not Sending

- ✅ Check `.env.local` has correct SMTP credentials
- ✅ Ensure Gmail App Password (not regular password)
- ✅ Verify `server.js` running on port 3001
- ✅ Check Vite proxy in `vite.config.js` points to `http://localhost:3001`

### Styles Not Loading

- ✅ Run `npm install` to get all Tailwind plugins
- ✅ Check `src/index.css` imports `@import "tailwindcss";`
- ✅ Verify `tailwind.config.js` exists (auto-generated by Vite)

### Build Fails

- ✅ Clear `node_modules` and `package-lock.json`, reinstall
- ✅ Check for TypeScript syntax in `.jsx` files (should be pure JS)
- ✅ Run `npm run build` to see full error trace

### Mobile Overflow

- ✅ App wrapper has `overflow-x-hidden`
- ✅ All sections wrapped in `max-w-7xl` container
- ✅ Check Hero and FAQ have `overflow-hidden` class

---

## 📊 Performance Metrics

| Metric           | Current                   |
| ---------------- | ------------------------- |
| JS Bundle        | ~230 KB (gzipped: ~71 KB) |
| CSS Bundle       | ~44 KB (gzipped: ~8 KB)   |
| Build Time       | < 1s (Vite)               |
| Lighthouse Score | 85+ (Desktop)             |
| FCP              | ~1.2s (mobile)            |

---

## 📝 Git Workflow

```bash
# View recent commits
git log --oneline -10

# Create feature branch
git checkout -b feature/your-feature

# Commit with conventional format
git commit -m "feat: add new component"
git commit -m "fix: resolve mobile overflow"
git commit -m "refactor: improve performance"

# Push and create PR
git push origin feature/your-feature
```

---

## 📄 License & Credits

**TradeWithNifemi** — Premium Trading Services Platform  
Built with React, Vite, Tailwind CSS, and Express.js

---

## 🤝 Support

For technical questions or issues:

- **Email:** nif3mi123@gmail.com
- **Website:** [TradeWithNifemi](#)

---

## 🎯 Roadmap

- [ ] SMS/WhatsApp notifications via Twilio
- [ ] Real-time price updates via WebSocket
- [ ] User dashboard with trade history
- [ ] Payment integration (Stripe/PayPal)
- [ ] Multi-language support (ES, FR, DE)
- [ ] Mobile app (React Native)

---

**Last Updated:** May 2, 2026  
**Version:** 1.0.0  
**Status:** Production Ready ✅
