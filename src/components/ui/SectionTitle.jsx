import { motion } from 'framer-motion'

export default function SectionTitle({ subtitle, title, align = 'center' }) {
  return (
    <motion.div
      className={`mb-12 ${align === 'center' ? 'text-center' : ''}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <p className="text-primary-light dark:text-primary font-mono text-sm tracking-widest uppercase mb-2">
        {subtitle}
      </p>
      <h2 className="text-3xl md:text-4xl font-bold text-text dark:text-text">
        {title}
      </h2>
      <div className={`mt-4 h-1 w-16 bg-primary rounded-full ${align === 'center' ? 'mx-auto' : ''}`} />
    </motion.div>
  )
}
