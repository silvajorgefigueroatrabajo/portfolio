import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

import Container from "@/components/ui/Container";
import ProjectCard from "@/components/ui/ProjectCard";
import projects from "@/data/projects";

export default function FeaturedProjects() {
  const featuredProjects = projects.filter(
    (project) => project.featured,
  );

  return (
    <section
      id="projects"
      className="border-t border-zinc-900 py-24 sm:py-32"
    >
      <Container>
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
              Trabajo seleccionado
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-zinc-100 sm:text-5xl">
              Proyectos destacados
            </h2>

            <p className="mt-5 max-w-2xl leading-7 text-zinc-400">
              Proyectos enfocados en automatizar tareas, organizar información
              y resolver necesidades reales mediante software.
            </p>
          </div>

          <Link
            to="/projects"
            className="inline-flex items-center gap-2 text-sm font-medium text-zinc-300 transition hover:text-cyan-400"
          >
            Ver todos
            <ArrowRight aria-hidden="true" size={16} />
          </Link>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {featuredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </motion.div>
      </Container>
    </section>
  );
}