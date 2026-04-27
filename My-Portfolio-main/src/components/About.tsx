import { motion } from "framer-motion";
import { GraduationCap, MapPin, Briefcase } from "lucide-react";

export function About() {
  return (
    <section id="about" className="relative py-28 overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <SectionHeading eyebrow="01 — About" title="Bridging code & intelligence" />

        <div className="grid lg:grid-cols-[1fr_1.4fr] gap-12 mt-14">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-4"
          >
            <InfoCard icon={<GraduationCap className="h-5 w-5" />} title="Education" body="BSCS at NED University of Engineering & Technology — Class of 2027 · CGPA 3.79" />
            <InfoCard icon={<MapPin className="h-5 w-5" />} title="Based in" body="Karachi, Sindh, Pakistan" />
            <InfoCard icon={<Briefcase className="h-5 w-5" />} title="Focus" body="AI Engineering · MERN · LLM Integration" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="glass-card rounded-3xl p-8 md:p-10 relative overflow-hidden"
          >
            <div className="absolute -top-24 -right-24 h-56 w-56 rounded-full bg-primary/15 blur-3xl" />
            <div className="absolute -bottom-24 -left-24 h-56 w-56 rounded-full bg-accent/15 blur-3xl" />
            <p className="relative text-lg md:text-xl leading-relaxed text-foreground/90">
              I'm a Computer Science undergrad with hands-on experience building{" "}
              <span className="text-gradient font-semibold">AI-powered systems</span> — including
              RAG semantic search pipelines, intelligent chatbots, and real-time collaboration platforms.
            </p>
            <p className="relative mt-5 text-base text-muted-foreground leading-relaxed">
              My toolbox spans the MERN stack and modern LLM integration. I love combining web technologies
              with machine learning to ship real-world solutions, and I'm actively seeking opportunities in
              AI engineering and AI-powered web development.
            </p>

            <div className="relative mt-8 flex flex-wrap gap-2">
              {["LLM Integration", "RAG", "MERN", "Real-Time Systems", "Vector Search", "REST APIs"].map((t) => (
                <span key={t} className="px-3 py-1 text-xs rounded-full bg-surface-2/60 border border-primary/20 text-foreground/80">
                  {t}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function InfoCard({ icon, title, body }: { icon: React.ReactNode; title: string; body: string }) {
  return (
    <div className="glass-card rounded-2xl p-6 hover:border-primary/30 transition-colors group">
      <div className="flex items-start gap-4">
        <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
          {icon}
        </div>
        <div>
          <div className="text-sm uppercase tracking-widest text-muted-foreground">{title}</div>
          <div className="mt-1 text-foreground">{body}</div>
        </div>
      </div>
    </div>
  );
}

export function SectionHeading({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div className="max-w-3xl">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-sm font-mono text-primary uppercase tracking-[0.3em]"
      >
        {eyebrow}
      </motion.div>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="mt-3 text-4xl md:text-6xl font-bold tracking-tight"
      >
        {title}
      </motion.h2>
    </div>
  );
}
