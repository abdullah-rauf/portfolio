import Link from "next/link";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";
import { socialLinks } from "@/constants/data";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
              Abdullah Rauf
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">
              Building modern web applications with passion and precision.
            </p>
            <div className="space-y-1">
              <a
                href="tel:+923000979300"
                className="text-gray-600 dark:text-gray-400 text-sm hover:text-blue-600 dark:hover:text-blue-400 transition-colors flex items-center gap-1"
              >
                📞 03000979300
              </a>
              <a
                href="mailto:abdullahrauf009@gmail.com"
                className="text-gray-600 dark:text-gray-400 text-sm hover:text-blue-600 dark:hover:text-blue-400 transition-colors flex items-center gap-1"
              >
                ✉️ abdullahrauf009@gmail.com
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-gray-900 dark:text-gray-100">
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/about"
                  className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 text-sm transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/projects"
                  className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 text-sm transition-colors"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  href="/experience"
                  className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 text-sm transition-colors"
                >
                  Experience
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 text-sm transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-gray-900 dark:text-gray-100">
              Connect
            </h4>
            <div className="flex space-x-4">
              <a
                href={socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-gray-200 dark:bg-gray-800 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 transition-all duration-200"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-gray-200 dark:bg-gray-800 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 transition-all duration-200"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href={`mailto:${socialLinks.email}`}
                className="p-2 rounded-lg bg-gray-200 dark:bg-gray-800 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 transition-all duration-200"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-800 text-center">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            © {currentYear} Abdullah. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
