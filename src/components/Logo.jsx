export default function Logo({
  size = 32,
  withText = true,
  textSize = 'lg',
  className = '',
}) {
  const textClass =
    textSize === 'sm'
      ? 'text-sm'
      : textSize === 'base'
      ? 'text-base'
      : 'text-lg'

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
            <stop offset="0%" stopColor="#B8956E" />
            <stop offset="100%" stopColor="#86653F" />
          </linearGradient>
        </defs>

        {/* Rounded accent square */}
        <rect width="32" height="32" rx="7" fill="url(#arr-logo-grad)" />

        {/* Custom checkmark glyph */}
        <path
          d="M8.5 16.5 L13.5 21.2 L23.5 10.2"
          fill="none"
          stroke="#FFF9F2"
          strokeWidth="2.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Subtle baseline — suggests a signed / verified mark */}
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
      {withText && (
        <span
          className={`font-sans font-bold ${textClass} text-primary tracking-tight`}
        >
          AIReg<span className="text-accent">Ready</span>
        </span>
      )}
    </span>
  )
}
