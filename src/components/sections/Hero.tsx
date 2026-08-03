import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import Container from "@/components/ui/Container";
import profile from "@/data/profile";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden pt-16">
      <div aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,197,94,0.13),transparent_42%)]" />
      <div aria-hidden="true" className="absolute -right-40 top-28 h-96 w-96 rounded-full border border-emerald-400/10" />

      <Container className="relative">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: "easeOut" }} className="max-w-4xl">
          <span className="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-400">{profile.role}</span>
          <h1 className="mt-6 text-5xl font-bold tracking-tight text-zinc-50 sm:text-6xl lg:text-7xl">{profile.name}</h1>
          <h2 className="mt-6 max-w-3xl text-2xl leading-tight text-zinc-300 sm:text-4xl">
            Desarrollo software para resolver problemas reales <span className="text-zinc-500">y mejorar procesos.</span>
          </h2>
          <p className="mt-8 max-w-2xl text-lg leading-8 text-zinc-400">{profile.description}</p>
          <div className="mt-12 flex flex-wrap gap-4">
            <Link to="/projects" className="inline-flex items-center gap-2 rounded-full bg-emerald-400 px-6 py-3 text-sm font-semibold text-zinc-950 transition hover:bg-emerald-300">Ver proyectos <ArrowRight size={18} /></Link>
            <Link to="/about" className="inline-flex items-center gap-2 rounded-full border border-zinc-700 px-6 py-3 text-sm font-medium text-zinc-300 transition hover:border-emerald-400/60 hover:bg-zinc-900 hover:text-white">Sobre mí</Link>
          </div>
        </motion.div>
      </Container>

      <a href="#projects" aria-label="Ir a proyectos destacados" className="group absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2">
        <span className="text-xs uppercase tracking-[0.25em] text-zinc-600 transition group-hover:text-emerald-400">Explorar</span>
        <span className="h-8 w-px bg-gradient-to-b from-emerald-500 to-transparent" />
      </a>
    </section>
  );
}
