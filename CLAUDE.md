# AIRegReady.com

## What This Is
AIRegReady is a practical AI governance resource business for founders, small teams, schools, consultants, nonprofits, and regulated organizations. It provides educational templates, checklists, playbooks, trackers, jurisdiction guides, and document packages that help teams prepare internal AI governance records. The domain is airegready.com, hosted on Cloudflare.

## Positioning
- **Product business / resource catalog** — not a generic blog homepage
- **Practical AI governance document store** — not legal services
- **Readiness command center** — document AI use, review vendors, train staff, track regulatory topics, and build an internal governance file
- **Plain-English implementation support** for non-enterprise teams
- **Tone**: professional, modern, serious but not cold, trustworthy, plain-English, regulatory/compliance focused
- **Avoid**: legal advice claims, compliance guarantees, attorney-client language, consultant-y language, legalese, buzzwords, aggressive sales copy, generic futurist language, enterprise-consulting bloat

## Current Phase
Post-redesign commercial front page is live. The site is positioned around a resource catalog and product-style AI governance document packages. The catalog has product detail pages for requestable packages and uses hosted preview-request forms until checkout and delivery flows are wired. No exact product prices should be invented unless pricing is explicitly added.

## Site Structure
- **Homepage** — "AI governance documents your team can actually use." CTAs to browse governance resources and take the free readiness assessment
- **Catalog** — `/catalog` is the canonical product/resource catalog; `/catalog/[slug]` pages preview requestable packages; `/kits` remains as a compatibility route
- **Old homepage backup** — `/preview/home-old`
- **Previous prototypes** — `/preview/front-page-v2`, `/preview/home-v3`, `/preview/home-v4`; `/front-page-v2` redirects to the preview route
- **Contact** — `/contact`
- **Resource library** — resources, regulations, comparison, checklist, timeline, glossary, blog
- **AI Readiness Assessment** — interactive 8-question tool with 3-axis scoring (Readiness / Guardrails / Risk), multi-select Q3, and tailored action plans
- **Preview requests** — `/api/preview-request` accepts catalog preview requests with honeypot, origin checks, in-process rate limiting, structured logging, and optional webhook forwarding via `PREVIEW_REQUEST_WEBHOOK_URL` / `PREVIEW_REQUEST_WEBHOOK_TOKEN`
- **Regulatory landscape** — 6 frameworks: EU AI Act, NIST AI RMF, U.S. State AI Laws, Executive Orders & Federal Policy, Sector-Specific Rules, Global AI Governance
- **Blog / guidance** — articles on AI adoption, governance, and regulatory developments
- **FAQ** — common questions about AI readiness and regulation (accordion-style)
- **Catalog products** — AI Governance Starter Kit, Acceptable Use Policy Kit, AI Risk Assessment Toolkit, Vendor AI Review Packet, Incident Response Plan, Training Program Kit, Jurisdiction Guide Library, EU/Colorado readiness kits, school/org kit, founder track, consultant pack
- **Newsletter** — weekly updates on AI resources and regulatory developments
- **Footer** — includes legal disclaimer: content is educational and does not constitute legal advice
- **App icons/manifest** — `src/app/icon.svg`, `src/app/apple-icon.png`, and `src/app/manifest.webmanifest`

## Design System
- **Vibe**: Dark navy premium regulatory technology/product site
- **Background**: Deep navy / slate with white and soft blue surfaces
- **Palette**: navy, slate, white, soft blue, muted teal, restrained amber status accents
- **Cards**: crisp borders, quiet shadows, strong product hierarchy
- **Typography**: Inter/sans-led product typography
- **Logo**: blue/teal shield-check mark in the shared header
- **Navigation**: visible tab is **Catalog**, placed between Blog and FAQ
- **Interactions**: subtle border highlights, quiet shadows, smooth transitions
- **Section labels**: Uppercase, small, accent-colored, letterspaced
- **Layout**: Max content width 1280px, section padding py-24, card borders softened to 60% opacity
- The older warm cream/brown editorial style is obsolete except in preserved old prototypes/backups.

## Tech Stack
- Next.js 15 App Router
- React 19
- Tailwind CSS 3
- Cloudflare Workers/OpenNext (`wrangler.jsonc`, `open-next.config.ts`)
- No database yet (future consideration)

## Privacy & Branding Notes
- Do NOT include any personal name or attorney references on the site
- Use `support@airegready.com` for public contact and mailto links; do not publish personal email addresses
- Catalog preview requests collect email, optional name, organization type, use case, requested package, source page, follow-up preference, and timestamp; keep privacy/legal copy aligned when changing this flow
- WHOIS privacy is enabled on Cloudflare
- Keep all copy neutral — "expert information" not "from an attorney"
- Always include the legal disclaimer that content is not legal advice
- Never promise compliance, never imply legal advice, never imply attorney-client services, and never say resources replace counsel

## Future Roadmap
- Phase 2: Downloadable checklists, templates, and policy starter packs
- Phase 3: Compliance dashboard for companies to track AI systems and obligations
- Phase 4: Semi-automated compliance workflows using AI
- Phase 5 (moonshot): Autonomous Compliance Officer — AI agent that continuously monitors and manages compliance
- Privacy-first architecture: sensitive customer data never leaves their environment

## Related Projects
- ClaimReadyTX — Texas claims site
- SOAHReady — SOAH preparation site
- All follow the "Ready" naming convention

## Commands
- `npm run dev` — local development server
- `npm run build` — production build
- `npm run lint` — ESLint
- `npm run test` — Node test suite
- `npm run smoke:preview-request -- http://127.0.0.1:3000` — POST a sample request to the preview-request endpoint
- Normal publish path: `git push origin master` if Cloudflare GitHub auto-deploy is connected
- Manual deploy path only if needed: `npx opennextjs-cloudflare build` then `npx opennextjs-cloudflare deploy`

## Recent Checkpoint
Commit `7d1ebc0` (`Redesign AIRegReady front page and catalog`) promoted the new homepage, added `/catalog` and `/contact`, preserved old previews, updated the shared shell/style direction, and added product visuals. Validation at that checkpoint: lint, tests, build, local route checks, and Chromium render/overflow checks passed.

Working-tree cleanup on 2026-04-30 replaced the public personal-email mailto with `support@airegready.com`, made catalog CTAs request-preview links, separated coming-soon cards into a roadmap strip, converted the large v3 homepage/catalog PNGs to compressed AVIF/WebP, removed the old PNGs, added app icons/manifest, moved `front-page-v2` under `/preview`, and updated production secondary-route copy/metadata away from the obsolete editorial positioning.

Catalog expansion on 2026-05-01 added `/catalog/[slug]` detail pages for the requestable packages, with product JSON-LD, sitemap/search inclusion, visual previews, audience/contents/use-case sections, and request-preview CTAs. As of 2026-06-05, the AI Governance Starter Kit is purchasable through Gumroad at $19; other available catalog pages remain preview/sales pages without invented prices, checkout, direct downloads, or legal-service claims. Preview CTAs use the hosted `/api/preview-request` form flow instead of public mailto links.

## Loose Cleanup
- Root `images/` exists as local raw/generated source images and is ignored by git. It is not referenced by the app.
- Decide when to retire older preview routes after the new homepage has been live long enough.
