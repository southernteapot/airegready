import Link from 'next/link'
import Image from 'next/image'
import Newsletter from '@/components/Newsletter'
import { buildPageMetadata } from '@/lib/seo'

export const metadata = {
  ...buildPageMetadata({
    title: 'Front Page V2 Preview - AIRegReady',
    description:
      'Prototype front page for AIRegReady, positioning the site as a practical AI governance resource and product company.',
    path: '/front-page-v2',
  }),
  robots: {
    index: false,
    follow: false,
  },
}

const trustSignals = [
  'Plain-English AI governance resources',
  'Built for real-world implementation',
  'Educational, not legal advice',
  'Updated as rules change',
  'Templates, checklists, playbooks, and trackers',
]

const productCategories = [
  {
    title: 'AI Governance Starter Kit',
    description:
      'A practical first package for turning scattered AI use into a documented internal program.',
    contents: ['AI policy baseline', 'system inventory', 'risk register', 'update log'],
  },
  {
    title: 'Acceptable Use Policy',
    description:
      'Clear internal rules for approved tools, sensitive data, human review, and employee expectations.',
    contents: ['policy template', 'one-page summary', 'employee acknowledgment'],
  },
  {
    title: 'AI Risk Assessment Toolkit',
    description:
      'Decision tools for classifying use cases, documenting risks, and prioritizing review work.',
    contents: ['impact assessment', 'tiering decision tree', 'risk register'],
  },
  {
    title: 'Vendor AI Review Packet',
    description:
      'A structured packet for reviewing AI vendors before sensitive data or critical workflows are involved.',
    contents: ['vendor questionnaire', 'scoring guide', 'procurement checklist'],
  },
  {
    title: 'AI Incident Response Plan',
    description:
      'A response playbook for leaks, harmful outputs, discrimination concerns, and model failures.',
    contents: ['severity matrix', 'escalation path', 'response checklist'],
  },
  {
    title: 'Training Program',
    description:
      'Plain-English training materials for teams that need practical AI literacy and consistent habits.',
    contents: ['facilitator guide', 'quiz', 'attestation', 'reference cards'],
  },
  {
    title: 'Jurisdiction Kits',
    description:
      'Focused guides and readiness checklists for state, federal, and international AI obligations.',
    contents: ['applicability notes', 'readiness checklist', 'update tracker'],
  },
  {
    title: 'EU AI Act Kit',
    description:
      'A practical starting point for EU AI Act triage, risk classification, and internal preparation.',
    contents: ['risk classification guide', 'high-risk checklist', 'GDPR crosswalk'],
  },
  {
    title: 'Founder/Small Business Track',
    description:
      'Lightweight guardrails for small teams that need credible documentation without enterprise overhead.',
    contents: ['starter policies', 'vendor triage', 'minimum viable guardrails'],
  },
  {
    title: 'School/Organization Track',
    description:
      'Implementation-focused resources for schools, nonprofits, and mission-driven organizations using AI.',
    contents: ['staff guidance', 'student data guardrails', 'training checklist'],
  },
]

const flagshipKits = [
  {
    title: 'AI Governance Starter Kit',
    eyebrow: 'Flagship kit - coming soon',
    description:
      'A premium starter package for teams that need a credible internal baseline: policy language, tool inventory, risk review, ownership, and update tracking in one place.',
    points: [
      'Acceptable use policy and employee acknowledgment',
      'AI system inventory and risk register templates',
      'Governance roles, review workflow, and quarterly update log',
    ],
  },
  {
    title: 'EU AI Act Readiness Kit',
    eyebrow: 'Jurisdiction kit - preview contents',
    description:
      'A practical, educational kit for teams trying to understand whether the EU AI Act deserves deeper review and what documentation may be useful to prepare.',
    points: [
      'Risk classification worksheet and evidence checklist',
      'High-risk system preparation tracker',
      'Plain-English implementation notes with counsel review prompts',
    ],
  },
]

