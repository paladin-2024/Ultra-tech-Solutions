import { useState, useEffect, useRef, useCallback } from 'react'
import { NavLink, Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Menu, X, GraduationCap, Home, Bot, FileText, Wrench, Zap,
  ArrowRight, ChevronDown, ChevronRight,
} from 'lucide-react'
import { cn } from '@/lib/utils'

const SERVICES = [
  { icon: GraduationCap, title: 'Formations', desc: 'Programmes certifiants en tech', slug: 'formations' },
  { icon: Home, title: 'Installation Domestique', desc: 'Câblage, domotique, sécurité', slug: 'installation-domestique' },
  { icon: Bot, title: 'Robotique', desc: 'Robots industriels & éducatifs', slug: 'robotique' },
  { icon: FileText, title: 'Étude de Projets', desc: 'Analyse, conception, planification', slug: 'etude-projets' },
  { icon: Wrench, title: 'Maintenance', desc: 'Contrats préventifs & correctifs', slug: 'maintenance' },
  { icon: Zap, title: 'Dépannage', desc: "Intervention d'urgence sous 24h", slug: 'depannage' },
]

function UtsLogo({ light = false }) {
  return (
    <div className="flex items-center">
      <img
        src="/images/uts-logo.png"
        alt="Ultra Tech Solutions"
        className="w-auto transition-all duration-300"
        style={{
          height: '56px',
          maxWidth: '220px',
          filter: light ? 'brightness(0) invert(1)' : 'none',
        }}
      />
    </div>
  )
}

