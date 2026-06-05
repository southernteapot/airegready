export const aiVendorDueDiligence = {
  slug: 'ai-vendor-due-diligence',
  title: 'AI Vendor Due Diligence: 10 Questions to Ask Before You Buy',
  description:
    'You\'re liable for the AI tools your vendors provide. Here are the ten questions you should be asking before procurement, why each one matters, and the red flags that should make you walk away.',
  category: 'Governance',
  categorySlug: 'federal-policy',
  date: '2026-03-20',
  displayDate: 'March 20, 2026',
  readTime: '7 min read',
  featured: false,

  sections: [
    {
      title: null,
      content:
        'Buying an AI tool is not like buying a SaaS subscription. When you deploy a vendor\'s AI system, you don\'t outsource the risk — you inherit it. Under the EU AI Act, you\'re a deployer with independent legal obligations. Under Colorado\'s SB 26-189, covered ADMT developers and deployers need documentation, notices, adverse-outcome explanations, data-correction workflows, records, and meaningful human review. Under NYC Local Law 144, you\'re the employer on the hook for bias audits even though you didn\'t build the algorithm.\n\nThe vendor built the system. You chose to use it. Regulators hold you accountable for that choice.\n\nThis means your procurement process needs to change. A vendor\'s sales deck is not due diligence. Here are ten questions you should be asking before you sign — and what the answers tell you.',
    },
    {
      title: '1. What Data Does the Model Train On?',
      content:
        'This is the foundation question. You need to know whether the model was trained on data that could create legal exposure for you. Was it trained on publicly scraped data that might include copyrighted material? Does it use customer data from other clients? Is the training data representative of the populations your system will affect?\n\nIf the vendor can\'t clearly describe their training data provenance, they either don\'t know (bad) or won\'t tell you (worse). Either way, you\'re deploying a system whose inputs you can\'t evaluate.',
    },
    {
      title: '2. Can You Provide Bias Testing Results?',
      content:
        'If the AI system makes or influences decisions about people — hiring, lending, insurance, housing — you need to see quantitative bias testing results. Not a statement that the vendor "values fairness." Actual test results showing performance across demographic groups.\n\nAsk for selection rate analyses, false positive and false negative rates by group, and the methodology used. If the vendor says they\'ve tested for bias but won\'t share the results, treat that as a red flag. NYC Local Law 144 requires annual bias audits for automated employment decision tools, and the responsibility for ensuring the audit happens falls on the employer — meaning you.',
    },
    {
      title: '3. What\'s Your Data Retention and Processing Policy?',
      content:
        'When your employees or customers interact with the vendor\'s AI tool, what happens to that data? Is it stored? For how long? Is it used to improve the model? Can it be accessed by the vendor\'s other customers through the model\'s outputs?\n\nThese aren\'t hypothetical concerns. Under GDPR, you need a lawful basis for every processing activity, and you need a data processing agreement with any third party that processes personal data on your behalf. Under CCPA, you may need to disclose the "sale" or "sharing" of personal information. If your vendor retains interaction data and uses it for model training, you\'ve just expanded your data processing footprint in ways your privacy notices probably don\'t cover.',
    },
    {
      title: '4. Do You Hold SOC 2, ISO 27001, or ISO 42001 Certification?',
      content:
        'SOC 2 and ISO 27001 cover information security controls — they tell you the vendor takes data protection seriously at an organizational level. ISO 42001 is newer and more specific: it\'s the international standard for AI management systems, covering risk management, responsible development, and ongoing monitoring of AI systems.\n\nNone of these certifications guarantee compliance with AI-specific regulations. But they signal organizational maturity. A vendor that has invested in ISO 42001 certification has at least thought systematically about AI governance. A vendor with no third-party certifications of any kind is asking you to take their security and governance practices on faith.',
    },
    {
      title: '5. How Do You Handle Adverse Action Explanations?',
      content:
        'If the AI system contributes to a decision that negatively affects someone — a denied loan, a rejected job application, a declined insurance claim — can the vendor help you explain why? Many regulations require that affected individuals receive a meaningful explanation of automated decisions. GDPR Article 22 provides rights around solely automated decision-making. The Equal Credit Opportunity Act requires specific adverse action notices for credit decisions.\n\nA vendor that can\'t help you generate explanations for individual decisions is handing you a compliance gap. Ask specifically what explanation capabilities the system provides and whether they\'re sufficient for your regulatory obligations.',
    },
    {
      title: '6. What\'s Your Incident Response Process?',
      content:
        'AI systems fail. They produce biased outputs, hallucinate, behave unpredictably on edge cases, and get exploited by adversarial inputs. When that happens, you need to know how the vendor responds.\n\nAsk for their incident response plan. What\'s the notification timeline? Do they have a dedicated security or AI safety team? Have they had incidents before, and how did they handle them? Under the EU AI Act, providers of high-risk systems must report serious incidents to authorities. If your vendor doesn\'t have a documented incident response process, they\'re not prepared for the obligations they already have.',
    },
    {
      title: '7. Can We Audit the System?',
      content:
        'You may need to conduct or commission audits of AI systems you deploy — either because regulations require it or because your own risk management program demands it. Can the vendor accommodate that? Will they give you or your auditors access to model documentation, performance data, and testing results?\n\nSome vendors will offer audit rights in their contract. Others will resist. The vendor\'s willingness to be audited tells you something important about their confidence in their own system and their understanding of the regulatory environment. If a vendor refuses any form of audit access, consider what that implies about what you might find.',
    },
    {
      title: '8. What Jurisdiction\'s Laws Govern the Tool?',
      content:
        'AI tools cross borders easily, but laws don\'t. Where is the vendor incorporated? Where is the data processed and stored? What jurisdiction\'s laws govern the contract? If a dispute arises, where is it resolved?\n\nThis matters more than it used to. The EU AI Act has extraterritorial reach — it applies to providers regardless of where they\'re based if their system is used in the EU. But contractual governing law affects your remedies if something goes wrong. And data localization requirements in certain jurisdictions may affect where the vendor can process your data. Make sure the jurisdictional picture is clear before you sign.',
    },
    {
      title: '9. What Happens to Our Data If We Cancel?',
      content:
        'Vendor lock-in is a business risk. Data lock-in with an AI vendor is a compliance risk. If you terminate the contract, what happens to the data you fed into the system? Is it deleted? Can you export it? Is it already baked into a model that the vendor will continue to use?\n\nGet explicit contractual commitments on data deletion upon termination, including deletion from model training sets if applicable. The right to data portability and deletion isn\'t just good practice — it\'s a legal requirement under several privacy frameworks. And if the relationship ends badly, you don\'t want your proprietary data or your customers\' personal information sitting on a former vendor\'s servers indefinitely.',
    },
    {
      title: '10. Do You Carry AI-Specific Insurance?',
      content:
        'This question often catches vendors off guard, and that\'s informative. The AI insurance market is still developing, but policies covering AI errors and omissions, algorithmic discrimination claims, and AI-related data breaches are increasingly available. A vendor that carries AI-specific insurance has thought about its liability exposure and taken concrete steps to manage it.\n\nA vendor that doesn\'t carry it isn\'t necessarily a bad partner, but you should factor that into your own risk assessment. If the vendor\'s AI system causes you harm and the vendor can\'t cover the damages, the financial exposure lands on you.',
    },
    {
      title: 'Red Flags to Watch For',
      content:
        'Beyond the specific questions, certain vendor behaviors should raise your guard.',
      list: [
        'Vague answers about training data sources or a flat refusal to discuss them.',
        'Claims that bias testing is unnecessary because the system is "objective" or "data-driven." All data reflects the biases of its collection process.',
        'No written documentation of model performance, limitations, or known failure modes.',
        'Resistance to contractual commitments on data processing, deletion, or audit rights. If they won\'t put it in writing, assume they won\'t do it.',
        'Inability to explain how the system reaches its outputs in terms a non-technical person can understand.',
        'Sales pressure to skip or shorten the due diligence process. A vendor that doesn\'t want you to look too closely may have something to hide.',
      ],
    },
    {
      title: 'Get It in the Contract',
      content:
        'Due diligence doesn\'t end with questions and answers. The commitments that matter need to be in the contract. Key provisions to include:\n\n**Representations and warranties** that the system has been tested for bias and complies with applicable laws. General warranties about "compliance with all laws" are insufficient — specify the regulations that apply to your use case.\n\n**Audit rights** allowing you or a third party to assess the system\'s performance, fairness, and compliance at reasonable intervals.\n\n**Data processing terms** that clearly define what data the vendor can access, how it\'s processed, how long it\'s retained, and what happens at termination.\n\n**Incident notification requirements** with specific timelines — not "promptly" but "within 72 hours" or whatever your own regulatory obligations require.\n\n**Indemnification provisions** that cover claims arising from the system\'s outputs, including discrimination claims, privacy violations, and regulatory penalties.\n\nVendor due diligence is not a box-checking exercise. It\'s how you determine whether deploying a vendor\'s AI system is a risk you can actually manage. Ask the hard questions now, or answer harder ones from a regulator later.',
    },
  ],

  takeaways: [
    'When you deploy a vendor\'s AI tool, you inherit compliance obligations as a deployer. Vendor compliance does not replace your own.',
    'Ask for quantitative bias testing results, not assurances. If a vendor won\'t share test results, treat that as a red flag.',
    'Data processing, retention, and deletion terms need to be explicit in the contract. Verbal commitments are worth nothing when a regulator comes calling.',
    'A vendor\'s willingness to submit to audits and provide transparent documentation is a strong signal of their confidence in their own system.',
  ],

  sources: [
    {
      title:
        'EU AI Act — Obligations for Deployers of High-Risk AI Systems (Article 26)',
      url: 'https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32024R1689',
    },
    {
      title: 'ISO/IEC 42001:2023 — AI Management System Standard',
      url: 'https://www.iso.org/standard/81230.html',
    },
    {
      title:
        'NYC Department of Consumer and Worker Protection — Automated Employment Decision Tools (Local Law 144)',
      url: 'https://www.nyc.gov/site/dca/about/automated-employment-decision-tools.page',
    },
    {
      title: 'Colorado SB 26-189 — Automated Decision-Making Technology',
      url: 'https://leg.colorado.gov/bills/sb26-189',
    },
  ],

  relatedArticles: ['shadow-ai-compliance', 'eu-ai-act-risk-classification'],
  relatedRegulations: ['sector-rules', 'eu-ai-act'],
}
