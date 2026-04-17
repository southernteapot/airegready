# Colorado AI Act — Impact Assessment Template

**System name:** ______________________________
**Business owner:** ______________________________
**Assessment prepared by:** ______________________________
**Date:** ______________________________
**Assessment type:** ☐ Initial (pre-deployment)  ☐ Annual  ☐ Material modification  ☐ Other: ______________
**Last assessment date (if any):** ______________________________

> **How to use this template.** Colorado AI Act requires deployers of high-risk AI systems to complete an impact assessment before first deployment, annually thereafter, and upon intentional and substantial modification. This template covers the elements the statute requires. Keep completed assessments for at least the retention period required by law (verify with counsel). Have the AI Review Committee sign off before first deployment.

---

## 1. The system

1.1 Name of the system and vendor (if applicable):

> ____________________________________________________

1.2 Version / model ID / release date:

> ____________________________________________________

1.3 One-paragraph description of how the system works in plain language:

> ____________________________________________________

1.4 Where the system sits in our workflow (upstream inputs → model → downstream decisions):

> ____________________________________________________

1.5 Who uses it (internal roles, teams, rough count):

> ____________________________________________________

## 2. Purpose and intended use

2.1 What is the system's **intended use** at [COMPANY NAME]?

> ____________________________________________________

2.2 What decision(s) will the system make or materially inform?

> ____________________________________________________

2.3 Is this a **consequential decision** under CAIA? (education, employment, finance/lending, essential government services, healthcare, housing, insurance, legal services)

- [ ] Yes — category: ______________________________
- [ ] No — explain:

> ____________________________________________________

2.4 Is the system a **substantial factor** in that decision?

- [ ] Yes
- [ ] No — explain the human judgment that supersedes it:

> ____________________________________________________

2.5 Who is the consumer in this workflow? (applicant, patient, tenant, borrower, etc.)

> ____________________________________________________

## 3. Benefits

3.1 What business benefit justifies deploying this system?

> ____________________________________________________

3.2 What benefit to consumers do we expect? (e.g., faster decisions, fairer outcomes, better service)

> ____________________________________________________

3.3 What alternatives did we consider? Why was this the best option?

> ____________________________________________________

## 4. Data

4.1 Categories of data used as inputs (including any personal data, sensitive categories, and any proxies for protected classes):

> ____________________________________________________

4.2 Source of each input (consumer submission, internal records, third-party data):

> ____________________________________________________

4.3 How long inputs are retained:

> ____________________________________________________

4.4 Data quality controls (validation, deduplication, bias checks on inputs):

> ____________________________________________________

4.5 For vendor systems: summary of training data per developer documentation:

> ____________________________________________________

## 5. Outputs

5.1 What does the system produce? (score, recommendation, decision, ranked list, label)

> ____________________________________________________

5.2 How is the output used by the human decision-maker, if any?

> ____________________________________________________

5.3 Is the output acted on automatically? If yes, under what conditions?

> ____________________________________________________

## 6. Known limitations

6.1 What the system is **not** good at (per developer documentation and our own testing):

> ____________________________________________________

6.2 Populations or inputs where performance is known to degrade:

> ____________________________________________________

6.3 Error modes the system is most prone to:

> ____________________________________________________

## 7. Risk of algorithmic discrimination

7.1 What protected classes could be affected by this decision? (race, color, religion, national origin, sex, age, disability, veteran status, familial status, sexual orientation, gender identity — per applicable federal, Colorado, and local law)

> ____________________________________________________

7.2 What bias testing has been performed (by the vendor and by us)? Attach results.

> ____________________________________________________

7.3 Did the testing identify disparities? If yes, what are they and how are they mitigated?

> ____________________________________________________

7.4 Proxies for protected classes that may be present in our inputs:

> ____________________________________________________

7.5 Ongoing monitoring plan (metrics, thresholds, frequency, owner):

> ____________________________________________________

## 8. Mitigations and controls

8.1 Pre-deployment mitigations (data preparation, feature selection, fairness constraints, guardrails, calibration):

> ____________________________________________________

8.2 Human-in-the-loop design — where and how is a human involved?

> ____________________________________________________

8.3 Override policy — when and how can a human overrule the system?

> ____________________________________________________

8.4 Appeal mechanism for adversely affected consumers (including who the reviewer is and SLA):

> ____________________________________________________

8.5 Data correction mechanism (how consumers can correct personal data used by the system):

> ____________________________________________________

8.6 Security and access controls:

> ____________________________________________________

8.7 Logging and auditability:

> ____________________________________________________

## 9. Consumer notice

9.1 What notice will consumers receive that a high-risk AI system is being used?

> ____________________________________________________

9.2 When and how is the notice delivered? (screen, email, paper, at which step of the flow)

> ____________________________________________________

9.3 Adverse-action language — what will a consumer see if the decision goes against them?

> ____________________________________________________

9.4 Where is the public statement on [COMPANY NAME]'s website that describes this system?

> ____________________________________________________

## 10. Governance

10.1 Business owner (named person, accountable):

> ____________________________________________________

10.2 Other roles involved (Legal, Privacy, IT/Security, HR, Operations):

> ____________________________________________________

10.3 Risk management framework aligned to (NIST AI RMF / ISO 42001 / other):

> ____________________________________________________

10.4 Review Committee meeting at which this assessment was approved:

> ____________________________________________________

10.5 Date of next scheduled review:

> ____________________________________________________

## 11. Incidents and complaints

11.1 Open incidents involving this system:

> ____________________________________________________

11.2 Consumer complaints received since last assessment (count, categories, resolution):

> ____________________________________________________

11.3 Whether any complaint triggered the 90-day AG reporting obligation and action taken:

> ____________________________________________________

## 12. Decision

☐ Approved for deployment
☐ Approved with conditions (list below)
☐ Not approved — remediate and re-submit
☐ Retire

**Conditions / required actions:**

> ____________________________________________________

**Approvers:**

| Role | Name | Signature | Date |
| --- | --- | --- | --- |
| Business Owner |  |  |  |
| AI Governance Lead |  |  |  |
| Legal |  |  |  |
| Privacy |  |  |  |
| Executive Sponsor (Tier 3) |  |  |  |

---

## Disclaimer

This document is a template for educational and informational purposes only. It is not legal advice and does not create an attorney-client relationship. The Colorado AI Act has been amended and may be further amended; implementing regulations are evolving. Consult qualified legal counsel before using this assessment for any compliance decision.
