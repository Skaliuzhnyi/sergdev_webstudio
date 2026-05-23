import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { StaggerContainer, item } from './Animate'
import { SectionLabel, SectionTitle } from './Section'

const ICONS = ['💻','⚡','🔍','📱','🛡️','🤝']

export default function Why() {
  const { t } = useTranslation()
  const items = t('why.items', { returnObjects: true })
  return (
    <section id="why" style={{ padding:'clamp(4.5rem,8vw,8rem) 0' }}>
      <div className="wrap">
        <SectionLabel>{t('why.label')}</SectionLabel>
        <SectionTitle>{t('why.title')}</SectionTitle>
        <StaggerContainer stagger={0.08} style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill,minmax(280px,1fr))', gap:'1.25rem', marginTop:'1.5rem' }}>
          {items.map((w, i) => (
            <motion.div key={i} variants={item}
              whileHover={{ y:-3, borderColor:'var(--border2)' }}
              style={{ background:'var(--surface)', border:'1px solid var(--border)', borderRadius:'var(--rl)', padding:'1.875rem', transition:'all .28s', cursor:'default' }}>
              <span style={{ fontFamily:"'Syne',sans-serif", fontSize:'.75rem', fontWeight:700, color:'var(--accent)', letterSpacing:'.12em', display:'block', marginBottom:'.875rem' }}>{w.n}</span>
              <div style={{ width:44, height:44, borderRadius:12, background:'var(--accent-dim)', border:'1px solid rgba(var(--accent-rgb),.2)', display:'flex', alignItems:'center', justifyContent:'center', fontSize:'1.375rem', marginBottom:'1.125rem' }}>
                {ICONS[i]}
              </div>
              <div style={{ fontFamily:"'Syne',sans-serif", fontSize:'1rem', fontWeight:700, marginBottom:'.5rem', color:'var(--text)' }}>{w.t}</div>
              <div style={{ fontSize:'.875rem', color:'var(--text2)', lineHeight:1.7, marginBottom:'.875rem' }}>{w.d}</div>
              <div style={{ fontSize:'.8rem', color:'var(--text3)', display:'flex', alignItems:'center', gap:'.35rem' }}>
                <span style={{ color:'var(--accent)', fontWeight:700 }}>→</span> {w.b}
              </div>
            </motion.div>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}
