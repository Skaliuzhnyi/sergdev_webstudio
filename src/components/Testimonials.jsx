import { useState, useEffect, useRef } from 'react'
import { useTranslation } from 'react-i18next'
import { motion, AnimatePresence } from 'framer-motion'
import { FadeUp } from './Animate'
import { SectionLabel, SectionTitle } from './Section'

export default function Testimonials() {
  const { t } = useTranslation()
  const items = t('testi.items', { returnObjects: true })
  const [cur, setCur] = useState(0)
  const [dir, setDir] = useState(1)
  const timerRef = useRef(null)

  const go = (next) => {
    setDir(next > cur ? 1 : -1)
    setCur(next)
  }

  const prev = () => go(cur === 0 ? items.length - 1 : cur - 1)
  const next = () => go(cur === items.length - 1 ? 0 : cur + 1)

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setDir(1)
      setCur(c => (c + 1) % items.length)
    }, 5000)
    return () => clearInterval(timerRef.current)
  }, [items.length])

  const resetTimer = () => {
    clearInterval(timerRef.current)
    timerRef.current = setInterval(() => {
      setDir(1)
      setCur(c => (c + 1) % items.length)
    }, 5000)
  }

  const variants = {
    enter: (d) => ({ x: d > 0 ? 80 : -80, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (d) => ({ x: d > 0 ? -80 : 80, opacity: 0 }),
  }

  return (
    <section id="testimonials" style={{ padding: 'clamp(5rem,9vw,8rem) 0', background: 'var(--bg2)' }}>
      <div className="wrap">
        <SectionLabel>{t('testi.label')}</SectionLabel>
        <SectionTitle>{t('testi.title')}</SectionTitle>

        <div style={{ position: 'relative', marginTop: '2.5rem' }}>
          {/* Slider card */}
          <div style={{
            background: 'var(--surface)', border: '1px solid var(--border)',
            borderRadius: 'var(--rxl)', padding: 'clamp(2rem,5vw,3rem)',
            minHeight: 220, position: 'relative', overflow: 'hidden',
          }}>
            <AnimatePresence custom={dir} mode="wait">
              <motion.div key={cur} custom={dir}
                variants={variants}
                initial="enter" animate="center" exit="exit"
                transition={{ duration: .42, ease: [.16,1,.3,1] }}>
                {/* Stars */}
                <div style={{ color: 'var(--accent)', fontSize: '.9rem', letterSpacing: '.12em', marginBottom: '1.5rem' }}>
                  ★★★★★
                </div>
                {/* Quote */}
                <p style={{
                  color: 'var(--text)', fontSize: 'clamp(1rem,2vw,1.25rem)',
                  lineHeight: 1.75, fontStyle: 'italic', marginBottom: '2rem',
                  fontFamily: 'var(--ff)', fontWeight: 500,
                }}>
                  "{items[cur].t}"
                </p>
                {/* Author */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '.875rem' }}>
                  <div style={{
                    width: 48, height: 48, borderRadius: '50%',
                    background: 'var(--accent-dim)', border: '2px solid rgba(var(--accent-rgb),.3)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontFamily: 'var(--ff)', fontSize: '1rem', fontWeight: 700,
                    color: 'var(--accent)', flexShrink: 0,
                  }}>
                    {items[cur].i}
                  </div>
                  <div>
                    <div style={{ fontWeight: 700, fontSize: '1rem', fontFamily: 'var(--ff)' }}>{items[cur].n}</div>
                    <div style={{ fontSize: '.85rem', color: 'var(--text2)', marginTop: '.1rem' }}>{items[cur].r}</div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Controls row */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '1.5rem' }}>
            {/* Dots */}
            <div style={{ display: 'flex', gap: '.5rem', alignItems: 'center' }}>
              {items.map((_, i) => (
                <motion.button key={i}
                  onClick={() => { go(i); resetTimer() }}
                  animate={{ width: i === cur ? 28 : 8, background: i === cur ? 'var(--accent)' : 'var(--border2)' }}
                  transition={{ duration: .35 }}
                  style={{ height: 8, borderRadius: 999, border: 'none', cursor: 'pointer', padding: 0 }}
                />
              ))}
            </div>

            {/* Arrows */}
            <div style={{ display: 'flex', gap: '.75rem' }}>
              {[{ fn: () => { prev(); resetTimer() }, label: '←' },
                { fn: () => { next(); resetTimer() }, label: '→' }].map(({ fn, label }) => (
                <motion.button key={label} onClick={fn}
                  whileHover={{ scale: 1.08, borderColor: 'var(--accent)' }}
                  whileTap={{ scale: .95 }}
                  style={{
                    width: 44, height: 44, borderRadius: '50%',
                    background: 'var(--surface)', border: '1px solid var(--border)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '1.1rem', cursor: 'pointer', color: 'var(--text)',
                    transition: 'border-color .2s',
                  }}>
                  {label}
                </motion.button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
