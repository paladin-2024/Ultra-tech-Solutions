import { motion } from 'framer-motion'
import { pageTransition } from '@/lib/animations'
import HeroSection from '@/components/sections/HeroSection'
import StatsBar from '@/components/sections/StatsBar'
import ServicesGrid from '@/components/sections/ServicesGrid'
import WhyUTS from '@/components/sections/WhyUTS'
import ProcessSteps from '@/components/sections/ProcessSteps'
import ProjectsGallery from '@/components/sections/ProjectsGallery'
import Testimonials from '@/components/sections/Testimonials'
import CTAStrip from '@/components/sections/CTAStrip'
import PartnersStrip from '@/components/sections/PartnersStrip'
import CoreValues from '@/components/sections/CoreValues'
import BeforeAfterSlider from '@/components/sections/BeforeAfterSlider'
import BlogPreview from '@/components/sections/BlogPreview'
import CoverageMap from '@/components/sections/CoverageMap'
import VideoSection from '@/components/sections/VideoSection'
import ReviewsWidget from '@/components/sections/ReviewsWidget'
import GuaranteeSection from '@/components/sections/GuaranteeSection'
import NewsletterCapture from '@/components/sections/NewsletterCapture'

export default function Home() {
  return (
    <motion.div {...pageTransition}>
      <HeroSection />
      <StatsBar />
      <PartnersStrip />
      <ServicesGrid limit={6} />
      <CoreValues />
      <VideoSection />
      <BeforeAfterSlider />
      <GuaranteeSection />
      <WhyUTS />
      <ProcessSteps />
      <CoverageMap />
      <ProjectsGallery limit={4} showFilter={false} />
      <ReviewsWidget />
      <Testimonials />
      <BlogPreview />
      <NewsletterCapture />
      <CTAStrip />
    </motion.div>
  )
}
