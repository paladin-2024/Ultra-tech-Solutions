import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, Clock, ArrowUpRight } from 'lucide-react'
import { blogPosts } from '@/data/blog'

const featured = blogPosts.find(p => p.featured)
const secondary = blogPosts.filter(p => !p.featured).slice(0, 2)

function formatDate(str) {
  return new Date(str).toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' })
}

export default function BlogPreview() {
  return (
    <section className="section section-white">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ y: 20 }}
          animate={{ y: 0 }}
          className="flex flex-col sm:flex-row sm:items-end justify-between gap-5 mb-12"
        >
          <div>
            <p className="label-tag">Nos actualités</p>
            <h2 className="display-md text-ink mt-1">Le Blog UTS</h2>
          </div>
          <Link to="/blog"
            className="inline-flex items-center gap-2 text-primary font-semibold text-sm hover:gap-3 transition-all duration-200">
            Tous les articles <ArrowRight size={14} />
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-5">
          {/* Featured post */}
          {featured && (
            <motion.div
              initial={{ y: 24 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-3"
            >
              <Link to={`/blog/${featured.slug}`} className="group block h-full">
                <div className="relative rounded-2xl overflow-hidden mb-5" style={{ aspectRatio: '16/10' }}>
                  <img
                    src={featured.image}
                    alt={featured.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent" />
                  {/* Top line on hover */}
                  <div className="absolute top-0 left-0 h-[2.5px] w-0 group-hover:w-full transition-all duration-500"
                    style={{ background: 'linear-gradient(90deg, #8B1A1A, rgba(139,26,26,0.3))' }} />
                  <span className="absolute top-4 left-4 font-mono text-[9px] uppercase tracking-[0.16em] text-white px-3 py-1.5 rounded-full"
                    style={{ background: 'rgba(139,26,26,0.85)' }}>
                    {featured.category}
                  </span>
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <h3 className="font-heading font-black text-white leading-snug group-hover:text-white/90 transition-colors"
                      style={{ fontSize: 'clamp(1rem, 1.8vw, 1.3rem)', letterSpacing: '-0.025em' }}>
                      {featured.title}
                    </h3>
                  </div>
                </div>
                <div className="flex items-center gap-3 mb-3">
                  <Clock size={12} className="text-muted shrink-0" />
                  <span className="text-muted text-[12px] font-mono">{featured.readTime} de lecture</span>
                  <span className="text-muted/40 text-[12px]">·</span>
                  <span className="text-muted text-[12px]">{formatDate(featured.date)}</span>
                </div>
                <p className="text-muted text-[14px] leading-relaxed">{featured.excerpt}</p>
              </Link>
            </motion.div>
          )}

          {/* Secondary posts */}
          <div className="lg:col-span-2 flex flex-col gap-5">
            {secondary.map((post, i) => (
              <motion.div
                key={post.id}
                initial={{ y: 24 }}
                animate={{ y: 0 }}
                transition={{ delay: 0.1 + i * 0.1, duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
              >
                <Link to={`/blog/${post.slug}`} className="group flex gap-4 items-start card p-4 hover:shadow-card-hover hover:-translate-y-0.5 transition-all duration-300">
                  <div className="relative w-24 h-20 rounded-xl overflow-hidden shrink-0">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className="inline-block font-mono text-[8.5px] uppercase tracking-[0.14em] text-primary mb-1.5">
                      {post.category}
                    </span>
                    <h3 className="font-heading font-bold text-ink text-[13px] leading-snug mb-1.5 group-hover:text-primary transition-colors duration-200"
                      style={{ letterSpacing: '-0.01em' }}>
                      {post.title}
                    </h3>
                    <div className="flex items-center gap-1.5">
                      <Clock size={10} className="text-muted" />
                      <span className="text-muted text-[11px] font-mono">{post.readTime}</span>
                    </div>
                  </div>
                  <ArrowUpRight size={14} className="text-muted group-hover:text-primary shrink-0 mt-0.5 transition-colors duration-200" />
                </Link>
              </motion.div>
            ))}

            <motion.div
              initial={{ opacity: 1 }}
              animate={{}}
              transition={{ delay: 0.35 }}
            >
              <Link to="/blog"
                className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl font-semibold text-[13px] text-primary transition-all duration-200 hover:bg-red-50"
                style={{ border: '1px solid rgba(139,26,26,0.15)' }}>
                Voir tous les articles <ArrowRight size={13} />
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
