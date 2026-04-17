# AI Vendor Risk Assessment

**Vendor name:** ______________________________

**Product/service under review:** ______________________________

**Assessed by:** ______________________________

**Date:** ______________________________

**Business owner (requestor):** ______________________________

**Decision:** ☐ Approved  ☐ Approved with conditions  ☐ Rejected  ☐ More information needed

---

> **How to use this template.** Have the requesting business owner complete Sections 1–3. Send Sections 4–10 to the vendor (or fill from their documentation, security portal, and trust center). Score with the accompanying **scoring-guide.md**. Keep the completed assessment in your AI vendor file.

---

## Section 1 — What the tool is for

1.1 In one sentence, what problem does this tool solve for us?

> ____________________________________________________

1.2 Who on the team will use it? (roles, approximate count)

> ____________________________________________________

1.3 Is there an existing approved tool that already covers this use case? If yes, why isn't it sufficient?

> ____________________________________________________

1.4 What business outcome are we expecting? (e.g., hours saved per week, faster response times, reduced error rate)

> ____________________________________________________

## Section 2 — What data goes into it

Check all that apply:

- [ ] Only information already public on our website
- [ ] Internal business information (plans, memos, non-sensitive documents)
- [ ] Customer names, emails, phone numbers, addresses
- [ ] Customer account data, purchase history, usage data
- [ ] Employee personal information or HR records
- [ ] Health information
- [ ] Financial information (payment details, bank info)
- [ ] Children's data (under 13 in the U.S., under 16 in some jurisdictions)
- [ ] Biometric data (voice prints, face scans, fingerprints)
- [ ] Source code or other intellectual property
- [ ] Third-party data we received under NDA or contract
- [ ] Government ID numbers

2.1 Estimated records/queries per month:

> ____________________________________________________

## Section 3 — How it will be used

3.1 Will this tool make or meaningfully inform decisions about people (hiring, firing, lending, pricing, housing, insurance, benefits, education, healthcare access)?

- [ ] No
- [ ] Yes — describe:

> ____________________________________________________

3.2 Will the output of this tool be shown directly to customers, patients, or the public?

- [ ] No
- [ ] Yes — describe:

> ____________________________________________________

3.3 Will this tool be connected to other company systems (email, CRM, databases, file storage)?

- [ ] No
- [ ] Yes — list integrations:

> ____________________________________________________

3.4 Could a failure of this tool harm a customer, employee, or third party?

- [ ] No meaningful harm likely
- [ ] Minor inconvenience only
- [ ] Could affect livelihood, health, safety, legal rights, or access to important services

---

## Section 4 — Vendor & product basics

*To be completed by the vendor or from vendor documentation.*

4.1 Legal entity name and country of headquarters:

> ____________________________________________________

4.2 Years in operation; year the AI product launched:

> ____________________________________________________

4.3 Number of employees:

> ____________________________________________________

4.4 Funding stage / financial stability (link to most recent financials, 10-K, or funding announcement):

> ____________________________________________________

4.5 Is the product a wrapper on another provider's model (e.g., OpenAI, Anthropic, Google)? If yes, name the underlying model and provider:

> ____________________________________________________

4.6 Where is the product hosted? (cloud provider, region)

> ____________________________________________________

## Section 5 — How the model was trained

5.1 Was the model trained on publicly available internet data?

> ____________________________________________________

5.2 Was any licensed, purchased, or proprietary data used? If yes, describe the rights held:

> ____________________________________________________

5.3 Were human annotators or reviewers used? Where are they based and what working conditions apply?

> ____________________________________________________

5.4 Has the vendor tested the model for bias (on race, gender, age, disability, language, etc.)? Provide the latest bias/fairness evaluation summary.

> ____________________________________________________

5.5 Has the model been red-teamed or tested for safety issues? Provide summary.

> ____________________________________________________

## Section 6 — Data handling

6.1 Will our inputs be used to train the vendor's models or to improve the product?

