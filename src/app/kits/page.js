import Image from 'next/image'
import Link from 'next/link'
import { absoluteUrl, buildPageMetadata } from '@/lib/seo'
import {
  getAvailableProducts,
  getFeaturedFollowOnProducts,
  getInDevelopmentProducts,
  getProductHref,
  getProductKind,
  getProductPriceLabel,
  getRoadmapProducts,
  isPurchasableProduct,
  trackedTopics,
} from '@/lib/marketing'

export const metadata = buildPageMetadata({
  title: 'AI Governance Starter Kit and Catalog',
  description:
    'See what is included in the paid AI Governance Starter Kit, plus separate AI governance resource packets, preview tools, and jurisdiction guides.',
  path: '/catalog',
})

function buildCatalogSchema(availableProducts) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'AI Governance Starter Kit and Catalog',
    description:
      'The paid AI Governance Starter Kit with separate AI governance document packages, templates, checklists, trackers, and jurisdiction guides for practical internal readiness work.',
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

function PrimaryLink({ href, children }) {
  return (
    <Link
      href={href}
      className="inline-flex min-h-11 items-center justify-center rounded-lg bg-[#0F5E9C] px-5 py-3 font-sans text-sm font-bold text-white no-underline shadow-[0_14px_30px_-22px_rgba(15,94,156,0.95)] transition hover:bg-[#0B4A7D]"
    >
      {children}
    </Link>
  )
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

export default function KitsPage() {
  const availableProducts = getAvailableProducts()
  const roadmapProducts = getRoadmapProducts()
  const starterProduct = availableProducts.find((product) => product.slug === 'ai-governance-starter-kit')
  const starterHeroImage = starterProduct?.galleryImages?.[0]
  const starterPriceLabel = starterProduct ? getProductPriceLabel(starterProduct) : null
  const followOnProducts = getFeaturedFollowOnProducts()
  const inDevelopmentProducts = getInDevelopmentProducts()
  const catalogSchema = buildCatalogSchema(availableProducts)

  return (
    <div className="overflow-x-hidden bg-[#07111F] text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(catalogSchema) }}
      />
      <section id="starter-kit" className="relative overflow-hidden border-b border-white/[0.06] bg-[#07111F] px-4 pb-12 pt-24 text-white sm:px-6" aria-labelledby="kits-heading">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_24%,rgba(44,166,164,0.16),transparent_32%),radial-gradient(circle_at_82%_16%,rgba(47,128,194,0.18),transparent_30%)]" aria-hidden="true" />
        <div className="relative mx-auto grid min-w-0 max-w-[1240px] grid-cols-1 gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
          <div className="min-w-0">
            <p className="font-sans text-xs font-black uppercase tracking-[0.16em] text-cyan-200">
              Paid starter kit
            </p>
            <h1 id="kits-heading" className="mt-4 max-w-[760px] break-words font-sans text-[34px] font-extrabold leading-[1.08] tracking-tight text-white sm:text-5xl">
              AI Governance Starter Kit
            </h1>
            <p className="mt-5 max-w-[720px] break-words font-sans text-base leading-relaxed text-[#D8E6F5] sm:text-lg">
              This page shows what is included in the paid Starter Kit: a
              coherent governance and first-pass risk assessment packet for
              founders, new business owners, consultants, operators, and lean
              teams that need a working AI documentation file.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              {starterProduct && isPurchasableProduct(starterProduct) ? (
                <PrimaryExternalLink href={starterProduct.purchaseUrl}>
                  Buy for {starterPriceLabel}
                </PrimaryExternalLink>
              ) : starterProduct ? (
                <PrimaryLink href={getProductHref(starterProduct)}>View kit details</PrimaryLink>
              ) : null}
              <SecondaryLink href="#included-files">See included files</SecondaryLink>
              <SecondaryLink href="/free-sample">Try a free sample first</SecondaryLink>
              {starterProduct && (
                <SecondaryLink href={`${getProductHref(starterProduct)}#faq`}>Read buyer FAQ</SecondaryLink>
              )}
            </div>
            <div className="mt-6 grid grid-cols-1 gap-3 border-t border-white/[0.12] pt-5 sm:grid-cols-3">
              {[
                [starterProduct ? `${starterProduct.inside.length} documents` : '14 documents', 'Editable governance and risk assessment files'],
                ['DOCX, PDF, Markdown', 'Word-compatible files, reference copies, and source files'],
                ['Educational use', 'Templates for internal readiness, not legal advice'],
              ].map(([label, body]) => (
                <div key={label} className="rounded-xl border border-white/[0.12] bg-white/[0.07] p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]">
                  <p className="font-sans text-sm font-black leading-tight text-white">{label}</p>
                  <p className="mt-2 font-sans text-xs font-semibold leading-relaxed text-[#ADC4DE]">{body}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="min-w-0 max-w-full overflow-hidden rounded-2xl border border-cyan-200/[0.14] bg-[#050B16] p-3 shadow-[0_36px_96px_-68px_rgba(0,0,0,0.9)]">
            <Image
              src={starterHeroImage?.src || starterProduct?.previewImage || '/assets/airegready-home-v3-starter-kit.avif'}
              width={starterHeroImage ? 1280 : 1586}
              height={starterHeroImage ? 720 : 992}
              alt={starterHeroImage?.alt || 'AI governance starter kit product preview with organized policy packets, checklists, and tabbed resources.'}
              className={starterHeroImage ? 'aspect-[16/9] h-auto w-full rounded-xl object-cover' : 'aspect-[16/10] h-auto w-full rounded-xl object-cover'}
              sizes="(max-width: 1024px) 100vw, 54vw"
              priority
            />
          </div>
        </div>

        {starterProduct && (
          <div id="included-files" className="relative mx-auto mt-8 max-w-[1240px] scroll-mt-24">
            <div className="min-w-0 max-w-full overflow-hidden rounded-2xl border border-white/[0.14] bg-slate-950 p-5 text-white shadow-[0_34px_90px_-70px_rgba(0,0,0,0.9)] sm:p-6">
              <div className="mb-5 flex flex-col gap-4 border-b border-slate-800 pb-5 sm:flex-row sm:items-start sm:justify-between">
                <div className="max-w-[760px]">
                  <p className="font-sans text-xs font-black uppercase tracking-[0.14em] text-cyan-300">Included resources</p>
                  <h2 className="mt-2 font-sans text-2xl font-black leading-tight text-white sm:text-3xl">
                    What is included in the Starter Kit
                  </h2>
                  <p className="mt-3 font-sans text-sm leading-relaxed text-[#B2C9ED]">
                    These are the editable resources included in the paid kit.
                    The separate catalog cards lower on the page are follow-on
                    resources and previews, not extra files silently bundled
                    into this purchase.
                  </p>
                </div>
                <span className="w-fit rounded-full bg-cyan-300/10 px-3 py-1 font-sans text-xs font-black text-cyan-200">
                  Ready to adapt
                </span>
              </div>
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {starterProduct.inside.map((item, index) => (
                  <div key={item} className="min-w-0 rounded-xl border border-slate-800 bg-slate-900 p-4">
                    <span className="font-sans text-xs font-black text-cyan-300">{String(index + 1).padStart(2, '0')}</span>
                    <p className="mt-2 font-sans text-sm font-black leading-snug text-white">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </section>

      <section id="kit-catalog" className="bg-gradient-to-b from-[#07111F] to-[#091321] px-4 py-16 text-white sm:px-6 sm:py-20" aria-labelledby="catalog-heading">
        <div className="mx-auto max-w-[1320px]">
          <SectionHeader
            id="catalog-heading"
            eyebrow="Separate catalog resources"
            title="Follow-on packets and previews live below the Starter Kit."
            body="The paid Starter Kit contents are listed above. The cards below are the next packets in line: separate follow-on resources with their own preview pages and request paths."
          />
          <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
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
