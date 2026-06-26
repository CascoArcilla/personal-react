import { motion } from "framer-motion";
import { HiMail } from "react-icons/hi";
import { FaGithub } from "react-icons/fa";
import SectionTitle from "../ui/SectionTitle";

const contactLinks = [
  { icon: FaGithub, label: "GitHub", href: "https://github.com/CascoArcilla" },
  { icon: HiMail, label: "Email", href: "mailto:normon1230@gmail.com" },
];

export default function ContactInfo() {
  return (
    <section
      id="contact"
      className="py-20 px-6 bg-surface-alt dark:bg-surface-alt"
    >
      <div className="max-w-4xl mx-auto text-center">
        <SectionTitle subtitle="Contacto" title="Hablemos" />

        <motion.p
          className="text-text-muted dark:text-text-muted text-lg mb-10 max-w-lg mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          ¿Tienes un proyecto en mente o simplemente quieres conectar? ¡Estoy
          abierto a nuevas oportunidades!
        </motion.p>

        <motion.div
          className="flex flex-wrap justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {contactLinks.map((link) => {
            const Icon = link.icon;
            return (
              <motion.a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-6 py-3 rounded-xl bg-surface dark:bg-white/5 border border-gray-200 dark:border-white/10 hover:border-primary/30 dark:hover:border-primary/40 transition-colors text-text dark:text-text font-medium"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Icon className="w-5 h-5 text-primary" />
                {link.label}
              </motion.a>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
