import { Link } from 'react-router-dom'
import { COMPANY, PRODUCTS } from '../data'

export default function Footer() {
  return (
    <footer>
      <div className="shell foot-top">
        <div className="foot-brand">
          <Link className="brand" to="/">
            <span className="brand-mark">N</span>
            {COMPANY.name.toUpperCase()}
          </Link>
          <p>{COMPANY.tagline}. Independent since {COMPANY.founded}.</p>
        </div>

        <div className="foot-col">
          <h4>Products</h4>
          {PRODUCTS.map((p) => (
            <a key={p.slug} href={p.url} target="_blank" rel="noopener noreferrer">{p.name}</a>
          ))}
        </div>

        <div className="foot-col">
          <h4>Company</h4>
          <Link to="/products">All products</Link>
          <Link to="/story">Our story</Link>
          <Link to="/#contact">Contact</Link>
        </div>

        <div className="foot-col">
          <h4>Studios</h4>
          <span>Addis Ababa</span>
          <span>Nairobi</span>
          <span>Dubai</span>
        </div>
      </div>

      <div className="shell foot-bottom">
        <p className="foot-copy">© {new Date().getFullYear()} {COMPANY.name}. All rights reserved.</p>
        <a className="foot-copy" href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a>
      </div>
    </footer>
  )
}
