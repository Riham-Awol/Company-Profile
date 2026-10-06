import { useEffect, useState } from 'react'

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
