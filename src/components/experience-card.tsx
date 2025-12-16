"use client";

import { motion } from "framer-motion";
import { MapPin, Calendar } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";

interface ExperienceCardProps {
  title: string;
  company: string;
  location: string;
  period: string;
  description: string;
  responsibilities: string[];
  index: number;
}

export function ExperienceCard({
  title,
  company,
  location,
  period,
  description,
  responsibilities,
  index,
}: ExperienceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card className="hover:shadow-lg transition-all duration-300">
        <CardHeader>
          <CardTitle className="text-xl">{title}</CardTitle>
          <CardDescription className="text-base font-semibold text-gray-900 dark:text-gray-100">
            {company}
          </CardDescription>
          <div className="flex flex-wrap gap-4 text-sm text-gray-600 dark:text-gray-400 mt-2">
            <div className="flex items-center gap-1">
              <MapPin className="w-4 h-4" />
              {location}
            </div>
            <div className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              {period}
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-gray-700 dark:text-gray-300 mb-4">{description}</p>
          <ul className="list-disc list-inside space-y-2 text-sm text-gray-600 dark:text-gray-400">
            {responsibilities.map((resp, idx) => (
              <li key={idx}>{resp}</li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </motion.div>
  );
}

