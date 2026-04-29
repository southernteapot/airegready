# Architecture

This file explains the project structure and technical architecture.

## Overview

AIRegReady is a Next.js App Router site for a practical AI governance resource catalog, readiness assessment, regulation guides, blog/guidance content, and future downloadable document products.

## Framework

- Next.js 15 App Router
- React 19
- JavaScript modules with `jsconfig.json` path alias `@/*` to `src/*`
- Tailwind CSS 3 with PostCSS and Autoprefixer
- Node built-in test runner for tests

## Package Manager

- npm
- `package-lock.json` is present with lockfile version 3.

## Commands

- Dev command: `npm run dev` (`next dev`)
- Build command: `npm run build` (`next build`)
- Start command: `npm run start` (`next start`)
- Lint command: `npm run lint` (`eslint . --max-warnings=0`)
- Test command: `npm run test` (`node --experimental-default-type=module --test`)
- Bundle analysis command: `npm run analyze` (`ANALYZE=true next build`)

## Deployment

- Identifiable target: Cloudflare Workers via OpenNext for Cloudflare and Wrangler.
- `wrangler.jsonc` points `main` at `.open-next/worker.js` and serves assets from `.open-next/assets`.
- `open-next.config.ts` configures Cloudflare wrappers/converters for the default server and middleware.
- README/CLAUDE notes say the normal publish path is `git push origin master` if Cloudflare GitHub auto-deploy is connected.
- Whether Cloudflare GitHub auto-deploy is currently connected: Unknown.

## Important Directories

- `src/app/` - Next.js App Router routes, layouts, API routes, metadata, robots, sitemap, feed route, and preview routes.
- `src/components/` - Shared UI components such as navigation, footer, logo, assessment, newsletter, article/regulation layouts, and content sections.
- `src/lib/` - Site data, SEO helpers, search/sitemap/feed builders, assessment logic, marketing data, article records, regulation records, and timeline data.
- `content/products/` - Internal markdown working drafts for paid products/templates. README says these are not published to the public site yet.
- `public/assets/` - Public visual assets used by the site, including homepage/product imagery.
- `public/theme.js` - Early theme bootstrap script loaded by the app layout.
- `tests/` - Node test files for assessment logic/API and SEO/content behavior.
- `.github/workflows/` - GitHub Actions CI workflow.
- `agent-memory/` - Repo-local operational memory for agents.
- `images/` - Raw/generated image and logo source candidates. README/CLAUDE say these are not referenced by the app and were intentionally excluded from the redesign commit.
- Generated/runtime directories present locally: `.next/`, `.open-next/`, `out/`, `.wrangler/`, `.render-checks/`, `node_modules/`.

## Important Config Files

- `package.json` - npm scripts and dependencies.
- `package-lock.json` - npm dependency lockfile.
- `next.config.mjs` - Next config, bundle analyzer integration, security headers, CSP, Cloudflare/Buttondown connect-src entries.
- `open-next.config.ts` - OpenNext Cloudflare runtime configuration.
- `wrangler.jsonc` - Cloudflare Worker entrypoint, compatibility date/flags, and asset binding.
- `tailwind.config.js` - Tailwind content scan and theme token mappings.
- `postcss.config.mjs` - Tailwind and Autoprefixer PostCSS plugins.
- `eslint.config.mjs` - Flat ESLint config extending `next/core-web-vitals` and ignoring build/runtime output.
- `jsconfig.json` - `@/*` import path alias.
- `.github/workflows/ci.yml` - CI on `master` pushes and pull requests; runs `npm ci`, lint, test, and build on Node 20.
- `.gitignore` - Ignores dependencies, Next/OpenNext/Wrangler output, render checks, local env files, logs, and other local artifacts.

## Homepage And Routes

- Current homepage/front page: `src/app/page.js` for route `/`.
- The homepage imports `src/lib/marketing.js` and `src/components/MarketingNewsletter`.
- `/catalog` is the canonical catalog route; `/kits` is retained as a compatibility route.
- Preserved/prototype homepage routes include `/front-page-v2`, `/preview/home-v3`, `/preview/home-v4`, and `/preview/home-old`.
- API routes currently identifiable: `src/app/api/newsletter/route.js` and `src/app/api/assessment-complete/route.js`.
- Feed route: `src/app/feed.xml/route.js`.

## Brand And Design Assets

- Shared logo implementation: `src/components/Logo.jsx`, an inline blue/cyan shield-check mark with `AIRegReady` wordmark text.
- Logo/brand exploration route: `src/app/logos/page.js`.
- Current design direction from docs and styles: professional dark navy/slate regulatory technology/product site with white/soft-blue content panels, restrained blue/cyan accents, and a subtle circuit-board motif limited to the homepage hero.
- Global theme tokens live in `src/app/globals.css` and are mapped in `tailwind.config.js`.
- Fonts loaded in `src/app/layout.js`: Inter and Libre Baskerville from `next/font/google`.
- Public homepage/product assets live in `public/assets/`, including `airegready-home-v3-hero-workspace.png`, `airegready-home-v3-regulation-library.png`, `airegready-home-v3-starter-kit.png`, and several SVG hero/stack/workspace assets.
- Raw/generated logo and image candidates live under `images/` and `images/logos1/` / `images/logos2/`; these are not currently app-referenced according to README/CLAUDE.

## Environment Variables And Services

- `BUTTONDOWN_API_KEY` - used by `src/app/api/newsletter/route.js` to subscribe emails through Buttondown.
- `NEXT_PUBLIC_CF_ANALYTICS_TOKEN` - optionally enables Cloudflare Web Analytics in `src/app/layout.js`.
- `ANALYZE=true` - enables bundle analyzer in `next.config.mjs`.
- External services identifiable from code/config: Buttondown newsletter API, Cloudflare Workers/OpenNext/Wrangler, optional Cloudflare Web Analytics.
