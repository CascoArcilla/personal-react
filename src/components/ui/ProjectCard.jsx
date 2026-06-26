import { motion } from "framer-motion";
import { HiExternalLink, HiCode } from "react-icons/hi";
import LazyImage from "./LazyImage";

const statusConfig = {
  completado: { label: "Completado", class: "bg-success/10 text-success" },
  "en-progreso": { label: "En progreso", class: "bg-warning/10 text-warning" },
};

export default function ProjectCard({ project, index }) {
  const status = statusConfig[project.status];

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="group rounded-xl bg-surface dark:bg-white/5 border border-gray-200 dark:border-white/10 overflow-hidden hover:border-primary/30 dark:hover:border-primary/40 transition-all"
    >
      {project.image ? (
        <div className="h-44 overflow-hidden">
          <LazyImage
            src={project.image}
            alt={project.title}
            className="w-full h-full"
          />
        </div>
      ) : project.video ? (
        <div className="h-44">
          <iframe
            src={project.video}
            title={project.title}
            className="w-full h-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            loading="lazy"
          />
        </div>
      ) : (
        <div className="h-44 bg-gradient-to-br from-primary/5 to-accent/5 dark:from-primary/10 dark:to-accent/10 flex items-center justify-center">
          <div className="w-16 h-16 rounded-xl bg-primary/10 dark:bg-primary/20 flex items-center justify-center">
            <HiCode className="w-8 h-8 text-primary" />
          </div>
        </div>
      )}

      <div className="p-5">
        <div className="flex items-center gap-2 mb-2">
          <span
            className={`text-[11px] font-semibold px-2 py-0.5 rounded-full ${status.class}`}
          >
            {status.label}
          </span>
        </div>

        <h3 className="text-lg font-semibold text-text dark:text-text mb-2">
          {project.title}
        </h3>
        <p className="text-sm text-text-muted dark:text-text-muted mb-4 line-clamp-2">
          {project.description}
        </p>

        {project.tech && (
          <div className="flex flex-wrap gap-1.5 mb-4">
            {project.tech.filter(Boolean).map((t) => (
              <span
                key={t}
                className="text-[11px] px-2 py-0.5 rounded bg-gray-100 dark:bg-white/5 text-text-muted dark:text-text-muted"
              >
                {t}
              </span>
            ))}
          </div>
        )}

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
              className="flex items-center gap-1 text-sm font-medium text-text-muted dark:text-text-muted hover:text-primary transition-colors"
            >
              <HiCode className="w-4 h-4" />
              Código
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
}
