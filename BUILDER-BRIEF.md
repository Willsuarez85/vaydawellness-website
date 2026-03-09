# Vayda Wellness — Builder Brief

**Para:** Builder (Claude Code)
**Fecha:** 2026-03-09
**Proyecto:** vaydawellness.com — Website completo en Astro
**Fase actual:** VER `PHASE-1-TASK.md`

> ⚠️ Lee SOLO este doc + el task de la fase actual. No leas otros docs a menos que se indique.

---

## El Proyecto

Website de wellness holístico para Ramesh Roar (The Viking Yogi). Marca premium, nature-rooted, grounded. NO spa genérico, NO clínico.

**URL final:** vaydawellness.com
**Repo:** github.com/Willsuarez85/vaydawellness-website
**Deploy:** Vercel (auto-deploy en push a main)

---

## Tech Stack

```
Framework:    Astro 4.x
CSS:          TailwindCSS 3.x (con config customizada)
Fonts:        Google Fonts (Cormorant Garamond + Inter)
Images:       Astro Image component (optimización automática)
Deploy:       Vercel
Node:         18+
```

---

## Design System

### Colores (tailwind.config.js)
```js
colors: {
  'forest':  '#2D4A35',   // primary — headers, CTAs, dark sections
  'cream':   '#F8F5F0',   // background principal (60% del sitio)
  'sage':    '#657F66',   // accents, labels, secondary elements
  'beige':   '#D7D5C6',   // cards, dividers, alternate backgrounds
  'charcoal':'#2D3436',   // body text, UI elements
}
```

### Tipografía
```css
/* Headlines H1/H2 */
font-family: 'Cormorant Garamond', Georgia, serif;
/* H1: bold italic, 56-72px desktop, 36-44px mobile */
/* H2: bold, 40-48px desktop, 28-36px mobile */

/* Body + UI */
font-family: 'Inter', -apple-system, sans-serif;
/* Body: 400, 17-18px, line-height 1.7 */
/* Labels/Buttons: 500, 14-15px, letter-spacing 0.05em */
```

### Spacing scale
- Sección padding: `py-24` (desktop) / `py-16` (mobile)
- Container max-width: `max-w-6xl mx-auto px-6`
- Card gaps: `gap-8` a `gap-12`
- **Regla de oro: más espacio = más premium**

---

## Logo y Assets

**Ubicación:** `public/brand/`
**Archivos a copiar desde** `clients/ramesh-vayda/assets/brand/`:

| Archivo | Uso en código |
|---------|---------------|
| `01-logo-on-green.png` | Logo blanco — nav sobre hero oscuro |
| `01-logo-dark-on-cream.png` | Logo verde — nav sobre cream |
| `01-logo-dark-transparent.png` | Logo flexible — uso general |
| `02-logo-symbol-dark-transparent.png` | Favicon, avatar |

**Fotos (copiar a `public/photos/`):**
| Archivo | Uso |
|---------|-----|
| `11-course-content.jpg` | Hero section (PRINCIPAL) |
| `07-course-carousel-1.jpg` | Programs/Retreats section |
| `08-course-carousel-2.jpg` | About/Quote section |
| `04-coaching-card.jpg` | Coaching card |
| `06-founder-ramesh.jpg` | Meet Ramesh portrait |
| `09-course-carousel-3.jpg` | Workshop section |

---

## Componentes Clave

### Nav
- Transparente sobre hero (logo blanco)
- Cream + logo verde en scroll (sticky, blur backdrop)
- Links: Home · About · The Vayda Method · Programs · Blog
- CTA button derecha: "Take the Quiz" — forest green

### Hero
- Full-bleed foto `11-course-content.jpg`
- Overlay: `bg-forest/50` (forest green 50% opacity)
- Contenido centrado, texto blanco
- H1 en Cormorant Garamond Bold Italic
- Subhead en Inter light
- 2 CTAs: "Discover What's Draining Your Energy" (filled) + "Explore the Vayda Method" (ghost)

### Parallax Sections
- `bg-fixed bg-cover bg-center` con overlay de color
- Texto sobre el overlay
- Usar para: testimonials, quotes, método

### Dark Section (The Vayda Method preview)
- `bg-forest` con texto blanco
- 4 pilares en grid 2x2
- Iconos: SVG minimal, stroke blanco/sage

### CTA Section
- Cream o beige background
- H2 grande centrado en Cormorant
- Botón forest green
- Subtext pequeño en sage

---

## Sitemap (todas las fases)

```
/                     → Homepage
/about                → Sobre Ramesh
/the-vayda-method     → El método (7 pilares)
/programs             → Programas
/3-day-reset          → Tripwire page
/quiz                 → Embed del quiz MVP
/blog                 → Hub blog
/blog/[slug]          → Artículo
```

---

## Copy y Contenido

**Homepage copy:** `HOMEPAGE-DRAFT-V3.md`
**Tagline:** "True healing begins when the body is treated as a whole."
**CTA principal:** "Discover What's Draining Your Energy"
**SEO:** `SEO-PAGE-MAP-V1.md`

---

## Reglas de Calidad

1. **Mobile-first** — diseñar para mobile, expandir a desktop
2. **No usar colores fuera de la paleta** — cero azules, rojos, morados
3. **Imágenes siempre optimizadas** — usar `<Image>` de Astro
4. **Accesibilidad** — contraste mínimo AA, alt texts en todas las imágenes
5. **Performance** — lazy load en imágenes, fonts con `display=swap`
6. **Commit después de cada sección** — mensajes descriptivos

---

## Verificación por Fase

Al terminar cada fase, Builder debe:
1. `npm run build` sin errores
2. `npm run preview` — revisar en localhost
3. `git push origin main` → Vercel auto-deploya
4. Reportar URL de preview + qué se completó

---

*Para el task específico de la fase actual → leer `PHASE-1-TASK.md`*
