import { motion } from 'framer-motion'
import LightningBolt from './LightningBolt.jsx'

/**
 * Rayo decorativo que se mece a la deriva con corriente electrica
 * "viajando" a traves de el, en vez de aparecer/desaparecer con opacidad.
 */
export default function DecorativeBolt({
  className = '',
  rotate = 0,
  opacity = 0.18,
  duration = 7,
  driftY = 16,
  driftX = 6,
}) {
  return (
    <motion.div
      className={`absolute ${className}`}
      style={{ rotate }}
      animate={{
        y: [0, driftY, 0],
        x: [0, driftX, 0],
        rotate: [rotate - 3, rotate + 3, rotate - 3],
      }}
      transition={{ duration, repeat: Infinity, ease: 'easeInOut' }}
    >
      <div className="relative">
        <LightningBolt className="w-full h-auto" style={{ opacity }} />
        <LightningBolt className="absolute inset-0 w-full h-auto bolt-current" />
      </div>
    </motion.div>
  )
}
