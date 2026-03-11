# Vayda Website — Quiz Build Task

**Página:** `/quiz` → `src/pages/quiz.astro`
**Referencia funcional:** `/Users/Jarvis/clawd/clients/ramesh-vayda/quiz-mvp/` (copiar la lógica JS completa)
**Objetivo:** Landing page del quiz + quiz interactivo + captura de email + resultados + upsell a 7-Day Reset

---

## ESTRUCTURA GENERAL

```
1. Hero Section (landing page del quiz)
2. Quiz Interactivo (12 preguntas)
3. Email Capture (antes de ver resultados)
4. Resultados Personalizados (4 zonas)
5. CTA → /7-day-reset
```

---

## PARTE 1 — HERO / LANDING PAGE

**Fondo:** `hero.jpg` con overlay `bg-forest/75`
**Layout:** Centrado, texto blanco

```astro
<!-- Hero del Quiz -->
<section class="relative min-h-screen flex items-center bg-cover bg-center" style="background-image: url('/photos/hero.jpg')">
  <div class="absolute inset-0 bg-forest/75"></div>
  <div class="relative z-10 max-w-3xl mx-auto px-6 text-center text-white py-32">

    <SectionEyebrow text="Free Assessment" class="text-cream" />

    <h1 class="font-serif font-bold italic text-4xl md:text-[64px] text-white leading-tight mb-6">
      Discover What's Driving Your Chronic Pain
    </h1>

    <p class="font-sans text-xl text-white/80 leading-relaxed mb-4 max-w-2xl mx-auto">
      Your doctor says it's normal. Your labs came back "fine." But you know something is off.
    </p>
    <p class="font-sans text-lg text-white/70 leading-relaxed mb-10 max-w-2xl mx-auto">
      Take 5 minutes to map which of your body's systems needs attention — and get a personalized next step.
    </p>

    <button
      id="start-quiz-btn"
      class="bg-white text-forest font-sans font-semibold text-base tracking-wide px-10 py-5 rounded-full hover:bg-cream hover:shadow-xl hover:scale-[1.02] transition-all"
    >
      Take the Free Quiz →
    </button>

    <p class="font-sans text-sm text-white/50 mt-4">5 minutes · Free · Instant results</p>

    <!-- Social proof strip -->
    <div class="flex flex-wrap justify-center gap-8 mt-12 text-white/40 font-sans text-xs tracking-widest uppercase">
      <span>500+ People Assessed</span>
      <span class="text-sage">·</span>
      <span>20+ Years of Practice</span>
      <span class="text-sage">·</span>
      <span>Science-Based</span>
    </div>
  </div>
</section>
```

---

## PARTE 2 — QUIZ MODAL / INLINE

El quiz se muestra **inline debajo del hero** (no modal) cuando el usuario hace click en "Take the Free Quiz".

Al hacer click en `#start-quiz-btn`:
- Scroll suave hacia `#quiz-app`
- `#quiz-app` se hace visible (de hidden a visible)

**Container del quiz:**
```html
<section id="quiz-app" class="hidden bg-cream py-16 md:py-24">
  <div class="max-w-2xl mx-auto px-6">
    <!-- Progress bar -->
    <!-- Question card -->
    <!-- Options -->
    <!-- Nav buttons: Back / Next -->
  </div>
</section>
```

**Diseño del quiz:**
- Fondo: `bg-cream`
- Progress bar: línea forest green, muestra `X / 12`
- Categoría actual: `SectionEyebrow` estilo (Sleep · Digestion · Stress)
- Pregunta: `font-serif font-bold text-2xl md:text-3xl text-charcoal`
- Opciones: cards con `bg-white border border-beige` → al seleccionar: `bg-forest text-cream border-forest`
- Botón Next: `bg-forest text-cream` (deshabilitado hasta seleccionar opción)
- Botón Back: `text-charcoal/50 underline`

---

## PARTE 3 — EMAIL CAPTURE (después de Q12, antes de resultados)

```html
<div id="email-capture" class="hidden">
  <div class="text-center max-w-xl mx-auto">
    <h2 class="font-serif font-bold italic text-3xl text-charcoal mb-4">
      Your results are ready.
    </h2>
    <p class="font-sans text-charcoal/70 mb-8 leading-relaxed">
      Enter your email to see which systems need attention and get your personalized next step.
    </p>
    <form id="email-form" class="flex flex-col gap-4">
      <input
        type="text"
        id="lead-name"
        placeholder="Your first name"
        class="border border-beige rounded-lg px-5 py-4 font-sans text-charcoal focus:outline-none focus:border-forest"
        required
      />
      <input
        type="email"
        id="lead-email"
        placeholder="Your email address"
        class="border border-beige rounded-lg px-5 py-4 font-sans text-charcoal focus:outline-none focus:border-forest"
        required
      />
      <button type="submit" class="bg-forest text-cream font-sans font-semibold py-4 px-8 rounded-full hover:bg-forest/90 transition-all">
        See My Results →
      </button>
    </form>
    <p class="font-sans text-xs text-charcoal/40 mt-4">No spam. Unsubscribe anytime.</p>
  </div>
</div>
```

