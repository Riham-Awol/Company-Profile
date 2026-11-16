import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { PILLARS, accentFor } from '../data'
import { useTheme, useTilt } from '../hooks'
import { ArrowUpRight, ProductGlyph } from './Icons'
import PillarArt from './PillarArt'
import Reveal from './Reveal'

/**
 * Three discipline cards on a 3D stage: the featured (middle) card stands forward, the two
 * beside it sit back and angled in. The whole stage leans toward the cursor.
 */
export default function PillarStage() {
  const [theme] = useTheme()
  const tilt = useTilt(5)

  return (
    <section className="section pillars">
      <span className="pillars-glow" aria-hidden="true" />
      <div className="shell">
        <Reveal className="pillars-head">
          <p className="eyebrow center-dot">What we do</p>
          <h2>Three disciplines, <span className="gradient-text">one studio</span></h2>
          <p className="lead center">Ideas, software and physical products, taken from concept to launch.</p>
        </Reveal>

        <Reveal className="stage-wrap" delay={0.1} y={40}>
          <span className="stage-ring stage-ring-a" aria-hidden="true" />
          <span className="stage-ring stage-ring-b" aria-hidden="true" />
          <div className="stage-track" {...tilt.handlers}>
            <motion.div className="stage" style={tilt.style}>
              {PILLARS.map((pillar, i) => (
                <article
                  className={`pillar ${pillar.featured ? 'pillar-front' : i === 0 ? 'pillar-left' : 'pillar-right'}`}
                  key={pillar.key}
                  style={{ '--accent': accentFor(pillar, theme) }}
                >
                  <div className="pillar-art">
                    <PillarArt name={pillar.art} />
                    <span className="pillar-num">0{i + 1}</span>
                  </div>
                  <div className="pillar-body">
                    <span className="card-icon pillar-icon"><ProductGlyph name={pillar.glyph} /></span>
                    {pillar.featured && <span className="pillar-badge">Core discipline</span>}
                    <h3>{pillar.title}</h3>
                    <p>{pillar.text}</p>
                    <ul className="pillar-features">
                      {pillar.features.map((feature) => <li key={feature}>{feature}</li>)}
                    </ul>
                  </div>
                </article>
              ))}
            </motion.div>
          </div>
        </Reveal>

        <Reveal className="pillars-foot">
          <Link className="text-link" to="/services">All services <ArrowUpRight /></Link>
        </Reveal>
      </div>
    </section>
  )
}
