import { HiSun, HiMoon } from "react-icons/hi";
import { useTheme } from "../../context/ThemeContext";
import { navLinks } from "../../data/navLinks";

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();

  return (
    <>
      {/* Desktop */}
      <nav className="hidden md:flex fixed top-0 left-0 right-0 z-40 bg-surface/80 dark:bg-surface/80 backdrop-blur-md border-b border-black/10 dark:border-white/10">
        <div className="max-w-6xl mx-auto w-full px-6 h-16 flex items-center justify-between">
          <a href="#hero" className="text-xl font-bold text-primary">
            Norberto
          </a>
          <div className="flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm p-2 rounded text-text-muted dark:text-text-muted hover:text-text hover:bg-primary dark:hover:bg-primary dark:hover:text-text transition-colors"
              >
                {link.label}
              </a>
            ))}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-surface-alt dark:bg-white/10 hover:bg-gray-200 dark:hover:bg-white/20 transition-colors"
              aria-label="Cambiar tema"
            >
              {theme === "dark" ? (
                <HiSun className="w-4 h-4 text-yellow-400" />
              ) : (
                <HiMoon className="w-4 h-4 text-primary" />
              )}
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}
