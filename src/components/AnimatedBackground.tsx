"use client";

import { useEffect } from "react";
import {
  motion,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";

/**
 * Scroll-driven backdrop: two diagonal lines that draw themselves across the
 * viewport as the page scrolls (top-left to bottom-right, and the reverse),
 * each with a glowing head traveling along it. Nothing loops on its own —
 * every movement is tied to scroll position. A subtle grid, soft parallax
 * orbs, and a cursor glow complete the scene.
 */
export default function AnimatedBackground() {
  const { scrollYProgress } = useScroll();
  const smooth = useSpring(scrollYProgress, { stiffness: 70, damping: 24 });

  // Diagonal line 1: draws from top-left toward bottom-right while scrolling
  const drawDown = smooth;
  // Diagonal line 2: draws from bottom-right toward top-left while scrolling
  const drawUp = smooth;

  // Glowing heads traveling along each diagonal (in viewport units,
  // matching the SVG line endpoints exactly)
  const headDownX = useTransform(smooth, [0, 1], ["-4vw", "104vw"]);
  const headDownY = useTransform(smooth, [0, 1], ["-4vh", "104vh"]);
  const headUpX = useTransform(smooth, [0, 1], ["104vw", "-4vw"]);
  const headUpY = useTransform(smooth, [0, 1], ["96vh", "4vh"]);

  // Gentle parallax for depth
  const orbAY = useTransform(smooth, [0, 1], [0, 220]);
  const orbBY = useTransform(smooth, [0, 1], [0, -200]);
  const gridY = useTransform(smooth, [0, 1], [0, -100]);

  // Cursor-following glow
  const mouseX = useMotionValue(-400);
  const mouseY = useMotionValue(-400);
  const glowX = useSpring(mouseX, { stiffness: 50, damping: 15 });
  const glowY = useSpring(mouseY, { stiffness: 50, damping: 15 });

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      mouseX.set(e.clientX - 250);
      mouseY.set(e.clientY - 250);
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, [mouseX, mouseY]);

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-background">
      {/* Subtle grid with soft parallax */}
      <motion.div
        style={{ y: gridY }}
        className="absolute -inset-y-32 inset-x-0 opacity-20"
      >
        <div
          className="h-full w-full"
          style={{
            backgroundImage:
              "linear-gradient(rgba(139,144,173,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(139,144,173,0.08) 1px, transparent 1px)",
            backgroundSize: "72px 72px",
            maskImage:
              "radial-gradient(ellipse 90% 70% at 50% 40%, black 30%, transparent 100%)",
          }}
        />
      </motion.div>

      {/* Soft parallax orbs */}
      <motion.div
        style={{ y: orbAY }}
        className="absolute -left-40 top-[-10%] h-136 w-136 rounded-full bg-accent/6 blur-[130px]"
      />
      <motion.div
        style={{ y: orbBY }}
        className="absolute -right-40 top-[45%] h-152 w-152 rounded-full bg-accent-2/6 blur-[140px]"
      />

      {/* Scroll-drawn diagonal lines */}
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        fill="none"
      >
        <defs>
          <linearGradient
            id="diag-down"
            x1="0"
            y1="0"
            x2="100"
            y2="100"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stopColor="#22d3ee" stopOpacity="0.03" />
            <stop offset="0.5" stopColor="#22d3ee" stopOpacity="0.25" />
            <stop offset="1" stopColor="#67e8f9" stopOpacity="0.5" />
          </linearGradient>
          <linearGradient
            id="diag-up"
            x1="100"
            y1="100"
            x2="0"
            y2="0"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stopColor="#a78bfa" stopOpacity="0.03" />
            <stop offset="0.5" stopColor="#a78bfa" stopOpacity="0.22" />
            <stop offset="1" stopColor="#c4b5fd" stopOpacity="0.45" />
          </linearGradient>
        </defs>

        {/* Faint full-length tracks so the path is barely visible ahead of the draw */}
        <path
          d="M -4 -4 L 104 104"
          stroke="rgba(139,144,173,0.08)"
          strokeWidth="1"
          vectorEffect="non-scaling-stroke"
        />
        <path
          d="M 104 96 L -4 4"
          stroke="rgba(139,144,173,0.08)"
          strokeWidth="1"
          vectorEffect="non-scaling-stroke"
        />

        {/* Top-left to bottom-right — draws with scroll */}
        <motion.path
          d="M -4 -4 L 104 104"
          stroke="url(#diag-down)"
          strokeWidth="1.5"
          strokeLinecap="round"
          vectorEffect="non-scaling-stroke"
          style={{ pathLength: drawDown }}
        />
        {/* Bottom-right to top-left — draws with scroll */}
        <motion.path
          d="M 104 96 L -4 4"
          stroke="url(#diag-up)"
          strokeWidth="1.5"
          strokeLinecap="round"
          vectorEffect="non-scaling-stroke"
          style={{ pathLength: drawUp }}
        />
      </svg>

      {/* Glowing head of the top-left → bottom-right line */}
      <motion.div
        style={{ x: headDownX, y: headDownY }}
        className="absolute left-0 top-0"
      >
        <div className="h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-300/80 shadow-[0_0_14px_3px_rgba(34,211,238,0.3)]" />
        <div className="absolute left-0 top-0 h-20 w-20 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/8 blur-2xl" />
      </motion.div>

      {/* Glowing head of the bottom-right → top-left line */}
      <motion.div
        style={{ x: headUpX, y: headUpY }}
        className="absolute left-0 top-0"
      >
        <div className="h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-300/80 shadow-[0_0_14px_3px_rgba(167,139,250,0.3)]" />
        <div className="absolute left-0 top-0 h-20 w-20 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent-2/8 blur-2xl" />
      </motion.div>

      {/* Cursor glow */}
      <motion.div
        style={{ x: glowX, y: glowY }}
        className="absolute left-0 top-0 h-[500px] w-[500px] rounded-full bg-accent/5 blur-[110px]"
      />

      {/* Vignette to keep edges dark */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_55%,#05060f_100%)]" />
    </div>
  );
}