**Al hacer submit:**
1. Enviar webhook a GHL con nombre, email, score, zona
2. Mostrar sección de resultados

---

## PARTE 4 — RESULTADOS (4 zonas por score)

Score total máximo: 36 (12 preguntas × 3 puntos max)

| Zona | Score | Color | Nombre |
|------|-------|-------|--------|
| Green | 0-9 | forest green | Early Signals |
| Yellow | 10-18 | #C4A837 (gold) | Active Imbalance |
| Orange | 19-27 | #C47A37 | Chronic Cascade |
| Red | 28-36 | #C43737 | Critical Load |

**Layout de resultados:**
```
- Badge de zona (color correspondiente)
- Headline personalizada por zona
- Párrafo explicativo (qué está pasando)
- Breakdown por pillar (Sleep / Digestion / Stress) con % de score
- CTA hacia /7-day-reset
```

**Copy por zona:**

**Green (0-9):**
- Badge: "🟢 Early Signals"
- H2: "Your body is whispering. Now is the time to listen."
- Copy: "Your results show early-stage signals across one or more systems. The good news: you're catching this before it becomes chronic. Small, targeted changes now can prevent the cascade from accelerating."
- CTA: "Start Your 7-Day Reset →"

**Yellow (10-18):**
- Badge: "🟡 Active Imbalance"
- H2: "Your body is sending clear signals. It's time to respond."
- Copy: "Your results reveal an active imbalance across multiple systems. You've likely been feeling this for a while — fatigue, discomfort, or symptoms that don't fully resolve. The pattern is recognizable. And it's addressable."
- CTA: "Start Your 7-Day Reset →"

**Orange (19-27):**
- Badge: "🟠 Chronic Cascade"
- H2: "Multiple systems are under strain. The cascade is active."
- Copy: "Your results show significant imbalance across Sleep, Digestion, and Stress. When these three systems are simultaneously compromised, recovery becomes harder without a structured protocol. This is exactly what the Vayda Method addresses."
- CTA: "Get Your 7-Day Reset Protocol →"

**Red (28-36):**
- Badge: "🔴 Critical Load"
- H2: "Your body has been signaling for a long time. It needs a reset."
- Copy: "Your results show a high-load pattern across all three pillars. This level of systemic stress doesn't resolve on its own — it compounds. The 7-Day Reset is designed specifically for this starting point."
- CTA: "Start the 7-Day Reset — Today →"

---

## PARTE 5 — GHL WEBHOOK

Al capturar el email, enviar POST a GHL:

```javascript
const GHL_WEBHOOK = 'https://services.leadconnectorhq.com/hooks/lNL7DIlpmwx4bsGNaxvu/webhook-trigger/[WEBHOOK-ID]';

// O usar la API directa de GHL para crear contacto:
fetch('https://services.leadconnectorhq.com/contacts/', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer pit-32e6d329-713d-4b9f-b971-d1226e459fd1',
    'Version': '2021-07-28',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    firstName: name,
    email: email,
    tags: ['quiz-lead', `zone-${zone.toLowerCase()}`],
    customFields: [
      { key: 'quiz_score', field_value: String(totalScore) },
      { key: 'quiz_zone', field_value: zone },
      { key: 'sleep_score', field_value: String(scores.sleep) },
      { key: 'digestion_score', field_value: String(scores.digestion) },
      { key: 'stress_score', field_value: String(scores.stress) }
    ]
  })
});
```

**IMPORTANTE:** Esta llamada debe hacerse desde un API endpoint de Astro (no exponer el token en el frontend).
Crear: `src/pages/api/submit-quiz.ts` que recibe nombre/email/scores y llama a GHL server-side.

---

## QUIZ DATA — Copiar de quiz-mvp

Copiar las 12 preguntas exactas de:
`/Users/Jarvis/clawd/clients/ramesh-vayda/quiz-mvp/js/quiz.js`

Las preguntas están organizadas en 3 categorías:
- Sleep: Q1-Q4
- Digestion: Q5-Q8
- Stress: Q9-Q12

Mantener la misma estructura de scoring (0-3 por pregunta).

---

## NOTAS TÉCNICAS

- Usar Astro con `client:load` o `<script>` para el quiz JS interactivo
- El quiz data y lógica puede ser un archivo `.ts` importado
- El API endpoint en `/api/submit-quiz.ts` usando Astro server endpoints
- Astro output debe ser `hybrid` o `server` para los API endpoints
- Verificar `astro.config.mjs` — si está en `static`, cambiar a `hybrid`

---

## BUILD & DEPLOY

1. `npm run build` — verificar
2. `git add -A && git commit -m "feat: quiz page — landing + interactive quiz + email capture + results + GHL integration"`
3. `/Users/Jarvis/.npm-global/bin/vercel --prod`
4. Al terminar: `openclaw system event --text "Vayda Quiz deployed — listo para revisión" --mode now`

**Repo:** `/Users/Jarvis/Projects/vaydawellness-website`
**Quiz MVP ref:** `/Users/Jarvis/clawd/clients/ramesh-vayda/quiz-mvp/`
