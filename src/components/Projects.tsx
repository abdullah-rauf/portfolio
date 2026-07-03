"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { projects } from "@/data/portfolio";
import SectionHeading from "./SectionHeading";

export default function Projects() {
  return (
    <section id="projects" className="relative mx-auto max-w-6xl scroll-mt-24 px-6 py-28">
      <SectionHeading eyebrow="Projects" title="Things I've Built" />

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, i) => (
          <motion.article
            key={project.name}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: (i % 3) * 0.12, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ y: -8 }}
            className="group relative overflow-hidden rounded-2xl border border-muted/15 bg-surface/60 p-6 backdrop-blur-sm transition-shadow duration-300 hover:shadow-[0_0_40px_rgba(167,139,250,0.15)]"
          >
            {/* Hover gradient sweep */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-accent/8 via-transparent to-accent-2/8 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

            <div className="relative">
              <span className="mb-4 inline-flex rounded-xl bg-accent-2/10 p-3 text-accent-2 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
                <Sparkles size={20} />
              </span>
              <h3 className="text-lg font-semibold transition-colors duration-300 group-hover:text-accent">
                {project.name}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {project.description}
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-muted/15 px-2.5 py-0.5 font-mono text-[11px] text-muted"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
