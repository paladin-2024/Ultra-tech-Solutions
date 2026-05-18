import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowUp } from 'lucide-react'

export default function ScrollToTop() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 400)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <AnimatePresence>
      {show && (
        <motion.button
          key="scroll-top"
          initial={{ opacity: 0, scale: 0.8, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 10 }}
          transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed z-40 flex items-center justify-center rounded-full transition-colors duration-200 group bottom-[156px] right-4 lg:bottom-24 lg:right-6"
          style={{
            width: '44px',
            height: '44px',
            background: 'rgba(255,255,255,0.96)',
            border: '1px solid rgba(0,0,0,0.10)',
            boxShadow: '0 4px 20px rgba(0,0,0,0.12)',
            backdropFilter: 'blur(12px)',
          }}
          aria-label="Retour en haut"
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.94 }}
        >
          <ArrowUp size={17} className="text-ink group-hover:text-primary transition-colors duration-200" />
        </motion.button>
      )}
    </AnimatePresence>
  )
}
