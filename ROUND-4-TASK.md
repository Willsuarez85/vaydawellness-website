# Vayda Website — Round 4 Fixes

**File principal:** `src/pages/index.astro`
**Objetivo:** Aplicar feedback de StarLord sobre la homepage.

---

## 1. Fix eyebrow "The Vayda Method" — no se ve (Sección 3: Transformation)

**Problema:** `<SectionEyebrow text="The Vayda Method" class="reveal text-sage" />` — color sage (#657F66) sobre overlay `bg-forest/70`. Verde sobre verde, no se ve.

**Fix:** Cambiar la clase a `class="reveal text-cream"` (o `text-white`) para que sea visible sobre el fondo verde oscuro.

```astro
<!-- ANTES -->
<SectionEyebrow text="The Vayda Method" class="reveal text-sage" />

<!-- DESPUÉS -->
<SectionEyebrow text="The Vayda Method" class="reveal text-cream" />
```

---

## 2. Stats "20+ Years Teaching, 500+ Students" — aumentar visibilidad (Sección 5: Social Proof)

**Problema:** El texto stats tiene `text-cream/40` — muy poco contraste sobre el overlay oscuro. Tampoco se ve bien el overlay actual (`bg-charcoal/85`).

**Fix:**
- Cambiar `text-cream/40` → `text-cream/65` en el div de stats
- Cambiar el overlay de `bg-charcoal/85` → `bg-charcoal/90` (un poco más oscuro para más contraste)

```astro
<!-- ANTES -->
<div class="absolute inset-0 bg-charcoal/85"></div>
...
<div class="flex flex-wrap justify-center gap-8 mt-16 text-cream/40 font-sans ...">

<!-- DESPUÉS -->
<div class="absolute inset-0 bg-charcoal/90"></div>
...
<div class="flex flex-wrap justify-center gap-8 mt-16 text-cream/65 font-sans ...">
```

---

## 3. "Meet Your Guide" — quitar video + quitar segunda foto (Sección 6: About Ramesh)

**Fix:**
- Eliminar completamente el bloque del video Wistia (`mzolmte3qc`) y su label ("Watch Ramesh's Story")
- En la columna derecha (photo stack), quitar `workshop.jpg` — dejar SOLO `ramesh-founder.jpg`

```astro
<!-- ELIMINAR este bloque del About -->
<div class="mt-8 reveal reveal-delay-2">
  <p class="font-sans text-charcoal/40 text-xs uppercase tracking-[0.2em] mb-3">Watch Ramesh's Story</p>
  <WistiaVideo videoId="mzolmte3qc" title="Ramesh Roar — The Viking Yogi Story" />
</div>

<!-- En la columna derecha, ELIMINAR la segunda imagen -->
<img src="/photos/workshop.jpg"
  alt="Ramesh teaching a workshop"
  class="rounded-2xl w-full aspect-video object-cover shadow-md reveal reveal-delay-1 opacity-90" />
```

La columna derecha queda solo con `ramesh-founder.jpg`. Ajustar el aspect ratio si es necesario para que la foto sola se vea bien (puede quedar `aspect-[4/5]` o un poco más alta `aspect-[3/4]`).

---

## 4. "Choose Your Path to Healing" — agregar fotos a las 3 cards (Sección 7: Pricing)

Actualmente solo la card 3 (1:1 Coaching) tiene foto. Agregar imagen a las otras dos:

```astro
<!-- Card 1: The Quiz → agregar image -->
<PricingCard
  title="The Quiz"
  price="Free to start"
  description="Start here. Discover what's driving your imbalance in 5 minutes."
  cta="Take the Quiz"
  href="/quiz"
  image="/photos/hero.jpg"       <!-- AGREGAR ESTA LÍNEA -->
  class="reveal reveal-delay-1"
>

<!-- Card 2: Online Programs → agregar image -->
<PricingCard
  title="Online Programs"
  price="$$"
  description="Self-paced courses built on the Vayda Method. Learn at your rhythm."
  cta="View Programs"
  href="/programs"
  image="/photos/ramesh-teaching.jpg"   <!-- AGREGAR ESTA LÍNEA -->
  class="reveal reveal-delay-2"
>

<!-- Card 3: 1:1 Coaching → ya tiene imagen, no cambiar -->
```

---

## 5. Sección 8 "Hear It From Ramesh" — mejorar título

**Contexto:** El video `j13djtcnel` (22 segundos) muestra la transformación de un cliente a través del Vayda Method. El título actual `"The body already knows how to heal."` no describe eso.

**Fix:** Cambiar el heading y descripción de la sección para que refleje que es un testimonio de transformación real:

```astro
<!-- ANTES -->
<SectionEyebrow text="Hear It From Ramesh" class="text-sage" />
<h2 class="font-display text-4xl md:text-5xl font-bold italic text-cream mt-4">
  "The body already knows how to heal."
</h2>
<p class="font-sans text-cream/60 mt-4 max-w-xl mx-auto leading-relaxed">
  Ramesh explains the core philosophy behind the Vayda Method — and why most healing programs miss the point.
</p>

<!-- DESPUÉS -->
<SectionEyebrow text="Client Transformation" class="text-sage" />
<h2 class="font-display text-4xl md:text-5xl font-bold italic text-cream mt-4">
  20 years of teaching. See what it does.
</h2>
<p class="font-sans text-cream/60 mt-4 max-w-xl mx-auto leading-relaxed">
  This is what the Vayda Method looks like in practice — a real client's transformation, in their own words.
</p>
```

**Nota:** El video `j13djtcnel` también se usará en los heroes de las páginas internas (`/about`, `/the-vayda-method`, `/programs`). Por ahora NO remover de homepage — se usará en ambos lugares.

---

## Verificación Final

1. `npm run build` — que no haya errores
2. Revisar visualmente en `localhost:4321`:
   - Transformation section: eyebrow "The Vayda Method" debe verse claramente (color crema)
   - Social Proof: stats "20+ Years Teaching" más visibles
   - About: solo la foto de Ramesh en columna derecha, sin video, sin segunda foto
   - Pricing: 3 cards con fotos
   - Video section: título actualizado
3. `git add -A && git commit -m "Round 4: eyebrow fix, stats visibility, about section cleanup, pricing photos, video title"`
4. `vercel --prod` (usar binario `/Users/Jarvis/.npm-global/bin/vercel`)

---

**Repo:** `/Users/Jarvis/Projects/vaydawellness-website`
**Binario vercel:** `/Users/Jarvis/.npm-global/bin/vercel`
**Team:** simplicity-agency
