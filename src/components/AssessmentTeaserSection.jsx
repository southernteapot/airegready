import Link from 'next/link'

export default function AssessmentTeaserSection() {
  return (
    <section
      id="assessment"
      className="py-24 px-6 max-w-[960px] mx-auto"
      aria-labelledby="assessment-heading"
    >
      <div className="bg-surface border border-border rounded-2xl p-8 sm:p-10">
        <div className="max-w-[700px]">
          <div className="font-sans text-xs font-bold uppercase tracking-[0.12em] text-accent mb-3">
            Free Tool
          </div>
          <h2
            id="assessment-heading"
            className="font-serif text-3xl sm:text-4xl font-bold text-primary leading-tight mb-4"
          >
            Run the full assessment on its own page.
          </h2>
          <p className="font-sans text-base text-secondary leading-relaxed mb-6">
            The dedicated assessment page gives you the full 11-question flow,
            a shareable results URL, and a concrete action plan without loading
            that entire interactive experience into the homepage.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-3 mb-6">
          <div className="bg-bg border border-border rounded-xl p-5">
            <div className="font-serif text-2xl font-bold text-primary mb-1">
              11
            </div>
            <p className="font-sans text-sm text-secondary leading-relaxed">
              short questions focused on adoption, guardrails, and regulatory exposure
            </p>
          </div>
          <div className="bg-bg border border-border rounded-xl p-5">
            <div className="font-serif text-2xl font-bold text-primary mb-1">
              3 min
            </div>
            <p className="font-sans text-sm text-secondary leading-relaxed">
              to get a practical snapshot and prioritized next steps
            </p>
          </div>
          <div className="bg-bg border border-border rounded-xl p-5">
            <div className="font-serif text-2xl font-bold text-primary mb-1">
              $0
            </div>
            <p className="font-sans text-sm text-secondary leading-relaxed">
              no login required and no email needed to see your result
            </p>
          </div>
        </div>

        <div className="flex gap-3 flex-wrap">
          <Link
            href="/assessment"
            className="inline-flex items-center gap-2 bg-gradient-to-br from-accent to-accent-dark text-accent-text px-7 py-3.5 rounded-lg text-sm font-bold font-sans no-underline shadow-[0_4px_24px_rgba(158,122,86,0.18)] hover:shadow-[0_8px_32px_rgba(158,122,86,0.28)] hover:-translate-y-0.5 transition-all"
          >
            Open the assessment &rarr;
          </Link>
          <Link
            href="/checklist"
            className="inline-flex items-center gap-2 bg-bg border border-border text-primary px-7 py-3.5 rounded-lg text-sm font-semibold font-sans no-underline hover:border-accent/50 transition-colors"
          >
            Start with the checklist
          </Link>
        </div>
      </div>
    </section>
  )
}
