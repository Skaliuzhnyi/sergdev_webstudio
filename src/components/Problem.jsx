import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { FadeLeft, FadeRight, StaggerContainer, item } from './Animate'
import { SectionLabel, SectionTitle } from './Section'

const ICONS = ['🐢','📱','🔍','📝','😐','🚪']

export default function Problem() {
  const { t } = useTranslation()
  const items = t('problem.items', { returnObjects: true })
  return (
    <section id="problem" style={{ background:'var(--bg2)', padding:'clamp(4.5rem,8vw,8rem) 0' }}>
      <div className="wrap">
        <SectionLabel>{t('problem.label')}</SectionLabel>
        <SectionTitle>{t('problem.title')}</SectionTitle>
        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(300px,1fr))', gap:'4rem', marginTop:'2.5rem', alignItems:'start' }}>
          <div>
            <FadeLeft delay={0.05}>
              <blockquote style={{ background:'var(--surface)', border:'1px solid var(--border)', borderLeft:'3px solid var(--accent)', borderRadius:'var(--r)', padding:'1.5rem', fontSize:'.9375rem', color:'var(--text2)', lineHeight:1.8, fontStyle:'italic', marginBottom:'2rem' }}>
                {t('problem.scenario')}
              </blockquote>
            </FadeLeft>
            <FadeLeft delay={0.1}>
              <p style={{ fontFamily:"'Syne',sans-serif", fontSize:'1.125rem', fontWeight:800, lineHeight:1.35 }}
                dangerouslySetInnerHTML={{ __html: t('problem.close') }}/>
            </FadeLeft>
          </div>
          <StaggerContainer stagger={0.08} style={{ display:'flex', flexDirection:'column', gap:'.875rem' }}>
            {items.map((p, i) => (
              <motion.div key={i} variants={item}
                whileHover={{ x:4, borderColor:'var(--border2)' }}
                style={{ display:'flex', gap:'1rem', alignItems:'flex-start', padding:'1.125rem 1.25rem', background:'var(--surface)', border:'1px solid var(--border)', borderRadius:'var(--r)', transition:'border-color .2s', cursor:'default' }}>
                <div style={{ width:40, height:40, borderRadius:10, background:'rgba(255,94,94,.08)', border:'1px solid rgba(255,94,94,.18)', display:'flex', alignItems:'center', justifyContent:'center', fontSize:'1.125rem', flexShrink:0 }}>
                  {ICONS[i]}
                </div>
                <div>
                  <strong style={{ fontSize:'.9375rem', display:'block', marginBottom:'.2rem', color:'var(--text)' }}>{p.s}</strong>
                  <span style={{ fontSize:'.875rem', color:'var(--text2)' }}>{p.t}</span>
                </div>
              </motion.div>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </section>
  )
}
