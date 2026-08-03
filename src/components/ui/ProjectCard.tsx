import { ArrowUpRight, Code2 } from "lucide-react";
import { Link } from "react-router-dom";
import type { Project } from "@/types/project";

export default function ProjectCard({ project }: { project: Project; index?: number }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/40 transition duration-300 hover:-translate-y-1 hover:border-emerald-500/40 hover:bg-zinc-900/70">
      {project.image && <div className="aspect-[16/9] overflow-hidden border-b border-zinc-800 bg-zinc-900"><img src={project.image} alt={`Vista de ${project.title}`} className="h-full w-full object-cover object-top transition duration-500 group-hover:scale-[1.025]" /></div>}
      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-start justify-between gap-4">
          <div><p className="text-xs font-semibold uppercase tracking-[.18em] text-emerald-400">{project.category}</p><h3 className="mt-2 text-xl font-semibold text-zinc-100">{project.title}</h3></div>
          <a href={project.repositoryUrl} target="_blank" rel="noreferrer" aria-label={`Ver repositorio de ${project.title}`} className="text-zinc-500 transition hover:text-emerald-400"><Code2 size={20} /></a>
        </div>
        <p className="mt-4 flex-1 leading-7 text-zinc-400">{project.description}</p>
        <ul className="mt-6 flex flex-wrap gap-2">{project.technologies.map((technology) => <li key={technology} className="rounded-full border border-zinc-800 px-3 py-1 text-xs text-zinc-400">{technology}</li>)}</ul>
        <div className="mt-6 flex flex-wrap gap-5">
          {project.caseStudyUrl && <Link to={project.caseStudyUrl} className="inline-flex items-center gap-2 text-sm font-medium text-emerald-400 transition hover:text-emerald-300">Ver caso de estudio <ArrowUpRight size={16} /></Link>}
          {project.liveUrl && <a href={project.liveUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm font-medium text-emerald-400 transition hover:text-emerald-300">Ver proyecto <ArrowUpRight size={16} /></a>}
        </div>
      </div>
    </article>
  );
}
