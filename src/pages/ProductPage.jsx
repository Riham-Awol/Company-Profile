import { Link, useParams } from 'react-router-dom'
import { PRODUCTS } from '../data'
import PageHeader from '../components/PageHeader'
import ProductCard from '../components/ProductCard'
import Reveal from '../components/Reveal'
import { ArrowLeft, ArrowUpRight, ProductGlyph } from '../components/Icons'
import NotFound from './NotFound'

export default function ProductPage() {
  const { slug } = useParams()
  const product = PRODUCTS.find((p) => p.slug === slug)
  if (!product) return <NotFound />

  const others = PRODUCTS.filter((p) => p.slug !== slug)

  return (
    <div style={{ '--accent': product.accent }}>
      <PageHeader
        eyebrow={product.category}
        title={<>{product.name}<br /><span className="gradient-text">{product.tagline}</span></>}
        lead={product.blurb}
        image={product.image}
      >
        <div className="detail-meta">
          <span className={`chip${product.status === 'Sample' ? ' chip-sample' : ''}`}>
            {product.type === 'Product' ? product.status : 'Sample project'}
          </span>
          <div className="cta-actions">
            {product.url ? (
              <a className="btn btn-primary" href={product.url} target="_blank" rel="noopener noreferrer">
                Visit {product.name} <ArrowUpRight />
              </a>
            ) : (
              <Link className="btn btn-primary" to={`/contact?interest=${product.slug}`}>Request a demo</Link>
            )}
            <Link className="btn btn-ghost" to={`/contact?interest=${product.slug}`}>Talk to us</Link>
          </div>
        </div>
      </PageHeader>

      <section className="section section-tight">
        <div className="shell prose-grid">
          <Reveal>
            <Link className="back-link" to="/products"><ArrowLeft /> All products</Link>
            <p className="eyebrow">Overview</p>
            <h2>What it does</h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p>{product.detail}</p>
            <ul className="feature-list">
              {product.highlights.map((h) => <li key={h}>{h}</li>)}
            </ul>
          </Reveal>
        </div>
      </section>

      <section className="section band">
        <div className="shell">
          <Reveal>
            <p className="eyebrow">Features</p>
            <h2>Key capabilities</h2>
          </Reveal>
          <div className="service-grid four" style={{ marginTop: '40px' }}>
            {product.features.map((feature, i) => (
              <Reveal className="service" key={feature.title} delay={i * 0.07}>
                <span className="card-icon" style={{ '--accent': product.accent }}><ProductGlyph name={product.glyph} /></span>
                <h3>{feature.title}</h3>
                <p>{feature.text}</p>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <h3 style={{ marginTop: '56px' }}>Built for</h3>
            <ul className="tag-list">{product.audience.map((a) => <li key={a}>{a}</li>)}</ul>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <div className="section-head">
            <div>
              <p className="eyebrow">More work</p>
              <h2>Other products</h2>
            </div>
          </div>
          <div className="product-grid">
            {others.map((p, i) => <ProductCard key={p.slug} product={p} index={i} />)}
          </div>
        </div>
      </section>
    </div>
  )
}
