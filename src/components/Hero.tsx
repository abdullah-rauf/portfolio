"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, Mail } from "lucide-react";
import { personal } from "@/data/portfolio";
import { GithubIcon, LinkedinIcon } from "./BrandIcons";

const nameLetters = personal.name.split("");

const floatingBadges = [
  { label: "React.js", x: "8%", y: "24%", delay: 0 },
  { label: "Next.js", x: "84%", y: "20%", delay: 0.8 },
  { label: "TypeScript", x: "12%", y: "68%", delay: 1.6 },
  { label: "Node.js", x: "82%", y: "64%", delay: 2.4 },
  { label: "OpenAI", x: "70%", y: "84%", delay: 3.2 },
  { label: "GraphQL", x: "22%", y: "86%", delay: 4 },
];

export default function Hero() {
  const { scrollYProgress } = useScroll();
  const contentY = useTransform(scrollYProgress, [0, 0.25], [0, -120]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6">
      {/* Floating tech badges */}
      {floatingBadges.map((badge) => (
        <motion.span
          key={badge.label}
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.4 + badge.delay * 0.15, duration: 0.6 }}
          style={{ left: badge.x, top: badge.y }}
          className="absolute hidden md:block"
        >
          <motion.span
            animate={{ y: [0, -14, 0] }}
            transition={{
              duration: 5 + badge.delay,
              repeat: Infinity,
              ease: "easeInOut",
              delay: badge.delay,
            }}
            className="glass inline-block rounded-full px-4 py-1.5 font-mono text-xs text-muted"
          >
            {badge.label}
          </motion.span>
        </motion.span>
      ))}

      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="relative z-10 mx-auto max-w-4xl text-center"
      >
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-5 font-mono text-sm uppercase tracking-[0.4em] text-accent"
        >
          {personal.title}
        </motion.p>

        {/* Staggered letter reveal */}
        <h1
          aria-label={personal.name}
          className="text-5xl font-bold tracking-tight sm:text-7xl md:text-8xl"
        >
          {nameLetters.map((letter, i) => (
            <motion.span
              key={i}
              aria-hidden
              initial={{ opacity: 0, y: 60, rotateX: 90 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{
                delay: 0.4 + i * 0.045,
                duration: 0.7,
                ease: [0.22, 1, 0.36, 1],
              }}
              className={`inline-block ${i > 7 ? "text-gradient" : ""}`}
            >
              {letter === " " ? "\u00A0" : letter}
            </motion.span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mx-auto mt-8 max-w-2xl text-base leading-relaxed text-muted sm:text-lg"
        >
          {personal.summary}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="#projects"
            className="group relative overflow-hidden rounded-full bg-gradient-to-r from-accent to-accent-2 px-8 py-3 text-sm font-semibold text-background transition-transform duration-300 hover:scale-105"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="rounded-full border border-muted/30 px-8 py-3 text-sm font-semibold transition-all duration-300 hover:border-accent hover:text-accent hover:shadow-[0_0_25px_rgba(34,211,238,0.25)]"
          >
            Get In Touch
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.8 }}
          className="mt-10 flex items-center justify-center gap-5 text-muted"
        >
          <a
            href={personal.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="transition-all duration-300 hover:-translate-y-1 hover:text-accent"
          >
            <GithubIcon size={22} />
          </a>
          <a
            href={personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="transition-all duration-300 hover:-translate-y-1 hover:text-accent"
          >
            <LinkedinIcon size={22} />
          </a>
          <a
            href={`mailto:${personal.email}`}
            aria-label="Email"
            className="transition-all duration-300 hover:-translate-y-1 hover:text-accent"
          >
            <Mail size={22} />
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll cue */}
      <motion.a
        href="#about"
        aria-label="Scroll to about section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.4, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted"
      >
        <motion.span
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="block"
        >
          <ArrowDown size={20} />
        </motion.span>
      </motion.a>
    </section>
  );
}
