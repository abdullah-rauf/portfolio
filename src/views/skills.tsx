"use client";

import { motion } from "framer-motion";
import { Container, Section, SectionHeading } from "@/components";
import { SkillCardAnimated } from "@/components/skill-card-animated";
import { SkillHexagon } from "@/components/skill-hexagon";
import { SkillWave } from "@/components/skill-wave";
import { skills } from "@/constants/data";
import { useState } from "react";

// Skill icons mapping
const skillIcons: Record<string, string> = {
  "React.js": "⚛️",
  "Next.js": "▲",
  TypeScript: "📘",
  "Tailwind CSS": "🎨",
  "Vue.js": "💚",
  "HTML5 & CSS3": "🌐",
  "Node.js": "🟢",
  "Express.js": "🚂",
  "Nest.js": "🦅",
  "REST & GraphQL APIs": "🔌",
  MongoDB: "🍃",
  PostgreSQL: "🐘",
  MySQL: "🐬",
  "OpenAI Integration": "🤖",
  "Gemini API": "✨",
  "AWS (S3, EC2, Lambda)": "☁️",
  "Google Cloud": "🌩️",
  "CI/CD": "🔄",
  Shopify: "🛍️",
  BigCommerce: "🛒",
  "Stripe & PayPal": "💳",
  "Chrome Extensions": "🧩",
  "Figma to React": "🎯",
};

type ViewMode = "circular" | "hexagon" | "wave";

export function Skills() {
  const [viewMode, setViewMode] = useState<ViewMode>("circular");

  // Flatten all skills for certain views
  const allSkills = skills.flatMap((category) =>
    category.items.map((skill) => ({
      ...skill,
      category: category.category,
    }))
  );

  return (
    <Section
      id="skills"
      className="bg-gradient-to-b from-white via-purple-50/30 to-white dark:from-black dark:via-purple-950/10 dark:to-black min-h-screen"
    >
      <Container>
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(15)].map((_, i) => {
            const randomX1 = Math.random() * 100;
            const randomX2 = Math.random() * 100;
            const randomY1 = Math.random() * 100;
            const randomY2 = Math.random() * 100;
            return (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-purple-500/20 rounded-full"
                style={{
                  left: `${randomX1}%`,
                  top: `${randomY1}%`,
                }}
                animate={{
                  x: [`0%`, `${randomX2 - randomX1}%`],
                  y: [`0%`, `${randomY2 - randomY1}%`],
                  scale: [1, 1.5, 1],
                  opacity: [0.2, 0.4, 0.2],
                }}
                transition={{
                  duration: 3 + Math.random() * 2,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "linear",
                }}
              />
            );
          })}
        </div>

        <SectionHeading subtitle="Technologies and tools I work with">
          Skills & Expertise
        </SectionHeading>

        {/* View mode selector */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3 }}
          className="flex justify-center gap-4 mb-12"
        >
          {[
            { mode: "circular" as ViewMode, label: "Circular", icon: "⭕" },
            { mode: "hexagon" as ViewMode, label: "Hexagon", icon: "⬡" },
            { mode: "wave" as ViewMode, label: "Wave", icon: "〰️" },
          ].map(({ mode, label, icon }) => (
            <motion.button
              key={mode}
              onClick={() => setViewMode(mode)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                viewMode === mode
                  ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-purple-500/50"
                  : "bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-800 hover:border-purple-500"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="mr-2">{icon}</span>
              {label}
            </motion.button>
          ))}
        </motion.div>

        {/* Circular view */}
        {viewMode === "circular" && (
          <motion.div
            key="circular"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6"
          >
            {allSkills.map((skill, index) => (
              <SkillCardAnimated
                key={skill.name}
                name={skill.name}
                level={skill.level}
                icon={skillIcons[skill.name]}
                index={index}
              />
            ))}
          </motion.div>
        )}

        {/* Hexagon view */}
        {viewMode === "hexagon" && (
          <motion.div
            key="hexagon"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-8"
          >
            {allSkills.map((skill, index) => (
              <SkillHexagon
                key={skill.name}
                name={skill.name}
                level={skill.level}
                icon={skillIcons[skill.name]}
                index={index}
              />
            ))}
          </motion.div>
        )}

        {/* Wave view */}
        {viewMode === "wave" && (
          <motion.div
            key="wave"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="space-y-4 max-w-4xl mx-auto"
          >
            {allSkills.map((skill, index) => (
              <SkillWave
                key={skill.name}
                name={skill.name}
                level={skill.level}
                icon={skillIcons[skill.name]}
                index={index}
              />
            ))}
          </motion.div>
        )}
      </Container>
    </Section>
  );
}
