# Decisions

Record durable decisions that should affect future work.

## Decision Log

## 2026-04-29 - Adopt professional hybrid visual direction

Project/system: AIRegReady website
Decision: Use a professional hybrid visual direction for the live homepage and shared logo treatment: retain the previous dark navy/slate compliance-site feel, incorporate restrained blue/cyan cues from the ad reference at `images/airegad.png`, keep a subtle circuit motif in the homepage hero only, and omit the rocket.
Reason: Brian liked parts of the ad but, after seeing the whole page in that style, agreed the full ad treatment felt less professional for an AI regulation readiness site.
Consequences: The shared logo, global color tokens, navigation/footer colors, and homepage should stay calm and trust-oriented. Avoid full-page neon/ad styling, rocket imagery, and the all-caps `AI REG READY` wordmark unless Brian explicitly chooses that direction again.

## 2026-04-30 - Keep catalog flow honest until products are wired

Project/system: AIRegReady catalog and product routes
Decision: Keep available catalog package CTAs framed as preview requests, separate coming-soon packages into a roadmap strip, and avoid publishing prices, downloads, or checkout promises until the product delivery stack is implemented.
Reason: The public catalog should not imply completed product pages, downloads, pricing, or legal/compliance outcomes that do not exist yet.
Consequences: Future catalog work should either build real `/catalog/[slug]` product/detail/download flows or keep CTAs framed as contact/preview requests. Public contact links should use `support@airegready.com`, not personal email addresses. The original mailto implementation was superseded by the 2026-05-01 hosted preview-request form decision.

## 2026-04-30 - Put prototype homepages under preview routes

Project/system: AIRegReady App Router routes
Decision: Keep preserved homepage prototypes under `/preview`, with `/front-page-v2` redirecting to `/preview/front-page-v2`.
Reason: Prototype routes can remain useful for rollback/reference, but they should not look like first-class public product routes.
Consequences: New prototypes should be noindex and live under `/preview`. Delete or archive preview routes only when Brian explicitly decides they are no longer needed.

## 2026-05-01 - Use catalog detail pages as the pre-checkout product layer

Project/system: AIRegReady catalog
Decision: Add public `/catalog/[slug]` pages for requestable packages and keep them framed as preview/sales pages until pricing, checkout, and delivery are chosen.
Reason: The catalog needs credible product-level destinations for SEO and conversion, but the business has not committed to a payment/delivery stack or published prices.
Consequences: Product detail pages can describe audience, contents, use cases, preview workflow, and educational boundary. They should not claim direct downloads, published prices, compliance guarantees, or legal services until those capabilities actually exist.

## 2026-05-01 - Use hosted forms for preview requests

Project/system: AIRegReady catalog lead capture
Decision: Replace catalog preview-request mailto links with a hosted `/api/preview-request` form flow that validates package requests, rate-limits submissions, logs structured request data, and optionally forwards to a configured webhook.
Reason: Hosted forms create a clearer conversion path than public mailto links while preserving the current no-pricing/no-checkout boundary.
Consequences: Privacy/legal copy must stay aligned with the collected fields. If durable lead storage or notifications are needed, configure `PREVIEW_REQUEST_WEBHOOK_URL` and optionally `PREVIEW_REQUEST_WEBHOOK_TOKEN`, or replace the log-only fallback with a chosen CRM/contact backend.

## 2026-06-05 - Keep paid and preview catalog states distinct

Project/system: AIRegReady catalog, assessment recommendations, and public contact
Decision: Use `support@airegready.com` for public contact and mailto links. Emit Product/Offer pricing schema only for products with real purchase and delivery wiring, currently the $19 AI Governance Starter Kit through Gumroad. Keep preview-only packages on request-preview CTAs and non-offer product/schema copy until they are actually purchasable.
Reason: The public site now has one real paid product and several preview-request products. Search, assessment, and customer-facing copy need to avoid implying that preview-only products are in stock, priced, or directly downloadable.
Consequences: Future paid products should add explicit purchase metadata before buy CTAs or Offer schema are shown. Preview-only catalog pages can describe contents and collect requests, but should not publish fake prices, downloads, or availability claims. Public support/contact copy should use `support@airegready.com`.


## 2026-06-05 - Combine starter governance and first-pass risk assessment packet

