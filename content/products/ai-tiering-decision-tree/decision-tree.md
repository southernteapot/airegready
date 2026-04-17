# AI Risk Tiering — Decision Tree

**Purpose:** Help business owners and reviewers decide which tier (1 / 2 / 3) a new AI system falls into under the AI Governance Framework. Tiering drives how much oversight the system gets. Misclassifying high-risk as low-risk is one of the most common — and most expensive — governance mistakes.

> **How to use.** Answer the questions in order. Stop at the first tier that applies. If in doubt between tiers, pick the higher tier and document why.

---

## Start here

**Question 1: Does the system, or could it, fall into any of these prohibited categories?**

- Social scoring of natural persons
- Real-time remote biometric identification in public spaces (outside narrow law-enforcement exceptions)
- Emotion recognition in the workplace or educational settings (except for safety / medical reasons)
- Biometric categorization to infer race, political opinions, union membership, religion, sex life, sexual orientation
- Predictive policing solely based on profiling / personality traits
- Untargeted scraping of facial images from the internet to build recognition databases
- Subliminal manipulation causing harm
- Exploitation of vulnerabilities (age, disability, socioeconomic status) causing harm
- Other uses prohibited by EU AI Act Art 5 or applicable state law

- **Yes / possibly yes** → **Tier 4 — Prohibited. Do not deploy.** Escalate to AI Ethics Committee for final determination.
- **No** → proceed to Question 2

---

**Question 2: Is the system used to make, or materially inform, a decision that has a legal or similarly significant effect on a natural person in any of these contexts?**

- Education (admission, assessment, student monitoring)
- Employment (hiring, promotion, termination, pay, discipline, task allocation)
- Financial services / credit
- Healthcare (clinical decisions, utilization, access)
- Housing (tenant screening, rental pricing, neighborhood steering, mortgage)
- Insurance (underwriting, rating, claims)
- Legal services / judicial proceedings
- Government benefits or essential services
- Law enforcement / criminal justice
- Migration, asylum, border control
- Critical infrastructure

- **Yes** → **Tier 3 — High.** Full impact assessment, bias testing, human oversight, consumer disclosure, appeal pathway, registration where required (CAIA, EU AI Act). Continue to Question 3 only for additional classification detail.
- **No / unclear** → proceed to Question 3

---

**Question 3: Does the system use biometric data, or generate or manipulate biometric data, of identifiable persons?**

- Facial recognition / verification
- Voice identification / voice cloning
- Fingerprint, iris, gait
- Emotion inference (outside prohibited contexts)
- Biometric categorization (in non-prohibited contexts)

- **Yes** → **Tier 3 — High.** Plus state biometric law review (BIPA, TX CUBI, Tennessee ELVIS Act, CA CCPA biometric provisions).
- **No** → proceed to Question 4

---

**Question 4: Does the system generate or distribute synthetic media (voice, image, video) of identifiable real persons, or is it intended for deceptive content generation?**

- **Yes** → **Tier 3 — High.** Plus Synthetic Media Policy / state deepfake laws / CA SB 942.
- **No** → proceed to Question 5

---

**Question 5: Does the system process special-category personal data (health, biometric, children's, genetic, sex life, sexual orientation, political, religious, trade union) at scale, or any personal data in a way that triggers a DPIA under GDPR / similar?**

- **Yes** → **Tier 3 — High.** Plus DPIA / FRIA (EU) considerations; HIPAA / COPPA / BIPA as applicable.
- **No** → proceed to Question 6

---

**Question 6: Is the system customer-facing, meaning its outputs are directly shown to customers, users, patients, or the public?**

- **Yes** → at least **Tier 2 — Medium.** Continue to Question 7 to check if any factor pushes to Tier 3.
- **No (internal only)** → proceed to Question 7

---

**Question 7: Could errors or misuse of the system cause any of the following?**

- Financial loss >[$ THRESHOLD] to customers or the company
- Reputational damage in excess of routine
- Regulatory notification obligations
- Physical safety implications
- Discrimination or disparate impact
- Misinformation at scale
- IP exposure
- Security breaches of personal data

- **Yes to multiple** → **Tier 3 — High.**
- **Yes to one** → **Tier 2 — Medium** unless the magnitude warrants Tier 3
- **No material risk** → proceed to Question 8

---

**Question 8: Does the system generate content that will be published externally (marketing, editorial, customer communications), or make autonomous actions (agentic AI)?**

- **Yes, autonomous actions (agent)** → minimum **Tier 2 — Medium.** Apply Agentic AI Policy in addition.
- **Yes, external content** → minimum **Tier 2 — Medium.** Apply Gen AI Appendix + Marketing Claims Review.
- **No** → proceed to Question 9

---

**Question 9: Does the system process confidential business data, employee records, or other sensitive-but-not-protected-class data?**

- **Yes** → **Tier 2 — Medium**
- **No (only public / non-sensitive data)** → **Tier 1 — Low**

---

## Tier summary

### Tier 1 — Low

- Internal productivity, public data only, no decisions about people
- Controls: Approved tool; AUP; basic data rules; annual spot check
- Examples: summarizing public articles, brainstorming, generic image generation, internal note-taking with non-sensitive content

### Tier 2 — Medium

- Customer-facing non-consequential use; internal use of sensitive-but-not-special data; autonomous but bounded actions; external content
- Controls: Business owner; light Impact Assessment; inventory entry; human review of outputs; annual review by AI Review Committee
- Examples: customer support chatbot (non-regulated), marketing copy generation, internal code assistance, internal data analysis

### Tier 3 — High

- Consequential decisions about people; biometric; synthetic media of real persons; special-category data at scale
- Controls: Full Impact Assessment; bias testing; documented human-in-the-loop; consumer notice; appeal path; AI Review Committee approval; Executive Sponsor approval; semi-annual review; regulatory filings where applicable
- Examples: AI in hiring, AI in lending, AI in healthcare decisions, deepfake production tools, biometric identification

### Tier 4 — Prohibited

- Deploy = don't
- Escalate to AI Ethics Committee for determination

---

## Edge cases and clarifications

### "Internal use" that creeps outward

An AI marketed as "internal only" that starts being used for customer-facing decisions has tier-drifted. Re-tier on scope change.

### Vendor systems

Same tiering logic applies. Your use of a vendor's AI — not the vendor's classification of their own product — determines your tier.

### Composite systems

A system with multiple AI components inherits the highest tier of any component affecting the outcome.

### Research / experimentation

Sandbox research can be treated as Tier 1 if truly isolated from production. Graduation to production requires re-tier.

### Borderline judgment

When torn between tiers, document the reasoning and pick the higher. Under-tiering is the riskier error.

---

## When to reassess tier

- Annual review
- Material change (new data, new users, new jurisdictions, new use cases, new regulation)
- After an incident
- On vendor change

---

## Disclaimer

This document is educational only. It is not legal advice.
