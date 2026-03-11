# ROUND 12 — Nav Bug + Gallery Order + Privacy/Terms Copy
**Date:** 2026-03-11
**Repo:** /Users/Jarvis/Projects/vaydawellness-website

---

## TASK 1 — Fix Navbar on Light-Background Pages (blog bug)

**The problem:** On blog posts and other pages with light/white backgrounds at the top, the navbar defaults to transparent + white text. When the user scrolls down, the nav correctly shows `bg-cream/charcoal`. But when they scroll back UP to top, the nav goes transparent again → white text on white background = invisible.

**The fix:** Add a `navLight` prop to BaseLayout and Nav. When true, the nav starts (and returns to top) in the "scrolled" state (dark text on cream bg) instead of transparent.

### Step 1: Update `src/components/Nav.astro`

Add a prop:
```astro
---
interface Props {
  navLight?: boolean;
}
const { navLight = false } = Astro.props;
---
```

On the `<nav>` element, if `navLight` is true, add the scrolled classes by default:
```astro
<nav
  id="nav"
  class={`fixed top-0 w-full z-50 transition-all duration-300 ${navLight ? 'bg-cream/95 backdrop-blur-sm shadow-sm' : ''}`}
>
```

And the logos: if `navLight`, start with white logo hidden and dark logo visible:
```astro
<img id="logo-white" ... class={`h-10 w-auto transition-opacity duration-300 ${navLight ? 'opacity-0' : ''}`} />
<img id="logo-dark"  ... class={`h-10 w-auto absolute transition-opacity duration-300 ${navLight ? '' : 'opacity-0'}`} />
```

Nav links: if `navLight`, start with `text-charcoal` instead of `text-white`:
```astro
<ul id="nav-links" class={`hidden md:flex items-center gap-8 font-sans text-sm font-medium tracking-wider ${navLight ? 'text-charcoal' : 'text-white'}`}>
```

Hamburger: if `navLight`, start with charcoal icon.

In the `<script>`, pass the navLight value as a data attribute so JS can read it:
Add to `<nav>`: `data-nav-light={navLight ? 'true' : 'false'}`

Update the scroll handler script:
```javascript
const isNavLight = nav!.dataset.navLight === 'true';

window.addEventListener('scroll', () => {
  const scrolled = window.scrollY > 60;
  // On navLight pages: keep scrolled state when back at top
  const shouldBeScrolled = scrolled || isNavLight;

  if (shouldBeScrolled) {
    nav!.classList.add('bg-cream/95', 'backdrop-blur-sm', 'shadow-sm');
    logoWhite!.classList.add('opacity-0');
    logoDark!.classList.remove('opacity-0');
    navLinks!.querySelectorAll('a').forEach(a => {
      a.classList.remove('text-white');
      a.classList.add('text-charcoal');
    });
    hamburger!.querySelector('svg')!.classList.replace('text-white', 'text-charcoal');
  } else {
    nav!.classList.remove('bg-cream/95', 'backdrop-blur-sm', 'shadow-sm');
    logoWhite!.classList.remove('opacity-0');
    logoDark!.classList.add('opacity-0');
    navLinks!.querySelectorAll('a').forEach(a => {
      a.classList.add('text-white');
      a.classList.remove('text-charcoal');
    });
    hamburger!.querySelector('svg')!.classList.replace('text-charcoal', 'text-white');
  }
}, { passive: true });
```

### Step 2: Update `src/layouts/BaseLayout.astro`

Add `navLight` prop and pass it to Nav:
```astro
---
interface Props {
  title: string;
  description?: string;
  ogImage?: string;
  navLight?: boolean;
}
const { title, description = '...', ogImage = '...', navLight = false } = Astro.props;
---
<!-- Pass navLight to Nav -->
<Nav navLight={navLight} />
```

### Step 3: Add `navLight={true}` to all pages with light backgrounds at top