Project/system: AIRegReady paid Starter Kit and catalog positioning
Decision: Expand the paid AI Governance Starter Kit into a combined 14-document governance + first-pass risk assessment packet by adding readiness, rollout, tiering, risk register, and review-note tools. Keep full vendor due diligence positioned as a deeper separate Vendor AI Review Packet.
Reason: The four-document starter kit was useful but too thin for a first paid product. Folding first-pass risk assessment into the starter packet gives buyers a more complete operating file without pretending to replace legal, privacy, security, HR, or regulated-use review.
Consequences: Public Starter Kit copy should describe the expanded packet. The separate risk-assessment catalog item should be treated as an advanced follow-on preview, not as the same basic toolkit duplicated outside the paid kit.

## 2026-06-05 - Avoid stripe-like full-width light bands

Project/system: AIRegReady live homepage and catalog routes
Decision: Keep the production homepage and catalog stack on a continuous dark navy/slate foundation. Use very light surfaces as contained cards/forms instead of full-width sections immediately after dark sections.
Reason: Brian said the hard dark-to-very-light section changes made the site look striped.
Consequences: Future homepage/catalog layout work should use subtle dark gradients or dark slate bands between sections, and reserve pale backgrounds for bounded panels unless Brian explicitly wants a lighter page direction.


## 2026-06-05 - Lead Starter Kit audience with founders and new businesses

Project/system: AIRegReady public positioning and Starter Kit copy
Decision: Lead AI Governance Starter Kit audience language with founders, new business owners, consultants, operators, and people starting or growing AI-enabled businesses. Keep small organizations and lean teams in the audience, but do not make "small teams" the primary buyer identity.
Reason: Brian expects the biggest early market to be individuals starting businesses, not only existing teams.
Consequences: Future Starter Kit, homepage, catalog, and Gumroad-adjacent copy should speak directly to solo founders, new business owners, consultants, and operators while preserving the educational/legal-boundary framing.


## 2026-06-05 - Use dark theme as production default

Project/system: AIRegReady live site theme
Decision: Render production pages with the dark navy/slate theme by default. Keep the existing theme toggle so a visitor can explicitly save light mode, but do not follow OS light preference for new visitors.
Reason: Brian liked the darker front-page direction and wanted the rest of the site to match instead of opening secondary pages in light mode.
Consequences: New production UI should assume dark mode as the default presentation. Light-mode classes can remain for the toggle, but full-width production pages and sections should not rely on light mode as the primary design.


## 2026-06-05 - Lead catalog with Starter Kit contents

Project/system: AIRegReady `/catalog` and `/kits` compatibility page
Decision: Open the catalog page as a Starter Kit-first landing page: the H1 is `AI Governance Starter Kit`, the 14 included resources appear near the top, and lower catalog cards are labeled as separate follow-on resources/previews.
Reason: Brian said the Starter Kit name was too far down the page and the page did not make clear what was included in the kit.
Consequences: Future catalog page edits should keep the paid Starter Kit contents clearly above the fold and avoid making separate preview products look bundled into the purchase.


## 2026-06-05 - Keep guided services as document setup, not consulting

Project/system: AIRegReady services and public positioning
Decision: If Brian offers calls or paid help, frame the service as guided document setup or educational implementation support for filling out AIRegReady packets, not AI compliance consulting, legal advice, or expert advisory services.
Reason: Brian is concerned about overstating his expertise, and the business must preserve the educational-template boundary. A guided setup offer can still be useful without claiming legal or compliance authority.
Consequences: Future service copy should emphasize organizing a working file, filling in inventories/rules/review notes, identifying open questions, and routing legal/privacy/security/procurement issues to qualified reviewers. Avoid titles or claims such as compliance consultant, legal advisor, compliance guarantee, or regulator-ready assessment.


## 2026-06-05 - Prepare Vendor AI Review Packet as second paid product

Project/system: AIRegReady product catalog and deliverables
Decision: Use the Vendor AI Review Packet as the next paid-product candidate after the Starter Kit. A v1.0.0 deliverable now exists locally, but the public catalog remains preview-only until Gumroad checkout, pricing, and delivery are explicitly wired.
Reason: Vendor review is the natural follow-on once buyers inventory AI tools and ask whether a vendor or SaaS AI feature can be approved. It has clearer buyer pain than another basic policy kit and does not cannibalize the Starter Kit.
Consequences: Future public updates can describe the packet contents but must not show buy buttons, Offer schema, in-stock status, or instant download language until the Gumroad product exists and has been QA'd.


## 2026-06-08 - Add side-gig AI readiness as pre-advertising buyer lane

