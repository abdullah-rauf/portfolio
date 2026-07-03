"use client";

import { motion } from "framer-motion";
import { personal } from "@/data/portfolio";

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="border-t border-muted/10 py-8 text-center text-sm text-muted"
    >
      <p>
        © {new Date().getFullYear()} {personal.name}. Built with Next.js,
        Tailwind CSS &amp; Framer Motion.
      </p>
    </motion.footer>
  );
}
