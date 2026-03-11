# ROUND 10 — Gallery + Footer + New Pages + Hero Backgrounds
**Date:** 2026-03-11
**Repo:** /Users/Jarvis/Projects/vaydawellness-website
**Deploy:** Vercel auto-deploy on push to main
**Live URL:** https://vaydahealth.com

Brand colors: forest=#2D4A35 · cream=#F8F5F0 · sage=#657F66 · beige=#D7D5C6 · charcoal=#2D3436

---

## TASK 1 — Horizontal Scroll Gallery Component

Create `src/components/HorizontalScrollGallery.astro`.

**Effect:** As the user scrolls DOWN the page, the gallery container scrolls horizontally LEFT — revealing photos one by one. The section is sticky while the scroll happens. This is the "scroll-linked horizontal gallery" pattern.

### Implementation

```astro
---
interface Props {
  title?: string;
  subtitle?: string;
}
const { title = "Life. Movement. Healing.", subtitle = "" } = Astro.props;

const photos = [
  { src: "/photos/ramesh/yoga-class-group.jpg", alt: "Yoga class group session" },
  { src: "/photos/ramesh/ramesh-meditating-studio.jpg", alt: "Ramesh meditating in studio" },
  { src: "/photos/ramesh/ramesh-coaching-session.jpg", alt: "Ramesh one-on-one coaching" },
  { src: "/photos/ramesh/yoga-class-stretching.jpg", alt: "Yoga class stretching" },
  { src: "/photos/ramesh/meditation-close.jpg", alt: "Deep meditation" },
  { src: "/photos/ramesh/studio-community.jpg", alt: "Studio community" },
  { src: "/photos/ramesh/yoga-tree-pose.jpg", alt: "Yoga tree pose" },
  { src: "/photos/ramesh/ramesh-portrait-outdoor.jpg", alt: "Ramesh portrait" },
  { src: "/photos/ramesh/group-gratitude-circle.jpg", alt: "Group gratitude circle" },
  { src: "/photos/ramesh/ramesh-meditating-plants.jpg", alt: "Ramesh meditating with plants" },
  { src: "/photos/ramesh/outdoor-group-session.jpg", alt: "Outdoor group session" },
  { src: "/photos/ramesh/ramesh-teaching-class.jpg", alt: "Ramesh teaching" },
];
---
```

**HTML structure:**

```html
<!-- Outer wrapper: tall enough to drive the horizontal scroll -->
<section
  id="gallery-section"
  class="relative bg-charcoal"
  style="height: 400vh"
>
  <!-- Sticky container — stays in viewport while user scrolls -->
  <div class="sticky top-0 h-screen flex flex-col justify-center overflow-hidden">

    <!-- Optional heading -->
    <div class="text-center mb-8 px-6">
      <p class="font-sans text-xs tracking-widest uppercase text-cream/40 mb-2">The Vayda Community</p>
      <h2 class="font-serif font-bold italic text-3xl md:text-4xl text-cream">{title}</h2>
    </div>

    <!-- Horizontal track -->
    <div
      id="gallery-track"
      class="flex gap-4 px-8 will-change-transform"
      style="width: max-content"
    >
      {photos.map((photo) => (
        <div class="flex-shrink-0 w-72 md:w-96 h-64 md:h-80 rounded-xl overflow-hidden">
          <img
            src={photo.src}
            alt={photo.alt}
            class="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
      ))}
    </div>

    <!-- Scroll hint (fades out after scroll starts) -->
    <p id="gallery-hint" class="text-center font-sans text-xs text-cream/30 mt-6 tracking-widest uppercase transition-opacity duration-500">
      Scroll to explore →
    </p>
  </div>
</section>

<script>
  const section = document.getElementById('gallery-section')!;
  const track = document.getElementById('gallery-track')!;
  const hint = document.getElementById('gallery-hint')!;

  function updateGallery() {
    const rect = section.getBoundingClientRect();
    const sectionHeight = section.offsetHeight;
    const viewportH = window.innerHeight;

    // progress: 0 (section top enters viewport) → 1 (section bottom leaves viewport)
    const scrolled = -rect.top;
    const scrollable = sectionHeight - viewportH;
    const progress = Math.max(0, Math.min(1, scrolled / scrollable));

    // How far the track needs to move
    const trackWidth = track.scrollWidth;
    const visibleWidth = window.innerWidth;
    const maxTranslate = -(trackWidth - visibleWidth + 64); // 64px padding

    const translateX = progress * maxTranslate;
    track.style.transform = `translateX(${translateX}px)`;

    // Hide hint once scrolling starts
    if (progress > 0.02) {
      hint.style.opacity = '0';
    } else {
      hint.style.opacity = '1';
    }
  }

  window.addEventListener('scroll', updateGallery, { passive: true });
  window.addEventListener('resize', updateGallery, { passive: true });
  updateGallery();
</script>
```

### Add to Homepage

In `src/pages/index.astro`:
1. Import the component: `import HorizontalScrollGallery from '../components/HorizontalScrollGallery.astro';`
2. Add it **between the Testimonials section and the "Meet Your Guide" section** — look for the section with `SectionEyebrow text="What People Are Saying"` and insert after it.

