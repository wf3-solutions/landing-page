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
import Image from "next/image";

export default function MobileMenu() {
  const [open, setOpen] = useState(false);
  const { scrollToId } = useSmoothScroll();

  const lineClass =
    "w-[40px] h-[3px] rounded-full bg-background transition-all duration-300";

  const menuItems = [
    { name: "Início", id: "hero" },
    { name: "Sobre Nós", id: "about" },
    { name: "Projetos", id: "projects" },
    { name: "Contato", id: "contact" },
  ];

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <button
          aria-label="Menus"
          className="relative h-10 w-10 flex flex-col justify-center items-center gap-2 md:hidden"
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

      {/* Menu lateral */}
      <SheetContent
        side="top"
        className="w-full p-6 backdrop-blur-xl bg-white/80 border-r border-gray-200"
      >
        <SheetTitle className="mb-8 hidden" />

        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.25 }}
        >
          <div className="flex items-center mb-12">
            <Image
              src="/assets/wf-colored.png"
              alt="Logo"
              width={60}
              height={60}
            />
            <h1 className="text-2xl font-bold">Solutions</h1>
          </div>

          <nav className="flex flex-col gap-5 text-lg font-medium">
            {menuItems.map((item, i) => (
              <motion.button
                key={item.id}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
                whileTap={{ scale: 0.97 }}
                whileHover={{ x: 4 }}
                onClick={() => {
                  setOpen(false);
                  scrollToId(item.id);
                }}
                className="text-left hover:text-primary transition-colors"
              >
                {item.name}
              </motion.button>
            ))}
          </nav>
        </motion.div>
      </SheetContent>
    </Sheet>
  );
}
