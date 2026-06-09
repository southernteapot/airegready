# TODO

Track current project tasks here.

## Current

- Brian: upload the rebuilt ZIPs to Gumroad - `deliverables/ai-governance-starter-kit-v1.zip` (v1.2.0) to the Starter Kit listing and `deliverables/solo-builder-ai-launch-kit-v1.zip` (v1.1.0) to the Solo Builder listing - then do a test purchase/preview of each to confirm delivery. The vendor packet ZIP (v1.1.0) is ready for whenever that listing is created.
- Brian: optionally announce the free v1.2 content update (bonus filled example + spreadsheets) to existing buyers via Gumroad's update email.
- Wire the Vendor AI Review Packet to Gumroad after Brian creates the product listing and provides the link: add purchase URL, price, Product/Offer schema, buy CTAs, Gumroad description, and delivery QA.
- Brian: finish preview-request email notifications (code shipped 2026-06-09): in the Cloudflare dashboard, add the Workers variable `PREVIEW_REQUEST_EMAIL_TO` set to the Gmail address that is the verified Email Routing destination for support@airegready.com. If a test send reports a sender-verification error, onboard airegready.com under Email Sending in the dashboard. Verify with `npm run smoke:preview-request -- https://airegready.com`. The webhook env vars remain supported as an optional extra path.
- Watch `/free-sample` conversion (sample downloads → Starter Kit sales) and consider a second sample document later.
- Consider next monetization steps from `ideas-for-future-monetization/monetization-ideas-2026-06-09.md` (bundle, paid update subscription, first vertical kit).
- Create Vendor AI Review Packet product visuals for the site and Gumroad after the listing direction is chosen.
- Confirm Cloudflare GitHub auto-deploy status for `master` and document the exact production deploy path if it is active.
- Convert remaining drafted markdown products in `content/products/` to delivery formats such as Word, PDF, and optionally Google Docs. AI Governance Starter Kit v1 has been converted.
- Before product conversion, audit `content/products/` for stale Colorado/EU timing references and align delivery copy with the public SB 26-189 / Digital Omnibus updates.
- Review the professional hybrid homepage refresh in-browser and decide whether the restrained blue/cyan logo and hero treatment should also be applied to social images and older preview pages.
- Decide when to retire older homepage preview routes after the current homepage has been live long enough.
- Verify production newsletter configuration for Buttondown (`BUTTONDOWN_API_KEY`) and Cloudflare analytics token setup if analytics should run.
- Tighten production CSP script handling if the inline theme/bootstrap and JSON-LD strategy is revisited.

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

- 2026-06-05 Starter Kit catalog landing clarity completed: `/catalog` now opens with the AI Governance Starter Kit H1, shows all 14 included resources near the top, and labels lower catalog cards as separate follow-on resources/previews.

- 2026-06-05 Starter Kit gallery integration completed: four product-preview PNGs were added to `public/assets/`, `/catalog` now uses the overview visual, and the Starter Kit product page has a four-image preview gallery.


- 2026-06-05 discovery landing page pass completed: added five buyer-intent guide pages for AI policy, ChatGPT employee rules, AI use inventory, AI risk assessment, and AI governance checklist searches; linked them from the homepage; wired them into sitemap/search; improved the free checklist positioning; added Starter Kit best-for/not-for/first-hour copy; and drafted a LinkedIn/distribution plan under `marketing/`.

- 2026-06-05 SEO support article pass completed: added three practical blog posts for first AI policy, AI use inventory, and first-pass AI risk assessment; registered them in the blog index/feed/sitemap; linked them from matching discovery landing pages; validated rendering with build and browser QA.

- 2026-06-05 Vendor AI Review Packet v1 completed: created a 6-document vendor review deliverable with request email, lite procurement checklist, full vendor risk assessment, scoring guide, red flag list, decision memo, Start Here, legal notice, source notes, DOCX/PDF/Markdown exports, ZIP integrity QA, PDF text/page-count checks, rendered PDF sanity checks, and preview-only catalog metadata update.

- 2026-06-05 memory sync completed: repo memory files and the Obsidian project note were updated to reflect the paid Starter Kit launch work, discovery pages, support articles, product visuals, sitemap submission, Vendor AI Review Packet v1, and AI adoption post bank.

- 2026-06-06 AIRegReady distribution content pass completed: added `/blog/ai-readiness-checklist-new-business`, registered it in the article index/feed/sitemap layer, created `marketing/ai-readiness-checklist-distribution-2026-06-06.md`, and validated with tests, lint, build, and browser QA.

- 2026-06-08 Solo Builder preview-only public wiring completed: added `/catalog/solo-builder-ai-launch-kit` as a preview-request catalog product, added a light homepage mention, updated assessment recommendations for solo commercial AI launch paths, added FAQ entries, and kept purchase URL, price, Gumroad, fake download, and paid Offer/InStock schema absent.

- 2026-06-08 Solo Builder source kit review completed: polished the Markdown deliverables, strengthened claims/data/disclosure/pre-launch worksheets, updated examples, folded useful root-draft material into canonical deliverables, and moved older root-level drafts to `content/products/side-gig-ai-readiness-kit/drafts/legacy/`.

- 2026-06-08 Solo Builder v1 export completed: generated DOCX/PDF/Markdown package at `deliverables/solo-builder-ai-launch-kit-v1/`, created `deliverables/solo-builder-ai-launch-kit-v1.zip`, QA'd PDF page/text/render output and ZIP integrity, and deleted legacy root drafts after export QA.

- 2026-06-08 Solo Builder product visuals completed: created cover, thumbnail, and four gallery PNGs in `public/assets/` for future Gumroad/site use without wiring public purchase metadata.
- 2026-06-09 Solo Builder overview visual refresh completed: replaced `public/assets/solo-builder-ai-launch-kit-gallery-01-overview.png` with a more professional overview using actual rendered first pages from AI Project Snapshot, AI Claims Checklist, and Pre-Launch AI Risk Checklist.

## Later

- 2026-06-08 Solo Builder AI Launch Kit public copy completed: converted the side-gig overview draft into public product content under `content/products/side-gig-ai-readiness-kit/overview.md`, kept the internal folder name for now, and recorded remaining launch work for exports, pricing, checkout, and delivery.

- Add download/delivery pages as needed for the paid document catalog.
- Add trust-building content.
- Add customer examples / case studies when available.
- Add purchase flow once payment/delivery stack is chosen.
