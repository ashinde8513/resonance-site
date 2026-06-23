# Design

> Brand landing for Resonance Ventures. A distinct world from Drop's Prism: warm gold on deep ink, the standing-wave as signature.

## Theme

Dark, warm, restrained. Near-black ink base with a single analog-amber gold accent and a vanilla-JS standing-wave canvas as the emotional centerpiece. Typography and whitespace carry the hierarchy; the page is quiet on purpose — restraint reads as confidence.

Color strategy: **Restrained** — tinted near-black neutrals plus one accent (gold) used sparingly. The full spectrum appears only inside the canvas signature.

## Color

| Token | Value | Role |
| --- | --- | --- |
| `--ink` | `#08090C` | base canvas |
| `--ink-raise` | `#0F1117` | cards / surfaces |
| `--ink-hi` | `#14161D` | hover surface |
| `--line` | `rgba(236,238,242,0.09)` | hairline |
| `--line-soft` | `rgba(236,238,242,0.055)` | faint divider |
| `--text` | `#ECEEF2` | primary text |
| `--muted` | `#8A91A0` | secondary text (verify ≥4.5:1) |
| `--muted-2` | `#5E6473` | tertiary — large/decorative only |
| `--gold` | `#E7B252` | the single UI accent (analog amber) |
| `--gold-hi` | `#F2C877` | accent hover / highlight |

Canvas spectrum gradient (decorative, signature only): `#F2A93C` (amber) → `#E1557F` (magenta) → `#7E5BE6` (violet) → `#36B6C8` (cyan).

## Typography

- **Display:** `"Bricolage Grotesque", "Hanken Grotesk", system-ui, sans-serif` (weights 500–800)
- **Body:** `"Hanken Grotesk", system-ui, -apple-system, sans-serif` (400/500/600)
- **Mono / UI labels:** `"Space Mono", ui-monospace, "SFMono-Regular", monospace` (400/700)
- Loaded via Google Fonts. Fluid `clamp()` throughout.

Scale: hero title `clamp(2.5rem, …, 5.6rem)`; section title `clamp(1.8rem, …, 3rem)`; body 17px base. Eyebrows use Space Mono with a gold dot.

## Layout

- Container max-width `--wrap: 1120px`; fluid padding `--pad: clamp(20px, 5vw, 56px)`.
- Single `index.html` + `styles.css` + small vanilla-JS canvas. No build step; GitHub Pages → `resonance-ventures.com`.

## Components

- `.site-head` — sticky, backdrop-blurred header with gold SVG wave logo
- `.resonance` — animated standing-wave canvas (the signature)
- Hero — title + primary (gold) / ghost (outline) CTA buttons
- `.pillars` — 3-column studio grid (Software, Music & Events, Operating)
- `.work-grid` — 2-column (1.35fr / 1fr) work showcase (Drop featured + Stage & Sound)
- `.eyebrow` — Space Mono label with gold dot
- `.btn` — primary (gold fill) / ghost (outline)
- `.reveal` — scroll-triggered fade-in
- `.site-foot` — brand, copyright, Drop link

## Motion

Only the canvas animates; the rest is intentionally static for performance. `.reveal` fades on scroll — **render content visible by default and enhance with the fade**, never gate visibility on the transition (it would ship blank on hidden tabs / headless renders). Add `prefers-reduced-motion: reduce` to still the canvas and disable reveals.

## Brand Assets

Inline-SVG wave wordmark and favicon (gold wave on dark `#08090C` rounded square, data-URI). No raster assets — identity is SVG + CSS + canvas. Single accent: gold `#E7B252`.

## Accessibility

WCAG 2.2 AA. Reserve `--muted-2` for large/decorative text. Add `:focus-visible` outlines (currently sparse). Decorative canvas/SVG carry `aria-hidden="true"` (correct).
