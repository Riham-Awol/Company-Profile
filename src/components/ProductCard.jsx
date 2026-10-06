import { useRef } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { Link } from 'react-router-dom'
import { useReducedMotion } from '../hooks'
import { ArrowUpRight, ProductGlyph } from './Icons'
import Reveal from './Reveal'

const MAX_TILT = 11 // degrees
const MotionLink = motion.create(Link)

/**
 * A card that tilts in 3D toward the cursor and opens the product's own page.
 * `expanded` adds the longer copy and highlight list used on the products page.
 */
export default function ProductCard({ product, index = 0, expanded = false }) {
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
    <Reveal className="tilt" delay={index * 0.07}>
      <MotionLink
        ref={ref}
        className={`card${expanded ? ' card-lg' : ''}`}
        to={`/products/${product.slug}`}
        style={{ '--accent': product.accent, rotateX: reduced ? 0 : rotateX, rotateY: reduced ? 0 : rotateY }}
        onMouseMove={handleMove}
        onMouseLeave={handleLeave}
        whileHover={reduced ? undefined : { y: -6 }}
        transition={{ duration: 0.3 }}
      >
        <span className="card-media" style={{ '--photo': `url(${product.image})` }} aria-hidden="true" />
        <div className="card-inner">
          <div className="card-top">
            <span className="card-icon on-media"><ProductGlyph name={product.glyph} /></span>
            <span className={`chip${product.status === 'Sample' ? ' chip-sample' : ''}`}>{product.status}</span>
          </div>
          <p className="card-cat">{product.category}</p>
          <h3>{product.name}</h3>
          <p className="card-tagline">{product.tagline}</p>
          <p>{expanded ? product.detail : product.blurb}</p>

          {expanded && (
            <ul className="card-highlights">
              {product.highlights.map((h) => <li key={h}>{h}</li>)}
            </ul>
          )}

          <div className="card-foot">
            <span className="card-go">
              View details
              <ArrowUpRight />
            </span>
          </div>
        </div>
      </MotionLink>
    </Reveal>
  )
}
