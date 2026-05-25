import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { StaggerContainer, item, FadeUp } from '../components/Animate'
import { SectionLabel } from '../components/Section'
import { POSTS } from '../data/blogPosts'

const SEO = {
  uk: { title:'Блог — Веб-розробка та SEO | Serhii Kaliuzhnyi', desc:'Практичні статті про розробку сайтів, SEO і цифровий маркетинг для малого бізнесу.' },
  de: { title:'Blog — Webentwicklung & SEO | Serhii Kaliuzhnyi', desc:'Praktische Artikel über Website-Entwicklung, SEO und digitales Marketing für kleine Unternehmen.' },
  en: { title:'Blog — Web Development & SEO | Serhii Kaliuzhnyi', desc:'Practical articles about website development, SEO and digital marketing for small businesses.' },
}

const INTRO = {
  uk: 'Практичні матеріали про розробку сайтів, SEO і цифровий маркетинг — без води і складного жаргону.',
  de: 'Praktische Artikel über Website-Entwicklung, SEO und digitales Marketing — ohne Fachjargon.',
  en: 'Practical articles about website development, SEO and digital marketing — no fluff, no jargon.',
}

function PostCard({ post, index }) {
  const { i18n } = useTranslation()
  const lang = i18n.language
  const delay = (index % 3) * 0.1

  const formatDate = (dateStr) => {
    const d = new Date(dateStr)
    return d.toLocaleDateString(
      lang === 'de' ? 'de-DE' : lang === 'uk' ? 'uk-UA' : 'en-GB',
      { day: 'numeric', month: 'long', year: 'numeric' }
    )
  }

  return (
    <motion.article
      variants={item}
      whileHover={{ y: -6, borderColor: 'var(--border2)', boxShadow: '0 16px 48px rgba(0,0,0,.14)' }}
      style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 'var(--rl)', overflow: 'hidden', display: 'flex', flexDirection: 'column', transition: 'border-color .2s' }}>

      {/* Cover image or gradient placeholder */}
      <Link to={`/blog/${post.slug}`} style={{ display: 'block', aspectRatio: '16/9', background: 'linear-gradient(135deg, var(--bg3) 0%, var(--bg2) 100%)', position: 'relative', overflow: 'hidden', flexShrink: 0 }}>
        {post.cover
          ? <img src={post.cover} alt={post.title[lang]} style={{ width: '100%', height: '100%', objectFit: 'cover' }} loading="lazy" />
          : (
            <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              {/* Decorative pattern */}
              <svg width="120" height="80" viewBox="0 0 120 80" fill="none">
                <rect x="10" y="10" width="100" height="60" rx="8" stroke="var(--border2)" strokeWidth="1.5" fill="none"/>
                <rect x="20" y="22" width="60" height="6" rx="3" fill="var(--border2)" opacity=".6"/>
                <rect x="20" y="34" width="80" height="4" rx="2" fill="var(--border2)" opacity=".3"/>
                <rect x="20" y="44" width="70" height="4" rx="2" fill="var(--border2)" opacity=".3"/>
                <rect x="20" y="54" width="40" height="4" rx="2" fill="var(--border2)" opacity=".3"/>
                <circle cx="95" cy="22" r="8" fill="var(--accent-dim)" stroke="rgba(var(--accent-rgb),.3)" strokeWidth="1.5"/>
              </svg>
            </div>
          )}
        {/* Category badge */}
        <span style={{ position: 'absolute', top: '1rem', left: '1rem', background: 'var(--accent)', color: '#000', fontSize: '.7rem', fontWeight: 700, letterSpacing: '.06em', textTransform: 'uppercase', padding: '.25rem .7rem', borderRadius: 999 }}>
          {post.category[lang] || post.category.uk}
        </span>
      </Link>

      {/* Body */}
      <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', flex: 1 }}>
        {/* Meta */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '.75rem', marginBottom: '.875rem', fontSize: '.78rem', color: 'var(--text3)' }}>
          <span>{formatDate(post.date)}</span>
          <span>·</span>
          <span>{post.readMin[lang] || post.readMin.uk} min</span>
        </div>

        {/* Title */}
        <Link to={`/blog/${post.slug}`}>
          <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: '1.0625rem', fontWeight: 700, lineHeight: 1.4, marginBottom: '.75rem', color: 'var(--text)', transition: 'color .2s' }}
            onMouseEnter={e => e.currentTarget.style.color = 'var(--accent)'}
            onMouseLeave={e => e.currentTarget.style.color = 'var(--text)'}>
            {post.title[lang] || post.title.uk}
          </h2>
        </Link>

        {/* Excerpt */}
        <p style={{ fontSize: '.875rem', color: 'var(--text2)', lineHeight: 1.7, flex: 1, marginBottom: '1.25rem' }}>
          {post.excerpt[lang] || post.excerpt.uk}
        </p>

        {/* Read more */}
        <Link to={`/blog/${post.slug}`}
          style={{ display: 'inline-flex', alignItems: 'center', gap: '.375rem', fontSize: '.8125rem', fontWeight: 600, color: 'var(--accent)', marginTop: 'auto', transition: 'gap .2s' }}
          onMouseEnter={e => e.currentTarget.style.gap = '.625rem'}
          onMouseLeave={e => e.currentTarget.style.gap = '.375rem'}>
          {lang === 'uk' ? 'Читати далі' : lang === 'de' ? 'Weiterlesen' : 'Read more'} →
        </Link>
      </div>
    </motion.article>
  )
}

