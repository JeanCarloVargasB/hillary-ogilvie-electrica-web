import { motion } from 'framer-motion'
import WhatsAppIcon from './WhatsAppIcon.jsx'
import { whatsappLink } from '../data/content.js'

export default function WhatsAppFloat() {
  return (
    <motion.a
      href={whatsappLink('Hola Hillary, me gustaría consultar sobre sus servicios eléctricos')}
      target="_blank"
      rel="noopener"
      aria-label="Contactar por WhatsApp"
      className="fixed right-[22px] bottom-[22px] w-[58px] h-[58px] rounded-full bg-[#25D366] flex items-center justify-center shadow-[0_8px_24px_rgba(37,211,102,0.45)] z-[60]"
      animate={{ y: [0, -6, 0] }}
      transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
      whileHover={{ scale: 1.08 }}
    >
      <WhatsAppIcon className="w-[30px] h-[30px] text-white" />
    </motion.a>
  )
}
