# Vayda Wellness — Project Context

## What this is
Astro + Tailwind CSS website for Ramesh Bjonnes / Vayda Wellness Center.
Live at: https://vaydahealth.com | Deployed on Vercel

## Stack
- Framework: Astro (static output)
- Styling: Tailwind CSS v4
- Adapter: @astrojs/vercel
- Integrations: @astrojs/sitemap, @astrojs/tailwind
- Node: v24+

## Brand System
```
Colors (Tailwind custom):
  forest:   #2D4A35  ← primary, hero backgrounds, CTAs
  cream:    #F8F5F0  ← main background
  sage:     #657F66  ← secondary text, icons
  beige:    #D7D5C6  ← borders, secondary backgrounds
  charcoal: #2D3436  ← body text, dark sections

Typography:
  serif:  Cormorant Garamond (headlines, quotes, hero text) — Bold Italic for display
  sans:   Inter (body, labels, UI)

Font size scale (tailwind config):
  display: 72px | h1: 56px | h2: 42px | h3: 28px
  body-lg: 18px | body: 17px | sm: 14px (tracking +0.03em)
```

## Design Rules (STRICT — do not break)
- NO emojis anywhere on pages (only SVG/Lucide icons)
- NO mention of "Prama Institute" anywhere on the site
- Testimonials must use ONLY: Max Paul Franklin, Jared Navarre, Sarah M.
- Never repeat the same photo on multiple pages
- Font contrast: always use Cormorant+Inter together — never one without the other
- SalesLayout pages (7-day-reset, 4-week-vitality-reset) have their own header/footer

## Pages Live (14 total)
- / (homepage with gallery, quiz CTA, testimonials)
- /quiz
- /about
- /the-vayda-method
- /programs (4 cards: Quiz, 7-Day Reset, 4-Week Reset, Coaching)
- /7-day-reset (SalesLayout — $47)
- /4-week-vitality-reset (SalesLayout — $497)
- /booking ($147 — 1:1 session with Ramesh)
- /coaching (private coaching program)
- /blog (Astro content collections)
- /faq
- /privacy
- /terms
- /members

## Key Files
- src/layouts/BaseLayout.astro — SEO meta tags, schema, nav
- src/layouts/SalesLayout.astro — for /7-day-reset and /4-week
- src/components/Nav.astro — accepts navLight prop for light pages
- src/components/Footer.astro — 3 columns, social links, programs list
- tailwind.config.mjs — all custom colors and typography

## Pending (blocked by Ramesh)
- Stripe link: href="https://buy.stripe.com/PLACEHOLDER" — needs real link
- GHL calendar embed on /booking — pending Ramesh's calendar ID
- GHL form embed on /coaching — pending form ID
- GA4 Measurement ID + Meta Pixel ID — pending from Ramesh

## GHL Account (Go High Level)
- Location ID: lNL7DIlpmwx4bsGNaxvu
- API Key (PIT): pit-32e6d329-713d-4b9f-b971-d1226e459fd1

## Deployment
- Auto-deploys from main branch via Vercel
- Project linked: .vercel/project.json
- Git remote: github.com/Willsuarez85/vaydawellness-website (confirm with `gh repo view`)

## DO NOT
- Touch the SalesLayout header/footer — it's intentionally different from BaseLayout
- Add emojis to any page
- Change the Cormorant Garamond font (client approval required)
- Deploy without testing build: `npm run build`
