const base = {
  width: 22,
  height: 22,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.6,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
}

export const ProductGlyph = ({ name }) => {
  const paths = {
    cloud: <path d="M17.5 19a4.5 4.5 0 0 0 .3-9A6 6 0 0 0 6.3 11 3.5 3.5 0 0 0 7 19h10.5Z" />,
    chart: (
      <>
        <path d="M4 19V5" />
        <path d="M4 19h16" />
        <path d="m7.5 14.5 3.5-4 3 2.5 4.5-5.5" />
      </>
    ),
    spark: (
      <>
        <path d="M11 3.5 12.9 8.6 18 10.5l-5.1 1.9L11 17.5 9.1 12.4 4 10.5l5.1-1.9L11 3.5Z" />
        <path d="M17.5 15.5 18.2 17.4 20 18.1l-1.8.7-.7 1.8-.7-1.8-1.8-.7 1.8-.7.7-1.9Z" />
      </>
    ),
    map: (
      <>
        <path d="m3 6.5 6-2.5 6 2.5 6-2.5v13L15 19.5 9 17l-6 2.5v-13Z" />
        <path d="M9 4v13M15 6.5v13" />
      </>
    ),
    shield: (
      <>
        <path d="M12 3.2 19 6v5.6c0 4.2-2.9 7.4-7 8.6-4.1-1.2-7-4.4-7-8.6V6l7-2.8Z" />
        <path d="m9.2 12 2 2 3.6-3.8" />
      </>
    ),
    chat: (
      <>
        <path d="M20 14.5a2.5 2.5 0 0 1-2.5 2.5H8l-4 3.5v-13A2.5 2.5 0 0 1 6.5 5h11A2.5 2.5 0 0 1 20 7.5v7Z" />
        <path d="M8.5 10.5h7M8.5 13.5h4" />
      </>
    ),
    ledger: (
      <>
        <rect x="4" y="3" width="16" height="18" rx="2" />
        <path d="M8 8h8M8 12h8M8 16h5" />
      </>
    ),
  }
  return <svg {...base} width={24} height={24}>{paths[name] ?? paths.cloud}</svg>
}

export const ArrowUpRight = () => (
  <svg {...base} width={16} height={16}>
    <path d="M7 17 17 7M8 7h9v9" />
  </svg>
)

export const MailIcon = () => (
  <svg {...base} width={18} height={18}>
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="m3.5 7 8.5 6 8.5-6" />
  </svg>
)

export const PinIcon = () => (
  <svg {...base} width={18} height={18}>
    <path d="M12 21s7-5.5 7-11a7 7 0 1 0-14 0c0 5.5 7 11 7 11Z" />
    <circle cx="12" cy="10" r="2.5" />
  </svg>
)

export const ClockIcon = () => (
  <svg {...base} width={18} height={18}>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7v5l3 2" />
  </svg>
)

export const MenuIcon = ({ open }) => (
  <svg {...base} width={22} height={22} strokeWidth={1.8}>
    {open ? <path d="m6 6 12 12M18 6 6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
  </svg>
)

export const CheckIcon = () => (
  <svg {...base} width={28} height={28} strokeWidth={2}>
    <path d="m5 13 4.5 4.5L19 7" />
  </svg>
)
