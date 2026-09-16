import { useRef } from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'
import { Link } from 'react-router-dom'
import { LEADERSHIP, OFFICES, STATS, STORY, VALUES } from '../data'
import PageHeader from '../components/PageHeader'
import Reveal from '../components/Reveal'

function Timeline() {
  const rail = useRef(null)
  // Fills the rail in step with the reader's scroll position.
  const { scrollYProgress } = useScroll({ target: rail, offset: ['start 72%', 'end 60%'] })
  const fill = useSpring(scrollYProgress, { stiffness: 90, damping: 24, restDelta: 0.001 })

  return (
    <div className="timeline" ref={rail}>
      <div className="timeline-rail">
        <motion.div className="timeline-fill" style={{ scaleY: fill, height: '100%' }} />
      </div>
      {STORY.map((milestone) => (
        <Reveal className="milestone" key={milestone.year}>
          <span className="year">{milestone.year}</span>
          <h3>{milestone.title}</h3>
          <p>{milestone.text}</p>
        </Reveal>
      ))}
    </div>
  )
}

export default function StoryPage() {
  return (
    <>
      <PageHeader
        eyebrow="Our story"
        title={<>From a rented room<br /><span className="gradient-text">to seven platforms</span></>}
        lead="Fifteen years, no outside capital, and one meeting we have never cancelled. This is how Nexora got from a room above a print shop to a studio running seven products."
      />

      <section className="section section-tight">
        <div className="shell prose-grid">
          <Reveal>
            <p className="eyebrow">Where it started</p>
            <h2>We built what we needed, then sold it</h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p>
              In 2011 three engineers took a contract to replace a logistics company&rsquo;s dispatch spreadsheet.
              The work paid, so we took another, and another. For three years Nexora was a contract shop that
              happened to be good at the unglamorous end of software: imports that never failed, reports that
              reconciled, systems that stayed up over a holiday weekend.
            </p>
            <p>
              What changed everything was a tool we never meant to sell. We had written our own deployment script
              because the alternatives were either too heavy or too fragile for the way we worked. Four clients saw
              it, and all four asked whether they could license it. That script became VantaCloud, and in 2014 we
              stopped billing by the hour.
            </p>
            <blockquote className="pull-quote">
              &ldquo;Every product we own started as something we needed on a Tuesday and could not buy anywhere.&rdquo;
              <cite>Selam Girma, co-founder</cite>
            </blockquote>
            <p>
              The pattern repeated. The logistics work became Meridian. Our own SOC 2 preparation became Aegis. A
              research group with no deadline became Axiom AI. We have never shipped a product that began life as a
              market study — which is also why we have turned down more ideas than we have built.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section band">
        <div className="shell">
          <Reveal>
            <p className="eyebrow">The long version</p>
            <h2>Fifteen years, in order</h2>
          </Reveal>
          <Timeline />
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <Reveal>
            <p className="eyebrow">By the numbers</p>
            <h2>Where that leaves us</h2>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="stats plain">
              {STATS.map((stat) => (
                <div className="stat" key={stat.label}>
                  <b>{stat.value.toLocaleString()}{stat.suffix}</b>
                  <small>{stat.label}</small>
                </div>
              ))}
            </div>
          </Reveal>

          <div className="values">
            {VALUES.map((value, i) => (
              <Reveal className="value" key={value.title} delay={i * 0.07}>
                <h3>{value.title}</h3>
                <p>{value.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section band">
        <div className="shell">
          <Reveal>
            <p className="eyebrow">Who runs it</p>
            <h2>The people who were there</h2>
            <p className="lead">Three of the four have been at Nexora for more than a decade.</p>
          </Reveal>
          <div className="people">
            {LEADERSHIP.map((person, i) => (
              <Reveal className="person" key={person.name} delay={i * 0.07}>
                <span className="avatar" aria-hidden="true">{person.initials}</span>
                <h3>{person.name}</h3>
                <p className="person-role">{person.role}</p>
                <p>{person.note}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <Reveal>
            <p className="eyebrow">Where we are</p>
            <h2>Three studios</h2>
          </Reveal>
          <div className="offices">
            {OFFICES.map((office, i) => (
              <Reveal className="office" key={office.city} delay={i * 0.08}>
                <div>
                  <h3>{office.city}</h3>
                  <p className="office-role">{office.role}</p>
                </div>
                <p className="office-team">{office.team}</p>
                <span className="office-since">Since {office.since}</span>
              </Reveal>
            ))}
          </div>

          <Reveal className="cta-card">
            <h2>Want the short version?</h2>
            <p className="lead center">We build tools we need, keep the ones that work, and show them every second Thursday.</p>
            <div className="cta-actions">
              <Link className="btn btn-primary" to="/products">See the products</Link>
              <Link className="btn btn-ghost" to="/#contact">Get in touch</Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
