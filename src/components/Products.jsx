import { useRef } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { PRODUCTS } from '../data'
import { useReducedMotion } from '../hooks'
import { ArrowUpRight, ProductGlyph } from './Icons'
import Reveal from './Reveal'

const MAX_TILT = 11 // degrees

/** A card that tilts in 3D toward the cursor and links out to the product's own site. */
function ProductCard({ product, index }) {
  const ref = useRef(null)
  const reduced = useReducedMotion()

  const px = useMotionValue(0.5)
  const py = useMotionValue(0.5)
  const spring = { stiffness: 260, damping: 26, mass: 0.6 }
  const rotateX = useSpring(useTransform(py, [0, 1], [MAX_TILT, -MAX_TILT]), spring)
  const rotateY = useSpring(useTransform(px, [0, 1], [-MAX_TILT, MAX_TILT]), spring)

  const handleMove = (event) => {
    if (reduced) return
    const rect = ref.current.getBoundingClientRect()
    const x = (event.clientX - rect.left) / rect.width
    const y = (event.clientY - rect.top) / rect.height
    px.set(x)
    py.set(y)
    // Feeds the radial highlight in CSS.
    ref.current.style.setProperty('--mx', `${x * 100}%`)
    ref.current.style.setProperty('--my', `${y * 100}%`)
  }

  const handleLeave = () => {
    px.set(0.5)
    py.set(0.5)
  }

  return (
    <Reveal className="tilt" delay={index * 0.09}>
      <motion.a
        ref={ref}
        className="card"
        href={product.url}
        target="_blank"
        rel="noopener noreferrer"
        style={{ '--accent': product.accent, rotateX: reduced ? 0 : rotateX, rotateY: reduced ? 0 : rotateY }}
        onMouseMove={handleMove}
        onMouseLeave={handleLeave}
        whileHover={reduced ? undefined : { y: -6 }}
        transition={{ duration: 0.3 }}
      >
        <div className="card-inner">
          <span className="card-icon"><ProductGlyph name={product.glyph} /></span>
          <p className="card-cat">{product.category}</p>
          <h3>{product.name}</h3>
          <p>{product.blurb}</p>
          <span className="card-go">
            Visit {product.name}
            <ArrowUpRight />
          </span>
        </div>
      </motion.a>
    </Reveal>
  )
}

export default function Products() {
  return (
    <section className="section" id="products">
      <div className="shell">
        <div className="section-head">
          <div>
            <p className="eyebrow">What we build</p>
            <h2>Four platforms,<br />each on its own site</h2>
          </div>
          <p className="lead" style={{ maxWidth: '38ch', margin: 0 }}>
            Every product below started as something we needed ourselves. Open any card to visit its live site.
          </p>
        </div>

        <div className="product-grid">
          {PRODUCTS.map((product, i) => (
            <ProductCard key={product.name} product={product} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
