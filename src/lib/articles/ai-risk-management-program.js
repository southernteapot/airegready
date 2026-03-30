export const aiRiskManagementProgram = {
  slug: 'ai-risk-management-program',
  title: 'Building an AI Risk Management Program: A Practical Template',
  description:
    'A four-phase roadmap for building an AI risk management program from scratch, mapped to the NIST AI RMF and designed to produce real governance outcomes within four months.',
  category: 'NIST',
  categorySlug: 'nist-ai-rmf',
  date: '2026-02-28',
  displayDate: 'February 28, 2026',
  readTime: '10 min read',
  featured: false,

  sections: [
    {
      title: null,
      content:
        'Most organizations have some AI governance practices. What they don\'t have is a program — a structured, documented, repeatable approach to identifying, measuring, and managing AI risk across the organization.\n\nThe difference matters. Ad hoc practices depend on individual judgment and institutional memory. They break when people leave, when the organization scales, or when a regulator asks to see your documentation. A formal program survives personnel changes, scales with the organization, and gives you something concrete to point to when stakeholders ask "how do you manage AI risk?"\n\nThis article lays out a four-phase approach to building an AI risk management program. It\'s designed to be practical — each phase has specific deliverables and a realistic timeline. The full build takes about four months to stand up, with ongoing management after that.',
    },
    {
      title: 'Phase 1: Governance Foundation (Month 1)',
      content:
        'Nothing else works without governance. This is the phase where you establish who owns AI risk, what your organization\'s posture is, and what rules apply.\n\n**Assign ownership.** Identify a specific person — not a committee — who is accountable for the AI risk management program. In a mid-size company, this is typically a VP-level role in legal, compliance, or technology. In a smaller organization, it might be the CTO or head of product. The title matters less than the authority: this person needs the ability to slow down or stop an AI deployment that doesn\'t meet your risk standards.\n\n**Draft an AI policy.** This is your organization\'s master document for AI governance. It should cover acceptable use of AI tools (both internal and third-party), requirements for AI system development and deployment, data handling standards for AI training and inference, roles and responsibilities, and the escalation path when issues arise. Keep it under ten pages. A policy nobody reads is worse than no policy, because it creates a false sense of compliance.\n\n**Define risk tolerance.** Your organization needs to articulate how much AI risk it\'s willing to accept. This isn\'t a single number — it varies by context. You might accept higher risk for internal productivity tools than for customer-facing decision systems. Document the thresholds and the rationale. When a product team later argues that a particular risk is acceptable, you\'ll have a reference point for that conversation.\n\nThis phase maps directly to the **Govern** function of the NIST AI RMF. The deliverables are: an assigned program owner, a published AI policy, and a documented risk tolerance statement.',
    },
    {
      title: 'Phase 2: Discovery (Months 2-3)',
      content:
        'With governance in place, you need to understand what you\'re governing. Phase 2 is about building a complete picture of your AI landscape.\n\n**AI system inventory.** Catalog every AI system your organization builds, buys, or uses. This includes models you\'ve trained, APIs you call, vendor tools with AI features, and third-party services your employees use (including the shadow AI tools nobody approved). For each system, record its purpose, the data it processes, who it affects, the decisions it informs, and the vendor or team responsible.\n\nDon\'t underestimate this step. Most organizations discover AI systems during the inventory that leadership didn\'t know existed. An HR manager signed up for an AI resume screener. A marketing team is using an AI content generator. A customer support lead integrated a chatbot. All of these need to be in the inventory.\n\n**Risk mapping.** For each system in the inventory, assess the risks. Use the NIST AI RMF risk categories as a starting framework: harmful bias and discrimination, security and resilience failures, lack of explainability, privacy violations, misinformation, and impacts on affected communities. Classify each system\'s risk level based on its use case, the sensitivity of the data it processes, and the consequences of failure.\n\n**Stakeholder identification.** For each high-risk system, identify the affected parties: end users, people subject to AI-driven decisions, data subjects, business owners, and regulatory bodies with jurisdiction. Understanding who is affected by each system shapes how you measure and manage the risks.\n\nThis phase maps to the **Map** function. Deliverables: a complete AI system inventory, a risk map with classifications for each system, and a stakeholder register for high-risk systems.',
    },
    {
      title: 'Phase 3: Measurement (Months 3-4)',
      content:
        'You know what you have and what the risks are. Now you need to measure whether your controls are working.\n\n**Bias testing.** For any AI system that makes decisions about people — hiring, lending, pricing, access to services — run quantitative bias assessments. Test for disparate impact across protected characteristics. The specific metrics depend on context (demographic parity, equalized odds, predictive parity), but you need something measurable and repeatable. Document the methodology, the results, and any remediation steps.\n\n**Performance monitoring.** Establish baselines for each AI system\'s accuracy, reliability, and throughput. Set thresholds for acceptable performance degradation — if a model\'s accuracy drops by more than a defined percentage, that triggers a review. Monitor these metrics continuously, not annually.\n\n**Documentation audit.** Review the technical documentation for each AI system against your policy requirements and applicable regulatory standards. Is the training data documented? Are the model\'s limitations described? Is there a record of validation testing? Gaps in documentation are gaps in your compliance posture.\n\n**Third-party assessments.** For your highest-risk systems, bring in external evaluators. Internal teams have blind spots. An independent bias audit, a security assessment, or a red-teaming exercise adds credibility and catches issues your team is too close to see.\n\nThis phase maps to the **Measure** function. Deliverables: bias test results for people-affecting systems, performance monitoring dashboards, a documentation completeness audit, and third-party assessment reports for high-risk systems.',
    },
    {
      title: 'Phase 4: Management (Ongoing)',
      content:
        'Phase 4 doesn\'t have an end date. This is the operational steady state of your program.\n\n**Incident response.** Publish an AI-specific incident response plan. Define what constitutes an AI incident (biased outputs, data leaks, system failures, regulatory inquiries), who responds, what the timeline is for investigation and remediation, and how affected parties are notified. Run a tabletop exercise at least annually to test the plan.\n\n**Continuous monitoring.** Integrate AI risk metrics into your regular operational monitoring. This means dashboards, alerts, and periodic reviews — not a quarterly spreadsheet. Model drift, performance degradation, data quality issues, and user complaints should all feed into a monitoring system that the program owner reviews regularly.\n\n**Regular reviews.** Conduct formal program reviews on a quarterly basis. Update the AI system inventory (new systems get added, retired systems get removed). Reassess risk classifications as systems evolve and regulations change. Review incident data for patterns. Update policies as needed.\n\n**Regulatory tracking.** The AI regulatory landscape is changing fast. Someone in your organization needs to track new laws, enforcement actions, and guidance documents, and assess their impact on your program. The EU AI Act enforcement timeline alone requires attention through 2027 as different provisions phase in.\n\nThis phase maps to the **Manage** function. Deliverables: a published incident response plan, operational monitoring dashboards, quarterly program review reports, and a regulatory change log.',
    },
    {
      title: 'Templates and Frameworks to Use',
      content:
        'You don\'t need to build everything from scratch. Several resources provide templates and structure you can adapt.\n\n**NIST AI RMF Playbook.** The companion to the AI RMF itself, the Playbook provides suggested actions for each subcategory of the framework. It\'s the most directly useful resource for implementation because it translates abstract principles into concrete activities.\n\n**ISO/IEC 42001.** The international standard for AI management systems provides a certifiable framework for AI governance. It\'s more formal than the NIST AI RMF and designed for organizations that want third-party certification of their AI governance practices. The structure is compatible with other ISO management system standards (like ISO 27001 for information security), which is useful if your organization already holds those certifications.\n\n**Internal templates.** For the AI system inventory, a structured spreadsheet works fine at most scales. Include fields for system name, owner, purpose, data types processed, risk classification, last assessment date, and regulatory applicability. For the risk assessment, a simple scoring matrix (likelihood x impact) gets you started. Refine the methodology as your program matures.',
    },
    {
      title: 'Common Failure Modes',
      content:
        'Having watched programs stall or fail, these are the patterns to avoid.\n\n**Governance without teeth.** A policy that nobody enforces is worse than no policy. If your AI governance program can\'t actually slow down or stop a deployment that doesn\'t meet standards, it\'s theater. The program owner needs real authority, and leadership needs to back them when they use it.\n\n**Inventory gaps.** The most common gap is third-party and shadow AI tools. If your inventory only covers internally developed systems, you\'re missing a significant portion of your risk surface. The second most common gap is embedded AI features — tools you already use that have added AI capabilities through updates.\n\n**One-time assessments.** A risk assessment conducted once and never updated is a compliance artifact, not a risk management tool. AI systems change. Data distributions shift. Regulations evolve. Your assessments need to be living documents with defined update triggers and review cycles.\n\n**Overengineering the program.** A 200-page governance manual for a company with three AI systems is a waste. Scale the program to your organization. Start lean, demonstrate value, and add complexity only when the risk profile justifies it.',
    },
    {
      title: 'Getting Executive Buy-In',
      content:
        'The most common obstacle to standing up an AI risk management program isn\'t technical — it\'s organizational. You need executive support, and executives respond to business arguments, not compliance checklists.\n\nFrame the program around three things they care about. **Revenue risk:** enterprise customers are requiring AI governance as a procurement condition — without a program, you lose deals. **Regulatory risk:** the EU AI Act, Colorado\'s AI Act, and NYC\'s LL144 all impose obligations with real penalties — the program is how you meet them. **Operational risk:** AI failures create reputational damage, legal exposure, and remediation costs — the program reduces the frequency and severity of those events.\n\nCome to the conversation with a scoped proposal. "We need an AI governance program" is vague and expensive-sounding. "We need one person, four months, and a modest budget to stand up a risk management program that covers our twelve AI systems" is concrete and actionable.\n\nShow early wins. After Phase 1, you have a published policy and assigned ownership — that\'s something you can point to in customer questionnaires and investor conversations immediately.',
    },
    {
      title: 'Metrics That Matter',
      content:
        'A program without metrics is a program without accountability. Track these from the start.\n\n**Inventory coverage.** What percentage of your organization\'s AI systems are in the inventory? Start measuring this early and push toward 100%. If you\'re at 60% after the initial inventory, that tells you something important about your visibility gap.\n\n**Assessment completion rate.** Of the AI systems in your inventory, what percentage have a completed risk assessment? What percentage have an assessment that\'s current (updated within the last review cycle)?\n\n**Time to remediation.** When a risk issue is identified — a bias test failure, a performance degradation, a policy violation — how long does it take to resolve? Track this over time. Decreasing remediation time indicates a maturing program.\n\n**Incident frequency and severity.** Track AI-related incidents by type, severity, and affected system. Look for trends. If the same system keeps generating incidents, that\'s a signal the risk classification or controls need to be revisited.\n\n**Regulatory coverage.** Of the regulations applicable to your organization, what percentage are addressed by your current program? This metric helps you identify gaps and prioritize program expansion.\n\nReport these metrics to leadership quarterly. They\'re the evidence that the program is working — or the early warning that it isn\'t.',
    },
  ],

  takeaways: [
    'Ad hoc AI governance practices don\'t scale and can\'t survive scrutiny. A formal program with assigned ownership, documented policies, and measurable outcomes is the baseline.',
    'Build in four phases: governance foundation (Month 1), discovery (Months 2-3), measurement (Months 3-4), and ongoing management. Each phase maps to a NIST AI RMF function.',
    'The most common failure modes are governance without enforcement authority, incomplete inventories that miss third-party tools, and one-time assessments that are never updated.',
    'Frame executive buy-in around revenue risk (lost deals), regulatory risk (penalties), and operational risk (incident costs) — not abstract governance principles.',
    'Track five core metrics from day one: inventory coverage, assessment completion, time to remediation, incident frequency, and regulatory coverage.',
  ],

  sources: [
    {
      title: 'NIST AI Risk Management Framework (AI 100-1)',
      url: 'https://www.nist.gov/artificial-intelligence/ai-risk-management-framework',
    },
    {
      title: 'NIST AI RMF Playbook',
      url: 'https://airc.nist.gov/AI_RMF_Interactivity',
    },
    {
      title: 'ISO/IEC 42001:2023 — AI Management System Standard',
      url: 'https://www.iso.org/standard/81230.html',
    },
    {
      title: 'EU AI Act — Risk Management Requirements (Article 9)',
      url: 'https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32024R1689',
    },
  ],

  relatedArticles: ['nist-ai-rmf-practice', 'ai-compliance-startups'],
  relatedRegulations: ['nist-ai-rmf', 'sector-rules'],
}
