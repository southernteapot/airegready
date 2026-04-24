import Link from 'next/link'
import { buildPageMetadata } from '@/lib/seo'

export const metadata = buildPageMetadata({
  title: 'Contact AIRegReady',
  description:
    'Contact AIRegReady about practical AI governance resources, catalog questions, corrections, and general inquiries.',
  path: '/contact',
})

const contactCards = [
  {
    title: 'Catalog questions',
    body: 'Ask about resource availability, what a document package includes, or which starting point may fit your internal governance work.',
  },
  {
    title: 'Corrections and updates',
    body: 'Send source links, outdated references, or suggested improvements for AI regulation summaries and practical resources.',
  },
  {
    title: 'Consultant and team use',
    body: 'Reach out about using AIRegReady resources for workshops, staff training, client education, or internal operating playbooks.',
  },
]

export default function ContactPage() {
  return (
    <div className="overflow-x-hidden bg-[#F3F6FA] text-[#0B1B2F] dark:bg-[#09111D] dark:text-white">
      <section className="relative overflow-hidden border-b border-[#1E3147] bg-[#07111F] px-4 pb-12 pt-24 text-white sm:px-6">
        <div
          className="absolute inset-0 bg-[radial-gradient(circle_at_18%_24%,rgba(44,166,164,0.16),transparent_32%),radial-gradient(circle_at_82%_18%,rgba(47,128,194,0.18),transparent_30%)]"
          aria-hidden="true"
        />
        <div className="relative mx-auto grid min-w-0 max-w-[1180px] grid-cols-1 gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div className="min-w-0">
            <p className="font-sans text-xs font-black uppercase tracking-[0.16em] text-cyan-200">
              Contact AIRegReady
            </p>
            <h1 className="mt-4 max-w-[12ch] break-words font-sans text-[30px] font-extrabold leading-[1.08] tracking-tight text-white min-[430px]:max-w-[720px] min-[430px]:text-[34px] sm:text-5xl">
              <span>Questions about AI</span>{' '}
              <span className="block sm:inline">governance</span>{' '}
              <span className="block sm:inline">resources?</span>
            </h1>
            <p className="mt-5 max-w-[34ch] break-words font-sans text-base leading-relaxed text-[#D8E6F5] min-[430px]:max-w-[680px] sm:text-lg">
              <span className="block sm:inline">Contact us about the resource catalog,</span>{' '}
              <span className="block sm:inline">corrections, licensing questions,</span>{' '}
              <span className="block sm:inline">or practical AI governance education.</span>{' '}
              <span className="block sm:inline">AIRegReady does not provide legal advice.</span>
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <a
                href="mailto:info@airegready.com"
                className="inline-flex min-h-11 items-center justify-center rounded-lg bg-[#0F5E9C] px-5 py-3 font-sans text-sm font-bold text-white no-underline shadow-[0_14px_30px_-22px_rgba(15,94,156,0.95)] transition hover:bg-[#0B4A7D]"
              >
                Email info@airegready.com
              </a>
              <Link
                href="/catalog"
                className="inline-flex min-h-11 items-center justify-center rounded-lg border border-white/[0.22] bg-white/[0.08] px-5 py-3 font-sans text-sm font-bold text-white no-underline shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] backdrop-blur-md transition hover:border-cyan-200/60 hover:bg-white/[0.13]"
              >
                Browse the catalog
              </Link>
            </div>
          </div>

          <div className="min-w-0 max-w-full overflow-hidden rounded-2xl border border-white/[0.14] bg-[#050B16]/88 p-5 shadow-[0_34px_90px_-70px_rgba(0,0,0,0.9)]">
            <div className="min-w-0 max-w-full overflow-hidden rounded-xl border border-white/[0.12] bg-[#0B1626] p-5">
              <p className="font-sans text-xs font-black uppercase tracking-[0.14em] text-[#9BE1DC]">
                Best way to reach us
              </p>
              <h2 className="mt-2 max-w-[22ch] break-words font-sans text-2xl font-black leading-tight text-white sm:max-w-none">
                <span className="block sm:inline">Tell us which resource,</span>{' '}
                <span className="block sm:inline">page, or use case</span>{' '}
                <span className="block sm:inline">you mean.</span>
              </h2>
              <dl className="mt-5 grid gap-3">
                {[
                  ['Response focus', 'Resource questions, corrections, and general inquiries'],
                  ['Legal boundary', 'Educational information only, not legal advice'],
                  ['Catalog focus', 'Templates, checklists, trackers, guides, and training materials'],
                ].map(([term, detail]) => (
                  <div
                    key={term}
                    className="min-w-0 max-w-full overflow-hidden rounded-lg border border-white/[0.1] bg-white/[0.06] p-4"
                  >
                    <dt className="font-sans text-[11px] font-black uppercase tracking-[0.12em] text-cyan-100">
                      {term}
                    </dt>
                    <dd className="mt-1 break-words font-sans text-sm font-semibold leading-relaxed text-[#D8E6F5]">
                      {detail}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 sm:py-20" aria-labelledby="contact-options-heading">
        <div className="mx-auto max-w-[1180px]">
          <div className="max-w-[760px] min-w-0">
            <p className="font-sans text-xs font-black uppercase tracking-[0.16em] text-[#0F6B8F] dark:text-cyan-300">
              What to send
            </p>
            <h2
              id="contact-options-heading"
              className="mt-3 break-words font-sans text-3xl font-black leading-tight tracking-tight text-[#0B1B2F] sm:text-4xl dark:text-white"
            >
              Practical questions get the clearest answers.
            </h2>
            <p className="mt-4 break-words font-sans text-base leading-relaxed text-[#52677F] dark:text-slate-300">
              Include the page or resource you are asking about, the type of
              organization you are working with, and whether the question is
              about content, availability, or a correction.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-3">
            {contactCards.map((card) => (
              <article
                key={card.title}
                className="min-w-0 rounded-2xl border border-[#C9D7E6] bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-950"
              >
                <h3 className="break-words font-sans text-lg font-black leading-tight text-[#0B1B2F] dark:text-white">
                  {card.title}
                </h3>
                <p className="mt-3 font-sans text-sm leading-relaxed text-[#52677F] dark:text-slate-300">
                  {card.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-12 sm:px-6 dark:bg-slate-950" aria-labelledby="contact-boundary-heading">
        <div className="mx-auto max-w-[980px] rounded-2xl border border-[#C9D7E6] bg-[#F8FAFD] p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
          <h2
            id="contact-boundary-heading"
            className="font-sans text-2xl font-black text-[#0B1B2F] dark:text-white"
          >
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
