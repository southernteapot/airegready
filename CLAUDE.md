# AIRegReady.com

## What This Is
AIRegReady is a practical AI governance resource business for founders, solo builders, small teams, schools, consultants, nonprofits, and regulated organizations. It provides educational templates, checklists, playbooks, trackers, jurisdiction guides, and document packages that help people prepare internal AI governance records. The domain is airegready.com, hosted on Cloudflare. The site includes an informational resource library on AI regulations, a free interactive AI Readiness Assessment, and paid/preview document kits.

## Agent Workflow (applies to all agents — Claude Code, Codex, etc.)
This repo has local project memory files. Read them before making meaningful changes:

1. `agent-memory/OBSIDIAN.md`
2. `agent-memory/MEMORY.md`
3. `agent-memory/ARCHITECTURE.md`
4. `agent-memory/DECISIONS.md`
5. `agent-memory/TODO.md`

Rules:
- Preserve existing work unless Brian explicitly asks to replace it.
- Before making major changes, summarize what you found and what you plan to change.
- After coding, update `agent-memory/TODO.md` with remaining tasks.
- Add durable project facts to `agent-memory/MEMORY.md`, decisions to `agent-memory/DECISIONS.md`, structural explanations to `agent-memory/ARCHITECTURE.md`, and short session summaries to `agent-memory/SESSION_LOG.md`.
- Do not dump raw logs into memory files.
- Do not scan Brian's whole Obsidian vault unless explicitly asked.
- Do not invent project facts. If something is unknown, write Unknown or TBD.

## Positioning
- **Product business / resource catalog** — not a generic blog homepage
- **Practical AI governance document store** — not legal services
- **Readiness command center** — document AI use, review vendors, train staff, track regulatory topics, and build an internal governance file
- **Plain-English implementation support** for non-enterprise teams
- **Primary buyer language** leads with founders, new business owners, solo builders, consultants, and operators; small organizations and lean teams are secondary
- **Tone**: professional, modern, serious but not cold, trustworthy, plain-English, regulatory/compliance focused
- **Avoid**: legal advice claims, compliance guarantees, attorney-client language, consultant-y language, legalese, buzzwords, aggressive sales copy, generic futurist language, enterprise-consulting bloat

## Product Status (keep catalog claims honest)
- Two wired paid products, both via Gumroad with Product/Offer pricing schema and buy CTAs:
  - **AI Governance Starter Kit** — $19 (`https://airegready.gumroad.com/l/kfadzn`), a 14-document governance + first-pass risk assessment packet (v1.2.0 adds a bonus filled example and CSV starter spreadsheets).
  - **Solo Builder AI Launch Kit** — $14 (`https://airegready.gumroad.com/l/jhsrhu`), a 14-document solo launch packet (v1.1.0 adds CSV starter spreadsheets; internal folder name `side-gig-ai-readiness-kit`; deliverable at `deliverables/solo-builder-ai-launch-kit-v1/`).
