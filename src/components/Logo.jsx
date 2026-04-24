export default function Logo({
  size = 32,
  withText = true,
  textSize = 'lg',
  className = '',
  tone = 'light',
}) {
  const textClass =
    textSize === 'sm'
      ? 'text-sm'
      : textSize === 'base'
      ? 'text-base'
      : 'text-lg'
  const nameClass = tone === 'dark' ? 'text-white' : 'text-primary'
  const readyClass = tone === 'dark' ? 'text-cyan-200' : 'text-[#0F5E9C]'

  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 32 32"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        className="shrink-0"
      >
        <defs>
          <linearGradient
            id="arr-logo-grad"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
          >
            <stop offset="0%" stopColor="#123253" />
            <stop offset="58%" stopColor="#0F5E9C" />
            <stop offset="100%" stopColor="#2CA6A4" />
          </linearGradient>
        </defs>

        <rect width="32" height="32" rx="8" fill="#06101F" />
        <rect x="1" y="1" width="30" height="30" rx="7" fill="url(#arr-logo-grad)" opacity="0.96" />
        <path
          d="M16 5.2l8 3.4v6.1c0 5.3-3.2 8.4-8 10.1-4.8-1.7-8-4.8-8-10.1V8.6z"
          fill="#06101F"
          opacity="0.34"
        />

        <path
          d="M9.2 16.4l4.2 4.1 9.1-10.1"
          fill="none"
          stroke="#FFFFFF"
          strokeWidth="2.7"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        <path d="M10 24.4h12" stroke="#9BE1DC" strokeWidth="1.3" strokeLinecap="round" opacity="0.75" />
      </svg>
      {withText && (
        <span
          className={`font-sans font-bold ${textClass} ${nameClass} tracking-tight`}
        >
          AIReg<span className={readyClass}>Ready</span>
        </span>
      )}
    </span>
  )
}
