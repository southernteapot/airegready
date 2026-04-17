# AI Copyright & Training Data Policy

**Company:** [COMPANY NAME]
**Version:** 1.0
**Effective date:** [DATE]
**Owner:** [GENERAL COUNSEL / IP LEAD]
**Next review:** [DATE + 12 months]

> **How to use this policy.** The legal status of AI training on copyrighted works is evolving, with litigation ongoing in the U.S., EU, UK, and elsewhere. This policy establishes defensible practices for [COMPANY NAME]'s use of third-party content in AI development and protection of our own content from unauthorized use by others.

---

## 1. Scope

Applies to:

- Data used to train, fine-tune, or evaluate any AI model built or modified by [COMPANY NAME]
- Data used in retrieval-augmented generation (RAG) systems
- Use of third-party content for prompting
- Content created by [COMPANY NAME] and our approach to its use by third-party AI

## 2. Principles

1. **License before use** — document the license basis for every dataset
2. **Proportionality** — use the minimum amount of copyrighted material necessary
3. **Transparency** — be able to describe what trained our models
4. **Respect creators** — honor opt-outs; attribute where appropriate; don't plagiarize
5. **Protect our IP** — prevent unauthorized training on our content

## 3. Categories of training data — decision framework

### 3.1 Public domain

- Works no longer under copyright
- Government works (where applicable)
- Use: permitted

### 3.2 Permissively licensed

- Open-source / open-content licenses that allow AI training (CC0, CC BY, CC BY-SA with attribution maintained where feasible)
- Use: permitted per license terms

### 3.3 Restrictively licensed

- Licenses that prohibit or limit AI training (CC BY-NC for commercial AI; specific no-AI clauses)
- Use: not permitted beyond what the license allows

### 3.4 Licensed from providers

- Data vendors (Shutterstock, Getty, academic databases, etc.)
- Use: per signed agreement; verify scope includes AI training

### 3.5 User-generated content from our platforms

- Content users posted on our platforms
- Use: permitted only if our Terms explicitly authorize training and users had meaningful notice
- Honor opt-outs

### 3.6 Scraped from the open web

- Publicly accessible material without explicit license
- Use: evaluate case-by-case; consider robots.txt, ToS, opt-out signals (e.g., ai.txt, IETF AI preferences); document the analysis
- Fair use / text and data mining exceptions may apply but are jurisdiction-specific and evolving

### 3.7 Third-party confidential or proprietary

- Content received under NDA or for a specific commercial purpose
- Use: not permitted for training without the provider's written consent

### 3.8 Employee / contractor contributions

- Use: permitted if scope is within employment / contract terms

## 4. Documentation requirements

For every dataset used in training or fine-tuning, maintain:

- **Source** — where it came from
- **Acquisition date**
- **License basis** — specific license, contract, or legal theory
- **License terms summary** — especially restrictions (non-commercial, share-alike, no AI)
- **Approvals** — internal approvals for use
- **Cleaning and transformation** — what was done to the data
- **Retention** — where stored, access, deletion policy
- **Opt-outs** — any removal requests honored

This is the "Data Provenance Record" required by the AI Data Governance Policy.

## 5. Robots.txt, ai.txt, and creator signals

We respect creator signals about AI use of their content:

- **robots.txt** — respect crawler directives
- **ai.txt / AI Preferences (IETF draft)** — respect where implemented
- **Site / API Terms of Service** — honor AI training restrictions
- **Platform opt-outs** — honor content owner opt-outs on platforms that offer them
- **Explicit creator requests** — honor reasonable removal requests

Where a signal is present but ambiguous, default to not using the content for training.

## 6. Processing and outputs

### 6.1 Memorization

- Test models for memorization of training data
- Implement mitigations where memorization risks surfacing copyrighted works
- Monitor in production for memorized outputs

### 6.2 Output originality

- Evaluate outputs for substantial similarity to specific works
- Block or filter outputs that reproduce copyrighted works
- Document the review

### 6.3 Attribution

- Where outputs use identifiable styles or excerpts, consider attribution
- Configure systems to cite sources where provenance is available (RAG)

## 7. Style emulation

- Emulating general styles (e.g., "write a poem in the style of a sonnet") is usually fine
- Emulating specific living artists' distinctive styles is legally and ethically fraught
- Policy: do not produce emulation outputs of specific identified living artists as a marketing or commercial product without consent
- For research and experimentation, document scope

## 8. Training-data disclosure

Depending on applicable law:

- **California AB 2013** — public documentation disclosure of training data for publicly available generative AI systems
- **EU AI Act Art 53** — training data summary for GPAI providers
- **Other jurisdictions** — evolving

Maintain disclosure-ready documentation describing training data at the level required by applicable law.

## 9. Licensing for our use

When [COMPANY NAME] wants to use third-party content at scale:

- **Direct license** from the rights holder preferred
- **Collective licensing** (e.g., through industry arrangements) where available
- **License through intermediaries** with clear sublicensing terms
- Budget for licensing as part of the model development cost

## 10. Indemnification

- Obtain IP indemnification from AI vendors for outputs produced by their models (per our AI Vendor Risk Assessment)
- Understand the scope of vendor indemnification (many limit to inputs that follow the vendor's guidelines)
- Maintain our own IP insurance coverage

## 11. Our content and unauthorized training

We take steps to prevent unauthorized AI training on [COMPANY NAME]'s own content:

- **ToS** prohibits AI training on Site content (see Storefront ToS)
- **robots.txt** directives for AI crawlers
- **Ai.txt / preferences** where appropriate
- **Watermarking** and **provenance** where feasible
- **Legal response** to confirmed unauthorized training

## 12. Responding to claims

If a third party claims we trained on their content without authorization:

- Acknowledge receipt promptly
- Engage Legal immediately
- Preserve evidence (training data inventory, documentation)
- Investigate the specific claim
- Respond in good faith; negotiate if appropriate
- Do not destroy evidence or records during pendency

## 13. Employee and contractor IP

- Employment / contract agreements should assign IP in work product, including prompts and model customizations
- Contractor agreements should assign or license any data used for training
- Consider background IP carve-outs

## 14. Governance

- IP review required for all training-data acquisitions above [$ THRESHOLD] or involving categories at risk (e.g., user-generated content, scraped web)
- Tracking of robots.txt / ai.txt / signal compliance
- Annual review of policy against legal developments

## 15. Common traps

- Scraping without analysis
- Assuming CC licenses authorize AI training (they sometimes don't)
- Training on data received under NDA
- Ignoring robots.txt / ai.txt
- No documentation (can't defend what you can't describe)
- Style-emulating products targeting specific living artists

---

## Disclaimer

This document is educational only. It is not legal advice. The law of AI training on copyrighted works is evolving; consult qualified IP counsel.
