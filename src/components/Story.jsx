import { useRef } from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'
import { STORY, VALUES } from '../data'
import Reveal from './Reveal'

export default function Story() {
  const rail = useRef(null)
  // Fills the timeline rail in step with the reader's scroll position.
  const { scrollYProgress } = useScroll({ target: rail, offset: ['start 72%', 'end 55%'] })
  const fill = useSpring(scrollYProgress, { stiffness: 90, damping: 24, restDelta: 0.001 })

  return (
    <section className="section story" id="story">
      <div className="shell">
        <div className="story-grid">
          <div className="story-sticky">
            <Reveal>
              <p className="eyebrow">Our story</p>
              <h2>From a rented room to four platforms</h2>
              <p className="lead">
                Nexora has never taken outside funding. Everything we run was paid for by work we shipped —
                which is why our products look like tools built by people who had to use them.
              </p>
            </Reveal>
          </div>

          <div className="timeline" ref={rail}>
            <div className="timeline-rail">
              <motion.div className="timeline-fill" style={{ scaleY: fill, height: '100%' }} />
            </div>
            {STORY.map((milestone, i) => (
              <Reveal className="milestone" key={milestone.year} delay={i * 0.05}>
                <span className="year">{milestone.year}</span>
                <h3>{milestone.title}</h3>
                <p>{milestone.text}</p>
              </Reveal>
            ))}
          </div>
        </div>

        <div className="values">
          {VALUES.map((value, i) => (
            <Reveal className="value" key={value.title} delay={i * 0.08}>
              <h3>{value.title}</h3>
              <p>{value.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
