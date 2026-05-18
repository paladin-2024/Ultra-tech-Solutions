import { useParams, Link, Navigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft, Clock, Calendar, User, ArrowRight } from 'lucide-react'
import { pageTransition } from '@/lib/animations'
import { blogPosts } from '@/data/blog'
import CTAStrip from '@/components/sections/CTAStrip'

function formatDate(str) {
  return new Date(str).toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' })
}

export default function BlogPost() {
  const { slug } = useParams()
  const post = blogPosts.find(p => p.slug === slug)
  const others = blogPosts.filter(p => p.slug !== slug).slice(0, 2)

  if (!post) return <Navigate to="/blog" replace />

  return (
    <motion.div {...pageTransition}>
      {/* Hero */}
      <section className="relative overflow-hidden" style={{ minHeight: '480px' }}>
        <img
          src={post.image}
          alt={post.title}
          className="absolute inset-0 w-full h-full object-cover"
          style={{ filter: 'brightness(0.30)' }}
          loading="eager"
        />
        <div className="absolute inset-0"
          style={{ background: 'linear-gradient(110deg, rgba(0,0,0,0.92) 0%, rgba(0,0,0,0.60) 60%, rgba(0,0,0,0.30) 100%)' }} />
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse 50% 60% at 0% 60%, rgba(139,26,26,0.16) 0%, transparent 65%)' }} />

        <div className="container-custom relative z-10 pt-36 pb-16">
          <Link to="/blog"
            className="inline-flex items-center gap-2 mb-8 font-mono text-[10px] uppercase tracking-[0.18em] transition-colors duration-200"
            style={{ color: 'rgba(255,255,255,0.55)' }}
            onMouseEnter={e => e.currentTarget.style.color = 'rgba(255,255,255,0.90)'}
            onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.55)'}>
            <ArrowLeft size={13} /> Retour au blog
          </Link>

          <span className="inline-block font-mono text-[9px] uppercase tracking-[0.2em] text-white px-3 py-1.5 rounded-full mb-5"
            style={{ background: 'rgba(139,26,26,0.85)' }}>
            {post.category}
          </span>

          <h1 className="font-heading font-black text-white mb-6 leading-[1.05] max-w-3xl"
            style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)', letterSpacing: '-0.035em' }}>
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center gap-5">
            <div className="flex items-center gap-2">
              <User size={13} style={{ color: 'rgba(255,255,255,0.55)' }} />
              <span className="font-mono text-[11px]" style={{ color: 'rgba(255,255,255,0.65)' }}>
                {post.author} · {post.authorRole}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar size={13} style={{ color: 'rgba(255,255,255,0.55)' }} />
              <span className="font-mono text-[11px]" style={{ color: 'rgba(255,255,255,0.65)' }}>
                {formatDate(post.date)}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Clock size={13} style={{ color: 'rgba(255,255,255,0.55)' }} />
              <span className="font-mono text-[11px]" style={{ color: 'rgba(255,255,255,0.65)' }}>
                {post.readTime} de lecture
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Article */}
      <section className="section section-white">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto">
            {post.content.split('\n\n').map((para, i) => (
              <motion.p
                key={i}
                initial={{ y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04 }}
                className="text-ink/80 text-[16px] leading-[1.85] mb-6"
              >
                {para}
              </motion.p>
            ))}

            {/* CTA inline */}
            <motion.div
              initial={{ y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-12 p-7 rounded-2xl"
              style={{ background: 'rgba(139,26,26,0.05)', border: '1px solid rgba(139,26,26,0.12)' }}
            >
              <p className="font-heading font-bold text-ink text-[16px] mb-2" style={{ letterSpacing: '-0.02em' }}>
                Intéressé par ce service ?
              </p>
              <p className="text-muted text-[14px] mb-4">
                Contactez notre équipe pour un devis sans engagement.
              </p>
              <Link to="/contact" className="btn-primary gap-2 group">
                Demander un devis <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Related posts */}
      {others.length > 0 && (
        <section className="section section-surface">
          <div className="container-custom">
            <h2 className="display-md text-ink mb-10">Articles similaires</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {others.map((p, i) => (
                <motion.div
                  key={p.id}
                  initial={{ y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Link to={`/blog/${p.slug}`} className="group flex gap-4 card p-4 hover:shadow-card-hover hover:-translate-y-0.5 transition-all duration-300">
                    <div className="relative w-28 h-20 rounded-xl overflow-hidden shrink-0">
                      <img src={p.image} alt={p.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <span className="font-mono text-[8.5px] uppercase tracking-[0.14em] text-primary">{p.category}</span>
                      <h3 className="font-heading font-bold text-ink text-[13px] leading-snug mt-1 group-hover:text-primary transition-colors"
                        style={{ letterSpacing: '-0.01em' }}>{p.title}</h3>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      <CTAStrip
        title="Votre projet mérite les meilleurs experts"
        subtitle="Réponse sous 24h, intervention rapide à Goma et en région."
      />
    </motion.div>
  )
}
