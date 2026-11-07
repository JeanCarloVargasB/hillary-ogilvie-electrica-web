import { motion } from 'framer-motion'
import LightningBolt from './LightningBolt.jsx'
import WhatsAppIcon from './WhatsAppIcon.jsx'
import { Reveal } from './Section.jsx'
import { whatsappLink } from '../data/content.js'

const stats = [
  { label: 'INA', value: 'Técnica en Electrónica Industrial' },
  { label: 'Bachillerato', value: 'Ingeniería Eléctrica' },
  { label: 'Mecatrónica', value: 'Especialidad Industrial' },
]

export default function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden bg-gradient-soft pt-24 pb-16">
      <LightningBolt
        solid
        className="hidden sm:block absolute w-36 opacity-[0.18] text-purple -top-5 -left-5 -rotate-12"
      />
      <LightningBolt
        solid
        className="hidden sm:block absolute w-48 opacity-[0.22] text-pink -bottom-10 right-[4%] rotate-12 scale-125"
      />

      <div className="relative z-10 w-[92%] max-w-[1140px] mx-auto grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] items-center gap-12">
        <Reveal>
          <span className="inline-flex items-center gap-2 font-bold text-[0.82rem] text-purple bg-white px-3.5 py-1.5 rounded-full shadow-sm mb-5">
            <span className="w-2 h-2 rounded-full bg-[#34c759] animate-pulse-dot" />
            Disponible para proyectos
          </span>

          <h1 className="text-[2.3rem] sm:text-[2.8rem] lg:text-[3.4rem] leading-[1.08] font-head font-extrabold mb-4">
            Hillary Ogilvie
            <br />
            <span className="text-gradient">Gamboa</span>
          </h1>

          <p className="font-bold text-purple text-[1.05rem] mb-4">
            Ingeniera Eléctrica &middot; Técnica en Electrónica Industrial
            <br />
            Especialidad en Mecatrónica Industrial
          </p>

          <p className="max-w-[480px] text-ink-soft leading-relaxed mb-7">
            Soluciones eléctricas y de automatización con precisión técnica: desde instalaciones y
            mantenimiento hasta control industrial y sistemas mecatrónicos.
          </p>

          <div className="flex flex-wrap gap-3.5 mb-11">
            <a
              href="#contacto"
              className="inline-flex items-center gap-2 rounded-full px-6 py-3.5 font-bold text-[0.96rem] text-white bg-gradient-main shadow-lg hover:brightness-105 hover:shadow-glow transition-all"
            >
              Solicitar servicios
            </a>
            <a
              href={whatsappLink('Hola Hillary, vi su portafolio y me gustaría conversar sobre un proyecto')}
              target="_blank"
              rel="noopener"
              className="inline-flex items-center gap-2 rounded-full px-6 py-3.5 font-bold text-[0.96rem] text-[#25D366] bg-white border-2 border-[#d9f2e3] shadow-sm hover:border-[#25D366] transition-colors"
            >
              <WhatsAppIcon className="w-[18px] h-[18px]" />
              WhatsApp directo
            </a>
          </div>

          <div className="flex flex-wrap gap-7 border-t border-purple/20 pt-6">
            {stats.map((stat) => (
              <div key={stat.label} className="flex flex-col gap-1">
                <strong className="font-head text-purple-deep text-[1.1rem]">{stat.label}</strong>
                <span className="text-[0.8rem] text-ink-soft">{stat.value}</span>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.15} className="flex justify-center">
          <div className="relative w-[280px] h-[280px] sm:w-[320px] sm:h-[320px] flex items-center justify-center">
            <svg viewBox="0 0 300 300" className="absolute inset-0 w-full h-full" aria-hidden="true">
              <polygon
                points="150,10 273,80 273,220 150,290 27,220 27,80"
                fill="rgba(255,255,255,0.5)"
                stroke="var(--color-purple-light)"
                strokeWidth="3"
                strokeDasharray="14 8"
                className="animate-rotate-dash"
                style={{ filter: 'drop-shadow(0 10px 30px rgba(124,77,191,0.25))' }}
              />
            </svg>
            <img
              src="/assets/logo-hero.gif"
              alt="Logo animado de Hillary Ogilvie"
              className="relative w-[58%] rounded-[20px] shadow-xl"
            />
            {[
              'top-[4%] left-1/2 -translate-x-1/2 bg-pink shadow-[0_0_0_4px_var(--color-pink-soft)]',
              'top-1/2 right-0 -translate-y-1/2 bg-purple shadow-[0_0_0_4px_var(--color-lilac-soft)]',
              'bottom-[4%] left-1/2 -translate-x-1/2 bg-pink shadow-[0_0_0_4px_var(--color-pink-soft)]',
              'top-1/2 left-0 -translate-y-1/2 bg-purple shadow-[0_0_0_4px_var(--color-lilac-soft)]',
            ].map((cls, i) => (
              <motion.span
                key={i}
                className={`absolute w-3 h-3 rounded-full ${cls}`}
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: i * 0.6 }}
              />
            ))}
          </div>
        </Reveal>
      </div>

      <div className="relative z-10 h-0.5 mt-16 circuit-flow-h opacity-50" />
    </section>
  )
}
