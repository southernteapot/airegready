import Image from 'next/image'
import Link from 'next/link'
import HomeV3Newsletter from './HomeV3Newsletter'
import { buildPageMetadata } from '@/lib/seo'

export const metadata = {
  ...buildPageMetadata({
    title: 'AI Governance Resource Library - AIRegReady',
    description:
      'Practical AI governance kits, templates, checklists, trackers, and jurisdiction guides for internal readiness work.',
    path: '/preview/home-v3',
  }),
  robots: {
    index: false,
    follow: false,
  },
}

const homeV3RouteStyles = `
  body:has(#home-v3-root) nav[aria-label="Main navigation"] {
    background: rgba(7, 17, 31, 0.94) !important;
    border-color: rgba(148, 163, 184, 0.18) !important;
    box-shadow: 0 18px 60px -46px rgba(0, 0, 0, 0.9);
  }

  body:has(#home-v3-root) nav[aria-label="Main navigation"] .text-primary {
    color: #ffffff !important;
  }

  body:has(#home-v3-root) nav[aria-label="Main navigation"] .text-accent {
    color: #d8b985 !important;
  }

  body:has(#home-v3-root) nav[aria-label="Main navigation"] a.text-secondary,
  body:has(#home-v3-root) nav[aria-label="Main navigation"] button[data-theme-toggle],
  body:has(#home-v3-root) nav[aria-label="Main navigation"] summary {
    color: #adc4de !important;
  }

  body:has(#home-v3-root) nav[aria-label="Main navigation"] a.text-secondary:hover,
  body:has(#home-v3-root) nav[aria-label="Main navigation"] button[data-theme-toggle]:hover,
  body:has(#home-v3-root) nav[aria-label="Main navigation"] summary:hover {
    color: #9be1dc !important;
  }

  body:has(#home-v3-root) nav[aria-label="Main navigation"] #mobile-nav {
    background: rgba(7, 17, 31, 0.97) !important;
    border-color: rgba(148, 163, 184, 0.22) !important;
  }
`

const stripCategories = [
  ['Policy kits', 'Internal rules for approved tools, sensitive data, human review, and staff expectations.'],
  ['Risk tools', 'Intake forms, impact worksheets, registers, and tiering prompts for AI use cases.'],
  ['Vendor review packets', 'Questionnaires and scoring guides for checking AI tools before adoption.'],
  ['Training materials', 'Staff-ready outlines, quizzes, attestations, and quick-reference cards.'],
  ['Jurisdiction guides', 'Plain-English trackers for AI laws, frameworks, and policy changes.'],
]

const productCards = [
  {
    title: 'AI Governance Starter Kit',
    audience: 'Founders, operators, and small teams starting from scattered AI use.',
    inside: ['AI use inventory', 'acceptable use policy', 'risk intake form', 'update tracker'],
    helps: 'Creates a first governance file that explains what AI is used, who owns it, and what review steps exist.',
    cta: 'Preview kit',
  },
  {
    title: 'Acceptable Use Policy Kit',
    audience: 'Teams that need clear internal rules before staff use expands further.',
    inside: ['policy template', 'one-page summary', 'employee acknowledgment', 'GenAI appendix'],
    helps: 'Sets practical guardrails for tools, data, output review, confidentiality, and escalation.',
    cta: 'View contents',
  },
  {
    title: 'AI Risk Assessment Toolkit',
    audience: 'Organizations reviewing higher-impact AI use cases or customer-facing workflows.',
    inside: ['impact assessment', 'tiering decision tree', 'risk register', 'review notes'],
    helps: 'Turns risk conversations into structured records that can be revisited as systems change.',
    cta: 'Preview kit',
  },
  {
    title: 'Vendor AI Review Packet',
    audience: 'Buyers, school leaders, consultants, and operations teams choosing AI tools.',
    inside: ['vendor questionnaire', 'scoring guide', 'procurement checklist', 'red flag list'],
    helps: 'Documents privacy, training data, retention, security, oversight, and contract questions.',
    cta: 'View contents',
  },
  {
    title: 'AI Incident Response Plan',
    audience: 'Teams that need a response path for harmful outputs, leaks, or AI system failures.',
    inside: ['response plan', 'severity matrix', 'notification worksheet', 'post-incident review'],
    helps: 'Defines who responds, what gets recorded, and how lessons feed back into governance.',
    cta: 'Coming soon',
  },
  {
    title: 'AI Training Program Kit',
    audience: 'Schools, nonprofits, startups, and businesses training staff on responsible AI use.',
    inside: ['training outline', 'facilitator guide', 'quiz', 'attestation', 'role cards'],
    helps: 'Creates a lightweight training record and gives staff plain-English operating rules.',
    cta: 'Preview kit',
  },
  {
    title: 'Jurisdiction Guide Library',
    audience: 'Teams tracking multiple AI rules without hiring a full policy staff.',
    inside: ['topic briefs', 'readiness checklists', 'change logs', 'counsel review prompts'],
    helps: 'Organizes tracked topics into practical next steps without claiming legal conclusions.',
    cta: 'View library',
  },
  {
    title: 'EU AI Act Readiness Kit',
    audience: 'Organizations that need to triage EU-facing AI systems and documentation gaps.',
    inside: ['classification worksheet', 'high-risk checklist', 'evidence tracker', 'GDPR crosswalk'],
    helps: 'Frames internal preparation questions for teams that may need qualified legal review.',
    cta: 'Preview kit',
  },
  {
    title: 'Colorado AI Act Readiness Kit',
    audience: 'U.S. teams watching state AI rules for consequential decision use cases.',
    inside: ['overview', 'readiness checklist', 'impact assessment template', 'update tracker'],
    helps: 'Helps teams organize questions, records, and review habits around a tracked state topic.',
    cta: 'View contents',
  },
  {
    title: 'School and Organization AI Kit',
    audience: 'Schools, nonprofits, associations, and mission-driven operations teams.',
    inside: ['staff policy', 'student data guardrails', 'vendor review', 'training checklist'],
    helps: 'Creates practical rules for staff AI use, sensitive data, vendor adoption, and review.',
    cta: 'Coming soon',
  },
  {
    title: 'Founder AI Governance Track',
    audience: 'Solo founders, startups, and small companies that need credible basics.',
    inside: ['minimum guardrails', 'SaaS AI checklist', 'customer FAQ', 'board update template'],
    helps: 'Builds a lightweight process for product, sales, vendor, and customer questions.',
    cta: 'Preview track',
  },
  {
    title: 'Consultant Client Delivery Pack',
    audience: 'Consultants who need educational deliverables and structured client workshops.',
    inside: ['client intake', 'workshop agenda', 'policy starter', 'resource handoff checklist'],
    helps: 'Supports repeatable client delivery while leaving legal advice to qualified counsel.',
    cta: 'Coming soon',
  },
]

