# AI Procurement Checklist Lite

**Tool under consideration:** ______________________________

**Requesting team / owner:** ______________________________

**Date:** ______________________________

**Completed by:** ______________________________

Use this for low-stakes AI tool approvals and early triage of new vendors. It is designed to take 15-30 minutes. If any stop trigger appears, use the full AI Vendor Risk Assessment Questionnaire instead.

## 1. What and why

- [ ] One-sentence description of what the tool does:

> ____________________________________________________

- [ ] What problem does it solve for us?

> ____________________________________________________

- [ ] Who will use it? Include role, team, and approximate count.

> ____________________________________________________

- [ ] Roughly how often will it be used?

> ____________________________________________________

- [ ] Is there an approved tool that already does this? If yes, why is it not enough?

> ____________________________________________________

## 2. Data triage

What data goes in? Check all that apply.

- [ ] Only information already public
- [ ] Internal business information
- [ ] Customer personal data
- [ ] Employee personal data
- [ ] Student, applicant, contractor, or volunteer personal data
- [ ] Health information
- [ ] Financial information
- [ ] Biometric information
- [ ] Children's data
- [ ] Source code or other intellectual property
- [ ] Third-party data under NDA or contract
- [ ] Legal, privileged, or dispute-related information
- [ ] Government ID numbers

**Stop trigger:** If anything other than only public information is checked, use the full AI Vendor Risk Assessment Questionnaire unless a qualified reviewer approves a narrower low-risk path.

Will our inputs or outputs be used to train the vendor's models or improve the product?

- [ ] No
- [ ] Only with our opt-in
- [ ] Yes by default, opt-out available
- [ ] Yes by default, no opt-out
- [ ] Unknown

**Stop trigger:** If the answer is yes by default with no opt-out, or unknown, do not approve until clarified.

## 3. Use triage

Will this tool make or materially inform decisions about people, including hiring, firing, lending, pricing, housing, insurance, benefits, education, healthcare, legal services, public services, safety, eligibility, or access to important opportunities?

- [ ] No
- [ ] Yes
- [ ] Unknown

**Stop trigger:** If yes or unknown, use the full questionnaire and route to qualified review.

Will the output be shown directly to customers, clients, patients, students, applicants, employees, or the public?

- [ ] No
- [ ] Yes
- [ ] Unknown

**Stop trigger:** If yes or unknown, use the full questionnaire before approval.

Will this tool connect to other company systems such as email, CRM, databases, file storage, code repositories, production systems, or internal chat?

- [ ] No
- [ ] Yes
- [ ] Unknown

**Stop trigger:** If yes or unknown, involve IT/security review before approval.

## 4. Basic vendor hygiene

- [ ] Vendor has a published privacy policy and terms of service.
- [ ] Vendor has a security overview, trust center, or equivalent documentation.
- [ ] Vendor has SOC 2 Type II, ISO 27001, or a reasonable equivalent for the proposed use.
- [ ] Data is encrypted in transit and at rest.
- [ ] SSO, MFA, and role-based access are available or not needed for this low-stakes use.
- [ ] Data residency and subprocessors are known and acceptable.
- [ ] Vendor is not known to have a recent unresolved security incident.
- [ ] Vendor's AI features and data-use practices are disclosed in public or contract materials.

## 5. Cost and commitment

- [ ] Pricing model is clear.
- [ ] Contract length is acceptable.
- [ ] Cancellation and renewal terms are understood.
- [ ] Data export and termination path are understood.
- [ ] Budget owner is identified.

## 6. Decision

Recommended action:

- [ ] Approve for low-stakes use only
- [ ] Approve with conditions
- [ ] Escalate to full AI Vendor Risk Assessment
- [ ] Reject
- [ ] Need more information

Conditions if approved:

> ____________________________________________________

Approved scope of use:

> ____________________________________________________

Approved by: ______________________________  Date: ______________________________

Next review date: ______________________________

## 7. If approved - admin

- [ ] Added to AI use inventory.
- [ ] Added to approved tools list with approved scope.
- [ ] SSO / MFA configured if available and needed.
- [ ] Users notified of approved data rules and review limits.
- [ ] Training or product-improvement opt-out confirmed if applicable.
- [ ] Next review date added to calendar or tracker.

## Escalation triggers

Use the full AI Vendor Risk Assessment Questionnaire if any of these are true:

- Data handled is not purely public.
- Tool may affect decisions about people.
- Tool integrates with internal systems.
- Tool touches customer-facing workflows.
- Tool is used for health, financial, legal, HR, education, insurance, housing, credit, public services, safety, or other sensitive workflows.
- Vendor will train on customer inputs or outputs.
- Vendor cannot provide basic privacy, security, retention, or deletion answers.
- Annual spend exceeds your internal threshold.
- Jurisdiction-specific AI regulation, privacy law, sector rules, or contract obligations may apply.
- Reviewer is unsure whether the use is low stakes.

## Disclaimer

This document is a template for educational and informational purposes only. It is not legal advice. Consult qualified counsel and appropriate privacy, security, procurement, HR, and technical reviewers for procurement decisions with legal, security, or compliance exposure.
