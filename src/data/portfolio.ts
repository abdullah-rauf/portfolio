export const personal = {
  name: "Abdullah Rauf",
  title: "Full Stack Developer",
  email: "abdullahrauf009@gmail.com",
  phone: "+92-300-0979300",
  linkedin: "https://linkedin.com/in/abdullahrauf",
  github: "https://github.com/abdullah-rauf",
  location: "Pakistan",
  summary:
    "Full Stack Developer with 3+ years of experience building scalable and user-friendly web applications using the MERN stack and modern JavaScript frameworks. Skilled in React.js, Next.js, TypeScript, Node.js, Express.js, and Nest.js. Experienced in AI integrations, GraphQL APIs, cloud services, and modern SaaS applications.",
};

export type SkillGroup = {
  category: string;
  skills: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    category: "Front-End",
    skills: [
      "React.js",
      "Next.js",
      "TypeScript",
      "JavaScript (ES6+)",
      "Vue.js",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
    ],
  },
  {
    category: "Back-End",
    skills: ["Node.js", "Express.js", "Nest.js", "REST APIs", "GraphQL APIs"],
  },
  {
    category: "Databases",
    skills: ["MongoDB", "PostgreSQL", "MySQL"],
  },
  {
    category: "AI & Integrations",
    skills: [
      "OpenAI API",
      "Gemini API",
      "Prompt Engineering",
      "Chatbots",
      "API Integrations",
    ],
  },
  {
    category: "Cloud & DevOps",
    skills: [
      "AWS (S3, EC2, Lambda)",
      "Google Cloud",
      "Heroku",
      "CI/CD",
      "Vercel",
    ],
  },
  {
    category: "E-Commerce & SaaS",
    skills: ["Shopify", "BigCommerce", "Stripe", "PayPal", "Recurly"],
  },
  {
    category: "Tools",
    skills: ["Git", "GitHub", "Figma to React", "Chrome Extensions"],
  },
];

export type Experience = {
  role: string;
  company: string;
  period: string;
  points: string[];
};

export const experiences: Experience[] = [
  {
    role: "Full Stack Developer",
    company: "Spadasoft",
    period: "07/2024 – Present",
    points: [
      "Developing scalable applications using React.js, Next.js, Node.js, and TypeScript",
      "Integrating REST and GraphQL APIs",
      "Working on AI-powered features using OpenAI and Gemini APIs",
      "Building reusable front-end components",
    ],
  },
  {
    role: "MERN Stack Developer",
    company: "Caaztech Ltd",
    period: "02/2023 – 03/2024",
    points: [
      "Built and maintained MERN stack applications",
      "Integrated third-party APIs and payment gateways",
      "Optimized front-end performance",
      "Worked closely with designers on UI/UX",
    ],
  },
  {
    role: "Web Developer Intern",
    company: "Systems Limited",
    period: "11/2022 – 01/2023",
    points: [
      "Assisted in building responsive web applications",
      "Worked with HTML, CSS, JavaScript, React.js",
      "Collaborated on debugging and feature implementation",
    ],
  },
];

export type Project = {
  name: string;
  description: string;
  tags: string[];
};

export const projects: Project[] = [
  {
    name: "Lobium AI",
    description:
      "AI-powered public affairs and EU policy intelligence platform with dashboards and workflow automation.",
    tags: ["AI", "Next.js", "Dashboards"],
  },
  {
    name: "FreeCast",
    description:
      "Streaming aggregation platform for live TV, VOD content, and subscription management.",
    tags: ["Streaming", "React", "Subscriptions"],
  },
  {
    name: "Wedlii",
    description:
      "Australian AI-powered wedding planning and vendor management platform.",
    tags: ["AI", "SaaS", "Marketplace"],
  },
  {
    name: "Tournated",
    description:
      "Esports and sports tournament management SaaS platform with real-time brackets.",
    tags: ["SaaS", "Real-time", "GraphQL"],
  },
  {
    name: "Companies Data",
    description:
      "AI-enhanced company search and data aggregation platform.",
    tags: ["AI", "Search", "Data"],
  },
  {
    name: "Nifty Ape Nation",
    description:
      "NFT mint platform with Web3 wallet integration.",
    tags: ["Web3", "NFT", "Wallets"],
  },
];

export const education = {
  degree: "Bachelor of Science in Information Technology",
  school: "The Islamia University of Bahawalpur",
  period: "2020 – 2024",
};
