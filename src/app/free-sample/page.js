import Link from 'next/link'
import MarketingNewsletter from '@/components/MarketingNewsletter'
import { buildPageMetadata } from '@/lib/seo'
import { getProductBySlug, getProductPriceLabel, isPurchasableProduct } from '@/lib/marketing'

export const metadata = buildPageMetadata({
  title: 'Free Sample: AI Use Inventory Template',
  description:
    'Download a free AI use inventory template — one real document from the paid AI Governance Starter Kit — in PDF and DOCX, no email required.',
  path: '/free-sample',
})

const sampleFiles = [
  {
    label: 'Download the PDF',
    href: '/downloads/airegready-free-sample-ai-use-inventory.pdf',
    note: 'Reference copy for reading and printing.',
  },
  {
    label: 'Download the DOCX',
    href: '/downloads/airegready-free-sample-ai-use-inventory.docx',
    note: 'Editable Word-compatible file you can fill out today.',
  },
]

const whatItCovers = [
  'Every AI tool, vendor feature, and account used for work — in one table',
  'Who owns each tool and what it is used for',
  'What data each tool touches, including sensitive-data flags',
  'Approval status and review cadence so the list does not go stale',
]

export default function FreeSamplePage() {
  const starterKit = getProductBySlug('ai-governance-starter-kit')
  const priceLabel = starterKit && isPurchasableProduct(starterKit) ? getProductPriceLabel(starterKit) : null

  return (
    <div className="overflow-x-hidden bg-[#07111F] text-white">
      <section className="relative overflow-hidden border-b border-white/[0.06] bg-[#07111F] px-4 pb-12 pt-24 sm:px-6" aria-labelledby="free-sample-heading">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_24%,rgba(44,166,164,0.16),transparent_32%),radial-gradient(circle_at_82%_16%,rgba(47,128,194,0.18),transparent_30%)]" aria-hidden="true" />
        <div className="relative mx-auto grid max-w-[1240px] grid-cols-1 gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
          <div className="min-w-0">
            <p className="font-sans text-xs font-black uppercase tracking-[0.16em] text-[#8EF1FF]">
              Free sample document
            </p>
            <h1 id="free-sample-heading" className="mt-4 max-w-[760px] break-words font-sans text-[34px] font-extrabold leading-[1.08] tracking-tight text-white sm:text-5xl">
              Try the AI Use Inventory before you buy anything.
            </h1>
            <p className="mt-5 max-w-[720px] font-sans text-base leading-relaxed text-[#D8E6F5] sm:text-lg">
              This is one real document from the paid AI Governance Starter
              Kit — not a stripped-down teaser. It is the inventory most
              founders and operators fill out first, and it is free to
              download with no email required.
            </p>
            <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {sampleFiles.map((file) => (
                <a
                  key={file.href}
                  href={file.href}
                  download
                  className="rounded-2xl border border-[#58D4FF]/30 bg-white/[0.07] p-5 no-underline shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] transition hover:border-[#8EF1FF] hover:bg-white/[0.12]"
                >
                  <span className="font-sans text-base font-black text-white">{file.label} <span aria-hidden="true">-&gt;</span></span>
                  <p className="mt-2 font-sans text-sm leading-relaxed text-[#B2C9ED]">{file.note}</p>
                </a>
              ))}
            </div>
            <p className="mt-4 font-sans text-xs leading-relaxed text-[#ADC4DE]">
              Educational template only — not legal advice, and no compliance
              outcome is guaranteed. Adapt it to your situation and use
              qualified review where your obligations require it.
            </p>
          </div>
          <div className="min-w-0 rounded-2xl border border-white/[0.14] bg-[#050B16] p-6 shadow-[0_34px_90px_-70px_rgba(0,0,0,0.9)]">
            <p className="font-sans text-xs font-black uppercase tracking-[0.14em] text-cyan-300">What the inventory covers</p>
            <ul className="mt-4 grid grid-cols-1 gap-3">
              {whatItCovers.map((item) => (
                <li key={item} className="flex gap-3 rounded-xl border border-slate-800 bg-slate-900 p-4">
                  <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-[#58D4FF]" aria-hidden="true" />
                  <p className="font-sans text-sm leading-relaxed text-[#B2C9ED]">{item}</p>
                </li>
              ))}
            </ul>
            <div className="mt-5 rounded-xl border border-cyan-200/[0.18] bg-[#0B1626] p-4">
              <p className="font-sans text-sm font-bold leading-relaxed text-white">
                The inventory is 1 of 14 documents in the full Starter Kit,
                which adds the acceptable use policy, risk intake, risk
                register, rollout aids, and update tracker.
              </p>
              <Link
                href="/catalog/ai-governance-starter-kit"
                className="mt-3 inline-flex min-h-11 items-center justify-center rounded-lg bg-[#0F5E9C] px-5 py-3 font-sans text-sm font-bold text-white no-underline shadow-[0_14px_30px_-22px_rgba(15,94,156,0.95)] transition hover:bg-[#0B4A7D]"
              >
                {priceLabel ? `See the full kit — ${priceLabel}` : 'See the full kit'}
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-b from-[#07111F] to-[#091321] px-4 py-16 sm:px-6" aria-labelledby="sample-next-heading">
        <div className="mx-auto grid max-w-[1120px] grid-cols-1 gap-6 lg:grid-cols-[1fr_1fr] lg:items-start">
          <div className="rounded-2xl border border-[#C9D7E6] bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-950">
            <h2 id="sample-next-heading" className="font-sans text-2xl font-black leading-tight text-[#0B1B2F] dark:text-white">
              How to use the sample in your first 30 minutes
            </h2>
            <ol className="mt-5 grid grid-cols-1 gap-3">
              {[
                'Open the DOCX and list every AI tool or vendor AI feature you or your team touched this month.',
                'Mark which tools see customer, client, or other sensitive data.',
                'Assign an owner to each tool — even if the owner is just you.',
                'Note the one tool or workflow that worries you most. That is where review starts.',
              ].map((step, index) => (
                <li key={step} className="flex gap-3 rounded-xl border border-[#D7E5F8] bg-[#F8FBFF] p-4 dark:border-slate-800 dark:bg-slate-900">
                  <span className="font-sans text-xs font-black text-[#2C6BFF] dark:text-cyan-300">{String(index + 1).padStart(2, '0')}</span>
                  <p className="font-sans text-sm leading-relaxed text-[#455571] dark:text-[#B2C9ED]">{step}</p>
                </li>
              ))}
            </ol>
            <div className="mt-5 flex flex-wrap gap-3">
              <Link href="/assessment" className="font-sans text-sm font-black text-[#0F5E9C] no-underline dark:text-cyan-300">
                Take the free readiness assessment <span aria-hidden="true">-&gt;</span>
              </Link>
              <Link href="/checklist" className="font-sans text-sm font-black text-[#0F5E9C] no-underline dark:text-cyan-300">
                Use the free checklist <span aria-hidden="true">-&gt;</span>
              </Link>
            </div>
          </div>
          <div className="rounded-2xl border border-white/[0.14] bg-white p-6 text-[#06132E] shadow-[0_34px_90px_-70px_rgba(0,0,0,0.9)] dark:bg-slate-950 dark:text-white">
            <p className="font-sans text-xs font-black uppercase tracking-[0.14em] text-[#2C6BFF] dark:text-[#58D4FF]">Optional</p>
            <h2 className="mt-2 font-sans text-2xl font-black leading-tight">
              Want updates when new templates and guides go live?
            </h2>
            <p className="mt-3 font-sans text-sm leading-relaxed text-[#536684] dark:text-[#B2C9ED]">
              The newsletter covers AI regulation changes in plain English,
              plus new checklists and kit releases. The download above is
              yours either way.
            </p>
            <div className="mt-4">
              <MarketingNewsletter />
            </div>
            <p className="mt-3 font-sans text-xs leading-relaxed text-[#536684] dark:text-[#B2C9ED]">
              Educational updates only. No legal advice or compliance guarantee.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
