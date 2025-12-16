"use client";

import { motion } from "framer-motion";
import { Code2, Palette, Rocket, Users } from "lucide-react";
import { Container, Section, SectionHeading } from "@/components";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const features = [
  {
    icon: Code2,
    title: "Clean Code",
    description:
      "Writing maintainable and scalable code following best practices and design patterns.",
  },
  {
    icon: Palette,
    title: "Modern Design",
    description:
      "Creating beautiful, responsive interfaces with attention to detail and user experience.",
  },
  {
    icon: Rocket,
    title: "Performance",
    description:
      "Optimizing applications for speed and efficiency to deliver the best user experience.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description:
      "Working effectively in teams and communicating technical concepts clearly.",
  },
];

export function About() {
  return (
    <Section id="about" className="bg-white dark:bg-black min-h-screen">
      <Container>
        <SectionHeading subtitle="Get to know more about me">
          About Me
        </SectionHeading>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {/* About Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-gray-100">
              Full Stack Developer & AI Integration Specialist
            </h3>
            <div className="space-y-4 text-gray-700 dark:text-gray-300">
              <p>
                I'm a Full Stack Developer with 2+ years of hands-on experience
                in building fast, scalable, and user-friendly web applications
                using the MERN stack. I specialize in integrating AI tools like
                ChatGPT and Gemini into modern applications, creating
                intelligent solutions that enhance user experiences.
              </p>
              <p>
                My expertise spans across frontend development with React.js and
                Next.js, backend systems with Node.js and Express.js, and cloud
                technologies including AWS and Google Cloud. I've worked on
                diverse projects from e-commerce platforms to NFT marketplaces,
                streaming services to tournament platforms, always focusing on
                clean, production-ready code.
              </p>
              <p>
                I hold a Bachelor of Science in Information Technology from The
                Islamia University of Bahawalpur, Pakistan (2020-2024), and I'm
                passionate about continuous learning and staying updated with
                the latest technologies in web development and AI integration.
              </p>
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-2 gap-6"
          >
            <div className="text-center p-6 rounded-xl bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950 dark:to-purple-950">
              <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                2.5+
              </div>
              <div className="text-gray-700 dark:text-gray-300 font-medium">
                Years Experience
              </div>
            </div>
            <div className="text-center p-6 rounded-xl bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950 dark:to-pink-950">
              <div className="text-4xl font-bold text-purple-600 dark:text-purple-400 mb-2">
                50+
              </div>
              <div className="text-gray-700 dark:text-gray-300 font-medium">
                Projects Completed
              </div>
            </div>
            <div className="text-center p-6 rounded-xl bg-gradient-to-br from-pink-50 to-red-50 dark:from-pink-950 dark:to-red-950">
              <div className="text-4xl font-bold text-pink-600 dark:text-pink-400 mb-2">
                30+
              </div>
              <div className="text-gray-700 dark:text-gray-300 font-medium">
                Happy Clients
              </div>
            </div>
            <div className="text-center p-6 rounded-xl bg-gradient-to-br from-green-50 to-teal-50 dark:from-green-950 dark:to-teal-950">
              <div className="text-4xl font-bold text-green-600 dark:text-green-400 mb-2">
                10+
              </div>
              <div className="text-gray-700 dark:text-gray-300 font-medium">
                Technologies
              </div>
            </div>
          </motion.div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-xl transition-all duration-300 group">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
