import MainLayout from "@/components/layout/MainLayout";
import Container from "@/components/ui/Container";
import ProjectCard from "@/components/ui/ProjectCard";
import projects from "@/data/projects";

export default function ProjectsPage() {
  return (
    <MainLayout>
      <section className="paper-grid pt-36 pb-20 sm:pt-44 sm:pb-28">
        <Container className="grid gap-8 lg:grid-cols-[.65fr_1.35fr]">
          <p className="text-xs font-bold uppercase tracking-[.24em] text-[#2f7d50]">Proyectos · 03 casos</p>
          <div><h1 className="text-5xl font-extrabold leading-[.95] tracking-[-.065em] text-[#10261d] sm:text-7xl">Ideas convertidas en sistemas útiles.</h1><p className="mt-7 max-w-2xl text-lg leading-8 text-[#52665c]">Una selección de proyectos personales para practicar arquitectura, gestión de datos y flujos completos de principio a fin.</p></div>
        </Container>
      </section>
      <section className="bg-[#fffdf6] py-14 sm:py-20"><Container>{projects.map((project, index) => <ProjectCard key={project.id} project={project} index={index} />)}</Container></section>
    </MainLayout>
  );
}
