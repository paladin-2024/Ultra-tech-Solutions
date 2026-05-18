import { useState } from 'react'
import { useForm, Controller } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { motion } from 'framer-motion'
import { Send, CheckCircle, AlertCircle, ChevronDown } from 'lucide-react'
import { ContactFormSchema } from '@/schemas'
import { fadeInLeft } from '@/lib/animations'
import { cn } from '@/lib/utils'

const SERVICE_OPTIONS = [
  { value: 'formations',     label: 'Formations' },
  { value: 'installation',   label: 'Installation Domestique' },
  { value: 'robotique',      label: 'Robotique' },
  { value: 'etude-projets',  label: 'Étude de Projets' },
  { value: 'maintenance',    label: 'Maintenance' },
  { value: 'depannage',      label: 'Dépannage' },
]

const CHAR_LIMIT = 2000

function FieldError({ message }) {
  if (!message) return null
  return (
    <p role="alert" className="mt-1.5 text-red-500 text-xs flex items-start gap-1.5">
      <AlertCircle size={12} className="mt-0.5 shrink-0" />
      {message}
    </p>
  )
}

function Label({ children, required }) {
  return (
    <label className="block text-xs font-semibold text-ink/55 mb-1.5 uppercase tracking-wide">
      {children}
      {required && <span className="text-red-500 ml-0.5">*</span>}
    </label>
  )
}

function Field({ className, hasError, ...props }) {
  return (
    <input
      {...props}
      className={cn(
        'w-full px-4 py-3 rounded-xl border bg-white text-sm text-ink placeholder-muted',
        'transition-all duration-200 focus:outline-none focus:ring-2',
        hasError
          ? 'border-red-400 focus:ring-red-200 bg-red-50/40'
          : 'border-black/8 hover:border-primary/40 focus:border-primary focus:ring-primary/15',
        className,
      )}
    />
  )
}

