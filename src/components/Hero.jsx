export default function Hero() {
  return (
    <section
      className="min-h-[80vh] flex flex-col justify-center items-center text-center px-6 pt-32 pb-16 relative overflow-hidden"
      aria-label="Introduction"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(158,122,86,0.07)_0%,transparent_70%)] pointer-events-none" />

      <h1 className="font-serif text-[clamp(40px,6vw,72px)] font-bold text-primary leading-[1.1] mb-6 tracking-tight">
        AI Resources for{' '}
        <span className="bg-gradient-to-br from-accent to-accent-dark bg-clip-text text-transparent">
          Real-World Use
        </span>
      </h1>

      <p className="font-sans text-[19px] sm:text-xl text-secondary max-w-[700px] mb-10 leading-relaxed">
        Frameworks, assessments, and plain-English information for startups,
        small businesses, and anyone using AI in the real world.
      </p>

      <div className="flex gap-4 flex-wrap justify-center">
        <a
          href="#assessment"
          className="inline-flex items-center gap-2 bg-gradient-to-br from-accent to-accent-dark text-accent-text px-7 py-3.5 rounded-lg text-[15px] font-bold font-sans no-underline shadow-[0_4px_24px_rgba(158,122,86,0.18)] hover:shadow-[0_8px_32px_rgba(158,122,86,0.28)] hover:-translate-y-0.5 transition-all"
        >
          Take the Assessment &rarr;
        </a>
        <a
          href="#resources"
          className="inline-flex items-center gap-2 bg-surface border border-border text-primary px-7 py-3.5 rounded-lg text-[15px] font-semibold font-sans no-underline hover:border-accent/50 transition-colors"
        >
          Explore Resources
        </a>
      </div>
    </section>
  )
}
