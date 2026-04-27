import { motion } from "framer-motion";
import { Download } from "lucide-react";
import { useEffect, useState } from "react";
import { label } from "three/src/nodes/core/ContextNode.js";

const links = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  {label: "Workshop", href: "#workshop"},
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <div className="container mx-auto px-6">
        <div className={`flex items-center justify-between rounded-full px-6 py-3 transition-all ${
          scrolled ? "glass shadow-lg" : ""
        }`}>
          <a href="#home" className="flex items-center gap-2 group">
            <div className="relative h-8 w-8 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center font-bold text-primary-foreground">
              HZ
              <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-primary to-accent blur-md opacity-50 -z-10 group-hover:opacity-80 transition-opacity" />
            </div>
            <span className="hidden sm:block font-display font-semibold tracking-tight">Hassaan.dev</span>
          </a>

          <nav className="hidden md:flex items-center gap-1">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="relative px-4 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors group"
              >
                {l.label}
                <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-0 h-px bg-gradient-to-r from-primary to-accent group-hover:w-1/2 transition-all" />
              </a>
            ))}
          </nav>

          <a
            href="/Hassaan Zafar.pdf" download
            className="hidden sm:inline-flex items-center gap-2 px-5 py-2 rounded-full bg-gradient-to-r from-primary to-accent text-primary-foreground text-sm font-medium hover:scale-105 transition-transform glow-neon"
          >
            RESUME
            <Download className="h-4 w-4" />
          </a>
        </div>
      </div>
    </motion.header>
  );
}
