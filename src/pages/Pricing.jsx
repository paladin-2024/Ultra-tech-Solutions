import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { CheckCircle2, ArrowRight, Phone, Zap } from 'lucide-react'
import { pageTransition, staggerContainer, staggerItem } from '@/lib/animations'
import CTAStrip from '@/components/sections/CTAStrip'
import { siteConfig } from '@/data/siteConfig'

const PLANS = [
  {
    id: 'maintenance-basic',
    badge: 'Maintenance',
    name: 'Contrat Essentiel',
    price: '150',
    period: '/ trimestre',
    desc: 'Idéal pour un logement ou un petit bureau.',
    features: [
      'Inspection trimestrielle complète',
      'Test des protections différentielles',
      'Rapport de visite détaillé',
      'Hotline prioritaire (lun–sam)',
      '10% de réduction sur dépannages',
    ],
    cta: 'Commencer',
    highlight: false,
  },
  {
    id: 'maintenance-pro',
    badge: 'Maintenance',
    name: 'Contrat Pro',
    price: '350',
    period: '/ trimestre',
    desc: 'Pour les commerces, cliniques et bureaux professionnels.',
    features: [
      'Inspection mensuelle + rapport',
      'Thermographie infrarouge annuelle',
      "Remplacement pièces d'usure inclus",
      'Intervention prioritaire sous 4h',
      'Technicien dédié nommément',
      '20% de réduction sur tous travaux',
    ],
    cta: 'Recommandé',
    highlight: true,
  },
  {
    id: 'maintenance-entreprise',
    badge: 'Maintenance',
    name: 'Contrat Entreprise',
    price: 'Sur mesure',
    period: '',
    desc: 'Pour les grandes structures, usines et ONG.',
    features: [
      "Fréquence d'intervention personnalisée",
      'Équipe dédiée multi-techniciens',
      'Suivi GMAO et historique digital',
      'Disponibilité 7j/7 sur appel',
      'Formation sécurité incluse',
      'SLA contractuel garanti',
    ],
    cta: 'Nous contacter',
    highlight: false,
  },
]

const ONE_OFF = [
  { service: 'Dépannage électrique (urgence)', range: '$50 – $200', note: 'Selon complexité' },
  { service: 'Installation tableau électrique', range: '$200 – $800', note: 'Selon ampérage' },
  { service: 'Câblage logement complet', range: '$400 – $2 500', note: 'Selon superficie' },
  { service: 'Système solaire résidentiel', range: '$800 – $4 000', note: 'Selon puissance' },
  { service: 'Système solaire commercial', range: '$3 000 – $15 000', note: 'Sur étude' },
  { service: 'Formation individuelle (3 jours)', range: '$250 – $500', note: 'Selon module' },
  { service: 'Formation groupe (10 personnes)', range: '$1 500 – $3 000', note: 'Sur devis' },
  { service: 'Étude de projet + plans', range: '$150 – $1 000', note: 'Selon envergure' },
  { service: 'Robot éducatif clé en main', range: '$500 – $2 500', note: 'Selon modèle' },
]

