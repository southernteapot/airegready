# AI Procurement RFP — Template

**Issuing organization:** [BUYER NAME]
**Project:** [PROJECT NAME]
**RFP issue date:** [DATE]
**Proposal due:** [DATE]
**Contact:** [PROCUREMENT LEAD, EMAIL]

> **How to use this template.** Issue to candidate vendors for any significant AI procurement. Not required for every tool — use for material purchases or where a rigorous vendor comparison matters. Shorter RFP works for lower-risk tools (see Procurement Checklist Lite).

---

## 1. Organization and context

Brief on the buyer:

- **Our organization**: [1 paragraph]
- **Our use case**: [what we want the AI to do]
- **Users**: [roles, numbers, geography]
- **Data involved**: [high-level categories]
- **Regulatory exposure**: [jurisdictions and sectors]

## 2. Scope of requested services

- **In-scope**: [what the vendor would provide]
- **Out-of-scope**: [what we're handling ourselves]
- **Integration requirements**: [with named systems]
- **Deployment preferences**: [cloud, on-prem, hybrid]
- **Timeline**: [target go-live, phases]

## 3. Evaluation criteria and weighting

| Criterion | Weight |
| --- | --- |
| Functional fit to use case | 25% |
| Accuracy / performance on our data | 20% |
| Security posture | 15% |
| Privacy and data handling | 10% |
| Bias / fairness posture | 10% |
| Regulatory compliance support | 10% |
| Cost and commercial terms | 10% |

Adjust weights based on priorities.

## 4. Vendor questionnaire

Please answer each section. Attach supporting documents.

### A. Company

1. Legal entity, country, years in operation, funding stage
2. Headcount (total; AI / ML engineering; security; privacy / legal)
3. Primary investors
4. Material litigation or regulatory actions in the past 3 years
5. Customer references (3-5 at organizations of our size)

### B. Product

6. Describe the AI Features in 1 page. Include the model(s) powering them and any foundation-model provider.
7. Deployment options available
8. SLA and uptime history
9. Roadmap highlights relevant to our use case

### C. Model and data

10. Is the model built in-house or wrapping a third-party provider? Name and version.
11. Training data sources and license basis
12. Has the model been evaluated for bias relevant to our use case? Provide the latest evaluation summary.
13. Hallucination / confabulation metrics on your benchmark most similar to our use
14. Safety testing / red-team program and most recent results summary

### D. Our data

15. Will our inputs be used to train or improve any model? State default and options.
16. Data residency options
17. Subprocessors that will handle our data (list with locations and roles)
18. Data retention defaults and options
19. Deletion on request — method and timeline
20. Training-data memorization mitigations

### E. Security

21. Security certifications (SOC 2 Type II, ISO 27001, HITRUST, FedRAMP, etc.) — attach reports
22. Encryption, access controls, audit logging
23. Security incidents in the past 24 months — summary and remediation
24. Penetration testing cadence and most recent summary
25. Prompt-injection and AI-specific attack defenses
26. BYOK / HYOK / HSM support (if relevant)

### F. Privacy

27. GDPR posture and DPA availability
28. CCPA / state privacy posture
29. HIPAA and BAA (if relevant to our use)
30. International transfer mechanisms
31. Data subject rights fulfillment — timelines and mechanisms, including for model artifacts

### G. Regulatory compliance

32. How do you support customers in meeting EU AI Act obligations?
33. How do you support customers in meeting Colorado AI Act obligations?
34. How do you support customers in meeting NYC LL 144 (if relevant)?
35. Will you help with our bias audits? Under what terms?
36. Sector-specific posture (HIPAA, GLBA, FCRA, FERPA, NAIC Model Bulletin, etc., as relevant)
37. Transparency information available to deployers (per EU AI Act Art 13)

### H. Governance and human oversight

38. Are guardrails configurable? How?
39. Is human-in-the-loop supported? Where?
40. What logging and auditability is provided?
41. Model change management — how are we notified of material changes?

### I. Commercial

42. Pricing model and tiers
43. Contract length options
44. Exit / data export on termination
45. Service level agreement (SLA) and remedies
46. Liability cap and indemnification positions
47. Escrow / continuity mechanisms

### J. Implementation

48. Typical deployment timeline for a customer of our size
49. Implementation team availability and expertise
50. Training provided
51. Ongoing support structure

### K. References and proofs

52. 3 customer references with similar use cases — contact info
53. Sample of customer impact assessment or deployment outcome
54. Demo environment access for our technical team

## 5. Proof of concept

If selected for shortlist, vendor must be able to deliver a POC on our representative data (under NDA), within [X weeks], demonstrating:

- Functional performance on our test cases
- Accuracy and bias evaluation on our provided test set
- Security controls described above
- Integration with our identified upstream/downstream system

## 6. Commercial terms expectations

Our expectations as a starting point:

- No training on our data (default)
- Current SOC 2 Type II (or equivalent) available
- DPA, BAA (if health), SCCs (if EU) signed
- Data export on termination
- Material change notice ≥ 60 days
- Cooperation with audits and regulator inquiries
- Indemnification for IP infringement in Outputs

Deviations from these expectations should be noted in the proposal.

## 7. Submission instructions

- Format: [PDF / structured questionnaire]
- Length: reasonable; no arbitrary limit
- Confidentiality: our RFP is confidential; your responses will be held in confidence
- Contact for questions: [EMAIL]; deadline for questions: [DATE]

## 8. Timeline

- RFP issue: [DATE]
- Q&A deadline: [DATE]
- Proposals due: [DATE]
- Shortlist notification: [DATE]
- POC window: [DATES]
- Final selection: [DATE]
- Contracting: [DATE]
- Go-live: [DATE]

## 9. Terms and conditions

By submitting a proposal, vendor agrees:

- Proposal is binding for [90] days
- No obligation on buyer to select any vendor
- No compensation for proposal preparation
- Confidentiality of RFP and our data

---

## Disclaimer

This document is a template for educational and informational purposes only. It is not legal advice. Adapt to your procurement policies and have counsel review before issuing.
