import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { StaggerContainer, item } from './Animate'
import { SectionLabel, SectionTitle, SectionSub } from './Section'

const ICONS = ['📈','🎯','⚙️','🏆','💰','🌱']

export default function Solution() {
  const { t } = useTranslation()
  const items = t('solution.items', { returnObjects: true })
  return (
    <section id="solution" style={{ padding:'clamp(4.5rem,8vw,8rem) 0' }}>
      <div className="wrap">
        <SectionLabel>{t('solution.label')}</SectionLabel>
        <SectionTitle>{t('solution.title')}</SectionTitle>
        <SectionSub>{t('solution.sub')}</SectionSub>
        <StaggerContainer stagger={0.08} style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill,minmax(240px,1fr))', gap:'1.25rem' }}>
          {items.map((s, i) => (
            <motion.div key={i} variants={item}
              whileHover={{ y:-5, borderColor:'var(--border2)' }}
              style={{ background:'var(--surface)', border:'1px solid var(--border)', borderRadius:'var(--rl)', padding:'1.875rem', transition:'all .3s', position:'relative', overflow:'hidden', cursor:'default' }}>
              <motion.div initial={{ scaleX:0 }} whileHover={{ scaleX:1 }}
                style={{ position:'absolute', bottom:0, left:0, right:0, height:2, background:'var(--accent)', transformOrigin:'left', transition:'transform .35s' }}/>
              <div style={{ fontSize:'2rem', marginBottom:'1.25rem' }}>{ICONS[i]}</div>
              <div style={{ fontFamily:"'Syne',sans-serif", fontSize:'1.0625rem', fontWeight:700, marginBottom:'.625rem', color:'var(--text)' }}>{s.t}</div>
              <div style={{ fontSize:'.875rem', color:'var(--text2)', lineHeight:1.7, marginBottom:'1rem' }}>{s.d}</div>
              <div style={{ fontSize:'.8rem', color:'var(--accent)', fontWeight:600 }}>→ {s.r}</div>
            </motion.div>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}
