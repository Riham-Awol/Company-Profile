import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { PRODUCTS, PRODUCT_TYPES } from '../data'
import PageHeader from '../components/PageHeader'
import ProductCard from '../components/ProductCard'
import Reveal from '../components/Reveal'

const FILTER_LABELS = { All: 'All', Product: 'Products', 'Sample project': 'Sample projects' }

export default function ProductsPage() {
  const [filter, setFilter] = useState('All')
  const shown = filter === 'All' ? PRODUCTS : PRODUCTS.filter((p) => p.type === filter)

  return (
    <>
      <PageHeader
        eyebrow="Our work"
        title={<>Products and<br /><span className="gradient-text">sample projects</span></>}
        lead="Our live platforms link to their own sites. Sample projects show the kind of systems we build for clients."
      >
        <motion.div
          className="filters"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.24 }}
        >
          {PRODUCT_TYPES.map((type) => (
            <button
              key={type}
              type="button"
              className={`filter${filter === type ? ' active' : ''}`}
              onClick={() => setFilter(type)}
              aria-pressed={filter === type}
            >
              {filter === type && <motion.span className="filter-bg" layoutId="filter-bg" transition={{ type: 'spring', stiffness: 380, damping: 32 }} />}
              <span>{FILTER_LABELS[type]}</span>
              {type !== 'All' && (
                <em>{PRODUCTS.filter((p) => p.type === type).length}</em>
              )}
            </button>
          ))}
        </motion.div>
      </PageHeader>

      <section className="section section-tight">
        <div className="shell">
          <motion.div className="product-grid wide" layout>
            <AnimatePresence mode="popLayout">
              {shown.map((product, i) => (
                <motion.div
                  key={product.slug}
                  layout
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                >
                  <ProductCard product={product} index={i} expanded />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <Reveal className="cta-card">
            <h2>Have a similar project in mind?</h2>
            <p className="lead center">Tell us what you need and we&rsquo;ll recommend the right approach.</p>
            <div className="cta-actions">
              <Link className="btn btn-primary" to="/#contact">Start a conversation</Link>
              <Link className="btn btn-ghost" to="/about">About us</Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
