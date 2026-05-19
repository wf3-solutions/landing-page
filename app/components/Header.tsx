"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import MobileMenu from "./MobileMenu";
import DesktopMenu from "./DesktopMenu";
import { useSmoothScroll } from "@/app/hooks/UseSmoothScrool";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const { scrollToId } = useSmoothScroll();

  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = document.getElementById("hero")?.offsetHeight || 0;
      setScrolled(window.scrollY > heroHeight - 80);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`
        fixed top-0 left-0 w-full z-40
        px-4 lg:px-16
        flex items-center justify-between
        transition-[padding,background-color,box-shadow,backdrop-filter,border-color] duration-300 ease-out
        ${
          scrolled
            ? "bg-primary/80 backdrop-blur-md shadow-[0_8px_30px_rgb(0,0,0,0.12)] border-b border-white/10 py-2"
            : "bg-transparent py-6 border-b border-transparent"
        }
      `}
    >
      <motion.button
        type="button"
        onClick={() => scrollToId("hero")}
        aria-label="Voltar ao topo"
        animate={{ scale: scrolled ? 0.78 : 1 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="flex items-center justify-center origin-left cursor-pointer"
      >
        <Image
          src="/assets/wf-white.png"
          alt="WF3 Solutions"
          width={70}
          height={70}
          priority
        />
      </motion.button>

      <DesktopMenu />
      <MobileMenu />
    </header>
  );
}
