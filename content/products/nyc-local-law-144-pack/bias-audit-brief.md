# NYC LL 144 — Bias Audit Brief

A practical guide to commissioning and using the annual bias audit required by NYC Local Law 144. This document helps you brief an auditor and evaluate their output.

---

## 1. What the audit must cover

Per DCWP rules, a compliant bias audit of an Automated Employment Decision Tool (AEDT) must calculate and report:

### Selection or scoring rate

For each of the following categories, the rate at which the AEDT selects candidates (or the mean score assigned):

- Sex (male, female)
- Race/ethnicity (Hispanic or Latino; White; Black or African American; Native Hawaiian or Pacific Islander; Asian; Native American or Alaska Native; Two or more races)
- Intersectional categories: each sex × race/ethnicity combination

### Impact ratio

The ratio of the selection rate for each category to the rate for the **most-selected** category. Values below 0.8 (the four-fifths rule) indicate potential adverse impact.

### Counts

Number of applicants / candidates / employees in each category, including "unknown" or "not disclosed."

### Methodology and scope

- Description of the AEDT, including its purpose, inputs, and outputs
- Scope of the audit — which versions, which time period, which roles
- Data source — historical candidate data or test data; if test, why historical was insufficient
- Date of the audit

## 2. Independence requirements

The auditor must be **independent** of the employer and of any party involved in developing or operating the AEDT. Specifically:

- Not an employee or officer of the employer or vendor
- No financial interest in the AEDT
- Not involved in the development, operation, or marketing of the AEDT
- Not related to any such party

Having the vendor commission the audit — or having your in-house team do it — risks disqualification of the audit.

## 3. Frequency

- Initial audit **before first use** of a new AEDT (or materially modified version)
- Annual re-audit
- Re-audit on material modification (algorithm change, feature set change, retraining on new data)

## 4. What to hand the auditor

A professional auditor will ask for at least:

- Written description of the AEDT: vendor, version, decisioning purpose, inputs used, outputs produced
- Integration description: where in the hiring flow the AEDT sits, who sees outputs, how outputs are used
- Historical data: candidate records including demographic categories, inputs supplied to the AEDT, AEDT outputs, downstream decisions
- Time window for the audit
- Contact for technical questions at the vendor
- Prior audit report (if any)

If you don't have demographic data, say so up front. The auditor will advise on test-data methodology and disclosure.

## 5. How to evaluate the audit report

A good audit report is:

- **Clear about scope** — which AEDT version, which time window, which roles
- **Transparent about methodology** — calculation steps are reproducible
- **Reports unknowns honestly** — e.g., "X% of candidates did not disclose sex; we report results both including and excluding that group"
- **Includes all intersectional categories** — not just marginals
- **Reports impact ratios**, not just selection rates
- **Acknowledges limitations** — e.g., sample size, data quality, historical vs. test data

Weak reports look like: vague methodology, summary numbers only, no intersectional breakdown, no impact ratio, no limitations section.

## 6. What to do with adverse-impact findings

If the audit finds impact ratios below 0.8 or other disparities:

- **Don't hide them.** The public summary must report the results. Hiding them is the worse violation.
- **Investigate root causes.** Training data? Feature selection? Reference-group selection? Historical patterns in hiring?
- **Decide on remediation.** Options: modify the tool, retrain, add human review, restrict the tool's scope, replace it, retire it.
- **Document your decision** and timeline. A record of remediation is part of your reasonable-care posture under LL 144 and broader employment law.
- **Monitor.** Schedule follow-up review ahead of the next annual audit.
- **Coordinate with counsel**. Adverse-impact findings can trigger Title VII or NYC Human Rights Law analysis independent of LL 144.

## 7. Public summary — what to post

Publish on the careers page (or linked from it) — before first use and after each annual audit:

- Date of most recent audit
- Distribution date of the AEDT
- Summary of audit results
- Selection rate / impact ratio tables
- Link to or file of the detailed audit

Keep prior audit summaries accessible. Don't quietly remove old summaries.

## 8. Sample audit summary — template

> **AEDT Bias Audit Summary**
>
> **Employer:** [COMPANY NAME]
> **AEDT:** [NAME, VENDOR, VERSION]
> **Date of audit:** [DATE]
> **Audit firm:** [FIRM NAME]
> **Data source:** [Historical / Test / Combined]
> **Distribution date of AEDT:** [DATE]
>
> **Selection rate by sex**
>
> | Category | Selection rate | Impact ratio |
> | --- | --- | --- |
> | Male | XX% | 1.00 (reference) |
> | Female | XX% | X.XX |
>
> **Selection rate by race/ethnicity**
>
> | Category | Selection rate | Impact ratio |
> | --- | --- | --- |
> | White | XX% | 1.00 (reference) |
> | Black or African American | XX% | X.XX |
> | Hispanic or Latino | XX% | X.XX |
> | Asian | XX% | X.XX |
> | Native Hawaiian / Pacific Islander | XX% | X.XX |
> | Native American / Alaska Native | XX% | X.XX |
> | Two or more races | XX% | X.XX |
> | Unknown | XX% | X.XX |
>
> **Selection rate by sex × race/ethnicity**
>
> *(table of intersectional categories)*
>
> **Notes and limitations**
>
> [Sample size limits, unknowns handling, scope caveats]
>
> **Full audit report:** [LINK]

## 9. Data retention

To support audits, retain:

- Candidate records and demographic categories (where collected per applicable law)
- Inputs to the AEDT for each candidate
- Outputs from the AEDT for each candidate
- Final decisions

For a period of at least [3 years] or as required by applicable law. Coordinate with your records retention schedule and privacy counsel.

## 10. Ongoing program

- Annual cadence in your compliance calendar
- Vendor relationships managed for audit cooperation
- Monitoring for material modifications that trigger re-audit
- Training for recruiters and HR on what LL 144 requires
- Review of accommodation / alternative selection request volume and dispositions

---

## Disclaimer

This document is educational and informational only. It is not legal advice. Consult qualified employment counsel licensed in New York before relying on this brief.
