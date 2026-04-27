import { motion } from "framer-motion";
import { SectionHeading } from "./About";

const items = [
  {
    role: "MERN Fullstack Developer Intern",
    company: "10pearls",
    period: "Dec 2025 — Feb 2026",
    location: "Remote",
    description:
      "Built a full-stack notes application on the MERN stack with secure auth, JWT authorization, OTP email verification, and complete note management. Used multiple testing frameworks plus SonarQube to enforce performance and quality.",
  },
  {
    role: "Web Development Intern",
    company: "NED University of Engineering & Technology",
    period: "Mar 2025 — Apr 2025",
    location: "Onsite",
    description:
      "Developed a responsive inventory management portal with React and PostgreSQL — delivering a modern, user-friendly interface and gaining hands-on experience across component-based frontend and backend workflows.",
  },
];

export function Experience() {
  return (
    <section id="experience" className="relative py-28 overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <SectionHeading eyebrow="04 — Experience" title="Where I've worked" />

        <div className="mt-14 relative max-w-4xl">
          {/* Vertical line */}
          <div className="absolute left-[15px] md:left-1/2 md:-translate-x-px top-2 bottom-2 w-px bg-gradient-to-b from-primary/60 via-accent/40 to-transparent" />

          {items.map((item, i) => (
            <motion.div
              key={item.company}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className={`relative grid md:grid-cols-2 gap-8 mb-12 ${
                i % 2 === 0 ? "" : "md:[&>*:first-child]:order-2"
              }`}
            >
              {/* Dot */}
              <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 top-3 h-8 w-8 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center glow-neon z-10">
                <div className="h-3 w-3 rounded-full bg-background" />
              </div>

              <div className={`pl-12 md:pl-0 ${i % 2 === 0 ? "md:text-right md:pr-12" : "md:pl-12"}`}>
                <div className="text-sm font-mono text-primary uppercase tracking-widest">{item.period}</div>
                <h3 className="mt-1 text-xl font-bold">{item.role}</h3>
                <div className="text-accent font-medium">{item.company}</div>
                <div className="text-sm text-muted-foreground">{item.location}</div>
              </div>

              <div className={`pl-12 md:pl-0 ${"md:pl-12"}`}>
                <div className="glass-card rounded-2xl p-6 text-foreground/85 leading-relaxed">
                  {item.description}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
