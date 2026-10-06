export const COMPANY = {
  name: 'X Solvd',
  tagline: 'Software engineered for real-world problems',
  email: 'hello@xsolvd.example.com',
}

/**
 * `type` is either 'Product' (our own platforms, linked to their live site via `url`)
 * or 'Sample project' (representative delivery work, no public site — the card opens the contact form).
 */
export const PRODUCTS = [
  {
    slug: 'mentee-mentor',
    name: 'Mentee Mentor',
    type: 'Product',
    category: 'Education',
    status: 'Live',
    tagline: 'Structured mentorship at scale',
    blurb: 'Matches mentees with the right mentors and keeps every programme on track.',
    detail: 'A mentorship platform that pairs mentees with mentors by goals and expertise, then manages sessions, progress and feedback in one place.',
    highlights: ['Goal-based matching', 'Session scheduling and tracking', 'Progress reporting for programme leads'],
    url: 'https://mentee-mentor.example.com',
    accent: '#22d3ee',
    glyph: 'people',
  },
  {
    slug: 'famour',
    name: 'Famour',
    type: 'Product',
    category: 'Community',
    status: 'Live',
    tagline: 'Meaningful connections, built on trust',
    blurb: 'A platform for building genuine, family-centred connections.',
    detail: 'Famour connects people looking for serious, values-driven relationships, with verified profiles and privacy controls at its core.',
    highlights: ['Verified profiles', 'Privacy-first by design', 'Family involvement supported'],
    url: 'https://famour.example.com',
    accent: '#f472b6',
    glyph: 'heart',
  },
  {
    slug: 'import-export',
    name: 'Import & Export Management',
    type: 'Sample project',
    category: 'Trade & Logistics',
    status: 'Sample',
    tagline: 'End-to-end visibility for cross-border trade',
    blurb: 'Shipments, customs documents and supplier records managed in a single system.',
    detail: 'A trade operations system covering purchase orders, shipment tracking, customs documentation and landed-cost calculation across suppliers and markets.',
    highlights: ['Shipment and container tracking', 'Customs document generation', 'Landed-cost and margin reporting'],
    accent: '#fb923c',
    glyph: 'globe',
  },
  {
    slug: 'building-management',
    name: 'Building Management',
    type: 'Sample project',
    category: 'Property & Facilities',
    status: 'Sample',
    tagline: 'Every unit, tenant and work order in one view',
    blurb: 'Leasing, maintenance and billing for residential and commercial properties.',
    detail: 'A property management system that handles tenants and leases, maintenance requests, rent collection and occupancy reporting across multiple buildings.',
    highlights: ['Tenant and lease management', 'Maintenance work orders', 'Automated rent invoicing'],
    accent: '#4ade80',
    glyph: 'building',
  },
]

export const PRODUCT_TYPES = ['All', 'Product', 'Sample project']

export const STATS = [
  { value: PRODUCTS.filter((p) => p.type === 'Product').length, suffix: '', label: 'Live platforms' },
  { value: new Set(PRODUCTS.map((p) => p.category)).size, suffix: '', label: 'Industries served' },
  { value: 100, suffix: '%', label: 'In-house engineering' },
  { value: 24, suffix: 'h', label: 'Response time' },
]

export const PROCESS = [
  { step: '01', title: 'Discover', text: 'Define the problem, the users and what success looks like.' },
  { step: '02', title: 'Design', text: 'Shape the product and architecture before writing code.' },
  { step: '03', title: 'Build', text: 'Deliver in short, reviewable increments.' },
  { step: '04', title: 'Support', text: 'Operate, monitor and improve after launch.' },
]

export const VALUES = [
  { title: 'Ownership', text: 'We are accountable for outcomes, not hours.' },
  { title: 'Clarity', text: 'Simple solutions, clearly communicated.' },
  { title: 'Security', text: 'Data protection is a requirement from day one.' },
  { title: 'Quality', text: 'Software built to last, not just to launch.' },
]
