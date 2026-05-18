import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Play, X } from 'lucide-react'

export default function VideoSection() {
  const [playing, setPlaying] = useState(false)

  return (
    <section className="section section-white overflow-hidden">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Text side */}
          <div>
            <p className="label-tag">Qui sommes-nous</p>
            <h2 className="display-md text-ink mt-1 mb-5">
              Découvrez UTS en action
            </h2>
            <p className="text-muted text-[15px] leading-relaxed mb-6">
              Depuis 2019, nos techniciens interviennent chaque jour sur le terrain à Goma et dans toute la région des Grands Lacs. Ce film vous plonge au cœur de nos chantiers, formations et projets robotique.
            </p>
            <ul className="space-y-3 mb-8">
              {[
                'Techniciens certifiés, équipement professionnel',
                'Interventions documentées et garanties',
                'Formations filmées et certifiantes',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5"
                    style={{ background: 'rgba(139,26,26,0.08)' }}>
                    <span className="w-1.5 h-1.5 rounded-full" style={{ background: '#8B1A1A' }} />
                  </span>
                  <span className="text-muted text-[14px]">{item}</span>
                </li>
              ))}
            </ul>
            <button
              onClick={() => setPlaying(true)}
              className="btn-primary gap-3 group"
            >
              <Play size={16} className="fill-white" />
              Voir la vidéo
            </button>
          </div>

          {/* Video thumbnail */}
          <div
            className="relative rounded-2xl overflow-hidden cursor-pointer group"
            style={{ aspectRatio: '16/10' }}
            onClick={() => setPlaying(true)}
          >
            <img
              src="/images/arduino-training.jpg"
              alt="Technicien UTS en intervention"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/15 transition-colors duration-300" />

            {/* Red top line on hover */}
            <div className="absolute top-0 left-0 h-[2.5px] w-0 group-hover:w-full transition-all duration-500"
              style={{ background: 'linear-gradient(90deg, #8B1A1A, rgba(139,26,26,0.3))' }} />

            {/* Play button */}
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="relative w-18 h-18 flex items-center justify-center"
              >
                {/* Pulse ring */}
                <span className="absolute inset-0 rounded-full animate-ping opacity-30"
                  style={{ background: 'rgba(139,26,26,0.6)', width: '72px', height: '72px' }} />
                <div
                  className="relative w-16 h-16 rounded-full flex items-center justify-center"
                  style={{ background: '#8B1A1A', boxShadow: '0 8px 32px rgba(139,26,26,0.55)' }}
                >
                  <Play size={22} className="text-white fill-white ml-1" />
                </div>
              </motion.div>
            </div>

            {/* Caption */}
            <div className="absolute bottom-0 left-0 right-0 p-5">
              <p className="font-mono text-[9px] uppercase tracking-[0.2em] mb-1"
                style={{ color: 'rgba(255,255,255,0.55)' }}>Ultra Tech Solutions · 2024</p>
              <p className="font-heading font-bold text-white text-[15px]" style={{ letterSpacing: '-0.02em' }}>
                UTS : Présentation officielle
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {playing && (
          <motion.div
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-10"
            style={{ background: 'rgba(0,0,0,0.94)', backdropFilter: 'blur(12px)' }}
            onClick={(e) => { if (e.target === e.currentTarget) setPlaying(false) }}
          >
            <motion.div
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.94, opacity: 0 }}
              transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-4xl rounded-2xl overflow-hidden"
              style={{ aspectRatio: '16/9', background: '#000' }}
            >
              <iframe
                src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&rel=0"
                title="Ultra Tech Solutions : Présentation"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            </motion.div>
            <button
              onClick={() => setPlaying(false)}
              className="absolute top-5 right-5 w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-200"
              style={{ background: 'rgba(255,255,255,0.10)', color: 'rgba(255,255,255,0.75)', border: '1px solid rgba(255,255,255,0.15)' }}
              aria-label="Fermer"
            >
              <X size={18} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
