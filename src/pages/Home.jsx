import { Link } from 'react-router-dom'
import { PROCESS, PRODUCTS, SERVICES } from '../data'
import Hero from '../components/Hero'
import Stats from '../components/Stats'
import ProductCard from '../components/ProductCard'
import Reveal from '../components/Reveal'
import { ArrowUpRight, ProductGlyph } from '../components/Icons'

function ServicesPreview() {
  return (
    <section className="section">
      <div className="shell">
        <div className="section-head">
          <div>
            <p className="eyebrow">Services</p>
            <h2>What we do</h2>
          </div>
          <Link className="text-link" to="/services">
            All services <ArrowUpRight />
          </Link>
        </div>
        <div className="service-grid">
          {SERVICES.slice(0, 3).map((service, i) => (
            <Reveal className="service" key={service.title} delay={i * 0.07}>
              <span className="card-icon"><ProductGlyph name={service.glyph} /></span>
              <h3>{service.title}</h3>
              <p>{service.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function ProductsPreview() {
  return (
    <section className="section band">
      <div className="shell">
        <div className="section-head">
          <div>
            <p className="eyebrow">Products</p>
            <h2>Platforms and projects</h2>
          </div>
          <Link className="text-link" to="/products">
            View all <ArrowUpRight />
          </Link>
        </div>
        <div className="product-grid">
          {PRODUCTS.map((product, i) => (
            <ProductCard key={product.slug} product={product} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ApproachPreview() {
  return (
    <section className="section">
      <div className="shell story-grid">
        <div className="story-sticky">
          <Reveal>
            <p className="eyebrow">How we work</p>
            <h2>A clear, proven process</h2>
            <p className="lead">Every engagement follows the same four stages, from first conversation to long-term support.</p>
            <Link className="btn btn-ghost" to="/about" style={{ marginTop: '10px' }}>About us</Link>
          </Reveal>
        </div>
        <div className="mini-timeline">
          {PROCESS.map((stage, i) => (
            <Reveal className="mini-milestone" key={stage.step} delay={i * 0.07}>
              <span className="year">{stage.step}</span>
              <h3>{stage.title}</h3>
              <p>{stage.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <ServicesPreview />
      <ProductsPreview />
      <ApproachPreview />
      <section className="section section-tight">
        <div className="shell">
          <Reveal className="cta-card">
            <h2>Have a project in mind?</h2>
            <p className="lead center">Tell us what you need and we&rsquo;ll recommend the right approach.</p>
            <div className="cta-actions">
              <Link className="btn btn-primary" to="/contact">Contact us</Link>
              <Link className="btn btn-ghost" to="/services">Our services</Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
