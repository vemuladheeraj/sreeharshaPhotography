export function LotusDivider({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`w-48 mx-auto ${className}`}
      aria-hidden="true"
    >
      <path
        d="M100 12 C95 4, 85 4, 80 12 C75 4, 65 4, 60 12 C55 4, 45 4, 40 12 C35 4, 25 4, 20 12"
        stroke="#C8A96A"
        strokeWidth="0.5"
        fill="none"
        opacity="0.6"
      />
      <path
        d="M100 12 C105 4, 115 4, 120 12 C125 4, 135 4, 140 12 C145 4, 155 4, 160 12 C165 4, 175 4, 180 12"
        stroke="#C8A96A"
        strokeWidth="0.5"
        fill="none"
        opacity="0.6"
      />
      <circle cx="100" cy="12" r="2" fill="#C8A96A" opacity="0.8" />
      <line x1="0" y1="12" x2="18" y2="12" stroke="#C8A96A" strokeWidth="0.5" opacity="0.4" />
      <line x1="182" y1="12" x2="200" y2="12" stroke="#C8A96A" strokeWidth="0.5" opacity="0.4" />
    </svg>
  );
}

export function KolamPattern({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 400 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`w-full max-w-2xl mx-auto ${className}`}
      aria-hidden="true"
    >
      {Array.from({ length: 20 }).map((_, i) => (
        <g key={i} transform={`translate(${i * 20}, 0)`}>
          <circle cx="10" cy="20" r="1.5" fill="#C8A96A" opacity="0.3" />
          <path
            d="M10 20 L10 8 M10 20 L10 32 M10 20 L2 20 M10 20 L18 20"
            stroke="#C8A96A"
            strokeWidth="0.3"
            opacity="0.2"
          />
          <path
            d="M10 20 L4 14 M10 20 L16 14 M10 20 L4 26 M10 20 L16 26"
            stroke="#C8A96A"
            strokeWidth="0.3"
            opacity="0.15"
          />
        </g>
      ))}
    </svg>
  );
}

export function MangoLeafCorner({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 60 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`w-12 h-12 ${className}`}
      aria-hidden="true"
    >
      <path
        d="M5 55 C5 30, 20 10, 55 5 C40 20, 30 40, 5 55"
        stroke="#C8A96A"
        strokeWidth="0.8"
        fill="none"
        opacity="0.4"
      />
      <path
        d="M15 50 C20 35, 30 25, 45 15"
        stroke="#C8A96A"
        strokeWidth="0.4"
        fill="none"
        opacity="0.3"
      />
    </svg>
  );
}

export function TempleBellIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M12 2 C8 2, 6 6, 6 10 L6 14 C4 15, 3 16, 3 18 L21 18 C21 16, 20 15, 18 14 L18 10 C18 6, 16 2, 12 2"
        stroke="currentColor"
        strokeWidth="1"
        fill="none"
      />
      <line x1="12" y1="18" x2="12" y2="21" stroke="currentColor" strokeWidth="1" />
      <circle cx="12" cy="22" r="1" fill="currentColor" />
      <path d="M8 6 L8 4 M16 6 L16 4" stroke="currentColor" strokeWidth="0.8" />
    </svg>
  );
}

export function WeddingKnot({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 80 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`w-20 h-10 ${className}`}
      aria-hidden="true"
    >
      <path
        d="M10 20 C10 10, 25 10, 30 20 C35 30, 50 30, 55 20 C60 10, 75 10, 75 20"
        stroke="#C8A96A"
        strokeWidth="0.8"
        fill="none"
        opacity="0.5"
      />
      <circle cx="40" cy="20" r="3" stroke="#C8A96A" strokeWidth="0.5" fill="none" opacity="0.6" />
    </svg>
  );
}

export function BrassLamp({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <ellipse cx="12" cy="8" rx="6" ry="3" stroke="currentColor" strokeWidth="0.8" fill="none" />
      <path d="M6 8 L8 20 L16 20 L18 8" stroke="currentColor" strokeWidth="0.8" fill="none" />
      <line x1="12" y1="20" x2="12" y2="26" stroke="currentColor" strokeWidth="0.8" />
      <ellipse cx="12" cy="28" rx="4" ry="1.5" stroke="currentColor" strokeWidth="0.8" fill="none" />
      <path d="M10 4 Q12 0, 14 4" stroke="currentColor" strokeWidth="0.6" fill="none" opacity="0.6" />
    </svg>
  );
}

export function JasmineAccent({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`w-8 h-8 ${className}`}
      aria-hidden="true"
    >
      {[0, 72, 144, 216, 288].map((angle) => (
        <ellipse
          key={angle}
          cx="20"
          cy="12"
          rx="3"
          ry="6"
          fill="#C8A96A"
          opacity="0.2"
          transform={`rotate(${angle} 20 20)`}
        />
      ))}
      <circle cx="20" cy="20" r="2" fill="#C8A96A" opacity="0.4" />
    </svg>
  );
}

export function RangoliBackground({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`absolute inset-0 w-full h-full ${className}`}
      aria-hidden="true"
      preserveAspectRatio="xMidYMid slice"
    >
      <circle cx="100" cy="100" r="80" stroke="#C8A96A" strokeWidth="0.3" opacity="0.08" fill="none" />
      <circle cx="100" cy="100" r="60" stroke="#C8A96A" strokeWidth="0.3" opacity="0.06" fill="none" />
      <circle cx="100" cy="100" r="40" stroke="#C8A96A" strokeWidth="0.3" opacity="0.04" fill="none" />
      {Array.from({ length: 8 }).map((_, i) => (
        <line
          key={i}
          x1="100"
          y1="20"
          x2="100"
          y2="180"
          stroke="#C8A96A"
          strokeWidth="0.2"
          opacity="0.05"
          transform={`rotate(${i * 45} 100 100)`}
        />
      ))}
    </svg>
  );
}
