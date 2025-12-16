"use client";

import { useEffect, useState } from "react";

export function useScrollspy(ids: string[], offset: number = 0) {
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    const listener = () => {
      const scroll = window.scrollY;

      for (const id of ids) {
        const element = document.querySelector(id);
        if (element) {
          const top = (element as HTMLElement).offsetTop - offset;
          const bottom = top + (element as HTMLElement).offsetHeight;

          if (scroll >= top && scroll < bottom) {
            setActiveId(id);
            break;
          }
        }
      }
    };

    listener();
    window.addEventListener("scroll", listener);
    return () => {
      window.removeEventListener("scroll", listener);
    };
  }, [ids, offset]);

  return activeId;
}

