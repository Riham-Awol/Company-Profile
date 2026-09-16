import { motion } from 'framer-motion'
import { COMPANY } from '../data'
import { useScrolled } from '../hooks'

const LINKS = [
  ['Products', '#products'],
  ['Our Story', '#story'],
  ['Contact', '#contact'],
]

export default function Nav() {
  const scrolled = useScrolled(30)

  return (
    <motion.header
      className={`nav${scrolled ? ' scrolled' : ''}`}
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="shell nav-inner">
        <a className="brand" href="#top">
          <span className="brand-mark">N</span>
          {COMPANY.name.toUpperCase()}
        </a>
        <nav className="nav-links">
          {LINKS.map(([label, href]) => (
            <a key={href} href={href}>{label}</a>
          ))}
        </nav>
        <a className="btn btn-primary" href="#contact">Get in Touch</a>
      </div>
    </motion.header>
  )
}