- Kit document counts ("14 documents", "6 documents") are part of public claims and baked into product gallery images — new materials should be labeled **bonus** rather than changing the counts, unless a deliberate re-versioning updates copy and images together.
- Kit exports are rebuilt with `python3 scripts/export-kit-documents.py JOBFILE` (markdown → DOCX, cloning an existing kit DOCX for styles) then `soffice --headless --convert-to pdf`; Solo Builder is landscape, the others portrait. Internal source-mapping notes live in `deliverables/internal-source-notes/` and must never ship inside customer ZIPs.
- All other `/catalog/[slug]` pages are **preview/sales pages only** until pricing, checkout, and delivery are wired for those products. Use hosted preview-request forms or contact CTAs — never fake downloads, invented prices, in-stock claims, or Offer schema for preview-only products.
- **Vendor AI Review Packet** is the next paid-product candidate; a v1.0.0 deliverable exists at `deliverables/ai-vendor-review-packet-v1/` but the public page stays preview-only until Brian creates the Gumroad listing and provides the link.
- A **free sample** (the Starter Kit's AI Use Inventory, PDF + DOCX) is downloadable at `/free-sample` with files in `public/downloads/`; it is a lead magnet with optional newsletter signup, no email gate.
- The catalog page splits non-purchasable products into featured follow-ons (`featured: true` in `src/lib/marketing.js`), a compact "in development" preview list, and a coming-soon roadmap strip. Detail pages stay live for all available products.
- Future paid products must add real purchase/delivery metadata before buy CTAs or Offer schema appear.
- If guided services are ever offered, frame them as guided document setup / educational implementation support, never compliance consulting, legal advisory, or expert advisory services.

## Site Structure
- **Homepage** — Starter-Kit-first commercial page; CTAs to the $19 kit, the catalog, and the free readiness assessment
- **Catalog** — `/catalog` is the canonical product/resource catalog and opens with the AI Governance Starter Kit H1 and its 14 included documents; `/catalog/[slug]` detail pages cover the 13 packages (product JSON-LD, galleries, audience/contents/use-case sections); `/kits` remains as a compatibility route
- **Discovery landing pages** (buyer-intent SEO) — `/ai-policy-template-small-business`, `/chatgpt-policy-for-employees`, `/ai-use-inventory-template`, `/ai-risk-assessment-template`, `/ai-governance-checklist`; they funnel visitors to the free checklist and paid Starter Kit; data in `src/lib/discovery-pages.js`
- **AI Readiness Assessment** — `/assessment`, interactive multi-question tool with 3-axis scoring (Readiness / Guardrails / Risk) and tailored action plans; logic in `src/lib/assessment.js`. Product recommendations center on the paid kits (Starter, Solo Builder) plus the Vendor Packet, free checklist, and free state guides — keep recommendation targets aligned with what is actually purchasable
- **Free sample** — `/free-sample`, direct download of the Starter Kit's AI Use Inventory (PDF/DOCX from `public/downloads/`) with optional newsletter signup
- **Resource library** — `/resources`, `/regulations`, `/compare`, `/checklist`, `/timeline`, `/glossary`, `/search`, `/blog`
- **Regulatory landscape** — 6 framework areas: EU AI Act, NIST AI RMF, U.S. State AI Laws, Executive Orders & Federal Policy, Sector-Specific Rules, Global AI Governance; plus a dedicated `/regulations/texas-ai-regulation` guide
- **Blog** — ~37 articles in `src/lib/articles/` (one file per article plus `index.js`), registered in `src/lib/data.js` `BLOG_POSTS`, the feed (`/feed.xml`), search, and sitemap
- **Contact** — `/contact`
- **FAQ** — accordion-style, content in `src/lib/data.js`
- **Preview requests** — `/api/preview-request` accepts catalog preview requests with honeypot, origin checks, in-process rate limiting, structured logging, and optional webhook forwarding via `PREVIEW_REQUEST_WEBHOOK_URL` / `PREVIEW_REQUEST_WEBHOOK_TOKEN`
- **Newsletter** — Buttondown via `/api/newsletter` (`BUTTONDOWN_API_KEY`)
- **Old prototypes** — preserved under `/preview/home-old`, `/preview/front-page-v2`, `/preview/home-v3`, `/preview/home-v4`; `/front-page-v2` redirects to `/preview/front-page-v2`; new prototypes should be noindex under `/preview`
- **Footer** — includes legal disclaimer: content is educational and does not constitute legal advice
- **App icons/manifest** — `src/app/icon.svg`, `src/app/apple-icon.png`, `src/app/manifest.webmanifest`

## Repo Layout (beyond src/)
- `src/lib/` — site data (`data.js`), catalog/product data (`marketing.js`), SEO helpers (`seo.js`), assessment logic, discovery pages, articles, regulations, search/timeline data
- `content/products/` — ~75 internal markdown product drafts; NOT published to the site; `side-gig-ai-readiness-kit/` holds the Solo Builder source deliverables
- `deliverables/` — customer-ready export packages (DOCX/PDF/Markdown/ZIP) for the Starter Kit, Vendor Review Packet, and Solo Builder kit
- `marketing/` — distribution plans, post banks, and positioning notes
- `agent-memory/` — repo-local agent memory (see Agent Workflow above)
- `public/assets/` — compressed public visuals used by live UI (AVIF/WebP/PNG); keep live UI pointed here
- `images/` — raw/generated source images; local-only, gitignored, not referenced by the app
- `tests/` — Node test files (assessment logic/API, preview-request API, SEO/content behavior)
- `scripts/` — smoke-test utilities

## Design System
- **Vibe**: dark navy premium regulatory technology/product site; dark theme is the production default (toggle can persist an explicit light choice, but don't follow OS light preference for new visitors)
- **Background**: continuous deep navy/slate foundations; avoid full-width light bands directly after dark sections ("striping") — keep pale surfaces inside bounded cards/forms
- **Palette**: navy, slate, white, soft blue, muted teal, restrained amber status accents
- **Cards**: crisp borders, quiet shadows, strong product hierarchy
- **Typography**: Inter-led product typography (Libre Baskerville also loaded)
- **Logo**: inline blue/teal shield-check mark with wordmark in `src/components/Logo.jsx`
- **Navigation**: visible tab is **Catalog**, placed between Blog and FAQ
- **Section labels**: uppercase, small, accent-colored, letterspaced
- **Layout**: max content width 1280px, section padding py-24, card borders softened to 60% opacity
- The older warm cream/brown editorial style is obsolete except in preserved `/preview` prototypes.

## Tech Stack
- Next.js 15 App Router, React 19, JavaScript (no TypeScript app code), `@/*` alias to `src/*`
- Tailwind CSS 3
- Cloudflare Workers via OpenNext (`wrangler.jsonc`, `open-next.config.ts`)
- Node built-in test runner
- Security headers and CSP set in `next.config.mjs`
- No database yet (future consideration)

## Commands
- `npm run dev` — local development server
- `npm run build` — production build
- `npm run lint` — ESLint (`--max-warnings=0`)
- `npm run test` — Node test suite
- `npm run smoke:preview-request -- http://127.0.0.1:3000` — POST a sample request to the preview-request endpoint
- `npm run analyze` — bundle analysis build
- Normal publish path: `git push origin master` (Cloudflare GitHub auto-deploy; confirm status if uncertain)
- Manual deploy path only if needed: `npx opennextjs-cloudflare build` then `npx opennextjs-cloudflare deploy`

## Validation
Run the narrowest useful checks for small edits. For user-facing route, metadata, schema, or shared-component changes, prefer:

```bash
npm run lint
npm run test
npm run build
git diff --check
```

## Privacy & Branding Notes
- Do NOT include any personal name or attorney references on the site
- Use `support@airegready.com` for public contact and mailto links; do not publish personal email addresses
- The preview request flow posts to `/api/preview-request`, not a public mailbox; it collects email, optional name, organization type, use case, requested package, source page, follow-up preference, and timestamp — keep privacy/legal copy aligned when changing this flow
- WHOIS privacy is enabled on Cloudflare
- Keep all copy neutral — "expert information" not "from an attorney"
- Always include the legal disclaimer that content is not legal advice
- Never promise compliance, never imply legal advice, never imply attorney-client services, and never say resources replace counsel

## Regulatory Content Accuracy
- Verify EO/statute citations against primary sources before publishing
- EU AI Act content reflects the May 2026 Digital Omnibus political agreement: transparency duties stay on the August 2, 2026 track; many stand-alone high-risk systems expected December 2, 2027; product-integrated high-risk systems expected August 2, 2028, pending formal adoption
- Colorado content treats SB 26-189 as the replacement ADMT framework (effective January 1, 2027); original SB 24-205 language is historical only
- Texas TRAIGA/NIST content frames NIST adoption as a practical enforcement-defense / reasonable-care baseline, not a blanket safe harbor or compliance guarantee

## Future Roadmap
- Phase 2: more downloadable checklists, templates, and policy starter packs (in progress — first paid kit live)
- Phase 3: compliance dashboard for companies to track AI systems and obligations
- Phase 4: semi-automated compliance workflows using AI
- Phase 5 (moonshot): Autonomous Compliance Officer — AI agent that continuously monitors and manages compliance
- Privacy-first architecture: sensitive customer data never leaves their environment

## Related Projects
- ClaimReadyTX — Texas claims site
- SOAHReady — SOAH preparation site
- All follow the "Ready" naming convention

## Recent Checkpoint
As of 2026-06-09: the $19 AI Governance Starter Kit and $14 Solo Builder AI Launch Kit are both live on Gumroad; the catalog separates featured follow-ons from an in-development list and roadmap; `/free-sample` offers the AI Use Inventory as a free download; the U.S. state AI laws page has a state-by-state quick-reference table; assessment recommendations were remapped to the real paid kits, the free checklist, and free state guides. A kit quality pass rebuilt all three deliverables (Starter v1.2.0, Solo v1.1.0, Vendor v1.1.0) with bonus filled examples, CSV starter spreadsheets, fixed cross-references, and internal notes removed from customer ZIPs — Brian needs to upload the rebuilt ZIPs to Gumroad. The Vendor AI Review Packet is the next product to wire once Brian creates the Gumroad listing. Monetization brainstorm lives in `ideas-for-future-monetization/`. See `agent-memory/TODO.md` and `agent-memory/DECISIONS.md` for current tasks and decision history.

## Loose Cleanup
- Root `images/` exists as local raw/generated source images and is ignored by git; not referenced by the app
- Decide when to retire older preview routes after the new homepage has been live long enough
