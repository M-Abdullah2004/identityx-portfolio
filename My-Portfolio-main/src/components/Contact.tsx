import { motion } from "framer-motion";
import { Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./BrandIcons";

export function Contact() {
  return (
    <section id="contact" className="relative py-28 overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-gradient-to-br from-primary/15 to-accent/15 blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-4xl mx-auto text-center"
        >
          <div className="text-sm font-mono text-primary uppercase tracking-[0.3em]">06 — Contact</div>
          <h2 className="mt-4 text-5xl md:text-7xl font-bold tracking-tight">
            Let's build <span className="text-gradient-hero">something</span>.
          </h2>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
            I'm open to internships, collaborations, and full-time roles in AI engineering or full-stack development. Drop a line — I'll get back fast.
          </p>

          <a
            href="mailto:mhzafar07@gmail.com"
            className="group mt-10 inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-primary to-accent text-primary-foreground font-medium text-lg hover:scale-105 transition-transform glow-neon"
          >
            mhzafar07@gmail.com
            <ArrowUpRight className="h-5 w-5 group-hover:rotate-45 transition-transform" />
          </a>

          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-3xl mx-auto">
            <ContactCard icon={<Mail className="h-5 w-5" />} label="Email" value="mhzafar07@gmail.com" href="mailto:mhzafar07@gmail.com" />
            <ContactCard icon={<Phone className="h-5 w-5" />} label="Phone" value="+92 334 2560195" href="tel:+923342560195" />
            <ContactCard icon={<LinkedinIcon className="h-5 w-5" />} label="LinkedIn" value="hassaan-zafar" href="https://www.linkedin.com/in/hassaan-zafar-505266241/" />
            <ContactCard icon={<GithubIcon className="h-5 w-5" />} label="GitHub" value="Hassaan-Zafar1" href="https://github.com/Hassaan-Zafar1" />
          </div>

          <div className="mt-10 inline-flex items-center gap-2 text-sm text-muted-foreground">
            <MapPin className="h-4 w-4" />
            Karachi, Sindh, Pakistan
          </div>
        </motion.div>
      </div>

      <footer className="mt-24 border-t border-border/60 pt-8 pb-10">
        <div className="container mx-auto px-6 flex flex-wrap items-center justify-between gap-4 text-sm text-muted-foreground">
          <div>© {new Date().getFullYear()} Hassaan Zafar. Crafted with React, Three.js & ☕</div>
          <div className="font-mono text-xs">v1.0 · Karachi → World</div>
        </div>
      </footer>
    </section>
  );
}

function ContactCard({ icon, label, value, href }: { icon: React.ReactNode; label: string; value: string; href: string }) {
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel="noreferrer"
      className="glass-card rounded-2xl p-5 text-left hover:border-primary/40 hover:-translate-y-1 transition-all group"
    >
      <div className="h-9 w-9 rounded-lg bg-gradient-to-br from-primary/25 to-accent/25 flex items-center justify-center text-primary mb-3 group-hover:scale-110 transition-transform">
        {icon}
      </div>
      <div className="text-xs uppercase tracking-widest text-muted-foreground">{label}</div>
      <div className="mt-0.5 text-sm font-medium truncate">{value}</div>
    </a>
  );
}
