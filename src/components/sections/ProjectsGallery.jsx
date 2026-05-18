import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, X, ArrowUpRight, Calendar, User } from 'lucide-react'
import { projects, projectCategories } from '@/data/projects'
import { cn } from '@/lib/utils'

/* ── 3D tilt card ── */
function BentoCard({ project, featured, onClick }) {
  const mx = useMotionValue(0)
  const my = useMotionValue(0)
  const rotX = useSpring(useTransform(my, [-0.5, 0.5], [6, -6]), { stiffness: 300, damping: 28 })
  const rotY = useSpring(useTransform(mx, [-0.5, 0.5], [-6, 6]), { stiffness: 300, damping: 28 })

  const handleMouse = (e) => {
    const r = e.currentTarget.getBoundingClientRect()
    mx.set((e.clientX - r.left) / r.width - 0.5)
    my.set((e.clientY - r.top) / r.height - 0.5)
  }
  const handleLeave = () => { mx.set(0); my.set(0) }

  return (
    <div
      className={cn('relative rounded-2xl overflow-hidden cursor-pointer group',
        featured ? 'lg:col-span-2 lg:row-span-2' : '')}
      style={{ minHeight: featured ? '320px' : '200px' }}
    >
      <motion.div
        className="relative w-full h-full"
        style={{ rotateX: rotX, rotateY: rotY, transformPerspective: 900 }}
        onMouseMove={handleMouse}
        onMouseLeave={handleLeave}
        onClick={() => onClick(project)}
      >
        {/* Photo */}
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
        />

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />

        {/* Red top line on hover */}
        <div
          className="absolute top-0 left-0 h-[2.5px] w-0 group-hover:w-full transition-all duration-500 ease-out"
          style={{ background: 'linear-gradient(90deg, #8B1A1A, rgba(139,26,26,0.3))' }}
        />

        {/* Category badge */}
        <span
          className="absolute top-4 left-4 font-mono text-[9px] uppercase tracking-[0.16em] text-white px-3 py-1.5 rounded-full"
          style={{ background: 'rgba(139,26,26,0.9)', backdropFilter: 'blur(4px)' }}
        >
          {project.category}
        </span>

        {/* Year badge */}
        <span
          className="absolute top-4 right-4 font-mono text-[9px] text-white/55 px-2.5 py-1.5 rounded-full"
          style={{ background: 'rgba(0,0,0,0.45)', backdropFilter: 'blur(4px)' }}
        >
          {project.year}
        </span>

        {/* Bottom content */}
        <div className="absolute bottom-0 left-0 right-0 p-5">
          <h3
            className="font-heading font-bold text-white leading-snug mb-1.5 group-hover:text-white/90"
            style={{
              fontSize: featured ? '1.15rem' : '0.88rem',
              letterSpacing: '-0.02em',
            }}
          >
            {project.title}
          </h3>
          <div className="flex flex-wrap gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            {project.tags.slice(0, 2).map((tag) => (
              <span key={tag}
                className="font-mono text-[8px] uppercase tracking-[0.12em] text-white/55 px-2 py-0.5 rounded"
                style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.1)' }}>
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Arrow icon on hover */}
        <div className="absolute bottom-5 right-5 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-1 group-hover:translate-y-0">
          <div className="w-8 h-8 rounded-full flex items-center justify-center"
            style={{ background: 'rgba(139,26,26,0.8)', backdropFilter: 'blur(4px)' }}>
            <ArrowUpRight size={14} className="text-white" />
          </div>
        </div>
      </motion.div>
    </div>
  )
}

