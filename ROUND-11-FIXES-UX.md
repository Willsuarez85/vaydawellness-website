# ROUND 11 — UX Fixes + Conversion Improvements
**Date:** 2026-03-11
**Repo:** /Users/Jarvis/Projects/vaydawellness-website
**Deploy:** Vercel auto-deploy on push to main

Brand: forest=#2D4A35 · cream=#F8F5F0 · sage=#657F66 · beige=#D7D5C6 · charcoal=#2D3436

---

## TASK 1 — Replace Gallery with Arrow Carousel (NO scroll hijacking)

The current `HorizontalScrollGallery.astro` uses `height: 400vh` and a scroll-linked effect that hijacks the page scroll. This hurts navigation. Replace it entirely with a simple **arrow-based carousel** that does NOT affect scroll behavior.

### New implementation for `src/components/HorizontalScrollGallery.astro`

Replace the entire file with:

```astro
---
interface Props {
  title?: string;
}
const { title = 'Life. Movement. Healing.' } = Astro.props;

const photos = [
  { src: '/photos/ramesh/yoga-class-group.jpg', alt: 'Yoga class group session' },
  { src: '/photos/ramesh/ramesh-meditating-studio.jpg', alt: 'Ramesh meditating' },
  { src: '/photos/ramesh/ramesh-coaching-session.jpg', alt: 'Ramesh coaching' },
  { src: '/photos/ramesh/yoga-class-stretching.jpg', alt: 'Yoga class' },
  { src: '/photos/ramesh/meditation-close.jpg', alt: 'Meditation' },
  { src: '/photos/ramesh/studio-community.jpg', alt: 'Community' },
  { src: '/photos/ramesh/yoga-tree-pose.jpg', alt: 'Yoga practice' },
  { src: '/photos/ramesh/ramesh-portrait-outdoor.jpg', alt: 'Ramesh portrait' },
  { src: '/photos/ramesh/group-gratitude-circle.jpg', alt: 'Group session' },
  { src: '/photos/ramesh/ramesh-meditating-plants.jpg', alt: 'Meditation with plants' },
  { src: '/photos/ramesh/outdoor-group-session.jpg', alt: 'Outdoor group' },
  { src: '/photos/ramesh/ramesh-teaching-class.jpg', alt: 'Ramesh teaching' },
];
---

<section class="bg-forest py-16 md:py-20 overflow-hidden">
  <div class="max-w-container mx-auto px-6 mb-10 text-center">
    <p class="font-sans text-xs tracking-widest uppercase text-cream/40 mb-2">The Vayda Community</p>
    <h2 class="font-serif font-bold italic text-3xl md:text-4xl text-cream">{title}</h2>
  </div>

  <!-- Carousel wrapper -->
  <div class="relative">
    <!-- Track -->
    <div
      id="gallery-track"
      class="flex gap-4 px-8 overflow-x-hidden transition-transform duration-500 ease-out"
      style="width: 100%"
    >
      <div id="gallery-inner" class="flex gap-4 transition-transform duration-500 ease-out will-change-transform">
        {photos.map((photo) => (
          <div class="flex-shrink-0 w-72 md:w-80 h-56 md:h-64 rounded-xl overflow-hidden">
            <img src={photo.src} alt={photo.alt} class="w-full h-full object-cover hover:scale-105 transition-transform duration-500" loading="lazy" />
          </div>
        ))}
      </div>
    </div>

    <!-- Left arrow -->
    <button
      id="gallery-prev"
      aria-label="Previous photos"
      class="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-forest border border-cream/30 text-cream flex items-center justify-center hover:bg-forest/80 transition-all shadow-lg disabled:opacity-30 disabled:cursor-not-allowed"
    >
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M15 18l-6-6 6-6"/></svg>
    </button>

    <!-- Right arrow -->
    <button
      id="gallery-next"
      aria-label="Next photos"
      class="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-forest border border-cream/30 text-cream flex items-center justify-center hover:bg-forest/80 transition-all shadow-lg disabled:opacity-30 disabled:cursor-not-allowed"
    >
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M9 18l6-6-6-6"/></svg>
    </button>
  </div>
</section>

<script>
  const inner = document.getElementById('gallery-inner') as HTMLElement;
  const prevBtn = document.getElementById('gallery-prev') as HTMLButtonElement;
  const nextBtn = document.getElementById('gallery-next') as HTMLButtonElement;

  let offset = 0;
  const STEP = 300; // px per click

  function getMaxOffset() {
    return -(inner.scrollWidth - window.innerWidth + 64);
  }

  function update() {
    inner.style.transform = `translateX(${offset}px)`;
    prevBtn.disabled = offset >= 0;
    nextBtn.disabled = offset <= getMaxOffset();
  }

  prevBtn.addEventListener('click', () => {
    offset = Math.min(0, offset + STEP);
    update();
  });

  nextBtn.addEventListener('click', () => {
    offset = Math.max(getMaxOffset(), offset - STEP);
    update();
  });

  window.addEventListener('resize', () => {
    offset = Math.max(getMaxOffset(), Math.min(0, offset));
    update();
  });

  update();
</script>
```

