# Phase 1 — Foundation & Design System

**Para:** Builder (Claude Code)
**Modelo recomendado:** claude-opus-4-5 o superior
**Tiempo estimado:** 60-90 min
**Output esperado:** Astro project deployado en Vercel con nav + hero + footer funcionales

---

## Objetivo de esta fase

Construir el esqueleto del website: setup, design system, componentes base, primera página visible en Vercel. NO construir páginas internas todavía.

Al terminar esta fase, vaydawellness.vercel.app debe mostrar:
- Nav funcional (transparente en hero, cream en scroll)
- Hero section con foto real + overlay + headline
- Footer básico
- Design tokens correctos

---

## Paso 1 — Crear el proyecto

```bash
# En el directorio del workspace
npm create astro@latest vaydawellness-website -- --template minimal --typescript strict --git

cd vaydawellness-website

# Instalar dependencias
npx astro add tailwind
npm install @astrojs/image sharp
npm install @fontsource/inter
```

---

## Paso 2 — Configurar TailwindCSS

Crear/reemplazar `tailwind.config.mjs`:

```js
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'forest':  '#2D4A35',
        'cream':   '#F8F5F0',
        'sage':    '#657F66',
        'beige':   '#D7D5C6',
        'charcoal':'#2D3436',
      },
      fontFamily: {
        'serif': ['Cormorant Garamond', 'Georgia', 'serif'],
        'sans':  ['Inter', '-apple-system', 'sans-serif'],
      },
      fontSize: {
        'display': ['72px', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'h1':      ['56px', { lineHeight: '1.15', letterSpacing: '-0.01em' }],
        'h2':      ['42px', { lineHeight: '1.2' }],
        'h3':      ['28px', { lineHeight: '1.35' }],
        'body-lg': ['18px', { lineHeight: '1.7' }],
        'body':    ['17px', { lineHeight: '1.7' }],
        'sm':      ['14px', { lineHeight: '1.5', letterSpacing: '0.03em' }],
      },
      maxWidth: {
        'container': '1200px',
      },
      backgroundOpacity: {
        '35': '0.35',
        '50': '0.50',
      }
    },
  },
  plugins: [],
}
```

---

## Paso 3 — Google Fonts

En `src/layouts/BaseLayout.astro`, agregar en `<head>`:

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400;1,600&family=Inter:wght@300;400;500;600&display=swap" rel="stylesheet">
```

---

## Paso 4 — Copiar assets

```bash
# Desde el workspace, copiar assets al proyecto
mkdir -p public/brand public/photos

cp clients/ramesh-vayda/assets/brand/01-logo-on-green.png public/brand/
cp clients/ramesh-vayda/assets/brand/01-logo-dark-on-cream.png public/brand/
cp clients/ramesh-vayda/assets/brand/01-logo-dark-transparent.png public/brand/
cp clients/ramesh-vayda/assets/brand/02-logo-symbol-dark-transparent.png public/brand/

cp clients/ramesh-vayda/assets/brand/11-course-content.jpg public/photos/hero.jpg
cp clients/ramesh-vayda/assets/brand/07-course-carousel-1.jpg public/photos/meditation-group.jpg
cp clients/ramesh-vayda/assets/brand/08-course-carousel-2.jpg public/photos/ramesh-teaching.jpg
cp clients/ramesh-vayda/assets/brand/04-coaching-card.jpg public/photos/coaching.jpg
cp clients/ramesh-vayda/assets/brand/06-founder-ramesh.jpg public/photos/ramesh-founder.jpg
cp clients/ramesh-vayda/assets/brand/09-course-carousel-3.jpg public/photos/workshop.jpg
```

---

## Paso 5 — Componentes a crear

### `src/components/Nav.astro`
Requisitos:
- Sticky, `position: fixed`, `top-0 w-full z-50`
- Por defecto: `bg-transparent` con logo blanco (`/brand/01-logo-on-green.png`)
- En scroll (JS): añadir clase `scrolled` → `bg-cream/95 backdrop-blur-sm shadow-sm` + logo verde (`/brand/01-logo-dark-on-cream.png`)
- Links: `Home · About · The Vayda Method · Programs · Blog`
- Links color: blanco por defecto, charcoal en scrolled
- CTA: botón "Take the Quiz" → bg-forest text-white en default; mismo en scrolled
- Mobile: hamburger menu simple

```js
// Script para cambio en scroll
window.addEventListener('scroll', () => {
  const nav = document.getElementById('nav');
  nav.classList.toggle('scrolled', window.scrollY > 60);
});
```

### `src/components/Hero.astro`
Requisitos:
- Altura: `min-h-screen` (100vh)
- Background: `style="background-image: url('/photos/hero.jpg')" class="bg-cover bg-center bg-fixed"`
- Overlay: `<div class="absolute inset-0 bg-forest/50"></div>`
- Contenido centrado vertical y horizontal
- H1: Cormorant Garamond Bold Italic, `text-display` (72px), color white, max-width 900px
- Texto del H1: *"True healing begins when the body is treated as a whole."*
- Subheadline: Inter light, 20px, white/80, max-width 600px
- Subtext: *"If you are tired, foggy, or not feeling like yourself — Vayda offers a whole-body path to understanding what's driving your imbalance."*
- CTAs: 2 botones centrados
  - Primario: `bg-white text-forest hover:bg-cream` → "Discover What's Draining Your Energy"
  - Secundario: `border border-white text-white hover:bg-white/10` → "Explore the Vayda Method"
- Scroll indicator: pequeña flecha o chevron animado abajo del todo

### `src/components/Footer.astro`
Requisitos:
- `bg-forest text-white`
- Logo blanco centrado arriba
- Tagline centrado: *"True healing begins when the body is treated as a whole."* en Cormorant Garamond italic
- Links: Home · About · Programs · Blog · Privacy Policy
- Copyright: `© 2026 Vayda Wellness. All rights reserved.`
- Social icons: (placeholder SVGs por ahora — Instagram, YouTube, Facebook)

### `src/layouts/BaseLayout.astro`
- Meta tags básicos (title, description, og:image)
- Google Fonts
- Favicon: `/brand/02-logo-symbol-dark-transparent.png`
- `<Nav />` y `<Footer />` incluidos

### `src/pages/index.astro`
Por ahora solo:
- Hero section completo
- Placeholder `<section>` con `TODO: Recognition section` etc.
- Footer

---

## Paso 6 — GitHub + Vercel

```bash
# Inicializar git (si no lo hizo el setup)
git init
git add .
git commit -m "feat: initial Astro setup + design system + nav + hero"

# Crear repo en GitHub
gh repo create Willsuarez85/vaydawellness-website --public --push --source=.

# Deploy a Vercel
vercel --yes
# Cuando pregunte por el proyecto name: vaydawellness
# Framework: Astro (detecta automático)
```

---

## Entregables de Fase 1

Al terminar, reportar:
- [ ] `npm run build` pasa sin errores
- [ ] URL de Vercel preview funcionando
- [ ] Nav con cambio en scroll funcional
- [ ] Hero con foto + overlay + texto correcto
- [ ] Footer con logo y tagline
- [ ] Colores y tipografía aplicados correctamente
- [ ] Repo en github.com/Willsuarez85/vaydawellness-website

**Cuando esté listo → reportar URL de Vercel a StarLord**

---

## ⛔ NO hacer en esta fase
- NO construir páginas internas (/about, /programs, etc.)
- NO implementar blog
- NO integrar quiz
- NO agregar más secciones al homepage (solo hero + footer)
- Mantener el scope pequeño y verificable

---

*Siguiente fase: `PHASE-2-TASK.md` (Homepage completo)*
