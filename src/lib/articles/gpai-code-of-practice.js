export const gpaiCodeOfPractice = {
  slug: 'gpai-code-of-practice',
  title: 'The GPAI Code of Practice: What AI Model Providers Need to Know',
  description:
    'The EU AI Office published the General-Purpose AI Code of Practice in July 2025. Here\'s what it requires, who it applies to, and what downstream deployers should be asking their model providers right now.',
  category: 'EU AI Act',
  categorySlug: 'eu-ai-act',
  date: '2026-03-22',
  displayDate: 'March 22, 2026',
  readTime: '8 min read',
  featured: false,

  sections: [
    {
      title: null,
      content:
        'The EU AI Act doesn\'t just regulate the companies deploying AI systems. It reaches upstream to the companies building the foundation models those systems run on. And as of July 10, 2025, when the European AI Office published the General-Purpose AI (GPAI) Code of Practice, there\'s a concrete document spelling out what "compliance" looks like for model providers.\n\nIf you build, fine-tune, or distribute general-purpose AI models — or if you build products on top of someone else\'s model — this matters to you. The GPAI rules are already in effect as of August 2025, and enforcement authority kicks in by August 2026. The Code of Practice is the primary mechanism for demonstrating you\'re meeting your obligations.',
    },
    {
      title: 'What the Code of Practice Is',
      content:
        'The GPAI Code of Practice is a voluntary document developed through a multi-stakeholder process coordinated by the European AI Office. It provides detailed guidance on how providers of general-purpose AI models can comply with the transparency and risk management requirements in Articles 53 and 55 of the EU AI Act.\n\nThe key word is "presumption of conformity." If you sign the Code and follow its provisions, you\'re presumed to be in compliance with the corresponding AI Act obligations. That\'s not a guarantee — regulators can still challenge your practices — but it\'s a significant safe harbor. If you don\'t sign, you need to demonstrate compliance through other means, which is harder and less predictable.\n\nThink of it as the GPAI equivalent of what harmonized standards do in EU product safety law: a recognized path to compliance that reduces regulatory uncertainty.',
    },
    {
      title: 'Who It Applies To',
      content:
        'The Code targets **providers of general-purpose AI models** — meaning models that are trained on broad data at scale and can be adapted to a wide range of downstream tasks. This includes foundation model companies like OpenAI, Anthropic, Google DeepMind, Mistral, and Meta\'s AI division, as well as smaller companies and open-source projects that train and distribute capable general-purpose models.\n\nImportantly, the EU AI Act distinguishes between the model provider (the company that trains or substantially modifies the model) and the downstream deployer (the company that integrates the model into an application). The Code of Practice primarily addresses model providers. Downstream deployers have separate obligations, but they\'re directly affected by whether their upstream providers comply — more on that below.',
    },
    {
      title: 'Baseline Obligations for All GPAI Models',
      content:
        'Every provider of a general-purpose AI model placed on the EU market must meet a set of baseline requirements under Article 53. The Code of Practice translates these into specific practices.',
      list: [
        '**Technical documentation.** Providers must maintain detailed documentation covering the model\'s architecture, training methodology, data sources, intended capabilities, known limitations, and evaluation results. This documentation must be sufficient for downstream providers to understand the model and meet their own compliance obligations.',
        '**Training data summaries.** Providers must publish a sufficiently detailed summary of the content used for training, following a template provided by the AI Office. The goal is transparency about data sources without requiring disclosure of proprietary datasets. This is a balancing act, and the template attempts to standardize what "sufficiently detailed" means.',
        '**Copyright compliance.** Providers must have a policy to comply with EU copyright law, particularly the text and data mining provisions in the Digital Single Market Directive. They must also make available a sufficiently detailed summary enabling rights holders to exercise their opt-out rights under Article 4 of that directive.',
        '**Downstream provider information.** When a GPAI model is distributed to other providers (who then integrate it into applications), the model provider must supply enough information for those downstream providers to understand the model\'s capabilities and limitations and to comply with their own AI Act obligations.',
      ],
    },
    {
      title: 'Systemic Risk: The Higher Tier',
      content:
        'The EU AI Act creates a second, more demanding tier for GPAI models that pose **systemic risk**. A model is presumed to have systemic risk if the cumulative amount of compute used for its training exceeds 10^25 floating point operations (FLOPs). The European Commission can also designate models as systemic risk based on other criteria, including the number of registered users and the model\'s capabilities.\n\nTo put the 10^25 FLOPs threshold in context: as of early 2026, this captures the frontier models from the largest labs. GPT-4-class and later models are above this line. Most open-source models currently fall below it, though that threshold will capture more models as training compute continues to scale.\n\nFor systemic risk models, Article 55 adds requirements beyond the baseline, and the Code of Practice details how to meet them.',
      list: [
        '**Model evaluation and adversarial testing.** Providers must conduct and document standardized evaluations and adversarial testing (red-teaming) to identify and mitigate systemic risks. The Code specifies that testing should cover areas like CBRN (chemical, biological, radiological, nuclear) risks, cybersecurity vulnerabilities, and risks of large-scale societal harm.',
        '**Systemic risk assessment.** Providers must assess and mitigate reasonably foreseeable systemic risks, including risks that could arise from the model being widely deployed or misused. This goes beyond individual-user harm to consider aggregate and societal-level effects.',
        '**Incident tracking and reporting.** Providers must track serious incidents involving their models and report them to the AI Office without undue delay. The Code provides guidance on what constitutes a "serious incident" and the expected reporting timeline.',
        '**Cybersecurity protections.** Systemic risk models must have adequate cybersecurity protections, including for model weights. The concern here is that compromised model weights could enable misuse at scale.',
      ],
    },
    {
      title: 'Open-Source Models: Exemptions and Limits',
      content:
        'The EU AI Act provides a partial exemption for open-source GPAI models. If a model\'s parameters are made publicly available and it does not pose systemic risk, the provider is exempt from most baseline obligations — with one important exception: they must still publish a training data summary and comply with copyright requirements.\n\nThe exemption disappears entirely for systemic risk models. If your open-source model exceeds the 10^25 FLOPs threshold or is designated as systemic risk by the Commission, you\'re subject to the full set of obligations regardless of your licensing model. This is worth flagging because several open-source frontier model projects are approaching or will exceed this threshold in the coming years.\n\nAlso note that the open-source exemption applies to the model provider. Downstream deployers who integrate open-source models into high-risk AI systems still have the full set of deployer obligations under the AI Act. Open-source doesn\'t mean obligation-free for the deployment chain.',
    },
    {
      title: 'What Downstream Deployers Should Ask',
      content:
        'If you\'re building applications on top of someone else\'s GPAI model, your compliance posture depends partly on what your model provider gives you. Here\'s what to ask.\n\n**Has your provider signed the Code of Practice?** If yes, that\'s a strong signal they\'re taking GPAI compliance seriously and you can rely on the presumption of conformity for your upstream model. If no, ask how they plan to demonstrate compliance — and document their answer.\n\n**Can you access the technical documentation?** You need to understand the model\'s capabilities, limitations, and intended use cases to conduct your own risk assessments and meet your deployer obligations. If your provider can\'t or won\'t share this, you have a supply chain risk.\n\n**What does the training data summary say?** Review it for potential copyright exposure and data provenance issues that could create downstream liability for your application.\n\n**Is the model classified as systemic risk?** If so, additional obligations apply to the provider, and you should understand what adversarial testing has been done and what systemic risks have been identified.\n\n**What incident reporting mechanisms exist?** If the model has a serious failure, how will you find out? Your own incident response plan should account for upstream model incidents.',
    },
    {
      title: 'Enforcement Timeline',
      content:
        'The GPAI provisions in the EU AI Act became applicable on August 2, 2025 — meaning model providers were expected to comply from that date. The AI Office\'s enforcement powers become fully operational by August 2026, giving a practical 12-month runway before active enforcement begins.\n\nThat said, the AI Office has been clear that it expects compliance now, not in August 2026. The Code of Practice was published specifically to give providers a roadmap. Organizations that wait until enforcement begins to start their compliance work will find themselves scrambling — the technical documentation and testing requirements alone take months to implement properly.\n\nPenalties for GPAI violations can reach 15 million euros or 3% of global annual turnover, whichever is higher. For systemic risk obligations, the figures are even steeper.',
    },
  ],

  takeaways: [
    'The GPAI Code of Practice, published July 2025, creates a presumption of conformity for AI model providers who sign and follow it.',
    'All GPAI model providers must maintain technical documentation, publish training data summaries, comply with copyright rules, and inform downstream providers.',
    'Models exceeding 10^25 FLOPs are presumed systemic risk and face additional requirements: adversarial testing, incident reporting, risk assessment, and cybersecurity protections.',
    'Open-source models get a partial exemption from baseline requirements but no exemption from systemic risk obligations.',
    'Downstream deployers should verify their model providers\' Code of Practice status and request technical documentation to support their own compliance.',
  ],

  sources: [
    {
      title: 'EU AI Office — General-Purpose AI Code of Practice',
      url: 'https://digital-strategy.ec.europa.eu/en/policies/ai-code-practice',
    },
    {
      title: 'EU AI Act — Articles 53-55 (GPAI Provisions)',
      url: 'https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32024R1689',
    },
    {
      title: 'European Commission — General-Purpose AI Models in the AI Act',
      url: 'https://digital-strategy.ec.europa.eu/en/policies/ai-act-gpai',
    },
  ],

  relatedArticles: ['eu-ai-act-risk-classification', 'eu-ai-act-compliance-checklist'],
  relatedRegulations: ['eu-ai-act', 'global'],
}
