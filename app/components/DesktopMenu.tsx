"use client";

import { motion } from "framer-motion";
import { useSmoothScroll } from "@/app/hooks/UseSmoothScrool";
import { useActiveSection } from "@/app/hooks/useActiveSection";
import { Button } from "@/components/ui/button";

const menuItems = [
  { name: "Serviços", id: "services" },
  { name: "Projetos", id: "projects" },
  { name: "Sobre", id: "about" },
  { name: "FAQ", id: "faq" },
];

const sectionIds = [
  "hero",
  "services",
  "process",
  "why-us",
  "projects",
  "about",
  "faq",
  "contact",
];

export default function DesktopMenu() {
  const { scrollToId } = useSmoothScroll();
  const active = useActiveSection(sectionIds);

  return (
    <nav className="hidden md:flex items-center gap-8 text-background font-medium">
      {menuItems.map((item) => {
        const isActive = active === item.id;
        return (
          <motion.button
            key={item.id}
            type="button"
            onClick={() => scrollToId(item.id)}
            initial="rest"
            animate={isActive ? "active" : "rest"}
            whileHover="hover"
            className="relative cursor-pointer font-semibold py-1.5 px-1 text-background hover:text-secondary transition-colors"
          >
            {item.name}
            <motion.span
              variants={{
                rest: { scaleX: 0, opacity: 0 },
                hover: { scaleX: 1, opacity: 1 },
                active: { scaleX: 1, opacity: 1 },
              }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="absolute left-0 right-0 -bottom-0.5 h-[2px] bg-secondary origin-left rounded-full"
            />
          </motion.button>
        );
      })}
      <Button
        variant="secondary"
        onClick={() => scrollToId("contact")}
        className="font-semibold hover:scale-105 active:scale-95 transition-transform"
      >
        Solicitar orçamento
      </Button>
    </nav>
  );
}
