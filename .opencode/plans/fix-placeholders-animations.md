# Fix Overlap, Animation & Build Issues

## Completed
- ✅ `npm install` — 212 packages installed, 0 vulnerabilities

---

## Step 1: Fix Products Page Animation Conflict

**File:** `src/pages/Products.tsx`

The staggerContainer/staggerItem variants conflict with AnimatePresence explicit animations.

**Changes:**
1. Remove import `staggerContainer, staggerItem` from `../components/ui/ScrollReveal`
2. Replace the product grid with clean AnimatePresence + layout animations:

```tsx
// Lines 66-113 — Replace motion.div + AnimatePresence block with:
<motion.div
  layout
  className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
>
  <AnimatePresence mode="popLayout">
    {filtered.map((product) => (
      <motion.div
        key={product.id}
        layout
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
      >
        {/* existing product card content — no changes */}
      </motion.div>
    ))}
  </AnimatePresence>
</motion.div>
```

---

## Step 2: Fix ServiceCards Negative Margin Overlap

**File:** `src/components/sections/ServiceCards.tsx`

**Change line 9:**
```tsx
// Before:
<section className="relative z-20 -mt-24 pb-8 md:-mt-32">
// After:
<section className="relative z-20 -mt-20 pb-12 md:-mt-28">
```

This reduces the negative pull-up from -96px to -80px on mobile, and -128px to -112px on desktop, while increasing `pb-8` to `pb-12` for better spacing below.

---

## Step 3: Fix Navbar Overlap & Normalize Page Padding

### `src/App.tsx` — Add padding-top to `<main>`
```tsx
// Line 58 — change:
<main>
// To:
<main className="pt-20">
```

### `src/pages/About.tsx` — Remove redundant pt
```tsx
// Line 27 — change:
<section className="relative overflow-hidden bg-navy pt-32 pb-20">
// To:
<section className="relative overflow-hidden bg-navy pb-20">
```

### `src/pages/Products.tsx` — Remove redundant pt
```tsx
// Line 19 — change:
<section className="relative overflow-hidden bg-navy pt-32 pb-20">
// To:
<section className="relative overflow-hidden bg-navy pb-20">
```

### `src/pages/Contact.tsx` — Remove redundant pt
```tsx
// Line 62 — change:
<section className="relative overflow-hidden bg-navy pt-32 pb-20">
// To:
<section className="relative overflow-hidden bg-navy pb-20">
```

### `src/components/sections/Hero.tsx` — Adjust padding
The hero uses flex centering + `py-32` inside. Since `<main>` now has `pt-20`, reduce inner padding:
```tsx
// Line 18 — change:
<div className="relative z-10 mx-auto max-w-7xl px-4 py-32 text-center md:px-8">
// To:
<div className="relative z-10 mx-auto max-w-7xl px-4 py-24 text-center md:px-8">
```

---

## Step 4: Premium Framer Motion Animation Upgrades

### `src/components/ui/ScrollReveal.tsx`
Upgrade with spring easing and direction-aware transforms:
```tsx
// Replace transition with spring-based defaults
transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
```

### `src/components/ui/SectionHeader.tsx`
Add spring transition:
```tsx
// Line 23 — change transition to spring
transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
```

### `src/components/layout/PageTransition.tsx`
Upgrade to spring-based page transitions:
```tsx
// Replace with spring animation
<motion.div
  initial={{ opacity: 0, y: 20, scale: 0.98 }}
  animate={{ opacity: 1, y: 0, scale: 1 }}
  exit={{ opacity: 0, y: -20, scale: 0.98 }}
  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
>
```

### `src/components/sections/Hero.tsx`
Add parallax scroll effect using `useScroll`/`useTransform`:
```tsx
// Add import:
import { useScroll, useTransform } from "framer-motion";

// Inside component:
const { scrollY } = useScroll();
const bgY = useTransform(scrollY, [0, 500], [0, 150]);
const contentY = useTransform(scrollY, [0, 500], [0, -50]);

// Apply bgY to background image container (line 11-13)
// Apply contentY to content div (line 18)
<motion.div
  style={{ y: bgY }}
  className="absolute inset-0 bg-cover bg-center"
/>
// Content div gets:
<motion.div style={{ y: contentY }} className="relative z-10 ...">
```