export default function Pricing() {
  return (
    <motion.div {...pageTransition}>
      {/* Hero */}
      <section className="relative overflow-hidden" style={{ minHeight: '380px' }}>
        <img
          src="/images/solar-inverter-system.jpg"
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
          style={{ filter: 'brightness(0.28)' }}
          loading="eager"
        />
        <div className="absolute inset-0"
          style={{ background: 'linear-gradient(110deg, rgba(0,0,0,0.92) 0%, rgba(0,0,0,0.55) 60%, rgba(0,0,0,0.22) 100%)' }} />
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse 50% 60% at 0% 60%, rgba(139,26,26,0.16) 0%, transparent 65%)' }} />
        <div className="container-custom relative z-10 pt-36 pb-20">
          <motion.p initial={{ y: 16 }} animate={{ opacity: 1, y: 0 }}
            style={{ color: 'rgba(255,255,255,0.60)', fontFamily: 'DM Mono, monospace', fontSize: '9px', textTransform: 'uppercase', letterSpacing: '0.24em', marginBottom: '16px' }}>
            — Transparence totale
          </motion.p>
          <motion.h1 initial={{ y: 24 }} animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="font-heading font-black text-white mb-5 leading-[1.0]"
            style={{ fontSize: 'clamp(2.4rem, 5vw, 4rem)', letterSpacing: '-0.04em' }}>
            Nos <span style={{ color: '#8B1A1A' }}>Tarifs</span>
          </motion.h1>
          <motion.p initial={{ y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
            className="max-w-xl text-base sm:text-[17px] leading-relaxed"
            style={{ color: 'rgba(255,255,255,0.72)' }}>
            Pas de surprise sur la facture. Voici nos fourchettes de prix indicatives. Le devis précis est toujours gratuit.
          </motion.p>
        </div>
      </section>

      {/* Maintenance contracts */}
      <section className="section section-surface">
        <div className="container-custom">
          <motion.div initial={{ y: 20 }} animate={{ y: 0 }}
            className="text-center mb-14">
            <p className="label-tag justify-center">Contrats récurrents</p>
            <h2 className="display-md text-ink mt-1">Plans de Maintenance</h2>
            <p className="text-muted text-[15px] mt-3 max-w-md mx-auto leading-relaxed">
              Protégez votre installation avec un suivi régulier. Résiliable à tout moment, sans pénalité.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate="animate"
            className="grid grid-cols-1 md:grid-cols-3 gap-5 items-start"
          >
            {PLANS.map((plan) => (
              <motion.div
                key={plan.id}
                variants={staggerItem}
                className={`relative rounded-2xl overflow-hidden flex flex-col ${plan.highlight ? 'ring-2 ring-primary shadow-xl' : ''}`}
                style={{ background: plan.highlight ? '#0F0F0F' : '#fff', border: plan.highlight ? 'none' : '1px solid rgba(0,0,0,0.08)' }}
              >
                {plan.highlight && (
                  <div className="absolute top-0 left-0 right-0 h-[2px]"
                    style={{ background: 'linear-gradient(90deg, #8B1A1A, rgba(139,26,26,0.3), transparent)' }} />
                )}
                {plan.highlight && (
                  <span className="absolute top-4 right-4 font-mono text-[8.5px] uppercase tracking-[0.16em] text-white px-2.5 py-1 rounded-full"
                    style={{ background: '#8B1A1A' }}>
                    Populaire
                  </span>
                )}

                <div className="p-7 flex flex-col flex-1">
                  <span className="font-mono text-[9px] uppercase tracking-[0.18em] mb-3"
                    style={{ color: plan.highlight ? 'rgba(255,255,255,0.45)' : '#9CA3AF' }}>
                    {plan.badge}
                  </span>
                  <h3 className="font-heading font-black mb-2"
                    style={{ fontSize: '1.2rem', letterSpacing: '-0.025em', color: plan.highlight ? '#fff' : '#0F0F0F' }}>
                    {plan.name}
                  </h3>
                  <p className="text-[13px] leading-relaxed mb-6"
                    style={{ color: plan.highlight ? 'rgba(255,255,255,0.55)' : '#6B7280' }}>
                    {plan.desc}
                  </p>

                  <div className="mb-7">
                    <span className="font-heading font-black"
                      style={{ fontSize: plan.price === 'Sur mesure' ? '1.5rem' : '2.4rem', letterSpacing: '-0.04em', color: plan.highlight ? '#fff' : '#0F0F0F' }}>
                      {plan.price === 'Sur mesure' ? plan.price : `$${plan.price}`}
                    </span>
                    {plan.period && (
                      <span className="font-mono text-[11px] ml-1.5"
                        style={{ color: plan.highlight ? 'rgba(255,255,255,0.40)' : '#9CA3AF' }}>
                        {plan.period}
                      </span>
                    )}
                  </div>

                  <ul className="space-y-2.5 mb-8 flex-1">
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-start gap-2.5">
                        <CheckCircle2 size={14} className={plan.highlight ? 'text-primary shrink-0 mt-0.5' : 'text-primary shrink-0 mt-0.5'} />
                        <span className="text-[13px]" style={{ color: plan.highlight ? 'rgba(255,255,255,0.72)' : '#4B5563' }}>
                          {f}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    to="/contact"
                    className={`inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-full font-heading font-bold text-[13.5px] transition-all duration-200 group ${
                      plan.highlight ? 'text-white hover:-translate-y-0.5' : 'hover:-translate-y-0.5'
                    }`}
                    style={{
                      background: plan.highlight ? '#8B1A1A' : 'rgba(139,26,26,0.07)',
                      color: plan.highlight ? '#fff' : '#8B1A1A',
                      boxShadow: plan.highlight ? '0 4px 20px rgba(139,26,26,0.40)' : 'none',
                    }}
                  >
                    {plan.cta}
                    <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* One-off services table */}
      <section className="section section-white">
        <div className="container-custom">
          <motion.div initial={{ y: 20 }} animate={{ y: 0 }}
            className="mb-12">
            <p className="label-tag">Prestations ponctuelles</p>
            <h2 className="display-md text-ink mt-1 mb-4">Tarifs indicatifs</h2>
            <p className="text-muted text-[15px] leading-relaxed max-w-lg">
              Ces fourchettes sont données à titre indicatif. Chaque projet est unique. Le devis précis est établi après visite ou échange téléphonique.
            </p>
          </motion.div>

          <motion.div
            initial={{ y: 20 }}
            animate={{ y: 0 }}
            className="rounded-2xl overflow-hidden"
            style={{ border: '1px solid rgba(0,0,0,0.08)' }}
          >
            {ONE_OFF.map((item, i) => (
              <div
                key={item.service}
                className="flex items-center justify-between gap-4 px-6 py-4 transition-colors duration-150 hover:bg-surface"
                style={{ borderBottom: i < ONE_OFF.length - 1 ? '1px solid rgba(0,0,0,0.05)' : 'none' }}
              >
                <div className="flex items-center gap-3">
                  <Zap size={13} className="text-primary shrink-0" />
                  <span className="font-medium text-ink text-[14px]">{item.service}</span>
                </div>
                <div className="flex items-center gap-4 shrink-0">
                  <span className="font-heading font-bold text-ink text-[14px]" style={{ letterSpacing: '-0.01em' }}>
                    {item.range}
                  </span>
                  <span className="font-mono text-[9px] uppercase tracking-[0.12em] text-muted hidden sm:block">
                    {item.note}
                  </span>
                </div>
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 1 }}
            animate={{}}
            className="mt-8 flex flex-col sm:flex-row items-start sm:items-center gap-4 p-5 rounded-2xl"
            style={{ background: 'rgba(139,26,26,0.04)', border: '1px solid rgba(139,26,26,0.10)' }}
          >
            <Phone size={18} className="text-primary shrink-0" />
            <p className="text-muted text-[14px] leading-relaxed flex-1">
              <strong className="text-ink">Besoin d'un chiffre exact ?</strong> Appelez-nous au{' '}
              <a href={`tel:${siteConfig.phones[0].replace(/\s/g,'')}`} className="text-primary font-semibold hover:underline">
                {siteConfig.phones[0]}
              </a>. Nous vous donnons une estimation en 5 minutes.
            </p>
            <Link to="/devis" className="btn-primary gap-2 shrink-0 group">
              Calculateur rapide <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>

      <CTAStrip
        title="Prêt à démarrer votre projet ?"
        subtitle="Devis précis sur mesure, réponse sous 24h, intervention garantie."
      />
    </motion.div>
  )
}
