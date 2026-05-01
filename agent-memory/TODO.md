# TODO

Track current project tasks here.

## Current

- Confirm Cloudflare GitHub auto-deploy status for `master` and document the exact production deploy path if it is active.
- Decide payment and delivery stack for paid products. `content/products/README.md` names Gumroad, Lemon Squeezy, and Stripe as pending options.
- Wire product detail pages to actual product documents, checkout, and delivery.
- Convert drafted markdown products in `content/products/` to delivery formats such as Word, PDF, and optionally Google Docs.
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

## Later

- Add download/delivery pages as needed for the paid document catalog.
- Add trust-building content.
- Add customer examples / case studies when available.
- Add purchase flow once payment/delivery stack is chosen.
