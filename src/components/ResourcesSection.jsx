const resources = [
  {
    title: 'Frameworks',
    desc: 'Side-by-side comparison of major AI governance frameworks',
    href: '/compare',
  },
  {
    title: 'Checklists',
    desc: 'Step-by-step checklists for AI adoption, governance, and vendor review',
    href: null,
  },
  {
    title: 'Templates',
    desc: 'Starter templates for AI policies, acceptable use, and risk assessments',
    href: null,
  },
  {
    title: 'Regulations',
    desc: 'Plain-English breakdowns of AI laws across the EU, U.S., and beyond',
    href: '/regulations',
  },
]

const cardClasses =
  'bg-surface border border-border rounded-xl p-7 block transition-all duration-300 no-underline'

export default function ResourcesSection() {
  return (
    <section
      id="resources"
      className="py-24 px-6 max-w-[1280px] mx-auto"
      aria-labelledby="resources-heading"
    >
      <div className="text-center mb-14">
        <div className="font-sans text-xs font-bold uppercase tracking-[0.12em] text-accent mb-3">
          Resource Library
        </div>
        <h2
          id="resources-heading"
          className="font-serif text-4xl sm:text-[42px] font-bold text-primary"
        >
          Browse by Topic
        </h2>
        <p className="font-sans text-base text-secondary mt-3 max-w-[620px] mx-auto leading-relaxed">
          Frameworks, templates, regulations, and checklists &mdash; all in
          plain English, all free.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {resources.map((resource) =>
          resource.href ? (
            <a
              key={resource.title}
              href={resource.href}
              className={`${cardClasses} hover:border-accent/50 hover:shadow-[0_2px_16px_rgba(158,122,86,0.08)] group`}
            >
              <h3 className="font-sans text-[17px] font-bold text-primary mb-2">
                {resource.title}
              </h3>
              <p className="font-sans text-sm text-secondary leading-relaxed mb-3">
                {resource.desc}
              </p>
              <span className="font-sans text-sm font-semibold text-accent group-hover:text-accent-dark transition-colors">
                View &rarr;
              </span>
            </a>
          ) : (
            <div
              key={resource.title}
              className={`${cardClasses} opacity-80`}
            >
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-sans text-[17px] font-bold text-primary">
                  {resource.title}
                </h3>
                <span className="font-sans text-[11px] font-bold uppercase tracking-wide text-accent bg-accent/10 px-2.5 py-1 rounded-full">
                  Coming Soon
                </span>
              </div>
              <p className="font-sans text-sm text-secondary leading-relaxed">
                {resource.desc}
              </p>
            </div>
          )
        )}
      </div>
    </section>
  )
}
