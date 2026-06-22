# AIRegReady

AIRegReady is a Next.js site for practical AI governance resources: templates,
checklists, playbooks, trackers, jurisdiction guides, and document packages for
internal AI governance work.

The site is educational only. It is not a law firm, does not provide legal
advice, and does not guarantee compliance.

## Current Positioning

AIRegReady is now positioned as a professional AI governance resource catalog
and readiness command center, not a generic blog or legal services site.

Primary audiences:
- founders and startups
- small teams
- schools and nonprofits
- consultants
- regulated organizations
- internal operations teams

## Key Routes

- `/` — redesigned commercial homepage
- `/catalog` — full AI governance resource catalog
- `/catalog/[slug]` — product detail/preview pages for requestable packages
- `/kits` — compatibility route for the catalog
- `/assessment` — free readiness assessment
- `/resources` — resource hub
- `/regulations` — AI law/framework guides
- `/compare` — framework comparison
- `/blog` — guidance articles
- `/faq` — FAQ
- `/contact` — contact page
- `/preview/home-old` — backup of the old homepage
- `/preview/front-page-v2`, `/preview/home-v3`, `/preview/home-v4` — noindex
  prototype routes
- `/front-page-v2` — redirects to `/preview/front-page-v2`

## Tech Stack

- Next.js 15 App Router
- React 19
- Tailwind CSS 3
- Cloudflare Workers/OpenNext
- Wrangler

## Development

```bash
npm run dev
```

Local site:

```text
http://localhost:3000
```

## Validation

```bash
npm run lint
npm run test
npm run build
npm run smoke:preview-request -- http://127.0.0.1:3000
```

## Environment

Optional preview-request forwarding:

```bash
PREVIEW_REQUEST_WEBHOOK_URL=
PREVIEW_REQUEST_WEBHOOK_TOKEN=
```

If no webhook URL is configured, `/api/preview-request` still validates,
rate-limits, and logs structured preview requests through the hosting
infrastructure.

For Cloudflare production, store these as secrets rather than committed values:

```bash
npx wrangler secret put PREVIEW_REQUEST_WEBHOOK_URL
npx wrangler secret put PREVIEW_REQUEST_WEBHOOK_TOKEN
```

The webhook receives a JSON payload with the event name, product slug/title/kind,
email, optional name, organization type, use-case note, follow-up preference,
source path, and timestamp. After production secrets are configured, smoke-test
the live endpoint explicitly:

```bash
npm run smoke:preview-request -- https://airegready.com --live
```

## Publishing

Normal publish path:

```bash
git push origin master
```

If Cloudflare GitHub auto-deploy is connected, pushing `master` publishes the
site.

Manual Cloudflare/OpenNext deploy path, only if needed:

```bash
npx opennextjs-cloudflare build
npx opennextjs-cloudflare deploy
```

## Legal Boundary

AIRegReady provides educational information and practical resources. It is not a
law firm and does not provide legal advice. Resources are starting points for
internal governance work and should be reviewed with qualified counsel for
specific legal obligations.

Public contact links should use `support@airegready.com`. Do not add personal email
addresses, personal names, attorney references, legal advice claims, or
compliance guarantees.

## Catalog Status

The catalog is currently a mixed paid/preview flow. The AI Governance Starter
Kit and Solo Builder AI Launch Kit are purchasable through their configured
Gumroad URLs, while other available catalog packages remain preview-request
pages until pricing, checkout, and delivery are explicitly implemented for those
products. Preview forms post to
`/api/preview-request` with a honeypot, origin check, in-process rate limit,
and optional webhook forwarding. Coming-soon items are separated into a roadmap
strip until their contents are ready. Do not invent prices, downloads, checkout
links, or product availability for products that are not actually wired.

## Assets

Primary generated/product assets live in `public/assets`. Live homepage and
catalog v3 visuals use compressed AVIF files, with WebP derivatives retained as
fallback/source-ready assets. The previous large v3 PNGs were removed.

App icon and manifest assets live in `src/app/icon.svg`,
`src/app/apple-icon.png`, and `src/app/manifest.webmanifest`.

## Notes

- The visible navigation uses **Catalog**, not **Kits**.
- `/kits` remains available as a compatibility route.
- Old prototypes are intentionally preserved under `/preview`.
- The root `images/` folder contains unused raw/generated image sources and is
  gitignored.
