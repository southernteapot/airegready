import Image from 'next/image'
import Link from 'next/link'
import { buildPageMetadata } from '@/lib/seo'
import {
  getProductKind,
  productCards,
  starterContents,
  trackedTopics,
} from '@/lib/marketing'

export const metadata = buildPageMetadata({
  title: 'AI Governance Catalog - AIRegReady',
  description:
    'Browse AI governance starter kits, acceptable use policy kits, risk tools, vendor review packets, training resources, and jurisdiction guides.',
  path: '/catalog',
})

function PrimaryLink({ href, children }) {
  return (
    <Link
      href={href}
      className="inline-flex min-h-11 items-center justify-center rounded-lg bg-[#0F5E9C] px-5 py-3 font-sans text-sm font-bold text-white no-underline shadow-[0_14px_30px_-22px_rgba(15,94,156,0.95)] transition hover:bg-[#0B4A7D]"
    >
      {children}
    </Link>
  )
}

function SecondaryLink({ href, children }) {
  return (
    <Link
      href={href}
      className="inline-flex min-h-11 items-center justify-center rounded-lg border border-white/[0.22] bg-white/[0.08] px-5 py-3 font-sans text-sm font-bold text-white no-underline shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] backdrop-blur-md transition hover:border-cyan-200/60 hover:bg-white/[0.13]"
    >
      {children}
    </Link>
  )
}

function SectionHeader({ eyebrow, title, body, id, compact = false }) {
  return (
    <div className={compact ? 'max-w-[760px]' : 'mx-auto max-w-[860px] text-center'}>
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

export default function KitsPage() {
  return (
    <div className="overflow-x-hidden bg-[#F3F6FA] text-[#0B1B2F] dark:bg-[#09111D] dark:text-white">
      <section className="relative overflow-hidden border-b border-[#1E3147] bg-[#07111F] px-4 pb-12 pt-24 text-white sm:px-6" aria-labelledby="kits-heading">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_24%,rgba(44,166,164,0.16),transparent_32%),radial-gradient(circle_at_82%_16%,rgba(47,128,194,0.18),transparent_30%)]" aria-hidden="true" />
        <div className="relative mx-auto grid min-w-0 max-w-[1240px] grid-cols-1 gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
          <div className="min-w-0">
            <p className="font-sans text-xs font-black uppercase tracking-[0.16em] text-cyan-200">
              AI governance resource catalog
            </p>
            <h1 id="kits-heading" className="mt-4 max-w-[13ch] break-words font-sans text-[30px] font-extrabold leading-[1.08] tracking-tight text-white min-[430px]:max-w-[720px] min-[430px]:text-[34px] sm:text-5xl">
              <span>AI governance resources</span>{' '}
              <span className="block sm:inline">for practical documentation.</span>
            </h1>
            <p className="mt-5 max-w-[34ch] break-words font-sans text-base leading-relaxed text-[#D8E6F5] min-[430px]:max-w-[720px] sm:text-lg">
              <span className="block sm:inline">Browse educational templates, checklists, trackers, guides, and document packages for internal AI governance work.</span>{' '}
              <span className="block sm:inline">No resource promises compliance or replaces qualified legal advice.</span>
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <PrimaryLink href="#kit-catalog">Browse all resources</PrimaryLink>
              <SecondaryLink href="/assessment">Take the readiness assessment</SecondaryLink>
            </div>
          </div>
          <div className="min-w-0 max-w-full overflow-hidden rounded-2xl border border-cyan-200/[0.14] bg-[#050B16] p-3 shadow-[0_36px_96px_-68px_rgba(0,0,0,0.9)]">
            <Image
              src="/assets/airegready-home-v3-starter-kit.png"
              width="1586"
              height="992"
              alt="AI governance starter kit product preview with organized policy packets, checklists, and tabbed resources."
              className="aspect-[16/10] h-auto w-full rounded-xl object-cover"
              priority
            />
          </div>
        </div>
      </section>

      <section id="starter-kit" className="bg-[#0B1B2F] px-4 py-16 text-white sm:px-6 sm:py-20" aria-labelledby="starter-heading">
        <div className="mx-auto grid min-w-0 max-w-[1240px] grid-cols-1 gap-6 lg:grid-cols-[0.86fr_1.14fr]">
          <div className="min-w-0 rounded-2xl border border-white/[0.14] bg-white/[0.06] p-6 sm:p-8">
            <p className="font-sans text-xs font-black uppercase tracking-[0.16em] text-[#9BE1DC]">Flagship kit</p>
            <h2 id="starter-heading" className="mt-3 break-words font-sans text-3xl font-black leading-tight tracking-tight sm:text-4xl">
              AI Governance Starter Kit
            </h2>
            <p className="mt-4 break-words font-sans text-base leading-relaxed text-[#CFE0F2]">
              A practical starting package for teams that need a credible,
              editable governance file before AI use grows further. Use it to
              document tools, assign ownership, review vendors, train staff, and
              keep update notes in one organized place.
            </p>
            <p className="mt-4 font-sans text-sm leading-relaxed text-[#ADC4DE]">
              Educational starting point only. Review specific obligations with
              qualified counsel.
            </p>
          </div>
          <div className="min-w-0 max-w-full overflow-hidden rounded-2xl border border-white/[0.14] bg-[#F8FAFD] p-5 text-[#0B1B2F] shadow-[0_34px_90px_-70px_rgba(0,0,0,0.9)]">
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
                <div key={item} className="min-w-0 rounded-xl border border-[#D6E2EF] bg-white p-4">
                  <span className="font-sans text-xs font-black text-[#7B8DA3]">0{index + 1}</span>
                  <p className="mt-2 font-sans text-sm font-black text-[#0B1B2F]">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="kit-catalog" className="px-4 py-16 sm:px-6 sm:py-20" aria-labelledby="catalog-heading">
        <div className="mx-auto max-w-[1320px]">
          <SectionHeader
            id="catalog-heading"
            eyebrow="Full catalog"
            title="Choose the resource package that fits the governance job."
            body="Each resource is framed as an educational starting point for internal governance work. Do not treat templates as legal advice or a compliance guarantee."
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

      <section id="tracked-topics" className="bg-white px-4 py-16 sm:px-6 sm:py-20 dark:bg-slate-950" aria-labelledby="tracked-heading">
        <div className="mx-auto max-w-[1040px]">
          <SectionHeader
            id="tracked-heading"
            eyebrow="Tracked topics"
            title="Resource updates follow the AI governance topics teams ask about."
            body="Tracked topics are used for educational updates, checklists, and preparation prompts. They are not legal determinations for a specific organization."
          />
          <div className="mt-8 flex flex-wrap justify-center gap-2">
            {trackedTopics.map((topic) => (
              <span key={topic} className="rounded-full border border-[#D6E2EF] bg-[#F8FAFD] px-3 py-1.5 font-sans text-xs font-black text-[#0F5E9C] shadow-sm dark:border-slate-800 dark:bg-slate-900 dark:text-cyan-300">
                {topic}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-12 sm:px-6" aria-labelledby="kits-legal-heading">
        <div className="mx-auto max-w-[980px] rounded-2xl border border-[#C9D7E6] bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-950">
          <h2 id="kits-legal-heading" className="font-sans text-2xl font-black text-[#0B1B2F] dark:text-white">
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
  )
}
