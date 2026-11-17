"use client";

import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { personal } from "@/constants";

type PreloaderProps = {
  onDone?: () => void;
};

const ease = [0.22, 1, 0.36, 1] as const;

export default function Preloader({ onDone }: PreloaderProps) {
  const [progress, setProgress] = useState(0);
  const [done, setDone] = useState(false);
  const chars = useMemo(
    () => personal.name.split("").map((c) => (c === " " ? "\u00A0" : c)),
    [],
  );

  useEffect(() => {
    let frame = 0;
    let value = 0;
    const tick = () => {
      value = Math.min(100, value + Math.random() * 9 + 3);
      setProgress(Math.floor(value));
      if (value < 100) {
        frame = window.setTimeout(tick, 70);
      } else {
        frame = window.setTimeout(() => {
          setDone(true);
          onDone?.();
        }, 480);
      }
    };
    frame = window.setTimeout(tick, 180);
    return () => window.clearTimeout(frame);
  }, [onDone]);

  return (
    <AnimatePresence>
      {!done ? (
        <motion.div
          className="fixed inset-0 z-[10000] flex items-center justify-center overflow-hidden bg-background"
          initial={{ opacity: 1 }}
          exit={{
            y: "-100%",
            transition: { duration: 0.95, ease },
          }}
        >
          <div className="relative px-6 text-center">
            <motion.p
              className="mb-4 text-[10px] font-semibold uppercase tracking-[0.35em] text-muted sm:text-xs"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Call me Abdullah
            </motion.p>

            <h1
              className="font-display flex flex-wrap justify-center text-3xl tracking-tight text-foreground sm:text-5xl md:text-6xl"
              style={{ fontWeight: 700 }}
              aria-label={personal.name}
            >
              {chars.map((char, i) => (
                <span key={`${char}-${i}`} className="inline-block overflow-hidden">
                  <motion.span
                    className="inline-block"
                    initial={{ y: "120%", rotate: 8 }}
                    animate={{ y: "0%", rotate: 0 }}
                    transition={{ duration: 0.8, delay: 0.08 + i * 0.028, ease }}
                  >
                    {char}
                  </motion.span>
                </span>
              ))}
            </h1>

            {/* Horizontal wipe / split pulse like giats */}
            <motion.div
              className="mx-auto mt-5 h-px w-40 origin-left bg-foreground/40 sm:w-56"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1.1, delay: 0.35, ease }}
            />
          </div>

          <motion.p
            className="absolute bottom-8 right-8 font-display text-3xl tabular-nums tracking-tight sm:bottom-10 sm:right-12 sm:text-5xl"
            style={{ fontWeight: 700 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            {progress}
            <span className="text-muted">%</span>
          </motion.p>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
