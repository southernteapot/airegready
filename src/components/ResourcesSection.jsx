const resources = [
  {
    title: 'Regulatory Comparison',
    desc: 'Side-by-side comparison of 6 major AI frameworks',
    href: '/compare',
  },
  {
    title: 'AI Compliance Glossary',
    desc: '48 key terms explained in plain language',
    href: '/glossary',
  },
  {
    title: 'Regulatory Timeline',
    desc: 'Key dates and upcoming deadlines across all frameworks',
    href: '/timeline',
  },
  {
    title: 'Risk Assessment',
    desc: '7 questions to identify your compliance obligations',
    href: '/assessment',
  },
]

export default function ResourcesSection() {
  return (
    <section
      className="py-20 px-6 max-w-[1100px] mx-auto"
      aria-labelledby="resources-heading"
    >
      <div className="text-center mb-14">
        <div className="font-sans text-xs font-bold uppercase tracking-[0.12em] text-accent mb-3">
          Resources
        </div>
        <h2
          id="resources-heading"
          className="font-serif text-3xl sm:text-4xl font-bold text-primary"
        >
          Tools to Navigate AI Regulation
        </h2>
        <p className="font-sans text-base text-secondary mt-3 max-w-[560px] mx-auto leading-relaxed">
          Free resources built to help you understand and act on AI compliance
          requirements.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {resources.map((resource) => (
          <a
            key={resource.href}
            href={resource.href}
            className="bg-surface border border-border rounded-xl p-7 block transition-all duration-300 hover:border-accent/50 hover:shadow-[0_2px_16px_rgba(158,122,86,0.08)] no-underline group"
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
        ))}
      </div>
    </section>
  )
}
