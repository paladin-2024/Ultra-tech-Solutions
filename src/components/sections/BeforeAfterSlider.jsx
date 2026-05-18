import { useState, useRef, useCallback } from 'react'
import { MoveHorizontal } from 'lucide-react'

const PAIRS = [
  {
    before: '/images/tech-conduit-slab.jpg',
    after:  '/images/interior-stone-lighting.jpg',
    label:  'Installation électrique · résidence complète',
  },
  {
    before: '/images/team-rebar-rooftop.jpg',
    after:  '/images/tech-solar-rooftop.jpg',
    label:  'Système solaire résidentiel installé',
  },
]

function Slider({ pair }) {
  const [pct, setPct] = useState(50)
  const containerRef = useRef(null)
  const dragging = useRef(false)

  const update = useCallback((clientX) => {
    const rect = containerRef.current?.getBoundingClientRect()
    if (!rect) return
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width))
    setPct((x / rect.width) * 100)
  }, [])

  const onMouseDown = (e) => { dragging.current = true; update(e.clientX) }
  const onMouseMove = (e) => { if (dragging.current) update(e.clientX) }
  const onMouseUp   = ()  => { dragging.current = false }
  const onTouchMove = (e) => { e.preventDefault(); update(e.touches[0].clientX) }

  return (
    <div
      ref={containerRef}
      className="relative rounded-2xl overflow-hidden select-none cursor-col-resize"
      style={{ aspectRatio: '4/3' }}
      onMouseDown={onMouseDown}
      onMouseMove={onMouseMove}
      onMouseUp={onMouseUp}
      onMouseLeave={onMouseUp}
      onTouchStart={(e) => update(e.touches[0].clientX)}
      onTouchMove={onTouchMove}
    >
      {/* After (full) */}
      <img
        src={pair.after}
        alt="Après"
        className="absolute inset-0 w-full h-full object-cover"
        draggable={false}
      />

      {/* Before (clipped) */}
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ clipPath: `inset(0 ${100 - pct}% 0 0)` }}
      >
        <img
          src={pair.before}
          alt="Avant"
          className="absolute inset-0 w-full h-full object-cover"
          draggable={false}
        />
        {/* Before label */}
        <span className="absolute top-4 left-4 font-mono text-[9px] uppercase tracking-[0.2em] text-white px-3 py-1.5 rounded-full"
          style={{ background: 'rgba(0,0,0,0.55)', backdropFilter: 'blur(6px)' }}>
          Avant
        </span>
      </div>

      {/* After label */}
      <span className="absolute top-4 right-4 font-mono text-[9px] uppercase tracking-[0.2em] text-white px-3 py-1.5 rounded-full"
        style={{ background: 'rgba(139,26,26,0.80)', backdropFilter: 'blur(6px)' }}>
        Après
      </span>

      {/* Divider handle */}
      <div
        className="absolute top-0 bottom-0 w-[2px] z-10"
        style={{ left: `${pct}%`, background: 'rgba(255,255,255,0.90)', transform: 'translateX(-50%)' }}
      >
        <div
          className="absolute top-1/2 -translate-x-1/2 -translate-y-1/2 w-9 h-9 rounded-full flex items-center justify-center"
          style={{ background: '#fff', boxShadow: '0 2px 16px rgba(0,0,0,0.30)' }}
        >
          <MoveHorizontal size={16} className="text-ink" />
        </div>
      </div>
    </div>
  )
}

export default function BeforeAfterSlider() {
  return (
    <section className="section section-surface">
      <div className="container-custom">
        <div className="text-center mb-12">
          <p className="label-tag justify-center">Nos transformations</p>
          <h2 className="display-md text-ink mt-1">Avant / Après</h2>
          <p className="text-muted text-[15px] mt-3 max-w-md mx-auto leading-relaxed">
            Glissez le curseur pour découvrir l'impact de nos interventions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {PAIRS.map((pair, i) => (
            <div key={i}>
              <Slider pair={pair} />
              <p className="text-muted text-[13px] font-medium mt-3 text-center">{pair.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
