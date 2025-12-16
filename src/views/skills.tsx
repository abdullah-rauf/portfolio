"use client";

import { motion } from "framer-motion";
import { Container, Section, SectionHeading, SkillBar } from "@/components";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { skills } from "@/constants/data";

export function Skills() {
  return (
    <Section id="skills" className="bg-black dark:bg-black min-h-screen">
      <Container>
        <SectionHeading subtitle="Technologies and tools I work with">
          Skills & Expertise
        </SectionHeading>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((category, index) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    {category.category}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  {category.items.map((skill) => (
                    <SkillBar
                      key={skill.name}
                      name={skill.name}
                      level={skill.level}
                    />
                  ))}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
}

