# ROUND 9 — Links Audit + Programs Rebuild
**Date:** 2026-03-11
**Repo:** /Users/Jarvis/Projects/vaydawellness-website
**Deploy:** Vercel (auto-deploy on push to main)
**Live URL:** https://vaydahealth.com

---

## Context

Vayda Wellness is a health coaching website for Ramesh Bjonnes — The Viking Yogi.
Tech stack: Astro + Tailwind CSS + TypeScript. Do NOT change brand colors or typography.

Brand colors (Tailwind config):
- `forest` = #2D4A35 (dark green — primary)
- `cream` = #F8F5F0 (off-white)
- `sage` = #657F66 (medium green)
- `beige` = #D7D5C6
- `charcoal` = #2D3436

---

## TASK 1 — Fix All Broken Links (Global Audit)

The following `/funnel/*` links are 404s. Replace them throughout ALL pages:

| Broken URL | Replace with |
|------------|--------------|
| `/funnel/quiz` | `/quiz` |
| `/funnel/programs` | `/programs` |
| `/funnel/coaching` | `/coaching` |
| `#quiz` (anchor on homepage) | `/quiz` |

Files to check and fix:
- `src/pages/index.astro` — CTA button "Find Your Root Cause" uses `href="#quiz"` → change to `/quiz`
- `src/pages/programs.astro` — 3 buttons use `/funnel/*` links → fix all
- Any other file with `/funnel/` — run grep to find all instances

Command to find all broken links:
```bash
grep -rn "funnel\|#quiz" src/ --include="*.astro"
```

---

## TASK 2 — Rebuild Programs Page (`src/pages/programs.astro`)

The current programs page shows 3 products, one of which ("Vayda Method Online") doesn't exist.

**New product structure (4 products):**

| # | Product | URL | Price | CTA |
|---|---------|-----|-------|-----|
| 1 | Free Quiz — Find Your Root Cause | `/quiz` | Free | "Take the Free Quiz →" |
| 2 | 7-Day Reset | `/7-day-reset` | $47 | "Start My Reset — $47 →" |
| 3 | Booking — 60-Min Consultation | `/booking` | TBD | "Book a Session →" |
| 4 | 1:1 Health Coaching | `/coaching` | Apply | "Apply Now →" |

**Layout:** Keep the same 3-col card grid. For 4 products, switch to a 2x2 grid on desktop (`grid-cols-2`), single column on mobile. Keep the same card style (bg-beige, bg-forest highlighted, bg-charcoal for premium).

**Card assignments:**
- Quiz → bg-beige card (free / entry point)
- 7-Day Reset → bg-forest card (highlighted / most popular)
- Booking → bg-beige card (mid-tier)
- Coaching → bg-charcoal card (premium)

**Copy per card:**

**Card 1 — Free Quiz**
- Badge: `Start Here · Free`
- Title: `Discover Your Root Cause`
- Body: `Not sure where to start? Take 5 minutes to map which of your body's systems needs attention first — and get a personalized next step.`
- Features: Instant results · Personalized system breakdown · No email required
- CTA: `Take the Free Quiz →` → `/quiz`

**Card 2 — 7-Day Reset (highlighted)**
- Badge: `Most Popular · $47`
- Title: `The 7-Day Reset`
- Body: `A guided 7-day protocol to reset your Sleep, Digestion & Stress — the three systems driving chronic pain and fatigue. Instant digital access.`
- Features: Sleep optimization guide · Digestion reset protocol · Stress & nervous system work · 7-day money-back guarantee
- CTA: `Start My Reset — $47 →` → `/7-day-reset`

**Card 3 — Booking**
- Badge: `60 Minutes · 1:1`
- Title: `Book a Session with Ramesh`
- Body: `Dealing with a chronic health issue and want a second opinion? Book a private 60-minute session with Ramesh to get clarity on your root cause and a personalized path forward.`
- Features: Full intake review · Root cause mapping · Personalized protocol outline · Recording included
- CTA: `Book a Session →` → `/booking`

**Card 4 — Coaching (premium)**
- Badge: `Premium · Application Required`
- Title: `1:1 Health Coaching`
- Body: `Apply to work directly with Ramesh in a deep transformation program. Built for those ready to make lasting change and eventually help others do the same.`
- Features: Full root cause assessment · Custom 12-week protocol · Weekly 1:1 sessions · Lab work review · Ongoing support
- CTA: `Apply Now →` → `/coaching`

**Also fix** the final CTA section at the bottom of programs.astro — currently links to `/funnel/quiz`. Change to `/quiz`.

---

## TASK 3 — Create `/booking` Page (`src/pages/booking.astro`)

A clean conversion landing page for the 60-minute consultation with Ramesh.

**Layout:** Use `BaseLayout`. No SalesLayout needed (this has nav).

**Sections:**

### Hero
- Background: `bg-forest` (solid, no image needed)
- Eyebrow: `SectionEyebrow text="Private Session" class="text-cream"`
- H1: `Book a 60-Minute Session with Ramesh`
- Subtext: `Chronic pain. Persistent fatigue. Confusing symptoms your doctor can't explain. In 60 minutes, Ramesh will review your case, identify the pattern, and give you a clear path forward.`
- CTA button: `Book My Session →` (anchor to `#booking-form` below)

### Who This Is For (3-column icons)
- 🩺 `Chronic symptoms with no diagnosis` — You've done the tests. Everything "looks fine." But you know something is off.
- 🔁 `Tried everything without lasting results` — Elimination diets, supplements, specialists. Nothing addressing the root.
- 🧭 `Ready for a real plan` — You want someone to look at the whole picture and tell you exactly what to do.

