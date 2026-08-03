import { ArrowUpRight, Code2, Mail } from "lucide-react";
import Container from "@/components/ui/Container";
import contact from "@/config/contact";

export default function Footer() {
  return (
    <footer className="bg-[#10261d] text-[#eef3ec]">
      <Container className="py-14 sm:py-20">
        <div className="grid gap-10 md:grid-cols-[1.3fr_.7fr] md:items-end">
          <div>
            <p className="text-xs font-bold uppercase tracking-[.24em] text-[#8fd09e]">Disponible para nuevas oportunidades</p>
            <h2 className="mt-5 max-w-2xl text-3xl font-bold tracking-[-.04em] sm:text-5xl">Construyamos algo útil.</h2>
            <p className="mt-5 max-w-xl leading-7 text-[#b8c5be]">Desarrollo software con foco en procesos, datos y experiencias que realmente facilitan el trabajo.</p>
          </div>
          <div className="flex gap-3 md:justify-end">
            <a href={`mailto:${contact.email}`} aria-label="Enviar correo" className="rounded-full border border-white/15 p-3 transition hover:border-[#8fd09e] hover:text-[#8fd09e]"><Mail size={19} /></a>
            <a href={contact.github} target="_blank" rel="noreferrer" aria-label="Visitar GitHub" className="rounded-full border border-white/15 p-3 transition hover:border-[#8fd09e] hover:text-[#8fd09e]"><Code2 size={19} /></a>
            <button type="button" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} aria-label="Volver arriba" className="rounded-full border border-white/15 p-3 transition hover:border-[#8fd09e] hover:text-[#8fd09e]"><ArrowUpRight size={19} className="-rotate-45" /></button>
          </div>
        </div>
        <div className="mt-14 flex flex-col gap-2 border-t border-white/10 pt-6 text-xs text-[#879a90] sm:flex-row sm:justify-between">
          <p>© {new Date().getFullYear()} Jorge Silva</p>
          <p>Santiago, Chile · React + TypeScript</p>
        </div>
      </Container>
    </footer>
  );
}
