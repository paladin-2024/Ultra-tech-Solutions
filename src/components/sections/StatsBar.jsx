import { useState, useRef, useEffect } from 'react'
import { motion } from 'framer-motion'

const stats = [
  { end: 5,   suffix: '+', label: "Années d'expérience", desc: 'Depuis 2019 à Goma' },
  { end: 100, suffix: '+', label: 'Projets réalisés',    desc: 'Dans toute la région' },
  { end: 500, suffix: '+', label: 'Clients satisfaits',  desc: 'Particuliers & entreprises' },
  { end: 6,   suffix: '',  label: "Domaines d'expertise", desc: 'Services complets' },
]

function OdometerDigit({ char, delay = 0 }) {
  const digits = ['0','1','2','3','4','5','6','7','8','9',char]
  const target = digits.length - 1

  return (
    <span className="inline-flex flex-col overflow-hidden" style={{ height: '1em', lineHeight: 1 }}>
      <motion.span
        className="flex flex-col"
        initial={{ y: 0 }}
        animate={{ y: `-${target * 100 / digits.length}%` }}
        transition={{ duration: 1.2, delay, ease: [0.16, 1, 0.3, 1] }}
        style={{ height: `${digits.length * 100}%` }}
      >
        {digits.map((d, i) => (
          <span key={i} className="flex items-center justify-center" style={{ height: `${100 / digits.length}%` }}>
            {d}
          </span>
        ))}
      </motion.span>
    </span>
  )
}

function OdometerNumber({ value, suffix, started, delay = 0 }) {
  const chars = value.toString().split('')

  if (!started) {
    return (
      <span className="block font-heading font-black text-white leading-none tabular"
        style={{ fontSize: 'clamp(2.4rem, 4.5vw, 3.4rem)', letterSpacing: '-0.045em' }}>
        0{suffix}
      </span>
    )
  }

  return (
    <span className="block font-heading font-black text-white leading-none tabular"
      style={{ fontSize: 'clamp(2.4rem, 4.5vw, 3.4rem)', letterSpacing: '-0.045em' }}>
      {chars.map((ch, i) => (
        <OdometerDigit key={i} char={ch} delay={delay + i * 0.06} />
      ))}
      {suffix}
    </span>
  )
}

function StatItem({ stat, index }) {
  const [started, setStarted] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting && !started) setStarted(true) },
      { threshold: 0.5 },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [started])

  return (
    <motion.div
      ref={ref}
      initial={{ y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className={`flex flex-col items-center justify-center text-center py-8 px-4 ${
        index < 3 ? 'lg:border-r' : ''
      } ${index === 0 || index === 1 ? 'border-b lg:border-b-0' : ''}`}
      style={{ borderColor: 'rgba(255,255,255,0.08)' }}
    >
      <OdometerNumber
        value={stat.end}
        suffix={stat.suffix}
        started={started}
        delay={index * 0.08}
      />
      <p className="font-heading font-semibold text-[13px] mt-2 leading-snug"
        style={{ color: 'rgba(255,255,255,0.80)', letterSpacing: '-0.01em' }}>
        {stat.label}
      </p>
      <p className="font-mono text-[9px] uppercase tracking-[0.16em] mt-1"
        style={{ color: 'rgba(255,255,255,0.55)' }}>
        {stat.desc}
      </p>
    </motion.div>
  )
}

export default function StatsBar() {
  return (
    <section className="relative overflow-hidden noise" style={{ minHeight: '140px' }}>
      <img
        src="/images/conduit-bokeh.jpg"
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
        style={{ filter: 'brightness(0.22) saturate(0.6)' }}
        loading="lazy"
      />
      <div className="absolute inset-0" style={{ background: 'rgba(0,0,0,0.68)' }} />
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 40% 100% at 0% 50%, rgba(139,26,26,0.15) 0%, transparent 70%)' }} />

      <div className="relative z-10 container-custom h-full">
        <div className="grid grid-cols-2 lg:grid-cols-4" style={{ minHeight: '140px' }}>
          {stats.map((stat, i) => (
            <StatItem key={stat.label} stat={stat} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
