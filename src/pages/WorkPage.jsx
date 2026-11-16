import { Link, useParams } from 'react-router-dom'
import { PILLARS, accentFor } from '../data'
import { useTheme } from '../hooks'
import PageHeader from '../components/PageHeader'
import PillarArt from '../components/PillarArt'
import Reveal from '../components/Reveal'
import { ArrowLeft, ArrowUpRight } from '../components/Icons'
import NotFound from './NotFound'

/** The projects for one discipline, opened from the back of its card on the home page. */
export default function WorkPage() {
  const { key } = useParams()
  const [theme] = useTheme()
  const pillar = PILLARS.find((p) => p.key === key)
  if (!pillar) return <NotFound />

  const others = PILLARS.filter((p) => p.key !== key)

  return (
    <div style={{ '--accent': accentFor(pillar, theme) }}>
      <PageHeader
        eyebrow="Projects"
        title={<>{pillar.title}<br /><span className="gradient-text">projects</span></>}
        lead={pillar.lead}
      >
        <span className="work-art" aria-hidden="true"><PillarArt name={pillar.art} /></span>
      </PageHeader>

      <section className="section section-tight">
        <div className="shell">
          <Reveal>
            <Link className="back-link" to="/"><ArrowLeft /> Back to home</Link>
          </Reveal>
          <div className="work-list">
            {pillar.projects.map((project, i) => {
              const body = (
                <>
                  <span className="work-num">{String(i + 1).padStart(2, '0')}</span>
                  <div>
                    <p className="card-cat">{project.category}</p>
                    <h3>{project.name}</h3>
                    <p>{project.text}</p>
                  </div>
                  <div className="work-side">
                    <span className={`chip${project.status === 'Sample' ? ' chip-sample' : ''}`}>{project.status}</span>
                    {project.slug && <ArrowUpRight />}
                  </div>
                </>
              )
              return (
                <Reveal key={project.name} delay={i * 0.06}>
                  {project.slug
                    ? <Link className="work-item" to={`/products/${project.slug}`}>{body}</Link>
                    : <div className="work-item">{body}</div>}
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      <section className="section band">
        <div className="shell">
          <Reveal>
            <p className="eyebrow">More work</p>
            <h2>Other disciplines</h2>
            <div className="work-switch">
              {others.map((p) => (
                <Link className="btn btn-ghost" key={p.key} to={`/work/${p.key}`}>{p.title} <ArrowUpRight /></Link>
              ))}
              <Link className="btn btn-primary" to="/contact">Start a project</Link>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  )
}
