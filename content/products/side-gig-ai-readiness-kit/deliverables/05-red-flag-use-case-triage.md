# Red Flag Use Case Triage

Purpose: Identify AI projects that need extra caution, a narrower scope, human review, or qualified advice before launch.

## When To Use It

Use this before launching, selling, demoing, or automating an AI feature that could affect people, sensitive data, professional advice, or real-world outcomes.

This worksheet does not decide whether a use is allowed. It helps you spot use cases that deserve more careful review.

## How To Fill It Out

Read each category. Mark whether it applies. If it applies or might apply, answer the questions and choose a next step. When in doubt, narrow the project, add human review, document the decision, and get qualified help.

## Triage Table

| Red flag category | Why it needs caution | Questions to ask | Suggested next step | Applies? |
| --- | --- | --- | --- | --- |
| Health | Health-related output can affect care, symptoms, treatment choices, or user behavior. | Could a user treat this as medical guidance? Is any health data processed? Is a qualified reviewer needed? | Pause or narrow scope; add strong limits; get qualified health/privacy review. | [ ] Yes [ ] No [ ] Unsure |
| Mental health | Users may rely on responses during distress or crisis. | Could the AI respond to crisis, therapy, diagnosis, or emotional support needs? Is escalation available? | Pause high-risk features; add crisis routing where relevant; get qualified review. | [ ] Yes [ ] No [ ] Unsure |
| Legal | Users may treat output as advice about rights, duties, contracts, or disputes. | Could the output be mistaken for legal advice? Does it address a specific legal situation? | Reframe as general information or drafting support; route to qualified counsel. | [ ] Yes [ ] No [ ] Unsure |
| Financial | Output can influence money, taxes, investments, debt, or business decisions. | Does it recommend financial actions? Does it process financial data? | Narrow to general education or drafting; add review and clear limits. | [ ] Yes [ ] No [ ] Unsure |
| Credit | Credit decisions can affect access to loans, housing, services, or pricing. | Does AI rank, approve, deny, score, or recommend credit outcomes? | Pause and get qualified legal/compliance review. | [ ] Yes [ ] No [ ] Unsure |
| Employment | AI can affect hiring, screening, performance, promotion, or termination. | Does AI screen candidates, score workers, or influence employment decisions? | Pause or keep internal drafting only; get HR/legal review. | [ ] Yes [ ] No [ ] Unsure |
| Housing | Housing-related AI can affect access, eligibility, pricing, or screening. | Does AI rank tenants, recommend approvals, or affect housing access? | Pause and get qualified review. | [ ] Yes [ ] No [ ] Unsure |
| Education | AI can affect students, admissions, grading, support, or records. | Does AI evaluate students or process student information? | Add human review; check school/client obligations; get qualified review. | [ ] Yes [ ] No [ ] Unsure |
| Insurance | Insurance AI can affect eligibility, pricing, claims, or coverage decisions. | Does AI score, recommend, approve, deny, or prioritize insurance outcomes? | Pause and get qualified review. | [ ] Yes [ ] No [ ] Unsure |
| Children or minors | Extra care is needed when minors may use the product or appear in data. | Could children use it? Could data about minors enter the workflow? | Narrow access, avoid sensitive data, and get privacy/legal review. | [ ] Yes [ ] No [ ] Unsure |
| Biometrics | Biometric data can be sensitive and heavily regulated in some places. | Does AI process face, voice, fingerprint, gait, emotion, or identity signals? | Pause and get qualified privacy/legal/security review. | [ ] Yes [ ] No [ ] Unsure |
| Identity verification | Mistakes can block access or create fraud, privacy, and fairness concerns. | Does AI verify identity, detect fraud, or decide account access? | Add human review and qualified review before launch. | [ ] Yes [ ] No [ ] Unsure |
| Surveillance | Monitoring people can raise privacy, workplace, consumer, and safety concerns. | Does AI monitor employees, customers, students, visitors, or public spaces? | Pause or narrow scope; get privacy/legal review. | [ ] Yes [ ] No [ ] Unsure |
| Deepfakes or synthetic media | Synthetic media can mislead people or misuse likeness, voice, or identity. | Could someone believe the media is real? Do you have consent for likeness or voice? | Add disclosure, consent checks, and qualified review if needed. | [ ] Yes [ ] No [ ] Unsure |
| High-stakes decisions | AI that affects access, eligibility, safety, or important opportunities needs more review. | Could the output materially affect a person? Is human appeal or review available? | Pause automated decisions; add human review; get qualified advice. | [ ] Yes [ ] No [ ] Unsure |
| Sensitive personal data | Sensitive data can increase privacy, security, contract, and trust concerns. | What sensitive data enters prompts, uploads, logs, or outputs? | Minimize data, avoid unnecessary processing, and get privacy/security review. | [ ] Yes [ ] No [ ] Unsure |
| Scraping or third-party data | Data gathered from websites, platforms, or third parties can carry terms, privacy, and IP issues. | What source is used? Do terms allow it? Is data about people included? | Review source rights, terms, and privacy questions before use. | [ ] Yes [ ] No [ ] Unsure |
| Automated decisions with real-world consequences | Automation can hide errors and make decisions hard to challenge. | Does the AI decide or only assist? Can a person override or review it? | Keep AI advisory, add human review, document the decision path. | [ ] Yes [ ] No [ ] Unsure |

## Decision Log

| Date | Category | Decision | Reason | Next action | Owner |
| --- | --- | --- | --- | --- | --- |
|  |  | [Proceed / narrow scope / add review / pause / get help] |  |  |  |
|  |  |  |  |  |  |

## Review Carefully If

- Any category is marked Yes or Unsure.
- The AI could affect a person's rights, money, health, safety, job, education, housing, insurance, credit, or access to services.
- You are using data from children, sensitive personal data, biometric data, scraped data, or client confidential information.
- Users may think the AI has authority, expertise, or final decision-making power.

Short boundary: This worksheet is educational information, not legal advice. It is a starting point for documenting your AI project and spotting questions to review. Specific legal, privacy, contractual, or regulatory obligations should be reviewed with qualified counsel or the appropriate advisor.
