export const COMPANY = {
  name: 'Nexora',
  tagline: 'Engineering the Next Decade',
  email: 'hello@nexora.example.com',
  founded: 2011,
}

export const STATS = [
  { value: 500, suffix: '+', label: 'Clients worldwide' },
  { value: 1200, suffix: '+', label: 'Projects delivered' },
  { value: 15, suffix: '+', label: 'Years in market' },
  { value: 30, suffix: '+', label: 'Countries served' },
]

/**
 * Each product runs on its own site — replace `url` with the real address.
 * `featured` products are the ones surfaced on the home page.
 */
export const PRODUCTS = [
  {
    slug: 'vantacloud',
    name: 'VantaCloud',
    category: 'Infrastructure',
    since: 2014,
    status: 'Live',
    tagline: 'From commit to production in minutes',
    blurb: 'Managed cloud hosting and deployment pipelines that take a team from commit to production in minutes.',
    detail:
      'VantaCloud began as the deploy script we used on our own client work. It now runs build, release and rollback for teams that would rather ship features than maintain a pipeline — with preview environments on every pull request and a one-command rollback that has never taken more than nine seconds.',
    highlights: ['Preview environment per pull request', 'Zero-downtime blue/green releases', 'Rollback in under ten seconds'],
    metric: { value: '2,400+', label: 'teams deploying' },
    url: 'https://vantacloud.example.com',
    accent: '#22d3ee',
    glyph: 'cloud',
    featured: true,
  },
  {
    slug: 'pulsegrid',
    name: 'PulseGrid',
    category: 'Analytics',
    since: 2017,
    status: 'Live',
    tagline: 'Dashboards your whole company can read',
    blurb: 'Real-time dashboards that turn raw product events into decisions your whole company can read.',
    detail:
      'PulseGrid ingests product events and turns them into dashboards that a finance lead and a backend engineer can argue over using the same numbers. Every metric carries its definition, so nobody has to ask which query produced the chart.',
    highlights: ['Sub-second queries over billions of events', 'Every metric shows its own definition', 'Alerts that route to the owning team'],
    metric: { value: '8B', label: 'events processed daily' },
    url: 'https://pulsegrid.example.com',
    accent: '#4ade80',
    glyph: 'chart',
    featured: true,
  },
  {
    slug: 'axiom-ai',
    name: 'Axiom AI',
    category: 'Intelligence',
    since: 2021,
    status: 'Live',
    tagline: 'Document work, handled',
    blurb: 'Document intelligence and workflow automation built on large language models, tuned to your domain.',
    detail:
      'Axiom reads the contracts, invoices and claim forms that pile up in shared inboxes, extracts what matters and routes it into the systems you already run. It cites the page and line behind every extraction, so a reviewer can check its work in seconds.',
    highlights: ['Line-level citations on every extraction', 'Fine-tuned on your own document set', 'Human review queue built in'],
    metric: { value: '94%', label: 'straight-through processing' },
    url: 'https://axiom-ai.example.com',
    accent: '#a78bfa',
    glyph: 'spark',
    featured: true,
  },
  {
    slug: 'ledgerly',
    name: 'Ledgerly',
    category: 'Fintech',
    since: 2024,
    status: 'Live',
    tagline: 'Billing that survives the next pricing change',
    blurb: 'Billing, invoicing and revenue reporting designed for subscription businesses at any scale.',
    detail:
      'Ledgerly handles usage-based, seat-based and hybrid pricing without a rewrite every time the commercial team invents a new plan. Revenue recognition reports come out the far end in a shape your accountant already recognises.',
    highlights: ['Usage, seat and hybrid pricing models', 'Automated revenue recognition', 'Multi-currency, multi-entity'],
    metric: { value: '$1.4B', label: 'invoiced annually' },
    url: 'https://ledgerly.example.com',
    accent: '#fb923c',
    glyph: 'ledger',
    featured: true,
  },
  {
    slug: 'meridian',
    name: 'Meridian',
    category: 'Geospatial',
    since: 2019,
    status: 'Live',
    tagline: 'Every vehicle, every route, one map',
    blurb: 'Fleet tracking and route optimisation on a live map, built for operators running hundreds of vehicles.',
    detail:
      'Meridian came out of the logistics work that paid our bills in the early years. It plots live vehicle positions, replans routes around traffic and closures, and tells a dispatcher which promise is about to be broken before the customer calls to ask.',
    highlights: ['Live positions at one-second resolution', 'Route replanning around live conditions', 'Delay alerts before the customer notices'],
    metric: { value: '40M', label: 'km planned monthly' },
    url: 'https://meridian.example.com',
    accent: '#38bdf8',
    glyph: 'map',
    featured: false,
  },
  {
    slug: 'aegis',
    name: 'Aegis',
    category: 'Security',
    since: 2022,
    status: 'Live',
    tagline: 'Access control without the spreadsheet',
    blurb: 'Identity, access reviews and audit trails for teams that have outgrown a shared password manager.',
    detail:
      'Aegis maps who can reach what across your cloud accounts, databases and internal tools, then walks you through quarterly access reviews in an afternoon instead of a fortnight. Every grant and revocation lands in an immutable log your auditor can read.',
    highlights: ['Access map across cloud, data and internal tools', 'Quarterly reviews in an afternoon', 'Immutable, exportable audit log'],
    metric: { value: 'SOC 2', label: 'Type II certified' },
    url: 'https://aegis.example.com',
    accent: '#f472b6',
    glyph: 'shield',
    featured: false,
  },
  {
    slug: 'relay',
    name: 'Relay',
    category: 'Intelligence',
    since: 2025,
    status: 'Beta',
    tagline: 'Support that answers from your own docs',
    blurb: 'A support assistant grounded in your documentation, your tickets and your product — never in guesswork.',
    detail:
      'Relay drafts replies from your own help centre and ticket history, hands anything it is unsure about to a human, and learns from the correction. It is our newest platform and is in open beta while we get the escalation behaviour exactly right.',
    highlights: ['Answers grounded in your own content', 'Escalates rather than guesses', 'Learns from every human correction'],
    metric: { value: '61%', label: 'tickets deflected in beta' },
    url: 'https://relay.example.com',
    accent: '#facc15',
    glyph: 'chat',
    featured: false,
  },
]

