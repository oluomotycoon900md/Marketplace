# Foundry -- marketplace frontend starter

A Next.js (App Router) + TypeScript + Tailwind CSS storefront -- a starting structure for an
e-commerce/marketplace web app, not a finished product.

## Why this stack
- **Next.js** -- file-based routing plus server rendering/static generation out of the box.
  Product pages are pre-rendered at build time (`generateStaticParams`) and get their own
  SEO metadata (`generateMetadata`) -- for a storefront, product pages are how people find you
  through search, so this matters more here than on an internal tool.
- **TypeScript** -- the product/cart shapes are reused across cards, cart, and checkout;
  typing them once catches mismatches at build time instead of in front of a customer.
- **Tailwind CSS** -- utility classes keep styling next to markup, which stays easier to keep
  consistent across many small components than juggling separate stylesheets.

## Getting started
```
npm install
npm run dev
```
Then open http://localhost:3000.

## Structure
```
src/
  app/                     one folder per route (Next.js App Router)
    page.tsx               home
    products/page.tsx      listing + category filter
    products/loading.tsx   skeleton shown while a route segment loads
    products/[slug]/       single product page (SSG + per-product SEO)
    cart/page.tsx          cart
    checkout/page.tsx      checkout (placeholder -- see "not built yet")
    error.tsx               error boundary for the whole app
    not-found.tsx           404 page
  components/              shared UI: Header, Footer, ProductCard, ...
  context/                 CartContext -- cart state, persisted to localStorage
  lib/                     types + the product "data layer"
```

## What's included
- Responsive, mobile-first layout (the header collapses into a menu below the `sm` breakpoint)
- SEO: per-page `<title>` / `<meta description>` via the Metadata API
- Loading state (`products/loading.tsx`) and an error boundary (`app/error.tsx`)
- Cart persisted to `localStorage`, guarded so it never runs during server rendering
- Accessible focus states and `aria-live` / `aria-expanded` on interactive controls
- A typed data layer (`lib/products.ts`) so swapping mock data for a real API only touches one file

## Not built yet -- by design, this is a starting structure
- Authentication / account pages
- Real checkout + payment processing (Stripe Checkout is the fastest path from here)
- A real backend or CMS -- `lib/products.ts` is mock data standing in for one
- Site search
- Automated tests
