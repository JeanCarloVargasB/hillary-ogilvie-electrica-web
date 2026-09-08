# Página web — Hillary Ogilvie Gamboa

Sitio web profesional (HTML, CSS y JavaScript puro, sin frameworks ni build step) para portafolio y
contratación de servicios de ingeniería eléctrica, electrónica industrial y mecatrónica.

## Estructura

```
HillaryOgilvie-Web/
├── index.html
├── css/style.css
├── js/script.js
├── assets/logo.png
└── README.md
```

## Ver el sitio en local

No requiere instalación. Basta con abrir `index.html` en el navegador, o levantar un servidor
simple, por ejemplo:

```bash
npx serve .
```

## Formulario de contacto

El formulario de la sección "Contacto" envía los datos mediante
[Formspree](https://formspree.io) (gratuito, sin backend propio) al correo
**hillaryogilvieg@gmail.com**. Ya está conectado al formulario
`https://formspree.io/f/xwlkwwbd`, creado con esa misma cuenta de Gmail.

Cada envío llega directo a esa bandeja, indicando si la consulta es **Personal** o de **Empresa**.
El plan gratuito de Formspree permite 50 envíos por mes, más que suficiente para un portafolio
profesional. Si en el futuro se necesita más volumen, se puede subir de plan sin tocar el código.

Si alguna vez hay que cambiar de formulario, el único lugar a editar es el atributo `action` del
`<form>` en [index.html](index.html).

## Botón de WhatsApp

El número configurado es **8746-4466** (Costa Rica, +506), tanto en el botón flotante como en el
del encabezado y la sección de contacto. Si el número cambia, buscar `50687464466` en
[index.html](index.html) y reemplazarlo en las 3 apariciones.

## Despliegue con Git + Cloudflare Pages

Igual que con jcsystemscr.com:

1. Inicializar el repositorio (si no se ha hecho):
   ```bash
   git init
   git add .
   git commit -m "Sitio web inicial de Hillary Ogilvie"
   ```
2. Subirlo a GitHub/GitLab (crear el repositorio remoto y hacer `git push`).
3. En Cloudflare Pages: **Create a project → Connect to Git**, seleccionar el repositorio.
4. Build settings: no requiere build command ni carpeta de salida especial (es un sitio estático),
   dejar el "Build output directory" como `/` (raíz del proyecto).
5. Conectar el dominio deseado en **Custom domains** dentro del proyecto de Cloudflare Pages.

## Personalización futura

- **Portafolio**: reemplazar las tarjetas "Próximamente" de la sección `#portafolio` en
  [index.html](index.html) por proyectos reales (fotos, descripción, resultados).
- **Colores**: toda la paleta (lila, morado, rosa, blanco) está centralizada como variables CSS al
  inicio de [style.css](css/style.css), en `:root`.
- **Logo**: el archivo usado es [assets/logo.png](assets/logo.png).
