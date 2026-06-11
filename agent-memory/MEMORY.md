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
- Distribution support now includes `/blog/ai-readiness-checklist-new-business` and `marketing/ai-readiness-checklist-distribution-2026-06-06.md` for founder/new-business AI readiness outreach.
- Solo Builder AI Launch Kit positioning was added on 2026-06-08 for solo founders, indie hackers, freelancers, consultants, no-code builders, app/site builders, micro-SaaS creators, AI automation sellers, digital product creators, productized-service sellers, one-person businesses, and side-gig builders using AI commercially.
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
- Catalog products have public detail pages. Two products are purchasable through Gumroad with instant delivery: the AI Governance Starter Kit at $19 (`https://airegready.gumroad.com/l/kfadzn`) and the Solo Builder AI Launch Kit at $14 (`https://airegready.gumroad.com/l/jhsrhu`, wired 2026-06-09). Other non-roadmap catalog products remain preview-request pages until pricing, checkout, and delivery are wired for those products.
- AI Governance Starter Kit v1.2.0 deliverable exists at `deliverables/ai-governance-starter-kit-v1/` and is a combined 14-document governance + first-pass risk assessment packet, plus a bonus filled example (Small Business First Pass), CSV starter spreadsheets (inventory, risk register, update tracker), and DOCX/PDF versions of the Start Here, README, and legal notice. It includes the original inventory, acceptable use policy, risk intake/impact assessment, and update tracker plus readiness, rollout, tiering, risk register, and review-note tools. Markdown, DOCX, PDF, and ZIP exports exist; the 2026-06-05 rebuild updated Colorado language to SB 26-189 / covered ADMT wording.
- AI Vendor Review Packet v1.1.0 deliverable exists at `deliverables/ai-vendor-review-packet-v1/` (includes a bonus filled example vendor review) with Markdown, DOCX, PDF, and ZIP exports; public catalog metadata describes the packet contents, but it remains preview-only until checkout and delivery are wired.
- Solo Builder AI Launch Kit public product copy exists at `content/products/side-gig-ai-readiness-kit/overview.md`; the internal folder name remains `side-gig-ai-readiness-kit`. The catalog route is `/catalog/solo-builder-ai-launch-kit`; as of 2026-06-09 it is a paid product at $14 through Gumroad (`https://airegready.gumroad.com/l/jhsrhu`) with buy CTAs, purchase metadata, and Offer schema.
- Solo Builder AI Launch Kit v1.1.0 deliverable exists at `deliverables/solo-builder-ai-launch-kit-v1/` (includes CSV starter spreadsheets for the incident log and change log) with Markdown, DOCX, PDF, Start Here, legal notice, and ZIP export at `deliverables/solo-builder-ai-launch-kit-v1.zip`. Product visual assets exist in `public/assets/` as `solo-builder-ai-launch-kit-cover.png`, `solo-builder-ai-launch-kit-thumbnail.png`, and gallery images `solo-builder-ai-launch-kit-gallery-01-overview.png` through `solo-builder-ai-launch-kit-gallery-04-file-formats.png`; the catalog detail page uses gallery-01 as the preview and shows the four-image gallery.
- A free sample page exists at `/free-sample` offering the Starter Kit's AI Use Inventory as direct PDF/DOCX downloads from `public/downloads/` with optional newsletter signup; it is linked from the homepage featured grid, the catalog starter hero, and the Starter Kit detail page.
- The catalog page (`src/app/kits/page.js`, served at `/catalog`) splits non-starter products into featured follow-ons (`featured: true` in `src/lib/marketing.js`: Solo Builder, Acceptable Use Policy Kit, Vendor AI Review Packet), a compact "in development" preview list, and the coming-soon roadmap strip. All available products keep live detail pages.
- The `/regulations/us-state-laws` page has a state-by-state quick-reference table (section id `state-tracker`) summarizing CO, TX, CA, IL, NYC, CT, UT, MD, WA, VA, and NJ from the page's own sourced content; last reviewed 2026-06-09.
- Monetization brainstorm document lives at `ideas-for-future-monetization/monetization-ideas-2026-06-09.md`.
- Old homepage/prototype routes are intentionally preserved under `/preview`; `/front-page-v2` redirects to `/preview/front-page-v2`.
- Dedicated Texas AI regulation guide route exists at `/regulations/texas-ai-regulation`, last reviewed May 18, 2026, covering TRAIGA, Texas public-sector AI laws, privacy/biometrics, synthetic media, financial exploitation, and sector guidance.
- Dedicated K-12 school AI procurement guide exists at `/regulations/k12-ai-procurement`, last reviewed June 11, 2026, covering FERPA/COPPA (2025 amendments)/PPRA, Ohio HB 96 (district AI policies due July 1, 2026), SDPC NDPA contract baseline, the LAUSD AllHere case, district policy/contract-clause/vendor-question guidance, and a pipeline diagram at `public/assets/k12-ai-procurement-pipeline.svg`; `RegulationLayout` now supports an optional `figure` field.
- Blog post `/blog/regulators-ai-made-the-mistake` frames FTC/Texas AI privacy enforcement as a practical claim-review/evidence-file workflow for AIRegReady readers.
- Public support/growth content now includes blog posts for first AI policy, AI use inventory, and first-pass AI risk assessment, each linking into matching discovery pages and the Starter Kit.
- As of the 2026-06-04 regulatory refresh, EU AI Act content reflects the May 2026 Digital Omnibus political agreement timing: transparency duties remain on the August 2, 2026 track; many stand-alone high-risk systems are expected December 2, 2027; product-integrated high-risk systems are expected August 2, 2028, pending formal adoption.
- As of the 2026-06-04 regulatory refresh, Colorado state-law content treats SB 26-189 as the replacement ADMT framework effective January 1, 2027, and treats original SB 24-205 language as historical rather than current compliance guidance.
- Texas TRAIGA/NIST content should frame NIST adoption as a practical enforcement-defense / reasonable-care baseline, not as a blanket safe harbor or compliance guarantee.
- Kit exports are rebuilt with `python3 scripts/export-kit-documents.py JOBFILE` (markdown -> DOCX via python-docx cloning an existing kit DOCX as the style template) followed by `soffice --headless --convert-to pdf`; Solo Builder is landscape, Starter and Vendor are portrait; footers are per-document for the Starter Kit and kit-wide for Solo/Vendor.
- Internal source-mapping notes for the kits live in `deliverables/internal-source-notes/` and must never ship inside customer ZIPs.
- Illinois video-interview law is abbreviated AIVIA consistently across site content and kit documents (standardized 2026-06-09).
- As of 2026-06-09 the homepage is information-first: hero leads with "AI regulations, explained in plain English" and the free assessment; sections run regulation areas -> latest blog analysis -> assessment -> starter guides + free sample -> a quiet "Practical document kits" section (both kits equal, prices shown there only) -> newsletter -> legal boundary. The announcement bar carries content news (currently the state tracker), with quiet Document kits / Run assessment links and no prices.
- The catalog page opens with both paid kits side by side (Solo Builder first) plus a "ten-second comparison" strip; detailed kit contents live on the product detail pages.
- Preview-request notifications (added 2026-06-09): `src/app/api/preview-request/route.js` emails each lead through the Worker `send_email` binding `PREVIEW_REQUEST_EMAIL` (declared in `wrangler.jsonc`) to the address in the `PREVIEW_REQUEST_EMAIL_TO` Workers variable, which must be a verified Email Routing destination; sender defaults to `previews@airegready.com` (override with `PREVIEW_REQUEST_EMAIL_FROM`). Outside Workers (tests, plain node) the email path silently skips. The webhook path is still supported alongside.
