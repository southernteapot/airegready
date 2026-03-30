import Breadcrumb from '@/components/Breadcrumb'

export const metadata = {
  title: 'Page Not Found',
}

const helpfulLinks = [
  { label: 'Home', href: '/', description: 'Return to the homepage' },
  {
    label: 'Regulations',
    href: '/regulations',
    description: 'Browse AI regulatory frameworks',
  },
  { label: 'Blog', href: '/blog', description: 'Read AI compliance insights' },
  {
    label: 'Assessment',
    href: '/assessment',
    description: 'Take the free risk assessment',
  },
  {
    label: 'Glossary',
    href: '/glossary',
    description: 'AI compliance terminology',
  },
]

export default function NotFound() {
  return (
    <div className="pt-28 pb-20 px-6">
      <div className="max-w-[720px] mx-auto">
        <Breadcrumb
          items={[
            { label: 'Home', href: '/' },
            { label: 'Page Not Found' },
          ]}
        />

        <div className="text-center mb-14">
          <p className="font-sans text-[11px] font-bold uppercase tracking-[0.15em] text-accent mb-4">
            Error 404
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-primary mb-4">
            Page Not Found
          </h1>
          <p className="font-sans text-lg text-secondary leading-relaxed max-w-md mx-auto">
            The page you are looking for does not exist or may have been moved.
          </p>
        </div>

        {/* Search suggestion */}
        <div className="bg-surface border border-border rounded-xl p-6 mb-10 text-center">
          <p className="font-sans text-primary font-medium mb-2">
            Looking for something specific?
          </p>
          <p className="font-sans text-sm text-secondary mb-4">
            Try searching for what you need using the site search.
          </p>
          <kbd className="inline-flex items-center gap-1.5 font-sans text-sm text-secondary bg-bg border border-border rounded-lg px-3 py-1.5">
            Press{' '}
            <span className="font-mono text-xs bg-surface border border-border rounded px-1.5 py-0.5">
              Ctrl
            </span>
            +
            <span className="font-mono text-xs bg-surface border border-border rounded px-1.5 py-0.5">
              K
            </span>{' '}
            to search
          </kbd>
        </div>

        {/* Helpful links */}
        <div>
          <h2 className="font-sans text-[11px] font-bold uppercase tracking-[0.15em] text-accent mb-5">
            Helpful Links
          </h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {helpfulLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="group block bg-surface border border-border rounded-lg p-4 no-underline hover:border-accent/40 transition-all"
              >
                <p className="font-sans font-medium text-primary group-hover:text-accent transition-colors">
                  {link.label}
                </p>
                <p className="font-sans text-sm text-secondary mt-0.5">
                  {link.description}
                </p>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
