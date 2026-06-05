# AIRegReady Paid Test Sale — Launch Checklist Synthesis

Product: AI Governance Starter Kit v1
Canonical sales route: `/catalog/ai-governance-starter-kit`
Customer ZIP: `deliverables/ai-governance-starter-kit-v1.zip`
Recommended first-test price: `$19`
Recommended payment/delivery platform: Gumroad first; Lemon Squeezy second; Stripe Payment Link + manual email only as fallback.

## Go / no-go call

Conditional GO.

The deliverable itself is ready enough for Brian to create the first paid-test product now: the customer ZIP has passed integrity checks, contains the expected buyer-facing files, excludes the internal source-notes folder, includes four documents in Markdown, DOCX, and PDF, and carries legal-boundary language.

Do not make the public AIRegReady buy link live yet. The sale is not fully live-ready until Brian creates the hosted payment product URL and the site is updated so `/catalog` and `/kits` show a purchase-aware CTA without exposing the ZIP directly or overpromising beyond the four-file kit.

Practical call: Brian can create the Gumroad product now. Public launch waits for the payment URL + site edits + validation.

## Must do before any public buy link goes live

1. Use the final customer ZIP, not the deliverable folder or a public repo URL.
   - File: `deliverables/ai-governance-starter-kit-v1.zip`
   - Current verified SHA256: `6dd23ec95516092c109d6559b51d2f6fbbff4c332b01fbee703535268b516c3c`
   - Current verified size: `174298 bytes`

2. Keep the legal boundary copy visible in both the payment product and AIRegReady site copy.
   - Educational templates only.
   - Not legal advice.
   - No attorney-client relationship.
   - No compliance guarantee.
   - Buyer must adapt for their organization, industry, jurisdictions, contracts, and actual AI use.

3. Do not expose a direct public ZIP link.
   - Do not link to `/deliverables/ai-governance-starter-kit-v1.zip`.
   - Do not copy the ZIP into `public/`.
   - Let Gumroad/Lemon Squeezy handle file delivery.

4. Tighten the `/kits` flagship kit description before sending public traffic there.
   - Current issue: `src/app/kits/page.js` describes reviewing vendors and training staff, which makes the four-document starter kit sound broader than it is.
   - Use the actual scope: document AI tools, assign owners, set internal use rules, review proposed AI workflows, and track updates.

5. If the readiness assessment is used as part of the funnel, check `src/lib/assessment.js` before launch.
   - Parent audit flagged that it may still advertise a broader “Governance Starter Stack” than the four-document paid kit.
   - If it is not part of the first sales path, leave it out of launch traffic for now.

## Brian-only actions

1. Create or log into the Gumroad account for AIRegReady.
2. Complete required payout, tax, identity, and business profile setup.
3. Create a digital download product.
4. Product name: `AI Governance Starter Kit v1`.
5. Price: `$19` fixed price.
6. Upload `deliverables/ai-governance-starter-kit-v1.zip`.
7. Paste the product description from `agent-memory/paid-test-payment-delivery-recommendation-2026-05-08.md`.
8. Add the legal-boundary paragraph from that recommendation.
9. Add the refund/support note from that recommendation.
10. Confirm the uploaded ZIP contains:
    - `README.md`
    - `START-HERE.md`
    - `LEGAL-NOTICE.md`
    - `markdown/` with 4 files
    - `docx/` with 4 files
    - `pdf/` with 4 files
11. Publish or keep unlisted until the site CTA is wired.
12. Copy the hosted payment/product URL.

Plan B: use Lemon Squeezy if Gumroad blocks progress.
Fallback only: Stripe Payment Link + manual email delivery if both hosted-download platforms block progress and Brian wants a test sale immediately.

## Site changes after the payment URL exists

Recommended repo edits:

1. `src/lib/marketing.js`
   - Add purchase metadata to the `ai-governance-starter-kit` product:
     - `priceLabel: '$19'`
     - `purchaseUrl: '<Gumroad or Lemon Squeezy URL>'`
     - `purchaseCta: 'Buy the starter kit'`
     - `availabilityLabel: 'Paid download available now'`
     - `deliveryLabel: 'Instant ZIP download after purchase'`
     - `purchaseNote: 'Includes DOCX, PDF, and Markdown files. Educational templates only — not legal advice or a compliance guarantee.'`
   - Keep `inside` aligned to the four included documents only.

2. `src/app/catalog/[slug]/page.js`
   - If `product.purchaseUrl` exists, show the purchase CTA and price prominently.
   - Keep preview/contact/request CTA secondary.
   - Keep legal-boundary copy near the CTA.
   - Add JSON-LD `offers` only after the final payment URL and price are present.

3. `src/app/catalog/page.js`
   - Make catalog cards purchase-aware for products with `purchaseUrl`.
   - The canonical route remains `/catalog`.

