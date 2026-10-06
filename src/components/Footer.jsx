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
          {PRODUCTS.map((p) => (
            <Link key={p.slug} to={`/products/${p.slug}`}>{p.name}</Link>
          ))}
        </div>

        <div className="foot-col">
          <h4>Company</h4>
          <Link to="/">Home</Link>
          <Link to="/services">Services</Link>
          <Link to="/products">Products</Link>
          <Link to="/about">About Us</Link>
          <Link to="/contact">Contact Us</Link>
        </div>

      </div>

      <div className="shell foot-bottom">
        <p className="foot-copy">© {new Date().getFullYear()} {COMPANY.name}. All rights reserved.</p>
        <a className="foot-copy" href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a>
      </div>
    </footer>
  )
}
