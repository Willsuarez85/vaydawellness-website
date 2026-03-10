# Phase 2 — Homepage Completo (Bulletproof Landing)

**Para:** Builder (Claude Code)
**Modelo:** claude opus
**Tiempo estimado:** 90-120 min
**Pre-requisito:** Phase 1 completada y deployada ✅

> Lee BUILDER-BRIEF.md primero. Luego este doc. Nada más.

---

## Objetivo

Construir el homepage completo de Vayda Wellness siguiendo el framework **Bulletproof Landing** (FounderPal). Al terminar, index.astro debe ser una landing page de conversión completa.

---

## Estructura de Secciones (orden exacto)

### 1. HERO — Ya construido en Fase 1 ✅
- Verificar que siga el brief
- Agregar **quick social proof** debajo de los CTAs:
  - `"Join 500+ people on the path to whole-body healing"` en Inter light, blanco/60, centrado

---

### 2. PROBLEM AGITATION
**Concepto:** El visitante llega sintiéndose mal pero sin diagnóstico claro. Esta sección les dice "entendemos exactamente cómo te sientes."

**Layout:** Cream background, max-w-4xl centrado
- **H2** (Cormorant Garamond Bold Italic): *"You've tried everything. And yet something still feels off."*
- **Lead paragraph** (Inter, text-charcoal/80): *"You eat well. You exercise. You've been to the doctor — labs came back 'normal'. But you're still exhausted, foggy, and not feeling like yourself. The problem isn't that something is wrong with you. The problem is that no one has looked at the whole picture."*
- **3 Problem Cards** en grid 3 cols, bg-beige, rounded-xl, p-8:
  - 🧠 **Brain Fog & Fatigue** — *"You push through every day running on empty, wondering why you can't think clearly or sustain your energy."*
  - ⚖️ **Hormonal Imbalance** — *"Your body feels like it's working against you — weight changes, mood swings, sleep issues that don't respond to 'normal' fixes."*
  - 🔄 **No Root Cause Found** — *"Every specialist treats one symptom. No one has connected the dots between all of them — until now."*

---

### 3. TRANSFORMATION (How it Works)
**Concepto:** Presentar el Vayda Method como la solución. Parallax con foto de Ramesh.

**Layout:** Full-bleed foto `ramesh-teaching.jpg` con overlay `bg-forest/50`, texto blanco centrado

- **Eyebrow** (Inter, tracking-widest, sage): `THE VAYDA METHOD`
- **H2** (Cormorant Garamond 56px, white italic): *"True healing begins when the body is treated as a whole."*
- **3 Benefits** en row, iconos SVG minimal blancos:
  - ✦ *Identify the root cause, not just manage symptoms*
  - ✦ *A personalized whole-body protocol built for you*
  - ✦ *Lasting results — not a lifetime of dependency*
- **CTA ghost button** blanco: `"Discover the Method →"`

---

### 4. FEATURES / VAYDA METHOD PILLARS
**Concepto:** Los 7 pilares del método = features detalladas

**Layout:** bg-cream, 2 columnas (texto izq, visual der en desktop)
- **Eyebrow**: `HOW WE WORK`
- **H2**: *"Seven Systems. One Unified Path."*
- **Grid 2x4** (7 cards + 1 CTA card), bg-beige rounded-xl p-6:

| Pilar | Descripción corta |
|-------|-------------------|
| 🌿 Nutrition & Food | Fuel that works with your biology, not against it |
| 💧 Hydration & Detox | Your body's ability to cleanse and reset |
| 🧘 Movement & Breath | Strength and restoration without depletion |
| 😴 Sleep & Recovery | The foundation of every system in the body |
| 🧠 Mind & Nervous System | Stress, resilience, and your mental landscape |
| 🔬 Lab Work & Biomarkers | Real data to guide real decisions |
| 🌍 Environment & Lifestyle | The hidden forces shaping your health daily |

- Card 8 (CTA): bg-forest, white text: *"Ready to find your root cause?"* + button `"Take the Free Quiz"`

---

### 5. SOCIAL PROOF
**Layout:** bg-beige, centrado
- **H2** (Cormorant italic): *"What people are saying"*
- **3 Testimonial cards** bg-cream, shadow-sm, rounded-xl, p-8:
  - Use placeholder testimonials con [NOMBRE], [TÍTULO], texto descriptivo
  - Formato: quote en Cormorant italic → nombre en Inter bold → role/location pequeño
- **Trust bar** debajo: logos/text de credenciales de Ramesh:
  `Prama Institute Co-Founder · 20+ Years Teaching · 500+ Students Transformed`

