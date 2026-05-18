# Napkin Runbook — UltraTech (UTS)

## Curation Rules
- Re-prioritize on every read.
- Keep recurring, high-value notes only.
- Max 10 items per category.
- Each item includes date + "Do instead".

## Execution & Validation (Highest Priority)
1. **[2026-05-17] React 18 StrictMode breaks GSAP direct DOM mutation**
   Do instead: Never use `el.innerHTML`, `el.textContent`, or `splitIntoChars` inside React components. Use IntersectionObserver + requestAnimationFrame for counters; use AnimatePresence for text cycling.

2. **[2026-05-17] `animate-float` bare prop on motion.div crashes**
   Do instead: Never pass custom bare props to `motion.div` — use `style={{ animation: '...' }}` or a wrapper div with the Tailwind class instead.

3. **[2026-05-17] tailwind.config.js is at ROOT, not src/**
   Do instead: Always read/edit `/home/nzabanita/WebstormProjects/UltraTech/tailwind.config.js` (root). Using the wrong path breaks all custom tokens.

4. **[2026-05-17] Zod v4 schema API differs from v3**
   Do instead: In data files, use `z.object({...}).parse(data)` — Zod v4 changed some method names. Confirm schema shape before adding new fields.

## Shell & Command Reliability
1. **[2026-05-17] Dev server already running before session**
   Do instead: Check with `lsof -i:5173` before starting dev server. If running, don't re-launch — just open localhost:5173.

## Design Guardrails (User Directives)
1. **[2026-05-17] NO solid dark backgrounds (#0F0F0F etc.) on most sections**
   Do instead: All "dark" effects must use real photos + dark gradient overlay (e.g. `bg-gradient-to-t from-black/60 via-black/20 to-transparent`). Never use solid dark color as section background except in explicitly approved places.

2. **[2026-05-17] User wants site to feel "alive" — photos integrated everywhere**
   Do instead: Every major section should include a real Unsplash photo. Worker/electrician photos for hero, team, CTA. Never use icon-only or purely abstract sections.

3. **[2026-05-17] CTAStrip must be photo-backed, not solid red**
   Do instead: Use a large full-bleed worker photo with dark overlay + white bold text. Red accent only for buttons/labels within the section.

4. **[2026-05-17] ServicesGrid: user rejected solid #0F0F0F grid**
   Do instead: Services section must use photo-with-overlay left + accordion list right (reference: CV. Alta Sumber Sejahtera site). Light/white section with photos integrated.

5. **[2026-05-17] Color tokens from tailwind.config.js**
   Do instead: Use `text-primary` (#8B1A1A), `text-ink` (#0F0F0F), `text-muted` (#6B7280). Never use `text-dark` — that token does not exist.

## Domain Behavior
1. **[2026-05-17] Service slugs must match exactly**
   Do instead: Slugs are: `formations`, `installation-domestique`, `robotique`, `etude-projets`, `maintenance`, `depannage`. Route is `/services/:slug`. Data in `src/data/services.js` + `src/data/serviceDetails.js`.

2. **[2026-05-17] CSS utility classes are in src/index.css**
   Do instead: Before using `.btn-primary`, `.label-tag`, `.display-lg` etc., verify they exist in `src/index.css`. Classes from old dark theme (`.btn-outline-primary`) were removed.
