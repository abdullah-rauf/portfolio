"use client";

import { motion } from "framer-motion";
import { personal } from "@/constants";
import { Reveal, RevealText } from "@/components/motion";
import AboutVisual from "./AboutVisual";

const bodyLines = [
  "A passionate staff software engineer focused on seamless user experiences and clean, efficient systems.",
  "I specialize in bringing web applications to life with React, Next.js, TypeScript, Node.js/NestJS, and thoughtful AI integrations — from idea to production.",
];

export default function About() {
  return (
    <section id="about" className="layout-pad py-24 sm:py-32">
      <div className="mx-auto grid max-w-[1400px] gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-20">
        <div>
          <RevealText
            as="h2"
            text={`Hey, My name's\n${personal.name}!`}
            mode="lines"
            stagger={0.12}
            className="font-display text-4xl leading-[1.05] tracking-tight sm:text-5xl md:text-6xl"
            style={{ fontWeight: 700 }}
          />

          <Reveal delay={0.15} y={30} className="mt-8 max-w-xl">
            <p className="text-base italic leading-relaxed text-muted sm:text-lg">
              “{personal.summary}”
            </p>
          </Reveal>

          <div className="mt-10 max-w-xl space-y-4 text-sm leading-relaxed text-foreground/85 sm:text-base">
            {bodyLines.map((line, i) => (
              <Reveal key={line} delay={0.1 + i * 0.08} y={24}>
                <p>{line}</p>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal y={60} amount={0.2}>
          <motion.div
            initial={{ clipPath: "inset(12% 12% 12% 12% round 24px)" }}
            whileInView={{ clipPath: "inset(0% 0% 0% 0% round 16px)" }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
          >
            <AboutVisual />
          </motion.div>
        </Reveal>
      </div>
    </section>
  );
}
