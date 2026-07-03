"use client";

import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import { education } from "@/data/portfolio";
import SectionHeading from "./SectionHeading";

export default function Education() {
  return (
    <section id="education" className="relative mx-auto max-w-6xl scroll-mt-24 px-6 py-28">
      <SectionHeading eyebrow="Education" title="Academic Background" />

      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.97 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        whileHover={{ y: -4 }}
        className="glass flex flex-col items-start gap-5 rounded-2xl p-8 sm:flex-row sm:items-center"
      >
        <span className="rounded-2xl bg-accent/10 p-4 text-accent">
          <GraduationCap size={28} />
        </span>
        <div>
          <h3 className="text-xl font-semibold">{education.degree}</h3>
          <p className="mt-1 text-muted">{education.school}</p>
          <p className="mt-1 font-mono text-sm text-accent">{education.period}</p>
        </div>
      </motion.div>
    </section>
  );
}