export default function ContactForm({ defaultService }) {
  const [submitted, setSubmitted] = useState(false)

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors, isSubmitting, isDirty },
  } = useForm({
    resolver: zodResolver(ContactFormSchema),
    defaultValues: {
      nom: '',
      email: '',
      telephone: '',
      service: defaultService ?? '',
      sujet: '',
      message: '',
      rgpd: false,
    },
  })

  const messageValue = watch('message') ?? ''
  const charCount = messageValue.length

  const onSubmit = async (data) => {
    await new Promise((r) => setTimeout(r, 1200))
    console.info('[ContactForm] Submitted:', data)
    setSubmitted(true)
    reset()
  }

  if (submitted) {
    return (
      <motion.div
        initial={{ scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white rounded-2xl p-10 shadow-card text-center"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', stiffness: 300, damping: 20, delay: 0.1 }}
          className="w-20 h-20 rounded-full bg-green-50 border-2 border-green-200 flex items-center justify-center mx-auto mb-5"
        >
          <CheckCircle size={36} className="text-green-500" />
        </motion.div>
        <h3 className="font-heading font-bold text-ink text-xl mb-2">
          Message envoyé avec succès !
        </h3>
        <p className="text-muted text-sm mb-1">
          Merci pour votre message. Notre équipe vous contactera dans les{' '}
          <strong>24 heures</strong>.
        </p>
        <p className="text-muted text-xs mb-8">
          En attendant, vous pouvez nous joindre directement par WhatsApp.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <button onClick={() => setSubmitted(false)} className="btn-primary">
            Envoyer un autre message
          </button>
          <a
            href="https://wa.me/243970838062"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
          >
            Contacter sur WhatsApp
          </a>
        </div>
      </motion.div>
    )
  }

  return (
    <motion.div
      variants={fadeInLeft}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      className="card p-6 sm:p-8"
    >
      <div className="mb-6">
        <h3 className="font-heading font-bold text-ink text-xl mb-1">
          Envoyez-nous un message
        </h3>
        <p className="text-muted text-sm">
          Tous les champs marqués <span className="text-red-500">*</span> sont obligatoires.
        </p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5">

        {/* Nom + Email */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <Label required>Nom complet</Label>
            <Field
              {...register('nom')}
              placeholder="Jean Dupont"
              hasError={!!errors.nom}
              autoComplete="name"
            />
            <FieldError message={errors.nom?.message} />
          </div>
          <div>
            <Label required>Email</Label>
            <Field
              {...register('email')}
              type="email"
              placeholder="jean@exemple.com"
              hasError={!!errors.email}
              autoComplete="email"
            />
            <FieldError message={errors.email?.message} />
          </div>
        </div>

        {/* Téléphone + Service */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <Label>Téléphone</Label>
            <Field
              {...register('telephone')}
              type="tel"
              placeholder="+243 970 000 000"
              hasError={!!errors.telephone}
              autoComplete="tel"
            />
            <FieldError message={errors.telephone?.message} />
          </div>
          <div>
            <Label required>Service souhaité</Label>
            <div className="relative">
              <select
                {...register('service')}
                defaultValue=""
                className={cn(
                  'w-full px-4 py-3 pr-10 rounded-xl border bg-white text-sm appearance-none cursor-pointer',
                  'transition-all duration-200 focus:outline-none focus:ring-2',
                  errors.service
                    ? 'border-red-400 focus:ring-red-200 text-red-500'
                    : 'border-black/8 hover:border-primary/40 focus:border-primary focus:ring-primary/15 text-ink',
                )}
              >
                <option value="" disabled>— Sélectionnez —</option>
                {SERVICE_OPTIONS.map((o) => (
                  <option key={o.value} value={o.value}>{o.label}</option>
                ))}
              </select>
              <ChevronDown size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-muted pointer-events-none" />
            </div>
            <FieldError message={errors.service?.message} />
          </div>
        </div>

        {/* Sujet */}
        <div>
          <Label>Sujet</Label>
          <Field
            {...register('sujet')}
            placeholder="Demande de devis pour installation solaire"
            hasError={!!errors.sujet}
          />
          <FieldError message={errors.sujet?.message} />
        </div>

        {/* Message */}
        <div>
          <div className="flex items-center justify-between mb-1.5">
            <Label required>Message</Label>
            <span className={cn('text-xs', charCount > CHAR_LIMIT * 0.9 ? 'text-red-400' : 'text-muted-2')}>
              {charCount}/{CHAR_LIMIT}
            </span>
          </div>
          <textarea
            {...register('message')}
            rows={5}
            placeholder="Décrivez votre projet ou besoin en détail. Plus vous serez précis, mieux nous pourrons vous conseiller..."
            className={cn(
              'w-full px-4 py-3 rounded-xl border bg-white text-sm text-ink placeholder-muted resize-none',
              'transition-all duration-200 focus:outline-none focus:ring-2',
              errors.message
                ? 'border-red-400 focus:ring-red-200 bg-red-50/40'
                : 'border-black/8 hover:border-primary/40 focus:border-primary focus:ring-primary/15',
            )}
          />
          <FieldError message={errors.message?.message} />
        </div>

        {/* RGPD */}
        <div>
          <label className={cn('flex items-start gap-3 cursor-pointer group', errors.rgpd && 'text-red-500')}>
            <input
              {...register('rgpd')}
              type="checkbox"
              className="mt-0.5 w-4 h-4 accent-primary rounded cursor-pointer shrink-0"
            />
            <span className="text-xs text-muted group-hover:text-ink/70 transition-colors leading-relaxed">
              J'accepte que mes données soient utilisées pour traiter ma demande conformément à la{' '}
              <a href="#" className="text-primary underline hover:no-underline">
                politique de confidentialité
              </a>{' '}
              d'Ultra Tech Solutions.
              <span className="text-red-500 ml-0.5">*</span>
            </span>
          </label>
          <FieldError message={errors.rgpd?.message} />
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="btn-primary w-full justify-center py-3.5 text-base disabled:opacity-60 disabled:cursor-not-allowed group"
        >
          {isSubmitting ? (
            <>
              <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              Envoi en cours...
            </>
          ) : (
            <>
              <Send size={17} className="group-hover:translate-x-0.5 transition-transform" />
              Envoyer le message
            </>
          )}
        </button>

        <p className="text-center text-xs text-muted-2">
          Réponse garantie sous 24h — ou contactez-nous directement sur{' '}
          <a href="https://wa.me/243970838062" className="text-primary hover:underline">WhatsApp</a>
        </p>
      </form>
    </motion.div>
  )
}
