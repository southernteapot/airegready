# AI Incident Response Plan

**Company:** [COMPANY NAME]
**Version:** 1.0
**Effective date:** [DATE]
**Owner:** [INCIDENT RESPONSE LEAD — often the AI Governance Lead or CISO]
**Next review:** [DATE + 12 months]

> **How to use this document.** This is the playbook you follow when an AI system at [COMPANY NAME] goes wrong. Print it. Bookmark it. Make sure the people named in it know they're named in it. Run a tabletop exercise at least once a year.

---

## 1. What counts as an AI incident

An AI incident is any event in which an AI system used by [COMPANY NAME] causes, contributes to, or is likely to cause:

- **Harm to a person** — physical, financial, legal, dignitary, discriminatory, or reputational
- **Data exposure** — personal data, confidential business data, or third-party data leaked, stolen, or used outside agreed purposes
- **Wrong or misleading output at scale** — inaccurate outputs sent to customers, regulators, or the public
- **Security breach** — unauthorized access to the AI system, prompt injection exploiting the system, model theft
- **Regulatory exposure** — a situation that may trigger notification obligations under law or contract
- **Material operational failure** — the AI system is down, drifting, or producing outputs inconsistent with its intended use

Treat borderline events as incidents and downgrade later. Over-reporting is better than under-reporting.

## 2. Severity levels

| Severity | Definition | Example | Target time to first response |
| --- | --- | --- | --- |
| **SEV-1** Critical | Active harm to people; major data exposure; regulator likely to be notified; media attention possible | Customer PII leaked via AI chatbot; hiring AI found to reject applicants by protected class | **15 minutes**, 24/7 |
| **SEV-2** High | Significant harm likely or confirmed for a limited set of people; internal data exposed; system down affecting customers | One customer receives confidential info about another customer via chatbot | **1 hour**, business hours + on-call |
| **SEV-3** Moderate | Isolated error; limited blast radius; no personal harm yet | AI tool produced inaccurate public-facing blog post with false citations | **1 business day** |
| **SEV-4** Low | Near-miss; anomaly caught before impact | Prompt injection attempt blocked by guardrails; internal audit finds a training-data flag | **3 business days** |

The Incident Commander (see Section 4) can upgrade or downgrade severity as facts develop.

## 3. Reporting — how an incident starts

Anyone can report a suspected AI incident. Reports may come from:

- **Employees** — via [REPORTING CHANNEL — e.g., incidents@company.com, Slack #ai-incidents, anonymous hotline]
- **Customers** — via support tickets, complaints, or contact form
- **External researchers / public** — via security@company.com or responsible-disclosure contact
- **Automated monitoring** — alerts from logging systems, error budgets, drift detection
- **Regulators or law enforcement** — routed through [LEGAL CONTACT]

### Intake form (minimum fields)

- Who is reporting
- When the issue was observed
- Which AI system is involved (if known)
- What happened (plain language)
- Who is affected (internal team, specific customer(s), general public)
- Evidence attached (screenshots, logs, transcripts)
- Whether the reporter thinks personal data is involved

The intake coordinator ([IR LEAD or on-call]) acknowledges receipt within the target time (Section 2) and logs the report in the incident register.

## 4. Roles during an incident

### Incident Commander (IC)

- Single point of decision-making authority for the duration of the incident
- Default: [IR LEAD]. May delegate to a named deputy for a specific incident.
- Coordinates all workstreams; decides on severity, communications, and resolution

### Technical Lead

- Owns the technical investigation: logs, reproduction, containment, fix
- Pulled from [ENGINEERING TEAM or IT/SECURITY]

### Business Owner

- The person accountable for the affected AI system in the AI System Inventory
- Provides context on intended use, user base, and business impact

### Communications Lead

- Drafts and coordinates all customer, employee, and external messaging
- Default: [HEAD OF MARKETING or HEAD OF COMMS], with Legal review

### Legal Lead

- Analyzes regulatory notification obligations (GDPR 72-hour, state breach laws, EU AI Act Art 73, HIPAA, sector rules, contractual)
- Reviews all external communications
- Default: [GENERAL COUNSEL or outside counsel on retainer]

### Privacy Lead

- Scopes personal data exposure, categories of people affected, and remediation
- Coordinates data subject notifications and rights requests

### Scribe

- Keeps a timestamped log of decisions and actions throughout the incident
- Rotates; any participant can scribe

### Executive Sponsor

- Kept informed on SEV-1 and SEV-2; makes go/no-go calls on high-impact communications
- Default: [CEO / COO]

## 5. The response playbook

Think of response in six phases. They overlap; don't wait for one to finish before starting the next.

### Phase 1 — Detect

- Report arrives (Section 3) or monitoring fires an alert
- Intake coordinator opens an incident record and pages on-call
- On-call acknowledges within target time

### Phase 2 — Triage and assemble

- On-call performs a fast fact-check: is this real? Roughly how big?
- Assign severity (Section 2)
- Appoint Incident Commander (IC)
- IC pulls in roles from Section 4 as needed
- Open dedicated channel (e.g., `#inc-YYYYMMDD-short-name`) and bridge
- Start the timestamped log

### Phase 3 — Contain

Priority: stop new harm. Options include:

- Pause or disable the AI system (kill switch)
- Rotate keys, revoke tokens, disable integrations
- Pull the affected tool from the approved list temporarily
- Redirect traffic to a human-only path (e.g., disable chatbot, route to support agents)
- Block compromised vendor IPs or accounts
- Preserve evidence: freeze logs, snapshot configurations

If the IC thinks containment will itself cause material harm (e.g., disabling a safety-critical system), escalate to the Executive Sponsor before acting.

### Phase 4 — Investigate

Run in parallel with containment once the system is stable.

- Pull logs, prompts, outputs, configs, versions, training data changes
- Identify affected users / records
- Identify root cause: prompt injection? hallucination? model drift? vendor outage? configuration error? misuse?
- Identify scope: how many people? which jurisdictions? what data classes?
- Preserve evidence in a write-protected location
- Draft a preliminary timeline

### Phase 5 — Notify

Notification has three audiences. Each has its own clock.

**Internal**
- Executive Sponsor (SEV-1/2: immediately; SEV-3: next business day)
- Affected teams (support, sales, account management)
- All-hands summary for SEV-1

**Customers / affected individuals**
- Driven by severity + contract + law
- Draft must be reviewed by Legal and Communications before going out
- Include: what happened, when, what data, what we're doing, what they should do, who to contact

**Regulators and contract counterparties**
- GDPR: 72 hours from awareness for personal data breaches (Art 33)
- U.S. state breach notification laws: vary (24 hours to 60 days)
- EU AI Act Art 73: reporting of serious incidents for high-risk systems; check current thresholds
- HIPAA breach notification: without unreasonable delay, no later than 60 days
- Sector regulators (FTC, state AGs, financial regulators, health regulators): per applicable rules
- Contract notice: per vendor and customer agreements
- **Legal Lead owns this matrix and maintains a current notification checklist**

Do not speculate in notifications. Stick to what you know.

### Phase 6 — Resolve and recover

- Apply fix (model change, vendor patch, configuration, re-training, rollback, vendor change)
- Verify fix works and that the incident is contained
- Restore affected services carefully, with elevated monitoring
- Communicate resolution to all notified parties
- IC declares incident closed once no open workstreams remain

### Phase 7 — Post-incident review

Within [5] business days of resolution:

- IC runs a blameless postmortem
- Document: timeline, what went well, what didn't, contributing factors, action items with owners and due dates
- Review with the AI Review Committee
- Update policies, monitoring, training, or vendor posture as needed
- Share sanitized learnings broadly

## 6. Notification templates

The following templates are starting points. Legal must review every notification before it leaves.

### 6.1 Internal notification (SEV-1/2)

> **Subject:** [SEV-1/2] AI Incident — [short description]
>
> **What:** Brief plain-language description.
>
> **When:** Detected at [TIME], reported at [TIME].
>
> **Affected:** [Scope: customers / employees / specific systems]
>
> **Status:** [Contained / under investigation / customer-impacting]
>
> **Incident Commander:** [NAME] — use [CHANNEL/BRIDGE] for questions.
>
> **Do not communicate externally without approval from [COMMS LEAD] and [LEGAL].**

### 6.2 Customer notification (generic)

> **Subject:** Important notice about [PRODUCT / SERVICE]
>
> Dear [CUSTOMER NAME],
>
> On [DATE], we identified [BRIEF DESCRIPTION, NO SPECULATION]. Based on our investigation so far, [WHAT WE KNOW ABOUT WHETHER THIS AFFECTS YOU].
>
> **What we are doing.** [ACTIONS TAKEN: e.g., disabled the affected feature, rotated credentials, engaged outside experts, notified law enforcement / regulators].
>
> **What we recommend you do.** [SPECIFIC ACTIONS: change passwords, review account activity, watch for phishing].
>
> **If you have questions**, contact us at [CONTACT] or [PHONE]. We will follow up as we learn more.
>
> We are sorry this happened. We take our responsibility to you seriously.
>
> [NAME, TITLE]

### 6.3 Regulator / authority notification

Use the regulator's required form where one exists (e.g., data protection authority breach form). Otherwise include at minimum:

- Nature of the incident, categories and approximate number of people affected, approximate number of records
- Contact point
- Likely consequences
- Measures taken or proposed

## 7. Evidence preservation

From the moment an incident is suspected:

- Do not delete logs, prompts, outputs, or configurations
- Snapshot the current state of the affected system
- Capture any vendor portal or support messages
- Move copies to a write-protected incident evidence location
- Note chain of custody in the timeline

Legal hold may apply. Check with Legal before any data retention decision.

## 8. Communication discipline during an incident

- **Speak only in the dedicated incident channel.** No DMs, no side threads.
- **Acknowledge what you know and what you don't.** Don't fill gaps with guesses.
- **Timestamp every update.**
- **External messages go through the Communications Lead and Legal. No exceptions.**
- **Social media silence** until cleared. A wrong public statement will hurt more than a delayed one.

## 9. Practice

- Tabletop exercise at least annually, with at least one scenario tailored to a realistic AI failure (prompt injection, bias finding, vendor breach, hallucinated customer output)
- Review and update this plan within [30] days of each exercise and each real incident
- New responders read this plan within [14] days of taking the role

---

## Appendix A — Quick reference card (printable)

1. **Suspected incident?** Acknowledge, log, page on-call.
2. **On-call:** Triage. Is it real? Severity? Appoint Incident Commander.
3. **IC:** Open channel. Call roles. Start timestamped log. Contain first.
4. **Contain:** Pause system. Preserve evidence. Stop new harm.
5. **Investigate:** Logs. Scope. Root cause. Affected users.
6. **Notify:** Internal first. Customers and regulators per Legal's guidance.
7. **Resolve:** Apply fix. Verify. Restore carefully. Close incident.
8. **Review:** Blameless postmortem within 5 business days.

**Hotline:** [NUMBER]
**Escalation:** [IC] → [EXECUTIVE SPONSOR] → [CEO]
**Legal on-call:** [NUMBER]

---

## Disclaimer

This document is a template for educational and informational purposes only. It is not legal advice and does not create an attorney-client relationship. Laws vary by jurisdiction and change often. Consult qualified legal counsel before adopting any incident response plan for your organization.