Project/system: AIRegReady positioning, marketing, and product catalog
Decision: Add a Side-Gig AI Readiness lane for solo side-income builders, freelancers, creators, consultants, and people using AI to build sellable products, services, templates, automations, content, apps, courses, or client deliverables. Keep the existing founder/new-business/small-team positioning, but prepare the Side-Gig AI Readiness Kit as the clearer entry offer before paid advertising.
Reason: The first advertised buyer may be a person trying to make a little money with AI while avoiding obvious trouble before selling, publishing, advertising, or taking clients. That buyer has a more concrete anxiety than generic AI governance and needs simpler language than small/medium business compliance positioning.
Consequences: Future marketing should include side-gig language around tools used, data avoided, claims checked, disclosures, human review, platform/client terms, and launch readiness. Do not advertise the kit as purchasable until exports, ZIP QA, pricing, Gumroad copy, and honest checkout/delivery wiring are complete. Vendor AI Review Packet remains the business follow-on offer, not the first ad test.


## 2026-06-08 - Name solo-builder product publicly

Project/system: AIRegReady product content
Decision: Use **Solo Builder AI Launch Kit** as the public product name for the draft stored internally at `content/products/side-gig-ai-readiness-kit/`. Keep "side gig" as audience language only, not the main product name.
Reason: The public name needs to fit solo founders, indie hackers, freelancers, consultants, no-code/app/site builders, micro-SaaS creators, AI automation sellers, digital product creators, productized-service sellers, and one-person businesses without sounding narrow or casual.
Consequences: Future catalog, route, Gumroad, ZIP/export, FAQ, and marketing copy should use Solo Builder AI Launch Kit as the product name and avoid casual public audience labels that narrow or cheapen the offer. The product remains preview-only until pricing, checkout, exports, and delivery are wired honestly.


## 2026-06-08 - Wire Solo Builder as preview-only catalog product

Project/system: AIRegReady catalog, homepage, assessment, and FAQ
Decision: Publish the Solo Builder AI Launch Kit at /catalog/solo-builder-ai-launch-kit as a preview-request / coming-soon catalog product, not a purchasable product. Keep the AI Governance Starter Kit as the only currently wired paid product.
Reason: The marketing path can start before the Solo Builder exports, pricing, checkout, ZIP QA, Gumroad listing, and delivery files are finished, but the site must not imply a fake purchase, instant download, legal advice, or compliance guarantee.
Consequences: Future Solo Builder launch work must add real delivery assets, pricing, checkout metadata, product visuals, and QA before adding purchaseUrl, price, priceCurrency, buy CTAs, Offer/InStock schema, Gumroad copy, or download language.

## 2026-06-08 - Package Solo Builder with Markdown as bonus format

Project/system: AIRegReady Solo Builder AI Launch Kit deliverables
Decision: When the Solo Builder AI Launch Kit is exported, provide DOCX and PDF as the main customer formats and include Markdown as a bonus/source-reference format. Before export, compare the older root-level side-gig draft files against the new `content/products/side-gig-ai-readiness-kit/deliverables/` files; fold in unique useful language and delete redundant old drafts.
Reason: Buyers should get practical editable and readable files first, while Markdown remains useful as an extra source/reference format. The older drafts may still contain useful wording, but the new deliverables folder should become the canonical source set.
Consequences: Future export work should generate all three formats for Solo Builder, keep DOCX/PDF as the main product promise, and clean up redundant root-level draft files only after comparing their content.


## 2026-06-09 - Launch Solo Builder AI Launch Kit as second paid product at $14

Project/system: AIRegReady catalog, homepage, assessment, and product schema
Decision: Wire the Solo Builder AI Launch Kit as a paid product at $14 USD through Gumroad (`https://airegready.gumroad.com/l/jhsrhu`) with buy CTAs, purchase metadata, and Offer schema, after Brian created the Gumroad listing and provided the link.
Reason: The deliverable, ZIP QA, product visuals, and Gumroad listing were complete; the preview-only boundary existed specifically until real checkout and delivery existed.
Consequences: The site now has two paid kits. Public copy, hero proof cards, assessment recommendations, and tests treat Solo Builder as purchasable. Brian should confirm the Gumroad listing delivers `solo-builder-ai-launch-kit-v1.zip` correctly (test purchase or Gumroad preview).

## 2026-06-09 - Split catalog into featured, in-development, and roadmap layers

