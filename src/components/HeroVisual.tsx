"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

type Point3D = { x: number; y: number; z: number };

/**
 * A hologram software engineer: a particle figure seated at a glowing
 * laptop, code lines "typing" across its screen, with tech glyphs
 * orbiting the scene. Rendered on a plain 2D canvas — the Three.js look
 * without shipping Three.js.
 *
 * Low-end friendly: adaptive detail, capped pixel ratio, particle
 * connections precomputed once (the figure is rigid), pauses when the
 * tab is hidden, static frame under prefers-reduced-motion.
 */

// Rings of points along a limb segment from a to b
function addSegment(
  out: Point3D[],
  a: Point3D,
  b: Point3D,
  rStart: number,
  rEnd: number,
  rings: number,
  perRing: number
) {
  for (let i = 0; i < rings; i++) {
    const t = rings === 1 ? 0 : i / (rings - 1);
    const cx = a.x + (b.x - a.x) * t;
    const cy = a.y + (b.y - a.y) * t;
    const cz = a.z + (b.z - a.z) * t;
    const r = rStart + (rEnd - rStart) * t;
    for (let k = 0; k < perRing; k++) {
      const angle = (Math.PI * 2 * k) / perRing + t * 0.7;
      out.push({
        x: cx + r * Math.cos(angle),
        y: cy,
        z: cz + r * Math.sin(angle),
      });
    }
  }
}

// Sphere of points (for the head), Fibonacci lattice
function addSphere(out: Point3D[], center: Point3D, radius: number, count: number) {
  const golden = Math.PI * (3 - Math.sqrt(5));
  for (let i = 0; i < count; i++) {
    const y = 1 - (i / (count - 1)) * 2;
    const ringRadius = Math.sqrt(1 - y * y);
    const theta = golden * i;
    out.push({
      x: center.x + Math.cos(theta) * ringRadius * radius,
      y: center.y + y * radius,
      z: center.z + Math.sin(theta) * ringRadius * radius,
    });
  }
}

type Figure = {
  points: Point3D[];
  screenStart: number;
  screenRows: number;
  screenCols: number;
};

/** Seated developer facing the viewer, laptop in front. */
function buildFigure(lowDetail: boolean): Figure {
  const points: Point3D[] = [];
  const d = lowDetail ? 0.7 : 1;
  const rings = (n: number) => Math.max(3, Math.round(n * d));
  const per = (n: number) => Math.max(4, Math.round(n * d));

  // Head, tilted slightly down toward the screen
  addSphere(points, { x: 0, y: 0.5, z: 0.06 }, 0.14, lowDetail ? 18 : 28);
  // Torso leaning a little toward the laptop
  addSegment(
    points,
    { x: 0, y: 0.33, z: 0.07 },
    { x: 0, y: -0.08, z: 0 },
    0.15,
    0.12,
    rings(6),
    per(8)
  );
  // Upper arms: shoulders down and forward
  addSegment(
    points,
    { x: -0.21, y: 0.28, z: 0.06 },
    { x: -0.24, y: 0.05, z: 0.22 },
    0.05,
    0.04,
    rings(4),
    per(5)
  );
  addSegment(
    points,
    { x: 0.21, y: 0.28, z: 0.06 },
    { x: 0.24, y: 0.05, z: 0.22 },
    0.05,
    0.04,
    rings(4),
    per(5)
  );
  // Forearms reaching to the keyboard
  addSegment(
    points,
    { x: -0.24, y: 0.05, z: 0.22 },
    { x: -0.1, y: -0.02, z: 0.4 },
    0.04,
    0.03,
    rings(4),
    per(4)
  );
  addSegment(
    points,
    { x: 0.24, y: 0.05, z: 0.22 },
    { x: 0.1, y: -0.02, z: 0.4 },
    0.04,
    0.03,
    rings(4),
    per(4)
  );
  // Thighs forward (seated)
  addSegment(
    points,
    { x: -0.09, y: -0.08, z: 0.02 },
    { x: -0.13, y: -0.14, z: 0.34 },
    0.07,
    0.055,
    rings(4),
    per(6)
  );
  addSegment(
    points,
    { x: 0.09, y: -0.08, z: 0.02 },
    { x: 0.13, y: -0.14, z: 0.34 },
    0.07,
    0.055,
    rings(4),
    per(6)
  );
  // Shins down to the floor
  addSegment(
    points,
    { x: -0.13, y: -0.14, z: 0.34 },
    { x: -0.15, y: -0.62, z: 0.3 },
    0.05,
    0.04,
    rings(5),
    per(5)
  );
  addSegment(
    points,
    { x: 0.13, y: -0.14, z: 0.34 },
    { x: 0.15, y: -0.62, z: 0.3 },
    0.05,
    0.04,
    rings(5),
    per(5)
  );

  // Laptop keyboard: flat grid floating in front of the hands
  const kbRows = 3;
  const kbCols = lowDetail ? 5 : 7;
  for (let r = 0; r < kbRows; r++) {
    for (let c = 0; c < kbCols; c++) {
      points.push({
        x: -0.2 + (0.4 * c) / (kbCols - 1),
        y: -0.05,
        z: 0.38 + (0.14 * r) / (kbRows - 1),
      });
    }
  }

  // Laptop screen: grid rising from the keyboard's far edge, tilted back
  const screenRows = lowDetail ? 5 : 6;
  const screenCols = lowDetail ? 6 : 8;
  const screenStart = points.length;
  for (let r = 0; r < screenRows; r++) {
    const t = r / (screenRows - 1);
    const y = -0.03 + 0.36 * t;
    const z = 0.53 + 0.08 * t;
    for (let c = 0; c < screenCols; c++) {
      points.push({
        x: -0.21 + (0.42 * c) / (screenCols - 1),
        y,
        z,
      });
    }
  }

  return { points, screenStart, screenRows, screenCols };
}