This replaces the 400vh scroll-hijacking section with a compact green section with arrow buttons. No scroll interference.

---

## TASK 2 — Footer: Make Column Headers More Visible

In `src/components/Footer.astro`, find the column headers "Programs" and "Company" (and any similar section label).

Change from: `text-white/40` (or similar low-opacity class)
Change to: `text-white font-semibold text-base mb-4`

The goal is they should be clearly readable — same color as the rest of the footer text but bold and slightly larger.

---

## TASK 3 — Remove "clinical" language from all pages

Ramesh is a wellness coach, NOT a medical doctor. "Clinical" sounds like a doctor's office.

**Changes:**

`src/pages/about.astro` line ~70:
- Change: `"Years of clinical practice"` → `"Years of coaching practice"`

`src/pages/the-vayda-method.astro`:
- Find: `"20+ years of clinical observation"`
- Replace: `"20+ years of practice and direct coaching experience"`

Also run: `grep -rn "clinical" src/` and fix any remaining instances with similar context-appropriate wording.

---

## TASK 4 — Fix numbered steps on `/the-vayda-method`

**The Process** section (bg-forest, 3-column grid) has a visual bug: each step has a giant ghost number (`text-[120px]`) positioned absolute behind the circle, AND a number inside the circle. The ghost number overflows visually and looks like a duplicate.

**Fix:** Remove the giant ghost numbers entirely from all 3 steps. They add clutter. Keep only the clean white circle with the number inside.

For each step (1, 2, 3), remove the div that looks like this:
```html
<div class="text-[120px] font-serif text-white/5 absolute -top-8 left-1/2 -translate-x-1/2 leading-none select-none pointer-events-none">1</div>
```

Keep only the `<div class="relative z-10">` wrapper with the circle and content.

---

## TASK 5 — Booking Page: Rename + Fix Hero + More CTAs + Testimonials

**File:** `src/pages/booking.astro`

### 5a. Rename throughout the page
All instances of "Book a session" → "Book a consultation"
"Book a 60-minute session" → "Book a 60-minute consultation"
Page title, H1, CTAs, nav — everywhere in this file.

### 5b. Fix hero text visibility
The hero text is barely visible. Fix the overlay and text color:

```html
<!-- Change overlay from bg-forest/92 to bg-charcoal/85 -->
<div class="absolute inset-0 bg-charcoal/85"></div>

<!-- Make ALL hero text explicitly white -->
<!-- H1 --> class="... text-white ..."
<!-- Subtext --> class="... text-white/80 ..."
<!-- CTA button --> bg-cream text-forest (keep)
```

The eyebrow SectionEyebrow already has `class="text-cream"` — that should now show correctly after previous fix.

### 5c. Add a second CTA button mid-page
After the "What You'll Get" section and before the booking form, add a CTA button:
```html
<div class="text-center py-10">
  <a href="#booking-form" class="inline-flex items-center gap-2 bg-forest text-cream font-sans font-semibold px-10 py-5 rounded-full hover:bg-forest/90 hover:shadow-xl transition-all">
    Schedule My Consultation →
  </a>
</div>
```

### 5d. Replace single testimonial with 3 testimonials
Find the single testimonial (Max Paul Franklin) and replace with the full TestimonialCard grid used on the homepage:

```astro
import TestimonialCard from '../components/TestimonialCard.astro';

<section class="bg-charcoal py-16">
  <div class="max-w-container mx-auto px-6">
    <div class="text-center mb-12">
      <SectionEyebrow text="Client Results" class="text-cream" />
      <h2 class="font-serif font-bold italic text-3xl md:text-4xl text-cream mt-4">Real people. Real results.</h2>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
      <TestimonialCard
        quote="Ramesh and his amazing coaching changed my life. At 77, I am feeling like I am 45."
        name="Max Paul Franklin"
        role="Asheville, NC"
      />
      <TestimonialCard
        quote="In 6 days, all my neurological pain was gone. I mean, gone."
        name="Jared Navarre"
        role="Nashville, TN"
      />
      <TestimonialCard
        quote="Six weeks later, I finally feel like myself again."
        name="Sarah M."
        role="Charlotte, NC"
      />
    </div>
  </div>
</section>
```

---

## TASK 6 — Coaching Page: Full Conversion Rebuild

**File:** `src/pages/coaching.astro` (uses SalesLayout)

This page needs multiple CTAs, real images, and stronger conversion structure.

