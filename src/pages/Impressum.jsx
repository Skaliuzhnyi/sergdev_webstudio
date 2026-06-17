import { Helmet } from 'react-helmet-async'
import { useTranslation } from 'react-i18next'
import { FadeUp } from '../components/Animate'
import { SectionLabel } from '../components/Section'

const SEO = {
  uk: { title: 'Impressum | Serhii Kaliuzhnyi', desc: 'Юридична інформація про власника сайту відповідно до § 5 TMG.' },
  de: { title: 'Impressum | Serhii Kaliuzhnyi', desc: 'Rechtliche Anbieterkennzeichnung gemäß § 5 TMG.' },
  en: { title: 'Impressum | Serhii Kaliuzhnyi', desc: 'Legal disclosure of the website operator according to § 5 TMG.' },
}

const CONTENT = {
  uk: {
    heading: 'Impressum',
    sub: 'Інформація про надавача послуг відповідно до § 5 TMG (Telemediengesetz)',
    sections: [
      {
        title: 'Дані власника сайту',
        rows: [
          ['Ім\'я', 'Serhii Kaliuzhnyi'],
          ['Діяльність', 'Fullstack Developer (Einzelunternehmer / Freiberufler)'],
          ['Адреса', 'Bad Camberg, Hessen, Deutschland'],
          ['Email', 'flskaliuzhnyi@gmail.com'],
          ['Telegram', '@sergkdev'],
        ],
      },
      {
        title: 'Відповідальний за контент',
        body: 'Відповідно до § 18 Abs. 2 MStV відповідальним за контент цього сайту є Serhii Kaliuzhnyi (адреса вказана вище).',
      },
      {
        title: 'Відмова від відповідальності за контент',
        body: 'Контент цього сайту створений з максимальною ретельністю. Однак я не несу відповідальності за повноту, точність і актуальність наданого контенту. Як надавач послуг я несу відповідальність за власний контент на цих сторінках відповідно до § 7 Abs. 1 TMG згідно з загальним законодавством. Згідно з §§ 8–10 TMG я не зобов\'язаний контролювати передану або збережену сторонню інформацію або досліджувати обставини, що вказують на незаконну діяльність.',
      },
      {
        title: 'Відмова від відповідальності за посилання',
        body: 'Цей сайт містить посилання на зовнішні сайти третіх осіб, на контент яких я не маю впливу. Тому я не можу нести відповідальність за цей зовнішній контент. За контент посилань відповідає відповідний провайдер або оператор сторінок. На момент розміщення посилання не було виявлено жодних правонарушень. Постійний контроль контенту посилань без конкретних доказів порушення є необґрунтованим. У разі виявлення порушень такі посилання будуть негайно видалені.',
      },
      {
        title: 'Авторське право',
        body: 'Контент і твори на цих сторінках, створені оператором сайту, підпадають під дію німецького закону про авторське право. Відтворення, обробка, розповсюдження та будь-яке використання за межами авторського права вимагають письмової згоди відповідного автора. Завантаження та копії цієї сторінки дозволені тільки для приватного, некомерційного використання.',
      },
    ],
  },
  de: {
    heading: 'Impressum',
    sub: 'Angaben gemäß § 5 TMG (Telemediengesetz)',
    sections: [
      {
        title: 'Angaben zum Anbieter',
        rows: [
          ['Name', 'Serhii Kaliuzhnyi'],
          ['Tätigkeit', 'Fullstack Developer (Einzelunternehmer / Freiberufler)'],
          ['Anschrift', 'Bad Camberg, Hessen, Deutschland'],
          ['E-Mail', 'flskaliuzhnyi@gmail.com'],
          ['Telegram', '@sergkdev'],
        ],
      },
      {
        title: 'Verantwortlich für den Inhalt',
        body: 'Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV ist Serhii Kaliuzhnyi (Anschrift wie oben).',
      },
      {
        title: 'Haftung für Inhalte',
        body: 'Die Inhalte dieser Seite wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte kann ich jedoch keine Gewähr übernehmen. Als Diensteanbieter bin ich gemäß § 7 Abs. 1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG bin ich als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.',
      },
      {
        title: 'Haftung für Links',
        body: 'Mein Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte ich keinen Einfluss habe. Deshalb kann ich für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werde ich derartige Links umgehend entfernen.',
      },
      {
        title: 'Urheberrecht',
        body: 'Die durch den Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.',
      },
    ],
  },
  en: {
    heading: 'Impressum',
    sub: 'Legal disclosure according to § 5 TMG (German Telemedia Act)',
    sections: [
      {
        title: 'Provider information',
        rows: [
          ['Name', 'Serhii Kaliuzhnyi'],
          ['Activity', 'Fullstack Developer (sole proprietor / freelancer)'],
          ['Address', 'Bad Camberg, Hessen, Germany'],
          ['Email', 'flskaliuzhnyi@gmail.com'],
          ['Telegram', '@sergkdev'],
        ],
      },
      {
        title: 'Responsible for content',
        body: 'Responsible for the content according to § 18 Abs. 2 MStV is Serhii Kaliuzhnyi (address as above).',
      },
      {
        title: 'Liability for content',
        body: 'The contents of this site have been created with the utmost care. However, I cannot guarantee the accuracy, completeness, or timeliness of the content. As a service provider, I am responsible for my own content on these pages in accordance with general laws under § 7 Abs. 1 TMG. However, according to §§ 8 to 10 TMG, I am not obligated to monitor transmitted or stored third-party information or to investigate circumstances that indicate illegal activity.',
      },
      {
        title: 'Liability for links',
        body: 'My website contains links to external third-party websites over whose content I have no influence. Therefore, I cannot accept any liability for this external content. The respective provider or operator of the linked pages is always responsible for their content. The linked pages were checked for possible legal violations at the time of linking. Illegal content was not recognizable at the time of linking. A permanent content control of the linked pages is not reasonable without concrete evidence of a legal violation. If I become aware of any legal violations, I will remove such links immediately.',
      },
      {
        title: 'Copyright',
        body: 'The content and works created by the site operator on these pages are subject to German copyright law. Reproduction, editing, distribution, and any kind of use outside the limits of copyright law require the written consent of the respective author. Downloads and copies of this page are only permitted for private, non-commercial use.',
      },
    ],
  },
}

