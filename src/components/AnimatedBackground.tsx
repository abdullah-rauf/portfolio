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
 * Full-viewport animated backdrop: flowing wave lines that drift on their own
 * and shift with scroll, a moving grid, drifting glow orbs, and a glow that
 * follows the cursor. Sits fixed behind all content.
 */
export default function AnimatedBackground() {
  const { scrollYProgress } = useScroll();
  const smooth = useSpring(scrollYProgress, { stiffness: 60, damping: 20 });

  // Parallax layers move at different speeds as the page scrolls
  const wavesY = useTransform(smooth, [0, 1], [0, -320]);
  const wavesRotate = useTransform(smooth, [0, 1], [0, -6]);
  const orbAY = useTransform(smooth, [0, 1], [0, 480]);
  const orbBY = useTransform(smooth, [0, 1], [0, -380]);
  const gridY = useTransform(smooth, [0, 1], [0, -160]);

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
      {/* Moving grid */}
      <motion.div
        style={{ y: gridY }}
        className="absolute -inset-y-40 inset-x-0 opacity-[0.35]"
      >
        <div
          className="h-full w-full"
          style={{
            backgroundImage:
              "linear-gradient(rgba(139,144,173,0.09) 1px, transparent 1px), linear-gradient(90deg, rgba(139,144,173,0.09) 1px, transparent 1px)",
            backgroundSize: "72px 72px",
            maskImage:
              "radial-gradient(ellipse 90% 70% at 50% 40%, black 30%, transparent 100%)",
          }}
        />
      </motion.div>

      {/* Drifting glow orbs */}
      <motion.div
        style={{ y: orbAY }}
        className="absolute -left-40 top-[-10%] h-[34rem] w-[34rem] rounded-full bg-accent/12 blur-[130px]"
      />
      <motion.div
        style={{ y: orbBY }}
        className="absolute -right-40 top-[35%] h-[38rem] w-[38rem] rounded-full bg-accent-2/12 blur-[140px]"
      />
      <motion.div
        animate={{ x: [0, 60, -40, 0], y: [0, -50, 30, 0] }}
        transition={{ duration: 26, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-[45%] top-[70%] h-[26rem] w-[26rem] rounded-full bg-pink-500/8 blur-[120px]"
      />

      {/* Flowing wave lines */}
      <motion.div
        style={{ y: wavesY, rotate: wavesRotate }}
        className="absolute inset-x-[-10%] top-0 h-[160%]"
      >
        <svg
          className="h-full w-full"
          viewBox="0 0 1440 1600"
          preserveAspectRatio="none"
          fill="none"
        >
          <defs>
            <linearGradient id="wave-a" x1="0" y1="0" x2="1440" y2="0" gradientUnits="userSpaceOnUse">
              <stop offset="0" stopColor="#22d3ee" stopOpacity="0" />
              <stop offset="0.5" stopColor="#22d3ee" stopOpacity="0.55" />
              <stop offset="1" stopColor="#22d3ee" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="wave-b" x1="0" y1="0" x2="1440" y2="0" gradientUnits="userSpaceOnUse">
              <stop offset="0" stopColor="#a78bfa" stopOpacity="0" />
              <stop offset="0.5" stopColor="#a78bfa" stopOpacity="0.5" />
              <stop offset="1" stopColor="#a78bfa" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="wave-c" x1="0" y1="0" x2="1440" y2="0" gradientUnits="userSpaceOnUse">
              <stop offset="0" stopColor="#f472b6" stopOpacity="0" />
              <stop offset="0.5" stopColor="#f472b6" stopOpacity="0.4" />
              <stop offset="1" stopColor="#f472b6" stopOpacity="0" />
            </linearGradient>
          </defs>

          {/* Soft breathing waves (path morph) */}
          <motion.path
            animate={{
              d: [
                "M-100 250 C 260 150, 500 380, 760 280 C 1020 180, 1240 340, 1540 240",
                "M-100 280 C 260 380, 500 160, 760 260 C 1020 360, 1240 180, 1540 280",
                "M-100 250 C 260 150, 500 380, 760 280 C 1020 180, 1240 340, 1540 240",
              ],
            }}
            transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
            stroke="url(#wave-a)"
            strokeWidth="1.5"
            opacity="0.8"
          />
          <motion.path
            animate={{
              d: [
                "M-100 560 C 300 460, 560 660, 820 560 C 1080 460, 1280 640, 1540 540",
                "M-100 530 C 300 660, 560 440, 820 580 C 1080 700, 1280 460, 1540 580",
                "M-100 560 C 300 460, 560 660, 820 560 C 1080 460, 1280 640, 1540 540",
              ],
            }}
            transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
            stroke="url(#wave-b)"
            strokeWidth="1.5"
            opacity="0.7"
          />
          <motion.path
            animate={{
              d: [
                "M-100 900 C 280 800, 540 1000, 800 900 C 1060 800, 1300 980, 1540 880",
                "M-100 930 C 280 1030, 540 810, 800 930 C 1060 1040, 1300 820, 1540 930",
                "M-100 900 C 280 800, 540 1000, 800 900 C 1060 800, 1300 980, 1540 880",
              ],
            }}
            transition={{ duration: 16, repeat: Infinity, ease: "easeInOut", delay: 3 }}
            stroke="url(#wave-c)"
            strokeWidth="1.5"
            opacity="0.6"
          />
          <motion.path
            animate={{
              d: [
                "M-100 1250 C 300 1150, 560 1350, 820 1250 C 1080 1150, 1280 1330, 1540 1230",
                "M-100 1220 C 300 1350, 560 1130, 820 1270 C 1080 1390, 1280 1150, 1540 1270",
                "M-100 1250 C 300 1150, 560 1350, 820 1250 C 1080 1150, 1280 1330, 1540 1230",
              ],
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            stroke="url(#wave-a)"
            strokeWidth="1.5"
            opacity="0.5"
          />

          {/* Dashed "energy" lines flowing along the waves */}
          <motion.path
            d="M-100 250 C 260 150, 500 380, 760 280 C 1020 180, 1240 340, 1540 240"
            stroke="url(#wave-a)"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeDasharray="4 220"
            animate={{ strokeDashoffset: [0, -2240] }}
            transition={{ duration: 9, repeat: Infinity, ease: "linear" }}
          />
          <motion.path
            d="M-100 560 C 300 460, 560 660, 820 560 C 1080 460, 1280 640, 1540 540"
            stroke="url(#wave-b)"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeDasharray="4 220"
            animate={{ strokeDashoffset: [0, -2240] }}
            transition={{ duration: 12, repeat: Infinity, ease: "linear", delay: 2 }}
          />
          <motion.path
            d="M-100 900 C 280 800, 540 1000, 800 900 C 1060 800, 1300 980, 1540 880"
            stroke="url(#wave-c)"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeDasharray="4 220"
            animate={{ strokeDashoffset: [0, -2240] }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear", delay: 4 }}
          />
        </svg>
      </motion.div>

      {/* Cursor glow */}
      <motion.div
        style={{ x: glowX, y: glowY }}
        className="absolute left-0 top-0 h-[500px] w-[500px] rounded-full bg-accent/10 blur-[110px]"
      />

      {/* Vignette to keep edges dark */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_50%,#05060f_100%)]" />
    </div>
  );
}
