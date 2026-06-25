import { motion } from 'framer-motion'
import { HiExternalLink, HiCode } from 'react-icons/hi'
import SectionTitle from '../ui/SectionTitle'
import { projects } from '../../data/projects'

const statusConfig = {
  completed: { label: 'Completado', class: 'bg-success/10 text-success' },
  'in-progress': { label: 'En progreso', class: 'bg-warning/10 text-warning' },
}

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionTitle subtitle="Proyectos" title="Lo que he creado" />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => {
            const status = statusConfig[project.status]
            return (
              <motion.article
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="group rounded-xl bg-surface dark:bg-white/5 border border-gray-200 dark:border-white/10 overflow-hidden hover:border-primary/30 dark:hover:border-primary/40 transition-all"
              >
                {/* Image placeholder */}
                <div className="h-44 bg-gradient-to-br from-primary/5 to-accent/5 dark:from-primary/10 dark:to-accent/10 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-xl bg-primary/10 dark:bg-primary/20 flex items-center justify-center">
                    <HiCode className="w-8 h-8 text-primary" />
                  </div>
                </div>

                <div className="p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <span className={`text-[11px] font-semibold px-2 py-0.5 rounded-full ${status.class}`}>
                      {status.label}
                    </span>
                  </div>

                  <h3 className="text-lg font-semibold text-text dark:text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-sm text-text-muted dark:text-gray-400 mb-4 line-clamp-2">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.tech.map(t => (
                      <span
                        key={t}
                        className="text-[11px] px-2 py-0.5 rounded bg-gray-100 dark:bg-white/5 text-text-muted dark:text-gray-400"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-3">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 text-sm font-medium text-primary hover:text-primary-light transition-colors"
                      >
                        <HiExternalLink className="w-4 h-4" />
                        Demo
                      </a>
                    )}
                    {project.repoUrl && (
                      <a
                        href={project.repoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 text-sm font-medium text-text-muted dark:text-gray-400 hover:text-primary transition-colors"
                      >
                        <HiCode className="w-4 h-4" />
                        Código
                      </a>
                    )}
                  </div>
                </div>
              </motion.article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
