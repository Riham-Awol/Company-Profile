import { lazy, Suspense } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { COMPANY, PRODUCTS } from '../data'
import { useReducedMotion } from '../hooks'

// three.js is ~700kB — kept out of the initial bundle and fetched after paint.
const Scene3D = lazy(() => import('./Scene3D'))

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.11, delayChildren: 0.25 } },
}

const item = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
}

export default function Hero() {
  const reduced = useReducedMotion()

  return (
    <section className="hero" id="top">
      <span className="glow glow-a" />
      <span className="glow glow-b" />

      {/* The WebGL layer is decorative — skipped entirely for reduced-motion visitors. */}
      {!reduced && (
        <Suspense fallback={null}>
          <Scene3D accents={PRODUCTS.map((p) => p.accent)} />
        </Suspense>
      )}

      <motion.div className="shell hero-shell" variants={container} initial="hidden" animate="show">
        <div className="hero-copy">
          <motion.p className="eyebrow" variants={item}>Product studio · Est. 2011</motion.p>
          <motion.h1 variants={item}>
            Engineering<br />
            <span className="gradient-text">the Next Decade</span>
          </motion.h1>
          <motion.p variants={item}>
            {COMPANY.name} designs, ships and runs cloud, data and AI platforms — {PRODUCTS.length} of our own
            products, trusted by teams in 30+ countries.
          </motion.p>
          <motion.div className="hero-actions" variants={item}>
            <Link className="btn btn-primary" to="/products">Explore our products</Link>
            <Link className="btn btn-ghost" to="/story">Our story</Link>
          </motion.div>
          <motion.div className="hero-note" variants={item}>
            <span className="pulse-dot" />
            All four platforms operating — 99.98% uptime this quarter
          </motion.div>
        </div>
      </motion.div>

      <span className="hero-scrim" />
      <span className="hero-fade" />
      <motion.div
        className="scroll-cue"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.8 }}
      >
        Scroll
        <span className="rail" />
      </motion.div>
    </section>
  )
}
