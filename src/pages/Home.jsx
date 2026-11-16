import { Link } from 'react-router-dom'
import { PROCESS } from '../data'
import Hero from '../components/Hero'
import Stats from '../components/Stats'
import PillarStage from '../components/PillarStage'
import SiteShowcase from '../components/SiteShowcase'
import Reveal from '../components/Reveal'

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
      <PillarStage />
      <SiteShowcase />
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
