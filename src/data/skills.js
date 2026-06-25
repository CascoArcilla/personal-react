import {
  FaReact, FaNodeJs, FaPython, FaGitAlt, FaFigma, FaDocker,
  FaHtml5, FaCss3Alt, FaJsSquare,
} from 'react-icons/fa'
import {
  SiTailwindcss, SiTypescript, SiNextdotjs, SiExpress, SiMongodb,
  SiPostgresql, SiPrisma, SiFramer, SiVite, SiRedux, SiFirebase,
} from 'react-icons/si'

export const skillCategories = [
  {
    title: 'Frontend',
    skills: [
      { name: 'React', icon: FaReact, level: 90 },
      { name: 'TypeScript', icon: SiTypescript, level: 80 },
      { name: 'JavaScript', icon: FaJsSquare, level: 90 },
      { name: 'HTML5', icon: FaHtml5, level: 95 },
      { name: 'CSS3', icon: FaCss3Alt, level: 90 },
      { name: 'TailwindCSS', icon: SiTailwindcss, level: 85 },
      { name: 'Next.js', icon: SiNextdotjs, level: 70 },
      { name: 'Framer Motion', icon: SiFramer, level: 65 },
      { name: 'Redux', icon: SiRedux, level: 75 },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node.js', icon: FaNodeJs, level: 80 },
      { name: 'Express', icon: SiExpress, level: 75 },
      { name: 'Python', icon: FaPython, level: 60 },
    ],
  },
  {
    title: 'Herramientas',
    skills: [
      { name: 'Git', icon: FaGitAlt, level: 85 },
      { name: 'Docker', icon: FaDocker, level: 50 },
      { name: 'Figma', icon: FaFigma, level: 70 },
      { name: 'Vite', icon: SiVite, level: 80 },
      { name: 'Firebase', icon: SiFirebase, level: 65 },
    ],
  },
  {
    title: 'Aprendiendo',
    skills: [
      { name: 'Prisma', icon: SiPrisma, level: 40, learning: true },
      { name: 'PostgreSQL', icon: SiPostgresql, level: 45, learning: true },
      { name: 'MongoDB', icon: SiMongodb, level: 50, learning: true },
      { name: 'TypeScript Avanzado', icon: SiTypescript, level: 0, learning: true },
    ],
  },
]
