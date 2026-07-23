import { motion } from "framer-motion";

import MainLayout from "@/components/layout/MainLayout";
import Container from "@/components/ui/Container";
import experience from "@/data/experience";
import skillGroups from "@/data/skills";

export default function AboutPage() {
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
              Perfil profesional
            </p>

            <h1 className="mt-4 text-4xl font-semibold tracking-tight text-zinc-100 sm:text-6xl">
              Desarrollo software y resuelvo problemas tecnológicos.
            </h1>

            <div className="mt-8 space-y-5 text-lg leading-8 text-zinc-400">
              <p>
                Soy Jorge Silva, Ingeniero en Informática titulado de INACAP,
                con experiencia en desarrollo Full Stack y soporte TI.
              </p>

              <p>
                He trabajado desarrollando aplicaciones web con Laravel, PHP y
                bases de datos SQL. Actualmente trabajo en soporte tecnológico
                en Abastible, donde resuelvo incidencias y apoyo la continuidad
                operativa de los usuarios.
              </p>

              <p>
                Mi objetivo es seguir creciendo como desarrollador, construir
                soluciones útiles y aplicar la tecnología para mejorar procesos
                reales.
              </p>
            </div>
          </motion.div>
        </Container>
      </section>

      <section className="border-t border-zinc-900 py-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
                Trayectoria
              </p>

              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-zinc-100 sm:text-4xl">
                Experiencia profesional
              </h2>

              <p className="mt-5 max-w-md leading-7 text-zinc-400">
                Una combinación de desarrollo de software, soporte técnico y
                resolución de problemas.
              </p>
            </div>

            <div className="space-y-6">
              {experience.map((item) => (
                <article
                  key={item.id}
                  className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6"
                >
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <h3 className="text-xl font-semibold text-zinc-100">
                        {item.role}
                      </h3>

                      <p className="mt-1 text-zinc-400">{item.company}</p>
                    </div>

                    <span className="text-sm text-zinc-500">
                      {item.period}
                    </span>
                  </div>

                  <p className="mt-5 leading-7 text-zinc-400">
                    {item.description}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {item.technologies.map((technology) => (
                      <span
                        key={technology}
                        className="rounded-full border border-zinc-800 bg-zinc-950 px-3 py-1 text-xs text-zinc-300"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="border-t border-zinc-900 py-24">
        <Container>
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
              Conocimientos
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-zinc-100 sm:text-4xl">
              Tecnologías y herramientas
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {skillGroups.map((group) => (
              <article
                key={group.id}
                className="rounded-2xl border border-zinc-800 bg-zinc-900/30 p-6"
              >
                <h3 className="text-lg font-semibold text-zinc-100">
                  {group.title}
                </h3>

                <div className="mt-5 flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full bg-zinc-800 px-3 py-1.5 text-sm text-zinc-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>
    </MainLayout>
  );
}