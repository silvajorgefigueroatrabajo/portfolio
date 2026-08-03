import type { Project } from "@/types/project";

const projects: Project[] = [
  {
    id: 1,
    title: "Sistema de Gestión de Soporte TI",
    category: "Aplicación full stack · Caso de estudio",
    description:
      "Sistema web para registrar atenciones de soporte técnico, hacer seguimiento de incidencias y analizar tiempos de resolución mediante roles, métricas y trazabilidad.",
    highlights: ["140 casos demo sintéticos", "Dashboard y explorador de datos", "Roles, guías y exportación Excel"],
    technologies: ["Laravel 13", "React", "TypeScript", "Inertia", "PostgreSQL", "Docker"],
    repositoryUrl: "https://github.com/silvajorgefigueroatrabajo/soporte-ti-demo",
    caseStudyUrl: "/projects/sistema-soporte-ti",
    image: "/soporte-ti-dashboard.png",
    featured: true,
  },
];

export default projects;
