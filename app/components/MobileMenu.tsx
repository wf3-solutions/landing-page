"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetTitle,
} from "@/components/ui/sheet";
import { useSmoothScroll } from "@/app/hooks/UseSmoothScrool";
import { useActiveSection } from "@/app/hooks/useActiveSection";
import { Button } from "@/components/ui/button";
import { FaWhatsapp } from "react-icons/fa";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

const WHATSAPP_URL = "https://wa.me/5579999133217";

const menuItems = [
  { name: "Serviços", id: "services" },
  { name: "Como trabalhamos", id: "process" },
  { name: "Projetos", id: "projects" },
  { name: "Sobre", id: "about" },
  { name: "FAQ", id: "faq" },
  { name: "Contato", id: "contact" },
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

export default function MobileMenu() {
  const [open, setOpen] = useState(false);
  const { scrollToId } = useSmoothScroll();
  const active = useActiveSection(sectionIds);

  const lineClass =
    "w-[28px] h-[3px] rounded-full bg-background transition-all duration-300";

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <button
          aria-label="Abrir menu"
          className="relative h-10 w-10 flex flex-col justify-center items-center gap-1.5 md:hidden"
        >
          <motion.span
            className={lineClass}
            animate={open ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
          />
          <motion.span
            className={lineClass}
            animate={open ? { opacity: 0 } : { opacity: 1 }}
            transition={{ duration: 0.2 }}
          />
          <motion.span
            className={lineClass}
            animate={open ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
          />
        </button>
      </SheetTrigger>

      <SheetContent
        side="top"
        className="w-full p-6 backdrop-blur-xl bg-background/95 border-b border-border/40 rounded-b-2xl"
      >
        <SheetTitle className="sr-only">Menu de navegação</SheetTitle>

        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.25 }}
          className="flex flex-col gap-6"
        >
          <div className="flex items-center gap-3">
            <Image
              src="/assets/wf-colored.png"
              alt="WF3 Solutions"
              width={48}
              height={48}
              className="object-contain"
            />
            <span className="text-xl font-bold text-foreground tracking-tight">
              WF3 <span className="text-primary">Solutions</span>
            </span>
          </div>

          <nav className="flex flex-col gap-1">
            {menuItems.map((item, i) => {
              const isActive = active === item.id;
              return (
                <motion.button
                  key={item.id}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 + i * 0.04 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => {
                    setOpen(false);
                    scrollToId(item.id);
                  }}
                  className={`group flex items-center justify-between text-left text-base font-medium py-3 px-3 -mx-1 rounded-lg transition-colors ${
                    isActive
                      ? "bg-secondary/10 text-secondary"
                      : "text-foreground hover:bg-muted"
                  }`}
                >
                  <span>{item.name}</span>
                  <ArrowRight
                    size={18}
                    className={`transition-all ${
                      isActive
                        ? "opacity-100 text-secondary translate-x-0"
                        : "opacity-0 -translate-x-1 group-hover:opacity-60 group-hover:translate-x-0"
                    }`}
                  />
                </motion.button>
              );
            })}
          </nav>

          <div className="flex flex-col gap-3 pt-4 border-t border-border/60">
            <Button
              variant="secondary"
              onClick={() => {
                setOpen(false);
                scrollToId("contact");
              }}
              className="w-full h-12 font-bold"
            >
              Solicitar orçamento
              <ArrowRight size={18} />
            </Button>
            <Button
              variant="outline"
              onClick={() => window.open(WHATSAPP_URL, "_blank")}
              className="w-full h-12 font-semibold border-[#25D366] text-[#25D366] hover:bg-[#25D366]/10 hover:text-[#25D366]"
            >
              <FaWhatsapp size={20} />
              Falar no WhatsApp
            </Button>
          </div>
        </motion.div>
      </SheetContent>
    </Sheet>
  );
}
