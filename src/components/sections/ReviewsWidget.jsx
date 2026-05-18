import { Star, Quote } from 'lucide-react'

const REVIEWS = [
  {
    name: 'Emmanuel Rutabingwa',
    role: 'Directeur, ITIG Goma',
    avatar: '/images/team-gedeon.jpg',
    rating: 5,
    text: "UTS a transformé notre infrastructure électrique en un temps record. Professionnels, ponctuels, et le travail est irréprochable. Je recommande sans hésitation.",
    date: 'Novembre 2024',
    verified: true,
  },
  {
    name: 'Amina Zawadi',
    role: 'Gérante, Pharmacie Centrale Goma',
    avatar: '/images/team-dorcas.jpg',
    rating: 5,
    text: "Notre système solaire installé par UTS nous a sauvés des coupures. Plus jamais de pertes de médicaments à cause de l'électricité. Investissement rentabilisé en 2 ans.",
    date: 'Octobre 2024',
    verified: true,
  },
  {
    name: 'Patient Mugisha',
    role: 'Propriétaire, Hôtel du Lac',
    avatar: '/images/team-sammy.jpg',
    rating: 5,
    text: "Formation robotique pour mes enfants : ils ont adoré. Les formateurs sont passionnés et pédagogues. UTS fait un travail essentiel pour la jeunesse de Goma.",
    date: 'Septembre 2024',
    verified: true,
  },
  {
    name: 'Marie-Claire Ndayishimiye',
    role: 'DG, NGO TechAfrique',
    avatar: '/images/team-dorcas.jpg',
    rating: 5,
    text: "Contrat de maintenance depuis 18 mois. Aucune panne majeure, des rapports clairs après chaque visite. UTS est notre partenaire tech de confiance.",
    date: 'Août 2024',
    verified: true,
  },
  {
    name: 'Jean-Baptiste Kalala',
    role: 'Architecte indépendant',
    avatar: '/images/team-elie.jpg',
    rating: 5,
    text: "Étude de projet complète pour une villa à Himbi. Plans détaillés, respect des normes, et suivi rigoureux des travaux. Exactement ce dont j'avais besoin.",
    date: 'Juillet 2024',
    verified: true,
  },
  {
    name: 'Solange Bahizi',
    role: 'Enseignante, École Primaire Katoyi',
    avatar: '/images/team-dorcas.jpg',
    rating: 5,
    text: "L'atelier robotique organisé pour nos élèves a été une révélation. Les enfants ont construit leurs premiers robots ! Merci à toute l'équipe UTS.",
    date: 'Juin 2024',
    verified: true,
  },
]

function Stars({ count }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} size={12} className={i < count ? 'text-yellow-400 fill-yellow-400' : 'text-gray-200 fill-gray-200'} />
      ))}
    </div>
  )
}

const avg = (REVIEWS.reduce((s, r) => s + r.rating, 0) / REVIEWS.length).toFixed(1)

export default function ReviewsWidget() {
  return (
    <section className="section section-surface overflow-hidden">
      <div className="container-custom">

        {/* Header + aggregate */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <div>
            <p className="label-tag">Ce que disent nos clients</p>
            <h2 className="display-md text-ink mt-1">Avis Vérifiés</h2>
          </div>

          {/* Aggregate score */}
          <div className="flex items-center gap-4 bg-white rounded-2xl px-6 py-4 shrink-0"
            style={{ border: '1px solid rgba(0,0,0,0.07)', boxShadow: '0 2px 16px rgba(0,0,0,0.05)' }}>
            <div className="text-center">
              <p className="font-heading font-black text-ink text-4xl leading-none" style={{ letterSpacing: '-0.05em' }}>{avg}</p>
              <Stars count={5} />
              <p className="font-mono text-[9px] uppercase tracking-[0.14em] text-muted mt-1">{REVIEWS.length} avis</p>
            </div>
            <div className="w-px h-12 bg-black/8" />
            <div>
              {[5,4,3,2,1].map((star) => {
                const count = REVIEWS.filter(r => r.rating === star).length
                const pct = Math.round((count / REVIEWS.length) * 100)
                return (
                  <div key={star} className="flex items-center gap-2 mb-0.5">
                    <span className="font-mono text-[9px] text-muted w-2">{star}</span>
                    <div className="w-20 h-1.5 rounded-full bg-black/6 overflow-hidden">
                      <div className="h-full rounded-full" style={{ width: `${pct}%`, background: '#F59E0B' }} />
                    </div>
                    <span className="font-mono text-[9px] text-muted w-4">{pct}%</span>
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        {/* Review cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {REVIEWS.map((r, i) => (
            <div
              key={r.name}
              className="card p-6 flex flex-col gap-4 hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300"
            >
              {/* Quote + stars */}
              <div className="flex items-start justify-between">
                <Stars count={r.rating} />
                <Quote size={18} style={{ color: 'rgba(139,26,26,0.20)' }} />
              </div>

              {/* Review text */}
              <p className="text-muted text-[13.5px] leading-relaxed flex-1">"{r.text}"</p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-2 border-t border-black/5">
                <img
                  src={r.avatar}
                  alt={r.name}
                  className="w-9 h-9 rounded-full object-cover shrink-0"
                  style={{ border: '2px solid rgba(139,26,26,0.15)' }}
                  loading="lazy"
                />
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-1.5">
                    <p className="font-heading font-bold text-ink text-[13px] truncate" style={{ letterSpacing: '-0.01em' }}>
                      {r.name}
                    </p>
                    {r.verified && (
                      <span className="shrink-0 w-4 h-4 rounded-full flex items-center justify-center"
                        style={{ background: '#2563EB' }}>
                        <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                          <path d="M1.5 4L3 5.5L6.5 2" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </span>
                    )}
                  </div>
                  <p className="text-muted text-[11px] truncate">{r.role}</p>
                </div>
                <span className="font-mono text-[9px] uppercase tracking-[0.1em] text-muted/60 shrink-0">{r.date}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Google badge */}
        <div className="flex items-center justify-center gap-3 mt-10">
          <div className="flex items-center gap-2 px-5 py-2.5 bg-white rounded-full"
            style={{ border: '1px solid rgba(0,0,0,0.08)', boxShadow: '0 1px 8px rgba(0,0,0,0.05)' }}>
            <svg width="16" height="16" viewBox="0 0 24 24">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
            </svg>
            <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-muted">Avis Google vérifiés</span>
            <Stars count={5} />
            <span className="font-heading font-bold text-ink text-[13px]">{avg}/5</span>
          </div>
        </div>
      </div>
    </section>
  )
}
