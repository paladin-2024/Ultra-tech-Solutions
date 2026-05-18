import { useRef, useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { pageTransition } from '@/lib/animations'
import HeroSection from '@/components/sections/HeroSection'
import StatsBar from '@/components/sections/StatsBar'
import PartnersStrip from '@/components/sections/PartnersStrip'
import ServicesGrid from '@/components/sections/ServicesGrid'
import CoreValues from '@/components/sections/CoreValues'
import VideoSection from '@/components/sections/VideoSection'
import BeforeAfterSlider from '@/components/sections/BeforeAfterSlider'
import GuaranteeSection from '@/components/sections/GuaranteeSection'
import WhyUTS from '@/components/sections/WhyUTS'
import ProcessSteps from '@/components/sections/ProcessSteps'
import CoverageMap from '@/components/sections/CoverageMap'
import ProjectsGallery from '@/components/sections/ProjectsGallery'
import ReviewsWidget from '@/components/sections/ReviewsWidget'
import Testimonials from '@/components/sections/Testimonials'
import BlogPreview from '@/components/sections/BlogPreview'
import NewsletterCapture from '@/components/sections/NewsletterCapture'
import CTAStrip from '@/components/sections/CTAStrip'

// Defers mounting a section until it's 400px from the viewport.
// Prevents all 18 sections from rendering simultaneously on page load.
function LazySection({ children, minHeight = 500 }) {
  const [mounted, setMounted] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setMounted(true); obs.disconnect() } },
      { rootMargin: '400px 0px' }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return (
    <div ref={ref} style={{ minHeight: mounted ? undefined : minHeight }}>
      {mounted && children}
    </div>
  )
}

export default function Home() {
  return (
    <motion.div {...pageTransition}>
      {/* Critical path — always rendered immediately */}
      <HeroSection />
      <StatsBar />
      <PartnersStrip />

      {/* Below-fold sections — deferred until near viewport */}
      <LazySection minHeight={520}><ServicesGrid limit={6} /></LazySection>
      <LazySection minHeight={520}><CoreValues /></LazySection>
      <LazySection minHeight={480}><VideoSection /></LazySection>
      <LazySection minHeight={480}><BeforeAfterSlider /></LazySection>
      <LazySection minHeight={480}><GuaranteeSection /></LazySection>
      <LazySection minHeight={520}><WhyUTS /></LazySection>
      <LazySection minHeight={480}><ProcessSteps /></LazySection>
      <LazySection minHeight={480}><CoverageMap /></LazySection>
      <LazySection minHeight={560}><ProjectsGallery limit={4} showFilter={false} /></LazySection>
      <LazySection minHeight={560}><ReviewsWidget /></LazySection>
      <LazySection minHeight={400}><Testimonials /></LazySection>
      <LazySection minHeight={480}><BlogPreview /></LazySection>
      <LazySection minHeight={300}><NewsletterCapture /></LazySection>
      <LazySection minHeight={200}><CTAStrip /></LazySection>
    </motion.div>
  )
}
