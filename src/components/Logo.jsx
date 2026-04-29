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
  const nameClass = tone === 'dark' ? 'text-white' : 'text-[#06132E]'
  const readyClass = tone === 'dark' ? 'text-[#58D4FF]' : 'text-[#2C6BFF]'
  const gradientId = `arr-logo-shield-${size}-${tone}`

  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 64 64"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        className="shrink-0"
      >
        <defs>
          <linearGradient
            id={gradientId}
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
          >
            <stop offset="0%" stopColor="#123253" />
            <stop offset="58%" stopColor="#2C6BFF" />
            <stop offset="100%" stopColor="#58D4FF" />
          </linearGradient>
        </defs>

        <rect x="5" y="5" width="54" height="54" rx="14" fill="#06101F" />
        <rect x="7" y="7" width="50" height="50" rx="12" fill={`url(#${gradientId})`} opacity="0.98" />
        <path
          d="M32 11.5l18 7v13.6c0 11.3-7.1 17.4-18 21.2-10.9-3.8-18-9.9-18-21.2V18.5z"
          fill="#06101F"
          opacity="0.28"
        />
        <path
          d="M22.5 32.7l6.2 6.1 13.2-15.1"
          fill="none"
          stroke="#FFFFFF"
          strokeWidth="5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path d="M20 50.5h24" stroke="#9DEBFF" strokeWidth="2.3" strokeLinecap="round" opacity="0.78" />
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
