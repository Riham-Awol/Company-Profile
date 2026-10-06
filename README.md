# X Solvd — Company Profile

A multi-page company profile for X Solvd, with light and dark themes.

| Route              | Page                                                              |
| ------------------ | ----------------------------------------------------------------- |
| `/`                | Hero, stats, services, products, process, call to action          |
| `/services`        | All services and the delivery process                             |
| `/products`        | Products and sample projects, filterable by type                  |
| `/products/:slug`  | One page per product: overview, features, link to its live site   |
| `/about`           | Who we are, process and principles (`/story` redirects here)      |
| `/contact`         | Contact form (`?interest=<slug>` preselects a product)            |
| `*`                | 404                                                               |

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
  data.js                 all copy and image URLs: products, services, stats, process, values
  hooks.js                reduced-motion, scroll-position and theme hooks
  pages/                  Home, Services, Products, Product, About, Contact, NotFound
  components/             Nav, LampToggle (theme switch), Hero, Scene3D, Stats, ProductCard,
                          PageHeader (optional background photo), Contact, Footer
```

## Theme

The switch is a pendant lamp in the nav (`src/components/LampToggle.jsx`): drag its cord down,
or click/tap it or press Enter, to switch — the bulb lights up in light mode.
The light/dark choice is stored in `localStorage` and applied by a small script in
`index.html` before first paint; first-time visitors get their OS preference. Colours are
CSS custom properties in `src/styles.css` (`:root` for dark, `[data-theme='light']` for light).

## Before going live

- **Product URLs** — the Mentee Mentor `url` in `src/data.js` is a placeholder.
- **Photos** — background and product images are hotlinked from Unsplash via `IMAGES` and
  each product's `image` in `src/data.js`. Replace them with your own (e.g. files in `public/`).
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
