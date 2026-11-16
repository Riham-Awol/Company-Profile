import { useEffect, useState } from 'react'
import { useMotionValue, useSpring, useTransform } from 'framer-motion'

/** True when the visitor has asked the OS to minimise motion. */
export function useReducedMotion() {
  const [reduced, setReduced] = useState(
    () => typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches,
  )

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    const onChange = (e) => setReduced(e.matches)
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [])

  return reduced
}

/** True once the page has been scrolled past `offset` pixels. */
export function useScrolled(offset = 24) {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > offset)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [offset])

  return scrolled
}

/**
 * The colour theme, stored on <html data-theme>. index.html sets the initial value before
 * first paint (saved choice, else the OS preference) so the page never flashes the wrong theme.
 * Every caller re-renders when the theme changes, wherever the toggle was clicked.
 */
export function useTheme() {
  const read = () => document.documentElement.dataset.theme || 'dark'
  const [theme, setTheme] = useState(read)

  useEffect(() => {
    const observer = new MutationObserver(() => setTheme(read()))
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] })
    return () => observer.disconnect()
  }, [])

  const toggle = () => {
    const next = read() === 'dark' ? 'light' : 'dark'
    document.documentElement.dataset.theme = next
    try { localStorage.setItem('theme', next) } catch { /* storage unavailable — theme still applies */ }
  }

  return [theme, toggle]
}

/**
 * 3D tilt toward the cursor. Spread `handlers` on the element that tracks the pointer and
 * pass `style` (rotateX/rotateY motion values) to the motion element that should lean.
 * `rest` is the resting pose in degrees. Does nothing for reduced-motion visitors.
 */
export function useTilt(max = 6, rest = { x: 0, y: 0 }) {
  const reduced = useReducedMotion()
  const px = useMotionValue(0.5)
  const py = useMotionValue(0.5)
  const spring = { stiffness: 140, damping: 20, mass: 0.7 }
  const rotateX = useSpring(useTransform(py, [0, 1], [rest.x + max, rest.x - max]), spring)
  const rotateY = useSpring(useTransform(px, [0, 1], [rest.y - max, rest.y + max]), spring)

  const handlers = reduced ? {} : {
    onMouseMove: (event) => {
      const rect = event.currentTarget.getBoundingClientRect()
      px.set((event.clientX - rect.left) / rect.width)
      py.set((event.clientY - rect.top) / rect.height)
    },
    onMouseLeave: () => { px.set(0.5); py.set(0.5) },
  }

  return { handlers, style: { rotateX, rotateY } }
}
