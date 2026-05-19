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
      staggerChildren: 0.14,
      delayChildren: 0.15,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] },
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
        relative overflow-hidden
        flex flex-col w-full min-h-screen items-center justify-center
        bg-[url('/assets/hero.webp')] bg-cover bg-center bg-no-repeat
      "
    >
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,#0b2f78_0%,#0b2f78_45%,transparent_120%)] md:bg-[linear-gradient(to_right,#0b2f78_0%,#0b2f78_45%,transparent_120%)]" />

      <motion.div
        aria-hidden
        className="absolute top-[10%] left-[5%] w-72 h-72 md:w-[28rem] md:h-[28rem] rounded-full bg-secondary/30 blur-[100px]"
        animate={{
          x: [0, 40, -20, 0],
          y: [0, -30, 20, 0],
          scale: [1, 1.15, 0.95, 1],
        }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden
        className="absolute bottom-[10%] right-[8%] w-80 h-80 md:w-[32rem] md:h-[32rem] rounded-full bg-accent/25 blur-[120px]"
        animate={{
          x: [0, -50, 30, 0],
          y: [0, 25, -15, 0],
          scale: [1, 1.1, 1.05, 1],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden
        className="absolute top-1/2 left-1/2 w-64 h-64 md:w-96 md:h-96 rounded-full bg-primary/20 blur-[90px]"
        animate={{
          x: [-20, 30, -20],
          y: [-10, 20, -10],
        }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 w-full max-w-7xl mx-auto flex flex-col gap-6 px-6 md:px-16 pt-24 md:pt-0 pb-24 md:pb-0"
      >
        <motion.span
          variants={itemVariants}
          className="self-center md:self-start inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-background/10 backdrop-blur-md border border-background/25 text-background text-sm font-medium shadow-lg"
        >
          <span className="relative flex items-center justify-center w-2 h-2">
            <span className="absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75 animate-ping" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-secondary" />
          </span>
          Desenvolvimento + Tráfego Pago
        </motion.span>

        <motion.h1
          variants={itemVariants}
          className="text-background text-center md:text-left font-bold leading-[1.05] text-[clamp(2.25rem,6vw,4.25rem)] max-w-3xl tracking-tight"
        >
          Tecnologia que vende.
          <br />
          <span className="inline-block bg-linear-to-r from-secondary via-accent to-secondary bg-[length:200%_auto] text-transparent bg-clip-text animate-[shimmer_6s_linear_infinite]">
            Tráfego que traz cliente.
          </span>
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
          <motion.div
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 380, damping: 18 }}
            className="relative w-full sm:w-auto group"
          >
            <span className="absolute inset-0 rounded-md bg-secondary blur-xl opacity-0 md:opacity-50 group-hover:opacity-80 transition-opacity" />
            <Button
              variant="secondary"
              onClick={() => scrollToId("contact")}
              className="relative w-full sm:w-auto h-14 px-8 text-base font-bold shadow-xl"
            >
              Solicitar orçamento
              <ArrowRight
                size={20}
                className="transition-transform group-hover:translate-x-1"
              />
            </Button>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 380, damping: 18 }}
            className="w-full sm:w-auto"
          >
            <Button
              variant="outline"
              onClick={() => window.open(WHATSAPP_URL, "_blank")}
              className="w-full sm:w-auto h-14 px-8 text-base font-bold bg-background/10 backdrop-blur-sm border-background/40 text-background hover:bg-background/20 hover:text-background hover:border-background transition-colors"
            >
              <FaWhatsapp size={20} />
              Falar no WhatsApp
            </Button>
          </motion.div>
        </motion.div>

        <motion.ul
          variants={itemVariants}
          className="flex flex-col md:flex-row md:flex-wrap gap-x-6 gap-y-1.5 mt-2 md:mt-4 items-center md:justify-start"
        >
          {trustBadges.map((badge) => (
            <li
              key={badge}
              className="flex items-center gap-2 text-background/90 text-xs md:text-base font-medium"
            >
              <CheckCircle2
                size={16}
                className="text-secondary shrink-0 md:size-[18px]"
              />
              {badge}
            </li>
          ))}
        </motion.ul>
      </motion.div>

      <motion.div
        aria-hidden
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="hidden md:flex absolute bottom-8 left-1/2 -translate-x-1/2 flex-col items-center gap-2 text-background/70 z-10"
      >
        <span className="text-xs uppercase tracking-widest">Role para ver mais</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          className="w-[1px] h-8 bg-linear-to-b from-background/70 to-transparent"
        />
      </motion.div>
    </section>
  );
}
