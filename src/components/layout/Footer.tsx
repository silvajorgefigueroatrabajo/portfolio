import { ArrowUp, Code2, Mail } from "lucide-react";

import Container from "@/components/ui/Container";
import contact from "@/config/contact";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="border-t border-zinc-900 bg-zinc-950">
      <Container>
        <div className="grid gap-10 py-12 md:grid-cols-[1fr_auto] md:items-end">
          <div>
            <p className="text-lg font-semibold text-zinc-100">Jorge Silva</p>

            <p className="mt-3 max-w-xl leading-7 text-zinc-400">
              Ingeniero en Informática y desarrollador Full Stack enfocado en
              construir soluciones útiles y resolver problemas tecnológicos.
            </p>

            <div className="mt-6 flex flex-wrap gap-4">
              <a
                href={`mailto:${contact.email}`}
                className="inline-flex items-center gap-2 text-sm text-zinc-400 transition hover:text-cyan-400"
              >
                <Mail aria-hidden="true" size={17} />
                Correo
              </a>

              <a
                href={contact.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-sm text-zinc-400 transition hover:text-cyan-400"
              >
                <Code2 aria-hidden="true" size={17} />
                GitHub
              </a>
            </div>
          </div>

          <button
            type="button"
            onClick={scrollToTop}
            aria-label="Volver al inicio de la página"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-zinc-800 text-zinc-400 transition hover:border-cyan-400/50 hover:bg-zinc-900 hover:text-cyan-400"
          >
            <ArrowUp aria-hidden="true" size={19} />
          </button>
        </div>

        <div className="flex flex-col gap-3 border-t border-zinc-900 py-6 text-sm text-zinc-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© {currentYear} Jorge Silva. Todos los derechos reservados.</p>

          <p>Construido con React, TypeScript y Tailwind CSS.</p>
        </div>
      </Container>
    </footer>
  );
}