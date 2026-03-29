import { REGULATIONS } from '@/lib/data'

export default function GuideSection() {
  return (
    <section
      id="guide"
      className="py-20 px-6 max-w-[1100px] mx-auto"
      aria-labelledby="guide-heading"
    >
      <div className="text-center mb-14">
        <div className="font-sans text-xs font-bold uppercase tracking-[0.12em] text-accent mb-3">
          Compliance Guide
        </div>
        <h2
          id="guide-heading"
          className="font-serif text-3xl sm:text-4xl font-bold text-primary"
        >
          Every Framework. Clearly Explained.
        </h2>
        <p className="font-sans text-base text-secondary mt-3 max-w-[540px] mx-auto leading-relaxed">
          Plain-language breakdowns of the regulations that matter &mdash; what
          they require, who they affect, and what they mean for you.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {REGULATIONS.map((reg) => (
          <article
            key={reg.id}
            className="bg-surface border border-border rounded-xl p-7 transition-all duration-300 hover:border-accent/50 hover:shadow-[0_2px_16px_rgba(158,122,86,0.08)] cursor-pointer"
          >
            <div className="flex justify-between items-start mb-3">
              <span className="text-[28px]" role="img" aria-hidden="true">
                {reg.icon}
              </span>
              <span className="font-sans text-[11px] font-bold uppercase tracking-wide text-accent bg-accent/10 px-2.5 py-1 rounded-full">
                {reg.tag}
              </span>
            </div>
            <h3 className="font-sans text-[17px] font-bold text-primary mb-2">
              {reg.title}
            </h3>
            <p className="font-sans text-sm text-secondary leading-relaxed">
              {reg.desc}
            </p>
          </article>
        ))}
      </div>
    </section>
  )
}
