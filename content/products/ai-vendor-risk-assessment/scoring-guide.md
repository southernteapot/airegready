# AI Vendor Risk Assessment — Scoring Guide

Use this guide after the vendor has answered the questionnaire. The goal isn't a single number — it's to land on a **risk tier** (Low / Medium / High / Unacceptable) and a clear **decision** (Approve / Approve with conditions / Reject / More info needed).

---

## Step 1 — Classify the use case

Before scoring the vendor, classify **what you're using the tool for**. The same vendor can be fine for one use and unacceptable for another.

| Use case tier | Examples |
| --- | --- |
| **Low stakes** | Brainstorming, drafting internal memos, generating stock images, summarizing public documents |
| **Medium stakes** | Customer-facing marketing copy (reviewed), code assistance, internal data analysis, meeting summaries |
| **High stakes** | Hiring, lending, pricing, medical, legal, benefits, safety-critical decisions. Anything regulated by Colorado AI Act, EU AI Act Annex III, NYC Local Law 144, HIPAA, fair-lending rules, etc. |

If you land in **High stakes**, the vendor must clear a higher bar on every question below. Several answers that would be "Medium" at low stakes become "High" or "Unacceptable" at high stakes.

---

## Step 2 — Score by category

For each section, note the weakest answer. That's the category's score. Don't average — a single serious gap is what will hurt you.

### A. Data sensitivity (Section 2)

| Data entered | Minimum vendor requirements |
| --- | --- |
| Public info only | Basic terms of service; no special treatment |
| Internal business info | Signed DPA; "no training on our data" guarantee; SOC 2 or equivalent |
| Customer personal data | DPA, SOC 2 Type II, encryption at rest/in transit, deletion on request, named subprocessors |
| Health, financial, biometric, children's data | All of the above **plus** sector-specific attestation (BAA for health, PCI for payment, opt-in biometric contracts), data residency controls |
| Data we hold under NDA | Explicit contractual pass-through of confidentiality; vendor cannot use the data to train |

If any minimum is unmet for the actual data you'd send: **do not approve** until it's resolved.

### B. Use of data for training (Question 6.1)

- **"Never"** — best.
- **"Only if we opt in"** — acceptable if you can confirm you're opted out.
- **"Yes, by default (opt-out available)"** — acceptable only for low-stakes public data. Opt out before first use.
- **"Yes, always"** — only acceptable for public-data use cases.

### C. Security (Section 7)

- **No SOC 2 or ISO 27001** — acceptable only for low-stakes, public-data use.
- **Encryption gaps** (no encryption at rest or no encryption in transit) — disqualify for anything beyond public data.
- **No MFA / no SSO support** — disqualify for medium-stakes use and above.
- **Recent unresolved breach** — escalate; usually disqualify unless remediation is well-documented.

### D. AI-specific risk controls (Section 8)

- No guardrails, no human-in-the-loop option, no change-notice commitment → acceptable only for low-stakes internal use.
- Cannot explain hallucination rate or safety testing → downgrade score; do not use for customer-facing or high-stakes work.

### E. Legal & regulatory fit (Section 9)

- **Decisions about people** (Section 3.1 = Yes) → vendor must speak to Colorado AI Act, EU AI Act (if any EU exposure), NYC Local Law 144 (if hiring in NYC), and applicable anti-discrimination law. If the vendor can't, either drop that use case or find a different vendor.
- **EU personal data involved** → Standard Contractual Clauses or equivalent must be signed. No SCCs = disqualify.
- **Health data (U.S.)** → signed BAA required. No BAA = disqualify for health data.
- **Output IP indemnification missing** → acceptable for internal drafts; not acceptable for public-facing creative output.

### F. Exit & continuity (Section 10)

- No data export path → caution; negotiate one before signing.
- No post-termination deletion timeline → disqualify for sensitive data.
- No SLA or no disaster recovery posture → acceptable only for non-critical workflows.

---

## Step 3 — Choose a risk tier

| Tier | What it means | Typical outcome |
| --- | --- | --- |
| **Low** | Public-data use, strong vendor, minor gaps only | Approve. Annual review. |
| **Medium** | Business data, reasonable vendor, some gaps that can be mitigated by configuration, contract, or training | Approve with conditions. Review in 6–12 months. |
| **High** | Sensitive data or high-stakes decisions, vendor is workable but some protections need to be negotiated | Approve only with signed DPA/BAA/SCCs, explicit "no training" commitment, human-in-the-loop, and named business owner. Review in 6 months. |
| **Unacceptable** | Gaps the vendor won't close, or use case that can't be made safe | Reject. Document the reason. Revisit only if the vendor materially changes its posture. |

---

## Step 4 — Document the decision

On the assessment form, record:

1. **Final tier** and **decision** (Approve / Approve with conditions / Reject / More info needed)
2. **Conditions** — what must be true before first use and on an ongoing basis
3. **Business owner** — who is accountable
4. **Next review date** — typically 12 months, or 6 months for high-risk approvals
5. **Log in your AI System Inventory**

Store the completed assessment in your AI vendor file. Share the decision with the requesting business owner and [IT OWNER].

---

## Disclaimer

This document is a template for educational and informational purposes only. It is not legal advice and does not create an attorney-client relationship. Laws vary by jurisdiction and change often. Consult qualified legal counsel before relying on this guide for your organization.