function MegaPanel({ onClose }) {
  return (
    <div style={{ position: 'absolute', top: 'calc(100% + 8px)', left: '50%', transform: 'translateX(-50%)', width: 'min(780px, 90vw)', zIndex: 60 }}>
      <motion.div
        initial={{ opacity: 0, y: -8, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: -6, scale: 0.98 }}
        transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
        className="bg-white rounded-2xl overflow-hidden"
        style={{ boxShadow: '0 20px 60px rgba(0,0,0,0.12), 0 4px 16px rgba(0,0,0,0.06), 0 0 0 1px rgba(0,0,0,0.06)' }}
      >
        <div className="px-6 py-3.5 border-b border-black/5 flex items-center justify-between">
          <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-muted">— Nos 6 domaines d'expertise</span>
          <span className="text-[10px] text-primary font-mono">Goma, RDC</span>
        </div>
        <div className="p-4 grid grid-cols-3 gap-1.5">
          {[0, 1, 2].map((col) => (
            <div key={col} className="space-y-1">
              {SERVICES.slice(col * 2, col * 2 + 2).map((svc, i) => {
                const Icon = svc.icon
                return (
                  <motion.div key={svc.slug} initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: (col * 2 + i) * 0.03 + 0.04 }}>
                    <Link to={`/services/${svc.slug}`} onClick={onClose}
                      className="group flex items-start gap-3 p-3 rounded-xl transition-all duration-150 hover:bg-surface">
                      <div className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 mt-0.5 transition-colors duration-150 group-hover:bg-primary"
                        style={{ background: 'rgba(139,26,26,0.08)' }}>
                        <Icon size={14} className="text-primary group-hover:text-white transition-colors duration-150" />
                      </div>
                      <div className="min-w-0">
                        <p className="text-ink font-semibold text-[13px] leading-tight mb-0.5 group-hover:text-primary transition-colors duration-150"
                          style={{ fontFamily: "'Bricolage Grotesque', sans-serif", letterSpacing: '-0.01em' }}>
                          {svc.title}
                        </p>
                        <p className="text-muted text-[11px] leading-snug">{svc.desc}</p>
                      </div>
                    </Link>
                  </motion.div>
                )
              })}
            </div>
          ))}
        </div>
        <div className="px-6 py-3.5 border-t border-black/5 flex items-center justify-between bg-surface">
          <p className="text-muted-2 text-[11px]">Lun–Sam · 8h00 – 18h00</p>
          <Link to="/services" onClick={onClose}
            className="group inline-flex items-center gap-1.5 text-primary text-[12px] font-bold hover:gap-2.5 transition-all duration-200"
            style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}>
            Voir tous les services <ArrowRight size={12} />
          </Link>
        </div>
      </motion.div>
    </div>
  )
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [scrollPct, setScrollPct] = useState(0)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [megaOpen, setMegaOpen] = useState(false)
  const closeTimerRef = useRef(null)
  const location = useLocation()

  const isHome = location.pathname === '/'
  const isTransparent = isHome && !scrolled && !mobileOpen

  useEffect(() => {
    setMobileOpen(false)
    setMegaOpen(false)
  }, [location.pathname])

  useEffect(() => {
    const onScroll = () => {
      const el = document.documentElement
      const pct = (el.scrollTop / (el.scrollHeight - el.clientHeight)) * 100
      setScrollPct(Math.min(pct, 100))
      setScrolled(window.scrollY > 60)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  const openMega = useCallback(() => { clearTimeout(closeTimerRef.current); setMegaOpen(true) }, [])
  const closeMega = useCallback(() => { closeTimerRef.current = setTimeout(() => setMegaOpen(false), 130) }, [])

  const navLinkClass = ({ isActive }) =>
    cn('relative px-3.5 py-2 text-[13.5px] font-medium rounded-xl transition-all duration-200',
      isTransparent
        ? isActive ? 'text-white' : 'text-white/55 hover:text-white hover:bg-white/8'
        : isActive ? 'text-primary bg-red-50' : 'text-ink/70 hover:text-ink hover:bg-black/4'
    )

  return (
    <>
      <motion.header
        initial={{ y: -70, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-400"
        style={{
          background: isTransparent
            ? 'transparent'
            : scrolled || mobileOpen
              ? 'rgba(255,255,255,0.96)'
              : 'rgba(255,255,255,0.92)',
          backdropFilter: isTransparent ? 'none' : 'blur(20px)',
          WebkitBackdropFilter: isTransparent ? 'none' : 'blur(20px)',
          borderBottom: isTransparent
            ? '1px solid rgba(255,255,255,0.08)'
            : scrolled ? '1px solid rgba(0,0,0,0.06)' : '1px solid transparent',
          boxShadow: !isTransparent && scrolled
            ? '0 1px 0 rgba(0,0,0,0.05), 0 4px 24px rgba(0,0,0,0.04)'
            : 'none',
        }}
      >
        {/* Red progress bar */}
        {scrolled && (
          <div
            className="absolute top-0 left-0 h-[2px] transition-all duration-100"
            style={{
              width: `${scrollPct}%`,
              background: 'linear-gradient(90deg, #8B1A1A, rgba(139,26,26,0.4))',
              borderRadius: '0 2px 2px 0',
            }}
          />
        )}

        <div className="container-custom">
          <div className="flex items-center justify-between h-16">
            <Link to="/" className="shrink-0 hover:opacity-80 transition-opacity duration-200">
              <UtsLogo light={isTransparent} />
            </Link>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-0.5">
              <NavLink to="/" end className={navLinkClass}>
                {({ isActive }) => (
                  <>
                    Accueil
                    {isActive && !isTransparent && (
                      <motion.span layoutId="nav-pill"
                        className="absolute inset-0 rounded-xl bg-red-50 -z-10"
                        transition={{ type: 'spring', stiffness: 400, damping: 32 }} />
                    )}
                  </>
                )}
              </NavLink>

              <NavLink to="/a-propos" className={navLinkClass}>
                {({ isActive }) => (
                  <>
                    À Propos
                    {isActive && !isTransparent && (
                      <motion.span layoutId="nav-pill"
                        className="absolute inset-0 rounded-xl bg-red-50 -z-10"
                        transition={{ type: 'spring', stiffness: 400, damping: 32 }} />
                    )}
                  </>
                )}
              </NavLink>

              <div className="relative" onMouseEnter={openMega} onMouseLeave={closeMega}>
                <NavLink to="/services" className={({ isActive }) =>
                  cn(navLinkClass({ isActive: isActive || megaOpen }),
                    'flex items-center gap-1')}>
                  {({ isActive }) => (
                    <>
                      Services
                      <motion.span animate={{ rotate: megaOpen ? 180 : 0 }} transition={{ duration: 0.2 }} className="inline-block opacity-60">
                        <ChevronDown size={12} />
                      </motion.span>
                      {(isActive || megaOpen) && !isTransparent && (
                        <motion.span layoutId="nav-pill"
                          className="absolute inset-0 rounded-xl bg-red-50 -z-10"
                          transition={{ type: 'spring', stiffness: 400, damping: 32 }} />
                      )}
                    </>
                  )}
                </NavLink>
                <AnimatePresence>
                  {megaOpen && (
                    <div onMouseEnter={openMega} onMouseLeave={closeMega}>
                      <MegaPanel onClose={() => setMegaOpen(false)} />
                    </div>
                  )}
                </AnimatePresence>
              </div>

              {[['Projets', '/projets'], ['Tarifs', '/tarifs'], ['Blog', '/blog'], ['Contact', '/contact']].map(([label, to]) => (
                <NavLink key={to} to={to} className={navLinkClass}>
                  {({ isActive }) => (
                    <>
                      {label}
                      {isActive && !isTransparent && (
                        <motion.span layoutId="nav-pill"
                          className="absolute inset-0 rounded-xl bg-red-50 -z-10"
                          transition={{ type: 'spring', stiffness: 400, damping: 32 }} />
                      )}
                    </>
                  )}
                </NavLink>
              ))}
            </nav>

            {/* CTA + hamburger */}
            <div className="flex items-center gap-2.5">
              {/* Disponible pulse */}
              <div className={cn('hidden lg:flex items-center gap-1.5 px-3 py-1.5 rounded-full font-mono text-[9px] uppercase tracking-[0.16em] transition-all duration-300',
                isTransparent ? 'text-white/60' : 'text-muted')}
                style={{ background: isTransparent ? 'rgba(255,255,255,0.08)' : 'rgba(37,211,102,0.08)', border: isTransparent ? '1px solid rgba(255,255,255,0.12)' : '1px solid rgba(37,211,102,0.18)' }}>
                <span className="relative flex w-1.5 h-1.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-60" style={{ background: '#25D366' }} />
                  <span className="relative inline-flex rounded-full w-1.5 h-1.5" style={{ background: '#25D366' }} />
                </span>
                Disponible
              </div>
              <Link to="/contact"
                className={cn('hidden lg:inline-flex btn-primary text-[13px] py-2.5 px-5 gap-2 transition-all duration-300',
                  isTransparent && 'shadow-none')}>
                Get a quote
                <ArrowRight size={13} />
              </Link>
              <button onClick={() => setMobileOpen(v => !v)} className="lg:hidden btn-icon" aria-label="Menu">
                <AnimatePresence mode="wait" initial={false}>
                  <motion.span
                    key={mobileOpen ? 'x' : 'm'}
                    initial={{ opacity: 0, rotate: -90 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    exit={{ opacity: 0, rotate: 90 }}
                    transition={{ duration: 0.15 }}
                    className={cn(isTransparent && !mobileOpen ? 'text-white' : '')}
                  >
                    {mobileOpen ? <X size={20} /> : <Menu size={20} />}
                  </motion.span>
                </AnimatePresence>
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-40 bg-white flex flex-col"
            style={{ paddingTop: '64px' }}
          >
            <div className="absolute top-0 right-0 w-80 h-80 rounded-full pointer-events-none opacity-30"
              style={{ background: 'radial-gradient(circle, rgba(139,26,26,0.12) 0%, transparent 70%)', filter: 'blur(60px)' }} />
            <nav className="flex flex-col gap-1.5 px-5 py-6 flex-1">
              {[
                { to: '/', label: 'Accueil', num: '01' },
                { to: '/a-propos', label: 'À Propos', num: '02' },
                { to: '/services', label: 'Services', num: '03' },
                { to: '/projets', label: 'Projets', num: '04' },
                { to: '/tarifs', label: 'Tarifs', num: '05' },
                { to: '/blog', label: 'Blog', num: '06' },
                { to: '/contact', label: 'Contact', num: '07' },
              ].map((item, i) => (
                <motion.div key={item.to} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.05, duration: 0.35, ease: [0.16, 1, 0.3, 1] }}>
                  <NavLink to={item.to} end={item.to === '/'} onClick={() => setMobileOpen(false)}
                    className={({ isActive }) =>
                      cn('flex items-center justify-between px-4 py-4 rounded-2xl border transition-all duration-200 group',
                        isActive ? 'bg-red-50 border-primary/20 text-primary' : 'border-black/5 text-ink/70 hover:text-ink hover:bg-surface hover:border-black/8'
                      )}>
                    {({ isActive }) => (
                      <>
                        <div className="flex items-center gap-3.5">
                          <span className="text-[10px] font-mono text-black/20 tracking-[0.18em]">{item.num}</span>
                          <span className="font-heading font-bold text-xl" style={{ letterSpacing: '-0.02em' }}>{item.label}</span>
                        </div>
                        <ChevronRight size={16} className={cn('transition-transform duration-200', isActive ? 'text-primary' : 'text-black/15 group-hover:translate-x-1 group-hover:text-black/35')} />
                      </>
                    )}
                  </NavLink>
                </motion.div>
              ))}
            </nav>
            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.28 }}
              className="px-5 pb-8 pt-4 border-t border-black/5">
              <Link to="/contact" onClick={() => setMobileOpen(false)} className="btn-primary w-full justify-center py-4 text-base gap-3">
                Get a quote
                <ArrowRight size={17} />
              </Link>
              <p className="text-center text-muted text-xs font-mono mt-3.5 tracking-wide">
                contact@ultratech-solutions.cd
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
