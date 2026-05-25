import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

const uk = {
  nav: { about:'Про мене', services:'Послуги', portfolio:'Портфоліо', blog:'Блог', process:'Процес', faq:'FAQ', contact:'Контакт', cta:'Найняти мене' },
  hero: {
    tag:'Доступний для проектів',
    l1:'Ваш сайт повинен', l2:'приводити клієнтів', l3:'а не лише виглядати.',
    sub:'Розробляю сайти та веб-застосунки, які <b>продають за вас</b> — поки ви займаєтесь бізнесом.',
    cta1:'Безкоштовна консультація', cta2:'Переглянути роботи',
    c1:'Готово за 1–2 тижні', c2:'Більше заявок з першого дня', c3:'Прозорі ціни, без сюрпризів',
    s1:'Проектів', s2:'Роки досвіду', s3:'Задоволених клієнтів',
  },
  problem: {
    label:'Проблема',
    title:'Ваш сайт щодня коштує вам клієнтів — і ви цього не помічаєте',
    scenario:'Уявіть: клієнт шукає вашу послугу прямо зараз. Знаходить ваш сайт. Він завантажується 6 секунд. На смартфоні все «розповзається». Він закриває вкладку — і замовляє у конкурента.',
    close:'Не поганий продукт.<br> Не поганий сервіс.<br>Просто <em>сайт, який заважає вам рости.</em>',
    items: [
      { s:'Сайт завантажується повільно', t:'Кожна зайва секунда — мінус 7% конверсії. Клієнти не чекають.' },
      { s:'Зламаний мобільний вигляд', t:'60%+ відвідувачів — зі смартфону. Якщо верстка «їде» — вони йдуть.' },
      { s:'Google вас не знаходить', t:'Конкуренти на першій сторінці, а ви — ні.' },
      { s:'Ручна обробка заявок', t:'Email, таблиці, дзвінки — кожна заявка вимагає вашого часу щодня.' },
      { s:'Застарілий дизайн', t:'Перше враження формується за 0.05 сек. Старий вигляд = недовіра.' },
      { s:'Клієнти йдуть до конкурентів', t:'Не тому що вони кращі — тому що їхній сайт переконує краще.' },
    ],
  },
  solution: {
    label:'Рішення',
    title:'Що відбувається, коли ваш сайт дійсно працює на вас?',
    sub:'Ніякого технічного жаргону. Тільки результати.',
    items: [
      { t:'Більше заявок', d:'Відвідувачі стають клієнтами. Автоматично, 24/7.', r:'Ріст заявок без росту бюджету' },
      { t:'Вища конверсія', d:'Чітка структура, контент, швидкість. Менше відказів, більше угод.', r:'Більше продажів з того ж трафіку' },
      { t:'Автоматизація', d:'Заявки, бронювання, повідомлення — без вашого втручання.', r:'До 40% менше ручної роботи' },
      { t:'Більше довіри', d:'Сильний сайт сигналізує серйозність. Люди купують де довіряють.', r:'Вищий середній чек' },
      { t:'Менше витрат', d:'Жодного асистента для стандартних запитів.', r:'Оптимізація витрат' },
      { t:'Масштабованість', d:'Сайт росте разом з бізнесом — без переписування з нуля.', r:'Технологія яка не застаріє' },
    ],
  },
  about: {
    label:'Про мене', title:'Я створюю веб, який працює на ваш бізнес',
    p1:'Привіт, я Сергій — fullstack-розробник. Будую веб-застосунки та сайти, що вирішують реальні бізнесові задачі.',
    p2:'Досвід у стартапах і агенціях. Чистий, масштабований код. Відповідаю швидко, дотримуюсь дедлайнів, беру відповідальність за результат.',
    cta:'Зв\'язатись зі мною', avail:'Доступний для проектів',
  },
  services: {
    label:'Послуги', title:'Що я роблю', sub:'Повний цикл — від стратегії до деплою.',
    cta:'Обговорити проект →',
    items: [
      { n:'Корпоративний сайт', tl:'Ваша цифрова візитка, яка продає', d:'Сайти що презентують компанію так як вона заслуговує. Чітка структура, переконливий контент, технічна досконалість.', r:'Більше заявок від нових клієнтів.', tags:['WordPress','Next.js','SEO'] },
      { n:'Лендінг', tl:'Одна сторінка. Одна мета. Максимум заявок.', d:'Без відволікань. Одна сторінка що перетворює відвідувача на клієнта — для запуску продуктів та кампаній.', r:'Більше бронювань з реклами та органіки.', tags:['React','Animation','A/B'] },
      { n:'Веб-портал / Маркетплейс', tl:'Коли бізнесу потрібна власна платформа', d:'Портали для бронювань, маркетплейси — масштабовані системи що ростуть разом з компанією.', r:'Нові джерела доходу.', tags:['Next.js','Node.js','PostgreSQL'] },
      { n:'CRM та внутрішні системи', tl:'Кінець хаосу в Excel і загублених заявок', d:'CRM та внутрішні інструменти що роблять саме те що потрібно вашому бізнесу.', r:'До 40% менше часу на процеси.', tags:['React','Node.js','Auth'] },
      { n:'Веб-застосунок', tl:'Ваш бізнес-процес як цифровий продукт', d:'Складні задачі потребують індивідуальних рішень. Перетворюю ідеї на працюючий цифровий продукт.', r:'Нові доходи. Автоматизація. Масштаб.', tags:['React','TypeScript','MongoDB'] },
      { n:'Підтримка та розвиток', tl:'Я залишаюсь поряд після запуску', d:'Не одноразовий проект. Супроводжую сайт довгостроково — оновлення, функції, безпека.', r:'Жодного технічного ризику.', tags:['Monitoring','Security','CI/CD'] },
    ],
  },
  why: {
    label:'Переваги', title:'Що ви отримуєте і чому це важливо для бізнесу',
    items: [
      { n:'01', t:'Сучасний стек', d:'React, Next.js, Node.js, TypeScript — жодних застарілих систем.', b:'Вкладаєте один раз — не переробляєте через рік' },
      { n:'02', t:'Завантаження < 2 сек.', d:'Кожна секунда затримки коштує 7% конверсії. Оптимізую технічно та візуально.', b:'Менше відказів, більше продажів' },
      { n:'03', t:'SEO з першого дня', d:'Жодного «SEO потім». Структура, семантика і швидкодія — з самого початку.', b:'Органічний трафік без витрат на рекламу' },
      { n:'04', t:'100% Mobile-First', d:'60%+ відвідувачів — зі смартфону. Тестую на реальних пристроях.', b:'Жоден клієнт не піде через мобільний вигляд' },
      { n:'05', t:'Безпека та GDPR', d:'SSL, захищені запити, форми відповідно до вимог ЄС — все включено.', b:'Захист репутації та законів ЄС' },
      { n:'06', t:'Підтримка після запуску', d:'Не зникаю після Go-live. Прямий контакт для питань та розвитку.', b:'Спокій замість технічної паніки' },
    ],
  },
  process: {
    label:'Процес', title:'Як проходить робота — прозоро, без сюрпризів', sub:'Від першого дзвінка до підтримки після запуску.',
    items: [
      { n:'01', t:'Аналіз та цілі', d:'Вивчаю бізнес, аудиторію та задачі. Не пропоную рішення до розуміння проблеми.', r:'Чіткий бриф і технічне завдання' },
      { n:'02', t:'Концепція та план', d:'Структура, архітектура, технічне рішення — все до першої строки коду.', r:'Ви знаєте що отримаєте' },
      { n:'03', t:'Дизайн та інтерфейс', d:'Жодного шаблону. Інтерфейс що веде користувача до потрібної дії.', r:'Дизайн погоджений до розробки' },
      { n:'04', t:'Розробка та тести', d:'Чистий код. Регулярні оновлення. Тести на реальних пристроях.', r:'Стабільний продукт без багів' },
      { n:'05', t:'Запуск та підтримка', d:'Налаштовую хостинг, аналітику, моніторинг. Перші тижні — поруч.', r:'Запуск без стресу' },
    ],
  },
  portfolio: { label:'Портфоліо', title:'Вибрані проекти', sub:'Реальні проекти для реальних клієнтів.', intro:'Кожен проект — конкретна бізнесова задача. Дизайн слідує за стратегією.', all:'Всі проекти →', view:'Детальніше', code:'Код' },
  stack: { label:'Технології', title:'Мій стек' },
  testi: {
    label:'Відгуки', title:'Що кажуть клієнти',
    items: [
      { t:'Дуже рекомендую Сергія. Всі задачі виконані ефективно і вчасно. Він також поліпшив код, SEO та продуктивність сайту.', n:'Victor Plut', r:'Власник, PlutOn', i:'VP' },
      { t:'Дуже задоволений результатом! Чистий код з інтеграцією WordPress. Буду звертатись знову.', n:'Alexander Palamarchuk', r:'Власник, Cyfra Service Center', i:'AP' },
      { t:'Відмінна робота! Задача виконана вчасно, всі правки реалізовані. Рекомендую.', n:'Ivan Dranenko', r:'Власник, Disystems', i:'ID' },
      { t:'Сергій відмінно впорався. Проект якісний і в обумовлені терміни. Рекомендую.', n:'Igor Gana', r:'Власник, ArtGana', i:'IG' },
    ],
  },
  faq: {
    label:'FAQ', title:'Часті запитання',
    items: [
      { q:'Скільки коштує розробка сайту?', a:'Лендінг — від 800€. Корпоративний сайт — від 2 500€. Веб-застосунок — індивідуально. Завжди прозорий кошторис до старту, без прихованих витрат.' },
      { q:'Скільки часу займає проект?', a:'Лендінг — 1–2 тижні. Корпоративний сайт — 3–5 тижнів. Складні застосунки — 6–12 тижнів.' },
      { q:'Чи можна доробити існуючий сайт?', a:'Так. Спочатку аналізую що реально потрібно покращити — і не пропоную зайвого якщо оптимізація краща за переробку.' },
      { q:'Що входить у підтримку після запуску?', a:'Оновлення, дрібні правки, патчі безпеки, моніторинг. Можна як разовий так і щомісячний ретейнер.' },
      { q:'Чи буде сайт адаптивним для смартфонів?', a:'Завжди. Mobile-First — стандарт. Розробляю спочатку для смартфону, тестую на реальних пристроях.' },
      { q:'Допоможете з SEO?', a:'Так — технічне SEO інтегроване в кожен проект: структура URL, метадані, Core Web Vitals, оптимізація швидкості.' },
      { q:'Хто пише тексти для сайту?', a:'Ви, я або разом. Хороший текст може подвоїти конверсію — це враховую на кожному проекті.' },
      { q:'Що потрібно, щоб розпочати проект?', a:'Небагато. Достатньо короткого дзвінка. Вимоги розробляємо разом.' },
      { q:'Чи працюєте з компаніями за межами Німеччини?', a:'Так. Повністю дистанційно — Німеччина, ЄС, Україна.' },
      { q:'Що якщо я не задоволений результатом?', a:'До старту фіксуємо чіткі цілі. Під час роботи — регулярні оновлення та ваш фідбек. Сюрпризів не буває.' },
    ],
  },
  fcta: {
    label:'Готові зростати?',
    title:'Поки ви читаєте це —\nваш конкурент отримує заявки.',
    sub:'Кожен місяць без сильного сайту — місяць втрачених клієнтів.\nЦе можна змінити швидше, ніж ви думаєте.',
    cta1:'Безкоштовна консультація →', cta2:'Переглянути роботи',
    note:'Без тиску. Без договору після першого дзвінка.',
    slots:'📅 Вільних слотів цього тижня: 3',
  },
  contact: {
    label:'Контакт', title:'Маєте проект? Давайте поговоримо',
    sub:'Відповідаю протягом кількох годин. Перша консультація — безкоштовно.',
    avail:'Доступний для нових проектів · відповідаю протягом декількох годин',
  },
  form: {
    title:'Надіслати повідомлення', name:"Ваше ім'я", email:'Email', subject:'Тема', msg:'Повідомлення',
    sub:'Надіслати повідомлення', sending:'Надсилаємо...', sent:'✓ Надіслано!', err:'Помилка. Спробуйте ще.',
    note:'Відповідаю протягом 24 годин',
  },
  p404: { h1:'Сторінку не знайдено', sub:'Схоже, ця сторінка переїхала або не існує.', btn:'← На головну' },
  footer: { copy:'© 2026 Serhii Kaliuzhnyi — Fullstack Developer' },
}

