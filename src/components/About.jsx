import Section, { Reveal } from './Section.jsx'
import LightningBolt from './LightningBolt.jsx'

const badges = [
  'Seguridad eléctrica',
  'Normativa & planos',
  'Automatización industrial',
  'Mecatrónica',
  'Eficiencia energética',
]

export default function About() {
  return (
    <Section id="sobre-mi" className="py-24">
      <div className="w-[92%] max-w-[1140px] mx-auto">
        <Reveal className="max-w-[640px] mx-auto text-center mb-13">
          <span className="inline-flex items-center gap-1.5 text-[0.8rem] font-bold uppercase tracking-wide text-purple bg-pink-soft px-3.5 py-1.5 rounded-full mb-3.5">
            <LightningBolt className="w-4 h-4 text-pink" />
            Sobre mí
          </span>
          <h2 className="text-[1.7rem] sm:text-[2.4rem] font-extrabold">
            Energía, precisión y pasión por la electricidad
          </h2>
        </Reveal>

        <div className="max-w-[780px] mx-auto flex flex-col items-center gap-5 text-center">
          <Reveal as="p" className="text-ink-soft leading-relaxed">
            Soy Hillary Ogilvie Gamboa, Ingeniera Eléctrica con formación técnica del INA en Electrónica
            Industrial y especialidad en Mecatrónica Industrial. Combino el conocimiento técnico de campo
            con una visión de ingeniería para diseñar, instalar, mantener y optimizar sistemas eléctricos
            e industriales de forma segura, eficiente y confiable.
          </Reveal>
          <Reveal as="p" delay={0.1} className="text-ink-soft leading-relaxed">
            Mi formación me permite entender un proyecto de principio a fin: desde el análisis y diseño de
            circuitos, hasta la ejecución en campo y la automatización de procesos industriales. Trabajo
            con orden, normativa y atención al detalle, ya sea en un proyecto residencial, comercial o
            industrial.
          </Reveal>

          <Reveal delay={0.2} className="flex flex-wrap gap-2.5 justify-center mt-2">
            {badges.map((badge) => (
              <span
                key={badge}
                className="bg-white border border-lilac-soft text-purple font-bold text-[0.82rem] px-4 py-2 rounded-full shadow-sm"
              >
                {badge}
              </span>
            ))}
          </Reveal>
        </div>
      </div>
    </Section>
  )
}
