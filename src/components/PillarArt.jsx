/**
 * Sample illustrations for the three disciplines. Drawn as inline SVG so they follow the
 * theme: `--accent` comes from the card, the rest from the site palette.
 */
const frame = { viewBox: '0 0 360 200', preserveAspectRatio: 'xMidYMid slice', role: 'img' }

function Innovation() {
  const nodes = [[52, 44], [308, 40], [40, 156], [318, 150], [180, 22], [180, 182]]
  return (
    <svg {...frame} aria-label="A processor linked to a network of connected nodes">
      <g className="art-line" opacity="0.55">
        <path d="M150 84H96V44H52M210 84h54V40h44M150 116H88v40H40M210 116h62v34h46M180 70V22M180 130v52" />
      </g>
      <g className="art-flow">
        <path d="M150 84H96V44H52M210 84h54V40h44M150 116H88v40H40M210 116h62v34h46M180 70V22M180 130v52" />
      </g>
      <circle className="art-orbit" cx="180" cy="100" r="62" />
      <rect className="art-solid" x="150" y="70" width="60" height="60" rx="10" />
      <rect className="art-accent-line" x="162" y="82" width="36" height="36" rx="5" />
      <path className="art-accent-line" d="M172 100h16M180 92v16" />
      {nodes.map(([cx, cy], i) => (
        <g key={i}>
          <circle className="art-pulse" cx={cx} cy={cy} r="11" style={{ animationDelay: `${i * 0.45}s` }} />
          <circle className="art-node" cx={cx} cy={cy} r="5" />
        </g>
      ))}
    </svg>
  )
}

function Software() {
  const lines = [
    [0, 46, 'a'], [14, 78, 'i'], [14, 58, 'm'], [28, 92, 'a'], [28, 50, 'i'], [14, 70, 'm'], [0, 34, 'a'],
  ]
  return (
    <svg {...frame} aria-label="A code editor beside a mobile app screen">
      <rect className="art-solid" x="34" y="26" width="236" height="150" rx="12" />
      <path className="art-line" d="M34 52h236" />
      <circle className="art-dot" cx="52" cy="39" r="4" />
      <circle className="art-dot" cx="66" cy="39" r="4" opacity="0.6" />
      <circle className="art-dot" cx="80" cy="39" r="4" opacity="0.35" />
      {lines.map(([indent, width, tone], i) => (
        <g key={i}>
          <rect className="art-mute" x="48" y={66 + i * 15} width="8" height="5" rx="2.5" />
          <rect className={`art-code art-code-${tone}`} x={68 + indent} y={66 + i * 15} width={width} height="5" rx="2.5" />
        </g>
      ))}
      <rect className="art-cursor" x="108" y="154" width="2.5" height="11" />
      <rect className="art-solid art-phone" x="252" y="62" width="76" height="126" rx="13" />
      <rect className="art-accent-fill" x="264" y="82" width="52" height="34" rx="7" />
      <rect className="art-mute" x="264" y="126" width="52" height="6" rx="3" />
      <rect className="art-mute" x="264" y="140" width="34" height="6" rx="3" />
      <rect className="art-accent-line" x="264" y="158" width="52" height="16" rx="8" />
      <rect className="art-mute" x="280" y="69" width="20" height="4" rx="2" />
    </svg>
  )
}

function Design() {
  return (
    <svg {...frame} aria-label="A technical drawing of a product with dimension lines">
      <g className="art-grid">
        <path d="M0 40h360M0 80h360M0 120h360M0 160h360M40 0v200M80 0v200M120 0v200M160 0v200M200 0v200M240 0v200M280 0v200M320 0v200" />
      </g>
      <g className="art-float">
        <path className="art-face-top" d="m180 44 78 38-78 38-78-38 78-38Z" />
        <path className="art-face-left" d="M102 82v52l78 38v-52l-78-38Z" />
        <path className="art-face-right" d="M258 82v52l-78 38v-52l78-38Z" />
        <ellipse className="art-accent-line" cx="180" cy="82" rx="26" ry="12.5" />
        <ellipse className="art-accent-fill" cx="180" cy="80" rx="13" ry="6.2" />
        <path className="art-accent-line" d="m206 141 34-16.5M206 151l34-16.5" />
        <circle className="art-node" cx="126" cy="128" r="4" />
      </g>
      <g className="art-dim">
        <path d="M84 82v52M78 82h12M78 134h12" />
        <path d="m102 180 78 14M102 174v12M180 188v12" transform="translate(0 -8)" />
        <path d="M180 44V14M258 82V52" strokeDasharray="3 5" />
        <path d="m180 22 78 38" />
      </g>
      <text className="art-label" x="58" y="112">64</text>
      <text className="art-label" x="126" y="196">120</text>
      <text className="art-label" x="226" y="32">R12</text>
    </svg>
  )
}

const ART = { innovation: Innovation, software: Software, design: Design }

export default function PillarArt({ name }) {
  const Art = ART[name] ?? Innovation
  return <Art />
}
