import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

export default function Footer() {
  const { t } = useTranslation()
  const links = [
    { label:'Email', href:'mailto:info@sergdev.website', external:false },
    { label:'Telegram', href:'https://t.me/sergkDev', external:true },
    { label:'WhatsApp', href:'https://wa.me/380673093444', external:true },
  ]
  return (
    <footer>
      <div className="wrap" style={{ display:'flex', alignItems:'center', justifyContent:'space-between', flexWrap:'wrap', gap:'1rem' }}>
        <span style={{ fontSize:'.875rem', color:'var(--text3)' }}>{t('footer.copy')}</span>
        <div style={{ display:'flex', gap:'1.5rem', flexWrap:'wrap', alignItems:'center' }}>
          {links.map(l => (
            <a key={l.label} href={l.href} target={l.external ? '_blank' : '_self'} aria-label={l.label} rel="noopener noreferrer"
              style={{ fontSize:'.875rem', color:'var(--text3)', transition:'color .2s' }}
              onMouseEnter={e => e.currentTarget.style.color='var(--text)'}
              onMouseLeave={e => e.currentTarget.style.color='var(--text3)'}>
              {l.label}
            </a>
          ))}
          <Link to="/blog" aria-label={t('nav.blog')} style={{ fontSize:'.875rem', color:'var(--text3)', transition:'color .2s' }}
                onMouseEnter={e => e.currentTarget.style.color='var(--text)'}
                onMouseLeave={e => e.currentTarget.style.color='var(--text3)'}>
            {t('nav.blog')}
          </Link>
          <Link to="/contact" aria-label={t('nav.contact')} style={{ fontSize:'.875rem', color:'var(--text3)', transition:'color .2s' }}
            onMouseEnter={e => e.currentTarget.style.color='var(--text)'}
            onMouseLeave={e => e.currentTarget.style.color='var(--text3)'}>
            {t('nav.contact')}
          </Link>
        </div>
      </div>
    </footer>
  )
}
