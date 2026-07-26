# Sree Harsha Photography

Premium luxury photography portfolio website built with Next.js, TypeScript, Tailwind CSS, Framer Motion, GSAP, and Lenis smooth scroll.

## Features

- Cinematic hero with slow zoom and split-text animation
- 11 handcrafted homepage sections with Telugu-inspired decorative elements
- Full portfolio with masonry layout, filters, and lightbox
- Booking and contact forms with React Hook Form + Zod validation
- Custom luxury cursor, scroll progress, loading screen, WhatsApp CTA
- Complete SEO: meta tags, Open Graph, structured data, sitemap, robots.txt
- Responsive design for desktop, tablet, and mobile

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **Animation:** Framer Motion, GSAP, Lenis
- **UI:** Shadcn-style components, Lucide Icons
- **Forms:** React Hook Form, Zod
- **Carousel:** Embla Carousel
- **Lightbox:** Yet Another React Lightbox

## Getting Started

```bash
npm install --legacy-peer-deps
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Pages

| Route | Description |
|-------|-------------|
| `/` | Homepage with all sections |
| `/about` | Studio story and values |
| `/portfolio` | Filterable masonry gallery |
| `/services` | All photography services |
| `/gallery` | Full-screen grid gallery |
| `/testimonials` | Client reviews carousel |
| `/contact` | Contact form + map |
| `/booking` | Luxury booking form |
| `/privacy` | Privacy policy |
| `/terms` | Terms of service |

## Project Structure

```
src/
├── app/              # Next.js App Router pages
├── components/       # Reusable UI, layout, forms, icons
├── sections/         # Page section components
├── hooks/            # Custom React hooks
├── animations/       # Framer Motion variants
├── constants/        # Site config and content data
├── lib/              # Utilities and schema helpers
└── types/            # TypeScript types
```

## Build

```bash
npm run build
npm start
```

## Configuration

Update site details in `src/constants/index.ts`:

- Phone, email, WhatsApp
- Social media links
- Address and working hours

## License

Private — All rights reserved.
