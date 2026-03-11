# Vayda Website — Round 7: Seven Systems Redesign

**File:** `src/pages/index.astro`
**Objetivo:** Reemplazar la sección "Seven Systems" actual con DOS secciones separadas.

---

## ELIMINAR

Eliminar completamente la sección actual `<!-- 4. FEATURES / VAYDA METHOD PILLARS -->` (todo el bloque desde el comentario hasta el cierre `</section>`).

---

## INSERTAR — En su lugar, dos secciones nuevas:

### SECCIÓN 4A — "Why Most Healing Misses the Mark"

Insertar ANTES de la sección de Social Proof. Fondo `bg-charcoal`, tono emocional oscuro.

```astro
<!-- 4A. WHY MOST HEALING FAILS -->
<section class="bg-charcoal py-16 md:py-24">
  <div class="max-w-5xl mx-auto px-6">
    <div class="text-center mb-14 reveal">
      <SectionEyebrow text="The Real Problem" class="text-sage" />
      <h2 class="font-serif font-bold italic text-4xl md:text-h2 text-cream leading-tight mt-4">
        Most healing programs miss the point entirely.
      </h2>
      <p class="font-sans text-cream/60 mt-6 max-w-2xl mx-auto leading-relaxed">
        They treat one symptom at a time. The Vayda Method treats the whole system.
      </p>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      <!-- Card 1 -->
      <div class="reveal reveal-delay-1 bg-white/5 border border-white/10 rounded-2xl p-8">
        <div class="text-3xl mb-5">💊</div>
        <h3 class="font-sans font-bold text-white text-lg mb-3">Symptom Management</h3>
        <p class="font-sans text-sm text-cream/60 leading-relaxed">
          Pain medication, antidepressants, thyroid drugs — they quiet the signal without ever asking what's generating it. You feel managed, not healed.
        </p>
      </div>
      <!-- Card 2 -->
      <div class="reveal reveal-delay-2 bg-white/5 border border-white/10 rounded-2xl p-8">
        <div class="text-3xl mb-5">🔬</div>
        <h3 class="font-sans font-bold text-white text-lg mb-3">Isolated Specialists</h3>
        <p class="font-sans text-sm text-cream/60 leading-relaxed">
          A cardiologist for your heart. An endocrinologist for your hormones. A neurologist for your pain. No one is looking at how they connect.
        </p>
      </div>
      <!-- Card 3 -->
      <div class="reveal reveal-delay-3 bg-white/5 border border-white/10 rounded-2xl p-8">
        <div class="text-3xl mb-5">🔄</div>
        <h3 class="font-sans font-bold text-white text-lg mb-3">Generic Protocols</h3>
        <p class="font-sans text-sm text-cream/60 leading-relaxed">
          The same elimination diet. The same supplement stack. The same 30-day reset. Your biology is unique — your protocol should be too.
        </p>
      </div>
    </div>
  </div>
</section>
```

---

### SECCIÓN 4B — "Seven Systems" — Lista tipográfica elegante

Insertar DESPUÉS de 4A. Fondo `bg-cream`, diseño limpio sin íconos ni fotos.

