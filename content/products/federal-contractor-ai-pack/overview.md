# Federal Contractor AI Compliance — Pack Overview

**Regulatory landscape (federal contractors):**

- **OMB memos** — M-24-10 (Advancing Governance, Innovation, and Risk Management for Agency Use of AI) and M-24-18 (Advancing the Responsible Acquisition of AI in Government)
- **Executive Orders** — evolving; review currently in effect
- **FAR / DFARS** — AI-related flow-down clauses emerging
- **NIST AI RMF** — default federal AI framework
- **FedRAMP** — for cloud systems
- **Section 508** — accessibility
- **OFCCP** — equal opportunity in federal contractor hiring
- **Federal anti-discrimination** — Title VI, Title VII, ADA, Rehab Act
- **Privacy Act, FISMA, FIPS** — for federal information systems
- **Export controls** — AI-related EAR expansions
- **Classified / CUI handling** where applicable

> **How to use this kit.** For federal prime contractors and subcontractors whose products or services involve AI, for primes whose supply chain uses AI, and for companies selling AI tools to federal agencies. Pair with the AI Governance Framework, NIST AI RMF Implementation Pack, and AI in Government Kit.

---

## 1. Why federal contracting AI is different

Federal contracts impose obligations that private-sector contracts usually don't:

- Flow-down clauses bind you to federal requirements
- Access to federal data (CUI, classified) creates special obligations
- Hiring for federal work triggers OFCCP obligations
- Public-trust posture is heightened
- Penalties include contract termination, debarment, qui tam exposure, and criminal liability in extreme cases

## 2. OMB memos — the current reference

### M-24-10 — Agency use of AI

- Applies to agencies (directly binding on them)
- Flows indirectly through procurement to contractors whose products are used
- Requires Chief AI Officer, AI Use Case Inventory, risk management for rights-impacting and safety-impacting AI
- Uses NIST AI RMF as framework
- Requires human alternatives and opt-outs for affected persons

Contractor implication: your products should be able to support the agency's compliance with M-24-10.

### M-24-18 — Acquisition of AI

- Sets procurement-side expectations: agencies must structure acquisitions to manage AI risk
- Contractor implication: expect more detailed AI information requests, transparency requirements, and contract clauses

## 3. FAR / DFARS — evolving

Federal Acquisition Regulation and DoD-specific DFARS clauses are being updated to reflect AI. Monitor:

- AI-specific clauses in new solicitations
- Flow-down requirements to subcontractors
- Reporting requirements back to the agency

## 4. NIST AI RMF as the default framework

Federal work increasingly references the NIST AI RMF. Use the NIST AI RMF Implementation Pack as the backbone. Certifications and formal alignment become more valuable as more solicitations reference the framework.

## 5. FedRAMP

AI cloud services sold to federal agencies need FedRAMP authorization. Current FedRAMP continues to cover the cloud substrate; AI-specific extensions are emerging.

## 6. Privacy Act and FISMA

- Privacy Act governs federal agency handling of personally identifiable information
- FISMA imposes security standards on federal information systems
- Contractor roles extend these rules to contractor systems processing federal information

AI systems at contractors processing federal data inherit these obligations.

## 7. OFCCP — equal opportunity

Federal contractors have affirmative-action obligations under Executive Order 11246 and Rehabilitation Act Section 503 (disability). AI used in hiring faces:

- Documentation expectations
- Non-discrimination analysis
- Audit readiness for OFCCP compliance evaluations

Contractor AI in hiring must be defensible under OFCCP scrutiny.

## 8. Section 508 — accessibility

AI products sold to federal agencies must be accessible (Section 508). Contractors should:

- Include accessibility in AI product development
- Provide Accessibility Conformance Reports (VPATs)
- Offer alternatives where AI paths aren't accessible

## 9. Classified and CUI handling

If your AI touches classified information or Controlled Unclassified Information:

- Specialized infrastructure (classified clouds, IL5/IL6 environments)
- Personnel clearances and ITAR / EAR compliance
- Separate AI models, training data, and security controls
- Specific incident reporting

## 10. Export controls

AI models and trained weights may be subject to export controls:

- EAR rules include AI-related items and expanding scope
- ITAR for defense articles
- Deemed exports to foreign persons
- Release of models / weights to foreign cloud regions

Review model / data flows for export-control classification.

## 11. AI-specific procurement posture

Expect federal agencies to ask:

- NIST AI RMF alignment
- Impact assessment artifacts
- Bias and safety testing results
- Model transparency / provenance
- Training data descriptions
- Subprocessor list
- Incident reporting commitments
- Cooperation with agency FRIA / impact assessment analogs
- Kill switch and rollback
- Accessibility posture
- Human alternatives

Prepare a federal AI information packet that can be handed over with minimal rework per solicitation.

## 12. Sub-contractor flow-down

Primes must flow down applicable clauses to subcontractors. Ensure subcontracts include:

- NIST AI RMF alignment
- Data handling consistent with Privacy Act / FISMA / CUI rules
- Cooperation with oversight
- Reporting obligations

## 13. Practical readiness path

1. AI System Inventory that tags federal-exposed systems
2. NIST AI RMF alignment documented
3. Federal AI information packet prepared
4. Sub-contract templates updated
5. FedRAMP path for cloud systems
6. Section 508 accessibility posture
7. OFCCP analysis for any hiring AI
8. Classified / CUI handling verified if applicable
9. Export-control classification for AI assets
10. Staff training

## 14. Common traps

- Assuming commercial SOC 2 is sufficient for federal (FedRAMP has its own baseline)
- Missing flow-down to subcontractors
- OFCCP gap on hiring AI
- Section 508 oversight
- Using foreign cloud regions for federal data without export-control analysis
- Delayed incident reporting to the contracting officer

## 15. Kit contents

- `overview.md` — this document
- `checklist.md` — readiness checklist

---

## Disclaimer

This document is educational only. It is not legal advice. Consult qualified federal contracting counsel.
