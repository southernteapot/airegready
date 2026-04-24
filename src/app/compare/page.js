'use client'

import { useState } from 'react'
import Link from 'next/link'
import Breadcrumb from '@/components/Breadcrumb'
import Disclaimer from '@/components/Disclaimer'

/* ------------------------------------------------------------------ */
/*  Comparison data — one entry per framework                         */
/* ------------------------------------------------------------------ */

const frameworks = [
  {
    id: 'eu-ai-act',
    name: 'EU AI Act',
    slug: 'eu-ai-act',
    status: 'In Effect',
    statusColor: 'emerald',
    type: 'Binding law (EU Regulation)',
    geographicScope: 'European Union (extraterritorial — applies to any AI system whose output is used in the EU)',
    whoItAppliesTo: 'Providers, deployers, importers, distributors, and authorized representatives of AI systems placed on or used in the EU market',
    riskBased: 'Yes — four-tier classification: Unacceptable (banned), High (strict obligations), Limited (transparency), Minimal (no obligations)',
    keyRequirements: [
      'Prohibited AI practices banned since February 2025 (social scoring, manipulative AI, untargeted facial recognition scraping)',
      'High-risk systems require conformity assessments, risk management, data governance, human oversight, and CE marking',
      'General-purpose AI model providers must publish training data summaries and share documentation with downstream providers',
      'Transparency obligations for chatbots, deepfakes, and emotion recognition systems',
      'Mandatory incident reporting for serious AI-related incidents',
    ],
    penalties:
      'Up to EUR 35 million or 7% of global annual turnover for prohibited practices; EUR 15 million or 3% for other violations; EUR 7.5 million or 1.5% for misleading information. Lower-of calculation for SMEs and startups.',
    effectiveDate:
      'Entered into force August 1, 2024. Phased enforcement: prohibited practices (Feb 2025), GPAI rules (Aug 2025), high-risk systems (Aug 2026), full enforcement (Aug 2027).',
    enforcementBody: 'European AI Office (GPAI models) and national competent authorities in each EU member state',
    bestFor:
      'Any organization placing AI systems on the EU market or whose AI outputs reach EU users. Essential for AI providers, tech companies with European customers, and multinationals.',
  },
  {
    id: 'nist-ai-rmf',
    name: 'NIST AI RMF',
    slug: 'nist-ai-rmf',
    status: 'Framework',
    statusColor: 'blue',
    type: 'Voluntary framework',
    geographicScope: 'United States (increasingly referenced globally)',
    whoItAppliesTo: 'All organizations that design, develop, deploy, or use AI systems — voluntary adoption, but increasingly expected',
    riskBased:
      'Yes — encourages risk-based prioritization through the Map, Measure, and Manage functions. No fixed tiers, but organizations prioritize by potential impact.',
    keyRequirements: [
      'Govern: Establish governance structures, policies, roles, and accountability for AI risk management',
      'Map: Identify and document AI system context, stakeholders, intended use, and potential harms',
      'Measure: Test and evaluate AI systems against trustworthy AI characteristics (fairness, safety, security, transparency, explainability, privacy, validity)',
      'Manage: Prioritize and respond to identified risks, implement mitigations, and monitor effectiveness',
      'Generative AI Profile (AI 600-1) addresses risks specific to large language models and generative systems',
    ],
    penalties:
      'None directly — the framework is voluntary. However, adoption is referenced as an affirmative defense or evidence of reasonable care under Colorado SB 24-205 and other state laws.',
    effectiveDate:
      'Published January 26, 2023. Generative AI Profile (AI 600-1) published July 2024. Continuously updated with community profiles and companion resources.',
    enforcementBody:
      'NIST is a non-regulatory agency (no enforcement power). The framework is referenced by regulators including state attorneys general (Colorado) and federal agencies (OMB).',
    bestFor:
      'U.S.-based organizations seeking a recognized governance baseline. Essential for federal contractors, companies subject to state AI laws, and organizations wanting a defensible AI risk management program.',
  },
  {
    id: 'us-state-laws',
    name: 'U.S. State AI Laws',
    slug: 'us-state-laws',
    status: 'Evolving',
    statusColor: 'amber',
    type: 'Binding laws (state-level statutes and local ordinances)',
    geographicScope: 'United States — varies by state (Colorado, Illinois, Texas, California, NYC, Connecticut, and others)',
    whoItAppliesTo: 'Developers and deployers of AI systems used in consequential decisions, varying by state. Colorado covers both; NYC targets employers using automated hiring tools.',
    riskBased:
      'Partially — most laws focus on "high-risk" or "consequential" decisions (employment, lending, insurance, housing, healthcare, education). Low-risk AI uses generally unaffected.',
    keyRequirements: [
      'Algorithmic impact assessments for high-risk AI (Colorado, Connecticut)',
      'Annual bias audits for automated hiring tools (NYC Local Law 144)',
      'Consumer disclosure when AI is used in decisions affecting individuals (Colorado, Utah, Texas)',
      'Developer-to-deployer documentation requirements (Colorado)',
      'Frontier AI transparency: safety frameworks, catastrophic risk assessments, incident reporting (California SB 53)',
    ],
    penalties:
      'Varies widely. NYC: $500-$1,500 per violation. Illinois BIPA: $1,000-$5,000 per violation (private right of action). California SB 53: up to $1M per violation. Texas TRAIGA: $10,000-$200,000 per violation. Colorado: AG enforcement only.',
    effectiveDate:
      'Varies by state. NYC LL144 in effect since July 2023. Colorado SB 24-205 effective June 30, 2026. California SB 53 and Texas TRAIGA effective January 2026. New laws introduced constantly — 1,208 AI bills across 50 states in 2025.',
    enforcementBody:
      'State attorneys general (Colorado, Texas, California). NYC Department of Consumer and Worker Protection. Illinois: private right of action under BIPA. Federal preemption threat from DOJ AI Litigation Task Force (est. Jan 2026).',
    bestFor:
      'Any organization operating in the U.S. that uses AI for employment, lending, insurance, housing, healthcare, or education decisions. Especially critical for companies operating in multiple states.',
  },
  {
    id: 'federal-policy',
    name: 'Federal Policy',
    slug: 'federal-policy',
    status: 'Active',
    statusColor: 'violet',
    type: 'Executive orders, agency guidance, and existing statutory authority',
    geographicScope: 'United States (federal level)',
    whoItAppliesTo: 'Federal agencies, federal contractors, and any organization subject to FTC, EEOC, FDA, SEC, CFPB, or other federal agency authority',
    riskBased:
      'No unified risk framework at the federal level. Individual agencies apply risk-based approaches within their domains (FDA risk classification, EEOC adverse impact analysis).',
    keyRequirements: [
      'EO 14179 (Jan 23, 2025): Pro-innovation directive ("Removing Barriers to American Leadership in AI"); agencies instructed to remove barriers to AI development. EO 14148 (Jan 20, 2025) separately rescinded the prior EO 14110.',
      'Existing statutory authority: FTC Act (deceptive AI practices), Title VII (AI hiring discrimination), ECOA/FCRA (AI lending), FDA (AI medical devices)',
      'OMB M-25-21: Innovation-focused guidance replacing Biden-era risk management requirements for federal AI use',
      'December 2025 EO: Federal preemption of state AI laws, DOJ AI Litigation Task Force, FCC federal reporting standard',
      'NIST AI RMF remains referenced as a compliance framework across federal guidance',
    ],
    penalties:
      'No standalone AI penalties. Enforcement through existing statutory mechanisms: FTC fines for deceptive practices, EEOC enforcement for employment discrimination, FDA enforcement for non-compliant medical devices, SEC penalties for AI washing.',
    effectiveDate:
      'Ongoing. EO 14148 signed January 20, 2025 (rescinded EO 14110). EO 14179 signed January 23, 2025 (pro-innovation AI policy). December 2025 EO on federal preemption. OMB M-25-21 issued April 2025. Agency enforcement is continuous.',
    enforcementBody:
      'Multiple agencies: FTC, EEOC, FDA, SEC, CFPB, HUD, DOJ. Each enforces existing law within its jurisdiction. DOJ AI Litigation Task Force targets state AI laws.',
    bestFor:
      'Organizations selling to or working with the federal government, companies in regulated industries (healthcare, finance, employment), and any organization tracking the federal vs. state regulatory dynamic.',
  },
  {
    id: 'sector-rules',
    name: 'Sector-Specific Rules',
    slug: 'sector-rules',
    status: 'Cross-Cutting',
    statusColor: 'rose',
    type: 'Existing federal and state statutes applied to AI use cases',
    geographicScope: 'United States (federal and state level, sector-specific)',
    whoItAppliesTo: 'Organizations using AI in healthcare, financial services, employment, insurance, and education. Covers both AI developers and deployers within each regulated sector.',
    riskBased:
      'Implicitly — existing regulations already target high-stakes decisions. Nondiscrimination, consumer protection, and safety laws apply proportional to the risk of the AI use case.',
    keyRequirements: [
      'Healthcare: FDA approval for AI medical devices, HIPAA compliance for AI processing PHI, Section 1557 nondiscrimination',
      'Finance: ECOA/FCRA adverse action explanations for AI credit decisions, OCC model risk management (SR 11-7), CFPB fair lending enforcement',
      'Employment: Title VII adverse impact analysis for AI hiring tools, ADA accommodations, employer liability for vendor AI',
      'Insurance: NAIC model bulletin on AI, unfair discrimination testing, Colorado SB 21-169 insurance AI regulations',
      'Education: FERPA for AI processing student data, COPPA for children under 13, equity monitoring under Title VI',
    ],
    penalties:
      'Varies by statute. FDA: device recalls and injunctions. CFPB: civil penalties and restitution. EEOC: compensatory and punitive damages. Illinois BIPA: $1,000-$5,000 per violation. State insurance regulators: license revocation and fines.',
    effectiveDate:
      'Already in effect — these are existing laws being applied to AI. FDA has authorized over 1,250 AI/ML medical devices. CFPB, EEOC, SEC, and state regulators actively enforcing.',
    enforcementBody:
      'Sector-specific: FDA (healthcare), CFPB/OCC/Federal Reserve (finance), EEOC (employment), state insurance commissioners (insurance), Department of Education (education). State AGs also enforce across sectors.',
    bestFor:
      'Organizations deploying AI in any regulated industry. Healthcare providers, financial institutions, employers, insurers, and educational institutions should prioritize understanding which existing rules already apply to their AI systems.',
  },
  {
    id: 'global',
    name: 'Global AI Governance',
    slug: 'global',
    status: 'Expanding',
    statusColor: 'teal',
    type: 'Mix of binding laws, voluntary frameworks, international treaties, and standards',
    geographicScope: 'Global — EU, China, UK, Canada, Brazil, Japan, South Korea, Singapore, Australia, and international bodies (OECD, Council of Europe, G7, UNESCO)',
    whoItAppliesTo: 'Organizations operating across borders. Specific requirements depend on which jurisdictions an organization operates in or serves.',
    riskBased:
      'Generally yes — risk-based approaches dominate globally (EU AI Act, Brazil PL 2338, South Korea Framework Act). China uses an application-specific model. UK relies on sector regulators.',
    keyRequirements: [
      'Council of Europe Framework Convention on AI (binding treaty, in force Nov 2025): requires AI respect for human rights, risk assessments, transparency',
      'China: Algorithm registration, content labeling, generative AI service rules, cybersecurity law amendments',
      'UK: Sector-led regulation via five cross-sector principles (safety, transparency, fairness, accountability, contestability)',
      'ISO/IEC 42001: Certifiable AI management system standard for demonstrating governance maturity',
      'OECD AI Principles: Endorsed by 45+ countries as baseline governance framework',
    ],
    penalties:
      'Varies dramatically by jurisdiction. EU: up to 7% of global turnover. China: administrative penalties and service suspension. UK: sector-specific regulator penalties. Brazil (proposed): up to 2% of revenue. Many frameworks are voluntary with no direct penalties.',
    effectiveDate:
      'Ongoing and expanding. China has enforced AI regulations since 2022. Council of Europe Convention in force November 2025. South Korea AI Framework Act effective January 2026. Japan AI Promotion Act in effect since September 2025. Brazil legislation pending.',
    enforcementBody:
      'Varies: European AI Office (EU), Cyberspace Administration of China, sector regulators (UK FCA, ICO, CMA, etc.), national competent authorities in each country. No single global enforcement body.',
    bestFor:
      'Multinational organizations and companies with customers or operations outside the U.S. Essential for understanding how regulatory requirements differ across borders and planning cross-jurisdictional compliance strategies.',
  },
]

