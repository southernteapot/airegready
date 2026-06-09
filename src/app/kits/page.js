import Image from 'next/image'
import Link from 'next/link'
import { absoluteUrl, buildPageMetadata } from '@/lib/seo'
import {
  getAvailableProducts,
  getFeaturedFollowOnProducts,
  getInDevelopmentProducts,
  getProductBySlug,
  getProductHref,
  getProductKind,
  getProductPriceLabel,
  getRoadmapProducts,
  isPurchasableProduct,
  trackedTopics,
} from '@/lib/marketing'

export const metadata = buildPageMetadata({
  title: 'AI Document Kits and Catalog',
  description:
    'Two editable AI document kits — the $14 Solo Builder AI Launch Kit and the $19 AI Governance Starter Kit — plus follow-on packets, preview resources, and jurisdiction guides.',
  path: '/catalog',
})

function buildCatalogSchema(availableProducts) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'AI Document Kits and Catalog',
    description:
      'Paid AI document kits with separate AI governance document packages, templates, checklists, trackers, and jurisdiction guides for practical internal readiness work.',
    url: absoluteUrl('/catalog'),
    numberOfItems: availableProducts.length,
    itemListElement: availableProducts.map((product, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      url: absoluteUrl(getProductHref(product)),
      item: {
        '@type': 'Product',
        name: product.title,
        category: getProductKind(product),
        description: product.helps,
        audience: {
          '@type': 'Audience',
          audienceType: product.audience,
        },
        isRelatedTo: product.inside.map((name) => ({
          '@type': 'CreativeWork',
          name,
        })),
        brand: {
          '@type': 'Brand',
          name: 'AIRegReady',
        },
        ...(isPurchasableProduct(product)
          ? {
              offers: {
                '@type': 'Offer',
                url: product.purchaseUrl,
                availability: 'https://schema.org/InStock',
                price: String(product.price),
                priceCurrency: product.priceCurrency,
              },
            }
          : {}),
      },
    })),
  }
}

function PrimaryExternalLink({ href, children }) {
  return (
    <a
      href={href}
      rel="noopener noreferrer"
      className="inline-flex min-h-11 items-center justify-center rounded-lg bg-[#0F5E9C] px-5 py-3 font-sans text-sm font-bold text-white no-underline shadow-[0_14px_30px_-22px_rgba(15,94,156,0.95)] transition hover:bg-[#0B4A7D]"
    >
      {children}
    </a>
  )
}

function SecondaryLink({ href, children }) {
  return (
    <Link
      href={href}
      className="inline-flex min-h-11 items-center justify-center rounded-lg border border-white/[0.22] bg-white/[0.08] px-5 py-3 font-sans text-sm font-bold text-white no-underline shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] backdrop-blur-md transition hover:border-cyan-200/60 hover:bg-white/[0.13]"
    >
      {children}
    </Link>
  )
}

function SectionHeader({ eyebrow, title, body, id, compact = false }) {
  return (
    <div className={compact ? 'max-w-[760px]' : 'mx-auto max-w-[860px] text-center'}>
      <p className="font-sans text-xs font-black uppercase tracking-[0.16em] text-[#8EF1FF]">
        {eyebrow}
      </p>
      <h2 id={id} className="mt-3 font-sans text-3xl font-black leading-tight tracking-tight text-white sm:text-4xl">
        {title}
      </h2>
      {body && (
        <p className="mt-4 font-sans text-base leading-relaxed text-[#B2C9ED]">
          {body}
        </p>
      )}
    </div>
  )
}

const kitComparison = [
  {
    label: 'Best for',
    solo: 'One-person AI projects: apps, sites, automations, digital products, client work.',
    starter: 'Founders, new businesses, consultants, and lean teams using AI at work.',
  },
  {
    label: 'Focus',
    solo: 'Launching safely: claims, user data, disclosures, red flags, and changes.',
    starter: 'Operating safely: inventory, use rules, risk review, and update tracking.',
  },
  {
    label: 'Inside',
    solo: '14 documents including three filled examples and a 30-minute setup guide.',
    starter: '14 documents plus a bonus filled example and CSV starter spreadsheets.',
  },
  {
    label: 'Formats',
    solo: 'DOCX, PDF, Markdown, CSV logs, Start Here guide.',
    starter: 'DOCX, PDF, Markdown, CSV spreadsheets, Start Here guide.',
  },
]

