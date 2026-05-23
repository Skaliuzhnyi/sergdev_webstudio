import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import CountUp from 'react-countup'
import { useAnimate } from '../hooks/useAnimate'

const ease = [0.16, 1, 0.3, 1]

export default function Hero() {
  const { t, i18n } = useTranslation()
  const lang = i18n.language
  const isUk = lang === 'uk'

  const [statsRef, statsVisible] = useAnimate({ threshold: 0.5 })
  const [counted, setCounted] = useState(false)
  useEffect(() => { if (statsVisible && !counted) setCounted(true) }, [statsVisible, counted])

  /* ─── Responsive h1 sizing that fits 1 screen ───────────────────────
     Goal: 3 lines, no overflow on any common viewport.
     Latin (Syne) is narrower → can be bigger.
     Cyrillic (Unbounded) chars are wider → smaller.
     Formula: clamp(min, viewport%, max)
     Tested breakpoints: 320px / 375px / 414px / 768px / 1280px+
  ─────────────────────────────────────────────────────────────────── */
  const h1Size  = isUk ? 'clamp(2.25rem, 6.5vw, 5.5rem)' : 'clamp(2.5rem, 7.5vw, 6.5rem)'
  const h1Lead  = isUk ? 1.08 : 1.0
  const h1Track = isUk ? '-.025em' : '-.048em'
  const h1Font  = isUk ? "'Unbounded', sans-serif" : "'Syne', sans-serif"

  const chips = [
    { icon: '⚡', label: t('hero.c1') },
    { icon: '📈', label: t('hero.c2') },
    { icon: '🔒', label: t('hero.c3') },
  ]
  const stats = [
    { end: 22,  suffix: '+', label: t('hero.s1') },
    { end: 3,   suffix: '+', label: t('hero.s2') },
    { end: 100, suffix: '%', label: t('hero.s3') },
  ]

  return (
    <section id="hero" style={{
      minHeight: '100svh',
      display: 'flex',
      alignItems: 'center',
      paddingTop: 'var(--nav)',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Background orbs */}
      <div style={{ position:'absolute', inset:0, pointerEvents:'none', overflow:'hidden' }}>
        <motion.div
          animate={{ y:[0,-30,0], scale:[1,1.05,1] }}
          transition={{ duration:9, repeat:Infinity, ease:'easeInOut' }}
          style={{ position:'absolute', width:640, height:640, background:'var(--accent)', borderRadius:'50%', filter:'blur(88px)', opacity:.08, top:-140, right:-180 }}
        />
        <motion.div
          animate={{ y:[0,28,0], scale:[1,1.04,1] }}
          transition={{ duration:12, repeat:Infinity, ease:'easeInOut', delay:2 }}
          style={{ position:'absolute', width:460, height:460, background:'#6b9dff', borderRadius:'50%', filter:'blur(88px)', opacity:.07, bottom:-80, left:-120 }}
        />
      </div>

      <div className="wrap" style={{
        position: 'relative', zIndex: 1, width: '100%',
        paddingTop:    'clamp(2rem, 6vw, 4rem)',
        paddingBottom: 'clamp(4rem, 8vw, 6rem)',
      }}>
        {/* Status tag */}
        <motion.div
          initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }}
          transition={{ duration:.7, ease }}
          style={{ display:'inline-flex', alignItems:'center', gap:'.5rem', background:'var(--bg3)', border:'1px solid var(--border2)', borderRadius:999, padding:'.35rem 1.125rem', fontSize:'.78rem', color:'var(--text2)', marginBottom:'1.5rem' }}>
          <motion.span
            animate={{ opacity:[1,.3,1] }}
            transition={{ duration:1.8, repeat:Infinity }}
            style={{ width:6, height:6, background:'var(--accent)', borderRadius:'50%', display:'inline-block' }}
          />
          {t('hero.tag')}
        </motion.div>

        {/* H1 — fits 1 viewport on all breakpoints */}
        <h1 style={{
          fontFamily:    h1Font,
          fontSize:      h1Size,
          fontWeight:    800,
          lineHeight:    h1Lead,
          letterSpacing: h1Track,
          marginBottom:  'clamp(1rem,2.5vw,1.75rem)',
        }}>
          {['l1','l2','l3'].map((k, i) => (
            <motion.span key={k}
              initial={{ opacity:0, y:36 }}
              animate={{ opacity:1, y:0 }}
              transition={{ duration:.72, delay:.08 + i*.11, ease }}
              style={{ display:'block', color: k==='l2' ? 'var(--accent)' : 'inherit' }}>
              {t(`hero.${k}`)}
            </motion.span>
          ))}
        </h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity:0, y:22 }}
          animate={{ opacity:1, y:0 }}
          transition={{ duration:.68, delay:.42, ease }}
          style={{ fontSize:'clamp(.9375rem,1.8vw,1.1875rem)', color:'var(--text2)', maxWidth:520, lineHeight:1.72, marginBottom:'clamp(1.5rem,3vw,2.5rem)', fontWeight:300 }}
          dangerouslySetInnerHTML={{ __html: t('hero.sub') }}
        />

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity:0, y:18 }}
          animate={{ opacity:1, y:0 }}
          transition={{ duration:.62, delay:.52, ease }}
          style={{ display:'flex', gap:'.875rem', flexWrap:'wrap', marginBottom:'clamp(1.5rem,3vw,2.5rem)' }}>
          <Link to="/contact" className="btn ba">{t('hero.cta1')} →</Link>
          <Link to="/projects" className="btn bg">{t('hero.cta2')}</Link>
        </motion.div>

        {/* Chips */}
        <motion.div
          initial={{ opacity:0 }} animate={{ opacity:1 }}
          transition={{ duration:.55, delay:.6 }}
          style={{ display:'flex', gap:'.5rem', flexWrap:'wrap', marginBottom:'clamp(2rem,4vw,3.5rem)' }}>
          {chips.map((c,i) => (
            <motion.span key={i}
              initial={{ opacity:0, scale:.9 }}
              animate={{ opacity:1, scale:1 }}
              transition={{ delay:.65+i*.07, ease }}
              style={{ display:'inline-flex', alignItems:'center', gap:'.35rem', background:'var(--bg3)', border:'1px solid var(--border)', borderRadius:999, padding:'.28rem .8rem', fontSize:'.78rem', color:'var(--text2)' }}>
              {c.icon} {c.label}
            </motion.span>
          ))}
        </motion.div>

        {/* Stats with counter animation */}
        <div ref={statsRef} style={{ display:'flex', gap:'clamp(1.25rem,4vw,3rem)', flexWrap:'wrap' }}>
          {stats.map((s,i) => (
            <motion.div key={i}
              initial={{ opacity:0, y:18 }}
              animate={{ opacity:1, y:0 }}
              transition={{ delay:.78+i*.11, ease }}
              style={{ position:'relative', paddingBottom:10 }}>
              <div style={{ fontFamily: isUk ? "'Unbounded',sans-serif" : "'Syne',sans-serif", fontSize:'clamp(1.625rem,3.5vw,2.25rem)', fontWeight:800, lineHeight:1 }}>
                {counted
                  ? <CountUp end={s.end} duration={1.6} delay={i*0.14} suffix={s.suffix}/>
                  : `0${s.suffix}`}
              </div>
              <motion.div
                initial={{ width:0 }}
                animate={{ width: counted ? '100%' : 0 }}
                transition={{ duration:.85, delay:.18+i*.14, ease }}
                style={{ position:'absolute', bottom:0, left:0, height:2, background:'var(--accent)' }}
              />
              <span style={{ fontSize:'.75rem', color:'var(--text2)', letterSpacing:'.05em', display:'block', marginTop:'.8rem' }}>
                {s.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Scroll hint — clear of content */}
      <motion.div
        animate={{ y:[0,9,0] }}
        transition={{ duration:2.5, repeat:Infinity, ease:'easeInOut' }}
        style={{ position:'absolute', bottom:'2.25rem', left:'50%', transform:'translateX(-50%)', display:'flex', flexDirection:'column', alignItems:'center', gap:'.4rem', color:'var(--text3)', fontSize:'.62rem', letterSpacing:'.1em', textTransform:'uppercase', pointerEvents:'none' }}>
        <div style={{ width:1, height:40, background:'linear-gradient(to bottom,var(--text3),transparent)' }}/>
        <span>scroll</span>
      </motion.div>
    </section>
  )
}
