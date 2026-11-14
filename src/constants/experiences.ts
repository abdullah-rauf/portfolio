import type { Experience } from "@/types";

export const experiences: Experience[] = [
  {
    role: "Software Engineer",
    company: "Spadasoft",
    period: "08/2024 – Present",
    points: [
      "Build React and Next.js interfaces with TypeScript, integrating reusable components with Node.js services and REST/GraphQL APIs.",
      "Design API structures and database models; debug frontend/backend integration issues and improve application performance.",
      "Integrate OpenAI and Gemini APIs and automation workflows into user-facing application features.",
      "Maintain AWS deployments and CI/CD workflows; collaborate with clients, designers and engineers on technical reviews and feature delivery.",
    ],
  },
  {
    role: "Full Stack Developer",
    company: "Caaztech Ltd",
    period: "02/2023 – 03/2024",
    points: [],
    stages: [
      {
        role: "MERN Stack Developer",
        period: "02/2023 – 05/2023",
        points: [
          "Built MERN-stack applications, contributing responsive interfaces, API integrations and backend functionality.",
        ],
      },
      {
        role: "Full Stack Developer",
        period: "05/2023 – 03/2024",
        points: [
          "Developed responsive React/Next.js interfaces with Tailwind CSS and Node.js, NestJS, Express and Python/FastAPI services.",
          "Implemented authentication, REST APIs, business logic and third-party integrations, including payment gateways.",
          "Designed PostgreSQL/MongoDB schemas and migrations; tested and debugged applications and deployed them on AWS EC2 and Lightsail.",
        ],
      },
    ],
  },
  {
    role: "Software Developer (Internship)",
    company: "Systems Limited",
    period: "11/2022 – 01/2023",
    points: [
      "Assisted with HTML, CSS, JavaScript and React development, debugging and feature implementation.",
    ],
  },
];
