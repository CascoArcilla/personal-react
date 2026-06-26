import blackJack from "../assets/images/black-jack.webp";
import turitezoSw from "../assets/images/turitezo-sw.webp";
import ecController from "../assets/images/ec_controll.webp";

export const projects = [
  {
    id: 1,
    title: "Simple Black Jack",
    description:
      "Juego creado por diversion, es un Black Jack jugable directamente en el navegador para un jugador.",
    tech: ["Vite", "JavaScrpt", "HTTML", "TailwindCSS", "GitHub Actions"],
    image: blackJack,
    status: "completado",
    liveUrl: "https://cascoarcilla.github.io/vanilla-blackjack/",
    repoUrl: "https://github.com/CascoArcilla/vanilla-blackjack",
  },
  {
    id: 2,
    title: "Turitezo, api web",
    description:
      "Un api web para la aplicacion de Turitezo, creado para mostrar los lugares turisticos de un municipio.",
    tech: ["PHP", "MySQL", "CSS", "Docker"],
    image: turitezoSw,
    status: "completado",
    liveUrl: "https://turitezo-service-web.onrender.com/",
    repoUrl: "https://github.com/CascoArcilla/turitezo-serviceweb",
  },
  {
    id: 3,
    title: "Turitezo Android",
    description:
      "La aplicación para el proyecto Turitezo, creada para mostrar los lugares turisticos de mi municipio.",
    tech: ["Android", "Android Studio", "Kotlin", "Retrofit"],
    video: "https://www.youtube.com/embed/SDv79hfHUSk",
    status: "completado",
    repoUrl: "https://github.com/CascoArcilla/turitezo-android",
  },
  {
    id: 4,
    title: "Portfolio Personal",
    description:
      "Mi página personal construida con Vite, React y TailwindCSS, con modo oscuro y animaciones. (La que miras ahora)",
    tech: ["React", "Vite", "TailwindCSS", "Framer Motion"],
    status: "en-progreso",
    repoUrl: "https://github.com/CascoArcilla/personal-react",
  },
  {
    id: 5,
    title: "EC Controller",
    description:
      "Un sistema para el control de consumo electrico y estimacion de costos (no incluye hardware).",
    tech: ["Express", "PostgreSQL", "React", "TailwindCSS", "Docker", ""],
    image: ecController,
    status: "en-progreso",
    repoUrl: "https://github.com/CascoArcilla/wats-control",
  },
  {
    id: 6,
    title: "Senso Lab MX",
    description:
      "Trabajando para mostrarlo, es un sistema para agilizar la recolección y exportación de datos sensoriales.",
    tech: ["Python", "Django", "TailwindCSS", "Docker", "MySQL"],
    status: "completado",
  },
];
