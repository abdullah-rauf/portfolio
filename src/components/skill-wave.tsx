"use client";

import { motion } from "framer-motion";

interface SkillWaveProps {
  name: string;
  level: number;
  icon?: string;
  index: number;
}

export function SkillWave({ name, level, icon, index }: SkillWaveProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay: index * 0.02 }}
      className="group"
    >
      <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 border border-gray-200 dark:border-gray-800 hover:border-purple-500 dark:hover:border-purple-500 transition-all duration-200 hover:shadow-2xl hover:shadow-purple-500/20 h-32">
        <div className="flex items-center gap-6 h-full">
          {icon && (
            <motion.div
              className="text-5xl flex-shrink-0"
              whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.2 }}
              transition={{ duration: 0.3 }}
            >
              {icon}
            </motion.div>
          )}
          <div className="flex-1 flex items-center">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100">
              {name}
            </h3>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