---

### 6. ABOUT RAMESH
**Layout:** 2 columnas — foto izq, texto der (desktop) / stacked mobile
- Foto: `/photos/ramesh-founder.jpg` — rounded-2xl, aspect-square object-cover
- **Eyebrow**: `MEET YOUR GUIDE`
- **H2**: *"Ramesh Roar — The Viking Yogi"*
- **Bio copy** (Inter, text-charcoal/80, 3 párrafos):
  - *"Ramesh has spent more than two decades at the intersection of Eastern wellness and Western performance — what he calls the Viking Yogi path: the strength to face life's hardest challenges, and the wisdom to heal from them."*
  - *"As co-founder of the Prama Institute near Asheville, NC, he has guided hundreds of people back to balance — not through quick fixes, but through understanding the root systems that drive health."*
  - *"His approach starts where most practitioners stop: treating the whole body as one connected system."*
- **CTA link**: `"Learn more about Ramesh →"` → /about

---

### 7. PRICING (Overview — not full page)
**Layout:** bg-forest (dark), texto blanco, 3 cards
- **H2** (Cormorant white italic): *"Choose your path to healing"*
- **3 Program cards** bg-white/10 border border-white/20 rounded-2xl p-8:
  - 🎯 **The Quiz** (Free) — *"Start here. Discover what's driving your imbalance in 5 minutes."* → CTA: "Take the Quiz"
  - 📚 **Online Programs** ($297+) — *"Self-paced courses built on the Vayda Method. Learn at your rhythm."* → CTA: "View Programs"
  - 🤝 **1:1 Coaching** (Custom) — *"Work directly with Ramesh. Personalized protocol. Real results."* → CTA: "Apply Now"

---

### 8. FAQ
**Layout:** bg-cream, max-w-3xl centrado, accordion (JS toggle)
- **H2**: *"Common questions"*
- **5 FAQs** con toggle:
  1. *"Is this functional medicine?"* → No, es un framework holístico propio. No reemplaza atención médica.
  2. *"How is this different from seeing a nutritionist or therapist?"* → Tratamos los 7 sistemas simultáneamente.
  3. *"Do I need to live near Asheville?"* → No, online programs disponibles globalmente.
  4. *"How long does it take to see results?"* → La mayoría nota cambios en 4-6 semanas.
  5. *"Is this right for men too?"* → Sí, el método aplica a cualquier persona.

---

### 9. FINAL CTA
**Layout:** Full-bleed foto `/photos/hero.jpg` con overlay `bg-forest/60`, centrado
- **H2** (Cormorant white 56px italic): *"Your body is ready to heal. Are you?"*
- **Subtext** (Inter white/70): *"Take the free 5-minute quiz and discover what's really driving your imbalance."*
- **CTA button** (bg-white text-forest): `"Take the Free Quiz Now"`
- **Microcopy** debajo: `No commitment. No sales pitch. Just clarity.` Inter small white/50

---

## Componentes Nuevos a Crear

- `src/components/ProblemCard.astro`
- `src/components/TestimonialCard.astro`
- `src/components/PricingCard.astro`
- `src/components/FAQItem.astro` (con JS toggle)
- `src/components/SectionEyebrow.astro` (reutilizable: etiqueta pequeña sage/uppercase)

---

## Parallax / Overlay Sections

Para secciones con foto de fondo + overlay usar esta clase en la sección:
```html
<section class="relative bg-cover bg-center bg-fixed" style="background-image: url('/photos/FOTO.jpg')">
  <div class="absolute inset-0 bg-forest/50"></div>
  <div class="relative z-10"> ... contenido ... </div>
</section>
```

---

## Reglas de Contenido

1. **Nunca cambiar el copy** — usar exactamente los textos de este doc
2. **Placeholders permitidos** para testimoniales y precios específicos
3. **Espaciado:** `py-24` en desktop, `py-16` en mobile entre secciones
4. **No agregar secciones extra** — solo las 9 de este doc
5. **Accesibilidad:** todos los `<img>` con alt text, contraste AA mínimo

---

## Entregables

- [ ] `npm run build` sin errores
- [ ] 9 secciones visibles en localhost
- [ ] Parallax en secciones 3 y 9
- [ ] FAQ accordion funcional
- [ ] Mobile responsive en todas las secciones
- [ ] `git push origin main` → Vercel auto-deploya
- [ ] Reportar URL de Vercel preview

---

*Siguiente: PHASE-3-TASK.md (páginas internas: /about, /the-vayda-method, /programs)*
