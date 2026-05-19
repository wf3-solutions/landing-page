"use client";

import { motion, Variants } from "framer-motion";
import { Button } from "@/components/ui/button";
import { FaWhatsapp } from "react-icons/fa";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { useSmoothScroll } from "@/app/hooks/UseSmoothScrool";

const WHATSAPP_URL = "https://wa.me/5579999133217";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.18,
      delayChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const trustBadges = [
  "Atendimento direto com quem desenvolve",
  "Você é dono do código",
  "Suporte pós-entrega incluso",
];

export default function HeroSection() {
  const { scrollToId } = useSmoothScroll();

  return (
    <section
      id="hero"
      className="
        relative
        flex flex-col w-full min-h-screen items-center justify-center
        bg-[url('/assets/hero.webp')] bg-cover bg-center bg-no-repeat
      "
    >
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,#0b2f78_0%,#0b2f78_45%,transparent_120%)] md:bg-[linear-gradient(to_right,#0b2f78_0%,#0b2f78_45%,transparent_120%)]" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 w-full max-w-7xl mx-auto flex flex-col gap-6 px-6 md:px-16 pt-32 md:pt-0"
      >
        <motion.span
          variants={itemVariants}
          className="self-center md:self-start inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-background/15 backdrop-blur-sm border border-background/25 text-background text-sm font-medium"
        >
          <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
          Desenvolvimento + Tráfego Pago
        </motion.span>

        <motion.h1
          variants={itemVariants}
          className="text-background text-center md:text-left font-bold leading-[1.1] text-[clamp(2rem,5.5vw,4rem)] max-w-3xl"
        >
          Tecnologia que vende.
          <br />
          <span className="text-secondary">Tráfego que traz cliente.</span>
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="text-background/90 text-center md:text-left text-lg md:text-xl leading-relaxed max-w-2xl"
        >
          Criamos sites, apps e sistemas sob medida — e levamos público
          qualificado até eles com tráfego pago no Meta e Google Ads.
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-2 items-center md:items-start"
        >
          <Button
            variant="secondary"
            onClick={() => scrollToId("contact")}
            className="w-full sm:w-auto h-14 px-8 text-base font-bold hover:scale-[1.03] transition-transform"
          >
            Solicitar orçamento
            <ArrowRight size={20} />
          </Button>

          <Button
            variant="outline"
            onClick={() => window.open(WHATSAPP_URL, "_blank")}
            className="w-full sm:w-auto h-14 px-8 text-base font-bold bg-transparent border-background/60 text-background hover:bg-background/10 hover:text-background hover:border-background hover:scale-[1.03] transition-all"
          >
            <FaWhatsapp size={20} />
            Falar no WhatsApp
          </Button>
        </motion.div>

        <motion.ul
          variants={itemVariants}
          className="flex flex-wrap gap-x-6 gap-y-2 mt-4 justify-center md:justify-start"
        >
          {trustBadges.map((badge) => (
            <li
              key={badge}
              className="flex items-center gap-2 text-background/90 text-sm md:text-base font-medium"
            >
              <CheckCircle2 size={18} className="text-secondary shrink-0" />
              {badge}
            </li>
          ))}
        </motion.ul>
      </motion.div>
    </section>
  );
}