const starterContents = [
  'AI use inventory',
  'Acceptable use policy',
  'Risk intake form',
  'Vendor review checklist',
  'Training outline',
  'Incident response worksheet',
  'Governance meeting agenda',
  'Update tracker',
]

const whyItems = [
  ['Employee AI use is already happening', 'Teams need clear rules for tools, data, review, confidentiality, and when to escalate questions.'],
  ['Vendors bring new risk questions', 'Procurement and operations teams need a repeatable way to review AI features before sensitive data is involved.'],
  ['Leadership wants evidence of control', 'Boards, funders, clients, and school leaders increasingly ask how AI use is documented and governed.'],
  ['Rules and expectations keep shifting', 'AI laws, frameworks, school policies, workplace guidance, and sector expectations are moving faster than most small teams can track.'],
]

const assessmentRows = [
  ['Policy readiness', '72%', 'w-[72%]', 'Good baseline'],
  ['Vendor controls', '48%', 'w-[48%]', 'Needs review'],
  ['Training', '62%', 'w-[62%]', 'In progress'],
  ['Risk review', '40%', 'w-[40%]', 'Patchy'],
  ['Incident planning', '28%', 'w-[28%]', 'Missing'],
  ['Regulatory tracking', '56%', 'w-[56%]', 'Informal'],
]

const trackedTopics = [
  'EU AI Act',
  'Colorado AI Act',
  'State AI legislation',
  'Federal AI policy',
  'NIST AI RMF',
  'Sector guidance',
  'School and workplace AI policies',
]

const heroProofCards = [
  {
    icon: 'documents',
    title: 'Editable resource kits',
    body: 'Policies, worksheets, checklists, meeting agendas, training outlines, and update logs.',
  },
  {
    icon: 'workflow',
    title: 'Governance workflow',
    body: 'Inventory AI use, assess risk, review vendors, train staff, and record internal decisions.',
  },
  {
    icon: 'boundary',
    title: 'Educational boundary',
    body: 'Plain-English starting points for internal governance work, not legal advice or compliance guarantees.',
  },
]

const heroWorkspaceItems = [
  {
    title: 'AI Governance Starter Kit',
    body: 'Policy, inventory, risk intake',
    status: 'Ready to adapt',
    href: '#starter-kit',
  },
  {
    title: 'Vendor AI Review Packet',
    body: 'Questionnaire and scoring guide',
    status: 'Review packet',
    href: '#product-categories',
  },
  {
    title: 'Regulation Update Tracker',
    body: 'EU, Colorado, states, NIST',
    status: 'Tracked updates',
    href: '#tracker-heading',
  },
]

