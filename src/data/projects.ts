import type { Project } from "@/types/project";

export const projects: Project[] = [
  {
    id: 1,
    title: "Sistema de inventario",
    description:
      "Aplicación orientada al control de productos, movimientos de stock y gestión de inventario para pequeñas empresas.",
    technologies: ["React", "TypeScript", "Laravel", "PostgreSQL"],
    repositoryUrl:
      "https://github.com/silvajorgefigueroatrabajo",
    featured: true,
  },
  {
    id: 2,
    title: "Sistema de soporte TI",
    description:
      "Plataforma para registrar, asignar y hacer seguimiento de solicitudes de soporte técnico.",
    technologies: ["React", "TypeScript", "REST API", "SQL"],
    repositoryUrl:
      "https://github.com/silvajorgefigueroatrabajo",
    featured: true,
  },
  {
    id: 3,
    title: "API de gestión",
    description:
      "API REST para administrar usuarios, roles y recursos mediante una arquitectura organizada y escalable.",
    technologies: ["Laravel", "PHP", "PostgreSQL", "Docker"],
    repositoryUrl:
      "https://github.com/silvajorgefigueroatrabajo",
    featured: true,
  },
];