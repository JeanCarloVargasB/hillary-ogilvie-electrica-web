import Section, { Reveal } from './Section.jsx'
import LightningBolt from './LightningBolt.jsx'
import { formacion } from '../data/content.js'

export default function Formacion() {
  return (
    <Section id="formacion" className="py-24 bg-gradient-to-b from-lilac-soft to-off-white">
      <div className="w-[92%] max-w-[1140px] mx-auto">
        <Reveal className="max-w-[640px] mx-auto text-center mb-13">
          <span className="inline-flex items-center gap-1.5 text-[0.8rem] font-bold uppercase tracking-wide text-purple bg-pink-soft px-3.5 py-1.5 rounded-full mb-3.5">
            <LightningBolt className="w-4 h-4 text-pink" />
            Formación académica
          </span>
          <h2 className="text-[1.7rem] sm:text-[2.4rem] font-extrabold">Trayectoria técnica y profesional</h2>
        </Reveal>

        <div className="max-w-[760px] mx-auto relative flex flex-col gap-9">
          <div
            className="absolute left-[9px] top-2.5 bottom-2.5 w-0.5 circuit-flow-v"
            aria-hidden="true"
          />

          {formacion.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.12} className="grid grid-cols-[20px_1fr] gap-5.5 items-start">
              <span className="w-5 h-5 rounded-full bg-gradient-main shadow-[0_0_0_6px_var(--color-pink-soft)] mt-1" />
              <div className="bg-white rounded-[18px] px-6.5 py-6 shadow-sm border border-lilac-soft">
                <span className="inline-block text-[0.72rem] font-extrabold uppercase tracking-wide text-white bg-gradient-main px-3 py-1 rounded-full mb-2.5">
                  {item.tag}
                </span>
                <h3 className="text-[1.15rem] font-head font-bold mb-2">{item.title}</h3>
                <p className="text-ink-soft text-[0.95rem] leading-relaxed">{item.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  )
}
