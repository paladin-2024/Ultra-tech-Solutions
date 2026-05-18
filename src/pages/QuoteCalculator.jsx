import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { CheckCircle2, ArrowRight, ArrowLeft, Zap, Home, GraduationCap, Bot, Wrench, FileText, Phone, Mail, User, MessageSquare } from 'lucide-react'
import { pageTransition } from '@/lib/animations'
import { siteConfig } from '@/data/siteConfig'

const SERVICES = [
  { id: 'installation', icon: Home, label: 'Installation Domestique', desc: 'Câblage, prises, tableau électrique', range: [300, 2000] },
  { id: 'solaire', icon: Zap, label: 'Énergie Solaire', desc: 'Panneaux, batteries, onduleurs', range: [800, 8000] },
  { id: 'maintenance', icon: Wrench, label: 'Maintenance', desc: 'Contrats préventifs & correctifs', range: [100, 500] },
  { id: 'formation', icon: GraduationCap, label: 'Formation', desc: 'Électrotechnique, robotique', range: [200, 1500] },
  { id: 'robotique', icon: Bot, label: 'Robotique', desc: 'Automatisation & robots éducatifs', range: [500, 5000] },
  { id: 'etude', icon: FileText, label: 'Étude de Projet', desc: 'Analyse, conception, plans', range: [150, 1000] },
]

const SCOPES = [
  { id: 'small', label: 'Petit projet', desc: 'Logement, bureau, petite surface', mult: 1.0 },
  { id: 'medium', label: 'Projet moyen', desc: 'Commerce, résidence 3-4 pièces', mult: 1.6 },
  { id: 'large', label: 'Grand projet', desc: 'Entreprise, bâtiment multi-étages', mult: 2.8 },
]

const URGENCIES = [
  { id: 'normal', label: 'Normal', desc: 'Planifié sous 1-2 semaines', surcharge: 0 },
  { id: 'soon', label: 'Sous 48h', desc: 'Prioritaire', surcharge: 0.15 },
  { id: 'urgent', label: 'Urgence', desc: 'Intervention dans la journée', surcharge: 0.30 },
]

const slide = {
  initial: (d) => ({ opacity: 0, x: d > 0 ? 40 : -40 }),
  animate: { opacity: 1, x: 0 },
  exit: (d) => ({ opacity: 0, x: d > 0 ? -40 : 40 }),
  transition: { duration: 0.32, ease: [0.16, 1, 0.3, 1] },
}

