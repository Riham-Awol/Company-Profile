import { Link } from 'react-router-dom'
import { PROCESS, PRODUCTS } from '../data'
import Hero from '../components/Hero'
import Stats from '../components/Stats'
import Contact from '../components/Contact'
import ProductCard from '../components/ProductCard'
import Reveal from '../components/Reveal'
import { ArrowUpRight } from '../components/Icons'

function ProductsPreview() {
  return (
    <section className="section">
      <div className="shell">
        <div className="section-head">
          <div>
            <p className="eyebrow">Our work</p>
            <h2>Products and projects</h2>
          </div>
          <div>
            <p className="lead" style={{ maxWidth: '38ch', marginBottom: '18px' }}>
              Platforms we operate, alongside representative solutions we deliver for clients.
            </p>
            <Link className="text-link" to="/products">
              View all <ArrowUpRight />
            </Link>
          </div>
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
    <section className="section band">
      <div className="shell story-grid">
        <div className="story-sticky">
          <Reveal>
            <p className="eyebrow">How we work</p>
            <h2>A clear, proven process</h2>
            <p className="lead">From first conversation to long-term support, every engagement follows the same four stages.</p>
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
      <ProductsPreview />
      <ApproachPreview />
      <Contact />
    </>
  )
}
