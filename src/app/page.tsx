"use client";

import { useCallback, useState } from "react";
import {
  Preloader,
  Navbar,
  Footer,
  Hero,
  About,
  Clients,
  Quote,
  Projects,
  CTA,
} from "@/components";
import { SmoothScroll } from "@/components/motion";

export default function Home() {
  const [ready, setReady] = useState(false);
  const handleReady = useCallback(() => setReady(true), []);

  return (
    <>
      <Preloader onDone={handleReady} />
      <SmoothScroll enabled={ready} />
      <div
        className={`transition-opacity duration-700 ${
          ready ? "opacity-100" : "opacity-0"
        }`}
      >
        <Navbar />
        <main>
          <Hero ready={ready} />
          <About />
          <Clients />
          <Quote />
          <Projects />
          <CTA />
        </main>
        <Footer />
      </div>
    </>
  );
}
