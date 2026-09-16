import { motion } from 'framer-motion'

/** Shared hero band for the interior pages. */
export default function PageHeader({ eyebrow, title, lead, children }) {
  return (
    <header className="page-header">
      <span className="glow glow-a" />
      <span className="glow glow-b" />
      <div className="shell page-header-inner">
        <motion.p
          className="eyebrow"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {eyebrow}
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
        >
          {title}
        </motion.h1>
        <motion.p
          className="lead"
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.16, ease: [0.22, 1, 0.36, 1] }}
        >
          {lead}
        </motion.p>
        {children}
      </div>
    </header>
  )
}
