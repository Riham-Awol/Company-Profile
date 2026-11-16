import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { PRODUCTS, accentFor } from '../data'
import { useTheme, useTilt } from '../hooks'
import { ArrowUpRight, ProductGlyph } from './Icons'
import Reveal from './Reveal'

/** What the address bar shows: the live host, or a note for work with no public site. */
const addressOf = (product) => {
  if (!product.url) return 'Sample project'
  try { return new URL(product.url).host } catch { return product.url }
}

/**
 * Pick a site on the left; it opens in a browser window floating in 3D on the right,
 * with its features hovering around the frame.
 */
export default function SiteShowcase() {
  const [active, setActive] = useState(0)
  const [theme] = useTheme()
  const tilt = useTilt(6, { x: 4, y: -10 })
  const product = PRODUCTS[active]

  return (
    <section className="section band sites" style={{ '--accent': accentFor(product, theme) }}>
      <div className="shell">
        <div className="section-head">
          <Reveal>
            <p className="eyebrow">Sites and features</p>
            <h2>Explore what we&rsquo;ve built</h2>
          </Reveal>
          <Link className="text-link" to="/products">All products <ArrowUpRight /></Link>
        </div>

        <div className="sites-grid">
          <Reveal className="site-list" delay={0.05}>
            <div role="tablist" aria-label="Sites" aria-orientation="vertical">
              {PRODUCTS.map((p, i) => (
                <button
                  key={p.slug}
                  type="button"
                  role="tab"
                  id={`site-tab-${p.slug}`}
                  aria-selected={i === active}
                  aria-controls="site-panel"
                  className={`site-tab${i === active ? ' active' : ''}`}
                  style={{ '--accent': accentFor(p, theme) }}
                  onClick={() => setActive(i)}
                >
                  {i === active && <motion.span className="site-tab-bg" layoutId="site-tab-bg" transition={{ type: 'spring', stiffness: 380, damping: 32 }} />}
                  <span className="card-icon"><ProductGlyph name={p.glyph} /></span>
                  <span className="site-tab-text">
                    <strong>{p.name}</strong>
                    <small>{p.category}</small>
                  </span>
                  <span className={`chip${p.status === 'Sample' ? ' chip-sample' : ''}`}>{p.status}</span>
                </button>
              ))}
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={product.slug}
                className="site-copy"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.25 }}
              >
                <p>{product.blurb}</p>
                <div className="site-actions">
                  {product.url && (
                    <a className="btn btn-primary" href={product.url} target="_blank" rel="noopener noreferrer">
                      Visit site <ArrowUpRight />
                    </a>
                  )}
                  <Link className={`btn ${product.url ? 'btn-ghost' : 'btn-primary'}`} to={`/products/${product.slug}`}>View details</Link>
                </div>
              </motion.div>
            </AnimatePresence>
          </Reveal>

          <Reveal className="site-view" delay={0.12}>
            <div className="site-track" id="site-panel" role="tabpanel" aria-labelledby={`site-tab-${product.slug}`} {...tilt.handlers}>
              <motion.div className="browser" style={tilt.style}>
                <div className="browser-bar">
                  <span className="browser-dots"><i /><i /><i /></span>
                  <span className="browser-url">{addressOf(product)}</span>
                </div>
                <div className="browser-view">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={product.slug}
                      className="browser-page"
                      style={{ '--photo': `url(${product.image})` }}
                      initial={{ opacity: 0, scale: 1.04 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.35 }}
                    >
                      <span className="browser-kicker">{product.category}</span>
                      <strong>{product.name}</strong>
                      <span>{product.tagline}</span>
                    </motion.div>
                  </AnimatePresence>
                </div>

                <ul className="site-features">
                  <AnimatePresence mode="popLayout">
                    {product.features.map((feature, i) => (
                      <motion.li
                        key={`${product.slug}-${feature.title}`}
                        className={`site-feature site-feature-${i + 1}`}
                        initial={{ opacity: 0, scale: 0.85 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.15 } }}
                        transition={{ duration: 0.4, delay: 0.12 + i * 0.07, ease: [0.22, 1, 0.36, 1] }}
                      >
                        <strong>{feature.title}</strong>
                        <span>{feature.text}</span>
                      </motion.li>
                    ))}
                  </AnimatePresence>
                </ul>
              </motion.div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
