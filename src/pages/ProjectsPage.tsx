import MainLayout from "@/components/layout/MainLayout";
import Container from "@/components/ui/Container";
import ProjectCard from "@/components/ui/ProjectCard";
import projects from "@/data/projects";

export default function ProjectsPage() {
  return (
    <MainLayout>
      <section className="pt-36 pb-20 sm:pt-44 sm:pb-28">
        <Container className="grid gap-8 lg:grid-cols-[.65fr_1.35fr]">
          <p className="text-xs font-bold uppercase tracking-[.24em] text-emerald-400">Proyectos · 03 casos</p>
          <div><h1 className="text-5xl font-extrabold leading-[.95] tracking-[-.065em] text-zinc-100 sm:text-7xl">Ideas convertidas en sistemas útiles.</h1><p className="mt-7 max-w-2xl text-lg leading-8 text-zinc-400">Una selección de proyectos personales para practicar arquitectura, gestión de datos y flujos completos de principio a fin.</p></div>
        </Container>
      </section>
      <section className="border-t border-zinc-900 bg-zinc-950 py-14 sm:py-20"><Container className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">{projects.map((project) => <ProjectCard key={project.id} project={project} />)}</Container></section>
    </MainLayout>
  );
}
