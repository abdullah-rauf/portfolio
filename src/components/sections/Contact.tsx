"use client";

import { motion } from "framer-motion";
import { Mail, Phone } from "lucide-react";
import { contactLinks, personal } from "@/constants";
import { GithubIcon, LinkedinIcon } from "@/components/ui";

const contactIcons = {
  mail: Mail,
  phone: Phone,
  linkedin: LinkedinIcon,
  github: GithubIcon,
} as const;

export default function Contact() {
  return (
    <section id="contact" className="relative mx-auto max-w-4xl scroll-mt-24 px-6 py-28 text-center">
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5 }}
        className="mb-3 font-mono text-sm uppercase tracking-[0.3em] text-accent"
      >
        What&apos;s Next?
      </motion.p>

      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, delay: 0.1 }}
        className="text-4xl font-bold tracking-tight sm:text-5xl"
      >
        Let&apos;s <span className="text-gradient">Work Together</span>
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="mx-auto mt-6 max-w-xl text-muted"
      >
        I&apos;m open to new opportunities, freelance projects, and
        collaborations. Whether you have a question or just want to say hi, my
        inbox is always open.
      </motion.p>

      <motion.a
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, delay: 0.3 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.98 }}
        href={`mailto:${personal.email}`}
        className="mt-10 inline-block rounded-full bg-linear-to-r from-accent to-accent-2 px-10 py-4 text-sm font-semibold text-background shadow-[0_0_35px_color-mix(in_oklab,var(--accent)_30%,transparent)]"
      >
        Say Hello
      </motion.a>

      <div className="mt-14 grid gap-4 sm:grid-cols-2">
        {contactLinks.map((link, i) => {
          const Icon = contactIcons[link.icon];
          return (
            <motion.a
              key={link.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -4 }}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="glass flex items-center gap-3 rounded-xl px-5 py-4 text-sm text-muted transition-colors duration-300 hover:text-accent"
            >
              <Icon size={18} className="shrink-0 text-accent" />
              <span className="truncate">{link.label}</span>
            </motion.a>
          );
        })}
      </div>
    </section>
  );
}