export default function Blog() {
  const { t, i18n } = useTranslation()
  const lang = i18n.language
  const meta = SEO[lang] || SEO.uk

  return (
    <>
      <Helmet>
        <title>{meta.title}</title>
        <meta name="description" content={meta.desc} />
        <link rel="canonical" href="https://sergdev.website/blog" />
        <meta property="og:title" content={meta.title} />
        <meta property="og:description" content={meta.desc} />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Blog",
          "name": "Serhii Kaliuzhnyi Blog",
          "url": "https://sergdev.website/blog",
          "description": meta.desc,
          "author": { "@type": "Person", "name": "Serhii Kaliuzhnyi" }
        })}</script>
      </Helmet>

      {/* Hero */}
      <section style={{ paddingTop: 'calc(var(--nav) + 4rem)', paddingBottom: '3rem' }}>
        <div className="wrap">
          <SectionLabel>
            {lang === 'uk' ? 'Блог' : lang === 'de' ? 'Blog' : 'Blog'}
          </SectionLabel>
          <FadeUp delay={0.05}>
            <h1 style={{ fontFamily: "'Syne', sans-serif", fontSize: 'clamp(2.5rem,5.5vw,4.5rem)', fontWeight: 800, letterSpacing: '-.04em', lineHeight: 1.06, marginBottom: '1rem', color: 'var(--text)' }}>
              {lang === 'uk' ? 'Корисне про веб' : lang === 'de' ? 'Wissenswertes über Web' : 'Web Knowledge'}
            </h1>
          </FadeUp>
          <FadeUp delay={0.1}>
            <p style={{ color: 'var(--text2)', fontSize: '1.0625rem', lineHeight: 1.75, maxWidth: 560 }}>
              {INTRO[lang] || INTRO.uk}
            </p>
          </FadeUp>
        </div>
      </section>

      {/* Posts grid — same layout as /projects */}
      <section style={{ paddingTop: '1rem', paddingBottom: '6rem' }}>
        <div className="wrap">
          <StaggerContainer
            stagger={0.09}
            style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(340px,1fr))', gap: '1.375rem' }}>
            {POSTS.map((post, i) => (
              <PostCard key={post.slug} post={post} index={i} />
            ))}
          </StaggerContainer>
        </div>
      </section>
    </>
  )
}
