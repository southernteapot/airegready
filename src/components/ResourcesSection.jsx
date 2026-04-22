import Link from 'next/link'

const resources = [
  {
    title: 'Regulations',
    desc: 'Plain-English breakdowns of AI laws across the EU, U.S., and beyond — what they require, who they affect, and what to do.',
    href: '/regulations',
    hero: true,
  },
  {
    title: 'Frameworks',
    desc: 'Side-by-side comparison of major AI governance frameworks.',
    href: '/compare',
  },
  {
    title: 'Checklists',
    desc: 'Step-by-step checklists for AI adoption, governance, and vendor review.',
    href: '/checklist',
  },
  {
    title: 'Timeline',
    desc: 'Key dates and deadlines across AI regulations — what is in effect, what is coming, and when.',
    href: '/timeline',
  },
]

const baseCard =
  'bg-surface border border-border/60 rounded-xl p-6 flex flex-col gap-3 transition-all duration-300 no-underline min-w-0'

export default function ResourcesSection() {
  return (
    <section
      id="resources"
      className="py-24 px-6 max-w-[1280px] mx-auto"
      aria-labelledby="resources-heading"
    >
      <div className="flex flex-wrap justify-between items-end gap-6 mb-12">
        <div className="max-w-[620px]">
          <div className="font-sans text-xs font-bold uppercase tracking-[0.12em] text-accent mb-3">
            Resource Library
          </div>
          <h2
            id="resources-heading"
            className="font-serif text-4xl sm:text-5xl font-bold text-primary leading-[1.05] tracking-tight"
          >
            Practical resources,<br />in plain English.
          </h2>
          <p className="font-sans text-base text-secondary mt-3 leading-relaxed">
            Regulations first &mdash; because they set the stakes &mdash; plus
            frameworks, checklists, and a live regulatory timeline.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {resources.map((resource) => {
          const spanClass = resource.hero
            ? 'md:col-span-3 md:p-8 md:gap-4'
            : 'md:col-span-1'

          if (!resource.href) {
            return (
              <div
                key={resource.title}
                className={`${baseCard} ${spanClass} opacity-85`}
              >
                <div className="flex justify-between items-start gap-3">
                  <h3 className={`font-sans font-bold text-primary ${resource.hero ? 'text-xl' : 'text-base'}`}>
                    {resource.title}
                  </h3>
                  <span className="font-sans text-xs font-bold uppercase tracking-wide text-accent bg-accent/10 px-2.5 py-1 rounded-full whitespace-nowrap">
                    Coming Soon
                  </span>
                </div>
                <p className="font-sans text-sm text-secondary leading-relaxed">
                  {resource.desc}
                </p>
              </div>
            )
          }

          return (
            <Link
              key={resource.title}
              href={resource.href}
              className={`${baseCard} ${spanClass} hover:border-accent/50 hover:shadow-[0_2px_16px_rgba(158,122,86,0.08)] group ${
                resource.hero ? 'bg-gradient-to-br from-accent/[0.04] to-transparent' : ''
              }`}
            >
              <h3
                className={`font-sans font-bold text-primary ${
                  resource.hero ? 'text-xl sm:text-2xl font-serif tracking-tight' : 'text-base'
                }`}
              >
                {resource.title}
              </h3>
              <p className={`font-sans text-secondary leading-relaxed ${resource.hero ? 'text-base max-w-[640px]' : 'text-sm'}`}>
                {resource.desc}
              </p>
              <span className="font-sans text-sm font-semibold text-accent group-hover:text-accent-dark transition-colors mt-auto">
                {resource.hero ? 'Browse all regulations' : 'View'} &rarr;
              </span>
            </Link>
          )
        })}
      </div>
    </section>
  )
}
