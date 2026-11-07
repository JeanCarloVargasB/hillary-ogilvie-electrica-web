import { motion } from 'framer-motion'
import LightningBolt from './LightningBolt.jsx'

const bolts = [
  { className: 'w-28 -left-6 top-[8%] -rotate-12 text-purple opacity-[0.10]', delay: 0 },
  { className: 'w-40 right-[4%] top-[32%] rotate-[14deg] text-pink opacity-[0.12]', delay: 0.6 },
  { className: 'w-24 left-[8%] top-[58%] rotate-6 text-purple-light opacity-[0.10]', delay: 1.1 },
  { className: 'w-36 right-[10%] top-[78%] -rotate-[10deg] text-pink opacity-[0.10]', delay: 0.3 },
  { className: 'w-20 left-[46%] top-[92%] rotate-12 text-purple opacity-[0.08]', delay: 0.9 },
]

const orbs = [
  { className: 'w-72 h-72 left-[-6%] top-[18%] bg-pink-soft', delay: 0 },
  { className: 'w-96 h-96 right-[-10%] top-[48%] bg-lilac-soft', delay: 1.4 },
  { className: 'w-64 h-64 left-[2%] top-[82%] bg-pink-soft', delay: 0.7 },
]

/**
 * Capa de fondo decorativa, fija y persistente en toda la pagina:
 * puntos de circuito + rayos + luces difusas, con animacion sutil.
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
        <motion.div
          key={i}
          className={`absolute ${bolt.className}`}
          animate={{ opacity: [1, 0.4, 1] }}
          transition={{ duration: 3.2, repeat: Infinity, ease: 'easeInOut', delay: bolt.delay }}
        >
          <LightningBolt className="w-full h-auto" />
        </motion.div>
      ))}
    </div>
  )
}
