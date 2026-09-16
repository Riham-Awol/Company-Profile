import { useEffect, useRef, useState } from 'react'
import { animate, useInView } from 'framer-motion'
import { STATS } from '../data'
import { useReducedMotion } from '../hooks'
import Reveal from './Reveal'

/** Counts from 0 up to `value` the first time the row is scrolled into view. */
function Counter({ value, suffix, play }) {
  const [shown, setShown] = useState(play ? 0 : value)

  useEffect(() => {
    if (!play) return undefined
    const controls = animate(0, value, {
      duration: 1.7,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => setShown(Math.round(v)),
    })
    return () => controls.stop()
  }, [play, value])

  return <b>{shown.toLocaleString()}{suffix}</b>
}

export default function Stats() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.4 })
  const reduced = useReducedMotion()

  return (
    <div className="shell" style={{ marginTop: '-46px', position: 'relative', zIndex: 5 }}>
      <Reveal>
        <div className="stats" ref={ref}>
          {STATS.map((stat) => (
            <div className="stat" key={stat.label}>
              <Counter value={stat.value} suffix={stat.suffix} play={inView && !reduced} />
              <small>{stat.label}</small>
            </div>
          ))}
        </div>
      </Reveal>
    </div>
  )
}
