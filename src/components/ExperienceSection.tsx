"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { Briefcase } from "lucide-react";
import { experiences } from "@/data/portfolio";
import SectionHeading from "./SectionHeading";

export default function ExperienceSection() {
  const timelineRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start 75%", "end 60%"],
  });
  const lineScale = useSpring(scrollYProgress, { stiffness: 80, damping: 25 });

  return (
    <section id="experience" className="relative mx-auto max-w-6xl scroll-mt-24 px-6 py-28">
      <SectionHeading eyebrow="Experience" title="Where I've Worked" />

      <div ref={timelineRef} className="relative">
        {/* Track + scroll-drawn line */}
        <div className="absolute left-[19px] top-0 h-full w-px bg-muted/15 md:left-1/2" />
        <motion.div
          style={{ scaleY: lineScale }}
          className="absolute left-[19px] top-0 h-full w-px origin-top bg-linear-to-b from-accent via-accent-2 to-[var(--grad-3)] md:left-1/2"
        />

        <div className="flex flex-col gap-14">
          {experiences.map((exp, i) => {
            const isLeft = i % 2 === 0;
            return (
              <div
                key={exp.company}
                className={`relative flex md:w-1/2 ${
                  isLeft ? "md:pr-14" : "md:ml-auto md:pl-14"
                } pl-14 md:pl-0 ${!isLeft ? "md:pl-14" : ""}`}
              >
                {/* Node dot */}
                <motion.span
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ type: "spring", stiffness: 300, damping: 15, delay: 0.2 }}
                  className={`absolute top-7 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-accent/40 bg-surface text-accent shadow-[0_0_20px_color-mix(in_oklab,var(--accent)_35%,transparent)] left-0 ${
                    isLeft
                      ? "md:left-auto md:right-0 md:translate-x-1/2"
                      : "md:left-0 md:-translate-x-1/2"
                  }`}
                >
                  <Briefcase size={16} />
                </motion.span>

                <motion.div
                  initial={{ opacity: 0, x: isLeft ? -60 : 60, y: 20 }}
                  whileInView={{ opacity: 1, x: 0, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                  whileHover={{ y: -4 }}
                  className="glass w-full rounded-2xl p-6"
                >
                  <span className="font-mono text-xs uppercase tracking-widest text-accent">
                    {exp.period}
                  </span>
                  <h3 className="mt-2 text-xl font-semibold">{exp.role}</h3>
                  <p className="mt-0.5 text-sm text-accent-2">{exp.company}</p>
                  <ul className="mt-4 flex flex-col gap-2 text-sm text-muted">
                    {exp.points.map((point) => (
                      <li key={point} className="flex gap-2">
                        <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
