# Memory

This file contains durable project facts for coding agents.

## Project

AIRegReady is a website and document/template business focused on AI regulation readiness, compliance materials, checklists, policies, and jurisdiction-specific kits.

## Current Known Direction

The site should look professional, trustworthy, and polished. It is aimed first at people starting or growing businesses with AI, including founders, new business owners, consultants, and operators, while still serving established businesses that need practical AI readiness materials.

As of 2026-04-29, the visible brand direction is a professional hybrid of the previous site and the ad reference at `images/airegad.png`: dark navy/slate regulatory-product styling, restrained blue/cyan accents, a subtle circuit-board motif in the homepage hero only, and no rocket accent.

## Notes

Add durable project facts here as they become clear. Do not add temporary session notes.

## Technical Facts

- Framework: Next.js 15 App Router with React 19 and Tailwind CSS 3.
- Package manager: npm, with `package-lock.json` lockfile version 3.
- Main commands: `npm run dev`, `npm run build`, `npm run lint`, and `npm run test`.
- Deployment target identifiable from config: Cloudflare Workers through OpenNext for Cloudflare and Wrangler.
- Canonical site URL in code: `https://airegready.com`.
- Public contact email in site copy and mailto links: `support@airegready.com`.
- Current homepage route `/` is implemented at `src/app/page.js`.
- `/catalog` is the canonical product/resource catalog route; `/catalog/[slug]` pages preview requestable packages; `/kits` remains as a compatibility route.
- Product/template working drafts live in `content/products/` and are documented as internal drafts, not yet published to the public site.
- The public app uses `public/assets/` for homepage/product visuals; the root `images/` tree contains raw/generated image and logo source candidates.
- Discovery landing pages now exist for `/ai-policy-template-small-business`, `/chatgpt-policy-for-employees`, `/ai-use-inventory-template`, `/ai-risk-assessment-template`, and `/ai-governance-checklist`; they funnel search visitors toward the free checklist and paid Starter Kit.
- Marketing/distribution planning files now exist under `marketing/`, including `discovery-plan-2026-06-05.md` and `ai-adoption-post-bank-2026-06-05.md` for ready-to-post AI adoption content.
- Brian submitted the sitemap to Google Search Console on 2026-06-05 after the discovery pages and product gallery work were pushed.
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
- Catalog products have public detail pages. The AI Governance Starter Kit is purchasable through Gumroad at $19 with instant Gumroad delivery; other non-roadmap catalog products remain preview-request pages until pricing, checkout, and delivery are wired for those products.
- AI Governance Starter Kit v1.1.0 deliverable exists at `deliverables/ai-governance-starter-kit-v1/` and is now a combined 14-document governance + first-pass risk assessment packet. It includes the original inventory, acceptable use policy, risk intake/impact assessment, and update tracker plus readiness, rollout, tiering, risk register, and review-note tools. Markdown, DOCX, PDF, and ZIP exports exist; the 2026-06-05 rebuild updated Colorado language to SB 26-189 / covered ADMT wording.
- AI Vendor Review Packet v1.0.0 deliverable exists at `deliverables/ai-vendor-review-packet-v1/` with Markdown, DOCX, PDF, and ZIP exports; public catalog metadata describes the packet contents, but it remains preview-only until checkout and delivery are wired.
- Old homepage/prototype routes are intentionally preserved under `/preview`; `/front-page-v2` redirects to `/preview/front-page-v2`.
- Dedicated Texas AI regulation guide route exists at `/regulations/texas-ai-regulation`, last reviewed May 18, 2026, covering TRAIGA, Texas public-sector AI laws, privacy/biometrics, synthetic media, financial exploitation, and sector guidance.
- Blog post `/blog/regulators-ai-made-the-mistake` frames FTC/Texas AI privacy enforcement as a practical claim-review/evidence-file workflow for AIRegReady readers.
- Public support/growth content now includes blog posts for first AI policy, AI use inventory, and first-pass AI risk assessment, each linking into matching discovery pages and the Starter Kit.
- As of the 2026-06-04 regulatory refresh, EU AI Act content reflects the May 2026 Digital Omnibus political agreement timing: transparency duties remain on the August 2, 2026 track; many stand-alone high-risk systems are expected December 2, 2027; product-integrated high-risk systems are expected August 2, 2028, pending formal adoption.
- As of the 2026-06-04 regulatory refresh, Colorado state-law content treats SB 26-189 as the replacement ADMT framework effective January 1, 2027, and treats original SB 24-205 language as historical rather than current compliance guidance.
- Texas TRAIGA/NIST content should frame NIST adoption as a practical enforcement-defense / reasonable-care baseline, not as a blanket safe harbor or compliance guarantee.