const audiences = [
  ['Founders and startups', 'Create a lightweight AI governance file for product, vendor, customer, and investor questions.'],
  ['Small businesses', 'Document AI tools, set staff rules, review vendors, and keep a practical update log.'],
  ['Schools and nonprofits', 'Prepare staff guidance, student or beneficiary data guardrails, and training records.'],
  ['Consultants', 'Use structured educational materials for client discovery, workshops, and handoff resources.'],
  ['Regulated organizations', 'Organize internal records for sensitive data, vendors, higher-impact workflows, and leadership review.'],
  ['Internal operations teams', 'Turn AI usage questions into policies, checklists, owners, and repeatable review routines.'],
]

function PrimaryLink({ href, children }) {
  return (
    <Link
      href={href}
      className="inline-flex min-h-11 items-center justify-center rounded-lg bg-[#0F5E9C] px-4 py-3 font-sans text-[13px] font-bold text-white no-underline shadow-[0_14px_30px_-22px_rgba(15,94,156,0.95)] transition hover:bg-[#0B4A7D] sm:text-sm"
    >
      {children}
    </Link>
  )
}

function SecondaryLink({ href, children }) {
  return (
    <Link
      href={href}
      className="inline-flex min-h-11 items-center justify-center rounded-lg border border-[#B8C7D8] bg-[#F8FAFD] px-5 py-3 font-sans text-sm font-bold text-[#0B1B2F] no-underline transition hover:border-[#2F80C2] hover:bg-white"
    >
      {children}
    </Link>
  )
}

function HeroSecondaryLink({ href, children }) {
  return (
    <Link
      href={href}
      className="inline-flex min-h-11 items-center justify-center rounded-lg border border-white/[0.22] bg-white/[0.08] px-4 py-3 font-sans text-[13px] font-bold text-white no-underline shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] backdrop-blur-md transition hover:border-cyan-200/60 hover:bg-white/[0.13] sm:text-sm"
    >
      {children}
    </Link>
  )
}

function SectionHeader({ eyebrow, title, body, id, compact = false }) {
  return (
    <div className={compact ? 'max-w-[760px]' : 'mx-auto max-w-[820px] text-center'}>
      <p className="font-sans text-xs font-black uppercase tracking-[0.16em] text-[#0F6B8F] dark:text-cyan-300">
        {eyebrow}
      </p>
      <h2 id={id} className="mt-3 font-sans text-3xl font-black leading-tight tracking-tight text-[#0B1B2F] sm:text-4xl dark:text-white">
        {title}
      </h2>
      {body && (
        <p className="mt-4 font-sans text-base leading-relaxed text-[#52677F] dark:text-slate-300">
          {body}
        </p>
      )}
    </div>
  )
}

function FeatureIcon({ type }) {
  const common = {
    className: 'h-5 w-5',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: '2',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    'aria-hidden': 'true',
  }

  if (type === 'workflow') {
    return (
      <svg {...common}>
        <path d="M7 7h10v4H7z" />
        <path d="M12 11v3" />
        <path d="M5 14h6v4H5z" />
        <path d="M13 14h6v4h-6z" />
      </svg>
    )
  }

  if (type === 'boundary') {
    return (
      <svg {...common}>
        <path d="M12 3l7 3v5c0 5-3 8-7 10-4-2-7-5-7-10V6z" />
        <path d="M9 12l2 2 4-5" />
      </svg>
    )
  }

  return (
    <svg {...common}>
      <path d="M7 3h7l3 3v15H7z" />
      <path d="M14 3v4h4" />
      <path d="M9 12h6" />
      <path d="M9 16h4" />
    </svg>
  )
}

