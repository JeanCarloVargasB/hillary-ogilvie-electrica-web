export const whatsappNumber = '50687464466'
export const whatsappDisplay = '8746-4466'
export const email = 'hillaryogilvieg@gmail.com'
export const formspreeAction = 'https://formspree.io/f/xwlkwwbd'

export const whatsappLink = (text) =>
  `https://wa.me/${whatsappNumber}${text ? `?text=${encodeURIComponent(text)}` : ''}`

export const navLinks = [
  { href: '#inicio', label: 'Inicio' },
  { href: '#sobre-mi', label: 'Sobre mí' },
  { href: '#formacion', label: 'Formación' },
  { href: '#servicios', label: 'Servicios' },
  { href: '#portafolio', label: 'Portafolio' },
  { href: '#mas-servicios', label: 'Más servicios' },
  { href: '#contacto', label: 'Contacto' },
]

export const formacion = [
  {
    tag: 'INA',
    title: 'Técnica en Electrónica Industrial',
    description:
      'Especialidad en Mecatrónica Industrial. Formación práctica en circuitos electrónicos, instrumentación, control industrial y mantenimiento de sistemas electromecánicos.',
  },
  {
    tag: 'Bachillerato universitario',
    title: 'Ingeniería Eléctrica',
    description:
      'Formación en análisis de circuitos, sistemas de potencia, diseño e instalaciones eléctricas, normativa técnica y gestión de proyectos de ingeniería.',
  },
]

export const servicios = [
  {
    icon: 'bolt',
    title: 'Instalaciones eléctricas',
    description:
      'Diseño e instalación de sistemas eléctricos residenciales, comerciales e industriales, conforme a normativa vigente.',
  },
  {
    icon: 'automation',
    title: 'Automatización industrial',
    description:
      'Control y automatización de procesos industriales, incluyendo lógica de control y sistemas de mando.',
  },
  {
    icon: 'maintenance',
    title: 'Mantenimiento eléctrico',
    description:
      'Mantenimiento preventivo y correctivo de tableros, motores y sistemas electromecánicos.',
  },
  {
    icon: 'circuit',
    title: 'Diseño y análisis de circuitos',
    description:
      'Cálculo, diseño y análisis de circuitos eléctricos y planos técnicos para proyectos nuevos o remodelaciones.',
  },
  {
    icon: 'mechatronics',
    title: 'Sistemas mecatrónicos',
    description: 'Integración de electrónica, mecánica y control para sistemas automatizados eficientes.',
  },
  {
    icon: 'projects',
    title: 'Proyectos residenciales & empresariales',
    description: 'Asesoría, supervisión y ejecución de proyectos eléctricos a la medida de personas y empresas.',
  },
]

export const serviciosAdicionales = [
  {
    icon: 'machine',
    title: 'Mantenimiento de máquinas industriales',
    description:
      'Diagnóstico, reparación y mantenimiento preventivo de maquinaria de producción: motores, bandas, sensores y sistemas de control asociados.',
  },
  {
    icon: 'blueprint',
    title: 'Diseño de planos eléctricos',
    description:
      'Elaboración de planos y diagramas unifilares para instalaciones residenciales, comerciales e industriales, listos para construcción o trámite.',
  },
  {
    icon: 'energy',
    title: 'Eficiencia energética y ahorro eléctrico',
    description:
      'Análisis de consumo y recomendaciones técnicas para reducir el gasto eléctrico sin sacrificar desempeño, en hogares y empresas.',
  },
]

export const portafolio = [
  {
    image: '/assets/proyecto-plc-siemens.jpeg',
    tag: 'Automatización industrial · PLC',
    title: 'Automatización de estación con PLC Siemens',
    description:
      'Integración de sensórica fotoeléctrica, electroválvulas y actuadores neumáticos sobre riel lineal, con lógica de control programada en PLC Siemens para sincronizar detección de pieza, posicionamiento y ciclo de actuación.',
    alt: 'Estación automatizada con sensor fotoeléctrico y actuadores neumáticos controlada por PLC Siemens',
  },
  {
    image: '/assets/proyecto-empacadora-vffs.jpeg',
    tag: 'Mantenimiento industrial',
    title: 'Mantenimiento de empacadora vertical (VFFS)',
    description:
      'Diagnóstico y mantenimiento de máquina formadora-selladora vertical: calibración de celda de carga para dosificación por peso, ajuste de rodillos de arrastre de película y revisión del sistema de sellado térmico, con énfasis en seguridad eléctrica en puntos de riesgo mecánico.',
    alt: 'Mantenimiento de máquina empacadora vertical formadora y selladora de bolsas',
  },
  {
    image: '/assets/proyecto-electromecanico.jpeg',
    tag: 'Electromecánica · Neumática',
    title: 'Banco de sistemas electromecánicos',
    description:
      'Panel multiestación para control eléctrico y neumático: circuitos de mando con pulsadores, relés y pilotos combinados con actuadores y válvulas, aplicados al diagnóstico y diseño de sistemas de control industrial.',
    alt: 'Panel didáctico de sistemas electromecánicos y neumática con circuitos de control',
  },
]