### 6a. Add CTA after Wistia video section
After the video and caption, add:
```html
<div class="text-center mt-10">
  <a href="#apply" class="inline-flex items-center gap-2 bg-forest text-cream font-sans font-semibold px-10 py-5 rounded-full hover:bg-forest/90 hover:shadow-xl transition-all">
    Apply to Work With Ramesh →
  </a>
</div>
```

### 6b. Add photo to "What's Included" section
In the "What's Included" section (bg-beige, 2-col grid), add a photo above the two columns:
```html
<div class="max-w-2xl mx-auto mb-12 rounded-2xl overflow-hidden">
  <img src="/photos/ramesh/ramesh-coaching-session.jpg" alt="Ramesh 1:1 coaching session" class="w-full h-64 object-cover" />
</div>
```

### 6c. Add CTA after "What's Included"
```html
<div class="text-center mt-12">
  <a href="#apply" class="inline-flex items-center gap-2 bg-forest text-cream font-sans font-semibold px-10 py-5 rounded-full hover:bg-forest/90 transition-all">
    Apply Now →
  </a>
</div>
```

### 6d. Add photo to "Who This Is For" section
Add a group photo at the bottom of this section:
```html
<div class="max-w-2xl mx-auto mt-10 rounded-2xl overflow-hidden">
  <img src="/photos/ramesh/outdoor-group-session.jpg" alt="Vayda community" class="w-full h-48 object-cover" />
</div>
```

### 6e. Make testimonials section use standard grid
Find the testimonials at the bottom and make sure they use the existing TestimonialCard component in a `grid-cols-1 md:grid-cols-2 gap-8` layout, inside a `bg-charcoal py-16` section with SectionEyebrow and heading.

---

## TASK 7 — 7-Day Reset: Add Hero Background Photo + More CTAs

**File:** `src/pages/7-day-reset.astro`

### 7a. Add background photo to hero
Current hero is solid `bg-forest`. Add background:
```html
<section class="bg-forest text-cream relative bg-cover bg-center" style="background-image: url('/photos/ramesh/yoga-class-stretching.jpg')">
  <div class="absolute inset-0 bg-forest/88"></div>
  <div class="relative z-10 max-w-container mx-auto px-6 py-20 md:py-28 text-center">
    <!-- all existing content unchanged -->
```

### 7b. Add photo between sections
Find the section after the stats/social proof and before the "What's Inside" or protocol section. Insert a full-width photo:
```html
<div class="w-full overflow-hidden" style="height: 300px">
  <img src="/photos/ramesh/ramesh-meditating-plants.jpg" alt="The healing process" class="w-full h-full object-cover object-center" />
</div>
```

### 7c. Add extra CTA button mid-page
After the main benefits/protocol section (around midpoint of the page), add:
```html
<div class="bg-beige py-12 text-center">
  <p class="font-sans text-sm text-charcoal/60 mb-4 tracking-wide">Ready to reset your body?</p>
  <a href="#buy" class="inline-flex items-center gap-2 bg-forest text-cream font-sans font-semibold px-10 py-5 rounded-full hover:bg-forest/90 hover:shadow-xl transition-all">
    Start My 7-Day Reset — $47 →
  </a>
  <p class="font-sans text-xs text-charcoal/40 mt-3">7-day money-back guarantee · Instant digital access</p>
</div>
```

---

## IMPORTANT NOTES

1. Do NOT change brand colors, fonts, or break working components.
2. The gallery replacement (Task 1) completely replaces the existing component — no scroll hijacking at all.
3. Run `npm run build` — must pass with zero errors.
4. Commit each task separately:
   - `fix: gallery — replace scroll-hijack with arrow carousel on forest bg`
   - `fix: footer column headers — increase visibility`
   - `fix: remove clinical language across all pages`
   - `fix: vayda-method numbered steps — remove ghost numbers`
   - `feat: booking page — rename to consultation, fix hero visibility, add CTAs, 3 testimonials`
   - `feat: coaching page — add CTAs, photos, testimonials grid`
   - `feat: 7-day-reset — hero background, mid-page photo, extra CTA`
5. Push to main when done.

---

## Done When
- [ ] Gallery = green section with arrow buttons, NO scroll hijacking
- [ ] Footer "Programs"/"Company" headers clearly visible (white, semibold)
- [ ] Zero instances of "clinical practice" or "clinical observation" anywhere
- [ ] Vayda Method steps: only one number per step (inside circle), no ghost numbers
- [ ] Booking page says "consultation" everywhere, hero text is white and visible, 3 testimonials
- [ ] Coaching page has 3+ CTAs, photos, standard testimonials grid
- [ ] 7-Day Reset has hero background photo, mid-page photo, extra CTA button
- [ ] `npm run build` passes
- [ ] All pushed to main
