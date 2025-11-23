"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetTitle,
} from "@/components/ui/sheet";
import Link from "next/link";

export default function MobileMenu() {
  const [open, setOpen] = useState(false);

  const lineClass =
    "w-full h-[2px]  rounded-full bg-secondary transition-all duration-300";

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <button
          aria-label="Menu"
          className="relative h-10 w-10 flex flex-col justify-center items-center gap-2 lg:hidden"
        >
          {/* Linha superior */}
          <motion.span
            className={lineClass}
            animate={open ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
          />

          {/* Linha do meio */}
          <motion.span
            className={lineClass}
            animate={open ? { opacity: 0 } : { opacity: 1 }}
            transition={{ duration: 0.2 }}
          />

          {/* Linha inferior */}
          <motion.span
            className={lineClass}
            animate={open ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
          />
        </button>
      </SheetTrigger>

      {/* Menu lateral */}
      <SheetContent
        side="left"
        className="
          w-[260px] p-6 
          backdrop-blur-xl bg-white/80
          border-r border-gray-200
        "
      >
        <SheetTitle className="mb-8 hidden" />
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.25 }}
        >
          <h2 className="text-2xl font-bold mb-8 text-primary">Menu</h2>

          <nav className="flex flex-col gap-5 text-lg font-medium">
            {[
              { name: "Início", href: "/" },
              { name: "Serviços", href: "/servicos" },
              { name: "Projetos", href: "/projetos" },
              { name: "Contato", href: "/contato" },
            ].map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05 }}
                whileTap={{ scale: 0.97 }}
                whileHover={{ x: 4 }}
              >
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block hover:text-primary transition-colors"
                >
                  {item.name}
                </Link>
              </motion.div>
            ))}
          </nav>
        </motion.div>
      </SheetContent>
    </Sheet>
  );
}