### What You'll Get (simple list, bg-cream section)
- A full review of your symptoms and health history
- Root cause identification using the Vayda Method framework
- A personalized protocol outline you can start immediately
- Recording of the session sent to you within 24 hours
- A recommended next step (program, lifestyle change, or further testing)

### The Booking Form (id="booking-form")
- Section bg: `bg-beige`
- Heading: `Schedule Your Session`
- Body: `Select a time that works for you. Ramesh personally reviews each intake form before your session.`
- Placeholder for GHL Calendar embed (iframe):

```html
<!-- GHL Calendar Embed — Replace with actual embed code from GoHighLevel -->
<div class="bg-white rounded-2xl border border-beige p-8 text-center text-charcoal/40 min-h-[400px] flex items-center justify-center">
  <p class="font-sans text-sm">Calendar loading… (GHL embed pending)</p>
</div>
```

### Testimonial (1 quote)
Use one of the existing testimonials — Max Paul Franklin: *"Ramesh and his amazing coaching changed my life. At 77, I am feeling like I am 45."*

### FAQ (3 questions)
- Q: How long is the session? → A: 60 minutes via video call. You'll receive a calendar link and Zoom/Google Meet link after booking.
- Q: Do I need to prepare anything? → A: Fill out the intake form when you book. The more detail you provide, the more value you'll get from the session.
- Q: What happens after the session? → A: You'll receive a recording within 24 hours. If you want to continue working with Ramesh, he'll recommend the right program for your situation.

---

## TASK 4 — Create `/coaching` Page (`src/pages/coaching.astro`)

A conversion landing page for the high-ticket 1:1 Health Coaching program.

**Layout:** Use `SalesLayout` (no nav — full conversion focus, same as 7-day-reset).

**Angle:** Apply to work directly with Ramesh. Transform your health — and eventually help others do the same.

**Sections:**

### Hero (bg-forest)
- Eyebrow badge (inline span): `Application Only · Limited Spots`
- H1: `Work Directly With Ramesh. Transform Your Health From the Inside Out.`
- Subtext: `This isn't a course. It's a 1:1 partnership with Ramesh — built around your biology, your history, and your goals. For people who are done with band-aid solutions.`
- CTA button: `Apply Now →` (anchor to `#apply` below)
- Social proof stats: `500+ People Helped · 20+ Years Practice · Science-Based`

### Wistia Video Section (bg-cream)
- Heading: `Hear From Someone Who's Been Through It`
- Subheading: `Watch this 5-minute story.`
- Embed the Wistia video: `videoId="j13djtcnel"` using the existing `WistiaVideo` component
- Caption below: *"This is the kind of transformation Ramesh's work makes possible."*

### What's Included (bg-beige, 2-col grid)
Left column — The Protocol:
- Full root cause assessment (first 2 weeks)
- Lab work review and interpretation
- Custom 12-week healing protocol
- Meal, movement, and sleep optimization
- Fasting protocols tailored to your biology

Right column — The Support:
- Weekly 60-minute 1:1 video sessions
- Between-session messaging support
- Progress tracking and protocol adjustments
- Access to all Vayda Method digital resources
- Session recordings for all calls

### Who This Is For (3 items)
- 🎯 People with chronic, unresolved health issues who've tried everything
- 💪 Those ready to commit 12 weeks to a full-body transformation
- 🌱 People interested in eventually helping others through health coaching

### Application Form (id="apply", bg-forest)
- Heading (text-cream): `Apply to Work With Ramesh`
- Subtext (text-cream/70): `Ramesh reviews every application personally. If it's a good fit, you'll hear back within 48 hours to schedule a discovery call.`
- Placeholder for GHL Form embed:

```html
<!-- GHL Form Embed — Replace with actual embed code from GoHighLevel -->
<div class="bg-white/10 rounded-2xl border border-white/20 p-8 text-center text-cream/40 min-h-[300px] flex items-center justify-center">
  <p class="font-sans text-sm">Application form loading… (GHL form embed pending)</p>
</div>
```

### Testimonials (2 quotes, side by side)
- Jared Navarre: *"In 6 days, all my neurological pain was gone. I mean, gone."*
- Max Paul Franklin: *"At 77, I am feeling like I am 45."*

---

## IMPORTANT NOTES

1. Do NOT change any brand colors, fonts, or the SectionEyebrow component.
2. All new pages must use existing components (BaseLayout, SalesLayout, SectionEyebrow, WistiaVideo, TestimonialCard) — don't reinvent.
3. Keep Tailwind classes consistent with the rest of the site.
4. After all changes, run: `npm run build` to verify no build errors.
5. Commit each task separately with clear commit messages:
   - `fix: global link audit — replace /funnel/* and #quiz hrefs`
   - `feat: programs page rebuild — 4 products, 2x2 grid`
   - `feat: /booking page — 60-min consultation landing`
   - `feat: /coaching page — 1:1 health coaching application`
6. Push to main when done. Vercel will auto-deploy.

---

## Done When

- [ ] No `/funnel/` links anywhere in the codebase
- [ ] `/programs` shows 4 correct products with working links
- [ ] `/booking` is live with GHL calendar placeholder
- [ ] `/coaching` is live with Wistia video + GHL form placeholder
- [ ] `npm run build` passes with zero errors
