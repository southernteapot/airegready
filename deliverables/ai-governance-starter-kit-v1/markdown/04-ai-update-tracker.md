# AI Update Tracker

**System:** ______________________________
**Business owner:** ______________________________
**Technical owner:** ______________________________
**Log owner:** ______________________________
**Retention:** life of system + [3] years

> **How to use this tracker.** Every material change to an AI system, vendor tool, prompt, model, integration, or policy gets a log entry. Link entries to your AI Use Inventory, Risk Intake records, and Risk Register. The log supports audits, regulator inquiries, customer questions, and internal governance (the EU AI Act, for example, expects high-risk systems to keep a change history).

---

## Log format

Each entry captures:

| Field | Description |
| --- | --- |
| **Entry ID** | Sequential |
| **Date** | When the change was made (or scheduled) |
| **Version** | New version of the system |
| **Previous version** | Version before this change |
| **Change class** | Minor / Moderate / Material / Emergency |
| **Summary** | One-sentence description of the change |
| **Components changed** | Model / prompt / data / tool / guardrail / integration / infra / UX |
| **Reason** | Why the change was made |
| **Expected impact** | Plain language |
| **Testing** | Pre-deployment tests performed (functional, performance, bias, red-team) |
| **Approver(s)** | Who approved the change |
| **Deployed by** | Who executed the change |
| **Rollout strategy** | Full / canary / region-by-region / user-by-user |
| **Rollback plan** | Yes/No; method |
| **Post-deploy check** | What's monitored; result |
| **User / customer notice** | Yes/No; link to notice |
| **Regulatory records updated** | EU database / Colorado ADMT records / other |
| **Linked documents** | Inventory entry / risk intake record / risk register / incident records / vendor docs / tickets |
| **Author of log entry** | Name |

---

## Example entries

### Entry #1 (small team - prompt fix)

| Field | Value |
| --- | --- |
| Date | 2026-04-17 |
| Version | v1.3 |
| Previous version | v1.2 |
| Change class | Moderate |
| Summary | Updated the support chatbot system prompt so it stops quoting an outdated price |
| Components changed | System prompt |
| Reason | Two customers were quoted last year's price |
| Expected impact | Fewer pricing errors; slightly longer replies |
| Testing | Re-ran 12 saved test questions, including the 3 price-related ones |
| Approver(s) | Founder (also AI governance owner) |
| Deployed by | Founder |
| Rollout strategy | Full (single low-risk change) |
| Rollback plan | Restore the saved v1.2 prompt |
| Post-deploy check | Watched support replies for 3 days; no new pricing complaints |
| User / customer notice | Not required (quality improvement) |
| Regulatory records updated | No |
| Linked documents | Inventory entry AIS-001; complaint notes 2026-04-15 |
| Author of log entry | Founder |

### Entry #2 (small team - vendor model upgrade)

| Field | Value |
| --- | --- |
| Date | 2026-04-25 |
| Version | v2.0 |
| Previous version | v1.3 |
| Change class | Material |
| Summary | Switched the chatbot to the vendor's newer model after a deprecation notice |
| Components changed | Foundation model |
| Reason | Vendor is retiring the old model; the newer model tested as more accurate |
| Expected impact | Some tone and wording changes in replies |
| Testing | Re-ran the saved test questions; spot-checked 25 anonymized real conversations side by side |
| Approver(s) | Founder and operations lead |
| Deployed by | Operations lead |
| Rollout strategy | Internal-only testing for one week, then switched for customers |
| Rollback plan | Old model remains available from the vendor for 90 days |
| Post-deploy check | Support ticket volume stable after two weeks |
| User / customer notice | Customer FAQ updated |
| Regulatory records updated | No |
| Linked documents | Risk intake record 2026-04-22; vendor deprecation email |
| Author of log entry | Operations lead |

### Entry #3 (emergency - integration permissions)

| Field | Value |
| --- | --- |
| Date | 2026-05-02 |
| Version | v2.0.1 |
| Previous version | v2.0 |
| Change class | Emergency |
| Summary | Disconnected the meeting-notes tool from the shared drive after it summarized a confidential folder |
| Components changed | Integration permissions |
| Reason | The tool had broader drive access than intended |
| Expected impact | Notes tool now works only on meeting recordings, not stored files |
| Testing | Confirmed the tool can no longer access the confidential folder |
| Approver(s) | Founder (same day); reviewed at the next governance meeting |
| Deployed by | IT contractor |
| Rollout strategy | Immediate |
| Rollback plan | Not applicable - access intentionally removed |
| Post-deploy check | Access audit after one week |
| User / customer notice | Internal note to staff about the new limits |
| Regulatory records updated | Issue added to the risk register; confirm with qualified review whether any notification duty applies if sensitive data was involved |
| Linked documents | Incident note 2026-05-02; risk register RISK-AI-006 |
| Author of log entry | Founder |

---

## Review

- Monthly: business owner reviews log; spot-checks entries
- Quarterly: AI Governance Lead reviews logs across systems for patterns
- Annually: sample audit for completeness and accuracy
- On regulator inquiry: retrieve relevant entries

## Preservation

- Don't delete entries; correct with a new entry if needed
- Archive the log with the system's records when a tool is retired, and keep the retired entry in your AI Use Inventory
- Retention aligns with sector rules and the longer of: operational need, EU AI Act 10-year (for high-risk), sector-specific retention, or 3 years minimum

## Disclaimer

This document is a template for educational and informational purposes only. It is not legal advice and does not create an attorney-client relationship. Do not treat it as a compliance guarantee. Consult qualified legal counsel before relying on this template for legal compliance or regulated use cases.
