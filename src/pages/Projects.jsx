import {Helmet} from 'react-helmet-async'
import {useTranslation} from 'react-i18next'
import {Link} from 'react-router-dom'
import {ProjectCard} from '../components/Portfolio'
import {PROJECTS} from '../data/projects'
import {FadeUp, StaggerContainer} from '../components/Animate'
import {SectionLabel} from '../components/Section'


const SEO_META = {
  uk: {
    title: 'Портфоліо — Всі проекти | Serhii Kaliuzhnyi',
    desc: 'Веб-проекти: корпоративні сайти, лендінги, веб-застосунки, інтернет-магазини. React, WordPress, Node.js.'
  },
  de: {
    title: 'Portfolio — Alle Projekte | Serhii Kaliuzhnyi',
    desc: 'Webprojekte: Unternehmenswebsites, Landingpages, Web-Apps, Online-Shops. React, WordPress, Node.js.'
  },
  en: {
    title: 'Portfolio — All Projects | Serhii Kaliuzhnyi',
    desc: 'Web projects: corporate websites, landing pages, web apps, online stores. React, WordPress, Node.js.'
  },
}

export default function Projects() {
  const {t, i18n} = useTranslation()
  const lang = i18n.language
  const meta = SEO_META[lang] || SEO_META.uk
  const isUk = i18n.language === 'uk'

  return (
    <>
      <Helmet>
        <title>{meta.title}</title>
        <meta
          name="description"
          content={meta.desc}
        />
        <link
          rel="canonical"
          href="https://sergdev.website/projects"
        />
      </Helmet>

      {/* Hero */}
      <section
        style={{
          paddingTop: 'calc(var(--nav) + 5rem)',
          paddingBottom: '3rem'
        }}
      >
        <div className="wrap">
          <SectionLabel>{t('portfolio.label')}</SectionLabel>
          <FadeUp delay={0.05}>
            <h1
              style={{
                fontFamily: isUk ? "'Unbounded', sans-serif" : "'Syne', sans-serif",
                fontSize: 'clamp(2.5rem,6vw,5rem)',
                fontWeight: 800,
                letterSpacing: '-.04em',
                lineHeight: 1.06,
                marginBottom: '1rem'
              }}
            >
              {t('portfolio.title')}
            </h1>
          </FadeUp>
          <FadeUp delay={0.1}>
            <p
              style={{
                color: 'var(--text2)',
                fontSize: '1rem',
                lineHeight: 1.78,
                maxWidth: 560,
                marginBottom: '2.5rem',
                fontStyle: 'italic'
              }}
            >
              {t('portfolio.intro')}
            </p>
          </FadeUp>
        </div>
      </section>

      {/* All projects grid */}
      <section style={{paddingTop: '1rem', paddingBottom: '6rem'}}>
        <div className="wrap">
          <StaggerContainer
            stagger={0.08}
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill,minmax(340px,1fr))',
              gap: '1.375rem'
            }}
          >
            {PROJECTS.map(p => <ProjectCard
              key={p.id}
              p={p}
            />)}
          </StaggerContainer>
        </div>
      </section>

      {/* Bottom CTA */}
      <section style={{paddingBottom: '6rem', textAlign: 'center'}}>
        <div className="wrap">
          <FadeUp>
            <p
              style={{
                color: 'var(--text2)',
                marginBottom: '2rem',
                fontSize: '1rem',
                fontStyle: 'italic'
              }}
            >
              {t('portfolio.intro')}
            </p>
            <Link
              to="/contact"
              className="btn ba"
              aria-label={t('hero.cta1')}
            >{t('hero.cta1')} →</Link>
          </FadeUp>
        </div>
      </section>
    </>
  )
}
