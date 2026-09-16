import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { COMPANY, PRODUCTS } from '../data'
import { CheckIcon, ClockIcon, MailIcon, PinIcon } from './Icons'
import Reveal from './Reveal'

const EMPTY = { name: '', email: '', company: '', interest: PRODUCTS[0].name, message: '' }

function validate(values) {
  const errors = {}
  if (!values.name.trim()) errors.name = 'Please tell us your name.'
  if (!values.email.trim()) errors.email = 'An email address is required.'
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) errors.email = 'That email address looks incomplete.'
  if (values.message.trim().length < 20) errors.message = 'A little more detail helps — 20 characters minimum.'
  return errors
}

export default function Contact() {
  const [values, setValues] = useState(EMPTY)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle') // idle | sending | sent

  const update = (field) => (event) => {
    setValues((prev) => ({ ...prev, [field]: event.target.value }))
    setErrors((prev) => (prev[field] ? { ...prev, [field]: undefined } : prev))
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    const found = validate(values)
    setErrors(found)
    if (Object.keys(found).length > 0) return

    setStatus('sending')
    // No backend is wired up yet — POST to your own endpoint here.
    await new Promise((resolve) => setTimeout(resolve, 900))
    setStatus('sent')
  }

  const reset = () => {
    setValues(EMPTY)
    setErrors({})
    setStatus('idle')
  }

  const fieldClass = (field) => `field${errors[field] ? ' invalid' : ''}`

  return (
    <section className="section" id="contact">
      <div className="shell contact-grid">
        <Reveal>
          <p className="eyebrow">Contact</p>
          <h2>Tell us what you&rsquo;re building</h2>
          <p className="lead">
            Send us the problem in your own words. An engineer — not a sales rep — reads every message and
            replies within one business day.
          </p>
          <ul className="contact-list">
            <li>
              <span className="ico"><MailIcon /></span>
              <span><strong>Email</strong>{COMPANY.email}</span>
            </li>
            <li>
              <span className="ico"><PinIcon /></span>
              <span><strong>Studios</strong>Addis Ababa · Nairobi · Dubai</span>
            </li>
            <li>
              <span className="ico"><ClockIcon /></span>
              <span><strong>Response time</strong>Within one business day</span>
            </li>
          </ul>
        </Reveal>

        <Reveal delay={0.12}>
          <div className="form-card">
            <AnimatePresence mode="wait" initial={false}>
              {status === 'sent' ? (
                <motion.div
                  key="success"
                  className="success"
                  initial={{ opacity: 0, scale: 0.94 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.94 }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                >
                  <motion.div
                    className="success-ring"
                    initial={{ rotate: -90, scale: 0.6 }}
                    animate={{ rotate: 0, scale: 1 }}
                    transition={{ type: 'spring', stiffness: 220, damping: 16 }}
                  >
                    <CheckIcon />
                  </motion.div>
                  <h3>Message received</h3>
                  <p>Thanks, {values.name.split(' ')[0]}. We&rsquo;ll be in touch at {values.email} shortly.</p>
                  <button type="button" className="btn btn-ghost" onClick={reset}>Send another</button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  onSubmit={handleSubmit}
                  noValidate
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="form-row">
                    <div className={fieldClass('name')}>
                      <label htmlFor="name">Full name</label>
                      <input
                        id="name"
                        value={values.name}
                        onChange={update('name')}
                        placeholder="Amira Bekele"
                        aria-invalid={Boolean(errors.name)}
                      />
                      {errors.name && <p className="error">{errors.name}</p>}
                    </div>
                    <div className={fieldClass('email')}>
                      <label htmlFor="email">Work email</label>
                      <input
                        id="email"
                        type="email"
                        value={values.email}
                        onChange={update('email')}
                        placeholder="you@company.com"
                        aria-invalid={Boolean(errors.email)}
                      />
                      {errors.email && <p className="error">{errors.email}</p>}
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="field">
                      <label htmlFor="company">Company</label>
                      <input id="company" value={values.company} onChange={update('company')} placeholder="Optional" />
                    </div>
                    <div className="field">
                      <label htmlFor="interest">Interested in</label>
                      <select id="interest" value={values.interest} onChange={update('interest')}>
                        {PRODUCTS.map((p) => <option key={p.name}>{p.name}</option>)}
                        <option>Something custom</option>
                      </select>
                    </div>
                  </div>

                  <div className={fieldClass('message')}>
                    <label htmlFor="message">How can we help?</label>
                    <textarea
                      id="message"
                      value={values.message}
                      onChange={update('message')}
                      placeholder="We run a fleet of 200 vehicles and our dispatch data lives in four spreadsheets…"
                      aria-invalid={Boolean(errors.message)}
                    />
                    {errors.message && <p className="error">{errors.message}</p>}
                  </div>

                  <button type="submit" className="btn btn-primary" disabled={status === 'sending'}>
                    {status === 'sending' ? 'Sending…' : 'Send message'}
                  </button>
                  <p className="form-note">We only use your details to answer this enquiry.</p>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
