import { lazy, Suspense } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { COMPANY, IMAGES, PRODUCTS } from '../data'
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
      <span className="bg-photo" style={{ '--photo': `url(${IMAGES.home})` }} />
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
          <motion.p className="eyebrow" variants={item}>Software engineering studio</motion.p>
          <motion.h1 variants={item}>
            Software engineered<br />
            <span className="gradient-text">for real-world problems</span>
          </motion.h1>
          <motion.p variants={item}>
            {COMPANY.name} designs, builds and supports custom software, web and mobile platforms for growing
            organisations.
          </motion.p>
          <motion.div className="hero-actions" variants={item}>
            <Link className="btn btn-primary" to="/services">Our services</Link>
            <Link className="btn btn-ghost" to="/products">View products</Link>
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
