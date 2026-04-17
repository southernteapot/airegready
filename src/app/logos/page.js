import Link from 'next/link'

/* ------------------------------------------------------------------ */
/*  Logo variants                                                      */
/* ------------------------------------------------------------------ */

function WarmCheckMark({ size = 32 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="v1-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#B8956E" />
          <stop offset="100%" stopColor="#86653F" />
        </linearGradient>
      </defs>
      <rect width="32" height="32" rx="7" fill="url(#v1-grad)" />
      <path
        d="M8.5 16.5 L13.5 21.2 L23.5 10.2"
        fill="none"
        stroke="#FFF9F2"
        strokeWidth="2.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <rect
        x="8"
        y="24.2"
        width="16"
        height="1.4"
        rx="0.7"
        fill="#FFF9F2"
        opacity="0.45"
      />
    </svg>
  )
}

function SerifMonogram({ size = 32 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="v2-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#B8956E" />
          <stop offset="100%" stopColor="#86653F" />
        </linearGradient>
      </defs>
      <circle cx="16" cy="16" r="15" fill="url(#v2-grad)" />
      <text
        x="16"
        y="23"
        textAnchor="middle"
        fontFamily="'Libre Baskerville', Georgia, serif"
        fontSize="20"
        fontWeight="700"
        fill="#FFF9F2"
      >
        R
      </text>
    </svg>
  )
}

function FocusBrackets({ size = 32 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Four L-shaped corner brackets — viewfinder look */}
      <path
        d="M4.5 11 L4.5 4.5 L11 4.5
           M21 4.5 L27.5 4.5 L27.5 11
           M27.5 21 L27.5 27.5 L21 27.5
           M11 27.5 L4.5 27.5 L4.5 21"
        stroke="#9E7A56"
        strokeWidth="2.5"
        strokeLinecap="round"
        fill="none"
      />
      {/* Center dot */}
      <circle cx="16" cy="16" r="2.5" fill="#9E7A56" />
    </svg>
  )
}

function CompassMark({ size = 32 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="v4-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#B8956E" />
          <stop offset="100%" stopColor="#86653F" />
        </linearGradient>
      </defs>
      <rect width="32" height="32" rx="7" fill="url(#v4-grad)" />
      {/* North arrow (filled) */}
      <path d="M16 6 L20 16 L16 14 L12 16 Z" fill="#FFF9F2" />
      {/* South arrow (lighter) */}
      <path d="M16 26 L12 16 L16 18 L20 16 Z" fill="#FFF9F2" opacity="0.5" />
      {/* Center dot */}
      <circle cx="16" cy="16" r="1.25" fill="#86653F" />
    </svg>
  )
}

function StackedLines({ size = 32 }) {
  // Book spine / document stack — suggests reference material
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="v5-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#B8956E" />
          <stop offset="100%" stopColor="#86653F" />
        </linearGradient>
      </defs>
      <rect width="32" height="32" rx="7" fill="url(#v5-grad)" />
      <rect x="8" y="9" width="16" height="2" rx="1" fill="#FFF9F2" />
      <rect x="8" y="14" width="12" height="2" rx="1" fill="#FFF9F2" opacity="0.7" />
      <rect x="8" y="19" width="14" height="2" rx="1" fill="#FFF9F2" opacity="0.55" />
      {/* Small accent check at bottom-right */}
      <path
        d="M20 23 L22 25 L26 21"
        fill="none"
        stroke="#FFF9F2"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function ArMonogram({ size = 32 }) {
  // Overlapping A and R — technical + editorial
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="v6-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#B8956E" />
          <stop offset="100%" stopColor="#86653F" />
        </linearGradient>
      </defs>
      <rect width="32" height="32" rx="7" fill="url(#v6-grad)" />
      <text
        x="16"
        y="22"
        textAnchor="middle"
        fontFamily="'Libre Baskerville', Georgia, serif"
        fontSize="14"
        fontWeight="700"
        letterSpacing="-0.5"
        fill="#FFF9F2"
      >
        AR
      </text>
    </svg>
  )
}

