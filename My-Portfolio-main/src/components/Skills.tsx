import { motion } from "framer-motion";
import { SectionHeading } from "./About";
import { Code2, Database, Brain, Wrench } from "lucide-react";

const groups = [
  {
    icon: <Code2 className="h-5 w-5" />,
    title: "Languages",
    items: ["Python", "JavaScript", "TypeScript", "C", "C++", "Apex", "SQL", "HTML", "CSS"],
  },
  {
    icon: <Wrench className="h-5 w-5" />,
    title: "Frameworks & Tools",
    items: ["React", "Node.js", "Express.js", "Tailwind", "FAISS", "Socket.io", "Streamlit", "Git", "Qt", "SonarQube", "Jest", "Mocha/Chai"],
  },
  {
    icon: <Database className="h-5 w-5" />,
    title: "Databases",
    items: ["MongoDB", "MySQL", "PostgreSQL"],
  },
  {
    icon: <Brain className="h-5 w-5" />,
    title: "AI / ML & NLP",
    items: ["LLM Integration", "HuggingFace (BERT)", "PyTorch", "Scikit-learn", "NLTK", "spaCy", "Vector Embeddings", "Semantic Search", "RAG", "TF-IDF", "Word2Vec", "VADER"],
  },
];

export function Skills() {
  return (
    <section id="skills" className="relative py-28 overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-primary/10 blur-3xl" />
      <div className="container mx-auto px-6 relative z-10">
        <SectionHeading eyebrow="02 — Skills" title="Tech I work with" />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-14">
          {groups.map((g, i) => (
            <motion.div
              key={g.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="glass-card rounded-2xl p-6 hover:border-primary/40 transition-all hover:-translate-y-1 group"
            >
              <div className="h-11 w-11 rounded-xl bg-gradient-to-br from-primary/25 to-accent/25 flex items-center justify-center text-primary mb-4 group-hover:scale-110 transition-transform">
                {g.icon}
              </div>
              <h3 className="text-lg font-semibold mb-4">{g.title}</h3>
              <div className="flex flex-wrap gap-1.5">
                {g.items.map((s) => (
                  <span key={s} className="text-xs px-2.5 py-1 rounded-md bg-surface-2/70 border border-border text-foreground/80 hover:border-primary/40 hover:text-primary transition-colors">
                    {s}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
