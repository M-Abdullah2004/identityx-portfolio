import { motion } from "framer-motion";
import { ArrowDown, Mail, Sparkles } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./BrandIcons";
import { Scene3D } from "./Scene3D";
import portrait from "@/assets/hassaan-portrait.png";

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-28 pb-16 overflow-hidden noise">
      {/* Grid backdrop */}
      <div className="absolute inset-0 grid-bg [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />

      {/* Glowing orbs */}
      <div className="absolute top-1/4 -left-32 h-96 w-96 rounded-full bg-primary/20 blur-3xl animate-pulse-glow" />
      <div className="absolute bottom-1/4 -right-32 h-96 w-96 rounded-full bg-accent/20 blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-[1.2fr_1fr] gap-12 items-center">
          {/* Left — Text */}
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-sm mb-6"
            >
              <Sparkles className="h-3.5 w-3.5 text-primary" />
              <span className="text-muted-foreground">Available for AI / Full-stack roles</span>
              <span className="relative flex h-2 w-2 ml-1">
                <span className="absolute inline-flex h-full w-full rounded-full bg-primary opacity-75 animate-ping" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.95] tracking-tight"
            >
              <span className="block">Hassaan</span>
              <span className="block text-gradient-hero">Zafar.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="mt-6 text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed"
            >
              Computer Science undergrad crafting{" "}
              <span className="text-foreground font-medium">AI-powered systems</span> and{" "}
              <span className="text-foreground font-medium">MERN full-stack</span> products —
              from RAG pipelines to real-time platforms.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="mt-10 flex flex-wrap items-center gap-4"
            >
              <a
                href="#projects"
                className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-gradient-to-r from-primary to-accent text-primary-foreground font-medium hover:scale-105 transition-transform glow-neon"
              >
                View Projects
                <ArrowDown className="h-4 w-4 group-hover:translate-y-0.5 transition-transform" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full glass hover:bg-surface-2/60 transition-colors"
              >
                Get in touch
              </a>

              <div className="flex items-center gap-2 ml-2">
                <SocialIcon href="https://github.com/Hassaan-Zafar1" icon={<GithubIcon className="h-4 w-4" />} />
                <SocialIcon href="https://www.linkedin.com/in/hassaan-zafar-505266241/" icon={<LinkedinIcon className="h-4 w-4" />} />
                <SocialIcon href="mailto:mhzafar07@gmail.com" icon={<Mail className="h-4 w-4" />} />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.7 }}
              className="mt-14 flex flex-wrap gap-8 text-sm"
            >
              <Stat value="3.79" label="CGPA" />
              <Stat value="6th" label="Semester" />
              <Stat value="2+" label="Internships" />
              <Stat value="4+" label="AI Projects" />
            </motion.div>
          </div>

          {/* Right — 3D + Portrait */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.3 }}
            className="relative h-[480px] md:h-[560px]"
          >
            <Scene3D />

            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative animate-float">
                <div className="absolute -inset-6 rounded-full bg-gradient-to-tr from-primary/40 via-accent/30 to-neon-violet/40 blur-2xl" />
                <div className="relative h-64 w-64 md:h-80 md:w-80 rounded-full overflow-hidden border-2 border-primary/40 glow-neon">
                  <img src={portrait} alt="Hassaan Zafar" className="h-full w-full object-cover" />
                </div>
                {/* Orbit ring */}
                <div className="absolute inset-0 -m-8 rounded-full border border-primary/20 animate-spin" style={{ animationDuration: "20s" }}>
                  <span className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 h-3 w-3 rounded-full bg-primary glow-neon" />
                </div>
                <div className="absolute inset-0 -m-16 rounded-full border border-accent/15 animate-spin" style={{ animationDuration: "30s", animationDirection: "reverse" }}>
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 h-2 w-2 rounded-full bg-accent glow-magenta" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <div className="text-2xl md:text-3xl font-bold text-gradient-hero font-display">{value}</div>
      <div className="text-xs uppercase tracking-widest text-muted-foreground mt-1">{label}</div>
    </div>
  );
}

function SocialIcon({ href, icon }: { href: string; icon: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="h-10 w-10 rounded-full glass flex items-center justify-center text-muted-foreground hover:text-primary hover:scale-110 hover:border-primary/40 transition-all"
    >
      {icon}
    </a>
  );
}
