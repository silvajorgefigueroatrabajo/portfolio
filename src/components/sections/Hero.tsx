import { ArrowDownRight, ArrowRight, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import profile from "@/data/profile";
import contact from "@/config/contact";

export default function Hero() {
  return (
    <section className="paper-grid relative min-h-[92vh] pt-20">
      <Container className="grid min-h-[calc(92vh-5rem)] items-center gap-12 py-16 lg:grid-cols-[1.25fr_.75fr] lg:py-20">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .55 }}>
          <div className="flex flex-wrap items-center gap-3 text-xs font-bold uppercase tracking-[.22em] text-[#397457]">
            <span>{profile.role}</span><span className="h-1 w-1 rounded-full bg-[#6a8f76]" /><span>{profile.title}</span>
          </div>
          <h1 className="mt-7 max-w-5xl text-[clamp(3.8rem,9vw,8.5rem)] font-extrabold leading-[.86] tracking-[-.075em] text-[#10261d]">
            Código que<br /><span className="text-[#2f7d50]">hace avanzar.</span>
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-8 text-[#52665c] sm:text-xl">{profile.description}</p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link to="/projects" className="inline-flex items-center gap-2 rounded-full bg-[#183126] px-6 py-3.5 text-sm font-bold text-white transition hover:bg-[#2f7d50]">Explorar proyectos <ArrowRight size={17} /></Link>
            <Link to="/about" className="inline-flex items-center gap-2 rounded-full border border-[#183126]/20 bg-[#f4f1e8] px-6 py-3.5 text-sm font-bold transition hover:border-[#2f7d50] hover:text-[#2f7d50]">Conocer mi experiencia</Link>
          </div>
        </motion.div>
        <motion.aside initial={{ opacity: 0, scale: .96 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: .15, duration: .55 }} className="relative mx-auto w-full max-w-md lg:justify-self-end">
          <div className="leaf-mark aspect-square bg-[#b9d8b8]" />
          <div className="absolute inset-[12%] leaf-mark bg-[#2f7d50]" />
          <div className="absolute inset-[25%] leaf-mark flex items-center justify-center bg-[#10261d] text-[#dcebdc]"><span className="display -rotate-[-10deg] text-5xl font-extrabold tracking-[-.08em]">JS</span></div>
          <div className="absolute -bottom-5 -left-3 rounded-2xl border border-[#183126]/10 bg-[#fffdf6] p-4 shadow-[0_18px_50px_rgba(16,38,29,.12)]">
            <p className="flex items-center gap-2 text-sm font-semibold"><MapPin size={16} className="text-[#2f7d50]" />{contact.location}</p>
            <p className="mt-1 text-xs text-[#6b7c73]">Disponible para oportunidades</p>
          </div>
          <ArrowDownRight className="absolute -right-2 top-5 text-[#2f7d50]" size={36} />
        </motion.aside>
      </Container>
    </section>
  );
}
