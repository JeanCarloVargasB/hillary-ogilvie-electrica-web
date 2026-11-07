import { motion, useScroll, useSpring } from 'framer-motion'

export default function ScrollPowerBar() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 200, damping: 30, restDelta: 0.001 })

  return (
    <div className="fixed top-0 left-0 w-full h-1 bg-purple/10 z-[200] pointer-events-none" aria-hidden="true">
      <motion.div
        className="relative h-full bg-gradient-main origin-left shadow-[0_0_10px_1px_rgba(242,166,214,0.6)]"
        style={{ scaleX }}
      >
        <span className="absolute top-1/2 -right-1 w-2.5 h-2.5 rounded-full bg-white -translate-y-1/2 animate-spark shadow-[0_0_8px_3px_rgba(242,166,214,1),0_0_18px_7px_rgba(242,166,214,0.55)]" />
      </motion.div>
    </div>
  )
}
