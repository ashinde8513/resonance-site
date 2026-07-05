# PROJECT STATE — resonance-landing (read me first)

Last updated: 2026-07-04
Full history (if archived): vault → AI Agents/Codebase Docs/resonance-landing/PROJECT_HISTORY.md

## SESSION LOCK
**Status:** UNLOCKED
How to use: advisory + durable record only. Concurrent sessions auto-isolate in their own git worktree (session/<id>) via dev-session.zsh — there is NO global LOCKED state to set. Record Owner / Working on at session start.
### Active session (if any)
- Owner: — · Started: — · Working on: fresh — no sessions yet

## Current status
### What works
- resonance-ventures.com live on GitHub Pages (repo resonance-site); Cloudflare DNS mirrors Drop setup.
### In progress — Active Claims
Live cross-session claims (who is working on what right now) are in the vault: `AI Agents/Operations/SESSION_CLAIMS.md` — run `python3 ~/Developer/agent-stack/scripts/session_claim.py list`. List durable in-progress items here.
### Blocked / waiting on
- 
### Exact next step
- BACKLOG.md P1: verify GitHub Pages actually serves `robots.txt`, `sitemap.xml`, `llms.txt` at the domain root post-deploy (no Jekyll stripping), then submit `sitemap.xml` to Google Search Console.

## Recent sessions (last 5 — older entries in PROJECT_HISTORY.md)
### 2026-07-04 — Claude — CLAUDE.md skill-ref cleanup
- Changed: pruned dead skill refs (`refactoring-ui`, `beautiful-prose`, `gsap-scrolltrigger`) from CLAUDE.md Default skills, swapped in `motion-framer` for canvas motion, added staleness guard line (36a183f). Doc-only, no app/content change.
- Tested: N/A (doc-only)
- Remaining: BACKLOG.md P1 verification items still open (nothing shipped against them since 07-01).
- Next: same as before — verify AI-SEO files serve live, then Search Console submission.

### 2026-07-01 — Claude — Real PNG og-image, AGENTS.md closeout rule, AI-SEO rollout
- Changed: Landing: real PNG og-image so social cards render (#3); added Command Center closeout rule to AGENTS.md (dc5da66); AI-SEO files + BACKLOG.md (#4) — llms.txt, robots.txt, sitemap.xml, Organization JSON-LD in index.html.
- Tested: N/A (doc/config-only closeout pass)
- Remaining: BACKLOG.md P1 verification items (sitemap live-check, Search Console submission), P2 content gaps, P3 process cleanup.
- Next: Verify AI-SEO files serve correctly post-deploy, then work down BACKLOG.md P1.

### 2026-06-25 — Claude — Instantiate handoff-protocol files (W10 rollout)
- Changed: Added PROJECT_STATE.md and AGENTS.md
- Tested: N/A
- Remaining: Fill in session history as work resumes
- Next: Resume resonance-ventures.com work per backlog

## Recent Sessions
<!-- SESSIONS:newest-first -->