```astro
<!-- 4B. THE SEVEN SYSTEMS — Clean typographic list -->
<section class="bg-cream py-16 md:py-24">
  <div class="max-w-4xl mx-auto px-6">
    <div class="text-center mb-14 reveal">
      <SectionEyebrow text="The Framework" />
      <h2 class="font-serif font-bold text-4xl md:text-h2 text-charcoal leading-tight">
        Seven systems. One unified path.
      </h2>
      <p class="font-sans text-charcoal/60 mt-6 max-w-xl mx-auto leading-relaxed">
        The Vayda Method maps all seven dimensions of your health — identifying where the chain is breaking and building a protocol to restore balance from the root.
      </p>
    </div>

    <!-- Clean list — NO icon circles, NO cards, just elegant typography -->
    <div class="divide-y divide-beige">
      <div class="reveal grid grid-cols-[60px_1fr] gap-6 py-7 items-start">
        <span class="font-serif italic text-4xl text-forest/25 leading-none">01</span>
        <div>
          <h3 class="font-sans font-bold text-charcoal text-base mb-1">Nutrition & Food</h3>
          <p class="font-sans text-sm text-charcoal/60 leading-relaxed">Fuel that works with your biology — personalized, not generic.</p>
        </div>
      </div>
      <div class="reveal grid grid-cols-[60px_1fr] gap-6 py-7 items-start">
        <span class="font-serif italic text-4xl text-forest/25 leading-none">02</span>
        <div>
          <h3 class="font-sans font-bold text-charcoal text-base mb-1">Hydration & Detox</h3>
          <p class="font-sans text-sm text-charcoal/60 leading-relaxed">Your body's ability to cleanse, reset, and maintain cellular function.</p>
        </div>
      </div>
      <div class="reveal grid grid-cols-[60px_1fr] gap-6 py-7 items-start">
        <span class="font-serif italic text-4xl text-forest/25 leading-none">03</span>
        <div>
          <h3 class="font-sans font-bold text-charcoal text-base mb-1">Movement & Breath</h3>
          <p class="font-sans text-sm text-charcoal/60 leading-relaxed">Strength and restoration without depletion — movement as medicine.</p>
        </div>
      </div>
      <div class="reveal grid grid-cols-[60px_1fr] gap-6 py-7 items-start">
        <span class="font-serif italic text-4xl text-forest/25 leading-none">04</span>
        <div>
          <h3 class="font-sans font-bold text-charcoal text-base mb-1">Sleep & Recovery</h3>
          <p class="font-sans text-sm text-charcoal/60 leading-relaxed">The foundation every other system depends on. Not optional — foundational.</p>
        </div>
      </div>
      <div class="reveal grid grid-cols-[60px_1fr] gap-6 py-7 items-start">
        <span class="font-serif italic text-4xl text-forest/25 leading-none">05</span>
        <div>
          <h3 class="font-sans font-bold text-charcoal text-base mb-1">Mind & Nervous System</h3>
          <p class="font-sans text-sm text-charcoal/60 leading-relaxed">Stress regulation and resilience — physiologically essential, not soft.</p>
        </div>
      </div>
      <div class="reveal grid grid-cols-[60px_1fr] gap-6 py-7 items-start">
        <span class="font-serif italic text-4xl text-forest/25 leading-none">06</span>
        <div>
          <h3 class="font-sans font-bold text-charcoal text-base mb-1">Lab Work & Biomarkers</h3>
          <p class="font-sans text-sm text-charcoal/60 leading-relaxed">Real data to guide real decisions — what symptoms often hide.</p>
        </div>
      </div>
      <div class="reveal grid grid-cols-[60px_1fr] gap-6 py-7 items-start">
        <span class="font-serif italic text-4xl text-forest/25 leading-none">07</span>
        <div>
          <h3 class="font-sans font-bold text-charcoal text-base mb-1">Environment & Lifestyle</h3>
          <p class="font-sans text-sm text-charcoal/60 leading-relaxed">The hidden forces shaping your biology every single day.</p>
        </div>
      </div>
    </div>

    <!-- CTA below the list -->
    <div class="text-center mt-14 reveal">
      <a href="/funnel/quiz" class="inline-flex items-center gap-2 bg-forest text-cream font-sans font-medium py-4 px-8 rounded-full hover:bg-forest/90 hover:shadow-lg hover:scale-[1.02] transition-all">
        Find Your Root Cause — Take the Free Quiz
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
2. `git add -A && git commit -m "Round 7: Seven Systems split into two sections — Why Healing Fails + clean typographic list"`
3. `/Users/Jarvis/.npm-global/bin/vercel --prod`
4. Al terminar: `openclaw system event --text "Vayda Round 7 deployed — Seven Systems rediseñado" --mode now`

**Repo:** `/Users/Jarvis/Projects/vaydawellness-website`
