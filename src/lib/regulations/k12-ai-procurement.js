export const k12AiProcurement = {
  id: 'k12-ai-procurement',
  slug: 'k12-ai-procurement',
  title: 'K-12 School AI Procurement & Student Privacy',
  shortTitle: 'K-12 AI Procurement',
  description:
    'How school districts are vetting AI tools before they reach students: the FERPA and COPPA baseline, state mandates like Ohio HB 96, contract clauses that block model training on student data, and the questions to ask vendors before signing.',
  icon: '\u{1F3EB}',
  status: 'Evolving',
  lastReviewed: 'June 11, 2026',
  lastReviewedIso: '2026-06-11',
  keyFacts: [
    {
      label: 'Core Federal Laws',
      value:
        'FERPA (education records), COPPA as amended in 2025 (children under 13), and PPRA (surveys and certain data collection)',
    },
    {
      label: 'First State Mandate',
      value:
        'Ohio HB 96 requires every public district to adopt a board-approved AI policy by July 1, 2026',
    },
    {
      label: 'State Guidance',
      value:
        'Roughly 35 states have published AI-in-education guidance covering privacy, equity, and responsible use',
    },
    {
      label: 'Contract Baseline',
      value:
        'The SDPC National Data Privacy Agreement (NDPA), a standard student-data contract used by state alliances across much of the country',
    },
    {
      label: 'Primary Enforcers',
      value:
        'FTC for COPPA, U.S. Department of Education for FERPA, plus state attorneys general and state student-privacy laws',
    },
    {
      label: 'Biggest Procurement Gaps',
      value:
        'Model-training rights, vague data categories, indefinite retention, silent feature changes, and vendor financial stability',
    },
  ],
  figure: {
    src: '/assets/k12-ai-procurement-pipeline.svg',
    alt: 'Five-step school district AI vendor vetting pipeline: intake, privacy and legal review, contract and data privacy agreement, pilot and approval, then ongoing monitoring and re-review.',
    caption:
      'A typical district AI vetting pipeline. Every tool — including free tools — goes through one front door before it reaches students.',
    width: 1120,
    height: 400,
  },
  sections: [
    {
      id: 'overview',
      title: 'Procurement Is Where Schools Have the Most Power',
      content:
        'AI tools are entering classrooms faster than most districts can review them. Teachers adopt free chatbots on personal accounts, existing ed-tech vendors switch on AI features inside products the district already licensed, and startups pitch tutoring bots, grading assistants, and early-warning systems directly to principals. Procurement spending tracking shows hundreds of districts collectively buying millions of dollars in AI tools within months — most without a formal RFP or district-level review.\n\nThe moment a district has real leverage is **before the contract is signed**. After signature, a vendor’s terms of service control what happens to student data; before signature, the district can demand data ownership, prohibit model training on student information, set deletion deadlines, and walk away from vendors who refuse. That is why the most practical school AI policies are procurement policies: they decide which tools get in, under what contract terms, and what happens when a tool changes or a vendor fails.\n\nThe gap is real. Center for Democracy & Technology research has found that a large share of districts using AI tools never executed a data privacy agreement with the vendor at all, and many administrators could not identify which federal law governs student data. The good news: districts do not have to invent this from scratch. Standard contract templates, state model policies, and published vetting rubrics now exist, and this guide walks through them in plain English.',
    },
    {
      id: 'legal-baseline',
      title: 'The Legal Baseline: FERPA, COPPA, PPRA, and State Law',
      content:
        'No federal law regulates "AI in schools" by name. Instead, AI tools inherit the existing student-privacy framework — and a few 2025 changes made that framework more demanding for AI vendors specifically.',
      items: [
        {
          term: 'FERPA and the school official exception',
          description:
            'The Family Educational Rights and Privacy Act protects personally identifiable information in education records. Districts typically share student data with ed-tech vendors under the "school official" exception, which requires that the vendor performs a service the school would otherwise use its own staff for, stays under the district’s **direct control** regarding data use, and uses the data **only** for the authorized educational purpose. An AI vendor that uses student data to improve its commercial model is operating outside that exception. Re-disclosure to other parties without consent is prohibited.',
        },
        {
          term: 'COPPA after the 2025 amendments',
          description:
            'The FTC finalized the first major COPPA update since 2013 in January 2025; the amended rule took effect June 23, 2025, with full compliance required by April 22, 2026. Key changes for school AI tools: operators need **separate opt-in consent** before disclosing children’s data to third parties for advertising or other non-essential purposes, **indefinite data retention is banned** and a written retention policy is required, biometric identifiers are now covered personal information, and operators must run a written security program and oversee their service providers. FTC commissioners flagged AI training data hunger explicitly: a claim that data must be kept forever to "improve the algorithm" does not satisfy the rule.',
        },
        {
          term: 'School consent instead of parental consent — with limits',
          description:
            'Under longstanding FTC guidance, schools may consent to data collection on parents’ behalf — but only for use limited to the **educational context**. The moment student data feeds advertising, commercial profiling, or general model training, school authorization no longer covers it and separate parental consent is required. The 2025 rulemaking left this guidance in place rather than codifying it, so the educational-purpose boundary remains the operative test.',
        },
        {
          term: 'PPRA',
          description:
            'The Protection of Pupil Rights Amendment applies when tools collect information in protected areas — political beliefs, mental or psychological problems, sex behavior or attitudes, religious practices, and income — or when information is collected from students for marketing purposes. AI wellness bots, survey tools, and behavioral analytics can trigger PPRA notice and opt-out duties.',
        },
        {
          term: 'State student-privacy laws',
          description:
            'Most states layer their own rules on top. California’s SOPIPA bans targeted advertising, profiling, and sale of K-12 student data by online services, and AB 1584 sets required terms for district ed-tech contracts, including district ownership of pupil records. New York Education Law 2-d requires a parents’ bill of rights and specific contract terms. Several states now add AI-specific procurement language; some, like a pending California proposal, would restrict using student data to train AI models unless it directly benefits the school.',
        },
      ],
    },
    {
      id: 'what-districts-are-doing',
      title: 'What Districts and States Are Actually Doing',
      content:
        'District AI procurement policy moved from optional to expected between 2024 and 2026. A few patterns dominate.',
      items: [
        {
          term: 'Ohio: the first statewide mandate',
          description:
            'Ohio HB 96 (signed June 30, 2025) made Ohio the first state to require AI policies in K-12: every public district, community school, and STEM school must adopt a board-approved policy on student and staff AI use by **July 1, 2026**. The Department of Education and Workforce published a model policy on December 30, 2025 that districts can adopt or adapt; it requires AI tools to comply with existing data-privacy protections, FERPA, and PII safeguards, and covers evaluating third-party AI tools.',
        },
        {
          term: 'New York City: central vetting before classroom use',
          description:
            'New York City Public Schools — the nation’s largest district — requires AI tools to pass a central vetting process before school-level deployment, including review for privacy, algorithmic bias, equity impact, and developmental appropriateness, with dedicated governance bodies overseeing implementation. For vendors, demonstrating compliance with the district’s privacy and equity standards is now a condition of market access.',
        },
        {
          term: 'Alabama: model procurement contract language',
          description:
            'Alabama released a procurement model policy recommending a **data usage restriction clause** for district contracts — plug-and-play language that gives even small districts leverage in vendor negotiations without drafting standards from scratch. Policy groups have urged other states to copy this approach.',
        },
        {
          term: 'Tennessee: board policies required',
          description:
            'Tennessee legislation requires local school boards to adopt policies governing AI use by students, faculty, and staff — an earlier wave of mandates focused on acceptable use that districts are now extending into procurement.',
        },
        {
          term: 'Grade-banded guidance',
          description:
            'Vermont’s 2026 guidance recommends no AI chatbot use for PreK-2, curriculum-embedded AI only for grades 3-5, structured education-specific chatbots for grades 6-8, and broader AI fluency work in grades 9-12. Age-tiering like this increasingly shows up in district tool-approval matrices.',
        },
        {
          term: 'The NDPA as the contract floor',
          description:
            'The Student Data Privacy Consortium’s National Data Privacy Agreement — version 2 released in 2024 — standardizes student-data contract terms across participating state alliances, with state-specific exhibits layered on top. Hundreds of thousands of DPAs have been executed on SDPC templates. Districts increasingly treat "will you sign the NDPA (or our state DPA)?" as the first vendor screening question; many state registries let districts piggyback on agreements a vendor already signed elsewhere in the state.',
        },
      ],
    },
    {
      id: 'lausd-lesson',
      title: 'A Cautionary Tale: LAUSD’s "Ed" Chatbot',
      content:
        'In March 2024, Los Angeles Unified launched "Ed," an AI chatbot for students and families, under a five-year, $6 million contract with the startup AllHere — the first district in the country to deploy AI at this scale. Three months later AllHere’s CEO departed, most staff were furloughed, and the district pulled the chatbot offline after paying roughly $3 million. A whistleblower alleged the system had handled student records in ways that conflicted with district privacy policy, and the district’s inspector general opened an investigation.\n\nTwo details matter for every other district. First, the contract’s protective clauses — LAUSD’s exclusive ownership of all project data and a deletion-on-request requirement — were the district’s main lever once the vendor collapsed. Second, none of the warning signs were exotic: an early-stage, venture-funded vendor with no AI track record, an aggressive timeline, and a loosely defined problem statement.',
      list: [
        '**Vet vendor viability, not just the product.** Ask about funding runway, customer base, and what happens to data and service continuity if the company fails. Require wind-down and data-return obligations in the contract.',
        '**Define the problem before the purchase.** A tool bought to "bring AI to the district" has no success criteria. A tool bought to reduce missed parent communications can be tested and judged.',
        '**Pilot small and scale slowly.** Methodical multi-year rollouts with teacher feedback have aged far better than district-wide launches.',
        '**Get data ownership and deletion rights in writing before launch.** They are worth the most exactly when things go wrong.',
        '**Plan for supervision.** If a tool needs vendor staff "in the loop" to run safely, vendor instability becomes a student-safety issue, not just a budget issue.',
      ],
    },
    {
      id: 'policy-blueprint',
      title: 'What a District AI Procurement Policy Should Cover',
      content:
        'A workable policy does not need to be long, but it needs to close the specific gaps AI creates: tools arriving outside normal purchasing, features changing silently, and data flowing into models. The strongest district policies cover these elements.',
      items: [
        {
          term: 'One front door for every AI tool',
          description:
            'A single intake and approval path that covers paid contracts, free tools, pilots, and **AI features switched on inside already-approved products**. Free tools are procurement events too — the payment is the data.',
        },
        {
          term: 'A maintained AI tool inventory',
          description:
            'A public or board-visible list of approved tools recording vendor, purpose, grade levels, data categories collected, the governing contract or DPA, and the next review date. The inventory is what makes every other control auditable.',
        },
        {
          term: 'Risk tiers with matching review depth',
          description:
            'A grammar-practice tool with no student accounts does not need the same scrutiny as a wellness chatbot or an early-warning analytics system. Tier by data sensitivity and decision impact, and reserve deep review — bias evidence, efficacy claims, human-oversight design — for tools that touch consequential decisions about students.',
        },
        {
          term: 'A signed DPA as a non-negotiable',
          description:
            'No student data flows until the vendor signs the district or state DPA (or the NDPA with state exhibits). A vendor that refuses to sign a standard student-data agreement has answered the screening question.',
        },
        {
          term: 'Age and grade-band rules',
          description:
            'Which tool categories are allowed at which grade levels, consistent with COPPA’s under-13 rules and state guidance — including whether open-ended chatbots are permitted at all in lower grades.',
        },
        {
          term: 'Pilot, approval, and sunset',
          description:
            'Defined pilot scope and success criteria before scaling; board or cabinet approval for high-tier tools; automatic re-review at renewal and whenever the vendor adds AI features, changes models, or adds subprocessors.',
        },
        {
          term: 'Incident and exit protocols',
          description:
            'Who acts when a tool fails, a vendor is breached or acquired, or a company shuts down: pulling access, notifying families when required, exercising deletion rights, and recovering district data.',
        },
        {
          term: 'Staff training and acknowledgment',
          description:
            'Teachers are the de facto procurement officers for free AI tools. The policy only works if staff know the approved list, the request path, and the rule against putting student PII into unapproved tools — and have acknowledged it.',
        },
      ],
    },
    {
      id: 'contract-clauses',
      title: 'Contract Clauses That Protect Students',
      content:
        'These are the terms districts and their counsel most often negotiate into AI vendor agreements — and the ones standard DPAs are being extended to cover. The model-training clause is the defining AI-era addition: it is the single most contested term, and the one with the longest consequences if it is missing.',
      items: [
        {
          term: 'District ownership of student data',
          description:
            'All student data remains the exclusive property of the district. No sub-licensing or re-disclosure without written district (or parental) permission. This clause is what gave LAUSD leverage when its vendor collapsed.',
        },
        {
          term: 'No training on student data',
          description:
            'The vendor may not use student data — including prompts, chat logs, uploads, and outputs — to train, fine-tune, or improve any AI model, whether its own or a third party’s, beyond the district’s own instance. Once student information enters a training set, it cannot meaningfully be recalled and could potentially resurface in outputs.',
        },
        {
          term: 'Purpose limitation and no advertising',
          description:
            'Data may be used only to deliver the contracted educational service. No targeted advertising, no commercial profiling, no building products unrelated to the contract — consistent with the FERPA school-official exception, SOPIPA-style state laws, and the 2025 COPPA opt-in disclosure rules.',
        },
        {
          term: 'Enumerated data categories',
          description:
            'The contract lists exactly which data elements the tool collects — names, IDs, demographics, academic records, special-education and health information, behavioral data, biometrics, location — and commits to data minimization. Vague answers should be treated as a worst-case answer.',
        },
        {
          term: 'Retention limits and certified deletion',
          description:
            'Data is kept only as long as needed for the contracted purpose (now also a COPPA requirement for under-13 users), and on termination the vendor deletes all student data including backups within a defined window — commonly 30 to 60 days — with written certification of destruction.',
        },
        {
          term: 'Subprocessor disclosure and control',
          description:
            'Most classroom AI tools are wrappers over third-party foundation models. The contract should name underlying model providers and other subprocessors, bind them to the same data terms, and require advance notice before new ones are added. The amended COPPA rule expects operators to actively oversee service providers.',
        },
        {
          term: 'Breach notification and security program',
          description:
            'A specific notification timeline (72 hours is a common ask), a written security program, encryption in transit and at rest, and the right to review security documentation or third-party audit reports.',
        },
        {
          term: 'Change notice for AI features',
          description:
            'Advance written notice before material changes: new AI features, model swaps, new data collection, or terms-of-service changes — each of which triggers district re-review. AI products change far faster than annual renewal cycles.',
        },
        {
          term: 'Transparency and audit rights',
          description:
            'For tools that influence decisions about students — placement, intervention flags, discipline — the right to explanations of how outputs are generated, evidence of bias and accuracy testing, and audit access. Advocates also recommend auditable interaction logs for student-facing chatbots.',
        },
        {
          term: 'Continuity and wind-down',
          description:
            'Obligations that survive vendor acquisition, bankruptcy, or shutdown: data return in usable formats, deletion certification, transition assistance, and a commitment that student data is not an asset transferable in a sale.',
        },
      ],
    },
    {
      id: 'vendor-questions',
      title: 'The Conversation to Have With Every AI Vendor',
      content:
        'Most vendor conversations go wrong by staying at the demo level. These questions move the conversation to the commitments that end up in (or out of) the contract. A vendor with good answers will have them ready; hesitation on the first three rows is itself an answer.',
      table: {
        headers: ['Topic', 'What to ask'],
        rows: [
          [
            'Model training',
            'Is any student data — prompts, uploads, chat logs, outputs — used to train or improve any model? Yours or your model provider’s? Will you put that in the contract?',
          ],
          [
            'Data collected',
            'List every data element you collect about students and staff. Which are required for the tool to work, and which are optional telemetry?',
          ],
          [
            'Underlying models',
            'Which foundation model providers and subprocessors sit under your product? What contractual terms bind them on our students’ data?',
          ],
          [
            'Retention and deletion',
            'How long is each data category kept? What happens at contract end — and can you provide certified deletion including backups?',
          ],
          [
            'Who can see student interactions',
            'Which of your employees can read student chat logs or records, under what controls? Are interactions logged in a way the district can audit?',
          ],
          [
            'Age compliance',
            'How does the product handle under-13 users and COPPA, including the 2025 amendments? What grade levels is it actually designed for?',
          ],
          [
            'Accuracy, bias, and safety',
            'What testing have you done for accuracy, bias, and harmful outputs with students like ours? Can we see results, not just claims? What guardrails and escalation paths exist for self-harm or abuse disclosures?',
          ],
          [
            'Human oversight',
            'Where are teachers or staff required in the loop? What decisions does the tool make or score on its own?',
          ],
          [
            'Change management',
            'How much advance notice do we get before new AI features, model changes, new subprocessors, or ToS changes? Can features be disabled per district?',
          ],
          [
            'Company stability',
            'How long has the product been in districts at our scale? What are your continuity commitments — data return, deletion, transition help — if you are acquired or shut down?',
          ],
          [
            'Standard agreements',
            'Will you sign our state DPA or the NDPA with our state exhibit? Have you signed it with other districts in our state?',
          ],
          [
            'Evidence of benefit',
            'What independent evidence shows this improves outcomes for the problem we are trying to solve? What does success look like in a one-semester pilot?',
          ],
        ],
      },
    },
    {
      id: 'red-flags',
      title: 'Red Flags Worth a Hard Stop',
      content:
        'Privacy advocates and district technology leaders converge on a short list of disqualifiers. None of these are rare, and all of them are easier to act on before signature than after.',
      list: [
        'The vendor refuses to sign a DPA or negotiate standard student-data terms. Treat the refusal as the final answer and find an alternative.',
        'Terms reserve the right to use data to "improve our services" or "develop new products" without an explicit carve-out for model training on student data.',
        'The vendor cannot enumerate what data the product collects, or where it is stored and processed.',
        'A consumer product with consumer terms of service is being pitched for classroom use — consumer chatbot terms generally permit data uses that fail FERPA’s school-official test and were never designed for minors in school settings.',
        'No clear answer on under-13 handling, age gates, or COPPA compliance after the 2025 amendments.',
        '"Free for teachers" tools with no contract at all — no DPA means no enforceable limits on what happens to whatever students and teachers type in.',
        'The vendor cannot name its foundation-model providers or subprocessors, or its agreements with them do not pass through your data restrictions.',
        'Indefinite or unspecified retention, or no deletion-with-certification commitment for contract end.',
        'High-stakes claims (early warning, risk scoring, placement) with no bias or accuracy evidence the district can review.',
        'An early-stage vendor proposing a district-wide deployment on an aggressive timeline with no pilot phase and no wind-down obligations.',
      ],
    },
    {
      id: 'families-community',
      title: 'Where Families and the Community Fit',
      content:
        'Procurement protections work best when they are visible. Districts that publish their approved-tool lists, explain in plain language what data each tool collects, and give families a real channel for questions tend to face less backlash when something changes — and AI tools change constantly. The LAUSD episode generated community demands for transparency precisely because families learned about the data questions after the vendor collapsed, not before the launch.\n\nPractical transparency measures districts are adopting: a public AI tool inventory with data categories and contract links, plain-language notice to parents when a student-facing AI tool is introduced (and what the opt-out path is, where one exists), PPRA-compliant notice for anything touching protected areas, board-level review for high-impact tools so decisions happen in public session, and a standing channel for parent questions about specific tools. New York Education Law 2-d’s parents’ bill of rights is a useful template even outside New York.\n\nCommunity input also belongs **upstream**: several state frameworks now recommend AI task forces or advisory groups that include teachers, parents, and students in tool selection — not just in after-the-fact communication.',
    },
    {
      id: 'getting-started',
      title: 'A Practical Starting Sequence',
      content:
        'For a district, charter network, or private school starting from zero, the order of operations matters less than starting with visibility. A reasonable 90-day sequence:\n\n**Weeks 1–4 — see what you have.** Inventory every AI tool already in use, including free tools on teacher accounts and AI features inside existing products. Survey staff with amnesty: the goal is a real list, not enforcement. Flag anything touching student PII with no contract behind it.\n\n**Weeks 5–8 — set the front door.** Stand up the single intake path and an interim rule: no new AI tools, and no student data into existing unapproved ones, until reviewed. Adopt a state model policy (such as Ohio’s) or your state DPA/NDPA as the baseline rather than drafting from a blank page. Define your risk tiers.\n\n**Weeks 9–12 — work the highest-risk list.** Send the vendor questions above to the tools that touch the most sensitive data, get DPAs signed or tools retired, and bring the policy to the board with the inventory attached. Schedule re-reviews at renewal dates.\n\nFree planning resources: the Future of Privacy Forum’s generative-AI vetting checklist, the SDPC’s NDPA and state registries, CDT’s procurement policy recommendations, and your state education agency’s AI guidance. AIRegReady’s [free AI readiness checklist](/checklist) and the [Vendor AI Review Packet](/catalog/vendor-ai-review-packet) cover the same inventory-first, vendor-questions workflow in editable document form. None of this replaces review by your district’s counsel — student-privacy obligations vary by state, and contract terms should always get qualified legal review.',
    },
  ],
  timeline: [
    {
      date: '2014',
      event:
        'California enacts SOPIPA and AB 1584, early templates for state limits on commercial use of student data and required ed-tech contract terms; New York adds Education Law 2-d.',
    },
    {
      date: '2021',
      event:
        'The Student Data Privacy Consortium launches the National Data Privacy Agreement, standardizing student-data contract terms across state alliances.',
    },
    {
      date: 'March 2024',
      event:
        'LAUSD launches the "Ed" AI chatbot under a $6 million contract with AllHere — the first district-scale AI assistant deployment in the country.',
    },
    {
      date: 'April 2024',
      event: 'NDPA version 2 is released, updated by the participating state alliances.',
    },
    {
      date: 'Summer 2024',
      event:
        'AllHere collapses; LAUSD pulls Ed offline and its inspector general investigates student-data handling. The episode becomes the standard cautionary tale for district AI procurement.',
    },
    {
      date: 'January 16, 2025',
      event:
        'The FTC finalizes the first major COPPA rule amendments since 2013: opt-in consent for third-party disclosures, retention limits, biometric identifiers, and written security programs.',
    },
    {
      date: 'June 23, 2025',
      event: 'The amended COPPA rule takes effect.',
    },
    {
      date: 'June 30, 2025',
      event:
        'Ohio HB 96 is signed — the first state law requiring every public school district to adopt an AI policy.',
    },
    {
      date: 'December 30, 2025',
      event:
        'Ohio’s Department of Education and Workforce publishes its model AI policy for districts to adopt or adapt.',
    },
    {
      date: 'April 22, 2026',
      event: 'Full compliance deadline for the amended COPPA rule.',
    },
    {
      date: 'July 1, 2026',
      event:
        'Deadline for Ohio districts to adopt board-approved AI policies. Other states are watching the mandate-plus-model-policy approach closely.',
    },
  ],
  sources: [
    {
      title: 'FTC press release - finalized changes to the Children’s Online Privacy Protection Rule (January 2025)',
      url: 'https://www.ftc.gov/news-events/news/press-releases/2025/01/ftc-finalizes-changes-childrens-privacy-rule-limiting-companies-ability-monetize-kids-data',
      description: 'Official summary of the 2025 COPPA amendments, including third-party disclosure consent and retention limits.',
    },
    {
      title: 'U.S. Department of Education - Protecting Student Privacy (FERPA/PPRA resources)',
      url: 'https://studentprivacy.ed.gov/',
      description: 'Federal guidance hub for FERPA, PPRA, and online educational services, including the school official exception.',
    },
    {
      title: 'Student Data Privacy Consortium - National Data Privacy Agreement',
      url: 'https://privacy.a4l.org/national-dpa/',
      description: 'The NDPA template, state exhibits, and participating state alliances.',
    },
    {
      title: 'Ohio Department of Education and Workforce - AI Model Policy for Ohio Districts and Schools',
      url: 'https://education.ohio.gov/Topics/AI-in-Ohio-s-Education/Model-Policy',
      description: 'The model policy published under HB 96 / R.C. 3301.24.',
    },
    {
      title: 'Ohio School Boards Association - HB 96 requires boards to pass new policies',
      url: 'https://www.ohioschoolboards.org/blogs/legislative-report/hb-96-requires-boards-pass-new-policies',
      description: 'Analysis of the July 1, 2026 district AI policy deadline.',
    },
    {
      title: 'Center for Democracy & Technology - Responsible AI adoption in K-12: three policy priorities',
      url: 'https://cdt.org/insights/advancing-responsible-ai-adoption-and-use-in-k-12-education-three-policy-priorities-for-state-legislation/',
      description: 'Recommendations for state model procurement language, vendor questions, and failure protocols.',
    },
    {
      title: 'Future of Privacy Forum - Vetting Generative AI Tools for Use in Schools',
      url: 'https://fpf.org/wp-content/uploads/2024/10/Ed_AI_legal_compliance.pdf_FInal_OCT24.pdf',
      description: 'Legal-compliance checklist for reviewing generative AI tools against FERPA, COPPA, PPRA, and state law.',
    },
    {
      title: 'AI for Education - State AI Guidance tracker',
      url: 'https://www.aiforeducation.io/ai-resources/state-ai-guidance',
      description: 'Running tracker of state education agency AI guidance documents.',
    },
    {
      title: 'EdSurge - An education chatbot company collapsed. Where did the student data go?',
      url: 'https://www.edsurge.com/news/2024-07-15-an-education-chatbot-company-collapsed-where-did-the-student-data-go',
      description: 'Reporting on the AllHere collapse and LAUSD’s contract data protections.',
    },
    {
      title: 'Education Week - Los Angeles Unified’s AI meltdown: 5 ways districts can avoid the same mistakes',
      url: 'https://www.edweek.org/technology/los-angeles-unifieds-ai-meltdown-5-ways-districts-can-avoid-the-same-mistakes/2024/07',
      description: 'Procurement lessons drawn from the Ed chatbot episode.',
    },
    {
      title: 'California SOPIPA - Business & Professions Code §§ 22584-22585',
      url: 'https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=BPC&sectionNum=22584',
      description: 'The Student Online Personal Information Protection Act text.',
    },
    {
      title: 'California AB 1584 - Education Code § 49073.1 (pupil records contracts)',
      url: 'https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=EDC&sectionNum=49073.1',
      description: 'Required terms for district contracts involving pupil records, including district ownership.',
    },
  ],
}
