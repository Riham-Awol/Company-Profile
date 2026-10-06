import { Link } from 'react-router-dom'
import { IMAGES, PROCESS, SERVICES } from '../data'
import PageHeader from '../components/PageHeader'
import Reveal from '../components/Reveal'
import { ProductGlyph } from '../components/Icons'

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Services"
        title={<>End-to-end<br /><span className="gradient-text">software delivery</span></>}
        lead="From design to deployment and ongoing support, we cover the full lifecycle of your product."
        image={IMAGES.services}
      />

      <section className="section section-tight">
        <div className="shell service-grid">
          {SERVICES.map((service, i) => (
            <Reveal className="service" key={service.title} delay={(i % 3) * 0.07}>
              <span className="card-icon"><ProductGlyph name={service.glyph} /></span>
              <h3>{service.title}</h3>
              <p>{service.text}</p>
              <ul>{service.tags.map((tag) => <li key={tag}>{tag}</li>)}</ul>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section band">
        <div className="shell">
          <Reveal>
            <p className="eyebrow">How we work</p>
            <h2>Our process</h2>
          </Reveal>
          <div className="steps">
            {PROCESS.map((item, i) => (
              <Reveal className="step" key={item.step} delay={i * 0.08}>
                <span className="step-num" style={{ color: 'var(--brand)' }}>{item.step}</span>
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
            <h2>Need one of these services?</h2>
            <p className="lead center">Share your requirements and we&rsquo;ll come back with a proposal.</p>
            <div className="cta-actions">
              <Link className="btn btn-primary" to="/contact">Request a proposal</Link>
              <Link className="btn btn-ghost" to="/products">See our products</Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
