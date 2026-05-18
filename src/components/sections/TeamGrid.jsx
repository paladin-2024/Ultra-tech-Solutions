import { motion } from 'framer-motion'
import { staggerContainer, staggerItem } from '@/lib/animations'
import { team } from '@/data/team'

export default function TeamGrid() {
  return (
    <section className="section section-white">
      <div className="container-custom">
        <motion.div
          initial={{ y: 20 }}
          whileInView={{ y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14"
        >
          <div>
            <p className="label-tag">L'équipe</p>
            <h2 className="display-lg text-ink mt-1">Des Experts Passionnés</h2>
          </div>
          <p className="text-muted text-[14.5px] leading-relaxed sm:text-right max-w-xs">
            Ingénieurs, formateurs et gestionnaires dédiés à votre réussite.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {team.map((member) => (
            <motion.div
              key={member.id}
              variants={staggerItem}
              className="card group overflow-hidden hover:shadow-card-hover hover:-translate-y-1.5 transition-all duration-300"
            >
              <div className="relative overflow-hidden h-60 bg-surface">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-600"
                  style={{ objectPosition: member.objectPosition ?? 'center top' }}
                  loading="lazy"
                />
              </div>
              <div className="p-5">
                <h3 className="font-heading font-bold text-ink text-[15px] group-hover:text-primary transition-colors duration-200"
                  style={{ letterSpacing: '-0.02em' }}>
                  {member.name}
                </h3>
                <p className="text-primary font-mono text-[10px] uppercase tracking-wider mt-0.5 mb-3">
                  {member.role}
                </p>
                <p className="text-muted text-[12.5px] leading-relaxed mb-4">{member.bio}</p>
                <div className="flex flex-wrap gap-1.5">
                  {member.specialties.map((s) => (
                    <span key={s} className="badge text-[9.5px]">{s}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
