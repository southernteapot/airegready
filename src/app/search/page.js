import Link from 'next/link'
import Breadcrumb from '@/components/Breadcrumb'
import { getSearchIndex } from '@/lib/search-data'

export const metadata = {
  title: 'Search',
  description: 'Search AIRegReady content.',
  robots: {
    index: false,
    follow: true,
  },
}

const GROUP_ORDER = ['regulation', 'article', 'page']
const GROUP_LABELS = {
  regulation: 'Regulations',
  article: 'Articles',
  page: 'Pages',
}

function filterIndex(index, query) {
  if (!query || query.trim().length < 2) return []

  const q = query.trim().toLowerCase()

  return index.filter((item) => {
    const haystack =
      `${item.title} ${item.description} ${item.tags.join(' ')}`.toLowerCase()
    return haystack.includes(q)
  })
}

export default async function SearchPage({ searchParams }) {
  const params = await searchParams
  const query = typeof params?.q === 'string' ? params.q : ''
  const results = filterIndex(getSearchIndex(), query)
  const grouped = GROUP_ORDER.map((type) => ({
    type,
    label: GROUP_LABELS[type],
    items: results.filter((result) => result.type === type),
  })).filter((group) => group.items.length > 0)

  return (
    <div className="pt-28 pb-20 px-6">
      <div className="max-w-[860px] mx-auto">
        <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'Search' }]} />

        <header className="mb-8">
          <p className="font-sans text-xs font-semibold tracking-widest uppercase text-accent mb-3">
            Site Search
          </p>
          <h1 className="font-serif text-3xl sm:text-4xl font-bold text-primary leading-tight mb-4">
            Search AIRegReady
          </h1>
          <p className="font-sans text-base text-secondary leading-relaxed max-w-[620px]">
            Search regulations, explainers, and tools across the live site.
          </p>
        </header>

        <form action="/search" method="get" className="mb-8">
          <label htmlFor="search-query" className="sr-only">
            Search query
          </label>
          <div className="flex flex-col sm:flex-row gap-3">
            <input
              id="search-query"
              name="q"
              type="search"
              defaultValue={query}
              placeholder="Search regulations, articles, tools..."
              className="flex-1 bg-surface border border-border rounded-xl px-4 py-3 text-base font-sans text-primary placeholder:text-secondary/60 focus:outline-none focus:border-accent/50 focus:ring-2 focus:ring-accent/20 transition-all"
            />
            <button
              type="submit"
              className="bg-accent text-accent-text rounded-xl px-5 py-3 text-sm font-semibold hover:bg-accent-dark transition-colors"
            >
              Search
            </button>
          </div>
        </form>

        {query.trim().length < 2 ? (
          <div className="bg-surface border border-border/60 rounded-xl p-6">
            <p className="font-sans text-sm text-secondary">
              Enter at least 2 characters to search.
            </p>
          </div>
        ) : results.length === 0 ? (
          <div className="bg-surface border border-border/60 rounded-xl p-6">
            <p className="font-sans text-base font-medium text-primary">
              No results found for “{query}”.
            </p>
            <p className="font-sans text-sm text-secondary mt-2">
              Try a broader phrase, or browse the{' '}
              <Link href="/regulations" className="text-accent hover:underline">
                regulations
              </Link>{' '}
              or{' '}
              <Link href="/blog" className="text-accent hover:underline">
                blog
              </Link>
              .
            </p>
          </div>
        ) : (
          <div className="space-y-8">
            <p className="font-sans text-sm text-secondary">
              {results.length} result{results.length !== 1 ? 's' : ''} found for “{query}”.
            </p>

            {grouped.map((group) => (
              <section key={group.type}>
                <h2 className="font-sans text-xs font-bold uppercase tracking-[0.12em] text-accent mb-3">
                  {group.label}
                </h2>
                <div className="grid gap-3">
                  {group.items.map((item) => (
                    <Link
                      key={item.url}
                      href={item.url}
                      className="block bg-surface border border-border/60 rounded-xl p-5 hover:border-accent/50 transition-all no-underline"
                    >
                      <div className="flex items-start justify-between gap-3">
                        <div className="min-w-0">
                          <h3 className="font-sans text-base font-semibold text-primary leading-snug">
                            {item.title}
                          </h3>
                          <p className="font-sans text-sm text-secondary mt-1 leading-relaxed">
                            {item.description}
                          </p>
                        </div>
                        <span className="shrink-0 font-sans text-xs font-medium px-2 py-0.5 rounded-full bg-border text-secondary">
                          {group.label.slice(0, -1)}
                        </span>
                      </div>
                    </Link>
                  ))}
                </div>
              </section>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
