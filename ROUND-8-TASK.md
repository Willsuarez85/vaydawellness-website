# Vayda Website — Round 8

---

## FIX 1 — GLOBAL: Todos los eyebrows en fondos oscuros → text-cream

**Regla definitiva:** Cualquier `<SectionEyebrow>` sobre fondo oscuro (forest, charcoal, foto con overlay) SIEMPRE debe tener `class="text-cream"`. NUNCA `text-sage` en fondos oscuros.

Buscar y corregir en TODOS los archivos:
- `src/pages/index.astro`
- `src/pages/about.astro`
- `src/pages/the-vayda-method.astro`
- `src/pages/programs.astro`

Reemplazar cualquier `class="text-sage"` en SectionEyebrow cuando esté dentro de una sección con fondo dark → `class="text-cream"`.

---

## FIX 2 — Estrellas SVG invisibles (index.astro — Sección Transformation)

En la sección parallax "The Vayda Method" hay 3 bullet points con estrellas SVG. El color es `text-sage` — invisible sobre forest green.

Cambiar `class="text-sage mt-1 flex-shrink-0"` → `class="text-cream/70 mt-1 flex-shrink-0"` en los 3 spans con el SVG de estrella.

---

## FIX 3 — Overlay parallax "True healing begins..." más oscuro

En `src/pages/index.astro`, sección 3 (Transformation):
```
bg-forest/80  →  bg-forest/85
```

---

## FIX 4 — Reemplazar secciones "Real Problem" + "Seven Systems" con nueva sección

**ELIMINAR** completamente:
- Sección `<!-- 4A. WHY MOST HEALING FAILS -->` (bg-charcoal con emojis)
- Sección `<!-- 4B. THE SEVEN SYSTEMS -->` (lista tipográfica)

**INSERTAR** en su lugar UNA sola sección limpia:

```astro
<!-- 4. THE VAYDA METHOD — How it works -->
<section class="bg-cream py-16 md:py-24">
  <div class="max-w-5xl mx-auto px-6">

    <!-- Header -->
    <div class="text-center mb-16 reveal">
      <SectionEyebrow text="The Vayda Method" />
      <h2 class="font-serif font-bold italic text-4xl md:text-h2 text-charcoal leading-tight mt-4 max-w-3xl mx-auto">
        It's not one symptom. It's a cascade.
      </h2>
      <p class="font-sans text-charcoal/65 mt-6 max-w-2xl mx-auto leading-relaxed text-lg">
        Most practitioners treat one system at a time. A cardiologist for your heart. A specialist for your hormones. A neurologist for your pain. No one is looking at how they connect.
      </p>
      <p class="font-sans text-charcoal/65 mt-4 max-w-2xl mx-auto leading-relaxed text-lg">
        The Vayda Method starts from a different premise: every symptom is your body signaling an imbalance in one or more of its interconnected systems. Find the imbalance. Fix the root. Watch the cascade resolve.
      </p>
    </div>

    <!-- 3 Steps — clean beige cards, no icons -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">

      <div class="reveal reveal-delay-1 text-center">
        <div class="w-16 h-16 rounded-full bg-forest text-cream font-serif font-bold text-2xl flex items-center justify-center mx-auto mb-6">1</div>
        <h3 class="font-sans font-bold text-lg text-charcoal mb-3">Root Cause Assessment</h3>
        <p class="font-sans text-sm text-charcoal/60 leading-relaxed">We map all seven dimensions of your health to identify where the chain is breaking down — not just where it hurts.</p>
      </div>

      <div class="reveal reveal-delay-2 text-center">
        <div class="w-16 h-16 rounded-full bg-forest text-cream font-serif font-bold text-2xl flex items-center justify-center mx-auto mb-6">2</div>
        <h3 class="font-sans font-bold text-lg text-charcoal mb-3">Personalized Protocol</h3>
        <p class="font-sans text-sm text-charcoal/60 leading-relaxed">You receive a unified plan built exclusively for your biology. Not a generic program. Every element calibrated to your root cause.</p>
      </div>

      <div class="reveal reveal-delay-3 text-center">
        <div class="w-16 h-16 rounded-full bg-forest text-cream font-serif font-bold text-2xl flex items-center justify-center mx-auto mb-6">3</div>
        <h3 class="font-sans font-bold text-lg text-charcoal mb-3">Guided Implementation</h3>
        <p class="font-sans text-sm text-charcoal/60 leading-relaxed">You're not left to figure it out alone. Ramesh guides the entire process — from first conversation to lasting results.</p>
      </div>

    </div>

    <!-- Divider quote -->
    <div class="reveal border-t border-beige pt-12 text-center">
      <p class="font-serif italic text-2xl text-charcoal/70 max-w-2xl mx-auto leading-relaxed">
        "Your body isn't failing you. It's signaling. And I've learned to decode those signals."
      </p>
      <p class="font-sans text-sm text-charcoal/40 mt-4 tracking-wider uppercase">— Ramesh Roar</p>
    </div>

    <!-- CTA -->
    <div class="text-center mt-12 reveal">
      <a href="/funnel/quiz" class="inline-flex items-center gap-2 bg-forest text-cream font-sans font-medium py-4 px-8 rounded-full hover:bg-forest/90 hover:shadow-lg hover:scale-[1.02] transition-all">
        Find Your Root Cause — Free Quiz
        <ArrowRight size={18} />
      </a>
      <p class="font-sans text-charcoal/40 text-sm mt-3">5 minutes. No email required.</p>
    </div>

  </div>
</section>
```

---

## Build & Deploy

1. `npm run build` — sin errores
2. `git add -A && git commit -m "Round 8: global eyebrow fix, stars fix, method section redesign"`
3. `/Users/Jarvis/.npm-global/bin/vercel --prod`
4. Al terminar: `openclaw system event --text "Vayda Round 8 deployed — listo para revisión final homepage" --mode now`

**Repo:** `/Users/Jarvis/Projects/vaydawellness-website`
