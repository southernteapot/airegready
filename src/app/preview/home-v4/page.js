import Image from 'next/image'
import Link from 'next/link'
import HomeV4Newsletter from './HomeV4Newsletter'
import { buildPageMetadata } from '@/lib/seo'

export const metadata = {
  ...buildPageMetadata({
    title: 'Home V4 Preview - AIRegReady',
    description:
      'Preview of a redesigned AIRegReady homepage positioning the site as a practical AI governance product business.',
    path: '/preview/home-v4',
  }),
  robots: {
    index: false,
    follow: false,
  },
}

// ─────────────────────────────────────────────────────────────────────────────
// Content
// ─────────────────────────────────────────────────────────────────────────────

const trustSignals = [
  'Plain-English AI governance resources',
  'Built for real-world implementation',
  'Educational, not legal advice',
  'Updated as rules change',
  'Templates, checklists, playbooks, trackers',
]

const productCategories = [
  {
    title: 'AI Governance Starter Kit',
    benefit:
      'A first credible governance file for teams turning scattered AI use into a documented program.',
    contents: [
      'Acceptable use policy',
      'AI system inventory',
      'Risk intake form',
      'Update tracker',
    ],
    cta: 'Preview kit',
    badge: 'Flagship',
  },
  {
    title: 'Acceptable Use Policy',
    benefit:
      'Clear internal rules for approved tools, sensitive data, human review, and staff expectations.',
    contents: [
      'Policy template',
      'One-page summary',
      'Employee acknowledgment',
    ],
    cta: 'Preview kit',
  },
  {
    title: 'AI Risk Assessment Toolkit',
    benefit:
      'Decision tools for classifying AI use cases, recording risks, and prioritizing review work.',
    contents: [
      'Impact assessment',
      'Tiering decision tree',
      'Risk register',
    ],
    cta: 'Preview kit',
  },
  {
    title: 'Vendor AI Review Packet',
    benefit:
      'A structured packet for reviewing AI vendors before sensitive data or critical workflows are involved.',
    contents: [
      'Vendor questionnaire',
      'Scoring guide',
      'Procurement checklist',
    ],
    cta: 'Preview kit',
  },
  {
    title: 'AI Incident Response Plan',
    benefit:
      'A response playbook for harmful outputs, leaks, discrimination concerns, and model failures.',
    contents: [
      'Severity matrix',
      'Escalation path',
      'Response checklist',
    ],
    cta: 'Coming soon',
  },
  {
    title: 'Training Program',
    benefit:
      'Plain-English training materials for teams that need practical AI literacy and consistent habits.',
    contents: [
      'Facilitator guide',
      'Quiz and attestation',
      'Reference cards',
    ],
    cta: 'Preview kit',
  },
  {
    title: 'Jurisdiction Kits',
    benefit:
      'Focused guides and readiness checklists for state, federal, and international AI obligations.',
    contents: [
      'Applicability notes',
      'Readiness checklist',
      'Update tracker',
    ],
    cta: 'View library',
  },
  {
    title: 'EU AI Act Kit',
    benefit:
      'A practical starting point for EU AI Act triage, risk classification, and internal preparation.',
    contents: [
      'Risk classification guide',
      'High-risk checklist',
      'GDPR crosswalk',
    ],
    cta: 'Coming soon',
  },
  {
    title: 'Founder & Small Business Track',
    benefit:
      'Lightweight guardrails for small teams that need credible documentation without enterprise overhead.',
    contents: [
      'Starter policies',
      'Vendor triage',
      'Minimum viable guardrails',
    ],
    cta: 'Preview track',
  },
  {
    title: 'School & Organization Track',
    benefit:
      'Implementation-focused resources for schools, nonprofits, and mission-driven organizations.',
    contents: [
      'Staff guidance',
      'Student data guardrails',
      'Training checklist',
    ],
    cta: 'Coming soon',
  },
]

const flagshipFeatures = [
  'Acceptable use policy with editable language and one-page summary',
  'AI system inventory and risk register templates',
  'Vendor review checklist with red-flag prompts',
  'Quarterly review agenda and update tracker',
  'Plain-English implementation notes and counsel review prompts',
]

