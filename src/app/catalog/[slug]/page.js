import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import PreviewRequestForm from '@/components/PreviewRequestForm'
import {
  getAvailableProductSlugs,
  getProductBySlug,
  getProductHref,
  getProductKind,
  getProductPriceLabel,
  isPurchasableProduct,
} from '@/lib/marketing'
import { absoluteUrl, buildPageMetadata } from '@/lib/seo'

export function generateStaticParams() {
  return getAvailableProductSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({ params }) {
  const { slug } = await params
  const product = getProductBySlug(slug)
  if (!product) return {}

  return buildPageMetadata({
    title: `${product.title} — AI Governance Catalog`,
    description: `${product.helps} Preview the audience, included documents, and request path for this AI governance resource package.`,
    path: getProductHref(product),
  })
}

function buildProductSchema(product) {
  const url = absoluteUrl(getProductHref(product))
  const graph = [
    {
      '@type': 'WebPage',
      '@id': url,
      name: product.title,
      description: product.helps,
      url,
      mainEntity: {
        '@id': `${url}#product`,
      },
    },
    {
      '@type': 'Product',
      '@id': `${url}#product`,
      name: product.title,
      description: product.helps,
      category: getProductKind(product),
      image: absoluteUrl(product.previewImage),
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
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Catalog',
          item: absoluteUrl('/catalog'),
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: product.title,
        },
      ],
    },
  ]

  if (product.faq?.length) {
    graph.push({
      '@type': 'FAQPage',
      '@id': `${url}#faq`,
      mainEntity: product.faq.map((item) => ({
        '@type': 'Question',
        name: item.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: item.answer,
        },
      })),
    })
  }

  return {
    '@context': 'https://schema.org',
    '@graph': graph,
  }
}

function buildUseCases(product) {
  return [
    `Turn ${product.inside[0]} and related notes into a working record your team can revisit.`,
    'Give founders, operators, and non-legal staff a plain-English starting point before counsel or leadership review.',
    'Create a consistent file structure for governance updates, vendor questions, training, and internal decisions.',
  ]
}

function buildReviewPrompts(product) {
  return [
    `Who owns this ${getProductKind(product).toLowerCase()} after the first draft is created?`,
    'Which AI tools, workflows, vendors, or data categories should be documented first?',
    'Which decisions need qualified legal, privacy, security, procurement, or leadership review?',
  ]
}

function buildDeliveryDetails(product) {
  if (!isPurchasableProduct(product)) return null

  return [
    'Fourteen editable documents spanning governance basics, readiness, rollout, risk tiering, impact assessment, risk register, review notes, and update tracking.',
    'DOCX files for editing, PDF reference copies, and Markdown versions for teams that work in docs or repositories.',
    'A Start Here guide and legal-use notice so buyers understand how to adapt the combined packet without treating it as legal advice.',
    'Instant Gumroad delivery after purchase; no public direct ZIP download is exposed on AIRegReady.',
    'Designed for founders, new business owners, consultants, operators, and lean teams using tools like ChatGPT, Claude, Gemini, Copilot, transcription tools, customer-support bots, or vendor AI features.',
  ]
}

function PrimaryAction({ href, children }) {
  return (
    <Link
      href={href}
      className="inline-flex min-h-11 items-center justify-center rounded-lg bg-[#174EA6] px-5 py-3 font-sans text-sm font-bold text-white no-underline shadow-[0_16px_34px_-24px_rgba(23,78,166,0.95)] transition hover:bg-[#2C6BFF]"
    >
      {children}
    </Link>
  )
}

function ExternalPrimaryAction({ href, children }) {
  return (
    <a
      href={href}
      rel="noopener noreferrer"
      className="inline-flex min-h-11 items-center justify-center rounded-lg bg-[#174EA6] px-5 py-3 font-sans text-sm font-bold text-white no-underline shadow-[0_16px_34px_-24px_rgba(23,78,166,0.95)] transition hover:bg-[#2C6BFF]"
    >
      {children}
    </a>
  )
}

function SecondaryAction({ href, children }) {
  return (
    <Link
      href={href}
      className="inline-flex min-h-11 items-center justify-center rounded-lg border border-[#BED2F4] bg-white px-5 py-3 font-sans text-sm font-bold text-[#06132E] no-underline transition hover:border-[#2C6BFF] hover:bg-[#F8FBFF] dark:border-slate-700 dark:bg-slate-950 dark:text-white dark:hover:border-cyan-300"
    >
      {children}
    </Link>
  )
}

