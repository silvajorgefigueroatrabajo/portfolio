export interface SkillGroup {
  id: number;
  title: string;
  skills: string[];
}

const skillGroups: SkillGroup[] = [
  {
    id: 1,
    title: "Frontend",
    skills: [
      "React",
      "TypeScript",
      "JavaScript",
      "Tailwind CSS",
      "Bootstrap",
      "HTML",
      "CSS",
    ],
  },
  {
    id: 2,
    title: "Backend y datos",
    skills: [
      "Laravel",
      "PHP",
      "REST API",
      "MySQL",
      "SQL Server",
      "SQL",
    ],
  },
  {
    id: 3,
    title: "Herramientas y soporte",
    skills: [
      "Git",
      "GitHub",
      "Vite",
      "Windows",
      "Microsoft 365",
      "Redes",
      "Soporte TI",
    ],
  },
];

export default skillGroups;