import { ArrowLeft, ArrowUpRight, CheckCircle2, Database, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";
import MainLayout from "@/components/layout/MainLayout";
import Container from "@/components/ui/Container";

const features = [
  "Registro, búsqueda y filtros avanzados de incidencias",
  "Dashboard mensual y explorador configurable de métricas",
  "Roles de observador, técnico y administrador",
  "Sugerencias de casos similares y bitácora de actividad",
  "Directorios operativos, guías internas y exportación Excel",
  "74 pruebas automatizadas para permisos y flujos críticos",
];

export default function NexoSupportPage() {
  return (
    <MainLayout>
      <section className="paper-grid pt-32 pb-20 sm:pt-40 sm:pb-28">
        <Container>
          <Link to="/projects" className="inline-flex items-center gap-2 text-sm font-bold text-emerald-400"><ArrowLeft size={17} />Volver a proyectos</Link>
          <div className="mt-10 grid gap-10 lg:grid-cols-[1.25fr_.75fr] lg:items-end">
            <div><p className="text-xs font-bold uppercase tracking-[.24em] text-emerald-400">Caso de estudio · Aplicación full stack</p><h1 className="mt-5 text-5xl font-extrabold leading-[.94] tracking-[-.065em] text-zinc-100 sm:text-7xl">Sistema de Gestión de Soporte TI</h1></div>
            <div><p className="text-xl leading-9 text-zinc-400">Una plataforma para convertir atenciones dispersas en datos trazables, conocimiento reutilizable y decisiones operativas.</p><div className="mt-6 flex flex-wrap gap-2">{["Laravel", "React", "TypeScript", "PostgreSQL", "Docker"].map((item) => <span key={item} className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1.5 text-xs font-bold text-emerald-300">{item}</span>)}</div></div>
          </div>
        </Container>
      </section>

      <section className="border-y border-zinc-800 bg-zinc-900 py-12 sm:py-16"><Container><img src="/nexo-dashboard.png" alt="Dashboard del sistema de soporte TI con métricas operativas ficticias" className="w-full rounded-2xl border border-white/10 shadow-2xl" /></Container></section>

      <section className="bg-zinc-950 py-24 sm:py-32">
        <Container className="grid gap-14 lg:grid-cols-[.72fr_1.28fr]">
          <div><p className="text-xs font-bold uppercase tracking-[.24em] text-emerald-400">El problema</p><h2 className="mt-4 text-4xl font-bold tracking-[-.05em] text-zinc-100 sm:text-5xl">De registros aislados a una operación visible.</h2></div>
          <div className="space-y-7 text-lg leading-8 text-zinc-400"><p>Cuando las atenciones viven en planillas, mensajes y conocimiento informal, es difícil conocer el estado de un caso, medir tiempos o reutilizar soluciones anteriores.</p><p>El sistema centraliza el flujo completo: registro, seguimiento, análisis, documentación y administración de directorios, cuidando que cada rol vea y modifique solamente lo que le corresponde.</p></div>
        </Container>
      </section>

      <section className="border-y border-zinc-800 bg-zinc-900/60 py-24 sm:py-32">
        <Container>
          <div className="grid gap-6 md:grid-cols-3">
            {[{ icon: Database, title: "Datos útiles", text: "Métricas mensuales, tiempos de resolución y análisis configurable por tipo, centro, estado o turno." },{ icon: ShieldCheck, title: "Permisos claros", text: "Acceso diferenciado para observadores, técnicos y administradores, con trazabilidad de acciones." },{ icon: CheckCircle2, title: "Continuidad", text: "Exportaciones, directorios y guías internas para que la información no dependa de una sola persona." }].map(({icon: Icon,title,text}) => <article key={title} className="rounded-3xl border border-zinc-800 bg-zinc-900 p-8"><Icon className="text-emerald-400" /><h3 className="mt-6 text-2xl font-bold tracking-[-.04em] text-zinc-100">{title}</h3><p className="mt-4 leading-7 text-zinc-400">{text}</p></article>)}
          </div>
          <div className="mt-16 grid gap-10 lg:grid-cols-2 lg:items-center"><img src="/nexo-historial.png" alt="Historial de incidencias ficticias del sistema de soporte TI" className="rounded-2xl border border-zinc-700 shadow-xl" /><div><p className="text-xs font-bold uppercase tracking-[.24em] text-emerald-400">Alcance funcional</p><ul className="mt-7 space-y-4">{features.map((feature) => <li key={feature} className="flex gap-3 leading-7 text-zinc-300"><CheckCircle2 size={20} className="mt-1 shrink-0 text-emerald-400" />{feature}</li>)}</ul></div></div>
        </Container>
      </section>

      <section className="bg-zinc-950 py-24"><Container className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end"><div><p className="text-xs font-bold uppercase tracking-[.24em] text-emerald-400">Privacidad por diseño</p><h2 className="mt-4 max-w-3xl text-4xl font-bold tracking-[-.05em] text-zinc-100 sm:text-6xl">Una demo convincente, sin exponer datos reales.</h2><p className="mt-6 max-w-2xl leading-8 text-zinc-400">La versión pública utiliza una historia Git independiente, cuentas controladas y 140 casos completamente sintéticos. No contiene nombres, correos ni procedimientos del entorno original.</p></div><a href="https://github.com/silvajorgefigueroatrabajo/soporte-ti-demo" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-emerald-400 px-6 py-3.5 text-sm font-bold text-zinc-950 transition hover:bg-emerald-300">Ver código <ArrowUpRight size={17} /></a></Container></section>
    </MainLayout>
  );
}
