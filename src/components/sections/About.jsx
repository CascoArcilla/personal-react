import { motion } from "framer-motion";
import SectionTitle from "../ui/SectionTitle";
import presentationImg from "../../assets/images/presentation.webp";

export default function About() {
  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <SectionTitle
          subtitle="Sobre mí"
          title="Conoce un poco de mi historia"
        />

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="w-64 h-64 md:w-80 md:h-80 mx-auto rounded-2xl bg-gradient-to-br from-primary to-accent p-1">
              <div className="w-full h-full rounded-2xl bg-surface dark:bg-surface overflow-hidden">
                <img
                  src={presentationImg}
                  alt="Norberto Montalvo"
                  className="w-full h-full object-cover object-top"
                />
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
              Soy Ingeniero en Sistemas Computacionales, enfocado en el
              desarrollo de software y soluciones web. Tengo experiencia creando
              aplicaciones con Django y React, combinando el backend y frontend
              para entregar productos funcionales y bien estructurados.
            </p>
            <p>
              He participado en el desarrollo de proyectos que van desde de
              páginas y sitios web, hasta sistemas para recolección de datos
              sensoriales, pasando por arquitecturas backend con Django y
              Docker. Aplico metodologías ágiles como Scrum para garantizar
              entregas continuas.
            </p>
            <p>
              Actualmente me encuentro mejorando mis habilidades con Linux,
              aprendiendo sobre el ecosistema de .NET, arquitecturas limpias y
              comprendiendo las bases del desarrollo con IA. Disfruto trabajar
              en equipo y compartir conocimientos.
            </p>
            <div className="flex flex-wrap gap-3 pt-4">
              {[
                "Trabajo en equipo",
                "Liderazgo técnico",
                "Metodologías ágiles",
                "Aprendizaje continuo",
              ].map((trait) => (
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
  );
}
