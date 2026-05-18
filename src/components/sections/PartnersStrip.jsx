import { motion } from 'framer-motion'

const PARTNERS = [
  { name: 'Nuru Energy', logo: '/images/nuru.jpeg' },
  { name: 'SNEL', logo: '/images/snel.png' },
  { name: 'Virunga', logo: '/images/virunga.png' },
]

const tripled = [...PARTNERS, ...PARTNERS, ...PARTNERS, ...PARTNERS]

function PartnerLogo({ p }) {
  return (
    <div
      className="flex items-center justify-center mx-6 shrink-0"
      style={{ height: '48px', width: '120px' }}
    >
      <img
        src={p.logo}
        alt={p.name}
        className="max-h-full max-w-full object-contain transition-all duration-300 grayscale hover:grayscale-0"
        style={{ opacity: 0.55, filter: 'grayscale(1) contrast(1.1)' }}
        onMouseEnter={e => { e.currentTarget.style.opacity = '1'; e.currentTarget.style.filter = 'none' }}
        onMouseLeave={e => { e.currentTarget.style.opacity = '0.55'; e.currentTarget.style.filter = 'grayscale(1) contrast(1.1)' }}
      />
    </div>
  )
}

export default function PartnersStrip() {
  return (
    <section className="py-10 border-t border-black/[0.05] overflow-hidden" style={{ background: '#FAFBFC' }}>
      <div className="container-custom mb-7">
        <motion.p
          initial={{ opacity: 1 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center font-mono text-[10px] uppercase tracking-[0.28em]"
          style={{ color: '#9CA3AF' }}
        >
          Ils nous font confiance
        </motion.p>
      </div>

      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-20 z-10 pointer-events-none"
          style={{ background: 'linear-gradient(to right, #FAFBFC, transparent)' }} />
        <div className="absolute right-0 top-0 bottom-0 w-20 z-10 pointer-events-none"
          style={{ background: 'linear-gradient(to left, #FAFBFC, transparent)' }} />

        <div className="marquee-track">
          {tripled.map((p, i) => (
            <PartnerLogo key={`${p.name}-${i}`} p={p} />
          ))}
        </div>
      </div>
    </section>
  )
}
