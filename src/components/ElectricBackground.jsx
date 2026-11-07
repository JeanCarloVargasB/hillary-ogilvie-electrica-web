import { motion } from 'framer-motion'
import DecorativeBolt from './DecorativeBolt.jsx'

const bolts = [
  { pos: 'w-28 -left-6 top-[8%] text-purple', rotate: -12, opacity: 0.16, duration: 7, driftY: 16, driftX: 6 },
  { pos: 'w-40 right-[4%] top-[32%] text-pink', rotate: 14, opacity: 0.18, duration: 8.5, driftY: -18, driftX: -8 },
  { pos: 'w-24 left-[8%] top-[58%] text-purple-light', rotate: 6, opacity: 0.16, duration: 6.5, driftY: 14, driftX: -5 },
  { pos: 'w-36 right-[10%] top-[78%] text-pink', rotate: -10, opacity: 0.16, duration: 9, driftY: -16, driftX: 7 },
  { pos: 'w-20 left-[46%] top-[92%] text-purple', rotate: 12, opacity: 0.13, duration: 7.5, driftY: 12, driftX: 5 },
]

const orbs = [
  { className: 'w-72 h-72 left-[-6%] top-[18%] bg-pink-soft', delay: 0 },
  { className: 'w-96 h-96 right-[-10%] top-[48%] bg-lilac-soft', delay: 1.4 },
  { className: 'w-64 h-64 left-[2%] top-[82%] bg-pink-soft', delay: 0.7 },
]

/**
 * Capa de fondo decorativa, fija y persistente en toda la pagina: luces
 * difusas que laten suavemente, y rayos que se mecen a la deriva con
 * corriente electrica "viajando" a traves de ellos (en vez de parpadear).
 */
export default function ElectricBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none" aria-hidden="true">
      <div className="circuit-bg" />

      {orbs.map((orb, i) => (
        <motion.div
          key={i}
          className={`absolute rounded-full blur-3xl opacity-40 ${orb.className}`}
          animate={{ opacity: [0.25, 0.45, 0.25], scale: [1, 1.08, 1] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: orb.delay }}
        />
      ))}

      {bolts.map((bolt, i) => (
        <DecorativeBolt
          key={i}
          className={bolt.pos}
          rotate={bolt.rotate}
          opacity={bolt.opacity}
          duration={bolt.duration}
          driftY={bolt.driftY}
          driftX={bolt.driftX}
        />
      ))}
    </div>
  )
}
