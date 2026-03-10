# Phase 2 — Design Fixes (Round 1)

Apply ALL these changes in one commit. Read carefully before touching any file.

---

## 1. Logo — Nav
- Wordmark must say **"Vayda"** only — remove "Wellness" descriptor text entirely
- Keep: symbol icon left + "Vayda" text right (horizontal layout stays)
- Remove the `<span id="descriptor">` element and all its JS references

---

## 2. No Emojis — Replace with SVG Icons

Remove ALL emojis from the codebase. Replace with minimal SVG inline icons.

Create `src/components/icons/` directory with these SVG icon components:

### Icons needed (minimal, stroke-based, 24x24 viewBox, no fill, stroke-width="1.5"):

**`BrainIcon.astro`** — abstract mind/neural: circle with 3 curved lines radiating inward
```svg
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round">
  <circle cx="12" cy="12" r="9"/>
  <path d="M12 3c0 4-4 6-4 9s4 5 4 9"/>
  <path d="M8 7.5c2 1 4 1 8 0"/>
  <path d="M7 14c2-1 5-1 10 1"/>
</svg>
```

**`BalanceIcon.astro`** — scales/balance: horizontal line, triangle below, two circles hanging
```svg
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round">
  <line x1="12" y1="3" x2="12" y2="21"/>
  <line x1="4" y1="8" x2="20" y2="8"/>
  <circle cx="4" cy="11" r="3"/>
  <circle cx="20" cy="11" r="3"/>
</svg>
```

**`RootIcon.astro`** — roots: vertical line branching into 3 roots downward
```svg
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round">
  <line x1="12" y1="2" x2="12" y2="12"/>
  <path d="M12 12 L6 20"/>
  <path d="M12 12 L12 20"/>
  <path d="M12 12 L18 20"/>
  <path d="M12 14 L8 20"/>
  <path d="M12 14 L16 20"/>
</svg>
```

**`LeafIcon.astro`** — nutrition: simple leaf shape
```svg
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round">
  <path d="M20 4C20 4 12 4 7 9s-3 13-3 13 8 2 13-3 3-15 3-15z"/>
  <line x1="4" y1="20" x2="12" y2="12"/>
</svg>
```

**`DropIcon.astro`** — hydration: water drop
```svg
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round">
  <path d="M12 2L6 12a6 6 0 1012 0L12 2z"/>
</svg>
```

**`MovementIcon.astro`** — movement: figure in motion (abstract)
```svg
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round">
  <circle cx="12" cy="5" r="2"/>
  <path d="M9 10l-3 8M12 10l1 5 3 4M9 10h6l2-3"/>
</svg>
```

**`MoonIcon.astro`** — sleep: crescent moon
```svg
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round">
  <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"/>
</svg>
```

**`MindIcon.astro`** — nervous system: lightning/spark
```svg
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round">
  <polyline points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
</svg>
```

**`LabIcon.astro`** — biomarkers: test tube
```svg
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round">
  <line x1="9" y1="2" x2="15" y2="2"/>
  <line x1="12" y1="2" x2="12" y2="12"/>
  <path d="M8 12l-3 6a1 1 0 001 1h12a1 1 0 001-1l-3-6"/>
</svg>
```

**`EarthIcon.astro`** — environment: globe with lines
```svg
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round">
  <circle cx="12" cy="12" r="9"/>
  <path d="M12 3a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/>
  <line x1="3" y1="12" x2="21" y2="12"/>
</svg>
```

**`QuizIcon.astro`** — quiz/arrow: circle with right arrow
```svg
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round">
  <circle cx="12" cy="12" r="9"/>
  <path d="M12 8l4 4-4 4M8 12h8"/>
</svg>
```

**`CoachIcon.astro`** — 1:1 coaching: two figures
```svg
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round">
  <circle cx="8" cy="6" r="3"/>
  <path d="M3 20v-2a5 5 0 0110 0v2"/>
  <circle cx="17" cy="6" r="3"/>
  <path d="M14 20v-1a4 4 0 018 0v1"/>
</svg>
```

