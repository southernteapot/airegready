'use client'

import { useState } from 'react'
import Link from 'next/link'
import DarkModeToggle from './DarkModeToggle'
import Logo from './Logo'

const links = [
  { label: 'Resources', href: '/resources' },
  { label: 'Regulations', href: '/regulations' },
  { label: 'Compare', href: '/compare' },
  { label: 'Blog', href: '/blog' },
  { label: 'Catalog', href: '/catalog' },
  { label: 'FAQ', href: '/faq' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
]

function SearchLink({ onClick }) {
  return (
    <Link
      href="/search"
      onClick={onClick}
      className="flex items-center bg-transparent p-1.5 text-[#ADC4DE] no-underline transition-colors hover:text-[#58D4FF]"
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
  const [isOpen, setIsOpen] = useState(false)
  const closeMenu = () => setIsOpen(false)

  return (
    <nav
      aria-label="Main navigation"
      className="fixed left-0 right-0 top-0 z-50 flex h-16 items-center justify-between border-b border-[#1E3147] bg-[#07111F]/95 px-4 shadow-[0_18px_60px_-46px_rgba(0,0,0,0.9)] backdrop-blur-xl sm:px-6"
    >
      <Link href="/" className="no-underline" aria-label="AIRegReady home" onClick={closeMenu}>
        <Logo size={32} textSize="lg" tone="dark" />
      </Link>

      <div className="hidden items-center gap-7 lg:flex">
        {links.map((link) => (
          <Link
            key={link.label}
            href={link.href}
            className="font-sans text-sm font-semibold text-[#C8D7EA] no-underline transition-colors hover:text-[#58D4FF]"
          >
            {link.label}
          </Link>
        ))}
      </div>

      <div className="flex items-center gap-2">
        <Link
          href="/assessment"
          onClick={closeMenu}
          className="hidden rounded-lg bg-[#174EA6] px-4 py-2 font-sans text-sm font-bold text-white no-underline shadow-[0_16px_34px_-24px_rgba(23,78,166,0.95)] transition hover:bg-[#2C6BFF] sm:inline-flex"
        >
          Start assessment
        </Link>
        <SearchLink onClick={closeMenu} />
        <DarkModeToggle />
        <div className="relative lg:hidden">
          <button
            type="button"
            onClick={() => setIsOpen((open) => !open)}
            className="cursor-pointer border-none bg-transparent p-1 text-[#ADC4DE] hover:text-[#58D4FF]"
            aria-label="Toggle menu"
            aria-expanded={isOpen}
            aria-controls="mobile-nav"
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
          </button>

          {isOpen && (
            <div
              id="mobile-nav"
              className="absolute right-0 top-11 w-[260px] rounded-xl border border-[#1E3147] bg-[#07111F]/97 shadow-lg backdrop-blur-xl lg:hidden"
            >
              <div className="flex flex-col gap-3 p-4">
                <Link
                  href="/assessment"
                  onClick={closeMenu}
                  className="rounded-lg bg-[#174EA6] px-4 py-2.5 text-center font-sans text-sm font-bold text-white no-underline shadow-[0_16px_34px_-24px_rgba(23,78,166,0.95)] transition hover:bg-[#2C6BFF]"
                >
                  Start assessment
                </Link>
                {links.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    onClick={closeMenu}
                    className="font-sans text-base font-semibold text-[#C8D7EA] no-underline transition-colors hover:text-[#58D4FF]"
                  >
                    {link.label}
                  </Link>
                ))}
                <Link
                  href="/search"
                  onClick={closeMenu}
                  className="font-sans text-base font-semibold text-[#C8D7EA] no-underline transition-colors hover:text-[#58D4FF]"
                >
                  Search
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  )
}
