"use client";

import { useSmoothScroll } from "@/app/hooks/UseSmoothScrool";
import { Button } from "@/components/ui/button";

const menuItems = [
  { name: "Início", id: "hero" },
  { name: "Serviços", id: "services" },
  { name: "Projetos", id: "projects" },
  { name: "Sobre", id: "about" },
  { name: "FAQ", id: "faq" },
];

export default function DesktopMenu() {
  const { scrollToId } = useSmoothScroll();

  return (
    <nav className="hidden md:flex items-center gap-7 text-background font-medium">
      {menuItems.map((item) => (
        <button
          key={item.id}
          type="button"
          onClick={() => scrollToId(item.id)}
          className="text-background cursor-pointer font-semibold hover:text-secondary transition-colors"
        >
          {item.name}
        </button>
      ))}
      <Button variant="secondary" onClick={() => scrollToId("contact")}>
        Solicitar orçamento
      </Button>
    </nav>
  );
}
