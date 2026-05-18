import { ShieldCheck, Clock, RefreshCw, Award } from 'lucide-react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

const GUARANTEES = [
  {
    icon: ShieldCheck,
    title: 'Satisfaction garantie',
    desc: "Si vous n'êtes pas satisfait du résultat dans les 30 jours suivant l'intervention, nous revenons corriger gratuitement, sans discussion.",
    highlight: '30 jours',
  },
  {
    icon: Clock,
    title: 'Ponctualité garantie',
    desc: "Nous arrivons à l'heure convenue ou nous vous offrons 10% de réduction sur la prestation. Votre temps est aussi précieux que le nôtre.",
    highlight: "À l'heure",
  },
  {
    icon: RefreshCw,
    title: "Garantie pièces & main-d'œuvre",
    desc: "Toutes nos installations sont garanties 12 mois pièces et main-d'œuvre. Panne ou défaut constaté ? Nous intervenons sans frais.",
    highlight: '12 mois',
  },
  {
    icon: Award,
    title: 'Devis respecté',
    desc: "Le prix annoncé est le prix final. Pas de surprise sur la facture. Si le chantier révèle des complications imprévues, nous vous consultons avant d'agir.",
    highlight: 'Prix fixe',
  },
]

export default function GuaranteeSection() {
  return (
    <section className="section section-white overflow-hidden">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left — visual */}
          <div className="relative">
            {/* Main shield visual */}
            <div className="relative rounded-2xl overflow-hidden" style={{ aspectRatio: '4/4.5' }}>
              <img
                src="/images/tech-drilling-ceiling.jpg"
                alt="Technicien UTS"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.82) 0%, rgba(0,0,0,0.20) 55%, transparent 100%)' }} />
              <div className="absolute inset-0 pointer-events-none"
                style={{ background: 'radial-gradient(ellipse 70% 40% at 50% 0%, rgba(139,26,26,0.18) 0%, transparent 65%)' }} />

              {/* Floating guarantee badge */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="flex items-center gap-4 p-5 rounded-2xl"
                  style={{ background: 'rgba(255,255,255,0.07)', backdropFilter: 'blur(16px)', border: '1px solid rgba(255,255,255,0.14)' }}>
                  <div className="w-12 h-12 rounded-full flex items-center justify-center shrink-0"
                    style={{ background: '#8B1A1A', boxShadow: '0 4px 20px rgba(139,26,26,0.45)' }}>
                    <ShieldCheck size={22} className="text-white" />
                  </div>
                  <div>
                    <p className="font-heading font-black text-white text-[15px] leading-tight" style={{ letterSpacing: '-0.02em' }}>
                      Engagement UTS
                    </p>
                    <p className="font-mono text-[9px] uppercase tracking-[0.16em] mt-0.5"
                      style={{ color: 'rgba(255,255,255,0.55)' }}>
                      4 garanties écrites · Depuis 2019
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating stat */}
            <div className="absolute -top-4 -right-4 bg-white rounded-2xl p-4 shadow-lg hidden sm:block" style={{ border: '1px solid rgba(0,0,0,0.07)' }}>
              <p className="font-heading font-black text-ink text-3xl leading-none" style={{ letterSpacing: '-0.05em' }}>98%</p>
              <p className="font-mono text-[8px] uppercase tracking-[0.16em] text-muted mt-1">Clients satisfaits</p>
              <div className="flex gap-0.5 mt-1.5">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="w-2.5 h-2.5 rounded-sm" style={{ background: '#F59E0B' }} />
                ))}
              </div>
            </div>
          </div>

          {/* Right — guarantees list */}
          <div>
            <p className="label-tag">Notre engagement</p>
            <h2 className="display-md text-ink mt-1 mb-3">
              Nous ne faisons pas que promettre.
            </h2>
            <p className="text-muted text-[15px] leading-relaxed mb-10">
              Ces garanties sont écrites dans chaque contrat. Pas du marketing : des engagements légaux que vous pouvez invoquer.
            </p>

            <div className="space-y-5">
              {GUARANTEES.map((g, i) => {
                const Icon = g.icon
                return (
                  <div
                    key={g.title}
                    className="flex gap-4 p-5 rounded-2xl group hover:-translate-y-0.5 transition-all duration-300"
                    style={{ border: '1.5px solid rgba(0,0,0,0.07)', background: '#FAFBFC' }}
                  >
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-colors duration-300 group-hover:bg-primary"
                      style={{ background: 'rgba(139,26,26,0.08)' }}>
                      <Icon size={18} className="text-primary group-hover:text-white transition-colors duration-300" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2.5 mb-1.5">
                        <h3 className="font-heading font-bold text-ink text-[14.5px]" style={{ letterSpacing: '-0.015em' }}>
                          {g.title}
                        </h3>
                        <span className="font-mono text-[9px] uppercase tracking-[0.12em] text-primary px-2 py-0.5 rounded-full"
                          style={{ background: 'rgba(139,26,26,0.08)' }}>
                          {g.highlight}
                        </span>
                      </div>
                      <p className="text-muted text-[13px] leading-relaxed">{g.desc}</p>
                    </div>
                  </div>
                )
              })}
            </div>

            <div className="mt-8">
              <Link to="/contact" className="btn-primary gap-2.5 group">
                Demander une intervention garantie
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
