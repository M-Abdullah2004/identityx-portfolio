import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { Experience } from "@/components/Experience";
import { Workshop } from "@/components/Workshop";
import { Contact } from "@/components/Contact";
import { StarField } from "@/components/StarField";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Hassaan Zafar — AI & Full-stack Developer Portfolio" },
      {
        name: "description",
        content:
          "Portfolio of Hassaan Zafar — Computer Science undergrad at NED University building AI-powered systems, RAG pipelines, and MERN full-stack products.",
      },
      { property: "og:title", content: "Hassaan Zafar — AI & Full-stack Developer" },
      {
        property: "og:description",
        content: "AI engineering · MERN · LLM Integration · RAG · Real-time systems.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="relative min-h-screen bg-background text-foreground">
      <StarField />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Workshop />
        <Contact />
      </main>
    </div>
  );
}
