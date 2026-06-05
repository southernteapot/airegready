# AIRegReady Paid Test Sale — Payment and Delivery Recommendation

Product: AI Governance Starter Kit v1  
Customer ZIP: `deliverables/ai-governance-starter-kit-v1.zip`  
Canonical sales route: `/catalog/ai-governance-starter-kit`  
Recommended first-test price: `$19`

## Recommendation

Use **Gumroad first** for the first paid test sale.

Why: it is the fastest sane path from existing ZIP to a paid downloadable product. Gumroad can host the ZIP, provide a checkout link, handle customer file delivery, and currently says it is merchant of record for taxes. That avoids building a checkout, delivery page, account system, private download protection, tax handling, refund tooling, and receipt flow before Brian has proven that anyone will buy the thing.

The core rule: **sell the ZIP through the payment platform; do not expose an unprotected public ZIP URL on AIRegReady.** The AIRegReady site should point to the hosted payment/product link after Brian creates it.

## Payment path comparison

### 1. Gumroad — recommended first choice

Current public pricing page reviewed during this task: Gumroad states **10% + $0.50** per direct/profile transaction and says it is a merchant of record handling sales tax obligations. At a `$19` price, the simple platform-fee math is about `$2.40`, leaving about `$16.60` before any other edge-case adjustments.

Best for:

- Fastest paid test.
- Hosted digital delivery with the ZIP attached.
- Simple product page without site engineering.
- Avoiding tax/VAT setup complexity for the first sale.
- Lower operational risk than manual delivery.

Tradeoff:

- Higher fee than Lemon Squeezy or plain Stripe.
- Less polished than a custom AIRegReady checkout.

Verdict: **Use this unless Gumroad blocks the product or account setup becomes annoying.**

### 2. Lemon Squeezy — good alternative if Brian prefers it

Current public pricing page reviewed during this task: Lemon Squeezy states **5% + $0.50** ecommerce pricing, says it supports digital downloads with signed/throttled links, no-code checkout links, major payment methods, and merchant-of-record tax/VAT handling. At a `$19` price, the simple platform-fee math is about `$1.45`, leaving about `$17.55` before any additional payment-specific fees.

Best for:

- Similar hosted delivery + checkout model.
- Better stated base fee than Gumroad.
- More software/SaaS-style product tooling if this grows.

Tradeoff:

- Slightly more setup surface than Gumroad.
- For the first sale, the fee savings are not worth letting setup friction delay launch.

Verdict: **Use as Plan B if Gumroad is blocked, or Plan A only if Brian already has or strongly prefers Lemon Squeezy.**

### 3. Stripe Payment Link + manual email delivery — fallback only

Current Stripe pricing page reviewed during this task: Stripe lists **2.9% + 30¢** for standard online card pricing. At a `$19` price, the simple platform-fee math is about `$0.85`, leaving about `$18.15` before any tax, dispute, international, or add-on costs.

Best for:

- Fast if Brian already has Stripe ready.
- Lowest direct payment fee among the options checked.
- Works without building app checkout.

Tradeoff:

- Stripe is a payment processor here, not a full document-delivery product platform.
- Manual delivery means Brian has to monitor payments and email the ZIP.
- Tax/VAT handling is not magically solved unless Stripe Tax / other setup is configured.
- Refund/support workflow is more manual.

Verdict: **Use only if Gumroad/Lemon Squeezy blocks progress and Brian wants one or two test sales immediately.** It is viable, but it creates operator chores and more tax ambiguity.

### 4. Custom checkout — not yet

Do not build custom checkout yet.

Reasons:

- The product is not proven.
- The site does not need accounts, protected downloads, tax logic, purchase receipts, refund tooling, webhook handling, or delivery automation before the first buyer exists.
- Custom checkout adds implementation and compliance surface area for a `$19` test.
- It risks turning a sellable document packet into a software project. Classic trap. Annoyingly common.

Verdict: **Wait until at least a few real sales or repeated buyer questions prove the need.**

## Gumroad setup steps

Brian-only actions:

1. Create or log into the Gumroad account for AIRegReady.
2. Complete required account, payout, tax, identity, and business profile fields.
3. Create a new digital product.
4. Product name: `AI Governance Starter Kit v1`.
5. Price: `$19`.
6. Upload customer ZIP: `deliverables/ai-governance-starter-kit-v1.zip`.
7. Confirm the uploaded ZIP contains the buyer-facing `START-HERE.md`, `LEGAL-NOTICE.md`, Markdown, DOCX, and PDF folders.
8. Paste the product description below.
9. Set refund/support terms using the copy below.
10. Publish or keep unlisted/private until the AIRegReady site is updated.
11. Copy the Gumroad product URL for site metadata.

Recommended Gumroad settings:

- Product type: digital download.
- Price: fixed `$19`, not pay-what-you-want for the first test.
- File: upload the ZIP; do not link to the public repo or public site ZIP.
- Discover/marketplace: optional, but direct sales should be the primary path.
- Receipt/custom message: include the delivery note below.

## Copy/paste product description bullets

