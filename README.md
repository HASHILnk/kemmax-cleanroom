# KEMMAX — Clean Room Engineering Website

A modern, animated marketing website for **KEMMAX** (Clean Room Projects OPC Pvt Ltd), a Chennai-based clean room engineering company specializing in design, engineering, commissioning, and HVAC for controlled environments.

## Tech Stack

- **React 19** — UI library
- **TypeScript 6** — Type safety
- **Vite 8** — Build tool
- **Tailwind CSS 4** — Styling
- **Framer Motion 12** — Premium animations
- **React Router 7** — Routing
- **Lucide React** — Icons

## Features

- **Responsive design** with glass-morphism UI and dark navy/teal theme
- **Premium animations** — Spring-based page transitions, parallax scrolling, staggered card reveals, hover effects, animated counters
- **4 pages** — Home, About, Products, Contact
- **Product catalog** — Category filtering with smooth layout animations
- **Contact form** — With WhatsApp integration and Google Maps embed
- **Animated counters** — Scroll-triggered number animations
- **ScrollReveal** — Configurable direction-based scroll reveals

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## Build

```bash
npm run build
npm run preview
```

## Lint

```bash
npm run lint
```

## Project Structure

```
src/
  assets/              # Static images
  components/
    layout/            # Navbar, Footer, PageTransition
    sections/          # Hero, ServiceCards, CompanyIntro, IndustriesGrid,
                       # FeaturedProducts, WhyChooseUs, CTABanner, ContactPreview
    ui/                # Button, GlassCard, ScrollReveal, SectionHeader, AnimatedCounter
  data/
    content.ts         # All text content, services, products, company info
  pages/               # Home, About, Products, Contact
  App.tsx              # Root layout with routing
  main.tsx             # Entry point
  index.css            # Tailwind v4 + custom utilities (glass, glow, gradient)
```

## Environment Variables

| Variable | Description |
|----------|-------------|
| `VITE_FORM_ENDPOINT` | Form submission endpoint (optional, falls back to mailto) |

## Animations

| Component | Animation Type |
|-----------|---------------|
| PageTransition | Spring-based fade + scale + slide |
| Hero | Parallax background + staggered entrance |
| ServiceCards | Spring stagger grid + hover lift |
| IndustriesGrid | Spring stagger grid + hover scale |
| FeaturedProducts | Spring stagger grid + hover lift |
| WhyChooseUs | Spring stagger grid + highlighted glow |
| CTABanner | Parallax image scale + scroll reveal |
| CompanyIntro | Parallax image scale + scroll reveal |
| SectionHeader | Scroll-triggered fade-up |
| ScrollReveal | Configurable direction scroll reveal |
| Button | Spring hover scale + tap feedback |
| GlassCard | Spring hover lift + glow |
| AnimatedCounter | Scroll-triggered counting |

## Pages

- **Home** — Hero, Services, Company Intro, Industries, Products, Why Choose Us, CTA, Contact Preview
- **About** — Overview, Stats, Vision & Mission, Core Values, Industries
- **Products** — Product catalog with category filtering
- **Contact** — Contact form, info cards, WhatsApp, social links, map
