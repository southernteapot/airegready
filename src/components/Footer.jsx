import Link from 'next/link'
import Logo from './Logo'

export default function Footer() {
  return (
    <footer className="border-t border-[#1E3147] bg-[#07111F] px-6 py-10 text-white">
      <div className="max-w-[1280px] mx-auto">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-6">
          <Link href="/" className="no-underline" aria-label="AIRegReady home">
            <Logo size={28} textSize="base" tone="dark" />
          </Link>
          <nav aria-label="Footer navigation" className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            <Link href="/catalog" className="font-sans text-sm text-[#C8D7EA] hover:text-[#58D4FF] transition-colors no-underline">
              Catalog
            </Link>
            <Link href="/resources" className="font-sans text-sm text-[#C8D7EA] hover:text-[#58D4FF] transition-colors no-underline">
              Resources
            </Link>
            <Link href="/regulations" className="font-sans text-sm text-[#C8D7EA] hover:text-[#58D4FF] transition-colors no-underline">
              Regulations
            </Link>
            <Link href="/compare" className="font-sans text-sm text-[#C8D7EA] hover:text-[#58D4FF] transition-colors no-underline">
              Compare
            </Link>
            <Link href="/assessment" className="font-sans text-sm text-[#C8D7EA] hover:text-[#58D4FF] transition-colors no-underline">
              Assessment
            </Link>
            <Link href="/blog" className="font-sans text-sm text-[#C8D7EA] hover:text-[#58D4FF] transition-colors no-underline">
              Blog
            </Link>
            <Link href="/glossary" className="font-sans text-sm text-[#C8D7EA] hover:text-[#58D4FF] transition-colors no-underline">
              Glossary
            </Link>
            <Link href="/timeline" className="font-sans text-sm text-[#C8D7EA] hover:text-[#58D4FF] transition-colors no-underline">
              Timeline
            </Link>
            <Link href="/faq" className="font-sans text-sm text-[#C8D7EA] hover:text-[#58D4FF] transition-colors no-underline">
              FAQ
            </Link>
            <Link href="/about" className="font-sans text-sm text-[#C8D7EA] hover:text-[#58D4FF] transition-colors no-underline">
              About
            </Link>
            <Link href="/legal" className="font-sans text-sm text-[#C8D7EA] hover:text-[#58D4FF] transition-colors no-underline">
              Legal
            </Link>
            <Link href="/contact" className="font-sans text-sm text-[#C8D7EA] hover:text-[#58D4FF] transition-colors no-underline">
              Contact
            </Link>
          </nav>
        </div>
        <div className="text-center">
          <p className="font-sans text-xs text-[#ADC4DE]">
            &copy; 2026 AIRegReady. AI resources for real-world use.
          </p>
          <p className="font-sans text-xs text-[#7F95AF] mt-1">
            Content is educational and does not constitute legal advice. Consult
            qualified counsel for specific compliance obligations.
          </p>
        </div>
      </div>
    </footer>
  )
}
