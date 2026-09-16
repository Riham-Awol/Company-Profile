# Nexora — Company Profile

A single-page company profile for a fictional tech product studio. Each product card
links out to that product's own site.

## Stack

- **React 18** + **Vite** — no router, one page composed of section components
- **react-three-fiber / three.js** — the animated WebGL hero (morphing core, wireframe
  shell, orbiting satellites, drifting dust, pointer parallax)
- **framer-motion** — scroll reveals, staggered hero entrance, stat count-up,
  scroll-linked timeline, 3D cursor tilt on the product cards, form transitions

## Run it

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build into dist/
npm run preview  # serve the built output
```

## Structure

```
src/
  data.js                 all copy: stats, products, history, values
  hooks.js                reduced-motion + scroll-position hooks
  components/
    Nav.jsx               fixed header, transparent until scroll
    Hero.jsx              headline + lazy-loaded 3D layer
    Scene3D.jsx           the react-three-fiber scene
    Stats.jsx             counters that run once on scroll-in
    Products.jsx          tilting cards linking to each product site
    Story.jsx             company history timeline + values
    Contact.jsx           validated contact form
    Footer.jsx
```

## Before going live

- **Product URLs** — the four `*.example.com` links in `src/data.js` are placeholders.
- **Contact form** — validation and the success state are real, but nothing is sent.
  Replace the `setTimeout` in `src/components/Contact.jsx` with a POST to your endpoint.
- **Copy** — company name, history, stats and addresses in `src/data.js` are invented.

## Notes

- three.js is code-split, so the initial bundle is ~94 kB gzipped and the 3D scene
  (~214 kB gzipped) loads after first paint.
- Visitors with `prefers-reduced-motion: reduce` never download or mount the WebGL
  scene, and all transitions collapse to near-zero.
