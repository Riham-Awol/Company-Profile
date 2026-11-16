import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { PILLARS, accentFor } from '../data'
import { useTheme, useTilt } from '../hooks'
import { ArrowUpRight, FlipIcon, ProductGlyph } from './Icons'
import PillarArt from './PillarArt'
import Reveal from './Reveal'

/** Where a project on the back of a card leads: its own page if it has one, else the discipline's list. */
const projectLink = (pillar, project) => (project.slug ? `/products/${project.slug}` : `/work/${pillar.key}`)

/**
 * One discipline card. Clicking it turns it over: features on the front, its projects and a
 * link to the full project list on the back. The hidden side is `inert` so it can't be focused.
 */
function Pillar({ pillar, index, position, theme }) {
  const [flipped, setFlipped] = useState(false)
  const toggle = () => setFlipped((value) => !value)
  // Links and the flip buttons handle their own clicks; anywhere else on the card flips it.
  const onCardClick = (event) => { if (!event.target.closest('a, button')) toggle() }

  return (
    <article
      className={`pillar pillar-${position}${flipped ? ' is-flipped' : ''}`}
      style={{ '--accent': accentFor(pillar, theme) }}
      onClick={onCardClick}
    >
      <div className="pillar-flip">
        <div className="pillar-face" inert={flipped ? '' : undefined}>
          <div className="pillar-art">
            <PillarArt name={pillar.art} />
            <span className="pillar-num">0{index + 1}</span>
          </div>
          <div className="pillar-body">
            <span className="card-icon pillar-icon"><ProductGlyph name={pillar.glyph} /></span>
            {pillar.featured && <span className="pillar-badge">Core discipline</span>}
            <h3>{pillar.title}</h3>
            <p>{pillar.text}</p>
            <ul className="pillar-features">
              {pillar.features.map((feature) => <li key={feature}>{feature}</li>)}
            </ul>
            <button type="button" className="pillar-flip-btn" onClick={toggle} aria-expanded={flipped}>
              <FlipIcon /> {pillar.projects.length} projects
            </button>
          </div>
        </div>

        <div className="pillar-face pillar-back" inert={flipped ? undefined : ''}>
          <div className="pillar-back-top">
            <p className="card-cat">{pillar.title}</p>
            <button type="button" className="pillar-flip-btn plain" onClick={toggle}>
              <FlipIcon /> Back
            </button>
          </div>
          <h3>Projects</h3>
          <ul className="pillar-projects">
            {pillar.projects.map((project) => (
              <li key={project.name}>
                <Link className="pillar-project" to={projectLink(pillar, project)}>
                  <span>
                    <strong>{project.name}</strong>
                    <small>{project.category}</small>
                  </span>
                  <ArrowUpRight />
                </Link>
              </li>
            ))}
          </ul>
          <Link className="btn btn-primary" to={`/work/${pillar.key}`}>
            View all projects <ArrowUpRight />
          </Link>
        </div>
      </div>
    </article>
  )
}

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
          <p className="lead center">Ideas, software and physical products, taken from concept to launch. Turn a card over to see its projects.</p>
        </Reveal>

        <Reveal className="stage-wrap" delay={0.1} y={40}>
          <span className="stage-ring stage-ring-a" aria-hidden="true" />
          <span className="stage-ring stage-ring-b" aria-hidden="true" />
          <div className="stage-track" {...tilt.handlers}>
            <motion.div className="stage" style={tilt.style}>
              {PILLARS.map((pillar, i) => (
                <Pillar
                  key={pillar.key}
                  pillar={pillar}
                  index={i}
                  position={pillar.featured ? 'front' : i === 0 ? 'left' : 'right'}
                  theme={theme}
                />
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
