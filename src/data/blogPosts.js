// ─── BLOG POSTS DATA ────────────────────────────────────────────
// Add new posts at the TOP of the array (newest first)
// slug must be unique and URL-friendly

export const POSTS = [
  {
    slug: 'warum-ihre-website-kunden-verliert',
    date: '2026-05-10',
    readMin: {uk: 5, de: 5, en: 5},
    category: {uk: 'Веб-дизайн', de: 'Webdesign', en: 'Web Design'},
    cover: null, // add image URL later, e.g. '/blog/post1-cover.jpg'
    title: {
      uk: '5 причин, чому ваш сайт губить клієнтів щодня',
      de: '5 Gründe, warum Ihre Website täglich Kunden verliert',
      en: '5 Reasons Your Website Is Losing Clients Every Day',
    },
    excerpt: {
      uk: 'Більшість власників бізнесу навіть не здогадуються, що їхній сайт активно відштовхує потенційних клієнтів. Розбираємо 5 конкретних помилок і як їх виправити.',
      de: 'Die meisten Unternehmer ahnen nicht, dass ihre Website aktiv potenzielle Kunden abschreckt. Wir analysieren 5 konkrete Fehler und wie man sie behebt.',
      en: 'Most business owners have no idea their website is actively pushing potential clients away. We break down 5 concrete mistakes and how to fix them.',
    },
    body: {
      uk: `## Сайт є. Клієнтів — немає. Чому?

Уявіть ситуацію: людина шукає ваші послуги в Google, знаходить ваш сайт, заходить — і через 8 секунд закриває вкладку. Без дзвінка, без форми, без замовлення.

Це не теорія. **53% мобільних користувачів покидають сайт, якщо він завантажується більше 3 секунд** (дані Google). І більшість малого бізнесу цього навіть не відстежує.

Ось 5 найпоширеніших причин, чому це відбувається.

---

## 1. Сайт завантажується повільно

Це вбивця №1. Кожна зайва секунда завантаження коштує приблизно **7% конверсії**. Якщо ваш сайт вантажиться 6–8 секунд — ви вже втратили половину відвідувачів ще до того, як вони побачили ваш контент.

**Як перевірити:** відкрийте [PageSpeed Insights](https://pagespeed.web.dev/) і введіть адресу вашого сайту. Якщо оцінка нижче 70 — є серйозна проблема.

**Типові причини:** важкі незтиснуті фото, застарілий WordPress без кешування, дешевий хостинг.

---

## 2. Зламаний мобільний вигляд

**Більше 60% трафіку сьогодні — зі смартфонів.** Якщо ваш сайт виглядає нормально на комп'ютері, але на телефоні кнопки накладаються, текст дрібний, а форма не натискається — ви втрачаєте більшість відвідувачів.

Перевірте сайт прямо зараз на своєму телефоні. Зайдіть на головну, спробуйте натиснути CTA-кнопку, заповніть форму. Якщо щось незручно — ваші клієнти відчувають те саме.

---

## 3. Незрозуміло що ви робите і для кого

Відвідувач заходить на головну сторінку і за 5 секунд повинен зрозуміти:
- Що ви пропонуєте
- Кому це потрібно
- Що йому зробити далі

Якщо замість цього він бачить красивий банер з гаслом типу "Ми — команда професіоналів" і не може знайти ціни або форму контакту — він піде.

**Правило:** заголовок вашого сайту має відповідати на питання клієнта, а не описувати вашу компанію.

---

## 4. Немає чіткого заклику до дії (CTA)

Клієнт готовий замовити. Але де кнопка? "Зв'яжіться з нами" загублена в підвалі, телефон написаний дрібно, форма потребує заповнення 12 полів.

Кожна сторінка повинна мати **одну головну дію** — зателефонувати, написати, залишити заявку. Кнопка повинна бути помітна і текст на ній конкретний: "Отримати безкоштовну консультацію" краще ніж просто "Надіслати".

---

## 5. Google вас не знаходить

Якщо ваш сайт не оптимізований для пошукових систем — він існує тільки для тих, хто вже знає вашу адресу. Нових клієнтів з пошуку не буде.

Базове SEO — це не магія. Це правильні заголовки, опис сторінок, швидкість завантаження і адаптивна верстка. Все це закладається при розробці сайту.

---

## Що робити?

Якщо у вашому сайті є хоча б дві з цих проблем — він активно коштує вам грошей кожен день. Не тому що він поганий, а тому що він не налаштований на результат.

Я роблю безкоштовний аудит сайту — перевіряю швидкість, мобільну версію, SEO і CTA. Результат отримаєте за 24 години.`,

      de: `## Eine Website haben. Keine Kunden. Warum?

Stellen Sie sich vor: Jemand sucht Ihre Dienstleistung bei Google, findet Ihre Website, klickt darauf — und schließt die Seite nach 8 Sekunden. Kein Anruf, kein Formular, keine Bestellung.

Das ist keine Theorie. **53% der mobilen Nutzer verlassen eine Website, wenn sie länger als 3 Sekunden lädt** (Google-Daten). Und die meisten kleinen Unternehmen verfolgen das gar nicht.

Hier sind die 5 häufigsten Gründe, warum das passiert.

---

## 1. Die Website lädt zu langsam

Das ist der Killer №1. Jede zusätzliche Sekunde Ladezeit kostet etwa **7% der Konversionen**. Wenn Ihre Website 6–8 Sekunden lädt, haben Sie bereits die Hälfte der Besucher verloren, bevor sie Ihren Inhalt gesehen haben.

**Wie prüfen:** Öffnen Sie [PageSpeed Insights](https://pagespeed.web.dev/) und geben Sie Ihre Website-Adresse ein. Liegt die Bewertung unter 70 — gibt es ein ernstes Problem.

---

## 2. Kaputtes mobiles Design

**Mehr als 60% des Traffics kommt heute von Smartphones.** Wenn Ihre Website am Computer gut aussieht, aber auf dem Handy Buttons überlappen, Text zu klein ist und Formulare nicht funktionieren — verlieren Sie die meisten Besucher.

Prüfen Sie Ihre Website jetzt auf dem Smartphone. Gehen Sie zur Startseite, versuchen Sie den CTA-Button zu klicken, füllen Sie das Formular aus. Wenn etwas unbequem ist — fühlen Ihre Kunden dasselbe.

---

## 3. Unklar, was Sie anbieten und für wen

Ein Besucher kommt auf Ihre Startseite und muss innerhalb von 5 Sekunden verstehen:
- Was Sie anbieten
- Für wen das gedacht ist
- Was er als Nächstes tun soll

Wenn er stattdessen ein schönes Banner mit dem Slogan "Wir sind ein Team von Profis" sieht und keine Preise oder Kontaktformular findet — geht er.

---

## 4. Kein klarer Call-to-Action

Der Kunde ist bereit zu bestellen. Aber wo ist der Button? "Kontaktieren Sie uns" ist in der Fußzeile versteckt, die Telefonnummer klein geschrieben, das Formular erfordert 12 Felder.

Jede Seite braucht **eine Hauptaktion** — anrufen, schreiben, Anfrage hinterlassen. Der Button muss sichtbar sein und der Text konkret: "Kostenlose Beratung erhalten" ist besser als einfach "Senden".

---

## 5. Google findet Sie nicht

Wenn Ihre Website nicht für Suchmaschinen optimiert ist, existiert sie nur für diejenigen, die Ihre Adresse bereits kennen. Neue Kunden aus der Suche kommen nicht.

Basis-SEO ist keine Magie. Es sind die richtigen Überschriften, Seitenbeschreibungen, Ladegeschwindigkeit und responsives Design. All das wird bei der Website-Entwicklung eingebaut.

---

## Was tun?

Wenn Ihre Website mindestens zwei dieser Probleme hat — kostet Sie das täglich Geld. Nicht weil sie schlecht ist, sondern weil sie nicht auf Ergebnisse ausgerichtet ist.

Ich mache ein kostenloses Website-Audit — prüfe Geschwindigkeit, mobiles Design, SEO und CTAs. Das Ergebnis erhalten Sie innerhalb von 24 Stunden.`,

      en: `## You Have a Website. No Clients. Why?

Imagine this: someone searches for your service on Google, finds your website, clicks on it — and closes the tab after 8 seconds. No call, no form, no order.

This isn't theory. **53% of mobile users abandon a website if it takes more than 3 seconds to load** (Google data). And most small businesses don't even track this.

Here are the 5 most common reasons this happens.

---

## 1. Your Website Loads Too Slowly

This is killer №1. Every extra second of load time costs about **7% of conversions**. If your website takes 6–8 seconds to load, you've already lost half your visitors before they've seen your content.

**How to check:** Open [PageSpeed Insights](https://pagespeed.web.dev/) and enter your website address. If the score is below 70 — there's a serious problem.

---

## 2. Broken Mobile Experience

**More than 60% of traffic today comes from smartphones.** If your website looks fine on desktop but buttons overlap on mobile, text is tiny, and forms don't work — you're losing most visitors.

Check your website on your phone right now. Go to the homepage, try clicking the CTA button, fill out the form. If anything feels awkward — your clients feel the same.

---

## 3. Unclear What You Do and For Whom

A visitor lands on your homepage and must understand within 5 seconds:
- What you offer
- Who it's for
- What to do next

If instead they see a pretty banner with the slogan "We are a team of professionals" and can't find prices or a contact form — they leave.

---

## 4. No Clear Call-to-Action

The client is ready to order. But where's the button? "Contact us" is buried in the footer, the phone number is tiny, the form requires 12 fields.

Every page needs **one main action** — call, write, leave a request. The button must be visible and the text specific: "Get a free consultation" is better than just "Send".

---

## 5. Google Can't Find You

If your website isn't optimized for search engines, it only exists for people who already know your address. New clients from search won't come.

Basic SEO isn't magic. It's proper headings, page descriptions, load speed, and responsive design. All of this is built during website development.

---

## What to Do?

If your website has even two of these problems — it's costing you money every day. Not because it's bad, but because it's not set up for results.

I do a free website audit — checking speed, mobile design, SEO and CTAs. You'll receive the results within 24 hours.`,
    },
  },

  {
    slug: 'website-kosten-2026',
    date: '2026-04-22',
    readMin: {uk: 6, de: 6, en: 6},
    category: {uk: 'Ціноутворення', de: 'Preisgestaltung', en: 'Pricing'},
    cover: null,
    title: {
      uk: 'Скільки коштує сайт у 2026 році: чесний розбір цін',
      de: 'Was kostet eine Website 2026: eine ehrliche Preisübersicht',
      en: 'How Much Does a Website Cost in 2026: An Honest Price Breakdown',
    },
    excerpt: {
      uk: 'Від 200€ до 20 000€ — чому така різниця і що реально потрібно вашому бізнесу? Розбираємо всі варіанти без маркетингового туману.',
      de: 'Von 200€ bis 20.000€ — warum solch ein Unterschied und was braucht Ihr Unternehmen wirklich? Alle Optionen ohne Marketing-Nebel erklärt.',
      en: 'From €200 to €20,000 — why such a difference and what does your business actually need? All options explained without marketing fluff.',
    },
    body: {
      uk: `## Чому ціни такі різні?

Якщо ви шукали розробника сайту, ви вже, напевно, бачили дуже різні цифри. Хтось пропонує сайт за 150€, хтось за 15 000€. Де правда?

Правда в тому, що **"сайт"** — це не один продукт, як "хліб" чи "автомобіль". За цим словом ховаються абсолютно різні рішення з різними цілями.

---

## Варіант 1: Конструктори сайтів (0–50€/місяць)

**Wix, Squarespace, Jimdo, Tilda**

Підходить якщо: вам потрібна проста онлайн-візитка, ви готові самі наповнювати і підтримувати, немає специфічних вимог.

**Обмеження:** шаблонний вигляд, повільніша швидкість, обмежені SEO-можливості, ви залежите від платформи. Якщо вона закриється або підніме ціну — проблема.

**Реальна вартість:** 0–50€/місяць, але ваш час на налаштування не враховується.

---

## Варіант 2: WordPress від фрілансера (800–3 000€)

**Класичний варіант для малого бізнесу**

Підходить якщо: потрібен сайт-візитка або невеликий інтернет-магазин, хочете самі редагувати контент, є бюджет до 3 000€.

**Що входить:** тема або індивідуальний дизайн, налаштування, базове SEO, форми контактів.

**Обмеження:** якість дуже залежить від виконавця. На ринку багато "розробників", які просто встановлюють готові теми без базових знань SEO або швидкодії.

---

## Варіант 3: Індивідуальна розробка (2 500–8 000€)

**React, Next.js, Vue — сучасний стек**

Підходить якщо: вам важлива швидкість (Core Web Vitals), є нестандартні функції, сайт — це інвестиція а не витрата.

**Що входить:** унікальний дизайн, оптимізована розробка, SEO-архітектура з першого дня, адаптивність, інтеграції.

**Результат:** сайт, який реально конвертує відвідувачів у клієнтів і добре ранжується в Google.

---

## Варіант 4: Агенція (5 000–20 000€+)

**Для великих проектів і корпоративних клієнтів**

Агенція — це команда: проджект-менеджер, дизайнер, розробник, копірайтер, SEO-спеціаліст. Ціна відповідна.

Малому бізнесу агенція часто надмірна. Ви платите за структуру агенції, а не тільки за результат.

---

## Прихована вартість: що ніхто не каже

Кожен сайт має **поточні витрати**:
- Домен: 10–20€/рік
- Хостинг: 5–30€/місяць
- SSL: зазвичай включено в хостинг
- Оновлення і підтримка: 50–200€/місяць або разово
- Контент (тексти, фото): 200–1 000€

Враховуйте це при порівнянні пропозицій.

---

## Моя рекомендація

Для малого і середнього бізнесу в Hessen і по всій Європі найоптимальніший варіант — **індивідуальна розробка від 800€ до 3 000€** залежно від складності.

Це той бюджет, де ви отримуєте реальний результат: сайт який знаходить Google, виглядає сучасно і приводить клієнтів.

Якщо не впевнені що потрібно вашому бізнесу — напишіть мені. Безкоштовна консультація, без зобов'язань.`,

      de: `## Warum sind die Preise so unterschiedlich?

Wenn Sie nach einem Website-Entwickler gesucht haben, haben Sie wahrscheinlich schon sehr unterschiedliche Zahlen gesehen. Jemand bietet eine Website für 150€ an, jemand anderes für 15.000€. Wo liegt die Wahrheit?

Die Wahrheit ist, dass **"Website"** kein einheitliches Produkt ist wie "Brot" oder "Auto". Hinter diesem Wort verbergen sich völlig unterschiedliche Lösungen mit unterschiedlichen Zielen.

---

## Option 1: Website-Baukästen (0–50€/Monat)

**Wix, Squarespace, Jimdo, Tilda**

Geeignet wenn: Sie eine einfache Online-Visitenkarte brauchen, bereit sind selbst zu pflegen, keine speziellen Anforderungen haben.

**Einschränkungen:** Standardisiertes Aussehen, langsamere Geschwindigkeit, begrenzte SEO-Möglichkeiten, Abhängigkeit von der Plattform.

---

## Option 2: WordPress von Freelancer (800–3.000€)

**Klassische Option für kleine Unternehmen**

Geeignet wenn: Sie eine Visitenkarten-Website oder kleinen Online-Shop brauchen, Content selbst bearbeiten möchten, Budget bis 3.000€.

**Einschränkungen:** Qualität hängt stark vom Anbieter ab. Viele "Entwickler" installieren nur fertige Themes ohne SEO- oder Performance-Kenntnisse.

---

## Option 3: Individuelle Entwicklung (2.500–8.000€)

**React, Next.js, Vue — moderner Stack**

Geeignet wenn: Geschwindigkeit (Core Web Vitals) wichtig ist, es spezielle Funktionen gibt, die Website eine Investition ist.

**Was enthalten ist:** Einzigartiges Design, optimierte Entwicklung, SEO-Architektur von Anfang an, Responsivität, Integrationen.

---

## Option 4: Agentur (5.000–20.000€+)

Für große Projekte und Unternehmenskunden. Für kleine Unternehmen oft überdimensioniert — Sie zahlen für die Agenturstruktur, nicht nur für das Ergebnis.

---

## Versteckte Kosten: Was niemand sagt

Jede Website hat **laufende Kosten**:
- Domain: 10–20€/Jahr
- Hosting: 5–30€/Monat
- SSL: meist im Hosting enthalten
- Wartung: 50–200€/Monat oder einmalig
- Content (Texte, Fotos): 200–1.000€

Berücksichtigen Sie das beim Preisvergleich.

---

## Meine Empfehlung

Für kleine und mittlere Unternehmen in Hessen und ganz Europa ist die optimale Option **individuelle Entwicklung von 800€ bis 3.000€** je nach Komplexität.

Das ist das Budget, bei dem Sie echte Ergebnisse bekommen: eine Website, die Google findet, modern aussieht und Kunden bringt.`,

      en: `## Why Are Prices So Different?

If you've been looking for a website developer, you've probably seen very different numbers. Someone offers a website for €150, someone else for €15,000. Where's the truth?

The truth is that **"website"** isn't a single product like "bread" or "car". Behind this word hide completely different solutions with different goals.

---

## Option 1: Website Builders (€0–50/month)

**Wix, Squarespace, Jimdo, Tilda**

Suitable if: you need a simple online business card, willing to manage it yourself, no special requirements.

**Limitations:** Template look, slower speed, limited SEO capabilities, platform dependency.

---

## Option 2: WordPress from a Freelancer (€800–3,000)

**Classic option for small businesses**

Suitable if: you need a business card website or small online store, want to edit content yourself, budget up to €3,000.

**Limitations:** Quality heavily depends on the provider. Many "developers" just install ready-made themes without SEO or performance knowledge.

---

## Option 3: Custom Development (€2,500–8,000)

**React, Next.js, Vue — modern stack**

Suitable if: speed (Core Web Vitals) matters, there are specific features needed, the website is an investment not an expense.

**What's included:** Unique design, optimized development, SEO architecture from day one, responsiveness, integrations.

---

## Option 4: Agency (€5,000–20,000+)

For large projects and corporate clients. Often overkill for small businesses — you pay for the agency structure, not just the result.

---

## Hidden Costs: What Nobody Tells You

Every website has **ongoing costs**:
- Domain: €10–20/year
- Hosting: €5–30/month
- SSL: usually included in hosting
- Maintenance: €50–200/month or one-time
- Content (texts, photos): €200–1,000

Factor this in when comparing offers.

---

## My Recommendation

For small and medium businesses in Hessen and across Europe, the optimal option is **custom development from €800 to €3,000** depending on complexity.

This is the budget where you get real results: a website Google finds, that looks modern and brings clients.`,
    },
  },

  {
    slug: 'seo-basics-fuer-kleine-unternehmen',
    date: '2026-04-05',
    readMin: {uk: 7, de: 7, en: 7},
    category: {uk: 'SEO', de: 'SEO', en: 'SEO'},
    cover: null,
    title: {
      uk: 'SEO для малого бізнесу: що реально працює у 2026',
      de: 'SEO für kleine Unternehmen: Was 2026 wirklich funktioniert',
      en: 'SEO for Small Businesses: What Actually Works in 2026',
    },
    excerpt: {
      uk: 'Забудьте про складні стратегії. Ось 6 конкретних дій, які підніме ваш сайт у Google без великих бюджетів і без агентств.',
      de: 'Vergessen Sie komplizierte Strategien. Hier sind 6 konkrete Maßnahmen, die Ihre Website bei Google nach oben bringen — ohne große Budgets und ohne Agenturen.',
      en: 'Forget complex strategies. Here are 6 concrete actions that will push your website up in Google without big budgets and without agencies.',
    },
    body: {
      uk: `## SEO у 2026: що змінилось?

Google стає розумнішим кожен рік. У 2026 алгоритм оцінює не тільки ключові слова, але й **реальну корисність сайту для користувача**: швидкість, зручність, контент.

Хороша новина для малого бізнесу: базові речі які справді мають значення — не складні і не дорогі.

---

## 1. Google Business Profile — найшвидший результат

Якщо ви локальний бізнес — **це пріоритет №1**.

Зареєструйтесь безкоштовно на [business.google.com](https://business.google.com). Заповніть все: адреса, телефон, години роботи, фото, опис послуг.

Коли хтось шукає "Webentwickler Bad Camberg" або "сайт під ключ Hessen" — Google показує карту з бізнесами. Без профілю вас там немає.

Додаткові дії: просіть клієнтів залишати відгуки. Відповідайте на них. Це дає серйозну перевагу.

---

## 2. Швидкість сайту = ранжування

З 2021 Google офіційно враховує Core Web Vitals у ранжуванні. Це три метрики:

- **LCP** (Largest Contentful Paint) — час до завантаження основного контенту. Ціль: < 2.5 сек
- **CLS** (Cumulative Layout Shift) — стрибки елементів при завантаженні. Ціль: < 0.1
- **INP** (Interaction to Next Paint) — час відповіді на дії. Ціль: < 200ms

Перевірте ваш сайт: [pagespeed.web.dev](https://pagespeed.web.dev)

Якщо оцінка нижче 70 — ви вже в мінусі порівняно з конкурентами у видачі.

---

## 3. Локальні ключові слова

Не намагайтесь конкурувати по загальних запитах типу "сайт під ключ" — там тисячі конкурентів. Натомість використовуйте геолокацію:

- "Webdesign Limburg"
- "Website erstellen Bad Camberg"
- "Webentwickler Hessen"
- "розробка сайту Hessen"

Ці запити мають менше конкуренції і вищу конверсію — людина шукає когось конкретно в своєму регіоні.

Використовуйте ці слова в: заголовку сторінки (H1), описі (meta description), тексті на сторінці, alt-тексті зображень.

---

## 4. Регулярний контент (блог)

Google любить сайти, які регулярно оновлюються. Навіть **1 стаття на місяць** краще ніж нічого.

Теми для вашої ніші:
- "Як вибрати розробника сайту"
- "Скільки коштує сайт у 2026"
- "5 помилок які вбивають конверсію"

Кожна стаття — це нова сторінка, яку може знайти Google. Це збільшує охоплення ключових слів без додаткових витрат.

---

## 5. Правильна структура сайту

Google сканує сайт як текст. Переконайтесь що:

- Є один **H1** на кожній сторінці з вашим ключовим словом
- **Title** і **meta description** унікальні для кожної сторінки
- Є **sitemap.xml** (список всіх сторінок для Google)
- Є **robots.txt** (дозволи для пошукових роботів)
- Всі зображення мають **alt-текст**

---

## 6. Зовнішні посилання (backlinks)

Google довіряє сайту більше, якщо на нього посилаються інші сайти.

Безкоштовні способи отримати посилання:
- Реєстрація в каталогах: gelbeseiten.de, yelp.de, cylex.de
- Профілі на LinkedIn, Xing з посиланням на сайт
- Відгуки на Google і Trustpilot
- Гостьові пости в тематичних блогах

---

## Підсумок: з чого почати сьогодні

1. ✅ Перевірити швидкість на PageSpeed<br/>
2. ✅ Зареєструватись у Google Business Profile<br/>
3. ✅ Перевірити H1, title, meta на кожній сторінці<br/>
4. ✅ Написати першу статтю в блог<br/>
5. ✅ Зареєструватись в 3–5 каталогах<br/>

Це займе 2–3 дні, але дасть результат через 1–3 місяці. SEO — це марафон, але почати треба зараз.`,

      de: `## SEO 2026: Was hat sich geändert?

Google wird jedes Jahr intelligenter. Im Jahr 2026 bewertet der Algorithmus nicht nur Keywords, sondern auch den **tatsächlichen Nutzen der Website für den Benutzer**: Geschwindigkeit, Benutzerfreundlichkeit, Inhalt.

Die gute Nachricht für kleine Unternehmen: Die grundlegenden Dinge, die wirklich wichtig sind, sind weder kompliziert noch teuer.

---

## 1. Google Business Profile — schnellstes Ergebnis

Wenn Sie ein lokales Unternehmen sind — **das ist Priorität №1**.

Registrieren Sie sich kostenlos auf [business.google.com](https://business.google.com). Füllen Sie alles aus: Adresse, Telefon, Öffnungszeiten, Fotos, Dienstleistungsbeschreibung.

Wenn jemand "Webentwickler Bad Camberg" sucht — zeigt Google eine Karte mit Unternehmen. Ohne Profil sind Sie dort nicht.

---

## 2. Website-Geschwindigkeit = Ranking

Seit 2021 berücksichtigt Google offiziell Core Web Vitals im Ranking:

- **LCP** — Zeit bis zum Laden des Hauptinhalts. Ziel: < 2,5 Sek
- **CLS** — Layoutverschiebungen beim Laden. Ziel: < 0,1
- **INP** — Reaktionszeit auf Aktionen. Ziel: < 200ms

Prüfen Sie Ihre Website: [pagespeed.web.dev](https://pagespeed.web.dev)

---

## 3. Lokale Keywords

Versuchen Sie nicht, bei allgemeinen Begriffen wie "Website erstellen" zu konkurrieren. Nutzen Sie stattdessen Geolokalisierung:

- "Webdesign Limburg"
- "Website erstellen Bad Camberg"
- "Webentwickler Hessen"

Diese Suchanfragen haben weniger Konkurrenz und höhere Konversion.

---

## 4. Regelmäßige Inhalte (Blog)

Google mag Websites, die regelmäßig aktualisiert werden. Sogar **1 Artikel pro Monat** ist besser als nichts.

Jeder Artikel ist eine neue Seite, die Google finden kann.

---

## 5. Richtige Website-Struktur

- Ein **H1** auf jeder Seite mit Ihrem Keyword
- Einzigartiger **Title** und **Meta Description** für jede Seite
- **sitemap.xml** vorhanden
- **robots.txt** konfiguriert
- Alle Bilder mit **Alt-Text**

---

## 6. Externe Links (Backlinks)

Kostenlose Möglichkeiten, Links zu erhalten:
- Verzeichnisse: gelbeseiten.de, yelp.de, cylex.de
- LinkedIn, Xing Profile mit Website-Link
- Google und Trustpilot Bewertungen

---

## Zusammenfassung: Womit heute beginnen

1. ✅ Geschwindigkeit auf PageSpeed prüfen<br/>
2. ✅ Google Business Profile einrichten<br/>
3. ✅ H1, Title, Meta auf jeder Seite prüfen<br/>
4. ✅ Ersten Blog-Artikel schreiben<br/>
5. ✅ In 3–5 Verzeichnissen registrieren`,

      en: `## SEO in 2026: What's Changed?

Google gets smarter every year. In 2026, the algorithm evaluates not just keywords, but also the **real usefulness of the website for the user**: speed, usability, content.

The good news for small businesses: the basic things that really matter are neither complicated nor expensive.

---

## 1. Google Business Profile — Fastest Results

If you're a local business — **this is priority №1**.

Register for free at [business.google.com](https://business.google.com). Fill in everything: address, phone, opening hours, photos, service description.

When someone searches "web developer Bad Camberg" — Google shows a map with businesses. Without a profile, you're not there.

---

## 2. Website Speed = Ranking

Since 2021, Google officially considers Core Web Vitals in ranking:

- **LCP** — time to load main content. Goal: < 2.5 sec
- **CLS** — layout shifts during loading. Goal: < 0.1
- **INP** — response time to actions. Goal: < 200ms

Check your website: [pagespeed.web.dev](https://pagespeed.web.dev)

---

## 3. Local Keywords

Don't try to compete for general terms like "website development". Instead use geolocation:

- "web design Limburg"
- "website development Bad Camberg"
- "web developer Hessen"

These queries have less competition and higher conversion.

---

## 4. Regular Content (Blog)

Google likes websites that are regularly updated. Even **1 article per month** is better than nothing.

Every article is a new page Google can find, expanding your keyword coverage at no extra cost.

---

## 5. Correct Website Structure

- One **H1** on each page with your keyword
- Unique **title** and **meta description** for each page
- **sitemap.xml** present
- **robots.txt** configured
- All images with **alt text**

---

## 6. External Links (Backlinks)

Free ways to get links:
- Directories: yelp.de, cylex.de, meinestadt.de
- LinkedIn, Xing profiles with website link
- Google and Trustpilot reviews

---

## Summary: Where to Start Today

1. ✅ Check speed on PageSpeed<br/>
2. ✅ Set up Google Business Profile<br/>
3. ✅ Check H1, title, meta on each page<br/>
4. ✅ Write first blog article<br/>
5. ✅ Register in 3–5 directories`,
    },
  },

  {
    slug: 'wordpress-vs-react-was-waehlen',
    date: '2026-03-18',
    readMin: {uk: 5, de: 5, en: 5},
    category: {uk: 'Технології', de: 'Technologie', en: 'Technology'},
    cover: null,
    title: {
      uk: 'WordPress чи React: що обрати для сайту бізнесу',
      de: 'WordPress oder React: Was für eine Business-Website wählen',
      en: 'WordPress vs React: What to Choose for a Business Website',
    },
    excerpt: {
      uk: 'Це питання задає кожен другий клієнт. Чіткої відповіді немає — є правильне питання: що потрібно вашому конкретному бізнесу?',
      de: 'Das fragt jeder zweite Kunde. Es gibt keine klare Antwort — es gibt die richtige Frage: Was braucht Ihr konkretes Unternehmen?',
      en: 'Every other client asks this question. There\'s no clear answer — there\'s the right question: what does your specific business need?',
    },
    body: {
      uk: `## Спочатку — правильне питання

Коли клієнт запитує "WordPress чи React?" — він насправді запитує: "Яке рішення найкраще підходить для мого бізнесу?"

І відповідь завжди залежить від конкретної ситуації. Давайте розберемо.

---

## WordPress: коли це правильний вибір

WordPress — це CMS (система управління контентом). Вона побудована щоб **не-технічні люди могли самостійно редагувати сайт**.

**Обирайте WordPress якщо:**
- Вам потрібно часто оновлювати контент (новини, акції, блог)
- Потрібен інтернет-магазин (WooCommerce)
- Бюджет обмежений — розробка швидша і дешевша
- Вам важливо самостійно редагувати тексти і фото без допомоги розробника

**Реальні приклади:** ресторан, стоматологія, локальна компанія послуг, невеликий магазин.

**Обмеження WordPress:**
- Складніше досягти максимальної швидкості (але можливо)
- Потребує регулярних оновлень безпеки
- Плагіни можуть конфліктувати між собою

---

## React / Next.js: коли це правильний вибір

React — це бібліотека для розробки інтерфейсів. Next.js будує на ній повноцінний веб-фреймворк. Результат — **максимальна продуктивність і гнучкість**.

**Обирайте React/Next.js якщо:**
- Швидкість критична (e-commerce, SaaS, стартап)
- Потрібна складна логіка або інтеграції з API
- Плануєте масштабування
- Хочете максимально високі оцінки Core Web Vitals

**Реальні приклади:** SaaS-продукт, маркетплейс, корпоративний портал, стартап.

**Обмеження:**
- Більш дорога розробка
- Контент редагується тільки з допомогою розробника (або потрібен headless CMS)

---

## Можна поєднати?

Так! **Headless CMS** — це WordPress як бекенд для контенту + React як фронтенд. Ви отримуєте швидкість React і зручність WordPress для редагування.

Але це складніше і дорожче, тому підходить для більших проектів.

---

## Моя рекомендація

| Ситуація | Рішення |
|---|---|
| Лендінг / сайт-візитка | React або WordPress — залежить від бюджету |
| Корпоративний сайт з блогом | WordPress |
| Інтернет-магазин < 1000 товарів | WordPress + WooCommerce |
| Складний застосунок / SaaS | React + Next.js |
| Портфоліо / блог | Next.js (статична генерація) |

Якщо не впевнені — напишіть опис вашого проекту, я підкажу що краще підходить.`,

      de: `## Zuerst die richtige Frage

Wenn ein Kunde fragt "WordPress oder React?" — fragt er eigentlich: "Welche Lösung passt am besten zu meinem Unternehmen?"

Und die Antwort hängt immer von der konkreten Situation ab.

---

## WordPress: Wann es die richtige Wahl ist

WordPress ist ein CMS (Content Management System). Es ist gebaut damit **Nicht-Techniker die Website selbst bearbeiten können**.

**Wählen Sie WordPress wenn:**
- Sie Inhalte häufig aktualisieren müssen (News, Aktionen, Blog)
- Ein Online-Shop benötigt wird (WooCommerce)
- Das Budget begrenzt ist
- Sie Texte und Fotos selbst bearbeiten möchten

**Einschränkungen:** Maximale Geschwindigkeit schwerer erreichbar, regelmäßige Sicherheitsupdates nötig.

---

## React / Next.js: Wann es die richtige Wahl ist

**Wählen Sie React/Next.js wenn:**
- Geschwindigkeit kritisch ist (E-Commerce, SaaS, Startup)
- Komplexe Logik oder API-Integrationen nötig sind
- Skalierung geplant ist
- Maximale Core Web Vitals Werte gewünscht sind

**Einschränkungen:** Teurere Entwicklung, Inhalte nur mit Entwicklerunterstützung bearbeiten.

---

## Meine Empfehlung

| Situation | Lösung |
|---|---|
| Landingpage / Visitenkarten-Website | React oder WordPress — je nach Budget |
| Unternehmenswebsite mit Blog | WordPress |
| Online-Shop < 1.000 Produkte | WordPress + WooCommerce |
| Komplexe App / SaaS | React + Next.js |
| Portfolio / Blog | Next.js (statische Generierung) |`,

      en: `## First — The Right Question

When a client asks "WordPress or React?" — they're actually asking: "Which solution best fits my business?"

And the answer always depends on the specific situation.

---

## WordPress: When It's the Right Choice

WordPress is a CMS (Content Management System). It's built so **non-technical people can edit the website themselves**.

**Choose WordPress if:**
- You need to update content frequently (news, promotions, blog)
- You need an online store (WooCommerce)
- Budget is limited
- You want to edit texts and photos without a developer

**Limitations:** Harder to achieve maximum speed, requires regular security updates.

---

## React / Next.js: When It's the Right Choice

**Choose React/Next.js if:**
- Speed is critical (e-commerce, SaaS, startup)
- Complex logic or API integrations are needed
- You're planning to scale
- You want maximum Core Web Vitals scores

**Limitations:** More expensive development, content edited only with developer help.

---

## My Recommendation

| Situation | Solution |
|---|---|
| Landing page / business card | React or WordPress — depends on budget |
| Corporate site with blog | WordPress |
| Online store < 1,000 products | WordPress + WooCommerce |
| Complex app / SaaS | React + Next.js |
| Portfolio / blog | Next.js (static generation) |`,
    },
  },

  {
    slug: 'erste-website-checkliste',
    date: '2026-03-01',
    readMin: {uk: 4, de: 4, en: 4},
    category: {uk: 'Поради', de: 'Tipps', en: 'Tips'},
    cover: null,
    title: {
      uk: 'Чеклист: що підготувати перед розробкою сайту',
      de: 'Checkliste: Was vor der Website-Entwicklung vorbereiten',
      en: 'Checklist: What to Prepare Before Website Development',
    },
    excerpt: {
      uk: '80% затримок у проектах — через відсутність матеріалів від клієнта. Цей список допоможе підготуватись і запустити сайт вчасно.',
      de: '80% der Projektverzögerungen entstehen durch fehlende Materialien vom Kunden. Diese Liste hilft Ihnen, sich vorzubereiten und die Website pünktlich zu launchen.',
      en: '80% of project delays are due to missing materials from the client. This list will help you prepare and launch the website on time.',
    },
    body: {
      uk: `## Чому підготовка важлива?

Розробка сайту — це співпраця. Розробник будує інструмент, але наповнення — це ваш бізнес. Чим краще ви підготовані, тим швидше і якісніше буде результат.

З мого досвіду: 80% затримок у проектах пов'язані не з технічними проблемами, а з очікуванням матеріалів від клієнта.

Ось повний чеклист.

---

## 1. Контент і тексти

- [ ] **Про компанію** — хто ви, чим займаєтесь, чому обирають вас (3–5 речень)
- [ ] **Послуги або товари** — назви, описи, ціни (якщо публікуєте)
- [ ] **Контакти** — телефон, email, адреса, соціальні мережі
- [ ] **Відгуки клієнтів** — 3–5 реальних відгуків з іменами
- [ ] **FAQ** — 5–10 частих запитань від клієнтів

Якщо немає готових текстів — не проблема. Я допомагаю структурувати і написати.

---

## 2. Фотографії і медіа

- [ ] **Логотип** у форматі SVG або PNG з прозорим фоном
- [ ] **Фото команди або власника** — люди довіряють людям більше ніж безликим компаніям
- [ ] **Фото продуктів або робіт** — для портфоліо або каталогу
- [ ] **Фото офісу або виробництва** — якщо є

**Порада:** не використовуйте стокові фото там де можна поставити реальні. Конверсія вища.

---

## 3. Технічні матеріали

- [ ] **Доменне ім'я** — є вже чи потрібно вибрати? (наприклад: meinunternehmen.de)
- [ ] **Хостинг** — є акаунт чи потрібна допомога з вибором?
- [ ] **Доступи до існуючого сайту** — якщо є і потрібна міграція
- [ ] **Приклади сайтів які вам подобаються** — 2–3 посилання з коментарями "тут мені подобається X"

---

## 4. Бізнес-інформація

- [ ] **Цільова аудиторія** — хто ваш ідеальний клієнт? (вік, де живе, яка проблема)
- [ ] **Головна ціль сайту** — отримувати дзвінки / продавати онлайн / інформувати
- [ ] **Конкуренти** — 2–3 сайти конкурентів для розуміння ринку
- [ ] **Бренд-гайд** — є кольори і шрифти компанії? Або все з нуля?

---

## 5. Юридична інформація (для Німеччини обов'язково)

- [ ] **Impressum** — юридична назва, адреса, відповідальна особа
- [ ] **Datenschutzerklärung** — політика конфіденційності (я можу допомогти з шаблоном)
- [ ] **Реєстраційні дані** — якщо є (Handelsregister, USt-IdNr.)

---

## Що якщо чогось немає?

Не чекайте поки все буде готово ідеально. Стартуємо з тим що є, решту додаємо поступово.

Найкраще що можна зробити — це **коротка зустріч або дзвінок** де я ставлю конкретні питання і ми разом визначаємо що потрібно.

Напишіть мені — і ми домовимось про 20-хвилинний дзвінок.`,

      de: `## Warum ist Vorbereitung wichtig?

Website-Entwicklung ist eine Zusammenarbeit. Der Entwickler baut das Werkzeug, aber der Inhalt ist Ihr Unternehmen. Je besser Sie vorbereitet sind, desto schneller und besser wird das Ergebnis.

Aus meiner Erfahrung: 80% der Projektverzögerungen entstehen nicht durch technische Probleme, sondern durch das Warten auf Materialien vom Kunden.

---

## 1. Inhalt und Texte

- [ ] **Über das Unternehmen** — wer Sie sind, was Sie tun, warum man Sie wählt
- [ ] **Dienstleistungen oder Produkte** — Namen, Beschreibungen, Preise
- [ ] **Kontakte** — Telefon, E-Mail, Adresse, Social Media
- [ ] **Kundenbewertungen** — 3–5 echte Bewertungen mit Namen
- [ ] **FAQ** — 5–10 häufige Kundenfragen

---

## 2. Fotos und Medien

- [ ] **Logo** im SVG oder PNG Format mit transparentem Hintergrund
- [ ] **Fotos vom Team oder Inhaber** — Menschen vertrauen Menschen mehr als gesichtslosen Unternehmen
- [ ] **Fotos von Produkten oder Arbeiten** — für Portfolio oder Katalog
- [ ] **Büro- oder Produktionsfotos** — falls vorhanden

---

## 3. Technische Materialien

- [ ] **Domainname** — schon vorhanden oder auswählen? (z.B.: meinunternehmen.de)
- [ ] **Hosting** — Account vorhanden oder Hilfe bei der Auswahl nötig?
- [ ] **Zugangsdaten zur bestehenden Website** — falls Migration nötig
- [ ] **Website-Beispiele die Ihnen gefallen** — 2–3 Links mit Kommentaren

---

## 4. Business-Informationen

- [ ] **Zielgruppe** — wer ist Ihr idealer Kunde?
- [ ] **Hauptziel der Website** — Anrufe erhalten / online verkaufen / informieren
- [ ] **Wettbewerber** — 2–3 Konkurrenten-Websites
- [ ] **Brand-Guide** — Firmenfarben und Schriften vorhanden?

---

## 5. Rechtliche Informationen (für Deutschland Pflicht)

- [ ] **Impressum** — rechtlicher Name, Adresse, verantwortliche Person
- [ ] **Datenschutzerklärung** — ich kann mit einer Vorlage helfen
- [ ] **Registrierungsdaten** — falls vorhanden (Handelsregister, USt-IdNr.)`,

      en: `## Why Is Preparation Important?

Website development is collaboration. The developer builds the tool, but the content is your business. The better prepared you are, the faster and better the result.

From my experience: 80% of project delays are not due to technical problems, but to waiting for materials from the client.

---

## 1. Content and Texts

- [ ] **About the company** — who you are, what you do, why clients choose you
- [ ] **Services or products** — names, descriptions, prices
- [ ] **Contacts** — phone, email, address, social media
- [ ] **Client testimonials** — 3–5 real reviews with names
- [ ] **FAQ** — 5–10 frequent client questions

---

## 2. Photos and Media

- [ ] **Logo** in SVG or PNG format with transparent background
- [ ] **Photos of team or owner** — people trust people more than faceless companies
- [ ] **Photos of products or work** — for portfolio or catalog
- [ ] **Office or production photos** — if available

---

## 3. Technical Materials

- [ ] **Domain name** — already have one or need to choose? (e.g.: mycompany.com)
- [ ] **Hosting** — account ready or need help choosing?
- [ ] **Access to existing website** — if migration is needed
- [ ] **Website examples you like** — 2–3 links with comments

---

## 4. Business Information

- [ ] **Target audience** — who is your ideal client?
- [ ] **Main website goal** — receive calls / sell online / inform
- [ ] **Competitors** — 2–3 competitor websites
- [ ] **Brand guide** — company colors and fonts ready?

---

## 5. Legal Information (mandatory for Germany)

- [ ] **Impressum** — legal name, address, responsible person
- [ ] **Datenschutzerklärung** — I can help with a template
- [ ] **Registration data** — if applicable (Handelsregister, USt-IdNr.)`,
    },
  },
]

// Helper: get post by slug
export const getPostBySlug = (slug) => POSTS.find(p => p.slug === slug) || null

// Helper: get N recent posts (for homepage widget etc.)
export const getRecentPosts = (n = 3) => POSTS.slice(0, n)
