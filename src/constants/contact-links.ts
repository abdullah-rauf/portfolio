import { personal } from "./personal";
import type { ContactLink } from "@/types";

export const contactLinks: ContactLink[] = [
  {
    icon: "mail",
    label: personal.email,
    href: `mailto:${personal.email}`,
  },
  {
    icon: "phone",
    label: personal.phone,
    href: `tel:${personal.phone.replace(/-/g, "")}`,
  },
  {
    icon: "linkedin",
    label: "linkedin.com/in/abdullahrauf",
    href: personal.linkedin,
  },
  {
    icon: "github",
    label: "github.com/abdullah-rauf",
    href: personal.github,
  },
];