These pages need `navLight={true}` in their `<BaseLayout>`:
- `src/pages/blog/index.astro` → `<BaseLayout ... navLight={true}>`
- `src/pages/blog/[slug].astro` → `<BaseLayout ... navLight={true}>`
- `src/pages/privacy.astro` → `<BaseLayout ... navLight={true}>`
- `src/pages/terms.astro` → `<BaseLayout ... navLight={true}>`
- `src/pages/faq.astro` → check: if hero is bg-forest, navLight=false is fine. If bg-cream, add navLight={true}
- `src/pages/contact.astro` → check the first section background. If light, add navLight={true}
- `src/pages/members.astro` → add `navLight={true}`

Pages that DON'T need navLight (they have dark hero at top):
- index.astro, about.astro, the-vayda-method.astro, programs.astro, quiz.astro, booking.astro, coaching.astro

---

## TASK 2 — Swap Gallery and Testimonials on Homepage

In `src/pages/index.astro`, the current order is:
1. ... (other sections)
2. Testimonials section (`SectionEyebrow text="What People Are Saying"`)
3. `<HorizontalScrollGallery ... />`
4. "Meet Your Guide" section

**New order:**
1. ... (other sections)
2. `<HorizontalScrollGallery ... />` ← move ABOVE testimonials
3. Testimonials section
4. "Meet Your Guide" section

Just swap the two blocks in the file. No other changes.

---

## TASK 3 — Rewrite Privacy Policy with proper brand copy

Replace the content of `src/pages/privacy.astro` with this improved version. Keep the same BaseLayout, navLight={true}, and page structure — just replace the content sections with the copy below.

**Privacy Policy — Vayda Wellness**
`Last updated: March 2026`

---

**Introduction**

At Vayda Wellness, your privacy matters. This policy explains what information we collect, how we use it, and what rights you have. We keep it simple — because you deserve to understand exactly what's happening with your data.

---

**What We Collect**

*Information you give us:*
- Your name and email when you take the quiz or sign up for a program
- Your health assessment responses from the quiz (used only to personalize your results and recommendations)
- Payment information when you purchase a program — processed securely by Stripe. We never store your card details.
- Messages you send via the contact form

*Information collected automatically:*
- Basic analytics (pages visited, time on site) — when Google Analytics is active
- No invasive tracking. No selling your data. Ever.

---

**How We Use Your Information**

We use your information to:
- Deliver the program or service you purchased
- Send you relevant content, updates, and occasional offers from Vayda Wellness (you can unsubscribe anytime)
- Improve how the website and programs work
- Respond to your questions

We do not sell, rent, or share your personal information with third parties for their marketing purposes.

---

**Third-Party Services We Use**

| Service | Purpose | Their Privacy Policy |
|---------|---------|---------------------|
| Stripe | Payment processing | stripe.com/privacy |
| GoHighLevel | CRM & email delivery | gohighlevel.com/privacy |
| Wistia | Video hosting | wistia.com/privacy |
| Vercel | Website hosting | vercel.com/legal/privacy |
| Google Analytics | Anonymous usage analytics | policies.google.com/privacy |

Each of these services has its own privacy policy governing how they handle data.

---

**Cookies**

We use minimal cookies — primarily for session management and analytics. You can disable cookies in your browser settings, though some features may not work as intended.

---

**Your Rights**

You have the right to:
- **Access** the personal information we hold about you
- **Correct** any inaccurate information
- **Delete** your data — just ask and we'll remove it
- **Unsubscribe** from marketing emails at any time (every email has an unsubscribe link)

To exercise any of these rights, contact us through the form at [vaydahealth.com/contact](/contact).

---

**Children's Privacy**

Our programs are intended for adults. We do not knowingly collect information from children under 13.

---

**Changes to This Policy**

We may update this policy occasionally. When we do, we'll update the date at the top of this page. Continued use of the website after changes means you accept the updated policy.

---

**Questions?**

If you have any questions about this privacy policy, reach out at [vaydahealth.com/contact](/contact). We read every message.

---

**TASK 4 — Rewrite Terms & Conditions with proper brand copy**

