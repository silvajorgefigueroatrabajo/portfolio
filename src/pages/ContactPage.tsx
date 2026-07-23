import MainLayout from "@/components/layout/MainLayout";
import Container from "@/components/ui/Container";

export default function ContactPage() {
  return (
    <MainLayout>
      <section className="min-h-screen pt-32 pb-24">
        <Container>
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
            Contacto
          </p>

          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-zinc-100 sm:text-6xl">
            Conversemos
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-400">
            Estoy disponible para conversar sobre oportunidades, proyectos y
            desafíos relacionados con desarrollo de software y tecnología.
          </p>
        </Container>
      </section>
    </MainLayout>
  );
}