"use client";

import React from "react";
import { Button } from "@/components/ui/button"; // Ajustei para @/ para manter padrão, se não usar pode remover
import { motion, Variants } from "framer-motion";

// Configuração da animação para o Hero
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3, // Um pouco mais lento entre os elementos para dar destaque
      delayChildren: 0.2, // Espera um pouquinho antes de começar a primeira animação
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 }, // Movimento vertical um pouco menor para ser sutil
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" }, // Animação mais longa e suave
  },
};

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="
    relative
    flex flex-col w-full min-h-screen items-center justify-center md:p-16 
    bg-[url('/assets/hero.webp')] bg-cover bg-center bg-no-repeat
  "
    >
      {/* Overlay azul - Mantive estático (sem animação) para não piscar o fundo */}
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,#0b2f78_0%,#0b2f78_40%,transparent_120%)] md:bg-[linear-gradient(to_right,#0b2f78_0%,#0b2f78_40%,transparent_120%)]"></div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible" // Ou animate="visible" se quiser que carregue sempre, mas whileInView funciona bem
        viewport={{ once: true }} // Importante: Anima apenas na primeira vez
        className="relative z-10 flex w-full h-full mt-48 md:mt-0 flex-col gap-4 md:justify-center p-4"
      >
        <motion.h1
          variants={itemVariants}
          className="text-background text-3xl text-center md:text-left  md:text-5xl font-bold "
        >
          Transforme Ideias em <br />{" "}
          <span className="text-4xl ">Software Inteligente.</span>
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="text-xl text-background mt-4 text-center md:text-left"
        >
          Desenvolvemos aplicações web, mobile e sistemas completos, unindo
          tecnologia avançada, design inteligente e alta performance para
          impulsionar o crescimento da sua empresa.
        </motion.p>

        {/* Se você tiver botões aqui no futuro, basta adicionar variants={itemVariants} neles também */}
      </motion.div>
    </section>
  );
}
