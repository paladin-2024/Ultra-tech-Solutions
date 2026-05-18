import { lazy, Suspense, useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import WhatsAppButton from '@/components/layout/WhatsAppButton'
import SplashScreen from '@/components/layout/SplashScreen'
import ScrollToTop from '@/components/layout/ScrollToTop'
import CursorSpotlight from '@/components/layout/CursorSpotlight'
import ExitIntentPopup from '@/components/layout/ExitIntentPopup'

const Home = lazy(() => import('@/pages/Home'))
const Services = lazy(() => import('@/pages/Services'))
const ServiceDetail = lazy(() => import('@/pages/ServiceDetail'))
const About = lazy(() => import('@/pages/About'))
const Projects = lazy(() => import('@/pages/Projects'))
const Contact = lazy(() => import('@/pages/Contact'))
const Blog = lazy(() => import('@/pages/Blog'))
const BlogPost = lazy(() => import('@/pages/BlogPost'))
const QuoteCalculator = lazy(() => import('@/pages/QuoteCalculator'))
const Pricing = lazy(() => import('@/pages/Pricing'))

function PageLoader() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="w-9 h-9 border-2 border-primary/15 border-t-primary rounded-full animate-spin" />
    </div>
  )
}

export default function App() {
  const location = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])

  return (
    <>
      <SplashScreen />
      <CursorSpotlight />
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">
          <Suspense fallback={<PageLoader />}>
            <AnimatePresence mode="wait" initial={false}>
              <Routes location={location} key={location.pathname}>
                <Route path="/" element={<Home />} />
                <Route path="/services" element={<Services />} />
                <Route path="/services/:slug" element={<ServiceDetail />} />
                <Route path="/a-propos" element={<About />} />
                <Route path="/projets" element={<Projects />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/blog/:slug" element={<BlogPost />} />
                <Route path="/devis" element={<QuoteCalculator />} />
                <Route path="/tarifs" element={<Pricing />} />
              </Routes>
            </AnimatePresence>
          </Suspense>
        </main>
        <Footer />
        <WhatsAppButton />
        <ScrollToTop />
<ExitIntentPopup />
      </div>
    </>
  )
}
