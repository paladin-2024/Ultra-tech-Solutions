import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle2 } from 'lucide-react'

const CYCLE = ['Connectée', 'Intelligente', 'Durable', 'Fiable']

export default function HeroSection() {
  const [wordIdx, setWordIdx] = useState(0)
  const [wordVisible, setWordVisible] = useState(true)

  useEffect(() => {
    const t = setInterval(() => {
      setWordVisible(false)
      setTimeout(() => {
        setWordIdx(i => (i + 1) % CYCLE.length)
        setWordVisible(true)
      }, 220)
    }, 2700)
    return () => clearInterval(t)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden noise">
      {/* Background */}
      <img
        src="/images/hero-solar-install.jpg"
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
        style={{ filter: 'brightness(0.5)' }}
        loading="eager"
        fetchPriority="high"
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0" style={{
        background: 'linear-gradient(105deg, rgba(0,0,0,0.88) 0%, rgba(0,0,0,0.65) 45%, rgba(0,0,0,0.30) 100%)',
      }} />

      {/* Red glow */}
      <div className="absolute inset-0 pointer-events-none" style={{
        background: 'radial-gradient(ellipse 55% 65% at 0% 55%, rgba(139,26,26,0.20) 0%, transparent 65%)',
      }} />

      <div className="container-custom relative z-10 w-full pt-32 pb-20 lg:pt-0 lg:min-h-screen lg:flex lg:items-center">
        <div className="w-full max-w-2xl">

          {/* Eyebrow */}
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            style={{ color: 'rgba(255,255,255,0.62)', fontFamily: 'DM Mono, monospace', fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.24em', marginBottom: '28px' }}
          >
            — Goma, RDC · Depuis 2019
          </motion.p>

          {/* H1 */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="font-heading font-black text-white leading-[1.0] mb-3"
            style={{ fontSize: 'clamp(2.3rem, 7.5vw, 5.2rem)', letterSpacing: '-0.04em' }}
          >
            L'Excellence<br />au Service<br />de Goma
          </motion.h1>

          {/* Cycling word — CSS transition, no AnimatePresence overhead */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.45, duration: 0.4 }}
            className="flex items-baseline gap-3 mb-8"
            style={{ height: '2.8rem' }}
          >
            <span
              className="font-heading font-black"
              style={{ fontSize: 'clamp(1.5rem,3vw,2.4rem)', letterSpacing: '-0.04em', color: 'rgba(255,255,255,0.22)' }}
            >
              Toujours
            </span>
            <span
              className="font-heading font-black text-primary inline-block"
              style={{
                fontSize: 'clamp(1.5rem,3vw,2.4rem)',
                letterSpacing: '-0.04em',
                opacity: wordVisible ? 1 : 0,
                transform: wordVisible ? 'translateY(0)' : 'translateY(8px)',
                transition: 'opacity 0.2s ease, transform 0.22s ease',
              }}
            >
              {CYCLE[wordIdx]}
            </span>
          </motion.div>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.32 }}
            className="max-w-[490px] mb-10 leading-relaxed"
            style={{ fontSize: '16px', color: 'rgba(255,255,255,0.76)', lineHeight: 1.72 }}
          >
            Installations, formations, robotique — l'expert électrotechnique des Grands Lacs au service de la RDC.
          </motion.p>

          {/* CTAs — plain Links, no magnetic spring overhead */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.46 }}
            className="flex flex-col xs:flex-row gap-3 mb-10"
          >
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2.5 font-heading font-bold text-[14.5px] text-white px-7 py-3.5 rounded-full group transition-all duration-200 hover:scale-[1.03] active:scale-[0.98]"
              style={{ background: '#8B1A1A', boxShadow: '0 4px 24px rgba(139,26,26,0.5)', letterSpacing: '-0.01em' }}
            >
              Obtenir un devis
              <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/projets"
              className="inline-flex items-center justify-center gap-2 font-medium text-[14px] px-7 py-3.5 rounded-full border transition-all duration-200 hover:border-white/55 hover:text-white"
              style={{ color: 'rgba(255,255,255,0.82)', borderColor: 'rgba(255,255,255,0.28)', background: 'rgba(255,255,255,0.05)' }}
            >
              ↓ Nos projets
            </Link>
          </motion.div>

          {/* Trust chips */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.72 }}
            className="flex flex-wrap items-center gap-x-5 gap-y-2.5"
          >
            {['Devis gratuit, sans engagement', 'Intervention sous 24h', "5+ ans d'expertise"].map(txt => (
              <div key={txt} className="flex items-center gap-2">
                <CheckCircle2 size={12} className="text-primary shrink-0" />
                <span style={{ color: 'rgba(255,255,255,0.65)', fontSize: '12px' }}>{txt}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Floating glass stat */}
      <motion.div
        initial={{ opacity: 0, y: 24, scale: 0.93 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.65, delay: 1.0, ease: [0.16, 1, 0.3, 1] }}
        className="absolute bottom-10 right-6 sm:right-14 z-10 hidden sm:block"
        style={{
          background: 'rgba(255,255,255,0.09)',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          border: '1px solid rgba(255,255,255,0.18)',
          borderRadius: '18px',
          padding: '20px 28px',
        }}
      >
        <p className="font-heading font-black text-white leading-none" style={{ fontSize: '2.8rem', letterSpacing: '-0.045em' }}>500+</p>
        <p style={{ fontFamily: 'DM Mono, monospace', fontSize: '9px', textTransform: 'uppercase', letterSpacing: '0.22em', color: 'rgba(255,255,255,0.60)', marginTop: '6px' }}>
          Clients satisfaits
        </p>
      </motion.div>

      {/* Scroll indicator — CSS bounce, no Framer Motion loop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 hidden lg:flex flex-col items-center gap-2"
      >
        <span style={{ fontFamily: 'DM Mono, monospace', fontSize: '8px', textTransform: 'uppercase', letterSpacing: '0.22em', color: 'rgba(255,255,255,0.35)' }}>
          Scroll
        </span>
        <div
          className="w-[1px] h-7 hero-scroll-bounce"
          style={{ background: 'linear-gradient(to bottom, rgba(255,255,255,0.35), transparent)' }}
        />
      </motion.div>
    </section>
  )
}
