export interface SkillGroup {
  id: number;
  title: string;
  label: string;
  skills: string[];
}

const skillGroups: SkillGroup[] = [
  {
    id: 1,
    title: "Business Intelligence",
    label: "Datos y reportería",
    skills: ["Power BI", "Power Query", "DAX", "Modelado de datos", "KPIs", "SharePoint", "Excel avanzado"],
  },
  {
    id: 2,
    title: "Desarrollo full stack",
    label: "Software empresarial",
    skills: ["PHP", "Laravel", "Vue.js", "React", "TypeScript", "Blade", "APIs REST"],
  },
  {
    id: 3,
    title: "Datos y automatización",
    label: "Procesos e integraciones",
    skills: ["MySQL", "SQL", "Jobs", "Queues", "Docker", "RPA", "Python", "Procesamiento de datos"],
  },
  {
    id: 4,
    title: "Herramientas de trabajo",
    label: "Colaboración técnica",
    skills: ["Git", "Bitbucket", "GitHub", "DBeaver", "ClickUp", "SAP", "Agile", "Scrum"],
  },
];

export default skillGroups;
