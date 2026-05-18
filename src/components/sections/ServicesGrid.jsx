import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { GraduationCap, Home, Bot, FileText, Wrench, Zap, ArrowRight, Plus, Minus } from 'lucide-react'
import { services } from '@/data/services'

const iconMap = { GraduationCap, Home, Bot, FileText, Wrench, Zap }

export default function ServicesGrid({ limit, showCTA = true }) {
  const [expanded, setExpanded] = useState(null)
  const displayed = limit ? services.slice(0, limit) : services

  return (
    <section className="section section-white">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ y: 20 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14"
        >
          <div>
            <p className="label-tag">Ce que nous faisons</p>
            <h2 className="display-lg text-ink mt-1">Nos Services</h2>
          </div>
          <p className="text-muted text-[15px] leading-relaxed max-w-sm sm:text-right">
            Six domaines d'expertise pour accompagner votre transformation technologique.
          </p>
        </motion.div>

        {/* Split: photo left + accordion right */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-14 items-stretch">

          {/* Left — photo with gradient overlay */}
          <motion.div
            initial={{ x: -28 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-2 relative rounded-2xl overflow-hidden"
            style={{ minHeight: '420px' }}
          >
            <img
              src="/images/tech-solar-rooftop.jpg"
              alt="Technicien UTS en intervention"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div
              className="absolute inset-0"
              style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.80) 0%, rgba(0,0,0,0.15) 55%, transparent 100%)' }}
            />
            <div
              className="absolute inset-0 pointer-events-none"
              style={{ background: 'radial-gradient(ellipse 80% 40% at 50% 0%, rgba(139,26,26,0.2) 0%, transparent 65%)' }}
            />

            <div className="absolute bottom-0 left-0 right-0 p-7">
              <p className="text-white/45 font-mono text-[9px] uppercase tracking-[0.22em] mb-2">
                Ultra Tech Solutions
              </p>
              <p
                className="text-white font-heading font-black leading-tight mb-5"
                style={{ fontSize: 'clamp(1.3rem, 2.2vw, 1.65rem)', letterSpacing: '-0.025em' }}
              >
                Experts en<br />Électrotechnique
              </p>
              <div className="flex items-center gap-5">
                <div>
                  <p className="text-white font-heading font-black text-[1.4rem]" style={{ lineHeight: 1 }}>5+</p>
                  <p className="text-white/40 text-[9px] font-mono mt-0.5">années</p>
                </div>
                <div className="w-px h-7 bg-white/15" />
                <div>
                  <p className="text-white font-heading font-black text-[1.4rem]" style={{ lineHeight: 1 }}>500+</p>
                  <p className="text-white/40 text-[9px] font-mono mt-0.5">clients</p>
                </div>
                <div className="w-px h-7 bg-white/15" />
                <div>
                  <p className="text-white font-heading font-black text-[1.4rem]" style={{ lineHeight: 1 }}>6</p>
                  <p className="text-white/40 text-[9px] font-mono mt-0.5">services</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right — accordion list */}
          <motion.div
            initial={{ x: 28 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.65, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-3 flex flex-col justify-center"
          >
            <div className="divide-y divide-black/[0.06]">
              {displayed.map((svc, idx) => {
                const Icon = iconMap[svc.icon] || Zap
                const isOpen = expanded === svc.id

                return (
                  <div key={svc.id}>
                    <button
                      onClick={() => setExpanded(isOpen ? null : svc.id)}
                      className="w-full flex items-center gap-4 py-[18px] group text-left"
                    >
                      <div
                        className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-all duration-300"
                        style={{
                          background: isOpen ? '#8B1A1A' : 'rgba(139,26,26,0.07)',
                          border: '1.5px solid rgba(139,26,26,0.13)',
                        }}
                      >
                        <Icon
                          size={17}
                          style={{ color: isOpen ? '#fff' : '#8B1A1A' }}
                          className="transition-colors duration-300"
                        />
                      </div>

                      <div className="flex-1 min-w-0">
                        <div className="flex items-baseline gap-2.5">
                          <span className="font-mono text-[9px] tracking-[0.18em] shrink-0" style={{ color: '#9CA3AF' }}>
                            0{idx + 1}
                          </span>
                          <h3
                            className="font-heading font-bold text-ink text-[15px] leading-snug group-hover:text-primary transition-colors duration-200"
                            style={{ letterSpacing: '-0.015em' }}
                          >
                            {svc.title}
                          </h3>
                        </div>
                      </div>

                      <div
                        className="w-7 h-7 rounded-full flex items-center justify-center shrink-0 border transition-all duration-300"
                        style={{
                          background: isOpen ? '#8B1A1A' : '#fff',
                          borderColor: isOpen ? '#8B1A1A' : 'rgba(0,0,0,0.1)',
                        }}
                      >
                        {isOpen
                          ? <Minus size={11} color="#fff" />
                          : <Plus size={11} className="text-muted" />
                        }
                      </div>
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          key="body"
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] }}
                          className="overflow-hidden"
                        >
                          <div className="pb-5 pl-14 pr-2">
                            <p className="text-muted text-[13.5px] leading-relaxed mb-3.5">
                              {svc.shortDesc}
                            </p>
                            <Link
                              to={`/services/${svc.slug}`}
                              className="inline-flex items-center gap-1.5 text-primary font-semibold text-[13px] hover:gap-3 transition-all duration-200"
                            >
                              En savoir plus
                              <ArrowRight size={13} />
                            </Link>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                )
              })}
            </div>

            {showCTA && (
              <motion.div
                initial={{ opacity: 1 }}
                animate={{}}
                transition={{ delay: 0.35 }}
                className="mt-8 pt-8 border-t border-black/[0.06]"
              >
                <Link to="/services" className="btn-primary gap-2.5 group">
                  Voir tous nos services
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
