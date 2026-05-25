import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'

export default function NotFound() {
  const { t, i18n } = useTranslation()
  const lang = i18n.language
  const data = {
    uk:{ h:'Сторінку не знайдено', s:'Схоже, ця сторінка переїхала або не існує.', b:'← На головну' },
    de:{ h:'Seite nicht gefunden', s:'Diese Seite existiert nicht oder wurde verschoben.', b:'← Zur Startseite' },
    en:{ h:"Page not found", s:"This page doesn't exist or has moved.", b:'← Back to Home' },
  }
  const d = data[lang] || data.uk
  const isUk = i18n.language === 'uk'

  return (
    <>
      <Helmet><title>404 | Serhii Kaliuzhnyi</title></Helmet>
      <div style={{ minHeight:'100svh', display:'flex', alignItems:'center', justifyContent:'center', padding:'var(--nav) 1.5rem 4rem', position:'relative', overflow:'hidden', textAlign:'center' }}>
        <motion.div animate={{ scale:[1,1.1,1], opacity:[.04,.07,.04] }} transition={{ duration:5, repeat:Infinity }}
          style={{ position:'absolute', top:'50%', left:'50%', transform:'translate(-50%,-50%)', width:600, height:600, background:'var(--accent)', borderRadius:'50%', filter:'blur(100px)', pointerEvents:'none' }}/>
        <div style={{ position:'relative', zIndex:1 }}>
          <motion.div animate={{ y:[0,-12,0] }} transition={{ duration:4, repeat:Infinity, ease:'easeInOut' }}
            style={{ fontFamily:"'Syne',sans-serif", fontSize:'clamp(6rem,20vw,14rem)', fontWeight:800, lineHeight:.9, letterSpacing:'-.05em', color:'var(--border2)', marginBottom:'1.5rem', userSelect:'none' }}>
            4<span style={{ color:'var(--accent)' }}>0</span>4
          </motion.div>
          <h1 style={{ fontFamily:isUk ? "'Unbounded', sans-serif" : "'Syne', sans-serif", fontSize:'clamp(1.5rem,4vw,2.5rem)', fontWeight:800, letterSpacing:'-.03em', marginBottom:'1rem', color:'var(--text)' }}>{d.h}</h1>
          <p style={{ color:'var(--text2)', fontSize:'1rem', lineHeight:1.75, maxWidth:400, margin:'0 auto 2.5rem' }}>{d.s}</p>
          <Link to="/" className="btn ba">{d.b}</Link>
          <div style={{ display:'flex', justifyContent:'center', gap:'1rem', marginTop:'2rem', flexWrap:'wrap' }}>
            {[[t('nav.portfolio'),'/projects'],[t('nav.contact'),'/contact']].map(([l,h]) => (
              <Link key={l} to={h} style={{ fontSize:'.875rem', color:'var(--text3)', padding:'.5rem 1rem', borderRadius:8, border:'1px solid var(--border)', transition:'all .2s' }}
                onMouseEnter={e=>{e.currentTarget.style.borderColor='var(--accent)';e.currentTarget.style.color='var(--accent)'}}
                onMouseLeave={e=>{e.currentTarget.style.borderColor='var(--border)';e.currentTarget.style.color='var(--text3)'}}>
                {l}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
