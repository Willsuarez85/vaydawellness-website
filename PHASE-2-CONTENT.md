# Phase 2 — Real Content Integration

Apply after PHASE-2-FIXES-R2 is deployed. This replaces all placeholder content with real content from the original Vayda site.

---

## 1. Wistia Video Embeds

### Install Wistia embed helper
No npm needed — use Wistia's standard async embed script.

Create `src/components/WistiaVideo.astro`:
```astro
---
interface Props {
  videoId: string;
  title?: string;
  rounded?: boolean;
}
const { videoId, title = '', rounded = true } = Astro.props;
---

<div class={`wistia_responsive_padding relative ${rounded ? 'rounded-2xl overflow-hidden' : ''} shadow-xl`} 
     style="padding:56.25% 0 0 0;">
  <div class="wistia_responsive_wrapper absolute inset-0">
    <iframe
      src={`https://fast.wistia.net/embed/iframe/${videoId}?videoFoam=true&autoPlay=false`}
      title={title}
      allow="autoplay; fullscreen"
      allowtransparency={true}
      frameborder="0"
      scrolling="no"
      class="wistia_embed w-full h-full"
      name="wistia_embed"
      allowfullscreen
    ></iframe>
  </div>
</div>
<script src="https://fast.wistia.com/assets/external/E-v1.js" async is:inline></script>
```

### Video 1 — About Ramesh section
**Wistia ID:** `mzolmte3qc`

In the About Ramesh section, after the bio paragraphs, add:
```astro
<div class="mt-8 reveal reveal-delay-2">
  <p class="font-sans text-charcoal/50 text-xs uppercase tracking-widest mb-3">Watch Ramesh's Story</p>
  <WistiaVideo videoId="mzolmte3qc" title="Ramesh Roar — The Viking Yogi Story" />
</div>
```

### Video 2 — Before FAQ section
**Wistia ID:** `j13djtcnel`

Add a new section BEFORE the FAQ section:
```astro
<!-- Wistia Video Section — before FAQ -->
<section class="bg-cream py-24">
  <div class="max-w-4xl mx-auto px-6">
    <div class="text-center mb-12 reveal">
      <p class="font-sans text-sage text-xs uppercase tracking-[0.25em] mb-4">HEAR IT FROM RAMESH</p>
      <h2 class="font-display text-4xl md:text-5xl font-bold italic text-forest">
        "The body already knows how to heal."
      </h2>
      <p class="font-sans text-charcoal/60 mt-4 max-w-xl mx-auto">
        Ramesh explains the core philosophy behind the Vayda Method — and why most healing programs miss the point.
      </p>
    </div>
    <div class="reveal reveal-delay-1">
      <WistiaVideo videoId="j13djtcnel" title="Ramesh explains the Vayda Method" />
    </div>
  </div>
</section>
```

---

## 2. Real Testimonials — Replace ALL Placeholders

Replace the 3 placeholder TestimonialCards with these REAL testimonials:

### Testimonial 1 — Max Paul Franklin
```astro
<TestimonialCard
  quote="Ramesh and his amazing coaching changed my life. At 77, I am feeling like I am 45. Indeed, people find it hard to believe what I have accomplished. I just put together a 20-year plan that may turn into the most productive time of my life."
  name="Max Paul Franklin"
  role="Asheville, NC"
/>
```

### Testimonial 2 — Jared Navarre
```astro
<TestimonialCard
  quote="For 19 years, I sought answers and relief for multiple neurological conditions. I saw dozens of doctors, acupuncturists, dietitians, surgeons, physical therapists, and many more. Then I found Ramesh and his fasting program. In 6 days, all my neurological pain was gone. I mean, gone."
  name="Jared Navarre"
  role="Nashville, TN"
/>
```

### Testimonial 3 — Keep as placeholder for now
```astro
<TestimonialCard
  quote="I had tried everything — elimination diets, supplements, therapy. Nothing addressed the root. The Vayda Method was the first time someone looked at everything together. Six weeks later, I finally feel like myself again."
  name="Sarah M."
  role="Charlotte, NC"
/>
```

---

## 3. Real FAQ Content — Replace All Placeholders

Replace the FAQ section content with these real questions (adapted from "Six Pillars" → "Vayda Method"):

```astro
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
    answer: "As Dr. Michael Pollan suggests: 'eat whole foods, mostly plants, not too much.' Plant-based simply means a diet that is fully or primarily consisting of plants, with no or only small amounts of animal products. The Vayda Method is not dogmatic — it is personalized to your biology."
  },
  {
    question: "Is this functional medicine?",
    answer: "Not exactly. The Vayda Method is a whole-body wellness framework developed over 20+ years of practice. It draws from functional medicine, Eastern wellness traditions, and modern nutritional science — but it is not a medical program and does not replace your doctor."
  },
  {
    question: "How long does it take to see results?",
    answer: "Most clients notice meaningful changes within 4 to 6 weeks. Some, like Jared Navarre, experience dramatic shifts within days. Results depend on your starting point, consistency, and which systems need the most attention."
  },
  {
    question: "Do I need to live near Asheville to work with Ramesh?",
    answer: "No. While Ramesh is based at Prama Institute near Asheville, NC, his online programs are available globally. 1:1 coaching is conducted via video call."
  }
];
```

---

## 4. Trust Bar Update (Social Proof section)

Replace the trust bar with real credentials:
```astro
<div class="flex flex-wrap justify-center gap-8 mt-12 text-charcoal/40 font-sans text-sm tracking-widest uppercase reveal">
  <span>20+ Years Teaching</span>
  <span class="text-beige">·</span>
  <span>500+ Students Transformed</span>
  <span class="text-beige">·</span>
  <span>Asheville, NC</span>
  <span class="text-beige">·</span>
  <span>Online & In-Person</span>
</div>
```

---

## After Changes

```bash
npm run build   # must pass clean
git add .
git commit -m "content: real testimonials, Wistia videos, real FAQs from original site"
git push origin main
vercel --prod
```

Report Vercel URL.

When completely finished: openclaw system event --text "Done: Vayda real content integrated — testimonials, videos, FAQs" --mode now
