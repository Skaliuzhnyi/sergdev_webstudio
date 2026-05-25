import {useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { StaggerContainer, item } from './Animate'
import { SectionLabel, SectionTitle } from './Section'
import { PROJECTS } from '../data/projects'

function useMediaQuery(query) {
  const [matches, setMatches] = useState(false)

  useEffect(() => {
    const media = window.matchMedia(query)

    const update = () => setMatches(media.matches)

    update()
    media.addEventListener('change', update)

    return () => media.removeEventListener('change', update)
  }, [query])

  return matches
}

const GH_SVG = <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/></svg>

export function ProjectCard({ p }) {
  const { t, i18n } = useTranslation()
  const lang = i18n.language
  const [imgErr, setImgErr] = useState(false)
  return (
    <motion.article variants={item}
      whileHover={{ y:-7, borderColor:'var(--border2)', boxShadow:'0 20px 50px rgba(0,0,0,.18)', border:'1px solid var(--accent)' }}
      style={{ background:'var(--surface)', border:'1px solid var(--border)', borderRadius:'var(--rl)', overflow:'hidden', display:'flex', flexDirection:'column', cursor:'pointer', transition:'border .2s' }}
      onClick={() => window.open(p.link, '_blank')}>
      <div style={{ overflow:'hidden', aspectRatio:'16/10', background:'var(--bg3)', position:'relative', flexShrink:0 }}>
        {!imgErr
          ? <motion.img src={p.img} alt={p.title} loading="lazy" onError={() => setImgErr(true)}
              style={{ width:'100%', height:'100%', objectFit:'cover', display:'block' }}
              whileHover={{ scale:1.06 }} transition={{ duration:.55 }}/>
          : <div style={{ position:'absolute', inset:0, display:'flex', alignItems:'center', justifyContent:'center', fontSize:'2.75rem', background:'linear-gradient(135deg,var(--bg3),var(--bg2))' }}>{p.fallback}</div>
        }
      </div>
      <div style={{ padding:'1.375rem', display:'flex', flexDirection:'column', flex:1 }}>
        <p style={{ fontSize:'.72rem', fontWeight:700, letterSpacing:'.09em', color:'var(--accent)', textTransform:'uppercase', marginBottom:'.4rem' }}>{p.cat[lang] || p.cat.uk}</p>
        <h3 style={{ fontFamily:"'Syne',sans-serif", fontSize:'1.0625rem', fontWeight:700, marginBottom:'.4rem', color:'var(--text)' }}>{p.title}</h3>
        <p style={{ fontSize:'.875rem', color:'var(--text2)', lineHeight:1.65, marginBottom:'.875rem' }}>{p.desc[lang] || p.desc.uk}</p>
        <div style={{ display:'flex', flexWrap:'wrap', gap:'.35rem' }}>
          {p.tags.map(tag => <span key={tag} className="tag">{tag}</span>)}
        </div>
        <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between', paddingTop:'1.125rem', marginTop:'auto', gap:'.75rem' }}>
          <a href={p.link} target="_blank" rel="noopener noreferrer" onClick={e => e.stopPropagation()}
            style={{ fontSize:'.8125rem', fontWeight:600, color:'var(--accent)', display:'flex', alignItems:'center', gap:'.35rem', transition:'gap .2s' }}>
            {t('portfolio.view')} →
          </a>
          {p.gh && (
            <a href={p.gh} target="_blank" rel="noopener noreferrer" onClick={e => e.stopPropagation()}
              style={{ display:'inline-flex', alignItems:'center', gap:'.35rem', fontSize:'.8rem', color:'var(--text3)', background:'var(--bg3)', border:'1px solid var(--border)', borderRadius:8, padding:'.28rem .7rem', transition:'color .2s' }}>
              {GH_SVG} {t('portfolio.code')}
            </a>
          )}
        </div>
      </div>
    </motion.article>
  )
}

export default function Portfolio({ limit = 3 }) {
  const { t } = useTranslation()
  const isMobile = useMediaQuery('(max-width: 640px)')
  const computedLimit = limit ?? (isMobile ? 3 : 6)

  const displayed = PROJECTS.slice(0, computedLimit)
  return (
    <section id="portfolio" style={{ padding:'clamp(4.5rem,8vw,8rem) 0' }}>
      <div className="wrap">
        <SectionLabel>{t('portfolio.label')}</SectionLabel>
        <SectionTitle>{t('portfolio.title')}</SectionTitle>
        <p style={{ color:'var(--text2)', fontSize:'1rem', lineHeight:1.8, maxWidth:640, marginBottom:'3rem', fontStyle:'italic' }}>{t('portfolio.intro')}</p>
        <StaggerContainer stagger={0.09} style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill,minmax(340px,1fr))', gap:'1.375rem' }}>
          {displayed.map(p => <ProjectCard key={p.id} p={p}/>)}
        </StaggerContainer>
        {limit && (
          <div style={{ textAlign:'center', marginTop:'3rem' }}>
            <Link to="/projects" className="btn bg">{t('portfolio.all')}</Link>
          </div>
        )}
      </div>
    </section>
  )
}
