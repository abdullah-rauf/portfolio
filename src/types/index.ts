export type SkillGroup = {
  category: string;
  skills: string[];
};

export type Experience = {
  role: string;
  company: string;
  period: string;
  points: string[];
};

export type Project = {
  name: string;
  description: string;
  tags: string[];
};

export type Personal = {
  name: string;
  title: string;
  email: string;
  phone: string;
  linkedin: string;
  github: string;
  location: string;
  summary: string;
};

export type Education = {
  degree: string;
  school: string;
  period: string;
};

export type NavLink = {
  label: string;
  href: string;
};

export type HeroBadge = {
  label: string;
  x: string;
  y: string;
  delay: number;
};

export type HeroGlyph = {
  text: string;
  radius: number;
  y: number;
  speed: number;
  phase: number;
};

export type AboutHighlight = {
  icon: "code" | "globe" | "cpu";
  title: string;
  text: string;
};

export type ContactLink = {
  icon: "mail" | "phone" | "linkedin" | "github";
  label: string;
  href: string;
};
