import {
  AnimatedBackground,
  Navbar,
  Footer,
  Hero,
  About,
  Skills,
  ExperienceSection,
  Projects,
  Education,
  Contact,
} from "@/components";

export default function Home() {
  return (
    <>
      <AnimatedBackground />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <ExperienceSection />
        <Projects />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
