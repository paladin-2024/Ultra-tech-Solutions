import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Phone, MessageCircle, FileText } from 'lucide-react'
import { siteConfig } from '@/data/siteConfig'

export default function MobileContactBar() {
  const phone = siteConfig.phones[0].replace(/\s/g, '')

  return (
    <motion.div
      initial={{ y: 80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 1.8, duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
      className="lg:hidden fixed bottom-0 left-0 right-0 z-40"
      style={{
        background: 'rgba(255,255,255,0.97)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        borderTop: '1px solid rgba(0,0,0,0.07)',
        boxShadow: '0 -4px 24px rgba(0,0,0,0.08)',
        paddingBottom: 'env(safe-area-inset-bottom, 0px)',
      }}
    >
      <div className="flex items-stretch h-14">
        {/* Call */}
        <a
          href={`tel:${phone}`}
          className="flex-1 flex flex-col items-center justify-center gap-0.5 text-ink transition-colors active:bg-black/5"
        >
          <Phone size={18} className="text-primary" />
          <span className="font-mono text-[9px] uppercase tracking-[0.12em] text-muted">Appeler</span>
        </a>

        <div className="w-px bg-black/6 self-stretch my-2" />

        {/* WhatsApp */}
        <a
          href={`https://wa.me/${phone}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex flex-col items-center justify-center gap-0.5 transition-colors active:bg-black/5"
        >
          <MessageCircle size={18} style={{ color: '#25D366' }} />
          <span className="font-mono text-[9px] uppercase tracking-[0.12em] text-muted">WhatsApp</span>
        </a>

        <div className="w-px bg-black/6 self-stretch my-2" />

        {/* Devis */}
        <Link
          to="/contact"
          className="flex-1 flex flex-col items-center justify-center gap-0.5 transition-colors active:bg-black/5"
        >
          <FileText size={18} className="text-primary" />
          <span className="font-mono text-[9px] uppercase tracking-[0.12em] text-muted">Devis</span>
        </Link>
      </div>
    </motion.div>
  )
}
