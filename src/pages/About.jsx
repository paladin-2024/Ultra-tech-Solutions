import { motion } from 'framer-motion'
import { CheckCircle2, Target, Eye, Heart, Lightbulb } from 'lucide-react'
import { pageTransition, staggerContainer, staggerItem } from '@/lib/animations'
import StatsBar from '@/components/sections/StatsBar'
import TeamGrid from '@/components/sections/TeamGrid'
import CertBadges from '@/components/sections/CertBadges'
import CTAStrip from '@/components/sections/CTAStrip'
import ProjectsGallery from '@/components/sections/ProjectsGallery'

const values = [
  { icon: Target, title: 'Excellence', desc: "Nous visons l'excellence dans chaque intervention, chaque formation, chaque installation." },
  { icon: Heart, title: 'Passion', desc: "Notre amour pour la technologie et le développement de l'Afrique est le moteur de notre engagement." },
  { icon: Lightbulb, title: 'Innovation', desc: "Nous explorons constamment de nouvelles solutions pour répondre aux défis technologiques locaux." },
  { icon: Eye, title: 'Transparence', desc: 'Chaque devis, chaque rapport, chaque intervention est documenté et communiqué clairement.' },
]

function PageHero() {
  return (
    <section className="relative overflow-hidden" style={{ minHeight: '420px' }}>
      {/* Background photo */}
      <img
        src="/images/team-rooftop.jpg"
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
        style={{ filter: 'brightness(0.35)' }}
        loading="eager"
      />
      <div className="absolute inset-0"
        style={{ background: 'linear-gradient(110deg, rgba(0,0,0,0.90) 0%, rgba(0,0,0,0.55) 60%, rgba(0,0,0,0.25) 100%)' }} />
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 50% 60% at 0% 60%, rgba(139,26,26,0.16) 0%, transparent 65%)' }} />

      <div className="container-custom relative z-10 pt-36 pb-20">
        <motion.p
          initial={{ y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          style={{ color: 'rgba(255,255,255,0.60)', fontFamily: 'DM Mono, monospace', fontSize: '9px', textTransform: 'uppercase', letterSpacing: '0.24em', marginBottom: '16px' }}
        >
          — Notre histoire
        </motion.p>
        <motion.h1
          initial={{ y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="font-heading font-black text-white mb-5 leading-[1.0]"
          style={{ fontSize: 'clamp(2.4rem, 5vw, 4rem)', letterSpacing: '-0.04em' }}
        >
          À Propos<br />
          <span style={{ color: '#8B1A1A' }}>de UTS</span>
        </motion.h1>
        <motion.p
          initial={{ y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="max-w-xl text-base sm:text-[17px] leading-relaxed"
          style={{ color: 'rgba(255,255,255,0.72)' }}
        >
          Depuis 2019, Ultra Tech Solutions forme, installe et innove au cœur de Goma
          pour accélérer la transformation technologique de la RDC.
        </motion.p>
      </div>
    </section>
  )
}

export default function About() {
  return (
    <motion.div {...pageTransition}>
      <PageHero />
      <StatsBar />

      {/* Mission — photo left, text right */}
      <section className="section section-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

            {/* Photo side */}
            <motion.div
              initial={{ x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
              className="relative rounded-2xl overflow-hidden"
              style={{ aspectRatio: '4/5' }}
            >
              <img
                src="/images/tech-solar-selfie.jpg"
                alt="Équipe Ultra Tech Solutions en intervention"
                className="w-full h-full object-cover"
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/72 via-black/15 to-transparent" />
              {/* Red left edge */}
              <div className="absolute top-8 bottom-8 left-0 w-[3px] rounded-r"
                style={{ background: 'linear-gradient(to bottom, #8B1A1A, rgba(139,26,26,0.2))' }} />
              {/* Quote overlay at bottom */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="rounded-xl p-4"
                  style={{ background: 'rgba(255,255,255,0.07)', backdropFilter: 'blur(10px)', border: '1px solid rgba(255,255,255,0.12)' }}>
                  <p className="font-heading font-semibold text-white text-[13px] italic leading-relaxed mb-3">
                    "Notre vision : transformer Goma en un hub d'innovation technologique qui rayonne sur toute l'Afrique centrale."
                  </p>
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-full flex items-center justify-center shrink-0"
                      style={{ background: 'rgba(139,26,26,0.5)', border: '1.5px solid rgba(139,26,26,0.4)' }}>
                      <span className="font-heading font-black text-white text-[10px]">JP</span>
                    </div>
                    <div>
                      <p className="font-heading font-bold text-white text-[11px]">Jean-Pierre Nkurunziza</p>
                      <p className="font-mono text-primary text-[8px] uppercase tracking-[0.14em] mt-0.5">Fondateur & DG</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Text side */}
            <motion.div
              initial={{ x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <p className="label-tag">Notre mission</p>
              <h2 className="display-md text-ink mt-2 mb-5">
                Démocratiser la technologie en RDC
              </h2>
              <p className="text-muted leading-relaxed text-[15px] mb-4">
                Ultra Tech Solutions est née d'une conviction : les populations africaines méritent d'accéder
                aux meilleures technologies et à une expertise de qualité internationale. Fondée à Goma en 2019,
                notre entreprise s'est imposée comme le partenaire technologique de référence dans la région des Grands Lacs.
              </p>
              <p className="text-muted leading-relaxed text-[15px] mb-7">
                De la formation des jeunes en robotique à l'installation de systèmes solaires pour les entreprises,
                chaque projet porte notre engagement : faire de Goma un hub technologique pour l'Afrique centrale.
              </p>
              <div className="space-y-3">
                {['Fondée en 2019 à Goma, Nord-Kivu', '100+ projets réalisés dans la région', 'Équipe de 12 techniciens certifiés'].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle2 size={15} className="text-primary shrink-0" />
                    <span className="text-muted text-[13.5px]">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section section-surface">
        <div className="container-custom">
          <motion.div initial={{ y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
            <p className="label-tag justify-center">Ce qui nous guide</p>
            <h2 className="display-lg text-ink mt-1">Nos Valeurs</h2>
          </motion.div>
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
          >
            {values.map((v) => {
              const Icon = v.icon
              return (
                <motion.div key={v.title} variants={staggerItem}
                  className="card p-6 text-center group hover:shadow-card-hover hover:-translate-y-1.5 transition-all duration-300">
                  <div className="w-12 h-12 rounded-2xl flex items-center justify-center mx-auto mb-4 transition-all duration-300 group-hover:bg-primary"
                    style={{ background: 'rgba(139,26,26,0.08)' }}>
                    <Icon size={22} className="text-primary group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="font-heading font-bold text-ink text-[15px] mb-2.5 group-hover:text-primary transition-colors duration-300">{v.title}</h3>
                  <p className="text-muted text-[13px] leading-relaxed">{v.desc}</p>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>

      <TeamGrid />
      <ProjectsGallery limit={4} showFilter={false} title="Quelques Réalisations" />
      <CertBadges />
      <CTAStrip
        title="Rejoignez la révolution tech à Goma"
        subtitle="Faites confiance à une équipe d'experts passionnés pour concrétiser vos projets technologiques."
      />
    </motion.div>
  )
}
