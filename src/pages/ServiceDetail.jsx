import { useState } from 'react'
import { useParams, Link, Navigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  ArrowRight, ArrowLeft, CheckCircle2, ChevronDown,
  GraduationCap, Home, Bot, FileText, Wrench, Zap,
  Award, Users, UserCheck, TrendingUp, Globe, Sun,
  Smartphone, Shield, Wind, Cpu, Code, Settings,
  Headphones, Search, BarChart2, FileCheck, Activity,
  Calendar, Package, Clock, Calculator,
} from 'lucide-react'
import { pageTransition } from '@/lib/animations'
import { services } from '@/data/services'
import { serviceDetails } from '@/data/serviceDetails'
import { projects } from '@/data/projects'
import CTAStrip from '@/components/sections/CTAStrip'

const iconMap = {
  GraduationCap, Home, Bot, FileText, Wrench, Zap,
  Award, Users, UserCheck, TrendingUp, Globe, Sun,
  Smartphone, Shield, Wind, CheckCircle2, Cpu, Code,
  Settings, Headphones, Search, BarChart2, FileCheck,
  Activity, Calendar, Package, Clock, Calculator,
}

const stagger = {
  initial: {},
  animate: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
}
const item = {
  initial: { opacity: 0, y: 24 },
  animate: { y: 0, transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] } },
}

