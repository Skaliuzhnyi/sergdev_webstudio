import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { FadeUp, ScaleIn } from './Animate'
import i18n from "i18next";

export default function FinalCta() {
  const { t } = useTranslation()
  const isUk = i18n.language === 'uk'

  return (
    <section id="fcta" style={{ padding:'clamp(4.5rem,8vw,8rem) 0', position:'relative', overflow:'hidden' }}>
      <motion.div animate={{ scale:[1,1.08,1], opacity:[.05,.09,.05] }} transition={{ duration:6, repeat:Infinity }}
        style={{ position:'absolute', top:'50%', left:'50%', transform:'translate(-50%,-50%)', width:600, height:600, background:'var(--accent)', borderRadius:'50%', filter:'blur(100px)', pointerEvents:'none' }}/>
      <div className="wrap">
        <div style={{ textAlign:'center', maxWidth:740, margin:'0 auto', position:'relative', zIndex:1 }}>
          <FadeUp>
            <span style={{ fontSize:'.75rem', fontWeight:700, letterSpacing:'.15em', color:'var(--accent)', textTransform:'uppercase', display:'block', marginBottom:'1.5rem' }}>
              {t('fcta.label')}
            </span>
          </FadeUp>
          <FadeUp delay={0.05}>
            <h2 style={{ fontFamily: isUk ? "'Unbounded', sans-serif" : "'Syne', sans-serif", fontSize:'clamp(1.875rem,4.5vw,3.5rem)', fontWeight:800, letterSpacing:'-.04em', lineHeight:1.08, marginBottom:'1.5rem' }}>
              {t('fcta.title').split('\n').map((line, i) => (
                <span key={i} style={{ display:'block', color: i===1 ? 'var(--accent)' : 'var(--text)' }}>{line}</span>
              ))}
            </h2>
          </FadeUp>
          <FadeUp delay={0.1}>
            <p style={{ color:'var(--text2)', fontSize:'1rem', lineHeight:1.8, maxWidth:560, margin:'0 auto 2.5rem', whiteSpace:'pre-line' }}>
              {t('fcta.sub')}
            </p>
          </FadeUp>
          <FadeUp delay={0.15}>
            <div style={{ display:'flex', gap:'1rem', justifyContent:'center', flexWrap:'wrap', marginBottom:'1.25rem' }}>
              <Link to="/contact" className="btn ba">{t('fcta.cta1')}</Link>
              <Link to="/projects" className="btn bg">{t('fcta.cta2')}</Link>
            </div>
          </FadeUp>
          <FadeUp delay={0.2}><p style={{ fontSize:'.875rem', color:'var(--text3)', marginBottom:'1rem' }}>{t('fcta.note')}</p></FadeUp>
          <ScaleIn delay={0.25}>
            <div style={{ display:'inline-flex', alignItems:'center', gap:'.5rem', background:'var(--accent-dim)', border:'1px solid rgba(var(--accent-rgb),.22)', borderRadius:999, padding:'.35rem 1rem', fontSize:'.8rem', color:'var(--accent)', fontWeight:700 }}>
              {t('fcta.slots')}
            </div>
          </ScaleIn>
        </div>
      </div>
    </section>
  )
}
