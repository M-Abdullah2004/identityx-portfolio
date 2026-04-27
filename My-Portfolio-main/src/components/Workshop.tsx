import { motion } from "framer-motion";
import { ArrowUpRight, Eye } from "lucide-react";
import { SectionHeading } from "./About";
import { GithubIcon } from "./BrandIcons";

export function Workshop() {
  const workshopData = {
    title: "PDF Semantic Search",
    tagline: "RAG pipeline for documents",
    description:
      "Conducted a Workshop on End-to-end semantic search over PDFs using vector embeddings, FAISS similarity search, and Retrieval-Augmented Generation for context-aware answers.",
    tags: ["Python", "FAISS", "RAG", "HuggingFace"],
    link: "https://colab.research.google.com/drive/1Zx5VrzHHgeWQW5gOIgHwEy1F7thObxL1",
    repo: "https://github.com/Hassaan-Zafar1/VectorBasedSemanticSearchWorkshop",
    accent: "from-violet-400/40 to-indigo-500/40",
    images: [
      { src: "/me.jpeg" },
      { src: "/Poster.jpeg"},
      { src: "/classroom.jpeg"},
    ],
  };

  return (
    <section id="workshop" className="relative py-28 overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <SectionHeading eyebrow="05 — Workshop" title="Learning Sessions" />

        <div className="grid md:grid-cols-2 gap-8 mt-14 items-start">
          {/* Left: Image Collage */}
          {/* <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7 }}
            className="grid grid-cols-2 gap-4"
          >
            {workshopData.images.map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative aspect-square overflow-hidden rounded-2xl"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {/* Placeholder styling if image not found }
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center text-sm text-muted-foreground">
                  {img.alt}
                </div>
              </motion.div>
            ))}
          </motion.div> */}
          {/* Left: Image Collage */}
<motion.div
  initial={{ opacity: 0, x: -40 }}
  whileInView={{ opacity: 1, x: 0 }}
  viewport={{ once: true, margin: "-50px" }}
  transition={{ duration: 0.7 }}
  className="grid grid-cols-2 gap-4"
>
  {workshopData.images.map((img, i) => (
    <motion.div
      key={i}
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: i * 0.1 }}
      className={`relative overflow-hidden rounded-2xl ${
        i === 2 ? "col-span-2 aspect-video" : "aspect-square"
      }`}
    >
      <img
        src={img.src}
        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
      />
    </motion.div>
  ))}
</motion.div>

          {/* Right: Workshop Details Card */}
          <motion.article
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7 }}
            className="group relative glass-card rounded-3xl p-8 overflow-hidden"
          >
            {/* Accent gradient blob */}
            <div
              className={`absolute -top-32 -right-32 h-64 w-64 rounded-full bg-gradient-to-br ${workshopData.accent} blur-3xl opacity-60 group-hover:opacity-100 transition-opacity`}
            />

            <div className="relative">
              <div className="text-xs font-mono text-primary uppercase tracking-widest">
                Workshop
              </div>

              <h3 className="mt-3 text-3xl md:text-4xl font-bold tracking-tight">
                {workshopData.title}
              </h3>

              <p className="mt-2 text-sm text-muted-foreground">
                {workshopData.tagline}
              </p>

              <p className="mt-6 text-foreground/80 leading-relaxed">
                {workshopData.description}
              </p>

              <div className="mt-7 flex flex-wrap gap-1.5">
                {workshopData.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2.5 py-1 rounded-md bg-surface-2/70 border border-border text-foreground/80"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="mt-8 flex items-center gap-3 pt-6 border-t border-border/60 flex-wrap">
                <a
                  href={workshopData.link}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-gradient-to-r from-primary to-accent text-primary-foreground text-sm font-medium hover:scale-105 transition-transform"
                >
                  <Eye className="h-4 w-4" />
                  View on Colab
                </a>
                <a
                  href={workshopData.repo}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2 rounded-full glass text-sm hover:border-primary/40 transition-colors"
                >
                  <GithubIcon className="h-4 w-4" />
                  Source
                </a>
              </div>
            </div>
          </motion.article>
        </div>
      </div>
    </section>
  );
}