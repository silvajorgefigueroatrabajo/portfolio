import MainLayout from "@/components/layout/MainLayout";
import Container from "@/components/ui/Container";
import experience from "@/data/experience";
import skillGroups from "@/data/skills";

export default function AboutPage() {
  return (
    <MainLayout>
      <section className="pt-36 pb-24 sm:pt-44 sm:pb-32">
        <Container className="grid gap-10 lg:grid-cols-[.65fr_1.35fr]">
          <p className="text-xs font-bold uppercase tracking-[.24em] text-emerald-400">Sobre mí · Santiago</p>
          <div>
            <h1 className="text-5xl font-extrabold leading-[.95] tracking-[-.065em] text-zinc-100 sm:text-7xl">Desarrollo con criterio, curiosidad y foco en procesos.</h1>
            <p className="mt-8 max-w-3xl text-xl leading-9 text-zinc-400">Soy Ingeniero en Informática titulado de INACAP. Me interesa entender cómo funciona un proceso, detectar dónde se pierde tiempo y construir una solución mantenible que conecte frontend, backend y datos.</p>
          </div>
        </Container>
      </section>

      <section className="border-y border-zinc-800 bg-zinc-900/60 py-24 text-zinc-100 sm:py-32">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[.65fr_1.35fr]">
            <div><p className="text-xs font-bold uppercase tracking-[.24em] text-[#8fd09e]">Experiencia</p><h2 className="mt-4 text-4xl font-bold tracking-[-.05em] sm:text-5xl">Trayectoria profesional</h2></div>
            <div>
              {experience.map((item) => (
                <article key={item.id} className="border-t border-white/15 pt-8">
                  <div className="flex flex-col gap-3 sm:flex-row sm:justify-between"><div><h3 className="text-2xl font-bold">{item.role}</h3><p className="mt-1 text-[#8fd09e]">{item.company}</p></div><p className="text-sm text-[#9fb0a7]">{item.period}</p></div>
                  <p className="mt-6 max-w-3xl leading-7 text-[#c1cec7]">{item.description}</p>
                  <ul className="mt-7 grid gap-3 text-sm leading-6 text-[#d5ded8] sm:grid-cols-2">{item.achievements.map((achievement) => <li key={achievement} className="flex gap-3"><span className="text-[#8fd09e]">●</span>{achievement}</li>)}</ul>
                  <div className="mt-8 flex flex-wrap gap-2">{item.technologies.map((technology) => <span key={technology} className="rounded-full border border-white/15 px-3 py-1.5 text-xs text-[#c7d4cd]">{technology}</span>)}</div>
                </article>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-zinc-950 py-24 sm:py-32">
        <Container>
          <p className="text-xs font-bold uppercase tracking-[.24em] text-emerald-400">Herramientas</p>
          <h2 className="mt-4 max-w-3xl text-4xl font-bold tracking-[-.05em] text-zinc-100 sm:text-6xl">Lo que uso para construir.</h2>
          <div className="mt-14 grid gap-px overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-800 md:grid-cols-2">
            {skillGroups.map((group) => <article key={group.id} className="bg-zinc-900 p-7 sm:p-9"><p className="text-xs font-bold uppercase tracking-[.18em] text-emerald-400">{group.label}</p><h3 className="mt-3 text-2xl font-bold tracking-[-.035em] text-zinc-100">{group.title}</h3><p className="mt-5 leading-8 text-zinc-400">{group.skills.join(" · ")}</p></article>)}
          </div>
        </Container>
      </section>
    </MainLayout>
  );
}
