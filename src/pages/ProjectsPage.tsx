import MainLayout from "@/components/layout/MainLayout";
import Container from "@/components/ui/Container";

import ProjectCard from "@/components/ui/ProjectCard";

import projects from "@/data/projects";

export default function ProjectsPage() {
  return (
    <MainLayout>
      <section className="pt-32 pb-24">
        <Container>

          <h1 className="text-5xl font-bold">
            Todos los proyectos
          </h1>

          <p className="mt-4 text-zinc-400">
            Una selección de proyectos desarrollados para practicar,
            automatizar procesos y seguir mejorando mis habilidades como
            desarrollador.
          </p>

          <div className="mt-16 grid gap-8">
            {projects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
              />
            ))}
          </div>

        </Container>
      </section>
    </MainLayout>
  );
}