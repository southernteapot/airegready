const themes = [
  {
    num: '01',
    title: 'Practical Use Cases',
    desc: 'Information on AI applications that solve real problems \u2014 not shiny demos.',
  },
  {
    num: '02',
    title: 'Lightweight Guardrails',
    desc: 'Frameworks and templates for putting basic AI policies in place without the overhead.',
  },
  {
    num: '03',
    title: 'Real Risks',
    desc: 'Plain-English breakdowns of the regulatory and operational risks that actually matter.',
  },
  {
    num: '04',
    title: 'Clear Next Steps',
    desc: 'Assessments and checklists to figure out where you stand and what to focus on first.',
  },
]

export default function HowItWorks() {
  return (
    <section
      className="py-20 px-6 max-w-[1100px] mx-auto"
      aria-labelledby="how-heading"
    >
      <div className="text-center mb-14">
        <div className="font-sans text-xs font-bold uppercase tracking-[0.12em] text-accent mb-3">
          What This Site Covers
        </div>
        <h2
          id="how-heading"
          className="font-serif text-3xl sm:text-4xl font-bold text-primary"
        >
          Getting Oriented on AI
        </h2>
        <p className="font-sans text-base text-secondary mt-3 max-w-[520px] mx-auto leading-relaxed">
          Whether you&apos;re adopting AI for the first time or reviewing what
          you already have in place.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {themes.map((theme) => (
          <div key={theme.num} className="text-center sm:text-left">
            <div className="font-serif text-4xl font-bold text-accent/30 mb-3">
              {theme.num}
            </div>
            <h3 className="font-sans text-lg font-bold text-primary mb-2">
              {theme.title}
            </h3>
            <p className="font-sans text-sm text-secondary leading-relaxed">
              {theme.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
