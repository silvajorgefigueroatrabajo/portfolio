import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Container from "@/components/ui/Container";
import ProjectCard from "@/components/ui/ProjectCard";
import projects from "@/data/projects";

export default function FeaturedProjects() {
  const featured = projects.filter((project) => project.featured);
  return (
    <section id="projects" className="bg-[#fffdf6] py-24 sm:py-32">
      <Container>
        <div className="grid gap-8 lg:grid-cols-[.7fr_1.3fr] lg:items-end">
          <p className="text-xs font-bold uppercase tracking-[.24em] text-[#2f7d50]">Trabajo seleccionado · 2026</p>
          <div>
            <h2 className="text-4xl font-bold tracking-[-.055em] text-[#10261d] sm:text-6xl">Sistemas pensados para el trabajo real.</h2>
            <p className="mt-5 max-w-2xl leading-7 text-[#5a6e63]">Proyectos orientados a organizar información, dar trazabilidad a procesos y reducir trabajo manual.</p>
          </div>
        </div>
        <div className="mt-16">{featured.map((project, index) => <ProjectCard key={project.id} project={project} index={index} />)}</div>
        <Link to="/projects" className="mt-8 inline-flex items-center gap-2 font-bold text-[#246b45] hover:gap-3">Ver todos los proyectos <ArrowRight size={18} /></Link>
      </Container>
    </section>
  );
}