---

## TASK 2 — Footer Update (`src/components/Footer.astro`)

Rebuild the footer with full links. Keep the same bg-forest style.

**New footer structure:**

### Top row — 3 columns (on desktop), stacked on mobile:

**Column 1 — Brand**
- Logo (existing)
- Tagline: *"True healing begins when the body is treated as a whole."*
- Social icons with real links:
  - Instagram: `https://www.instagram.com/vaydahealth/`
  - Facebook: `https://www.facebook.com/profile.php?id=61583672525637`
  - YouTube: `#` (placeholder)

**Column 2 — Programs**
```
Programs
├── Free Quiz → /quiz
├── 7-Day Reset → /7-day-reset
├── Book a Session → /booking
└── 1:1 Coaching → /coaching
```

**Column 3 — Company**
```
Company
├── About → /about
├── The Vayda Method → /the-vayda-method
├── Blog → /blog
├── Contact → /contact
├── Members → # (placeholder — add comment: <!-- TODO: replace # with GHL members portal URL -->)
└── FAQ → /faq
```

### Bottom row — copyright + legal links
```
© 2026 Vayda Wellness. All rights reserved.   |   Privacy Policy   |   Terms & Conditions
```
- Privacy Policy → `/privacy`
- Terms & Conditions → `/terms`

**Styling:** All nav text `text-white/60 hover:text-white`, column headers `font-sans text-xs tracking-widest uppercase text-white/40 mb-4`, standard font-sans text-sm.

---

## TASK 3 — New Page: `/faq` (`src/pages/faq.astro`)

Use BaseLayout.

**Hero:** bg-forest solid, eyebrow "Frequently Asked Questions", H1 "Everything you need to know.", short subtext.

**FAQ sections** (grouped with section headers, use the existing FAQItem component):

**About Ramesh & The Vayda Method**
- Who is Ramesh Bjonnes? → He is a globally recognized wellness educator with 20+ years of experience at the intersection of ancient wisdom and modern health science. Co-founder of the Prama Institute, he has helped 500+ people resolve chronic symptoms through his whole-body approach.
- What is the Vayda Method? → The Vayda Method is a 7-system framework for whole-body healing. Instead of treating symptoms in isolation, it addresses Sleep, Digestion, Stress, Movement, Nutrition, Nervous System, and Immunity as an interconnected system.
- Is this functional medicine? → The Vayda Method draws from functional medicine, Ayurveda, yoga science, and modern immunology. It is not a replacement for medical care — it is a complementary approach to finding and addressing root causes.

**Programs & Products**
- Where do I start? → Start with the free quiz at /quiz. It maps your symptoms to the Vayda Method systems in 5 minutes and gives you a personalized next step.
- What is the 7-Day Reset? → The 7-Day Reset is a video-based program you can take from home. It includes a guided 7-day protocol to reset your Sleep, Digestion, and Stress — the three systems most commonly driving chronic pain and fatigue. Instant digital access after purchase.
- What is a Booking Session? → A 60-minute private video call with Ramesh. He reviews your health history, identifies your root cause pattern, and gives you a personalized protocol outline. Think of it as your "Discover Your Root Cause" consultation.
- What is the 1:1 Coaching program? → This is Ramesh's flagship program — a 12-week 1:1 partnership where he builds and guides your full healing protocol. It requires an application because spots are limited.
- Do you offer refunds? → The 7-Day Reset comes with a 7-day money-back guarantee. No questions asked.

**Logistics**
- Where are you based? → Ramesh is based near Asheville, NC. All programs except in-person retreats are fully remote and accessible globally.
- How long before I see results? → Most clients notice meaningful changes within 4–6 weeks. Some experience significant shifts within days. Results depend on starting point, consistency, and which systems need the most attention.
- Can I do this alongside my existing medical treatment? → Yes. The Vayda Method is complementary to, not a replacement for, medical care. Always inform your doctor of any new wellness protocols.

**Final CTA** — forest green section:
- Heading: "Still have questions?"
- Body: "Reach out directly — Ramesh personally reads every message."
- Button: "Contact Us →" → /contact

---

## TASK 4 — New Page: `/privacy` (`src/pages/privacy.astro`)

Use BaseLayout. Standard clean layout, bg-cream, max-w-3xl centered.

**Hero:** Simple — H1 "Privacy Policy", subtext "Last updated: March 2026"

**Content sections:**
1. **Information We Collect** — name, email, health assessment responses via quiz, payment info via Stripe
2. **How We Use Your Information** — to deliver programs, send relevant content, improve our services. We do not sell your data.
3. **Third-Party Services** — Stripe (payments), GoHighLevel (CRM & email), Wistia (video), Vercel (hosting). Each has their own privacy policy.
4. **Cookies** — We use minimal cookies for session management and analytics (when GA4 is active).
5. **Your Rights** — You can request access, correction, or deletion of your data at any time by emailing us.
6. **Contact** — vaydahealth.com contact form or direct email (leave placeholder: [email@vaydahealth.com])
7. **Changes** — We may update this policy. Check this page for the latest version.

