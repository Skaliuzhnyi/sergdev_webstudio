import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { motion, AnimatePresence } from 'framer-motion'
import { FadeUp } from './Animate'
import { SectionLabel, SectionTitle } from './Section'

export default function Faq() {
  const { t } = useTranslation()
  const items = t('faq.items', { returnObjects: true })
  const [open, setOpen] = useState(null)
  return (
    <section id="faq" style={{ padding:'clamp(4.5rem,8vw,8rem) 0', background:'var(--bg2)' }}>
      <div className="wrap">
        <SectionLabel>{t('faq.label')}</SectionLabel>
        <SectionTitle>{t('faq.title')}</SectionTitle>
        <div style={{ marginTop:'1.5rem', display:'flex', flexDirection:'column', gap:'.75rem' }}>
          {items.map((f, i) => (
            <FadeUp key={i} delay={i * 0.03}>
              <div style={{ background:'var(--surface)', border:`1px solid ${open===i ? 'var(--border2)' : 'var(--border)'}`, borderRadius:'var(--r)', overflow:'hidden', transition:'border-color .2s' }}>
                <button onClick={() => setOpen(open===i ? null : i)}
                  style={{ width:'100%', display:'flex', alignItems:'center', justifyContent:'space-between', padding:'1.2rem 1.5rem', background:'none', cursor:'pointer', gap:'1rem', textAlign:'left', border:'none' }}>
                  <span style={{ fontFamily:"'Syne',sans-serif", fontWeight:600, fontSize:'.9375rem', lineHeight:1.4, color:'var(--text)' }}>{f.q}</span>
                  <motion.span animate={{ rotate: open===i ? 45 : 0 }}
                    style={{ width:28, height:28, borderRadius:'50%', background: open===i ? 'var(--accent)' : 'var(--bg3)', border:`1px solid ${open===i ? 'transparent' : 'var(--border)'}`, display:'flex', alignItems:'center', justifyContent:'center', flexShrink:0, fontSize:'.875rem', color: open===i ? '#000' : 'var(--text2)', transition:'background .25s, color .25s' }}>
                    +
                  </motion.span>
                </button>
                <AnimatePresence>
                  {open===i && (
                    <motion.div initial={{ height:0, opacity:0 }} animate={{ height:'auto', opacity:1 }} exit={{ height:0, opacity:0 }} transition={{ duration:.32 }}>
                      <div style={{ padding:'0 1.5rem 1.25rem', color:'var(--text2)', lineHeight:1.8, fontSize:'.9375rem', borderTop:'1px solid var(--border)' }}>
                        {f.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  )
}
