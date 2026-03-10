# Vayda Website — Round 5 Fixes

---

## FIX 1 — Eyebrow contrast en todas las páginas con fondo oscuro/verde

Cualquier `<SectionEyebrow>` sobre fondo dark (forest, charcoal, foto con overlay) debe tener `class="text-cream"` o `class="text-white"`, NUNCA `text-sage` (verde sobre verde = invisible).

**Páginas a corregir:**

`src/pages/about.astro`:
- Hero: `<SectionEyebrow text="Meet Ramesh Roar" class="text-sage" />` → `class="text-cream"`

`src/pages/the-vayda-method.astro`:
- Hero: `<SectionEyebrow text="The Framework" class="text-sage" />` → `class="text-cream"`

`src/pages/index.astro`:
- Revisar todas las secciones con fondo dark y corregir eyebrows si aplica

---

## FIX 2 — Homepage: Rediseño "Seven Systems, One Unified Path"

**Problema:** El grid de 7 cajitas con íconos numerados se ve abrumador y no transmite wellness. Demasiado ruido visual.

**Solución:** Reemplazar con un layout de 2 columnas más limpio y orgánico:

```astro
<!-- REEMPLAZAR toda la sección de pillars (el grid de 8 divs con íconos numerados) -->
<!-- NUEVO DISEÑO: lista elegante con número grande + nombre + descripción -->

<div class="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-0 max-w-4xl mx-auto">
  {/* Cada pillar = fila con número serif grande a la izquierda + texto a la derecha */}
  {/* Separados por línea divisora sutil */}
  {/* Sin cajas, sin fondo de color, sin íconos circular — solo tipografía limpia */}
</div>
```

**Estructura de cada ítem:**
- Número grande en serif italic (`text-4xl font-serif italic text-forest/30`) — decorativo
- Nombre del sistema (`font-sans font-bold text-charcoal`)
- Descripción corta (`font-sans text-sm text-charcoal/60`)
- Separador `border-b border-beige` entre cada ítem

**Al final del grid (última posición)** — card verde CTA igual que antes:
```
Ready to find your root cause? → Take the Free Quiz
```

**También agregar** justo antes del grid: una foto de media sección para dar calidez wellness:
```astro
<!-- Foto centrada, max-w-2xl, rounded-2xl, shadow — antes del grid -->
<img src="/photos/ramesh-teaching.jpg" class="rounded-2xl w-full max-w-2xl mx-auto aspect-[16/7] object-cover mb-16 shadow-lg" />
```

---

## FIX 3 — Vayda Method page: Steps 1-2-3 más vivos

**Sección:** "From first conversation to full protocol" (bg-forest)

**Problema:** Números con `border-sage text-sage`, descripciones con `text-cream/60` — muy apagado.

**Fix:**
- Círculos de número: cambiar a `border-white/60 text-white` y hacerlos más grandes (`w-16 h-16 text-3xl`)
- Título del step: ya está bien (`text-white`) ✓  
- Descripción: cambiar `text-cream/60` → `text-cream/85`
- Agregar un número decorativo enorme detrás de cada card (posición absolute, `text-[120px] font-serif text-white/5`) para dar profundidad

---

## FIX 4 — Programs page: fotos en las 3 cards

**Problema:** Solo Card 3 "Private Coaching" tiene imagen. Cards 1 y 2 no.

**Fix:** Agregar imagen al top de cada card (igual que Card 3):

Card 1 "Discover Your Root Cause" (`bg-beige`):
```astro
<!-- Agregar antes del div.p-8 -->
<div class="h-48 overflow-hidden">
  <img src="/photos/hero.jpg" alt="Discover your root cause" class="w-full h-full object-cover opacity-80" />
</div>
```

Card 2 "The Vayda Method Online" (`bg-forest`):
```astro
<!-- Agregar antes del div.p-8 -->
<div class="h-48 overflow-hidden">
  <img src="/photos/ramesh-teaching.jpg" alt="Online programs" class="w-full h-full object-cover opacity-50" />
</div>
```

Card 3 "Private Coaching" — ya tiene foto, NO cambiar.

---

## FIX 5 — Buttons → Conversion funnel URLs

**Objetivo:** Dejar URLs listas para los landing pages de conversión que se construirán después.

Reemplazar estos hrefs en todos los archivos:

| Actual | Nuevo |
|--------|-------|
| `/quiz` | `/funnel/quiz` |
| `/programs/online` | `/funnel/programs` |
| `/contact` en contexto de coaching | `/funnel/coaching` |

**IMPORTANTE:** Solo cambiar botones CTA de conversion (los que dicen "Take the Quiz", "View Programs", "Apply Now"). NO cambiar links de navegación en el nav.

---

## Build & Deploy

1. `npm run build` — verificar sin errores
2. `git add -A && git commit -m "Round 5: eyebrow contrast, seven systems redesign, steps 1-2-3, program photos, funnel URLs"`
3. `/Users/Jarvis/.npm-global/bin/vercel --prod`
4. Al terminar: `openclaw system event --text "Vayda Round 5 deployed — listo para revisión" --mode now`

---

**Repo:** `/Users/Jarvis/Projects/vaydawellness-website`
