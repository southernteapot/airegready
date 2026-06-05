# TODO

Track current project tasks here.

## Current

- Confirm Cloudflare GitHub auto-deploy status for `master` and document the exact production deploy path if it is active.
- Convert remaining drafted markdown products in `content/products/` to delivery formats such as Word, PDF, and optionally Google Docs. AI Governance Starter Kit v1 has been converted.
- Before product conversion, audit `content/products/` for stale Colorado/EU timing references and align delivery copy with the public SB 26-189 / Digital Omnibus updates.
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
- 2026-04-30 audit follow-up completed: assessment offer emails use `support@airegready.com`, catalog cards use honest preview-request CTAs, coming-soon catalog items are separated into a roadmap strip, the 404 no longer advertises a missing Ctrl+K shortcut, mobile nav closes on link click and includes a primary assessment CTA, and homepage/catalog `next/image` usages now include `sizes`.
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

- 2026-06-04 regulatory refresh completed: updated EU AI Act / Digital Omnibus timing, Colorado SB 26-189 ADMT replacement language, U.S. state AI law patchwork guidance, NIST/Texas TRAIGA references, glossary entries, compare page, and related SEO/content tests.
- 2026-06-05 regulatory consistency cleanup completed: public articles now frame Colorado SB 24-205 and pre-agreement EU Digital Omnibus posts as historical where needed, route readers to SB 26-189 / May 7 Digital Omnibus guidance, and review-date tests expect 2026-06-05.
- 2026-06-05 first paid product wiring completed: Gumroad AI Governance Starter Kit link `https://airegready.gumroad.com/l/kfadzn` is attached to the starter kit product metadata, catalog card CTA, product detail CTA, and Product/Offer JSON-LD at $19 USD while preview request remains secondary.
- 2026-06-05 AI Governance Starter Kit ZIP QA/rebuild completed: customer archive contains the advertised DOCX, PDF, Markdown, Start Here, and legal notice files; ZIP integrity passed; PDFs were regenerated through HTML-rendered Markdown; Colorado references were updated to SB 26-189 / covered ADMT language.
- 2026-06-05 first-sale lift completed: homepage primary CTAs point to the $19 AI Governance Starter Kit, product detail page includes a concrete "What you get" section, and launch article `/blog/ai-governance-starter-kit-launch` announces the paid kit.
- 2026-06-05 catalog consistency cleanup completed: live Starter Kit copy matched the paid kit, preview-only products no longer emitted fake Offer/InStock schema, assessment recommendations pointed to real catalog/guide routes, Gumroad listing availability returned HTTP 200, and public contact copy used `support@airegready.com`.

- 2026-06-05 public 200px logo asset completed: generated `public/assets/airegready-logo-200.png` from the current shield-check mark as a 200x200 RGB PNG with flat brand colors and no transparent padding.

- 2026-06-05 Starter Kit expansion completed: the paid packet was expanded into a 14-document governance + first-pass risk assessment bundle with readiness, rollout, tiering, risk register, and review-note tools.

- 2026-06-05 visual stripe cleanup completed: homepage, catalog, and catalog detail pages now use continuous dark/slate section foundations with light surfaces kept inside cards/forms.

- 2026-06-05 Starter Kit buyer-positioning update completed: public copy now leads with founders, new business owners, consultants, operators, and people starting or growing AI-enabled businesses while keeping small organizations as a secondary audience.

- 2026-06-05 dark-default production theme completed: root HTML now starts in dark mode, the theme bootstrap defaults unsaved visitors to dark rather than OS preference, and the toggle still persists an explicit light choice.

## Later

- Add download/delivery pages as needed for the paid document catalog.
- Add trust-building content.
- Add customer examples / case studies when available.
- Add purchase flow once payment/delivery stack is chosen.
