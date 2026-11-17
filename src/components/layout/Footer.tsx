"use client";

import { useEffect, useState } from "react";
import { education, navLinks, personal } from "@/constants";

function LocalTime() {
  const [time, setTime] = useState<string>("—");

  useEffect(() => {
    const format = () =>
      new Intl.DateTimeFormat("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
        timeZone: "Asia/Karachi",
      }).format(new Date());

    setTime(format());
    const id = window.setInterval(() => setTime(format()), 30_000);
    return () => window.clearInterval(id);
  }, []);

  return <span>{time} PKT</span>;
}

export default function Footer() {
  return (
    <footer className="layout-pad border-t border-foreground/10 py-16 sm:py-20">
      <div className="mx-auto grid max-w-[1400px] gap-12 md:grid-cols-3">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">
            Sitemap
          </p>
          <ul className="mt-4 space-y-2">
            <li>
              <a href="#" className="text-sm hover:opacity-60">
                Home
              </a>
            </li>
            {navLinks?.map?.((link) => (
              <li key={link.href}>
                <a href={link.href} className="text-sm hover:opacity-60">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">
            Follow me
          </p>
          <ul className="mt-4 space-y-2">
            <li>
              <a
                href={personal.github}
                target="_blank"
                rel="noreferrer"
                className="text-sm hover:opacity-60"
              >
                GitHub
              </a>
            </li>
            <li>
              <a
                href={personal.linkedin}
                target="_blank"
                rel="noreferrer"
                className="text-sm hover:opacity-60"
              >
                LinkedIn
              </a>
            </li>
          </ul>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">
            Work with me
          </p>
          <a
            href={`mailto:${personal.email}`}
            className="mt-4 block font-display text-lg font-semibold tracking-tight hover:opacity-60 sm:text-xl"
          >
            {personal.email}
          </a>
          <p className="mt-6 text-sm text-muted">Based in {personal.location}</p>
          <p className="mt-1 text-sm text-muted">
            Current time: <LocalTime />
          </p>
          <p className="mt-1 text-sm text-muted">
            Availability: Open for selected projects
          </p>
          <p className="mt-4 text-sm text-muted">
            {education.degree} · {education.school} ({education.period})
          </p>
        </div>
      </div>

      <div className="mx-auto mt-16 flex max-w-[1400px] flex-col gap-4 border-t border-foreground/10 pt-8 sm:flex-row sm:items-end sm:justify-between">
        <p className="text-xs text-muted">
          © {new Date().getFullYear()} · {personal.name}. All rights reserved.
        </p>
        <p
          className="font-display text-4xl font-800 tracking-tight text-foreground/10 sm:text-6xl"
          style={{ fontWeight: 800 }}
          aria-hidden
        >
          ABDULLAH
        </p>
      </div>
    </footer>
  );
}
