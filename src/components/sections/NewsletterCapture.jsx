import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, CheckCircle2, ArrowRight } from 'lucide-react'

export default function NewsletterCapture() {
  const [mode, setMode] = useState('email')
  const [value, setValue] = useState('')
  const [done, setDone] = useState(false)

  const submit = (e) => {
    e.preventDefault()
    if (!value.trim()) return
    setDone(true)
  }

  return (
    <section className="relative overflow-hidden noise" style={{ background: '#0F0F0F' }}>
      {/* Ambient */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 60% 70% at 50% 50%, rgba(139,26,26,0.10) 0%, transparent 70%)' }} />
      <div className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.018) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.018) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }} />

      <div className="container-custom relative z-10 py-20 lg:py-24">
        <div className="max-w-xl mx-auto text-center">
          <motion.div
            initial={{ y: 20 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.55 }}
          >
            <p className="font-mono text-[9px] uppercase tracking-[0.28em] mb-4"
              style={{ color: 'rgba(255,255,255,0.45)' }}>
              Restez informé
            </p>
            <h2 className="font-heading font-black text-white mb-4"
              style={{ fontSize: 'clamp(1.6rem, 3vw, 2.4rem)', letterSpacing: '-0.04em' }}>
              Conseils tech &<br />offres exclusives
            </h2>
            <p className="text-[15px] leading-relaxed mb-8"
              style={{ color: 'rgba(255,255,255,0.58)' }}>
              Rejoignez 400+ professionnels de Goma qui reçoivent nos conseils électrotechniques et nos offres en avant-première.
            </p>

            {done ? (
              <motion.div
                initial={{ scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center gap-3 py-8"
              >
                <div className="w-14 h-14 rounded-full flex items-center justify-center"
                  style={{ background: 'rgba(139,26,26,0.15)', border: '1px solid rgba(139,26,26,0.25)' }}>
                  <CheckCircle2 size={26} className="text-primary" />
                </div>
                <p className="font-heading font-bold text-white text-lg" style={{ letterSpacing: '-0.025em' }}>
                  Vous êtes inscrit !
                </p>
                <p className="text-[13.5px]" style={{ color: 'rgba(255,255,255,0.52)' }}>
                  Bienvenue dans la communauté UTS. Premier message sous 48h.
                </p>
              </motion.div>
            ) : (
              <>
                {/* Mode toggle */}
                <div className="inline-flex rounded-full p-1 mb-6"
                  style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.10)' }}>
                  {[
                    { id: 'email', icon: Mail, label: 'Email' },
                    { id: 'sms', icon: Phone, label: 'SMS/WhatsApp' },
                  ].map(({ id, icon: Icon, label }) => (
                    <button
                      key={id}
                      onClick={() => { setMode(id); setValue('') }}
                      className="flex items-center gap-2 px-5 py-2 rounded-full font-mono text-[10px] uppercase tracking-[0.14em] transition-all duration-200"
                      style={{
                        background: mode === id ? '#8B1A1A' : 'transparent',
                        color: mode === id ? '#fff' : 'rgba(255,255,255,0.45)',
                      }}
                    >
                      <Icon size={12} />
                      {label}
                    </button>
                  ))}
                </div>

                <form onSubmit={submit} className="flex gap-2">
                  <input
                    type={mode === 'email' ? 'email' : 'tel'}
                    placeholder={mode === 'email' ? 'votre@email.com' : '+243 9XX XXX XXX'}
                    value={value}
                    onChange={e => setValue(e.target.value)}
                    required
                    className="flex-1 px-5 py-3.5 rounded-full text-[14px] font-medium transition-all duration-200 focus:outline-none"
                    style={{
                      background: 'rgba(255,255,255,0.08)',
                      border: '1.5px solid rgba(255,255,255,0.14)',
                      color: '#fff',
                    }}
                    onFocus={e => { e.target.style.borderColor = 'rgba(139,26,26,0.50)'; e.target.style.background = 'rgba(255,255,255,0.11)' }}
                    onBlur={e => { e.target.style.borderColor = 'rgba(255,255,255,0.14)'; e.target.style.background = 'rgba(255,255,255,0.08)' }}
                  />
                  <button
                    type="submit"
                    className="px-6 py-3.5 rounded-full font-heading font-bold text-white text-[13px] flex items-center gap-2 group transition-all duration-200 hover:-translate-y-0.5 shrink-0"
                    style={{ background: '#8B1A1A', boxShadow: '0 4px 20px rgba(139,26,26,0.40)', letterSpacing: '-0.01em' }}
                  >
                    S'inscrire <ArrowRight size={13} className="group-hover:translate-x-0.5 transition-transform" />
                  </button>
                </form>

                <p className="font-mono text-[9px] uppercase tracking-[0.14em] mt-4"
                  style={{ color: 'rgba(255,255,255,0.28)' }}>
                  Désabonnement en un clic · Zéro spam
                </p>
              </>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
