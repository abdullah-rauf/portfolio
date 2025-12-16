"use client";

import { motion } from "framer-motion";

interface SkillBarProps {
  name: string;
  level: number;
}

export function SkillBar({ name, level }: SkillBarProps) {
  return (
    <div className="mb-4">
      <div className="flex justify-between mb-2">
        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
          {name}
        </span>
        <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
          {level}%
        </span>
      </div>
      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5 overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="bg-gradient-to-r from-blue-500 to-purple-600 h-2.5 rounded-full"
        />
      </div>
    </div>
  );
}

