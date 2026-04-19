const themes = [
  {
    num: '01',
    title: 'Practical Use Cases',
    desc: 'AI applications that solve real problems — not shiny demos.',
  },
  {
    num: '02',
    title: 'Lightweight Guardrails',
    desc: 'Frameworks and templates for basic AI policies without the overhead.',
  },
  {
    num: '03',
    title: 'Real Risks &amp; Clear Next Steps',
    desc: 'Plain-English breakdowns of what matters and checklists to figure out where to focus first.',
  },
]

export default function HowItWorks() {
  return (
    <section
      className="py-24 px-6 max-w-[1280px] mx-auto"
      aria-labelledby="how-heading"
    >
      <div className="flex flex-wrap justify-between items-end gap-6 mb-12">
        <div className="max-w-[620px]">
          <div className="font-sans text-xs font-bold uppercase tracking-[0.12em] text-accent mb-3">
            What This Site Covers
          </div>
          <h2
            id="how-heading"
            className="font-serif text-4xl sm:text-5xl font-bold text-primary leading-[1.05] tracking-tight"
          >
            Getting oriented on AI,<br />without the rabbit hole.
          </h2>
          <p className="font-sans text-base text-secondary mt-3 leading-relaxed">
            Whether you&apos;re adopting AI for the first time or reviewing
            what you already have in place.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 border-t border-border/60 pt-10">
        {themes.map((theme) => (
          <div key={theme.num} className="flex flex-col gap-3">
            <div className="font-mono text-xs font-semibold tracking-[0.14em] text-accent">
              {theme.num}
            </div>
            <h3 className="font-serif text-2xl font-bold text-primary leading-tight tracking-tight"
                dangerouslySetInnerHTML={{__html: theme.title}} />
            <p className="font-sans text-sm text-secondary leading-relaxed">
              {theme.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
