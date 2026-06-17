import { Helmet } from 'react-helmet-async'
import { useTranslation } from 'react-i18next'
import { FadeUp } from '../components/Animate'
import { SectionLabel } from '../components/Section'

const SEO = {
  uk: { title: 'Datenschutzerklärung | Serhii Kaliuzhnyi', desc: 'Політика конфіденційності відповідно до GDPR/DSGVO.' },
  de: { title: 'Datenschutzerklärung | Serhii Kaliuzhnyi', desc: 'Informationen zur Erhebung und Verarbeitung personenbezogener Daten gemäß DSGVO.' },
  en: { title: 'Privacy Policy | Serhii Kaliuzhnyi', desc: 'Information on the collection and processing of personal data according to GDPR.' },
}

const CONTENT = {
  uk: {
    heading: 'Datenschutzerklärung',
    sub: 'Інформація про обробку персональних даних відповідно до GDPR (DSGVO)',
    updated: 'Останнє оновлення: червень 2026',
    sections: [
      {
        title: '1. Відповідальна особа',
        body: 'Відповідальним за обробку даних на цьому сайті відповідно до Art. 4 Abs. 7 DSGVO є:\n\nSerhii Kaliuzhnyi\nBad Camberg, Hessen, Deutschland\nEmail: flskaliuzhnyi@gmail.com',
      },
      {
        title: '2. Загальна інформація про обробку даних',
        body: 'Я серйозно ставлюся до захисту ваших персональних даних і обробляю їх конфіденційно та відповідно до законодавчих вимог про захист даних, а також цієї політики конфіденційності. Персональні дані — це будь-яка інформація, яка стосується ідентифікованої або ідентифікованої фізичної особи.',
      },
      {
        title: '3. Збір даних при відвідуванні сайту',
        body: 'При суто інформаційному використанні сайту, тобто якщо ви не реєструєтесь і не передаєте мені інформацію іншим способом, я збираю лише дані, які ваш браузер передає на сервер (так звані "лог-файли сервера"). Якщо ви відвідуєте мій сайт, я збираю наступні дані, технічно необхідні для показу сайту:\n\n• IP-адреса\n• Дата і час запиту\n• Назва і URL запитуваного файлу\n• Сайт з якого здійснено перехід (referrer URL)\n• Браузер, який ви використовуєте, і операційна система\n\nЦі дані не зберігаються разом з іншими персональними даними і служать виключно технічному забезпеченню роботи сайту.',
      },
      {
        title: '4. Контактна форма',
        body: 'Якщо ви надсилаєте мені запит через контактну форму, ваші дані з форми запиту, включаючи контактні дані, які ви там вказали, зберігаються мною з метою обробки запиту і у разі подальших запитань. Ці дані я не передаю без вашої згоди.\n\nОбробка цих даних здійснюється на основі Art. 6 Abs. 1 lit. b DSGVO, оскільки запит стосується виконання договору або необхідний для здійснення передконтрактних заходів.\n\nКонтактна форма цього сайту обробляється через сервіс Formspree (Formspree, Inc., США). Дані, які ви вводите у форму, передаються безпосередньо на сервери Formspree для обробки і пересилки мені на email.',
      },
      {
        title: '5. Тривалість зберігання',
        body: 'Якщо в цій політиці конфіденційності не вказано конкретного терміну зберігання, ваші персональні дані залишаються у мене до тих пір, поки мета їх обробки не зникне. Якщо ви заявите про обґрунтоване право на видалення або відкличете згоду на обробку даних, дані будуть видалені, якщо у мене немає інших юридично допустимих причин для зберігання ваших персональних даних.',
      },
      {
        title: '6. Ваші права',
        body: 'Ви маєте право:\n\n• Отримати інформацію про ваші збережені персональні дані (Art. 15 DSGVO)\n• Вимагати негайного виправлення неправильних даних (Art. 16 DSGVO)\n• Вимагати видалення ваших персональних даних (Art. 17 DSGVO)\n• Вимагати обмеження обробки даних (Art. 18 DSGVO)\n• Заперечувати обробці ваших даних (Art. 21 DSGVO)\n• Вимагати передачі даних (Art. 20 DSGVO)\n\nЯкщо ви вважаєте, що обробка ваших даних порушує закон про захист даних, ви маєте право подати скаргу до відповідного органу нагляду.',
      },
      {
        title: '7. Cookies',
        body: 'Цей сайт не використовує сторонні cookies для аналітики або реклами на момент публікації цієї політики. Якщо в майбутньому буде впроваджено Google Analytics, Facebook Pixel або подібні інструменти — ця сторінка буде оновлена, і ви отримаєте можливість дати або відхилити згоду через cookie-banner перед їх активацією.',
      },
      {
        title: '8. SSL/TLS-шифрування',
        body: 'З метою захисту передачі конфіденційного контенту цей сайт використовує SSL/TLS-шифрування. Зашифроване з\'єднання можна розпізнати за тим, що адресний рядок браузера змінюється з "http://" на "https://" і за символом замка в адресному рядку браузера.',
      },
    ],
  },
  de: {
    heading: 'Datenschutzerklärung',
    sub: 'Informationen zur Erhebung und Verarbeitung personenbezogener Daten gemäß DSGVO',
    updated: 'Letzte Aktualisierung: Juni 2026',
    sections: [
      {
        title: '1. Verantwortlicher',
        body: 'Verantwortlicher für die Datenverarbeitung auf dieser Website im Sinne der DSGVO (Art. 4 Abs. 7 DSGVO) ist:\n\nSerhii Kaliuzhnyi\nBad Camberg, Hessen, Deutschland\nE-Mail: flskaliuzhnyi@gmail.com',
      },
      {
        title: '2. Allgemeine Hinweise zur Datenverarbeitung',
        body: 'Ich nehme den Schutz Ihrer persönlichen Daten sehr ernst. Ich behandle Ihre personenbezogenen Daten vertraulich und entsprechend den gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.',
      },
      {
        title: '3. Datenerfassung beim Besuch der Website',
        body: 'Bei der rein informatorischen Nutzung der Website, also wenn Sie sich nicht registrieren oder mir anderweitig Informationen übermitteln, erhebe ich nur die Daten, die Ihr Browser an den Server übermittelt (sogenannte "Server-Logfiles"). Wenn Sie meine Website besuchen, erhebe ich folgende, technisch erforderliche Daten:\n\n• IP-Adresse\n• Datum und Uhrzeit der Anfrage\n• Name und URL der abgerufenen Datei\n• Website, von der aus der Zugriff erfolgt (Referrer-URL)\n• Verwendeter Browser und ggf. das Betriebssystem\n\nDie genannten Daten werden nicht zusammen mit anderen personenbezogenen Daten gespeichert und dienen ausschließlich der technischen Bereitstellung der Website.',
      },
      {
        title: '4. Kontaktformular',
        body: 'Wenn Sie mir per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei mir gespeichert. Diese Daten gebe ich nicht ohne Ihre Einwilligung weiter.\n\nDie Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre Anfrage mit der Erfüllung eines Vertrags zusammenhängt oder zur Durchführung vorvertraglicher Maßnahmen erforderlich ist.\n\nDas Kontaktformular dieser Website wird über den Dienst Formspree (Formspree, Inc., USA) verarbeitet. Die von Ihnen eingegebenen Daten werden direkt an die Server von Formspree übermittelt, um die Anfrage zu verarbeiten und an mich per E-Mail weiterzuleiten.',
      },
      {
        title: '5. Speicherdauer',
        body: 'Soweit innerhalb dieser Datenschutzerklärung keine speziellere Speicherdauer genannt wurde, verbleiben Ihre personenbezogenen Daten bei mir, bis der Zweck für die Datenverarbeitung entfällt. Fordern Sie ein berechtigtes Löschersuchen oder widerrufen Sie eine Einwilligung zur Datenverarbeitung, werden Ihre Daten gelöscht, sofern keine sonstigen rechtlich zulässigen Gründe für die Speicherung vorliegen.',
      },
      {
        title: '6. Ihre Rechte',
        body: 'Sie haben das Recht:\n\n• Auskunft über Ihre bei mir gespeicherten personenbezogenen Daten zu verlangen (Art. 15 DSGVO)\n• Unverzüglich die Berichtigung unrichtiger Daten zu verlangen (Art. 16 DSGVO)\n• Die Löschung Ihrer personenbezogenen Daten zu verlangen (Art. 17 DSGVO)\n• Die Einschränkung der Verarbeitung Ihrer Daten zu verlangen (Art. 18 DSGVO)\n• Widerspruch gegen die Verarbeitung Ihrer Daten einzulegen (Art. 21 DSGVO)\n• Die Übertragung Ihrer Daten zu verlangen (Art. 20 DSGVO)\n\nWenn Sie der Ansicht sind, dass die Verarbeitung Ihrer Daten gegen das Datenschutzrecht verstößt, haben Sie das Recht, sich bei einer Aufsichtsbehörde zu beschweren.',
      },
      {
        title: '7. Cookies',
        body: 'Diese Website verwendet zum Zeitpunkt der Veröffentlichung dieser Erklärung keine Drittanbieter-Cookies für Analyse oder Werbung. Sollten in Zukunft Google Analytics, Facebook Pixel oder ähnliche Tools eingeführt werden, wird diese Seite aktualisiert und Sie erhalten vor deren Aktivierung die Möglichkeit, über ein Cookie-Banner zuzustimmen oder abzulehnen.',
      },
      {
        title: '8. SSL- bzw. TLS-Verschlüsselung',
        body: 'Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte eine SSL- bzw. TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie daran, dass die Adresszeile des Browsers von "http://" auf "https://" wechselt und an dem Schloss-Symbol in Ihrer Browserzeile.',
      },
    ],
  },
  en: {
    heading: 'Privacy Policy',
    sub: 'Information on the collection and processing of personal data according to GDPR',
    updated: 'Last updated: June 2026',
    sections: [
      {
        title: '1. Controller',
        body: 'The controller responsible for data processing on this website according to Art. 4 (7) GDPR is:\n\nSerhii Kaliuzhnyi\nBad Camberg, Hessen, Germany\nEmail: flskaliuzhnyi@gmail.com',
      },
      {
        title: '2. General information on data processing',
        body: 'I take the protection of your personal data very seriously. I treat your personal data confidentially and in accordance with statutory data protection regulations and this privacy policy. Personal data is any information that relates to an identified or identifiable natural person.',
      },
      {
        title: '3. Data collection when visiting the website',
        body: 'When you use this website purely for informational purposes — that is, if you do not register or otherwise provide me with information — I only collect the data that your browser transmits to the server (so-called "server log files"). When you visit my website, I collect the following data, which is technically necessary to display the website:\n\n• IP address\n• Date and time of the request\n• Name and URL of the file retrieved\n• Website from which access is made (referrer URL)\n• Browser used and, if applicable, the operating system\n\nThis data is not stored together with other personal data and is used solely for the technical provision of the website.',
      },
      {
        title: '4. Contact form',
        body: 'If you send me enquiries via the contact form, your details from the enquiry form, including the contact details you provided there, will be stored by me for the purpose of processing the enquiry and in case of follow-up questions. I do not pass this data on without your consent.\n\nThe processing of this data is based on Art. 6 (1) lit. b GDPR, provided your request is related to the performance of a contract or is necessary to carry out pre-contractual measures.\n\nThe contact form on this website is processed via the Formspree service (Formspree, Inc., USA). The data you enter is transmitted directly to Formspree\'s servers to process the request and forward it to me by email.',
      },
      {
        title: '5. Storage duration',
        body: 'Unless a more specific storage period is mentioned within this privacy policy, your personal data will remain with me until the purpose for the data processing no longer applies. If you assert a justified request for deletion or revoke consent to data processing, your data will be deleted unless I have other legally permissible reasons for storing your personal data.',
      },
      {
        title: '6. Your rights',
        body: 'You have the right to:\n\n• Request information about your personal data stored by me (Art. 15 GDPR)\n• Request the immediate correction of incorrect data (Art. 16 GDPR)\n• Request the deletion of your personal data (Art. 17 GDPR)\n• Request the restriction of the processing of your data (Art. 18 GDPR)\n• Object to the processing of your data (Art. 21 GDPR)\n• Request the transfer of your data (Art. 20 GDPR)\n\nIf you believe that the processing of your data violates data protection law, you have the right to lodge a complaint with a supervisory authority.',
      },
      {
        title: '7. Cookies',
        body: 'This website does not use third-party cookies for analytics or advertising at the time this policy is published. Should Google Analytics, Facebook Pixel, or similar tools be introduced in the future, this page will be updated and you will be given the option to consent or decline via a cookie banner before they are activated.',
      },
      {
        title: '8. SSL/TLS encryption',
        body: 'For security reasons and to protect the transmission of confidential content, this site uses SSL/TLS encryption. You can recognize an encrypted connection by the fact that the browser\'s address line changes from "http://" to "https://" and by the lock icon in your browser line.',
      },
    ],
  },
}

