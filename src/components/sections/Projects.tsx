"use client";

import { useState } from "react";
import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { projects } from "@/constants";
import { Magnetic, RevealText } from "@/components/motion";

const accents = ["#1a1a1a", "#2c2c2c", "#111111", "#333333", "#0d0d0d"];

function ProjectCard({
  project,
  index,
}: {
  project: (typeof projects)[number];
  index: number;
}) {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [60, -60]);
  const scale = useTransform(scrollYProgress, [0, 0.4, 1], [0.94, 1, 0.98]);

  return (
    <motion.article
      ref={ref}
      layout
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      exit={{ opacity: 0, y: 40 }}
      transition={{ duration: 0.8, delay: Math.min(index, 3) * 0.06, ease: [0.22, 1, 0.36, 1] }}
      className="group overflow-hidden rounded-2xl border border-foreground/10 bg-surface"
    >
      <motion.div
        style={{ scale }}
        className="relative flex min-h-[240px] flex-col justify-end overflow-hidden p-6 sm:min-h-[340px] sm:p-10"
      >
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(145deg, ${accents[index % accents.length]} 0%, #3a3a3a 100%)`,
          }}
        />
        <motion.div
          style={{ y }}
          className="pointer-events-none absolute -right-10 -top-10 h-64 w-64 rounded-full bg-white/10"
        />
        <motion.div
          className="pointer-events-none absolute bottom-10 right-16 h-28 w-28 rounded-full border border-white/20"
          animate={{ y: [0, -18, 0], rotate: [0, 50, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        />

        <div className="relative z-10">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/60">
            {project.tags?.join?.(" · ")}
          </p>
          <h3
            className="font-display mt-3 text-3xl text-white transition-transform duration-500 group-hover:translate-x-2 sm:text-5xl"
            style={{ fontWeight: 700 }}
          >
            {project.name}
          </h3>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-white/75 sm:text-base">
            {project.description}
          </p>
        </div>
      </motion.div>
    </motion.article>
  );
}

export default function Projects() {
  const [showAll, setShowAll] = useState(false);
  const visible = showAll ? projects : projects?.slice?.(0, 3) ?? [];

  return (
    <section id="projects" className="layout-pad py-24 sm:py-32">
      <div className="mx-auto max-w-[1400px]">
        <RevealText
          as="h2"
          text="Selected Projects"
          mode="words"
          stagger={0.08}
          className="font-display text-5xl tracking-tight sm:text-6xl md:text-7xl"
          style={{ fontWeight: 800 }}
        />

        <div className="mt-14 space-y-8">
          <AnimatePresence initial={false} mode="popLayout">
            {visible?.map?.((project, i) => (
              <ProjectCard key={project.name} project={project} index={i} />
            ))}
          </AnimatePresence>
        </div>

        {(projects?.length ?? 0) > 3 ? (
          <div className="mt-12 flex justify-center">
            <Magnetic>
              <button
                type="button"
                onClick={() => setShowAll((v) => !v)}
                className="pill border border-foreground/20 bg-white px-6 py-3 text-foreground hover:bg-foreground hover:text-background"
              >
                {showAll ? "Show less" : "All projects"}
              </button>
            </Magnetic>
          </div>
        ) : null}
      </div>
    </section>
  );
}
