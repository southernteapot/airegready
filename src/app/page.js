import Image from 'next/image'
import Link from 'next/link'
import MarketingNewsletter from '@/components/MarketingNewsletter'
import { buildPageMetadata } from '@/lib/seo'
import { discoveryPages } from '@/lib/discovery-pages'
import { getAllArticles } from '@/lib/articles'
import { REGULATIONS } from '@/lib/data'
import {
  assessmentRows,
  getProductBySlug,
  getProductHref,
  getProductPriceLabel,
} from '@/lib/marketing'

export const metadata = buildPageMetadata({
  title: 'Plain-English AI Regulation Information and Readiness Tools',
  description:
    'AIRegReady tracks the EU AI Act, NIST AI RMF, U.S. state AI laws, federal policy, sector rules, and global frameworks — and turns them into plain-English guides, a free readiness assessment, and practical tools.',
  path: '/',
})

const heroLibraryLinks = [
  {
    title: 'EU AI Act',
    body: 'Risk tiers, timelines, and what actually applies',
    href: '/regulations/eu-ai-act',
  },
  {
    title: 'U.S. State AI Laws',
    body: 'State-by-state quick reference and tracker',
    href: '/regulations/us-state-laws',
  },
  {
    title: 'Regulation timeline',
    body: 'Key dates and milestones worldwide',
    href: '/timeline',
  },
]

const heroInfoCards = [
  {
    icon: 'workflow',
    title: '6 framework areas tracked',
    body: 'EU AI Act, NIST AI RMF, state laws, federal policy, sector rules, and global governance.',
  },
  {
    icon: 'documents',
    title: 'Plain-English guides',
    body: 'Articles, comparisons, a glossary, and a timeline — updated as the rules change.',
  },
  {
    icon: 'boundary',
    title: 'Free readiness assessment',
    body: 'No login and no email. A tailored action plan in a few minutes.',
  },
]

const resourceStrip = [
  ['Regulation guides', 'Six framework areas explained in plain English, with review dates you can check.'],
  ['State tracker', 'A state-by-state quick reference for U.S. AI laws, from Colorado to Texas.'],
  ['Free assessment', 'See where you stand on readiness, guardrails, and risk in a few minutes.'],
  ['Checklists & templates', 'Free checklist, free sample document, and practical starter guides.'],
  ['Analysis', 'Articles that explain what changed and what to do about it.'],
]

function PrimaryLink({ href, children }) {
  return (
    <Link
      href={href}
      className="inline-flex min-h-11 items-center justify-center rounded-lg bg-[#174EA6] px-4 py-3 font-sans text-sm font-bold text-white no-underline shadow-[0_14px_30px_-22px_rgba(23,78,166,0.95)] transition hover:bg-[#2C6BFF]"
    >
      {children}
    </Link>
  )
}

function HeroSecondaryLink({ href, children }) {
  return (
    <Link
      href={href}
      className="inline-flex min-h-11 items-center justify-center rounded-lg border border-[#58D4FF]/45 bg-white/[0.08] px-4 py-3 font-sans text-sm font-bold text-white no-underline shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] backdrop-blur-md transition hover:border-[#8EF1FF] hover:bg-white/[0.13]"
    >
      {children}
    </Link>
  )
}

function LightSecondaryLink({ href, children }) {
  return (
    <Link
      href={href}
      className="inline-flex min-h-11 items-center justify-center rounded-lg border border-[#BED2F4] bg-[#F8FBFF] px-5 py-3 font-sans text-sm font-bold text-[#06132E] no-underline transition hover:border-[#2C6BFF] hover:bg-white"
    >
      {children}
    </Link>
  )
}

