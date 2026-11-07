import { motion } from 'framer-motion'

/**
 * Envoltorio reutilizable: aparece siempre (sin JS no hay React, asi que
 * esto nunca es la causa de que el contenido no se vea) y anima al entrar
 * en vista como mejora progresiva.
 */
export default function Section({ id, className = '', children }) {
  return (
    <motion.section
      id={id}
      className={className}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      {children}
    </motion.section>
  )
}

export function Reveal({ as = 'div', delay = 0, className = '', children }) {
  const Tag = typeof as === 'string' ? motion[as] : as
  return (
    <Tag
      className={className}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55, ease: 'easeOut', delay }}
    >
      {children}
    </Tag>
  )
}
