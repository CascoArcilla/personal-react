# Project Guide for AI Agents

## Project Overview

Portfolio personal de Norberto Montalvo (Ingeniero en Sistemas Computacionales). Single-page application construida con React 19, Vite 8 y Tailwind CSS v4.

## Stack Principal

- **Framework:** React 19 + JSX (`.jsx`)
- **Build:** Vite 8
- **CSS:** Tailwind CSS v4 (via `@tailwindcss/vite` plugin, sin `tailwind.config.js`)
- **Animaciones:** Framer Motion 12
- **Iconos:** react-icons
- **Linter:** oxlint (sin ESLint)
- **Package Manager:** pnpm
- **TypeScript:** No se usa aún; solo tipos instalados como devDeps

## Commands

```bash
pnpm dev        # Desarrollo
pnpm build      # Build producción
pnpm preview    # Preview build
pnpm lint       # Linter (oxlint)
```

## Estructura de Archivos

- `/src/App.jsx` - Componente raíz
- `/src/main.jsx` - Entry point
- `/src/components/layout/` - Layout: Navbar, MobileNav, Footer, Layout wrapper
- `/src/components/sections/` - Secciones: Hero, About, Skills, Projects, ContactInfo
- `/src/components/ui/` - UI reutilizable: ThemeToggle, SectionTitle, SkillBadge, LazyImage
- `/src/context/ThemeContext.jsx` - Contexto de tema oscuro/claro
- `/src/data/` - Datos estáticos: projects.js, skills.js
- `/src/hooks/useScrollReveal.js` - Hook personalizado
- `/src/index.css` - Global styles + Tailwind entry + `@theme` tokens

## Convenciones de Código

### Componentes
- `export default function ComponentName()` - todos los componentes
- Sin PropTypes ni TypeScript
- Nombres en PascalCase para componentes
- Composición con `{children}` en Layout

### Animaciones
- Usar `framer-motion` (`motion.div`, `motion.a`, `AnimatePresence`)
- `whileInView` + `viewport={{ once: true }}` para scroll animations
- `whileHover`, `whileTap` para interacciones

### Dark Mode
- Clase `.dark` en `<html>`
- Variante `dark:` de Tailwind
- Estado persistido en `localStorage("theme")`
- ThemeContext con `useTheme()` hook

### Estilos
- Tailwind utility classes exclusivamente
- Sin CSS modules, sin styled-components
- `@theme {}` en index.css para tokens personalizados

### Sistema de Colores (Brand Palette)
- **Modo Claro:**
  - Fondo: #FDFBF8
  - Primario: #591848 | Secundario: #8C0D48
  - Acento (CTA): #F2B705
  - Alerta: #F24130
- **Modo Oscuro:**
  - Fondo: #1A1619
  - Primario: #E09DC5 | Secundario: #F26D9E
  - Acento (CTA): #F2B705
  - Alerta: #FF7A6D
- Utiliza siempre el color de fondo #FDFBF8 (claro) o #1A1619 (oscuro) como base y asegúrate de que el contraste de texto cumpla con WCAG AA.

### Routing
- Sin React Router
- Navegación por anclas (`#hero`, `#about`, `#skills`, `#projects`, `#contact`)
- `scroll-behavior: smooth`

### Patrón de Secciones
Cada sección en `src/components/sections/` sigue:
```jsx
export default function SectionName() {
  return (
    <section id="section-id" className="...">
      <SectionTitle subtitle="..." title="..." />
      {/* contenido */}
    </section>
  )
}
```

## Reglas para Agentes

1. Siempre ejecutar `pnpm lint` después de hacer cambios
2. NO añadir comentarios a menos que se solicite explícitamente
3. NO añadir TypeScript a menos que se solicite
4. NO añadir testing framework a menos que se solicite
5. Mantener consistencia con los patrones existentes (framer-motion, Tailwind, default exports)
6. Los iconos nuevos deben usar `react-icons`
7. NO modificar el `index.html` root mount point
