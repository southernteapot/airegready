# Memory

This file contains durable project facts for coding agents.

## Project

AIRegReady is a website and document/template business focused on AI regulation readiness, compliance materials, checklists, policies, and jurisdiction-specific kits.

## Current Known Direction

The site should look professional, trustworthy, and polished. It is aimed at people starting businesses and also people with established businesses who need practical AI readiness materials.

As of 2026-04-29, the visible brand direction is a professional hybrid of the previous site and the ad reference at `images/airegad.png`: dark navy/slate regulatory-product styling, restrained blue/cyan accents, a subtle circuit-board motif in the homepage hero only, and no rocket accent.

## Notes

Add durable project facts here as they become clear. Do not add temporary session notes.

## Technical Facts

- Framework: Next.js 15 App Router with React 19 and Tailwind CSS 3.
- Package manager: npm, with `package-lock.json` lockfile version 3.
- Main commands: `npm run dev`, `npm run build`, `npm run lint`, and `npm run test`.
- Deployment target identifiable from config: Cloudflare Workers through OpenNext for Cloudflare and Wrangler.
- Canonical site URL in code: `https://airegready.com`.
- Public contact email in site copy and mailto links: `info@airegready.com`.
- Current homepage route `/` is implemented at `src/app/page.js`.
- `/catalog` is the canonical product/resource catalog route; `/catalog/[slug]` pages preview requestable packages; `/kits` remains as a compatibility route.
- Product/template working drafts live in `content/products/` and are documented as internal drafts, not yet published to the public site.
- The public app uses `public/assets/` for homepage/product visuals; the root `images/` tree contains raw/generated image and logo source candidates.
- Live homepage/catalog v3 visuals use compressed AVIF assets in `public/assets/`; WebP derivatives are retained as fallback/source-ready assets.
- The shared logo is currently implemented in `src/components/Logo.jsx` as an inline blue/cyan shield-check mark with the `AIRegReady` wordmark.
- App icon/manifest assets live in `src/app/icon.svg`, `src/app/apple-icon.png`, and `src/app/manifest.webmanifest`.
- Newsletter signup uses Buttondown through `src/app/api/newsletter/route.js` when `BUTTONDOWN_API_KEY` is configured.
- Catalog preview requests use `src/app/api/preview-request/route.js` with a honeypot, origin check, in-process rate limit, structured logging, and optional webhook forwarding through `PREVIEW_REQUEST_WEBHOOK_URL` / `PREVIEW_REQUEST_WEBHOOK_TOKEN`.
- Optional Cloudflare Web Analytics is enabled through `NEXT_PUBLIC_CF_ANALYTICS_TOKEN`.

## Product/Content Facts

- The site is positioned as a resource catalog and readiness command center, not a generic blog or legal services site.
- The legal boundary is important: educational information and templates only, not legal advice, compliance guarantees, or attorney-client services.
- The catalog/product direction includes AI governance starter resources, acceptable use policy kits, risk assessment tools, vendor review packets, training materials, jurisdiction guides, and regulation trackers.
- Requestable catalog products have public detail/preview pages and hosted preview request forms, but checkout, pricing, and delivery are not implemented yet.
- Old homepage/prototype routes are intentionally preserved under `/preview`; `/front-page-v2` redirects to `/preview/front-page-v2`.