function FAQItem({ q, a, index }) {
  const [open, setOpen] = useState(false)
  return (
    <motion.div
      initial={{ y: 12 }}
      animate={{ y: 0 }}
      transition={{ delay: index * 0.05 }}
      className="card overflow-hidden group"
    >
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full px-5 sm:px-6 py-4 cursor-pointer font-heading font-semibold text-ink text-sm hover:text-primary transition-colors flex items-center justify-between text-left"
      >
        <span>{q}</span>
        <motion.span
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: 0.2 }}
          className="text-primary font-bold text-xl ml-4 shrink-0 inline-block leading-none"
        >
          +
        </motion.span>
      </button>
      <motion.div
        initial={false}
        animate={{ height: open ? 'auto' : 0, opacity: open ? 1 : 0 }}
        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
        className="overflow-hidden"
      >
        <div className="px-5 sm:px-6 pb-5 border-t border-black/5">
          <p className="text-muted text-sm leading-relaxed pt-3">{a}</p>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default function ServiceDetail() {
  const { slug } = useParams()

  const service = services.find((s) => s.slug === slug)
  const details = serviceDetails[slug]

  if (!service || !details) {
    return <Navigate to="/services" replace />
  }

  const ServiceIcon = iconMap[service.icon] || Zap

  // Related projects: match by service title keywords
  const relatedProjects = projects
    .filter((p) => {
      const text = (p.title + ' ' + p.description + ' ' + p.tags.join(' ')).toLowerCase()
      const keywords = service.title.toLowerCase().split(' ')
      return keywords.some((k) => k.length > 3 && text.includes(k))
    })
    .slice(0, 3)

  return (
    <motion.div {...pageTransition}>
      {/* ── HERO ── */}
      <section className="relative h-[500px] overflow-hidden flex items-end">
        <img
          src={details.heroImage}
          alt={service.title}
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Dark gradient overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(to top, rgba(0,0,0,0.82) 0%, rgba(0,0,0,0.45) 50%, rgba(0,0,0,0.22) 100%)',
          }}
        />

        <div className="container-custom relative z-10 pb-12 w-full">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-white/55 text-xs font-mono mb-6">
            <Link to="/" className="hover:text-white transition-colors">Accueil</Link>
            <span>/</span>
            <Link to="/services" className="hover:text-white transition-colors">Services</Link>
            <span>/</span>
            <span className="text-white/80">{service.title}</span>
          </nav>

          <motion.div
            initial={{ y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-primary/80 border border-white/10">
                <ServiceIcon size={20} className="text-white" />
              </div>
              <p className="text-white/60 text-sm font-mono uppercase tracking-widest">
                {details.tagline}
              </p>
            </div>
            <h1
              className="font-heading font-black text-white mb-8"
              style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', letterSpacing: '-0.03em', lineHeight: 1.05 }}
            >
              {service.title}
            </h1>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.55 }}
            className="flex flex-wrap gap-8"
          >
            {details.stats.map((stat) => (
              <div key={stat.label}>
                <p
                  className="font-heading font-black text-white"
                  style={{ fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', letterSpacing: '-0.03em' }}
                >
                  {stat.value}
                </p>
                <p className="text-white/50 text-xs font-mono uppercase tracking-wider mt-0.5">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── INTRO BAND ── */}
      <section className="py-10 section-white border-b border-black/5">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <p className="text-muted text-[16px] leading-relaxed max-w-2xl">{details.intro}</p>
            <Link to="/contact" className="btn-primary shrink-0 gap-2.5 group">
              Demander un devis
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── FEATURES GRID ── */}
      <section className="section section-white">
        <div className="container-custom">
          <motion.div
            initial={{ y: 20 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.55 }}
            className="mb-14"
          >
            <p className="label-tag">Ce que nous offrons</p>
            <h2 className="display-lg text-ink mt-1">Nos Prestations</h2>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="initial"
            animate="animate"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
          >
            {details.features.map((feat) => {
              const FeatIcon = iconMap[feat.icon] || CheckCircle2
              return (
                <motion.div
                  key={feat.title}
                  variants={item}
                  className="card p-7 group hover:shadow-card-hover hover:-translate-y-0.5 transition-all duration-300"
                >
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center mb-5 transition-all duration-300 group-hover:bg-primary"
                    style={{ background: 'rgba(139,26,26,0.08)', border: '1.5px solid rgba(139,26,26,0.15)' }}
                  >
                    <FeatIcon size={20} className="text-primary group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3
                    className="font-heading font-bold text-ink text-[15px] mb-2 group-hover:text-primary transition-colors duration-300"
                    style={{ letterSpacing: '-0.02em' }}
                  >
                    {feat.title}
                  </h3>
                  <p className="text-muted text-[13.5px] leading-relaxed">{feat.desc}</p>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* ── WHY UTS (dark split) ── */}
      <section style={{ background: '#0F0F0F' }} className="py-24 sm:py-32">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left */}
            <motion.div
              initial={{ x: -32 }}
              animate={{ x: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              <p className="inline-flex items-center gap-2 text-white/40 font-mono text-[10px] uppercase tracking-[0.22em] mb-5">
                <span className="inline-block w-4 h-px bg-white/25" />
                Pourquoi UTS
              </p>
              <h2
                className="font-heading font-black text-white mb-6"
                style={{ fontSize: 'clamp(1.9rem, 3.5vw, 2.8rem)', letterSpacing: '-0.03em', lineHeight: 1.1 }}
              >
                Votre partenaire tech de confiance à Goma
              </h2>
              <p className="text-white/50 text-[15px] leading-relaxed mb-10">
                5 ans d'expérience, des techniciens certifiés et une connaissance approfondie des réalités locales — UTS est le partenaire technologique de référence au Nord-Kivu.
              </p>

              <div className="space-y-4 mb-10">
                {[
                  { num: '01', title: 'Expertise locale', desc: '5 ans à Goma. Nous connaissons les contraintes locales et proposons des solutions adaptées à la RDC.' },
                  { num: '02', title: 'Qualité garantie', desc: 'Techniciens certifiés, matériaux aux normes IEC, garantie sur tous nos travaux.' },
                  { num: '03', title: 'Réactivité', desc: "Devis sous 24h, intervention rapide. Notre équipe est disponible du lundi au samedi." },
                ].map((pt) => (
                  <div key={pt.num} className="flex gap-4 p-4 rounded-xl border border-white/6 hover:border-white/12 transition-colors duration-300">
                    <span className="font-mono text-[10px] text-primary/70 font-bold mt-1 shrink-0">{pt.num}</span>
                    <div>
                      <p className="font-heading font-bold text-white text-[14px] mb-1" style={{ letterSpacing: '-0.01em' }}>{pt.title}</p>
                      <p className="text-white/40 text-[13px] leading-relaxed">{pt.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <Link to="/contact" className="btn-primary gap-2.5 group">
                Nous contacter
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>

            {/* Right */}
            <motion.div
              initial={{ x: 32 }}
              animate={{ x: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
                <img
                  src="/images/tech-wiring-construction.jpg"
                  alt="UTS team at work"
                  className="w-full h-full object-cover"
                />
                <div
                  className="absolute inset-0"
                  style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.4) 0%, transparent 60%)' }}
                />
                {/* Overlay badge */}
                <div className="absolute bottom-5 left-5 right-5 bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/15">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center shrink-0">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-white font-heading font-bold text-sm" style={{ letterSpacing: '-0.01em' }}>
                        Réponse garantie sous 24h
                      </p>
                      <p className="text-white/60 text-xs">WhatsApp ou téléphone, Lun–Sam</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section className="section section-surface">
        <div className="container-custom">
          <motion.div
            initial={{ y: 20 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.55 }}
            className="text-center mb-16"
          >
            <p className="label-tag justify-center">Notre approche</p>
            <h2 className="display-lg text-ink mt-1">Comment ça marche</h2>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="initial"
            animate="animate"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-0 relative"
          >
            {/* Connector line */}
            <div
              className="hidden lg:block absolute top-[2.75rem] left-[12.5%] right-[12.5%] h-px"
              style={{
                background:
                  'linear-gradient(90deg, transparent, rgba(139,26,26,0.2) 15%, rgba(139,26,26,0.2) 85%, transparent)',
              }}
            />
            {details.processSteps.map((step, i) => (
              <motion.div
                key={step.num}
                variants={item}
                className="relative flex flex-col items-center text-center px-6 group"
              >
                <div className="relative mb-6">
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 transition-all duration-350 group-hover:bg-primary group-hover:shadow-btn-primary"
                    style={{ background: 'rgba(139,26,26,0.08)', border: '1.5px solid rgba(139,26,26,0.15)' }}
                  >
                    <span className="font-mono font-bold text-primary group-hover:text-white text-sm transition-colors duration-300">
                      {step.num}
                    </span>
                  </div>
                  <span className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-primary text-white text-[9px] font-bold font-mono flex items-center justify-center">
                    {i + 1}
                  </span>
                </div>
                <h3
                  className="font-heading font-bold text-ink text-[15px] mb-2.5 leading-snug group-hover:text-primary transition-colors duration-300"
                  style={{ letterSpacing: '-0.015em' }}
                >
                  {step.title}
                </h3>
                <p className="text-muted text-[13px] leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── RELATED PROJECTS ── */}
      {relatedProjects.length > 0 && (
        <section className="section section-white">
          <div className="container-custom">
            <motion.div
              initial={{ y: 20 }}
              animate={{ y: 0 }}
              className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12"
            >
              <div>
                <p className="label-tag">Réalisations</p>
                <h2 className="display-md text-ink mt-1">Projets liés</h2>
              </div>
              <Link to="/projets" className="text-primary text-sm font-semibold hover:underline flex items-center gap-1.5">
                Tous nos projets <ArrowRight size={13} />
              </Link>
            </motion.div>

            <motion.div
              variants={stagger}
              initial="initial"
              animate="animate"
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
            >
              {relatedProjects.map((proj) => (
                <motion.div
                  key={proj.id}
                  variants={item}
                  className="card overflow-hidden group hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={proj.image}
                      alt={proj.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-5">
                    <div className="flex items-center gap-2 mb-3">
                      {proj.tags.slice(0, 2).map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-0.5 rounded-full text-[10px] font-mono font-semibold uppercase tracking-wide text-primary"
                          style={{ background: 'rgba(139,26,26,0.08)' }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <h3
                      className="font-heading font-bold text-ink text-[15px] mb-1.5 group-hover:text-primary transition-colors duration-300"
                      style={{ letterSpacing: '-0.02em' }}
                    >
                      {proj.title}
                    </h3>
                    <p className="text-muted text-[12.5px] leading-relaxed line-clamp-2">{proj.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      )}

      {/* ── FAQ ── */}
      <section className="section section-surface">
        <div className="container-custom">
          <motion.div
            initial={{ y: 20 }}
            animate={{ y: 0 }}
            className="text-center mb-12"
          >
            <p className="label-tag justify-center">Questions fréquentes</p>
            <h2 className="display-md text-ink mt-1">FAQ — {service.title}</h2>
          </motion.div>
          <div className="max-w-3xl mx-auto space-y-2.5">
            {details.faq.map((faqItem, i) => (
              <FAQItem key={i} q={faqItem.q} a={faqItem.a} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ── BACK LINK ── */}
      <div className="py-6 section-white border-t border-black/5">
        <div className="container-custom">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-muted text-sm hover:text-primary transition-colors"
          >
            <ArrowLeft size={14} />
            Retour aux services
          </Link>
        </div>
      </div>

      {/* ── CTA STRIP ── */}
      <CTAStrip
        title={`Prêt à démarrer votre projet ${service.title} ?`}
        subtitle="Contactez notre équipe pour un devis et une consultation personnalisée."
      />
    </motion.div>
  )
}