const de = {
  nav: { about:'Über mich', services:'Leistungen', portfolio:'Portfolio', blog:'Blog', process:'Prozess', faq:'FAQ', contact:'Kontakt', cta:'Jetzt anfragen' },
  hero: {
    tag:'Verfügbar für Projekte',
    l1:'Ihre Website soll', l2:'Kunden bringen', l3:'nicht nur gut aussehen.',
    sub:'Ich entwickle Websites und Apps, die <b>für Sie verkaufen</b> — während Sie Ihr Business führen.',
    cta1:'Kostenloses Erstgespräch', cta2:'Portfolio ansehen',
    c1:'Fertig in 1–2 Wochen', c2:'Mehr Anfragen ab Tag 1', c3:'Feste Preise, keine Überraschungen',
    s1:'Projekte', s2:'Jahre Erfahrung', s3:'Zufriedene Kunden',
  },
  problem: {
    label:'Das Problem',
    title:'Ihr Auftritt kostet Sie täglich Kunden — und Sie merken es nicht.',
    scenario:'Stellen Sie sich vor: Ein Kunde sucht nach Ihrer Dienstleistung. Er findet Ihre Website. 6 Sekunden Ladezeit. Auf dem Smartphone kaputt. Er bucht beim Konkurrenten.',
    close:'Kein schlechtes Produkt.<br> Kein schlechter Service.<br><em>Nur eine Website, die Ihnen im Weg steht.</em>',
    items: [
      { s:'Langsame Ladezeit', t:'Jede Sekunde kostet 7% Konversion. Kunden warten nicht.' },
      { s:'Kaputtes mobiles Design', t:'60%+ kommen vom Smartphone. Sieht es schlecht aus, springen sie ab.' },
      { s:'Google findet Sie nicht', t:'Konkurrenten auf Seite 1, Sie nicht. Traffic geht vorbei.' },
      { s:'Manuelle Anfragenbearbeitung', t:'E-Mails, Tabellen, Anrufe — jede Anfrage kostet täglich Ihre Zeit.' },
      { s:'Veraltetes Design', t:'Erster Eindruck in 0,05 Sekunden. Altes Design = Misstrauen.' },
      { s:'Kunden gehen zum Konkurrenten', t:'Nicht weil er besser ist — weil seine Website überzeugender ist.' },
    ],
  },
  solution: {
    label:'Die Lösung',
    title:'Was passiert, wenn Ihre Website wirklich für Sie arbeitet?',
    sub:'Kein Fachjargon. Nur Ergebnisse.',
    items: [
      { t:'Mehr Anfragen', d:'Besucher werden zu Kunden. Automatisch, rund um die Uhr.', r:'Mehr Leads ohne höheres Budget' },
      { t:'Höhere Konversion', d:'Klare Struktur, Inhalte, Ladezeit. Weniger Absprünge, mehr Abschlüsse.', r:'Mehr Umsatz aus demselben Traffic' },
      { t:'Automatisierung', d:'Anfragen, Buchungen, Benachrichtigungen ohne Ihren Eingriff.', r:'Bis zu 40% weniger manuelle Arbeit' },
      { t:'Mehr Vertrauen', d:'Eine starke Website signalisiert Seriosität. Kunden kaufen, wo sie vertrauen.', r:'Höherer Auftragswert' },
      { t:'Geringere Kosten', d:'Kein Assistent für Standardanfragen. Kein Inbox-Chaos.', r:'Optimierte Betriebskosten' },
      { t:'Skalierbarkeit', d:'Website wächst mit Ihrem Unternehmen ohne kompletten Neubau.', r:'Zukunftssichere Technologie' },
    ],
  },
  about: {
    label:'Über mich', title:'Ich entwickle Web, das für Ihr Business arbeitet',
    p1:'Hallo, ich bin Serhii — Fullstack-Entwickler. Ich baue Web-Apps und Websites, die echte Probleme lösen.',
    p2:'Erfahrung in Startups und Agenturen. Sauberer Code. Schnelle Antworten, Deadlines einhalten, Verantwortung übernehmen.',
    cta:'Kontakt aufnehmen', avail:'Verfügbar für neue Projekte',
  },
  services: {
    label:'Leistungen', title:'Was ich mache', sub:'Vollständiger Zyklus — von der Strategie bis zum Deployment.',
    cta:'Projekt besprechen →',
    items: [
      { n:'Unternehmenswebsite', tl:'Ihr digitales Aushängeschild', d:'Websites die Ihr Unternehmen so präsentieren wie Sie es verdienen.', r:'Mehr Anfragen von Neukunden.', tags:['WordPress','Next.js','SEO'] },
      { n:'Landingpage', tl:'Eine Seite. Ein Ziel. Maximale Konversion.', d:'Keine Ablenkung. Eine zielgerichtete Seite die Besucher in Kunden verwandelt.', r:'Mehr Buchungen aus Werbung.', tags:['React','Animation','A/B'] },
      { n:'Webportal & Plattformen', tl:'Wenn Ihr Business eine Plattform braucht', d:'Buchungsportale, Marktplätze — skalierbare Systeme die mitwachsen.', r:'Neue Einnahmequellen.', tags:['Next.js','Node.js','PostgreSQL'] },
      { n:'CRM & interne Tools', tl:'Schluss mit Excel-Chaos', d:'CRM-Systeme und interne Tools die genau das tun was Ihr Unternehmen braucht.', r:'Bis zu 40% weniger Zeitaufwand.', tags:['React','Node.js','Auth'] },
      { n:'Web-Applikation', tl:'Ihr Geschäftsprozess als Produkt', d:'Komplexe Aufgaben brauchen maßgeschneiderte Lösungen.', r:'Neue Umsatzquellen. Automatisierung.', tags:['React','TypeScript','MongoDB'] },
      { n:'Support & Weiterentwicklung', tl:'Ich bin dabei auch nach dem Launch', d:'Kein Einmalprojekt. Ich begleite langfristig — Updates, Features, Sicherheit.', r:'Kein technisches Risiko.', tags:['Monitoring','Security','CI/CD'] },
    ],
  },
  why: {
    label:'Vorteile', title:'Was Sie bekommen und warum es Ihr Business voranbringt',
    items: [
      { n:'01', t:'Moderner Stack', d:'React, Next.js, Node.js, TypeScript — keine veralteten Systeme.', b:'Einmal investieren — nicht nach einem Jahr neu' },
      { n:'02', t:'Ladezeit < 2 Sek.', d:'Jede Sekunde kostet 7% Konversion. Optimiert für Google und Kunden.', b:'Weniger Absprünge, mehr Verkäufe' },
      { n:'03', t:'SEO von Anfang an', d:'Kein nachträgliches SEO. Struktur, Semantik und Performance eingebaut.', b:'Organischer Traffic ohne Werbekosten' },
      { n:'04', t:'100% Mobile-First', d:'60%+ kommen vom Smartphone. Tests auf echten Geräten.', b:'Kein Kunde geht wegen mobiler Ansicht verloren' },
      { n:'05', t:'Sicherheit & DSGVO', d:'SSL, sichere Zugriffe, DSGVO-konform — alles inklusive.', b:'Reputationsschutz und EU-Konformität' },
      { n:'06', t:'Support nach Launch', d:'Nicht weg nach Go-live. Direkter Ansprechpartner.', b:'Ruhe statt technischer Panik' },
    ],
  },
  process: {
    label:'Prozess', title:'So läuft das Projekt ab — transparent, ohne Überraschungen', sub:'Vom ersten Gespräch bis zur Nachbetreuung.',
    items: [
      { n:'01', t:'Analyse & Ziele', d:'Ich lerne Ihr Business kennen. Keine Lösung ohne Verständnis.', r:'Klares Briefing' },
      { n:'02', t:'Konzept & Plan', d:'Struktur, Architektur, Lösung — alles vor der ersten Codezeile.', r:'Sie wissen was Sie bekommen' },
      { n:'03', t:'Design & Interface', d:'Kein Template. Interface das Nutzer zur Aktion führt.', r:'Design vor Entwicklung abgestimmt' },
      { n:'04', t:'Entwicklung & Tests', d:'Sauberer Code. Regelmäßige Updates. Tests auf echten Geräten.', r:'Stabiles Produkt ohne Bugs' },
      { n:'05', t:'Launch & Support', d:'Hosting, Analytics, Monitoring konfiguriert. Erste Wochen begleitet.', r:'Stressfreier Launch' },
    ],
  },
  portfolio: { label:'Portfolio', title:'Ausgewählte Projekte', sub:'Echte Projekte für echte Kunden.', intro:'Jedes Projekt beginnt mit einer Geschäftsaufgabe. Design folgt der Strategie.', all:'Alle Projekte →', view:'Details', code:'Code' },
  stack: { label:'Technologien', title:'Mein Tech Stack' },
  testi: {
    label:'Referenzen', title:'Was Kunden sagen',
    items: [
      { t:'Ich empfehle Serhii sehr. Alle Aufgaben wurden effizient und pünktlich erledigt. Er verbesserte Code, SEO und Performance.', n:'Victor Plut', r:'Inhaber, PlutOn', i:'VP' },
      { t:'Sehr zufrieden! Sauberer Code mit WordPress-Integration. Werde wieder beauftragen.', n:'Alexander Palamarchuk', r:'Inhaber, Cyfra Service Center', i:'AP' },
      { t:'Tolle Arbeit! Pünktlich, alle Wünsche umgesetzt. Klare Empfehlung.', n:'Ivan Dranenko', r:'Inhaber, Disystems', i:'ID' },
      { t:'Ausgezeichnete Arbeit. Hohe Qualität im vereinbarten Zeitrahmen.', n:'Igor Gana', r:'Inhaber, ArtGana', i:'IG' },
    ],
  },
  faq: {
    label:'FAQ', title:'Häufige Fragen',
    items: [
      { q:'Was kostet die Entwicklung?', a:'Landingpage ab 800€. Unternehmenswebsite ab 2.500€. Web-Apps individuell. Immer transparentes Angebot vorab.' },
      { q:'Wie lange dauert ein Projekt?', a:'Landingpage: 1–2 Wochen. Website: 3–5 Wochen. Komplexe Apps: 6–12 Wochen.' },
      { q:'Kann man eine bestehende Website überarbeiten?', a:'Ja. Ich analysiere zuerst was wirklich verbessert werden muss.' },
      { q:'Was ist im Support enthalten?', a:'Updates, kleine Änderungen, Sicherheits-Patches, Monitoring. Einmalig oder monatliches Retainer.' },
      { q:'Ist die Website mobiloptimiert?', a:'Immer. Mobile-First ist Standard. Tests auf echten Geräten.' },
      { q:'Helfen Sie auch beim SEO?', a:'Ja — technische SEO in jedes Projekt integriert.' },
      { q:'Wer schreibt die Texte?', a:'Sie, ich oder gemeinsam. Guter Text verdoppelt die Konversion.' },
      { q:'Was brauche ich für den Start?', a:'Ein kurzes Gespräch reicht. Anforderungen entwickeln wir zusammen.' },
      { q:'Arbeiten Sie außerhalb Deutschlands?', a:'Ja. Remote mit Kunden aus DE, AT, CH, EU und Ukraine.' },
      { q:'Was wenn ich unzufrieden bin?', a:'Wir definieren klare Ziele vor dem Start. Regelmäßige Updates während der Entwicklung. Keine Überraschungen.' },
    ],
  },
  fcta: {
    label:'Bereit zu wachsen?',
    title:'Während Sie das lesen —\ngewinnt Ihr Konkurrent neue Kunden.',
    sub:'Jeder Monat ohne starken Auftritt ist ein Monat verlorener Anfragen.\nDas lässt sich ändern — schneller als Sie denken.',
    cta1:'Kostenloses Erstgespräch →', cta2:'Portfolio ansehen',
    note:'Kein Druck. Kein Vertrag nach dem Erstgespräch.',
    slots:'📅 Freie Termine diese Woche: noch 3',
  },
  contact: {
    label:'Kontakt', title:'Haben Sie ein Projekt? Lassen Sie uns sprechen',
    sub:'Ich antworte innerhalb weniger Stunden. Erstberatung kostenlos.',
    avail:'Verfügbar für neue Projekte · antworte innerhalb weniger Stunden',
  },
  form: {
    title:'Nachricht senden', name:'Ihr Name', email:'E-Mail', subject:'Betreff', msg:'Ihre Nachricht',
    sub:'Nachricht senden', sending:'Wird gesendet...', sent:'✓ Gesendet!', err:'Fehler. Erneut versuchen.',
    note:'Ich antworte innerhalb von 24 Stunden',
  },
  p404: { h1:'Seite nicht gefunden', sub:'Diese Seite existiert nicht oder wurde verschoben.', btn:'← Zur Startseite' },
  footer: { copy:'© 2026 Serhii Kaliuzhnyi — Fullstack Developer' },
}