const regulationAreas = [
  {
    title: 'EU AI Act',
    body: 'Risk classification, transparency duties, high-risk system preparation, and practical planning prompts.',
  },
  {
    title: 'Colorado and State AI Laws',
    body: 'State-level AI rules, employment and consequential decision use cases, and readiness checklists.',
  },
  {
    title: 'Federal Policy and NIST AI RMF',
    body: 'Federal policy movement, agency guidance, and NIST AI RMF concepts translated into operational steps.',
  },
  {
    title: 'Sector-Specific Guidance',
    body: 'Healthcare, finance, education, hiring, insurance, and other areas where existing rules affect AI use.',
  },
]

const audienceCards = [
  {
    title: 'Founders and startups',
    body: 'Minimum viable AI governance that can grow with product, funding, vendors, and customers.',
  },
  {
    title: 'Small teams',
    body: 'Simple policies, inventories, and review habits for teams without a dedicated compliance department.',
  },
  {
    title: 'Schools and nonprofits',
    body: 'Plain-English guardrails for staff AI use, sensitive data, student or beneficiary impact, and training.',
  },
  {
    title: 'Consultants',
    body: 'Reusable educational materials and client-ready starting points that still leave room for counsel review.',
  },
  {
    title: 'Regulated organizations',
    body: 'Documentation support for higher-stakes workflows involving people, data, vendors, and oversight.',
  },
]

function ArrowLink({ href, children, variant = 'primary' }) {
  const classes =
    variant === 'secondary'
      ? 'border border-[#B9C9DC] bg-white/80 text-[#0F2742] hover:border-[#2F80C2] hover:bg-white dark:border-slate-700 dark:bg-slate-900/80 dark:text-slate-100'
      : 'bg-[#0F5E9C] text-white shadow-[0_18px_40px_-24px_rgba(15,94,156,0.8)] hover:bg-[#0B4A7D]'

  return (
    <Link
      href={href}
      className={`inline-flex min-h-12 items-center justify-center rounded-lg px-5 py-3 font-sans text-sm font-bold no-underline transition ${classes}`}
    >
      {children}
      <span aria-hidden="true" className="ml-2">
        &rarr;
      </span>
    </Link>
  )
}

