import { getAllRegulations } from '@/lib/regulations'
import Breadcrumb from '@/components/Breadcrumb'

export const metadata = {
  title: 'AI Frameworks & Regulations',
  description:
    'Plain-English guides to the AI frameworks and regulations that matter most. EU AI Act, NIST AI RMF, U.S. state laws, federal policy, sector-specific rules, and global AI governance.',
  alternates: {
    canonical: 'https://airegready.com/regulations',
  },
}

export default function RegulationsIndex() {
  const regulations = getAllRegulations()

  return (
    <div className="pt-28 pb-20 px-6">
      <div className="max-w-[1100px] mx-auto">
        <Breadcrumb
          items={[
            { label: 'Home', href: '/' },
            { label: 'Regulations' },
          ]}
        />

        <div className="text-center mb-14">
          <div className="font-sans text-xs font-bold uppercase tracking-[0.12em] text-accent mb-3">
            Browse by Framework
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl font-bold text-primary">
            AI Regulations You Should Know
          </h1>
          <p className="font-sans text-base text-secondary mt-3 max-w-[560px] mx-auto leading-relaxed">
            Each framework summarized in plain English &mdash; what it requires,
            who it applies to, and what&apos;s changed recently. Every summary
            links to the source.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {regulations.map((reg) => (
            <a
              key={reg.slug}
              href={`/regulations/${reg.slug}`}
              className="bg-surface border border-border/60 rounded-xl p-6 transition-all duration-300 hover:border-accent/50 hover:shadow-[0_2px_16px_rgba(158,122,86,0.08)] no-underline block"
            >
              <div className="flex justify-between items-start mb-3">
                <span className="text-[28px]" role="img" aria-hidden="true">
                  {reg.icon}
                </span>
                <span className="font-sans text-xs font-bold uppercase tracking-wide text-accent bg-accent/10 px-2.5 py-1 rounded-full">
                  {reg.status}
                </span>
              </div>
              <h2 className="font-sans text-base font-bold text-primary mb-2">
                {reg.title}
              </h2>
              <p className="font-sans text-sm text-secondary leading-relaxed">
                {reg.description}
              </p>
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}
