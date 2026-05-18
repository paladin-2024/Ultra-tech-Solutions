import { motion } from 'framer-motion'
import { pageTransition } from '@/lib/animations'
import ProjectsGallery from '@/components/sections/ProjectsGallery'
import Testimonials from '@/components/sections/Testimonials'
import CTAStrip from '@/components/sections/CTAStrip'

export default function Projects() {
  return (
    <motion.div {...pageTransition}>
      {/* Cinematic hero */}
      <section className="relative overflow-hidden" style={{ minHeight: '400px' }}>
        <img
          src="/images/team-rebar-rooftop.jpg"
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
          style={{ filter: 'brightness(0.30)' }}
          loading="eager"
        />
        <div className="absolute inset-0"
          style={{ background: 'linear-gradient(110deg, rgba(0,0,0,0.92) 0%, rgba(0,0,0,0.55) 60%, rgba(0,0,0,0.22) 100%)' }} />
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse 50% 60% at 0% 60%, rgba(139,26,26,0.16) 0%, transparent 65%)' }} />

        <div className="container-custom relative z-10 pt-36 pb-20">
          <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
            style={{ color: 'rgba(255,255,255,0.60)', fontFamily: 'DM Mono, monospace', fontSize: '9px', textTransform: 'uppercase', letterSpacing: '0.24em', marginBottom: '16px' }}>
            — Portfolio
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="font-heading font-black text-white mb-5 leading-[1.0]"
            style={{ fontSize: 'clamp(2.4rem, 5vw, 4rem)', letterSpacing: '-0.04em' }}
          >
            Nos <span style={{ color: '#8B1A1A' }}>Réalisations</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
            className="max-w-xl text-base sm:text-[17px] leading-relaxed"
            style={{ color: 'rgba(255,255,255,0.72)' }}>
            Découvrez nos projets réalisés à travers Goma et la région des Grands Lacs —
            installations, formations, robotique et bien plus.
          </motion.p>
        </div>
      </section>

      <ProjectsGallery showFilter />
      <Testimonials />
      <CTAStrip
        title="Votre projet sera notre prochain succès"
        subtitle="Faites confiance à une équipe d'experts pour concrétiser vos ambitions technologiques."
      />
    </motion.div>
  )
}
