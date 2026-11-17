"use client";

import { motion } from "framer-motion";
import { experiences } from "@/constants";
import { RevealText } from "@/components/motion";

function yearFromPeriod(period: string) {
  const first = period?.match?.(/(\d{4})/);
  return first?.[1] ?? "";
}

function blurbFor(exp: (typeof experiences)[number]) {
  const fromStages = exp.stages?.[0]?.points?.[0];
  return fromStages ?? exp.points?.[0] ?? exp.role;
}

export default function Clients() {
  return (
    <section id="experience" className="layout-pad py-24 sm:py-32">
      <div className="mx-auto max-w-[1400px]">
        <RevealText
          as="h2"
          text="Experience"
          mode="chars"
          stagger={0.04}
          className="font-display text-5xl tracking-tight sm:text-6xl md:text-7xl"
          style={{ fontWeight: 800 }}
        />

        <div className="mt-14 space-y-0">
          {experiences?.map?.((exp, i) => (
            <motion.article
              key={`${exp.company}-${exp.period}`}
              initial={{ opacity: 0, y: 48 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{
                duration: 0.75,
                delay: i * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group grid gap-4 border-t border-foreground/15 py-10 md:grid-cols-[0.2fr_0.35fr_0.45fr] md:gap-8"
            >
              <motion.p
                className="text-sm font-medium text-muted"
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 + i * 0.05 }}
              >
                {yearFromPeriod(exp.period)}
              </motion.p>
              <div>
                <h3
                  className="font-display text-2xl tracking-tight transition-transform duration-500 group-hover:translate-x-2 sm:text-3xl"
                  style={{ fontWeight: 700 }}
                >
                  {exp.company}
                </h3>
                <p className="mt-2 text-sm text-muted">{exp.role}</p>
                <p className="mt-1 text-xs uppercase tracking-[0.14em] text-muted">
                  {exp.period}
                </p>
              </div>
              <p className="max-w-xl text-sm leading-relaxed text-foreground/80 sm:text-base">
                {blurbFor(exp)}
              </p>
            </motion.article>
          ))}
          <div className="border-t border-foreground/15" />
        </div>
      </div>
    </section>
  );
}
