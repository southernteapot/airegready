import Link from 'next/link'
import DarkModeToggle from './DarkModeToggle'
import Logo from './Logo'

const links = [
  { label: 'Regulations', href: '/regulations' },
  { label: 'Compare', href: '/compare' },
  { label: 'Assessment', href: '/assessment' },
  { label: 'Blog', href: '/blog' },
  { label: 'FAQ', href: '/faq' },
  { label: 'About', href: '/about' },
]

function SearchLink() {
  return (
    <Link
      href="/search"
      className="text-secondary hover:text-accent transition-colors bg-transparent p-1.5 flex items-center no-underline"
      aria-label="Search site"
      title="Search"
    >
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <circle cx="11" cy="11" r="8" />
        <path d="M21 21l-4.35-4.35" />
      </svg>
    </Link>
  )
}

export default function NavBar() {
  return (
    <nav
      aria-label="Main navigation"
      className="fixed top-0 left-0 right-0 z-50 bg-bg/90 backdrop-blur-xl border-b border-border px-6 h-16 flex items-center justify-between"
    >
      <Link href="/" className="no-underline" aria-label="AIRegReady home">
        <Logo size={32} textSize="lg" />
      </Link>

      <div className="hidden md:flex gap-8 items-center">
        {links.map((link) => (
          <Link
            key={link.label}
            href={link.href}
            className="text-secondary text-sm font-sans font-medium hover:text-accent transition-colors no-underline"
          >
            {link.label}
          </Link>
        ))}
      </div>

      <div className="flex items-center gap-2">
        <SearchLink />
        <DarkModeToggle />
        <details className="relative md:hidden">
          <summary
            className="list-none text-secondary hover:text-primary bg-transparent cursor-pointer p-1"
            aria-label="Toggle menu"
          >
            <span className="sr-only">Toggle menu</span>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              aria-hidden="true"
            >
              <path d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </summary>

          <div
            id="mobile-nav"
            className="absolute top-11 right-0 w-[220px] bg-bg/95 backdrop-blur-xl border border-border rounded-xl shadow-lg md:hidden"
          >
            <div className="flex flex-col p-4 gap-3">
              {links.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-secondary text-base font-sans font-medium hover:text-accent transition-colors no-underline"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/search"
                className="text-secondary text-base font-sans font-medium hover:text-accent transition-colors no-underline"
              >
                Search
              </Link>
            </div>
          </div>
        </details>
      </div>
    </nav>
  )
}
