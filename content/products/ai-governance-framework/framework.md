# AI Governance Framework

**Company:** [COMPANY NAME]
**Version:** 1.0
**Effective date:** [DATE]
**Owner:** [EXECUTIVE OWNER — e.g., CEO, COO, or designated AI Governance Officer]
**Next review:** [DATE + 12 months]

> **How to use this document.** This is the umbrella document that sits above every other AI policy and template at [COMPANY NAME]. It names who is responsible for what, how AI decisions get made, and what processes everyone follows. The detailed rules live in the companion policies (Acceptable Use, Vendor Risk Assessment, Incident Response, Impact Assessment). Tailor roles to your company's size — a small company can fold several of these into one person.

---

## 1. Why we have a framework

[COMPANY NAME] uses AI to work faster and serve our customers better. AI also creates risks: bad decisions, data leaks, bias, legal exposure, and reputational harm. This framework is how we capture the benefits while keeping the risks in bounds.

Our governance is built on five commitments:

1. **Accountability.** A named human is responsible for every AI system we use.
2. **Transparency.** We know what AI we're using, for what, and on what data.
3. **Proportionality.** We apply more oversight to higher-stakes uses. We don't bury low-stakes uses in process.
4. **Humans in the loop where it matters.** AI assists. People decide — especially for decisions about people.
5. **Continuous review.** AI and the law around it change fast. We check our assumptions regularly.

## 2. Scope

This framework applies to every AI system used by [COMPANY NAME], whether built in-house, embedded in a third-party product, or operated by a vendor on our behalf. It applies to employees, contractors, and anyone else acting on our behalf.

## 3. Roles and responsibilities

### 3.1 AI Governance Sponsor (executive)

- A member of the executive team ([CEO / COO / CTO]) who owns the AI posture of [COMPANY NAME]
- Approves this framework and material changes to it
- Approves high-risk AI deployments (tier 3, see Section 5)
- Represents AI matters to the board and investors

### 3.2 AI Governance Lead

- Day-to-day owner of this framework and the policies beneath it
- Chairs the AI Review Committee (Section 4)
- Maintains the AI System Inventory
- Runs quarterly reporting and annual framework review
- First point of contact for employees with questions

*At a small company this role may be held by [Head of Operations, General Counsel, or Head of Engineering] alongside another role.*

### 3.3 IT / Security Lead

- Maintains the approved AI tools list
- Runs the technical side of vendor assessments
- Handles access controls, SSO configuration, logging, DLP, and related security controls
- Investigates suspected policy violations involving IT systems

### 3.4 Privacy Lead

- Advises on personal data questions under GDPR, CCPA/CPRA, state privacy laws, HIPAA (if applicable), and sector rules
- Reviews data handling sections of vendor assessments
- Maintains records of processing activities (Art 30 GDPR) covering AI systems

### 3.5 HR Lead

- Owns AI policy rollout to employees, training, and acknowledgments
- Handles AI use in hiring, performance, and disciplinary processes
- Coordinates with Legal on employment-law implications of AI use

### 3.6 Legal counsel (internal or external)

- Reviews new AI laws as they come into force
- Approves customer disclosures, contracts, and vendor agreements involving AI
- Advises on incident response when regulatory notification may be required

### 3.7 Business owner (per AI system)

- Named individual accountable for one specific AI system
- Requested the system, runs the impact assessment, monitors for issues, signs annual reviews
- First responder when the system misbehaves

### 3.8 Every employee

- Follows the AI Acceptable Use Policy
- Reports concerns, errors, and incidents

## 4. AI Review Committee

The Review Committee is the forum where AI decisions are made. It meets on a regular cadence and for unscheduled decisions when needed.

### Membership

- AI Governance Lead (chair)
- IT / Security Lead
- Privacy Lead
- HR Lead (for any people-decision use case)
- Legal (standing invitee)
- Business owner (for the item under review)

### Mandate

- Review and approve new AI systems (Tier 2 and Tier 3 — see Section 5)
- Approve new vendors for the approved tools list
- Review incident reports and assign corrective actions
- Review quarterly AI inventory and risk register
- Approve material changes to existing AI systems
- Flag issues to the Governance Sponsor

### Cadence

