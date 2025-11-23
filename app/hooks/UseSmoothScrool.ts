"use client";

import { animate } from "framer-motion";

export function useSmoothScroll() {
  function scrollToId(id: string) {
    const section = document.getElementById(id);
    if (!section) return;

    const target = section.offsetTop;
    const start = window.scrollY;

    animate(start, target, {
      duration: 0.8,
      ease: [0.25, 0.1, 0.25, 1],
      onUpdate: (value) => window.scrollTo(0, value),
    });
  }

  return { scrollToId };
}