### `src/components/sections/ServiceCards.tsx`
Add 3D hover tilt effect on service cards:
```tsx
// Wrap the card motion.div with mouse tracking
// Or simpler: enhance the existing stagger with spring physics
<motion.div
  variants={staggerItem}
  whileHover={{ scale: 1.03, y: -4 }}
  transition={{ type: "spring", stiffness: 300, damping: 15 }}
>
```

### `src/components/ui/Button.tsx`
Enhance hover/tap feedback:
```tsx
whileHover={{ scale: 1.05 }}
whileTap={{ scale: 0.95 }}
transition={{ type: "spring", stiffness: 400, damping: 17 }}
```

### `src/components/sections/CTABanner.tsx`
Add parallax between image and text on scroll:
```tsx
// Add useScroll + useTransform
const { scrollYProgress } = useScroll();
const imgScale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

// Apply to image container
<motion.div style={{ scale: imgScale }} className="relative h-64 lg:h-auto">
```

### `src/components/sections/IndustriesGrid.tsx` & `FeaturedProducts.tsx`
Upgrade stagger with spring:
```tsx
// Replace staggerItem variants usage with spring variant:
const springItem = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 200, damping: 20 },
  },
};
```

### `src/components/ui/GlassCard.tsx`
Add mouse-position-aware tilt effect (simplified as enhanced hover):
```tsx
whileHover={{ scale: 1.03, y: -3 }}
transition={{ type: "spring", stiffness: 300, damping: 15 }}
```

### `src/components/sections/CompanyIntro.tsx`
Add image parallax on scroll:
```tsx
// Wrap image with motion and add subtle scale transform
const { scrollYProgress } = useScroll();
const imgScale = useTransform(scrollYProgress, [0, 1], [1, 1.05]);
```

### `src/components/layout/Navbar.tsx`
Smooth scroll-linked background blur transition (already decent):
- Add subtle `animate` for the nav background opacity when scrolled
- Active link indicator animation

### `src/components/sections/WhyChooseUs.tsx`
Enhanced stagger with spring:
- Same spring stagger pattern as IndustriesGrid

---

## Step 5: Create README.md

**File:** `README.md` at project root

```markdown
# KEMMAX — Clean Room Engineering Website

A modern, animated marketing website for KEMMAX (Clean Room Projects OPC Pvt Ltd), 
a Chennai-based clean room engineering company.

## Tech Stack

- **React 19** — UI library
- **TypeScript 6** — Type safety
- **Vite 8** — Build tool
- **Tailwind CSS 4** — Styling
- **Framer Motion 12** — Animations
- **React Router 7** — Routing
- **Lucide React** — Icons

## Features

- Responsive design with glass-morphism UI
- Premium Framer Motion animations (parallax, spring, stagger, layout)
- 4 pages: Home, About, Products, Contact
- Product catalog with category filtering and layout animations
- Contact form with WhatsApp integration
- Animated counters and scroll-reveal sections

## Getting Started

```bash
npm install
npm run dev
```

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
  assets/          # Static images
  components/
    layout/        # Navbar, Footer, PageTransition
    sections/      # Hero, ServiceCards, CompanyIntro, etc.
    ui/            # Button, GlassCard, ScrollReveal, etc.
  data/
    content.ts     # All text content, products, services
  pages/           # Home, About, Products, Contact
  App.tsx          # Root layout with routing
  main.tsx         # Entry point
  index.css        # Tailwind + custom utilities
```

## Environment Variables

| Variable | Description |
|----------|-------------|
| `VITE_FORM_ENDPOINT` | Form submission endpoint (optional, falls back to mailto) |
```

---

## Step 6: Create requirements.txt

**File:** `requirements.txt` at project root

```
Node.js >= 18

# Production Dependencies
framer-motion ^12.40.0
lucide-react ^1.20.0
react ^19.2.6
react-dom ^19.2.6
react-router-dom ^7.18.0

# Dev Dependencies
@eslint/js ^10.0.1
@tailwindcss/vite ^4.3.1
@types/node ^24.12.3
@types/react ^19.2.14
@types/react-dom ^19.2.3
@vitejs/plugin-react ^6.0.1
eslint ^10.3.0
eslint-plugin-react-hooks ^7.1.1
eslint-plugin-react-refresh ^0.5.2
globals ^17.6.0
tailwindcss ^4.3.1
typescript ~6.0.2
typescript-eslint ^8.59.2
vite ^8.0.12
```
