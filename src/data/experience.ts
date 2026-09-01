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
    role: "Soporte TI",
    company: "Abastible",
    period: "Jul 2026 — Actualidad",
    description:
      "Soporte tecnológico y continuidad operativa, combinados con análisis de datos y automatización de reportería para las áreas usuarias.",
    achievements: [
      "Soporte a usuarios, manejo de SAP y resolución de incidencias en la aplicación VTGR.",
      "Desarrollo de dashboards interactivos en Power BI para reportería operacional.",
      "Integración de SharePoint y archivos Excel mediante procesos de transformación en Power Query.",
      "Construcción de modelos de datos, medidas DAX e indicadores para apoyar decisiones operacionales.",
    ],
    technologies: ["Power BI", "Power Query", "DAX", "SAP", "SharePoint", "Excel"],
  },
  {
    id: 2,
    role: "Ingeniero de Desarrollo",
    company: "2080 Servicios",
    period: "Ene 2025 — May 2026",
    description:
      "Desarrollo y mantenimiento de plataformas empresariales orientadas a la automatización de procesos, incluyendo soluciones para Telefónica.",
    achievements: [
      "Implementación full stack de vistas, formularios, mantenedores y operaciones CRUD.",
      "Desarrollo de APIs REST, integraciones externas, jobs, queues, comandos y scripts.",
      "Procesamiento y validación de archivos Excel e integración con flujos RPA.",
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