function SectionHeader({ eyebrow, title, body, id, compact = false }) {
  return (
    <div className={compact ? 'max-w-[760px]' : 'mx-auto max-w-[820px] text-center'}>
      <p className="font-sans text-xs font-black uppercase text-[#8EF1FF]">
        {eyebrow}
      </p>
      <h2 id={id} className="mt-3 font-sans text-3xl font-black leading-tight text-white sm:text-4xl">
        {title}
      </h2>
      {body && (
        <p className="mt-4 font-sans text-base leading-relaxed text-[#B2C9ED]">
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
    <li className="flex gap-2.5 font-sans text-sm leading-relaxed text-[#455571] dark:text-[#B2C9ED]">
      <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-[#2C6BFF]" aria-hidden="true" />
      <span>{children}</span>
    </li>
  )
}

function CircuitBackdrop({ className = '' }) {
  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`} aria-hidden="true">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(88,212,255,0.16),transparent_28%),radial-gradient(circle_at_84%_22%,rgba(44,107,255,0.14),transparent_30%),linear-gradient(135deg,rgba(7,17,31,0)_0%,rgba(44,107,255,0.06)_52%,rgba(88,212,255,0.05)_100%)]" />
      <svg
        className="absolute right-[-150px] top-10 h-[560px] w-[820px] max-w-none opacity-70"
        viewBox="0 0 820 560"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M70 246h70l58-58h94l62-62h106" stroke="#2C6BFF" strokeWidth="2" />
        <path d="M20 312h112l60 60h132l64 64h180" stroke="#58D4FF" strokeWidth="2" opacity="0.72" />
        <path d="M230 78v72l78 78v84" stroke="#2C6BFF" strokeWidth="2" />
        <path d="M470 92v122l-52 52v92" stroke="#2C6BFF" strokeWidth="2" opacity="0.55" />
        <path d="M594 58l-78 78v88l-76 76" stroke="#58D4FF" strokeWidth="2" opacity="0.8" />
        <path d="M590 216h92l76-76" stroke="#2C6BFF" strokeWidth="2" />
        <path d="M304 454h86l44-44h106l56-56h128" stroke="#2C6BFF" strokeWidth="2" opacity="0.5" />
        {[70, 140, 230, 470, 594, 682, 758, 304, 540].map((cx, index) => (
          <circle
            key={`${cx}-${index}`}
            cx={cx}
            cy={[246, 246, 78, 92, 58, 216, 140, 454, 410][index]}
            r="7"
            fill="#07111F"
            stroke={index % 3 === 0 ? '#58D4FF' : '#2C6BFF'}
            strokeWidth="2"
          />
        ))}
      </svg>
      <svg
        className="absolute bottom-[-120px] left-[-190px] h-[460px] w-[680px] max-w-none opacity-45"
        viewBox="0 0 680 460"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M58 280h116l58-58h98l86-86h154" stroke="#58D4FF" strokeWidth="2" />
        <path d="M118 160h86l46 46v90l64 64h184" stroke="#2C6BFF" strokeWidth="2" />
        <path d="M370 64v78l-44 44v86" stroke="#2C6BFF" strokeWidth="2" opacity="0.55" />
        <circle cx="58" cy="280" r="7" fill="#07111F" stroke="#58D4FF" strokeWidth="2" />
        <circle cx="118" cy="160" r="7" fill="#07111F" stroke="#2C6BFF" strokeWidth="2" />
        <circle cx="370" cy="64" r="7" fill="#07111F" stroke="#2C6BFF" strokeWidth="2" />
        <circle cx="570" cy="136" r="7" fill="#07111F" stroke="#58D4FF" strokeWidth="2" />
      </svg>
    </div>
  )
}

export default function Home() {
  const articles = getAllArticles()
  const latestArticles = articles.slice(0, 4)
  const starterKit = getProductBySlug('ai-governance-starter-kit')
  const soloKit = getProductBySlug('solo-builder-ai-launch-kit')
  const paidKits = [
    {
      product: soloKit,
      blurb:
        'A launch file for one-person AI projects: claims, user data, disclosures, red flags, and change tracking before you publish, sell, or take clients.',
      audienceLine: 'For solo builders, freelancers, and side-gig projects',
    },
    {
      product: starterKit,
      blurb:
        'A first governance and risk file for a business: inventory, acceptable use policy, risk intake, tiering, register, and rollout aids.',
      audienceLine: 'For founders, new businesses, and lean teams',
    },
  ].filter((kit) => kit.product)

  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'AIRegReady',
    url: 'https://airegready.com',
    description:
      'Plain-English AI regulation information, readiness tools, and practical document templates for founders, solo builders, and lean teams.',
    sameAs: [],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <div className="overflow-x-hidden bg-[#07111F] text-white">
        <section className="relative overflow-hidden border-b border-white/[0.06] bg-[#07111F] px-4 pb-10 pt-24 text-white sm:px-6" aria-labelledby="home-heading">
          <CircuitBackdrop className="opacity-40" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_16%_18%,rgba(88,212,255,0.1),transparent_32%),radial-gradient(circle_at_82%_12%,rgba(44,107,255,0.12),transparent_30%)]" aria-hidden="true" />
          <div className="relative mx-auto max-w-[1320px]">
            <div className="mb-4 flex min-w-0 flex-col gap-3 rounded-2xl border border-[#58D4FF]/16 bg-[#060D19]/88 px-4 py-3 shadow-[0_24px_80px_-62px_rgba(0,0,0,0.9)] lg:flex-row lg:items-center lg:justify-between">
              <div className="flex min-w-0 flex-col gap-1 sm:flex-row sm:items-center sm:gap-3">
                <span className="rounded-full bg-[#123253] px-3 py-1 font-sans text-xs font-black uppercase text-[#DDF6FF]">
                  New
                </span>
                <Link href="/regulations/us-state-laws" className="min-w-0 max-w-full break-words font-sans text-sm font-semibold leading-snug text-[#D8E6F5] no-underline hover:text-white">
                  State-by-state AI law quick reference — see where every major state stands.
                </Link>
              </div>
              <div className="grid grid-cols-1 gap-2 min-[360px]:grid-cols-2 lg:flex lg:flex-wrap">
                <Link href="/catalog" className="rounded-lg px-3 py-2 text-center font-sans text-sm font-bold text-[#8EF1FF] no-underline hover:bg-white/[0.08]">
                  Document kits
                </Link>
                <Link href="/assessment" className="rounded-lg bg-[#174EA6] px-4 py-2 text-center font-sans text-sm font-bold text-white no-underline hover:bg-[#2C6BFF]">
                  Run assessment
                </Link>
              </div>
            </div>

            <div className="grid min-w-0 grid-cols-1 gap-5 lg:grid-cols-[0.92fr_1.08fr]">
              <div className="min-w-0 rounded-2xl border border-white/[0.12] bg-[#050B16]/90 p-6 shadow-[0_34px_90px_-70px_rgba(0,0,0,0.9)] sm:p-8">
                <p className="font-sans text-xs font-black uppercase text-[#8EF1FF]">
                  Plain-English AI regulation resource
                </p>
                <h1 id="home-heading" className="mt-4 max-w-[650px] break-words font-sans text-[32px] font-extrabold leading-[1.09] text-white sm:text-[44px] lg:text-[50px]">
                  AI regulations, explained in plain English.
                </h1>
                <p className="mt-5 max-w-[680px] font-sans text-base leading-relaxed text-[#D8E6F5] sm:text-lg">
                  AIRegReady tracks the EU AI Act, NIST AI RMF, U.S. state laws,
                  federal policy, sector rules, and global frameworks — and turns
                  them into guides, checklists, and tools you can actually use.
                  Educational information only, not legal advice.
                </p>
                <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-nowrap">
                  <PrimaryLink href="/assessment">Take the free assessment</PrimaryLink>
                  <HeroSecondaryLink href="/regulations">Browse the regulation library</HeroSecondaryLink>
                </div>
                <div className="mt-6 grid grid-cols-1 gap-3 border-t border-white/[0.12] pt-5 sm:grid-cols-3">
                  {heroInfoCards.map((card) => (
                    <div key={card.title} className="rounded-xl border border-white/[0.12] bg-white/[0.07] p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]">
                      <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-lg border border-[#58D4FF]/22 bg-[#58D4FF]/10 text-[#8EF1FF]">
                        <FeatureIcon type={card.icon} />
                      </div>
                      <div className="font-sans text-sm font-black leading-tight text-white">{card.title}</div>
                      <div className="mt-2 font-sans text-xs font-semibold leading-relaxed text-[#ADC4DE]">{card.body}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative min-w-0 overflow-hidden rounded-2xl border border-[#58D4FF]/16 bg-[#050B16] p-3 shadow-[0_36px_96px_-68px_rgba(0,0,0,0.9)]">
                <div className="mb-3 flex flex-col gap-3 rounded-xl border border-white/[0.12] bg-[#0B1626] p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <p className="font-sans text-xs font-black uppercase text-[#8EF1FF]">
                      Regulation library
                    </p>
                    <h2 className="mt-1 font-sans text-lg font-black leading-tight text-white">
                      Guides, comparisons, timelines, and trackers in one place.
                    </h2>
                  </div>
                  <span className="w-fit rounded-full bg-[#EAF4FF] px-3 py-1.5 font-sans text-xs font-black text-[#174EA6]">
                    Free to read
                  </span>
                </div>
                <div className="relative overflow-hidden rounded-xl border border-white/[0.1] bg-[#091321] p-2 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]">
                  <div className="pointer-events-none absolute left-5 top-5 z-10 rounded-xl border border-white/[0.16] bg-[#06101F]/86 px-4 py-3 shadow-[0_18px_48px_-32px_rgba(0,0,0,0.9)] backdrop-blur-md">
                    <p className="font-sans text-[11px] font-black uppercase text-[#8EF1FF]">
                      AIRegReady library
                    </p>
                    <p className="mt-1 font-sans text-xs font-bold text-[#D8E6F5]">
                      Regulations, guides, trackers, tools
                    </p>
                  </div>
                  <Image
                    src="/assets/airegready-home-v3-regulation-library.avif"
                    width="1586"
                    height="992"
                    alt="AI regulation library with jurisdiction guide folders, policy update cards, binders, and a map."
                    className="aspect-[16/9] h-auto w-full max-w-full rounded-lg object-cover saturate-[0.92]"
                    sizes="(max-width: 1024px) 100vw, 54vw"
                    priority
                  />
                  <div className="absolute inset-2 rounded-lg bg-gradient-to-t from-[#050B16]/82 via-[#050B16]/5 to-[#050B16]/8" aria-hidden="true" />
                  <div className="absolute bottom-5 left-5 right-5 grid grid-cols-2 gap-2 sm:grid-cols-4">
                    {['Regulation guides', 'State tracker', 'Timeline', 'Glossary'].map((label) => (
                      <div key={label} className="rounded-lg border border-white/[0.22] bg-white/[0.94] px-3 py-2 text-center font-sans text-[11px] font-black uppercase text-[#06101F] shadow-[0_14px_34px_-24px_rgba(0,0,0,0.9)] backdrop-blur-md">
                        {label}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="grid gap-2 pt-3">
                  {heroLibraryLinks.map((item) => (
                    <Link key={item.title} href={item.href} className="group grid grid-cols-[1fr_auto] gap-4 rounded-xl border border-white/[0.12] bg-[#0B1626] p-4 no-underline shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] transition hover:border-[#58D4FF]/40 hover:bg-[#0E1C30]">
                      <div>
                        <h3 className="font-sans text-sm font-black leading-tight text-white">{item.title}</h3>
                        <p className="mt-1 font-sans text-xs font-semibold leading-relaxed text-[#ADC4DE]">{item.body}</p>
                      </div>
                      <span className="self-center font-sans text-sm font-black text-[#8EF1FF]" aria-hidden="true">-&gt;</span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-5 grid grid-cols-1 gap-3 md:grid-cols-5">
              {resourceStrip.map(([title, body]) => (
                <article key={title} className="rounded-2xl border border-white/[0.12] bg-[#050B16]/86 p-4 shadow-sm">
                  <h3 className="font-sans text-sm font-black text-white">{title}</h3>
                  <p className="mt-2 font-sans text-xs font-semibold leading-relaxed text-[#ADC4DE]">{body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-b from-[#07111F] to-[#091321] px-4 py-16 text-white sm:px-6 sm:py-20" aria-labelledby="regulation-areas-heading">
          <div className="mx-auto max-w-[1240px]">
            <SectionHeader
              id="regulation-areas-heading"
              eyebrow="The regulatory landscape"
              title="Six framework areas, tracked and explained."
              body="Each guide covers what the rules require, who they apply to, key dates, and practical first steps — with a visible last-reviewed date so you know it's current."
            />
            <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {REGULATIONS.map((regulation) => (
                <Link key={regulation.id} href={`/regulations/${regulation.slug}`} className="group rounded-2xl border border-slate-800 bg-slate-950 p-5 no-underline transition hover:border-cyan-300/60 hover:bg-slate-900">
                  <div className="flex items-start justify-between gap-3">
                    <span className="text-2xl" role="img" aria-hidden="true">{regulation.icon}</span>
                    <span className="rounded-full bg-cyan-300/10 px-2.5 py-1 font-sans text-[11px] font-black uppercase tracking-wide text-cyan-200">
                      {regulation.tag}
                    </span>
                  </div>
                  <h3 className="mt-3 font-sans text-lg font-black leading-tight text-white">{regulation.title}</h3>
                  <p className="mt-2 font-sans text-sm leading-relaxed text-[#B2C9ED]">{regulation.desc}</p>
                  <span className="mt-4 inline-flex font-sans text-sm font-black text-[#8EF1FF]">
                    Read the guide <span aria-hidden="true">&nbsp;-&gt;</span>
                  </span>
                </Link>
              ))}
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <LightSecondaryLink href="/timeline">Regulation timeline</LightSecondaryLink>
              <LightSecondaryLink href="/compare">Compare frameworks</LightSecondaryLink>
              <LightSecondaryLink href="/glossary">Glossary</LightSecondaryLink>
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-b from-[#091321] to-[#0A1524] px-4 py-16 text-white sm:px-6 sm:py-20" aria-labelledby="latest-analysis-heading">
          <div className="mx-auto max-w-[1240px]">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <SectionHeader
                id="latest-analysis-heading"
                eyebrow="Latest analysis"
                title="What changed, and what to do about it."
                compact
              />
              <Link href="/blog" className="font-sans text-sm font-black text-[#8EF1FF] no-underline hover:text-white">
                All {articles.length} articles <span aria-hidden="true">-&gt;</span>
              </Link>
            </div>
            <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {latestArticles.map((post) => (
                <Link key={post.slug} href={`/blog/${post.slug}`} className="flex flex-col rounded-2xl border border-slate-800 bg-slate-950 p-5 no-underline transition hover:border-cyan-300/60 hover:bg-slate-900">
                  <p className="font-sans text-xs font-bold text-[#8EF1FF]">
                    {post.category} &middot; {post.displayDate}
                  </p>
                  <h3 className="mt-2 font-sans text-base font-black leading-snug text-white">{post.title}</h3>
                  <p className="mt-2 line-clamp-3 font-sans text-sm leading-relaxed text-[#B2C9ED]">{post.description}</p>
                  <span className="mt-auto pt-3 font-sans text-xs font-bold text-[#ADC4DE]">{post.readTime}</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-b from-[#0A1524] to-[#0B1B2F] px-4 py-16 text-white sm:px-6 sm:py-20" aria-labelledby="assessment-heading">
          <div className="mx-auto grid max-w-[1240px] grid-cols-1 gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <SectionHeader
              id="assessment-heading"
              eyebrow="Free readiness assessment"
              title="See where you stand before you change anything."
              body="Answer a few questions about how you use AI and get a tailored picture of your readiness, guardrails, and risk — plus an action plan and reading list matched to your situation. No login, no email."
              compact
            />
            <div className="rounded-2xl border border-[#C9D7E6] bg-[#F8FBFF] p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900">
              <div className="mb-5 flex flex-col justify-between gap-3 border-b border-[#D7E5F8] pb-4 sm:flex-row sm:items-center dark:border-[#2C6BFF]/30">
                <div>
                  <p className="font-sans text-xs font-black uppercase text-[#2C6BFF] dark:text-[#58D4FF]">Sample scorecard</p>
                  <h3 className="mt-1 font-sans text-xl font-black text-[#06132E] dark:text-white">AI readiness snapshot</h3>
                </div>
                <LightSecondaryLink href="/assessment">Start the free assessment</LightSecondaryLink>
              </div>
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {assessmentRows.map(([label, value, widthClass, status]) => (
                  <div key={label} className="rounded-xl border border-[#D7E5F8] bg-white p-4 dark:border-slate-800 dark:bg-slate-950">
                    <div className="flex items-center justify-between gap-4 font-sans text-sm">
                      <span className="font-bold text-[#06132E] dark:text-white">{label}</span>
                      <span className="font-black text-[#2C6BFF] dark:text-[#58D4FF]">{value}</span>
                    </div>
                    <div className="mt-3 h-2 overflow-hidden rounded-full bg-[#E5EEFF] dark:bg-[#102B65]">
                      <div className={`h-full rounded-full bg-[#2C6BFF] ${widthClass}`} />
                    </div>
                    <p className="mt-2 font-sans text-xs font-semibold text-[#536684] dark:text-[#B2C9ED]">{status}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-b from-[#0B1B2F] to-[#091321] px-4 py-14 text-white sm:px-6 sm:py-16" aria-labelledby="popular-guides-heading">
          <div className="mx-auto max-w-[1240px]">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-[0.78fr_1.22fr] lg:items-start">
              <SectionHeader
                id="popular-guides-heading"
                eyebrow="Popular starter guides"
                title="Answers to the questions people actually search for."
                body="Start with a specific question. Each guide links to free tools — and to editable documents if you want a head start."
                compact
              />
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {discoveryPages.map((guide) => (
                  <Link key={guide.slug} href={`/${guide.slug}`} className="rounded-2xl border border-slate-800 bg-slate-950 p-5 no-underline transition hover:border-cyan-300/60 hover:bg-slate-900">
                    <p className="font-sans text-xs font-black uppercase tracking-[0.14em] text-cyan-300">{guide.eyebrow}</p>
                    <h3 className="mt-2 font-sans text-lg font-black leading-tight text-white">{guide.title}</h3>
                    <p className="mt-3 font-sans text-sm leading-relaxed text-[#B2C9ED]">{guide.description}</p>
                  </Link>
                ))}
                <Link href="/free-sample" className="rounded-2xl border border-slate-800 bg-slate-950 p-5 no-underline transition hover:border-cyan-300/60 hover:bg-slate-900">
                  <p className="font-sans text-xs font-black uppercase tracking-[0.14em] text-cyan-300">Free download</p>
                  <h3 className="mt-2 font-sans text-lg font-black leading-tight text-white">Free Sample: AI Use Inventory Template</h3>
                  <p className="mt-3 font-sans text-sm leading-relaxed text-[#B2C9ED]">
                    Download one real document from the paid Starter Kit in PDF and DOCX. No email required.
                  </p>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#091321] px-4 py-16 text-white sm:px-6 sm:py-20" aria-labelledby="document-kits-heading">
          <div className="mx-auto max-w-[1240px]">
            <SectionHeader
              id="document-kits-heading"
              eyebrow="Practical document kits"
              title="If you'd rather start from finished documents than a blank page."
              body="Everything above is free. If you want a head start on the paperwork itself, we sell two editable document kits — both educational templates, not legal advice."
            />
            <div className="mt-10 grid grid-cols-1 gap-4 lg:grid-cols-2">
              {paidKits.map(({ product, blurb, audienceLine }) => (
                <article key={product.slug} className="flex flex-col rounded-2xl border border-[#C9D7E6] bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-950">
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="font-sans text-xl font-black leading-tight text-[#06132E] dark:text-white">{product.title}</h3>
                    <span className="rounded-full bg-[#EAF4FF] px-3 py-1 font-sans text-sm font-black text-[#174EA6] dark:bg-slate-900 dark:text-cyan-300">
                      {getProductPriceLabel(product)}
                    </span>
                  </div>
                  <p className="mt-1 font-sans text-xs font-black uppercase tracking-[0.14em] text-[#7B8DA3]">{audienceLine}</p>
                  <p className="mt-3 font-sans text-sm leading-relaxed text-[#455571] dark:text-[#B2C9ED]">{blurb}</p>
                  <div className="mt-auto pt-5">
                    <Link href={getProductHref(product)} className="font-sans text-sm font-black text-[#0F5E9C] no-underline transition hover:text-[#0B4A7D] dark:text-cyan-300">
                      See what&apos;s inside <span aria-hidden="true">-&gt;</span>
                    </Link>
                  </div>
                </article>
              ))}
            </div>
            <div className="mt-6 flex flex-wrap items-center gap-4">
              <Link href="/catalog" className="font-sans text-sm font-black text-[#8EF1FF] no-underline hover:text-white">
                Browse the full catalog <span aria-hidden="true">-&gt;</span>
              </Link>
              <span className="font-sans text-sm text-[#ADC4DE]">
                Not sure which fits? <Link href="/assessment" className="font-bold text-[#8EF1FF] no-underline hover:text-white">The free assessment will tell you.</Link>
              </span>
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-b from-[#091321] to-[#0B1B2F] px-4 py-16 text-white sm:px-6 sm:py-20" aria-labelledby="newsletter-heading">
          <div className="mx-auto grid max-w-[1120px] grid-cols-1 gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <p className="font-sans text-xs font-black uppercase text-[#58D4FF]">AIRegReady updates</p>
              <h2 id="newsletter-heading" className="mt-3 font-sans text-3xl font-black leading-tight sm:text-4xl">
                AI regulation updates, practical checklists, and new resource announcements.
              </h2>
              <p className="mt-4 font-sans text-base leading-relaxed text-[#D9E7FF]">
                Receive plain-English updates focused on what changed, what
                teams should document, and which templates or trackers may help
                with internal governance work.
              </p>
            </div>
            <div className="rounded-2xl border border-white/[0.14] bg-white p-5 text-[#06132E] shadow-[0_34px_90px_-70px_rgba(0,0,0,0.9)] dark:bg-slate-950 dark:text-white">
              <div className="mb-5 grid grid-cols-1 gap-3 sm:grid-cols-3">
                <MiniCheck>Regulatory movement</MiniCheck>
                <MiniCheck>Governance checklists</MiniCheck>
                <MiniCheck>New resource previews</MiniCheck>
              </div>
              <MarketingNewsletter />
              <p className="mt-3 font-sans text-xs leading-relaxed text-[#536684] dark:text-[#B2C9ED]">
                Educational updates only. No legal advice or compliance guarantee.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-b from-[#0B1B2F] to-[#07111F] px-4 py-12 sm:px-6" aria-labelledby="legal-boundary-heading">
          <div className="mx-auto max-w-[980px] rounded-2xl border border-[#C9D7E6] bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-950">
            <h2 id="legal-boundary-heading" className="font-sans text-2xl font-black text-[#06132E] dark:text-white">
              Educational resources, not legal services.
            </h2>
            <p className="mt-3 font-sans text-sm leading-relaxed text-[#455571] dark:text-[#B2C9ED]">
              AIRegReady provides educational information and practical
              resources. It is not a law firm and does not provide legal advice.
              Resources are starting points for internal governance work and
              should be reviewed with qualified counsel for specific legal
              obligations.
            </p>
          </div>
        </section>
      </div>
    </>
  )
}
