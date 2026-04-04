const items = [
  'Frameworks',
  'Assessments',
  'Regulations',
  'Checklists',
  'Templates',
  'Plain-English Guides',
]

export default function TrustStrip() {
  return (
    <section className="py-6 px-6 border-y border-border/80" aria-label="Topics covered">
      <div className="max-w-[1280px] mx-auto">
        {/* Topic pills */}
        <div className="flex flex-wrap justify-center gap-2 mb-4">
          {items.map((item) => (
            <span
              key={item}
              className="font-sans text-[13px] font-medium text-secondary bg-surface border border-border rounded-full px-3.5 py-1"
            >
              {item}
            </span>
          ))}
        </div>
        {/* Value props */}
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-1 font-sans text-[13px] text-secondary/80">
          <span>Practical Over Theoretical</span>
          <span className="text-border hidden sm:inline">&middot;</span>
          <span>Plain English, Not Legalese</span>
          <span className="text-border hidden sm:inline">&middot;</span>
          <span>Free &amp; Open Access</span>
        </div>
      </div>
    </section>
  )
}
