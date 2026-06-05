import Link from 'next/link'
import { absoluteUrl } from '@/lib/seo'

function PrimaryLink({ href, children }) {
  return (
    <Link
      href={href}
      className="inline-flex min-h-11 items-center justify-center rounded-lg bg-[#174EA6] px-5 py-3 font-sans text-sm font-bold text-white no-underline shadow-[0_16px_34px_-24px_rgba(23,78,166,0.95)] transition hover:bg-[#2C6BFF]"
    >
      {children}
    </Link>
  )
}

function SecondaryLink({ href, children }) {
  return (
    <Link
      href={href}
      className="inline-flex min-h-11 items-center justify-center rounded-lg border border-white/[0.22] bg-white/[0.08] px-5 py-3 font-sans text-sm font-bold text-white no-underline shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] transition hover:border-cyan-200/60 hover:bg-white/[0.13]"
    >
      {children}
    </Link>
  )
}

function buildSchema(page) {
  const url = absoluteUrl(`/${page.slug}`)
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id': url,
        name: page.title,
        description: page.description,
        url,
        mainEntity: {
          '@id': `${url}#guide`,
        },
      },
      {
        '@type': 'HowTo',
        '@id': `${url}#guide`,
        name: page.title,
        description: page.intro,
        step: page.firstHour.map((item, index) => ({
          '@type': 'HowToStep',
          position: index + 1,
          text: item,
        })),
      },
      {
        '@type': 'FAQPage',
        '@id': `${url}#faq`,
        mainEntity: page.faq.map(([question, answer]) => ({
          '@type': 'Question',
          name: question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: answer,
          },
        })),
      },
    ],
  }
}