/* ------------------------------------------------------------------ */
/*  Wordmark variants                                                  */
/* ------------------------------------------------------------------ */

function SansWordmark() {
  return (
    <span className="font-sans font-bold text-lg text-primary tracking-tight">
      AIReg<span className="text-accent">Ready</span>
    </span>
  )
}

function SerifWordmark() {
  return (
    <span className="font-serif font-bold text-lg text-primary tracking-tight">
      AIReg<span className="text-accent">Ready</span>
    </span>
  )
}

function SerifWordmarkWithDot() {
  return (
    <span className="inline-flex items-center gap-2">
      <span className="w-2 h-2 rounded-full bg-accent" />
      <span className="font-serif font-bold text-lg text-primary tracking-tight">
        AIReg<span className="text-accent">Ready</span>
      </span>
    </span>
  )
}

function SplitWordmark() {
  return (
    <span className="font-sans font-bold text-lg tracking-tight">
      <span className="text-accent">AI</span>
      <span className="text-primary mx-0.5">·</span>
      <span className="text-primary">Reg</span>
      <span className="text-primary font-normal italic">Ready</span>
    </span>
  )
}

/* ------------------------------------------------------------------ */
/*  Variant card                                                       */
/* ------------------------------------------------------------------ */

function VariantCard({ number, name, description, mark, wordmark }) {
  return (
    <div className="bg-surface border border-border/70 rounded-xl p-6">
      <div className="flex items-center justify-between mb-5">
        <span className="font-sans text-xs font-bold uppercase tracking-[0.14em] text-accent">
          Option {number}
        </span>
        <span className="font-sans text-xs text-secondary font-medium">
          {name}
        </span>
      </div>

      {/* Primary display — NavBar size */}
      <div className="bg-bg border border-border/50 rounded-lg p-6 flex items-center justify-center mb-3">
        <span className="inline-flex items-center gap-2.5">
          {mark && mark({ size: 32 })}
          {wordmark && wordmark()}
        </span>
      </div>

      {/* Size variations */}
      <div className="grid grid-cols-3 gap-2 mb-3">
        {/* Large */}
        {mark && (
          <div className="bg-bg border border-border/50 rounded-lg p-4 flex items-center justify-center">
            {mark({ size: 56 })}
          </div>
        )}
        {/* Medium */}
        {mark && (
          <div className="bg-bg border border-border/50 rounded-lg p-4 flex items-center justify-center">
            {mark({ size: 40 })}
          </div>
        )}
        {/* Small */}
        {mark && (
          <div className="bg-bg border border-border/50 rounded-lg p-4 flex items-center justify-center">
            {mark({ size: 20 })}
          </div>
        )}
        {/* If no mark, show wordmark at different sizes */}
        {!mark && wordmark && (
          <div className="col-span-3 bg-bg border border-border/50 rounded-lg p-4 flex items-center justify-center">
            {wordmark()}
          </div>
        )}
      </div>

      {/* Dark variant preview */}
      <div className="bg-primary border border-primary rounded-lg p-4 flex items-center justify-center mb-4">
        <span className="inline-flex items-center gap-2.5">
          {mark && mark({ size: 28 })}
          {wordmark && (
            <span className="font-sans font-bold text-base tracking-tight text-[#FFF9F2]">
              AIReg<span className="text-[#D4B896]">Ready</span>
            </span>
          )}
        </span>
      </div>

      <p className="font-sans text-sm text-secondary leading-relaxed">
        {description}
      </p>
    </div>
  )
}

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */

export const metadata = {
  title: 'Logo Options',
  robots: { index: false, follow: false },
}

