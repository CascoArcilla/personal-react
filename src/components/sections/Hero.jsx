import { motion } from "framer-motion";
import { HiArrowDown } from "react-icons/hi";

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center px-6 pt-16"
    >
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-primary font-mono text-sm tracking-widest uppercase mb-4">
            Hola, mi nombre es
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-text dark:text-text mb-4">
            Norberto Montalvo
          </h1>
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-text-muted dark:text-text-muted mb-6">
            Ingeniero en Sistemas Computacionales
          </h2>
          <p className="max-w-xl mx-auto text-text-muted dark:text-text-muted text-lg mb-8">
            Enfocado en el desarrollo de software y soluciones web, gestionando
            proyectos bajo metodologías ágiles
          </p>
          <motion.a
            href="#projects"
            className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-white rounded-full font-medium hover:bg-primary-dark transition-colors shadow-lg shadow-primary/25"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Ver proyectos
          </motion.a>
        </motion.div>

        <motion.div
          className="mt-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          <motion.a
            href="#about"
            className="inline-flex flex-col items-center gap-2 text-text-muted dark:text-text-muted"
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          >
            <span className="text-sm">Conoce más</span>
            <HiArrowDown className="w-5 h-5" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
