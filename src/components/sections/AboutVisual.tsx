"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import { skillGroups } from "@/constants";

const floatingSkills =
  skillGroups
    ?.flatMap?.((g) => g.skills)
    ?.slice?.(0, 10) ?? [];

export default function AboutVisual() {
  const ref = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 90, damping: 18 });
  const sy = useSpring(my, { stiffness: 90, damping: 18 });
  const blobX = useTransform(sx, (v) => v * 0.2);
  const blobY = useTransform(sy, (v) => v * 0.2);

  return (
    <div
      ref={ref}
      onMouseMove={(e) => {
        const el = ref.current;
        if (!el) return;
        const rect = el.getBoundingClientRect();
        mx.set(((e.clientX - rect.left) / rect.width - 0.5) * 60);
        my.set(((e.clientY - rect.top) / rect.height - 0.5) * 60);
      }}
      onMouseLeave={() => {
        mx.set(0);
        my.set(0);
      }}
      className="relative mx-auto aspect-square w-full max-w-md overflow-hidden rounded-2xl bg-foreground text-background sm:max-w-lg"
    >
      <motion.div
        className="absolute inset-[12%] rounded-full border border-white/15"
        animate={{ rotate: 360 }}
        transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute inset-[22%] rounded-full border border-dashed border-white/20"
        animate={{ rotate: -360 }}
        transition={{ duration: 36, repeat: Infinity, ease: "linear" }}
      />

      <motion.div
        className="absolute left-[18%] top-[22%] h-28 w-28 rounded-[40%_60%_55%_45%] bg-white/90 sm:h-36 sm:w-36"
        style={{ x: blobX, y: blobY }}
        animate={{
          borderRadius: [
            "40% 60% 55% 45%",
            "55% 45% 40% 60%",
            "45% 55% 60% 40%",
            "40% 60% 55% 45%",
          ],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-[18%] right-[14%] h-20 w-20 rounded-full bg-white/25 sm:h-28 sm:w-28"
        animate={{ scale: [1, 1.25, 0.9, 1], x: [0, -18, 10, 0], y: [0, 12, -8, 0] }}
        transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute right-[28%] top-[18%] h-3 w-3 rounded-full bg-white"
        animate={{ y: [0, 140, 0], opacity: [0.2, 1, 0.2] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="absolute inset-0 flex items-center justify-center">
        <motion.p
          className="font-display text-center text-2xl tracking-tight sm:text-3xl"
          style={{ fontWeight: 700 }}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{
            opacity: [0, 1, 1],
            y: 0,
            letterSpacing: ["0.02em", "0.1em", "0.02em"],
          }}
          viewport={{ once: true }}
          transition={{
            opacity: { duration: 0.8, delay: 0.2 },
            y: { duration: 0.8, delay: 0.2 },
            letterSpacing: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 },
          }}
        >
          Build.
          <br />
          Ship.
          <br />
          Iterate.
        </motion.p>
      </div>

      <div className="absolute inset-x-0 bottom-0 overflow-hidden border-t border-white/10 bg-black/30 py-3 backdrop-blur-sm">
        <motion.div
          className="flex w-max gap-8 whitespace-nowrap px-4 text-xs font-semibold uppercase tracking-[0.16em] text-white/80"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
        >
          {[...floatingSkills, ...floatingSkills].map((skill, i) => (
            <span key={`${skill}-${i}`}>{skill}</span>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