---

## TASK 5 — New Page: `/terms` (`src/pages/terms.astro`)

Use BaseLayout. Same clean layout as /privacy.

**Hero:** H1 "Terms & Conditions", subtext "Last updated: March 2026"

**Content sections:**
1. **Acceptance of Terms** — By using vaydahealth.com, you agree to these terms.
2. **Programs & Services** — Vayda Wellness offers digital programs and coaching services. All sales are final except where a money-back guarantee is explicitly stated.
3. **7-Day Money-Back Guarantee** — Applies to the 7-Day Reset only. Request within 7 days of purchase.
4. **Health Disclaimer** — The Vayda Method is a wellness and educational program, not medical advice. It does not diagnose, treat, cure, or prevent any disease. Always consult a qualified healthcare provider for medical concerns.
5. **Intellectual Property** — All content on vaydahealth.com is owned by Vayda Wellness. Do not reproduce without permission.
6. **Limitation of Liability** — Vayda Wellness is not liable for any health outcomes resulting from use of our programs. You participate at your own risk.
7. **Governing Law** — These terms are governed by the laws of North Carolina, USA.
8. **Contact** — Questions? Contact us via the contact form at /contact.

---

## TASK 6 — New Page: `/members` (`src/pages/members.astro`)

Simple redirect/link page. Use BaseLayout.

**Content:** Clean centered page, bg-cream.
- Logo centered
- H1: "Member Portal"
- Body: "Access your programs, resources, and community."
- Big button: "Go to Member Portal →" → `#` (placeholder)
- Add HTML comment: `<!-- TODO: Replace # with GHL members portal URL -->`
- Small text below button: "Having trouble logging in? Contact us at /contact"

---

## TASK 7 — Hero Backgrounds for `/booking` and `/coaching`

Both landing pages currently have solid `bg-forest` heroes. Add a background photo with a very dark overlay so it's barely visible but adds depth.

### `/booking` hero
Current: `<section class="relative min-h-[70vh] ... bg-forest">`
Replace with:
```html
<section
  class="relative min-h-[70vh] flex items-center bg-cover bg-center"
  style="background-image: url('/photos/ramesh/ramesh-coaching-session.jpg')"
>
  <div class="absolute inset-0 bg-forest/92"></div>
  <!-- rest of content unchanged, just add relative z-10 to inner div if not already there -->
```

### `/coaching` hero  
Current: solid `bg-forest` hero in SalesLayout
Replace with:
```html
<section
  class="bg-forest text-cream relative bg-cover bg-center"
  style="background-image: url('/photos/ramesh/outdoor-group-session.jpg')"
>
  <div class="absolute inset-0 bg-forest/90"></div>
  <div class="relative z-10 max-w-container mx-auto px-6 py-20 md:py-28 text-center">
    <!-- all existing content unchanged -->
```

---

## TASK 8 — Copy Fix: Clarify Products on About + Programs Pages

### In `src/pages/about.astro`
Find any section that references the quiz or programs and make sure the quiz CTA says clearly it leads to a discovery call or the 7-Day Reset program.

If there's a CTA section at the bottom of About (look for it), update the body copy to:
> "Not sure where to start? Take the free 5-minute quiz to discover which of your body's systems needs attention first. Or book a private 60-minute session with Ramesh — your Discover Your Root Cause consultation."

Add two buttons side by side:
- `Take the Free Quiz →` → /quiz
- `Book a Session →` → /booking

### In `src/pages/7-day-reset.astro`
Find the product description (likely near the hero or in the "What's Included" section) and add this clarifying line if not already present:
> "A video-based program — watch at your own pace, from home."
Add it as a small badge or subtitle just below the main headline, styled as: `font-sans text-sm text-cream/60 tracking-wide`

### In `src/pages/booking.astro`
Make sure the hero subtext or the "Who This Is For" section refers to the session as:
> "Your Discover Your Root Cause consultation — a private 60-minute video call with Ramesh."

---

## IMPORTANT NOTES

1. Do NOT change brand colors, fonts, or existing working components.
2. Run `npm run build` before pushing — must pass with zero errors.
3. Commit each task with a clear message:
   - `feat: horizontal scroll gallery component + homepage integration`
   - `feat: footer rebuild — social links, programs, company, legal`
   - `feat: /faq page`
   - `feat: /privacy and /terms pages`
   - `feat: /members page`
   - `feat: booking + coaching hero backgrounds`
   - `fix: copy clarifications — 7-day reset, booking, about CTAs`
4. Push to main when all done.

---

## Done When
- [ ] HorizontalScrollGallery works on homepage — smooth horizontal scroll on vertical scroll
- [ ] Footer has 3 columns, all links correct, social links live, Members=#, YouTube=#
- [ ] /faq live with all sections
- [ ] /privacy live
- [ ] /terms live
- [ ] /members live (button → #)
- [ ] /booking and /coaching heroes have photo backgrounds (very dark overlay)
- [ ] "7-Day Reset is a video course from home" is clear on /7-day-reset
- [ ] About page has dual CTA (quiz + booking)
- [ ] `npm run build` passes with zero errors
