export interface SkillGroup {
  id: number;
  title: string;
  label: string;
  skills: string[];
}

const skillGroups: SkillGroup[] = [
  {
    id: 1,
    title: "Desarrollo profesional",
    label: "Experiencia aplicada",
    skills: ["PHP", "Laravel 5.6", "Vue.js 2", "Blade", "JavaScript", "TypeScript"],
  },
  {
    id: 2,
    title: "Backend y automatización",
    label: "Procesos e integraciones",
    skills: ["APIs REST", "MySQL", "Jobs", "Queues", "Docker", "RPA", "Python básico"],
  },
  {
    id: 3,
    title: "Flujo de trabajo",
    label: "Colaboración técnica",
    skills: ["Git", "Bitbucket", "Pull Requests", "DBeaver", "ClickUp", "Agile", "Scrum"],
  },
  {
    id: 4,
    title: "Proyectos personales",
    label: "Aprendizaje continuo",
    skills: ["React", "Tailwind CSS", "Vite", "GitHub", "SQL Server", "HTML", "CSS"],
  },
];

export default skillGroups;
