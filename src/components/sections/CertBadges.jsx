import { motion } from 'framer-motion'
import { ShieldCheck, Award, Star, Zap, Globe, Users } from 'lucide-react'

const certs = [
  { icon: ShieldCheck, label: 'Certifié ISO 9001', sub: 'Qualité de service' },
  { icon: Award, label: 'Partenaire Solaire', sub: 'Installation certifiée' },
  { icon: Star, label: 'Excellence RDC 2024', sub: 'Prix Tech Innovation' },
  { icon: Zap, label: 'Accrédité ANSER', sub: 'Énergie renouvelable' },
  { icon: Globe, label: 'Membre AIPTTE', sub: 'Association tech Congo' },
  { icon: Users, label: '+50 Clients certifiés', sub: 'Satisfaction garantie' },
]

export default function CertBadges() {
  return (
    <section className="py-14 section-surface">
      <div className="container-custom">
        <motion.p
          initial={{ opacity: 1 }}
          whileInView={{}}
          viewport={{ once: true }}
          className="text-center text-muted font-mono text-[10px] uppercase tracking-[0.25em] mb-8"
        >
          Reconnaissances & Accréditations
        </motion.p>
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={{ initial: {}, animate: { transition: { staggerChildren: 0.06 } } }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3"
        >
          {certs.map((cert) => {
            const Icon = cert.icon
            return (
              <motion.div
                key={cert.label}
                variants={{ initial: { y: 16 }, animate: { y: 0, transition: { duration: 0.45 } } }}
                className="card p-4 text-center hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-xl bg-primary/8 flex items-center justify-center mx-auto mb-3">
                  <Icon size={18} className="text-primary" />
                </div>
                <p className="text-ink/75 text-[11.5px] font-semibold leading-snug">{cert.label}</p>
                <p className="text-muted font-mono text-[9px] mt-1 uppercase tracking-wider">{cert.sub}</p>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
