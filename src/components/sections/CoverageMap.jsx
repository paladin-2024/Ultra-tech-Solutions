import { motion } from 'framer-motion'
import { MapPin } from 'lucide-react'

const ZONES = [
  { name: 'Goma (siège)',    x: 54, y: 52, main: true  },
  { name: 'Rutshuru',       x: 48, y: 28, main: false },
  { name: 'Beni',           x: 28, y: 16, main: false },
  { name: 'Butembo',        x: 22, y: 22, main: false },
  { name: 'Walikale',       x: 20, y: 42, main: false },
  { name: 'Masisi',         x: 35, y: 38, main: false },
  { name: 'Minova',         x: 42, y: 62, main: false },
  { name: 'Uvira (SudKivu)',x: 58, y: 74, main: false },
]

export default function CoverageMap() {
  return (
    <section className="section section-surface overflow-hidden">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Text side */}
          <motion.div
            initial={{ x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="label-tag">Zone d'intervention</p>
            <h2 className="display-md text-ink mt-1 mb-5">
              Nous intervenons dans tout le Nord-Kivu
            </h2>
            <p className="text-muted text-[15px] leading-relaxed mb-8">
              Notre équipe de techniciens certifiés couvre Goma et ses environs avec des délais d'intervention
              parmi les plus rapides de la région. Pour les grands projets, nous nous déplaçons dans toutes
              les provinces de la RDC.
            </p>

            <div className="space-y-3">
              {[
                { label: 'Goma & environs', sub: 'Intervention sous 2h', dot: '#8B1A1A' },
                { label: 'Nord-Kivu (provinces)', sub: 'Intervention sous 24h', dot: '#F59E0B' },
                { label: 'RDC (grands projets)', sub: 'Sur planification', dot: '#6B7280' },
              ].map((z) => (
                <div key={z.label} className="flex items-center gap-3.5">
                  <span className="w-2.5 h-2.5 rounded-full shrink-0" style={{ background: z.dot }} />
                  <div>
                    <span className="font-heading font-semibold text-ink text-[14px]">{z.label}</span>
                    <span className="text-muted text-[13px] ml-2">— {z.sub}</span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Map side */}
          <motion.div
            initial={{ x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            <div
              className="relative rounded-2xl overflow-hidden"
              style={{
                aspectRatio: '4/4.5',
                background: 'linear-gradient(135deg, #1a2744 0%, #0f1a35 100%)',
                border: '1px solid rgba(255,255,255,0.06)',
              }}
            >
              {/* Grid lines */}
              <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                    <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255,255,255,0.04)" strokeWidth="1"/>
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#grid)" />

                {/* Stylized DRC region shape */}
                <path
                  d="M 30 10 Q 45 8 60 12 Q 75 16 80 28 Q 82 38 78 50 Q 74 62 68 72 Q 62 80 55 84 Q 48 88 40 86 Q 30 84 22 78 Q 14 70 12 58 Q 10 46 14 36 Q 18 24 30 10 Z"
                  fill="rgba(139,26,26,0.08)"
                  stroke="rgba(139,26,26,0.25)"
                  strokeWidth="1.5"
                  strokeDasharray="4 3"
                />

                {/* Lake Kivu outline */}
                <ellipse cx="62" cy="63" rx="6" ry="12" fill="rgba(37,99,235,0.25)" stroke="rgba(59,130,246,0.3)" strokeWidth="1" />
                <text x="62" y="67" textAnchor="middle" fill="rgba(147,197,253,0.6)" fontSize="4" fontFamily="monospace">LAC KIVU</text>

                {/* Pulse rings from Goma */}
                <circle cx="54%" cy="52%" r="4%" fill="none" stroke="rgba(139,26,26,0.35)" strokeWidth="1">
                  <animate attributeName="r" from="4%" to="14%" dur="2.5s" repeatCount="indefinite"/>
                  <animate attributeName="opacity" from="0.5" to="0" dur="2.5s" repeatCount="indefinite"/>
                </circle>
                <circle cx="54%" cy="52%" r="4%" fill="none" stroke="rgba(139,26,26,0.25)" strokeWidth="1">
                  <animate attributeName="r" from="4%" to="20%" dur="2.5s" begin="0.8s" repeatCount="indefinite"/>
                  <animate attributeName="opacity" from="0.4" to="0" dur="2.5s" begin="0.8s" repeatCount="indefinite"/>
                </circle>
              </svg>

              {/* Zone markers */}
              {ZONES.map((z, i) => (
                <motion.div
                  key={z.name}
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.08, type: 'spring', stiffness: 300, damping: 20 }}
                  className="absolute group"
                  style={{ left: `${z.x}%`, top: `${z.y}%`, transform: 'translate(-50%, -50%)' }}
                >
                  {z.main ? (
                    <div className="relative">
                      <div className="w-4 h-4 rounded-full border-2 border-white flex items-center justify-center"
                        style={{ background: '#8B1A1A', boxShadow: '0 0 12px rgba(139,26,26,0.6)' }}>
                        <div className="w-1.5 h-1.5 rounded-full bg-white" />
                      </div>
                      <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 font-mono text-[8px] uppercase tracking-wider text-white whitespace-nowrap"
                        style={{ textShadow: '0 1px 4px rgba(0,0,0,0.8)' }}>
                        {z.name}
                      </span>
                    </div>
                  ) : (
                    <div className="relative">
                      <div className="w-2.5 h-2.5 rounded-full"
                        style={{ background: 'rgba(245,158,11,0.8)', boxShadow: '0 0 6px rgba(245,158,11,0.4)' }} />
                      <span className="absolute bottom-full mb-1.5 left-1/2 -translate-x-1/2 font-mono text-[7px] uppercase tracking-wide whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none px-2 py-0.5 rounded"
                        style={{ color: 'rgba(255,255,255,0.90)', background: 'rgba(0,0,0,0.75)', textShadow: 'none' }}>
                        {z.name}
                      </span>
                    </div>
                  )}
                </motion.div>
              ))}

              {/* Corner label */}
              <div className="absolute top-4 left-4">
                <span className="font-mono text-[8px] uppercase tracking-[0.2em]"
                  style={{ color: 'rgba(255,255,255,0.30)' }}>
                  Nord-Kivu · RDC
                </span>
              </div>
              <div className="absolute bottom-4 right-4">
                <span className="font-mono text-[8px]"
                  style={{ color: 'rgba(255,255,255,0.20)' }}>
                  1.6592°S 29.2208°E
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
