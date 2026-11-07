const icons = {
  bolt: (
    <path d="M13 2 3 14h7l-1 8 11-14h-7z" fill="currentColor" stroke="none" />
  ),
  automation: (
    <>
      <circle cx="12" cy="12" r="3" />
      <path d="M12 2v3M12 19v3M4.2 4.2l2.1 2.1M17.7 17.7l2.1 2.1M2 12h3M19 12h3M4.2 19.8l2.1-2.1M17.7 6.3l2.1-2.1" />
    </>
  ),
  maintenance: (
    <>
      <rect x="4" y="4" width="16" height="16" rx="2" />
      <path d="M9 9h6v6H9z" />
    </>
  ),
  circuit: <path d="M3 12h4l2-7 4 14 2-7h6" />,
  mechatronics: (
    <>
      <circle cx="7" cy="7" r="2.5" />
      <circle cx="17" cy="7" r="2.5" />
      <circle cx="7" cy="17" r="2.5" />
      <circle cx="17" cy="17" r="2.5" />
      <path d="M9 7h6M7 9v6M17 9v6M9 17h6" />
    </>
  ),
  projects: <path d="M4 20h16M6 20V10l6-6 6 6v10M10 20v-6h4v6" />,
}

export default function ServiceIcon({ name, className = '' }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {icons[name]}
    </svg>
  )
}
