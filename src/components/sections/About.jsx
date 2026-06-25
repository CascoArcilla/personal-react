import { motion } from 'framer-motion'
import SectionTitle from '../ui/SectionTitle'

export default function About() {
  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <SectionTitle subtitle="Sobre mí" title="Conoce un poco de mi historia" />

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="w-64 h-64 md:w-80 md:h-80 mx-auto rounded-2xl bg-gradient-to-br from-primary to-accent p-1">
              <div className="w-full h-full rounded-2xl bg-surface dark:bg-surface flex items-center justify-center">
                <span className="text-6xl">👨‍💻</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-text-muted dark:text-text-muted space-y-4"
          >
            <p>
              Soy un desarrollador frontend apasionado por crear interfaces modernas, 
              accesibles y con buen rendimiento. Me encanta transformar ideas en 
              experiencias digitales funcionales y atractivas.
            </p>
            <p>
              Actualmente me encuentro profundizando en TypeScript, explorando el 
              ecosistema de Prisma y bases de datos relacionales, y construyendo 
              proyectos personales para seguir aprendiendo.
            </p>
            <p>
              Cuando no estoy codeando, me gusta explorar nuevas tecnologías, 
              contribuir a proyectos open source y compartir conocimiento con 
              la comunidad.
            </p>
            <div className="flex flex-wrap gap-3 pt-4">
              {['Creatividad', 'Responsabilidad', 'Trabajo en equipo', 'Aprendizaje continuo'].map(trait => (
                <span
                  key={trait}
                  className="px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary dark:text-primary-light"
                >
                  {trait}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
