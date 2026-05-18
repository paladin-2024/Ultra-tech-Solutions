import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, Clock, ArrowUpRight } from 'lucide-react'
import { pageTransition } from '@/lib/animations'
import { blogPosts, blogCategories } from '@/data/blog'
import CTAStrip from '@/components/sections/CTAStrip'

function formatDate(str) {
  return new Date(str).toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' })
}

export default function Blog() {
  const [cat, setCat] = useState('Tous')
  const posts = cat === 'Tous' ? blogPosts : blogPosts.filter(p => p.category === cat)

  return (
    <motion.div {...pageTransition}>
      {/* Hero */}
      <section className="relative overflow-hidden" style={{ minHeight: '380px' }}>
        <img
          src="/images/robotics-lab.jpg"
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
          style={{ filter: 'brightness(0.28)' }}
          loading="eager"
        />
        <div className="absolute inset-0"
          style={{ background: 'linear-gradient(110deg, rgba(0,0,0,0.92) 0%, rgba(0,0,0,0.55) 60%, rgba(0,0,0,0.22) 100%)' }} />
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse 50% 60% at 0% 60%, rgba(139,26,26,0.16) 0%, transparent 65%)' }} />

        <div className="container-custom relative z-10 pt-36 pb-20">
          <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
            style={{ color: 'rgba(255,255,255,0.60)', fontFamily: 'DM Mono, monospace', fontSize: '9px', textTransform: 'uppercase', letterSpacing: '0.24em', marginBottom: '16px' }}>
            — Expertises & actualités
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="font-heading font-black text-white mb-5 leading-[1.0]"
            style={{ fontSize: 'clamp(2.4rem, 5vw, 4rem)', letterSpacing: '-0.04em' }}>
            Le Blog <span style={{ color: '#8B1A1A' }}>UTS</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
            className="max-w-xl text-base sm:text-[17px] leading-relaxed"
            style={{ color: 'rgba(255,255,255,0.72)' }}>
            Conseils, actualités tech et retours d'expérience de nos experts sur le terrain.
          </motion.p>
        </div>
      </section>

      <section className="section section-white">
        <div className="container-custom">
          {/* Category filter */}
          <div className="flex flex-wrap gap-2 mb-10">
            {blogCategories.map((c) => (
              <button
                key={c}
                onClick={() => setCat(c)}
                className="px-4 py-2 rounded-full font-mono text-[10px] uppercase tracking-[0.14em] transition-all duration-200"
                style={{
                  background: cat === c ? '#8B1A1A' : 'rgba(0,0,0,0.04)',
                  color: cat === c ? '#fff' : 'rgba(0,0,0,0.55)',
                  border: cat === c ? '1px solid transparent' : '1px solid rgba(0,0,0,0.08)',
                  boxShadow: cat === c ? '0 4px 16px rgba(139,26,26,0.30)' : 'none',
                }}
              >
                {c}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
            {posts.map((post, i) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.07, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              >
                <Link to={`/blog/${post.slug}`} className="group block card overflow-hidden hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300">
                  <div className="relative overflow-hidden" style={{ aspectRatio: '16/9' }}>
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                    <div className="absolute top-0 left-0 h-[2.5px] w-0 group-hover:w-full transition-all duration-500"
                      style={{ background: 'linear-gradient(90deg, #8B1A1A, rgba(139,26,26,0.3))' }} />
                    <span className="absolute top-4 left-4 font-mono text-[9px] uppercase tracking-[0.14em] text-white px-3 py-1.5 rounded-full"
                      style={{ background: 'rgba(139,26,26,0.85)' }}>
                      {post.category}
                    </span>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <Clock size={11} className="text-muted" />
                      <span className="text-muted text-[11px] font-mono">{post.readTime} de lecture</span>
                      <span className="text-muted/40 text-[11px]">·</span>
                      <span className="text-muted text-[11px]">{formatDate(post.date)}</span>
                    </div>
                    <h2 className="font-heading font-bold text-ink mb-3 group-hover:text-primary transition-colors duration-200 leading-snug"
                      style={{ fontSize: 'clamp(1rem, 1.5vw, 1.15rem)', letterSpacing: '-0.02em' }}>
                      {post.title}
                    </h2>
                    <p className="text-muted text-[13.5px] leading-relaxed mb-4">{post.excerpt}</p>
                    <div className="flex items-center gap-1.5 text-primary font-semibold text-[13px] group-hover:gap-2.5 transition-all duration-200">
                      Lire l'article <ArrowRight size={13} />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTAStrip
        title="Besoin d'un expert sur votre projet ?"
        subtitle="Nos techniciens répondent sous 24h. Devis sans engagement."
      />
    </motion.div>
  )
}
