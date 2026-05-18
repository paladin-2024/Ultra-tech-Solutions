import { motion } from 'framer-motion'
import { pageTransition } from '@/lib/animations'
import ContactForm from '@/components/sections/ContactForm'
import ContactInfo from '@/components/sections/ContactInfo'
import { siteConfig } from '@/data/siteConfig'
import { Phone, Mail, Clock, MapPin } from 'lucide-react'

const DIRECTIONS = [
  { step: '01', title: 'Depuis le centre-ville', desc: "Prenez l'Avenue Kiwanja vers le nord. Après le rond-point Mabanga, tournez à gauche sur l'Avenue Katoyi. UTS est au numéro 226, sur la droite." },
  { step: '02', title: "Depuis l'aéroport de Goma", desc: "Sortez de l'aéroport, prenez la direction nord. Suivez la Route nationale jusqu'à Mabanga Nord. Demandez le 226 Avenue Katoyi." },
  { step: '03', title: 'En transport en commun', desc: "Bus ligne 12 ou taxi-bus direction Mabanga Nord. Descendez à l'arrêt \"École Primaire Katoyi\". UTS est à 100m à pied." },
]

const FAQ = [
  { q: 'Intervenez-vous en dehors de Goma ?', a: "Oui, nous intervenons dans tout le Nord-Kivu et pouvons nous déplacer dans les provinces voisines selon l'ampleur du projet." },
  { q: 'Proposez-vous des devis gratuits ?', a: 'Absolument. Tous nos devis sont gratuits et sans engagement. Contactez-nous pour une évaluation personnalisée de votre projet.' },
  { q: "Quels sont vos délais d'intervention pour le dépannage ?", a: "Nous visons une intervention dans les 24 heures pour les urgences, selon la disponibilité de nos techniciens et la localisation." },
  { q: 'Proposez-vous des contrats de maintenance récurrents ?', a: 'Oui, nous proposons des contrats de maintenance mensuelle, trimestrielle ou annuelle avec des tarifs préférentiels.' },
  { q: 'Les formations sont-elles certifiantes ?', a: 'Nos formations délivrent des attestations de compétences UTS. Nous travaillons à la reconnaissance nationale de nos certifications.' },
]

export default function Contact() {
  return (
    <motion.div {...pageTransition}>
      {/* Cinematic hero */}
      <section className="relative overflow-hidden" style={{ minHeight: '420px' }}>
        <img
          src="/images/team-rebar-rooftop.jpg"
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
          style={{ filter: 'brightness(0.32)' }}
          loading="eager"
        />
        <div className="absolute inset-0"
          style={{ background: 'linear-gradient(110deg, rgba(0,0,0,0.92) 0%, rgba(0,0,0,0.55) 60%, rgba(0,0,0,0.22) 100%)' }} />
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse 50% 60% at 0% 60%, rgba(139,26,26,0.16) 0%, transparent 65%)' }} />

        <div className="container-custom relative z-10 pt-36 pb-20">
          <motion.p initial={{ y: 16 }} animate={{ opacity: 1, y: 0 }}
            style={{ color: 'rgba(255,255,255,0.60)', fontFamily: 'DM Mono, monospace', fontSize: '9px', textTransform: 'uppercase', letterSpacing: '0.24em', marginBottom: '16px' }}>
            — Parlons de votre projet
          </motion.p>
          <motion.h1
            initial={{ y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="font-heading font-black text-white mb-5 leading-[1.0]"
            style={{ fontSize: 'clamp(2.4rem, 5vw, 4rem)', letterSpacing: '-0.04em' }}
          >
            Contactez-<span style={{ color: '#8B1A1A' }}>Nous</span>
          </motion.h1>
          <motion.p initial={{ y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
            className="max-w-xl text-base sm:text-[17px] leading-relaxed"
            style={{ color: 'rgba(255,255,255,0.72)' }}>
            Une question, un projet, un devis ? Notre équipe répond sous 24 heures.
          </motion.p>

          {/* Quick contact chips */}
          <motion.div
            initial={{ y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
            className="flex flex-wrap gap-3 mt-8"
          >
            {[
              { icon: Phone, value: siteConfig.phones[0], href: `tel:${siteConfig.phones[0].replace(/\s/g,'')}` },
              { icon: Mail, value: siteConfig.email, href: `mailto:${siteConfig.email}` },
              { icon: Clock, value: siteConfig.workingHours, href: null },
            ].map(({ icon: Icon, value, href }) => (
              <div key={value}
                className="flex items-center gap-2.5 px-4 py-2.5 rounded-full"
                style={{ background: 'rgba(255,255,255,0.07)', backdropFilter: 'blur(10px)', border: '1px solid rgba(255,255,255,0.1)' }}
              >
                <Icon size={12} className="text-primary shrink-0" />
                {href
                  ? <a href={href} className="font-mono text-[10px] text-white/60 hover:text-white transition-colors tracking-wide">{value}</a>
                  : <span className="font-mono text-[10px] text-white/50 tracking-wide">{value}</span>
                }
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Form + Info — info LEFT, form RIGHT */}
      <section className="section section-surface">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-[380px_1fr] xl:grid-cols-[420px_1fr] gap-8 lg:gap-12 items-start">
            <ContactInfo />
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Directions */}
      <section className="section section-white">
        <div className="container-custom">
          <motion.div initial={{ y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <p className="label-tag justify-center">Comment nous trouver</p>
            <h2 className="display-md text-ink mt-1">Instructions d'Accès</h2>
          </motion.div>
          <motion.div
            initial="initial" whileInView="animate" viewport={{ once: true }}
            variants={{ initial: {}, animate: { transition: { staggerChildren: 0.09 } } }}
            className="grid grid-cols-1 md:grid-cols-3 gap-5"
          >
            {DIRECTIONS.map((d) => (
              <motion.div key={d.step}
                variants={{ initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0, transition: { duration: 0.5 } } }}
                className="card p-6 group hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300"
              >
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-xl text-primary font-heading font-bold text-sm mb-4 font-mono"
                  style={{ background: 'rgba(139,26,26,0.08)', border: '1.5px solid rgba(139,26,26,0.15)' }}>
                  {d.step}
                </span>
                <h3 className="font-heading font-bold text-ink text-[15px] mb-2 group-hover:text-primary transition-colors duration-300"
                  style={{ letterSpacing: '-0.02em' }}>{d.title}</h3>
                <p className="text-muted text-[13px] leading-relaxed">{d.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section section-surface">
        <div className="container-custom">
          <motion.div initial={{ y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <p className="label-tag justify-center">Questions fréquentes</p>
            <h2 className="display-md text-ink mt-1">FAQ</h2>
          </motion.div>
          <div className="max-w-3xl mx-auto space-y-2.5">
            {FAQ.map((item, i) => (
              <motion.details key={i}
                initial={{ y: 12 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: i * 0.05 }}
                className="card overflow-hidden group"
              >
                <summary className="px-5 sm:px-6 py-4 cursor-pointer font-heading font-semibold text-ink text-sm hover:text-primary transition-colors flex items-center justify-between list-none">
                  <span>{item.q}</span>
                  <span className="text-primary font-bold text-xl ml-4 shrink-0 group-open:rotate-45 transition-transform duration-200 inline-block leading-none">+</span>
                </summary>
                <div className="px-5 sm:px-6 pb-5 border-t border-black/5">
                  <p className="text-muted text-sm leading-relaxed pt-3">{item.a}</p>
                </div>
              </motion.details>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  )
}