const regulationCategories = [
  {
    name: 'EU AI Act',
    note: 'Risk classification, transparency, and high-risk preparation prompts.',
    state: 'Tracked',
    tone: 'teal',
  },
  {
    name: 'Colorado AI Act',
    note: 'Consequential decision rules, employer impact, and ADMT updates.',
    state: 'Tracked',
    tone: 'blue',
  },
  {
    name: 'U.S. State AI Laws',
    note: 'Texas TRAIGA, California, NYC LL 144, Illinois AIVIA, and more.',
    state: 'Tracked',
    tone: 'blue',
  },
  {
    name: 'Federal Policy',
    note: 'Recent executive orders, OMB guidance, and federal contractor signals.',
    state: 'Tracked',
    tone: 'blue',
  },
  {
    name: 'NIST AI RMF',
    note: 'Voluntary framework translated into operational checklists.',
    state: 'Tracked',
    tone: 'blue',
  },
  {
    name: 'Sector Guidance',
    note: 'Healthcare, finance, education, hiring, and insurance signals.',
    state: 'Tracked',
    tone: 'amber',
  },
]

const audienceCards = [
  {
    title: 'Founders and startups',
    body: 'Minimum viable AI governance that grows with product, vendors, funding, and customer questions.',
    icon: 'spark',
  },
  {
    title: 'Small teams',
    body: 'Simple policies, inventories, and review habits for teams without a dedicated compliance staff.',
    icon: 'people',
  },
  {
    title: 'Schools and nonprofits',
    body: 'Plain-English guardrails for staff AI use, sensitive data, training, and beneficiary impact.',
    icon: 'book',
  },
  {
    title: 'Consultants',
    body: 'Reusable educational deliverables and client-ready starting points for workshops and handoffs.',
    icon: 'brief',
  },
  {
    title: 'Regulated organizations',
    body: 'Documentation support for higher-stakes workflows involving people, data, vendors, and oversight.',
    icon: 'shield',
  },
]

const howSteps = [
  {
    number: '01',
    title: 'Assess where you are',
    body: 'Take the free 4-minute assessment to identify AI use, guardrail gaps, and risk areas.',
  },
  {
    number: '02',
    title: 'Choose the right kit',
    body: 'Start with a starter pack, jurisdiction kit, vendor packet, or training resource.',
  },
  {
    number: '03',
    title: 'Adapt the documents',
    body: 'Customize templates for your tools, owners, and workflows; route specific questions to counsel.',
  },
  {
    number: '04',
    title: 'Track changes',
    body: 'Use logs and trackers to revisit AI use as rules, vendors, and internal practices change.',
  },
]

// ─────────────────────────────────────────────────────────────────────────────
// Small UI primitives (local to this prototype)
// ─────────────────────────────────────────────────────────────────────────────

