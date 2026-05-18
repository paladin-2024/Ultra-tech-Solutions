import { motion } from 'framer-motion'
import { MessageSquare, Search, Wrench, CheckCircle2 } from 'lucide-react'

const steps = [
  { num: '01', icon: MessageSquare, tag: 'Étape 1', title: 'Consultation initiale', desc: "Nous analysons vos besoins lors d'un entretien gratuit pour cerner votre projet et proposer la solution adaptée." },
  { num: '02', icon: Search, tag: 'Étape 2', title: 'Étude & devis', desc: 'Notre équipe élabore une étude technique complète et vous remet un devis détaillé sans engagement.' },
  { num: '03', icon: Wrench, tag: 'Étape 3', title: 'Réalisation', desc: "Nos techniciens certifiés interviennent avec précision et professionnalisme, en respectant les délais convenus." },
  { num: '04', icon: CheckCircle2, tag: 'Étape 4', title: 'Livraison & suivi', desc: "Après la livraison, nous assurons un suivi complet et une garantie sur tous nos travaux. Votre satisfaction est notre priorité." },
]

export default function ProcessSteps() {
  return (
    <section className="section" style={{ background: '#FAFBFC' }}>
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
          className="mb-14"
        >
          <p className="label-tag">Comment nous travaillons</p>
          <h2 className="display-lg text-ink mt-1">Notre Processus</h2>
        </motion.div>

        {/* Vertical editorial list */}
        <div className="max-w-3xl">
          {steps.map((step, i) => {
            const Icon = step.icon
            return (
              <motion.div
                key={step.num}
                initial={{ x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.55, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="group relative"
              >
                <div className="grid items-start" style={{ gridTemplateColumns: '64px 1fr' }}>
                  {/* Left: ghost number + connector */}
                  <div className="relative flex flex-col items-center pt-3">
                    <span
                      className="font-heading font-black leading-none select-none"
                      style={{
                        fontSize: '2.8rem',
                        letterSpacing: '-0.06em',
                        color: 'rgba(139,26,26,0.10)',
                        transition: 'color 0.3s',
                      }}
                    >
                      {step.num}
                    </span>
                    {/* Connector line */}
                    {i < steps.length - 1 && (
                      <div
                        className="w-[1px] flex-1 mt-2"
                        style={{
                          background: 'linear-gradient(to bottom, rgba(139,26,26,0.18), rgba(139,26,26,0.04))',
                          minHeight: '3rem',
                        }}
                      />
                    )}
                  </div>

                  {/* Right: content */}
                  <div className={`pb-12 ${i < steps.length - 1 ? '' : 'pb-0'}`}>
                    {/* Tag + icon row */}
                    <div className="flex items-center gap-3 mb-3">
                      <p className="font-mono text-[9px] uppercase tracking-[0.22em] text-primary">
                        {step.tag}
                      </p>
                      <div
                        className="w-7 h-7 rounded-lg flex items-center justify-center shrink-0 transition-all duration-300 group-hover:bg-primary"
                        style={{ background: 'rgba(139,26,26,0.08)', border: '1px solid rgba(139,26,26,0.12)' }}
                      >
                        <Icon size={13} className="text-primary group-hover:text-white transition-colors duration-300" />
                      </div>
                    </div>

                    <h3
                      className="font-heading font-bold text-ink mb-2.5 group-hover:text-primary transition-colors duration-300"
                      style={{ fontSize: '1.05rem', letterSpacing: '-0.025em' }}
                    >
                      {step.title}
                    </h3>
                    <p className="text-muted text-[13.5px] leading-relaxed max-w-lg">
                      {step.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
