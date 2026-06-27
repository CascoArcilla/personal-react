import SectionTitle from '../ui/SectionTitle'
import ExperienceItem from '../ui/ExperienceItem'
import { experience } from '../../data/experience'

export default function Experience() {
  return (
    <section id="experience" className="py-20 px-6 bg-surface-alt dark:bg-surface-alt">
      <div className="max-w-4xl mx-auto">
        <SectionTitle subtitle="Trayectoria" title="Experiencia" />

        <div className="space-y-10">
          {experience.map((item, i) => (
            <ExperienceItem key={item.id} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
