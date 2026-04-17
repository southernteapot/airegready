# AI and Data Subject Access Request (DSAR) Playbook

**Purpose:** Procedure for handling data subject rights requests (access, correction, deletion, portability, objection, opt-out of ADMT) when AI systems are involved.

**Audience:** Privacy team, AI Governance Lead, engineering, support.

> **How to use.** DSARs become harder when AI is in the stack — training data, embeddings, vector stores, LLM logs, model weights, and auto-decisioning all complicate fulfillment. This playbook helps you handle requests without breaking AI systems or missing legal obligations.

---

## 1. Rights landscape

Rights the playbook covers:

- **Access** — what personal data do you have about me?
- **Rectification / correction** — fix inaccuracies
- **Erasure / deletion** — "right to be forgotten" (GDPR), deletion (CCPA/CPRA, state laws)
- **Restriction** — pause processing in certain circumstances
- **Portability** — machine-readable export
- **Objection** — stop processing for legitimate-interest basis or marketing
- **ADMT-specific** — opt out of automated decision-making; access meaningful information about the logic; request human review (CCPA/CPRA, GDPR Art 22, Colorado AI Act, EU AI Act Art 86)

Each right has jurisdiction-specific contours. This playbook assumes GDPR / UK GDPR, CCPA/CPRA, and common U.S. state privacy laws.

## 2. Where personal data can live in an AI system

Map every location before you start answering requests:

- **Primary datastores** — CRM, user database, product DB
- **Training data** — raw, preprocessed, labeled
- **Fine-tuning / instruction data**
- **Embeddings** / vector database
- **Prompt logs** (user prompts, system prompts, retrieved context)
- **Output logs** (what the model returned)
- **Agent memory / conversation state**
- **Decision logs** (if AI makes or informs decisions)
- **Model weights** — where PII may be memorized
- **Vendor-side copies** — hosted AI vendors may retain
- **Logs across monitoring, analytics, security tools**

Maintain a **data map** so you can answer "where is this person's data" in under 30 minutes.

## 3. Intake

- **Channels**: web form, email, phone, postal mail
- **Verification**: verify identity proportionate to sensitivity of request (per GDPR / CCPA guidance)
- **Acknowledgment**: within statutory window (CCPA: 10 days; GDPR: 1 month absent complexity)
- **Fields**: requester name, email, what right being exercised, scope (global or specific product), verification evidence

## 4. Timelines

| Jurisdiction | Timeline |
| --- | --- |
| GDPR | 1 month; extendable up to 2 additional months for complex |
| CCPA / CPRA | 45 days; extendable 45 days |
| Colorado CPA | 45 days; extendable 45 days |
| Virginia CDPA | 45 days |
| Other states | vary; usually 45 days |

Start the clock on receipt. Track diligently.

## 5. Response by right

### 5.1 Access

Provide:

- Categories of personal data held
- Specific personal data itself (or explain scope)
- Sources
- Purposes
- Categories of recipients / subprocessors
- Retention
- Rights
- If automated decision-making: meaningful information about the logic, significance, and likely consequences

For AI systems, include:

- Prompts / inputs containing the user's personal data (within scope and subject to exceptions)
- Outputs containing the user's personal data
- Scores / classifications / decisions the AI produced about the user
- Embeddings or vector representations are personal data if identifiable; access may be granted or substituted

### 5.2 Correction

Correct the stored personal data. Retrain-time handling:

- Update primary stores
- Regenerate derived artifacts (embeddings) on next refresh cycle
- Flag vendor-side copies for refresh
- Document that model weights from prior training cycles may still contain the original (prior to retraining)

### 5.3 Deletion

Delete from:

- Primary datastores
- Training datasets going forward (flag for exclusion)
- Embeddings / vector stores (delete rows)
- Prompt / output logs (delete or redact)
- Agent memory / conversation state
- Vendor-side systems (request deletion; track confirmation)
- Backups per retention schedule