function KitPanel({ product, tagline }) {
  if (!product) return null
  const heroImage = product.galleryImages?.[0]
  const priceLabel = getProductPriceLabel(product)
  const purchasable = isPurchasableProduct(product)

  return (
    <article className="flex min-w-0 flex-col overflow-hidden rounded-2xl border border-cyan-200/[0.14] bg-[#050B16] shadow-[0_36px_96px_-68px_rgba(0,0,0,0.9)]">
      {heroImage && (
        <div className="p-3 pb-0">
          <Image
            src={heroImage.src}
            width={1280}
            height={720}
            alt={heroImage.alt}
            className="aspect-[16/9] h-auto w-full rounded-xl object-cover"
            sizes="(max-width: 1024px) 100vw, 48vw"
            priority
          />
        </div>
      )}
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <div className="flex items-start justify-between gap-4">
          <h2 className="font-sans text-2xl font-black leading-tight text-white">{product.title}</h2>
          {priceLabel && (
            <span className="rounded-full bg-cyan-300/10 px-3 py-1 font-sans text-base font-black text-cyan-200">
              {priceLabel}
            </span>
          )}
        </div>
        <p className="mt-2 font-sans text-sm font-bold uppercase tracking-[0.12em] text-[#7B8DA3]">{tagline}</p>
        <p className="mt-3 font-sans text-sm leading-relaxed text-[#B2C9ED]">{product.helps}</p>
        <div className="mt-auto flex flex-col gap-3 pt-5 sm:flex-row">
          {purchasable ? (
            <PrimaryExternalLink href={product.purchaseUrl}>
              {product.purchaseCta || `Buy for ${priceLabel}`}
            </PrimaryExternalLink>
          ) : null}
          <SecondaryLink href={getProductHref(product)}>See what&apos;s inside</SecondaryLink>
        </div>
      </div>
    </article>
  )
}