function SectionIntro({ eyebrow, title, body, center = false, id }) {
  return (
    <div className={center ? 'mx-auto max-w-[760px] text-center' : 'max-w-[760px]'}>
      <div className="mb-3 font-sans text-xs font-bold uppercase tracking-[0.16em] text-[#0F6B8F] dark:text-cyan-300">
        {eyebrow}
      </div>
      <h2 id={id} className="font-serif text-3xl font-bold leading-tight tracking-tight text-[#0B1828] sm:text-4xl dark:text-white">
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

function CheckItem({ children }) {
  return (
    <li className="flex gap-3 font-sans text-sm leading-relaxed text-[#42566D] dark:text-slate-300">
      <span
        aria-hidden="true"
        className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#D6F3EA] text-xs font-black text-[#137A72] dark:bg-teal-400/[0.15] dark:text-teal-200"
      >
        &#10003;
      </span>
      <span>{children}</span>
    </li>
  )
}

export default function FrontPageV2() {
  return (
    <div className="bg-[#F5F8FC] text-[#0B1828] dark:bg-[#09111F] dark:text-white">
      <section className="relative overflow-hidden px-6 pb-16 pt-28 sm:pb-20 lg:pt-32" aria-labelledby="front-v2-hero-heading">
        <div className="absolute inset-x-0 top-0 h-[620px] bg-[radial-gradient(circle_at_20%_12%,rgba(44,166,164,0.22),transparent_32%),radial-gradient(circle_at_78%_20%,rgba(47,128,194,0.24),transparent_36%)]" />
        <div className="relative mx-auto grid max-w-[1280px] grid-cols-1 items-center gap-12 lg:grid-cols-[0.96fr_1.04fr]">
          <div>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#B9C9DC] bg-white/80 px-3 py-1.5 font-sans text-xs font-bold uppercase tracking-[0.12em] text-[#0F5E9C] shadow-sm dark:border-slate-700 dark:bg-slate-900/70 dark:text-cyan-200">
              AI governance resources and kits
            </div>
            <h1
              id="front-v2-hero-heading"
              className="font-serif text-4xl font-bold leading-[1.03] tracking-tight text-[#071425] sm:text-5xl lg:text-[64px] dark:text-white"
            >
              Practical AI governance kits for teams that need usable documents.
            </h1>
            <p className="mt-6 max-w-[680px] font-sans text-lg leading-relaxed text-[#42566D] dark:text-slate-300">
              AIRegReady sells plain-English templates, checklists, playbooks,
              trackers, and jurisdiction guides that help teams understand AI
              governance obligations and prepare internal documentation. The
              resources are educational starting points, not legal advice.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <ArrowLink href="#kits">Browse kits and resources</ArrowLink>
              <ArrowLink href="/assessment" variant="secondary">
                Start the free assessment
              </ArrowLink>
            </div>
            <div className="mt-10 grid max-w-[620px] grid-cols-1 gap-3 sm:grid-cols-3">
              {['Policies', 'Risk tools', 'Jurisdiction guides'].map((item) => (
                <div
                  key={item}
                  className="rounded-xl border border-[#D7E4F2] bg-white/75 px-4 py-3 font-sans shadow-sm dark:border-slate-800 dark:bg-slate-950/60"
                >
                  <div className="text-sm font-bold text-[#0B1828] dark:text-white">{item}</div>
                  <div className="mt-1 text-xs leading-relaxed text-[#61748C] dark:text-slate-400">
                    Built for practical internal use
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 rounded-[32px] bg-[#2F80C2]/10 blur-2xl" aria-hidden="true" />
            <div className="relative rounded-[28px] border border-[#C9D9EC] bg-white p-3 shadow-[0_36px_90px_-48px_rgba(15,39,66,0.55)] dark:border-slate-700 dark:bg-slate-950">
              <Image
                src="/assets/airegready-home-v2-hero.svg"
                width="860"
                height="620"
                alt="AIRegReady dashboard mockup showing governance kits, risk scorecards, and regulatory tracking."
                className="h-auto w-full rounded-2xl"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-[#D7E4F2] bg-white/80 px-6 py-5 dark:border-slate-800 dark:bg-slate-950/70" aria-label="AIRegReady trust signals">
        <div className="mx-auto flex max-w-[1280px] flex-wrap items-center justify-center gap-3">
          {trustSignals.map((signal) => (
            <div
              key={signal}
              className="rounded-full border border-[#D7E4F2] bg-[#F8FBFF] px-4 py-2 font-sans text-xs font-bold text-[#294C70] dark:border-slate-800 dark:bg-slate-900 dark:text-slate-200"
            >
              {signal}
            </div>
          ))}
        </div>
      </section>

      <section className="px-6 py-20 sm:py-24" aria-labelledby="problem-heading">
        <div className="mx-auto max-w-[1280px]">
          <SectionIntro
            id="problem-heading"
            eyebrow="The problem"
            title="AI rules are multiplying. Most teams need working documents, not another abstract essay."
            body="Founders, schools, nonprofits, consultants, and regulated organizations are being asked to show policies, review processes, vendor diligence, training, and risk records. AIRegReady turns that pressure into practical educational resources teams can adapt with appropriate legal review."
          />
          <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-3">
            {[
              {
                title: 'Regulation is fragmented',
                body: 'EU, U.S. state, federal, sector, and framework requirements point in different directions. Teams need a way to triage what deserves attention.',
              },
              {
                title: 'Governance has to become operational',
                body: 'A policy alone is not enough. Real readiness depends on inventories, vendor reviews, training records, escalation paths, and update habits.',
              },
              {
                title: 'Small teams still need credible records',
                body: 'Most organizations cannot build a large governance function. They need lightweight tools that are clear, editable, and easy to maintain.',
              },
            ].map((item) => (
              <div key={item.title} className="rounded-2xl border border-[#D7E4F2] bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-950/70">
                <h3 className="font-serif text-xl font-bold text-[#0B1828] dark:text-white">{item.title}</h3>
                <p className="mt-3 font-sans text-sm leading-relaxed text-[#52677F] dark:text-slate-300">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="kits" className="bg-[#EAF2FB] px-6 py-20 sm:py-24 dark:bg-[#0C1728]" aria-labelledby="kits-heading">
        <div className="mx-auto max-w-[1280px]">
          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <SectionIntro
              id="kits-heading"
              eyebrow="Product library"
              title="A practical catalog of AI governance kits and implementation tools."
              body="Each kit is designed as an educational starting point: clear explanations, editable templates, checklists, trackers, and prompts for when legal or specialist review is appropriate."
            />
            <ArrowLink href="/resources" variant="secondary">View current resource library</ArrowLink>
          </div>
          <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-5">
            {productCategories.map((product) => (
              <article
                key={product.title}
                className="flex min-h-[300px] flex-col rounded-2xl border border-[#C9D9EC] bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-[#2F80C2] hover:shadow-[0_20px_48px_-36px_rgba(15,39,66,0.65)] dark:border-slate-800 dark:bg-slate-950/80"
              >
                <h3 className="font-serif text-lg font-bold leading-snug text-[#0B1828] dark:text-white">{product.title}</h3>
                <p className="mt-3 font-sans text-sm leading-relaxed text-[#52677F] dark:text-slate-300">{product.description}</p>
                <div className="mt-5">
                  <div className="font-sans text-[11px] font-black uppercase tracking-[0.14em] text-[#0F6B8F] dark:text-cyan-300">
                    Suggested contents
                  </div>
                  <ul className="mt-3 space-y-2">
                    {product.contents.map((item) => (
                      <CheckItem key={item}>{item}</CheckItem>
                    ))}
                  </ul>
                </div>
                <Link
                  href="#featured-kits"
                  className="mt-auto inline-flex pt-5 font-sans text-sm font-bold text-[#0F5E9C] no-underline hover:text-[#0B4A7D] dark:text-cyan-300"
                >
                  Preview kit <span aria-hidden="true" className="ml-1">&rarr;</span>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="featured-kits" className="px-6 py-20 sm:py-24" aria-labelledby="featured-kits-heading">
        <div className="mx-auto max-w-[1280px]">
          <SectionIntro
            id="featured-kits-heading"
            eyebrow="Featured kits"
            title="Flagship resources designed to feel premium, practical, and ready to adapt."
            body="No pricing is shown in this prototype. The page can support coming-soon states, kit previews, and future product detail pages without promising compliance outcomes."
          />
          <div className="mt-10 grid grid-cols-1 gap-5 lg:grid-cols-2">
            {flagshipKits.map((kit) => (
              <article key={kit.title} className="overflow-hidden rounded-2xl border border-[#C9D9EC] bg-white shadow-[0_28px_80px_-58px_rgba(15,39,66,0.8)] dark:border-slate-800 dark:bg-slate-950">
                <div className="border-b border-[#D7E4F2] bg-[#0F2742] p-6 dark:border-slate-800">
                  <div className="mb-3 inline-flex rounded-full bg-[#2CA6A4]/[0.15] px-3 py-1 font-sans text-xs font-bold uppercase tracking-[0.12em] text-[#B9F1EC]">
                    {kit.eyebrow}
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-white">{kit.title}</h3>
                  <p className="mt-3 font-sans text-sm leading-relaxed text-[#CFE0F2]">{kit.description}</p>
                </div>
                <div className="grid grid-cols-1 gap-6 p-6 md:grid-cols-[1fr_220px]">
                  <ul className="space-y-3">
                    {kit.points.map((point) => (
                      <CheckItem key={point}>{point}</CheckItem>
                    ))}
                  </ul>
                  <div className="rounded-xl border border-[#D7E4F2] bg-[#F8FBFF] p-4 dark:border-slate-800 dark:bg-slate-900">
                    <div className="font-sans text-xs font-black uppercase tracking-[0.14em] text-[#0F6B8F] dark:text-cyan-300">
                      Kit format
                    </div>
                    <div className="mt-4 space-y-3 font-sans text-sm text-[#42566D] dark:text-slate-300">
                      <div className="flex justify-between gap-3"><span>Templates</span><strong>Editable</strong></div>
                      <div className="flex justify-between gap-3"><span>Checklists</span><strong>Practical</strong></div>
                      <div className="flex justify-between gap-3"><span>Status</span><strong>Coming soon</strong></div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-3 border-t border-[#D7E4F2] p-6 sm:flex-row dark:border-slate-800">
                  <ArrowLink href="#kits">Preview contents</ArrowLink>
                  <ArrowLink href="/assessment" variant="secondary">Start with assessment</ArrowLink>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#0F2742] px-6 py-20 text-white sm:py-24" aria-labelledby="assessment-heading">
        <div className="mx-auto grid max-w-[1180px] grid-cols-1 items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-2xl border border-white/[0.15] bg-white/[0.08] p-6 shadow-[0_30px_80px_-60px_rgba(0,0,0,0.9)]">
            <div className="mb-6 flex items-center justify-between">
              <div>
                <div className="font-sans text-xs font-bold uppercase tracking-[0.14em] text-cyan-200">Readiness snapshot</div>
                <div className="mt-2 font-serif text-2xl font-bold">Free assessment</div>
              </div>
              <div className="rounded-full bg-[#2CA6A4] px-3 py-1 font-sans text-xs font-bold">4 min</div>
            </div>
            <div className="space-y-4">
              {[
                ['AI usage maturity', 'Internal use'],
                ['Guardrail strength', 'Patchy'],
                ['Risk profile', 'Moderate'],
              ].map(([label, value]) => (
                <div key={label} className="rounded-xl bg-white/10 p-4">
                  <div className="flex justify-between gap-4 font-sans text-sm">
                    <span className="text-[#CFE0F2]">{label}</span>
                    <strong>{value}</strong>
                  </div>
                  <div className="mt-3 h-2 overflow-hidden rounded-full bg-white/[0.15]">
                    <div className="h-full w-2/3 rounded-full bg-[#2CA6A4]" />
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <div className="mb-3 font-sans text-xs font-bold uppercase tracking-[0.16em] text-cyan-200">Assessment entry point</div>
            <h2 id="assessment-heading" className="font-serif text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
              Start with a quick readiness assessment, then choose the right kit.
            </h2>
            <p className="mt-4 max-w-[680px] font-sans text-base leading-relaxed text-[#CFE0F2]">
              The assessment remains a useful entry point: it helps visitors
              identify where they are, which guardrails are missing, and which
              resources may be worth reviewing next. It does not replace legal
              analysis or promise compliance.
            </p>
            <div className="mt-8">
              <ArrowLink href="/assessment">Start the free assessment</ArrowLink>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-20 sm:py-24" aria-labelledby="regulations-heading">
        <div className="mx-auto max-w-[1280px]">
          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <SectionIntro
              id="regulations-heading"
              eyebrow="Regulatory tracking"
              title="A changing AI law landscape, translated into practical resource categories."
              body="AIRegReady tracks educational guidance across frameworks and jurisdictions already represented on the site, then turns that context into checklists, trackers, and preparation prompts."
            />
            <ArrowLink href="/timeline" variant="secondary">View timeline</ArrowLink>
          </div>
          <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
            {regulationAreas.map((area) => (
              <article key={area.title} className="rounded-2xl border border-[#D7E4F2] bg-white p-6 dark:border-slate-800 dark:bg-slate-950/70">
                <div className="mb-5 h-1.5 w-16 rounded-full bg-[#2CA6A4]" />
                <h3 className="font-serif text-xl font-bold text-[#0B1828] dark:text-white">{area.title}</h3>
                <p className="mt-3 font-sans text-sm leading-relaxed text-[#52677F] dark:text-slate-300">{area.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-20 sm:py-24 dark:bg-slate-950" aria-labelledby="how-heading">
        <div className="mx-auto max-w-[1180px]">
          <SectionIntro
            id="how-heading"
            eyebrow="How it works"
            title="A simple path from uncertainty to organized internal documentation."
            center
          />
          <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-4">
            {[
              ['01', 'Assess where you are', 'Use the free assessment to identify AI use, guardrail gaps, and risk areas.'],
              ['02', 'Choose the right kit', 'Start with a foundational kit, jurisdiction kit, sector kit, or training resource.'],
              ['03', 'Adapt the documents', 'Customize the templates for your tools, roles, workflows, and counsel review needs.'],
              ['04', 'Track updates', 'Use logs and trackers to revisit AI use as rules, vendors, and internal practices change.'],
            ].map(([number, title, body]) => (
              <article key={number} className="rounded-2xl border border-[#D7E4F2] bg-[#F8FBFF] p-6 dark:border-slate-800 dark:bg-slate-900/70">
                <div className="font-sans text-sm font-black text-[#0F6B8F] dark:text-cyan-300">{number}</div>
                <h3 className="mt-5 font-serif text-xl font-bold text-[#0B1828] dark:text-white">{title}</h3>
                <p className="mt-3 font-sans text-sm leading-relaxed text-[#52677F] dark:text-slate-300">{body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-20 sm:py-24" aria-labelledby="audience-heading">
        <div className="mx-auto max-w-[1280px]">
          <SectionIntro
            id="audience-heading"
            eyebrow="Who it is for"
            title="Built for organizations that need practical AI readiness without enterprise overhead."
            body="The same resource library can serve lightweight teams and more formal environments because the emphasis is on plain-English documentation, triage, and implementation support."
          />
          <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-5">
            {audienceCards.map((audience) => (
              <article key={audience.title} className="rounded-2xl border border-[#D7E4F2] bg-white p-6 dark:border-slate-800 dark:bg-slate-950/70">
                <h3 className="font-serif text-lg font-bold leading-snug text-[#0B1828] dark:text-white">{audience.title}</h3>
                <p className="mt-3 font-sans text-sm leading-relaxed text-[#52677F] dark:text-slate-300">{audience.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="updates" className="bg-[#EAF2FB] px-6 py-20 sm:py-24 dark:bg-[#0C1728]" aria-labelledby="updates-heading">
        <div className="mx-auto grid max-w-[1180px] grid-cols-1 items-center gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <div className="mb-3 font-sans text-xs font-bold uppercase tracking-[0.16em] text-[#0F6B8F] dark:text-cyan-300">
              Weekly updates
            </div>
            <h2 id="updates-heading" className="font-serif text-3xl font-bold leading-tight tracking-tight text-[#0B1828] sm:text-4xl dark:text-white">
              AI regulation updates with practical resources attached.
            </h2>
            <p className="mt-4 font-sans text-base leading-relaxed text-[#52677F] dark:text-slate-300">
              The newsletter should feel like an operational briefing: what
              changed, who should care, and what template, checklist, or tracker
              might help a team respond.
            </p>
            <ul className="mt-6 space-y-3">
              <CheckItem>Plain-English summaries of AI regulatory movement</CheckItem>
              <CheckItem>New kit previews, checklists, and implementation notes</CheckItem>
              <CheckItem>Educational updates only; consult counsel for legal advice</CheckItem>
            </ul>
          </div>
          <div className="rounded-2xl border border-[#C9D9EC] bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-950/80 [&>section]:!mx-0 [&>section]:!max-w-none [&>section]:!p-0 [&>section]:!text-left [&>section>div]:!border-0 [&>section>div]:!bg-transparent [&>section>div]:!p-0 [&_form]:!mx-0 [&_form]:!max-w-none">
            <Newsletter />
          </div>
        </div>
      </section>

      <section className="px-6 py-16" aria-labelledby="legal-boundary-heading">
        <div className="mx-auto max-w-[980px] rounded-2xl border border-[#D7E4F2] bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-950/70">
          <h2 id="legal-boundary-heading" className="font-serif text-2xl font-bold text-[#0B1828] dark:text-white">
            Educational resources, not legal advice.
          </h2>
          <p className="mt-3 font-sans text-sm leading-relaxed text-[#52677F] dark:text-slate-300">
            AIRegReady provides educational information and practical resources.
            It is not a law firm and does not provide legal advice. Consult
            qualified counsel for legal advice about specific obligations.
          </p>
        </div>
      </section>
    </div>
  )
}
