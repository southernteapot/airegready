import { getAllArticles } from '@/lib/articles'
import { getAllRegulations } from '@/lib/regulations'

const topics = [
  'Frameworks',
  'Assessments',
  'Regulations',
  'Checklists',
  'Templates',
  'Plain-English Guides',
]

export default function TrustStrip() {
  const articleCount = getAllArticles().length
  const frameworkCount = getAllRegulations().length

  return (
    <section
      className="py-6 px-6 border-b border-border/80"
      aria-label="Topics covered and site statistics"
    >
      <div className="max-w-[1280px] mx-auto">
        {/* Topic pills */}
        <div className="flex flex-wrap justify-center gap-2 mb-4">
          {topics.map((item) => (
            <span
              key={item}
              className="font-sans text-xs font-medium text-secondary bg-surface border border-border rounded-full px-3.5 py-1"
            >
              {item}
            </span>
          ))}
        </div>
        {/* Concrete counts */}
        <div className="flex flex-wrap justify-center items-center gap-x-5 gap-y-1 font-sans text-xs text-secondary/80">
          <span>
            <strong className="font-semibold text-primary tabular-nums">
              {articleCount}
            </strong>{' '}
            articles
          </span>
          <span className="text-border hidden sm:inline">&middot;</span>
          <span>
            <strong className="font-semibold text-primary tabular-nums">
              {frameworkCount}
            </strong>{' '}
            regulatory frameworks
          </span>
          <span className="text-border hidden sm:inline">&middot;</span>
          <span>Free, plain-English, no login</span>
        </div>
      </div>
    </section>
  )
}
