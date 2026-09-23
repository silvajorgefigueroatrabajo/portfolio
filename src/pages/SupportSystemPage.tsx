import {
  ArrowLeft,
  ArrowUpRight,
  BarChart3,
  CheckCircle2,
  FileSpreadsheet,
  GitBranch,
  LockKeyhole,
  MessageSquareText,
  UsersRound,
} from "lucide-react";
import { Link } from "react-router-dom";
import MainLayout from "@/components/layout/MainLayout";
import Container from "@/components/ui/Container";

const supportFeatures = [
  "Registro guiado, plantillas rápidas y reutilización del último caso",
  "Búsqueda, filtros, estados visuales y exportación del historial",
  "Validación de transportes únicos para advertir posibles duplicados",
  "Administración de centros, conductores, usuarios y parámetros",
];

const drivinFeatures = [
  "Resumen comparativo por día, semana, mes o período personalizado",
  "Análisis separado de entregas, flota y puntos de entrega",
  "Filtros por centro, transportista, vehículo, estado, motivo y calidad",
  "Indicadores explicados, detalle navegable y sección de ayuda",
];

const process = [
  { number: "01", title: "Captura", text: "Casos registrados manualmente o creados desde un mensaje de Teams, conservando el contexto de origen." },
  { number: "02", title: "Normalización", text: "Validaciones, catálogos y reglas de deduplicación mantienen nombres, estados y transportes consistentes." },
  { number: "03", title: "Análisis", text: "Los dashboards transforman registros e importaciones en indicadores, tendencias y listas accionables." },
  { number: "04", title: "Seguimiento", text: "Historial, bitácora, permisos y navegación al detalle permiten revisar qué ocurrió y por qué." },
];

const gallery = [
  { src: "/support-overview-demo.svg", eyebrow: "Soporte TI", title: "Resumen mensual para supervisión", text: "Casos, tiempos de atención, tasa de resolución, estados y categorías en una vista ejecutiva." },
  { src: "/teams-inbox-demo.svg", eyebrow: "Integración operativa", title: "Bandeja de mensajes de Teams", text: "Permite revisar el origen de cada solicitud, asociarla a un caso existente o crear uno nuevo sin perder contexto." },
  { src: "/drivin-analytics-demo.svg", eyebrow: "Analítica Drivin", title: "Comparación y calidad de datos", text: "Períodos comparables, indicadores de cumplimiento y accesos directos a los registros que requieren revisión." },
];

const decisions = [
  { icon: UsersRound, title: "Roles por necesidad", text: "Técnicos operan casos, observadores supervisan, administradores configuran y planificadores trabajan en un espacio Drivin independiente." },
  { icon: FileSpreadsheet, title: "Excel como entrada controlada", text: "Los reportes descargados desde Drivin se identifican por estructura, se validan y se consolidan sin duplicar períodos ya importados." },
  { icon: GitBranch, title: "Del indicador al detalle", text: "Tarjetas, alertas y gráficos son navegables: cada cifra puede abrir la tabla correspondiente con los filtros ya aplicados." },
  { icon: LockKeyhole, title: "Privacidad y trazabilidad", text: "Las rutas se protegen por rol, las acciones relevantes quedan registradas y la demostración pública utiliza datos sintéticos." },
];

