import { useParams, Link, Navigate } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { FadeUp } from '../components/Animate'
import { getPostBySlug, POSTS } from '../data/blogPosts'

// Minimal Markdown renderer (no extra deps)
function renderMd(text) {
  return text
    // h2
    .replace(/^## (.+)$/gm, '<h2>$1</h2>')
    // h3
    .replace(/^### (.+)$/gm, '<h3>$1</h3>')
    // bold
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    // links
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>')
    // hr
    .replace(/^---$/gm, '<hr>')
    // checklist items
    .replace(/^- \[ \] (.+)$/gm, '<li class="check">$1</li>')
    // table rows (simple)
    .replace(/^\|(.+)\|$/gm, (_, cells) => {
      const tds = cells.split('|').map(c => `<td>${c.trim()}</td>`).join('')
      return `<tr>${tds}</tr>`
    })
    .replace(/^(\<tr\>.*\<\/tr\>)/gm, '$1') // keep as-is
    // ul items
    .replace(/^- (.+)$/gm, '<li>$1</li>')
    // wrap consecutive <li> in <ul>
    .replace(/(<li.*<\/li>\n?)+/g, m => {
      if (m.includes('class="check"')) return `<ul class="checklist">${m}</ul>`
      return `<ul>${m}</ul>`
    })
    // wrap consecutive <tr> in <table>
    .replace(/(<tr>.*<\/tr>\n?)+/g, m => `<table>${m}</table>`)
    // paragraphs (lines not starting with HTML tag)
    .split('\n\n')
    .map(block => {
      if (/^<(h[23]|ul|table|hr|li)/.test(block.trim())) return block
      if (block.trim() === '') return ''
      return `<p>${block.trim()}</p>`
    })
    .join('\n')
}

function RelatedCard({ post }) {
  const { i18n } = useTranslation()
  const lang = i18n.language
  return (
    <Link to={`/blog/${post.slug}`}
      style={{ display: 'block', background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 'var(--r)', padding: '1.25rem', transition: 'all .25s' }}
      onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--accent)'; e.currentTarget.style.transform = 'translateY(-3px)' }}
      onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.transform = 'none' }}>
      <span style={{ fontSize: '.72rem', fontWeight: 700, color: 'var(--accent)', letterSpacing: '.08em', textTransform: 'uppercase', display: 'block', marginBottom: '.5rem' }}>
        {post.category[lang] || post.category.uk}
      </span>
      <span style={{ fontSize: '.9375rem', fontWeight: 600, color: 'var(--text)', lineHeight: 1.4, display: 'block' }}>
        {post.title[lang] || post.title.uk}
      </span>
    </Link>
  )
}

