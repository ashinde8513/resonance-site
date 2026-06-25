# CLAUDE.md

## Design Context
Before any UI work, read `PRODUCT.md` (strategy/voice) and `DESIGN.md` (visual tokens) in this repo. They are the impeccable design context.

- **Register:** brand (venture-studio landing; design IS the product). A distinct world from Drop's Prism.
- **Identity:** warm analog-gold accent `#E7B252` on deep ink `#08090C`; the standing-wave canvas is the one signature. Type: Bricolage Grotesque + Hanken Grotesk + Space Mono.
- **Principles:** restraint as confidence · signal over noise · the wave is the throughline · show the work, don't claim it · performance is taste.
- **Anti-references:** generic SaaS/template, corporate navy fintech, crypto/web3/VC hype, Linktree-default blandness.
- **Accessibility:** target WCAG 2.2 AA; render content visible by default (don't gate on scroll reveals); provide `prefers-reduced-motion` alternatives and visible `:focus-visible` states.

## Testing (run before pushing)
Playwright smoke test in `tests/`. Run `npm test` after content/UI changes — it loads the page (desktop + mobile Safari), checks the title and core copy, and fails on any JS console error. (Pattern doc: `~/TESTING.md`.)
