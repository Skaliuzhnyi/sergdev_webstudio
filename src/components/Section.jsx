import { useTranslation } from 'react-i18next'
import { FadeUp } from './Animate'

export function SectionLabel({ children, delay = 0 }) {
  return (
    <FadeUp delay={delay}>
      <span className="lbl">{children}</span>
    </FadeUp>
  )
}

export function SectionTitle({ children, delay = 0.05, as = 'h2', style = {} }) {
  const { i18n } = useTranslation()
  const isUk = i18n.language === 'uk'
  const Tag = as
  return (
    <FadeUp delay={delay}>
      <Tag style={{
        fontFamily:    isUk ? "'Unbounded', sans-serif" : "'Syne', sans-serif",
        fontSize:      isUk ? 'clamp(1.5rem,3.2vw,2.5rem)' : 'clamp(1.75rem,3.8vw,3rem)',
        fontWeight:    800,
        letterSpacing: isUk ? '-.02em' : '-.035em',
        lineHeight:    isUk ? 1.14 : 1.08,
        marginBottom:  '1rem',
        ...style,
      }}>
        {children}
      </Tag>
    </FadeUp>
  )
}

export function SectionSub({ children, delay = 0.1 }) {
  return (
    <FadeUp delay={delay}>
      <p style={{ color:'var(--text2)', fontSize:'1rem', lineHeight:1.78, maxWidth:560, marginBottom:'2.5rem' }}>
        {children}
      </p>
    </FadeUp>
  )
}
