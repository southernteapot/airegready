# AI in Education — Compliance Kit Overview

**Regulatory landscape:**

- **FERPA** — Family Educational Rights and Privacy Act
- **COPPA** — Children's Online Privacy Protection Act
- **PPRA** — Protection of Pupil Rights Amendment
- **State student privacy laws** — California SOPIPA, New York Education Law 2-d, Illinois SOPPA, Colorado HB 1244, many others
- **IDEA / Section 504 / ADA** — disability and accommodation rights in education
- **Title VI, Title VII, Title IX** — discrimination in federally funded education
- **Accreditation standards** — regional and programmatic accreditors' expectations
- **EU AI Act** — education and vocational training are high-risk Annex III categories
- **Colorado AI Act** — education is a consequential-decision category
- **California AB 2876** (AI literacy in education)
- **State ed-tech / AI guidance** — state-level ed-tech directives from education departments

> **How to use this kit.** For K-12 districts, colleges and universities, ed-tech vendors, tutoring platforms, and corporate learning departments. Read the overview; work the checklist. Pair with AI Governance Framework, Impact Assessment, and Customer AI Disclosure Templates (especially for children-facing products).

---

## 1. Why education AI is different

Education sits on three tight rails:

1. **Children's data** — protections are strict (COPPA for under-13, state laws often go to 18)
2. **Educational records** — FERPA restricts disclosure and creates student/parent rights
3. **Equal opportunity** — discrimination law, IDEA, Section 504 all affect AI in learning

Education AI includes tools for admissions, placement, learning, assessment, proctoring, counseling, and administrative support. Each carries different risk profiles.

## 2. Role mapping

| Role | Example | Key rules |
| --- | --- | --- |
| Educational institution (K-12 / HE) | Schools, districts, colleges, universities | FERPA, state student privacy, discrimination law |
| Ed-tech vendor | Learning platforms, assessment tools, AI tutors | School Official exception under FERPA; COPPA if under 13; state data agreements |
| Parent / guardian | Parent-purchased tools | COPPA direct-to-consumer rules |
| Employer-sponsored learning | Corporate LMS with AI | Employment law + privacy |
| Research | University research on students | IRB; FERPA research exception |

## 3. FERPA essentials

- Restricts disclosure of personally identifiable information from education records
- Permits disclosure to "school officials" with legitimate educational interests under tight conditions
- Permits disclosure to vendors only if the vendor meets the "school official" criteria (performs institutional service; direct control; use limited to authorized purpose; redisclosure prohibited)
- Students / parents have rights to access, amend, and (limited) control

Implications for AI:

- Vendor AI analyzing student records must meet the school-official criteria
- AI that combines FERPA-protected records with other data requires careful analysis
- AI training on FERPA data is generally not permitted without consent or de-identification

## 4. COPPA essentials

- Applies to operators of online services directed to children under 13, or that knowingly collect data from children under 13
- Requires notice, verifiable parental consent, data minimization, security, deletion, and no behavioral targeting
- AI tutoring tools, chatbots, adaptive-learning systems in K-8 are squarely in scope
- Schools can consent on behalf of parents for school-authorized educational purposes only (not for commercial uses)

## 5. State student privacy laws

At least 40+ states have laws beyond FERPA. Common themes:

- Prohibition on advertising, behavioral targeting, or profile-building on students
- Prohibition on selling student data
- Requirements for Data Privacy Agreements (DPAs) with vendors
- Deletion on request and at the end of the engagement
- Breach notification timelines
- Public disclosures of vendor agreements

New York Education Law § 2-d and California SOPIPA are commonly cited; Colorado, Connecticut, and Illinois have their own wrinkles.

## 6. AI-specific uses and risks

### Admissions and placement

High-stakes. AI screening of applications raises disparate-impact and accommodation issues. Some institutions have deployed AI; some state AGs have questioned them publicly.

### Learning and tutoring

Personalized learning and AI tutors can be transformative — and can produce biased feedback, hallucinate facts, and collect dense student data. Prompt engineering and guardrails are essential.

### Assessment and grading

AI-assisted grading must support due process — students should be able to understand and appeal the score, especially where consequential.

### Proctoring

Remote proctoring AI (facial analysis, gaze tracking, audio monitoring) has attracted FTC scrutiny and civil-rights complaints. Disparate impact across skin tone, disability, and cultural factors is documented. Strong justification, disclosure, and accommodation required.

### Counseling and mental-health chat

AI "counseling" tools raise scope-of-practice, duty-of-care, and suicide-safety issues. Most carry real liability if not carefully bounded and supervised.

### Administrative

Scheduling, enrollment chatbots, financial aid tools — lower stakes but still subject to FERPA and accessibility rules.

## 7. Section 504 / ADA / accommodations

- AI tools must be accessible to students with disabilities
- AI-based assessments must accommodate individualized plans (IEPs, 504 plans)
- Exclusion of a student from an AI tool should not create a worse educational outcome
- Proctoring AI that flags disability-related behaviors must have remediation paths

## 8. Title VI, Title VII, Title IX

- Title VI (race, color, national origin), Title IX (sex-based discrimination), and analogous state laws apply to federally funded programs
- AI that disparately impacts protected classes can create liability
- OCR (Office for Civil Rights) handles complaints and investigations

## 9. EU AI Act — education high-risk

Education and vocational training are Annex III high-risk if used for:

- Determining access to or admission to educational institutions
- Assessing learning outcomes
- Assessing the appropriate level of education someone will receive
- Monitoring and detecting prohibited behavior of students during tests

Obligations for providers and deployers follow the Annex III framework (QMS, risk management, data governance, technical documentation, logs, human oversight, accuracy, transparency).

## 10. Colorado AI Act — education

Education is a consequential-decision category. Deployers of high-risk education AI owe impact assessments, notices, adverse-action explanations, and appeal rights to students / families.

## 11. Practical readiness path

1. **Inventory** every AI system used with students, families, or employees of the institution
2. **Classify** each for FERPA / COPPA / state student privacy / EU high-risk / CAIA
3. **DPAs in place** for every ed-tech vendor handling student data
4. **Parental / student notice and consent** where required
5. **Fair-use review** for admissions, placement, assessment AI (disparate impact)
6. **Accessibility review** — Section 504 / ADA / WCAG
7. **Proctoring program** — especially careful documentation and alternatives
8. **Teacher / staff training** — what AI can be used for; how to handle student data
9. **Student AI literacy** (where applicable per state law; California AB 2876 directs)
10. **Incident response** — FERPA breach; state breach laws; COPPA deletion

## 12. Common traps

- **Using consumer AI tools with student data** (teachers uploading essays to public chatbots)
- **Assuming COPPA consent is covered by the school** when the use is commercial
- **Skipping DPAs** with ed-tech vendors
- **Proctoring deployed without accommodation paths**
- **Sharing student data for AI training** without consent
- **Not providing a way to appeal AI-assisted assessment grades**

## 13. Kit contents

- `overview.md` — this document
- `checklist.md` — operational readiness checklist

Pair with:

- AI Governance Framework
- AI Impact Assessment
- AI Vendor Risk Assessment (with FERPA / COPPA additions)
- Customer AI Disclosure Templates (adapted for parents/students)
- Colorado AI Act + EU AI Act kits if applicable

---

## Disclaimer

This document is a template for educational and informational purposes only. It is not legal advice. Education AI compliance intersects federal, state, and sector rules. Consult qualified education, privacy, and civil-rights counsel before relying on this document.