4. `src/app/kits/page.js`
   - Tighten the flagship-kit description to match the actual four-document kit.
   - Make kit cards purchase-aware for products with `purchaseUrl`.
   - Preserve `/kits` as compatibility, not canonical.

5. `src/lib/assessment.js`
   - Only if the assessment is used in the first sales funnel: align any “Governance Starter Stack” recommendation with the actual four-file paid kit, or clearly label broader items as roadmap/preview material.

## Validation checks before launch

Run these after site edits and before sharing the public buy link:

```bash
git status --short --branch
unzip -t deliverables/ai-governance-starter-kit-v1.zip
stat -c '%s bytes' deliverables/ai-governance-starter-kit-v1.zip
sha256sum deliverables/ai-governance-starter-kit-v1.zip
python3 - <<'PY'
from pathlib import Path
import subprocess, zipfile
packet = Path('deliverables/ai-governance-starter-kit-v1')
expected = {
    '01-ai-use-inventory': 'AI Use Inventory',
    '02-ai-acceptable-use-policy': 'AI Acceptable Use Policy',
    '03-ai-risk-intake-form': 'AI Risk Intake Form',
    '04-ai-update-tracker': 'AI Update Tracker',
}
for stem, title in expected.items():
    md = (packet / 'markdown' / f'{stem}.md').read_text(errors='replace')
    if title not in md:
        raise SystemExit(f'Markdown missing title {title}: {stem}.md')
    with zipfile.ZipFile(packet / 'docx' / f'{stem}.docx') as z:
        bad = z.testzip()
        if bad:
            raise SystemExit(f'Bad DOCX {stem}: {bad}')
    txt = subprocess.check_output(['pdftotext', str(packet / 'pdf' / f'{stem}.pdf'), '-'], text=True, errors='replace')
    if title not in txt:
        raise SystemExit(f'PDF missing title {title}: {stem}.pdf')
print('PASS: markdown titles, DOCX structures, PDF text/title checks')
PY
npm run lint
npm run test
npm run build
git diff --check
```

Manual browser checks:

1. `/catalog` shows the starter kit as purchasable only after the payment URL exists.
2. `/catalog/ai-governance-starter-kit` shows price, buy CTA, included files, delivery note, and legal-boundary copy.
3. `/kits` does not overpromise vendor review, staff training, incident response, or broader governance materials as part of this four-document paid kit.
4. No public page links directly to the ZIP.
5. The hosted payment page delivers the uploaded ZIP and not a stale ZIP.
6. Receipt/support copy points buyers to `START-HERE.md` and `support@airegready.com`.

## Post-sale follow-up

After the first purchase or serious buyer attempt:

1. Confirm payment receipt and file delivery worked.
2. Confirm the buyer could open at least one DOCX and PDF.
3. Log buyer questions, confusion, refund requests, and missing-file complaints.
4. If the buyer asks for broader content, decide whether the next paid add-on should be:
   - vendor review checklist,
   - staff training outline,
   - incident response worksheet,
   - governance meeting agenda,
   - or a larger bundle upgrade.
5. Do not build custom checkout until repeated sales or repeated delivery problems justify it.
6. Update the product page copy based on real buyer friction, not imagined enterprise needs.

## Unresolved blockers

1. No hosted payment URL exists yet. This is Brian-only.
2. Site purchase CTA wiring is not done because it depends on the payment URL.
3. `/kits` flagship copy still needs tightening before public traffic is sent there.
4. `src/lib/assessment.js` needs a quick alignment check if the readiness assessment is used in the first paid-test funnel.
5. Production deploy path / Cloudflare auto-deploy status remains unconfirmed in repo TODOs.

## Checks run for this synthesis

Commands run from `/home/brian/Projects/airegready.com`:

```bash
git status --short --branch
unzip -t deliverables/ai-governance-starter-kit-v1.zip
stat -c '%s bytes' deliverables/ai-governance-starter-kit-v1.zip
sha256sum deliverables/ai-governance-starter-kit-v1.zip
unzip -l deliverables/ai-governance-starter-kit-v1.zip
```

Observed results:

- Working tree already had uncommitted work from prior tasks before this synthesis file was added.
- Repo is `master...origin/master [ahead 1]`.
- ZIP integrity passed.
- ZIP size is `174298 bytes`.
- ZIP SHA256 is `6dd23ec95516092c109d6559b51d2f6fbbff4c332b01fbee703535268b516c3c`.
- ZIP contains 19 entries: root folder, `README.md`, `START-HERE.md`, `LEGAL-NOTICE.md`, 4 Markdown files, 4 DOCX files, and 4 PDF files.
- Search of `src/` found no direct public link to `ai-governance-starter-kit-v1.zip` or `/deliverables/`.

No push was made.
