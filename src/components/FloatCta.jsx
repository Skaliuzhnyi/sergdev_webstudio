import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { motion, AnimatePresence } from 'framer-motion'

export default function FloatCta() {
  const { t } = useTranslation()
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const fn = () => setVisible(window.scrollY > 600)
    window.addEventListener('scroll', fn, { passive:true })
    return () => window.removeEventListener('scroll', fn)
  }, [])
  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y:80, opacity:0 }} animate={{ y:0, opacity:1 }} exit={{ y:80, opacity:0 }}
          transition={{ type:'spring', stiffness:260, damping:22 }}
          style={{ position:'fixed', bottom:'1.75rem', right:'1.75rem', zIndex:800 }}>
          <Link to="/contact" style={{ background:'var(--accent)', color:'#000', fontSize:'.875rem', fontWeight:700, padding:'11px 22px', borderRadius:999, display:'flex', alignItems:'center', gap:'.5rem', boxShadow:'0 6px 28px rgba(var(--accent-rgb),.32)', whiteSpace:'nowrap', textDecoration:'none' }}>
            ⚡ {t('nav.cta')}
          </Link>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
