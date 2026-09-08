// ---------- Barra de progreso "eléctrica" al hacer scroll ----------
// Mejora puramente decorativa: si falla, no afecta la visibilidad del sitio.
const scrollFill = document.getElementById('scroll-power-fill');
if (scrollFill) {
  const updateScrollPower = () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    scrollFill.style.width = pct + '%';
  };
  updateScrollPower();
  window.addEventListener('scroll', updateScrollPower, { passive: true });
  window.addEventListener('resize', updateScrollPower);
}

// ---------- Año dinámico en footer ----------
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

// ---------- Menú móvil ----------
const navToggle = document.getElementById('nav-toggle');
const mainNav = document.getElementById('main-nav');

if (navToggle && mainNav) {
  navToggle.addEventListener('click', () => {
    const isOpen = mainNav.classList.toggle('is-open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });

  mainNav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      mainNav.classList.remove('is-open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

// ---------- Envío de formulario de contacto ----------
const contactForm = document.getElementById('contact-form');
const formStatus = document.getElementById('form-status');

if (contactForm && formStatus) {
  contactForm.addEventListener('submit', async (event) => {
    event.preventDefault();

    const submitBtn = contactForm.querySelector('button[type="submit"]');
    const originalBtnText = submitBtn.innerHTML;

    formStatus.textContent = '';
    formStatus.className = 'form-status';
    submitBtn.disabled = true;
    submitBtn.innerHTML = 'Enviando...';

    try {
      const response = await fetch(contactForm.action, {
        method: 'POST',
        body: new FormData(contactForm),
        headers: { Accept: 'application/json' },
      });

      if (response.ok) {
        formStatus.textContent = '¡Mensaje enviado con éxito! Te responderé a la brevedad.';
        formStatus.classList.add('ok');
        contactForm.reset();
      } else {
        throw new Error('Respuesta no exitosa del servidor');
      }
    } catch (error) {
      formStatus.textContent =
        'No se pudo enviar el mensaje. Por favor, escríbeme directamente por WhatsApp o al correo hillaryogilvieg@gmail.com.';
      formStatus.classList.add('err');
    } finally {
      submitBtn.disabled = false;
      submitBtn.innerHTML = originalBtnText;
    }
  });
}
