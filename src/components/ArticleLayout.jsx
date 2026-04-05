import Link from 'next/link'
import Breadcrumb from './Breadcrumb'
import Disclaimer from './Disclaimer'
import { ContentBlock, renderText } from './ContentRenderer'
import { getRegulation } from '@/lib/regulations'

function TableOfContents({ sections }) {
  const headings = sections.filter((s) => s.title).map((s) => s.title)
  if (headings.length < 3) return null

  return (
    <nav className="bg-surface border border-border/60 rounded-xl p-5 sm:p-6 mb-10" aria-label="Table of contents">
      <h2 className="font-sans text-xs font-bold uppercase tracking-[0.12em] text-accent mb-3">
        In This Article
      </h2>
      <ul className="flex flex-col gap-1.5">
        {headings.map((title) => {
          const id = title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')
          return (
            <li key={id}>
              <a
                href={`#${id}`}
                className="font-sans text-sm text-secondary hover:text-accent transition-colors no-underline"
              >
                {title}
              </a>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

function RelatedResources({ article }) {
  const resources = []

  if (article.slug !== 'ai-use-policy-starter') {
    resources.push({
      title: 'AI Readiness Checklist',
      href: '/checklist',
      desc: 'A practical checklist for getting AI-ready',
    })
  }
  if (article.slug !== 'minimum-viable-guardrails' && article.slug !== 'ai-compliance-startups') {
    resources.push({
      title: 'AI Readiness Assessment',
      href: '/assessment',
      desc: '8 questions to see where you stand',
    })
  }

  if (resources.length === 0) return null

  return (
    <section className="mt-10 pt-8 border-t border-border/60">
      <h2 className="font-sans text-xs font-bold uppercase tracking-[0.12em] text-accent mb-4">
        Related Resources
      </h2>
      <div className="grid gap-3 sm:grid-cols-2">
        {resources.map((r) => (
          <Link
            key={r.href}
            href={r.href}
            className="block bg-surface border border-border/60 rounded-xl p-5 hover:border-accent/50 transition-all no-underline"
          >
            <div className="font-serif text-[15px] font-bold text-primary mb-1">
              {r.title}
            </div>
            <p className="font-sans text-xs text-secondary">{r.desc}</p>
          </Link>
        ))}
      </div>
    </section>
  )
}

export default function ArticleLayout({ article }) {
  const relatedRegs = (article.relatedRegulations || [])
    .map((slug) => getRegulation(slug))
    .filter(Boolean)
  return (
    <div className="pt-28 pb-20 px-6">
      <article className="max-w-[720px] mx-auto">
        <Breadcrumb
          items={[
            { label: 'Home', href: '/' },
            { label: 'Blog', href: '/blog' },
            { label: article.title },
          ]}
        />

        {/* Header */}
        <header className="mb-10">
          <div className="flex flex-wrap gap-2 items-center mb-4 font-sans text-[13px] text-secondary">
            <span className="font-bold uppercase tracking-wide text-accent bg-accent/10 px-2.5 py-1 rounded-full text-[11px]">
              {article.category}
            </span>
            <span>
              <time>{article.displayDate}</time> &middot; {article.readTime}
            </span>
          </div>
          <h1 className="font-serif text-3xl sm:text-[38px] font-bold text-primary leading-tight">
            {article.title}
          </h1>
        </header>

        {/* Table of Contents */}
        <TableOfContents sections={article.sections} />

        {/* Content Sections */}
        {article.sections.map((section, i) => (
          <section key={i} className="mb-8">
            {section.title && (
              <h2
                id={section.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')}
                className="font-serif text-xl sm:text-2xl font-bold text-primary mb-4 mt-10 scroll-mt-24"
              >
                {section.title}
              </h2>
            )}
            <ContentBlock content={section.content} />

            {section.list && (
              <ul className="mt-4 flex flex-col gap-2">
                {section.list.map((item, j) => (
                  <li
                    key={j}
                    className="flex gap-2.5 font-sans text-[15px] text-secondary leading-relaxed"
                  >
                    <span className="text-accent mt-1 text-[8px]">&#9679;</span>
                    <span>{renderText(item)}</span>
                  </li>
                ))}
              </ul>
            )}

            {section.table && (
              <div className="mt-4 overflow-x-auto rounded-lg border border-border">
                <table className="w-full border-collapse">
                  <thead>
                    <tr>
                      {section.table.headers.map((h) => (
                        <th
                          key={h}
                          className="bg-accent/10 font-sans text-xs font-bold uppercase tracking-wide text-accent px-4 py-3 text-left border-b border-border"
                        >
                          {h}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {section.table.rows.map((row, ri) => (
                      <tr key={ri}>
                        {row.map((cell, ci) => (
                          <td
                            key={ci}
                            className={`font-sans text-sm text-secondary px-4 py-3 leading-relaxed bg-surface ${
                              ri < section.table.rows.length - 1
                                ? 'border-b border-border'
                                : ''
                            }`}
                          >
                            {renderText(cell)}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </section>
        ))}

        {/* Key Takeaways */}
        {article.takeaways && article.takeaways.length > 0 && (
          <div className="bg-accent/10 border border-accent/20 rounded-xl p-6 my-10">
            <h2 className="font-sans text-sm font-bold uppercase tracking-wide text-accent mb-3">
              Key Takeaways
            </h2>
            <ul className="flex flex-col gap-2">
              {article.takeaways.map((item, i) => (
                <li
                  key={i}
                  className="flex gap-2.5 font-sans text-[15px] text-accent-dark leading-relaxed"
                >
                  <span className="text-accent mt-1 text-[8px]">&#9679;</span>
                  <span>{renderText(item)}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Related Regulations */}
        {relatedRegs.length > 0 && (
          <section className="mb-8">
            <h2 className="font-sans text-sm font-bold uppercase tracking-wide text-accent mb-3">
              Related Regulations
            </h2>
            <div className="flex flex-col gap-2">
              {relatedRegs.map((reg) => (
                <a
                  key={reg.slug}
                  href={`/regulations/${reg.slug}`}
                  className="bg-surface border border-border rounded-lg p-4 flex items-start gap-3 hover:border-accent/50 transition-colors group no-underline"
                >
                  <span className="text-[24px] flex-shrink-0 mt-0.5" role="img" aria-hidden="true">
                    {reg.icon}
                  </span>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-sans text-sm font-semibold text-primary group-hover:text-accent transition-colors">
                        {reg.title}
                      </span>
                      <span className="font-sans text-[10px] font-bold uppercase tracking-wide text-accent bg-accent/10 px-2 py-0.5 rounded-full flex-shrink-0">
                        {reg.status}
                      </span>
                    </div>
                    <p className="font-sans text-xs text-secondary leading-relaxed line-clamp-2">
                      {reg.description}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </section>
        )}

        {/* Sources */}
        {article.sources && article.sources.length > 0 && (
          <section className="mb-8">
            <h2 className="font-sans text-sm font-bold uppercase tracking-wide text-accent mb-3">
              Sources &amp; References
            </h2>
            <div className="flex flex-col gap-2">
              {article.sources.map((source, i) => (
                <a
                  key={i}
                  href={source.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-sans text-sm text-secondary hover:text-accent transition-colors flex items-center gap-2"
                >
                  <span className="text-accent text-xs" aria-hidden="true">&#8599;</span>
                  {source.title}
                  <span className="sr-only"> (opens in new tab)</span>
                </a>
              ))}
            </div>
          </section>
        )}

        <Disclaimer />

        {/* Related Resources */}
        <RelatedResources article={article} />
      </article>
    </div>
  )
}
