# Ideas for Future Monetization

Date: 2026-06-09
Status: brainstorm / planning document. Nothing here is committed work. All ideas must respect the AIRegReady legal boundary: educational resources only, no legal advice, no compliance guarantees, no attorney references.

## Where Things Stand Today

- One wired paid product: AI Governance Starter Kit, $19 on Gumroad.
- Two finished deliverables awaiting Gumroad wiring: Vendor AI Review Packet (v1.0.0) and Solo Builder AI Launch Kit (v1.0.0, $14 early-launch pricing candidate).
- Free funnel: discovery landing pages → free checklist / assessment / free sample → Starter Kit.

## Tier 1 — Near-Term (uses work that already exists)

### 1. Wire the Vendor AI Review Packet and Solo Builder Kit to Gumroad
Three SKUs at $14–$29 instead of one. Deliverables, QA, and product visuals are already done.
**Brian needs to:** create the two Gumroad listings, send the links so purchase metadata can be wired into the site.

### 2. Bundle pricing
Starter Kit + Vendor Packet bundle at a discount (e.g., individually $19 + $24, bundled $34). Gumroad supports bundles natively. Raises average order value with zero new content.
**Brian needs to:** create the bundle listing on Gumroad once both products are live.

### 3. Free sample funnel (built 2026-06-09)
The AI Use Inventory from the Starter Kit is now a free download at `/free-sample` with an optional newsletter signup. Watch whether sample downloads convert to kit sales; consider adding a second sample later (e.g., the acceptable use policy one-pager).

## Tier 2 — Strong Candidates (moderate new work)

### 4. Regulatory update subscription (recurring revenue)
A paid quarterly or monthly "what changed and what to update in your governance file" briefing. A draft already exists at `content/products/regulatory-update-subscription/`. Price ~$5–10/month or ~$49/year via Buttondown paid subscriptions or Gumroad memberships. This monetizes blog/regulatory work already being done and creates the first recurring revenue stream.
**Brian needs to:** decide platform (Buttondown paid tier is simplest since the newsletter already runs there) and cadence.

### 5. Industry-specific kits
~75 drafted products already exist in `content/products/`, including healthcare, education, HR/hiring, financial services, legal practice, nonprofits, real estate, and government kits. Verticalized versions of the Starter Kit can price higher ($39–79) because the buyer feels "this was made for me." Start with the vertical that shows the most search/preview-request demand.
**Brian needs to:** pick the first vertical; drafts then need the same polish/export/QA pipeline used for the first three kits.

### 6. Consultant / agency license
A higher-priced tier ($99–199) allowing consultants to use the kits with their own clients. The Consultant Client Delivery Pack draft already points this direction. Consultants are repeat buyers and a distribution channel.
**Brian needs to:** decide license terms (e.g., "use with unlimited clients, no resale of the files themselves") — this one is worth a quick professional review of the license language.

### 7. Paid assessment report
The free assessment stays free, but offer a detailed personalized PDF action plan generated from the user's answers for $9–19. The scoring and report logic already exists in `src/lib/assessment.js`; the PDF generation path already exists in the assessment tool. Needs a payment gate (Gumroad license key check or Stripe).

### 8. Guided document setup sessions
Paid 60–90 minute working sessions filling out the kit together, $99–149. DECISIONS.md (2026-06-05) already defines the safe framing: guided document setup / educational implementation support, never compliance consulting or legal advice.
**Brian needs to:** decide whether he wants to sell time at all, and pick a booking tool (Cal.com, Calendly).

## Tier 3 — Longer-Term

### 9. Email mini-course
Free 7-day "set up your AI governance file" sequence via Buttondown that upsells the Starter Kit; later a paid video walkthrough version ($29–49).

### 10. Multi-marketplace distribution
List the kits on Etsy and template marketplaces in addition to Gumroad. Same product, new discovery surfaces. Watch for marketplace fee/branding tradeoffs.

### 11. Affiliate revenue
Reviews and comparisons of AI governance / compliance SaaS (e.g., GRC platforms) and AI tools fit the existing content and pay well per referral. Requires honest-review discipline and affiliate disclosures.

### 12. Newsletter / blog sponsorship
Once traffic and subscriber numbers justify it. Keep sponsors aligned with the trust-focused positioning.

### 13. Team licenses
Multi-seat pricing for the kits (e.g., 5-seat internal-use license) once organizational buyers appear in preview requests.

### 14. Phase 3 dashboard as paid SaaS
The roadmap's compliance tracker (track AI systems and obligations) is the natural subscription product once the document business proves demand. Kit buyers become the beta list. Biggest build, biggest potential.

## Sequencing Recommendation

1. Wire Vendor Packet + Solo Builder to Gumroad (Tier 1.1) — days, not weeks.
2. Launch the bundle (Tier 1.2).
3. Start the paid update subscription (Tier 2.4) — first recurring revenue.
4. Pick one vertical kit based on demand signals (Tier 2.5).
5. Revisit the rest quarterly based on what preview requests and sales actually show.
