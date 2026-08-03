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
          <Link to="/projects" className="inline-flex items-center gap-2 text-sm font-bold text-[#397457]"><ArrowLeft size={17} />Volver a proyectos</Link>
          <div className="mt-10 grid gap-10 lg:grid-cols-[1.25fr_.75fr] lg:items-end">
            <div><p className="text-xs font-bold uppercase tracking-[.24em] text-[#2f7d50]">Caso de estudio · Producto full stack</p><h1 className="mt-5 text-6xl font-extrabold leading-[.9] tracking-[-.075em] text-[#10261d] sm:text-8xl">Nexo<br />Soporte.</h1></div>
            <div><p className="text-xl leading-9 text-[#52665c]">Una plataforma para convertir atenciones dispersas en datos trazables, conocimiento reutilizable y decisiones operativas.</p><div className="mt-6 flex flex-wrap gap-2">{["Laravel", "React", "TypeScript", "PostgreSQL", "Docker"].map((item) => <span key={item} className="rounded-full bg-[#dfe8dc] px-3 py-1.5 text-xs font-bold text-[#315942]">{item}</span>)}</div></div>
          </div>
        </Container>
      </section>

      <section className="bg-[#10261d] py-12 sm:py-16"><Container><img src="/nexo-dashboard.png" alt="Dashboard de Nexo Soporte con métricas operativas ficticias" className="w-full rounded-2xl border border-white/10 shadow-2xl" /></Container></section>

      <section className="bg-[#fffdf6] py-24 sm:py-32">
        <Container className="grid gap-14 lg:grid-cols-[.72fr_1.28fr]">
          <div><p className="text-xs font-bold uppercase tracking-[.24em] text-[#2f7d50]">El problema</p><h2 className="mt-4 text-4xl font-bold tracking-[-.05em] text-[#10261d] sm:text-5xl">De registros aislados a una operación visible.</h2></div>
          <div className="space-y-7 text-lg leading-8 text-[#52665c]"><p>Cuando las atenciones viven en planillas, mensajes y conocimiento informal, es difícil conocer el estado de un caso, medir tiempos o reutilizar soluciones anteriores.</p><p>Nexo Soporte centraliza el flujo completo: registro, seguimiento, análisis, documentación y administración de directorios, cuidando que cada rol vea y modifique solamente lo que le corresponde.</p></div>
        </Container>
      </section>

      <section className="bg-[#e7eee3] py-24 sm:py-32">
        <Container>
          <div className="grid gap-6 md:grid-cols-3">
            {[{ icon: Database, title: "Datos útiles", text: "Métricas mensuales, tiempos de resolución y análisis configurable por tipo, centro, estado o turno." },{ icon: ShieldCheck, title: "Permisos claros", text: "Acceso diferenciado para observadores, técnicos y administradores, con trazabilidad de acciones." },{ icon: CheckCircle2, title: "Continuidad", text: "Exportaciones, directorios y guías internas para que la información no dependa de una sola persona." }].map(({icon: Icon,title,text}) => <article key={title} className="rounded-3xl bg-[#f4f1e8] p-8"><Icon className="text-[#2f7d50]" /><h3 className="mt-6 text-2xl font-bold tracking-[-.04em]">{title}</h3><p className="mt-4 leading-7 text-[#52665c]">{text}</p></article>)}
          </div>
          <div className="mt-16 grid gap-10 lg:grid-cols-2 lg:items-center"><img src="/nexo-historial.png" alt="Historial de incidencias ficticias de Nexo Soporte" className="rounded-2xl border border-[#183126]/10 shadow-xl" /><div><p className="text-xs font-bold uppercase tracking-[.24em] text-[#2f7d50]">Alcance funcional</p><ul className="mt-7 space-y-4">{features.map((feature) => <li key={feature} className="flex gap-3 leading-7 text-[#314b3e]"><CheckCircle2 size={20} className="mt-1 shrink-0 text-[#2f7d50]" />{feature}</li>)}</ul></div></div>
        </Container>
      </section>

      <section className="bg-[#fffdf6] py-24"><Container className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end"><div><p className="text-xs font-bold uppercase tracking-[.24em] text-[#2f7d50]">Privacidad por diseño</p><h2 className="mt-4 max-w-3xl text-4xl font-bold tracking-[-.05em] text-[#10261d] sm:text-6xl">Una demo convincente, sin exponer datos reales.</h2><p className="mt-6 max-w-2xl leading-8 text-[#52665c]">La versión pública utiliza una historia Git independiente, cuentas controladas y 140 casos completamente sintéticos. No contiene nombres, correos ni procedimientos del entorno original.</p></div><a href="https://github.com/silvajorgefigueroatrabajo/soporte-ti-demo" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-[#183126] px-6 py-3.5 text-sm font-bold text-white transition hover:bg-[#2f7d50]">Ver código <ArrowUpRight size={17} /></a></Container></section>
    </MainLayout>
  );
}