- **Scheduled meeting:** [monthly / quarterly]
- **Async review channel:** [#ai-review on Slack / Teams channel / shared email]
- **Quorum:** AI Governance Lead plus one of (IT/Security, Privacy, Legal)
- **Decision record:** minutes posted to [LOCATION]

## 5. Risk tiers

Every AI system in use at [COMPANY NAME] is assigned a tier. The tier determines how much oversight the system gets.

### Tier 1 — Low stakes

- **Examples:** internal research drafts, brainstorming, summarizing public documents, basic code assistance on public libraries, image generation for internal decks
- **Required controls:**
  - Must use an approved tool
  - Must follow the Acceptable Use Policy's data handling rules
  - No formal impact assessment required
- **Review:** annual spot check

### Tier 2 — Medium stakes

- **Examples:** customer-facing marketing copy (reviewed before publishing), code assistance on proprietary code, internal data analysis on business data, sales outreach drafts, meeting transcription
- **Required controls:**
  - Must use an approved tool
  - Business owner named and documented
  - Entry in the AI System Inventory
  - Light impact assessment (half-page)
  - Human review of output before external use
- **Review:** annually by the business owner, presented to the Review Committee

### Tier 3 — High stakes

- **Examples:** AI used in hiring, firing, pay, promotion, lending, pricing, insurance, healthcare, legal advice, safety-critical operations, children's services, benefits administration, housing, or education access
- **Also includes:** anything regulated under Colorado AI Act ("consequential decisions"), EU AI Act Annex III, NYC Local Law 144, Illinois AIVIA, California TFAIA, Texas TRAIGA, or sector rules
- **Required controls:**
  - Full Impact Assessment, reviewed by the Review Committee
  - Signed DPA / BAA / SCCs as applicable
  - Documented human-in-the-loop
  - Customer / candidate / employee disclosure as required
  - Bias and performance monitoring with documented thresholds
  - Registered in the AI System Inventory with tier flag
  - Executive Sponsor approval on file
- **Review:** every 6 months, plus after any material change

### Tier 4 — Prohibited

[COMPANY NAME] will not deploy AI that:

- Infers emotions in the workplace or in education (except for medical/safety reasons)
- Performs social scoring of individuals
- Uses biometric categorization to infer race, politics, union membership, religion, sex life, or sexual orientation
- Scrapes facial images from the internet to build recognition databases
- Performs subliminal or manipulative techniques
- Exploits vulnerabilities of specific groups
- Any other use listed as prohibited under EU AI Act Art 5 or other applicable law

## 6. Lifecycle: how an AI system moves through the framework

### Step 1 — Proposal

A team member identifies a problem that AI could solve. They submit a short proposal to [REQUEST CHANNEL] with:

- Problem being solved
- Tool or vendor proposed
- Data that would be involved
- Team/users affected
- Tier estimate

### Step 2 — Assessment

Depending on tier:

- **Tier 1:** IT/Security Lead reviews against approved tools list; approves or refers up.
- **Tier 2/3:** Business owner completes the AI Vendor Risk Assessment and (for Tier 3) the full Impact Assessment. Review Committee reviews.

### Step 3 — Decision

Review Committee issues one of:

- Approve
- Approve with conditions (e.g., "must sign DPA before first use")
- Reject
- More information needed

### Step 4 — Rollout

- Add to AI System Inventory
- Update approved tools list (if new tool)
- Configure guardrails, SSO, logging
- Train users
- Publish customer / candidate disclosures if applicable

### Step 5 — Operate

- Business owner monitors for issues
- Logs retained per [RETENTION POLICY]
- Users report problems via [REPORTING CHANNEL]

### Step 6 — Review

- On tier cadence (annual for Tier 1/2, semi-annual for Tier 3)
- On material change (new features, new data, new users, new jurisdictions)
- On incident

### Step 7 — Retirement

- Export data and outputs as needed
- Confirm vendor deletion per contract
- Update inventory
- Notify users

## 7. Reporting

### Quarterly (to Governance Sponsor)

- New AI systems added this quarter (count and tier)
- Systems retired
- Incidents: summary, root cause, status of corrective actions
- Outstanding risk register items
- Policy exceptions granted
- Training completion rates

### Annually (to the board, for companies that have one)

- State of AI use at [COMPANY NAME]
- Material regulatory changes and our response
- Framework updates
- Top 3 AI risks and mitigations

## 8. Training and awareness

- Every new hire: AI Acceptable Use Policy training within [14] days
- Every employee: annual refresher
- Business owners: additional training on impact assessment and vendor review
- Review Committee: annual calibration session on new laws and emerging risks

## 9. Policy suite

This framework is supported by the following documents, each maintained separately:

- **AI Acceptable Use Policy** — employee-facing rules
- **AI Vendor Risk Assessment** — template and scoring for new vendors
- **AI Impact Assessment** — template for Tier 2 and Tier 3 deployments
- **AI Incident Response Plan** — playbook for when something goes wrong
- **AI System Inventory** — master record of what AI is in use
- **Customer AI Disclosure Templates** — language for websites, chatbots, emails, contracts

## 10. Regulatory watchlist

The AI Governance Lead, supported by Legal, tracks the following regulatory areas. Entries are reviewed at each committee meeting:

- **Federal (U.S.):** FTC enforcement actions on AI claims; EEOC guidance on AI in hiring; state-federal preemption developments
- **State (U.S.):** Colorado AI Act, California TFAIA, Texas TRAIGA, Illinois AIVIA, NYC Local Law 144, Utah AI Policy Act, and others as they pass
- **EU:** AI Act (staggered effective dates through 2027), GDPR intersections, country-level implementing laws
- **UK:** AI regulation white paper, ICO guidance
- **Sector rules:** HIPAA (health), GLBA and CFPB (finance), FERPA (education), COPPA (children), sector-specific bodies

## 11. Exceptions

Requests to deviate from this framework must be submitted in writing to the AI Governance Lead. Exceptions require:

- Business justification
- Risk description
- Mitigating controls
- Expiration date
- Approval from AI Governance Lead; Tier 3 exceptions additionally require Executive Sponsor approval

Exceptions are logged and reviewed quarterly.

## 12. Amendments

This framework will be reviewed at least annually and updated whenever:

- A new applicable law comes into force
- An incident reveals a gap
- [COMPANY NAME] materially changes its business or AI footprint

Material changes require re-approval by the Executive Sponsor and re-acknowledgment from relevant roles.

---

## Disclaimer

This document is a template for educational and informational purposes only. It is not legal advice and does not create an attorney-client relationship. Laws vary by jurisdiction and change often. Consult qualified legal counsel before adopting any governance framework for your organization.
