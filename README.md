# X Solvd — Company Profile

A multi-page company profile for X Solvd. Live products link out to their own sites;
sample projects open the contact form.

| Route       | Page                                                                    |
| ----------- | ----------------------------------------------------------------------- |
| `/`         | Hero with the 3D scene, stats, products and projects, process, contact form |
| `/products` | Products and sample projects, filterable by type                        |
| `/about`    | Who we are, process and principles (`/story` redirects here)            |
| `*`         | 404                                                                     |

## Stack

- **React 18** + **Vite** + **react-router-dom** — four routes, shared nav and footer
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
  App.jsx                 routes + scroll/hash handling
  data.js                 all copy: products, stats, process, values
  hooks.js                reduced-motion + scroll-position hooks
  pages/
    Home.jsx              hero, stats, products, process preview, contact
    ProductsPage.jsx      filterable index of products and sample projects
    AboutPage.jsx         who we are, process, principles
    NotFound.jsx
  components/
    Nav.jsx               fixed header with active route + mobile menu
    Hero.jsx              headline + lazy-loaded 3D layer
    Scene3D.jsx           the react-three-fiber scene
    Stats.jsx             counters that run once on scroll-in
    ProductCard.jsx       tilting card, compact or expanded
    PageHeader.jsx        shared hero band for interior pages
    Contact.jsx           validated contact form
    Footer.jsx
```

## Before going live

- **Product URLs** — the Mentee Mentor and Famour `url` values in `src/data.js` are
  placeholders; set them to the live sites.
- **Email** — `COMPANY.email` in `src/data.js` is a placeholder.
- **Contact form** — validation and the success state are real, but nothing is sent.
  Replace the `setTimeout` in `src/components/Contact.jsx` with a POST to your endpoint.

## Deploying

Client-side routing needs the host to serve `index.html` for unknown paths, so a
direct hit on `/products` doesn't 404:

- **GitHub Pages** — handled: `npm run build` also writes `dist/404.html`.
- **Netlify / Vercel** — handled: `public/_redirects` ships with the build.
- **Your own nginx/Apache** — add the usual SPA fallback rewrite.

## Notes

- three.js is code-split, so the initial bundle is ~94 kB gzipped and the 3D scene
  (~214 kB gzipped) loads after first paint.
- Visitors with `prefers-reduced-motion: reduce` never download or mount the WebGL
  scene, and all transitions collapse to near-zero.