/* ── Lightbox ── */
function Lightbox({ project, onClose }) {
  useEffect(() => {
    const handler = (e) => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', handler)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handler)
      document.body.style.overflow = ''
    }
  }, [onClose])

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.22 }}
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-8"
      style={{ background: 'rgba(0,0,0,0.93)', backdropFilter: 'blur(12px)' }}
      onClick={(e) => { if (e.target === e.currentTarget) onClose() }}
    >
      <motion.div
        initial={{ scale: 0.94, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.96, y: 10 }}
        transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] }}
        className="relative w-full max-w-5xl rounded-2xl overflow-hidden flex flex-col lg:flex-row"
        style={{ maxHeight: '90vh', background: '#0F0F0F', border: '1px solid rgba(255,255,255,0.08)' }}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full flex items-center justify-center text-white/60 hover:text-white transition-colors duration-200"
          style={{ background: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(8px)', border: '1px solid rgba(255,255,255,0.1)' }}
          aria-label="Fermer"
        >
          <X size={16} />
        </button>

        {/* Photo panel */}
        <div className="relative lg:w-[58%] shrink-0" style={{ minHeight: '280px' }}>
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
            style={{ maxHeight: '60vh' }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          {/* Category badge */}
          <span
            className="absolute top-5 left-5 font-mono text-[9px] uppercase tracking-[0.16em] text-white px-3 py-1.5 rounded-full"
            style={{ background: 'rgba(139,26,26,0.9)' }}
          >
            {project.category}
          </span>
        </div>

        {/* Details panel */}
        <div className="lg:flex-1 p-7 lg:p-8 overflow-y-auto flex flex-col justify-between gap-6">
          <div>
            <p className="font-mono text-[9px] uppercase tracking-[0.22em] text-primary mb-3">
              Projet UTS
            </p>
            <h2
              className="font-heading font-black text-white mb-4 leading-snug"
              style={{ fontSize: 'clamp(1.2rem, 2.5vw, 1.6rem)', letterSpacing: '-0.03em' }}
            >
              {project.title}
            </h2>
            <p className="text-[13.5px] leading-relaxed mb-6"
              style={{ color: 'rgba(255,255,255,0.72)' }}>
              {project.description}
            </p>

            {/* Meta info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-7 h-7 rounded-lg flex items-center justify-center shrink-0"
                  style={{ background: 'rgba(139,26,26,0.12)', border: '1px solid rgba(139,26,26,0.2)' }}>
                  <Calendar size={12} className="text-primary" />
                </div>
                <div>
                  <p className="font-mono text-[8px] uppercase tracking-[0.16em]" style={{ color: 'rgba(255,255,255,0.55)' }}>Année</p>
                  <p className="font-heading font-bold text-white text-[13px]">{project.year}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-7 h-7 rounded-lg flex items-center justify-center shrink-0"
                  style={{ background: 'rgba(139,26,26,0.12)', border: '1px solid rgba(139,26,26,0.2)' }}>
                  <User size={12} className="text-primary" />
                </div>
                <div>
                  <p className="font-mono text-[8px] uppercase tracking-[0.16em]" style={{ color: 'rgba(255,255,255,0.55)' }}>Client</p>
                  <p className="font-heading font-bold text-white text-[13px]">{project.client}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Tags */}
          <div>
            <p className="font-mono text-[8px] uppercase tracking-[0.18em] mb-3"
              style={{ color: 'rgba(255,255,255,0.52)' }}>
              Technologies
            </p>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span key={tag}
                  className="font-mono text-[10px] uppercase tracking-[0.1em] px-3 py-1.5 rounded-full"
                  style={{ color: 'rgba(255,255,255,0.70)', background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.15)' }}>
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

/* ── Main component ── */
export default function ProjectsGallery({ limit, showFilter = true, title = 'Projets Réalisés' }) {
  const [cat, setCat] = useState('Tous')
  const [active, setActive] = useState(null)

  const filtered = cat === 'Tous' ? projects : projects.filter(p => p.category === cat)
  const displayed = limit ? filtered.slice(0, limit) : filtered

  const openLightbox = useCallback((p) => setActive(p), [])
  const closeLightbox = useCallback(() => setActive(null), [])

  return (
    <>
      <section style={{ background: '#0A0A0A' }} className="relative py-20 lg:py-28 overflow-hidden">
        {/* Subtle top border */}
        <div className="absolute top-0 left-0 right-0 h-[1px]"
          style={{ background: 'linear-gradient(90deg, transparent, rgba(139,26,26,0.3) 30%, rgba(139,26,26,0.3) 70%, transparent)' }} />

        <div className="container-custom">
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
            <div>
              <p className="font-mono text-[9px] uppercase tracking-[0.24em] mb-3"
                style={{ color: 'rgba(255,255,255,0.55)' }}>
                Notre portfolio
              </p>
              <h2
                className="font-heading font-black text-white"
                style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', letterSpacing: '-0.04em' }}
              >
                {title}
              </h2>
            </div>
            <p className="text-[14px] leading-relaxed sm:text-right max-w-xs"
              style={{ color: 'rgba(255,255,255,0.62)' }}>
              Nos réalisations à Goma et dans la région des Grands Lacs.
            </p>
          </div>

          {/* Filter pills */}
          {showFilter && (
            <div className="flex flex-wrap gap-2 mb-10">
              {projectCategories.map((c) => (
                <button
                  key={c}
                  onClick={() => setCat(c)}
                  className="relative px-4 py-2 rounded-full font-mono text-[10px] uppercase tracking-[0.14em] transition-all duration-200"
                  style={{
                    background: cat === c ? '#8B1A1A' : 'rgba(255,255,255,0.05)',
                    color: cat === c ? '#fff' : 'rgba(255,255,255,0.65)',
                    border: cat === c ? '1px solid transparent' : '1px solid rgba(255,255,255,0.18)',
                    boxShadow: cat === c ? '0 4px 16px rgba(139,26,26,0.35)' : 'none',
                  }}
                >
                  {c}
                </button>
              ))}
            </div>
          )}

          {/* Bento grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={cat}
              initial={{ opacity: 1 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.18 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-4 lg:[grid-auto-rows:220px]"
            >
              {displayed.map((proj, i) => (
                <BentoCard
                  key={proj.id}
                  project={proj}
                  featured={i === 0}
                  onClick={openLightbox}
                />
              ))}
            </motion.div>
          </AnimatePresence>

          {/* CTA */}
          {limit && (
            <div className="mt-12">
              <Link
                to="/projets"
                className="inline-flex items-center gap-2.5 font-heading font-bold text-[13.5px] text-white px-6 py-3 rounded-full group transition-all duration-200"
                style={{ border: '1px solid rgba(255,255,255,0.28)', background: 'rgba(255,255,255,0.06)' }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.50)'; e.currentTarget.style.background = 'rgba(255,255,255,0.10)' }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.28)'; e.currentTarget.style.background = 'rgba(255,255,255,0.06)' }}
              >
                Voir tous les projets
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {active && <Lightbox project={active} onClose={closeLightbox} />}
      </AnimatePresence>
    </>
  )
}
