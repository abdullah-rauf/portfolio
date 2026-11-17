"use client";

import { useMemo } from "react";
import { motion, useReducedMotion, type Variants } from "framer-motion";

type RevealTextProps = {
  text: string;
  as?: "h1" | "h2" | "h3" | "p" | "span";
  className?: string;
  style?: React.CSSProperties;
  mode?: "words" | "chars" | "lines";
  delay?: number;
  stagger?: number;
  once?: boolean;
  animateOnMount?: boolean;
};

const ease = [0.22, 1, 0.36, 1] as const;

export default function RevealText({
  text,
  as = "p",
  className,
  style,
  mode = "words",
  delay = 0,
  stagger = 0.035,
  once = true,
  animateOnMount = false,
}: RevealTextProps) {
  const reduce = useReducedMotion();
  const Tag = motion[as];

  const units = useMemo(() => {
    if (mode === "chars") return text.split("").map((c) => (c === " " ? "\u00A0" : c));
    if (mode === "lines") return text.split("\n");
    return text.split(" ");
  }, [text, mode]);

  const container: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: reduce ? 0 : stagger,
        delayChildren: delay,
      },
    },
  };

  const child: Variants = {
    hidden: { y: "110%", opacity: 0, rotate: reduce ? 0 : 2 },
    visible: {
      y: "0%",
      opacity: 1,
      rotate: 0,
      transition: { duration: 0.85, ease },
    },
  };

  return (
    <Tag
      className={className}
      style={style}
      variants={container}
      initial="hidden"
      {...(animateOnMount
        ? { animate: "visible" }
        : {
            whileInView: "visible",
            viewport: { once, amount: 0.35 },
          })}
      aria-label={text.replace(/\n/g, " ")}
    >
      {units.map((unit, i) => (
        <span
          key={`${unit}-${i}`}
          className="inline-block overflow-hidden align-bottom"
          style={mode === "lines" ? { display: "block" } : undefined}
        >
          <motion.span
            className={mode === "lines" ? "block" : "inline-block"}
            variants={child}
          >
            {unit}
            {mode === "words" && i < units.length - 1 ? "\u00A0" : null}
          </motion.span>
        </span>
      ))}
    </Tag>
  );
}