export default function QuoteCalculator() {
  const [step, setStep] = useState(0)
  const [dir, setDir] = useState(1)
  const [sel, setSel] = useState({ service: null, scope: null, urgency: null })
  const [form, setForm] = useState({ name: '', phone: '', email: '', notes: '' })
  const [sent, setSent] = useState(false)

  const go = (next) => {
    setDir(next > step ? 1 : -1)
    setStep(next)
  }

  const service = SERVICES.find(s => s.id === sel.service)
  const scope    = SCOPES.find(s => s.id === sel.scope)
  const urgency  = URGENCIES.find(u => u.id === sel.urgency)

  const estimate = service && scope && urgency
    ? {
        low:  Math.round(service.range[0] * scope.mult * (1 + urgency.surcharge)),
        high: Math.round(service.range[1] * scope.mult * (1 + urgency.surcharge)),
      }
    : null

  const canNext = [
    !!sel.service,
    !!sel.scope,
    !!sel.urgency,
    form.name.trim() && form.phone.trim(),
  ][step]

  const submit = (e) => {
    e.preventDefault()
    setSent(true)
  }

  const STEPS = ['Service', 'Envergure', 'Urgence', 'Coordonnées']

  return (
    <motion.div {...pageTransition}>
      {/* Hero */}
      <section className="relative overflow-hidden" style={{ minHeight: '340px' }}>
        <img
          src="/images/tech-conduit-slab.jpg"
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
          style={{ filter: 'brightness(0.28)' }}
          loading="eager"
        />
        <div className="absolute inset-0"
          style={{ background: 'linear-gradient(110deg, rgba(0,0,0,0.92) 0%, rgba(0,0,0,0.55) 60%, rgba(0,0,0,0.22) 100%)' }} />
        <div className="container-custom relative z-10 pt-36 pb-14">
          <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
            style={{ color: 'rgba(255,255,255,0.60)', fontFamily: 'DM Mono, monospace', fontSize: '9px', textTransform: 'uppercase', letterSpacing: '0.24em', marginBottom: '16px' }}>
            — Estimez votre projet
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="font-heading font-black text-white leading-[1.0] mb-4"
            style={{ fontSize: 'clamp(2rem, 4.5vw, 3.5rem)', letterSpacing: '-0.04em' }}>
            Calculateur de <span style={{ color: '#8B1A1A' }}>Devis</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
            className="max-w-xl text-base leading-relaxed"
            style={{ color: 'rgba(255,255,255,0.72)' }}>
            Répondez à 4 questions pour obtenir une estimation instantanée. Devis précis gratuit après.
          </motion.p>
        </div>
      </section>

      <section className="section section-surface">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto">

            {/* Progress */}
            {!sent && (
              <div className="flex items-center gap-2 mb-10">
                {STEPS.map((s, i) => (
                  <div key={s} className="flex items-center gap-2 flex-1">
                    <div className="flex items-center gap-2">
                      <div
                        className="w-7 h-7 rounded-full flex items-center justify-center font-mono text-[10px] font-bold transition-all duration-300"
                        style={{
                          background: i < step ? '#8B1A1A' : i === step ? '#8B1A1A' : 'rgba(0,0,0,0.08)',
                          color: i <= step ? '#fff' : 'rgba(0,0,0,0.35)',
                        }}
                      >
                        {i < step ? <CheckCircle2 size={13} /> : i + 1}
                      </div>
                      <span className="font-mono text-[10px] uppercase tracking-[0.12em] hidden sm:block"
                        style={{ color: i <= step ? '#8B1A1A' : 'rgba(0,0,0,0.35)' }}>
                        {s}
                      </span>
                    </div>
                    {i < STEPS.length - 1 && (
                      <div className="flex-1 h-[1.5px] rounded-full transition-colors duration-300"
                        style={{ background: i < step ? '#8B1A1A' : 'rgba(0,0,0,0.10)' }} />
                    )}
                  </div>
                ))}
              </div>
            )}

            {/* Card */}
            <div className="card overflow-hidden" style={{ minHeight: '420px' }}>
              <AnimatePresence mode="wait" custom={dir}>
                {sent ? (
                  <motion.div
                    key="done"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center text-center p-12 h-full"
                  >
                    <div className="w-16 h-16 rounded-full flex items-center justify-center mb-5"
                      style={{ background: 'rgba(139,26,26,0.08)' }}>
                      <CheckCircle2 size={32} className="text-primary" />
                    </div>
                    <h2 className="font-heading font-black text-ink text-2xl mb-3" style={{ letterSpacing: '-0.03em' }}>
                      Demande envoyée !
                    </h2>
                    <p className="text-muted text-[15px] leading-relaxed mb-8 max-w-sm">
                      Notre équipe vous contacte sous 24h pour affiner votre devis. Merci de votre confiance.
                    </p>
                    {estimate && (
                      <div className="w-full max-w-xs p-5 rounded-xl mb-8"
                        style={{ background: 'rgba(139,26,26,0.05)', border: '1px solid rgba(139,26,26,0.12)' }}>
                        <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-muted mb-2">Estimation indicative</p>
                        <p className="font-heading font-black text-ink text-2xl" style={{ letterSpacing: '-0.03em' }}>
                          ${estimate.low.toLocaleString()} – ${estimate.high.toLocaleString()}
                        </p>
                        <p className="text-muted text-[11px] mt-1">USD · hors taxes · selon spécifications</p>
                      </div>
                    )}
                    <div className="flex gap-3">
                      <Link to="/" className="btn-secondary">Retour à l'accueil</Link>
                      <a href={`tel:${siteConfig.phones[0].replace(/\s/g,'')}`} className="btn-primary gap-2">
                        <Phone size={14} /> Appeler maintenant
                      </a>
                    </div>
                  </motion.div>
                ) : (
                  <motion.div key={step} custom={dir} {...slide} className="p-7 sm:p-10">

                    {/* Step 0 — Service */}
                    {step === 0 && (
                      <div>
                        <h2 className="font-heading font-bold text-ink text-xl mb-1" style={{ letterSpacing: '-0.025em' }}>
                          Quel service vous intéresse ?
                        </h2>
                        <p className="text-muted text-[14px] mb-7">Choisissez le type de prestation dont vous avez besoin.</p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          {SERVICES.map((s) => {
                            const Icon = s.icon
                            const active = sel.service === s.id
                            return (
                              <button
                                key={s.id}
                                onClick={() => setSel(v => ({ ...v, service: s.id }))}
                                className="flex items-start gap-3.5 p-4 rounded-xl text-left transition-all duration-200"
                                style={{
                                  background: active ? 'rgba(139,26,26,0.06)' : 'rgba(0,0,0,0.02)',
                                  border: active ? '1.5px solid rgba(139,26,26,0.35)' : '1.5px solid rgba(0,0,0,0.07)',
                                }}
                              >
                                <div className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0 transition-colors duration-200"
                                  style={{ background: active ? '#8B1A1A' : 'rgba(139,26,26,0.08)' }}>
                                  <Icon size={16} style={{ color: active ? '#fff' : '#8B1A1A' }} />
                                </div>
                                <div>
                                  <p className="font-heading font-bold text-ink text-[13.5px]" style={{ letterSpacing: '-0.01em' }}>{s.label}</p>
                                  <p className="text-muted text-[12px] mt-0.5">{s.desc}</p>
                                </div>
                              </button>
                            )
                          })}
                        </div>
                      </div>
                    )}

                    {/* Step 1 — Scope */}
                    {step === 1 && (
                      <div>
                        <h2 className="font-heading font-bold text-ink text-xl mb-1" style={{ letterSpacing: '-0.025em' }}>
                          Quelle est l'envergure du projet ?
                        </h2>
                        <p className="text-muted text-[14px] mb-7">Cela nous aide à calibrer l'estimation.</p>
                        <div className="space-y-3">
                          {SCOPES.map((s) => {
                            const active = sel.scope === s.id
                            return (
                              <button
                                key={s.id}
                                onClick={() => setSel(v => ({ ...v, scope: s.id }))}
                                className="w-full flex items-center gap-4 p-5 rounded-xl text-left transition-all duration-200"
                                style={{
                                  background: active ? 'rgba(139,26,26,0.06)' : 'rgba(0,0,0,0.02)',
                                  border: active ? '1.5px solid rgba(139,26,26,0.35)' : '1.5px solid rgba(0,0,0,0.07)',
                                }}
                              >
                                <div className="w-4 h-4 rounded-full border-2 flex items-center justify-center shrink-0 transition-colors duration-200"
                                  style={{ borderColor: active ? '#8B1A1A' : 'rgba(0,0,0,0.20)' }}>
                                  {active && <div className="w-2 h-2 rounded-full" style={{ background: '#8B1A1A' }} />}
                                </div>
                                <div>
                                  <p className="font-heading font-bold text-ink text-[14px]" style={{ letterSpacing: '-0.01em' }}>{s.label}</p>
                                  <p className="text-muted text-[12.5px] mt-0.5">{s.desc}</p>
                                </div>
                              </button>
                            )
                          })}
                        </div>
                      </div>
                    )}

                    {/* Step 2 — Urgency */}
                    {step === 2 && (
                      <div>
                        <h2 className="font-heading font-bold text-ink text-xl mb-1" style={{ letterSpacing: '-0.025em' }}>
                          Quel est votre délai ?
                        </h2>
                        <p className="text-muted text-[14px] mb-7">Les interventions urgentes ont un léger surcoût.</p>
                        <div className="space-y-3">
                          {URGENCIES.map((u) => {
                            const active = sel.urgency === u.id
                            return (
                              <button
                                key={u.id}
                                onClick={() => setSel(v => ({ ...v, urgency: u.id }))}
                                className="w-full flex items-center justify-between p-5 rounded-xl text-left transition-all duration-200"
                                style={{
                                  background: active ? 'rgba(139,26,26,0.06)' : 'rgba(0,0,0,0.02)',
                                  border: active ? '1.5px solid rgba(139,26,26,0.35)' : '1.5px solid rgba(0,0,0,0.07)',
                                }}
                              >
                                <div className="flex items-center gap-4">
                                  <div className="w-4 h-4 rounded-full border-2 flex items-center justify-center shrink-0 transition-colors duration-200"
                                    style={{ borderColor: active ? '#8B1A1A' : 'rgba(0,0,0,0.20)' }}>
                                    {active && <div className="w-2 h-2 rounded-full" style={{ background: '#8B1A1A' }} />}
                                  </div>
                                  <div>
                                    <p className="font-heading font-bold text-ink text-[14px]" style={{ letterSpacing: '-0.01em' }}>{u.label}</p>
                                    <p className="text-muted text-[12.5px] mt-0.5">{u.desc}</p>
                                  </div>
                                </div>
                                {u.surcharge > 0 && (
                                  <span className="font-mono text-[10px] uppercase tracking-[0.1em] text-primary shrink-0">
                                    +{Math.round(u.surcharge * 100)}%
                                  </span>
                                )}
                              </button>
                            )
                          })}
                        </div>

                        {/* Live estimate preview */}
                        {estimate && (
                          <motion.div
                            initial={{ opacity: 0, y: 12 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="mt-6 p-5 rounded-xl"
                            style={{ background: 'rgba(139,26,26,0.05)', border: '1px solid rgba(139,26,26,0.12)' }}
                          >
                            <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-muted mb-1">Estimation indicative</p>
                            <p className="font-heading font-black text-ink text-2xl" style={{ letterSpacing: '-0.04em' }}>
                              ${estimate.low.toLocaleString()} – ${estimate.high.toLocaleString()}
                              <span className="font-sans font-normal text-muted text-sm ml-2">USD</span>
                            </p>
                            <p className="text-muted text-[11px] mt-1">Selon les spécifications exactes — devis précis après contact</p>
                          </motion.div>
                        )}
                      </div>
                    )}

                    {/* Step 3 — Contact form */}
                    {step === 3 && (
                      <form onSubmit={submit}>
                        <h2 className="font-heading font-bold text-ink text-xl mb-1" style={{ letterSpacing: '-0.025em' }}>
                          Vos coordonnées
                        </h2>
                        <p className="text-muted text-[14px] mb-7">Pour vous envoyer votre devis précis sous 24h.</p>
                        <div className="space-y-4">
                          <div className="relative">
                            <User size={14} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted" />
                            <input
                              className="input pl-10"
                              placeholder="Votre nom complet *"
                              value={form.name}
                              onChange={e => setForm(v => ({ ...v, name: e.target.value }))}
                              required
                            />
                          </div>
                          <div className="relative">
                            <Phone size={14} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted" />
                            <input
                              className="input pl-10"
                              placeholder="Téléphone / WhatsApp *"
                              value={form.phone}
                              onChange={e => setForm(v => ({ ...v, phone: e.target.value }))}
                              required
                            />
                          </div>
                          <div className="relative">
                            <Mail size={14} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted" />
                            <input
                              className="input pl-10"
                              placeholder="Email (optionnel)"
                              type="email"
                              value={form.email}
                              onChange={e => setForm(v => ({ ...v, email: e.target.value }))}
                            />
                          </div>
                          <div className="relative">
                            <MessageSquare size={14} className="absolute left-4 top-4 text-muted" />
                            <textarea
                              className="textarea pl-10"
                              rows={3}
                              placeholder="Détails supplémentaires (optionnel)"
                              value={form.notes}
                              onChange={e => setForm(v => ({ ...v, notes: e.target.value }))}
                            />
                          </div>
                        </div>

                        {estimate && (
                          <div className="mt-5 p-4 rounded-xl flex items-center gap-3"
                            style={{ background: 'rgba(139,26,26,0.05)', border: '1px solid rgba(139,26,26,0.12)' }}>
                            <div>
                              <p className="font-mono text-[9px] uppercase tracking-[0.16em] text-muted">Estimation</p>
                              <p className="font-heading font-black text-ink text-lg" style={{ letterSpacing: '-0.03em' }}>
                                ${estimate.low.toLocaleString()} – ${estimate.high.toLocaleString()} USD
                              </p>
                            </div>
                          </div>
                        )}
                      </form>
                    )}

                  </motion.div>
                )}
              </AnimatePresence>

              {/* Nav buttons */}
              {!sent && (
                <div className="flex items-center justify-between px-7 sm:px-10 pb-8">
                  <button
                    onClick={() => go(step - 1)}
                    disabled={step === 0}
                    className="flex items-center gap-2 font-heading font-semibold text-[13px] text-muted hover:text-ink transition-colors duration-200 disabled:opacity-30 disabled:pointer-events-none"
                  >
                    <ArrowLeft size={14} /> Retour
                  </button>

                  {step < 3 ? (
                    <button
                      onClick={() => go(step + 1)}
                      disabled={!canNext}
                      className="btn-primary gap-2 group disabled:opacity-40 disabled:pointer-events-none"
                    >
                      Suivant <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                  ) : (
                    <button
                      onClick={submit}
                      disabled={!canNext}
                      className="btn-primary gap-2 group disabled:opacity-40 disabled:pointer-events-none"
                    >
                      Envoyer ma demande <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  )
}
