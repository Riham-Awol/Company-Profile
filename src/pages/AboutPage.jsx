import { Link } from 'react-router-dom'
import { COMPANY, PROCESS, VALUES } from '../data'
import PageHeader from '../components/PageHeader'
import Reveal from '../components/Reveal'

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About us"
        title={<>Built to<br /><span className="gradient-text">solve problems</span></>}
        lead={`${COMPANY.name} is a software engineering company that turns complex operational problems into reliable digital products.`}
      />

      <section className="section section-tight">
        <div className="shell prose-grid">
          <Reveal>
            <p className="eyebrow">Who we are</p>
            <h2>Focused on outcomes</h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p>
              We build and operate our own platforms, and deliver custom systems for organisations in trade,
              property, education and beyond. Every engagement is led by engineers who stay with the product
              from design through to long-term support.
            </p>
          </Reveal>
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
          <Reveal>
            <p className="eyebrow">What we value</p>
            <h2>Our principles</h2>
          </Reveal>
          <div className="values">
            {VALUES.map((value, i) => (
              <Reveal className="value" key={value.title} delay={i * 0.07}>
                <h3>{value.title}</h3>
                <p>{value.text}</p>
              </Reveal>
            ))}
          </div>

          <Reveal className="cta-card">
            <h2>Let&rsquo;s work together</h2>
            <p className="lead center">Explore our work or get in touch to discuss your project.</p>
            <div className="cta-actions">
              <Link className="btn btn-primary" to="/products">View our work</Link>
              <Link className="btn btn-ghost" to="/#contact">Contact us</Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
