export default function sitemap() {
  const base = 'https://airegready.com'

  const regulations = [
    'eu-ai-act',
    'nist-ai-rmf',
    'us-state-laws',
    'federal-policy',
    'sector-rules',
    'global',
  ]

  const articles = [
    'eu-ai-act-risk-classification',
    'eu-ai-act-compliance-checklist',
    'us-states-ai-hiring',
    'shadow-ai-compliance',
    'nist-ai-rmf-practice',
    'ai-vendor-due-diligence',
    'federal-ai-preemption',
    'ai-compliance-startups',
    'gpai-code-of-practice',
    'ai-risk-management-program',
  ]

  return [
    {
      url: base,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${base}/regulations`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    ...regulations.map((slug) => ({
      url: `${base}/regulations/${slug}`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    })),
    {
      url: `${base}/blog`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    ...articles.map((slug) => ({
      url: `${base}/blog/${slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    })),
    {
      url: `${base}/compare`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${base}/assessment`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${base}/glossary`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${base}/timeline`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${base}/faq`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${base}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
  ]
}
