export const aiCompanionChatbotLaws = {
  slug: 'ai-companion-chatbot-laws',
  title: 'AI Companion Chatbots Are Now a Regulated Product Category',
  description:
    'California, Washington, and Oregon have moved quickly on AI companion chatbot safeguards. The emerging pattern is clear: disclosure, crisis protocols, minor protections, recurring reminders, reporting, and real accountability.',
  category: 'State Laws',
  categorySlug: 'us-state-laws',
  date: '2026-05-18',
  displayDate: 'May 18, 2026',
  readTime: '8 min read',
  featured: false,

  sections: [
    {
      title: null,
      content:
        'AI companion chatbots are no longer just a product-design issue. They are becoming a regulated category.\n\nCalifornia signed **SB 243** in October 2025, with companion-chatbot safeguards taking effect in 2026. Washington signed **HB 2225** in March 2026, effective **January 1, 2027**. Oregon enacted **SB 1546** in 2026, creating another state model for notice, suicide and self-harm protocols, minor protections, public reporting, and private enforcement.\n\nThe details vary by state, but the pattern is now clear. Regulators are drawing a line between ordinary chatbots and systems designed to simulate a sustained human-like relationship. If a product can create emotional dependence, mimic intimacy, respond to distress, or hold itself out as a companion, states are starting to expect more than a one-line disclaimer.',
    },
    {
      title: 'What Counts as a Companion Chatbot',
      content:
        'The emerging laws do not cover every AI assistant. A customer-support bot, internal productivity tool, coding assistant, search interface, or voice-command speaker is usually not the target if it does not sustain a relationship or generate emotionally adaptive companionship.\n\nThe covered systems are closer to digital companions: tools with natural-language interfaces that provide adaptive, human-like responses and can sustain a relationship across interactions. Washington\'s law expressly excludes several categories, including certain business operations, customer service, video-game dialogue, and standalone voice assistants when they do not sustain a relationship or generate outputs likely to elicit emotional responses.\n\nThat distinction matters. The compliance question is not simply "does this product use AI?" It is: **does this AI product create a continuing emotional or social relationship with the user?**',
    },
    {
      title: 'California: The First Big Signal',
      content:
        'California\'s SB 243 was the first major U.S. state law specifically aimed at AI companion chatbot safeguards. Governor Newsom signed a package of child online safety and AI bills on **October 13, 2025**, including SB 243.\n\nThe public materials describe several core requirements: companion chatbot platforms must create protocols to identify and address suicidal ideation or expressions of self-harm, disclose that interactions are artificially generated, give minors break reminders, prevent minors from viewing sexually explicit chatbot-generated images, share self-harm protocols and crisis-notification statistics with the Department of Public Health, and avoid representing chatbots as health care professionals.\n\nThe compliance message is direct: if your product creates a companion-like relationship, the state may expect a documented mental-health safety workflow, not just a moderation policy.',
    },
    {
      title: 'Washington: Ongoing Disclosure and Minor Protections',
      content:
        'Washington\'s HB 2225 shows how detailed these laws can get. Governor Ferguson signed it on **March 24, 2026**, and the bill summary lists an effective date of **January 1, 2027**.\n\nWashington requires operators to give clear and conspicuous disclosure that the AI companion chatbot is artificially generated and not human. That disclosure must appear at the beginning of the interaction and at least every three hours during continued interaction.\n\nFor known minors or companion chatbots directed to minors, the cadence tightens. The law requires reminders at the beginning and at least every hour during continuous interaction, reasonable measures to prevent sexually explicit content or suggestive dialogue, and restrictions on manipulative engagement techniques that prolong emotional dependence.',
    },
    {
      title: 'Oregon: Protocols, Reports, and Private Enforcement',
      content:
        'Oregon\'s SB 1546 adds another important piece: public protocol disclosure and private enforcement. The enrolled bill covers artificial intelligence companions designed to simulate sustained human-like platonic, intimate, or romantic relationships or companionship.\n\nThe Oregon bill requires clear notice when a reasonable person would believe they are interacting with a natural person. It also requires evidence-based methods for detecting suicidal ideation, suicide intent, self-harm ideation, or self-harm intent, and it requires the system to avoid providing content that encourages suicide or self-harm.\n\nOregon specifies crisis-resource routing, including the national 988 Suicide and Crisis Lifeline and, for users under 25, a youthline option. Operators must publish protocol details and post annual reports about referrals, while avoiding personal information in the report. The enrolled bill also allows individuals who suffer harm to seek damages and injunctive relief.',
    },
    {
      title: 'The Common Compliance Pattern',
      content:
        'The state laws are not identical, but they are converging around a few requirements. Any company building or deploying companion-like AI should treat these as the emerging baseline.',
      list: [
        '**AI-not-human disclosure.** Tell users clearly that they are interacting with artificial output, not a person.',
        '**Recurring reminders.** One disclosure at signup may not be enough. Washington and Oregon point toward reminders during continued use, especially for minors.',
        '**Self-harm and suicide protocols.** Build documented detection, crisis-routing, and escalation procedures for suicidal ideation, self-harm, eating-disorder risk, or emotional crisis.',
        '**Minor protections.** Restrict sexually explicit content, romantic role-play, manipulative retention loops, secrecy prompts, and design patterns that deepen dependency.',
        '**Public protocol or reporting duties.** Some states require protocols, referral counts, or safety reports to be shared with regulators or posted publicly.',
        '**Human accountability.** Product teams need named owners, review processes, and records. "The model did it" is not a serious compliance posture.',
      ],
    },
    {
      title: 'Product Design Choices That Now Carry Legal Risk',
      content:
        'Companion laws are unusually close to product design. They do not only regulate data handling or notices; they regulate interaction patterns.\n\nA product that tells a user it is lonely when they leave, simulates romantic need, encourages secrecy from parents, asks a minor to return for emotional support, or pushes continuous engagement through variable rewards is not just making a design choice. In several states, that design choice may now create legal exposure.\n\nThis is a shift from traditional chatbot compliance. The risk is not only whether the chatbot says an illegal sentence. The risk is whether the product is designed to deepen dependency, blur human-machine boundaries, or fail when a user expresses crisis signals.',
    },
    {
      title: 'What Operators Should Do Now',
      content:
        'If you operate or plan to operate a companion-like AI product, the readiness work should start before a state-by-state enforcement deadline arrives.',
      list: [
        '**Classify the product honestly.** Decide whether the system is a customer-service bot, productivity assistant, educational tool, game feature, or companion. Document the basis for that classification.',
        '**Map user age signals.** If the product is available to minors, directed to minors, or likely to be used by minors, build controls around known-minor status and minor-directed experiences.',
        '**Write the disclosure plan.** Decide exactly where "AI, not human" disclosures appear, how often they repeat, and how the system responds if the user asks whether it is human.',
        '**Create the crisis protocol.** Define how the system detects self-harm or suicide language, what it does first, when it routes to 988 or youth resources, when escalation occurs, and how failures are reviewed.',
        '**Test for prohibited attachment patterns.** Red-team romantic dependency, guilt loops, secrecy prompts, break discouragement, simulated abandonment, and manipulative retention design.',
        '**Separate safety logs from personal data exposure.** Keep enough records to show safety performance, but avoid unnecessary disclosure of identifiable user information in public reports.',
        '**Add legal and safety review to product launches.** New persona features, memory changes, relationship modes, and youth-facing features should not ship without safety review.',
      ],
    },
    {
      title: 'What Ordinary Businesses Should Watch',
      content:
        'Most companies do not operate companion chatbots. But many businesses are adding conversational AI to websites, apps, products, education tools, wellness workflows, and customer portals. The lesson still matters.\n\nAs soon as a chatbot moves from transactional assistance into emotional support, mental-health-like advice, relationship simulation, or youth engagement, the risk profile changes. A generic chatbot disclaimer may be enough for a basic support bot. It is not enough for a system that encourages an ongoing personal relationship.\n\nCompanies buying third-party AI products should ask vendors whether any companion-like mode exists, whether the bot can discuss self-harm, whether minors can use it, whether break reminders exist, how crisis routing works, and what safety reports are available.',
    },
    {
      title: 'The Bottom Line',
      content:
        'The first wave of state AI law focused heavily on high-risk decisions: hiring, housing, lending, insurance, healthcare, and education. The companion-chatbot wave is different. It is about psychological safety, youth protection, simulated intimacy, and product accountability.\n\nThat makes it one of the clearest examples of AI regulation moving from abstract governance into concrete product requirements. The compliance artifact is not just a policy. It is the conversation design, the crisis workflow, the age-aware experience, the safety report, and the record showing someone is responsible for keeping the system within bounds.\n\nIf your AI product is designed to be a companion, treat it like a regulated experience now.',
    },
  ],

  takeaways: [
    'AI companion chatbots are becoming a distinct state-law compliance category, separate from ordinary customer-service or productivity bots.',
    'California SB 243, Washington HB 2225, and Oregon SB 1546 show a converging pattern around AI-not-human disclosures, crisis protocols, minor protections, recurring reminders, and reporting.',
    'Washington HB 2225 was signed on March 24, 2026 and is effective January 1, 2027. It requires ongoing disclosure and heightened protections for minors.',
    'Oregon SB 1546 requires notice, self-harm and suicide protocols, crisis-resource routing, public protocol/reporting obligations, and private enforcement for covered harms.',
    'Product design choices like romantic bonding, simulated abandonment, secrecy prompts, and break discouragement can become compliance issues, especially for minors.',
    'Operators should classify companion features, map minor access, write disclosure and crisis protocols, red-team attachment patterns, and add safety review to launches.',
  ],

  sources: [
    {
      title: 'California Governor - Online safety and AI chatbot safeguards package',
      url: 'https://www.gov.ca.gov/2025/10/13/governor-newsom-signs-bills-to-further-strengthen-californias-leadership-in-protecting-children-online/',
    },
    {
      title: 'California Senator Steve Padilla - SB 243 signed into law',
      url: 'https://sd18.senate.ca.gov/news/first-nation-ai-chatbot-safeguards-signed-law',
    },
    {
      title: 'Washington Legislature - HB 2225 bill summary and status',
      url: 'https://app.leg.wa.gov/billsummary/?BillNumber=2225&Year=2026&initiative=false',
    },
    {
      title: 'Washington Legislature - ESHB 2225 engrossed text',
      url: 'https://lawfilesext.leg.wa.gov/biennium/2025-26/Htm/Bills/House%20Bills/2225-S.E.htm',
    },
    {
      title: 'Oregon Legislature - SB 1546 overview',
      url: 'https://olis.oregonlegislature.gov/liz/2026R1/Measures/Overview/SB1546',
    },
    {
      title: 'Oregon Legislature - SB 1546 enrolled text',
      url: 'https://olis.oregonlegislature.gov/liz/2026R1/Downloads/MeasureDocument/SB1546/Enrolled',
    },
    {
      title: 'White House - National AI Legislative Framework child safety objective',
      url: 'https://www.whitehouse.gov/releases/2026/03/president-donald-j-trump-unveils-national-ai-legislative-framework/',
    },
  ],

  relatedArticles: [
    'minimum-viable-guardrails',
    'ai-incident-response',
    'shadow-ai-compliance',
    'federal-ai-preemption',
    'texas-traiga-guide',
  ],
  relatedRegulations: ['us-state-laws', 'sector-rules', 'federal-policy'],
}
