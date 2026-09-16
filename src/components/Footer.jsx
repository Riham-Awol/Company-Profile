import { COMPANY, PRODUCTS } from '../data'

export default function Footer() {
  return (
    <footer>
      <div className="shell foot-inner">
        <a className="brand" href="#top">
          <span className="brand-mark">N</span>
          {COMPANY.name.toUpperCase()}
        </a>
        <nav className="foot-links">
          {PRODUCTS.map((p) => (
            <a key={p.name} href={p.url} target="_blank" rel="noopener noreferrer">{p.name}</a>
          ))}
        </nav>
        <p className="foot-copy">© {new Date().getFullYear()} {COMPANY.name}. All rights reserved.</p>
      </div>
    </footer>
  )
}
