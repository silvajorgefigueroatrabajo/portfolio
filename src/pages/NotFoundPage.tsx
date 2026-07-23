import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

import MainLayout from "@/components/layout/MainLayout";
import Container from "@/components/ui/Container";

export default function NotFoundPage() {
  return (
    <MainLayout>
      <section className="flex min-h-screen items-center pt-16">
        <Container>
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
              Error 404
            </p>

            <h1 className="mt-4 text-5xl font-semibold tracking-tight text-zinc-100 sm:text-7xl">
              Página no encontrada
            </h1>

            <p className="mt-6 text-lg leading-8 text-zinc-400">
              La página que intentas visitar no existe o fue movida.
            </p>

            <Link
              to="/"
              className="mt-10 inline-flex items-center gap-2 rounded-full bg-cyan-400 px-6 py-3 text-sm font-semibold text-zinc-950 transition hover:bg-cyan-300"
            >
              <ArrowLeft aria-hidden="true" size={18} />
              Volver al inicio
            </Link>
          </div>
        </Container>
      </section>
    </MainLayout>
  );
}