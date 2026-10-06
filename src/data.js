export const COMPANY = {
  name: 'X Solvd',
  tagline: 'Software engineered for real-world problems',
  email: 'hello@xsolvd.example.com',
}

/** Background photos (Unsplash, free licence). Swap any URL for your own image in /public. */
const photo = (id) => `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=1920&q=70`

export const IMAGES = {
  home: photo('1451187580459-43490279c0fa'),
  services: photo('1518770660439-4636190af475'),
  products: photo('1460925895917-afdab827c52f'),
  about: photo('1522071820081-009f0129c71c'),
  contact: photo('1497366216548-37526070297c'),
}

/**
 * `type` is either 'Product' (our own platforms, with a `url` to the live site)
 * or 'Sample project' (representative delivery work with no public site).
 * Every entry gets its own page at /products/:slug.
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
    features: [
      { title: 'Smart matching', text: 'Pairs mentees and mentors by goals, skills and availability.' },
      { title: 'Session management', text: 'Scheduling, reminders and shared notes for every meeting.' },
      { title: 'Progress tracking', text: 'Milestones and feedback that show how each pairing is going.' },
      { title: 'Programme insights', text: 'Reporting for coordinators running cohorts at scale.' },
    ],
    audience: ['Universities and schools', 'Corporate learning teams', 'Professional associations'],
    url: 'https://mentee-mentor.example.com',
    image: photo('1523240795612-9a054b0db644'),
    accent: '#22d3ee',
    accentLight: '#9a6b3f',
    glyph: 'people',
  },
  {
    slug: 'famour',
    name: 'Famour',
    type: 'Product',
    category: 'Matrimonial',
    status: 'Live',
    tagline: 'Meaningful connections, built on trust',
    blurb: 'A matrimonial platform for serious, family-centred relationships.',
    detail: 'Famour helps people find a life partner through verified profiles, compatibility-based discovery and privacy controls designed around family values.',
    highlights: ['Verified profiles', 'Privacy-first by design', 'Family involvement supported'],
    features: [
      { title: 'Verified profiles', text: 'Identity checks so members know who they are talking to.' },
      { title: 'Compatibility search', text: 'Filters for values, background, location and preferences.' },
      { title: 'Privacy controls', text: 'Members decide who sees their photos and details.' },
      { title: 'Family involvement', text: 'Optional access for family members to support the search.' },
    ],
    audience: ['Individuals seeking marriage', 'Families supporting the search'],
    url: 'https://matrimonial-website-2xkg.onrender.com/#/o/famour',
    image: photo('1519741497674-611481863552'),
    accent: '#f472b6',
    accentLight: '#a4505a',
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
    features: [
      { title: 'Order management', text: 'Purchase and sales orders linked to every shipment.' },
      { title: 'Shipment tracking', text: 'Container and consignment status from origin to warehouse.' },
      { title: 'Customs documents', text: 'Invoices, packing lists and certificates generated automatically.' },
      { title: 'Cost reporting', text: 'Landed cost, duties and margin per product and shipment.' },
    ],
    audience: ['Importers and exporters', 'Freight forwarders', 'Wholesale distributors'],
    image: photo('1494412574643-ff11b0a5c1c3'),
    accent: '#fb923c',
    accentLight: '#b5763a',
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
    features: [
      { title: 'Tenants and leases', text: 'Contracts, renewals and documents in one record per unit.' },
      { title: 'Maintenance', text: 'Requests, work orders and contractor assignment with status tracking.' },
      { title: 'Billing', text: 'Automated rent invoices, payment tracking and reminders.' },
      { title: 'Occupancy reporting', text: 'Vacancy, arrears and income across every building.' },
    ],
    audience: ['Property owners', 'Facility managers', 'Real estate companies'],
    image: photo('1486406146926-c627a92ad1ab'),
    accent: '#4ade80',
    accentLight: '#6b7a4b',
    glyph: 'building',
  },
]

/** A product's accent colour for the current theme — the light theme uses warmer, earthy tones. */
export const accentFor = (product, theme) => (theme === 'light' ? product.accentLight : product.accent)

export const PRODUCT_TYPES = ['All', 'Product', 'Sample project']

export const SERVICES = [
  {
    title: 'Custom Software Development',
    text: 'Business systems built around your processes, not the other way round.',
    tags: ['ERP', 'CRM', 'Workflow automation'],
    glyph: 'code',
  },
  {
    title: 'Web & Mobile Applications',
    text: 'Responsive web platforms and mobile apps for customers and staff.',
    tags: ['Web apps', 'iOS', 'Android'],
    glyph: 'device',
  },
  {
    title: 'UI/UX Design',
    text: 'Clear, accessible interfaces designed and tested with real users.',
    tags: ['Research', 'Prototyping', 'Design systems'],
    glyph: 'pen',
  },
  {
    title: 'Cloud & DevOps',
    text: 'Secure hosting, automated deployments and monitoring.',
    tags: ['Cloud hosting', 'CI/CD', 'Monitoring'],
    glyph: 'cloud',
  },
  {
    title: 'Systems Integration',
    text: 'Connect existing tools, payment gateways and third-party APIs.',
    tags: ['APIs', 'Payments', 'Data migration'],
    glyph: 'link',
  },
  {
    title: 'Support & Maintenance',
    text: 'Ongoing updates, security patches and performance improvements.',
    tags: ['SLAs', 'Security updates', 'Enhancements'],
    glyph: 'shield',
  },
]

export const STATS = [
  { value: PRODUCTS.filter((p) => p.type === 'Product').length, suffix: '', label: 'Live platforms' },
  { value: SERVICES.length, suffix: '', label: 'Core services' },
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