/* ------------------------------------------------------------------ */
/*  Dimension definitions for the comparison table                    */
/* ------------------------------------------------------------------ */

const dimensions = [
  { key: 'type', label: 'Type' },
  { key: 'geographicScope', label: 'Geographic Scope' },
  { key: 'whoItAppliesTo', label: 'Who It Applies To' },
  { key: 'riskBased', label: 'Risk-Based?' },
  { key: 'keyRequirements', label: 'Key Requirements' },
  { key: 'penalties', label: 'Penalties' },
  { key: 'effectiveDate', label: 'Effective Date / Status' },
  { key: 'enforcementBody', label: 'Enforcement Body' },
  { key: 'bestFor', label: 'Best For' },
]

/* ------------------------------------------------------------------ */
/*  Status badge color map                                            */
/* ------------------------------------------------------------------ */

function getStatusClasses(statusColor) {
  const map = {
    emerald: 'bg-emerald-100 text-emerald-800',
    blue: 'bg-blue-100 text-blue-800',
    amber: 'bg-amber-100 text-amber-800',
    violet: 'bg-violet-100 text-violet-800',
    rose: 'bg-rose-100 text-rose-800',
    teal: 'bg-teal-100 text-teal-800',
  }
  return map[statusColor] || 'bg-accent/10 text-accent'
}

