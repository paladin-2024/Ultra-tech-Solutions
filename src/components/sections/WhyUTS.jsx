import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, Shield, Award, Zap } from 'lucide-react'

const POINTS = [
  {
    num: '01',
    icon: Award,
    title: 'Expertise Locale',
    desc: "5 ans d'expérience à Goma. Nous connaissons les réalités du terrain, les contraintes locales et les solutions adaptées à la RDC.",
  },
  {
    num: '02',
    icon: Shield,
    title: 'Qualité & Certification',
    desc: 'Techniciens certifiés, matériaux aux normes IEC, et garantie sur tous nos travaux. Votre investissement est protégé.',
  },
  {
    num: '03',
    icon: Zap,
    title: 'Réactivité',
    desc: "Devis sous 24h, intervention sous 24h pour les urgences. Notre équipe est disponible du lundi au samedi.",
  },
]

const stagger = {
  initial: {},
  animate: { transition: { staggerChildren: 0.1, delayChildren: 0.15 } },
}
const item = {
  initial: { y: 24 },
  animate: { y: 0, transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] } },
}

export default function WhyUTS() {
  return (
    <section className="section section-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Left: text + cards + CTA */}
          <motion.div
            initial={{ x: -32 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="label-tag">Notre différence</p>
            <h2 className="display-lg text-ink mt-1 mb-4">
              Pourquoi Choisir UTS ?
            </h2>
            <p className="text-muted text-[15px] leading-relaxed mb-10 max-w-md">
              Un partenaire technologique qui comprend votre contexte, respecte vos délais et garantit la qualité de chaque réalisation.
            </p>

            <motion.div
              variants={stagger}
              initial="initial"
              animate="animate"
              className="space-y-4 mb-10"
            >
              {POINTS.map((pt) => {
                const PtIcon = pt.icon
                return (
                  <motion.div
                    key={pt.num}
                    variants={item}
                    className="flex gap-4 p-5 rounded-2xl border border-black/6 hover:border-primary/20 hover:shadow-card transition-all duration-300 group"
                  >
                    <div
                      className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0 mt-0.5 transition-all duration-300 group-hover:bg-primary"
                      style={{ background: 'rgba(139,26,26,0.08)', border: '1.5px solid rgba(139,26,26,0.12)' }}
                    >
                      <PtIcon size={18} className="text-primary group-hover:text-white transition-colors duration-300" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1.5">
                        <span className="font-mono text-[9px] text-primary/60 font-bold tracking-wider">{pt.num}</span>
                        <h3
                          className="font-heading font-bold text-ink text-[14px] group-hover:text-primary transition-colors duration-300"
                          style={{ letterSpacing: '-0.015em' }}
                        >
                          {pt.title}
                        </h3>
                      </div>
                      <p className="text-muted text-[13px] leading-relaxed">{pt.desc}</p>
                    </div>
                  </motion.div>
                )
              })}
            </motion.div>

            <Link to="/contact" className="btn-primary gap-2.5 group">
              Nous contacter
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

          {/* Right: image + overlay badge */}
          <motion.div
            initial={{ x: 32 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            {/* Main image */}
            <div className="relative rounded-2xl overflow-hidden aspect-[5/6]">
              <img
                src="/images/tech-solar-selfie.jpg"
                alt="Équipe UTS au travail"
                className="w-full h-full object-cover"
              />
              {/* Subtle tint */}
              <div
                className="absolute inset-0"
                style={{ background: 'linear-gradient(to top, rgba(139,26,26,0.25) 0%, transparent 55%)' }}
              />
            </div>

            {/* WhatsApp badge — bottom */}
            <motion.div
              initial={{ y: 16 }}
              animate={{ y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="absolute -bottom-5 left-5 right-5 bg-white rounded-2xl p-4 shadow-card-hover border border-black/6"
            >
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-full bg-[#25D366] flex items-center justify-center shrink-0 shadow-md">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="white">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-heading font-bold text-ink text-[13.5px]" style={{ letterSpacing: '-0.01em' }}>
                    Réponse garantie sous 24h
                  </p>
                  <p className="text-muted text-[11px] mt-0.5">WhatsApp · Lun–Sam · 8h–18h</p>
                </div>
                <div className="w-2.5 h-2.5 rounded-full bg-[#25D366] shrink-0 shadow-sm animate-pulse" />
              </div>
            </motion.div>

            {/* Small feature chips */}
            <motion.div
              initial={{ x: -16 }}
              animate={{ x: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="absolute top-5 -left-4 bg-white rounded-xl px-4 py-2.5 shadow-card border border-black/6 hidden lg:flex items-center gap-2"
            >
              <span className="text-primary text-lg font-black font-heading">500+</span>
              <span className="text-muted text-xs leading-tight">clients<br />satisfaits</span>
            </motion.div>

            <motion.div
              initial={{ x: 16 }}
              animate={{ x: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="absolute top-5 -right-4 bg-white rounded-xl px-4 py-2.5 shadow-card border border-black/6 hidden lg:flex items-center gap-2"
            >
              <span className="text-primary text-lg font-black font-heading">5</span>
              <span className="text-muted text-xs leading-tight">ans<br />d'expérience</span>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
