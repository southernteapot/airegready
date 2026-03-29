'use client'

import { useState } from 'react'

const links = [
  { label: 'Guide', href: '#guide' },
  { label: 'Assessment', href: '#assessment' },
  { label: 'Blog', href: '#blog' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Tools', href: '#tools' },
]

export default function NavBar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <nav
      aria-label="Main navigation"
      className="fixed top-0 left-0 right-0 z-50 bg-bg/90 backdrop-blur-xl border-b border-border px-6 h-16 flex items-center justify-between"
    >
      <a href="/" className="flex items-center gap-2.5 no-underline">
        <div className="w-8 h-8 bg-gradient-to-br from-accent to-accent-dark rounded-md flex items-center justify-center font-extrabold text-base text-accent-text font-sans">
          A
        </div>
        <span className="font-sans font-bold text-[19px] text-primary tracking-tight">
          AIReg<span className="text-accent">Ready</span>
        </span>
      </a>

      {/* Desktop nav */}
      <div className="hidden md:flex gap-8 items-center">
        {links.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className="text-secondary text-sm font-sans font-medium hover:text-accent transition-colors no-underline"
          >
            {link.label}
          </a>
        ))}
      </div>

      {/* Mobile hamburger */}
      <button
        className="md:hidden text-secondary hover:text-primary bg-transparent border-none cursor-pointer p-1"
        onClick={() => setMobileOpen(!mobileOpen)}
        aria-label="Toggle menu"
        aria-expanded={mobileOpen}
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        >
          {mobileOpen ? (
            <path d="M6 6l12 12M6 18L18 6" />
          ) : (
            <path d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="absolute top-16 left-0 right-0 bg-bg/95 backdrop-blur-xl border-b border-border md:hidden">
          <div className="flex flex-col p-6 gap-4">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-secondary text-base font-sans font-medium hover:text-accent transition-colors no-underline"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}
