export default function Breadcrumb({ items }) {
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => {
      const entry = {
        '@type': 'ListItem',
        position: i + 1,
        name: item.label,
      }
      // Last item (current page) should not have an "item" URL per Google's guidelines
      if (i < items.length - 1 && item.href) {
        entry.item = `https://airegready.com${item.href}`
      }
      return entry
    }),
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <nav aria-label="Breadcrumb" className="mb-8">
        <ol className="flex flex-wrap gap-1.5 font-sans text-sm text-secondary">
          {items.map((item, i) => (
            <li key={i} className="flex items-center gap-1.5">
              {i > 0 && <span className="text-border">/</span>}
              {item.href ? (
                <a
                  href={item.href}
                  className="hover:text-accent transition-colors"
                >
                  {item.label}
                </a>
              ) : (
                <span className="text-primary font-medium">{item.label}</span>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  )
}
