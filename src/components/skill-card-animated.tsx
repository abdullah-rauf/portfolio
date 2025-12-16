"use client";

import { motion } from "framer-motion";
import { useState } from "react";

interface SkillCardAnimatedProps {
  name: string;
  level: number;
  icon?: string;
  index: number;
}

export function SkillCardAnimated({ name, level, icon, index }: SkillCardAnimatedProps) {
  const [isHovered, setIsHovered] = useState(false);
  
  // Calculate color based on level
  const getColorClass = (level: number) => {
    if (level >= 90) return "from-emerald-400 to-cyan-400";
    if (level >= 80) return "from-blue-400 to-indigo-500";
    if (level >= 70) return "from-purple-400 to-pink-500";
    return "from-orange-400 to-red-500";
  };

  const colorClass = getColorClass(level);
  const circumference = 2 * Math.PI * 45;
  const strokeDashoffset = circumference - (level / 100) * circumference;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.3,
        delay: index * 0.03,
      }}
      whileHover={{ scale: 1.05, y: -5 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="relative group cursor-pointer"
    >
      {/* Glowing background effect */}
      <motion.div
        className={`absolute inset-0 bg-gradient-to-r ${colorClass} rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-300`}
        animate={{
          scale: isHovered ? [1, 1.2, 1] : 1,
        }}
        transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY }}
      />

      {/* Card container */}
      <div className="relative bg-white dark:bg-gray-900 rounded-2xl p-6 border border-gray-200 dark:border-gray-800 overflow-hidden h-40">
        {/* Animated background particles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className={`absolute w-2 h-2 bg-gradient-to-r ${colorClass} rounded-full opacity-20`}
              animate={{
                x: [
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                ],
                y: [
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                ],
              }}
              transition={{
                duration: 2 + Math.random() * 1,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
              }}
            />
          ))}
        </div>

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full">
          {/* Icon */}
          {icon && (
            <motion.div
              className="text-5xl mb-4"
              animate={{
                rotate: isHovered ? 360 : 0,
                scale: isHovered ? 1.2 : 1,
              }}
              transition={{ duration: 0.3 }}
            >
              {icon}
            </motion.div>
          )}

          {/* Skill name */}
          <motion.h3
            className="text-base font-semibold text-gray-800 dark:text-gray-100 text-center px-2"
            animate={{
              y: isHovered ? -5 : 0,
            }}
          >
            {name}
          </motion.h3>
        </div>

        {/* Corner decoration */}
        <motion.div
          className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${colorClass} opacity-10 rounded-bl-full`}
          animate={{
            scale: isHovered ? 1.5 : 1,
            opacity: isHovered ? 0.2 : 0.1,
          }}
          transition={{ duration: 0.3 }}
        />
      </div>
    </motion.div>
  );
}

