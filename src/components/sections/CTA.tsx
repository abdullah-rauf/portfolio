"use client";

import { personal } from "@/constants";
import { Magnetic, Reveal, RevealText } from "@/components/motion";

export default function CTA() {
  return (
    <section id="contact" className="layout-pad py-28 sm:py-40">
      <div className="mx-auto max-w-4xl text-center">
        <RevealText
          as="h2"
          text={"Let's build your\nnext product\ntogether!"}
          mode="lines"
          stagger={0.12}
          className="font-display text-4xl leading-[1.05] tracking-tight sm:text-6xl md:text-7xl"
          style={{ fontWeight: 800 }}
        />
        <Reveal delay={0.2} y={20}>
          <p className="mt-6 text-base text-muted sm:text-lg">
            Start your project with a trusted partner today.
          </p>
        </Reveal>
        <Reveal delay={0.28} y={24} className="mt-10">
          <Magnetic strength={0.45}>
            <a
              href={`mailto:${personal.email}`}
              className="pill bg-foreground px-8 py-4 text-background hover:bg-foreground/85"
            >
              Get in touch
            </a>
          </Magnetic>
        </Reveal>
      </div>
    </section>
  );
}
