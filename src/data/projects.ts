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
    title: "Sistema de Soporte TI",
    category: "Flujo de incidencias",
    description:
      "Solución para registrar, organizar y dar seguimiento a solicitudes técnicas desde su ingreso hasta su resolución.",
    highlights: ["Gestión de tickets", "Seguimiento de estados", "Historial de incidencias"],
    technologies: ["Laravel", "SQL Server", "Bootstrap"],
    repositoryUrl: github,
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
