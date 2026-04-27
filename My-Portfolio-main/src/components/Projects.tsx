import { motion } from "framer-motion";
import { ArrowUpRight, Eye } from "lucide-react";
import { SectionHeading } from "./About";
import { GithubIcon } from "./BrandIcons";

type Project = {
  title: string;
  tagline: string;
  description: string;
  tags: string[];
  link: string;
  repo?: string;
  accent: string;
};

const projects: Project[] = [
  {
    title: "CampusCollab",
    tagline: "University project management at scale",
    description:
      "Scalable MERN platform with JWT auth, 27+ RESTful endpoints, role-based access, and a smart skill-matching algorithm for student-professor collaboration.",
    tags: ["MERN", "Gemini API", "Socket.io", "SonarQube"],
    link: "https://github.com/Hassaan-Zafar1",
    repo: "https://github.com/Hassaan-Zafar1/CampusCollab",
    accent: "from-cyan-400/40 to-blue-500/40",
  },
  {
    title: "Notes Management System",
    tagline: "Secure full-stack notes app",
    description:
      "Production-grade MERN notes app with JWT auth, OTP email verification, comprehensive testing (Mocha/Chai), and SonarQube quality gates.",
    tags: ["MERN", "JWT", "Mocha/Chai", "SonarQube"],
    link: "https://github.com/Hassaan-Zafar1",
    repo: "https://github.com/Hassaan-Zafar1/hassaan-zafar-mern-10pshine",
    accent: "from-fuchsia-400/40 to-purple-500/40",
  },
  // {
  //   title: "PDF Semantic Search",
  //   tagline: "RAG pipeline for documents",
  //   description:
  //     "End-to-end semantic search over PDFs using vector embeddings, FAISS similarity search, and Retrieval-Augmented Generation for context-aware answers.",
  //   tags: ["Python", "FAISS", "RAG", "HuggingFace"],
  //   link: "https://colab.research.google.com/drive/1Zx5VrzHHgeWQW5gOIgHwEy1F7thObxL1",
  //   repo: "https://github.com/Hassaan-Zafar1/VectorBasedSemanticSearchWorkshop",
  //   accent: "from-violet-400/40 to-indigo-500/40",
  // },
  {
    title: "AI Meeting Tracker",
    tagline: "Smart action-item extraction",
    description:
      "Web app that processes meeting notes to auto-identify action items, assign tasks, track completion, and surface deadline-risk insights.",
    tags: ["MERN", "Gemini API", "Redis", "Socket.io"],
    link: "https://github.com/Hassaan-Zafar1",
    repo: "https://github.com/Hassaan-Zafar1/AI-Meeting-Tracker",
    accent: "from-emerald-400/40 to-cyan-500/40",
  },
];

export function Projects() {
  return (
    <section id="projects" className="relative py-28 overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex items-end justify-between gap-6 flex-wrap">
          <SectionHeading eyebrow="03 — Selected Work" title="Things I've built" />
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-muted-foreground max-w-sm"
          >
            A handful of recent projects spanning AI, full-stack, and real-time systems.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mt-14">
          {projects.map((p, i) => (
            <ProjectCard key={p.title} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.7, delay: index * 0.08 }}
      className="group relative glass-card rounded-3xl p-7 md:p-8 overflow-hidden hover:-translate-y-2 transition-all duration-500"
    >
      {/* Accent gradient blob */}
      <div className={`absolute -top-32 -right-32 h-64 w-64 rounded-full bg-gradient-to-br ${project.accent} blur-3xl opacity-60 group-hover:opacity-100 transition-opacity`} />

      <div className="relative">
        <div className="flex items-start justify-between gap-4">
          <div>
            <div className="text-xs font-mono text-primary uppercase tracking-widest">
              0{index + 1}
            </div>
            <h3 className="mt-2 text-2xl md:text-3xl font-bold tracking-tight">
              {project.title}
            </h3>
            <p className="mt-1 text-sm text-muted-foreground">{project.tagline}</p>
          </div>
        </div>

        <p className="mt-5 text-foreground/80 leading-relaxed">{project.description}</p>

        <div className="mt-6 flex flex-wrap gap-1.5">
          {project.tags.map((t) => (
            <span key={t} className="text-xs px-2.5 py-1 rounded-md bg-surface-2/70 border border-border text-foreground/80">
              {t}
            </span>
          ))}
        </div>

        <div className="mt-7 flex items-center gap-3 pt-5 border-t border-border/60">
          <a
            href={project.link}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-primary to-accent text-primary-foreground text-sm font-medium hover:scale-105 transition-transform"
          >
            <Eye className="h-4 w-4" />
            View Project
          </a>
          {project.repo && (
            <a
              href={project.repo}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm hover:border-primary/40 transition-colors"
            >
              <GithubIcon className="h-4 w-4" />
              Source
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
}
