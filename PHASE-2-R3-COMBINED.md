# Phase 2 — Round 3: Design + Real Content (Combined)

Apply ALL changes in one commit. Read the full doc before touching any file.

---

## PART A — CHARCOAL COLOR + PHOTO INTEGRATION

### A1. Testimonials Section — Charcoal Background with Photo

Replace the current testimonials section background (bg-beige or bg-cream) with a full-bleed photo + charcoal overlay. This uses both the underused color AND the unused photo.

```astro
<!-- SOCIAL PROOF SECTION -->
<section
  class="relative bg-cover bg-center py-24"
  style="background-image: url('/photos/meditation-group.jpg')"
>
  <!-- Charcoal overlay — uses #2D3436 from palette -->
  <div class="absolute inset-0 bg-charcoal/85"></div>
  <div class="relative z-10 max-w-6xl mx-auto px-6">

    <div class="text-center mb-16 reveal">
      <SectionEyebrow text="What People Are Saying" class="text-sage" />
      <h2 class="font-display text-4xl md:text-5xl font-bold italic text-cream mt-4">
        Real people. Real results.
      </h2>
    </div>

    <!-- 3 testimonial cards on dark background -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
      <!-- Testimonials go here — see Part B for real content -->
    </div>

    <!-- Trust bar -->
    <div class="flex flex-wrap justify-center gap-8 mt-16 text-cream/40 font-sans text-xs tracking-[0.2em] uppercase reveal">
      <span>20+ Years Teaching</span>
      <span class="text-sage">·</span>
      <span>500+ Students Transformed</span>
      <span class="text-sage">·</span>
      <span>Asheville, NC</span>
      <span class="text-sage">·</span>
      <span>Online & In-Person</span>
    </div>
  </div>
</section>
```

TestimonialCard.astro on dark bg — update to:
```astro
<div class="bg-cream/10 border border-cream/20 backdrop-blur-sm rounded-2xl p-8 flex flex-col reveal">
  <!-- Quote mark -->
  <span class="font-display text-5xl text-sage leading-none mb-4">"</span>
  <!-- Quote text -->
  <p class="font-display italic text-lg text-cream leading-relaxed flex-1">{quote}</p>
  <!-- Name + role -->
  <div class="mt-6 pt-6 border-t border-cream/20">
    <p class="font-sans font-bold text-cream text-sm">{name}</p>
    <p class="font-sans text-cream/50 text-xs mt-1">{role}</p>
  </div>
</div>
```

---

### A2. Pricing Section — Add coaching.jpg to 1:1 Card

In the 1:1 Coaching pricing card, add a photo header above the content:

Update PricingCard.astro to accept an optional `image` prop:
```astro
---
interface Props {
  title: string;
  price: string;
  description: string;
  ctaText: string;
  ctaHref?: string;
  image?: string;
}
const { title, price, description, ctaText, ctaHref = '#', image } = Astro.props;
---

<div class="bg-white/10 border border-white/20 rounded-2xl overflow-hidden flex flex-col hover:bg-white/15 transition-all">
  {image && (
    <div class="h-40 overflow-hidden">
      <img src={image} alt={title} class="w-full h-full object-cover opacity-60" />
    </div>
  )}
  <div class="p-8 flex flex-col items-center text-center flex-1">
    <!-- rest of card content -->
  </div>
</div>
```

In index.astro, pass image to the coaching card:
```astro
<PricingCard
  title="1:1 Coaching"
  price="$$$"
  description="Work directly with Ramesh. Personalized protocol. Real results."
  ctaText="Apply Now"
  image="/photos/coaching.jpg"
/>
```

---

### A3. About Ramesh — Add workshop.jpg as background accent

In the About Ramesh section, add `workshop.jpg` as a subtle background visual on the right column (desktop) instead of empty space:

```astro
<!-- About section layout: text left, photo grid right -->
<div class="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

  <!-- Left: text content -->
  <div> ... bio content ... </div>

  <!-- Right: photo stack -->
  <div class="flex flex-col gap-4">
    <img src="/photos/ramesh-founder.jpg"
      alt="Ramesh Roar"
      class="rounded-2xl w-full aspect-[4/5] object-cover object-top shadow-xl reveal" />
    <img src="/photos/workshop.jpg"
      alt="Ramesh teaching a workshop"
      class="rounded-2xl w-full aspect-video object-cover shadow-md reveal reveal-delay-1 opacity-90" />
  </div>

</div>
```

This creates a photo stack in the About section — main portrait + workshop context photo.

---

## PART B — REAL CONTENT INTEGRATION

### B1. Create WistiaVideo Component

Create `src/components/WistiaVideo.astro`:
```astro
---
interface Props {
  videoId: string;
  title?: string;
}
const { videoId, title = '' } = Astro.props;
---

<div class="wistia_responsive_padding relative rounded-2xl overflow-hidden shadow-xl" style="padding:56.25% 0 0 0;">
  <div class="wistia_responsive_wrapper absolute inset-0">
    <iframe
      src={`https://fast.wistia.net/embed/iframe/${videoId}?videoFoam=true&autoPlay=false`}
      title={title}
      allow="autoplay; fullscreen"
      allowtransparency="true"
      frameborder="0"
      scrolling="no"
      class="wistia_embed w-full h-full"
      allowfullscreen
    ></iframe>
  </div>
</div>
<script src="https://fast.wistia.com/assets/external/E-v1.js" async is:inline></script>
```

---

### B2. Video 1 (mzolmte3qc) — In About Ramesh Section

After the bio paragraphs (before the CTA link), add:
```astro
<div class="mt-8 reveal reveal-delay-2">
  <p class="font-sans text-charcoal/40 text-xs uppercase tracking-[0.2em] mb-3">Watch Ramesh's Story</p>
  <WistiaVideo videoId="mzolmte3qc" title="Ramesh Roar — The Viking Yogi Story" />
