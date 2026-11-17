"use client";

import { motion, useMotionTemplate, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";

const tiles = [
  { x: "0%", y: "8%", w: "28%", h: "42%", delay: 0.1, accent: true, depth: 0.1 },
  { x: "32%", y: "0%", w: "22%", h: "28%", delay: 0.18, depth: 0.14 },
  { x: "58%", y: "12%", w: "42%", h: "36%", delay: 0.24, accent: true, depth: 0.18 },
  { x: "8%", y: "56%", w: "36%", h: "38%", delay: 0.3, depth: 0.12 },
  { x: "48%", y: "52%", w: "24%", h: "40%", delay: 0.36, accent: true, depth: 0.2 },
  { x: "76%", y: "56%", w: "24%", h: "32%", delay: 0.42, depth: 0.16 },
];

const ease = [0.22, 1, 0.36, 1] as const;

type HeroVisualProps = {
  ready?: boolean;
};

function Tile({
  tile,
  index,
  ready,
  mx,
  my,
}: {
  tile: (typeof tiles)[number];
  index: number;
  ready: boolean;
  mx: ReturnType<typeof useSpring>;
  my: ReturnType<typeof useSpring>;
}) {
  const x = useTransform(mx, (v) => v * tile.depth);
  const y = useTransform(my, (v) => v * (tile.depth * 0.8));

  return (
    <motion.div
      className={`absolute overflow-hidden rounded-md will-change-transform ${
        tile.accent ? "bg-foreground" : "bg-foreground/80"
      }`}
      style={{
        left: tile.x,
        top: tile.y,
        width: tile.w,
        height: tile.h,
        x,
        y,
      }}
      initial={{ opacity: 0, scale: 0.7, y: 60, clipPath: "inset(100% 0 0 0)" }}
      animate={
        ready
          ? { opacity: 1, scale: 1, y: 0, clipPath: "inset(0% 0 0 0)" }
          : { opacity: 0, scale: 0.7, y: 60, clipPath: "inset(100% 0 0 0)" }
      }
      transition={{
        delay: ready ? 0.55 + tile.delay : 0,
        duration: 1.05,
        ease,
      }}
    >
      <motion.div
        className="absolute inset-0"
        style={{
          background:
            index % 2 === 0
              ? "radial-gradient(circle at 30% 30%, rgba(255,255,255,0.2), transparent 55%)"
              : "radial-gradient(circle at 70% 60%, rgba(255,255,255,0.14), transparent 50%)",
        }}
        animate={{
          x: [0, 14, -10, 0],
          y: [0, -12, 8, 0],
          scale: [1, 1.1, 0.95, 1],
        }}
        transition={{
          duration: 7 + index,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.span
        className="absolute inset-[18%] rounded-full border border-white/15"
        animate={{ rotate: [0, 180, 360], scale: [0.9, 1.08, 0.9] }}
        transition={{ duration: 10 + index * 1.2, repeat: Infinity, ease: "linear" }}
      />
      {tile.accent ? (
        <motion.span
          className="absolute left-1/2 top-1/2 h-10 w-10 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/90 sm:h-14 sm:w-14"
          animate={{ scale: [0.85, 1.12, 0.85], opacity: [0.65, 1, 0.65] }}
          transition={{ duration: 3.2 + index * 0.2, repeat: Infinity, ease: "easeInOut" }}
        />
      ) : null}
    </motion.div>
  );
}

export default function HeroVisual({ ready = true }: HeroVisualProps) {
  const ref = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 80, damping: 20 });
  const sy = useSpring(my, { stiffness: 80, damping: 20 });
  const rotateX = useTransform(sy, [-40, 40], [6, -6]);
  const rotateY = useTransform(sx, [-40, 40], [-6, 6]);
  const transform = useMotionTemplate`perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;

  const onMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    mx.set(((e.clientX - rect.left) / rect.width - 0.5) * 80);
    my.set(((e.clientY - rect.top) / rect.height - 0.5) * 80);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={() => {
        mx.set(0);
        my.set(0);
      }}
      style={{ transform }}
      className="relative mx-auto mt-8 aspect-[16/8] w-full max-w-5xl sm:mt-10 lg:mt-12"
    >
      {tiles.map((tile, i) => (
        <Tile key={i} tile={tile} index={i} ready={ready} mx={sx} my={sy} />
      ))}

      <div className="absolute -bottom-8 left-0 right-0 flex justify-between gap-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-muted sm:text-xs">
        {Array.from({ length: 5 }).map((_, i) => (
          <motion.span
            key={i}
            initial={{ opacity: 0, y: 10 }}
            animate={ready ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
            transition={{ delay: 1.25 + i * 0.06, duration: 0.5 }}
          >
            Scroll Down
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
}