export default function KitsPage() {
  const availableProducts = getAvailableProducts()
  const roadmapProducts = getRoadmapProducts()
  const starterProduct = getProductBySlug('ai-governance-starter-kit')
  const soloProduct = getProductBySlug('solo-builder-ai-launch-kit')
  const followOnProducts = getFeaturedFollowOnProducts().filter(
    (product) => product.slug !== 'solo-builder-ai-launch-kit'
  )
  const inDevelopmentProducts = getInDevelopmentProducts()
  const catalogSchema = buildCatalogSchema(availableProducts)

  return (
    <div className="overflow-x-hidden bg-[#07111F] text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(catalogSchema) }}
      />
      <section id="kits" className="relative overflow-hidden border-b border-white/[0.06] bg-[#07111F] px-4 pb-12 pt-24 text-white sm:px-6" aria-labelledby="kits-heading">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_24%,rgba(44,166,164,0.16),transparent_32%),radial-gradient(circle_at_82%_16%,rgba(47,128,194,0.18),transparent_30%)]" aria-hidden="true" />
        <div className="relative mx-auto max-w-[1240px]">
          <div className="max-w-[820px]">
            <p className="font-sans text-xs font-black uppercase tracking-[0.16em] text-cyan-200">
              Paid document kits
            </p>
            <h1 id="kits-heading" className="mt-4 break-words font-sans text-[34px] font-extrabold leading-[1.08] tracking-tight text-white sm:text-5xl">
              Practical AI document kits.
            </h1>
            <p className="mt-5 break-words font-sans text-base leading-relaxed text-[#D8E6F5] sm:text-lg">
              Two editable kits, two situations: launching a solo AI project,
              or putting working rules around AI use in a business. Both are
              educational templates with instant Gumroad delivery — not legal
              advice, and no compliance guarantee.
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <SecondaryLink href="/free-sample">Try a free sample first</SecondaryLink>
              <SecondaryLink href="/assessment">Not sure? Take the assessment</SecondaryLink>
            </div>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-5 lg:grid-cols-2">
            <KitPanel
              product={soloProduct}
              tagline="For solo builders and one-person AI projects"
            />
            <KitPanel
              product={starterProduct}
              tagline="For founders, new businesses, and lean teams"
            />
          </div>

          <div className="mt-8 overflow-hidden rounded-2xl border border-white/[0.14] bg-slate-950 shadow-[0_34px_90px_-70px_rgba(0,0,0,0.9)]">
            <div className="border-b border-slate-800 p-5 sm:p-6">
              <p className="font-sans text-xs font-black uppercase tracking-[0.14em] text-cyan-300">Which kit fits?</p>
              <h2 className="mt-2 font-sans text-2xl font-black leading-tight text-white">
                The ten-second comparison.
              </h2>
            </div>
            <div className="grid grid-cols-1">
              <div className="hidden grid-cols-[140px_1fr_1fr] gap-4 border-b border-slate-800 bg-slate-900/60 px-5 py-3 sm:grid sm:px-6">
                <span className="font-sans text-xs font-black uppercase tracking-wide text-[#7B8DA3]"></span>
                <span className="font-sans text-sm font-black text-white">Solo Builder AI Launch Kit</span>
                <span className="font-sans text-sm font-black text-white">AI Governance Starter Kit</span>
              </div>
              {kitComparison.map((row) => (
                <div key={row.label} className="grid grid-cols-1 gap-2 border-b border-slate-800 px-5 py-4 last:border-b-0 sm:grid-cols-[140px_1fr_1fr] sm:gap-4 sm:px-6">
                  <span className="font-sans text-xs font-black uppercase tracking-wide text-[#7B8DA3]">{row.label}</span>
                  <p className="font-sans text-sm leading-relaxed text-[#B2C9ED]"><span className="font-black text-white sm:hidden">Solo Builder: </span>{row.solo}</p>
                  <p className="font-sans text-sm leading-relaxed text-[#B2C9ED]"><span className="font-black text-white sm:hidden">Starter Kit: </span>{row.starter}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="kit-catalog" className="bg-gradient-to-b from-[#07111F] to-[#091321] px-4 py-16 text-white sm:px-6 sm:py-20" aria-labelledby="catalog-heading">
        <div className="mx-auto max-w-[1320px]">
          <SectionHeader
            id="catalog-heading"
            eyebrow="Separate catalog resources"
            title="Follow-on packets and previews live below the kits."
            body="The cards below are the next packets in line: separate follow-on resources with their own preview pages and request paths. They are not bundled into the kit purchases above."
          />
          <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2">
            {followOnProducts.map((product) => {
              const isPurchasable = isPurchasableProduct(product)
              const priceLabel = getProductPriceLabel(product)

              return (
              <article key={product.title} className="group flex min-h-[360px] flex-col rounded-2xl border border-[#C9D7E6] bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-[#2F80C2] hover:shadow-[0_24px_70px_-52px_rgba(11,27,47,0.75)] dark:border-slate-800 dark:bg-slate-950">
                <div className="mb-4 flex items-start justify-between gap-4">
                  <h3 className="font-sans text-xl font-black leading-tight text-[#0B1B2F] dark:text-white">{product.title}</h3>
                  <span className="rounded-full border border-[#D6E2EF] bg-[#F8FAFD] px-2.5 py-1 font-sans text-[11px] font-black uppercase tracking-wide text-[#0F6B8F] dark:border-slate-700 dark:bg-slate-900 dark:text-cyan-300">
                    {getProductKind(product)}
                  </span>
                </div>
                <div className="space-y-4">
                  <div>
                    <p className="font-sans text-[11px] font-black uppercase tracking-[0.14em] text-[#7B8DA3]">Who it is for</p>
                    <p className="mt-1 font-sans text-sm leading-relaxed text-[#40546C] dark:text-slate-300">{product.audience}</p>
                  </div>
                  <div>
                    <p className="font-sans text-[11px] font-black uppercase tracking-[0.14em] text-[#7B8DA3]">What is inside</p>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {product.inside.map((item) => (
                        <span key={item} className="rounded-full bg-[#EAF4FF] px-2.5 py-1 font-sans text-xs font-bold text-[#2368A0] dark:bg-slate-900 dark:text-cyan-200">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <p className="font-sans text-[11px] font-black uppercase tracking-[0.14em] text-[#7B8DA3]">Why it helps</p>
                    <p className="mt-1 font-sans text-sm leading-relaxed text-[#40546C] dark:text-slate-300">{product.helps}</p>
                  </div>
                </div>
                <div className="mt-auto flex flex-wrap items-center gap-4 pt-5">
                  {isPurchasable ? (
                    <a href={product.purchaseUrl} rel="noopener noreferrer" className="font-sans text-sm font-black text-[#0F5E9C] no-underline transition group-hover:text-[#0B4A7D] dark:text-cyan-300">
                      Buy for {priceLabel} <span aria-hidden="true">-&gt;</span>
                    </a>
                  ) : (
                    <Link href={getProductHref(product)} className="font-sans text-sm font-black text-[#0F5E9C] no-underline transition group-hover:text-[#0B4A7D] dark:text-cyan-300">
                      View details <span aria-hidden="true">-&gt;</span>
                    </Link>
                  )}
                  <Link href={isPurchasable ? getProductHref(product) : `${getProductHref(product)}#request-preview`} className="font-sans text-sm font-bold text-[#52677F] no-underline transition hover:text-[#0B4A7D] dark:text-slate-300 dark:hover:text-cyan-200">
                    {isPurchasable ? 'View details' : 'Request preview'}
                  </Link>
                </div>
              </article>
              )
            })}
          </div>
          {inDevelopmentProducts.length > 0 && (
            <div className="mt-10 rounded-2xl border border-white/[0.12] bg-[#050B16]/86 p-6 shadow-sm">
              <div className="max-w-[760px]">
                <p className="font-sans text-xs font-black uppercase tracking-[0.16em] text-[#8EF1FF]">
                  In development
                </p>
                <h3 className="mt-2 font-sans text-2xl font-black leading-tight text-white">
                  More specialized packets you can preview on request.
                </h3>
                <p className="mt-3 font-sans text-sm leading-relaxed text-[#B2C9ED]">
                  These resources have detail pages and preview-request paths,
                  but they are further back in the build queue than the packets
                  above. No prices or downloads are attached yet.
                </p>
              </div>
              <ul className="mt-5 grid grid-cols-1 gap-2 sm:grid-cols-2">
                {inDevelopmentProducts.map((product) => (
                  <li key={product.slug} className="flex flex-wrap items-baseline justify-between gap-2 rounded-xl border border-white/[0.1] bg-[#0B1626] px-4 py-3">
                    <Link href={getProductHref(product)} className="font-sans text-sm font-black text-white no-underline transition hover:text-[#8EF1FF]">
                      {product.title}
                    </Link>
                    <Link href={`${getProductHref(product)}#request-preview`} className="font-sans text-xs font-bold text-[#8EF1FF] no-underline transition hover:text-white">
                      Request preview <span aria-hidden="true">-&gt;</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
          {roadmapProducts.length > 0 && (
            <div className="mt-10 rounded-2xl border border-[#C9D7E6] bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-950">
              <div className="max-w-[760px]">
                <p className="font-sans text-xs font-black uppercase tracking-[0.16em] text-[#0F6B8F] dark:text-cyan-300">
                  Roadmap
                </p>
                <h3 className="mt-2 font-sans text-2xl font-black leading-tight text-[#0B1B2F] dark:text-white">
                  More resource packages are being prepared.
                </h3>
                <p className="mt-3 font-sans text-sm leading-relaxed text-[#52677F] dark:text-slate-300">
                  These items are not yet available for preview. They stay on the roadmap until the contents are ready to share.
                </p>
              </div>
              <div className="mt-5 grid grid-cols-1 gap-3 md:grid-cols-3">
                {roadmapProducts.map((product) => (
                  <article key={product.title} className="rounded-xl border border-[#D6E2EF] bg-[#F8FAFD] p-4 dark:border-slate-800 dark:bg-slate-900">
                    <h4 className="font-sans text-base font-black leading-tight text-[#0B1B2F] dark:text-white">
                      {product.title}
                    </h4>
                    <p className="mt-2 font-sans text-sm leading-relaxed text-[#52677F] dark:text-slate-300">
                      {product.helps}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      <section id="tracked-topics" className="bg-gradient-to-b from-[#091321] to-[#0A1524] px-4 py-16 text-white sm:px-6 sm:py-20" aria-labelledby="tracked-heading">
        <div className="mx-auto max-w-[1040px]">
          <SectionHeader
            id="tracked-heading"
            eyebrow="Tracked topics"
            title="Resource updates follow the AI governance topics teams ask about."
            body="Tracked topics are used for educational updates, checklists, and preparation prompts. They are not legal determinations for a specific organization."
          />
          <div className="mt-8 flex flex-wrap justify-center gap-2">
            {trackedTopics.map((topic) => (
              <span key={topic} className="rounded-full border border-[#D6E2EF] bg-[#F8FAFD] px-3 py-1.5 font-sans text-xs font-black text-[#0F5E9C] shadow-sm dark:border-slate-800 dark:bg-slate-900 dark:text-cyan-300">
                {topic}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-b from-[#0A1524] to-[#07111F] px-4 py-12 sm:px-6" aria-labelledby="kits-legal-heading">
        <div className="mx-auto max-w-[980px] rounded-2xl border border-[#C9D7E6] bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-950">
          <h2 id="kits-legal-heading" className="font-sans text-2xl font-black text-[#0B1B2F] dark:text-white">
            Educational resources, not legal services.
          </h2>
          <p className="mt-3 font-sans text-sm leading-relaxed text-[#52677F] dark:text-slate-300">
            AIRegReady provides educational information and practical resources.
            It is not a law firm and does not provide legal advice. Resources
            are starting points for internal governance work and should be
            reviewed with qualified counsel for specific legal obligations.
          </p>
        </div>
      </section>
    </div>
  )
}
