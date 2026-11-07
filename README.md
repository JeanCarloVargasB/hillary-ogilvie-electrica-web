# Página web — Hillary Ogilvie Gamboa

Portafolio profesional de Ingeniería Eléctrica, Electrónica Industrial y Mecatrónica, construido con
**React + Vite + Tailwind CSS v4 + Framer Motion**.

## Stack

- **Vite** — build tool y servidor de desarrollo.
- **React 19** — componentes de la interfaz.
- **Tailwind CSS v4** (`@tailwindcss/vite`) — estilos, con la paleta de marca definida en
  [src/index.css](src/index.css) (`@theme`).
- **Framer Motion** — animación de entrada (logo + rayos), barra de progreso al hacer scroll,
  menú móvil y aparición de secciones al hacer scroll.

## Estructura

```
HillaryOgilvie-Web/
├── index.html              # punto de entrada de Vite
├── public/assets/          # logo, gif animado, fotos de proyectos (se sirven tal cual)
├── src/
│   ├── main.jsx
│   ├── App.jsx              # arma todas las secciones
│   ├── index.css            # tema de Tailwind (colores, fuentes, animaciones de circuito)
│   ├── data/content.js      # textos, servicios, proyectos y datos de contacto centralizados
│   └── components/
│       ├── IntroAnimation.jsx   # animación de entrada: logo cae + rayos rosados
│       ├── ElectricBackground.jsx # rayos y luces de fondo, fijos en toda la página
│       ├── ScrollPowerBar.jsx   # barra "eléctrica" de progreso de scroll
│       ├── Header.jsx, Hero.jsx, About.jsx, Formacion.jsx, Servicios.jsx,
│       │   Portafolio.jsx, Contacto.jsx, Footer.jsx, WhatsAppFloat.jsx
│       └── Section.jsx, LightningBolt.jsx, ServiceIcon.jsx, WhatsAppIcon.jsx
├── wrangler.jsonc           # despliegue a Cloudflare Workers (assets.directory: "dist")
└── package.json
```

## Desarrollo local

Requiere Node 20+.

```bash
npm install
npm run dev
```

Abre la URL que muestra la terminal (por defecto `http://localhost:5173`).

Para generar la versión de producción:

```bash
npm run build      # genera la carpeta dist/
npm run preview    # sirve dist/ localmente para probarla antes de publicar
```

## Formulario de contacto

El formulario de la sección "Contacto" envía los datos mediante
[Formspree](https://formspree.io) (gratuito, sin backend propio) al correo
**hillaryogilvieg@gmail.com**. El endpoint está en
[src/data/content.js](src/data/content.js) (`formspreeAction`), conectado a
`https://formspree.io/f/xwlkwwbd`.

Cada envío llega directo a esa bandeja, indicando si la consulta es **Personal** o de **Empresa**.
El plan gratuito de Formspree permite 50 envíos por mes. Si alguna vez hay que cambiar de
formulario, el único lugar a editar es `formspreeAction` en ese archivo.

## Botón de WhatsApp

El número configurado es **8746-4466** (Costa Rica, +506). Está centralizado en
[src/data/content.js](src/data/content.js) (`whatsappNumber`) — cambiarlo ahí actualiza el botón
flotante, el del encabezado, el del hero y el de la sección de contacto a la vez.

## Despliegue con Git + Cloudflare

El proyecto está conectado a Cloudflare (Workers & Pages → `hillary-ogilvie-electrica-web`), que
despliega automáticamente con cada `git push` a `main`.

**Importante:** como ahora el sitio necesita compilarse (ya no son archivos estáticos sueltos), en
el dashboard de Cloudflare, dentro del proyecto → **Settings → Build**, el **Build command** debe
ser:

```
npm install && npm run build
```

y el **Deploy command** se mantiene como `npx wrangler deploy` (usa [wrangler.jsonc](wrangler.jsonc),
que ya apunta a la carpeta compilada `dist/`).

Para conectar o cambiar el dominio: **Settings → Domains & Routes → Add Custom Domain**.

## Personalización futura

- **Textos, servicios y proyectos del portafolio**: todo centralizado en
  [src/data/content.js](src/data/content.js) — no hace falta tocar los componentes para
  agregar/editar un proyecto o servicio.
- **Colores**: paleta lila/morado/rosa/blanco definida en [src/index.css](src/index.css)
  dentro de `@theme`.
- **Fotos de proyectos**: agregar la imagen en `public/assets/` y referenciarla en
  `src/data/content.js`.
- **Logos**: `public/assets/logo.png` (header, footer) y `public/assets/logo-hero.gif`
  (animación de entrada y hero).
