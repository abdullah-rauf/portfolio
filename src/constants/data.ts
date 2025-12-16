export const personalInfo = {
  name: "Abdullah Rauf",
  title: "Full Stack Developer",
  email: "abdullahrauf009@gmail.com",
  phone: "+92-300-0979300",
  location: "Pakistan",
  bio: "Full Stack Developer with 2+ years of hands-on experience in building fast, scalable, and user-friendly web applications using the MERN stack. Proficient in integrating AI tools (ChatGPT, Gemini) into modern apps. Passionate about clean, production-ready code and intuitive user experiences.",
  avatar: "/assets/avatar.png",
  education: "Bachelor of Science in Information Technology",
  university: "The Islamia University of Bahawalpur, Pakistan",
  graduationYear: "2020 – 2024",
};

export const skills = [
  {
    category: "Frontend Development",
    items: [
      { name: "React.js", level: 95 },
      { name: "Next.js", level: 90 },
      { name: "TypeScript", level: 85 },
      { name: "Tailwind CSS", level: 90 },
      { name: "Vue.js", level: 80 },
      { name: "HTML5 & CSS3", level: 95 },
    ],
  },
  {
    category: "Backend Development",
    items: [
      { name: "Node.js", level: 90 },
      { name: "Express.js", level: 90 },
      { name: "Nest.js", level: 85 },
      { name: "REST & GraphQL APIs", level: 88 },
      { name: "MongoDB", level: 85 },
      { name: "PostgreSQL", level: 80 },
      { name: "MySQL", level: 80 },
    ],
  },
  {
    category: "AI & Cloud Technologies",
    items: [
      { name: "OpenAI Integration", level: 85 },
      { name: "Gemini API", level: 85 },
      { name: "AWS (S3, EC2, Lambda)", level: 80 },
      { name: "Google Cloud", level: 75 },
      { name: "CI/CD", level: 80 },
    ],
  },
  {
    category: "E-Commerce & Tools",
    items: [
      { name: "Shopify", level: 85 },
      { name: "BigCommerce", level: 80 },
      { name: "Stripe & PayPal", level: 85 },
      { name: "Chrome Extensions", level: 82 },
      { name: "Figma to React", level: 85 },
    ],
  },
];

export const projects = [
  {
    id: 1,
    title: "Wedlii",
    description:
      "Australian wedding planning platform built with modern React stack. Features vendor management, budget tracking, guest RSVP, and comprehensive wedding planning tools.",
    image: "/assets/projects/wedlii.jpg",
    tags: ["Next.js", "React", "Redux", "Tailwind CSS", "Node.js"],
    liveUrl: "https://bridal.wedlii.com.au",
    githubUrl: "#",
    featured: true,
  },
  {
    id: 2,
    title: "Lobium AI",
    description:
      "Investment insights platform with interactive dashboards. AI-powered analytics for smarter investment decisions with real-time data visualization.",
    image: "/assets/projects/lobium.jpg",
    tags: ["React", "TypeScript", "OpenAI", "Charts.js", "Node.js"],
    liveUrl: "#",
    githubUrl: "#",
    featured: true,
  },
  {
    id: 3,
    title: "Freecast",
    description:
      "Streaming aggregator for live and VOD content with subscription management. Unified platform for multiple streaming services.",
    image: "/assets/projects/freecast.jpg",
    tags: ["Next.js", "TypeScript", "Stripe", "AWS", "PostgreSQL"],
    liveUrl: "#",
    githubUrl: "#",
    featured: true,
  },
  {
    id: 4,
    title: "Tournated",
    description:
      "Esports tournament platform with real-time brackets, match tracking, and player management. Complete tournament organization system.",
    image: "/assets/projects/tournated.jpg",
    tags: ["React", "Node.js", "Socket.io", "MongoDB", "Express"],
    liveUrl: "#",
    githubUrl: "#",
    featured: true,
  },
  {
    id: 5,
    title: "Nifty Ape Nation",
    description:
      "NFT mint site with Web3 wallet integration. Secure blockchain transactions with MetaMask and WalletConnect support.",
    image: "/assets/projects/nifty-ape.jpg",
    tags: ["React", "Web3.js", "Ethereum", "Solidity", "IPFS"],
    liveUrl: "#",
    githubUrl: "#",
    featured: false,
  },
  {
    id: 6,
    title: "Companies Data",
    description:
      "AI-enhanced company search and data aggregation tool. Powerful search with ML-powered insights and comprehensive company profiles.",
    image: "/assets/projects/companies-data.jpg",
    tags: ["Next.js", "Gemini API", "PostgreSQL", "GraphQL", "Python"],
    liveUrl: "#",
    githubUrl: "#",
    featured: false,
  },
];

export const experiences = [
  {
    id: 1,
    title: "Full Stack Developer",
    company: "Spadasoft",
    location: "On-site",
    period: "July 2024 - Present",
    description:
      "Leading development of full-stack web applications with focus on scalability and performance. Building modern SaaS solutions using MERN stack.",
    responsibilities: [
      "Architecting and developing scalable web applications using React.js and Node.js",
      "Integrating AI capabilities (OpenAI, Gemini) into production applications",
      "Building RESTful and GraphQL APIs with Express.js and Nest.js",
      "Implementing CI/CD pipelines and deploying to AWS cloud infrastructure",
      "Code reviews and maintaining high-quality code standards",
    ],
  },
  {
    id: 2,
    title: "MERN Stack Developer",
    company: "Caaztech Ltd",
    location: "On-site",
    period: "Feb 2023 - Mar 2024",
    description:
      "Developed full-stack web applications using MongoDB, Express.js, React.js, and Node.js. Worked on e-commerce integrations and API development.",
    responsibilities: [
      "Built responsive web applications with React.js and Next.js",
      "Developed RESTful APIs and integrated third-party services",
      "Implemented e-commerce solutions with Shopify and BigCommerce",
      "Worked with payment gateways (Stripe, PayPal, Recurly)",
      "Database design and optimization with MongoDB and PostgreSQL",
      "Collaborated with cross-functional teams using Agile methodology",
    ],
  },
  {
    id: 3,
    title: "MERN Stack Developer Intern",
    company: "Systems Limited",
    location: "On-site",
    period: "May 2024 - Jun 2024",
    description:
      "Gained hands-on experience in enterprise web development and worked on client projects.",
    responsibilities: [
      "Developed frontend components using React.js and TypeScript",
      "Assisted in API integration and testing",
      "Participated in code reviews and team meetings",
      "Learned enterprise development practices and workflows",
    ],
  },
  {
    id: 4,
    title: "Web Developer Intern",
    company: "CodeAlpha",
    location: "Remote",
    period: "Aug 2023 - Sep 2023",
    description:
      "Internship focused on web development fundamentals and modern JavaScript frameworks.",
    responsibilities: [
      "Built responsive web pages using HTML, CSS, and JavaScript",
      "Developed React components and worked with React hooks",
      "Learned version control with Git and GitHub",
      "Completed multiple web development projects",
    ],
  },
];

export const socialLinks = {
  github: "https://github.com/abdullah-rauf",
  linkedin: "https://linkedin.com/in/abdullahrauf",
  twitter: "https://twitter.com/abdullahrauf",
  email: "abdullahrauf009@gmail.com",
};

export const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Skills", href: "/skills" },
  { name: "Projects", href: "/projects" },
  { name: "Experience", href: "/experience" },
  { name: "Contact", href: "/contact" },
];
