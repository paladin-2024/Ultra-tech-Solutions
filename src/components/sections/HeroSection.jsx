import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import { siteConfig } from '@/data/siteConfig'

function MagneticButton({ children, className, style, to, ...props }) {
  const ref = useRef(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const sx = useSpring(x, { stiffness: 200, damping: 18 })
  const sy = useSpring(y, { stiffness: 200, damping: 18 })

  const handleMove = (e) => {
    const r = ref.current?.getBoundingClientRect()
    if (!r) return
    x.set((e.clientX - r.left - r.width / 2) * 0.28)
    y.set((e.clientY - r.top - r.height / 2) * 0.28)
  }
  const handleLeave = () => { x.set(0); y.set(0) }

  return (
    <motion.div ref={ref} onMouseMove={handleMove} onMouseLeave={handleLeave} style={{ x: sx, y: sy }}>
      <Link to={to} className={className} style={style} {...props}>{children}</Link>
    </motion.div>
  )
}

const CYCLE = ['Connectée', 'Intelligente', 'Durable', 'Fiable']

export default function HeroSection() {
  const [wordIdx, setWordIdx] = useState(0)

  useEffect(() => {
    const t = setInterval(() => setWordIdx(i => (i + 1) % CYCLE.length), 2700)
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
      />

      {/* Gradient overlay — strong on left so text always readable */}
      <div className="absolute inset-0" style={{
        background: 'linear-gradient(105deg, rgba(0,0,0,0.88) 0%, rgba(0,0,0,0.65) 45%, rgba(0,0,0,0.30) 100%)',
      }} />

      {/* Red glow left */}
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

          {/* Cycling word */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="flex items-baseline gap-3 mb-8 overflow-hidden"
            style={{ height: '2.8rem' }}
          >
            <span className="font-heading font-black" style={{ fontSize: 'clamp(1.5rem,3vw,2.4rem)', letterSpacing: '-0.04em', color: 'rgba(255,255,255,0.22)' }}>
              Toujours
            </span>
            <AnimatePresence mode="wait">
              <motion.span
                key={wordIdx}
                initial={{ opacity: 0, y: 22 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.38, ease: [0.16, 1, 0.3, 1] }}
                className="font-heading font-black text-primary inline-block"
                style={{ fontSize: 'clamp(1.5rem,3vw,2.4rem)', letterSpacing: '-0.04em' }}
              >
                {CYCLE[wordIdx]}
              </motion.span>
            </AnimatePresence>
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

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.46 }}
            className="flex flex-col xs:flex-row gap-3 mb-10"
          >
            <MagneticButton
              to="/contact"
              className="inline-flex items-center justify-center gap-2.5 font-heading font-bold text-[14.5px] text-white px-7 py-3.5 rounded-full group transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
              style={{ background: '#8B1A1A', boxShadow: '0 4px 24px rgba(139,26,26,0.5)', letterSpacing: '-0.01em' }}
            >
              Get a quote
              <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
            </MagneticButton>
            <Link to="/projets"
              className="inline-flex items-center justify-center gap-2 font-medium text-[14px] px-7 py-3.5 rounded-full border transition-all duration-200"
              style={{ color: 'rgba(255,255,255,0.82)', borderColor: 'rgba(255,255,255,0.28)', background: 'rgba(255,255,255,0.05)' }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.55)'; e.currentTarget.style.color = '#fff' }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.28)'; e.currentTarget.style.color = 'rgba(255,255,255,0.82)' }}
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
            {['Get a quote — no commitment', 'Intervention sous 24h', "5+ ans d'expertise"].map(txt => (
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

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 hidden lg:flex flex-col items-center gap-2"
      >
        <span style={{ fontFamily: 'DM Mono, monospace', fontSize: '8px', textTransform: 'uppercase', letterSpacing: '0.22em', color: 'rgba(255,255,255,0.35)' }}>Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
          className="w-[1px] h-7"
          style={{ background: 'linear-gradient(to bottom, rgba(255,255,255,0.35), transparent)' }}
        />
      </motion.div>
    </section>
  )
}
