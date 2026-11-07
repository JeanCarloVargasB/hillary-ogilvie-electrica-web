import IntroAnimation from './components/IntroAnimation.jsx'
import ScrollPowerBar from './components/ScrollPowerBar.jsx'
import ElectricBackground from './components/ElectricBackground.jsx'
import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Formacion from './components/Formacion.jsx'
import Servicios from './components/Servicios.jsx'
import Portafolio from './components/Portafolio.jsx'
import Contacto from './components/Contacto.jsx'
import Footer from './components/Footer.jsx'
import WhatsAppFloat from './components/WhatsAppFloat.jsx'

export default function App() {
  return (
    <>
      <IntroAnimation />
      <ScrollPowerBar />
      <ElectricBackground />

      <Header />
      <main>
        <Hero />
        <About />
        <Formacion />
        <Servicios />
        <Portafolio />
        <Contacto />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  )
}
