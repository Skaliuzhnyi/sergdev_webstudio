import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { FadeLeft, FadeRight } from './Animate'
import { SectionLabel, SectionTitle } from './Section'
import profileImg from '@/images/profile-img.jpg'

const PILLS = ['React / Next.js','Node.js','TypeScript','WordPress','Figma','Tailwind CSS','REST API','PostgreSQL']

export default function About() {
  const { t } = useTranslation()
  return (
    <section id="about" style={{ padding:'clamp(4.5rem,8vw,8rem) 0' }}>
      <div className="wrap">
        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(300px,1fr))', gap:'4.5rem', alignItems:'center' }}>
          <div>
            <SectionLabel>{t('about.label')}</SectionLabel>
            <SectionTitle>{t('about.title')}</SectionTitle>
            <FadeLeft delay={0.1}><p style={{ color:'var(--text2)', lineHeight:1.8, marginBottom:'1rem', fontSize:'.9375rem' }}>{t('about.p1')}</p></FadeLeft>
            <FadeLeft delay={0.15}><p style={{ color:'var(--text2)', lineHeight:1.8, fontSize:'.9375rem' }}>{t('about.p2')}</p></FadeLeft>
            <FadeLeft delay={0.2}>
              <div style={{ display:'flex', flexWrap:'wrap', gap:'.5rem', margin:'1.75rem 0' }}>
                {PILLS.map(p => (
                  <motion.span key={p} whileHover={{ borderColor:'var(--accent)', color:'var(--accent)' }}
                    style={{ background:'var(--bg3)', border:'1px solid var(--border)', borderRadius:999, padding:'.35rem .875rem', fontSize:'.8rem', color:'var(--text2)', cursor:'default', transition:'all .2s' }}>
                    {p}
                  </motion.span>
                ))}
              </div>
            </FadeLeft>
            <FadeLeft delay={0.25}>
              <Link to="/contact" className="btn ba">{t('about.cta')} →</Link>
            </FadeLeft>
          </div>

          <FadeRight delay={0.1}>
            <div style={{ background:'var(--surface)', border:'1px solid var(--border)', borderRadius:'var(--rxl)', overflow:'hidden', aspectRatio:'4/5', position:'relative' }}>
              <img src={profileImg} alt="Serhii Kaliuzhnyi — Fullstack Developer" style={{ width:'100%', height:'100%', objectFit:'cover', opacity:.87 }} loading="lazy"
                   decoding="async"/>
              <div style={{ position:'absolute', inset:'auto 1.5rem 1.5rem', background:'rgba(10,10,10,.88)', backdropFilter:'blur(16px)', border:'1px solid rgba(255,255,255,.08)', borderRadius:'var(--r)', padding:'1.125rem 1.375rem' }}>
                <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between', gap:'1rem' }}>
                  <div>
                    <div style={{ fontFamily:"'Syne',sans-serif", fontWeight:700, fontSize:'.9375rem', color:'#f0f0f0' }}>Serhii Kaliuzhnyi</div>
                    <div style={{ fontSize:'.8rem', color:'rgba(240,240,240,.65)', marginTop:'.2rem' }}>Fullstack Developer</div>
                  </div>
                  <div style={{ display:'inline-flex', alignItems:'center', gap:'.375rem', background:'rgba(232,255,107,.12)', border:'1px solid rgba(232,255,107,.25)', borderRadius:999, padding:'.2rem .7rem', fontSize:'.72rem', color:'#e8ff6b', fontWeight:700, whiteSpace:'nowrap' }}>
                    <motion.span animate={{ opacity:[1,.3,1] }} transition={{ duration:1.6, repeat:Infinity }} style={{ width:5, height:5, background:'#e8ff6b', borderRadius:'50%', display:'inline-block' }}/>
                    {t('about.avail')}
                  </div>
                </div>
              </div>
            </div>
          </FadeRight>
        </div>
      </div>
    </section>
  )
}
