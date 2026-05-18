import { motion } from 'framer-motion'
import { CheckCircle2, ShieldCheck, Lightbulb, HeartHandshake } from 'lucide-react'

const VALUES = [
  {
    icon: CheckCircle2,
    title: 'Qualité & Livraison',
    desc: 'Normes IEC respectées, délais tenus, résultats garantis sur chaque chantier.',
    bg: 'rgba(139,26,26,0.07)',
    border: 'rgba(139,26,26,0.14)',
    iconBg: 'rgba(139,26,26,0.1)',
  },
  {
    icon: ShieldCheck,
    title: 'Sécurité & Performance',
    desc: 'Installations conformes, techniciens certifiés, sécurité maximale pour vos équipes.',
    bg: 'rgba(37,99,235,0.06)',
    border: 'rgba(37,99,235,0.13)',
    iconBg: 'rgba(37,99,235,0.09)',
  },
  {
    icon: Lightbulb,
    title: 'Innovation & Efficacité',
    desc: 'Technologies modernes adaptées au contexte de la RDC pour des solutions durables.',
    bg: 'rgba(16,185,129,0.06)',
    border: 'rgba(16,185,129,0.13)',
    iconBg: 'rgba(16,185,129,0.09)',
  },
  {
    icon: HeartHandshake,
    title: 'Service Après-Vente',
    desc: 'Maintenance continue, support réactif et relation de confiance sur le long terme.',
    bg: 'rgba(245,158,11,0.06)',
    border: 'rgba(245,158,11,0.14)',
    iconBg: 'rgba(245,158,11,0.1)',
  },
]

const stagger = {
  initial: {},
  animate: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
}
const item = {
  initial: { y: 18 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
}

export default function CoreValues() {
  return (
    <section className="section section-surface">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Photo — large, immersive */}
          <motion.div
            initial={{ x: -28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
            className="relative rounded-2xl overflow-hidden"
            style={{ aspectRatio: '4/5' }}
          >
            <img
              src="/images/team-rooftop.jpg"
              alt="Réalisation UTS — qualité et expertise"
              className="w-full h-full object-cover"
            />
            {/* Gradient overlay from bottom — NOT solid */}
            <div
              className="absolute inset-0"
              style={{ background: 'linear-gradient(to top, rgba(139,26,26,0.45) 0%, rgba(0,0,0,0.1) 45%, transparent 100%)' }}
            />
            {/* Bottom text */}
            <div className="absolute bottom-0 left-0 right-0 p-7">
              <p className="text-white/50 font-mono text-[9px] uppercase tracking-widest mb-1.5">
                Goma, RDC
              </p>
              <p
                className="text-white font-heading font-black leading-tight"
                style={{ fontSize: 'clamp(1.25rem, 2vw, 1.55rem)', letterSpacing: '-0.025em' }}
              >
                Nos valeurs<br />fondamentales
              </p>
            </div>
          </motion.div>

          {/* Text + value cards */}
          <div>
            <motion.div
              initial={{ y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
              className="mb-10"
            >
              <p className="label-tag">Pourquoi nous choisir</p>
              <h2 className="display-lg text-ink mt-1 mb-3">
                L'Excellence à chaque projet
              </h2>
              <p className="text-muted text-[15px] leading-relaxed max-w-md">
                Quatre piliers qui guident chacune de nos interventions à Goma et dans toute la région.
              </p>
            </motion.div>

            <motion.div
              variants={stagger}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4"
            >
              {VALUES.map((v) => {
                const Icon = v.icon
                return (
                  <motion.div
                    key={v.title}
                    variants={item}
                    className="p-5 rounded-2xl transition-all duration-300 hover:-translate-y-1 hover:shadow-card group"
                    style={{ background: v.bg, border: `1.5px solid ${v.border}` }}
                  >
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center mb-3.5 transition-all duration-300"
                      style={{ background: v.iconBg, border: `1px solid ${v.border}` }}
                    >
                      <Icon size={18} className="text-primary" />
                    </div>
                    <h3
                      className="font-heading font-bold text-ink text-[13.5px] mb-1.5"
                      style={{ letterSpacing: '-0.015em' }}
                    >
                      {v.title}
                    </h3>
                    <p className="text-muted text-[12.5px] leading-relaxed">{v.desc}</p>
                  </motion.div>
                )
              })}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
