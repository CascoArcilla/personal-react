import {
  FaReact, FaNodeJs, FaPython, FaGitAlt, FaDocker,
  FaHtml5, FaFigma, FaGithub,
} from 'react-icons/fa'
import {
  SiTailwindcss, SiDjango, SiRemix, SiMysql, SiPostgresql,
  SiMongodb, SiMariadb, SiApache, SiJira, SiSlack,
  SiAndroidstudio, SiBlender, SiInkscape, SiKotlin,
  SiBootstrap, SiDotnet, SiJavascript, SiLinux, SiPhp,
  SiFastapi,
} from 'react-icons/si'

export const skillCategories = [
  {
    title: 'Lenguajes de Programación',
    skills: [
      { name: 'JavaScript', icon: SiJavascript },
      { name: 'Python', icon: FaPython },
      { name: 'C# (.NET)', icon: SiDotnet },
      { name: 'PHP', icon: SiPhp },
      { name: 'Kotlin', icon: SiKotlin },
    ],
  },
  {
    title: 'Desarrollo Web',
    skills: [
      { name: 'Django', icon: SiDjango },
      { name: 'React', icon: FaReact },
      { name: 'Node.js', icon: FaNodeJs },
      { name: 'Remix', icon: SiRemix },
      { name: 'HTML5', icon: FaHtml5 },
      { name: 'Bootstrap', icon: SiBootstrap },
      { name: 'Tailwind CSS', icon: SiTailwindcss },
    ],
  },
  {
    title: 'Bases de Datos',
    skills: [
      { name: 'MySQL', icon: SiMysql },
      { name: 'MariaDB', icon: SiMariadb },
      { name: 'PostgreSQL', icon: SiPostgresql },
      { name: 'MongoDB', icon: SiMongodb },
    ],
  },
  {
    title: 'Infraestructura y Despliegue',
    skills: [
      { name: 'Docker', icon: FaDocker },
      { name: 'Apache', icon: SiApache },
      { name: 'Linux', icon: SiLinux },
      { name: 'Git', icon: FaGitAlt },
      { name: 'GitHub', icon: FaGithub },
    ],
  },
  {
    title: 'Metodologías y Gestión',
    skills: [
      { name: 'Scrum', icon: SiJira },
      { name: 'Jira', icon: SiJira },
      { name: 'Slack', icon: SiSlack },
      { name: 'Figma', icon: FaFigma },
    ],
  },
  {
    title: 'Otros',
    skills: [
      { name: 'API REST', icon: SiFastapi },
      { name: 'Android Studio', icon: SiAndroidstudio },
      { name: 'Blender', icon: SiBlender },
      { name: 'Inkscape', icon: SiInkscape },
    ],
  },
]