// Tech glyphs orbiting the figure: radius, height, speed, phase
const glyphs = [
  { text: "</>", radius: 0.72, y: 0.45, speed: 0.00045, phase: 0 },
  { text: "{ }", radius: 0.8, y: 0.1, speed: -0.00035, phase: 2.1 },
  { text: "=>", radius: 0.68, y: -0.25, speed: 0.0005, phase: 4.2 },
  { text: "git", radius: 0.85, y: 0.28, speed: -0.0004, phase: 1.2 },
  { text: "npm", radius: 0.75, y: -0.45, speed: 0.0004, phase: 3.3 },
  { text: "AI", radius: 0.9, y: -0.05, speed: 0.00055, phase: 5.2 },
];

export default function HeroVisual() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const deviceMemory =
      (navigator as Navigator & { deviceMemory?: number }).deviceMemory ?? 8;
    const lowDetail = window.innerWidth < 768 || deviceMemory <= 4;

    const { points, screenStart, screenRows, screenCols } =
      buildFigure(lowDetail);
    const count = points.length;

    // The figure is rigid — rotation and bobbing preserve distances,
    // so neighbor pairs only need computing once.
    const pairs: [number, number][] = [];
    const maxDist = 0.16;
    for (let i = 0; i < count; i++) {
      for (let j = i + 1; j < count; j++) {
        const dx = points[i].x - points[j].x;
        const dy = points[i].y - points[j].y;
        const dz = points[i].z - points[j].z;
        if (dx * dx + dy * dy + dz * dz < maxDist * maxDist) {
          pairs.push([i, j]);
        }
      }
    }

    const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
    let width = 0;
    let height = 0;

    const resize = () => {
      // offsetWidth/Height ignore the entrance scale transform, so the
      // canvas buffer matches the final layout size
      width = canvas.offsetWidth;
      height = canvas.offsetHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    window.addEventListener("resize", resize);

    // Sway gently instead of spinning full circles, so the developer
    // mostly faces the viewer
    let rotX = 0.12;
    let targetTiltX = 0.12;
    let mouseInfluence = 0;
    let targetMouse = 0;

    const onMouse = (e: MouseEvent) => {
      const nx = e.clientX / window.innerWidth - 0.5;
      const ny = e.clientY / window.innerHeight - 0.5;
      targetTiltX = 0.12 + ny * 0.1;
      targetMouse = nx * 0.5;
    };
    window.addEventListener("mousemove", onMouse);

    const projected = new Array<{ x: number; y: number; z: number }>(count);

    const drawFrame = (time: number) => {
      ctx.clearRect(0, 0, width, height);

      const cx = width / 2;
      const cy = height / 2;
      const scale = Math.min(width, height) * 0.5;
      const perspective = 3.2;
      const bob = Math.sin(time * 0.0012) * 0.015;
      const rotY = Math.sin(time * 0.0004) * 0.55 + mouseInfluence;

      const sinY = Math.sin(rotY);
      const cosY = Math.cos(rotY);
      const sinX = Math.sin(rotX);
      const cosX = Math.cos(rotX);

      const project = (p: Point3D) => {
        const x1 = p.x * cosY + p.z * sinY;
        const z1 = -p.x * sinY + p.z * cosY;
        const y2 = p.y * cosX - z1 * sinX + bob;
        const z2 = p.y * sinX + z1 * cosX;
        const depth = perspective / (perspective - z2);
        return {
          x: cx + x1 * scale * depth,
          y: cy - y2 * scale * depth, // canvas y grows downward
          z: z2,
        };
      };

      for (let i = 0; i < count; i++) {
        projected[i] = project(points[i]);
      }

      // Connections — brighter when both ends face the viewer
      ctx.lineWidth = 0.6;
      for (const [a, b] of pairs) {
        const pa = projected[a];
        const pb = projected[b];
        const facing = (pa.z + pb.z) / 2;
        const alpha = 0.05 + Math.max(0, facing) * 0.3;
        ctx.strokeStyle = `rgba(103, 232, 249, ${alpha})`;
        ctx.beginPath();
        ctx.moveTo(pa.x, pa.y);
        ctx.lineTo(pb.x, pb.y);
        ctx.stroke();
      }

      // "Typing" progress: screen rows light up top-to-bottom, then reset
      const cycle = screenRows + 3;
      const progress = (time * 0.0018) % cycle;

      // Particles
      for (let i = 0; i < count; i++) {
        const p = projected[i];
        const t = (p.z + 1) / 2;
        const isScreen = i >= screenStart;

        if (isScreen) {
          const local = i - screenStart;
          const row = screenRows - 1 - Math.floor(local / screenCols);
          const col = local % screenCols;
          const rowLit = row < Math.floor(progress);
          const isCursorRow = row === Math.floor(progress);
          const litCols = isCursorRow
            ? Math.floor((progress % 1) * screenCols)
            : 0;
          const lit = rowLit || (isCursorRow && col <= litCols);
          const alpha = lit ? 0.95 : 0.2 + t * 0.2;
          const size = lit ? 1.7 : 0.9;
          ctx.fillStyle = `rgba(74, 222, 128, ${alpha})`;
          ctx.beginPath();
          ctx.arc(p.x, p.y, size, 0, Math.PI * 2);
          ctx.fill();
        } else {
          const size = 0.8 + t * 1.5;
          const alpha = 0.25 + t * 0.65;
          ctx.fillStyle =
            i % 3 === 0
              ? `rgba(167, 139, 250, ${alpha})`
              : `rgba(34, 211, 238, ${alpha})`;
          ctx.beginPath();
          ctx.arc(p.x, p.y, size, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      // Screen glow cast toward the developer's chest
      const glowSrc = project({ x: 0, y: 0.15, z: 0.55 });
      const glowGrad = ctx.createRadialGradient(
        glowSrc.x,
        glowSrc.y,
        0,
        glowSrc.x,
        glowSrc.y,
        scale * 0.3
      );
      glowGrad.addColorStop(0, "rgba(74, 222, 128, 0.08)");
      glowGrad.addColorStop(1, "rgba(74, 222, 128, 0)");
      ctx.fillStyle = glowGrad;
      ctx.fillRect(0, 0, width, height);

      // Orbiting tech glyphs
      ctx.font = "600 13px var(--font-geist-mono), monospace";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      for (const glyph of glyphs) {
        const angle = glyph.phase + time * glyph.speed;
        const gp = project({
          x: Math.cos(angle) * glyph.radius,
          y: glyph.y,
          z: Math.sin(angle) * glyph.radius,
        });
        const gt = (gp.z + 1) / 2;
        const alpha = 0.15 + Math.max(0, gp.z) * 0.55;
        ctx.fillStyle =
          glyph.text === "AI"
            ? `rgba(167, 139, 250, ${alpha})`
            : `rgba(34, 211, 238, ${alpha})`;
        ctx.save();
        ctx.translate(gp.x, gp.y);
        ctx.scale(0.7 + gt * 0.5, 0.7 + gt * 0.5);
        ctx.fillText(glyph.text, 0, 0);
        ctx.restore();
      }

      // Glow platform under the scene
      const floorY = cy + 0.72 * scale;
      const grad = ctx.createRadialGradient(cx, floorY, 0, cx, floorY, scale * 0.55);
      grad.addColorStop(0, "rgba(34, 211, 238, 0.14)");
      grad.addColorStop(1, "rgba(34, 211, 238, 0)");
      ctx.fillStyle = grad;
      ctx.save();
      ctx.translate(cx, floorY);
      ctx.scale(1, 0.22);
      ctx.translate(-cx, -floorY);
      ctx.beginPath();
      ctx.arc(cx, floorY, scale * 0.55, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    };

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    let raf = 0;
    let running = true;

    const loop = (time: number) => {
      if (!running) return;
      rotX += (targetTiltX - rotX) * 0.05;
      mouseInfluence += (targetMouse - mouseInfluence) * 0.04;
      drawFrame(time);
      raf = requestAnimationFrame(loop);
    };

    const onVisibility = () => {
      running = document.visibilityState === "visible" && !reducedMotion;
      if (running) {
        raf = requestAnimationFrame(loop);
      } else {
        cancelAnimationFrame(raf);
      }
    };
    document.addEventListener("visibilitychange", onVisibility);

    if (reducedMotion) {
      drawFrame(0); // single static frame
    } else {
      raf = requestAnimationFrame(loop);
    }

    return () => {
      running = false;
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMouse);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.85 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.2, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="relative mx-auto aspect-square w-full max-w-md"
    >
      {/* Soft halo behind the scene */}
      <div className="absolute inset-8 rounded-full bg-accent/8 blur-3xl" />
      <canvas ref={canvasRef} className="relative h-full w-full" />
    </motion.div>
  );
}
