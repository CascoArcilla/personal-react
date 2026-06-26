import { motion } from 'framer-motion'
import SectionTitle from '../ui/SectionTitle'
import SkillBadge from '../ui/SkillBadge'
import { skillCategories } from '../../data/skills'

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-6 bg-surface-alt dark:bg-surface-alt">
      <div className="max-w-6xl mx-auto">
        <SectionTitle subtitle="Conocimientos" title="Tecnologías y herramientas" />

        <div className="space-y-12">
          {skillCategories.map((category, catIdx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: catIdx * 0.1 }}
            >
              <h3 className="text-lg font-semibold text-text dark:text-text mb-4 flex items-center gap-2">
                {category.title}
                {category.title === 'Aprendiendo' && (
                  <span className="text-xs bg-accent/10 text-accent px-2 py-0.5 rounded-full">
                    En curso
                  </span>
                )}
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
                {category.skills.map((skill, i) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: i * 0.05 }}
                  >
                    <SkillBadge {...skill} />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
