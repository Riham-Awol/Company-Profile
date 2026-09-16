// Client-side routing needs the host to serve index.html for unknown paths.
// GitHub Pages does that via a 404.html copy; Netlify/Vercel use public/_redirects.
import { copyFileSync } from 'node:fs'

copyFileSync('dist/index.html', 'dist/404.html')
console.log('spa-fallback: wrote dist/404.html')
