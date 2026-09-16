import { Link } from 'react-router-dom'
import PageHeader from '../components/PageHeader'

export default function NotFound() {
  return (
    <PageHeader
      eyebrow="404"
      title={<>This page<br /><span className="gradient-text">doesn&rsquo;t exist</span></>}
      lead="The link may be out of date. Everything we run is one of these two places."
    >
      <div className="cta-actions" style={{ justifyContent: 'flex-start', marginTop: '28px' }}>
        <Link className="btn btn-primary" to="/products">Our products</Link>
        <Link className="btn btn-ghost" to="/">Back home</Link>
      </div>
    </PageHeader>
  )
}
