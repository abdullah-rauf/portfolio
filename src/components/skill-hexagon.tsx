"use client";

import { motion } from "framer-motion";
import { useState } from "react";

interface SkillHexagonProps {
  name: string;
  level: number;
  icon?: string;
  index: number;
}

export function SkillHexagon({ name, level, icon, index }: SkillHexagonProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.3,
        delay: index * 0.03,
      }}
      whileHover={{ scale: 1.08 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="relative group cursor-pointer"
    >
      {/* Hexagon SVG */}
      <svg
        viewBox="0 0 200 200"
        className="w-full h-full drop-shadow-lg"
      >
        {/* Hexagon background */}
        <motion.polygon
          points="100,10 175,55 175,145 100,190 25,145 25,55"
          className="fill-white dark:fill-gray-900 stroke-2"
          stroke="url(#hex-gradient)"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.03 }}
        />

        {/* Gradient definitions */}
        <defs>
          <linearGradient id="hex-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" className="text-blue-300 dark:text-blue-700" stopColor="currentColor" />
            <stop offset="100%" className="text-purple-300 dark:text-purple-700" stopColor="currentColor" />
          </linearGradient>
        </defs>

        {/* Icon */}
        <foreignObject x="50" y="80" width="100" height="60">
          <div className="flex flex-col items-center justify-center h-full">
            {icon && (
              <motion.div
                className="text-4xl"
                animate={{
                  rotate: isHovered ? 360 : 0,
                  scale: isHovered ? 1.2 : 1,
                }}
                transition={{ duration: 0.3 }}
              >
                {icon}
              </motion.div>
            )}
          </div>
        </foreignObject>
      </svg>

      {/* Skill name below hexagon */}
      <motion.div
        className="mt-2 text-center h-12 flex items-center justify-center"
        animate={{ y: isHovered ? -5 : 0 }}
      >
        <h3 className="text-sm font-semibold text-gray-800 dark:text-gray-100 px-2">
          {name}
        </h3>
      </motion.div>

      {/* Glow effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full blur-xl opacity-0 -z-10"
        animate={{
          opacity: isHovered ? 0.3 : 0,
          scale: isHovered ? 1.2 : 1,
        }}
        transition={{ duration: 0.2 }}
      />
    </motion.div>
  );
}

