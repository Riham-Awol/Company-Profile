import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { PRODUCTS, PRODUCT_CATEGORIES } from '../data'
import PageHeader from '../components/PageHeader'
import ProductCard from '../components/ProductCard'
import Reveal from '../components/Reveal'

const PLATFORM_STEPS = [
  { step: '01', title: 'Ship it', text: 'VantaCloud builds, releases and rolls back.', accent: '#22d3ee' },
  { step: '02', title: 'Measure it', text: 'PulseGrid turns the resulting events into numbers.', accent: '#4ade80' },
  { step: '03', title: 'Automate it', text: 'Axiom and Relay take the repetitive work off the queue.', accent: '#a78bfa' },
  { step: '04', title: 'Bill and secure it', text: 'Ledgerly invoices, Aegis controls who can reach what.', accent: '#fb923c' },
]

export default function ProductsPage() {
  const [filter, setFilter] = useState('All')
  const shown = filter === 'All' ? PRODUCTS : PRODUCTS.filter((p) => p.category === filter)

  return (
    <>
      <PageHeader
        eyebrow="Our products"
        title={<>Seven platforms,<br /><span className="gradient-text">seven live sites</span></>}
        lead="Every product below started as something we needed on client work and kept for ourselves. Each one runs on its own site — open any card to go there."
      >
        <motion.div
          className="filters"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.24 }}
        >
          {PRODUCT_CATEGORIES.map((category) => (
            <button
              key={category}
              type="button"
              className={`filter${filter === category ? ' active' : ''}`}
              onClick={() => setFilter(category)}
              aria-pressed={filter === category}
            >
              {filter === category && <motion.span className="filter-bg" layoutId="filter-bg" transition={{ type: 'spring', stiffness: 380, damping: 32 }} />}
              <span>{category}</span>
              {category !== 'All' && (
                <em>{PRODUCTS.filter((p) => p.category === category).length}</em>
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

      <section className="section band">
        <div className="shell">
          <Reveal>
            <p className="eyebrow">How they fit together</p>
            <h2>One suite, four jobs</h2>
            <p className="lead">
              You can buy any platform on its own — most customers do. They also share one identity layer and one
              event pipeline, so adding a second product takes an afternoon rather than a migration.
            </p>
          </Reveal>
          <div className="steps">
            {PLATFORM_STEPS.map((item, i) => (
              <Reveal className="step" key={item.step} delay={i * 0.08}>
                <span className="step-num" style={{ color: item.accent }}>{item.step}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <Reveal className="cta-card">
            <h2>Not sure which one you need?</h2>
            <p className="lead center">
              Describe the problem and we&rsquo;ll tell you which platform fits — or that none of them do.
            </p>
            <div className="cta-actions">
              <Link className="btn btn-primary" to="/#contact">Talk to an engineer</Link>
              <Link className="btn btn-ghost" to="/story">How we got here</Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