Replace the content of `src/pages/terms.astro` with this improved version. Keep the BaseLayout structure, add navLight={true}.

**Terms & Conditions — Vayda Wellness**
`Last updated: March 2026`

---

**Welcome**

By using vaydahealth.com or purchasing any Vayda Wellness program, you agree to these terms. Please read them — they're written in plain language because we believe in being straightforward.

---

**Who We Are**

Vayda Wellness is a health and wellness education company. Our programs are created and led by Ramesh Bjonnes, a wellness educator with 20+ years of experience. We are based in North Carolina, USA.

---

**Our Programs**

*The 7-Day Reset* is a digital video program delivered via instant online access. It is a wellness education program, not medical treatment.

*Book a Consultation* is a private 60-minute video call with Ramesh. After booking, you'll receive a calendar confirmation and video call link.

*1:1 Health Coaching* is an application-based program. Acceptance is not guaranteed. If accepted, program terms will be provided separately before payment.

*The Quiz* is free and provided as an educational tool only.

---

**Health Disclaimer — Please Read**

The Vayda Method and all Vayda Wellness programs are **wellness and educational in nature**. They are not medical advice, diagnosis, or treatment. Nothing on this website or in our programs should replace the guidance of a qualified healthcare provider.

If you have a serious medical condition, please consult your doctor before starting any new wellness protocol. Ramesh Bjonnes is a wellness educator — not a licensed physician.

Results vary. Individual outcomes depend on many factors including consistency, starting health status, and individual biology.

---

**Refund Policy**

*7-Day Reset:* We offer a 7-day money-back guarantee. If you're not satisfied for any reason, contact us within 7 days of purchase for a full refund. No questions asked.

*Consultations:* Cancellations made more than 24 hours before the session may be rescheduled. Cancellations within 24 hours are non-refundable.

*1:1 Coaching:* Refund terms are outlined in the individual coaching agreement.

---

**Intellectual Property**

All content on vaydahealth.com — including text, images, videos, program materials, and the Vayda Method framework — is owned by Vayda Wellness. You may not reproduce, distribute, or use our content for commercial purposes without written permission.

---

**Limitation of Liability**

To the fullest extent permitted by law, Vayda Wellness is not liable for any health outcomes, injuries, or losses arising from the use of our programs or website. You participate voluntarily and at your own discretion.

---

**Governing Law**

These terms are governed by the laws of the State of North Carolina, USA.

---

**Changes**

We may update these terms occasionally. The date at the top of this page reflects the most recent update. Continued use of our services after changes constitutes acceptance.

---

**Questions?**

Reach out at [vaydahealth.com/contact](/contact). We're real people and we'll get back to you.

---

## IMPLEMENTATION NOTES

For Tasks 3 and 4 (Privacy & Terms), render the content cleanly using standard Astro. Structure:
- Hero section: `bg-forest`, eyebrow + H1 + subtext (last updated date)
- Content: `bg-cream`, `max-w-3xl mx-auto px-6 py-16`, sections separated by `<hr class="border-beige my-8" />`
- Section headings: `font-serif font-bold text-2xl text-charcoal mb-4`
- Body text: `font-sans text-charcoal/80 leading-relaxed`
- Table (for Privacy): standard HTML table with Tailwind classes, `border-collapse`, borders in beige

---

## VERIFICATION
- [ ] Blog post navbar: scroll down looks normal, scroll UP back to top = navbar still has bg and charcoal text
- [ ] Homepage: gallery appears ABOVE "What People Are Saying"
- [ ] `/privacy` — full proper copy, renders cleanly, navLight=true
- [ ] `/terms` — full proper copy, renders cleanly, navLight=true
- [ ] `npm run build` passes with zero errors
- [ ] Push to main

Commits:
- `fix: navbar — light-bg pages always show readable nav (blog, privacy, terms, etc.)`
- `fix: homepage — move gallery above testimonials`
- `feat: privacy policy — complete brand-appropriate copy`
- `feat: terms & conditions — complete brand-appropriate copy`
