export default function Breadcrumb({ items }) {
  return (
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
  )
}
