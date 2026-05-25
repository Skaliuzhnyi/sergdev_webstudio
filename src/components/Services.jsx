import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { StaggerContainer, item } from './Animate'
import { SectionLabel, SectionTitle, SectionSub } from './Section'

const ICONS = ['🏢','🎯','🌐','🗂️','⚡','🔧']

export default function Services() {
  const { t } = useTranslation()
  const items = t('services.items', { returnObjects: true })
  return (
    <section id="services" style={{ background:'var(--bg2)', padding:'clamp(4.5rem,8vw,8rem) 0' }}>
      <div className="wrap">
        <SectionLabel>{t('services.label')}</SectionLabel>
        <SectionTitle>{t('services.title')}</SectionTitle>
        <SectionSub>{t('services.sub')}</SectionSub>
        <StaggerContainer stagger={0.08} style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill,minmax(300px,1fr))', gap:'1.375rem', marginBottom:'3rem' }}>
          {items.map((s, i) => (
            <motion.div key={i} variants={item}
              whileHover={{ y:-5, borderColor:'var(--border2)' }}
              style={{ background:'var(--surface)', border:'1px solid var(--border)', borderRadius:'var(--rl)', padding:'1.875rem', transition:'all .32s', position:'relative', overflow:'hidden', display:'flex', flexDirection:'column', gap:'.75rem', cursor:'default' }}>
              <motion.div initial={{ scaleX:0 }} whileHover={{ scaleX:1 }}
                style={{ position:'absolute', top:0, left:0, right:0, height:3, background:'var(--accent)', transformOrigin:'left' }}/>
              <div style={{ width:52, height:52, borderRadius:14, background:'var(--accent-dim)', border:'1px solid rgba(var(--accent-rgb),.2)', display:'flex', alignItems:'center', justifyContent:'center', fontSize:'1.5rem' }}>
                {ICONS[i]}
              </div>
              <div style={{ fontFamily:"'Syne',sans-serif", fontSize:'1.0625rem', fontWeight:700, color:'var(--text)' }}>{s.n}</div>
              <div style={{ fontSize:'.8375rem', color:'var(--accent)', fontWeight:600 }}>{s.tl}</div>
              <div style={{ fontSize:'.875rem', color:'var(--text2)', lineHeight:1.75, flex:1 }}>{s.d}</div>
              <div style={{ padding:'.7rem .9rem', background:'var(--accent-dim)', border:'1px solid rgba(var(--accent-rgb),.15)', borderRadius:8, fontSize:'.8rem', color:'var(--text2)' }}>
                <b style={{ color:'var(--accent)', display:'block', marginBottom:'.25rem', fontSize:'.72rem', letterSpacing:'.06em', textTransform:'uppercase' }}>Result</b>
                {s.r}
              </div>
              <div style={{ display:'flex', flexWrap:'wrap', gap:'.35rem' }}>
                {s.tags.map(tag => <span key={tag} className="tag">{tag}</span>)}
              </div>
            </motion.div>
          ))}
        </StaggerContainer>
        <div style={{ textAlign:'center' }}>
          <Link to="/contact" className="btn bg" aria-label={t('services.cta')}>{t('services.cta')}</Link>
        </div>
      </div>
    </section>
  )
}