export default function DiscoveryLandingPage({ page }) {
  const schema = buildSchema(page)

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <div className="overflow-x-hidden bg-[#07111F] text-white">
        <section className="relative overflow-hidden border-b border-white/[0.06] bg-[#07111F] px-4 pb-14 pt-24 text-white sm:px-6">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_24%,rgba(88,212,255,0.14),transparent_32%),radial-gradient(circle_at_82%_16%,rgba(44,107,255,0.16),transparent_30%)]" aria-hidden="true" />
          <div className="relative mx-auto grid max-w-[1180px] grid-cols-1 gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
            <div>
              <p className="font-sans text-xs font-black uppercase tracking-[0.16em] text-[#8EF1FF]">
                {page.eyebrow}
              </p>
              <h1 className="mt-4 max-w-[760px] break-words font-sans text-[34px] font-extrabold leading-[1.08] tracking-tight text-white sm:text-5xl">
                {page.title}
              </h1>
              <p className="mt-5 max-w-[720px] font-sans text-base leading-relaxed text-[#D8E6F5] sm:text-lg">
                {page.searchIntent}
              </p>
              <p className="mt-4 max-w-[720px] font-sans text-sm leading-relaxed text-[#B2C9ED] sm:text-base">
                {page.intro}
              </p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <PrimaryLink href="/catalog/ai-governance-starter-kit">Get the Starter Kit</PrimaryLink>
                <SecondaryLink href="/checklist">Use the free checklist</SecondaryLink>
              </div>
            </div>
            <aside className="rounded-2xl border border-cyan-200/[0.14] bg-[#050B16] p-5 shadow-[0_36px_96px_-68px_rgba(0,0,0,0.9)] sm:p-6">
              <p className="font-sans text-xs font-black uppercase tracking-[0.16em] text-cyan-300">
                First-hour plan
              </p>
              <h2 className="mt-3 font-sans text-2xl font-black leading-tight text-white">
                Start with a visible working file.
              </h2>
              <ol className="mt-5 grid grid-cols-1 gap-3">
                {page.firstHour.map((item, index) => (
                  <li key={item} className="rounded-xl border border-slate-800 bg-slate-900 p-4">
                    <span className="font-sans text-xs font-black text-cyan-300">{String(index + 1).padStart(2, '0')}</span>
                    <p className="mt-2 font-sans text-sm leading-relaxed text-[#D8E6F5]">{item}</p>
                  </li>
                ))}
              </ol>
            </aside>
          </div>
        </section>

        <section className="bg-gradient-to-b from-[#07111F] to-[#091321] px-4 py-16 text-white sm:px-6 sm:py-20">
          <div className="mx-auto grid max-w-[1180px] grid-cols-1 gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            <section className="rounded-2xl border border-white/[0.14] bg-slate-950 p-6 shadow-[0_34px_90px_-70px_rgba(0,0,0,0.9)]">
              <p className="font-sans text-xs font-black uppercase tracking-[0.16em] text-cyan-300">
                Practical checklist
              </p>
              <h2 className="mt-3 font-sans text-3xl font-black leading-tight text-white">
                {page.checklistTitle}
              </h2>
              <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {page.checklist.map((item) => (
                  <div key={item} className="flex gap-3 rounded-xl border border-slate-800 bg-slate-900 p-4">
                    <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-[#58D4FF]" aria-hidden="true" />
                    <p className="font-sans text-sm leading-relaxed text-[#B2C9ED]">{item}</p>
                  </div>
                ))}
              </div>
            </section>

            <aside className="rounded-2xl border border-white/[0.14] bg-[#050B16] p-6 shadow-[0_34px_90px_-70px_rgba(0,0,0,0.9)]">
              <p className="font-sans text-xs font-black uppercase tracking-[0.16em] text-cyan-300">
                Where the kit fits
              </p>
              <h2 className="mt-3 font-sans text-2xl font-black leading-tight text-white">
                Move from notes to editable documents.
              </h2>
              <p className="mt-4 font-sans text-sm leading-relaxed text-[#B2C9ED]">
                {page.kitFit}
              </p>
              <div className="mt-6 flex flex-col gap-3">
                <PrimaryLink href="/catalog/ai-governance-starter-kit">View included documents</PrimaryLink>
                <SecondaryLink href="/catalog/ai-governance-starter-kit#faq">Read buyer FAQ</SecondaryLink>
              </div>
            </aside>
          </div>
        </section>

        <section className="bg-gradient-to-b from-[#091321] to-[#0A1524] px-4 py-16 text-white sm:px-6 sm:py-20">
          <div className="mx-auto grid max-w-[1180px] grid-cols-1 gap-6 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="font-sans text-xs font-black uppercase tracking-[0.16em] text-[#8EF1FF]">
                Related resources
              </p>
              <h2 className="mt-3 font-sans text-3xl font-black leading-tight text-white">
                Keep going without losing the thread.
              </h2>
              <p className="mt-4 font-sans text-base leading-relaxed text-[#B2C9ED]">
                These pages connect the search question to the free checklist,
                the paid Starter Kit, and deeper preview resources where they fit.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-3">
              {page.related.map(([label, href]) => (
                <Link
                  key={href}
                  href={href}
                  className="rounded-2xl border border-slate-800 bg-slate-950 p-5 font-sans text-sm font-black text-white no-underline transition hover:border-cyan-300/60 hover:bg-slate-900"
                >
                  {label} <span aria-hidden="true">-&gt;</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section id="faq" className="bg-gradient-to-b from-[#0A1524] to-[#07111F] px-4 py-16 text-white sm:px-6 sm:py-20">
          <div className="mx-auto max-w-[980px]">
            <p className="font-sans text-xs font-black uppercase tracking-[0.16em] text-[#8EF1FF]">
              Short answers
            </p>
            <h2 className="mt-3 font-sans text-3xl font-black leading-tight text-white">
              Common questions before you use a template.
            </h2>
            <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2">
              {page.faq.map(([question, answer]) => (
                <article key={question} className="rounded-2xl border border-slate-800 bg-slate-950 p-5">
                  <h3 className="font-sans text-lg font-black leading-snug text-white">{question}</h3>
                  <p className="mt-3 font-sans text-sm leading-relaxed text-[#B2C9ED]">{answer}</p>
                </article>
              ))}
            </div>
            <p className="mt-8 rounded-2xl border border-slate-800 bg-slate-950 p-5 font-sans text-sm leading-relaxed text-[#B2C9ED]">
              AIRegReady materials are educational templates and informational
              starting points only. They are not legal advice and do not
              guarantee compliance with any law, regulation, contract, or
              industry requirement.
            </p>
          </div>
        </section>
      </div>
    </>
  )
}
