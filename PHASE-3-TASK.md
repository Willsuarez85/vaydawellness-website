# Vayda Website — Phase 3: Inner Pages

**Objetivo:** Construir las 3 páginas internas del sitio.
**Design system:** Mismo que homepage — colores, tipografía, componentes existentes.
**Layout:** Usar `BaseLayout.astro` en todas.

---

## Fotos disponibles en `/public/photos/`
- `hero.jpg` — Ramesh en naturaleza, pose fuerte
- `ramesh-founder.jpg` — Portrait de Ramesh (vertical)
- `ramesh-teaching.jpg` — Ramesh enseñando en clase
- `workshop.jpg` — Grupo en workshop
- `meditation-group.jpg` — Grupo meditando
- `coaching.jpg` — Sesión 1:1 de coaching

## Video Wistia disponible
- `j13djtcnel` — 22 segundos, transformación de cliente (usar en heroes de páginas internas)

---

## PÁGINA 1: `/about`

**File:** `src/pages/about.astro`

### Estructura

**1. Page Hero** (con foto + overlay)
- Background: `ramesh-teaching.jpg` con overlay `bg-forest/70`
- Eyebrow: "Meet Ramesh Roar"
- H1: "The Viking Yogi"
- Subtítulo: "Two decades at the intersection of ancient wisdom and modern performance science."
- Sin botones — solo la intro, deja que el scroll hable

**2. Origin Story** (bg-cream)
- Eyebrow: "The Story"
- H2: "From the mat to the method."
- Layout 2 columnas: texto izquierda, foto `ramesh-founder.jpg` derecha
- Copy:

> Ramesh Roar has spent more than 20 years studying what makes the human body thrive — and what slowly breaks it down. His path started in yoga and meditation, moved through functional nutrition and Ayurvedic medicine, and ultimately led him to develop what he calls the Vayda Method: a unified framework that treats the body as one interconnected system, not a collection of isolated symptoms.
>
> His nickname — The Viking Yogi — captures the contradiction at the heart of his philosophy. The strength to face life's hardest challenges. The wisdom to actually heal from them.
>
> Based near Asheville, NC, Ramesh has guided 500+ people back to health — not through quick fixes or another protocol to follow, but through understanding the root systems that drive chronic pain, fatigue, and hormonal imbalance.

**3. Credentials / Stats bar** (bg-forest, texto cream)
- 3 stats en fila:
  - "20+ Years" / "Of clinical practice"
  - "500+" / "People transformed"
  - "7 Systems" / "One unified method"

**4. Philosophy** (bg-cream)
- Eyebrow: "His Approach"
- H2: "Most practitioners treat one system. Ramesh maps all seven."
- Párrafo: "The Vayda Method isn't a diet plan or a supplement stack. It's a diagnostic framework — one that starts by mapping how your seven core body systems interact, identifying where the chain is breaking, and building a unified protocol to restore balance from the root."
- Layout 2 columnas: izquierda foto `workshop.jpg`, derecha texto + lista de los 7 sistemas (íconos Lucide simples + nombre + 1 línea)

**5. Watch Ramesh** (bg-charcoal)
- Eyebrow: "In His Own Words" — text-sage
- H2: "Watch: A client's transformation." — text-cream italic
- Descripción: "20 years of teaching. See what the Vayda Method does in practice."
- WistiaVideo videoId="j13djtcnel"

**6. CTA** (bg-forest, parallax con `hero.jpg`)
- H2: "Ready to work with Ramesh?"
- Dos botones: "Take the Free Quiz" + "Apply for 1:1 Coaching"

---

## PÁGINA 2: `/the-vayda-method`

**File:** `src/pages/the-vayda-method.astro`

### Estructura

**1. Page Hero** (foto + overlay)
- Background: `ramesh-teaching.jpg` overlay `bg-forest/75`
- Eyebrow: "The Framework"
- H1: "The Vayda Method"
- Subtítulo: "A whole-body diagnostic framework built on 20 years of practice. Seven systems. One root cause. One path forward."

**2. The Core Idea** (bg-cream)
- H2: "Your symptoms are signals. Not the problem."
- Layout 2 cols: texto + foto `meditation-group.jpg`
- Copy: "Most people spend years treating symptoms — pain medication for chronic pain, thyroid meds for fatigue, antidepressants for mood. These address the signals, not the source. The Vayda Method starts from a different premise: every symptom is the body communicating an imbalance in one or more of its seven core systems. Find the imbalance. Fix the root. Watch the symptoms resolve."

**3. The 7 Systems** (bg-beige → alternating cream/beige por pillar)
- Eyebrow: "The Seven Systems"
- H2: "Where the Vayda Method begins."
- Para cada uno de los 7 pilares, un bloque expandido con:
  - Número + Nombre
  - 2-3 líneas de descripción profunda
  - Íconos Lucide (mismos que homepage)
