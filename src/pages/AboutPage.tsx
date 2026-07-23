import MainLayout from "@/components/layout/MainLayout";
import Container from "@/components/ui/Container";

export default function AboutPage() {
  return (
    <MainLayout>
      <section className="min-h-screen pt-32 pb-24">
        <Container>
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
            Perfil profesional
          </p>

          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-zinc-100 sm:text-6xl">
            Sobre mí
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-400">
            Ingeniero en Informática con experiencia en desarrollo Full Stack,
            soporte tecnológico y resolución de problemas técnicos.
          </p>
        </Container>
      </section>
    </MainLayout>
  );
}