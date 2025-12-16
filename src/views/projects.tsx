"use client";

import { Container, Section, SectionHeading, ProjectCard } from "@/components";
import { projects } from "@/constants/data";

export function Projects() {
  return (
    <Section id="projects" className="bg-white dark:bg-black min-h-screen">
      <Container>
        <SectionHeading subtitle="Some of the projects I've worked on">
          Featured Projects
        </SectionHeading>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              image={project.image}
              tags={project.tags}
              liveUrl={project.liveUrl}
              githubUrl={project.githubUrl}
              index={index}
            />
          ))}
        </div>
      </Container>
    </Section>
  );
}