function MiniCheck({ children }) {
  return (
    <li className="flex gap-2.5 font-sans text-sm leading-relaxed text-[#40546C] dark:text-slate-300">
      <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-[#2CA6A4]" aria-hidden="true" />
      <span>{children}</span>
    </li>
  )
}

function getProductKind(title) {
  if (title.includes('Library')) return 'Library'
  if (title.includes('Packet')) return 'Packet'
  if (title.includes('Track')) return 'Track'
  if (title.includes('Pack')) return 'Pack'
  if (title.includes('Plan')) return 'Plan'
  if (title.includes('Program')) return 'Program'
  return 'Kit'
}

export default function HomeV3Page() {
  return (
    <>
    <style dangerouslySetInnerHTML={{ __html: homeV3RouteStyles }} />
    <div id="home-v3-root" className="overflow-x-hidden bg-[#F3F6FA] text-[#0B1B2F] dark:bg-[#09111D] dark:text-white">
      <section className="relative overflow-hidden border-b border-[#1E3147] bg-[#07111F] px-4 pb-10 pt-24 text-white sm:px-6" aria-labelledby="home-v3-hero-heading">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_16%_18%,rgba(44,166,164,0.16),transparent_32%),radial-gradient(circle_at_82%_12%,rgba(47,128,194,0.18),transparent_30%)]" aria-hidden="true" />
        <div className="relative mx-auto max-w-[1320px]">
          <div className="mb-4 flex min-w-0 flex-col gap-3 rounded-2xl border border-cyan-200/[0.14] bg-[#060D19]/88 px-4 py-3 shadow-[0_24px_80px_-62px_rgba(0,0,0,0.9)] lg:flex-row lg:items-center lg:justify-between">
            <div className="flex min-w-0 flex-col gap-1 sm:flex-row sm:items-center sm:gap-3">
              <span className="rounded-full bg-[#123253] px-3 py-1 font-sans text-xs font-black uppercase tracking-[0.12em] text-cyan-100">
                Resource library
              </span>
              <span className="min-w-0 max-w-full break-words font-sans text-sm font-semibold leading-snug text-[#D8E6F5]">
                AI regulation is changing fast. Build practical governance records before questions arrive.
              </span>
            </div>
            <div className="grid grid-cols-1 gap-2 min-[360px]:grid-cols-2 lg:flex lg:flex-wrap">
              <Link href="#product-categories" className="rounded-lg px-3 py-2 text-center font-sans text-sm font-bold text-cyan-200 no-underline hover:bg-white/[0.08]">
                Browse catalog
              </Link>
              <Link href="/assessment" className="rounded-lg bg-[#123253] px-4 py-2 text-center font-sans text-sm font-bold text-white no-underline hover:bg-[#19436D]">
                Run assessment
              </Link>
            </div>
          </div>

          <div className="grid min-w-0 grid-cols-1 gap-5 lg:grid-cols-[0.92fr_1.08fr]">
            <div className="min-w-0 rounded-2xl border border-white/[0.12] bg-[#050B16]/88 p-6 shadow-[0_34px_90px_-70px_rgba(0,0,0,0.9)] sm:p-8">
              <p className="font-sans text-xs font-black uppercase tracking-[0.16em] text-cyan-200">
                Document kits for real governance work
              </p>
              <h1 id="home-v3-hero-heading" className="mt-4 max-w-[650px] break-words font-sans text-[32px] font-extrabold leading-[1.09] tracking-tight text-white sm:text-[44px] lg:text-[50px]">
                AI governance documents your team can actually use.
              </h1>
              <p className="mt-5 max-w-[680px] font-sans text-base leading-relaxed text-[#D8E6F5] sm:text-lg">
                AIRegReady is a practical resource library for plain-English
                templates, checklists, playbooks, trackers, and jurisdiction
                guides that help teams prepare internal AI governance
                documentation. Educational resources only, not legal advice.
              </p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-nowrap">
                <PrimaryLink href="#product-categories">Browse governance kits</PrimaryLink>
                <HeroSecondaryLink href="/assessment">Take the free readiness assessment</HeroSecondaryLink>
              </div>
              <div className="mt-6 grid grid-cols-1 gap-3 border-t border-white/[0.12] pt-5 sm:grid-cols-3">
                {heroProofCards.map((card) => (
                  <div key={card.title} className="rounded-xl border border-white/[0.12] bg-white/[0.07] p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]">
                    <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-lg border border-cyan-200/[0.18] bg-cyan-200/[0.1] text-cyan-100">
                      <FeatureIcon type={card.icon} />
                    </div>
                    <div className="font-sans text-sm font-black leading-tight text-white">{card.title}</div>
                    <div className="mt-2 font-sans text-xs font-semibold leading-relaxed text-[#ADC4DE]">{card.body}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative min-w-0 overflow-hidden rounded-2xl border border-cyan-200/[0.14] bg-[#050B16] p-3 shadow-[0_36px_96px_-68px_rgba(0,0,0,0.9)]">
              <div className="mb-3 flex flex-col gap-3 rounded-xl border border-white/[0.12] bg-[#0B1626] p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="font-sans text-xs font-black uppercase tracking-[0.14em] text-[#9BE1DC]">
                    Governance workspace
                  </p>
                  <h2 className="mt-1 font-sans text-lg font-black leading-tight text-white">
                    Kits, review packets, scorecards, and update trackers in one working view.
                  </h2>
                </div>
                <span className="w-fit rounded-full bg-[#FFF1CC] px-3 py-1.5 font-sans text-xs font-black text-[#8A5A00]">
                  Educational resources
                </span>
              </div>
              <div className="relative overflow-hidden rounded-xl border border-white/[0.1] bg-[#091321] p-2 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]">
                <div className="pointer-events-none absolute left-5 top-5 z-10 rounded-xl border border-white/[0.16] bg-[#06101F]/86 px-4 py-3 shadow-[0_18px_48px_-32px_rgba(0,0,0,0.9)] backdrop-blur-md">
                  <p className="font-sans text-[11px] font-black uppercase tracking-[0.12em] text-cyan-100">
                    AIRegReady workspace
                  </p>
                  <p className="mt-1 font-sans text-xs font-bold text-[#D8E6F5]">
                    Kits, checklists, trackers, guides
                  </p>
                </div>
                <Image
                  src="/assets/airegready-home-v3-hero-workspace.png"
                  width="1586"
                  height="992"
                  alt="Photorealistic AI governance workspace with binders, checklists, risk review materials, vendor forms, jurisdiction folders, and a laptop dashboard."
                  className="aspect-[16/9] h-auto w-full max-w-full rounded-lg object-cover saturate-[0.92]"
                  priority
                />
                <div className="absolute inset-2 rounded-lg bg-gradient-to-t from-[#050B16]/88 via-[#050B16]/8 to-[#050B16]/8" aria-hidden="true" />
                <div className="absolute bottom-5 left-5 right-5 grid grid-cols-2 gap-2 sm:grid-cols-4">
                  {['Document kits', 'Vendor review', 'Risk scorecards', 'Jurisdiction guides'].map((label) => (
                    <div key={label} className="rounded-lg border border-white/[0.24] bg-white/[0.94] px-3 py-2 text-center font-sans text-[11px] font-black uppercase tracking-[0.08em] text-[#06101F] shadow-[0_14px_34px_-24px_rgba(0,0,0,0.9)] backdrop-blur-md transition">
                      {label}
                    </div>
                  ))}
                </div>
              </div>
              <div className="grid gap-3 pt-3 lg:grid-cols-[0.95fr_1.05fr]">
                <div className="rounded-xl border border-white/[0.1] bg-white/[0.06] p-4">
                  <p className="font-sans text-xs font-black uppercase tracking-[0.14em] text-[#9BE1DC]">
                    Governance file
                  </p>
                  <h2 className="mt-2 font-sans text-xl font-black leading-tight text-white">
                    Build a working record before questions arrive.
                  </h2>
                  <p className="mt-3 font-sans text-sm leading-relaxed text-[#ADC4DE]">
                    Inventory AI use, assign owners, document review steps, and
                    keep update notes with the kit that fits the team.
                  </p>
                  <div className="mt-4 grid gap-2">
                    {['AI use inventory', 'Owner and review path', 'Change log'].map((item) => (
                      <div key={item} className="rounded-lg border border-white/[0.1] bg-[#0B1626] px-3 py-2 font-sans text-xs font-bold text-[#D8E6F5]">
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="grid gap-2">
                  {heroWorkspaceItems.map((item) => (
                    <Link key={item.title} href={item.href} className="group grid grid-cols-[1fr_auto] gap-4 rounded-xl border border-white/[0.12] bg-[#0B1626] p-4 no-underline shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] transition hover:border-cyan-200/40 hover:bg-[#0E1C30]">
                      <div>
                        <h2 className="font-sans text-sm font-black leading-tight text-white">{item.title}</h2>
                        <p className="mt-1 font-sans text-xs font-semibold leading-relaxed text-[#ADC4DE]">{item.body}</p>
                      </div>
                      <span className={`self-start rounded-full px-2.5 py-1 font-sans text-[10px] font-black uppercase tracking-[0.08em] ${
                        item.status === 'Tracked updates'
                          ? 'bg-[#FFF1CC] text-[#8A5A00]'
                          : item.status === 'Review packet'
                            ? 'bg-[#DCEBFF] text-[#0F5E9C]'
                            : 'bg-[#DDF7F1] text-[#137A72]'
                      }`}>
                        {item.status}
                      </span>
                      <span className="col-span-2 -mt-1 font-sans text-xs font-black text-cyan-200 opacity-0 transition group-hover:opacity-100">
                        View resource <span aria-hidden="true">-&gt;</span>
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="mt-5 grid grid-cols-1 gap-3 md:grid-cols-5">
            {stripCategories.map(([title, body]) => (
              <article key={title} className="rounded-2xl border border-white/[0.12] bg-[#050B16]/86 p-4 shadow-sm">
                <h2 className="font-sans text-sm font-black text-white">{title}</h2>
                <p className="mt-2 font-sans text-xs font-semibold leading-relaxed text-[#ADC4DE]">{body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="product-categories" className="px-4 py-16 sm:px-6 sm:py-20" aria-labelledby="product-categories-heading">
        <div className="mx-auto max-w-[1320px]">
          <SectionHeader
            id="product-categories-heading"
            eyebrow="Governance kit catalog"
            title="A product library built around the files teams actually need."
            body="Browse educational resource previews for policies, risk reviews, vendor reviews, training records, incident planning, and jurisdiction tracking. Each resource is framed for internal governance work, not as a compliance guarantee or substitute for qualified counsel."
          />
          <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
            {productCards.map((product) => (
              <article key={product.title} className="group flex min-h-[360px] flex-col rounded-2xl border border-[#C9D7E6] bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-[#2F80C2] hover:shadow-[0_24px_70px_-52px_rgba(11,27,47,0.75)] dark:border-slate-800 dark:bg-slate-950">
                <div className="mb-4 flex items-start justify-between gap-4">
                  <h3 className="font-sans text-xl font-black leading-tight text-[#0B1B2F] dark:text-white">{product.title}</h3>
                  <span className="rounded-full border border-[#D6E2EF] bg-[#F8FAFD] px-2.5 py-1 font-sans text-[11px] font-black uppercase tracking-wide text-[#0F6B8F] dark:border-slate-700 dark:bg-slate-900 dark:text-cyan-300">
                    {getProductKind(product.title)}
                  </span>
                </div>
                <div className="space-y-4">
                  <div>
                    <p className="font-sans text-[11px] font-black uppercase tracking-[0.14em] text-[#7B8DA3]">Who it is for</p>
                    <p className="mt-1 font-sans text-sm leading-relaxed text-[#40546C] dark:text-slate-300">{product.audience}</p>
                  </div>
                  <div>
                    <p className="font-sans text-[11px] font-black uppercase tracking-[0.14em] text-[#7B8DA3]">What is inside</p>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {product.inside.map((item) => (
                        <span key={item} className="rounded-full bg-[#EAF4FF] px-2.5 py-1 font-sans text-xs font-bold text-[#2368A0] dark:bg-slate-900 dark:text-cyan-200">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <p className="font-sans text-[11px] font-black uppercase tracking-[0.14em] text-[#7B8DA3]">Why it helps</p>
                    <p className="mt-1 font-sans text-sm leading-relaxed text-[#40546C] dark:text-slate-300">{product.helps}</p>
                  </div>
                </div>
                {product.cta === 'Coming soon' ? (
                  <span className="mt-auto pt-5 font-sans text-sm font-black text-[#8A5A00] dark:text-amber-200">
                    Coming soon
                  </span>
                ) : (
                  <Link href="#starter-kit" className="mt-auto pt-5 font-sans text-sm font-black text-[#0F5E9C] no-underline transition group-hover:text-[#0B4A7D] dark:text-cyan-300">
                    {product.cta} <span aria-hidden="true">-&gt;</span>
                  </Link>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="starter-kit" className="bg-[#0B1B2F] px-4 py-16 text-white sm:px-6 sm:py-20" aria-labelledby="starter-kit-heading">
        <div className="mx-auto grid max-w-[1320px] grid-cols-1 gap-6 lg:grid-cols-[0.88fr_1.12fr]">
          <div className="rounded-2xl border border-white/[0.14] bg-white/[0.06] p-6 sm:p-8">
            <p className="font-sans text-xs font-black uppercase tracking-[0.16em] text-[#9BE1DC]">Flagship kit</p>
            <h2 id="starter-kit-heading" className="mt-3 font-sans text-3xl font-black leading-tight tracking-tight sm:text-4xl">
              AI Governance Starter Kit
            </h2>
            <p className="mt-4 font-sans text-base leading-relaxed text-[#CFE0F2]">
              A practical starting package for teams that need a credible,
              editable governance file before AI use grows further. Use it to
              document tools, assign ownership, review vendors, train staff, and
              keep update notes in one organized place.
            </p>
            <div className="mt-6">
              <PrimaryLink href="#product-categories">Preview starter kit</PrimaryLink>
            </div>
          </div>
          <div className="overflow-hidden rounded-2xl border border-white/[0.14] bg-[#F8FAFD] p-3 text-[#0B1B2F] shadow-[0_34px_90px_-70px_rgba(0,0,0,0.9)]">
            <div className="relative overflow-hidden rounded-xl">
              <Image
                src="/assets/airegready-home-v3-starter-kit.png"
                width="1586"
                height="992"
                alt="Premium AI governance starter kit product photo with tabbed documents, checklist cards, policy packets, and an organized binder."
                className="aspect-[16/10] h-auto w-full object-cover"
              />
              <div className="absolute left-4 top-4 rounded-full border border-white/[0.22] bg-[#06101F]/82 px-3 py-1.5 font-sans text-xs font-black uppercase tracking-[0.12em] text-white backdrop-blur-md">
                Starter kit preview
              </div>
            </div>
            <div className="p-2 pt-5 sm:p-5">
            <div className="mb-4 flex items-center justify-between gap-4 border-b border-[#D6E2EF] pb-4">
              <div>
                <p className="font-sans text-xs font-black uppercase tracking-[0.14em] text-[#0F6B8F]">Included resources</p>
                <h3 className="mt-1 font-sans text-xl font-black">Starter kit file index</h3>
              </div>
              <span className="rounded-full bg-[#E6F7F3] px-3 py-1 font-sans text-xs font-black text-[#137A72]">
                Ready to adapt
              </span>
            </div>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {starterContents.map((item, index) => (
                <div key={item} className="rounded-xl border border-[#D6E2EF] bg-white p-4">
                  <div className="flex items-center justify-between gap-3">
                    <span className="font-sans text-xs font-black text-[#7B8DA3]">0{index + 1}</span>
                    <span className="h-2 w-2 rounded-full bg-[#2CA6A4]" aria-hidden="true" />
                  </div>
                  <p className="mt-3 font-sans text-sm font-black text-[#0B1B2F]">{item}</p>
                </div>
              ))}
            </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 sm:py-20" aria-labelledby="why-heading">
        <div className="mx-auto max-w-[1240px]">
          <SectionHeader
            id="why-heading"
            eyebrow="Why this matters"
            title="Small teams are being asked governance questions before they have governance infrastructure."
            body="AI rules, vendor requirements, internal risk questions, employee use of AI, school and workplace policies, and board or leadership concerns are moving faster than most small teams can track."
          />
          <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
            {whyItems.map(([title, body]) => (
              <article key={title} className="rounded-2xl border border-[#C9D7E6] bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-950">
                <h3 className="font-sans text-lg font-black leading-tight text-[#0B1B2F] dark:text-white">{title}</h3>
                <p className="mt-3 font-sans text-sm leading-relaxed text-[#52677F] dark:text-slate-300">{body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-16 sm:px-6 sm:py-20 dark:bg-slate-950" aria-labelledby="assessment-heading">
        <div className="mx-auto grid max-w-[1240px] grid-cols-1 gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <SectionHeader
            id="assessment-heading"
            eyebrow="Readiness assessment"
            title="Use the free assessment as the entry point, then choose the right documents."
            body="The assessment should help teams see which governance file areas are thin: policies, vendor controls, training, risk review, incident planning, and regulatory tracking."
            compact
          />
          <div className="rounded-2xl border border-[#C9D7E6] bg-[#F8FAFD] p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900">
            <div className="mb-5 flex flex-col justify-between gap-3 border-b border-[#D6E2EF] pb-4 sm:flex-row sm:items-center dark:border-slate-800">
              <div>
                <p className="font-sans text-xs font-black uppercase tracking-[0.14em] text-[#0F6B8F] dark:text-cyan-300">Sample scorecard</p>
                <h3 className="mt-1 font-sans text-xl font-black text-[#0B1B2F] dark:text-white">AI readiness snapshot</h3>
              </div>
              <SecondaryLink href="/assessment">Start the free assessment</SecondaryLink>
            </div>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {assessmentRows.map(([label, value, widthClass, status]) => (
                <div key={label} className="rounded-xl border border-[#D6E2EF] bg-white p-4 dark:border-slate-800 dark:bg-slate-950">
                  <div className="flex items-center justify-between gap-4 font-sans text-sm">
                    <span className="font-bold text-[#0B1B2F] dark:text-white">{label}</span>
                    <span className="font-black text-[#0F6B8F] dark:text-cyan-300">{value}</span>
                  </div>
                  <div className="mt-3 h-2 overflow-hidden rounded-full bg-[#E2EAF3] dark:bg-slate-800">
                    <div className={`h-full rounded-full bg-[#2CA6A4] ${widthClass}`} />
                  </div>
                  <p className="mt-2 font-sans text-xs font-semibold text-[#61758D] dark:text-slate-400">{status}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 sm:py-20" aria-labelledby="tracker-heading">
        <div className="mx-auto grid max-w-[1320px] grid-cols-1 gap-6 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
          <div className="overflow-hidden rounded-2xl border border-[#C9D7E6] bg-white p-3 shadow-[0_34px_90px_-70px_rgba(11,27,47,0.9)] dark:border-slate-800 dark:bg-slate-950">
            <Image
              src="/assets/airegready-home-v3-regulation-library.png"
              width="1586"
              height="992"
              alt="Professional AI regulation library with jurisdiction guide folders, policy update cards, binders, and a world map."
              className="aspect-[16/10] h-auto w-full rounded-xl object-cover"
            />
          </div>
          <div>
            <SectionHeader
              id="tracker-heading"
              eyebrow="Regulation tracker"
              title="Tracked legal and governance topics, translated into resource updates."
              body="AIRegReady tracks changing legal and governance frameworks as topics for educational updates, checklists, and preparation prompts. The tracker does not make legal determinations for a specific organization."
              compact
            />
            <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {trackedTopics.map((topic, index) => (
                <div key={topic} className="rounded-xl border border-[#D6E2EF] bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-950">
                  <div className="font-sans text-xs font-black text-[#7B8DA3]">T{index + 1}</div>
                  <h3 className="mt-2 font-sans text-sm font-black leading-tight text-[#0B1B2F] dark:text-white">{topic}</h3>
                  <p className="mt-3 rounded-full bg-[#FFF1CC] px-2 py-1 text-center font-sans text-[11px] font-black text-[#8A5A00]">
                    Tracked topic
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#EAF1F8] px-4 py-16 sm:px-6 sm:py-20 dark:bg-[#0B1523]" aria-labelledby="audience-heading">
        <div className="mx-auto max-w-[1240px]">
          <SectionHeader
            id="audience-heading"
            eyebrow="Built for"
            title="Practical governance resources for teams without a large compliance staff."
          />
          <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {audiences.map(([title, body]) => (
              <article key={title} className="rounded-2xl border border-[#C9D7E6] bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-950">
                <h3 className="font-sans text-lg font-black text-[#0B1B2F] dark:text-white">{title}</h3>
                <p className="mt-3 font-sans text-sm leading-relaxed text-[#52677F] dark:text-slate-300">{body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 sm:py-20" aria-labelledby="how-heading">
        <div className="mx-auto max-w-[1180px]">
          <SectionHeader
            id="how-heading"
            eyebrow="How it works"
            title="From scattered AI use to an organized governance file."
          />
          <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-4">
            {[
              ['01', 'Assess your current readiness', 'Identify the thin spots in policy, vendor review, training, risk review, incident response, and tracking.'],
              ['02', 'Choose the right kit', 'Pick a starter, policy, vendor, training, sector, jurisdiction, or consultant delivery resource.'],
              ['03', 'Adapt the documents internally', 'Assign owners, customize the language, add your tools and workflows, and route legal questions to counsel.'],
              ['04', 'Track changes as rules evolve', 'Keep an update log for internal decisions, vendor changes, staff training, and tracked regulatory topics.'],
            ].map(([number, title, body]) => (
              <article key={number} className="rounded-2xl border border-[#C9D7E6] bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-950">
                <div className="font-sans text-sm font-black text-[#0F6B8F] dark:text-cyan-300">{number}</div>
                <h3 className="mt-4 font-sans text-lg font-black leading-tight text-[#0B1B2F] dark:text-white">{title}</h3>
                <p className="mt-3 font-sans text-sm leading-relaxed text-[#52677F] dark:text-slate-300">{body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#0B1B2F] px-4 py-16 text-white sm:px-6 sm:py-20" aria-labelledby="newsletter-heading">
        <div className="mx-auto grid max-w-[1120px] grid-cols-1 gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="font-sans text-xs font-black uppercase tracking-[0.16em] text-[#9BE1DC]">AIRegReady updates</p>
            <h2 id="newsletter-heading" className="mt-3 font-sans text-3xl font-black leading-tight tracking-tight sm:text-4xl">
              AI regulation updates, practical checklists, and new resource announcements.
            </h2>
            <p className="mt-4 font-sans text-base leading-relaxed text-[#CFE0F2]">
              Receive plain-English updates focused on what changed, what teams
              should document, and which templates or trackers may help with
              internal governance work.
            </p>
          </div>
          <div className="rounded-2xl border border-white/[0.14] bg-white p-5 text-[#0B1B2F] shadow-[0_34px_90px_-70px_rgba(0,0,0,0.9)] dark:bg-slate-950 dark:text-white">
            <div className="mb-5 grid grid-cols-1 gap-3 sm:grid-cols-3">
              <MiniCheck>Regulatory movement</MiniCheck>
              <MiniCheck>Governance checklists</MiniCheck>
              <MiniCheck>New kit previews</MiniCheck>
            </div>
            <HomeV3Newsletter />
            <p className="mt-3 font-sans text-xs leading-relaxed text-[#61758D] dark:text-slate-400">
              Educational updates only. No legal advice or compliance guarantee.
            </p>
          </div>
        </div>
      </section>

      <section className="px-4 py-12 sm:px-6" aria-labelledby="legal-boundary-heading">
        <div className="mx-auto max-w-[980px] rounded-2xl border border-[#C9D7E6] bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-950">
          <h2 id="legal-boundary-heading" className="font-sans text-2xl font-black text-[#0B1B2F] dark:text-white">
            Educational resources, not legal services.
          </h2>
          <p className="mt-3 font-sans text-sm leading-relaxed text-[#52677F] dark:text-slate-300">
            AIRegReady provides educational information and practical resources.
            It is not a law firm and does not provide legal advice. Resources
            are starting points for internal governance work and should be
            reviewed with qualified counsel for specific legal obligations.
          </p>
        </div>
      </section>
    </div>
    </>
  )
}