function PreviewPanel({ product }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-white/[0.14] bg-[#050B16] p-3 shadow-[0_34px_90px_-70px_rgba(0,0,0,0.9)]">
      <Image
        src={product.previewImage}
        width="1586"
        height="992"
        alt={`${product.title} preview workspace with organized AI governance documents and trackers.`}
        className="aspect-[16/10] h-auto w-full rounded-xl object-cover"
        sizes="(max-width: 1024px) 100vw, 48vw"
        priority
      />
      <div className="grid grid-cols-1 gap-3 p-2 pt-5 sm:grid-cols-2 sm:p-5">
        {product.inside.map((item, index) => (
          <div key={item} className="rounded-xl border border-[#D7E5F8] bg-white p-4 text-[#06132E] dark:border-slate-800 dark:bg-slate-900 dark:text-white">
            <span className="font-sans text-xs font-black text-[#2C6BFF] dark:text-cyan-300">{String(index + 1).padStart(2, '0')}</span>
            <p className="mt-2 font-sans text-sm font-black">{item}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

function DetailList({ title, items, id }) {
  return (
    <section id={id} className="scroll-mt-24 rounded-2xl border border-[#C9D7E6] bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-950">
      <h2 className="font-sans text-2xl font-black leading-tight text-[#06132E] dark:text-white">
        {title}
      </h2>
      <div className="mt-5 grid grid-cols-1 gap-3">
        {items.map((item) => (
          <div key={item} className="flex gap-3 rounded-xl border border-[#D7E5F8] bg-[#F8FBFF] p-4 dark:border-slate-800 dark:bg-slate-900">
            <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-[#2C6BFF]" aria-hidden="true" />
            <p className="font-sans text-sm leading-relaxed text-[#455571] dark:text-[#B2C9ED]">
              {item}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}

function ProductFaq({ faq, product }) {
  if (!faq?.length) return null

  return (
    <section id="faq" className="bg-[#0A1524] px-4 py-16 text-white sm:px-6 sm:py-20">
      <div className="mx-auto max-w-[1120px]">
        <div className="max-w-[760px]">
          <p className="font-sans text-xs font-black uppercase tracking-[0.16em] text-[#8EF1FF]">
            Buyer questions
          </p>
          <h2 className="mt-3 font-sans text-3xl font-black leading-tight text-white sm:text-4xl">
            Before you buy the {product.title}
          </h2>
          <p className="mt-4 font-sans text-base leading-relaxed text-[#B2C9ED]">
            The short version: this is a practical starter packet, not a legal
            opinion or compliance guarantee. These are the questions that matter
            before a founder, operator, or new business owner spends money on it.
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-4 lg:grid-cols-2">
          {faq.map((item) => (
            <article key={item.question} className="rounded-2xl border border-[#D7E5F8] bg-[#F8FBFF] p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900">
              <h3 className="font-sans text-lg font-black leading-snug text-[#06132E] dark:text-white">
                {item.question}
              </h3>
              <p className="mt-3 font-sans text-sm leading-relaxed text-[#455571] dark:text-[#B2C9ED]">
                {item.answer}
              </p>
            </article>
          ))}
        </div>

        {isPurchasableProduct(product) && (
          <div className="mt-8 flex flex-col items-start gap-3 rounded-2xl border border-[#BED2F4] bg-white p-5 shadow-sm sm:flex-row sm:items-center sm:justify-between dark:border-slate-800 dark:bg-slate-950">
            <p className="font-sans text-sm font-bold leading-relaxed text-[#06132E] dark:text-white">
              Ready to start from a coherent packet instead of a blank-page prompt loop?
            </p>
            <ExternalPrimaryAction href={product.purchaseUrl}>
              {product.purchaseCta || `Buy for ${getProductPriceLabel(product)}`}
            </ExternalPrimaryAction>
          </div>
        )}
      </div>
    </section>
  )
}

export default async function CatalogProductPage({ params }) {
  const { slug } = await params
  const product = getProductBySlug(slug)
  if (!product) notFound()

  const productSchema = buildProductSchema(product)
  const useCases = buildUseCases(product)
  const reviewPrompts = buildReviewPrompts(product)
  const isPurchasable = isPurchasableProduct(product)
  const priceLabel = getProductPriceLabel(product)
  const deliveryDetails = buildDeliveryDetails(product)

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      <div className="overflow-x-hidden bg-[#07111F] text-white">
        <section className="relative overflow-hidden border-b border-white/[0.06] bg-[#07111F] px-4 pb-12 pt-24 text-white sm:px-6">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_24%,rgba(88,212,255,0.14),transparent_32%),radial-gradient(circle_at_82%_16%,rgba(44,107,255,0.16),transparent_30%)]" aria-hidden="true" />
          <div className="relative mx-auto grid max-w-[1240px] grid-cols-1 gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
            <div>
              <nav aria-label="Breadcrumb" className="mb-6">
                <ol className="flex flex-wrap gap-2 font-sans text-sm font-bold text-[#ADC4DE]">
                  <li>
                    <Link href="/catalog" className="text-[#8EF1FF] no-underline hover:text-white">
                      Catalog
                    </Link>
                  </li>
                  <li aria-hidden="true">/</li>
                  <li aria-current="page">{product.title}</li>
                </ol>
              </nav>
              <p className="font-sans text-xs font-black uppercase tracking-[0.16em] text-[#8EF1FF]">
                {isPurchasable ? `${getProductKind(product)} available now` : `${getProductKind(product)} preview`}
              </p>
              <h1 className="mt-4 max-w-[760px] break-words font-sans text-[34px] font-extrabold leading-[1.08] tracking-tight text-white sm:text-5xl">
                {product.title}
              </h1>
              <p className="mt-5 max-w-[720px] font-sans text-base leading-relaxed text-[#D8E6F5] sm:text-lg">
                {product.helps}{' '}
                {isPurchasable
                  ? 'This page shows what is included, the delivery structure, and the educational-use boundary before you buy.'
                  : 'This page shows the audience, file contents, delivery structure, and request path without implying legal advice or a compliance guarantee.'}
              </p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                {isPurchasable ? (
                  <ExternalPrimaryAction href={product.purchaseUrl}>
                    {product.purchaseCta || `Buy for ${priceLabel}`}
                  </ExternalPrimaryAction>
                ) : (
                  <PrimaryAction href="#request-preview">
                    Request preview
                  </PrimaryAction>
                )}
                <SecondaryAction href={isPurchasable ? '#request-preview' : '/assessment'}>
                  {isPurchasable ? 'Ask a question first' : 'Start assessment first'}
                </SecondaryAction>
              </div>
            </div>
            <PreviewPanel product={product} />
          </div>
        </section>

        <section className="bg-gradient-to-b from-[#07111F] to-[#091321] px-4 py-16 text-white sm:px-6 sm:py-20">
          <div className="mx-auto grid max-w-[1240px] grid-cols-1 gap-6 lg:grid-cols-[0.8fr_1.2fr]">
            <aside className="rounded-2xl border border-[#C9D7E6] bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-950">
              <p className="font-sans text-xs font-black uppercase tracking-[0.16em] text-[#2C6BFF] dark:text-[#58D4FF]">
                Best fit
              </p>
              <h2 className="mt-3 font-sans text-2xl font-black leading-tight text-[#06132E] dark:text-white">
                Who this is for
              </h2>
              <p className="mt-4 font-sans text-base leading-relaxed text-[#455571] dark:text-[#B2C9ED]">
                {product.audience}
              </p>
              <div className="mt-6 rounded-xl border border-[#D7E5F8] bg-[#F8FBFF] p-4 dark:border-slate-800 dark:bg-slate-900">
                <p className="font-sans text-xs font-black uppercase tracking-[0.14em] text-[#7B8DA3]">
                  {isPurchasable ? 'Availability' : 'Preview status'}
                </p>
                <p className="mt-2 font-sans text-sm font-bold leading-relaxed text-[#06132E] dark:text-white">
                  {isPurchasable ? (
                    <>
                      Available now for {priceLabel} through Gumroad. Purchase
                      includes instant delivery from Gumroad; no public direct ZIP
                      download is exposed on this site.
                    </>
                  ) : (
                    <>
                      Available by request. No published price or direct download is
                      attached to this page yet.
                    </>
                  )}
                </p>
              </div>
            </aside>

            <div className="grid grid-cols-1 gap-6">
              {deliveryDetails && (
                <DetailList id="what-you-get" title="What you get" items={deliveryDetails} />
              )}
              <DetailList title="What is inside" items={product.inside} />
              <DetailList title="How teams can use it" items={useCases} />
              <DetailList title="Questions to answer before adapting it" items={reviewPrompts} />
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-b from-[#091321] to-[#0A1524] px-4 py-16 text-white sm:px-6 sm:py-20">
          <div className="mx-auto grid max-w-[1120px] grid-cols-1 gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div>
              <p className="font-sans text-xs font-black uppercase tracking-[0.16em] text-[#8EF1FF]">
                Request workflow
              </p>
              <h2 className="mt-3 font-sans text-3xl font-black leading-tight text-white sm:text-4xl">
                {isPurchasable
                  ? 'Buy the kit now, or ask a question first.'
                  : 'Request the preview, then decide whether the package fits.'}
              </h2>
              <p className="mt-4 font-sans text-base leading-relaxed text-[#B2C9ED]">
                {isPurchasable ? (
                  <>
                    The paid kit is delivered by Gumroad as an instant digital
                    download. If you want to ask a question before buying, the
                    form captures the package name, organization
                    type, and use case.
                  </>
                ) : (
                  <>
                    The request form captures the package name, organization type,
                    and use case so the preview can be handled cleanly. It does not
                    create a legal engagement or promise a compliance outcome.
                  </>
                )}
              </p>
            </div>
            <div className="grid grid-cols-1 gap-3">
              {(isPurchasable
                ? [
                    ['01', `Buy for ${priceLabel}`, 'Purchase through Gumroad and receive the digital download from Gumroad.'],
                    ['02', 'Start with DOCX files', 'Use the editable Word-compatible files for the first pass, with PDFs as reference copies.'],
                    ['03', 'Adapt with review', 'Treat every template as an educational starting point and route legal obligations to qualified counsel.'],
                  ]
                : [
                    ['01', 'Request preview', `Ask for the ${product.title} preview with a short note about your organization and use case.`],
                    ['02', 'Review internally', 'Use the preview to decide whether the document structure matches your current governance gap.'],
                    ['03', 'Adapt with review', 'Treat any template as an educational starting point and route legal obligations to qualified counsel.'],
                  ]
              ).map(([number, title, body]) => (
                <div key={number} className="rounded-2xl border border-[#D7E5F8] bg-[#F8FBFF] p-5 dark:border-slate-800 dark:bg-slate-900">
                  <span className="font-sans text-xs font-black text-[#2C6BFF] dark:text-[#58D4FF]">{number}</span>
                  <h3 className="mt-2 font-sans text-lg font-black text-[#06132E] dark:text-white">{title}</h3>
                  <p className="mt-2 font-sans text-sm leading-relaxed text-[#455571] dark:text-[#B2C9ED]">{body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <ProductFaq faq={product.faq} product={product} />

        <section id="request-preview" className="bg-gradient-to-b from-[#0A1524] to-[#07111F] px-4 py-12 sm:px-6">
          <div className="mx-auto grid max-w-[1120px] grid-cols-1 gap-6 rounded-2xl border border-[#C9D7E6] bg-white p-6 shadow-sm lg:grid-cols-[0.8fr_1.2fr] dark:border-slate-800 dark:bg-slate-950">
            <div>
              <p className="font-sans text-xs font-black uppercase tracking-[0.16em] text-[#2C6BFF] dark:text-[#58D4FF]">
                {isPurchasable ? 'Product question' : 'Preview request'}
              </p>
              <h2 className="mt-3 font-sans text-2xl font-black leading-tight text-[#06132E] dark:text-white">
                {isPurchasable
                  ? `Ask a question about the ${product.title}.`
                  : `Ask for the ${product.title} preview.`}
              </h2>
              <p className="mt-2 font-sans text-sm leading-relaxed text-[#455571] dark:text-[#B2C9ED]">
                AIRegReady resources are starting points for internal governance
                work. Share enough context to route the request, but do not send
                sensitive personal, legal, or confidential business information.
              </p>
            </div>
            <PreviewRequestForm
              product={{ slug: product.slug, title: product.title }}
              submitLabel={isPurchasable ? 'Send question' : 'Send preview request'}
            />
          </div>
        </section>
      </div>
    </>
  )
}
