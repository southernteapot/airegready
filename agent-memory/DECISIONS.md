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
Consequences: Future catalog work should either build real `/catalog/[slug]` product/detail/download flows or keep CTAs framed as contact/preview requests. Public contact links should use `info@airegready.com`, not personal email addresses. The original mailto implementation was superseded by the 2026-05-01 hosted preview-request form decision.

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

Use this format:

## YYYY-MM-DD - Decision title

Project/system:
Decision:
Reason:
Consequences:
