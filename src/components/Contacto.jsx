import { useState } from 'react'
import { motion } from 'framer-motion'
import Section, { Reveal } from './Section.jsx'
import LightningBolt from './LightningBolt.jsx'
import DecorativeBolt from './DecorativeBolt.jsx'
import WhatsAppIcon from './WhatsAppIcon.jsx'
import { email, formspreeAction, whatsappDisplay, whatsappLink } from '../data/content.js'

const inputClass =
  'font-body text-[0.94rem] px-3.5 py-3 rounded-xl border border-lilac-soft bg-off-white text-ink resize-y transition-colors focus:outline-none focus:border-purple focus:ring-3 focus:ring-pink-soft'

export default function Contacto() {
  const [status, setStatus] = useState({ state: 'idle', message: '' })
  const [submitting, setSubmitting] = useState(false)

  const handleSubmit = async (event) => {
    event.preventDefault()
    const form = event.target
    setSubmitting(true)
    setStatus({ state: 'idle', message: '' })

    try {
      const response = await fetch(formspreeAction, {
        method: 'POST',
        body: new FormData(form),
        headers: { Accept: 'application/json' },
      })

      if (response.ok) {
        setStatus({ state: 'ok', message: '¡Mensaje enviado con éxito! Te responderé a la brevedad.' })
        form.reset()
      } else {
        throw new Error('Respuesta no exitosa del servidor')
      }
    } catch {
      setStatus({
        state: 'err',
        message: `No se pudo enviar el mensaje. Por favor, escríbeme directamente por WhatsApp o al correo ${email}.`,
      })
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <Section id="contacto" className="relative overflow-hidden py-24">
      <DecorativeBolt
        className="hidden sm:block w-44 text-pink top-[10%] -right-8"
        rotate={18}
        opacity={0.18}
        duration={8.5}
        driftY={-14}
        driftX={-6}
      />

      <div className="relative z-10 w-[92%] max-w-[1140px] mx-auto">
        <Reveal className="max-w-[640px] mx-auto text-center mb-13">
          <span className="inline-flex items-center gap-1.5 text-[0.8rem] font-bold uppercase tracking-wide text-purple bg-pink-soft px-3.5 py-1.5 rounded-full mb-3.5">
            <LightningBolt className="w-4 h-4 text-pink" />
            Contacto
          </span>
          <h2 className="text-[1.7rem] sm:text-[2.4rem] font-extrabold mb-3">Conversemos sobre tu proyecto</h2>
          <p className="text-ink-soft">Completa el formulario o escríbeme directamente por WhatsApp.</p>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-[0.85fr_1.15fr] gap-10 items-start">
          <Reveal className="flex flex-col gap-4">
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener"
              className="flex items-center gap-3.5 bg-white border border-lilac-soft rounded-[18px] px-5 py-4.5 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all"
            >
              <span className="w-11 h-11 rounded-xl bg-gradient-soft flex items-center justify-center shrink-0">
                <WhatsAppIcon className="w-5.5 h-5.5 text-purple" />
              </span>
              <div className="flex flex-col">
                <strong className="text-purple-deep text-[0.95rem]">WhatsApp</strong>
                <span className="text-[0.85rem] text-ink-soft">{whatsappDisplay}</span>
              </div>
            </a>

            <a
              href={`mailto:${email}`}
              className="flex items-center gap-3.5 bg-white border border-lilac-soft rounded-[18px] px-5 py-4.5 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all"
            >
              <span className="w-11 h-11 rounded-xl bg-gradient-soft flex items-center justify-center shrink-0">
                <svg viewBox="0 0 24 24" className="w-5.5 h-5.5 text-purple" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d="M4 4h16v16H4z" />
                  <path d="m4 6 8 7 8-7" />
                </svg>
              </span>
              <div className="flex flex-col">
                <strong className="text-purple-deep text-[0.95rem]">Correo</strong>
                <span className="text-[0.85rem] text-ink-soft">{email}</span>
              </div>
            </a>

            <div className="flex gap-3 bg-gradient-soft rounded-[18px] px-5 py-4.5 mt-2">
              <LightningBolt solid className="w-5 h-5 text-purple shrink-0 mt-0.5" />
              <p className="text-[0.86rem] text-ink-soft leading-relaxed">
                Atiendo consultas personales y empresariales. Indícame el tipo de proyecto en el formulario
                para responderte con la información correcta.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <form
              onSubmit={handleSubmit}
              className="bg-white rounded-[22px] p-8.5 shadow-md border border-lilac-soft flex flex-col gap-4"
            >
              <label className="flex flex-col gap-1.5 text-[0.85rem] font-bold text-purple-deep">
                Tipo de solicitud
                <select name="tipo" required className={inputClass} defaultValue="">
                  <option value="" disabled>
                    Selecciona una opción
                  </option>
                  <option value="Personal">Personal</option>
                  <option value="Empresa">Empresa</option>
                </select>
              </label>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <label className="flex flex-col gap-1.5 text-[0.85rem] font-bold text-purple-deep">
                  Nombre completo
                  <input type="text" name="nombre" placeholder="Tu nombre" required className={inputClass} />
                </label>
                <label className="flex flex-col gap-1.5 text-[0.85rem] font-bold text-purple-deep">
                  Nombre de empresa <span className="font-normal text-ink-soft text-[0.78rem]">(si aplica)</span>
                  <input type="text" name="empresa" placeholder="Empresa" className={inputClass} />
                </label>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <label className="flex flex-col gap-1.5 text-[0.85rem] font-bold text-purple-deep">
                  Correo electrónico
                  <input
                    type="email"
                    name="correo"
                    placeholder="tucorreo@ejemplo.com"
                    required
                    className={inputClass}
                  />
                </label>
                <label className="flex flex-col gap-1.5 text-[0.85rem] font-bold text-purple-deep">
                  Teléfono
                  <input type="tel" name="telefono" placeholder="8888-8888" required className={inputClass} />
                </label>
              </div>

              <label className="flex flex-col gap-1.5 text-[0.85rem] font-bold text-purple-deep">
                Mensaje
                <textarea
                  name="mensaje"
                  rows={5}
                  placeholder="Cuéntame sobre tu proyecto o consulta..."
                  required
                  className={inputClass}
                />
              </label>

              <input type="hidden" name="_subject" value="Nueva consulta desde la página web" />

              <motion.button
                type="submit"
                disabled={submitting}
                whileHover={{ y: -2 }}
                className="inline-flex items-center justify-center gap-2 w-full mt-1.5 rounded-full px-6 py-3.5 font-bold text-white bg-gradient-main shadow-lg disabled:opacity-60 transition-shadow hover:shadow-glow"
              >
                <LightningBolt className="w-4 h-4" />
                {submitting ? 'Enviando...' : 'Enviar mensaje'}
              </motion.button>

              <p
                role="status"
                aria-live="polite"
                className={`text-center text-[0.86rem] font-bold min-h-5 ${
                  status.state === 'ok' ? 'text-green-700' : status.state === 'err' ? 'text-rose-600' : ''
                }`}
              >
                {status.message}
              </p>
            </form>
          </Reveal>
        </div>
      </div>
    </Section>
  )
}
