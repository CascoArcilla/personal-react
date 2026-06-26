import { motion } from 'framer-motion'

export default function SkillBadge({ name, icon: Icon }) {
  return (
    <motion.div
      className="group flex flex-col items-center gap-2 p-4 rounded-xl bg-surface dark:bg-white/5 border border-gray-200 dark:border-white/10 hover:bg-primary/5 dark:hover:bg-primary/10 hover:border-primary/30 dark:hover:border-primary/40 transition-colors"
      whileHover={{ y: -4, scale: 1.02 }}
      transition={{ type: 'spring', stiffness: 300 }}
    >
      <Icon className="w-8 h-8 text-primary" />
      <span className="text-sm font-medium text-text dark:text-text text-center">{name}</span>
    </motion.div>
  )
}
