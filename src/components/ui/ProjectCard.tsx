import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/types/project";

export default function ProjectCard({ project, index = 0 }: { project: Project; index?: number }) {
  return (
    <article className="group grid gap-7 border-t border-[#183126]/20 py-9 sm:grid-cols-[90px_1fr_auto] sm:items-start">
      <span className="display text-sm font-bold text-[#6f8278]">0{index + 1}</span>
      <div>
        <p className="text-xs font-bold uppercase tracking-[.2em] text-[#2f7d50]">{project.category}</p>
        <h3 className="mt-3 text-3xl font-bold tracking-[-.045em] text-[#10261d] sm:text-4xl">{project.title}</h3>
        <p className="mt-4 max-w-2xl leading-7 text-[#52665c]">{project.description}</p>
        <ul className="mt-5 grid gap-2 text-sm text-[#314b3e] sm:grid-cols-3">
          {project.highlights.map((item) => <li key={item} className="flex gap-2"><span className="text-[#2f7d50]">↳</span>{item}</li>)}
        </ul>
        <ul className="mt-6 flex flex-wrap gap-2">
          {project.technologies.map((technology) => <li key={technology} className="rounded-full bg-[#dfe8dc] px-3 py-1.5 text-xs font-semibold text-[#315942]">{technology}</li>)}
        </ul>
      </div>
      <a href={project.repositoryUrl} target="_blank" rel="noreferrer" aria-label={`Ver perfil de GitHub asociado a ${project.title}`} className="flex h-12 w-12 items-center justify-center rounded-full border border-[#183126]/20 transition group-hover:border-[#2f7d50] group-hover:bg-[#2f7d50] group-hover:text-white"><ArrowUpRight size={20} /></a>
    </article>
  );
}
