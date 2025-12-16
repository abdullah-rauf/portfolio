"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Loader2 } from "lucide-react";
import { toast } from "react-toastify";
import { Container, Section, SectionHeading } from "@/components";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { personalInfo } from "@/constants/data";
import { useTheme } from "@/contexts/theme-context";

export function Contact() {
  const { theme } = useTheme();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        toast.success("Message sent successfully! 🎉 I'll get back to you soon.", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          theme: theme === "dark" ? "dark" : "light",
        });
        setFormData({ name: "", email: "", message: "" });
      } else {
        toast.error(data.error || "Failed to send message. Please try again.", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          theme: theme === "dark" ? "dark" : "light",
        });
      }
    } catch (error) {
      toast.error("Something went wrong. Please try emailing me directly at abdullahrauf009@gmail.com", {
        position: "top-right",
        autoClose: 7000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: theme === "dark" ? "dark" : "light",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <Section id="contact" className="bg-white dark:bg-black min-h-screen">
      <Container>
        <SectionHeading subtitle="Let's work together on your next project">
          Get in Touch
        </SectionHeading>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-gray-100">
                Let's Talk
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-8">
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
              </p>

              <div className="space-y-4">
                <Card>
                  <CardHeader>
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-lg bg-blue-100 dark:bg-blue-900 flex items-center justify-center">
                        <Mail className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                      </div>
                      <div>
                        <CardTitle className="text-sm text-gray-600 dark:text-gray-400">
                          Email
                        </CardTitle>
                        <p className="text-gray-900 dark:text-gray-100">
                          {personalInfo.email}
                        </p>
                      </div>
                    </div>
                  </CardHeader>
                </Card>

                <Card>
                  <CardHeader>
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-lg bg-green-100 dark:bg-green-900 flex items-center justify-center">
                        <Phone className="w-5 h-5 text-green-600 dark:text-green-400" />
                      </div>
                      <div>
                        <CardTitle className="text-sm text-gray-600 dark:text-gray-400">
                          Phone
                        </CardTitle>
                        <a 
                          href="tel:+923000979300"
                          className="text-gray-900 dark:text-gray-100 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                        >
                          03000979300
                        </a>
                      </div>
                    </div>
                  </CardHeader>
                </Card>

                <Card>
                  <CardHeader>
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-lg bg-purple-100 dark:bg-purple-900 flex items-center justify-center">
                        <MapPin className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                      </div>
                      <div>
                        <CardTitle className="text-sm text-gray-600 dark:text-gray-400">
                          Location
                        </CardTitle>
                        <p className="text-gray-900 dark:text-gray-100">
                          {personalInfo.location}
                        </p>
                      </div>
                    </div>
                  </CardHeader>
                </Card>
              </div>
            </motion.div>
          </div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Card>
              <CardHeader>
                <CardTitle>Send Me a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                    >
                      Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Your name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                    >
                      Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="your.email@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                    >
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tell me about your project..."
                      value={formData.message}
                      onChange={handleChange}
                      rows={6}
                      required
                    />
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full" 
                    size="lg"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      "Send Message"
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}

