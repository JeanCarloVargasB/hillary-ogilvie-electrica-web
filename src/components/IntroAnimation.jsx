import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import LightningBolt from './LightningBolt.jsx'

const strikeBolts = [
  { className: 'w-16 left-[18%] top-[20%] rotate-[-18deg]', delay: 0.55 },
  { className: 'w-20 right-[16%] top-[14%] rotate-[22deg]', delay: 0.72 },
  { className: 'w-14 left-[26%] bottom-[18%] rotate-[8deg]', delay: 0.9 },
  { className: 'w-24 right-[22%] bottom-[22%] rotate-[-14deg]', delay: 0.65 },
]

export default function IntroAnimation({ onDone }) {
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    document.body.style.overflow = 'hidden'
    const timer = setTimeout(() => setVisible(false), 2200)
    return () => clearTimeout(timer)
  }, [])

  const dismiss = () => setVisible(false)

  return (
    <AnimatePresence
      onExitComplete={() => {
        document.body.style.overflow = ''
        onDone?.()
      }}
    >
      {visible && (
        <motion.div
          className="fixed inset-0 z-[999] flex items-center justify-center bg-gradient-to-br from-lilac-soft to-pink-soft cursor-pointer"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
          onClick={dismiss}
          role="presentation"
          aria-label="Animación de bienvenida, haz clic para omitir"
        >
          {strikeBolts.map((bolt, i) => (
            <motion.div
              key={i}
              className={`absolute text-pink drop-shadow-[0_0_14px_rgba(242,166,214,0.85)] ${bolt.className}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 1, 0.2, 1, 0] }}
              transition={{ duration: 0.5, delay: bolt.delay, times: [0, 0.2, 0.45, 0.6, 1] }}
            >
              <LightningBolt className="w-full h-auto" />
            </motion.div>
          ))}

          <motion.div
            className="relative"
            initial={{ y: -420, opacity: 0, rotate: -6 }}
            animate={{ y: 0, opacity: 1, rotate: 0 }}
            transition={{ type: 'spring', bounce: 0.48, duration: 1.1, delay: 0.1 }}
          >
            <motion.div
              className="absolute inset-0 rounded-3xl bg-pink/40 blur-2xl"
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: [0, 0.9, 0.4], scale: [0.6, 1.5, 1.2] }}
              transition={{ duration: 0.7, delay: 1.05 }}
            />
            <img
              src="/assets/logo-hero.gif"
              alt="Hillary Ogilvie"
              className="relative w-36 sm:w-44 rounded-2xl shadow-[0_20px_50px_rgba(75,46,131,0.35)]"
            />
          </motion.div>

          <motion.p
            className="absolute bottom-10 text-sm font-semibold text-purple-deep/70 tracking-wide"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.5 }}
          >
            Hillary Ogilvie Gamboa · Ingeniera Eléctrica
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
