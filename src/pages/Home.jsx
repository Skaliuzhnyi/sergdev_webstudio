import { Helmet } from 'react-helmet-async'
import { useTranslation } from 'react-i18next'
import Hero from '../components/Hero'
import Problem from '../components/Problem'
import Solution from '../components/Solution'
import About from '../components/About'
import Services from '../components/Services'
import Why from '../components/Why'
import Portfolio from '../components/Portfolio'
import Process from '../components/Process'
import Stack from '../components/Stack'
import Testimonials from '../components/Testimonials'
import Faq from '../components/Faq'
import FinalCta from '../components/FinalCta'

const SEO = {
  uk:{ title:'Serhii Kaliuzhnyi — Fullstack Developer | React · Next.js · Node.js', desc:'Fullstack-розробник. Сайти та веб-застосунки що приводять клієнтів. React · Next.js · TypeScript.' },
  de:{ title:'Fullstack Developer – Websites & Web-Apps | Serhii Kaliuzhnyi', desc:'Fullstack Developer. Websites und Web-Apps die Kunden bringen. React · Next.js · Node.js. Kostenlose Erstberatung.' },
  en:{ title:'Fullstack Developer for Business – React, Next.js | Serhii Kaliuzhnyi', desc:'Fullstack developer. Websites and web apps that bring clients. React · Next.js · Node.js.' },
}

export default function Home() {
  const { i18n } = useTranslation()
  const m = SEO[i18n.language] || SEO.uk
  return (
    <>
      <Helmet>
        <title>{m.title}</title>
        <meta name="description" content={m.desc} />
        <link rel="canonical" href="https://sergdev-webstudio.vercel.app/" />
      </Helmet>
      <main>
        <Hero />
        <div className="dv"/>
        <Problem />
        <div className="dv"/>
        <Solution />
        <div className="dv"/>
        <About />
        <div className="dv"/>
        <Services />
        <div className="dv"/>
        <Why />
        <div className="dv"/>
        <Portfolio />
        <div className="dv"/>
        <Process />
        <div className="dv"/>
        <Stack />
        <div className="dv"/>
        <Testimonials />
        <div className="dv"/>
        <Faq />
        <div className="dv"/>
        <FinalCta />
      </main>
    </>
  )
}