- [ ] Never
- [ ] Only if we opt in
- [ ] Yes, by default (and we can opt out)
- [ ] Yes, always

Evidence / contract citation:

> ____________________________________________________

6.2 Data retention: how long are our inputs and outputs stored?

> ____________________________________________________

6.3 Deletion: can we delete our data on request? How quickly?

> ____________________________________________________

6.4 Geographic location of data at rest and in process:

> ____________________________________________________

6.5 Subprocessors and partners that will have access to our data (list with links to their agreements):

> ____________________________________________________

6.6 Cross-border transfer mechanism (for data leaving the EU, UK, California, etc., as applicable):

> ____________________________________________________

## Section 7 — Security

7.1 Current security certifications (attach most recent reports):

- [ ] SOC 2 Type II
- [ ] ISO 27001
- [ ] HIPAA attestation
- [ ] PCI DSS
- [ ] FedRAMP
- [ ] Other: ______________

7.2 Encryption — in transit and at rest; key management approach:

> ____________________________________________________

7.3 Authentication — SSO (SAML/OIDC), MFA, role-based access controls:

> ____________________________________________________

7.4 Logging and audit trail — what is logged, who can access, retention:

> ____________________________________________________

7.5 Security incidents in the last 24 months — summary and remediation:

> ____________________________________________________

7.6 Penetration testing — frequency and summary of most recent test:

> ____________________________________________________

## Section 8 — AI-specific risks

8.1 How does the vendor detect and prevent prompt injection, jailbreaks, and abuse?

> ____________________________________________________

8.2 How are outputs checked for harmful, illegal, or infringing content?

> ____________________________________________________

8.3 Rate of hallucinations / confabulations in benchmarks relevant to our use case:

> ____________________________________________________

8.4 Can we configure guardrails (blocked topics, refusal behavior, data loss prevention)?

> ____________________________________________________

8.5 Is a human-in-the-loop mode available and recommended for our use case?

> ____________________________________________________

8.6 Are the model's major changes (upgrades, deprecations) announced in advance? What notice do we get?

> ____________________________________________________

## Section 9 — Legal, regulatory, and contractual

9.1 Applicable laws the vendor attests compliance with (GDPR, CCPA/CPRA, HIPAA, Colorado AI Act, EU AI Act, NYC Local Law 144, Illinois BIPA, etc.):

> ____________________________________________________

9.2 Who owns the input? Who owns the output?

> ____________________________________________________

9.3 Indemnification for IP infringement in outputs:

> ____________________________________________________

9.4 Liability caps in standard contract (as a multiple of annual spend):

> ____________________________________________________

9.5 Data Processing Agreement (DPA) or Business Associate Agreement (BAA) available and signed:

- [ ] DPA signed
- [ ] BAA signed (if health data)
- [ ] Standard Contractual Clauses signed (if EU data)
- [ ] Not applicable

9.6 Transparency obligations — is the vendor willing to help us meet disclosure requirements to our customers and regulators?

> ____________________________________________________

## Section 10 — Exit and continuity

10.1 How do we export our data and outputs if we leave?

> ____________________________________________________

10.2 What happens to our data after termination, and on what timeline?

> ____________________________________________________

10.3 Business continuity — SLAs, uptime guarantees, disaster recovery posture:

> ____________________________________________________

10.4 What if the vendor is acquired or shuts down? Is there an escrow or survival clause?

> ____________________________________________________

---

## Reviewer notes

> ____________________________________________________

## Decision

**Risk tier:** ☐ Low  ☐ Medium  ☐ High  ☐ Unacceptable

**Conditions (if approved):**

> ____________________________________________________

**Follow-up actions:**

> ____________________________________________________

**Next review date:** ______________________________

**Approved by:** ______________________________ (name, title, date)

---

## Disclaimer

This document is a template for educational and informational purposes only. It is not legal advice and does not create an attorney-client relationship. Laws vary by jurisdiction and change often. Consult qualified legal counsel before adopting any vendor review process for your organization.