const en = {
  nav: { about:'About', services:'Services', portfolio:'Portfolio', blog:'Blog', process:'Process', faq:'FAQ', contact:'Contact', cta:'Hire me' },
  hero: {
    tag:'Available for projects',
    l1:'Your website should', l2:'bring clients', l3:'not just look good.',
    sub:'I build websites and apps that <b>sell for you</b> — while you run your business.',
    cta1:'Free discovery call', cta2:'View my work',
    c1:'Delivered in 1–2 weeks', c2:'More leads from day one', c3:'Fixed price, no surprises',
    s1:'Projects', s2:'Years experience', s3:'Happy clients',
  },
  problem: {
    label:'The Problem',
    title:'Your website costs you clients every day — and you don\'t notice.',
    scenario:'Picture this: a client searches for your service right now. Finds your site. 6 seconds to load. Broken on mobile. They leave — and hire your competitor.',
    close:'Not a bad product.<br> Not a bad service.<br><em>Just a website standing between you and growth.</em>',
    items: [
      { s:'Slow loading speed', t:'Every extra second costs 7% of conversions. Clients don\'t wait.' },
      { s:'Broken mobile experience', t:'60%+ visit from smartphones. Broken layout = they leave immediately.' },
      { s:'Google doesn\'t find you', t:'Competitors on page 1, you nowhere. Traffic passes you by.' },
      { s:'Manual enquiry processing', t:'Emails, spreadsheets, phone calls — every lead eats your time daily.' },
      { s:'Outdated design', t:'First impression forms in 0.05 seconds. Old look = instant distrust.' },
      { s:'Clients go to competitors', t:'Not because they\'re better — because their website is more convincing.' },
    ],
  },
  solution: {
    label:'The Solution',
    title:'What happens when your website actually works for you?',
    sub:'No jargon. Just outcomes.',
    items: [
      { t:'More leads', d:'Visitors convert automatically, 24/7.', r:'More leads without bigger budget' },
      { t:'Higher conversion', d:'Clear structure, content, speed. Less bounce, more deals.', r:'More sales from same traffic' },
      { t:'Automation', d:'Enquiries, bookings, notifications — without your input.', r:'Up to 40% less manual work' },
      { t:'More trust', d:'A strong website signals seriousness. People buy where they trust.', r:'Higher average deal size' },
      { t:'Lower costs', d:'No assistant for standard requests. No inbox chaos.', r:'Optimised operational costs' },
      { t:'Scalability', d:'Site grows with your business — no full rebuild needed.', r:'Future-proof technology' },
    ],
  },
  about: {
    label:'About me', title:'I build web that works for your business',
    p1:'Hey, I\'m Serhii — a fullstack developer. I build web apps and websites that solve real business problems.',
    p2:'Experience in startups and agencies. Clean, scalable code. Fast replies, deadlines met, results owned.',
    cta:'Get in touch', avail:'Available for new projects',
  },
  services: {
    label:'Services', title:'What I do', sub:'Full cycle — from strategy to deployment.',
    cta:'Discuss your project →',
    items: [
      { n:'Corporate Website', tl:'Your digital identity that builds trust', d:'Websites that present your company the way it deserves.', r:'More enquiries from new clients.', tags:['WordPress','Next.js','SEO'] },
      { n:'Landing Page', tl:'One page. One goal. Maximum conversions.', d:'No distractions. One focused page that turns visitors into clients.', r:'More bookings from paid traffic.', tags:['React','Animation','A/B'] },
      { n:'Web Portal & Marketplace', tl:'When your business needs its own ecosystem', d:'Booking portals, marketplaces — scalable systems that grow with you.', r:'New revenue streams.', tags:['Next.js','Node.js','PostgreSQL'] },
      { n:'CRM & Internal Tools', tl:'End the spreadsheet chaos', d:'Custom CRM and internal tools that do exactly what your business needs.', r:'Up to 40% less time on processes.', tags:['React','Node.js','Auth'] },
      { n:'Web Application', tl:'Turn your business logic into a product', d:'Complex problems need custom solutions.', r:'New revenue. Automation. Scale.', tags:['React','TypeScript','MongoDB'] },
      { n:'Ongoing Support', tl:'I stay with you after launch', d:'Not a one-off project. Long-term support — updates, features, security.', r:'No technical risk.', tags:['Monitoring','Security','CI/CD'] },
    ],
  },
  why: {
    label:'Why me', title:'What you get and why it matters for your business',
    items: [
      { n:'01', t:'Modern stack', d:'React, Next.js, Node.js, TypeScript — no outdated systems.', b:'Invest once — don\'t rebuild in a year' },
      { n:'02', t:'Load time < 2 sec.', d:'Every second costs 7% conversions. Optimised technically and visually.', b:'Less bounce, more sales' },
      { n:'03', t:'SEO from day one', d:'No afterthought SEO. Structure, semantics, performance built-in.', b:'Organic traffic without ad spend' },
      { n:'04', t:'100% Mobile-First', d:'60%+ visit from smartphones. Testing on real devices.', b:'No client lost to a broken mobile view' },
      { n:'05', t:'Security & GDPR', d:'SSL, secure requests, GDPR-compliant — all included.', b:'Reputation protection and EU compliance' },
      { n:'06', t:'Post-launch support', d:'I don\'t disappear after go-live. Direct contact for questions.', b:'Peace of mind instead of tech panic' },
    ],
  },
  process: {
    label:'Process', title:'How I work — transparent, no surprises', sub:'From the first call to post-launch support.',
    items: [
      { n:'01', t:'Analysis & Goals', d:'I learn your business and challenges. No solution without understanding.', r:'Clear brief and spec' },
      { n:'02', t:'Concept & Plan', d:'Structure, architecture, solution — all before a single line of code.', r:'You know exactly what you get' },
      { n:'03', t:'Design & Interface', d:'No templates. Interface that leads users to the desired action.', r:'Design approved before dev starts' },
      { n:'04', t:'Development & Testing', d:'Clean code. Regular updates. Testing on real devices.', r:'Stable product, no bugs at launch' },
      { n:'05', t:'Launch & Support', d:'Hosting, analytics, monitoring set up. First weeks — I\'m there.', r:'Stress-free launch' },
    ],
  },
  portfolio: { label:'Portfolio', title:'Selected Projects', sub:'Real projects for real clients.', intro:'Every project starts with a business problem. Design follows strategy.', all:'All projects →', view:'Details', code:'Code' },
  stack: { label:'Technologies', title:'My Stack' },
  testi: {
    label:'Testimonials', title:'What clients say',
    items: [
      { t:'I highly recommend Serhii. All tasks done efficiently and on time. He also improved code, SEO, and performance.', n:'Victor Plut', r:'Owner, PlutOn', i:'VP' },
      { t:'Very satisfied! Clean code with WordPress integration. Will work together again.', n:'Alexander Palamarchuk', r:'Owner, Cyfra Service Center', i:'AP' },
      { t:'Great work! Delivered on time, all requests implemented. Highly recommend.', n:'Ivan Dranenko', r:'Owner, Disystems', i:'ID' },
      { t:'Excellent job. High quality within the agreed timeframe.', n:'Igor Gana', r:'Owner, ArtGana', i:'IG' },
    ],
  },
  faq: {
    label:'FAQ', title:'Frequently Asked Questions',
    items: [
      { q:'How much does development cost?', a:'Landing page from €800. Corporate site from €2,500. Web apps quoted individually. Always transparent upfront.' },
      { q:'How long does a project take?', a:'Landing page: 1–2 weeks. Corporate site: 3–5 weeks. Complex apps: 6–12 weeks.' },
      { q:'Can you improve an existing website?', a:'Yes. I analyse what really needs improving first.' },
      { q:'What\'s included in post-launch support?', a:'Updates, small changes, security patches, monitoring. One-off or monthly retainer.' },
      { q:'Will the website work on smartphones?', a:'Always. Mobile-First is the standard. Testing on real devices.' },
      { q:'Do you help with SEO?', a:'Yes — technical SEO built into every project.' },
      { q:'Who writes the copy?', a:'You, me, or together. Good copy can double conversion.' },
      { q:'What do I need to start?', a:'Just a short call. We develop requirements together.' },
      { q:'Do you work outside Germany?', a:'Yes. Fully remote — Germany, EU, Ukraine.' },
      { q:'What if I\'m not satisfied?', a:'We define clear goals upfront. Regular updates during development. No surprises.' },
    ],
  },
  fcta: {
    label:'Ready to grow?',
    title:'While you\'re reading this —\nyour competitor is getting new clients.',
    sub:'Every month without a strong site is a month of lost leads.\nThat can change — faster than you think.',
    cta1:'Free discovery call →', cta2:'View my work',
    note:'No pressure. No commitment after the first call.',
    slots:'📅 Available slots this week: 3 remaining',
  },
  contact: {
    label:'Contact', title:'Have a project? Let\'s talk',
    sub:'I respond within a few hours. First consultation is free.',
    avail:'Available for new projects · responding within a few hours',
  },
  form: {
    title:'Send a message', name:'Your name', email:'Email', subject:'Subject', msg:'Your message',
    sub:'Send message', sending:'Sending...', sent:'✓ Sent!', err:'Error. Please try again.',
    note:'I respond within 24 hours',
  },
  p404: { h1:'Page not found', sub:'This page doesn\'t exist or has moved.', btn:'← Back to Home' },
  footer: { copy:'© 2026 Serhii Kaliuzhnyi — Fullstack Developer' },
}

