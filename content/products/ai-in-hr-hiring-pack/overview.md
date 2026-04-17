# AI in HR / Hiring — Starter Pack Overview

**Regulations consolidated:**

- NYC Local Law 144 (AEDT)
- Illinois Artificial Intelligence Video Interview Act (AIVIA)
- Illinois HB 3773 / Human Rights Act amendments (AI in employment decisions)
- Colorado AI Act (employment is a consequential-decision category)
- California — CCPA ADMT rules, SB 1001 bot disclosure (where applicable)
- Texas TRAIGA (prohibited discriminatory uses)
- EU AI Act — Annex III high-risk employment use cases
- EEOC guidance — ADA and Title VII as applied to AI in hiring
- OFCCP (for federal contractors)
- Fair Credit Reporting Act (when background checks or scores produced by third parties)
- State/local laws — Maryland, Washington, DC, and others

> **How to use this pack.** Most companies using AI in hiring are subject to several of these laws at once. This pack is a coordinated starting point — an umbrella overview, an HR-specific AUP addendum, and a hiring workflow with compliance checkpoints embedded. Pair with the NYC LL 144 Pack, the Colorado AI Act Kit, and the Customer AI Disclosure Templates (hiring-notice, adverse-action).

---

## 1. Why hiring AI gets special attention

Hiring is one of the most-regulated AI use cases in the United States for three reasons:

1. **Concentrated harm.** A biased screener can reject thousands of qualified candidates in months. The harm is at scale, invisible to most applicants, and concentrated on protected classes that already face structural disadvantage.
2. **Existing body of law.** Decades of employment discrimination law (Title VII, ADA, ADEA, state equivalents) already reach AI; the new AI-specific laws layer on top, not in place of.
3. **Easy-to-test.** Bias audits of AI hiring tools are operationally straightforward compared to other domains, so regulators have focused there.

The result: using AI in hiring responsibly is both a legal requirement and a reputational necessity.

## 2. What counts as "AI in hiring"

A tool is in scope if it assists or replaces human judgment in:

- Sourcing (searching LinkedIn, inferring fit from profiles)
- Resume screening and ranking
- Knock-out questions and automated disqualification
- Chatbot screening
- Video interview analysis (transcription, scoring, expression/voice analytics)
- Skills or personality assessments scored by models
- Background check scoring
- Interview scheduling with prioritization (borderline — depends on how it affects decisions)
- Promotion and succession recommendations
- Compensation recommendations

Many of these are offered as features of ATS platforms; the features in use matter, not the product name.

## 3. Core obligations by jurisdiction (summary)

| Jurisdiction | Headline obligations | Trigger |
| --- | --- | --- |
| **NYC LL 144** | Annual bias audit; public summary; 10-business-day candidate notice; alternative selection | AEDT used for NYC-based role or NYC candidate |
| **Illinois AIVIA** | Consent; explanation; limit on sharing; destroy videos on request | AI used to analyze video interviews |
| **Illinois HRA (HB 3773)** | Prohibits use of AI in ways that have discriminatory effects; notice to employees when AI used in decisions | Employer with operations in Illinois |
| **Colorado AI Act** | Impact assessment; consumer notice; adverse-action explanation; appeal; AG reporting | AI is substantial factor in consequential employment decision |
| **California** | ADMT pre-use notice; opt-out; access rights; risk assessments | ADMT used for significant decisions about Californians |
| **Texas TRAIGA** | No intentional discrimination; disclosure; biometric rules | AI reaching Texas consumers/employees |
| **EU AI Act** | High-risk obligations (provider or deployer) — QMS, technical docs, logging, human oversight, Art 26 deployer duties, FRIA | AI used for recruitment, performance management, termination in EU |
| **EEOC (federal)** | ADA reasonable accommodation; Title VII disparate impact; no discrimination against protected classes | All employers with ≥15 employees |
| **OFCCP (federal contractor)** | Recordkeeping; equal opportunity review | Federal contractors |

## 4. Common compliance posture across all of them

Even though each law has its own mechanics, the operational posture is the same:

1. **Know your tools.** Inventory every AI used in HR.
2. **Audit for bias.** At minimum, the LL 144 calculation pattern. Ideally more.
3. **Disclose to candidates.** Clear, early, specific — what AI, what it evaluates, what data, how to opt out.
4. **Offer alternatives.** Human review on request. Accommodation for disability.
5. **Review adverse decisions.** Don't let an AI output alone terminate a candidate or employee.
6. **Document your process.** The difference between defense and exposure is usually records.

## 5. Vendor responsibilities vs. employer responsibilities

AI hiring-tool vendors typically handle:

- Building and validating the model
- Running bias tests
- Providing documentation and some compliance artifacts
- Offering compliance features (opt-outs, disclosures, audit exports)

**The employer remains responsible for:**

- Ensuring a qualifying bias audit exists and is independent
- Publishing the LL 144 summary on the careers page
- Delivering candidate notices with the required content and timing
- Running accommodation and alternative-process pathways
- Decisions and final hiring outcomes
- Recordkeeping

The vendor is your partner, not your shield.

## 6. Practical readiness path

1. **Hiring-tool inventory** — every product touching candidates or employees
2. **Classify** each by jurisdictional scope (which of NYC LL 144 / Illinois AIVIA / Colorado CAIA / CA ADMT / EU AI Act applies)
3. **Bias audits** scheduled and commissioned for applicable tools
4. **Candidate notice** updated in all job postings and recruiter communications; 10-business-day lead time preserved
5. **Adverse action notice** process wired up with principal reasons, correction, and appeal
6. **Accommodation / alternative selection** process trained and staffed
7. **HR Addendum to AI AUP** published and acknowledged
8. **Hiring workflow** updated with compliance checkpoints (see `hiring-workflow.md`)
9. **Recruiter training** annual; includes all applicable laws and how to identify AI tools in use
10. **Vendor contracts** updated for bias audit cooperation, subgroup reporting, and cooperation with consumer requests

## 7. Common traps

- **"We just use the ATS's defaults."** Those defaults may include AEDT features that trigger LL 144.
- **Single global job posting** that reaches NYC candidates without LL 144 notice built in.
- **Calling an AI tool "human-assisted"** to avoid notice — the law evaluates substance, not labels.
- **Accommodation = "skip the AI"** only, with no explanation of what you'll do instead.
- **Using the vendor's bias audit** even when they built/operate the AEDT — independence question.
- **No documentation of hiring decisions** — defensibility collapses.

## 8. Pack contents

- `overview.md` — this document
- `policy-addendum.md` — HR-specific addendum to the AI Acceptable Use Policy
- `hiring-workflow.md` — hiring workflow with compliance checkpoints embedded

Pair with:

- NYC Local Law 144 Pack (bias audit brief + candidate notice)
- Colorado AI Act Kit (for Colorado consequential-employment decisions)
- California AI Readiness Kit
- Customer AI Disclosure Templates → hiring-notice.md and adverse-action.md
- AI Governance Framework
- AI Vendor Risk Assessment (for HR-tool procurement)

---

## Disclaimer

This document is a template for educational and informational purposes only. It is not legal advice. Employment law is highly jurisdiction-specific and AI-in-hiring law is rapidly evolving. Consult qualified employment counsel in each jurisdiction where you hire before relying on this document.