Short description:

AI Governance Starter Kit v1 gives small teams editable starter templates for documenting AI tool use, setting internal AI use rules, reviewing new AI workflows, and tracking changes over time.

Bullets:

- Editable starter documents for practical AI governance inside a small team or organization.
- Includes an AI Use Inventory, AI Acceptable Use Policy, AI Risk Intake Form, and AI Update Tracker.
- Delivered in Word-compatible DOCX, PDF, and Markdown formats.
- Helps you document which AI tools are used, who owns them, what data they touch, and what review steps exist.
- Built for founders, operators, consultants, nonprofits, schools, and small teams that need a basic governance file without starting from a blank page.
- Designed as educational templates and internal documentation aids — not legal advice, not a compliance guarantee, and not an attorney-client service.

Included files:

- `01-ai-use-inventory` — track AI tools, owners, data use, risk tier, approval status, and review cadence.
- `02-ai-acceptable-use-policy` — adapt internal rules for approved tools, prohibited uses, data handling, human review, disclosure, and escalation.
- `03-ai-risk-intake-form` — review proposed AI tools, workflows, or material changes before adoption.
- `04-ai-update-tracker` — keep a change log for AI systems, vendor tools, prompts, models, workflows, and policies.

Legal-boundary paragraph:

These materials are educational templates and informational starting points only. They are not legal advice, do not create an attorney-client relationship, and do not guarantee compliance with any law, regulation, contract, or industry requirement. Review and adapt them for your organization, industry, jurisdictions, contracts, and actual AI use. Consult qualified counsel before relying on them for legal compliance or regulated use cases.

## Buyer receipt / delivery note

Suggested receipt message:

Thank you for purchasing the AI Governance Starter Kit v1.

Download the ZIP file and start with `START-HERE.md`. Most buyers should begin with the DOCX files because they are easiest to edit in Microsoft Word, Google Docs, or compatible editors. PDFs are included for review/circulation, and Markdown files are included for plain-text workflows.

These templates are educational starting points. Please adapt them to your organization, industry, jurisdictions, contracts, and actual AI use before relying on them internally.

Support contact: `support@airegready.com`

## Refund / support note

Suggested public support/refund note:

If you have trouble downloading or opening the files, email `support@airegready.com` with your order email and we’ll help. Because this is a digital download, refunds are handled case by case for duplicate purchases, technical delivery problems, or clear product mismatch. These materials are templates and educational starting points; they do not include legal advice, custom compliance review, or implementation consulting.

## AIRegReady site metadata needed after Brian creates the payment link

After Brian creates the Gumroad or Lemon Squeezy product link, add purchase metadata to the existing `ai-governance-starter-kit` entry in `src/lib/marketing.js` and make the catalog/detail UI consume it.

Suggested fields:

```js
{
  slug: 'ai-governance-starter-kit',
  title: 'AI Governance Starter Kit',
  kind: 'Kit',
  priceLabel: '$19',
  purchaseUrl: 'https://...',
  purchaseCta: 'Buy the starter kit',
  availabilityLabel: 'Paid download available now',
  deliveryLabel: 'Instant ZIP download after purchase',
  purchaseNote: 'Includes DOCX, PDF, and Markdown files. Educational templates only — not legal advice or a compliance guarantee.',
}
```

Site update requirements:

- `/catalog` remains canonical.
- `/kits` remains compatibility only.
- Show the buy CTA only after the payment URL exists.
- Keep preview/contact CTAs secondary, not competing with the buy CTA.
- Do not link directly to `deliverables/ai-governance-starter-kit-v1.zip` from the public site.
- Add JSON-LD `offers` data only after the final public price and URL are live.
- Keep legal-boundary copy visible near the purchase CTA.
- If the payment product is unlisted/private, do not publish the public AIRegReady buy CTA yet.

## Pre-launch verification already checked in this task

Commands run from `/home/brian/Projects/airegready.com`:

```bash
git status --short --branch
unzip -t deliverables/ai-governance-starter-kit-v1.zip
du -h deliverables/ai-governance-starter-kit-v1.zip
sha256sum deliverables/ai-governance-starter-kit-v1.zip
python3 - <<'PY'
# checked Markdown titles, DOCX zip structure, and PDF extracted titles
PY
```

Results:

- Git status showed existing uncommitted work before this recommendation file was added; those changes were preserved.
- ZIP integrity passed.
- ZIP size: `176K`.
- ZIP SHA256: `d616e121dc561bee0a8b0fba52994e712f91b0bd4b4717d58adf2c18ac30161a`.
- Counts: 4 Markdown, 4 DOCX, 4 PDF.
- Markdown titles, DOCX structures, and PDF text/title checks passed.

## Bottom line

Do Gumroad now at `$19`, upload the ZIP, paste the copy above, and send buyers there from `/catalog/ai-governance-starter-kit` only after the URL exists. If Gumroad gets in the way, use Lemon Squeezy. If both get in the way and Brian wants a sale today, use Stripe Payment Link plus manual email delivery. Do not build custom checkout yet.