export const FEATURED_PRODUCTS = PRODUCTS.filter((p) => p.featured)

export const PRODUCT_CATEGORIES = ['All', ...new Set(PRODUCTS.map((p) => p.category))]

export const STORY = [
  {
    year: '2011',
    title: 'Three engineers, one rented room',
    text: 'Nexora starts as a contract shop in Addis Ababa, building internal tools for logistics companies that had outgrown spreadsheets. The first office is one room above a print shop, rented month to month.',
  },
  {
    year: '2012',
    title: 'The rule that stuck',
    text: 'After a release goes badly wrong overnight, we start the Thursday demo: every second week, anyone can show anything, finished or not. Fourteen years later it is still the only meeting nobody is allowed to skip.',
  },
  {
    year: '2014',
    title: 'The first product',
    text: 'A deployment tool we wrote for ourselves becomes VantaCloud after four clients ask to license it. We stop billing by the hour and start supporting software we own.',
  },
  {
    year: '2016',
    title: 'Turning down the money',
    text: 'A fund offers a term sheet that would have doubled headcount in a year. We pass, and grow on revenue instead. It is the slowest decision we ever made and the one we have never regretted.',
  },
  {
    year: '2017',
    title: 'Crossing borders',
    text: 'Offices open in Nairobi and Dubai. PulseGrid ships to its first twenty customers, and the team passes fifty people without losing the weekly demo.',
  },
  {
    year: '2019',
    title: 'Back to the warehouses',
    text: 'The logistics work that funded the early years becomes a product of its own. Meridian launches with three fleet operators who had been running on our custom code for years.',
  },
  {
    year: '2021',
    title: 'Betting on AI',
    text: 'A small research group spends a year on document understanding with no deadline and no customer. That group becomes Axiom AI, now our fastest-growing platform.',
  },
  {
    year: '2022',
    title: 'Putting our own house in order',
    text: 'Preparing for SOC 2 exposes how much of our own access control lived in spreadsheets. The tooling we build to fix it ships to customers as Aegis the following spring.',
  },
  {
    year: '2024',
    title: 'Four platforms, one studio',
    text: 'Ledgerly completes the commercial side of the suite. Nexora passes 500 clients across 30 countries — still shipping every second Thursday.',
  },
  {
    year: '2025',
    title: 'Relay enters beta',
    text: 'Our sixth platform opens to a few hundred support teams, built on the grounding work that came out of Axiom. We keep it in beta until the escalation behaviour is right.',
  },
  {
    year: '2026',
    title: 'Fifteen years in',
    text: 'Seven platforms, three studios, no outside capital. The Thursday demo runs at 4pm, and the room is a great deal bigger than it was above the print shop.',
  },
]

export const VALUES = [
  { title: 'Own the outcome', text: 'We measure ourselves on what ships and stays up, not on hours logged.' },
  { title: 'Small teams, full context', text: 'Every engineer talks to users. No layer of translation between the problem and the fix.' },
  { title: 'Secure by default', text: 'Encryption, audit trails and least privilege are day-one requirements, not a later phase.' },
  { title: 'Show the work', text: 'Unfinished work in front of people beats a polished demo of something nobody needs.' },
]

export const LEADERSHIP = [
  { name: 'Selam Girma', role: 'Co-founder & CEO', note: 'Wrote the first line of what became VantaCloud. Still reviews pull requests on Fridays.', initials: 'SG' },
  { name: 'Daniel Okoye', role: 'Co-founder & CTO', note: 'Built the logistics work that funded the first four years, and the Meridian engine that grew out of it.', initials: 'DO' },
  { name: 'Hana Tesfaye', role: 'Chief Product Officer', note: 'Joined as employee number nine. Runs the Thursday demo and protects it from the calendar.', initials: 'HT' },
  { name: 'Marcus Reed', role: 'VP Engineering', note: 'Led the SOC 2 programme that turned into Aegis. Believes every alert should name an owner.', initials: 'MR' },
]

export const OFFICES = [
  { city: 'Addis Ababa', role: 'Headquarters', since: 2011, team: 'Engineering · Product · Support' },
  { city: 'Nairobi', role: 'Engineering studio', since: 2017, team: 'Platform · Data' },
  { city: 'Dubai', role: 'Commercial hub', since: 2017, team: 'Sales · Partnerships' },
]
