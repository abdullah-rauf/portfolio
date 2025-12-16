"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components";
import { personalInfo, socialLinks } from "@/constants/data";

export function Hero() {

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-gray-900 dark:via-black dark:to-blue-950"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-tl from-purple-400/20 to-pink-400/20 rounded-full blur-3xl animate-pulse" />
      </div>

      <Container className="relative z-10 py-20">
        <div className="text-center">
          {/* Main Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1
              className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 dark:from-gray-100 dark:via-blue-400 dark:to-purple-400 bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Hi, I'm {personalInfo.name}
            </motion.h1>

            <motion.p
              className="text-2xl md:text-3xl text-gray-700 dark:text-gray-300 mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {personalInfo.title}
            </motion.p>

            <motion.p
              className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              {personalInfo.bio}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <Button
                size="lg"
                className="min-w-[180px]"
                asChild
              >
                <Link href="/projects">View My Work</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="min-w-[180px]"
                asChild
              >
                <Link href="/contact">Get in Touch</Link>
              </Button>
            </motion.div>

            {/* Social Links */}
            <motion.div
              className="flex items-center justify-center gap-4 mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              <a
                href={socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-gray-200 dark:bg-gray-800 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 transition-all duration-200 hover:scale-110"
                aria-label="GitHub"
              >
                <Github size={24} />
              </a>
              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-gray-200 dark:bg-gray-800 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 transition-all duration-200 hover:scale-110"
                aria-label="LinkedIn"
              >
                <Linkedin size={24} />
              </a>
              <a
                href={`mailto:${socialLinks.email}`}
                className="p-3 rounded-full bg-gray-200 dark:bg-gray-800 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 transition-all duration-200 hover:scale-110"
                aria-label="Email"
              >
                <Mail size={24} />
              </a>
            </motion.div>
          </motion.div>

          {/* Explore More */}
          <motion.div
            className="flex flex-col items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <Link
              href="/about"
              className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium"
            >
              Explore More →
            </Link>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}

