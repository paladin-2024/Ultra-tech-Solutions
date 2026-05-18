import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function SplashScreen() {
  const [visible, setVisible] = useState(() => !sessionStorage.getItem('uts_splash'))

  useEffect(() => {
    if (!visible) return
    const t = setTimeout(() => {
      setVisible(false)
      sessionStorage.setItem('uts_splash', '1')
    }, 1800)
    return () => clearTimeout(t)
  }, [visible])

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="splash"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-[200] flex items-center justify-center"
          style={{ background: '#0A0A0A' }}
        >
          {/* Ambient red glow */}
          <div className="absolute inset-0 pointer-events-none"
            style={{ background: 'radial-gradient(ellipse 60% 60% at 50% 50%, rgba(139,26,26,0.18) 0%, transparent 70%)' }} />

          <div className="flex flex-col items-center gap-6">
            {/* Logo mark */}
            <motion.div
              initial={{ scale: 0.6, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
              className="w-16 h-16 rounded-2xl flex items-center justify-center"
              style={{ background: '#8B1A1A', boxShadow: '0 0 48px rgba(139,26,26,0.5)' }}
            >
              <svg width="36" height="22" viewBox="0 0 36 22" fill="none">
                <text x="18" y="18" textAnchor="middle" fill="white"
                  fontFamily="'Bricolage Grotesque', sans-serif"
                  fontWeight="800" fontSize="17" letterSpacing="-1">
                  UTS
                </text>
              </svg>
            </motion.div>

            {/* Brand name */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.28, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="text-center"
            >
              <p className="font-heading font-black text-white text-2xl tracking-tight leading-none mb-1"
                style={{ letterSpacing: '-0.04em' }}>
                Ultra Tech Solutions
              </p>
              <p className="font-mono text-[10px] uppercase tracking-[0.28em]"
                style={{ color: 'rgba(255,255,255,0.38)' }}>
                Goma · RDC · Since 2019
              </p>
            </motion.div>

            {/* Loading bar */}
            <motion.div
              className="relative w-32 h-[1.5px] rounded-full overflow-hidden"
              style={{ background: 'rgba(255,255,255,0.10)' }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.45 }}
            >
              <motion.div
                className="absolute inset-y-0 left-0 rounded-full"
                style={{ background: '#8B1A1A' }}
                initial={{ width: '0%' }}
                animate={{ width: '100%' }}
                transition={{ delay: 0.5, duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
              />
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
