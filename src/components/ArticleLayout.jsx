import Breadcrumb from './Breadcrumb'
import Disclaimer from './Disclaimer'
import { ContentBlock, renderText } from './ContentRenderer'

export default function ArticleLayout({ article }) {
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

        {/* Content Sections */}
        {article.sections.map((section, i) => (
          <section key={i} className="mb-8">
            {section.title && (
              <h2 className="font-serif text-xl sm:text-2xl font-bold text-primary mb-4 mt-10">
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
                  <span className="text-accent text-xs">&#8599;</span>
                  {source.title}
                </a>
              ))}
            </div>
          </section>
        )}

        <Disclaimer />
      </article>
    </div>
  )
}
