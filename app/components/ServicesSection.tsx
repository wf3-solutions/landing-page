"use client";

import React from "react";
import CardService from "./CardService";
import {
  Lightbulb,
  MonitorCog,
  Network,
  PanelsLeftBottom,
  PenTool,
  Smartphone,
} from "lucide-react";
import { motion, Variants } from "framer-motion";

// Configuração da animação
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1, // Stagger rápido para os cards aparecerem em sequência fluida
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="w-full bg-background min-h-screen flex items-center justify-center py-20"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }} // Dispara assim que 10% da seção aparecer
        className="w-[90%] max-w-7xl flex flex-col items-center md:grid md:grid-cols-5 md:gap-12"
      >
        {/* Coluna da Esquerda: Textos */}
        <motion.div
          variants={itemVariants}
          className="col-span-2 flex flex-col justify-center text-center md:text-left mb-10 md:mb-0"
        >
          <p
            className="text-secondary font-bold"
            style={{ fontSize: "clamp(1rem, 1vw + 0.5rem, 1.25rem)" }}
          >
            Serviços
          </p>

          <h1
            className="mb-6 font-bold leading-tight"
            style={{ fontSize: "clamp(2rem, 3vw + 1rem, 3.5rem)" }}
          >
            Nosso expertise
          </h1>

          <p
            className="text-muted-foreground"
            style={{ fontSize: "clamp(1rem, 1vw + 0.5rem, 1.125rem)" }}
          >
            Desenvolvemos soluções completas para impulsionar seu negócio —
            desde landing pages até sistemas complexos e aplicativos mobile.
          </p>
        </motion.div>

        {/* Coluna da Direita: Grid de Cards */}
        <motion.div
          variants={containerVariants} // Reaplica o container para garantir o stagger nos cards internos
          className="col-span-3 w-full grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6"
        >
          {/* Envolvemos cada CardService em um motion.div para animar individualmente */}
          <motion.div variants={itemVariants}>
            <CardService
              icon={<PanelsLeftBottom size={28} />}
              title="Landing Pages"
            />
          </motion.div>

          <motion.div variants={itemVariants}>
            <CardService icon={<Smartphone size={28} />} title="Apps Mobile" />
          </motion.div>

          <motion.div variants={itemVariants}>
            <CardService icon={<MonitorCog size={28} />} title="Sistemas Web" />
          </motion.div>

          <motion.div variants={itemVariants}>
            <CardService
              icon={<Network size={28} />}
              title="Integrações & APIs"
            />
          </motion.div>

          <motion.div variants={itemVariants}>
            <CardService icon={<PenTool size={28} />} title="UX/UI Design" />
          </motion.div>

          <motion.div variants={itemVariants}>
            <CardService
              icon={<Lightbulb size={28} />}
              title="Consultoria Tech"
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
