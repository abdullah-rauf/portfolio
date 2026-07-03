"use client";

import { useState } from "react";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";

const links = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const { scrollYProgress, scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 40);
  });

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "glass shadow-lg shadow-black/20" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#" className="text-lg font-bold tracking-tight">
          Abdullah<span className="text-gradient">.dev</span>
        </a>
        <ul className="hidden items-center gap-8 text-sm text-muted md:flex">
          {links.map((link, i) => (
            <motion.li
              key={link.href}
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.15 + i * 0.08, duration: 0.5 }}
            >
              <a
                href={link.href}
                className="relative transition-colors hover:text-foreground after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-accent after:transition-all after:duration-300 hover:after:w-full"
              >
                {link.label}
              </a>
            </motion.li>
          ))}
        </ul>
        <a
          href="#contact"
          className="rounded-full border border-accent/40 px-4 py-1.5 text-sm text-accent transition-all duration-300 hover:bg-accent/10 hover:shadow-[0_0_20px_rgba(34,211,238,0.3)]"
        >
          Hire Me
        </a>
      </nav>
      {/* Scroll progress bar */}
      <motion.div
        style={{ scaleX: scrollYProgress }}
        className="h-[2px] origin-left bg-gradient-to-r from-accent via-accent-2 to-pink-400"
      />
    </motion.header>
  );
}