const variants = [
  {
    number: 1,
    name: 'Warm Check (current)',
    description:
      'Rounded accent square with a custom checkmark and a subtle verified-baseline underline. Says "ready / done." Matches the current sans wordmark.',
    mark: WarmCheckMark,
    wordmark: SansWordmark,
  },
  {
    number: 2,
    name: 'Serif Monogram',
    description:
      'Accent-filled circle with a serif "R" in Libre Baskerville, paired with a matching serif wordmark. Editorial, classical, refined. Best for a more authoritative feel.',
    mark: SerifMonogram,
    wordmark: SerifWordmark,
  },
  {
    number: 3,
    name: 'Focus Brackets',
    description:
      'Four L-shaped corner brackets forming an implied viewfinder, with a small center dot. No background fill. Modern, minimalist, literally means "getting oriented."',
    mark: FocusBrackets,
    wordmark: SansWordmark,
  },
  {
    number: 4,
    name: 'Compass Mark',
    description:
      'Minimalist N/S compass needle inside the rounded accent square. Says "navigation / guidance." Fits the site’s orientation / readiness framing.',
    mark: CompassMark,
    wordmark: SansWordmark,
  },
  {
    number: 5,
    name: 'Stacked Lines + Check',
    description:
      'Three lines like a document stack, with a small checkmark at the bottom corner. Evokes reference material and review. A nod to "library of practical AI info."',
    mark: StackedLines,
    wordmark: SansWordmark,
  },
  {
    number: 6,
    name: 'AR Monogram',
    description:
      'Overlapping "AR" letters in serif inside the accent square. More traditional brand-mark feel. Loses the "AI" framing but reads as a classical logo.',
    mark: ArMonogram,
    wordmark: SansWordmark,
  },
  {
    number: 7,
    name: 'Pure Serif Wordmark',
    description:
      'No icon at all. Just the wordmark in Libre Baskerville serif, matching the site’s heading treatment. Elegant, editorial, less "tech," more "journal."',
    mark: null,
    wordmark: SerifWordmark,
  },
  {
    number: 8,
    name: 'Serif Wordmark + Dot',
    description:
      'Small accent dot followed by the Libre Baskerville serif wordmark. A lightweight version of the serif direction. Feels like a byline or a published work.',
    mark: null,
    wordmark: SerifWordmarkWithDot,
  },
  {
    number: 9,
    name: 'Split Wordmark',
    description:
      'Typographic treatment only: accent "AI" + divider + "Reg" + italic "Ready". Reads the brand as two halves. Works without a mark. Most distinctive typographically.',
    mark: null,
    wordmark: SplitWordmark,
  },
]

export default function LogosPage() {
  return (
    <div className="pt-28 pb-20 px-6">
      <div className="max-w-[1200px] mx-auto">
        <div className="mb-10">
          <p className="font-sans text-xs font-bold uppercase tracking-[0.14em] text-accent mb-3">
            Internal — Not Indexed
          </p>
          <h1 className="font-serif text-3xl sm:text-4xl font-bold text-primary leading-tight mb-3">
            Logo Options
          </h1>
          <p className="font-sans text-base text-secondary leading-relaxed max-w-[640px]">
            Nine logo directions to choose from. Each is shown at NavBar size
            (32&thinsp;px mark + wordmark), then at large / medium / favicon
            sizes, then on a dark background. Pick the one you like and I’ll
            wire it into the site.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {variants.map((v) => (
            <VariantCard key={v.number} {...v} />
          ))}
        </div>

        <div className="mt-12 bg-accent/10 border border-accent/20 rounded-xl p-6">
          <h2 className="font-serif text-lg font-bold text-primary mb-2">
            How to pick
          </h2>
          <ul className="font-sans text-sm text-secondary leading-relaxed space-y-1.5 list-disc pl-5">
            <li>
              <strong>1, 4, 5</strong> — currently feel closest to the
              warm-professional brand (accent-filled mark, sans wordmark).
            </li>
            <li>
              <strong>2, 7, 8</strong> — shift toward a more
              editorial/authoritative feel (serif wordmark). Biggest
              identity change.
            </li>
            <li>
              <strong>3</strong> — most minimalist. Works if you want the
              site to read as a tool rather than a publication.
            </li>
            <li>
              <strong>9</strong> — wordmark-only with typographic
              structure. Distinctive, but no scalable mark for favicon/social.
            </li>
          </ul>
          <p className="font-sans text-sm text-secondary mt-4">
            Back to{' '}
            <Link href="/" className="text-accent underline">
              homepage
            </Link>
            .
          </p>
        </div>
      </div>
    </div>
  )
}
