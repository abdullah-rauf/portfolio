"use client";

import { motion } from "framer-motion";
import { CodeXml, Cpu, Globe, MapPin } from "lucide-react";
import { aboutHighlights, personal } from "@/constants";
import { SectionHeading } from "@/components/ui";

const highlightIcons = {
  code: CodeXml,
  globe: Globe,
  cpu: Cpu,
} as const;

export default function About() {
  return (
    <section id="about" className="relative mx-auto max-w-6xl scroll-mt-24 px-6 py-28">
      <SectionHeading eyebrow="About Me" title="Who I Am" />

      <div className="grid gap-12 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="text-lg leading-relaxed text-muted">{personal.summary}</p>
          <div className="mt-6 flex items-center gap-2 text-sm text-muted">
            <MapPin size={16} className="text-accent" />
            {personal.location}
          </div>
        </motion.div>

        <div className="flex flex-col gap-4">
          {aboutHighlights.map((item, i) => {
            const Icon = highlightIcons[item.icon];
            return (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ x: -6 }}
              className="glass flex items-start gap-4 rounded-2xl p-5"
            >
              <span className="rounded-xl bg-accent/10 p-3 text-accent">
                <Icon size={22} />
              </span>
              <div>
                <h3 className="font-semibold">{item.title}</h3>
                <p className="mt-1 text-sm text-muted">{item.text}</p>
              </div>
            </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
