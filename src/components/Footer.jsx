import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

export default function Footer() {
  const { t } = useTranslation()
  const links = [
    { label:'Email', href:'mailto:flskaliuzhnyi@gmail.com', external:false },
    { label:'Telegram', href:'https://t.me/sergkdev', external:true },
  ]
  return (
    <footer>
      <div className="wrap" style={{ display:'flex', alignItems:'center', justifyContent:'space-between', flexWrap:'wrap', gap:'1rem' }}>
        <span style={{ fontSize:'.875rem', color:'var(--text3)' }}>{t('footer.copy')}</span>
        <div style={{ display:'flex', gap:'1.5rem', flexWrap:'wrap', alignItems:'center' }}>
          {links.map(l => (
            <a key={l.label} href={l.href} target={l.external ? '_blank' : '_self'} rel="noopener noreferrer"
               style={{ fontSize:'.875rem', color:'var(--text3)', transition:'color .2s' }}
               onMouseEnter={e => e.currentTarget.style.color='var(--text)'}
               onMouseLeave={e => e.currentTarget.style.color='var(--text3)'}>
              {l.label}
            </a>
          ))}
          <Link to="/blog" style={{ fontSize:'.875rem', color:'var(--text3)', transition:'color .2s' }}
                onMouseEnter={e => e.currentTarget.style.color='var(--text)'}
                onMouseLeave={e => e.currentTarget.style.color='var(--text3)'}>
            {t('nav.blog')}
          </Link>
          <Link to="/contact" style={{ fontSize:'.875rem', color:'var(--text3)', transition:'color .2s' }}
                onMouseEnter={e => e.currentTarget.style.color='var(--text)'}
                onMouseLeave={e => e.currentTarget.style.color='var(--text3)'}>
            {t('nav.contact')}
          </Link>
        </div>
      </div>
      <div className="wrap" style={{ marginTop:'1.25rem', paddingTop:'1.25rem', borderTop:'1px solid var(--border)', display:'flex', gap:'1.25rem', flexWrap:'wrap' }}>
        <Link to="/impressum" style={{ fontSize:'.8rem', color:'var(--text3)', transition:'color .2s' }}
              onMouseEnter={e => e.currentTarget.style.color='var(--text2)'}
              onMouseLeave={e => e.currentTarget.style.color='var(--text3)'}>
          Impressum
        </Link>
        <Link to="/datenschutz" style={{ fontSize:'.8rem', color:'var(--text3)', transition:'color .2s' }}
              onMouseEnter={e => e.currentTarget.style.color='var(--text2)'}
              onMouseLeave={e => e.currentTarget.style.color='var(--text3)'}>
          Datenschutz
        </Link>
      </div>
    </footer>
  )
}