/* ------------------------------------------------------------------ */
/*  Cell renderer — handles arrays (bullet lists) vs. strings         */
/* ------------------------------------------------------------------ */

function CellContent({ value }) {
  if (Array.isArray(value)) {
    return (
      <ul className="list-disc list-outside pl-4 space-y-1.5">
        {value.map((item, i) => (
          <li key={i} className="font-sans text-sm text-primary leading-relaxed">
            {item}
          </li>
        ))}
      </ul>
    )
  }
  return (
    <p className="font-sans text-sm text-primary leading-relaxed">{value}</p>
  )
}

/* ------------------------------------------------------------------ */
/*  Main page component                                               */
/* ------------------------------------------------------------------ */

export default function ComparePage() {
  const [selected, setSelected] = useState(
    () => new Set(frameworks.map((f) => f.id))
  )

  function toggle(id) {
    setSelected((prev) => {
      const next = new Set(prev)
      if (next.has(id)) {
        // Don't allow deselecting all — keep at least one
        if (next.size > 1) next.delete(id)
      } else {
        next.add(id)
      }
      return next
    })
  }

  function selectAll() {
    setSelected(new Set(frameworks.map((f) => f.id)))
  }

  const visible = frameworks.filter((f) => selected.has(f.id))

  return (
    <div className="pt-28 pb-20 px-6">
      <div className="max-w-[1400px] mx-auto">
        <Breadcrumb
          items={[
            { label: 'Home', href: '/' },
            { label: 'Regulations', href: '/regulations' },
            { label: 'Compare' },
          ]}
        />

        {/* ---- Header ---- */}
        <div className="text-center mb-10">
          <div className="font-sans text-xs font-bold uppercase tracking-[0.12em] text-accent mb-3">
            Side-by-Side Analysis
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl font-bold text-primary">
            AI Regulatory Comparison
          </h1>
          <p className="font-sans text-base text-secondary mt-3 max-w-[640px] mx-auto leading-relaxed">
            Compare the six major AI regulatory frameworks across key dimensions.
            Toggle frameworks on or off to focus your comparison.
          </p>
        </div>

        {/* ---- Filter pills ---- */}
        <div className="mb-8">
          <div className="flex flex-wrap items-center justify-center gap-2">
            <button
              onClick={selectAll}
              aria-pressed={selected.size === frameworks.length}
              className={`font-sans text-xs font-semibold px-3.5 py-2 rounded-full border transition-all duration-200 ${
                selected.size === frameworks.length
                  ? 'bg-accent text-accent-text border-accent'
                  : 'bg-surface text-secondary border-border hover:border-accent/50'
              }`}
            >
              All Frameworks
            </button>
            {frameworks.map((f) => (
              <button
                key={f.id}
                onClick={() => toggle(f.id)}
                aria-pressed={selected.has(f.id)}
                className={`font-sans text-xs font-semibold px-3.5 py-2 rounded-full border transition-all duration-200 ${
                  selected.has(f.id)
                    ? 'bg-accent text-accent-text border-accent'
                    : 'bg-surface text-secondary border-border hover:border-accent/50'
                }`}
              >
                {f.name}
              </button>
            ))}
          </div>
        </div>

        {/* ---- Desktop: horizontal scrolling table ---- */}
        <div className="hidden lg:block">
          <div className="overflow-x-auto rounded-xl border border-border bg-surface shadow-sm">
            <table className="w-full border-collapse min-w-[800px]">
              {/* Column headers */}
              <thead>
                <tr>
                  <th className="sticky left-0 z-20 bg-surface border-b border-r border-border p-4 text-left align-bottom min-w-[180px]">
                    <span className="font-sans text-xs font-bold uppercase tracking-[0.1em] text-secondary">
                      Dimension
                    </span>
                  </th>
                  {visible.map((f) => (
                    <th
                      key={f.id}
                      className="border-b border-r border-border last:border-r-0 p-4 text-left align-bottom min-w-[220px]"
                    >
                      <div className="flex flex-col gap-2">
                        <span
                          className={`self-start font-sans text-xs font-bold uppercase tracking-wide px-2 py-0.5 rounded-full ${getStatusClasses(
                            f.statusColor
                          )}`}
                        >
                          {f.status}
                        </span>
                        <Link
                          href={`/regulations/${f.slug}`}
                          className="font-sans text-base font-bold text-primary hover:text-accent transition-colors"
                        >
                          {f.name}
                        </Link>
                        <Link
                          href={`/regulations/${f.slug}`}
                          className="font-sans text-xs text-accent hover:text-accent-dark transition-colors"
                        >
                          View full guide &rarr;
                        </Link>
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>

              {/* Dimension rows */}
              <tbody>
                {dimensions.map((dim, rowIdx) => (
                  <tr
                    key={dim.key}
                    className={rowIdx % 2 === 0 ? 'bg-surface' : 'bg-bg/40'}
                  >
                    <td className="sticky left-0 z-10 border-r border-b border-border p-4 align-top min-w-[180px] bg-inherit">
                      <span className="font-sans text-sm font-semibold text-primary">
                        {dim.label}
                      </span>
                    </td>
                    {visible.map((f) => (
                      <td
                        key={f.id}
                        className="border-r border-b border-border last:border-r-0 p-4 align-top"
                      >
                        <CellContent value={f[dim.key]} />
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {visible.length > 3 && (
            <p className="font-sans text-xs text-secondary mt-2 text-center">
              Scroll horizontally to see all selected frameworks
            </p>
          )}
        </div>

        {/* ---- Mobile: stacked cards ---- */}
        <div className="lg:hidden space-y-6">
          {visible.map((f) => (
            <div
              key={f.id}
              className="bg-surface border border-border rounded-xl overflow-hidden"
            >
              {/* Card header */}
              <div className="p-5 border-b border-border">
                <div className="flex items-start justify-between gap-3 mb-2">
                  <Link
                    href={`/regulations/${f.slug}`}
                    className="font-sans text-lg font-bold text-primary hover:text-accent transition-colors"
                  >
                    {f.name}
                  </Link>
                  <span
                    className={`shrink-0 font-sans text-xs font-bold uppercase tracking-wide px-2 py-0.5 rounded-full ${getStatusClasses(
                      f.statusColor
                    )}`}
                  >
                    {f.status}
                  </span>
                </div>
                <Link
                  href={`/regulations/${f.slug}`}
                  className="font-sans text-xs text-accent hover:text-accent-dark transition-colors"
                >
                  View full guide &rarr;
                </Link>
              </div>

              {/* Card body — dimension rows */}
              <div className="divide-y divide-border">
                {dimensions.map((dim) => (
                  <div key={dim.key} className="p-5">
                    <div className="font-sans text-xs font-bold uppercase tracking-[0.08em] text-accent mb-2">
                      {dim.label}
                    </div>
                    <CellContent value={f[dim.key]} />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* ---- Disclaimer ---- */}
        <div className="max-w-[900px] mx-auto">
          <Disclaimer />
        </div>

        {/* ---- Explore More ---- */}
        <div className="max-w-[900px] mx-auto mt-16">
          <div className="text-center mb-8">
            <div className="font-sans text-xs font-bold uppercase tracking-[0.12em] text-accent mb-3">
              Keep Going
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-primary">
              Explore More
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Link
              href="/assessment"
              className="bg-surface border border-border/70 rounded-2xl p-6 block transition-all duration-300 hover:border-accent/50 hover:shadow-[0_24px_70px_-54px_rgba(11,27,47,0.45)] no-underline text-center shadow-sm"
            >
              <div className="font-sans text-sm font-bold uppercase tracking-wide text-accent mb-2">
                Readiness Assessment
              </div>
              <p className="font-sans text-sm text-secondary leading-relaxed">
                See where you stand on AI readiness and which frameworks
                matter most with our free assessment.
              </p>
            </Link>
            <Link
              href="/glossary"
              className="bg-surface border border-border/70 rounded-2xl p-6 block transition-all duration-300 hover:border-accent/50 hover:shadow-[0_24px_70px_-54px_rgba(11,27,47,0.45)] no-underline text-center shadow-sm"
            >
              <div className="font-sans text-sm font-bold uppercase tracking-wide text-accent mb-2">
                Glossary
              </div>
              <p className="font-sans text-sm text-secondary leading-relaxed">
                Plain-English definitions for AI terms, from
                algorithmic impact assessments to risk tiers.
              </p>
            </Link>
            <Link
              href="/blog"
              className="bg-surface border border-border/70 rounded-2xl p-6 block transition-all duration-300 hover:border-accent/50 hover:shadow-[0_24px_70px_-54px_rgba(11,27,47,0.45)] no-underline text-center shadow-sm"
            >
              <div className="font-sans text-sm font-bold uppercase tracking-wide text-accent mb-2">
                Blog
              </div>
              <p className="font-sans text-sm text-secondary leading-relaxed">
                Practical analysis of AI adoption, governance, and
                regulatory developments you can act on.
              </p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
