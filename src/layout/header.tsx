"use client";
import React, { useEffect, useState } from "react";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Drawer from "@/layout/drawer";
import { NAV_ITEMS } from "@/constant/data";

const Header = () => {
  const [isNavActive, setIsNavActive] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const [activeSection, setActiveSection] = useState(null);

  useEffect(() => {
    const handleIntersection = (entries: any) => {
      entries.forEach((entry: any) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id); // Set active section when visible
        } else if (activeSection === entry.target.id) {
          setActiveSection(null); // Remove active state when out of view
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      root: null, // Relative to the viewport
      threshold: 0.5, // Trigger when 50% of the section is visible
    });

    const sections = NAV_ITEMS.map((item: any) =>
      document.getElementById(item.id)
    );

    sections.forEach((section: any) => {
      if (section) observer.observe(section);
    });

    return () => {
      sections.forEach((section: any) => {
        if (section) observer.unobserve(section);
      });
    };
  }, [activeSection]);

  const handleNavClick = (index: number) => {
    const targetId = NAV_ITEMS[index].id;
    const targetSection = document.getElementById(targetId);

    if (targetSection) {
      const topOffset =
        targetSection.getBoundingClientRect().top + window.scrollY;
      const adjustedPosition = topOffset - 100; // Adjust scroll offset as needed

      window.scrollTo({
        top: adjustedPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <header
      id="header-id"
      className=" w-full bg-black max-h-[148px] pt-4 fixed top-0 lg:min-w-[100vw] px-2 sm:px-8 lg:px-0 z-50 pb-4"
    >
      <div className="container lg:px-8 z-50">
        <div className="flex items-center justify-between ">
          <div className="flex items-center">
            <div className="flex items-center hover:scale-105 hover:duration-300">
              <svg
                onClick={() => setIsOpen(true)}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-9 h-9 text-white cursor-pointer duration-300"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </div>
          </div>
          <div className="flex items-center justify-end gap-9">
            {/* <div className="lg:block hidden">
              <div className="flex gap-10">
                {NAV_ITEMS.map((item: any, index: any) => (
                  <nav
                    key={index}
                    onClick={() => handleNavClick(index)}
                    className={`py-[5px] hidden lg:flex text-white font-normal hover:text-primary duration-500 text-[16px] cursor-pointer font-raleway ${
                      activeSection === item.id
                        ? "border-b-[3px] border-white"
                        : "border-b-[3px] border-transparent hover:border-white"
                    }`}
                  >
                    {item.label}
                  </nav>
                ))}
              </div>
            </div> */}
            <Link href={"/contact"}>
              <div className="box">
                <button className="px-6 py-3 rounded-full bg-black hover:bg-[#0099f8] hover:duration-500">
                  Hire Me
                </button>
              </div>
            </Link>
          </div>
        </div>
      </div>
      <Drawer isOpen={isOpen} setIsOpen={setIsOpen} />
    </header>
  );
};

export default Header;
