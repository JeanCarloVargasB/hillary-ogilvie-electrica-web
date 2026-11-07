import { email, whatsappLink } from '../data/content.js'

export default function Footer() {
  return (
    <footer className="bg-purple-deep text-lilac-soft pt-12 pb-7">
      <div className="w-[92%] max-w-[1140px] mx-auto flex flex-col items-center gap-3 text-center">
        <a href="#inicio" className="flex items-center gap-2.5">
          <img src="/assets/logo.png" alt="Logo Hillary Ogilvie" className="w-[42px] h-[42px] rounded-[10px]" />
          <span className="font-head text-[1.05rem] text-white">
            Hillary <strong className="text-pink">Ogilvie</strong>
          </span>
        </a>
        <p className="text-lilac-soft text-[0.9rem]">
          Ingeniera Eléctrica &middot; Técnica en Electrónica Industrial &middot; Mecatrónica
        </p>
        <div className="flex gap-5.5 mt-1.5">
          <a href={whatsappLink()} target="_blank" rel="noopener" className="font-bold text-[0.88rem] text-pink hover:underline">
            WhatsApp
          </a>
          <a href={`mailto:${email}`} className="font-bold text-[0.88rem] text-pink hover:underline">
            {email}
          </a>
        </div>
        <p className="mt-4.5 text-[0.78rem] text-white/50">
          © {new Date().getFullYear()} Hillary Ogilvie Gamboa. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  )
}