// --- helpers ---
const getInitialLang = () => {
  if (typeof window === 'undefined') return 'uk'
  return localStorage.getItem('sk_lang') || 'uk'
}

// --- translations ---
const resources = {
  uk: { translation: uk },
  de: { translation: de },
  en: { translation: en },
}

// --- init ---

i18n.use(initReactI18next).init({
  resources,
  lng: getInitialLang(),
  fallbackLng: 'uk',

  interpolation: {
    escapeValue: false,
  },

  react: {
    useSuspense: false, // удобно для Next.js / SSR
  },
})

export default i18n


/*Language detection priority ──────────────────────────────────
   1. User manually picked a lang → saved in localStorage → use it
2. Browser / OS language (navigator.languages or navigator.language)
3. Fallback: 'uk'

Mapping:
  de, de-AT, de-CH, de-DE, … → 'de'
uk, uk-UA                  → 'uk'
anything else              → 'en'
────────────────────────────────────────────────────────────────*/
/*
function detectLang() {
  // 1. User preference
  const saved = typeof window !== 'undefined' && localStorage.getItem('sk_lang')
  if (saved && ['uk','de','en'].includes(saved)) return saved

  // 2. Browser language list (most specific first)
  const langs = typeof window !== 'undefined'
    ? (navigator.languages?.length ? navigator.languages : [navigator.language])
    : []

  for (const l of langs) {
    const code = l.toLowerCase()
    if (code.startsWith('de')) return 'de'
    if (code.startsWith('uk')) return 'uk'
    if (code.startsWith('ru') || code.startsWith('be') || code.startsWith('pl')) return 'uk'
  }

  // 3. Fallback
  return 'en'
}

i18n.use(initReactI18next).init({
  resources: { uk: { translation: uk }, de: { translation: de }, en: { translation: en } },
  lng: detectLang(),
  fallbackLng: 'uk',
  interpolation: { escapeValue: false },
})

export default i18n
*/
