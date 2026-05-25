import { useState, useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { motion, AnimatePresence } from 'framer-motion'
import { useTheme } from '../hooks/useTheme'

const LANGS = ['uk','de','en']

export default function Nav() {
  const { t, i18n } = useTranslation()
  const lang = i18n.language
  const [dark, toggleTheme] = useTheme()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()
  const isHome = location.pathname === '/'

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])
  useEffect(() => { setOpen(false) }, [location])

  const changeLang = l => { i18n.changeLanguage(l); localStorage.setItem('sk_lang', l) }

  const goto = id => {
    if (!isHome) { navigate('/'); setTimeout(() => document.getElementById(id)?.scrollIntoView({ behavior:'smooth' }), 320) }
    else document.getElementById(id)?.scrollIntoView({ behavior:'smooth' })
    setOpen(false)
  }

  const navBg = dark
    ? (scrolled ? 'rgba(10,10,10,.96)' : 'rgba(10,10,10,.5)')
    : (scrolled ? 'rgba(245,245,241,.97)' : 'rgba(245,245,241,.5)')

  return (
    <>
      <style>{`
        .nb-links { display:flex; gap:1.75rem; align-items:center }
        .nb-cta   { display:flex }
        .nb-burger { display:none; flex-direction:column; gap:5px; background:none; padding:6px; border:none; cursor:pointer }
        .nb-burger span { width:22px; height:1.5px; background:var(--text); display:block; transition:all .3s }
        @media(max-width:768px){
          .nb-links { display:none !important }
          .nb-cta   { display:none !important }
          .nb-burger { display:flex !important }
        }
      `}</style>

      <nav style={{ position:'fixed', inset:'0 0 auto', zIndex:900, height:'var(--nav)', display:'flex', alignItems:'center', padding:'0 clamp(1.125rem,5vw,3.5rem)', background:navBg, backdropFilter:'blur(20px)', WebkitBackdropFilter:'blur(20px)', borderBottom: scrolled ? '1px solid var(--border)' : '1px solid transparent', transition:'background .3s, border-color .3s' }}>
        <div style={{ width:'100%', maxWidth:1240, margin:'0 auto', display:'flex', alignItems:'center', justifyContent:'space-between', gap:'1rem' }}>

          {/* Logo */}
          <Link to="/" style={{ fontFamily: lang==='uk' ? "'Manrope',sans-serif" : "'Syne',sans-serif", fontWeight:800, fontSize:'1.125rem', letterSpacing:'-.04em', color:'var(--text)' }}>
            SergDev<span style={{ color:'var(--accent)' }}></span>
          </Link>

          {/* Desktop nav */}
          <div className="nb-links">
            {['about','services'].map(id => (
              <button key={id} onClick={() => goto(id)} aria-label={t(`nav.${id}`)} style={{ fontSize:'.875rem', color:'var(--text2)', transition:'color .2s', background:'none', border:'none', cursor:'pointer', fontFamily:'var(--fb)', padding:0 }}
                onMouseEnter={e => e.currentTarget.style.color='var(--text)'}
                onMouseLeave={e => e.currentTarget.style.color='var(--text2)'}>
                {t(`nav.${id}`)}
              </button>
            ))}
            <Link to="/projects" style={{ fontSize:'.875rem', color: location.pathname==='/projects' ? 'var(--accent)' : 'var(--text2)', transition:'color .2s' }}>{t('nav.portfolio')}</Link>
            <Link to="/blog" style={{ fontSize:'.875rem', color: location.pathname==='/blog' ? 'var(--accent)' : 'var(--text2)', transition:'color .2s' }}>{t('nav.blog')}</Link>
            {['process','faq'].map(id => (
              <button key={id} onClick={() => goto(id)} aria-label={t(`nav.${id}`)} style={{ fontSize:'.875rem', color:'var(--text2)', transition:'color .2s', background:'none', border:'none', cursor:'pointer', fontFamily:'var(--fb)', padding:0 }}
                onMouseEnter={e => e.currentTarget.style.color='var(--text)'}
                onMouseLeave={e => e.currentTarget.style.color='var(--text2)'}>
                {t(`nav.${id}`)}
              </button>
            ))}
            <Link to="/contact" style={{ fontSize:'.875rem', color: location.pathname==='/contact' ? 'var(--accent)' : 'var(--text2)', transition:'color .2s' }}>{t('nav.contact')}</Link>
          </div>

          {/* Right controls */}
          <div style={{ display:'flex', alignItems:'center', gap:'.625rem' }}>
            {/* Lang switcher */}
            <div style={{ display:'flex', gap:2, background:'var(--bg3)', border:'1px solid var(--border)', borderRadius:8, padding:3 }}>
              {LANGS.map(l => (
                <button key={l} onClick={() => changeLang(l)} aria-label={l.toUpperCase()} style={{ background: lang===l ? 'var(--accent)' : 'none', color: lang===l ? '#000' : 'var(--text2)', fontSize:'.72rem', fontWeight:700, letterSpacing:'.07em', padding:'4px 9px', borderRadius:5, transition:'all .2s', border:'none', cursor:'pointer', fontFamily:'var(--fb)' }}>
                  {l.toUpperCase()}
                </button>
              ))}
            </div>

            {/* Theme toggle */}
            <button onClick={toggleTheme} aria-label={dark ? '🌙' : '☀️'} style={{ background:'var(--bg3)', border:'1px solid var(--border)', width:34, height:34, borderRadius:8, display:'flex', alignItems:'center', justifyContent:'center', fontSize:'.9rem', cursor:'pointer' }}>
              {dark ? '🌙' : '☀️'}
            </button>

            {/* CTA — desktop only */}
            <Link to="/contact" className="nb-cta" aria-label={t('nav.cta')} style={{ background:'var(--accent)', color:'#000', fontSize:'.8125rem', fontWeight:700, padding:'7px 17px', borderRadius:8, transition:'all .2s', whiteSpace:'nowrap', alignItems:'center' }}>
              {t('nav.cta')}
            </Link>

            {/* Burger — mobile only */}
            <button className="nb-burger" onClick={() => setOpen(o => !o)} aria-label="Menu">
              <span style={{ transform: open ? 'rotate(45deg) translateY(6.5px)' : 'none' }}/>
              <span style={{ opacity: open ? 0 : 1 }}/>
              <span style={{ transform: open ? 'rotate(-45deg) translateY(-6.5px)' : 'none' }}/>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div initial={{ opacity:0, y:-12 }} animate={{ opacity:1, y:0 }} exit={{ opacity:0, y:-12 }} transition={{ duration:.22 }}
            style={{ position:'fixed', inset:'var(--nav) 0 0', zIndex:899, background:'var(--bg)', padding:'2rem clamp(1.125rem,5vw,3.5rem)', display:'flex', flexDirection:'column', gap:'1.5rem', overflowY:'auto' }}>
            {['about','services'].map(id => (
              <button key={id} onClick={() => goto(id)} aria-label={t(`nav.${id}`)} style={{ fontSize:'1.5rem', fontFamily: lang==='uk'?"'Manrope',sans-serif":"'Syne',sans-serif", fontWeight:700, color:'var(--text2)', background:'none', border:'none', cursor:'pointer', textAlign:'left' }}>
                {t(`nav.${id}`)}
              </button>
            ))}
            <Link to="/projects" onClick={() => setOpen(false)} style={{ fontSize:'1.5rem', fontFamily: lang==='uk'?"'Manrope',sans-serif":"'Syne',sans-serif", fontWeight:700, color:'var(--text2)' }}>{t('nav.portfolio')}</Link>
            {['process','faq'].map(id => (
              <button key={id} onClick={() => goto(id)} aria-label={t(`nav.${id}`)} style={{ fontSize:'1.5rem', fontFamily: lang==='uk'?"'Manrope',sans-serif":"'Syne',sans-serif", fontWeight:700, color:'var(--text2)', background:'none', border:'none', cursor:'pointer', textAlign:'left' }}>
                {t(`nav.${id}`)}
              </button>
            ))}
            <Link to="/blog" onClick={() => setOpen(false)} aria-label={'blog'} style={{ fontSize:'1.5rem', fontFamily: lang==='uk'?"'Manrope',sans-serif":"'Syne',sans-serif", fontWeight:700, color:'var(--text2)' }}>{t('nav.blog')}</Link>
            <Link to="/contact" onClick={() => setOpen(false)} aria-label={'contact'} style={{ fontSize:'1.5rem', fontFamily: lang==='uk'?"'Manrope',sans-serif":"'Syne',sans-serif", fontWeight:700, color:'var(--text2)' }}>{t('nav.contact')}</Link>
            <Link to="/contact" onClick={() => setOpen(false)} aria-label={'contacts'} style={{ background:'var(--accent)', color:'#000', fontWeight:700, padding:'14px 24px', borderRadius:10, textAlign:'center', marginTop:'1rem', fontSize:'1rem' }}>
              {t('nav.cta')}
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
