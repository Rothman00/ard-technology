import { motion, useMotionValue } from "framer-motion";

export default function App() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  return (
    <div onMouseMove={(e) => {
        mouseX.set(e.clientX);
        mouseY.set(e.clientY);
      }} className="min-h-screen bg-[#0a0f1c] text-slate-100 font-sans overflow-x-hidden">

      {/* HERO */}
      <section className="relative flex flex-col items-center justify-center text-center px-6 py-32">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.25),transparent_55%)]"></div>

        <motion.div
          className="pointer-events-none absolute inset-0"
          style={{
            background: "radial-gradient(600px at center, rgba(59,130,246,0.18), transparent 60%)",
            x: mouseX,
            y: mouseY,
            translateX: "-50%",
            translateY: "-50%",
          }}
        />

        <img
          src="/logo.png"
          alt="ARD Technology"
          className="w-44 h-44 mb-8 drop-shadow-[0_0_35px_rgba(59,130,246,0.85)]"
        />

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-extrabold tracking-tight"
        >
          ARD <span className="text-blue-500">Technology</span>
        </motion.h1>

        <p className="mt-8 max-w-3xl text-lg md:text-xl text-slate-300 leading-relaxed">
          Ingenieros en Sistemas y TI. Transformamos ideas ambiciosas en software robusto, escalable y listo para producción.
        </p>

        <div className="mt-12 flex gap-6 z-10">
          <motion.a
            href="#contacto"
            initial={{ boxShadow: "0 0 0 rgba(59,130,246,0.0)" }}
            animate={{
              boxShadow: [
                "0 0 0 rgba(59,130,246,0.0)",
                "0 0 25px rgba(59,130,246,0.6)",
                "0 0 0 rgba(59,130,246,0.0)",
              ],
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            whileHover={{
              scale: 1.08,
              boxShadow: "0 0 45px rgba(59,130,246,0.9)",
            }}
            whileTap={{ scale: 0.96 }}
            className="px-10 py-4 rounded-xl bg-blue-600 hover:bg-blue-500 transition-all font-semibold shadow-lg shadow-blue-600/30"
          >
            Contáctanos
          </motion.a>

          <motion.a
            href="#proyectos"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.97 }}
            className="px-10 py-4 rounded-xl border border-blue-500/40 hover:bg-blue-500/10 transition-all"
          >
            Proyectos
          </motion.a>

        </div>
      </section>

      {/* PERFIL */}
      <section className="max-w-7xl mx-auto px-6 py-28">
        <h2 className="text-4xl md:text-5xl font-bold mb-10">Quiénes somos</h2>
        <p className="text-slate-300 text-lg leading-relaxed max-w-4xl">
          Somos un equipo de desarrolladores Full Stack y Backend con más de 3 años de experiencia. Diseñamos y construimos soluciones tecnológicas alineadas a los cambios constantes del mundo digital, priorizando rendimiento, seguridad y escalabilidad.
        </p>
      </section>

      {/* TECNOLOGÍAS */}
      <section className="relative bg-[#0f1629] py-28">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold mb-16">Stack Tecnológico</h2>

          <div className="grid md:grid-cols-3 gap-10">
            <TechCard title="Lenguajes" items={["PHP", "JavaScript", "Java", ".NET", "TypeScript", "Dart", "Python"]} />
            <TechCard title="Frameworks" items={["CodeIgniter 4", "Laravel", "React", "Vue", "Node.js", "Angular", "Flutter", "React Native", "Next.js", "Spring Boot"]} />
            <TechCard title="Infraestructura" items={["MySQL", "PostgreSQL", "SQL Server", "Firebase", "MongoDB", "Docker"]} />
          </div>
        </div>
      </section>

      {/* PROYECTOS */}
      <section id="proyectos" className="max-w-7xl mx-auto px-6 py-28">
        <h2 className="text-4xl md:text-5xl font-bold mb-16">Proyectos Destacados</h2>
        <div className="grid md:grid-cols-3 gap-10">
          <ProjectCard
            title="DEBICONTA PLUS"
            desc="ERP empresarial para gestión contable y administrativa."
            tech="CodeIgniter 4 · jQuery"
            link="https://debicontaplus.debisoft.ec/debiconta/"
          />
          <ProjectCard
            title="DEBIFACT"
            desc="Aplicación móvil para facturación electrónica."
            tech="Flutter"
            link="https://play.google.com/store/search?q=debifact&c=apps&hl=es_419"
          />
          <ProjectCard
            title="SIJAP"
            desc="Sistema móvil para la gestión de Juntas de Agua."
            tech="Flutter"
            link="https://play.google.com/store/apps/details?id=com.debisoft.sijap&hl=es_419"
          />
        </div>
      </section>

      {/* CONTACTO */}
      <section id="contacto" className="bg-[#0f1629] py-28">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold mb-16">Contacto Directo</h2>
          <div className="grid md:grid-cols-3 gap-10">
            <ContactCard name="Ing. Andrés Sánchez" phone="593985110772" />
            <ContactCard name="Ing. Rothman Torres" phone="593963686442" />
            <ContactCard name="Ing. Danny Flores" phone="61415074985" />
          </div>
        </div>
      </section>

      <footer className="text-center py-10 text-slate-400 text-sm">
        © {new Date().getFullYear()} ARD Technology · Software que deja huella
      </footer>
    </div>
  );
}

function TechCard({ title, items }) {
  return (
    <div className="rounded-2xl p-8 bg-[#0a0f1c] border border-slate-800 hover:border-blue-500/70 hover:shadow-xl hover:shadow-blue-500/10 transition-all">
      <h3 className="text-2xl font-semibold mb-6 text-blue-500">{title}</h3>
      <ul className="space-y-3 text-slate-300">
        {items.map((i) => (
          <li key={i} className="hover:text-blue-400 transition">• {i}</li>
        ))}
      </ul>
    </div>
  );
}

function ProjectCard({ title, desc, tech, link }) {
  return (
    <motion.a
      href={link}
      target="_blank"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      whileHover={{
        y: -10,
        boxShadow: "0 20px 40px rgba(59,130,246,0.15)",
      }}
      className="group block rounded-2xl p-8 bg-[#0a0f1c] border border-slate-800 hover:border-blue-500/70 transition-all"
    >
      <h3 className="text-2xl font-semibold mb-3 group-hover:text-blue-400 transition">
        {title}
      </h3>
      <p className="text-slate-300 mb-4">{desc}</p>
      <span className="text-sm text-blue-500">{tech}</span>
    </motion.a>
  );
}

function ContactCard({ name, phone }) {
  return (
    <motion.a
      href={`https://wa.me/${phone}`}
      target="_blank"
      whileHover={{
        scale: 1.05,
        boxShadow: "0 0 30px rgba(34,197,94,0.4)",
      }}
      whileTap={{ scale: 0.96 }}
      className="rounded-2xl p-8 bg-[#0a0f1c] border border-slate-800 hover:border-green-500/70 transition-all"
    >
      <h3 className="text-xl font-semibold mb-3">{name}</h3>
      <p className="text-slate-300">Contacto vía WhatsApp</p>
    </motion.a>
  );
}
