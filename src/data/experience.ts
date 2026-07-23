export interface ExperienceItem {
  id: number;
  role: string;
  company: string;
  period: string;
  description: string;
  technologies: string[];
}

const experience: ExperienceItem[] = [
  {
    id: 1,
    role: "Soporte TI",
    company: "Abastible · Planta Maipú",
    period: "Actualidad",
    description:
      "Soporte a usuarios, resolución de incidencias técnicas, mantenimiento de equipos y apoyo en la continuidad operativa de los sistemas tecnológicos.",
    technologies: [
      "Windows",
      "Microsoft 365",
      "Redes",
      "Hardware",
      "Soporte a usuarios",
    ],
  },
  {
    id: 2,
    role: "Desarrollador Full Stack",
    company: "Experiencia previa",
    period: "Anterior",
    description:
      "Desarrollo y mantenimiento de aplicaciones web, implementación de funcionalidades y trabajo con bases de datos relacionales.",
    technologies: [
      "Laravel 5.6",
      "PHP",
      "SQL",
      "JavaScript",
      "Bootstrap",
    ],
  },
];

export default experience;