**`BookIcon.astro`** — online programs: open book
```svg
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round">
  <path d="M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2z"/>
  <path d="M22 3h-6a4 4 0 00-4 4v14a3 3 0 013-3h7z"/>
</svg>
```

---

Replace all emoji usage throughout the codebase with these icon components. Icon size in cards: `class="w-8 h-8 text-sage"` (32px). Icon size in method pillars: `class="w-6 h-6 text-sage"` (24px).

---

## 3. Card Titles — Bolder & Bigger

In ProblemCard.astro and any card components:
- Card title: change from `text-lg font-semibold` → `text-xl font-bold text-forest`
- Card body: keep as is

In Vayda Method pillar cards:
- Title: `text-lg font-bold text-charcoal` (was font-medium or semibold)

---

## 4. Overlays — Darker Green

All parallax/photo sections with forest green overlay:
- Hero: `bg-forest/50` → `bg-forest/65`
- Transformation section (ramesh-teaching): `bg-forest/50` → `bg-forest/70`
- Final CTA section: `bg-forest/60` → `bg-forest/75`

---

## 5. Scroll Animations — Entry Animations

Add scroll-triggered fade-up animations using Intersection Observer (vanilla JS, no library needed).

Add to `src/styles/global.css` (or inline in BaseLayout):
```css
.reveal {
  opacity: 0;
  transform: translateY(24px);
  transition: opacity 0.6s ease, transform 0.6s ease;
}
.reveal.visible {
  opacity: 1;
  transform: translateY(0);
}
.reveal-delay-1 { transition-delay: 0.1s; }
.reveal-delay-2 { transition-delay: 0.2s; }
.reveal-delay-3 { transition-delay: 0.3s; }
```

Add to BaseLayout.astro `<script>`:
```js
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      observer.unobserve(e.target);
    }
  });
}, { threshold: 0.15 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
```

Apply `class="reveal"` to:
- Section eyebrows
- Section H2 headings
- Card grids (each card gets `reveal reveal-delay-1`, `reveal-delay-2`, `reveal-delay-3`)
- Testimonial cards
- About section (photo gets delay-1, text gets delay-2)
- FAQ items

---

## 6. "You've Tried Everything" Headline — Bolder

In the Problem Agitation section:
- H2: add `font-bold` (was italic only) → `font-bold italic`

---

## 7. Section Titles — Bolder

All section H2 headings (What People Are Saying, Seven Systems, Choose Your Path, etc.):
- Ensure `font-bold` is applied, not just `font-semibold`
- Keep Cormorant Garamond + italic

---

## 8. Remove Prama Institute Reference

In the Social Proof / Trust Bar section:
- Remove `"Prama Institute Co-Founder ·"` from the trust bar
- Keep: `"20+ Years Teaching · 500+ Students Transformed"` only

---

## 9. Pricing — Price Symbols Instead of Numbers

In the 3 pricing cards (PricingCard.astro or inline):
- Remove `$297+`, `Custom`, `Free` text/prices
- Replace with price indicator symbols:
  - Quiz: no price shown, just `"Free to start"`
  - Online Programs: show `$$` in sage color, small, below the title
  - 1:1 Coaching: show `$$$` in sage color, small, below the title
- The `$$` symbols should be: `<span class="font-sans text-sage text-sm tracking-widest">$$</span>`

---

## 10. General Design Polish

- Ensure consistent vertical rhythm: `py-24` on all sections desktop
- Section eyebrows: verify `tracking-[0.25em]` and `text-sage` consistently
- Button hover states: primary buttons get `hover:shadow-lg hover:scale-[1.02] transition-all`
- Cards: ensure all get `hover:shadow-md transition-shadow duration-300`
- Footer: add subtle top border `border-t border-white/10`

---

## After All Changes

```bash
npm run build  # must pass clean
git add .
git commit -m "fix: design polish round 1 — logo, icons, animations, overlays, typography"
git push origin main
vercel --prod
```

Report Vercel URL when done.

When completely finished run: openclaw system event --text "Done: Vayda design fixes round 1 deployed" --mode now
