export default function Footer() {
  return (
    <footer className="py-8 border-t border-gray-200 dark:border-white/10">
      <div className="max-w-6xl mx-auto px-6 text-center text-sm text-text-muted dark:text-gray-400">
        <p>&copy; {new Date().getFullYear()} Rasel. Todos los derechos reservados.</p>
        <p className="mt-1">Hecho con React, TailwindCSS y Framer Motion</p>
      </div>
    </footer>
  )
}
