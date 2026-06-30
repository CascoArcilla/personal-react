import SectionTitle from '../ui/SectionTitle'
import CertificationCard from '../ui/CertificationCard'
import { certifications } from '../../data/certifications'

export default function Certifications() {
  return (
    <section id="certifications" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <SectionTitle subtitle="Formación" title="Algunas Certificaciones" />

        <div className="grid sm:grid-cols-2 gap-4">
          {certifications.map((cert, i) => (
            <CertificationCard key={cert.id} cert={cert} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
