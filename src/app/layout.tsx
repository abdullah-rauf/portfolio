import type { Metadata } from "next";
import { Geist, Geist_Mono, Montserrat, Syne } from "next/font/google";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://abdullahrauf.dev"),
  title: {
    default: "Abdullah Rauf - Full Stack Developer & AI Integration Specialist",
    template: "%s | Abdullah Rauf",
  },
  description:
    "Full Stack Developer with 2+ years of experience in MERN stack, AI integration (ChatGPT, Gemini), and building scalable web applications. Specialized in React, Next.js, Node.js, and cloud technologies.",
  keywords: [
    "Abdullah Rauf",
    "Full Stack Developer",
    "MERN Stack Developer",
    "React Developer",
    "Next.js Developer",
    "AI Integration",
    "ChatGPT Integration",
    "Gemini API",
    "Node.js",
    "TypeScript",
    "Web Development Pakistan",
    "E-commerce Development",
  ],
  authors: [
    {
      name: "Abdullah Rauf",
      url: "https://github.com/abdullah-rauf",
    },
  ],
  creator: "Abdullah Rauf",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://abdullahrauf.dev",
    title: "Abdullah Rauf - Full Stack Developer & AI Integration Specialist",
    description:
      "Full Stack Developer with 2+ years of experience in MERN stack, AI integration, and building scalable web applications.",
    siteName: "Abdullah Rauf Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Abdullah Rauf - Full Stack Developer",
    description:
      "Full Stack Developer specializing in MERN stack, AI integration, and modern web technologies.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${montserrat.variable} ${syne.variable} antialiased`}
      >
        {children}
        <ToastContainer />
      </body>
    </html>
  );
}
