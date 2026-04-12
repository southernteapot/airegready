import { REGULATIONS } from '@/lib/data'

export default function GuideSection() {
  return (
    <section
      id="guide"
      className="py-24 px-6 max-w-[1280px] mx-auto"
      aria-labelledby="guide-heading"
    >
      <div className="text-center mb-14">
        <div className="font-sans text-xs font-bold uppercase tracking-[0.12em] text-accent mb-3">
          Regulatory Landscape
        </div>
        <h2
          id="guide-heading"
          className="font-serif text-4xl sm:text-5xl font-bold text-primary"
        >
          Regulations Worth Knowing About
        </h2>
        <p className="font-sans text-base text-secondary mt-3 max-w-[620px] mx-auto leading-relaxed">
          AI rules are evolving fast. Here&apos;s a plain-English breakdown of
          the frameworks that matter most &mdash; what they require, who they
          affect, and where to find the source.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {REGULATIONS.map((reg) => (
          <a
            key={reg.id}
            href={`/regulations/${reg.slug}`}
            className="bg-surface border border-border/60 rounded-xl p-6 transition-all duration-300 hover:border-accent/50 hover:shadow-[0_2px_16px_rgba(158,122,86,0.08)] no-underline block"
          >
            <div className="flex justify-between items-start mb-3">
              <span className="text-[28px]" role="img" aria-hidden="true">
                {reg.icon}
              </span>
              <span className="font-sans text-xs font-bold uppercase tracking-wide text-accent bg-accent/10 px-2.5 py-1 rounded-full">
                {reg.tag}
              </span>
            </div>
            <h3 className="font-sans text-base font-bold text-primary mb-2">
              {reg.title}
            </h3>
            <p className="font-sans text-sm text-secondary leading-relaxed">
              {reg.desc}
            </p>
          </a>
        ))}
      </div>

      <div className="text-center mt-8">
        <a
          href="/compare"
          className="font-sans text-sm font-semibold text-accent hover:text-accent-dark transition-colors"
        >
          Compare all frameworks &rarr;
        </a>
      </div>
    </section>
  )
}
