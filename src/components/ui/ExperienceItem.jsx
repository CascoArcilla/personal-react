import { motion } from 'framer-motion'

export default function ExperienceItem({ item, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="relative pl-8 border-l-2 border-primary/30 dark:border-primary/20"
    >
      <div className="absolute left-0 top-1 -translate-x-1/2 w-3 h-3 rounded-full bg-primary" />

      <div className="mb-1 flex items-center gap-3 flex-wrap">
        <span className="text-xs font-mono text-primary dark:text-primary-light font-medium">
          {item.period}
        </span>
      </div>

      <h3 className="text-lg font-semibold text-text dark:text-text">
        {item.title}
      </h3>

      <p className="text-sm font-medium text-text-muted dark:text-text-muted mb-2">
        {item.role}
      </p>

      <p className="text-sm text-text-muted dark:text-text-muted mb-3 leading-relaxed">
        {item.description}
      </p>

      {item.skills && (
        <div className="flex flex-wrap gap-1.5">
          {item.skills.map((skill) => (
            <span
              key={skill}
              className="text-[11px] px-2 py-0.5 rounded bg-primary/10 dark:bg-primary/20 text-primary dark:text-primary-light font-medium"
            >
              {skill}
            </span>
          ))}
        </div>
      )}
    </motion.div>
  )
}