</div>
```

---

### B3. Video 2 (j13djtcnel) — New Section Before FAQ

Add a new section BEFORE the FAQ section:
```astro
<section class="bg-charcoal py-24">
  <div class="max-w-4xl mx-auto px-6">

    <div class="text-center mb-12 reveal">
      <SectionEyebrow text="Hear It From Ramesh" class="text-sage" />
      <h2 class="font-display text-4xl md:text-5xl font-bold italic text-cream mt-4">
        "The body already knows how to heal."
      </h2>
      <p class="font-sans text-cream/60 mt-4 max-w-xl mx-auto leading-relaxed">
        Ramesh explains the core philosophy behind the Vayda Method — and why most healing programs miss the point.
      </p>
    </div>

    <div class="reveal reveal-delay-1">
      <WistiaVideo videoId="j13djtcnel" title="Ramesh explains the Vayda Method" />
    </div>

  </div>
</section>
```

Note: this section uses `bg-charcoal` — another use of the dark color for rhythm.

---

### B4. Real Testimonials — Replace ALL Placeholders

Replace the 3 TestimonialCard instances in the social proof section:

```astro
<TestimonialCard
  quote="Ramesh and his amazing coaching changed my life. At 77, I am feeling like I am 45. Indeed, people find it hard to believe what I have accomplished. I just put together a 20-year plan that may turn into the most productive time of my life."
  name="Max Paul Franklin"
  role="Asheville, NC"
/>

<TestimonialCard
  quote="For 19 years, I sought answers and relief for multiple neurological conditions. I saw dozens of doctors, acupuncturists, dietitians, surgeons, physical therapists, and many more. Then I found Ramesh and his fasting program. In 6 days, all my neurological pain was gone. I mean, gone."
  name="Jared Navarre"
  role="Nashville, TN"
/>

<TestimonialCard
  quote="I had tried everything — elimination diets, supplements, therapy. Nothing addressed the root. The Vayda Method was the first time someone looked at everything together. Six weeks later, I finally feel like myself again."
  name="Sarah M."
  role="Charlotte, NC"
/>
```

---

### B5. Real FAQ Content — Replace All 5 Placeholders

Update the FAQs array in index.astro with this real content (7 questions):

```js
const faqs = [
  {
    question: "Can you really reset your immune system through fasting?",
    answer: "According to studies conducted by Dr. Valter Longo, you will reset your immune system when doing certain types of fasts for 72 hours (3 days). The Vayda Method includes guidance on how to incorporate this safely and effectively into your healing protocol."
  },
  {
    question: "Why is meditation included in the Vayda Method?",
    answer: "Meditation offers a profound combination of physical, mental, and spiritual health benefits. Science has proven that meditation reduces stress, improves overall mental well-being, and has positive effects on cardiovascular health. It is not optional — it is foundational."
  },
  {
    question: "Why does the Vayda Method emphasize hydration so strongly?",
    answer: "Proper hydration is essential for overall health, supporting bodily functions, skin elasticity, joint lubrication, and cognitive function. Most people are chronically underhydrated in ways that affect every system in the body. You will learn about optimal water intake based on your body type, season, and exercise level."
  },
  {
    question: "What do you mean by a plant-based approach?",
    answer: "As Dr. Michael Pollan suggests: 'eat whole foods, mostly plants, not too much.' Plant-based simply means a diet fully or primarily consisting of plants, with no or only small amounts of animal products. The Vayda Method is not dogmatic — it is personalized to your biology."
  },
  {
    question: "Is this functional medicine?",
    answer: "Not exactly. The Vayda Method is a whole-body wellness framework developed over 20+ years of practice. It draws from functional medicine, Eastern wellness traditions, and modern nutritional science — but it is not a medical program and does not replace your doctor."
  },
  {
    question: "How long does it take to see results?",
    answer: "Most clients notice meaningful changes within 4 to 6 weeks. Some experience dramatic shifts within days. Results depend on your starting point, consistency, and which systems need the most attention."
  },
  {
    question: "Do I need to live near Asheville to work with Ramesh?",
    answer: "No. While Ramesh is based near Asheville, NC, his online programs are available globally. 1:1 coaching is conducted via video call."
  }
];
```

---

## PART C — SECTION ORDER (final homepage flow)

After all changes, the homepage should flow in this exact order:

1. Hero
2. Problem Agitation (bg-cream)
3. Transformation / Vayda Method intro (bg-forest, parallax ramesh-teaching.jpg)
4. Seven Systems / Pillars (bg-cream)
5. **Social Proof** — `meditation-group.jpg` + charcoal/85 overlay ← UPDATED
6. About Ramesh — photo stack (ramesh-founder + workshop.jpg) ← UPDATED
7. Pricing (bg-forest dark) — coaching card has photo ← UPDATED
8. **"Hear it from Ramesh"** — Video j13djtcnel, bg-charcoal ← NEW SECTION
9. FAQ (bg-cream)
10. Final CTA (parallax hero.jpg)

Video 1 (mzolmte3qc) is inside About Ramesh section (step 6).

---

## After All Changes

```bash
npm run build   # must pass clean — no TypeScript or import errors
git add .
git commit -m "feat: round 3 — charcoal sections, all photos used, Wistia videos, real testimonials + FAQs"
git push origin main
vercel --prod --scope simplicity-agency
```

Note the `--scope simplicity-agency` — project was transferred to the new team.

Report Vercel URL when done.

When completely finished: openclaw system event --text "Done: Vayda Round 3 — real content + charcoal + all photos deployed" --mode now
