import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Star } from 'lucide-react'
import { testimonials } from '@/data/team'

export default function Testimonials() {
  const [idx, setIdx] = useState(0)
  const [dir, setDir] = useState(1)

  const go = (next) => {
    setDir(next > idx ? 1 : -1)
    setIdx(next)
  }
  const prev = () => go(idx === 0 ? testimonials.length - 1 : idx - 1)
  const next = () => go(idx === testimonials.length - 1 ? 0 : idx + 1)

  const t = testimonials[idx]

  return (
    <section style={{ background: '#0A0A0A' }} className="relative overflow-hidden py-20 lg:py-28">
      {/* Ambient red glow */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 50% 60% at 50% 50%, rgba(139,26,26,0.08) 0%, transparent 70%)' }} />

      {/* Subtle grid */}
      <div className="absolute inset-0 pointer-events-none opacity-30"
        style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }} />

      <div className="container-custom relative z-10">
        {/* Header */}
        <motion.div
          initial={{ y: 20 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.55 }}
          className="text-center mb-16"
        >
          <p className="font-mono text-[9px] uppercase tracking-[0.24em] mb-3"
            style={{ color: 'rgba(255,255,255,0.55)' }}>
            Ce que disent nos clients
          </p>
          <h2 className="font-heading font-black text-white"
            style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', letterSpacing: '-0.04em' }}>
            Témoignages
          </h2>
        </motion.div>

        {/* Spotlight card */}
        <div className="max-w-3xl mx-auto">
          <div className="relative min-h-[280px] flex items-center justify-center">
            {/* Giant quote mark */}
            <span
              className="absolute top-0 left-0 font-heading font-black leading-none pointer-events-none select-none"
              style={{
                fontSize: '10rem',
                color: 'rgba(139,26,26,0.12)',
                lineHeight: 0.8,
                letterSpacing: '-0.04em',
              }}
            >
              "
            </span>

            <AnimatePresence mode="wait" custom={dir}>
              <motion.div
                key={idx}
                custom={dir}
                variants={{
                  enter: (d) => ({ opacity: 0, x: d * 40 }),
                  center: { opacity: 1, x: 0 },
                  exit: (d) => ({ opacity: 0, x: d * -30 }),
                }}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.42, ease: [0.16, 1, 0.3, 1] }}
                className="w-full text-center px-4 sm:px-12"
              >
                {/* Stars */}
                <div className="flex justify-center gap-1 mb-8">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} size={14} className="text-yellow-400 fill-yellow-400" />
                  ))}
                </div>

                {/* Quote */}
                <p
                  className="font-heading font-semibold text-white italic leading-relaxed mb-10"
                  style={{ fontSize: 'clamp(1.1rem, 2.2vw, 1.45rem)', letterSpacing: '-0.018em' }}
                >
                  "{t.text}"
                </p>

                {/* Author */}
                <div className="flex items-center justify-center gap-4">
                  <div className="relative shrink-0">
                    <img
                      src={t.avatar}
                      alt={t.name}
                      className="w-12 h-12 rounded-full object-cover"
                      style={{ border: '2px solid rgba(139,26,26,0.5)' }}
                      loading="lazy"
                    />
                    {/* Red ring glow */}
                    <div className="absolute inset-0 rounded-full pointer-events-none"
                      style={{ boxShadow: '0 0 0 3px rgba(139,26,26,0.2)' }} />
                  </div>
                  <div className="text-left">
                    <p className="font-heading font-bold text-white text-[14px]" style={{ letterSpacing: '-0.015em' }}>
                      {t.name}
                    </p>
                    <p className="font-mono text-primary text-[10px] uppercase tracking-[0.14em] mt-0.5">
                      {t.company}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-6 mt-10">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full flex items-center justify-center hover:text-white transition-all duration-200"
              style={{ color: 'rgba(255,255,255,0.60)', border: '1px solid rgba(255,255,255,0.18)' }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.40)' }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.18)' }}
              aria-label="Précédent"
            >
              <ChevronLeft size={16} />
            </button>

            {/* Dot indicators */}
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => go(i)}
                  aria-label={`Témoignage ${i + 1}`}
                  className="transition-all duration-300"
                  style={{
                    width: i === idx ? '22px' : '6px',
                    height: '6px',
                    borderRadius: '3px',
                    background: i === idx ? '#8B1A1A' : 'rgba(255,255,255,0.18)',
                  }}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-10 h-10 rounded-full flex items-center justify-center hover:text-white transition-all duration-200"
              style={{ color: 'rgba(255,255,255,0.60)', border: '1px solid rgba(255,255,255,0.18)' }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.40)' }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.18)' }}
              aria-label="Suivant"
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
