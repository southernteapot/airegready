# AI in Financial Services — Compliance Kit Overview

**Regulatory landscape covered:**

- **Fair lending** — Equal Credit Opportunity Act (ECOA), Regulation B
- **Consumer credit** — Fair Credit Reporting Act (FCRA), Truth in Lending Act (TILA), Fair Debt Collection Practices Act (FDCPA)
- **CFPB** — adverse action requirements, unfair/deceptive/abusive practices (UDAAP), AI-specific guidance
- **Interagency guidance on model risk management** — SR 11-7 (Federal Reserve), OCC Bulletin 2011-12
- **FFIEC** cybersecurity and third-party risk expectations
- **GLBA** — Safeguards Rule; privacy of customer financial information
- **FTC Safeguards Rule** (for non-bank financial institutions)
- **Anti-discrimination in housing finance** — Fair Housing Act, HMDA
- **State insurance and banking regulators** — New York DFS, California DFPI, Texas DSB, etc.
- **NAIC Model Bulletin on AI** (affecting AI use in insurance)
- **Colorado AI Act** — financial services is a consequential-decision category
- **EU AI Act** — credit scoring and life/health insurance risk assessment classified as high-risk under Annex III
- **State consumer protection laws**

> **How to use this kit.** This kit is for banks, credit unions, lenders, BNPL providers, insurers, fintechs, broker-dealers, payment companies, and advisory firms deploying AI. Read the overview, then work the checklist. Pair with the AI Governance Framework, Impact Assessment, and adverse-action disclosure templates.

---

## 1. Why financial services AI is different

Financial services has the most mature model risk management regime in any industry. SR 11-7 has been the reference since 2011, and U.S. regulators have signaled that SR 11-7 applies to AI models with no special carve-outs. Layered on top are the fair-lending and consumer-protection laws that treat biased outcomes as violations regardless of intent.

Consequences of getting it wrong include:

- Civil money penalties from CFPB, OCC, FDIC, Federal Reserve, state regulators, FTC, HUD
- Redlining allegations and public enforcement
- Private class actions for disparate impact
- Supervisory downgrades
- Restrictions on product offerings

## 2. Core duty — explain the decision

Almost every adverse decision made with AI in financial services must be **explainable** in plain language. That means:

- Adverse-action notices (ECOA/FCRA) must list specific, principal reasons for denial
- Pricing decisions that result in higher costs for protected groups must be defensible
- "The model said no" is not an explanation

The CFPB has been clear: using black-box AI to make credit decisions does not excuse a lender from providing specific reasons. Build explainability into the workflow; do not hope to add it later.

## 3. Fair lending — the three doctrines

1. **Disparate treatment** — intentionally treating protected classes differently
2. **Disparate impact** — facially neutral practices that disproportionately burden protected classes, without a business necessity that can't be met by a less-discriminatory alternative
3. **Overt discrimination** — discriminating expressly on a protected basis

AI models routinely create disparate-impact risk even without any feature called "race" or "gender." Proxies (ZIP code, surname, shopping history, education) can reproduce protected-class patterns. The fair-lending doctrine requires you to look.

## 4. Model risk management — the SR 11-7 mindset

- **Soundness of development** — appropriate data, appropriate methodology, documented
- **Implementation** — model operates as designed; changes controlled
- **Ongoing validation** — performance measured against stated purpose and tested regularly
- **Effective governance** — roles clear; oversight proportionate to risk
- **Documentation** — sufficient to allow an independent reviewer to understand the model

For AI/ML models, the same framework applies with additional attention to:

- Training data provenance and representativeness
- Drift and recalibration
- Explainability methods (SHAP, LIME, counterfactuals)
- Challenger models and benchmarking

## 5. Third-party models

Most financial institutions use vendor AI. Supervisory expectations:

- The institution is responsible for the model even if it didn't build it
- Third-party risk management program must include AI
- Vendor documentation must be sufficient for the institution to meet its own supervisory obligations
- Contracts must support audit rights, performance reporting, and cooperation in regulatory examination

## 6. Adverse action specifics

When AI is used in a credit decision (including BNPL, card underwriting, line increases, fraud declines that look like credit decisions):