export default function Impressum() {
  const { i18n } = useTranslation()
  const lang = i18n.language
  const meta = SEO[lang] || SEO.de
  const c = CONTENT[lang] || CONTENT.de

  return (
    <>
      <Helmet>
        <title>{meta.title}</title>
        <meta name="description" content={meta.desc} />
        <link rel="canonical" href="https://sergdev.website/impressum" />
        <meta name="robots" content="noindex, follow" />
      </Helmet>

      <section style={{ paddingTop: 'calc(var(--nav) + 4rem)', paddingBottom: '6rem' }}>
        <div className="wrap" style={{ maxWidth: 760 }}>
          <SectionLabel>Legal</SectionLabel>
          <FadeUp delay={0.05}>
            <h1 style={{
              fontFamily: lang === 'uk' ? "'Manrope', sans-serif" : "'Syne', sans-serif",
              fontSize: 'clamp(2rem,4.5vw,3.25rem)',
              fontWeight: 800,
              letterSpacing: lang === 'uk' ? '-.022em' : '-.038em',
              lineHeight: 1.08,
              color: 'var(--text)',
              marginBottom: '.75rem',
            }}>
              {c.heading}
            </h1>
          </FadeUp>
          <FadeUp delay={0.1}>
            <p style={{ color: 'var(--text2)', fontSize: '1rem', lineHeight: 1.7, marginBottom: '3rem' }}>
              {c.sub}
            </p>
          </FadeUp>

          {c.sections.map((sec, i) => (
            <FadeUp key={i} delay={0.12 + i * 0.04}>
              <div style={{ marginBottom: '2.5rem' }}>
                <h2 style={{
                  fontFamily: "'Syne', sans-serif",
                  fontSize: '1.125rem',
                  fontWeight: 700,
                  color: 'var(--text)',
                  marginBottom: '1rem',
                }}>
                  {sec.title}
                </h2>

                {sec.rows && (
                  <div style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 'var(--r)', overflow: 'hidden' }}>
                    {sec.rows.map(([label, value], idx) => (
                      <div key={idx} style={{
                        display: 'grid',
                        gridTemplateColumns: '140px 1fr',
                        gap: '1rem',
                        padding: '.875rem 1.25rem',
                        borderBottom: idx < sec.rows.length - 1 ? '1px solid var(--border)' : 'none',
                        fontSize: '.9375rem',
                      }}>
                        <span style={{ color: 'var(--text3)' }}>{label}</span>
                        <span style={{ color: 'var(--text)', fontWeight: 500 }}>{value}</span>
                      </div>
                    ))}
                  </div>
                )}

                {sec.body && (
                  <p style={{ color: 'var(--text2)', fontSize: '.9375rem', lineHeight: 1.75 }}>
                    {sec.body}
                  </p>
                )}
              </div>
            </FadeUp>
          ))}
        </div>
      </section>
    </>
  )
}
