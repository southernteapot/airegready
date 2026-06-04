# TODO

Track current project tasks here.

## Current

- Confirm Cloudflare GitHub auto-deploy status for `master` and document the exact production deploy path if it is active.
- Create a Gumroad product for the first paid AI Governance Starter Kit test sale. Use Lemon Squeezy as Plan B and Stripe Payment Link + manual email only as fallback. After the payment URL exists, add the purchase URL and $19 paid-test CTA to the catalog/product pages.
- After a payment link exists, wire the AI Governance Starter Kit detail/card CTAs to purchase while keeping preview/contact as secondary; do not expose a public direct ZIP download.
- Convert remaining drafted markdown products in `content/products/` to delivery formats such as Word, PDF, and optionally Google Docs. AI Governance Starter Kit v1 has been converted.
- Configure `PREVIEW_REQUEST_WEBHOOK_URL` / `PREVIEW_REQUEST_WEBHOOK_TOKEN` or choose another durable CRM/contact backend for preview request notifications, then verify with `npm run smoke:preview-request -- https://airegready.com --live`.
- Review the professional hybrid homepage refresh in-browser and decide whether the restrained blue/cyan logo and hero treatment should also be applied to social images and older preview pages.
- Decide when to retire older homepage preview routes after the current homepage has been live long enough.
- Verify production newsletter configuration for Buttondown (`BUTTONDOWN_API_KEY`) and Cloudflare analytics token setup if analytics should run.
- Tighten production CSP script handling if the inline theme/bootstrap and JSON-LD strategy is revisited.
- Connect this repo-local memory to the Obsidian project note.

## Confirmed

- Actual tech stack and project structure were inspected and documented on 2026-04-25.
- Current homepage/front page is `src/app/page.js`.
- Current homepage direction is the commercial AI governance resource catalog/readiness command center.
- Current visible brand direction is the professional dark navy/slate product site with restrained blue/cyan accents, a subtle homepage circuit motif, and an inline shield-check `AIRegReady` logo treatment.
- 2026-04-30 audit follow-up completed: assessment offer emails use `info@airegready.com`, catalog cards use honest preview-request CTAs, coming-soon catalog items are separated into a roadmap strip, the 404 no longer advertises a missing Ctrl+K shortcut, mobile nav closes on link click and includes a primary assessment CTA, and homepage/catalog `next/image` usages now include `sizes`.
- 2026-04-30 asset cleanup completed: the large v3 PNG homepage/catalog assets were replaced in live and v3 preview routes with compressed AVIF derivatives; WebP derivatives were generated as fallback assets; the old tracked PNGs were removed.
- 2026-04-30 secondary-route cleanup completed: About, Resources, FAQ copy, Legal, Checklist, Glossary, Compare, Search, Timeline, Assessment, and 404 were moved away from obsolete serif/editorial presentation where they affect production routes. `/logos` was removed from sitemap/search metadata, marked noindex, and static utility pages no longer inherit article last-modified dates.
- 2026-04-30 follow-up cleanup completed: catalog ItemList/Product JSON-LD was added without inventing prices, FAQ answers no longer use the 480px open-height cap, MarketingNewsletter has a noscript fallback, homepage dense-card headings were demoted, app icon/manifest files were added, explicit product `kind` values were added, and `/front-page-v2` now redirects to `/preview/front-page-v2`.
- 2026-05-01 catalog expansion completed: `/catalog/[slug]` pages now exist for the 9 requestable packages with product JSON-LD, search/sitemap inclusion, visual previews, use-case sections, and request-preview CTAs.
- 2026-05-01 preview-request flow completed: catalog preview CTAs now point to hosted request forms backed by `/api/preview-request` with honeypot, origin checks, in-process rate limiting, structured logs, and optional webhook forwarding.
- 2026-05-08 EU Digital Omnibus update completed: added `/blog/eu-ai-act-digital-omnibus-agreement` covering the May 7, 2026 political agreement, updated high-risk AI Act timelines, formal-adoption caveat, and practical readiness steps.
- 2026-05-18 blog update completed: added `/blog/colorado-sb26-189-admt-rewrite` and `/blog/ai-companion-chatbot-laws` covering the Colorado ADMT rewrite and the state companion-chatbot regulation trend.

- 2026-05-18 Texas AI regulation guide completed: added `/regulations/texas-ai-regulation` with sourced coverage of TRAIGA, public-sector AI governance, training, privacy/biometrics, synthetic media, financial exploitation, and sector guidance.
- 2026-05-25 blog update completed: added `/blog/regulators-ai-made-the-mistake` covering AI-generated claims, FTC active-listening enforcement, Texas WhatsApp privacy litigation, and practical claim-review files.

- 2026-06-04 blog update completed: added `/blog/when-ai-generated-images-are-illegal` covering AI-generated images, Texas bestiality/obscenity context, AI-CSAM enforcement, nonconsensual intimate deepfakes, and jurisdiction differences.

- 2026-06-04 blog update completed: added `/blog/white-house-ai-cybersecurity-order` and `/blog/agentic-ai-security-guidance` covering the June 2026 White House AI cybersecurity order, the AI cybersecurity clearinghouse, frontier-model cyber review, and agentic AI security controls.

## Later

- Add download/delivery pages as needed for the paid document catalog.
- Add trust-building content.
- Add customer examples / case studies when available.
- Add purchase flow once payment/delivery stack is chosen.
