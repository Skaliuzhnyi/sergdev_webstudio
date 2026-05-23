import { Helmet } from 'react-helmet-async'
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { FadeUp, FadeLeft, FadeRight } from '../components/Animate'
import { SectionLabel } from '../components/Section'
import ContactForm from '../components/ContactForm'

const SEO_META = {
  uk: { title: 'Контакт — Обговорити проект | Serhii Kaliuzhnyi', desc: "Зв'яжіться для безкоштовної консультації. Відповідаю протягом кількох годин." },
  de: { title: 'Kontakt — Projekt besprechen | Serhii Kaliuzhnyi', desc: 'Kontaktieren Sie mich für eine kostenlose Erstberatung. Ich antworte innerhalb weniger Stunden.' },
  en: { title: 'Contact — Discuss a Project | Serhii Kaliuzhnyi', desc: 'Get in touch for a free consultation. I respond within a few hours.' },
}

const PROCESS_MINI = {
  uk: [{ t: 'Дзвінок 30 хв.', d: 'Розбираємо задачу та цілі' }, { t: 'Оцінка проекту', d: 'Отримуєте план і кошторис' }, { t: 'Старт роботи', d: 'Починаємо у погоджені терміни' }],
  de: [{ t: '30-Min-Gespräch', d: 'Wir besprechen Ihre Aufgabe' }, { t: 'Projektbewertung', d: 'Klarer Plan und Kostenvoranschlag' }, { t: 'Projektstart', d: 'Entwicklung im vereinbarten Zeitplan' }],
  en: [{ t: '30-min call', d: 'We discuss your task and goals' }, { t: 'Project estimate', d: 'Clear plan and cost breakdown' }, { t: 'Work starts', d: 'Development on agreed schedule' }],
}

// Only Email and Telegram — no GitHub/LinkedIn per requirements
const LINKS = [
  { icon: '✉️', label: 'Email', val: 'flskaliuzhnyi@gmail.com', href: 'mailto:flskaliuzhnyi@gmail.com' },
  { icon: '✈️', label: 'Telegram', val: '@sergkdev', href: 'https://t.me/sergkdev' },
]

const AVAIL = {
  uk: ['Доступний для нових проектів', 'відповідаю протягом декількох годин'],
  de: ['Verfügbar für neue Projekte', 'antworte innerhalb weniger Stunden'],
  en: ['Available for new projects', 'responding within a few hours'],
}

