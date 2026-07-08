# BACKLOG — resonance-landing

Prioritized. Newest/highest priority first. Update when priorities or scope change (see AGENTS.md).

## P1 — AI-SEO follow-ups
- [ ] Verify GitHub Pages actually serves `robots.txt`, `sitemap.xml`, `llms.txt` at the domain root post-deploy (Pages serves repo root as-is, but confirm no Jekyll processing strips them — `.nojekyll` is already present).
- [ ] Submit `sitemap.xml` to Google Search Console once verified live.
- [ ] Add `sameAs` links to the Organization JSON-LD once real social/LinkedIn profiles exist for Resonance Ventures.
- [ ] Revisit JSON-LD when Drop ships (currently "releasing soon") — consider adding a `SoftwareApplication` or `subOrganization` entry linking to trydropapp.com once it's a live product with its own listing.

## P2 — Content gaps
- [ ] No FAQ section — add one if AI-search citation testing (see ai-seo skill) shows competitors/AI answers favor FAQ-schema pages for "venture studio Colorado" type queries.
- [ ] No dated/freshness signal on the page itself (JSON-LD has no `dateModified`) — low priority for a single static page, revisit if content starts changing regularly.
- [ ] Founder/author identity beyond the contact email — no bio, no LinkedIn — consider once there's a public-facing role to promote (E-E-A-T signal).
- [ ] og-image.svg exists alongside og-image.png — confirm which is canonical/still used; drop the unused one.

> Design ideas to pull from: see `prism-tokens/DESIGN_RESOURCES.md` (refero / Aceternity / Componentry — reimplement natively, Prism-token, reduced-motion).

## P3 — Process
- [ ] PROJECT_STATE.md "Check BACKLOG.md" pointer was broken (file didn't exist) — this file fixes it. Keep it current going forward.
