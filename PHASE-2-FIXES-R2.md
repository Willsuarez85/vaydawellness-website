# Phase 2 — Design Fixes Round 2

Apply ALL changes in this doc in one commit. Read fully before starting.

---

## 1. Icon Library — Switch to Lucide (wellness/nature set)

**Remove** all custom SVG icon components in `src/components/icons/`.

**Install Lucide:**
```bash
npm install lucide-astro
```

**Replace every icon** with the Lucide equivalents below. These are wellness/nature-oriented and consistent:

| Context | Old | New Lucide Icon | Import |
|---------|-----|-----------------|--------|
| Brain Fog | BrainIcon | `Brain` | `import { Brain } from 'lucide-astro'` |
| Hormonal Imbalance | BalanceIcon | `Scale` | |
| Root Cause | RootIcon | `TreeDeciduous` | |
| Nutrition | LeafIcon | `Leaf` | |
| Hydration | DropIcon | `Droplets` | |
| Movement | MovementIcon | `Wind` | |
| Sleep | MoonIcon | `Moon` | |
| Mind/Nervous | MindIcon | `Zap` | |
| Lab Work | LabIcon | `FlaskConical` | |
| Environment | EarthIcon | `Mountain` | |
| Quiz CTA | QuizIcon | `ArrowRight` | |
| Online Programs | BookIcon | `BookOpen` | |
| 1:1 Coaching | CoachIcon | `Users` | |
| Benefit checkmarks | any | `Sparkles` | |

**Icon sizing:**
- Problem cards: `size={32}` `class="text-sage"` (use forest green `#2D4A35` instead of sage for better contrast)
- Method pillars: `size={28}` `class="text-forest"`
- Pricing cards: `size={28}` `class="text-cream"` (white-ish on dark green bg)

---

## 2. Icon Alignment — Centered in Cards

**Problem cards** (Brain Fog, Hormonal Imbalance, Root Cause) — icon must be centered above title.

Fix ProblemCard.astro layout:
```astro
<div class="bg-beige rounded-2xl p-8 flex flex-col items-center text-center reveal">
  <div class="w-16 h-16 bg-cream rounded-full flex items-center justify-center mb-5 shadow-sm">
    <slot name="icon" />
  </div>
  <h3 class="font-display text-xl font-bold text-forest mb-3">{title}</h3>
  <p class="font-sans text-charcoal/70 text-sm leading-relaxed">{description}</p>
</div>
```

Icon sits in a cream circle on beige background — creates depth. Centered. No left-align.

Same pattern for **Vayda Method pillar cards** — icon centered above title.

---

## 3. Vayda Method Section — Add Description

After the `H2 "Seven Systems. One Unified Path."` and before the grid, add:

```astro
<p class="font-sans text-charcoal/70 text-center max-w-2xl mx-auto mb-16 text-lg leading-relaxed">
  Most practitioners treat one system at a time. The Vayda Method works differently — 
  it maps the relationship between all seven dimensions of your health, identifies 
  where the chain is breaking, and builds a unified protocol to restore balance from the root.
</p>
```

Remove the icons from the pillar cards in this section if they look cluttered — use a numbered indicator instead:
```astro
<!-- Instead of icon, use a numbered circle -->
<div class="w-10 h-10 rounded-full bg-forest text-cream font-display text-lg font-bold flex items-center justify-center mx-auto mb-4">
  {number}
</div>
```

This feels more intentional and less icon-heavy.

---

## 4. Pricing Section — Full Redesign

**Problems to fix:**
- Icons left-aligned on dark green bg → move to top-center
- "Free to start" green on green → invisible
- $$ symbols too small → make them a visual element
- Overall contrast issues

**New PricingCard layout** (bg-white/10 border border-white/20 rounded-2xl p-8):
```astro
<div class="bg-white/10 border border-white/20 rounded-2xl p-8 flex flex-col items-center text-center hover:bg-white/15 transition-all">
  
  <!-- Icon: centered, cream colored, in a circle -->
  <div class="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center mb-5">
    <Icon size={28} class="text-cream" />
  </div>

  <!-- Title -->
  <h3 class="font-display text-2xl font-bold text-cream italic mb-2">{title}</h3>

  <!-- Price indicator — prominent, not tiny -->
  <!-- For free: -->
  <span class="font-sans text-sage-300 text-sm tracking-widest uppercase mb-4">Free to Start</span>
  <!-- For $$: -->
  <span class="font-display text-sage text-2xl font-bold mb-4 tracking-wider">$$</span>
  <!-- For $$$: -->
  <span class="font-display text-sage text-2xl font-bold mb-4 tracking-wider">$$$</span>

  <!-- Description -->
  <p class="font-sans text-cream/70 text-sm leading-relaxed mb-6">{description}</p>

  <!-- CTA Button — prominent, not buried -->
  <a href="#" class="mt-auto w-full text-center bg-sage hover:bg-sage/80 text-cream font-sans font-medium py-3 px-6 rounded-lg transition-all text-sm tracking-wide">
    {ctaText}
  </a>

</div>
```

**Color fixes:**
- "Free to Start" label: `text-cream/80` NOT green — it's on a dark green background
- $$ / $$$ symbols: `text-2xl font-bold text-beige` — large enough to be a visual element
- CTA button inside pricing card: `bg-sage text-cream` (sage button, not green on green)

---

## 5. Add CTAs — 2 Additional Throughout the Page

**CTA #1 — After the Problem Agitation section** (before Transformation):
```astro
<div class="text-center mt-12">
  <a href="#quiz" class="inline-flex items-center gap-2 bg-forest text-cream font-sans font-medium py-4 px-8 rounded-full hover:bg-forest/90 hover:shadow-lg hover:scale-[1.02] transition-all">
    Find Your Root Cause — Take the Free Quiz
    <ArrowRight size={18} />
  </a>
  <p class="font-sans text-charcoal/50 text-sm mt-3">5 minutes. No email required.</p>
</div>
```

**CTA #2 — After the About Ramesh section**:
```astro
<div class="text-center mt-10">
  <a href="/programs" class="inline-flex items-center gap-2 border-2 border-forest text-forest font-sans font-medium py-3 px-7 rounded-full hover:bg-forest hover:text-cream transition-all">
    Work with Ramesh
    <ArrowRight size={18} />
  </a>
</div>
```

---

## 6. General Contrast & Visibility Polish

- Any text that's "green on green" → change to `text-cream` or `text-beige`
- Sage text on forest background → use `text-beige` instead (better contrast)
- Social proof trust bar text → `text-charcoal/60` (currently might be low contrast)
- Testimonial quote text → `font-display italic text-xl text-charcoal` (more presence)

---

## After Changes

```bash
npm run build   # must be clean
git add .
git commit -m "fix: design polish round 2 — icon library, card layout, pricing, CTAs"
git push origin main
vercel --prod
```

Report Vercel URL.

When completely finished run: openclaw system event --text "Done: Vayda design fixes round 2 deployed" --mode now
