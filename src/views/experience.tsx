"use client";

import { Container, Section, SectionHeading, ExperienceCard } from "@/components";
import { experiences } from "@/constants/data";

export function Experience() {
  return (
    <Section id="experience" className="bg-white dark:bg-black min-h-screen">
      <Container>
        <SectionHeading subtitle="My professional journey">
          Work Experience
        </SectionHeading>

        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <ExperienceCard
              key={exp.id}
              title={exp.title}
              company={exp.company}
              location={exp.location}
              period={exp.period}
              description={exp.description}
              responsibilities={exp.responsibilities}
              index={index}
            />
          ))}
        </div>
      </Container>
    </Section>
  );
}

