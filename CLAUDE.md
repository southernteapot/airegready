# AIRegReady.com

## What This Is
AIRegReady is an AI compliance resource website. It provides expert regulatory guidance, a free interactive risk assessment tool, and (eventually) paid compliance tracking tools. The domain is airegready.com, hosted on Cloudflare.

## Current Phase
Phase 1 — content site with a free risk assessment tool. No paid features yet. This is a side project.

## Site Structure
- **Hero section** — value proposition, CTAs to risk assessment and guide
- **Compliance Guide** — covers 6 regulatory frameworks: EU AI Act, NIST AI RMF, U.S. State AI Laws, Executive Orders & Federal Policy, Sector-Specific Rules, Global AI Governance
- **AI Compliance Risk Assessment** — interactive 7-question tool that calculates risk level (Low/Moderate/High/Critical) and identifies applicable regulations
- **Blog / Insights** — articles analyzing AI regulations, enforcement trends, compliance strategies
- **FAQ** — common questions about AI compliance (accordion-style)
- **Tools teaser** — previews of future paid tools: Compliance Tracker, Policy Generator, Regulatory Alerts
- **Newsletter signup** — email capture for weekly AI compliance updates
- **Footer** — includes legal disclaimer: "Content is educational and does not constitute legal advice"

## Design System
- **Vibe**: Sharp and professional — law firm meets tech
- **Background**: Dark charcoal (#16171c), NOT pure black
- **Accent color**: Gold (#c8a46e) with lighter gold (#e8d5a8) for gradients
- **Card backgrounds**: rgba(255,255,255,0.025) with subtle borders
- **Fonts**: Playfair Display (serif, headings) + DM Sans (sans-serif, body)
- **Interactions**: Gold border highlights on hover, subtle transitions
- **Section labels**: Uppercase, small, gold, letterspaced

## Tech Stack
- Next.js
- Deploy to Cloudflare Pages
- No database yet (future consideration)

## Privacy & Branding Notes
- Do NOT include any personal name or attorney references on the site
- WHOIS privacy is enabled on Cloudflare
- Keep all copy neutral — "expert guidance" not "from an attorney"
- Always include the legal disclaimer that content is not legal advice

## Future Roadmap
- Phase 2: Compliance dashboard for companies to track AI systems and obligations
- Phase 3: Semi-automated compliance workflows using AI
- Phase 4 (moonshot): Autonomous Compliance Officer — AI agent that continuously monitors and manages compliance
- Privacy-first architecture: sensitive customer data never leaves their environment

## Related Projects
- ClaimReadyTX — Texas claims site
- SOAHReady — SOAH preparation site
- All follow the "Ready" naming convention

## Commands
- `npm run dev` — local development server
- `npm run build` — production build
- Deploy via Cloudflare Pages