export default function BlogPost() {
  const { slug } = useParams()
  const { i18n } = useTranslation()
  const lang = i18n.language
  const post = getPostBySlug(slug)

  if (!post) return <Navigate to="/blog" replace />

  const related = POSTS.filter(p => p.slug !== slug).slice(0, 3)

  const formatDate = (dateStr) =>
    new Date(dateStr).toLocaleDateString(
      lang === 'de' ? 'de-DE' : lang === 'uk' ? 'uk-UA' : 'en-GB',
      { day: 'numeric', month: 'long', year: 'numeric' }
    )

  const isMobile = window.innerWidth <= 768
  const title = post.title[lang] || post.title.uk
  const excerpt = post.excerpt[lang] || post.excerpt.uk
  const body = post.body[lang] || post.body.uk
  const readMin = post.readMin[lang] || post.readMin.uk

  const backLabel = lang === 'uk' ? '← Блог' : lang === 'de' ? '← Blog' : '← Blog'
  const relatedLabel = lang === 'uk' ? 'Інші статті' : lang === 'de' ? 'Weitere Artikel' : 'More articles'
  const ctaTitle = lang === 'uk' ? 'Потрібна допомога з сайтом?' : lang === 'de' ? 'Brauchen Sie Hilfe mit Ihrer Website?' : 'Need help with your website?'
  const ctaBtn = lang === 'uk' ? 'Безкоштовна консультація →' : lang === 'de' ? 'Kostenlose Beratung →' : 'Free consultation →'

  return (
    <>
      <Helmet>
        <title>{title} | Serhii Kaliuzhnyi</title>
        <meta name="description" content={excerpt} />
        <link rel="canonical" href={`https://sergdev.website/blog/${slug}`} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={excerpt} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={`https://sergdev.website/blog/${slug}`} />
        {post.cover && <meta property="og:image" content={post.cover} />}
        <meta property="article:published_time" content={post.date} />
        <meta property="article:author" content="Serhii Kaliuzhnyi" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          "headline": title,
          "description": excerpt,
          "datePublished": post.date,
          "author": { "@type": "Person", "name": "Serhii Kaliuzhnyi", "url": "https://sergdev.website" },
          "publisher": { "@type": "Person", "name": "Serhii Kaliuzhnyi" },
          "mainEntityOfPage": { "@type": "WebPage", "@id": `https://sergdev.website/blog/${slug}` },
          ...(post.cover ? { "image": post.cover } : {})
        })}</script>
      </Helmet>

      <style>{`
        .prose { color: var(--text2); font-size: 1.0625rem; line-height: 1.82; }
        .prose p { margin-bottom: 1.375rem; }
        .prose h2 {
          font-family: 'Syne', sans-serif; font-size: clamp(1.375rem,2.5vw,1.75rem);
          font-weight: 800; letter-spacing: -.03em; color: var(--text);
          margin: 2.5rem 0 1rem; line-height: 1.2;
        }
        .prose h3 {
          font-family: 'Syne', sans-serif; font-size: 1.1875rem;
          font-weight: 700; color: var(--text);
          margin: 2rem 0 .75rem; line-height: 1.3;
        }
        .prose strong { color: var(--text); font-weight: 600; }
        .prose a { color: var(--accent); text-decoration: underline; text-underline-offset: 3px; }
        .prose a:hover { opacity: .8; }
        .prose ul { padding-left: 1.5rem; margin-bottom: 1.375rem; }
        .prose li { margin-bottom: .5rem; }
        .prose ul.checklist { list-style: none; padding-left: 0; }
        .prose ul.checklist li { display: flex; gap: .75rem; align-items: flex-start; padding: .5rem 0; border-bottom: 1px solid var(--border); }
        .prose ul.checklist li::before { content: '☐'; color: var(--accent); font-size: 1.125rem; flex-shrink: 0; margin-top: -.1rem; }
        .prose hr { border: none; border-top: 1px solid var(--border); margin: 2.5rem 0; }
        .prose table { width: 100%; border-collapse: collapse; margin-bottom: 1.5rem; font-size: .9375rem; }
        .prose td { padding: .75rem 1rem; border: 1px solid var(--border); vertical-align: top; }
        .prose tr:first-child td { background: var(--bg3); font-weight: 600; color: var(--text); }
        @media (max-width: 640px) {
          .prose { font-size: 1rem; }
          .prose h2 { font-size: 1.25rem; }
          .prose table { font-size: .8125rem; }
          .prose td { padding: .5rem .625rem; }
        }
      `}</style>

      {/* Cover hero */}
      {post.cover && (
        <div style={{ height: 360, background: `url(${post.cover}) center/cover`, marginTop: 'var(--nav)' }}>
          <div style={{ height: '100%', background: 'linear-gradient(to bottom, rgba(0,0,0,.2), rgba(0,0,0,.6))' }}/>
        </div>
      )}

      <article style={{ paddingTop: post.cover ? '3rem' : 'calc(var(--nav) + 4rem)', paddingBottom: '6rem' }}>
        <div className="wrap" style={{ maxWidth: 1240 }}>
          <div style={{ display: 'grid', gridTemplateColumns: isMobile
              ? '1fr'
              : '1fr clamp(240px,28%,320px)', gap: '4rem', alignItems: 'start' }}>

            {/* ── MAIN CONTENT ── */}
            <div>
              {/* Back */}
              <FadeUp>
                <Link to="/blog" style={{ display: 'inline-flex', alignItems: 'center', gap: '.4rem', fontSize: '.875rem', color: 'var(--text3)', marginBottom: '2rem', transition: 'color .2s' }}
                  onMouseEnter={e => e.currentTarget.style.color = 'var(--text)'}
                  onMouseLeave={e => e.currentTarget.style.color = 'var(--text3)'}>
                  {backLabel}
                </Link>
              </FadeUp>

              {/* Category + meta */}
              <FadeUp delay={0.04}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '.75rem', marginBottom: '1.25rem', flexWrap: 'wrap' }}>
                  <span style={{ background: 'var(--accent)', color: '#000', fontSize: '.72rem', fontWeight: 700, letterSpacing: '.07em', textTransform: 'uppercase', padding: '.25rem .75rem', borderRadius: 999 }}>
                    {post.category[lang] || post.category.uk}
                  </span>
                  <span style={{ fontSize: '.8rem', color: 'var(--text3)' }}>{formatDate(post.date)}</span>
                  <span style={{ fontSize: '.8rem', color: 'var(--text3)' }}>· {readMin} min</span>
                </div>
              </FadeUp>

              {/* Title */}
              <FadeUp delay={0.07}>
                <h1 style={{
                  fontFamily: lang === 'uk' ? "'Manrope', sans-serif" : "'Syne', sans-serif",
                  fontSize: 'clamp(1.875rem,4vw,3rem)',
                  fontWeight: 800,
                  letterSpacing: lang === 'uk' ? '-.022em' : '-.038em',
                  lineHeight: 1.1,
                  color: 'var(--text)',
                  marginBottom: '1.5rem',
                }}>
                  {title}
                </h1>
              </FadeUp>

              {/* Excerpt lead */}
              <FadeUp delay={0.1}>
                <p style={{ fontSize: '1.125rem', color: 'var(--text2)', lineHeight: 1.7, marginBottom: '2.5rem', fontStyle: 'italic', borderLeft: '3px solid var(--accent)', paddingLeft: '1.25rem' }}>
                  {excerpt}
                </p>
              </FadeUp>

              {/* Body */}
              <FadeUp delay={0.12}>
                <div className="prose" dangerouslySetInnerHTML={{ __html: renderMd(body) }} />
              </FadeUp>

              {/* CTA block after article */}
              <FadeUp delay={0.15}>
                <div style={{ marginTop: '3rem', background: 'var(--accent-dim)', border: '1px solid rgba(var(--accent-rgb),.2)', borderRadius: 'var(--rl)', padding: '2rem' }}>
                  <h3 style={{ fontFamily: "'Syne', sans-serif", fontSize: '1.25rem', fontWeight: 700, color: 'var(--text)', marginBottom: '.75rem' }}>
                    {ctaTitle}
                  </h3>
                  <p style={{ color: 'var(--text2)', fontSize: '.9375rem', lineHeight: 1.7, marginBottom: '1.5rem' }}>
                    {lang === 'uk' && 'Безкоштовний аудит сайту або консультація — відповідаю протягом кількох годин.'}
                    {lang === 'de' && 'Kostenloses Website-Audit oder Beratung — ich antworte innerhalb weniger Stunden.'}
                    {lang === 'en' && 'Free website audit or consultation — I respond within a few hours.'}
                  </p>
                  <Link to="/contact" className="btn ba">{ctaBtn}</Link>
                </div>
              </FadeUp>
            </div>

            {/* ── SIDEBAR ── */}
            <aside style={{ position: isMobile ? 'static' : 'sticky',
              top: isMobile ? 'auto' : 'calc(var(--nav) + 2rem)', width: '100%'}}>
                <FadeUp delay={0.15}>
                  {/* Author card */}
                  <div style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 'var(--rl)', padding: '1.5rem', marginBottom: '1.5rem', display: isMobile ? 'none' : 'block' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '.875rem', marginBottom: '1rem' }}>
                      <img src="https://skaliuzhnyi.github.io/cv/img/profile-img.jpg" alt="Serhii Kaliuzhnyi"
                           style={{ width: 52, height: 52, borderRadius: '50%', objectFit: 'cover', border: '2px solid var(--border2)', flexShrink: 0 }}
                           onError={e => { e.currentTarget.style.display = 'none' }} />
                      <div>
                        <div style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: '.9375rem', color: 'var(--text)' }}>Serhii Kaliuzhnyi</div>
                        <div style={{ fontSize: '.8rem', color: 'var(--text3)', marginTop: '.15rem' }}>Fullstack Developer</div>
                      </div>
                    </div>
                    <p style={{ fontSize: '.875rem', color: 'var(--text2)', lineHeight: 1.65, marginBottom: '1rem' }}>
                      {lang === 'uk' && 'Роблю сайти та застосунки що приводять клієнтів.'}
                      {lang === 'de' && 'Ich baue Websites und Apps, die Kunden bringen.'}
                      {lang === 'en' && 'I build websites and apps that bring clients.'}
                    </p>
                    <Link to="/contact" className="btn ba" style={{ width: '100%', justifyContent: 'center', fontSize: '.875rem', padding: '10px 16px' }}>
                      {ctaBtn}
                    </Link>
                  </div>

                  {/* Related posts */}
                  {related.length > 0 && (
                    <div>
                      <div style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: '.875rem', color: 'var(--text2)', letterSpacing: '.08em', textTransform: 'uppercase', marginBottom: '1rem' }}>
                        {relatedLabel}
                      </div>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '.75rem' }}>
                        {related.map(p => <RelatedCard key={p.slug} post={p} />)}
                      </div>
                    </div>
                  )}
                </FadeUp>
              </aside>
          </div>
        </div>
      </article>
    </>
  )
}
