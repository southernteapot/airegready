export const texasAiRegulation = {
  id: 'texas-ai-regulation',
  slug: 'texas-ai-regulation',
  title: 'Texas AI Regulation',
  shortTitle: 'Texas AI',
  description:
    'Texas regulates AI through TRAIGA, public-sector AI governance laws, biometric and privacy rules, synthetic-media offenses, financial-exploitation protections, and sector guidance for regulated industries and professions.',
  icon: '\uD83E\uDD20',
  status: 'In Effect',
  lastReviewed: 'May 18, 2026',
  lastReviewedIso: '2026-05-18',
  keyFacts: [
    {
      label: 'Main AI Law',
      value: 'HB 149 / TRAIGA, effective January 1, 2026',
    },
    {
      label: 'Primary Enforcer',
      value: 'Texas Attorney General; TRAIGA has no private right of action',
    },
    {
      label: 'Private-Sector Focus',
      value:
        'Intentional misuse, health care AI disclosure, biometrics, privacy, synthetic media, and fraud',
    },
    {
      label: 'Public-Sector Focus',
      value:
        'AI inventories, NIST-aligned code of ethics, standards, impact assessments, notices, complaints, and training',
    },
    {
      label: 'Government Training',
      value: 'Annual AI awareness training for covered state and local government personnel',
    },
    {
      label: 'Key Agencies',
      value:
        'Texas Attorney General, Department of Information Resources, sector regulators',
    },
  ],
  sections: [
    {
      id: 'overview',
      title: 'Texas Regulates AI in Layers',
      content:
        'Texas does not regulate AI through one statute alone. The core law is the **Texas Responsible Artificial Intelligence Governance Act** (TRAIGA), but the full picture includes public-sector AI governance, state and local government training, biometric rules, the Texas Data Privacy and Security Act, deepfake and child-safety laws, AI-enabled financial exploitation laws, and sector-specific guidance.\n\nThe state approach is pragmatic and enforcement-oriented. For private businesses, Texas is not trying to copy Colorado-style impact assessments for every high-risk AI use. It focuses on prohibited intentional harms, disclosures in health care and government-facing uses, biometric consent, privacy/profiling risks, and specific abuses such as sexual deepfakes, child sexual material, election deepfakes, and AI-enabled scams.\n\nFor state agencies and local governments, Texas is more prescriptive. Public-sector laws require inventories, NIST-aligned standards, AI ethics rules, impact assessments for heightened-scrutiny systems, notices for public-facing AI, training, and complaint-handling infrastructure.',
    },
    {
      id: 'traiga',
      title: 'TRAIGA: The General Texas AI Law',
      content:
        '**HB 149**, the Texas Responsible Artificial Intelligence Governance Act, is the centerpiece of Texas AI regulation. It amended the Business & Commerce Code and Government Code and took effect on **January 1, 2026**.\n\nTRAIGA applies broadly to a person who promotes, advertises, or conducts business in Texas, produces a product or service used by Texas residents, or develops or deploys an AI system in Texas. Its definition of AI is broad enough to cover generative AI, predictive models, recommendation systems, decision systems, and other machine-based systems that infer outputs from inputs.\n\nThe private-sector posture is narrower than many state AI proposals. TRAIGA is mostly concerned with intentional misuse rather than ordinary business use of AI. It does not create a general private-employer AI notice requirement, a general private-sector impact assessment duty, or a private right of action.',
      items: [
        {
          term: 'Prohibited intentional uses',
          description:
            'Developers and deployers cannot develop or deploy AI systems with prohibited intent, including intent to incite or encourage self-harm, harm to others, or criminal activity; unlawfully discriminate against protected classes; impair constitutional rights; or produce certain child sexual abuse material or unlawful deepfake material.',
        },
        {
          term: 'Government and health care disclosures',
          description:
            'Governmental entities must disclose when consumers interact with AI systems, subject to the statutory details. Health care providers must disclose AI use in connection with health care services. SB 1964 also creates public-sector notice rules for state and local government AI systems.',
        },
        {
          term: 'Social scoring and biometric restrictions',
          description:
            'TRAIGA prohibits certain government social scoring uses and restricts certain biometric identification uses. It also amended Texas biometric law so public availability of an image is not, by itself, consent for commercial capture or storage of biometric identifiers unless the individual made the image or media public.',
        },
        {
          term: 'Enforcement and penalties',
          description:
            'The Texas Attorney General enforces TRAIGA. Before bringing an action, the AG generally must provide notice and an opportunity to cure. Civil penalties vary by type of violation, and continued violations can trigger daily penalties. State licensing agencies may impose additional sanctions after an AG finding and recommendation.',
        },
        {
          term: 'Risk-framework defense',
          description:
            'TRAIGA does not create a blanket NIST certification regime. It does, however, recognize important liability defenses when a violation is discovered through feedback, testing, state-agency guidelines, or an internal review process tied to the NIST Generative AI Profile or another recognized AI risk-management framework.',
        },
        {
          term: 'AI regulatory sandbox',
          description:
            'TRAIGA directs the Texas Department of Information Resources, in consultation with the Texas Artificial Intelligence Council, to create a regulatory sandbox for testing innovative AI systems for up to 36 months. Waived licensing or regulatory requirements do not waive TRAIGA core prohibitions.',
        },
        {
          term: 'Texas Artificial Intelligence Council',
          description:
            'TRAIGA creates the Texas Artificial Intelligence Council to study AI regulation, public safety, ethics, data privacy, legal risk, innovation barriers, and opportunities to improve government operations. The Council can issue reports and recommendations, but the statute does not make it a general AI rulemaking agency.',
        },
      ],
    },
    {
      id: 'public-sector',
      title: 'Public-Sector AI Governance',
      content:
        'Texas is especially active in regulating AI used by government. The 2025 legislative package added multiple Government Code requirements that affect state agencies, local governments, public-sector vendors, and covered employees.',
      items: [
        {
          term: 'SB 1964: AI code of ethics and minimum standards',
          description:
            'SB 1964 requires DIR to establish an AI system code of ethics for state agencies and local governments. The code must align with NIST AI RMF 1.0 and address human oversight, fairness, accuracy, transparency, privacy, security, redress, accountability, evaluation frequency, and documentation of improvements. State agencies and local governments must adopt the code.',
        },
        {
          term: 'Heightened-scrutiny AI systems',
          description:
            'SB 1964 defines heightened-scrutiny AI systems as systems intended to autonomously make, or be a controlling factor in making, consequential decisions about access to government services. State agencies and vendors using these systems must conduct assessments covering risks of unlawful harm, system limitations, and information governance practices.',
        },
        {
          term: 'Inventories and data management',
          description:
            'Government Code information-resource reviews now include AI systems and heightened-scrutiny AI systems, including purpose, risk mitigation, strategic-plan support, and confirmation of compliance with AI statutes, rules, and standards. Local governments must review heightened-scrutiny AI use and provide the review to DIR on request.',
        },
        {
          term: 'Public-facing AI notice and complaints',
          description:
            'State agencies using public-facing AI systems must provide clear public disclosure unless a reasonable person would know they are interacting with AI. State agencies and local governments using public-facing AI or AI that is a controlling factor in consequential decisions must use a standardized notice. SB 1964 also directs the AG and DIR to create an AI complaint webpage and public education materials.',
        },
        {
          term: 'Vendor enforcement',
          description:
            'If a public-sector AI vendor violates SB 1964 requirements, the AG and DIR process can lead to notice, cure periods, contract voiding, and possible referral to the comptroller for contracting bars after repeated voided contracts.',
        },
        {
          term: 'HB 2818: DIR artificial intelligence division',
          description:
            'HB 2818 requires DIR to establish an artificial intelligence division to help state agencies and DIR service users implement generative AI for legacy-system modernization and other appropriate projects. The division must prepare cost-analysis reports for completed generative AI projects and may use vendors.',
        },
        {
          term: 'HB 3512: AI awareness training',
          description:
            'HB 3512 requires covered state and local government employees and officials to complete certified AI awareness training annually. DIR, in consultation with the Public Sector AI Systems Advisory Board, must certify at least five AI training programs and publish the list of certified programs.',
        },
      ],
    },
    {
      id: 'privacy-biometrics',
      title: 'Privacy, Biometrics, and Profiling',
      content:
        'Several Texas laws are not AI-only statutes, but they directly affect AI systems that process personal data, biometric identifiers, or profiles used in important decisions.',
      items: [
        {
          term: 'Texas Capture or Use of Biometric Identifier Act',
          description:
            'Business & Commerce Code Chapter 503 regulates commercial capture and use of biometric identifiers such as retina or iris scans, fingerprints, voiceprints, and hand or face geometry. HB 149 amended this law to make clear that finding an image or media containing biometric identifiers on the Internet is not enough to show notice and consent unless the individual made that material public.',
        },
        {
          term: 'Texas Data Privacy and Security Act',
          description:
            'Business & Commerce Code Chapter 541 is not AI-specific, but it matters for AI because it gives consumers rights over personal data and regulates profiling. Controllers must conduct and document data protection assessments for certain processing, including profiling that presents reasonably foreseeable risks such as unfair or deceptive treatment, unlawful disparate impact, financial or reputational injury, physical injury, offensive intrusion, or other substantial injury.',
        },
        {
          term: 'AI and consumer profiling',
          description:
            'AI systems used for credit, insurance, employment-adjacent screening, targeted advertising, eligibility scoring, or other personal-data-driven profiling should be reviewed under TDPSA and any sector law that applies. Texas can regulate those uses through privacy, unfair-practices, discrimination, biometric, and consumer-protection authority even when the system is not marketed as AI.',
        },
      ],
    },
    {
      id: 'synthetic-media',
      title: 'Synthetic Media, Deepfakes, and Child Safety',
      content:
        'Texas has multiple AI-relevant laws that target specific synthetic-media harms. These laws sit alongside TRAIGA and may apply even when the AI system itself is not otherwise regulated.',
      items: [
        {
          term: 'Election deepfakes',
          description:
            'Election Code Section 255.004 makes it an offense to create and distribute a deep fake video within 30 days of an election with intent to injure a candidate or influence the election result. The current statewide election provision is older and narrower than some 2025 proposals because it focuses on deep fake video.',
        },
        {
          term: 'Sexual deepfake media',
          description:
            'Penal Code Section 21.165, amended by SB 441 effective September 1, 2025, covers deep fake media created or altered through software, machine learning, AI, or other technological means. It criminalizes nonconsensual production or electronic distribution of certain sexually explicit deep fake media and certain threats to produce or distribute it.',
        },
        {
          term: 'Civil liability for artificial intimate visual material',
          description:
            'SB 441 also amended Civil Practice and Remedies Code Chapter 98B to add civil liability for certain production, solicitation, disclosure, or promotion of artificial intimate visual material. It includes platform- and AI-tool-related concepts such as nudification applications and social media platforms.',
        },
        {
          term: 'AI-generated child sexual material',
          description:
            'SB 20, effective September 1, 2025, expanded Texas criminal law around visual material appearing to depict children, including material created using an AI application or other computer software, and the use of an actual child image to train an AI model to produce child pornography.',
        },
        {
          term: 'TRAIGA overlap',
          description:
            'TRAIGA separately prohibits developing or distributing AI systems with the sole intent of producing, assisting in producing, or distributing Penal Code Section 43.26 visual material or unlawful deepfake media under Penal Code Section 21.165.',
        },
      ],
    },
    {
      id: 'financial-exploitation',
      title: 'AI-Enabled Fraud and Financial Exploitation',
      content:
        'Texas also regulates AI through fraud and financial-exploitation laws. The clearest example is **SB 2373**, effective September 1, 2025, which targets scams using artificially generated media and phishing communications.',
      items: [
        {
          term: 'Civil cause of action',
          description:
            'Civil Practice and Remedies Code Chapter 100B creates liability for knowing or intentional dissemination of artificially generated media or phishing communications for financial exploitation. A prevailing claimant may recover actual damages, mental anguish damages, defendant profits attributable to the communication, court costs, and reasonable attorney fees.',
        },
        {
          term: 'Civil penalty',
          description:
            'The Attorney General may seek a civil penalty of up to $1,000 per day for knowing or intentional dissemination of artificially generated media or phishing communications for financial exploitation.',
        },
        {
          term: 'Criminal offense',
          description:
            'Penal Code Section 32.56 creates the offense of financial abuse using artificially generated media or phishing. Penalties scale by the value of property taken, appropriated, obtained, retained, or used, from misdemeanor levels to first-degree felony exposure.',
        },
        {
          term: 'Confidential identity',
          description:
            'Chapter 100B also provides a confidential-identity mechanism for a person who is the subject of a civil action involving these communications.',
        },
      ],
    },
    {
      id: 'sector-guidance',
      title: 'Sector Guidance and Professional Rules',
      content:
        'Texas AI regulation also shows up through sector regulators, professional ethics bodies, and local court orders. These sources are not always AI statutes, but they shape how AI is expected to be used in regulated settings.',
      items: [
        {
          term: 'Health care',
          description:
            'TRAIGA requires health care providers to disclose certain AI use in connection with health care services. SB 1964 also lets certain public health care entities satisfy public-sector disclosure requirements through generalized patient-consent language stating that AI may be used in treatment.',
        },
        {
          term: 'Insurance',
          description:
            'Texas has not simply copied the NAIC AI model bulletin as its sole AI insurance regime. TDI Bulletin B-0036-20 remains relevant because it reminds regulated entities, agents, and representatives that they are responsible for the accuracy of data used in rating, underwriting, and claims handling, including third-party data. AI systems in insurance must also be reviewed under Texas insurance, privacy, unfair-discrimination, and consumer-protection rules.',
        },
        {
          term: 'Lawyers',
          description:
            'The Professional Ethics Committee for the State Bar of Texas issued Opinion 705 in February 2025 on lawyers use of generative AI. The opinion applies existing duties such as competence, confidentiality, supervision, communication, and fair billing to AI-assisted legal work.',
        },
        {
          term: 'Courts',
          description:
            'There is not one statewide Texas court rule requiring every filing to disclose AI use. Some local courts have adopted AI filing standing orders requiring disclosure and verification of citations or record references when AI is used. Treat these as local practice requirements, not a statewide rule.',
        },
        {
          term: 'Education and government grants',
          description:
            'School districts and education entities are affected by the public-sector training rules, and some TEA materials reference generative AI compliance in grant contexts. The main statewide AI governance duties still flow through Government Code public-sector AI provisions and DIR training certification.',
        },
      ],
    },
    {
      id: 'not-required',
      title: 'What Texas Does Not Currently Require',
      content:
        'Understanding what Texas has not adopted is as important as tracking what it has adopted. As of this review, Texas has not imposed several requirements that appear in other AI regimes.',
      list: [
        '**No general private-sector AI impact assessment duty.** TRAIGA does not require every private deployer of high-risk AI to complete Colorado-style impact assessments.',
        '**No general private-employer AI notice rule.** TRAIGA does not require all private employers to notify applicants or employees whenever AI supports employment decisions, though other employment, civil-rights, privacy, and sector laws may still apply.',
        '**No TRAIGA private right of action.** The Texas Attorney General enforces TRAIGA; individuals do not sue directly under that statute.',
        '**No frontier-model safety regime.** Texas does not have a California-style law focused on frontier AI developers, catastrophic risk frameworks, or pre-release model safety reporting.',
        '**No universal AI watermarking rule.** Texas targets specific deceptive or harmful synthetic-media use cases rather than imposing a general watermarking obligation for all AI-generated content.',
      ],
    },
    {
      id: 'readiness',
      title: 'Practical Texas Readiness Steps',
      content:
        'A Texas-ready AI governance program should not be built around TRAIGA alone. The more durable approach is to inventory AI uses, map them to Texas-specific risk categories, and maintain evidence that the organization is using reasonable controls.',
      list: [
        '**Inventory AI systems used in or affecting Texas.** Include generative AI tools, automated decisions, recommendation systems, scoring tools, biometric systems, and synthetic-media workflows.',
        '**Flag Texas-specific risk categories.** Mark systems involving health care, government services, biometric identifiers, consumer profiling, children, election content, intimate imagery, financial exploitation, insurance, and public-sector vendors.',
        '**Screen against TRAIGA prohibited-intent categories.** Document that systems are not designed or deployed to incite harm or crime, intentionally discriminate, impair constitutional rights, or generate unlawful child sexual material or deepfakes.',
        '**Use NIST-aligned AI risk management.** TRAIGA and SB 1964 both point toward NIST-style governance. Keep policies, testing, red-team findings, issue remediation, human oversight, and internal reviews documented.',
        '**Review disclosures.** Confirm whether health care, government, public-facing AI, patient consent, or local court disclosure requirements apply.',
        '**Update vendor contracts.** Public-sector vendors should expect SB 1964 requirements. Private-sector customers should still ask vendors for data-use, model-risk, bias, privacy, security, and synthetic-media controls.',
        '**Prepare complaint and incident workflows.** Texas law increasingly creates complaint, cure, remediation, restitution, and enforcement paths. Preserve records that show prompt investigation and correction.',
      ],
    },
    {
      id: 'tracker',
      title: 'Texas AI Regulation Tracker',
      content:
        'This tracker summarizes the main Texas statutes, bills, and guidance sources currently shaping AI governance. It is not an exhaustive list of every bill introduced, and it excludes proposals that did not become law unless they are useful context.',
      table: {
        headers: ['Source', 'Status', 'What It Regulates'],
        rows: [
          [
            'HB 149 / TRAIGA',
            'Effective Jan. 1, 2026',
            'General AI prohibitions, government and health care disclosures, biometric amendments, AG enforcement, sandbox, Texas AI Council.',
          ],
          [
            'SB 1964',
            'Effective Sept. 1, 2025',
            'Public-sector AI code of ethics, NIST-aligned standards, heightened-scrutiny AI assessments, notices, complaints, vendor enforcement.',
          ],
          [
            'HB 2818',
            'Effective Sept. 1, 2025',
            'DIR artificial intelligence division for generative AI projects and cost-analysis reporting.',
          ],
          [
            'HB 3512',
            'Effective Sept. 1, 2025',
            'Certified AI awareness training for covered state and local government employees and officials.',
          ],
          [
            'HB 2060',
            'Effective June 13, 2023',
            'Earlier state-government AI advisory council and agency automated decision system inventory framework.',
          ],
          [
            'Business & Commerce Code Ch. 503',
            'Active; amended by HB 149',
            'Commercial capture and use of biometric identifiers, including AI-relevant face geometry and voiceprints.',
          ],
          [
            'Business & Commerce Code Ch. 541',
            'Active',
            'Texas Data Privacy and Security Act; consumer data rights, profiling opt-outs, and data protection assessments.',
          ],
          [
            'Election Code Sec. 255.004',
            'Active',
            'Election deep fake video offense within 30 days of an election with intent to injure a candidate or influence the result.',
          ],
          [
            'Penal Code Sec. 21.165 / SB 441',
            'Amended effective Sept. 1, 2025',
            'Sexually explicit deep fake media offenses, threats, penalties, restitution, and AI-tool affirmative defenses.',
          ],
          [
            'Civil Practice & Remedies Code Ch. 98B / SB 441',
            'Amended effective Sept. 1, 2025',
            'Civil liability for artificial intimate visual material and related disclosure/promotion conduct.',
          ],
          [
            'SB 20',
            'Effective Sept. 1, 2025',
            'AI-generated or software-generated child sexual visual material and use of child images to train AI models for child pornography.',
          ],
          [
            'SB 2373 / CPRC Ch. 100B / Penal Code Sec. 32.56',
            'Effective Sept. 1, 2025',
            'Financial exploitation and financial abuse using artificially generated media or phishing communications.',
          ],
          [
            'TDI Bulletin B-0036-20',
            'Active guidance',
            'Accuracy responsibility for third-party data used in insurance rating, underwriting, and claims handling.',
          ],
          [
            'State Bar Professional Ethics Opinion 705',
            'Issued Feb. 2025',
            'Ethical use of generative AI by Texas lawyers under existing professional duties.',
          ],
        ],
      },
    },
  ],
  timeline: [
    {
      date: '2019',
      event:
        'Texas enacted the Election Code deep fake video provision for campaign communications near elections.',
    },
    {
      date: 'June 13, 2023',
      event:
        'HB 2060 took effect, creating an early state-government AI advisory council and automated decision system inventory framework.',
    },
    {
      date: 'July 1, 2024',
      event:
        'The Texas Data Privacy and Security Act took effect, adding privacy and profiling duties relevant to AI systems.',
    },
    {
      date: 'February 2025',
      event:
        'The State Bar of Texas Professional Ethics Committee issued Opinion 705 on generative AI use by lawyers.',
    },
    {
      date: 'September 1, 2025',
      event:
        'SB 1964, HB 2818, HB 3512, SB 20, SB 2373, and SB 441 took effect, expanding Texas public-sector, training, synthetic-media, and AI-fraud rules.',
    },
    {
      date: 'January 1, 2026',
      event:
        'TRAIGA took effect, establishing Texas general AI protections, disclosures, enforcement, sandbox, and AI Council framework.',
    },
    {
      date: 'May 18, 2026',
      event:
        'This guide was reviewed against current Texas legislative, statutory, agency, and professional guidance sources.',
    },
  ],
  sources: [
    {
      title: "Texas HB 149 enrolled text - Texas Responsible Artificial Intelligence Governance Act",
      url: "https://capitol.texas.gov/tlodocs/89R/billtext/html/HB00149F.htm",
    },
    {
      title: "Texas HB 149 enrolled bill summary",
      url: "https://capitol.texas.gov/billlookup/BillSummary.aspx?Bill=HB149&LegSess=89R",
    },
    {
      title: "Texas DIR technology legislation tracker",
      url: "https://dir.texas.gov/technology-legislation",
    },
    {
      title: "DIR Artificial Intelligence Advisory Council appointed to study state government AI use",
      url: "https://dir.texas.gov/news/artificial-intelligence-advisory-council-appointed-study-use-ai-state-government",
    },
    {
      title: "Texas SB 1964 enrolled text - public-sector AI governance",
      url: "https://capitol.texas.gov/tlodocs/89R/billtext/html/SB01964F.htm",
    },
    {
      title: "Texas HB 2818 enrolled text - DIR artificial intelligence division",
      url: "https://capitol.texas.gov/tlodocs/89R/billtext/html/HB02818F.htm",
    },
    {
      title: "Texas HB 3512 enrolled text - AI awareness training",
      url: "https://capitol.texas.gov/tlodocs/89R/billtext/html/HB03512F.htm",
    },
    {
      title: "DIR statewide artificial intelligence awareness training",
      url: "https://dir.texas.gov/statewide-artificial-intelligence-ai-awareness-training",
    },
    {
      title: "DIR FY 25-26 criteria for AI awareness training programs",
      url: "https://dir.texas.gov/news/fy-25-26-criteria-ai-awareness-training-programs",
    },
    {
      title: "Texas Business & Commerce Code Chapter 503 - Biometric Identifiers",
      url: "https://statutes.capitol.texas.gov/Docs/BC/htm/BC.503.HTM",
    },
    {
      title: "Texas Business & Commerce Code Chapter 541 - Texas Data Privacy and Security Act",
      url: "https://statutes.capitol.texas.gov/Docs/BC/htm/BC.541.htm",
    },
    {
      title: "Texas Election Code Chapter 255 - deep fake video election provision",
      url: "https://statutes.capitol.texas.gov/Docs/EL/htm/EL.255.htm",
    },
    {
      title: "Texas SB 441 enrolled text - sexually explicit deepfake media and artificial intimate visual material",
      url: "https://capitol.texas.gov/tlodocs/89R/billtext/html/SB00441F.HTM",
    },
    {
      title: "Texas SB 20 enrolled bill summary - AI-generated child sexual material",
      url: "https://capitol.texas.gov/billlookup/BillSummary.aspx?Bill=SB20&LegSess=89R",
    },
    {
      title: "Texas SB 2373 enrolled text - AI-generated financial exploitation and phishing",
      url: "https://capitol.texas.gov/tlodocs/89R/billtext/html/SB02373F.HTM",
    },
    {
      title: "Texas Department of Insurance Bulletin B-0036-20 - third-party data",
      url: "https://content.govdelivery.com/accounts/TXINSUR/bulletins/2a370e1?reqfrom=share",
    },
    {
      title: "State Bar of Texas - ethics opinion on generative AI",
      url: "https://blog.texasbar.com/2025/04/articles/ethics/ethics-opinion-offers-principles-for-lawyers-ethical-use-of-ai/",
    },
  ],
}
