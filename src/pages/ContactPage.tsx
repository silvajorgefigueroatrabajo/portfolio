import { useState, type FormEvent } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { ArrowUpRight, Code2, Mail, Send } from "lucide-react";

import MainLayout from "@/components/layout/MainLayout";
import Container from "@/components/ui/Container";
import contact from "@/config/contact";
import emailConfig, { isEmailConfigured } from "@/config/email";

interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}

type SubmitStatus = "idle" | "sending" | "success" | "error";

const initialForm: ContactForm = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

export default function ContactPage() {
  const [form, setForm] = useState<ContactForm>(initialForm);
  const [status, setStatus] = useState<SubmitStatus>("idle");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (status === "sending") {
      return;
    }

    if (!isEmailConfigured) {
      console.error("La configuración de EmailJS está incompleta.");
      setStatus("error");
      return;
    }

    setStatus("sending");

    try {
      await emailjs.send(
        emailConfig.serviceId,
        emailConfig.templateId,
        {
          from_name: form.name.trim(),
          from_email: form.email.trim(),
          subject: form.subject.trim() || "Contacto desde el portafolio",
          message: form.message.trim(),
        },
        {
          publicKey: emailConfig.publicKey,
        },
      );

      setForm(initialForm);
      setStatus("success");
    } catch (error) {
      console.error("No fue posible enviar el mensaje:", error);
      setStatus("error");
    }
  };

  return (
    <MainLayout>
      <section className="pt-32 pb-24 sm:pt-40 sm:pb-32">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
              Contacto
            </p>

            <h1 className="mt-4 text-4xl font-semibold tracking-tight text-zinc-100 sm:text-6xl">
              Conversemos sobre tecnología, proyectos y oportunidades.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-400">
              Puedes contactarme para conversar sobre desarrollo de software,
              soporte tecnológico, oportunidades laborales o colaboración en
              nuevos proyectos.
            </p>
          </motion.div>

          <div className="mt-16 grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            <aside>
              <h2 className="text-xl font-semibold text-zinc-100">
                Información de contacto
              </h2>

              <p className="mt-4 leading-7 text-zinc-400">
                Selecciona uno de estos medios o completa el formulario.
              </p>

              <div className="mt-8 space-y-4">
                <a
                  href={`mailto:${contact.email}`}
                  className="group flex items-center justify-between rounded-2xl border border-zinc-800 bg-zinc-900/40 p-5 transition hover:border-cyan-400/50 hover:bg-zinc-900"
                >
                  <div className="flex items-center gap-4">
                    <span className="rounded-xl bg-zinc-800 p-3 text-cyan-400">
                      <Mail aria-hidden="true" size={20} />
                    </span>

                    <div>
                      <p className="text-sm text-zinc-500">Correo electrónico</p>
                      <p className="mt-1 break-all font-medium text-zinc-200">
                        {contact.email}
                      </p>
                    </div>
                  </div>

                  <ArrowUpRight
                    aria-hidden="true"
                    size={18}
                    className="text-zinc-500 transition group-hover:text-cyan-400"
                  />
                </a>

                <a
                  href={contact.github}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center justify-between rounded-2xl border border-zinc-800 bg-zinc-900/40 p-5 transition hover:border-cyan-400/50 hover:bg-zinc-900"
                >
                  <div className="flex items-center gap-4">
                    <span className="rounded-xl bg-zinc-800 p-3 text-cyan-400">
                      <Code2 aria-hidden="true" size={20} />
                    </span>

                    <div>
                      <p className="text-sm text-zinc-500">
                        Código y proyectos
                      </p>
                      <p className="mt-1 font-medium text-zinc-200">GitHub</p>
                    </div>
                  </div>

                  <ArrowUpRight
                    aria-hidden="true"
                    size={18}
                    className="text-zinc-500 transition group-hover:text-cyan-400"
                  />
                </a>
              </div>
            </aside>

            <form
              onSubmit={handleSubmit}
              className="rounded-3xl border border-zinc-800 bg-zinc-900/30 p-6 sm:p-8"
            >
              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="name"
                    className="text-sm font-medium text-zinc-200"
                  >
                    Nombre
                  </label>

                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    autoComplete="name"
                    value={form.name}
                    onChange={(event) => {
                      setForm((current) => ({
                        ...current,
                        name: event.target.value,
                      }));

                      if (status !== "idle" && status !== "sending") {
                        setStatus("idle");
                      }
                    }}
                    className="mt-2 w-full rounded-xl border border-zinc-800 bg-zinc-950 px-4 py-3 text-zinc-100 outline-none transition placeholder:text-zinc-600 focus:border-cyan-400"
                    placeholder="Tu nombre"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="text-sm font-medium text-zinc-200"
                  >
                    Correo
                  </label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    value={form.email}
                    onChange={(event) => {
                      setForm((current) => ({
                        ...current,
                        email: event.target.value,
                      }));

                      if (status !== "idle" && status !== "sending") {
                        setStatus("idle");
                      }
                    }}
                    className="mt-2 w-full rounded-xl border border-zinc-800 bg-zinc-950 px-4 py-3 text-zinc-100 outline-none transition placeholder:text-zinc-600 focus:border-cyan-400"
                    placeholder="nombre@correo.com"
                  />
                </div>
              </div>

              <div className="mt-6">
                <label
                  htmlFor="subject"
                  className="text-sm font-medium text-zinc-200"
                >
                  Asunto
                </label>

                <input
                  id="subject"
                  name="subject"
                  type="text"
                  value={form.subject}
                  onChange={(event) => {
                    setForm((current) => ({
                      ...current,
                      subject: event.target.value,
                    }));

                    if (status !== "idle" && status !== "sending") {
                      setStatus("idle");
                    }
                  }}
                  className="mt-2 w-full rounded-xl border border-zinc-800 bg-zinc-950 px-4 py-3 text-zinc-100 outline-none transition placeholder:text-zinc-600 focus:border-cyan-400"
                  placeholder="Motivo del contacto"
                />
              </div>

              <div className="mt-6">
                <label
                  htmlFor="message"
                  className="text-sm font-medium text-zinc-200"
                >
                  Mensaje
                </label>

                <textarea
                  id="message"
                  name="message"
                  required
                  rows={7}
                  value={form.message}
                  onChange={(event) => {
                    setForm((current) => ({
                      ...current,
                      message: event.target.value,
                    }));

                    if (status !== "idle" && status !== "sending") {
                      setStatus("idle");
                    }
                  }}
                  className="mt-2 w-full resize-none rounded-xl border border-zinc-800 bg-zinc-950 px-4 py-3 text-zinc-100 outline-none transition placeholder:text-zinc-600 focus:border-cyan-400"
                  placeholder="Cuéntame sobre el proyecto, oportunidad o consulta..."
                />
              </div>

              <button
                type="submit"
                disabled={status === "sending"}
                className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full bg-cyan-400 px-6 py-3 font-semibold text-zinc-950 transition hover:bg-cyan-300 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
              >
                {status === "sending" ? "Enviando..." : "Enviar mensaje"}
                <Send aria-hidden="true" size={18} />
              </button>

              <div aria-live="polite">
                {status === "success" && (
                  <p className="mt-4 text-sm leading-6 text-emerald-400">
                    El mensaje fue enviado correctamente. Gracias por
                    contactarme.
                  </p>
                )}

                {status === "error" && (
                  <p className="mt-4 text-sm leading-6 text-red-400">
                    No fue posible enviar el mensaje. Inténtalo nuevamente o
                    utiliza el correo de contacto.
                  </p>
                )}
              </div>

              <p className="mt-4 text-sm leading-6 text-zinc-500">
                El mensaje será enviado directamente desde el formulario.
              </p>
            </form>
          </div>
        </Container>
      </section>
    </MainLayout>
  );
}