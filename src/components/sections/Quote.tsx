"use client";

import { RevealText } from "@/components/motion";

export default function Quote() {
  return (
    <section className="layout-pad py-28 sm:py-40">
      <div className="mx-auto max-w-4xl text-center">
        <RevealText
          as="p"
          text="When starting a new project, it's crucial to choose the appropriate tools. With prior experience across React, Next.js, Node.js, and AI integrations, I select what will guide us to success."
          mode="words"
          stagger={0.018}
          className="font-display text-2xl leading-snug tracking-tight text-foreground sm:text-4xl md:text-5xl"
          style={{ fontWeight: 700 }}
        />
      </div>
    </section>
  );
}
