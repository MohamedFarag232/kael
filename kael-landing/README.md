# KAEL - Performance Marketing Agency Landing Page

A high-converting, production-ready landing page built with Next.js 15, React 19, TypeScript, and Tailwind CSS.

## Tech Stack

- **Next.js 15** (App Router)
- **React 19**
- **TypeScript**
- **Tailwind CSS**
- **Framer Motion** (Animations)
- **Lucide React** (Icons)
- **shadcn/ui** (Components)

## Features

- ✅ Modern dark theme design inspired by Vercel, Stripe, Framer
- ✅ Glassmorphism UI elements
- ✅ Smooth scroll animations with Framer Motion
- ✅ Sticky navigation with active section highlighting
- ✅ Animated counters for results section
- ✅ FAQ accordion with smooth animations
- ✅ Loading screen
- ✅ Scroll progress indicator
- ✅ Back to top button
- ✅ Fully responsive design
- ✅ SEO optimized
- ✅ Accessible (semantic HTML, ARIA labels)

## Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
kael-landing/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── sections/
│   │   ├── navbar.tsx
│   │   ├── hero.tsx
│   │   ├── problem.tsx
│   │   ├── why-kael.tsx
│   │   ├── services.tsx
│   │   ├── process.tsx
│   │   ├── results.tsx
│   │   ├── testimonials.tsx
│   │   ├── faq.tsx
│   │   ├── cta.tsx
│   │   └── footer.tsx
│   ├── ui/
│   │   ├── button.tsx
│   │   └── card.tsx
│   ├── loading-screen.tsx
│   ├── scroll-progress.tsx
│   └── back-to-top.tsx
├── lib/
│   └── utils.ts
├── public/
├── tailwind.config.ts
├── tsconfig.json
├── next.config.js
└── package.json
```

## Sections

1. **Hero** - Main headline, subheadline, CTAs, and animated dashboard mockup
2. **Problem** - Four premium cards highlighting common pain points
3. **Why KAEL** - Feature cards with hover animations
4. **Services** - Five service cards (Meta Ads, Google Ads, etc.)
5. **Process** - Animated timeline showing the 5-step process
6. **Results** - Animated counters showing key metrics
7. **Testimonials** - Three client testimonials with ratings
8. **FAQ** - Animated accordion with 5 questions
9. **CTA** - Final call-to-action section
10. **Footer** - Navigation, contact info, and social links

## Customization

### Colors

Edit `tailwind.config.ts` to customize the color scheme:

```typescript
colors: {
  primary: "#2563EB",
  background: "#09090B",
  card: "#18181B",
  muted: "#71717A",
}
```

### Content

All content is in the section components under `components/sections/`. Edit the text, metrics, and testimonials as needed.

## Performance

The site is optimized for:
- Lighthouse score above 95
- Fast initial load
- Smooth animations
- Code splitting
- Lazy loading

## License

MIT
