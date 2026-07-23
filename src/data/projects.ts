import type { Project } from "@/types/project";

const projects: Project[] = [
  {
    id: 1,
    title: "Sistema de Inventario",

    description:
      "Aplicación para controlar inventario, entradas, salidas y stock de productos.",

    technologies: [
      "Laravel",
      "MySQL",
      "Bootstrap",
      "PHP"
    ],

    repositoryUrl:
      "https://github.com/silvajorgefigueroatrabajo",

    featured: true,
  },

  {
    id: 2,
    title: "Sistema de Soporte TI",

    description:
      "Gestión de tickets de soporte con seguimiento de incidencias.",

    technologies: [
      "Laravel",
      "SQL Server",
      "Bootstrap"
    ],

    repositoryUrl:
      "https://github.com/silvajorgefigueroatrabajo",

    featured: true,
  },

  {
    id: 3,
    title: "API de Gestión",

    description:
      "API REST para administración de recursos utilizando arquitectura MVC.",

    technologies: [
      "Laravel",
      "REST",
      "MySQL"
    ],

    repositoryUrl:
      "https://github.com/silvajorgefigueroatrabajo",

    featured: false,
  },
];

export default projects;