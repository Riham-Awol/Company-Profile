import { Link } from 'react-router-dom'
import { COMPANY, PRODUCTS } from '../data'

export default function Footer() {
  return (
    <footer>
      <div className="shell foot-top">
        <div className="foot-brand">
          <Link className="brand" to="/">
            <span className="brand-mark">X</span>
            {COMPANY.name.toUpperCase()}
          </Link>
          <p>{COMPANY.tagline}.</p>
        </div>

        <div className="foot-col">
          <h4>Products</h4>
          {PRODUCTS.filter((p) => p.url).map((p) => (
            <a key={p.slug} href={p.url} target="_blank" rel="noopener noreferrer">{p.name}</a>
          ))}
        </div>

        <div className="foot-col">
          <h4>Company</h4>
          <Link to="/products">Our work</Link>
          <Link to="/about">About</Link>
          <Link to="/#contact">Contact</Link>
        </div>

      </div>

      <div className="shell foot-bottom">
        <p className="foot-copy">© {new Date().getFullYear()} {COMPANY.name}. All rights reserved.</p>
        <a className="foot-copy" href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a>
      </div>
    </footer>
  )
}
