# AI Procurement Checklist (Lite)

**Tool under consideration:** ______________________________
**Requesting team / owner:** ______________________________
**Date:** ______________________________
**Completed by:** ______________________________

> **When to use this.** For Tier 1 (low-stakes) AI tool approvals and early triage of new vendors. It takes 15–30 minutes. If a tool would be **Tier 2 or Tier 3** (as defined in the AI Governance Framework), or if any answer below is a concern, switch to the full **AI Vendor Risk Assessment** instead.

---

## 1. What and why (5 minutes)

- [ ] **1.1** One-sentence description of what the tool does:

> ____________________________________________________

- [ ] **1.2** What problem does it solve for us?

> ____________________________________________________

- [ ] **1.3** Who will use it? (team, count)

> ____________________________________________________

- [ ] **1.4** Roughly how often?

> ____________________________________________________

- [ ] **1.5** Is there an approved tool that already does this? If yes, why isn't it enough?

> ____________________________________________________

## 2. Data triage (5 minutes)

- [ ] **2.1** What data goes in? (check all)
  - [ ] Only information already public
  - [ ] Internal business information
  - [ ] Customer personal data
  - [ ] Employee personal data
  - [ ] Health / financial / biometric / children's data
  - [ ] Source code or other IP
  - [ ] Third-party data under NDA

- [ ] **2.2** If anything other than "only public information" is checked → **STOP. Use the full Vendor Risk Assessment instead.**

- [ ] **2.3** Will our inputs be used to train the vendor's models?
  - [ ] No
  - [ ] Only with our opt-in
  - [ ] Default yes — opt-out available (confirm opt-out before first use)
  - [ ] Default yes — no opt-out (not acceptable even for Tier 1; escalate)

## 3. Use triage (5 minutes)

- [ ] **3.1** Will this tool be used to make or materially inform decisions about people (hiring, firing, lending, pricing, health, housing, insurance, benefits, education, legal services)?
  - [ ] No
  - [ ] Yes → **STOP. Tier 3 — use full Vendor Risk Assessment and Impact Assessment.**

- [ ] **3.2** Will the output be shown directly to customers, patients, or the public?
  - [ ] No
  - [ ] Yes → Tier 2 → use full Vendor Risk Assessment

- [ ] **3.3** Will this tool be connected to other company systems (email, CRM, databases, production code)?
  - [ ] No
  - [ ] Yes → escalate to IT/Security before approval

## 4. Basic vendor hygiene (10 minutes)

- [ ] **4.1** Vendor has a published privacy policy and terms of service
- [ ] **4.2** Vendor has basic security posture (SOC 2 or ISO 27001, or reasonable equivalent)
- [ ] **4.3** Encryption in transit (HTTPS) — always yes, but confirm
- [ ] **4.4** Vendor supports SSO and MFA, or we're OK without for this use
- [ ] **4.5** Data residency known and acceptable
- [ ] **4.6** Vendor is not known to have a recent unresolved breach
- [ ] **4.7** Vendor's AI use is disclosed in their public materials

## 5. Cost and commitment (5 minutes)

- [ ] **5.1** Pricing model clear (seat, usage, flat)
- [ ] **5.2** Contract length acceptable (month-to-month or annual with exit)
- [ ] **5.3** Exit path: how do we export our data and stop using the tool?
- [ ] **5.4** Budget source identified

## 6. Decision

- [ ] **6.1** Recommended action:
  - [ ] Approve for Tier 1 use
  - [ ] Escalate to full Vendor Risk Assessment
  - [ ] Reject
  - [ ] Need more information

- [ ] **6.2** Conditions (if approved):

> ____________________________________________________

- [ ] **6.3** Approved by: ______________________________  Date: ______________________________

- [ ] **6.4** Next review date: ______________________________

## 7. If approved — admin

- [ ] **7.1** Added to AI System Inventory
- [ ] **7.2** Added to approved tools list with scope
- [ ] **7.3** SSO / MFA configured (if available)
- [ ] **7.4** Users notified and trained
- [ ] **7.5** Training opt-out confirmed (if applicable)

---

## Escalation triggers — use the full Vendor Risk Assessment if any of these

- Data handled is not purely public
- Tool will make/inform decisions about people
- Tool integrates with internal systems
- Annual spend exceeds [$ THRESHOLD]
- Tool touches customer-facing workflows
- Jurisdiction-specific AI regulation may apply (Colorado AI Act, EU AI Act, NYC LL 144, California, Texas, Illinois, etc.)
- Tool is offered by a vendor without a SOC 2 or equivalent

---

## Disclaimer

This document is a template for educational and informational purposes only. It is not legal advice. Consult qualified counsel for procurement decisions with legal or compliance exposure.
