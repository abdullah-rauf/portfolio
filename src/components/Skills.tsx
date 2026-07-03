"use client";

import { motion } from "framer-motion";
import { skillGroups } from "@/data/portfolio";
import SectionHeading from "./SectionHeading";

const allSkills = skillGroups.flatMap((group) => group.skills);

export default function Skills() {
  return (
    <section id="skills" className="relative scroll-mt-24 py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading eyebrow="Skills" title="My Tech Stack" />
      </div>

      {/* Infinite marquee */}
      <div
        className="relative mb-16 overflow-hidden py-2"
        style={{
          maskImage:
            "linear-gradient(90deg, transparent, black 15%, black 85%, transparent)",
        }}
      >
        <div className="animate-marquee flex w-max gap-4">
          {[...allSkills, ...allSkills].map((skill, i) => (
            <span
              key={`${skill}-${i}`}
              className="glass whitespace-nowrap rounded-full px-5 py-2 font-mono text-sm text-muted"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      <div className="mx-auto grid max-w-6xl gap-5 px-6 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group, i) => (
          <motion.div
            key={group.category}
            initial={{ opacity: 0, y: 40, scale: 0.96 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: (i % 3) * 0.12, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ y: -6 }}
            className="glass group rounded-2xl p-6 transition-shadow duration-300 hover:shadow-[0_0_35px_rgba(34,211,238,0.12)]"
          >
            <h3 className="mb-4 font-semibold text-accent">{group.category}</h3>
            <div className="flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-md border border-muted/15 bg-surface px-2.5 py-1 text-xs text-muted transition-colors duration-300 group-hover:border-accent/30"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
