# Adverse Action Notice — AI-Assisted Decisions

Notice template for when an AI system is a substantial factor in a decision adverse to a consumer — denial of credit, insurance, housing, benefits, or similar. Required by Colorado AI Act and analogous laws; good practice generally.

Have Legal, Privacy, and the relevant business line review this template before use, and adapt for each use case.

---

## Letter template

> **[COMPANY NAME]**
> [ADDRESS]
> [DATE]
>
> Dear [CUSTOMER NAME],
>
> We're writing to let you know about a recent decision affecting your [APPLICATION / ACCOUNT / SERVICE].
>
> **What happened.** We have decided not to [APPROVE YOUR APPLICATION / EXTEND THE REQUESTED SERVICE / RENEW YOUR COVERAGE / SIMILAR].
>
> **Why we reached this decision.** An AI-assisted tool was used as part of this decision. The principal reasons for the decision were:
>
> - [REASON 1 — specific, non-generic]
> - [REASON 2]
> - [REASON 3]
>
> The data used included [CATEGORIES OF DATA — e.g., credit history, income verification, application information].
>
> **Your rights**
>
> - **To correct your information.** If any data used in this decision is inaccurate or incomplete, you may request correction by [METHOD — email, form, phone]. We will review corrections within [NN] days and reassess the decision where appropriate.
> - **To appeal to a human.** You may request that a qualified human reviewer reconsider this decision. To request a human review, contact us at [EMAIL / PHONE] within [30 days].
> - **To understand.** You may request more detail about the principal factors that contributed to the decision.
>
> **If credit was involved** *(Fair Credit Reporting Act — U.S. only)*
>
> If this decision was based in whole or in part on information from a consumer reporting agency, that agency is:
>
> [CONSUMER REPORTING AGENCY NAME]
> [ADDRESS]
> [PHONE]
> [WEBSITE]
>
> The consumer reporting agency did not make the decision and cannot explain why it was made. You have the right to obtain a free copy of your consumer report from the agency within 60 days by contacting them. You have the right to dispute inaccuracies in your report.
>
> *[If applicable, add risk-based pricing notice or credit score disclosure per FCRA.]*
>
> **Questions**
>
> Contact [DEPARTMENT], [CONTACT EMAIL / PHONE]. We're here to help.
>
> Sincerely,
>
> [NAME, TITLE]
> [COMPANY NAME]
>
> *This decision was made by [COMPANY NAME]. An AI-assisted tool was used as a substantial factor. A qualified human reviewer is available to reconsider this decision upon request.*

---

## Implementation notes

### What goes in "principal reasons"

- Specific and meaningful. "Did not meet underwriting criteria" is not enough under most laws. "Credit utilization above [X]%", "DTI ratio [Y]", "insufficient income history" is closer.
- Pulled from the model's actual contributing factors, not boilerplate.
- Written in plain language the consumer can understand.

### What goes in "categories of data"

- Group similar items: "credit history", "income verification", "property details".
- Don't expose proprietary model features that have no consumer meaning.
- Where personal data is involved, this should align with your GDPR / CCPA data-subject-access posture.

### Timing

- Send promptly after the decision is made. Colorado AI Act and sector rules have different timing expectations. **Build the notice into the decisioning workflow** so it can't be skipped.

### Logging

- Log notice contents, delivery method, delivery timestamp, and recipient confirmation.
- Retain for at least [7 years, or as required by applicable law].

### If the appeal succeeds

- Document the new decision, the reviewer, and the basis.
- Update any model-feedback loop with care — correcting a single bad output should not encode a wider pattern without analysis.

### If a pattern of adverse decisions appears biased

- Trigger the incident response plan and the 90-day AG notification clock under Colorado AI Act.
- Do not treat a pattern of consumer complaints as noise.

---

## Disclaimer

This template is educational and informational only. It is not legal advice. Fair-lending, fair-housing, FCRA, sector-specific, and state AI laws all impose specific adverse-action requirements that vary. Consult qualified counsel for your sector and jurisdictions before using this template.
