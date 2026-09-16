import { Link } from 'react-router-dom'
import { FEATURED_PRODUCTS, PRODUCTS, STORY } from '../data'
import Hero from '../components/Hero'
import Stats from '../components/Stats'
import Contact from '../components/Contact'
import ProductCard from '../components/ProductCard'
import Reveal from '../components/Reveal'
import { ArrowUpRight } from '../components/Icons'

/** The four milestones that carry the story in miniature. */
const PREVIEW_YEARS = ['2011', '2014', '2021', '2026']

function ProductsPreview() {
  return (
    <section className="section">
      <div className="shell">
        <div className="section-head">
          <div>
            <p className="eyebrow">What we build</p>
            <h2>{PRODUCTS.length} platforms,<br />each on its own site</h2>
          </div>
          <div>
            <p className="lead" style={{ maxWidth: '38ch', marginBottom: '18px' }}>
              Every product started as something we needed ourselves. Here are four of the seven — open any card to
              visit its live site.
            </p>
            <Link className="text-link" to="/products">
              See all {PRODUCTS.length} products <ArrowUpRight />
            </Link>
          </div>
        </div>

        <div className="product-grid">
          {FEATURED_PRODUCTS.map((product, i) => (
            <ProductCard key={product.slug} product={product} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

function StoryPreview() {
  const preview = STORY.filter((m) => PREVIEW_YEARS.includes(m.year))

  return (
    <section className="section band">
      <div className="shell story-grid">
        <div className="story-sticky">
          <Reveal>
            <p className="eyebrow">Our story</p>
            <h2>Fifteen years, no outside capital</h2>
            <p className="lead">
              Nexora has never taken a term sheet. Everything we run was paid for by work we shipped — which is why
              our products look like tools built by people who had to use them.
            </p>
            <Link className="btn btn-ghost" to="/story" style={{ marginTop: '10px' }}>Read the full story</Link>
          </Reveal>
        </div>

        <div className="mini-timeline">
          {preview.map((milestone, i) => (
            <Reveal className="mini-milestone" key={milestone.year} delay={i * 0.07}>
              <span className="year">{milestone.year}</span>
              <h3>{milestone.title}</h3>
              <p>{milestone.text}</p>
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
      <StoryPreview />
      <Contact />
    </>
  )
}
