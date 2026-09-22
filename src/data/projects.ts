import type { Project } from "@/types/project";

const projects: Project[] = [
  {
    id: 1,
    title: "Plataforma de Soporte y Analítica Operacional",
    category: "Aplicación full stack · Datos · Automatización",
    description:
      "Plataforma web que centraliza casos de soporte, mensajes de Teams y análisis operacionales provenientes de Drivin, con roles, trazabilidad, importación de Excel y dashboards comparativos.",
    highlights: [
      "Flujo de soporte y bandeja de Teams",
      "Analítica de flota, entregas y clientes",
      "Roles, deduplicación y trazabilidad",
    ],
    technologies: ["Laravel 13", "React", "TypeScript", "Inertia", "PostgreSQL", "Docker"],
    repositoryUrl: "https://github.com/silvajorgefigueroatrabajo/soporte-ti-demo",
    caseStudyUrl: "/projects/sistema-soporte-ti",
    image: "/soporte-ti-dashboard.png",
    featured: true,
  },
];

export default projects;