function PrimaryCTA({ href, children }) {
  return (
    <Link
      href={href}
      className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-[#0A1F3A] px-6 py-3 font-sans text-sm font-bold text-white no-underline shadow-[0_18px_40px_-22px_rgba(10,31,58,0.85)] transition hover:bg-[#11305A]"
    >
      <span>{children}</span>
      <span aria-hidden="true" className="transition-transform group-hover:translate-x-0.5">&rarr;</span>
    </Link>
  )
}

function SecondaryCTA({ href, children }) {
  return (
    <Link
      href={href}
      className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg border border-[#0A1F3A]/15 bg-white px-6 py-3 font-sans text-sm font-bold text-[#0A1F3A] no-underline transition hover:border-[#1E5BA8] hover:bg-[#F4F7FB]"
    >
      <span>{children}</span>
      <span aria-hidden="true">&rarr;</span>
    </Link>
  )
}

function Eyebrow({ children, tone = 'blue' }) {
  const toneClass =
    tone === 'teal'
      ? 'text-[#0A7A6F]'
      : tone === 'white'
        ? 'text-[#9BE5DD]'
        : 'text-[#1E5BA8]'
  return (
    <p
      className={`font-sans text-[11px] font-black uppercase tracking-[0.18em] ${toneClass}`}
    >
      {children}
    </p>
  )
}

function SectionHeading({ id, children, light = false }) {
  return (
    <h2
      id={id}
      className={`font-serif text-3xl font-bold leading-[1.1] tracking-tight sm:text-4xl lg:text-[42px] ${
        light ? 'text-white' : 'text-[#071425]'
      }`}
    >
      {children}
    </h2>
  )
}

function SectionLead({ children, light = false }) {
  return (
    <p
      className={`mt-5 max-w-[680px] font-sans text-base leading-relaxed sm:text-lg ${
        light ? 'text-[#CFE0F2]' : 'text-[#42566D]'
      }`}
    >
      {children}
    </p>
  )
}

function CheckBullet({ children, light = false }) {
  return (
    <li className="flex items-start gap-3 font-sans text-sm leading-relaxed">
      <span
        aria-hidden="true"
        className={`mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${
          light
            ? 'bg-[#0FB4A6]/20 text-[#9BE5DD]'
            : 'bg-[#0FB4A6]/15 text-[#0A7A6F]'
        }`}
      >
        <svg viewBox="0 0 20 20" className="h-3 w-3" fill="currentColor">
          <path
            fillRule="evenodd"
            d="M16.7 5.3a1 1 0 0 1 .04 1.4l-7.5 8a1 1 0 0 1-1.42.04l-4-3.6a1 1 0 1 1 1.36-1.48l3.27 2.94 6.79-7.27a1 1 0 0 1 1.46-.03Z"
            clipRule="evenodd"
          />
        </svg>
      </span>
      <span className={light ? 'text-[#CFE0F2]' : 'text-[#42566D]'}>
        {children}
      </span>
    </li>
  )
}

function AudienceIcon({ name }) {
  const common = {
    width: 22,
    height: 22,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.8,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    'aria-hidden': true,
  }
  switch (name) {
    case 'spark':
      return (
        <svg {...common}>
          <path d="M12 3v3" />
          <path d="M12 18v3" />
          <path d="M3 12h3" />
          <path d="M18 12h3" />
          <path d="m5.6 5.6 2.1 2.1" />
          <path d="m16.3 16.3 2.1 2.1" />
          <circle cx="12" cy="12" r="3" />
        </svg>
      )
    case 'people':
      return (
        <svg {...common}>
          <circle cx="9" cy="9" r="3" />
          <path d="M3 19c0-3.3 2.7-6 6-6s6 2.7 6 6" />
          <circle cx="17" cy="8" r="2.5" />
          <path d="M15 19c0-2.5 2-4.5 4.5-4.5" />
        </svg>
      )
    case 'book':
      return (
        <svg {...common}>
          <path d="M4 5a2 2 0 0 1 2-2h11v18H6a2 2 0 0 1-2-2Z" />
          <path d="M8 7h6" />
          <path d="M8 11h6" />
        </svg>
      )
    case 'brief':
      return (
        <svg {...common}>
          <rect x="3" y="7" width="18" height="13" rx="2" />
          <path d="M9 7V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2" />
          <path d="M3 13h18" />
        </svg>
      )
    case 'shield':
    default:
      return (
        <svg {...common}>
          <path d="M12 3 4 6v6c0 4.5 3.5 8.5 8 9 4.5-.5 8-4.5 8-9V6Z" />
          <path d="m9 12 2 2 4-4" />
        </svg>
      )
  }
}

// ─────────────────────────────────────────────────────────────────────────────
// Page
// ─────────────────────────────────────────────────────────────────────────────

export default function HomeV4Page() {
  return (
    <div className="bg-[#F4F7FB] text-[#0A1F3A]">
      {/* ── 1. HERO ───────────────────────────────────────────────────── */}
      <section
        className="relative overflow-hidden px-4 pt-28 pb-20 sm:px-6 sm:pt-32"
        aria-labelledby="v4-hero-heading"
      >
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-0 -z-10 h-[680px] bg-[radial-gradient(circle_at_22%_18%,rgba(30,91,168,0.18),transparent_42%),radial-gradient(circle_at_82%_28%,rgba(15,180,166,0.16),transparent_46%)]"
        />
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-[180px] -z-10 h-px bg-gradient-to-r from-transparent via-[#1E5BA8]/30 to-transparent"
        />

        <div className="mx-auto grid max-w-[1280px] grid-cols-1 items-center gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:gap-16">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#0A1F3A]/15 bg-white/90 px-3 py-1.5 font-sans text-[11px] font-black uppercase tracking-[0.16em] text-[#0A1F3A] shadow-sm backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-[#0FB4A6]" aria-hidden="true" />
              AI governance resources &middot; updated as rules change
            </div>

            <h1
              id="v4-hero-heading"
              className="font-serif text-[40px] font-bold leading-[1.04] tracking-tight text-[#071425] sm:text-[52px] lg:text-[60px]"
            >
              Practical AI governance,{' '}
              <span className="relative whitespace-nowrap">
                <span className="relative z-10 italic text-[#1E5BA8]">ready to use.</span>
                <span
                  aria-hidden="true"
                  className="absolute inset-x-0 bottom-1 h-3 bg-[#0FB4A6]/25"
                />
              </span>
            </h1>

            <p className="mt-6 max-w-[640px] font-sans text-lg leading-relaxed text-[#42566D]">
              AIRegReady gives founders, small teams, schools, consultants, and
              regulated organizations plain-English templates, checklists,
              playbooks, and jurisdiction guides for AI governance work &mdash;
              so you can document what you do, faster. Educational resources,
              not legal advice.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <PrimaryCTA href="#kits">Browse kits and resources</PrimaryCTA>
              <SecondaryCTA href="/assessment">
                Take the free assessment
              </SecondaryCTA>
            </div>

            <dl className="mt-12 grid max-w-[560px] grid-cols-3 gap-6 border-t border-[#0A1F3A]/10 pt-6">
              <div>
                <dt className="font-sans text-xs font-bold uppercase tracking-wider text-[#5B7088]">
                  Assessment
                </dt>
                <dd className="mt-1.5 font-serif text-2xl font-bold text-[#0A1F3A]">
                  ~4 min
                </dd>
              </div>
              <div>
                <dt className="font-sans text-xs font-bold uppercase tracking-wider text-[#5B7088]">
                  Kits drafted
                </dt>
                <dd className="mt-1.5 font-serif text-2xl font-bold text-[#0A1F3A]">
                  10+
                </dd>
              </div>
              <div>
                <dt className="font-sans text-xs font-bold uppercase tracking-wider text-[#5B7088]">
                  Frameworks tracked
                </dt>
                <dd className="mt-1.5 font-serif text-2xl font-bold text-[#0A1F3A]">
                  6
                </dd>
              </div>
            </dl>
          </div>

          <div className="relative">
            <div
              aria-hidden="true"
              className="absolute -inset-6 rounded-[36px] bg-gradient-to-br from-[#1E5BA8]/15 via-transparent to-[#0FB4A6]/20 blur-2xl"
            />
            <div className="relative rounded-[28px] border border-[#0A1F3A]/10 bg-white p-3 shadow-[0_44px_120px_-50px_rgba(10,31,58,0.5)]">
              <Image
                src="/assets/airegready-home-v4-hero.svg"
                width="900"
                height="680"
                alt="AIRegReady governance workspace mockup with a readiness scorecard, the AI Governance Starter Stack file index, and a regulation tracker timeline."
                className="h-auto w-full rounded-2xl"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. TRUST STRIP ────────────────────────────────────────────── */}
      <section
        aria-label="What AIRegReady provides"
        className="border-y border-[#0A1F3A]/10 bg-white"
      >
        <div className="mx-auto flex max-w-[1280px] flex-wrap items-center justify-center gap-x-8 gap-y-3 px-4 py-6 sm:px-6">
          {trustSignals.map((signal, index) => (
            <div
              key={signal}
              className="flex items-center gap-3 font-sans text-xs font-bold uppercase tracking-[0.1em] text-[#42566D]"
            >
              <span
                aria-hidden="true"
                className="inline-flex h-2 w-2 rounded-full bg-[#0FB4A6]"
              />
              <span>{signal}</span>
              {index < trustSignals.length - 1 && (
                <span
                  aria-hidden="true"
                  className="hidden h-4 w-px bg-[#0A1F3A]/15 sm:inline-block"
                />
              )}
            </div>
          ))}
        </div>
      </section>

      {/* ── 3. PROBLEM ────────────────────────────────────────────────── */}
      <section
        className="px-4 py-24 sm:px-6"
        aria-labelledby="v4-problem-heading"
      >
        <div className="mx-auto max-w-[1180px]">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
            <div>
              <Eyebrow>The problem</Eyebrow>
              <SectionHeading id="v4-problem-heading">
                AI rules are multiplying. Most teams need working documents, not another essay.
              </SectionHeading>
            </div>
            <SectionLead>
              Founders, schools, nonprofits, consultants, and regulated
              organizations are being asked to show policies, review processes,
              vendor diligence, training records, and risk tracking. AIRegReady
              turns that pressure into practical educational resources teams
              can adapt with appropriate counsel review.
            </SectionLead>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-3">
            {[
              {
                num: '01',
                title: 'Regulation is fragmented',
                body: 'EU, U.S. state, federal, sector, and framework requirements pull in different directions. Teams need a way to triage what deserves attention.',
              },
              {
                num: '02',
                title: 'Governance has to be operational',
                body: 'A policy alone is not enough. Real readiness depends on inventories, vendor reviews, training records, escalation paths, and update habits.',
              },
              {
                num: '03',
                title: 'Small teams still need credible records',
                body: 'Most organizations cannot build a compliance department. They need lightweight tools that are clear, editable, and easy to maintain.',
              },
            ].map((item) => (
              <article
                key={item.num}
                className="group relative overflow-hidden rounded-2xl border border-[#0A1F3A]/10 bg-white p-7 shadow-sm transition hover:-translate-y-0.5 hover:border-[#1E5BA8]/40 hover:shadow-[0_28px_60px_-44px_rgba(10,31,58,0.6)]"
              >
                <div
                  aria-hidden="true"
                  className="absolute right-5 top-5 font-serif text-5xl font-bold text-[#1E5BA8]/10 transition group-hover:text-[#1E5BA8]/20"
                >
                  {item.num}
                </div>
                <h3 className="font-serif text-xl font-bold leading-snug text-[#0A1F3A]">
                  {item.title}
                </h3>
                <p className="mt-4 font-sans text-sm leading-relaxed text-[#42566D]">
                  {item.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. PRODUCT CATEGORIES ─────────────────────────────────────── */}
      <section
        id="kits"
        className="bg-white px-4 py-24 sm:px-6"
        aria-labelledby="v4-kits-heading"
      >
        <div className="mx-auto max-w-[1280px]">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-[700px]">
              <Eyebrow>Product library</Eyebrow>
              <SectionHeading id="v4-kits-heading">
                A practical catalog of AI governance kits and implementation tools.
              </SectionHeading>
              <SectionLead>
                Each kit is an educational starting point: clear explanations,
                editable templates, checklists, trackers, and prompts for when
                legal or specialist review is appropriate.
              </SectionLead>
            </div>
            <SecondaryCTA href="/resources">View resource library</SecondaryCTA>
          </div>

          <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {productCategories.map((product) => {
              const isComing = product.cta === 'Coming soon'
              return (
                <article
                  key={product.title}
                  className="group flex min-h-[340px] flex-col rounded-2xl border border-[#0A1F3A]/10 bg-[#F8FAFD] p-6 transition hover:-translate-y-0.5 hover:border-[#1E5BA8]/45 hover:bg-white hover:shadow-[0_30px_70px_-50px_rgba(10,31,58,0.6)]"
                >
                  <div className="mb-4 flex items-start justify-between gap-3">
                    <h3 className="font-serif text-lg font-bold leading-snug text-[#0A1F3A]">
                      {product.title}
                    </h3>
                    {product.badge && (
                      <span className="shrink-0 rounded-full bg-[#0A1F3A] px-2.5 py-1 font-sans text-[10px] font-black uppercase tracking-wider text-[#9BE5DD]">
                        {product.badge}
                      </span>
                    )}
                  </div>
                  <p className="font-sans text-sm leading-relaxed text-[#42566D]">
                    {product.benefit}
                  </p>

                  <div className="mt-5">
                    <p className="font-sans text-[11px] font-black uppercase tracking-[0.14em] text-[#5B7088]">
                      Inside
                    </p>
                    <ul className="mt-3 space-y-2">
                      {product.contents.map((item) => (
                        <CheckBullet key={item}>{item}</CheckBullet>
                      ))}
                    </ul>
                  </div>

                  {isComing ? (
                    <span className="mt-auto inline-flex items-center gap-2 pt-6 font-sans text-sm font-bold text-[#9C6A1F]">
                      <span className="h-2 w-2 rounded-full bg-[#E89B3E]" aria-hidden="true" />
                      Coming soon
                    </span>
                  ) : (
                    <Link
                      href="#flagship"
                      className="mt-auto inline-flex items-center gap-2 pt-6 font-sans text-sm font-bold text-[#1E5BA8] no-underline transition group-hover:text-[#0A1F3A]"
                    >
                      {product.cta}
                      <span aria-hidden="true">&rarr;</span>
                    </Link>
                  )}
                </article>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── 5. FEATURED / FLAGSHIP ────────────────────────────────────── */}
      <section
        id="flagship"
        className="relative overflow-hidden px-4 py-24 sm:px-6"
        aria-labelledby="v4-flagship-heading"
      >
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 bg-gradient-to-br from-[#0A1F3A] via-[#11305A] to-[#0F2A4F]"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_18%_24%,rgba(15,180,166,0.18),transparent_42%),radial-gradient(circle_at_82%_72%,rgba(30,91,168,0.32),transparent_45%)]"
        />

        <div className="mx-auto grid max-w-[1240px] grid-cols-1 gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div className="text-white">
            <Eyebrow tone="white">Flagship kit &middot; coming soon</Eyebrow>
            <SectionHeading id="v4-flagship-heading" light>
              AI Governance Starter Stack
            </SectionHeading>
            <SectionLead light>
              A premium starter package for teams that need a credible internal
              baseline: policy language, AI tool inventory, risk review,
              ownership, vendor checks, and an update tracker &mdash; in one
              organized place.
            </SectionLead>

            <ul className="mt-8 space-y-3">
              {flagshipFeatures.map((feature) => (
                <CheckBullet key={feature} light>
                  {feature}
                </CheckBullet>
              ))}
            </ul>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="#kits"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-white px-6 py-3 font-sans text-sm font-bold text-[#0A1F3A] no-underline transition hover:bg-[#E8F6F4]"
              >
                Preview kit contents <span aria-hidden="true">&rarr;</span>
              </Link>
              <Link
                href="/assessment"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg border border-white/30 bg-white/[0.06] px-6 py-3 font-sans text-sm font-bold text-white no-underline transition hover:border-white/60 hover:bg-white/[0.12]"
              >
                Start with the assessment
              </Link>
            </div>

            <p className="mt-6 font-sans text-xs leading-relaxed text-[#9BB4D2]">
              Pricing not yet announced. Educational resources, not legal advice.
            </p>
          </div>

          <div className="relative">
            <div
              aria-hidden="true"
              className="absolute -inset-6 rounded-[36px] bg-[#0FB4A6]/15 blur-3xl"
            />
            <div className="relative rounded-[24px] border border-white/15 bg-white/[0.06] p-3 shadow-[0_44px_100px_-40px_rgba(0,0,0,0.6)] backdrop-blur">
              <Image
                src="/assets/airegready-home-v4-stack.svg"
                width="640"
                height="520"
                alt="Premium product mockup showing a stack of AI governance documents, an editable checklist, and a quality seal."
                className="h-auto w-full rounded-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── 6. ASSESSMENT ENTRY POINT ─────────────────────────────────── */}
      <section
        className="px-4 py-24 sm:px-6"
        aria-labelledby="v4-assessment-heading"
      >
        <div className="mx-auto grid max-w-[1240px] grid-cols-1 gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <Eyebrow tone="teal">Free readiness assessment</Eyebrow>
            <SectionHeading id="v4-assessment-heading">
              Start with a 4-minute snapshot, then choose the right kit.
            </SectionHeading>
            <SectionLead>
              The assessment is a useful entry point, not the whole story. It
              helps visitors identify where they are, which guardrails are
              missing, and which resources may be worth reviewing next. It does
              not replace legal analysis or guarantee compliance.
            </SectionLead>

            <ul className="mt-7 grid grid-cols-1 gap-3 sm:grid-cols-2">
              <CheckBullet>8 plain-English questions</CheckBullet>
              <CheckBullet>3-axis scoring: ready, guardrails, risk</CheckBullet>
              <CheckBullet>Tailored action plan</CheckBullet>
              <CheckBullet>No login, no email required</CheckBullet>
            </ul>

            <div className="mt-8">
              <PrimaryCTA href="/assessment">Start the free assessment</PrimaryCTA>
            </div>
          </div>

          <div className="rounded-[24px] border border-[#0A1F3A]/10 bg-white p-6 shadow-[0_36px_80px_-50px_rgba(10,31,58,0.45)] sm:p-8">
            <div className="mb-6 flex items-center justify-between gap-3 border-b border-[#0A1F3A]/10 pb-5">
              <div>
                <Eyebrow>Sample result</Eyebrow>
                <h3 className="mt-1 font-serif text-xl font-bold text-[#0A1F3A]">
                  Mid-stage SaaS, ~30 employees
                </h3>
              </div>
              <div className="rounded-full bg-[#0FB4A6]/15 px-3 py-1.5 font-sans text-xs font-black text-[#0A7A6F]">
                ~4 min
              </div>
            </div>

            <div className="space-y-5">
              {[
                ['Ready', 68, '#0FB4A6', 'Solid baseline'],
                ['Guardrails', 54, '#1E5BA8', 'Patchy'],
                ['Risk exposure', 41, '#E89B3E', 'Watch list'],
              ].map(([label, value, color, status]) => (
                <div key={label}>
                  <div className="mb-2 flex items-baseline justify-between font-sans">
                    <span className="text-sm font-bold text-[#0A1F3A]">{label}</span>
                    <span className="font-serif text-lg font-bold tabular-nums text-[#0A1F3A]">
                      {value}
                      <span className="text-xs text-[#5B7088]">/100</span>
                    </span>
                  </div>
                  <div className="h-2 overflow-hidden rounded-full bg-[#EDF2F8]">
                    <div
                      className="h-full rounded-full"
                      style={{ width: `${value}%`, backgroundColor: color }}
                    />
                  </div>
                  <p className="mt-1.5 font-sans text-xs font-semibold text-[#5B7088]">
                    {status}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-7 rounded-xl border border-[#0A1F3A]/10 bg-[#F8FAFD] p-4">
              <p className="font-sans text-xs font-black uppercase tracking-[0.14em] text-[#1E5BA8]">
                Recommended next
              </p>
              <p className="mt-1 font-sans text-sm font-bold text-[#0A1F3A]">
                AI Governance Starter Stack &rarr; Vendor AI Review Packet
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 7. REGULATIONS / TRACKER ──────────────────────────────────── */}
      <section
        className="bg-white px-4 py-24 sm:px-6"
        aria-labelledby="v4-regs-heading"
      >
        <div className="mx-auto max-w-[1280px]">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-[700px]">
              <Eyebrow>Regulation tracker</Eyebrow>
              <SectionHeading id="v4-regs-heading">
                Tracked AI laws and frameworks, translated into practical resources.
              </SectionHeading>
              <SectionLead>
                AIRegReady tracks educational guidance across frameworks and
                jurisdictions, then turns that context into checklists,
                trackers, and preparation prompts. The tracker does not make
                legal determinations for any specific organization.
              </SectionLead>
            </div>
            <SecondaryCTA href="/timeline">View regulation timeline</SecondaryCTA>
          </div>

          <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {regulationCategories.map((reg) => {
              const dotColor =
                reg.tone === 'teal'
                  ? '#0FB4A6'
                  : reg.tone === 'amber'
                    ? '#E89B3E'
                    : '#1E5BA8'
              return (
                <article
                  key={reg.name}
                  className="group rounded-2xl border border-[#0A1F3A]/10 bg-[#F8FAFD] p-6 transition hover:-translate-y-0.5 hover:border-[#1E5BA8]/45 hover:bg-white hover:shadow-[0_24px_56px_-44px_rgba(10,31,58,0.6)]"
                >
                  <div className="mb-5 flex items-center justify-between">
                    <span
                      aria-hidden="true"
                      className="h-2.5 w-2.5 rounded-full"
                      style={{ backgroundColor: dotColor }}
                    />
                    <span className="rounded-full border border-[#0A1F3A]/10 bg-white px-2.5 py-1 font-sans text-[10px] font-black uppercase tracking-wider text-[#5B7088]">
                      {reg.state}
                    </span>
                  </div>
                  <h3 className="font-serif text-xl font-bold leading-snug text-[#0A1F3A]">
                    {reg.name}
                  </h3>
                  <p className="mt-3 font-sans text-sm leading-relaxed text-[#42566D]">
                    {reg.note}
                  </p>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── 8. HOW IT WORKS ───────────────────────────────────────────── */}
      <section
        className="px-4 py-24 sm:px-6"
        aria-labelledby="v4-how-heading"
      >
        <div className="mx-auto max-w-[1240px]">
          <div className="mx-auto max-w-[760px] text-center">
            <Eyebrow>How it works</Eyebrow>
            <SectionHeading id="v4-how-heading">
              From scattered AI use to organized internal documentation.
            </SectionHeading>
          </div>

          <div className="relative mt-14">
            <div
              aria-hidden="true"
              className="absolute left-0 right-0 top-9 hidden h-px bg-gradient-to-r from-[#0FB4A6]/0 via-[#1E5BA8]/30 to-[#0FB4A6]/0 md:block"
            />
            <div className="grid grid-cols-1 gap-5 md:grid-cols-4">
              {howSteps.map((step) => (
                <article
                  key={step.number}
                  className="relative rounded-2xl border border-[#0A1F3A]/10 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-[0_24px_56px_-44px_rgba(10,31,58,0.6)]"
                >
                  <div
                    aria-hidden="true"
                    className="absolute -top-3 left-6 inline-flex h-6 items-center rounded-full bg-[#0A1F3A] px-3 font-sans text-[11px] font-black tracking-wider text-[#9BE5DD]"
                  >
                    STEP {step.number}
                  </div>
                  <h3 className="mt-3 font-serif text-lg font-bold leading-snug text-[#0A1F3A]">
                    {step.title}
                  </h3>
                  <p className="mt-3 font-sans text-sm leading-relaxed text-[#42566D]">
                    {step.body}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 9. AUDIENCE ───────────────────────────────────────────────── */}
      <section
        className="bg-white px-4 py-24 sm:px-6"
        aria-labelledby="v4-audience-heading"
      >
        <div className="mx-auto max-w-[1280px]">
          <div className="max-w-[760px]">
            <Eyebrow>Built for</Eyebrow>
            <SectionHeading id="v4-audience-heading">
              Practical AI readiness for teams without enterprise overhead.
            </SectionHeading>
            <SectionLead>
              The same resource library serves lightweight teams and more
              formal environments because the emphasis is on plain-English
              documentation, triage, and implementation support.
            </SectionLead>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {audienceCards.map((audience) => (
              <article
                key={audience.title}
                className="group flex flex-col rounded-2xl border border-[#0A1F3A]/10 bg-[#F8FAFD] p-6 transition hover:-translate-y-0.5 hover:border-[#1E5BA8]/45 hover:bg-white hover:shadow-[0_24px_56px_-44px_rgba(10,31,58,0.6)]"
              >
                <span
                  aria-hidden="true"
                  className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[#1E5BA8]/10 text-[#1E5BA8] transition group-hover:bg-[#1E5BA8] group-hover:text-white"
                >
                  <AudienceIcon name={audience.icon} />
                </span>
                <h3 className="font-serif text-lg font-bold leading-snug text-[#0A1F3A]">
                  {audience.title}
                </h3>
                <p className="mt-3 font-sans text-sm leading-relaxed text-[#42566D]">
                  {audience.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── 10. NEWSLETTER ────────────────────────────────────────────── */}
      <section
        className="relative overflow-hidden px-4 py-24 sm:px-6"
        aria-labelledby="v4-newsletter-heading"
      >
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 bg-gradient-to-br from-[#0A1F3A] via-[#0F2A4F] to-[#11305A]"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_85%_15%,rgba(15,180,166,0.2),transparent_40%)]"
        />

        <div className="mx-auto grid max-w-[1180px] grid-cols-1 gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="text-white">
            <Eyebrow tone="white">Weekly briefing</Eyebrow>
            <SectionHeading id="v4-newsletter-heading" light>
              AI regulation updates with practical resources attached.
            </SectionHeading>
            <SectionLead light>
              An operational briefing in plain English: what changed this week,
              who should care, and which template, checklist, or tracker may
              help your team respond.
            </SectionLead>
            <ul className="mt-7 grid grid-cols-1 gap-3 sm:grid-cols-2">
              <CheckBullet light>Plain-English regulatory summaries</CheckBullet>
              <CheckBullet light>New kit previews and checklists</CheckBullet>
              <CheckBullet light>Implementation notes</CheckBullet>
              <CheckBullet light>No spam, easy unsubscribe</CheckBullet>
            </ul>
          </div>

          <div className="rounded-2xl border border-white/15 bg-white p-6 shadow-[0_44px_100px_-40px_rgba(0,0,0,0.6)] sm:p-7">
            <p className="font-sans text-[11px] font-black uppercase tracking-[0.16em] text-[#1E5BA8]">
              Subscribe free
            </p>
            <h3 className="mt-2 font-serif text-2xl font-bold text-[#0A1F3A]">
              The AIRegReady briefing
            </h3>
            <p className="mt-2 font-sans text-sm leading-relaxed text-[#42566D]">
              Weekly. Plain English. Educational only &mdash; no legal advice
              or compliance guarantee.
            </p>
            <div className="mt-5">
              <HomeV4Newsletter />
            </div>
            <div className="mt-5 flex items-center gap-3 border-t border-[#0A1F3A]/10 pt-4 font-sans text-xs text-[#5B7088]">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                className="h-4 w-4 text-[#0A7A6F]"
                aria-hidden="true"
              >
                <path
                  d="M12 3 4 6v6c0 4.5 3.5 8.5 8 9 4.5-.5 8-4.5 8-9V6Z"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span>Your email is used only for the briefing.</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── 11. LEGAL DISCLAIMER ──────────────────────────────────────── */}
      <section
        className="px-4 py-16 sm:px-6"
        aria-labelledby="v4-legal-heading"
      >
        <div className="mx-auto max-w-[980px] rounded-2xl border border-[#0A1F3A]/10 bg-white p-7 shadow-sm sm:p-9">
          <div className="flex flex-col gap-5 sm:flex-row">
            <span
              aria-hidden="true"
              className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#1E5BA8]/10 text-[#1E5BA8]"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                className="h-5 w-5"
              >
                <path d="M12 3 4 6v6c0 4.5 3.5 8.5 8 9 4.5-.5 8-4.5 8-9V6Z" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M9 12h6" strokeLinecap="round" />
                <path d="M12 9v6" strokeLinecap="round" />
              </svg>
            </span>
            <div>
              <h2 id="v4-legal-heading" className="font-serif text-xl font-bold text-[#0A1F3A]">
                Educational resources, not legal advice.
              </h2>
              <p className="mt-3 font-sans text-sm leading-relaxed text-[#42566D]">
                AIRegReady provides educational information and practical
                resources. It is not a law firm and does not provide legal
                advice or attorney-client services. Resources are starting
                points for internal governance work; consult qualified counsel
                for legal advice about specific obligations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer is rendered by the global layout. */}
    </div>
  )
}
