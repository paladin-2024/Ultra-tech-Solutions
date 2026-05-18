import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, Phone } from 'lucide-react'
import { siteConfig } from '@/data/siteConfig'

export default function CTAStrip({
  title = "Construisons quelque chose de grand ensemble",
  subtitle = "Contactez notre équipe pour un devis et une consultation personnalisée.",
}) {
  return (
    <section className="relative overflow-hidden" style={{ minHeight: '480px' }}>
      {/* Real photo background */}
      <img
        src="/images/hero-solar-team.jpg"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Dark gradient overlay — NOT solid color */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(105deg, rgba(8,8,8,0.90) 0%, rgba(8,8,8,0.70) 50%, rgba(8,8,8,0.45) 100%)',
        }}
      />

      {/* Subtle red glow on left */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 55% 70% at 5% 50%, rgba(139,26,26,0.22) 0%, transparent 70%)',
        }}
      />

      <div className="container-custom relative z-10 py-24 sm:py-32">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-12">

          <motion.div
            initial={{ y: 24 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-2xl"
          >
            <p className="inline-flex items-center gap-2 text-white/40 font-mono text-[10px] uppercase tracking-[0.22em] mb-5">
              <span className="inline-block w-4 h-px bg-white/30" />
              Travaillons ensemble
            </p>
            <h2
              className="font-heading font-black text-white mb-5"
              style={{ fontSize: 'clamp(2rem, 4.5vw, 3.5rem)', letterSpacing: '-0.035em', lineHeight: 1.05 }}
            >
              {title}
            </h2>
            <p className="text-white/50 text-[15px] leading-relaxed max-w-lg">{subtitle}</p>
          </motion.div>

          <motion.div
            initial={{ y: 24 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.65, delay: 0.13, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0 w-full lg:w-auto"
          >
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 bg-primary text-white font-bold rounded-full text-sm transition-all duration-250 hover:bg-primary-dark hover:-translate-y-0.5"
              style={{ boxShadow: '0 4px 24px rgba(139,26,26,0.5)' }}
            >
              Get a quote
              <ArrowRight size={15} />
            </Link>
            <a
              href={`tel:${siteConfig.phones[0].replace(/\s/g, '')}`}
              className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 border border-white/20 text-white font-semibold rounded-full text-sm transition-all duration-250 hover:bg-white/10"
            >
              <Phone size={14} />
              {siteConfig.phones[0]}
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
