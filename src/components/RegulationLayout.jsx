import Breadcrumb from './Breadcrumb'
import Disclaimer from './Disclaimer'
import { ContentBlock, renderText } from './ContentRenderer'

export default function RegulationLayout({ regulation, relatedArticles = [] }) {
  return (
    <div className="pt-28 pb-20 px-6">
      <div className="max-w-[820px] mx-auto">
        <Breadcrumb
          items={[
            { label: 'Home', href: '/' },
            { label: 'Regulations', href: '/regulations' },
            { label: regulation.shortTitle || regulation.title },
          ]}
        />

        {/* Header */}
        <header className="mb-10">
          <div className="flex items-start justify-between gap-4 mb-4">
            <div className="flex items-center gap-3">
              <span className="text-[36px]" role="img" aria-hidden="true">
                {regulation.icon}
              </span>
              <h1 className="font-serif text-3xl sm:text-4xl font-bold text-primary leading-tight">
                {regulation.title}
              </h1>
            </div>
            <span className="font-sans text-xs font-bold uppercase tracking-wide text-accent bg-accent/10 px-3 py-1.5 rounded-full whitespace-nowrap flex-shrink-0 mt-2">
              {regulation.status}
            </span>
          </div>
          <p className="font-sans text-base text-secondary leading-relaxed mb-3">
            {regulation.description}
          </p>
          <p className="font-sans text-xs text-secondary/70">
            Last reviewed: {regulation.lastReviewed}
          </p>
        </header>

        {/* Key Facts */}
        {regulation.keyFacts && (
          <div className="bg-surface border border-border/60 rounded-xl p-6 mb-10">
            <h2 className="font-sans text-sm font-bold uppercase tracking-wide text-accent mb-4">
              Key Facts
            </h2>
            <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3">
              {regulation.keyFacts.map((fact) => (
                <div key={fact.label}>
                  <dt className="font-sans text-xs text-secondary/70 font-medium">
                    {fact.label}
                  </dt>
                  <dd className="font-sans text-sm text-primary font-medium">
                    {renderText(fact.value)}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        )}

        {/* Table of Contents */}
        <nav aria-label="Table of contents" className="bg-surface border border-border/60 rounded-xl p-6 mb-12">
          <h2 className="font-sans text-sm font-bold uppercase tracking-wide text-accent mb-3">
            On This Page
          </h2>
          <ul className="flex flex-col gap-1.5">
            {regulation.sections.map((section) => (
              <li key={section.id}>
                <a
                  href={`#${section.id}`}
                  className="font-sans text-sm text-secondary hover:text-accent transition-colors"
                >
                  {section.title}
                </a>
              </li>
            ))}
            {regulation.timeline?.length > 0 && (
              <li>
                <a
                  href="#timeline"
                  className="font-sans text-sm text-secondary hover:text-accent transition-colors"
                >
                  Timeline
                </a>
              </li>
            )}
            <li>
              <a
                href="#sources"
                className="font-sans text-sm text-secondary hover:text-accent transition-colors"
              >
                Source Documents
              </a>
            </li>
          </ul>
        </nav>

        {/* Content Sections */}
        {regulation.sections.map((section) => (
          <section key={section.id} id={section.id} className="mb-12 scroll-mt-24">
            <h2 className="font-serif text-2xl font-bold text-primary mb-4">
              {section.title}
            </h2>
            <ContentBlock content={section.content} />

            {/* Definition items */}
            {section.items && (
              <dl className="mt-4 flex flex-col gap-3">
                {section.items.map((item) => (
                  <div
                    key={item.term}
                    className="bg-surface border border-border/60 rounded-lg p-4"
                  >
                    <dt className="font-sans text-sm font-bold text-primary mb-1">
                      {item.term}
                    </dt>
                    <dd className="font-sans text-sm text-secondary leading-relaxed">
                      {renderText(item.description)}
                    </dd>
                  </div>
                ))}
              </dl>
            )}

            {/* Bullet list */}
            {section.list && (
              <ul className="mt-4 flex flex-col gap-2">
                {section.list.map((item, i) => (
                  <li
                    key={i}
                    className="flex gap-2.5 font-sans text-sm text-secondary leading-relaxed"
                  >
                    <span className="text-accent mt-1 text-[8px]">&#9679;</span>
                    <span>{renderText(item)}</span>
                  </li>
                ))}
              </ul>
            )}

            {/* Table */}
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
                    {section.table.rows.map((row, i) => (
                      <tr key={i}>
                        {row.map((cell, j) => (
                          <td
                            key={j}
                            className={`font-sans text-sm text-secondary px-4 py-3 leading-relaxed bg-surface ${
                              i < section.table.rows.length - 1
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

        {/* Timeline */}
        {regulation.timeline && regulation.timeline.length > 0 && (
          <section id="timeline" className="mb-12 scroll-mt-24">
            <h2 className="font-serif text-2xl font-bold text-primary mb-6">
              Timeline
            </h2>
            <div className="flex flex-col">
              {regulation.timeline.map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div className="w-2.5 h-2.5 rounded-full bg-accent flex-shrink-0 mt-1.5" />
                    {i < regulation.timeline.length - 1 && (
                      <div className="w-px flex-1 bg-border" />
                    )}
                  </div>
                  <div className="pb-6">
                    <span className="font-sans text-xs font-bold text-accent uppercase tracking-wide">
                      {item.date}
                    </span>
                    <p className="font-sans text-sm text-secondary leading-relaxed mt-0.5">
                      {item.event}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Sources */}
        <section id="sources" className="mb-8 scroll-mt-24">
          <h2 className="font-serif text-2xl font-bold text-primary mb-4">
            Source Documents
          </h2>
          <div className="flex flex-col gap-2">
            {regulation.sources.map((source, i) => (
              <a
                key={i}
                href={source.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-surface border border-border/60 rounded-lg p-4 flex items-start gap-3 hover:border-accent/50 transition-colors group"
              >
                <span className="text-accent text-sm mt-0.5 flex-shrink-0" aria-hidden="true">
                  &#8599;
                </span>
                <div>
                  <span className="font-sans text-sm font-semibold text-primary group-hover:text-accent transition-colors">
                    {source.title}
                    <span className="sr-only"> (opens in new tab)</span>
                  </span>
                  {source.description && (
                    <p className="font-sans text-xs text-secondary mt-0.5">
                      {source.description}
                    </p>
                  )}
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* Related Articles */}
        {relatedArticles.length > 0 && (
          <section className="mb-8">
            <h2 className="font-sans text-sm font-bold uppercase tracking-wide text-accent mb-4">
              Related Articles
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {relatedArticles.map((article) => (
                <a
                  key={article.slug}
                  href={`/blog/${article.slug}`}
                  className="bg-surface border border-border/60 rounded-xl p-5 block transition-all duration-300 hover:border-accent/50 hover:shadow-[0_2px_16px_rgba(158,122,86,0.08)] no-underline"
                >
                  <div className="font-sans text-xs text-secondary mb-2">
                    {article.category} &middot; {article.displayDate} &middot;{' '}
                    {article.readTime}
                  </div>
                  <h3 className="font-sans text-sm font-bold text-primary leading-snug">
                    {article.title}
                  </h3>
                </a>
              ))}
            </div>
          </section>
        )}

        <Disclaimer />
      </div>
    </div>
  )
}
