import type { Project } from "@/types/project";

const github = "https://github.com/silvajorgefigueroatrabajo";

const projects: Project[] = [
  {
    id: 1,
    title: "Sistema de Inventario",
    category: "Gestión de operaciones",
    description:
      "Aplicación web para centralizar el control de productos y mantener trazabilidad sobre entradas, salidas y stock disponible.",
    highlights: ["Control de movimientos", "Administración de productos", "Persistencia relacional"],
    technologies: ["Laravel", "PHP", "MySQL", "Bootstrap"],
    repositoryUrl: github,
    featured: true,
  },
  {
    id: 2,
    title: "Nexo Soporte",
    category: "Producto full stack · Caso de estudio",
    description:
      "Plataforma operativa para registrar incidencias, analizar tiempos de resolución y centralizar conocimiento con roles, métricas y trazabilidad.",
    highlights: ["140 casos demo sintéticos", "Dashboard y explorador de datos", "Roles, guías y exportación Excel"],
    technologies: ["Laravel 13", "React", "TypeScript", "Inertia", "PostgreSQL", "Docker"],
    repositoryUrl: "https://github.com/silvajorgefigueroatrabajo/soporte-ti-demo",
    caseStudyUrl: "/projects/nexo-soporte",
    image: "/nexo-dashboard.png",
    featured: true,
  },
  {
    id: 3,
    title: "API de Gestión",
    category: "Backend y servicios",
    description:
      "API REST organizada bajo arquitectura MVC para administrar recursos y exponer operaciones de forma consistente.",
    highlights: ["Endpoints REST", "Operaciones CRUD", "Separación por capas"],
    technologies: ["Laravel", "REST", "MySQL"],
    repositoryUrl: github,
    featured: false,
  },
];

export default projects;
