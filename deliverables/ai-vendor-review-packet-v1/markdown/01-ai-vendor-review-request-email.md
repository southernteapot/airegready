# AI Vendor Review Request Email Template

Use this template to request the information needed to review an AI vendor, SaaS AI feature, embedded AI capability, or AI-enabled workflow.

## When to use this

Use this before approval when:

- A team wants to buy or enable a new AI tool.
- A current vendor adds AI features to a product you already use.
- A vendor wants your customer, employee, student, client, confidential, or regulated data.
- The tool may create customer-facing output or support decisions about people.
- The vendor's public trust center does not answer the questions you need.

## Short email

**Subject:** AI vendor review questions for [PRODUCT / FEATURE]

Hi [VENDOR CONTACT],

We are reviewing [PRODUCT / FEATURE] for possible use by [TEAM / ORGANIZATION]. Before we can approve the tool, we need to understand how the AI feature handles data, security, model behavior, output review, contractual terms, and changes over time.

Could you please send the following materials or links?

- Current security overview or trust center
- SOC 2 Type II, ISO 27001, or equivalent security report, if available
- Privacy policy, terms of service, and data processing agreement
- Subprocessor list
- Data retention and deletion policy
- Explanation of whether customer inputs or outputs are used for model training or product improvement
- Details on the underlying model provider, if the product uses a third-party model
- AI safety, bias, red-team, or evaluation summaries relevant to the proposed use case
- Change-notice policy for model updates, feature changes, and deprecations
- Export, termination, and data deletion process

Our intended use case is: [SHORT DESCRIPTION]

The data categories we expect to use are: [DATA CATEGORIES]

Please let us know if a security portal, NDA, or standard questionnaire process is required.

Thank you,

[NAME]
[ROLE]
[ORGANIZATION]

## More detailed email

**Subject:** AI vendor review request - [PRODUCT / FEATURE]

Hi [VENDOR CONTACT],

We are completing an internal AI vendor review for [PRODUCT / FEATURE]. The purpose is to confirm the approved scope of use, data handling, security posture, AI-specific controls, contractual terms, and review conditions before our team adopts or expands use of the tool.

Please provide answers or links for the following areas.

### 1. Product and model basics

- What AI features are included in the product?
- Is the product built on your own model, a third-party model, or a combination?
- If a third-party model is used, who is the underlying provider?
- What model or feature changes are customers notified about?

### 2. Data handling

- What customer inputs, outputs, files, prompts, metadata, logs, or usage data are stored?
- Are customer inputs or outputs used to train models or improve the product?
- Is training or product-improvement use opt-in, opt-out, always on, or never used?
- How long is data retained?
- Can data be deleted on request or at termination?
- Where is data stored and processed?
- Which subprocessors may access customer data?

### 3. Security and access controls

- Do you maintain SOC 2 Type II, ISO 27001, or similar security reports?
- Is data encrypted in transit and at rest?
- Do you support SSO, MFA, role-based access, and audit logs?
- Have there been material security incidents in the last 24 months?
- How often do you perform penetration testing or security assessments?

### 4. AI-specific controls

- How do you reduce hallucinations, unsafe output, prompt injection, jailbreaks, and abusive use?
- Are guardrails configurable by customer?
- Can the tool operate with human review before output is sent externally or relied on for decisions?
- Do you provide evaluation, red-team, bias, safety, or benchmark summaries?

### 5. Legal and contractual terms

- Who owns customer inputs and outputs?
- Do you offer a data processing agreement?
- Do you offer a business associate agreement if health data is involved?
- Do you offer standard contractual clauses or other transfer terms if EU/UK data is involved?
- Do standard terms include IP infringement indemnity for outputs?
- What liability caps and exclusions apply?

### 6. Exit and continuity

- How can we export data and outputs?
- What happens to customer data after termination?
- What uptime, SLA, disaster recovery, or business continuity commitments apply?
- What happens if the feature is deprecated or materially changed?

Our intended use case is: [SHORT DESCRIPTION]

Expected users: [ROLES / COUNT]

Expected data categories: [DATA CATEGORIES]

Expected output destination: [INTERNAL ONLY / CUSTOMER-FACING / PUBLIC / DECISION SUPPORT]

Please include any security portal instructions, NDA requirements, standard questionnaire documents, or completed vendor review materials you already maintain.

Thank you,

[NAME]
[ROLE]
[ORGANIZATION]

## Internal intake message

Use this message when an internal team asks to approve a new AI tool.

Hi [REQUESTOR],

Before we approve [TOOL], please fill in the short intake below so we can decide whether this is a low-stakes approval or needs the full vendor review.

1. What problem will the tool solve?
2. Who will use it?
3. What data will be entered, uploaded, summarized, or generated?
4. Will any output be shown to customers, clients, students, patients, applicants, employees, or the public?
5. Will the tool affect decisions about people, pricing, eligibility, access, services, health, safety, legal rights, hiring, education, housing, credit, insurance, or benefits?
6. Will the tool connect to email, CRM, databases, file storage, code repositories, production systems, or other internal systems?
7. Is there an approved tool that already does this?
8. What is the requested approval date?

Please do not enter sensitive, customer, employee, student, health, financial, legal, confidential, or regulated data into the tool until approval conditions are clear.
