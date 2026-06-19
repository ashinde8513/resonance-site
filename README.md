# resonance-ventures.com

Landing page for **Resonance Ventures LLC** — a Colorado venture studio that builds and
operates software and live experiences (including [Drop](https://trydropapp.com)).

Static HTML/CSS + a small vanilla-JS canvas (the resonance curve). No build step.

## Files
- `index.html` — the page
- `styles.css` — styles
- `CNAME` — custom domain for GitHub Pages (`resonance-ventures.com`)
- `.nojekyll` — tells Pages to serve files as-is

## Local preview
Open `index.html` in a browser, or run a static server:
```sh
python3 -m http.server 8000   # then visit http://localhost:8000
```

## Deploy (GitHub Pages)
Pushes to `main` publish automatically once Pages is enabled (Settings → Pages →
Branch: `main` / root). DNS for `resonance-ventures.com` must point at GitHub Pages.

## Contact
arya@resonance-ventures.com
