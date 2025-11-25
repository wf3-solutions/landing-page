"use client";

import { useSmoothScroll } from "@/app/hooks/UseSmoothScrool";
import { Button } from "@/components/ui/button";
export default function DesktopMenu() {
  const { scrollToId } = useSmoothScroll();

  return (
    <nav className="hidden md:flex items-center  gap-8 text-background font-medium">
      <a
        onClick={() => scrollToId("hero")}
        className="text-background cursor-pointer font-bold  hover:scale-125 transition-all ease-in-out"
      >
        Início
      </a>
      <a
        onClick={() => scrollToId("services")}
        className="text-background cursor-pointer font-bold  hover:scale-125 transition-all ease-in-out"
      >
        Serviços
      </a>
      <a
        onClick={() => scrollToId("about")}
        className="text-background cursor-pointer font-bold  hover:scale-125 transition-all ease-in-out"
      >
        Sobre
      </a>
      <Button variant={"secondary"} onClick={() => scrollToId("about")}>
        Entre em contato
      </Button>
    </nav>
  );
}