Project/system: AIRegReady catalog and homepage
Decision: Show only featured follow-on products (Solo Builder, Acceptable Use Policy Kit, Vendor AI Review Packet) as full catalog cards; move the other available preview products into a compact "in development" list; keep the coming-soon roadmap strip. Keep all available products' detail pages and preview-request paths live.
Reason: Twelve preview cards against one or two paid products made the catalog read as over-promised. Detail pages stay live to preserve indexed URLs, sitemap entries, and assessment links.
Consequences: Promote a product to a featured card by setting `featured: true` in `src/lib/marketing.js`. Do not delete in-development detail pages without redirects.

## 2026-06-09 - Offer a real Starter Kit document as a free sample

Project/system: AIRegReady lead generation
Decision: Publish the Starter Kit's AI Use Inventory (PDF + DOCX) as a free, ungated download at `/free-sample` with optional newsletter signup, linked from the homepage, catalog, and Starter Kit page.
Reason: A real document proves quality better than gallery screenshots, feeds the newsletter list, and converts better than preview-request forms for cold visitors.
Consequences: Keep the sample identical to the paid kit document (regenerate it when the kit is updated). Do not add an email gate without updating privacy copy. Future samples should also be real kit documents, not stripped-down teasers.

## 2026-06-09 - Point assessment recommendations at real offers only

Project/system: AIRegReady assessment recommendation engine
Decision: Remap assessment product recommendations so commercial recommendations target the paid kits (Starter, Solo Builder) and the Vendor AI Review Packet preview; replace the Founder AI Governance Track recommendation with the Starter Kit (for providers) and the free checklist (for understand/pilot users); dedupe recommendations by product slug; fix the stale Colorado SB 24-205 framework label to SB 26-189; link the Texas framework card to `/regulations/texas-ai-regulation`.
Reason: Brian wants assessment-takers properly routed to the products actually for sale, and recommendation copy must not cite replaced statutes.
Consequences: Future products should be added to `OFFER_CATALOG` in `src/lib/assessment.js` only when they have an honest CTA (purchase, preview, or free resource). Keep recommendation slugs deduped.

## 2026-06-09 - Kit quality pass: bonus examples, spreadsheets, and packaging cleanup

Project/system: AIRegReady paid kit deliverables (Starter v1.2.0, Solo Builder v1.1.0, Vendor Packet v1.1.0)
Decision: Ship filled examples as uncounted "bonus" documents so the public "14 documents" / "6 documents" claims stay true without regenerating product images; add CSV starter spreadsheets where documents tell buyers to keep records as spreadsheets; remove internal source-mapping notes from customer ZIPs (moved to `deliverables/internal-source-notes/`); fix Starter Kit cross-references to documents not included in the kit; rewrite the Update Tracker examples at small-team scale; reference document names instead of `.md` filenames in buyer-facing guides; standardize the Illinois law abbreviation as AIVIA.
Reason: Brian asked for a full quality pass to make sure buyers get real value. The biggest gaps were trust issues (internal notes shipping to customers, references to missing documents) and missing learn-by-example material.
Consequences: Future kit updates should keep bonus materials clearly labeled as bonus, never ship `internal-source-notes/`, regenerate exports with `scripts/export-kit-documents.py` plus LibreOffice, and bump the README version with an Updated date.

## 2026-06-09 - Reposition homepage as information-first; feature both kits equally in the catalog

Project/system: AIRegReady homepage, catalog, and overall positioning
Decision: Lead the site with regulation information, the free assessment, and free tools. The homepage opens with the regulation library (six framework areas, state tracker, latest blog analysis, assessment, starter guides) and sells quietly in one "Practical document kits" section near the bottom with both kits presented equally. The announcement bar carries content news (no prices) plus quiet Document kits / Run assessment links. The catalog page is the store: it now opens with both paid kits side by side (Solo Builder first, Starter Kit second) and a "ten-second comparison" strip, superseding the 2026-06-05 "Lead catalog with Starter Kit contents" decision.
Reason: Brian wants the site to read as a regulation research resource that happens to sell a few helpful items, not a kit storefront - a commerce-heavy front door scares off the trust-sensitive audience. He also expects the $14 Solo Builder kit to outsell the Starter Kit, so the two kits get equal billing where products are shown.
Consequences: Keep prices and buy CTAs off the homepage hero and announcement bar; the homepage may mention prices only in the document-kits section. Selling hard is fine on /catalog and product detail pages. Featured blog posts on the homepage pull from the newest articles automatically. Detailed kit contents live on the product detail pages, not the catalog top.

Use this format:

## YYYY-MM-DD - Decision title

Project/system:
Decision:
Reason:
Consequences:
