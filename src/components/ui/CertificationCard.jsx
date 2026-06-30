import { motion } from 'framer-motion'
import { HiBadgeCheck } from 'react-icons/hi'

const statusConfig = {
  completado: { label: 'Completado', class: 'bg-success/10 text-success' },
  'en-progreso': { label: 'En progreso', class: 'bg-warning/10 text-warning' },
}

export default function CertificationCard({ cert, index }) {
  const status = statusConfig[cert.status]
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      className="flex items-start gap-4 p-4 rounded-xl bg-surface dark:bg-white/5 border border-gray-200 dark:border-white/10 hover:bg-primary/5 dark:hover:bg-primary/10 hover:border-primary/30 dark:hover:border-primary/40 transition-colors"
    >
      <HiBadgeCheck className="w-6 h-6 mt-0.5 shrink-0 text-primary" />
      <div className="min-w-0">
        <h3 className="text-sm font-semibold text-text dark:text-text">
          {cert.title}
        </h3>
        <p className="text-xs text-text-muted dark:text-text-muted mt-0.5">
          {cert.issuer}
        </p>
        {status && (
          <span className={`inline-block mt-1.5 text-[10px] font-semibold px-2 py-0.5 rounded-full ${status.class}`}>
            {status.label}
          </span>
        )}
      </div>
    </motion.div>
  )
}
