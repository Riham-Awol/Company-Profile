import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { COMPANY } from '../data'
import { useScrolled } from '../hooks'
import { MenuIcon } from './Icons'

const LINKS = [
  ['Products', '/products'],
  ['Our Story', '/story'],
  ['Contact', '/#contact'],
]

export default function Nav() {
  const scrolled = useScrolled(30)
  const [open, setOpen] = useState(false)
  const location = useLocation()

  // Any navigation closes the mobile menu.
  useEffect(() => setOpen(false), [location])

  // Don't let the page scroll behind an open menu.
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  return (
    <motion.header
      className={`nav${scrolled || open ? ' scrolled' : ''}`}
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="shell nav-inner">
        <Link className="brand" to="/">
          <span className="brand-mark">N</span>
          {COMPANY.name.toUpperCase()}
        </Link>

        <nav className="nav-links">
          {LINKS.map(([label, to]) => (
            <NavLink key={to} to={to} className={({ isActive }) => (isActive && to !== '/#contact' ? 'active' : undefined)}>
              {label}
            </NavLink>
          ))}
        </nav>

        <Link className="btn btn-primary nav-cta" to="/#contact">Get in Touch</Link>

        <button
          type="button"
          className="menu-toggle"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label={open ? 'Close menu' : 'Open menu'}
        >
          <MenuIcon open={open} />
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            className="mobile-menu"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
          >
            {[['Home', '/'], ...LINKS].map(([label, to], i) => (
              <motion.div
                key={to}
                initial={{ opacity: 0, x: -14 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.05 + i * 0.05 }}
              >
                <Link to={to}>{label}</Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