- Send a timely adverse-action notice
- State specific, principal reasons (at least 4 reasons is typical where applicable; follow model forms where available)
- If a consumer report was used, include the FCRA disclosures and contact info for the reporting agency
- Include notice of ECOA rights
- Where state laws add requirements (e.g., Colorado AI Act right to appeal and data correction), include those too

Build an explainability pipeline that produces real reasons from the model's contribution to the decision — not generic placeholders.

## 7. GLBA / FTC Safeguards implications

- Customer financial information handled by AI systems falls under the Safeguards Rule
- Written information security program must cover AI systems
- Risk assessments must consider AI-specific risks (prompt injection, model theft, data leakage via LLM)
- Incident response must cover AI incidents (e.g., LLM outputs that disclose nonpublic personal information)

## 8. EU AI Act — credit and insurance

Credit scoring and life/health insurance risk assessment are high-risk under Annex III. Obligations include:

- Risk management, data governance, technical documentation, logs, human oversight, accuracy/robustness/cybersecurity
- Deployer FRIA required for these categories
- CE marking and EU database registration (for providers)

If your financial services business has EU customers, this applies even if you're U.S.-based.

## 9. State laws

- **Colorado AI Act** — financial services is a consequential-decision category
- **New York DFS** circulars on cybersecurity and AI
- **California** — CCPA/CPRA ADMT rules; California DFPI
- **New York DFS Cybersecurity Rule (Part 500)** — includes AI-relevant obligations on third parties
- **Vermont H.410 and other state AI rules on insurance**
- **Texas TRAIGA** — prohibited uses overlap with certain financial practices
- **Illinois** — Illinois Biometric Information Privacy Act; HRA AI provisions for employment decisions within financial firms

## 10. NAIC Model Bulletin on AI in Insurance

Many states have adopted or are adopting a version of the NAIC Model Bulletin on the Use of AI Systems by Insurers. Insurers should:

- Adopt a written AI program
- Maintain governance over AI use across underwriting, rating, claims, and fraud
- Perform testing for accuracy, bias, unfair discrimination
- Monitor third-party AI
- Document everything for market conduct exams

## 11. Practical readiness path

1. **Inventory** every AI model used in underwriting, pricing, marketing targeting, servicing, collections, fraud, AML, claims, and customer service
2. **Classify** by regulatory touchpoint: credit decisioning / insurance rating / consumer-facing marketing / fraud / servicing / other
3. **Explainability** — build or verify adverse-action reason generation for each credit model
4. **Fair-lending testing** — run disparate-impact analysis; document findings and mitigations
5. **Model risk management** — align documentation and validation to SR 11-7
6. **Vendor program** — update third-party risk management for AI
7. **Adverse-action workflow** — ECOA + FCRA + Colorado AI Act alignment
8. **Complaint handling** — tag AI-related complaints; trend analysis; escalation to AG reporting where required
9. **Board reporting** — AI posture as a separate line in risk reporting
10. **Regulator readiness** — documentation pack available for examination

## 12. Common traps

- **Skipping fair-lending testing on alternative-data models** because "those aren't credit factors." Courts and regulators disagree.
- **Relying on vendor claims of "bias-tested"** without reviewing the methodology
- **Using black-box models in adverse-action workflows** without a path to specific reasons
- **Treating fraud models as exempt** from UDAAP because they're not underwriting — they still affect consumers
- **Not tying AI into SR 11-7 validation cadence**
- **Assuming customer-service chatbots don't implicate financial law** when they give advice or commit the institution
- **Missing the Colorado 90-day AG reporting** clock after discovering discrimination

## 13. Kit contents

- `overview.md` — this document
- `checklist.md` — operational readiness checklist

Pair with:

- AI Governance Framework
- AI Impact Assessment
- AI Vendor Risk Assessment
- Colorado AI Act Readiness Kit
- EU AI Act High-Risk Kit
- Customer AI Disclosure Templates → adverse-action.md

---

## Disclaimer

This document is a template for educational and informational purposes only. It is not legal advice. Financial services AI compliance intersects multiple specialized regulatory regimes. Consult qualified banking, consumer finance, insurance, and privacy counsel before relying on this document.
