import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { GraduationCap, Home, Bot, FileText, Wrench, Zap, CheckCircle2, ArrowRight } from 'lucide-react'
import { pageTransition, staggerContainer, staggerItem } from '@/lib/animations'
import { services } from '@/data/services'
import ProcessSteps from '@/components/sections/ProcessSteps'
import ProjectsGallery from '@/components/sections/ProjectsGallery'
import CTAStrip from '@/components/sections/CTAStrip'

const iconMap = { GraduationCap, Home, Bot, FileText, Wrench, Zap }

function PageHero() {
  return (
    <section className="relative overflow-hidden" style={{ minHeight: '420px' }}>
      <img
        src="/images/tech-ladder-electrical.jpg"
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
        <motion.p initial={{ y: 16 }} animate={{ opacity: 1, y: 0 }}
          style={{ color: 'rgba(255,255,255,0.60)', fontFamily: 'DM Mono, monospace', fontSize: '9px', textTransform: 'uppercase', letterSpacing: '0.24em', marginBottom: '16px' }}>
          — Ce que nous proposons
        </motion.p>
        <motion.h1
          initial={{ y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="font-heading font-black text-white mb-5 leading-[1.0]"
          style={{ fontSize: 'clamp(2.4rem, 5vw, 4rem)', letterSpacing: '-0.04em' }}
        >
          Nos <span style={{ color: '#8B1A1A' }}>Services</span>
        </motion.h1>
        <motion.p initial={{ y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
          className="max-w-xl text-base sm:text-[17px] leading-relaxed"
          style={{ color: 'rgba(255,255,255,0.72)' }}>
          Six domaines d'expertise pour accompagner votre transformation technologique,
          de la formation à l'installation en passant par la robotique.
        </motion.p>

        {/* Quick service chips */}
        <motion.div
          initial={{ y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35 }}
          className="flex flex-wrap gap-2 mt-8"
        >
          {['Formations', 'Installation', 'Robotique', 'Étude de Projets', 'Maintenance', 'Dépannage'].map((s) => (
            <span key={s}
              className="font-mono text-[9px] uppercase tracking-[0.14em] text-white/45 px-3 py-1.5 rounded-full"
              style={{ background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.1)' }}>
              {s}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default function Services() {
  return (
    <motion.div {...pageTransition}>
      <PageHero />

      {/* Detailed service cards */}
      <section className="section section-surface">
        <div className="container-custom">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="space-y-6"
          >
            {services.map((service, i) => {
              const Icon = iconMap[service.icon] || Zap
              const isEven = i % 2 === 0
              return (
                <motion.div
                  key={service.id}
                  variants={staggerItem}
                  className="card overflow-hidden"
                  whileHover={{ boxShadow: '0 12px 48px rgba(0,0,0,0.1)' }}
                >
                  <div className="grid grid-cols-1 lg:grid-cols-2">
                    {/* Photo panel */}
                    <div className={`relative overflow-hidden ${!isEven ? 'lg:order-2' : ''}`}
                      style={{ minHeight: '260px' }}>
                      <img
                        src={[
                          '/images/tech-drilling-ceiling.jpg',
                          '/images/arduino-training.jpg',
                          '/images/smart-home-module.jpg',
                          '/images/tech-solar-rooftop.jpg',
                          '/images/solar-inverter-system.jpg',
                          '/images/raspberry-pi.jpg',
                        ][i]}
                        alt={service.title}
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                      <div className="absolute inset-0"
                        style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.25) 50%, rgba(0,0,0,0.1) 100%)' }} />
                      {/* Red top accent */}
                      <div className="absolute top-0 left-0 right-0 h-[2px]"
                        style={{ background: 'linear-gradient(90deg, #8B1A1A, rgba(139,26,26,0.2), transparent)' }} />
                      <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
                        <div className="flex items-center gap-3 mb-1">
                          <div className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0"
                            style={{ background: 'rgba(139,26,26,0.8)' }}>
                            <Icon size={18} className="text-white" />
                          </div>
                          <h3 className="font-heading font-black text-white text-xl leading-tight"
                            style={{ letterSpacing: '-0.02em' }}>
                            {service.title}
                          </h3>
                        </div>
                        <p className="text-white/50 text-[12px] ml-12">{service.shortDesc}</p>
                      </div>
                    </div>

                    {/* Content panel */}
                    <div className={`p-8 md:p-10 ${!isEven ? 'lg:order-1' : ''}`}>
                      <p className="text-muted text-[15px] leading-relaxed mb-6">{service.description}</p>
                      <p className="font-heading font-semibold text-ink text-[10px] uppercase tracking-[0.15em] mb-4 opacity-50">
                        Ce qui est inclus
                      </p>
                      <ul className="space-y-2.5 mb-8">
                        {service.features.map((f) => (
                          <li key={f} className="flex items-start gap-3">
                            <CheckCircle2 size={15} className="text-primary mt-0.5 shrink-0" />
                            <span className="text-muted text-[13.5px]">{f}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="flex items-center gap-3 flex-wrap">
                        <Link to={`/services/${service.slug}`} className="btn-secondary group gap-2.5">
                          En savoir plus
                          <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                        </Link>
                        <Link to="/contact" className="btn-primary group gap-2.5">
                          Demander ce service
                          <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>

      <ProcessSteps />
      <ProjectsGallery limit={4} showFilter={false} title="Projets Récents" />
      <CTAStrip
        title="Besoin d'un service personnalisé ?"
        subtitle="Chaque projet est unique. Contactez-nous pour une solution sur mesure."
      />
    </motion.div>
  )
}
