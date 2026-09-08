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

## Pendiente antes de publicar: activar el formulario de contacto

El formulario de la sección "Contacto" está listo visualmente, pero necesita conectarse a un
servicio que envíe los datos al correo **hiiogilvie@gmail.com** (una página estática no puede
enviar correos por sí sola). Se usó [Formspree](https://formspree.io) porque es gratuito, no
requiere backend propio y se integra con una sola línea:

1. Crear una cuenta gratuita en https://formspree.io usando el correo `hiiogilvie@gmail.com`.
2. Crear un nuevo formulario ("New Form") y confirmar el correo de verificación que llega a esa
   bandeja.
3. Copiar el ID del formulario que te da Formspree (algo como `xayzabcd`).
4. En [index.html](index.html), reemplazar `TU_ID_DE_FORMSPREE` en esta línea:

   ```html
   <form class="contact-form reveal" id="contact-form" action="https://formspree.io/f/TU_ID_DE_FORMSPREE" method="POST">
   ```

   por el ID real, por ejemplo:

   ```html
   action="https://formspree.io/f/xayzabcd"
   ```

5. Guardar, subir el cambio a Git y volver a desplegar. Listo: cada envío del formulario llegará
   directo a `hiiogilvie@gmail.com`, indicando si es una consulta **Personal** o de **Empresa**.

El plan gratuito de Formspree permite 50 envíos por mes, más que suficiente para un portafolio
profesional. Si en el futuro se necesita más volumen, se puede subir de plan sin tocar el código.

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
