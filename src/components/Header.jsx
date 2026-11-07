import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import WhatsAppIcon from './WhatsAppIcon.jsx'
import { navLinks, whatsappLink } from '../data/content.js'

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white/85 backdrop-blur-md border-b border-lilac-soft">
      <div className="w-[92%] max-w-[1140px] mx-auto flex items-center justify-between gap-4 py-3.5">
        <a href="#inicio" className="flex items-center gap-2.5">
          <img src="/assets/logo.png" alt="Logo Hillary Ogilvie" className="w-[42px] h-[42px] rounded-[10px]" />
          <span className="font-head text-[1.05rem] text-purple-deep">
            Hillary <strong className="text-purple">Ogilvie</strong>
          </span>
        </a>

        <nav className="hidden md:flex gap-7">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative font-semibold text-[0.92rem] text-ink py-1 group"
            >
              {link.label}
              <span className="absolute left-0 -bottom-0.5 w-0 h-0.5 bg-gradient-main transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3.5">
          <a
            href={whatsappLink('Hola Hillary, me gustaría consultar sobre sus servicios eléctricos')}
            target="_blank"
            rel="noopener"
            className="flex items-center gap-2 rounded-full bg-white border-2 border-[#d9f2e3] px-4 py-2 text-[0.82rem] font-bold text-[#25D366] shadow-sm hover:border-[#25D366] transition-colors"
          >
            <WhatsAppIcon className="w-4 h-4" />
            <span className="hidden sm:inline">87464466</span>
          </a>

          <button
            className="md:hidden flex flex-col gap-1.5 p-1.5"
            aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <motion.span
              className="w-[22px] h-0.5 bg-purple-deep rounded-sm block"
              animate={open ? { rotate: 45, y: 6.5 } : { rotate: 0, y: 0 }}
            />
            <motion.span
              className="w-[22px] h-0.5 bg-purple-deep rounded-sm block"
              animate={{ opacity: open ? 0 : 1 }}
            />
            <motion.span
              className="w-[22px] h-0.5 bg-purple-deep rounded-sm block"
              animate={open ? { rotate: -45, y: -6.5 } : { rotate: 0, y: 0 }}
            />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="md:hidden overflow-hidden bg-white shadow-md"
          >
            <div className="flex flex-col gap-4 px-6 py-5">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="font-semibold text-ink"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  )
}
