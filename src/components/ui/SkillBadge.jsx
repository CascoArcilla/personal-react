import { motion } from 'framer-motion'

export default function SkillBadge({ name, icon: Icon, level, learning }) {
  return (
    <motion.div
      className="group flex flex-col items-center gap-2 p-4 rounded-xl bg-surface dark:bg-white/5 border border-gray-200 dark:border-white/10 hover:border-primary/30 dark:hover:border-primary/40 transition-colors"
      whileHover={{ y: -4, scale: 1.02 }}
      transition={{ type: 'spring', stiffness: 300 }}
    >
      <Icon className={`w-8 h-8 ${learning ? 'text-accent' : 'text-primary'}`} />
      <span className="text-sm font-medium text-text dark:text-text text-center">{name}</span>
      {learning && (
        <span className="text-[10px] font-semibold text-accent bg-accent/10 px-2 py-0.5 rounded-full">
          Aprendiendo
        </span>
      )}
      <div className="w-full h-1.5 bg-gray-200 dark:bg-white/10 rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-primary rounded-full"
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2, ease: 'easeOut' }}
        />
      </div>
    </motion.div>
  )
}
