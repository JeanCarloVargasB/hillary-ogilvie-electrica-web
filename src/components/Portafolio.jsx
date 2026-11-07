import Section, { Reveal } from './Section.jsx'
import LightningBolt from './LightningBolt.jsx'
import { portafolio } from '../data/content.js'

export default function Portafolio() {
  return (
    <Section id="portafolio" className="py-24 bg-gradient-to-b from-lilac-soft to-off-white">
      <div className="w-[92%] max-w-[1140px] mx-auto">
        <Reveal className="max-w-[640px] mx-auto text-center mb-13">
          <span className="inline-flex items-center gap-1.5 text-[0.8rem] font-bold uppercase tracking-wide text-purple bg-pink-soft px-3.5 py-1.5 rounded-full mb-3.5">
            <LightningBolt className="w-4 h-4 text-pink" />
            Portafolio
          </span>
          <h2 className="text-[1.7rem] sm:text-[2.4rem] font-extrabold mb-3">Proyectos destacados</h2>
          <p className="text-ink-soft">
            Trabajo técnico aplicado en automatización industrial, mantenimiento y sistemas electromecánicos.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {portafolio.map((project, i) => (
            <Reveal
              key={project.title}
              delay={i * 0.1}
              className="group flex flex-col bg-white rounded-[18px] overflow-hidden border border-lilac-soft shadow-sm hover:shadow-md hover:-translate-y-1.5 transition-all duration-300"
            >
              <div className="aspect-[4/3] overflow-hidden bg-gradient-soft">
                <img
                  src={project.image}
                  alt={project.alt}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.06]"
                />
              </div>
              <div className="px-6 pt-5.5 pb-6.5 text-left">
                <span className="inline-block text-[0.7rem] font-extrabold uppercase tracking-wide text-purple bg-pink-soft px-3 py-1 rounded-full mb-3">
                  {project.tag}
                </span>
                <h3 className="text-[1.05rem] font-head font-bold mb-2.5">{project.title}</h3>
                <p className="text-ink-soft text-[0.88rem] leading-relaxed">{project.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  )
}