export default function SupportSystemPage() {
  return (
    <MainLayout>
      <section className="paper-grid pt-32 pb-20 sm:pt-40 sm:pb-28">
        <Container>
          <Link to="/projects" className="inline-flex items-center gap-2 text-sm font-bold text-emerald-400">
            <ArrowLeft size={17} /> Volver a proyectos
          </Link>
          <div className="mt-10 grid gap-10 lg:grid-cols-[1.25fr_.75fr] lg:items-end">
            <div>
              <p className="text-xs font-bold uppercase tracking-[.24em] text-emerald-400">Caso de estudio · Producto interno en evolución</p>
              <h1 className="mt-5 text-5xl font-extrabold leading-[.94] tracking-[-.065em] text-zinc-100 sm:text-7xl">Plataforma de Soporte y Analítica Operacional</h1>
            </div>
            <div>
              <p className="text-xl leading-9 text-zinc-400">Una aplicación que conecta atención de soporte, mensajes de Teams y reportes de Drivin para transformar trabajo disperso en una operación trazable y medible.</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {["Laravel 13", "React 19", "TypeScript", "PostgreSQL", "Inertia 3", "Tailwind CSS", "Docker"].map((item) => <span key={item} className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1.5 text-xs font-bold text-emerald-300">{item}</span>)}
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-y border-zinc-800 bg-zinc-900 py-12 sm:py-16">
        <Container>
          <img src="/support-overview-demo.svg" alt="Dashboard demostrativo de la plataforma de soporte" className="w-full rounded-2xl border border-white/10 shadow-2xl" />
          <p className="mt-4 text-center text-xs text-zinc-500">Las capturas utilizan información sintética para proteger los datos de la operación real.</p>
        </Container>
      </section>

      <section className="bg-zinc-950 py-24 sm:py-32">
        <Container className="grid gap-14 lg:grid-cols-[.72fr_1.28fr]">
          <div>
            <p className="text-xs font-bold uppercase tracking-[.24em] text-emerald-400">El desafío</p>
            <h2 className="mt-4 text-4xl font-bold tracking-[-.05em] text-zinc-100 sm:text-5xl">Un mismo problema, repartido entre mensajes, planillas y conocimiento informal.</h2>
          </div>
          <div className="space-y-7 text-lg leading-8 text-zinc-400">
            <p>Las solicitudes llegaban por Teams y otros canales, mientras el seguimiento dependía de registros manuales. Eso dificultaba saber qué estaba pendiente, cuánto demoraba una atención y si un transporte ya había sido registrado.</p>
            <p>En paralelo, Drivin entregaba reportes Excel valiosos, pero sin una forma cómoda de comparar días, semanas o meses ni de cruzar flota, entregas y puntos de atención. La solución debía cubrir ambos mundos sin mezclar sus permisos ni exponer información sensible.</p>
          </div>
        </Container>
      </section>

      <section className="border-y border-zinc-800 bg-zinc-900/60 py-24 sm:py-32">
        <Container>
          <div className="max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[.24em] text-emerald-400">Cómo funciona</p>
            <h2 className="mt-4 text-4xl font-bold tracking-[-.05em] text-zinc-100 sm:text-5xl">Del dato de origen a una decisión verificable.</h2>
          </div>
          <div className="mt-14 grid gap-px overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-800 md:grid-cols-2 xl:grid-cols-4">
            {process.map((step) => <article key={step.number} className="bg-zinc-950 p-8"><span className="font-mono text-sm font-bold text-emerald-400">{step.number}</span><h3 className="mt-8 text-2xl font-bold tracking-[-.04em] text-zinc-100">{step.title}</h3><p className="mt-4 leading-7 text-zinc-400">{step.text}</p></article>)}
          </div>
        </Container>
      </section>

      <section className="bg-zinc-950 py-24 sm:py-32">
        <Container>
          <div className="grid gap-10 lg:grid-cols-2">
            <article className="rounded-3xl border border-zinc-800 bg-zinc-900 p-8 sm:p-10">
              <MessageSquareText className="text-emerald-400" />
              <p className="mt-8 text-xs font-bold uppercase tracking-[.22em] text-emerald-400">Módulo 01</p>
              <h2 className="mt-3 text-3xl font-bold tracking-[-.04em] text-zinc-100">Gestión de soporte</h2>
              <p className="mt-4 leading-7 text-zinc-400">Organiza el ciclo completo de una atención: ingreso, asociación con Teams, resolución, consulta histórica y supervisión.</p>
              <FeatureList items={supportFeatures} />
            </article>
            <article className="rounded-3xl border border-zinc-800 bg-zinc-900 p-8 sm:p-10">
              <BarChart3 className="text-emerald-400" />
              <p className="mt-8 text-xs font-bold uppercase tracking-[.22em] text-emerald-400">Módulo 02</p>
              <h2 className="mt-3 text-3xl font-bold tracking-[-.04em] text-zinc-100">Analítica Drivin</h2>
              <p className="mt-4 leading-7 text-zinc-400">Consolida reportes de preliquidación, flota y clientes para comparar períodos y encontrar excepciones operacionales.</p>
              <FeatureList items={drivinFeatures} />
            </article>
          </div>
        </Container>
      </section>

      <section className="border-y border-zinc-800 bg-zinc-900/60 py-24 sm:py-32">
        <Container>
          <div className="max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[.24em] text-emerald-400">Vistas del producto</p>
            <h2 className="mt-4 text-4xl font-bold tracking-[-.05em] text-zinc-100 sm:text-5xl">Una interfaz distinta para cada tarea.</h2>
            <p className="mt-6 text-lg leading-8 text-zinc-400">El diseño prioriza lectura rápida, filtros explícitos y rutas cortas entre un resumen y los registros que explican cada cifra.</p>
          </div>
          <div className="mt-16 space-y-20">
            {gallery.map((item, index) => <article key={item.src} className="grid gap-8 lg:grid-cols-[1.35fr_.65fr] lg:items-center"><img src={item.src} alt={item.title} className={`w-full rounded-2xl border border-zinc-700 shadow-2xl ${index % 2 === 1 ? "lg:order-2" : ""}`} /><div className={index % 2 === 1 ? "lg:order-1" : ""}><p className="text-xs font-bold uppercase tracking-[.24em] text-emerald-400">{item.eyebrow}</p><h3 className="mt-4 text-3xl font-bold tracking-[-.04em] text-zinc-100">{item.title}</h3><p className="mt-5 text-lg leading-8 text-zinc-400">{item.text}</p></div></article>)}
          </div>
        </Container>
      </section>

      <section className="bg-zinc-950 py-24 sm:py-32">
        <Container>
          <div className="grid gap-6 md:grid-cols-2">
            {decisions.map(({ icon: Icon, title, text }) => <article key={title} className="rounded-3xl border border-zinc-800 bg-zinc-900 p-8"><Icon className="text-emerald-400" /><h3 className="mt-6 text-2xl font-bold tracking-[-.04em] text-zinc-100">{title}</h3><p className="mt-4 leading-7 text-zinc-400">{text}</p></article>)}
          </div>
        </Container>
      </section>

      <section className="border-y border-zinc-800 bg-zinc-900/60 py-24 sm:py-32">
        <Container className="grid gap-14 lg:grid-cols-[.8fr_1.2fr] lg:items-start">
          <div><p className="text-xs font-bold uppercase tracking-[.24em] text-emerald-400">Mi aporte</p><h2 className="mt-4 text-4xl font-bold tracking-[-.05em] text-zinc-100 sm:text-5xl">Del levantamiento al despliegue.</h2></div>
          <div className="grid gap-5 sm:grid-cols-2">
            {[["Producto", "Levantamiento iterativo con usuarios, definición de roles y priorización de flujos."], ["Backend", "Modelo relacional, servicios de importación, reglas de negocio, permisos y auditoría."], ["Frontend", "Diseño responsive, componentes reutilizables, filtros y navegación contextual."], ["Calidad", "89 pruebas automatizadas, análisis estático, validación de tipos y revisión visual."]].map(([title, text]) => <article key={title} className="rounded-2xl border border-zinc-800 bg-zinc-950 p-6"><h3 className="font-bold text-zinc-100">{title}</h3><p className="mt-3 leading-7 text-zinc-400">{text}</p></article>)}
          </div>
        </Container>
      </section>

      <section className="bg-zinc-950 py-24">
        <Container className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
          <div><p className="text-xs font-bold uppercase tracking-[.24em] text-emerald-400">Privacidad por diseño</p><h2 className="mt-4 max-w-3xl text-4xl font-bold tracking-[-.05em] text-zinc-100 sm:text-6xl">Un caso real, presentado sin exponer la operación.</h2><p className="mt-6 max-w-2xl leading-8 text-zinc-400">La versión pública contiene el núcleo demostrativo del sistema y utiliza información sintética. No publica nombres, correos, mensajes, archivos ni datos operacionales del entorno original.</p></div>
          <a href="https://github.com/silvajorgefigueroatrabajo/soporte-ti-demo" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-emerald-400 px-6 py-3.5 text-sm font-bold text-zinc-950 transition hover:bg-emerald-300">Ver demo pública <ArrowUpRight size={17} /></a>
        </Container>
      </section>
    </MainLayout>
  );
}

function FeatureList({ items }: { items: string[] }) {
  return <ul className="mt-8 space-y-4">{items.map((feature) => <li key={feature} className="flex gap-3 leading-7 text-zinc-300"><CheckCircle2 size={19} className="mt-1 shrink-0 text-emerald-400" /> {feature}</li>)}</ul>;
}