**Model weights**: PII embedded in trained model weights typically cannot be deleted without retraining. Document:

- The architectural reasons for limitations
- Retraining cycles (when the model will next be trained without the deleted data)
- Compensating measures (blocking outputs that surface memorized PII)
- The right to restrict processing in the interim

Communicate this honestly in the response.

### 5.4 Portability

Provide a machine-readable export. For AI:

- Personal data held in primary stores → structured export
- Conversation history with AI assistants → JSON / CSV
- Scores / decisions about the user → structured with context

### 5.5 Objection to processing

- Stop processing where based on legitimate interests (GDPR)
- Stop marketing profiling in all jurisdictions
- Document the objection in the record

### 5.6 Opt-out of ADMT (CCPA/CPRA, GDPR Art 22, CAIA)

- Route the user to a human alternative for the specific decision
- Preserve the opt-out for future decisions of the same type
- Where feasible, roll back the AI-driven decision; if not, explain why and offer human review

### 5.7 Appeal of adverse AI decisions (Colorado AI Act)

- Human reviewer with sufficient expertise
- Appeal processed within a documented SLA
- Outcome communicated with reasons

## 6. Exceptions and denials

Valid reasons to partially or fully deny (document in response):

- Requester couldn't be verified
- Request would reveal another person's personal data
- Trade secret / confidential commercial information (narrow)
- Legal obligation to retain
- Research / statistical purposes with appropriate safeguards
- Manifestly unfounded or excessive

Never use AI-related exceptions as a blanket denial ("the model is a black box"). The burden is on you to demonstrate.

## 7. AI-specific complications and how to handle them

### 7.1 Memorization

Models may memorize and regurgitate training data. For deletion requests:

- Remove from training data for next cycle
- Document retraining timeline
- Block surface-level memorized content via filters
- Monitor for inadvertent disclosure

### 7.2 Embeddings as personal data

Vector embeddings derived from personal data are often personal data themselves. Treat them as such — index by user ID for access / deletion.

### 7.3 Long context windows

Models with long context may retain inputs from a conversation. Sessions that end should clear context; persistent conversation states should be accessible / deletable.

### 7.4 Vendor-side retention

Your DPA should obligate vendors to delete on request. Track their confirmations. If a vendor refuses, escalate per contract and consider replacement.

### 7.5 Downstream fine-tuned models

If a fine-tuned derivative model was trained on the user's data, retrain or mark as containing data from the requester and document the mitigation.

### 7.6 Logs

Prompt / output logs typically contain personal data. Rotate on a short window (e.g., 30-90 days) for baseline privacy; delete targeted individual entries for DSAR.

## 8. Documentation

For every DSAR involving AI:

- Request details and verification
- Scope determined
- Systems searched
- Data located
- Action taken per system
- Denials and rationale
- Communications with requester
- Confirmations received from vendors
- Closure confirmation

Retain per jurisdiction (CA minimum 2 years; GDPR subject to general records of processing).

## 9. Tools

- Data inventory / catalog
- DSAR case management (Transcend, OneTrust, DataGrail, internal)
- API integrations to primary stores + vendors for automated fulfillment
- Audit logging of fulfillment actions
- Dashboards for timeline and volume

## 10. Metrics

- Mean time to respond
- Right-mix (access / deletion / etc.)
- Vendor response time
- Incomplete-fulfillment escalations
- Appeals

## 11. Training

- Privacy team trained on AI architecture
- Engineering trained on DSAR tooling
- Support trained on triage

## 12. Common mistakes

- Incomplete search (missing prompt / output / embedding stores)
- Generic "we can't delete from the model" responses without analysis
- Forgetting vendor-side copies
- Missing the CCPA / CPRA opt-out of ADMT mechanics
- Using the "trade secret" exception broadly
- Not rolling back an adverse AI decision after the underlying data is corrected

---

## Disclaimer

This document is a template for educational and informational purposes only. It is not legal advice.
