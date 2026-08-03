import { ArrowUpRight, Code2, Mail, MapPin } from "lucide-react";
import MainLayout from "@/components/layout/MainLayout";
import Container from "@/components/ui/Container";
import contact from "@/config/contact";

export default function ContactPage() {
  return (
    <MainLayout>
      <section className="flex min-h-[85vh] items-center pt-28 pb-20">
        <Container>
          <div className="grid gap-14 lg:grid-cols-[1.15fr_.85fr] lg:items-end">
            <div>
              <p className="text-xs font-bold uppercase tracking-[.24em] text-emerald-400">Contacto</p>
              <h1 className="mt-6 max-w-4xl text-5xl font-extrabold leading-[.93] tracking-[-.07em] text-zinc-100 sm:text-7xl lg:text-8xl">¿Tienes un desafío que podamos resolver?</h1>
              <p className="mt-8 max-w-2xl text-lg leading-8 text-zinc-400">Estoy disponible para oportunidades como desarrollador, colaboraciones y proyectos relacionados con aplicaciones web, datos y automatización de procesos.</p>
            </div>
            <aside className="rounded-[2rem] border border-zinc-800 bg-zinc-900 p-7 text-zinc-100 sm:p-9">
              <p className="text-sm leading-7 text-[#b8c5be]">La forma más directa de contactarme es por correo. Cuéntame brevemente sobre la oportunidad o el proyecto y te responderé apenas pueda.</p>
              <a href={`mailto:${contact.email}`} className="mt-8 flex items-center justify-between gap-4 border-t border-white/15 pt-6 font-semibold transition hover:text-[#8fd09e]"><span className="flex min-w-0 items-center gap-3"><Mail size={19} /><span className="truncate">{contact.email}</span></span><ArrowUpRight size={20} /></a>
              <a href={contact.github} target="_blank" rel="noreferrer" className="mt-5 flex items-center justify-between gap-4 border-t border-white/15 pt-5 font-semibold transition hover:text-[#8fd09e]"><span className="flex items-center gap-3"><Code2 size={19} />GitHub</span><ArrowUpRight size={20} /></a>
              <p className="mt-5 flex items-center gap-3 border-t border-white/15 pt-5 text-sm text-[#b8c5be]"><MapPin size={19} />{contact.location}</p>
            </aside>
          </div>
        </Container>
      </section>
    </MainLayout>
  );
}
