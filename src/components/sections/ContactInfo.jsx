import { motion } from 'framer-motion'
import {
  MapPin, Phone, Mail, Clock, MessageCircle,
  Bus, Car, PersonStanding, Navigation,
} from 'lucide-react'
import { fadeInRight, staggerContainer, staggerItem } from '@/lib/animations'
import { siteConfig } from '@/data/siteConfig'

const INFO_BLOCKS = [
  {
    icon: MapPin,
    title: 'Adresse',
    lines: [siteConfig.address, siteConfig.city, siteConfig.country],
    links: null,
    accentIndex: null,
  },
  {
    icon: Phone,
    title: 'Téléphone',
    lines: siteConfig.phones,
    links: siteConfig.phones.map((p) => `tel:${p.replace(/\s/g, '')}`),
    accentIndex: 0,
  },
  {
    icon: Mail,
    title: 'Email',
    lines: [siteConfig.email],
    links: [`mailto:${siteConfig.email}`],
    accentIndex: 0,
  },
  {
    icon: Clock,
    title: 'Horaires',
    lines: [siteConfig.workingHours, 'Dimanche : Sur rendez-vous'],
    links: null,
    accentIndex: null,
  },
]

// Matches the Stitch "Contact avec Icônes d'Accès" variant
const ACCESS_ICONS = [
  {
    icon: Bus,
    label: 'Bus',
    desc: 'Ligne 12 — Arrêt Mabanga Nord',
  },
  {
    icon: Car,
    label: 'Voiture',
    desc: 'Stationnement disponible devant le bureau',
  },
  {
    icon: PersonStanding,
    label: 'À pied',
    desc: '5 min du marché Mabanga',
  },
  {
    icon: Navigation,
    label: 'Repère',
    desc: 'En face de l\'école primaire Katoyi',
  },
]

export default function ContactInfo() {
  return (
    <motion.div
      variants={fadeInRight}
      initial="initial"
      animate="animate"
      className="space-y-6"
    >
      {/* Header */}
      <div>
        <p className="label-tag">Nous sommes à votre écoute</p>
        <h2 className="font-heading font-bold text-2xl md:text-3xl text-ink mb-3">
          Contactez-Nous
        </h2>
        <p className="text-muted text-sm leading-relaxed">
          Notre équipe est disponible pour répondre à toutes vos questions,
          vous conseiller et élaborer une solution adaptée à vos besoins.
        </p>
      </div>

      {/* Info cards */}
      <motion.div
        variants={staggerContainer}
        initial="initial"
        animate="animate"
        className="grid grid-cols-1 sm:grid-cols-2 gap-3"
      >
        {INFO_BLOCKS.map((info) => {
          const Icon = info.icon
          return (
            <motion.div
              key={info.title}
              variants={staggerItem}
              className="flex gap-3 bg-white rounded-xl p-4 card hover:shadow-card-hover transition-shadow group"
            >
              <div className="w-9 h-9 rounded-lg bg-primary/8 flex items-center justify-center shrink-0 group-hover:bg-primary transition-colors duration-300 mt-0.5">
                <Icon
                  size={16}
                  className="text-primary group-hover:text-white transition-colors"
                />
              </div>
              <div className="min-w-0">
                <p className="text-[10px] font-bold text-muted uppercase tracking-widest mb-1">
                  {info.title}
                </p>
                {info.lines.map((line, j) =>
                  info.links?.[j] ? (
                    <a
                      key={j}
                      href={info.links[j]}
                      className="block text-sm text-ink hover:text-primary transition-colors font-medium truncate"
                    >
                      {line}
                    </a>
                  ) : (
                    <p key={j} className="text-sm text-muted leading-snug">
                      {line}
                    </p>
                  ),
                )}
              </div>
            </motion.div>
          )
        })}
      </motion.div>

      {/* WhatsApp CTA */}
      <a
        href={siteConfig.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-3 bg-[#25D366] text-white font-semibold px-5 py-4 rounded-xl hover:bg-[#1ea855] transition-all duration-300 hover:shadow-lg group w-full"
      >
        <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center shrink-0">
          <MessageCircle size={18} className="group-hover:scale-110 transition-transform" />
        </div>
        <div className="flex-1">
          <p className="text-sm font-bold leading-tight">Discuter sur WhatsApp</p>
          <p className="text-white/70 text-xs">Réponse rapide garantie</p>
        </div>
        <span className="text-white/50 text-xs hidden sm:block shrink-0">
          {siteConfig.phones[0]}
        </span>
      </a>

      {/* Access icons — Stitch "Contact avec Icônes d'Accès" */}
      <div className="bg-surface rounded-2xl p-5">
        <p className="text-xs font-bold text-muted uppercase tracking-widest mb-4">
          Comment nous rejoindre
        </p>
        <div className="grid grid-cols-2 gap-3">
          {ACCESS_ICONS.map(({ icon: Icon, label, desc }) => (
            <div
              key={label}
              className="flex items-start gap-3 bg-white rounded-xl p-3 shadow-sm"
            >
              <div className="w-8 h-8 rounded-lg bg-primary/8 flex items-center justify-center shrink-0">
                <Icon size={15} className="text-primary" />
              </div>
              <div>
                <p className="text-xs font-semibold text-ink">{label}</p>
                <p className="text-[11px] text-muted leading-snug mt-0.5">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Map embed */}
      <div className="rounded-2xl overflow-hidden shadow-card h-52">
        <iframe
          title="Localisation Ultra Tech Solutions – Goma"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15950.4!2d29.23!3d-1.67!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMcKwNDAnMTIuMCJTIDI5wrAxMyczNi4wIkU!5e0!3m2!1sfr!2scd!4v1620000000000!5m2!1sfr!2scd"
          width="100%"
          height="100%"
          style={{ border: 0, filter: 'saturate(0.8) contrast(1.1)' }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </motion.div>
  )
}
