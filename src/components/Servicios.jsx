import Section, { Reveal } from './Section.jsx'
import LightningBolt from './LightningBolt.jsx'
import ServiceIcon from './ServiceIcon.jsx'
import { servicios } from '../data/content.js'

export default function Servicios() {
  return (
    <Section id="servicios" className="py-24">
      <div className="w-[92%] max-w-[1140px] mx-auto">
        <Reveal className="max-w-[640px] mx-auto text-center mb-13">
          <span className="inline-flex items-center gap-1.5 text-[0.8rem] font-bold uppercase tracking-wide text-purple bg-pink-soft px-3.5 py-1.5 rounded-full mb-3.5">
            <LightningBolt className="w-4 h-4 text-pink" />
            Servicios
          </span>
          <h2 className="text-[1.7rem] sm:text-[2.4rem] font-extrabold mb-3">Áreas de especialidad</h2>
          <p className="text-ink-soft">
            Procesos eléctricos y de automatización alineados con formación técnica e ingenieril.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicios.map((item, i) => (
            <Reveal
              key={item.title}
              delay={(i % 3) * 0.08}
              className="group bg-white rounded-[18px] p-7.5 border border-lilac-soft shadow-sm hover:shadow-md hover:border-pink hover:-translate-y-1.5 transition-all duration-300"
            >
              <div
                className={`w-13 h-13 rounded-[14px] bg-gradient-soft flex items-center justify-center mb-4.5 ${
                  item.icon === 'bolt' ? 'text-pink' : 'text-purple'
                }`}
              >
                <ServiceIcon name={item.icon} className="w-6.5 h-6.5" />
              </div>
              <h3 className="text-[1.08rem] font-head font-bold mb-2.5">{item.title}</h3>
              <p className="text-ink-soft text-[0.92rem] leading-relaxed">{item.description}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  )
}
