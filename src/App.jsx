import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/react'
import Nav from './components/Nav'
import Footer from './components/Footer'
import FloatCta from './components/FloatCta'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Blog from './pages/Blog'
import BlogPost from './pages/BlogPost'
import Contact from './pages/Contact'
import Impressum from './pages/Impressum'
import Datenschutz from './pages/Datenschutz'
import NotFound from './pages/NotFound'

function ScrollTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}

export default function App() {
  return (
    <>
      <ScrollTop />
      <Nav />
      <Routes>
        <Route path="/"              element={<Home />} />
        <Route path="/projects"      element={<Projects />} />
        <Route path="/blog"          element={<Blog />} />
        <Route path="/blog/:slug"    element={<BlogPost />} />
        <Route path="/contact"       element={<Contact />} />
        <Route path="/impressum"     element={<Impressum />} />
        <Route path="/datenschutz"   element={<Datenschutz />} />
        <Route path="*"              element={<NotFound />} />
      </Routes>
      <Footer />
      <FloatCta />
      <Analytics />
      <SpeedInsights />
    </>
  )
}
