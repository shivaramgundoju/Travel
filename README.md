# 🇮🇳 Yatraa — Explore India, Beautifully

A premium Indian travel discovery platform built with React, TypeScript, and Vite. Yatraa helps travellers discover extraordinary places, curated experiences, and thoughtfully designed journeys across India — starting in Hyderabad.

---

## ✨ Features

- **Destinations** — Rich, editorial destination pages for 12+ Indian cities and regions (Hyderabad, Kerala, Kashmir, Rajasthan, Goa, Ladakh, and more)
- **Experiences** — Bookable local experiences (food walks, heritage tours, adventure trips) with reviews, FAQs, and detailed itineraries
- **Curated Journeys** — Multi-day trip packages with day-by-day itineraries, pricing, accommodation details, and traveller reviews
- **The Journal** — Travel stories and guides written in an editorial, magazine-like format
- **Trip Planner** — Interactive form to request a custom trip itinerary
- **Testimonials** — Auto-rotating testimonial slider from happy travellers
- **Partner Band** — Showcasing hospitality partners (Taj, The Leela, ITC, IndiGo, etc.)
- **WhatsApp Float** — One-click WhatsApp contact for quick inquiries
- **SEO-Optimized** — Per-page meta tags via `usePageMeta` hook
- **Scroll Animations** — Reveal-on-scroll animations with reduced-motion support
- **Responsive Design** — Mobile-first layout with hamburger menu and fluid typography

---

## 🏗️ Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | React 19 |
| Language | TypeScript 5.8 |
| Build Tool | Vite 6 |
| Routing | React Router v7 |
| Styling | Custom CSS (tokens, components, pages) |
| Images | Unsplash (free license, responsive URLs) |

---

## 📁 Project Structure

```
yatraa/
├── public/                  # Static assets
├── scripts/
│   ├── fetch-images.mjs     # Image fetching utility
│   ├── images-candidates.json
│   └── qa.mjs               # QA checks
├── src/
│   ├── components/          # Reusable UI components
│   │   ├── Button.tsx
│   │   ├── Cards.tsx         # TripCard, ExperienceCard, JournalCard, PlaceCard
│   │   ├── Faq.tsx           # Accordion FAQ component
│   │   ├── Footer.tsx
│   │   ├── Header.tsx
│   │   ├── icons.tsx         # SVG icon components
│   │   ├── Logo.tsx
│   │   ├── MobileMenu.tsx
│   │   ├── Reveal.tsx        # Scroll-triggered reveal animation
│   │   ├── SectionHeading.tsx
│   │   ├── sections.tsx      # DestinationPanels, DestinationMarquee
│   │   ├── TestimonialSlider.tsx
│   │   ├── TripPlanner.tsx
│   │   └── WhatsAppFloat.tsx
│   ├── data/                # Static content & site config
│   │   ├── destinations.ts   # 6 full destinations + 16 card entries
│   │   ├── experiences.ts    # 7 bookable experiences
│   │   ├── images.ts         # Unsplash image URLs & alt text
│   │   ├── site.ts           # Site metadata, contact, socials
│   │   ├── stories.ts        # Travel journal articles
│   │   ├── testimonials.ts   # Traveller testimonials
│   │   └── trips.ts          # 6 curated trip packages
│   ├── lib/
│   │   ├── forms.tsx          # Form utilities
│   │   └── hooks.ts           # usePageMeta, usePrefersReducedMotion
│   ├── pages/               # Route-level page components
│   │   ├── Home.tsx           # Landing page with hero, sections
│   │   ├── Destinations.tsx   # Destination listing
│   │   ├── DestinationDetail.tsx
│   │   ├── Experiences.tsx    # Experience listing
│   │   ├── ExperienceDetail.tsx
│   │   ├── Trips.tsx          # Trip listing
│   │   ├── TripDetail.tsx
│   │   ├── Stories.tsx        # Journal listing
│   │   ├── StoryDetail.tsx
│   │   ├── About.tsx
│   │   ├── Contact.tsx
│   │   ├── PlanTrip.tsx       # Trip planner form
│   │   ├── Legal.tsx          # Privacy & Terms
│   │   └── NotFound.tsx       # 404 page
│   ├── styles/
│   │   ├── tokens.css         # Design tokens (colors, spacing, typography)
│   │   ├── components.css     # Component styles
│   │   └── pages.css          # Page-level styles
│   ├── App.tsx               # Router + layout
│   └── main.tsx              # Entry point
├── reference/               # Reference HTML/CSS/JS
├── index.html
├── package.json
├── tsconfig.json
└── vite.config.ts
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** 18+ (recommended: 20 LTS)
- **npm** (or yarn/pnpm)

### Install & Run

```bash
# Install dependencies
npm install

