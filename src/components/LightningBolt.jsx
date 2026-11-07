export default function LightningBolt({ className = '', solid = true, style }) {
  return (
    <svg viewBox="0 0 100 200" className={className} style={style} aria-hidden="true">
      {solid ? (
        <polygon points="60,0 20,110 50,110 35,200 85,80 55,80" fill="currentColor" />
      ) : (
        <polygon
          points="60,0 20,110 50,110 35,200 85,80 55,80"
          fill="none"
          stroke="currentColor"
          strokeWidth="4"
        />
      )}
    </svg>
  )
}
