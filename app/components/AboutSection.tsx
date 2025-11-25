"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { motion, Variants } from "framer-motion";

// Configuração da animação (Consistente com Hero e Contact)
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // Atraso entre a imagem e o texto
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function AboutSection() {
  return (
    <section
      id="about"
      className="w-full min-h-screen bg-background flex items-center justify-center py-20"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }} // Dispara quando 20% da seção estiver visível
        className="w-[90%] max-w-7xl grid grid-cols-1 md:grid-cols-5 gap-12 items-center"
      >
        {/* Bloco 1: Imagem */}
        <motion.div
          variants={itemVariants}
          className="col-span-3 md:col-span-2 flex justify-center md:justify-start"
        >
          <div className="w-full max-w-[400px]">
            <Image
              src="/assets/about.png"
              alt="Sobre nós"
              width={500}
              height={500}
              className="object-contain w-full h-auto"
              priority
            />
          </div>
        </motion.div>

        {/* Bloco 2: Texto e Botão */}
        <motion.div
          variants={itemVariants}
          className="col-span-3 flex flex-col text-center md:text-left gap-8"
        >
          <p className="text-secondary font-bold text-[clamp(1rem,2vw,1.25rem)]">
            Sobre nós
          </p>

          <h1 className="mb-6 font-bold leading-tight text-[clamp(2rem,4vw,3.5rem)]">
            Construindo tecnologia <br /> que gera resultados
          </h1>

          <p className="text-muted-foreground text-[clamp(1rem,1.8vw,1.125rem)] leading-relaxed">
            Somos especialistas em transformar ideias em soluções reais — desde
            sistemas completos até aplicativos personalizados, sempre com foco
            em eficiência, inovação e qualidade.
          </p>

          <p className="text-muted-foreground mt-4 text-[clamp(1rem,1.8vw,1.125rem)] leading-relaxed">
            Nosso time trabalha com tecnologia moderna, processos sólidos e um
            padrão elevado de entrega, ajudando empresas a evoluírem mais
            rápido.
          </p>

          <Button
            variant={"secondary"}
            className="text-background font-bold h-14 p-2 text-lg hover:scale-105 transition-transform"
            onClick={() => window.open("https://wa.me/5579999133217", "_blank")}
          >
            <FaWhatsapp size={30} />
            Fale Conosco!
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
}
