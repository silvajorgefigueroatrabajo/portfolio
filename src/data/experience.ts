export interface ExperienceItem {
  id: number;
  role: string;
  company: string;
  period: string;
  description: string;
  achievements: string[];
  technologies: string[];
}

const experience: ExperienceItem[] = [
  {
    id: 1,
    role: "Ingeniero de Desarrollo",
    company: "2080 Servicios",
    period: "Ene 2025 — May 2026",
    description:
      "Desarrollo y mantenimiento de plataformas empresariales orientadas a la automatización de procesos, incluyendo soluciones para Telefónica.",
    achievements: [
      "Implementación full stack de vistas, formularios, mantenedores y operaciones CRUD.",
      "Desarrollo de APIs REST, integraciones externas, jobs, queues, comandos y scripts.",
      "Procesamiento y validación de archivos Excel e integración con flujos de automatización RPA.",
      "Debugging y colaboración mediante ramas y Pull Requests con equipos de desarrollo y QA.",
    ],
    technologies: [
      "PHP",
      "Laravel 5.6",
      "Vue.js 2",
      "Blade",
      "MySQL",
      "Docker",
      "Git",
      "Bitbucket",
    ],
  },
];

export default experience;