- Layout: grid 2 cols en desktop, 1 col mobile
- Los 7: Nutrition & Food · Hydration & Detox · Movement & Breath · Sleep & Recovery · Mind & Nervous System · Lab Work & Biomarkers · Environment & Lifestyle

**4. How It Works — 3 pasos** (bg-forest)
- Eyebrow: "The Process" — text-sage
- H2: "From first conversation to full protocol." — text-cream
- 3 pasos en fila:
  1. **Root Cause Assessment** — "We map all seven systems to identify where your health chain is breaking down."
  2. **Personalized Protocol** — "You receive a unified plan — not a generic program. Every element calibrated to your biology."
  3. **Guided Implementation** — "You're not left to figure it out alone. Ramesh guides the entire process."

**5. Science Backing** (bg-cream)
- H2: "Grounded in evidence."
- 3 referencias cortas (en cards):
  - Dr. Valter Longo — immune system reset through fasting (72h)
  - Dr. Michael Pollan — plant-based whole food framework
  - Modern HRV research — nervous system & recovery
- Copy introductorio: "The Vayda Method isn't alternative medicine. It draws from peer-reviewed research, functional medicine, and 20+ years of clinical observation."

**6. CTA** (bg-charcoal, parallax `hero.jpg`)
- H2: "Ready to understand your root cause?"
- Botones: "Take the Free Quiz" + "View Programs"

---

## PÁGINA 3: `/programs`

**File:** `src/pages/programs.astro`

### Estructura

**1. Page Hero**
- Background: `coaching.jpg` overlay `bg-charcoal/80`
- Eyebrow: "Work With Ramesh"
- H1: "Choose your path to healing."
- Subtítulo: "Whether you're just starting or ready for a full transformation — there's a right entry point for you."

**2. Programs Grid** (bg-cream)
- 3 cards grandes (vertical, full info):

**Card 1 — The Free Quiz**
- Badge: "Start Here · Free"
- Título: "Discover Your Root Cause"
- Descripción: "Not sure where to start? The 5-minute quiz maps your symptoms to the Vayda Method systems and tells you exactly where your body needs attention first."
- Lo que incluye: Instant results · Personalized system breakdown · Recommended next step
- CTA: "Take the Quiz — Free" → /quiz

**Card 2 — Online Programs** (highlighted card — bg-forest)
- Badge: "Most Popular · $$"
- Título: "The Vayda Method Online"
- Descripción: "Self-paced programs built on the complete Vayda Method. Learn the framework, implement the protocol, and start resolving the root cause — on your schedule."
- Lo que incluye: Full 7-system curriculum · Meal & movement plans · Guided meditations · Community access
- CTA: "View Programs" → (placeholder URL /programs/online)

**Card 3 — 1:1 Coaching**
- Badge: "Premium · $$$"
- Título: "Private Coaching with Ramesh"
- Descripción: "The most direct path to transformation. Ramesh reviews your labs, maps your systems, and builds a protocol designed exclusively for your biology."
- Lo que incluye: Full root cause assessment · Custom 12-week protocol · Weekly 1:1 sessions · Lab work review · Ongoing support
- CTA: "Apply Now" → /contact
- Foto: `coaching.jpg` en la card

**3. Testimonials** (bg-charcoal/90 con `meditation-group.jpg` parallax)
- Los mismos 3 testimonios reales que homepage (Max Paul, Jared, Sarah M.)

**4. FAQ rápido** (bg-cream)
- Solo 3 preguntas más relevantes para el path to purchase:
  - "How do I know which program is right for me?" → Take the quiz
  - "Do I need to live near Asheville?" → No, everything is remote
  - "How long before I see results?" → 4-6 weeks for most

**5. Final CTA** (bg-forest)
- H2: "Your body is ready to heal."
- CTA: "Start with the Free Quiz"

---

## Componentes Compartidos

Todos ya existen — solo usarlos:
- `BaseLayout.astro` — wrap en todas las páginas
- `SectionEyebrow.astro`
- `WistiaVideo.astro`
- `TestimonialCard.astro`
- `PricingCard.astro`
- `FAQItem.astro`
- Lucide icons via `lucide-astro`

---

## Nav — Actualizar links

En `src/components/Nav.astro`, verificar que los links del nav apunten correctamente:
- About → `/about`
- The Vayda Method → `/the-vayda-method`
- Programs → `/programs`
- Contact → `/contact` (dejar como placeholder por ahora)

---

## Build & Deploy

1. `npm run build` — verificar sin errores
2. `git add -A && git commit -m "Phase 3: inner pages — about, the-vayda-method, programs"`
3. `/Users/Jarvis/.npm-global/bin/vercel --prod`
4. Cuando termine: `openclaw system event --text "Vayda Phase 3 deployed — about + the-vayda-method + programs listos para revisión" --mode now`

---

**Repo:** `/Users/Jarvis/Projects/vaydawellness-website`
**Vercel binary:** `/Users/Jarvis/.npm-global/bin/vercel`
**Team scope:** simplicity-agency
