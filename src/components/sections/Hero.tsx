"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { personal } from "@/constants";
import { RevealText } from "@/components/motion";
import HeroVisual from "./HeroVisual";

type HeroProps = {
  ready?: boolean;
};

const ease = [0.22, 1, 0.36, 1] as const;

export default function Hero({ ready = true }: HeroProps) {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, 140]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0.15]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.92]);

  return (
    <section
      ref={ref}
      className="relative flex min-h-screen flex-col justify-center overflow-hidden layout-pad pb-16 pt-24 sm:pt-28"
    >
      <motion.div style={{ y, opacity, scale }} className="mx-auto w-full max-w-[1400px]">
        <div className="grid gap-6 lg:grid-cols-[1.25fr_0.75fr] lg:items-end lg:gap-10">
          <div>
            {ready ? (
              <>
                <RevealText
                  as="p"
                  text="Remarkable"
                  mode="chars"
                  animateOnMount
                  delay={0.05}
                  stagger={0.028}
                  className="font-display text-2xl leading-none tracking-tight text-foreground sm:text-4xl md:text-5xl"
                  style={{ fontWeight: 500 }}
                />
                <RevealText
                  as="h1"
                  text="Digital Products"
                  mode="words"
                  animateOnMount
                  delay={0.22}
                  stagger={0.08}
                  className="font-display mt-1 text-4xl leading-[0.95] tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl"
                  style={{ fontWeight: 800 }}
                />
              </>
            ) : (
              <>
                <p
                  className="font-display text-2xl leading-none tracking-tight opacity-0 sm:text-4xl md:text-5xl"
                  style={{ fontWeight: 500 }}
                >
                  Remarkable
                </p>
                <h1
                  className="font-display mt-1 text-4xl leading-[0.95] tracking-tight opacity-0 sm:text-5xl md:text-6xl lg:text-7xl"
                  style={{ fontWeight: 800 }}
                >
                  Digital Products
                </h1>
              </>
            )}
          </div>

          <motion.p
            initial={{ opacity: 0, y: 28, filter: "blur(8px)" }}
            animate={
              ready
                ? { opacity: 1, y: 0, filter: "blur(0px)" }
                : { opacity: 0, y: 28, filter: "blur(8px)" }
            }
            transition={{ duration: 0.9, delay: 0.45, ease }}
            className="max-w-md text-sm leading-relaxed text-foreground/80 sm:text-base lg:justify-self-end lg:pb-2"
          >
            {personal.title} based in {personal.location}. I craft fast,
            thoughtful interfaces and reliable backends — from React/Next.js
            experiences to Node.js services and AI-powered workflows.
          </motion.p>
        </div>

        <HeroVisual ready={ready} />
      </motion.div>
    </section>
  );
}
