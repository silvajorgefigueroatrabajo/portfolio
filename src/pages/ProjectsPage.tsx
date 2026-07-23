import MainLayout from "@/components/layout/MainLayout";
import Container from "@/components/ui/Container";

export default function ProjectsPage() {
  return (
    <MainLayout>
      <section className="min-h-screen pt-32 pb-24">
        <Container>
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
            Portafolio
          </p>

          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-zinc-100 sm:text-6xl">
            Proyectos
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-400">
            Aplicaciones y soluciones enfocadas en automatizar procesos,
            organizar información y resolver necesidades reales.
          </p>
        </Container>
      </section>
    </MainLayout>
  );
}