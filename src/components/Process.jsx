import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { FadeUp } from './Animate'
import { SectionLabel, SectionTitle, SectionSub } from './Section'

export default function Process() {
  const { t } = useTranslation()
  const items = t('process.items', { returnObjects: true })
  return (
    <section id="process" style={{ background:'var(--bg2)', padding:'clamp(4.5rem,8vw,8rem) 0' }}>
      <div className="wrap">
        <SectionLabel>{t('process.label')}</SectionLabel>
        <SectionTitle>{t('process.title')}</SectionTitle>
        <SectionSub>{t('process.sub')}</SectionSub>
        <div>
          {items.map((p, i) => (
            <FadeUp key={i} delay={i * 0.06}>
              <motion.div whileHover={{ x:4 }}
                style={{ display:'grid', gridTemplateColumns:'72px 1fr', gap:'2rem', alignItems:'start', padding:'2.25rem 0', borderBottom: i < items.length-1 ? '1px solid var(--border)' : 'none', transition:'all .2s', cursor:'default' }}>
                <motion.div whileHover={{ color:'var(--accent)' }}
                  style={{ fontFamily:"'Syne',sans-serif", fontSize:'3.25rem', fontWeight:800, color:'var(--border2)', lineHeight:1, transition:'color .35s' }}>
                  {p.n}
                </motion.div>
                <div>
                  <div style={{ fontFamily:"'Syne',sans-serif", fontSize:'1.1875rem', fontWeight:700, marginBottom:'.5rem', color:'var(--text)' }}>{p.t}</div>
                  <p style={{ fontSize:'.9375rem', color:'var(--text2)', lineHeight:1.75, maxWidth:540, marginBottom:'.75rem' }}>{p.d}</p>
                  <div style={{ fontSize:'.8rem', color:'var(--text3)', display:'flex', alignItems:'center', gap:'.35rem' }}>
                    <span style={{ color:'var(--accent)', fontWeight:700 }}>✓</span> {p.r}
                  </div>
                </div>
              </motion.div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  )
}
