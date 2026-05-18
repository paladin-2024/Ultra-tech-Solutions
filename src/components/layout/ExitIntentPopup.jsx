import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ArrowRight, Clock } from 'lucide-react'

export default function ExitIntentPopup() {
  const [show, setShow] = useState(false)
  const dismissed = typeof sessionStorage !== 'undefined' && sessionStorage.getItem('uts_exit')

  useEffect(() => {
    if (dismissed) return

    let triggered = false

    const onMouseLeave = (e) => {
      if (triggered || e.clientY > 20) return
      triggered = true
      setTimeout(() => setShow(true), 200)
    }

    // Mobile: show after 45s of inactivity
    const timer = setTimeout(() => {
      if (!triggered) { triggered = true; setShow(true) }
    }, 45000)

    document.addEventListener('mouseleave', onMouseLeave)
    return () => {
      document.removeEventListener('mouseleave', onMouseLeave)
      clearTimeout(timer)
    }
  }, [dismissed])

  const close = () => {
    setShow(false)
    sessionStorage.setItem('uts_exit', '1')
  }

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          key="exit"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-[150] flex items-center justify-center p-4"
          style={{ background: 'rgba(0,0,0,0.65)', backdropFilter: 'blur(6px)' }}
          onClick={(e) => { if (e.target === e.currentTarget) close() }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 12 }}
            transition={{ duration: 0.38, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-md rounded-2xl overflow-hidden"
            style={{ background: '#0A0A0A', border: '1px solid rgba(255,255,255,0.08)' }}
          >
            {/* Photo bg */}
            <img
              src="/images/tech-solar-selfie.jpg"
              alt=""
              className="absolute inset-0 w-full h-full object-cover"
              style={{ filter: 'brightness(0.18)' }}
            />
            <div className="absolute inset-0"
              style={{ background: 'linear-gradient(to bottom, rgba(0,0,0,0.80) 0%, rgba(0,0,0,0.92) 100%)' }} />
            <div className="absolute inset-0 pointer-events-none"
              style={{ background: 'radial-gradient(ellipse 80% 60% at 50% 0%, rgba(139,26,26,0.18) 0%, transparent 65%)' }} />

            <div className="relative z-10 p-8">
              {/* Close */}
              <button
                onClick={close}
                className="absolute top-4 right-4 w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-200"
                style={{ background: 'rgba(255,255,255,0.08)', color: 'rgba(255,255,255,0.55)' }}
                aria-label="Fermer"
              >
                <X size={15} />
              </button>

              {/* Content */}
              <p className="font-mono text-[9px] uppercase tracking-[0.24em] mb-4"
                style={{ color: 'rgba(255,255,255,0.50)' }}>
                — Avant de partir
              </p>
              <h2 className="font-heading font-black text-white mb-3 leading-tight"
                style={{ fontSize: 'clamp(1.4rem, 3vw, 1.9rem)', letterSpacing: '-0.035em' }}>
                Obtenez votre estimation<br />
                <span style={{ color: '#8B1A1A' }}>en 2 minutes</span>
              </h2>
              <p className="text-[14px] leading-relaxed mb-7"
                style={{ color: 'rgba(255,255,255,0.62)' }}>
                Répondez à 4 questions et recevez une fourchette de prix instantanément — sans engagement, sans spam.
              </p>

              {/* Trust chips */}
              <div className="flex flex-wrap gap-2 mb-7">
                {[
                  { icon: Clock, label: '2 min chrono' },
                  { label: 'Sans engagement' },
                  { label: 'Réponse sous 24h' },
                ].map(({ icon: Icon, label }) => (
                  <div key={label} className="flex items-center gap-1.5 px-3 py-1.5 rounded-full"
                    style={{ background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.12)' }}>
                    {Icon && <Icon size={10} style={{ color: 'rgba(255,255,255,0.60)' }} />}
                    <span className="font-mono text-[9px] uppercase tracking-[0.14em]"
                      style={{ color: 'rgba(255,255,255,0.60)' }}>{label}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  to="/devis"
                  onClick={close}
                  className="flex-1 inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full font-heading font-bold text-white text-[14px] group transition-all duration-200"
                  style={{ background: '#8B1A1A', boxShadow: '0 4px 24px rgba(139,26,26,0.45)', letterSpacing: '-0.01em' }}
                >
                  Estimer mon projet
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <button
                  onClick={close}
                  className="flex-1 font-medium text-[13px] px-6 py-3.5 rounded-full transition-all duration-200"
                  style={{ color: 'rgba(255,255,255,0.45)', border: '1px solid rgba(255,255,255,0.12)' }}
                >
                  Non merci
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
