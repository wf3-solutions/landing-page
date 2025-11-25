"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import React from "react";

export default function ClientsSection() {
  // Lista de logos (para duplicar no loop)
  const logos = [
    "/assets/andre-santana.png",
    "/assets/minimercado.png",
    "/assets/bom-jesus.png",
    "/assets/andre-santana.png",
    "/assets/minimercado.png",
    "/assets/bom-jesus.png",
    "/assets/andre-santana.png",
    "/assets/minimercado.png",
    "/assets/bom-jesus.png",
  ];

  return (
    <section
      id="clients"
      className="w-full px-6 py-20 flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Título */}
      <div className="text-center max-w-xl mb-12">
        <h2 className="text-4xl font-semibold text-foreground">
          Nossos Clientes
        </h2>
        <p className="text-muted-foreground mt-1">
          Conheça alguns de nossos clientes que confiam em nossos serviços.
        </p>
      </div>

      {/* Carrossel infinito */}
      <div className="relative w-full overflow-hidden">
        <motion.div
          className="flex gap-14 items-center"
          animate={{ x: ["0%", "-100%"] }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {/* Primeira leva */}
          {logos.map((logo, i) => (
            <Image
              key={i}
              src={logo}
              width={120}
              height={120}
              alt="Logo"
              className="object-contain grayscale hover:grayscale-0 transition"
            />
          ))}

          {/* Segunda leva (necessária pra fazer o loop perfeito) */}
          {logos.map((logo, i) => (
            <Image
              key={"dup" + i}
              src={logo}
              width={120}
              height={120}
              alt="Logo"
              className="object-contain grayscale hover:grayscale-0 transition"
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
