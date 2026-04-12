export default function Footer() {
  return (
    <footer className="py-10 px-6 border-t border-border">
      <div className="max-w-[1280px] mx-auto">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-6">
          <a href="/" className="flex items-center gap-2 no-underline">
            <div className="w-7 h-7 bg-gradient-to-br from-accent to-accent-dark rounded-md flex items-center justify-center font-extrabold text-sm text-accent-text font-sans" aria-hidden="true">
              A
            </div>
            <span className="font-sans font-bold text-base text-primary tracking-tight">
              AIReg<span className="text-accent">Ready</span>
            </span>
          </a>
          <nav aria-label="Footer navigation" className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            <a
              href="/regulations"
              className="font-sans text-sm text-secondary hover:text-accent transition-colors no-underline"
            >
              Regulations
            </a>
            <a
              href="/compare"
              className="font-sans text-sm text-secondary hover:text-accent transition-colors no-underline"
            >
              Compare
            </a>
            <a
              href="/assessment"
              className="font-sans text-sm text-secondary hover:text-accent transition-colors no-underline"
            >
              Assessment
            </a>
            <a
              href="/blog"
              className="font-sans text-sm text-secondary hover:text-accent transition-colors no-underline"
            >
              Blog
            </a>
            <a
              href="/glossary"
              className="font-sans text-sm text-secondary hover:text-accent transition-colors no-underline"
            >
              Glossary
            </a>
            <a
              href="/timeline"
              className="font-sans text-sm text-secondary hover:text-accent transition-colors no-underline"
            >
              Timeline
            </a>
            <a
              href="/faq"
              className="font-sans text-sm text-secondary hover:text-accent transition-colors no-underline"
            >
              FAQ
            </a>
            <a
              href="/about"
              className="font-sans text-sm text-secondary hover:text-accent transition-colors no-underline"
            >
              About
            </a>
            <a
              href="/legal"
              className="font-sans text-sm text-secondary hover:text-accent transition-colors no-underline"
            >
              Legal
            </a>
          </nav>
        </div>
        <div className="text-center">
          <p className="font-sans text-xs text-secondary">
            &copy; 2026 AIRegReady. AI resources for real-world use.
          </p>
          <p className="font-sans text-xs text-secondary/70 mt-1">
            Content is educational and does not constitute legal advice. Consult
            qualified counsel for specific compliance obligations.
          </p>
        </div>
      </div>
    </footer>
  )
}
