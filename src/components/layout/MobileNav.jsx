import { HiHome, HiUser, HiCode, HiFolderOpen, HiMail } from 'react-icons/hi'

const links = [
  { href: '#hero', icon: HiHome, label: 'Inicio' },
  { href: '#about', icon: HiUser, label: 'Yo' },
  { href: '#skills', icon: HiCode, label: 'Skills' },
  { href: '#projects', icon: HiFolderOpen, label: 'Proyectos' },
  { href: '#contact', icon: HiMail, label: 'Contacto' },
]

export default function MobileNav() {
  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-surface/90 dark:bg-surface/90 backdrop-blur-md border-t border-black/10 dark:border-white/10 safe-area-bottom">
      <div className="flex items-center justify-around h-16 px-2">
        {links.map(link => {
          const Icon = link.icon
          return (
            <a
              key={link.href}
              href={link.href}
              className="flex flex-col items-center gap-0.5 px-3 py-1.5 rounded-lg text-text-muted dark:text-text-muted hover:text-primary dark:hover:text-primary-light transition-colors active:scale-95"
            >
              <Icon className="w-5 h-5" />
              <span className="text-[10px] font-medium">{link.label}</span>
            </a>
          )
        })}
      </div>
    </nav>
  )
}
