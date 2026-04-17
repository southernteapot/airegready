# AI Subprocessor Management — Procedure

**Company:** [COMPANY NAME]
**Owner:** [PRIVACY LEAD / AI GOVERNANCE LEAD]
**Cadence:** quarterly review; ongoing intake
**Related documents:** AI Vendor Risk Assessment, AI Data Governance Policy, AI System Inventory

> **How to use this procedure.** Many AI providers rely on their own subprocessors (foundation-model hosts, cloud infrastructure, vector stores, content-moderation services, etc.). Your obligations to customers extend down the chain. This procedure explains how to keep a current, trustworthy subprocessor list and fulfill notice, consent, and contractual obligations.

---

## 1. Why this matters

- **GDPR Art 28** and most DPAs require processors to keep subprocessors under contractual obligations no less protective than the primary DPA
- **Customers** increasingly require pre-approval or notice of subprocessor changes
- **EU AI Act** providers and deployers must understand and disclose data flows
- **Sector rules** (HIPAA, GLBA) require flow-down to subprocessors
- **Audit readiness** — examiners and auditors want the list

## 2. What counts as a subprocessor

Any third party that processes personal data on your behalf in connection with AI features:

- **Foundation-model providers** (OpenAI, Anthropic, Google, Cohere, Mistral, etc.)
- **Cloud hosting** (AWS, GCP, Azure)
- **Vector / embedding databases** (Pinecone, Weaviate, Qdrant)
- **Retrieval / search infrastructure**
- **Content moderation / safety** (Perspective, third-party filters)
- **Transcription / STT / TTS**
- **Analytics and monitoring**
- **Customer support infrastructure** that sees AI prompts/outputs
- **Email / notification providers** if content flows through them

Not subprocessors (but still need governance): general-purpose business tools that don't touch AI data (accounting, HR, etc.).

## 3. Intake: adding a subprocessor

For each proposed new subprocessor:

- [ ] Identified by business owner
- [ ] Vendor Risk Assessment completed (use the AI Vendor Risk Assessment)
- [ ] DPA reviewed / signed
- [ ] BAA reviewed / signed (if PHI)
- [ ] SCCs executed (if EU data to non-adequate country)
- [ ] Sector-specific terms (financial, health, etc.)
- [ ] SOC 2 / ISO report reviewed
- [ ] Data residency confirmed
- [ ] Retention and deletion terms confirmed
- [ ] Added to public subprocessor list (if required by DPAs)
- [ ] Customers notified per contract (if pre-existing customers affected)
- [ ] Entry in AI System Inventory with subprocessor tag

## 4. Changes: replacing or modifying a subprocessor

For each change:

- [ ] Rationale documented (why switching, cost, capability, compliance)
- [ ] New subprocessor cleared through Intake
- [ ] Data migration plan
- [ ] Notification to customers per DPA commitments (typical: 30-90 days pre-notice; right to object)
- [ ] Subprocessor list updated
- [ ] Old subprocessor offboarded (see AI Retirement / Decommissioning Checklist)

## 5. Notice obligations

Most DPAs commit to:

- Maintaining a current subprocessor list (usually public on trust center)
- Advance notice of new subprocessors (30-90 days typical)
- Right to object on reasonable data-protection grounds
- If customer objects: good-faith discussion; if unresolved, customer may terminate the affected services

Build the notification workflow:

- [ ] Email template
- [ ] Audience: customers with signed DPAs
- [ ] Channel: email + trust center update
- [ ] Track objections and resolutions

## 6. Public subprocessor list

Maintain a public page (e.g., `[COMPANY]/trust/subprocessors`) with:

- Name of each subprocessor
- Service they provide
- Location(s) where processing occurs
- Link to their privacy / security info
- Last-updated date

Policy:

- Customers can subscribe to updates
- Changes are logged with history

## 7. Contractual flow-down

DPA with each subprocessor must include, at minimum:

- Processing only on [COMPANY NAME]'s documented instructions
- Confidentiality obligations
- Appropriate technical and organizational measures
- No further subprocessing without written consent
- Notification of personal data breaches
- Assistance with Data Subject rights and DPIAs
- International transfer mechanisms
- Deletion or return of personal data at end of service
- Audit rights

For AI-specific subprocessors, additionally:

- No training on our data (unless opted in)
- Notice of material model changes
- Cooperation with our regulatory obligations (EU AI Act, CAIA, sector rules)

## 8. Ongoing oversight

### Quarterly

- [ ] Review active subprocessor list for accuracy
- [ ] Review any reported incidents at subprocessors
- [ ] Review any customer objections
- [ ] Review contract renewal dates approaching

### Annually

- [ ] Deep review: SOC 2 re-reviewed; financial health; strategic risk
- [ ] Refresh public list
- [ ] Update procedures based on regulatory changes

### Incident-driven

- [ ] If subprocessor has a public incident, assess impact
- [ ] Customer notifications as required
- [ ] Corrective actions tracked

## 9. Metrics

- Active subprocessor count
- New / removed per quarter
- Customer objections received and resolutions
- Subprocessor incidents (count, severity)
- Renewal / contract gaps closed within X days
- Audit findings related to subprocessors

## 10. Common mistakes

- **Forgetting the foundation-model provider** — they're a subprocessor
- **Not updating the public list** when adding a new AI vendor
- **Skipping notice to customers** when swapping subprocessors
- **Letting a DPA lapse** without re-execution
- **Not flowing down BAA** to health-data subprocessors
- **Missing a sub-subprocessor** in your diligence

## 11. Template — subprocessor addition notice to customers

> **Subject:** Upcoming update to our subprocessor list
>
> Dear [CUSTOMER NAME],
>
> We are writing to inform you of an upcoming change to our subprocessor list, effective [DATE].
>
> **What's changing**: We are adding [SUBPROCESSOR NAME] as a subprocessor for [SERVICE DESCRIPTION]. This change supports [BUSINESS REASON].
>
> **What this means for you**: [DATA CATEGORIES] will be processed by [SUBPROCESSOR] in [LOCATION]. Their role is strictly as a data processor acting on our instructions.
>
> **Due diligence**: We have completed our vendor risk assessment and executed a DPA with [SUBPROCESSOR] requiring protections no less than the terms of our DPA with you.
>
> **Your rights**: You may object to this change on reasonable data-protection grounds by replying to this email by [DATE]. If you don't object, the change will take effect as planned.
>
> **Updated list**: Our current subprocessor list is always available at [URL].
>
> Questions? Reply to this email or reach us at [PRIVACY EMAIL].
>
> [COMPANY NAME] Privacy Team

---

## Disclaimer

This document is a template for educational and informational purposes only. It is not legal advice.
