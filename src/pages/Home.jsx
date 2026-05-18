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

export default function Home() {
  return (
    <div>
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
    </div>
  )
}
