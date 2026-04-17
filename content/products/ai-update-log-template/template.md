# AI System Update Log — Template

**System:** ______________________________
**Business owner:** ______________________________
**Technical owner:** ______________________________
**Log owner:** ______________________________
**Retention:** life of system + [3] years

> **How to use this log.** Every material change to an AI system gets a log entry. Use alongside the AI Change Management Process. The log supports audits, regulator inquiries (EU AI Act Annex IV requires change history), and internal governance.

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
| **Approver(s)** | Who approved (per Change Management) |
| **Deployed by** | Who executed the change |
| **Rollout strategy** | Full / canary / region-by-region / user-by-user |
| **Rollback plan** | Yes/No; method |
| **Post-deploy check** | What's monitored; result |
| **User / customer notice** | Yes/No; link to notice |
| **Regulatory filings updated** | EU database / CAIA public statement / other |
| **Linked documents** | Impact Assessment / Model Card / Incident records / tickets |
| **Author of log entry** | Name |

---

## Example entries

### Entry #23

| Field | Value |
| --- | --- |
| Date | 2026-04-17 |
| Version | v2.4 |
| Previous version | v2.3 |
| Change class | Moderate |
| Summary | Updated system prompt to handle price inquiries more accurately |
| Components changed | System prompt (support-chatbot) |
| Reason | Customer complaints about wrong pricing info |
| Expected impact | Fewer pricing errors; slightly longer responses |
| Testing | Functional test suite passed; price-query regression set added |
| Approver(s) | AI Governance Lead (async) |
| Deployed by | Engineering — Jane S. |
| Rollout strategy | Canary 10% → 50% → 100% over 3 days |
| Rollback plan | Revert prompt to v2.3; tested |
| Post-deploy check | Price-error rate dropped 60% in first 72h; no regressions detected |
| User / customer notice | Not required (quality improvement) |
| Regulatory filings updated | No |
| Linked documents | Impact Assessment v1.5; ticket PROD-4821 |
| Author | Jane S. |

### Entry #24

| Field | Value |
| --- | --- |
| Date | 2026-04-25 |
| Version | v3.0 |
| Previous version | v2.4 |
| Change class | Material |
| Summary | Model upgrade from claude-sonnet-4-5 to claude-sonnet-4-6 |
| Components changed | Foundation model |
| Reason | Vendor announced deprecation of prior model; new version offers improved accuracy |
| Expected impact | Behavior shifts in ambiguous queries; some tone changes; lower latency |
| Testing | Full functional regression; bias regression (no subgroup change); red-team round (no new issues); performance benchmarking |
| Approver(s) | AI Review Committee (meeting 2026-04-22); Executive Sponsor |
| Deployed by | Engineering — Platform team |
| Rollout strategy | Canary 5% → 25% → 100% over 10 days |
| Rollback plan | Prior model remains available for 90 days |
| Post-deploy check | No behavior regressions at 72h; customer-support ticket volume stable |
| User / customer notice | Enterprise customers notified 14 days in advance; no individual-customer-facing UX changes |
| Regulatory filings updated | No (system not registered in EU database; CAIA statement unchanged) |
| Linked documents | Impact Assessment v2.0; Model Card v2.4 → v3.0; red-team report 2026-04-15 |
| Author | Platform Lead |

### Entry #25 (Emergency)

| Field | Value |
| --- | --- |
| Date | 2026-05-02 |
| Version | v3.0.1 |
| Previous version | v3.0 |
| Change class | Emergency |
| Summary | Urgent prompt patch to mitigate prompt-injection issue discovered in red-team |
| Components changed | System prompt; content filter |
| Reason | Researcher-reported vulnerability; exploitable within one session |
| Expected impact | Blocks injection vector; minor reduction in output flexibility |
| Testing | Targeted test on reported exploit; regression on primary use cases |
| Approver(s) | AI Governance Lead + Executive Sponsor (phone); full Committee post-hoc within 5 days |
| Deployed by | Security Lead |
| Rollout strategy | Full immediate |
| Rollback plan | Prior version preserved; monitoring for unintended effects |
| Post-deploy check | Exploit blocked; no new issues at 48h |
| User / customer notice | Internal only; enterprise customers notified via support |
| Regulatory filings updated | Security incident log updated; no external filings required |
| Linked documents | Incident record INC-2026-05-02; red-team ticket RT-447 |
| Author | Security Lead |

---

## Review

- Monthly: business owner reviews log; spot-checks entries
- Quarterly: AI Governance Lead reviews logs across systems for patterns
- Annually: sample audit for completeness and accuracy
- On regulator inquiry: retrieve relevant entries

## Preservation

- Don't delete entries; correct with a new entry if needed
- Archive with the system when retired (see Retirement Checklist)
- Retention aligns with sector rules and the longer of: operational need, EU AI Act 10-year (for high-risk), sector-specific retention, or 3 years minimum
