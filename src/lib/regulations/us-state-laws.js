export const usStateLaws = {
  id: 'us-state-laws',
  slug: 'us-state-laws',
  title: 'U.S. State AI Laws',
  shortTitle: 'U.S. State Laws',
  description:
    'With no comprehensive federal AI law in place, U.S. states are writing their own rules. The result is a fast-moving patchwork of requirements covering hiring, insurance, housing, and more.',
  icon: '\u2696\uFE0F',
  status: 'Evolving',
  lastReviewed: 'June 2026',
  lastReviewedIso: '2026-06-09',
  keyFacts: [
    { label: 'Federal AI Law', value: 'None (as of June 2026)' },
    {
      label: 'States with AI Laws',
      value: 'California, Colorado, Illinois, Texas, New York City, and growing',
    },
    {
      label: 'Common Focus',
      value: 'Hiring, lending, insurance, housing decisions',
    },
    {
      label: 'Key Trend',
      value: 'ADMT notice, human review, bias audits, and frontier-model transparency',
    },
    {
      label: 'Tracking Resource',
      value:
        '[NCSL AI Legislation Tracker](https://www.ncsl.org/technology-and-communication/artificial-intelligence-2025-legislation)',
    },
    {
      label: 'Pace of Change',
      value: 'All 50 states introduced AI legislation in 2025; 38 states adopted or enacted around 100 measures',
    },
  ],
  sections: [
    {
      id: 'overview',
      title: 'The Patchwork Problem',
      content:
        "The United States has no federal law that comprehensively regulates artificial intelligence. Congress has held hearings and introduced bills, but nothing has passed. In the absence of federal action, states have stepped in, each with their own approach, definitions, and enforcement mechanisms.\n\nThis creates a patchwork. A company operating in multiple states may face different disclosure requirements, different definitions of automated decision-making, and different penalties depending on where its customers or employees are located. For organizations deploying AI at scale, this is one of the most challenging compliance environments in the world.\n\nThe pace is accelerating rapidly. According to the National Conference of State Legislatures, all 50 states, Puerto Rico, the Virgin Islands, and Washington, D.C. introduced AI-related legislation in the 2025 legislative session, and 38 states adopted or enacted around 100 measures. Some of these bills target narrow use cases like deepfakes or AI in elections. Others, like Colorado\'s original SB 24-205 and its 2026 replacement SB 26-189, regulate automated decision tools used in high-stakes decisions about people. Understanding which laws apply to your organization requires tracking legislation across every state where you do business.\n\nThis guide covers the most significant state-level AI laws that are enacted or in effect, the common themes across them, and practical steps for building a multi-state compliance strategy.",
    },
    {
      id: 'state-tracker',
      title: 'State-by-State Quick Reference',
      content:
        'The table below summarizes the major state and local AI laws covered in detail on this page. It focuses on enacted laws and the most significant pending proposals — it is a starting point, not an exhaustive list. For day-to-day tracking across all 50 states, the [NCSL AI Legislation Tracker](https://www.ncsl.org/technology-and-communication/artificial-intelligence-2025-legislation) is the most current public resource.',
      table: {
        headers: ['State', 'Key Law(s)', 'Status', 'Main Focus'],
        rows: [
          [
            'Colorado',
            'SB 26-189 (ADMT; replaced SB 24-205)',
            'Effective Jan 1, 2027',
            'Notices, records, human review, and data correction for automated decision-making technology in consequential decisions.',
          ],
          [
            'Texas',
            'TRAIGA (HB 149)',
            'In effect since Jan 1, 2026',
            'Intent-based prohibitions on AI misuse, government AI disclosure, healthcare AI disclosure, NIST-based enforcement defenses.',
          ],
          [
            'California',
            'SB 53 (TFAIA), AB 2013, SB 942',
            'In effect since Jan 1, 2026',
            'Frontier-model transparency and incident reporting, generative AI training-data disclosure, AI interaction disclosure.',
          ],
          [
            'Illinois',
            'AIVITA, BIPA, HB 3773',
            'In effect',
            'AI video-interview consent, biometric data consent with a private right of action, AI employment-decision notice and anti-discrimination.',
          ],
          [
            'New York City',
            'Local Law 144',
            'In effect since Jul 5, 2023',
            'Annual independent bias audits, public audit summaries, and candidate notice for automated hiring tools.',
          ],
          [
            'Connecticut',
            'SB 1103',
            'Signed 2024',
            'Impact assessments for high-risk AI systems and consumer disclosure for consequential decisions.',
          ],
          [
            'Utah',
            'AI Policy Act (SB 149)',
            'Signed 2024',
            'Disclosure when consumers interact with generative AI; AI learning laboratory program.',
          ],
          [
            'Maryland',
            'HB 1202',
            'In effect',
            'Written consent required before using facial recognition in hiring interviews.',
          ],
          [
            'Washington',
            'SB 5838',
            'Signed 2024',
            'AI task force to study impacts and recommend regulation before legislating.',
          ],
          [
            'Virginia',
            'High-Risk AI Developer Act',
            'Proposed',
            'Would require impact assessments and transparency for high-risk AI developers.',
          ],
          [
            'New Jersey',
            'Multiple bills',
            'Under consideration',
            'Active bills on AI in hiring, deepfakes, and automated decision-making; no comprehensive law yet.',
          ],
        ],
      },
    },
    {
      id: 'colorado',
      title: 'Colorado SB 26-189: ADMT Rules for Consequential Decisions',
      content:
        "Colorado remains one of the most important state AI law jurisdictions, but the compliance target changed materially in May 2026. Colorado originally passed SB 24-205, the Colorado Artificial Intelligence Act, in 2024. That law would have created a broad high-risk AI framework with risk management, impact assessment, public statement, and algorithmic-discrimination obligations. Before that framework took effect, Colorado passed and signed SB 26-189, Automated Decision-Making Technology, on May 14, 2026.\n\nSB 26-189 repeals and reenacts the prior Colorado AI Act framework. The new law is narrower and more operational. It focuses on automated decision-making technology, or ADMT, that processes personal data and materially influences consequential decisions about people. The effective date for the new framework is January 1, 2027.\n\nThe practical question is now: are you using computation over personal data to generate a prediction, recommendation, classification, ranking, score, or similar output that materially influences access to employment, housing, financial or lending services, insurance, healthcare, education, or essential government services? If yes, Colorado may expect notices, records, data access and correction, adverse-outcome explanations, and meaningful human review.",
      items: [
        {
          term: 'Covered ADMT',
          description:
            'The new law focuses on automated decision-making technology that processes personal data and generates outputs used to make, guide, or assist consequential decisions. It is not limited to generative AI; scoring models, ranking systems, screening tools, and recommendation systems can all be covered.',
        },
        {
          term: 'Materially Influences',
          description:
            'Coverage turns on whether the ADMT output meaningfully affects the outcome. A tool used only for drafting, formatting, analytics, or quality control is lower risk. A tool that affects who gets a job interview, loan offer, insurance outcome, healthcare access, education opportunity, or public benefit needs review.',
        },
        {
          term: 'Covered Domains',
          description:
            'The law targets consequential decisions in education, employment, housing, financial or lending services, insurance, healthcare services, and essential government services. The original SB 24-205 framing around broad high-risk AI systems is no longer the right starting point.',
        },
        {
          term: 'Developer Documentation',
          description:
            'Developers of covered ADMT must provide deployers with information about intended uses, training-data categories, known limitations, appropriate use, human review, and material updates or modifications.',
        },
        {
          term: 'Deployer Duties',
          description:
            'Deployers must give clear notices, provide plain-language descriptions after adverse outcomes, support access and correction of personal data used by covered ADMT, offer meaningful human review and reconsideration, and retain compliance records.',
        },
        {
          term: 'Enforcement',
          description:
            'Enforcement remains with the Colorado Attorney General through the Colorado Consumer Protection Act. The law does not create a new private right of action, and the Attorney General generally must provide notice and an opportunity to cure if cure is possible.',
        },
      ],
    },
    {
      id: 'texas-traiga',
      title: 'Texas TRAIGA: In Effect Since January 1, 2026',
      content:
        'Governor Greg Abbott signed **HB 149**, the Texas Responsible Artificial Intelligence Governance Act (TRAIGA), on June 22, 2025. It took effect on **January 1, 2026**, making Texas one of the first states with a broad AI governance statute in force.\n\nTRAIGA is different in character from Colorado\'s law. Colorado regulates automated decision-making technology used in consequential decisions. TRAIGA is narrower and more intent-based — it targets purposeful misuse of AI rather than high-risk categories. Most of its prohibitions only bite if a developer or deployer acts with intent.\n\nApplicability is broad in scope: TRAIGA applies to anyone who promotes or conducts business in Texas, produces a product or service used by Texas residents, or develops or deploys an AI system in Texas. Enforcement is exclusively by the **Texas Attorney General** — there is no private right of action, and the AG must give notice and an opportunity to cure before bringing an action.',
      items: [
        {
          term: 'Prohibited Uses',
          description:
            'Categorical bans on AI systems developed or deployed with intent to manipulate behavior to encourage self-harm or criminal activity, unlawfully discriminate against protected classes, generate child sexual abuse material or unlawful deepfakes, or infringe constitutional rights. Most prohibitions include an intent requirement.',
        },
        {
          term: 'Government Use Disclosure',
          description:
            'Government agencies that use AI to interact with consumers must disclose that fact before or at the time of the interaction — even if the AI is obvious. Government social scoring and biometric identification (fingerprint, iris, voiceprint) are banned outright, except for routine photos and audio.',
        },
        {
          term: 'Healthcare Disclosure',
          description:
            'Healthcare providers must disclose AI use to patients. Private employers are not subject to the same disclosure requirement under TRAIGA (a notable contrast with Colorado and Illinois).',
        },
        {
          term: 'Penalties',
          description:
            'Civil penalties range from **$10,000 to $200,000 per violation** depending on curability, or **$2,000 to $40,000 per day** for continued violations. The AG must provide notice and a cure period before bringing an action.',
        },
        {
          term: 'NIST AI RMF Defense',
          description:
            'TRAIGA rewards organizations that substantially comply with NIST\'s Generative AI Profile or another recognized AI risk management framework through its enforcement defenses and reasonable-care structure. This is one of the most concrete examples of a state law giving practical value to NIST adoption.',
        },
        {
          term: 'Regulatory Sandbox (First in the Nation)',
          description:
            'TRAIGA establishes a **first-in-the-nation state AI regulatory sandbox**, administered by the Texas Department of Information Resources. Approved participants can test AI systems for up to **36 months** without obtaining standard state licenses, and the AG cannot pursue enforcement actions for violations of waived state laws during that window. Core prohibitions still apply. Participants must submit a detailed application, a benefit assessment, a mitigation plan, and file quarterly and annual reports.',
        },
        {
          term: 'Texas AI Advisory Council',
          description:
            'TRAIGA establishes a seven-member Texas AI Advisory Council that advises on AI governance, the sandbox program, ethics, and public safety. The Council runs training programs for state agencies but cannot promulgate binding rules.',
        },
      ],
    },
    {
      id: 'california-tfaia',
      title: 'California TFAIA: Frontier AI Transparency Rules',
      content:
        'California Governor Gavin Newsom signed **SB 53**, the Transparency in Frontier Artificial Intelligence Act (TFAIA), on September 29, 2025. It took effect on **January 1, 2026**. TFAIA is the first U.S. state law targeting the largest AI model developers specifically, rather than deployers of AI across sectors.\n\nThe scope is narrow but the impact is high. TFAIA applies to a small number of **frontier developers** — companies training foundation models using more than 10^26 FLOPs of compute — and imposes additional obligations on **large frontier developers** whose group annual revenue exceeds $500 million. In practice this captures roughly five to eight companies (OpenAI, Anthropic, Google DeepMind, Meta, Microsoft, and a handful of others).\n\nTFAIA is not limited to California-based developers. California applies the law to any frontier developer whose products are sold into or used within the state, on the same "sufficient contacts" theory the state uses for its other consumer protection laws. Enforcement is exclusively by the **California Attorney General**, with civil penalties up to **$1 million per violation**.\n\nTFAIA sits alongside two other California AI laws that took effect the same day: **AB 2013** (GAI Training Data Transparency Act) and **SB 942** (AI Transparency Act). Together they form California\'s most comprehensive AI regulatory package to date.',
      items: [
        {
          term: 'Transparency Reports (All Frontier Developers)',
          description:
            'Before or at the time of launching a new or substantially modified frontier model, developers must publish a transparency report covering the model release date, supported languages, and intended use. A sufficient model card counts. Redactions are permitted for trade secrets, cybersecurity, public safety, and national security — but must be described, justified, and the unredacted version retained for five years.',
        },
        {
          term: 'Frontier AI Framework (Large Developers Only)',
          description:
            'Large frontier developers must publish a Frontier AI Framework on their website detailing the technical and organizational measures in place to assess, manage, and mitigate catastrophic risks. The framework must be reviewed and updated at least annually, cover alignment with national and international standards, include third-party risk assessments, and describe cybersecurity measures protecting unreleased model weights. Material changes require public justification within 30 days.',
        },
        {
          term: 'Critical Safety Incident Reporting',
          description:
            'Frontier developers must report critical safety incidents to the California Office of Emergency Services (Cal OES) **within 15 days** of discovery. If the incident poses imminent risk of death or serious physical injury, notification to law enforcement or public safety agencies is required **within 24 hours**. "Critical safety incident" includes unauthorized access to model weights, catastrophic risk materialization, loss of control causing death or injury, and models using deceptive techniques to subvert developer controls.',
        },
        {
          term: 'Catastrophic Risk Assessment',
          description:
            'TFAIA defines "catastrophic risk" as a foreseeable material risk that a frontier model could contribute to the death or serious injury of 50+ people or cause $1 billion+ in damages — from weapons of mass destruction assistance, autonomous criminal conduct or cyberattacks, or a model evading developer/user control. Large frontier developers must confidentially submit catastrophic risk assessments to Cal OES.',
        },
        {
          term: 'Whistleblower Protections',
          description:
            'Employers cannot retaliate against employees or contractors who report catastrophic risks. Notices must be posted in the workplace and provided annually to employees responsible for risk assessment. Anonymous reporting channels are required.',
        },
        {
          term: 'Annual Scope Review',
          description:
            'The California Department of Technology must annually assess the 10^26 FLOPs threshold and the $500 million large-developer definition, and recommend updates to the legislature. The scope is expected to evolve as compute and revenue thresholds shift with industry growth.',
        },
      ],
    },
    {
      id: 'illinois',
      title: 'Illinois: AI in Hiring and Biometric Data',
      content:
        'Illinois was one of the earliest states to regulate AI, and it remains one of the most active. Two laws are particularly important for organizations using AI: the **Artificial Intelligence Video Interview Act (AIVITA)** and the **Biometric Information Privacy Act (BIPA)**.\n\n**AIVITA (effective January 1, 2020)** applies to employers that use AI to analyze video interviews of job applicants. It was one of the first laws anywhere to directly regulate AI in employment. The law requires employers to notify applicants before the interview that AI will be used to analyze their video, explain how the AI works and what characteristics it evaluates, and obtain the applicant\'s written consent. Applicants have the right to request deletion of their video within 30 days, and employers must comply. If the applicant does not consent, the employer cannot use AI analysis on that interview.\n\n**BIPA (2008, but increasingly relevant to AI)** is not an AI law per se, but it has major implications for AI systems that use biometric data — particularly facial recognition, voiceprint analysis, and fingerprint scanning. BIPA requires informed written consent before collecting biometric identifiers, a publicly available data retention and destruction policy, and restrictions on selling or disclosing biometric data.\n\nBIPA is notable for its **private right of action**. Individuals can sue for $1,000 per negligent violation and $5,000 per intentional or reckless violation. Class action lawsuits under BIPA have resulted in settlements exceeding $600 million. Any AI system that processes biometric data on Illinois residents must comply with BIPA, regardless of where the company is based.\n\nIllinois took another significant step in August 2024 when Governor Pritzker signed **HB 3773** (Public Act 103-0804), which amends the **Illinois Human Rights Act** to address AI in employment. The law makes it a **civil rights violation** to use AI for employment decisions without providing notice to employees, or to use AI in a manner that results in discrimination against members of protected classes. This extends Illinois\'s AI regulation beyond video interviews to cover AI-assisted employment decisions more broadly.\n\nIllinois continues to consider additional automated decision-making legislation. Proposed bills would extend AI transparency and impact assessment requirements beyond hiring to other high-stakes domains, signaling that Illinois will remain at the forefront of state AI regulation.',
    },
    {
      id: 'nyc',
      title: 'NYC Local Law 144: Bias Audits for Hiring AI',
      content:
        'New York City\'s **Local Law 144** took effect on **July 5, 2023**, making it one of the first enforceable AI-specific laws in the United States. The law targets **Automated Employment Decision Tools (AEDTs)** — any computational process derived from machine learning, statistical modeling, data analytics, or AI that substantially assists or replaces discretionary decision-making in hiring or promotion.\n\nThe law applies to employers and employment agencies that use AEDTs for candidates or employees in New York City. It does not matter where the employer is headquartered — if the tool is used on NYC candidates, the law applies.',
      items: [
        {
          term: 'Annual Bias Audit',
          description:
            'Employers must commission an independent bias audit of the AEDT at least once per year. The audit must be conducted by an independent auditor who is not involved in developing or deploying the tool. The audit must assess the tool\'s impact across race/ethnicity and sex categories, calculating selection rates and impact ratios.',
        },
        {
          term: 'Public Disclosure',
          description:
            'A summary of the most recent bias audit results must be made publicly available on the employer\'s website. The summary must include the date of the audit, the selection rates and impact ratios for each category, and the source and explanation of the data used.',
        },
        {
          term: 'Candidate Notification',
          description:
            'Employers must notify candidates at least 10 business days before using an AEDT. The notice must specify that an AEDT will be used, the job qualifications and characteristics the tool assesses, and information about the data sources. Candidates in NYC can request an alternative selection process or accommodation.',
        },
        {
          term: 'Enforcement',
          description:
            'The NYC Department of Consumer and Worker Protection (DCWP) enforces the law. Penalties range from $500 for a first violation to $1,500 for subsequent violations per instance. Each failure to provide required notice to a candidate constitutes a separate violation.',
        },
        {
          term: 'Impact and Criticism',
          description:
            'Local Law 144 has been both praised and criticized. Supporters say it brings transparency to a process that affects millions of job seekers. Critics argue the law is too narrow — it only covers hiring and promotion, not other consequential AI decisions — and that the bias audit methodology is not rigorous enough. Regardless, it established a precedent that other cities and states are now following.',
        },
      ],
    },
    {
      id: 'other-states',
      title: 'Other State and Local AI Laws',
      content:
        'Beyond Colorado, Illinois, and New York City, a growing number of states have enacted or are actively considering AI legislation. Below is an overview of the most significant developments. This is not exhaustive — the legislative landscape changes monthly.\n\nSeveral other states — including Massachusetts, Minnesota, Oregon, and Georgia — have introduced or are developing AI-related legislation. The pace is such that any static list becomes outdated within months. Organizations operating in multiple states should monitor the [NCSL AI Legislation Tracker](https://www.ncsl.org/technology-and-communication/artificial-intelligence-2025-legislation) for current developments.',
      table: {
        headers: ['State', 'Law / Bill', 'Status', 'Key Provisions'],
        rows: [
          [
            'Texas',
            'HB 1709',
            'Signed 2025',
            'Establishes an AI advisory council, requires state agencies to inventory AI systems, sets governance standards for government use of AI. (See the dedicated TRAIGA section above for the main Texas AI law, HB 149.)',
          ],
          [
            'California',
            'AB 2013, SB 942',
            'In effect since Jan 1, 2026',
            'AB 2013 (GAI Training Data Transparency Act) requires transparency about data used to train generative AI models. SB 942 (AI Transparency Act) requires disclosure when consumers interact with AI systems. Together with SB 53 (TFAIA, see dedicated section above), these form California\'s AI regulatory package now in force.',
          ],
          [
            'California',
            'SB 1047 (vetoed), CPPA rules',
            'Evolving',
            'SB 1047 would have imposed safety requirements on large AI models — vetoed by Gov. Newsom in Sept 2024 citing concerns about stifling innovation. SB 53 is its spiritual successor with a narrower scope. The California Privacy Protection Agency (CPPA) is pursuing AI-specific rules under CCPA authority, including automated decision-making opt-out rights.',
          ],
          [
            'Connecticut',
            'SB 1103',
            'Signed 2024',
            'Requires AI impact assessments for high-risk systems, disclosure to consumers when AI is used in consequential decisions, and a risk management framework. Similar in scope to Colorado.',
          ],
          [
            'Maryland',
            'Facial Recognition in Hiring (HB 1202)',
            'In effect',
            'Prohibits employers from using facial recognition technology during interviews without written consent. Narrow in scope but establishes a precedent for biometric AI regulation.',
          ],
          [
            'Virginia',
            'High-Risk AI Developer Act (proposed)',
            'Under consideration',
            'Would require impact assessments and transparency for developers of high-risk AI systems. Modeled partly on the EU AI Act risk classification approach.',
          ],
          [
            'Utah',
            'AI Policy Act (SB 149)',
            'Signed 2024',
            'Requires disclosure when consumers interact with generative AI. Creates an AI learning laboratory program. Lighter-touch approach focused on transparency over regulation.',
          ],
          [
            'New Jersey',
            'Multiple bills introduced',
            'Under consideration',
            'Bills addressing AI in hiring, deepfakes, and automated decision-making. No comprehensive law yet but active legislative agenda.',
          ],
          [
            'Washington',
            'AI Task Force (SB 5838)',
            'Signed 2024',
            'Creates a task force to study AI impacts and recommend regulatory approaches. Study-first approach before legislating.',
          ],
        ],
      },
    },
    {
      id: 'common-themes',
      title: 'Common Themes Across State AI Laws',
      content:
        'Despite the patchwork, clear patterns are emerging across state AI legislation. Understanding these themes helps organizations build compliance programs that will hold up as more states act.',
      list: [
        '**Transparency and disclosure.** Nearly every state AI law requires organizations to tell people when AI is being used in decisions that affect them. The specifics vary — some require disclosure before the interaction, others after — but the principle is universal.',
        '**Impact assessments and decision records.** Connecticut and several proposals require formal impact assessments for high-risk AI systems. Colorado\'s 2026 ADMT law moved away from mandatory impact assessments, but still expects records, notices, data-correction processes, and human-review workflows for covered consequential decisions.',
        '**Focus on high-risk decisions.** States are not trying to regulate all AI. The consistent focus is on AI used in decisions with significant consequences: employment, lending, insurance, housing, healthcare, education, and legal services. Low-risk uses like spam filters or autocomplete are generally unaffected.',
        '**Bias auditing.** NYC\'s bias audit requirement for hiring tools is being studied by other jurisdictions. The expectation that AI systems should be independently tested for discriminatory outcomes is becoming mainstream.',
        '**Consumer rights.** Multiple laws give individuals the right to know when AI is used in decisions about them, to access information about how the system works, to correct inaccurate data, and in some cases to opt out of automated decision-making entirely.',
        '**Shared responsibility between developers and deployers.** State AI laws increasingly split obligations between the companies that build AI systems and the companies that use them. Developers provide documentation and update notices; deployers implement the consumer-facing notices, review processes, and records.',
        '**Reference to federal standards.** Texas TRAIGA points to NIST\'s Generative AI Profile and other recognized AI risk frameworks in its enforcement defenses, and state proposals continue to reference recognized AI risk frameworks. Tying state compliance to existing federal frameworks simplifies implementation for organizations that have already adopted NIST.',
        '**No private right of action (mostly).** With the notable exception of Illinois BIPA, most state AI laws are enforced by state attorneys general rather than through private lawsuits. This may limit individual enforcement but concentrates regulatory action.',
      ],
    },
    {
      id: 'compliance-challenges',
      title: 'Multi-State Compliance Challenges and Federal Preemption Risk',
      content:
        'For organizations that operate across state lines — which includes most businesses with an online presence — the current state of AI regulation creates real practical problems. And a complication has been unfolding since late 2025: federal preemption pressure.\n\n**Federal preemption pressure.** On December 11, 2025, President Trump signed an executive order titled **"Ensuring a National Policy Framework for AI"** that directly targets the state AI regulatory patchwork. The order established a **DOJ AI Litigation Task Force** (stood up by AG Bondi on January 9, 2026) tasked with challenging state AI laws on interstate commerce, preemption, and other grounds. By early June 2026, the Justice Department had intervened in xAI\'s challenge to Colorado\'s original SB 24-205 rather than filing a standalone task-force lawsuit. On **March 20, 2026**, the White House released its **National Policy Framework for AI**, a set of legislative recommendations covering seven areas (child safety, communities, IP, censorship, innovation, workforce, and state preemption). The Framework is non-binding but is shaping the federal legislative agenda. Constitutional scholars have noted that Congress — not the executive branch — has the exclusive power to preempt state law, so an executive order alone has limited strength. This creates major uncertainty for organizations investing in state-level compliance; laws they are preparing for may face federal challenges before they are fully enforced.\n\n**Conflicting definitions.** States define key terms differently. What counts as an "automated decision tool" in New York City is not the same as what qualifies as covered ADMT in Colorado or prohibited AI under Texas TRAIGA. An AI system might trigger obligations in one state but not another, even though it does the same thing.\n\n**Overlapping requirements with different timelines.** Some states require impact assessments. Others, like Colorado after SB 26-189, focus more on notice, records, data correction, and human review. If a company deploys the same AI system in both states, it may need separate assessments or a combined approach that satisfies both. Timing requirements for consumer notifications also differ.\n\n**Monitoring the legislative landscape.** With over 1,200 AI bills introduced across all 50 states in 2025 alone, keeping track of what has passed, what is pending, and what has been signed is a significant operational burden. Laws can move quickly — a bill introduced in January can be signed by June.\n\n**Enforcement uncertainty.** Many of these laws are new, and enforcement patterns have not yet been established. Organizations face the challenge of interpreting vague statutory language without the benefit of regulatory guidance or case law. The federal preemption threat adds another layer — organizations may invest in compliance with state laws that are subsequently struck down or preempted.\n\n**Resource constraints.** Compliance requires legal analysis, technical assessment, documentation, and ongoing monitoring. For smaller organizations that lack dedicated compliance teams, meeting the requirements of even one state law can be demanding. Meeting the requirements of several simultaneously is a significant undertaking.',
    },
    {
      id: 'practical-steps',
      title: 'What Organizations Should Do',
      content:
        'The patchwork is not going away soon, though federal preemption pressure continues to create uncertainty. Even if federal action eventually preempts some state laws, organizations that have built compliance programs around frameworks like NIST AI RMF will be well-positioned regardless of how the federal-state dynamic resolves. Building a compliance strategy now is both a legal necessity and a competitive advantage.',
      list: [
        '**Map your AI footprint.** Inventory every AI system your organization develops or uses. For each one, document what it does, what data it processes, what decisions it influences, and where those decisions affect people geographically.',
        '**Identify your highest-risk systems first.** Focus initial compliance efforts on AI systems used in consequential decisions — hiring, lending, insurance, housing, healthcare, education, and legal services. These are the domains every state law targets.',
        '**Adopt NIST AI RMF as your baseline.** The NIST AI Risk Management Framework is voluntary at the federal level, but Texas TRAIGA gives practical enforcement value to substantial compliance with NIST\'s Generative AI Profile or another recognized AI risk framework, and other state laws or proposals continue to use NIST as a recognized baseline. Building your governance program around NIST gives you a defensible foundation that aligns with where regulation is heading.',
        '**Build bias auditing into your process.** Whether or not your state requires it yet, establishing regular independent audits of your AI systems for discriminatory outcomes is becoming a standard expectation. Start before you are required to.',
        '**Implement consumer disclosure now.** Transparency is the single most consistent requirement across all state AI laws. If your AI system affects decisions about people, build notification and disclosure mechanisms into the product. It is cheaper to build these in from the start than to retrofit them later.',
        '**Create a legislative monitoring process.** Assign someone — or subscribe to a service — to track AI legislation in every state where you operate. The NCSL tracker is a good starting point. Review new developments at least quarterly.',
        '**Document everything.** Impact assessments, risk management policies, audit results, consumer notices, and internal decisions about AI deployment should all be documented. Documentation is both a compliance requirement under most laws and your best defense in an enforcement action.',
        '**Engage your vendors.** If you use third-party AI tools, you need documentation from those vendors about how their systems work, what data they use, what limitations they have, and what risks they present. Colorado\'s ADMT law and the EU AI Act both make vendor documentation a practical requirement. Start requesting it now.',
        '**Plan for the strictest standard.** When requirements conflict across states, consider building your compliance program to the most demanding standard. This is more work upfront but avoids the complexity of maintaining different compliance postures for different jurisdictions.',
      ],
    },
  ],
  timeline: [
    {
      date: 'January 2020',
      event:
        'Illinois AI Video Interview Act (AIVITA) takes effect, one of the first U.S. laws directly regulating AI in employment.',
    },
    {
      date: 'July 2023',
      event:
        'NYC Local Law 144 takes effect, requiring bias audits and public disclosure for automated hiring tools.',
    },
    {
      date: 'May 2024',
      event:
        'Colorado Governor Polis signs SB 24-205, the first comprehensive state AI law covering high-risk AI across multiple domains. The framework is later repealed and replaced before taking effect.',
    },
    {
      date: 'June 2024',
      event:
        'Connecticut signs SB 1103, requiring AI impact assessments and consumer disclosure for high-risk systems.',
    },
    {
      date: 'August 2024',
      event:
        'Illinois HB 3773 signed, amending the Illinois Human Rights Act to make it a civil rights violation to use AI for employment decisions without notice or in a discriminatory manner.',
    },
    {
      date: 'September 2024',
      event:
        'California Governor Newsom vetoes SB 1047, citing concerns about stifling AI innovation. The bill\'s influence persists in ongoing legislative discussions.',
    },
    {
      date: 'March 2024',
      event:
        'Utah signs AI Policy Act (SB 149), requiring disclosure when consumers interact with generative AI.',
    },
    {
      date: '2025',
      event:
        'Texas signs HB 1709 establishing AI governance for state agencies. NCSL reports that all 50 states introduced AI legislation in 2025 and 38 states adopted or enacted around 100 measures.',
    },
    {
      date: 'June 2025',
      event:
        'Governor Abbott signs Texas TRAIGA (HB 149), the Texas Responsible AI Governance Act, effective January 1, 2026.',
    },
    {
      date: 'August 2025',
      event:
        'Colorado Governor Polis signs SB 25B-004, delaying the original SB 24-205 effective date from February 1, 2026 to June 30, 2026 while lawmakers work on a replacement.',
    },
    {
      date: 'September 2025',
      event:
        'California Governor signs SB 53 (Transparency in Frontier AI Act), California\'s first comprehensive frontier AI law targeting the largest AI developers.',
    },
    {
      date: 'December 2025',
      event:
        'Trump executive order "Ensuring a National Policy Framework for AI" targets state AI laws for potential federal preemption. DOJ AI Litigation Task Force established.',
    },
    {
      date: 'January 2026',
      event:
        'Multiple state AI laws take effect: California SB 53 (TFAIA), AB 2013, and SB 942; Texas TRAIGA (HB 149); and others.',
    },
    {
      date: 'January 9, 2026',
      event:
        'AG Pam Bondi establishes the DOJ AI Litigation Task Force to challenge state AI laws in federal court. DOJ later intervenes in xAI\'s Colorado SB 24-205 lawsuit, while no standalone task-force lawsuit is identified by early June 2026.',
    },
    {
      date: 'March 20, 2026',
      event:
        'White House releases its National Policy Framework for Artificial Intelligence, a non-binding legislative blueprint covering child safety, innovation, workforce development, and state preemption.',
    },
    {
      date: 'May 14, 2026',
      event:
        'Colorado signs SB 26-189, repealing and reenacting the original Colorado AI Act framework as a narrower ADMT law effective January 1, 2027.',
    },
  ],
  sources: [
    {
      title: 'Colorado SB 26-189 — Automated Decision-Making Technology',
      url: 'https://leg.colorado.gov/bills/sb26-189',
      description:
        'The 2026 Colorado ADMT law that replaced the original SB 24-205 framework before it took effect.',
    },
    {
      title: 'U.S. Department of Justice — xAI Colorado AI Act Intervention',
      url: 'https://www.justice.gov/opa/pr/justice-department-intervenes-xai-lawsuit-challenging-colorados-algorithmic-discrimination',
      description:
        'DOJ announcement describing its April 2026 intervention in the xAI lawsuit challenging Colorado SB 24-205.',
    },
    {
      title: 'Colorado SB 24-205 — Original Colorado AI Act',
      url: 'https://leg.colorado.gov/bills/sb24-205',
      description:
        'Historical source for the original Colorado Artificial Intelligence Act framework.',
    },
    {
      title: 'NYC Local Law 144 — Automated Employment Decision Tools',
      url: 'https://www.nyc.gov/site/dca/about/automated-employment-decision-tools.page',
      description:
        'NYC Department of Consumer and Worker Protection page on AEDT requirements, bias audit guidance, and enforcement.',
    },
    {
      title: 'Illinois Artificial Intelligence Video Interview Act (AIVITA)',
      url: 'https://www.ilga.gov/legislation/ilcs/ilcs3.asp?ActID=4015',
      description:
        'Full text of the Illinois law regulating AI analysis of video interviews.',
    },
    {
      title: 'NCSL Artificial Intelligence 2025 Legislation Tracker',
      url: 'https://www.ncsl.org/technology-and-communication/artificial-intelligence-2025-legislation',
      description:
        'National Conference of State Legislatures tracker of AI bills across all 50 states.',
    },
    {
      title: 'Illinois Biometric Information Privacy Act (BIPA)',
      url: 'https://www.ilga.gov/legislation/ilcs/ilcs3.asp?ActID=3004',
      description:
        'Full text of BIPA, which governs collection and use of biometric data including by AI systems.',
    },
    {
      title: 'California SB 53 (Transparency in Frontier AI Act)',
      url: 'https://legiscan.com/CA/text/SB53/id/3270002',
      description:
        'Full text of California\'s frontier AI transparency law.',
    },
    {
      title: 'Texas TRAIGA (HB 149)',
      url: 'https://capitol.texas.gov/tlodocs/89R/billtext/pdf/HB00149F.pdf',
      description:
        'Full text of the Texas Responsible AI Governance Act.',
    },
  ],
  relatedRegulations: ['federal-policy', 'sector-rules'],
}
