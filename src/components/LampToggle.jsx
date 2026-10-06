import { useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { AnimatePresence, animate, motion, useMotionValue, useTransform } from 'framer-motion'
import { useReducedMotion, useTheme } from '../hooks'

const CORD = 40 // resting cord length below the shade, px
const PULL = 22 // how far the bead must be pulled to switch, px

/**
 * The theme switch: a pendant lamp hanging from the top of the screen. Pull its cord down
 * (drag, or click/tap/Enter for a scripted pull) to switch themes — light mode turns the bulb on.
 */
export default function LampToggle() {
  const [theme, toggleTheme] = useTheme()
  const reduced = useReducedMotion()
  const lit = theme === 'light'

  const lamp = useRef(null)
  const dragged = useRef(false)
  const [flash, setFlash] = useState(null) // { x, y, key } while the "lights on" glow plays

  // The bead's offset stretches the cord.
  const y = useMotionValue(0)
  const cordHeight = useTransform(y, (v) => CORD + Math.max(0, v))

  const switchTheme = () => {
    if (!lit && !reduced && lamp.current) {
      const r = lamp.current.getBoundingClientRect()
      setFlash({ x: r.left + r.width / 2, y: r.top + 40, key: Date.now() })
    }
    toggleTheme()
  }

  const handleDragEnd = () => {
    if (y.get() >= PULL) switchTheme()
    animate(y, 0, { type: 'spring', stiffness: 520, damping: 14 })
  }

  // Keyboard, tap or click without a drag: play a short pull and switch at the bottom of it.
  const handleClick = () => {
    if (dragged.current) {
      dragged.current = false
      return
    }
    if (reduced) {
      switchTheme()
      return
    }
    animate(y, PULL + 6, { duration: 0.14, ease: 'easeOut' }).then(() => {
      switchTheme()
      animate(y, 0, { type: 'spring', stiffness: 520, damping: 14 })
    })
  }

  return (
    <div className={`lamp${lit ? ' is-lit' : ''}`} ref={lamp}>
      <span className="lamp-wire" />
      <svg className="lamp-shade" viewBox="0 0 40 26" aria-hidden="true">
        <path d="M17 1h6v4h-6z" className="lamp-cap" />
        <path d="M20 4C10 4 4 12 2 22h36C36 12 30 4 20 4Z" className="lamp-dome" />
        <path d="M2 22h36" className="lamp-rim" />
      </svg>
      <span className="lamp-bulb" />
      <span className="lamp-beam" aria-hidden="true" />

      <motion.span className="lamp-cord" style={{ height: cordHeight }} />
      <motion.button
        type="button"
        className="lamp-pull"
        style={{ y, top: 26 + CORD }}
        drag={reduced ? false : 'y'}
        dragConstraints={{ top: 0, bottom: 0 }}
        dragElastic={{ top: 0, bottom: 0.55 }}
        dragMomentum={false}
        onPointerDown={() => { dragged.current = false }}
        onDragStart={() => { dragged.current = true }}
        onDragEnd={handleDragEnd}
        onClick={handleClick}
        aria-label={lit ? 'Pull the lamp cord to switch to dark mode' : 'Pull the lamp cord to switch to light mode'}
        aria-pressed={lit}
        title="Pull the cord"
      >
        <span className="lamp-bead" />
      </motion.button>

      {/* Portalled: the nav's backdrop-filter would otherwise clip a fixed overlay to the nav bar. */}
      {createPortal(<AnimatePresence>
        {flash && (
          <motion.span
            key={flash.key}
            className="lamp-flash"
            style={{ '--fx': `${flash.x}px`, '--fy': `${flash.y}px` }}
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: 1.1, times: [0, 0.18, 1], ease: 'easeOut' }}
            onAnimationComplete={() => setFlash(null)}
          />
        )}
      </AnimatePresence>, document.body)}
    </div>
  )
}
