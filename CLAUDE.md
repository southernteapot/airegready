# AIRegReady.com

## What This Is
AIRegReady is an AI resource hub for businesses. It provides frameworks, assessments, plain-English regulatory breakdowns, and practical information for startups, small businesses, and anyone using AI in the real world. The domain is airegready.com, hosted on Cloudflare.

## Positioning
- **Informational resource hub first** — not a sales funnel, not a compliance-only tracker, not an AI hype site
- **Broad audience** — businesses adopting AI, startups, small businesses, teams, individuals
- **Regulation is a supporting pillar**, not the whole identity
- **Tone**: calm, trustworthy, plain English, anti-hype, practical, informational
- **Avoid**: consultant-y language, legalese, buzzwords, aggressive sales copy, generic futurist language, enterprise-consulting bloat

## Current Phase
Phase 1 — free informational resource site with assessments, regulatory guides, and blog content. No paid features yet. This is a side project.

## Site Structure
- **Hero** — "AI Resources for Real-World Use" with CTAs to assessment and resource library
- **Orientation section** — what the site covers (use cases, guardrails, risks, next steps)
- **Differentiation** — not hype, not legalese, practical information
- **Resource library** — 4 pillars: Frameworks, Checklists (coming soon), Templates (coming soon), Regulations
- **AI Readiness Assessment** — interactive 7-question tool covering both readiness and regulatory exposure
- **Regulatory landscape** — 6 frameworks: EU AI Act, NIST AI RMF, U.S. State AI Laws, Executive Orders & Federal Policy, Sector-Specific Rules, Global AI Governance
- **Blog / guidance** — articles on AI adoption, governance, and regulatory developments
- **FAQ** — common questions about AI readiness and regulation (accordion-style)
- **Tools teaser** — previews of future resources: templates, implementation guides, regulatory alerts
- **Newsletter** — weekly updates on AI resources and regulatory developments
- **Footer** — includes legal disclaimer: "Content is educational and does not constitute legal advice"

## Design System
- **Vibe**: Warm, professional, approachable — credible but not corporate
- **Background**: Warm cream (#F1E9DC)
- **Surfaces/cards**: Off-white (#FFFDF8) with warm borders (#D8CCBE)
- **Primary text**: Dark charcoal (#20262B)
- **Secondary text**: Muted gray (#646A6F)
- **Accent / CTA**: Warm brown (#9E7A56) with lighter (#B8956E) and darker (#86653F) variants
- **Accent text** (on accent backgrounds): Warm white (#FFF9F2)
- **Fonts**: Playfair Display (serif, headings) + DM Sans (sans-serif, body)
- **Interactions**: Accent border highlights on hover, subtle shadows, smooth transitions
- **Section labels**: Uppercase, small, accent-colored, letterspaced

## Tech Stack
- Next.js
- Deploy to Cloudflare Pages
- No database yet (future consideration)

## Privacy & Branding Notes
- Do NOT include any personal name or attorney references on the site
- WHOIS privacy is enabled on Cloudflare
- Keep all copy neutral — "expert information" not "from an attorney"
- Always include the legal disclaimer that content is not legal advice

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
- Deploy via Cloudflare Pages
