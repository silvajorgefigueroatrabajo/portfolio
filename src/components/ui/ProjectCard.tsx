import { ArrowUpRight, Code2 } from "lucide-react";
import type { Project } from "@/types/project";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="group flex h-full flex-col rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6 transition duration-300 hover:-translate-y-1 hover:border-zinc-700 hover:bg-zinc-900/70">
      <div className="flex items-start justify-between gap-4">
        <h3 className="text-xl font-semibold text-zinc-100">
          {project.title}
        </h3>

        <a
          href={project.repositoryUrl}
          target="_blank"
          rel="noreferrer"
          aria-label={`Ver repositorio de ${project.title}`}
          className="text-zinc-500 transition hover:text-cyan-400"
        >
        <Code2 aria-hidden="true" size={20} />
        </a>
      </div>

      <p className="mt-4 flex-1 leading-7 text-zinc-400">
        {project.description}
      </p>

      <ul className="mt-6 flex flex-wrap gap-2">
        {project.technologies.map((technology) => (
          <li
            key={technology}
            className="rounded-full border border-zinc-800 px-3 py-1 text-xs text-zinc-400"
          >
            {technology}
          </li>
        ))}
      </ul>

      {project.liveUrl && (
        <a
          href={project.liveUrl}
          target="_blank"
          rel="noreferrer"
          className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-cyan-400 transition hover:text-cyan-300"
        >
          Ver proyecto
          <ArrowUpRight aria-hidden="true" size={16} />
        </a>
      )}
    </article>
  );
}