# Start development server (http://localhost:5173)
npm run dev

# Type-check without emitting
npm run typecheck

# Production build
npm run build

# Preview production build (http://localhost:4173)
npm run preview
```

---

## 🛠️ Available Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start Vite dev server with HMR |
| `npm run build` | Type-check + production build |
| `npm run preview` | Preview production build locally |
| `npm run typecheck` | Run TypeScript compiler (no emit) |

---

## 📄 Pages & Routes

| Route | Page | Description |
|-------|------|-------------|
| `/` | Home | Hero, destinations, experiences, trips, testimonials, journal, trip planner |
| `/destinations` | Destinations | Browse all Indian destinations |
| `/destinations/:slug` | Destination Detail | Full destination page with places, food, tips, gallery |
| `/experiences` | Experiences | Browse bookable local experiences |
| `/experiences/:slug` | Experience Detail | Experience with itinerary, reviews, FAQs, pricing |
| `/trips` | Trips | Curated multi-day journey packages |
| `/trips/:slug` | Trip Detail | Full trip with day-by-day itinerary, inclusions, reviews |
| `/stories` | Stories | Travel journal articles |
| `/stories/:slug` | Story Detail | Full story with rich content blocks |
| `/about` | About | About Yatraa |
| `/contact` | Contact | Contact form and details |
| `/plan-a-trip` | Plan Trip | Custom trip request form |
| `/privacy-policy` | Privacy Policy | Legal — privacy |
| `/terms` | Terms | Legal — terms of service |

---

## 🎨 Design System

The project uses a custom CSS design token system defined in `src/styles/tokens.css`:

- **Colors** — Brand palette with light/dark variants
- **Typography** — Fluid `clamp()` sizing for responsive text
- **Spacing** — Consistent spacing scale (`--space-xs` through `--space-3xl`)
- **Components** — Reusable patterns in `components.css`
- **Pages** — Page-specific styles in `pages.css`

Animations use the `Reveal` component with `IntersectionObserver`, respecting `prefers-reduced-motion`.

---

## 📸 Image System

All images are served from **Unsplash** with responsive width parameters via `src/data/images.ts`:

```tsx
import { photo, alt } from "../data/images";

// Returns responsive URL: https://images.unsplash.com/photo-xxx?auto=format&fit=crop&w=1800&q=78
<img src={photo("hero", 1800)} alt={alt("hero")} />
```

---

## 🧩 Key Components

- **`Reveal`** — Wraps children with scroll-triggered fade-in animation
- **`SectionHeading`** — Consistent section headers with eyebrow, title, summary, and optional action
- **`Button`** — Reusable button/link component with multiple variants (primary, outline, outline-ink)
- **`Cards`** — `TripCard`, `ExperienceCard`, `JournalCard`, `PlaceCard` for listing pages
- **`TripPlanner`** — Interactive form for requesting custom itineraries
- **`TestimonialSlider`** — Auto-rotating carousel of traveller reviews
- **`DestinationPanels` / `DestinationMarquee`** — Featured destination display components

---

## 📝 Content Architecture

All content is static and stored in `src/data/`:

- **`destinations.ts`** — 6 full destination objects with places, food, tips, best times, and linked experiences/trips
- **`experiences.ts`** — 7 bookable experiences with highlights, inclusions, itineraries, reviews, and FAQs
- **`trips.ts`** — 6 multi-day trip packages with day-by-day itineraries, accommodation, transport, and reviews
- **`stories.ts`** — 4+ travel journal articles with rich content blocks (paragraphs, headings, quotes, lists, images)
- **`testimonials.ts`** — Traveller testimonials for the homepage slider

---

## 📜 License

This is a private project. All rights reserved.

---

## 🤝 Contact

**Yatraa** — Explore India, Beautifully

- 📍 Banjara Hills, Hyderabad, Telangana 500034, India
- 📞 [+91 98480 12345](tel:+919848012345)
- ✉️ [hello@yatraa.travel](mailto:hello@yatraa.travel)
- 💬 [WhatsApp](https://wa.me/919848012345)

---

*Built with ❤️ for curious travellers across India.*
