# AI for SaaS Startups — Starter Pack Overview

**Audience:** early and growth-stage SaaS companies (seed to Series C) building or embedding AI features; solo founders and small teams; fractional GC / compliance leads at startups.

**Regulatory landscape (focused):**

- FTC Act Section 5 — AI claims, unfair/deceptive practices
- State AI laws — Colorado, California, Texas, Illinois, NYC — where applicable
- EU AI Act (even if you're small, EU users trigger obligations)
- GDPR / CCPA-CPRA — personal data
- SOC 2 / ISO 27001 — enterprise buyer expectations
- Customer contracts — DPAs, security addenda, AI clauses
- State breach laws
- Employment AI (if you have employees) — NYC LL 144, Illinois AIVIA, etc.

> **How to use this pack.** For startups that want to ship responsibly without burning cycles on enterprise compliance theater. Prioritized for the exits (buying customer confidence, passing SOC 2, surviving diligence, avoiding FTC scrutiny).

---

## 1. Why startups care about AI governance

Three reasons:

1. **Customers increasingly ask.** Enterprise procurement now includes AI-specific questions. Startups that can't answer lose deals.
2. **Investors ask in diligence.** AI risk shows up in investor diligence checklists for Series B+ rounds.
3. **Regulators don't care that you're small.** Neither does the FTC, neither do state AGs, neither do EU DPAs.

Getting basic AI governance in place is cheap early and expensive later.

## 2. The "good enough for Series A" baseline

You don't need enterprise governance at seed-stage. You do need:

1. **A short internal AUP** your team has read
2. **A basic AI System Inventory** (a spreadsheet is fine)
3. **DPAs** with your major AI vendors (OpenAI, Anthropic, AWS, etc.)
4. **Customer-facing disclosures** for any AI feature
5. **A no-training-on-customer-data commitment** you can honor
6. **Privacy policy** that addresses AI
7. **An answer** to "how do you handle our data?" for enterprise sales

That's probably 10 hours of work the first time. Do it before you need it.

## 3. Founder mode AI checklist

### Week 1 (during MVP)

- Pick AI vendor(s) with enterprise terms (not consumer)
- Sign DPAs and confirm no-training-on-data
- Document the prompt / RAG pipeline
- Add an AI-feature disclosure to your product

### Before first enterprise customer

- Draft an AI AUP for your team
- Privacy policy addresses AI
- Incident response plan covers AI scenarios
- Answers to top 20 security questionnaire items prepared
- DPA template ready for customers

### Before Series B

- AI System Inventory
- Impact assessment for high-stakes use cases
- Bias / safety testing documented
- Third-party / subprocessor list public
- SOC 2 Type II in progress (if enterprise)
- Model card / system card for your own models

## 4. Data flows — the single most important thing to get right

Draw the data flow diagram and have it ready for customers, investors, and auditors:

- **Ingress**: where customer data enters
- **Storage**: where it sits at rest, how encrypted
- **Processing**: which services and which regions
- **AI call**: which model, which vendor, what's retained, is it used for training
- **Output**: where it goes, to whom
- **Retention**: how long everything is kept
- **Deletion**: how you honor deletion

If you can draw this on one slide and defend it, you're 70% of the way to most AI compliance conversations.

## 5. Customer contract basics

Your MSA or DPA should say clearly:

- Whether customer input is used for training (default: no)
- What model(s) you use and what their terms look like
- Sub-processor list (including AI vendors)
- Where data is processed geographically
- Retention and deletion
- Security controls
- Incident notification timing

Enterprise customers will red-line. Have your answers ready.

## 6. Enterprise sales pressure points

Most common questions from procurement:

- "Do you train on our data?" — answer: no, with contractual commitment
- "Which models do you use?" — answer: specific model + version, plus commitment to give notice on changes
- "Can we audit?" — answer: not direct access, but SOC 2 report / assurance reports / questionnaire completion
- "What if the model hallucinates?" — answer: human-in-the-loop / disclaimers / feature-specific controls
- "What about the EU AI Act?" — answer: you're applying a compliance program aligned to NIST RMF and monitoring EU AI Act applicability

Prepare a "security posture" doc that can be shared under NDA with any enterprise evaluator.

## 7. State AI laws — prioritized

At your stage, prioritize:

- **Colorado AI Act** if you serve Colorado consumers in consequential-decision contexts (employment, lending, housing, insurance, healthcare, legal, education, government services)
- **California** — if you generate content at scale (SB 942), train models on internet data (AB 2013), or use automated decisions on Californians (CCPA ADMT)
- **NYC LL 144** if you're hiring in NYC
- **Texas TRAIGA** for prohibited categories and consumer-facing disclosures
- **EU AI Act** if you have EU users or EU hosting

Other state laws can wait until you have customers there.

## 8. FTC traps to avoid

- "AI-powered" when the product uses regex
- Fake reviews of your product
- Claims your AI is "unbiased" or "fair" without evidence
- Claims your AI is "SOC 2 compliant" when SOC 2 is for the company, not the product
- Claims of regulator "approval" when you mean "registered with" or similar

Truthful, substantiated claims only.

## 9. AI features — product-side guardrails

- **Disclosure**: users know AI is involved
- **Rate limits**: prevent abuse
- **Prompt logging** (with care on PII): debugging + audit
- **Red-team results** before launch
- **Kill switch**: ability to disable an AI feature in production
- **Monitoring**: usage and output anomalies

## 10. Incidents you should anticipate

- Prompt injection that exfiltrates another user's data
- Output to one customer that contains PII from another
- AI hallucinating facts that the user relies on
- Vendor outage during a demo or enterprise pilot
- Vendor announcement of a terms change that breaks your commitments
- Customer complaint about bias
- Regulator inquiry after a public incident

Have draft responses for each.

## 11. Budget reality

Here's a realistic first-year AI compliance budget for a 20-person SaaS startup:

- AI AUP and governance framework drafting — 10-20 hours of GC or founder time ($0-$5k)
- SOC 2 Type II readiness — $15-40k
- Penetration test (AI-aware) — $10-25k
- Legal review of customer contract templates — $5-15k
- Tools (inventory, policy management) — $0-5k / year
- Vendor DPAs + subprocessor tracking — 5 hours
- Monitoring and incident tabletop — 10 hours

You don't need all of this at once. Prioritize based on upcoming sales and audits.

## 12. Kit contents

- `overview.md` — this document
- `checklist.md` — startup-focused readiness checklist

Pair with the lighter versions of the foundational products: AI Acceptable Use Policy, AI System Inventory, AI Procurement Checklist (Lite), and Customer AI Disclosure Templates.

---

## Disclaimer

This document is educational only. It is not legal advice. Consult qualified counsel for investor-backed companies. SaaS compliance varies by customer mix and investor expectations.
