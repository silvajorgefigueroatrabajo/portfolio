import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import Container from "@/components/ui/Container";
import profile from "@/data/profile";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden pt-16">
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.08),transparent_45%)]"
      />

      <Container className="relative">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-4xl"
        >
          <span className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
            {profile.role}
          </span>

          <h1 className="mt-6 text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
            {profile.name}
          </h1>

          <h2 className="mt-6 max-w-3xl text-2xl leading-tight text-zinc-300 sm:text-4xl">
            Desarrollo software para resolver problemas reales
            <span className="text-zinc-500"> y mejorar procesos.</span>
          </h2>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-zinc-400">
            {profile.description}
          </p>

          <div className="mt-12 flex flex-wrap gap-4">
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 rounded-full bg-cyan-400 px-6 py-3 text-sm font-semibold text-zinc-950 transition hover:bg-cyan-300"
            >
              Ver proyectos
              <ArrowRight aria-hidden="true" size={18} />
            </Link>

            <a
              href="https://github.com/silvajorgefigueroatrabajo"
              target="_blank"
              rel="noreferrer"
              aria-label="Visitar el perfil de GitHub de Jorge Silva"
              className="inline-flex items-center gap-2 rounded-full border border-zinc-700 px-6 py-3 text-sm font-medium text-zinc-300 transition hover:border-zinc-500 hover:bg-zinc-900 hover:text-white"
            >
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                className="h-5 w-5 fill-current"
              >
                <path d="M12 .7a11.5 11.5 0 0 0-3.64 22.4c.58.1.79-.25.79-.56v-2.22c-3.22.7-3.9-1.37-3.9-1.37-.53-1.34-1.29-1.7-1.29-1.7-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.71 1.26 3.37.96.1-.75.4-1.26.73-1.55-2.57-.29-5.27-1.28-5.27-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.47.11-3.06 0 0 .97-.31 3.16 1.18a10.9 10.9 0 0 1 5.76 0c2.19-1.49 3.16-1.18 3.16-1.18.63 1.59.23 2.77.11 3.06.74.81 1.19 1.84 1.19 3.1 0 4.43-2.71 5.4-5.29 5.69.42.36.79 1.07.79 2.16v3.2c0 .31.21.67.8.56A11.5 11.5 0 0 0 12 .7Z" />
              </svg>

              GitHub
            </a>
          </div>
        </motion.div>
      </Container>

      <motion.a
        href="#projects"
        aria-label="Ir a proyectos destacados"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="group absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2"
      >
        <span className="text-xs uppercase tracking-[0.25em] text-zinc-600 transition group-hover:text-zinc-400">
          Explorar
        </span>

        <span className="h-8 w-px bg-gradient-to-b from-zinc-600 to-transparent" />
      </motion.a>
    </section>
  );
}