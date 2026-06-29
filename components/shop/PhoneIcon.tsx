const PALETTE: Record<string, { body: string; border: string; screen: string; notch: string }> = {
  X:   { body: '#C7D5FA', border: '#3B5BDB', screen: '#E8EFFF', notch: '#3B5BDB' },
  XR:  { body: '#FAD9C7', border: '#C2410C', screen: '#FFF3E8', notch: '#C2410C' },
  11:  { body: '#C7FAD9', border: '#15803D', screen: '#E8FFF3', notch: '#15803D' },
  12:  { body: '#C7E4FA', border: '#1D6FA4', screen: '#E8F5FF', notch: '#1D6FA4' },
  13:  { body: '#D9C7FA', border: '#6D28D9', screen: '#F0E8FF', notch: '#6D28D9' },
  14:  { body: '#FAE9C7', border: '#B45309', screen: '#FFF8E8', notch: '#B45309' },
  15:  { body: '#C7FAF0', border: '#0D9488', screen: '#E8FFF8', notch: '#0D9488' },
  16:  { body: '#E4C7FA', border: '#7C3AED', screen: '#F5E8FF', notch: '#7C3AED' },
  17:  { body: '#C7EAFA', border: '#29B9E8', screen: '#E8F6FD', notch: '#1A3A4A' },
}

interface Props { series: string; className?: string }

export default function PhoneIcon({ series, className = 'w-full' }: Props) {
  const p = PALETTE[series] ?? PALETTE['17']
  const hasHome = ['X', 'XR', '11'].includes(series)
  const hasDynamic = ['14', '15', '16', '17'].includes(series)

  return (
    <svg viewBox="0 0 100 170" className={className} xmlns="http://www.w3.org/2000/svg">
      <rect x="8" y="4" width="84" height="162" rx="18" fill={p.body} stroke={p.border} strokeWidth="4" />
      <rect x="18" y="16" width="64" height="130" rx="8" fill={p.screen} />
      {hasHome && (
        <>
          <rect x="37" y="20" width="26" height="5" rx="2.5" fill={p.notch} />
          <circle cx="50" cy="157" r="6" fill="none" stroke={p.border} strokeWidth="2.5" />
        </>
      )}
      {hasDynamic && (
        <rect x="32" y="20" width="36" height="9" rx="4.5" fill={p.notch} />
      )}
      {!hasHome && !hasDynamic && (
        <rect x="36" y="20" width="28" height="6" rx="3" fill={p.notch} />
      )}
    </svg>
  )
}