export default function Datenschutz() {
  const { i18n } = useTranslation()
  const lang = i18n.language
  const meta = SEO[lang] || SEO.de
  const c = CONTENT[lang] || CONTENT.de

  return (
    <>
      <Helmet>
        <title>{meta.title}</title>
        <meta name="description" content={meta.desc} />
        <link rel="canonical" href="https://sergdev.website/datenschutz" />
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
          <FadeUp delay={0.08}>
            <p style={{ color: 'var(--text2)', fontSize: '1rem', lineHeight: 1.7, marginBottom: '.5rem' }}>
              {c.sub}
            </p>
          </FadeUp>
          <FadeUp delay={0.1}>
            <p style={{ color: 'var(--text3)', fontSize: '.8125rem', marginBottom: '3rem' }}>
              {c.updated}
            </p>
          </FadeUp>

          {c.sections.map((sec, i) => (
            <FadeUp key={i} delay={0.12 + i * 0.03}>
              <div style={{ marginBottom: '2.5rem' }}>
                <h2 style={{
                  fontFamily: "'Syne', sans-serif",
                  fontSize: '1.0625rem',
                  fontWeight: 700,
                  color: 'var(--text)',
                  marginBottom: '.875rem',
                }}>
                  {sec.title}
                </h2>
                <p style={{
                  color: 'var(--text2)',
                  fontSize: '.9375rem',
                  lineHeight: 1.75,
                  whiteSpace: 'pre-line',
                }}>
                  {sec.body}
                </p>
              </div>
            </FadeUp>
          ))}
        </div>
      </section>
    </>
  )
}