export default function Contact() {
  const { t, i18n } = useTranslation()
  const lang = i18n.language
  const meta = SEO_META[lang] || SEO_META.uk
  const pm = PROCESS_MINI[lang] || PROCESS_MINI.uk
  const avail = AVAIL[lang] || AVAIL.uk

  return (
    <>
      <Helmet>
        <title>{meta.title}</title>
        <meta name="description" content={meta.desc} />
        <link rel="canonical" href="https://skaliuzhnyi.dev/contact" />
      </Helmet>

      {/* Hero */}
      <div style={{ textAlign: 'center', paddingTop: 'calc(var(--nav) + 5rem)', paddingBottom: '4rem', position: 'relative', overflow: 'hidden' }}>
        <motion.div
          animate={{ scale: [1, 1.08, 1], opacity: [.05, .08, .05] }}
          transition={{ duration: 6, repeat: Infinity }}
          style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: 500, height: 500, background: 'var(--accent)', borderRadius: '50%', filter: 'blur(100px)', pointerEvents: 'none' }}
        />
        <div className="wrap" style={{ position: 'relative', zIndex: 1 }}>
          <SectionLabel>{t('contact.label')}</SectionLabel>
          <FadeUp delay={0.05}>
            <h1 style={{ fontFamily: 'var(--ff)', fontSize: 'clamp(2.25rem,5vw,4rem)', fontWeight: 800, letterSpacing: '-.04em', lineHeight: 1.06, marginBottom: '1rem' }}>
              {t('contact.title')}
            </h1>
          </FadeUp>
          <FadeUp delay={0.1}>
            <p style={{ color: 'var(--text2)', fontSize: '1.0625rem', maxWidth: 520, margin: '0 auto', lineHeight: 1.75 }}>
              {t('contact.sub')}
            </p>
          </FadeUp>
        </div>
      </div>

      {/* Main grid */}
      <section style={{ paddingTop: 0, paddingBottom: '6rem' }}>
        <div className="wrap">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))', gap: '4rem', alignItems: 'start' }}>

            {/* LEFT */}
            <div>
              {/* Available banner */}
              <FadeLeft>
                <div style={{ background: 'var(--accent-dim)', border: '1px solid rgba(var(--accent-rgb),.2)', borderRadius: 'var(--r)', padding: '1rem 1.25rem', display: 'flex', alignItems: 'center', gap: '.75rem', marginBottom: '2rem' }}>
                  <motion.span
                    animate={{ opacity: [1, .3, 1] }}
                    transition={{ duration: 1.6, repeat: Infinity }}
                    style={{ width: 8, height: 8, background: 'var(--accent)', borderRadius: '50%', display: 'inline-block', flexShrink: 0 }}
                  />
                  <span style={{ fontSize: '.9375rem' }}>
                    <b style={{ color: 'var(--accent)' }}>{avail[0]}</b>
                    {' · '}{avail[1]}
                  </span>
                </div>
              </FadeLeft>

              {/* Contact links — Email + Telegram only */}
              <FadeLeft delay={0.05}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '.875rem', marginBottom: '2.5rem' }}>
                  {LINKS.map((l, i) => (
                    <motion.a key={i} href={l.href}
                      target={l.href.startsWith('http') ? '_blank' : '_self'}
                      rel="noopener noreferrer"
                      whileHover={{ x: 5, borderColor: 'var(--accent)' }}
                      style={{ display: 'flex', alignItems: 'center', gap: '1.125rem', padding: '1rem 1.25rem', background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 'var(--r)', transition: 'border-color .2s' }}>
                      <div style={{ width: 44, height: 44, background: 'var(--accent-dim)', border: '1px solid rgba(var(--accent-rgb),.18)', borderRadius: 12, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.25rem', flexShrink: 0 }}>
                        {l.icon}
                      </div>
                      <div>
                        <div style={{ fontSize: '.78rem', color: 'var(--text3)', marginBottom: '.15rem' }}>{l.label}</div>
                        <div style={{ fontSize: '1rem', fontWeight: 600 }}>{l.val}</div>
                      </div>
                    </motion.a>
                  ))}
                </div>
              </FadeLeft>

              {/* Mini process */}
              <FadeLeft delay={0.1}>
                <div style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 'var(--rl)', overflow: 'hidden' }}>
                  {pm.map((s, i) => (
                    <div key={i} style={{ display: 'flex', gap: '1.25rem', alignItems: 'flex-start', padding: '1.25rem 1.5rem', borderBottom: i < pm.length - 1 ? '1px solid var(--border)' : 'none' }}>
                      <div style={{ fontFamily: 'var(--ff)', fontSize: '1.75rem', fontWeight: 800, color: 'var(--accent)', minWidth: '2.5rem', lineHeight: 1, opacity: .7 }}>
                        0{i + 1}
                      </div>
                      <div>
                        <strong style={{ fontFamily: 'var(--ff)', fontSize: '.9375rem', fontWeight: 700, display: 'block', marginBottom: '.25rem' }}>{s.t}</strong>
                        <span style={{ fontSize: '.875rem', color: 'var(--text2)' }}>{s.d}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </FadeLeft>
            </div>

            {/* RIGHT — Form */}
            <FadeRight delay={0.1}>
              <ContactForm />
            </FadeRight>
          </div>
        </div>
      </section>
    </>
  )
}
