import Link from 'next/link'
import { getAllRegulations } from '@/lib/regulations'
import Breadcrumb from '@/components/Breadcrumb'
import { buildPageMetadata } from '@/lib/seo'

export const metadata = buildPageMetadata({
  title: 'AI Frameworks & Regulations',
  description:
    'Plain-English guides to the AI frameworks and regulations that matter most. EU AI Act, NIST AI RMF, U.S. state laws, federal policy, sector-specific rules, and global AI governance.',
  path: '/regulations',
})

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
          <h1 className="font-sans text-3xl sm:text-4xl font-black text-primary">
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
            <Link
              key={reg.slug}
              href={`/regulations/${reg.slug}`}
              className="block rounded-2xl border border-border/70 bg-surface p-6 no-underline shadow-sm transition-all duration-300 hover:border-accent/50 hover:shadow-[0_24px_70px_-54px_rgba(11,27,47,0.45)]"
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
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
