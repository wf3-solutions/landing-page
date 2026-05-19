"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { FaWhatsapp } from "react-icons/fa";
import { motion, Variants } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/5579999133217";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.18 },
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

const highlights = [
  "Desenvolvimento sob medida, sem template engessado",
  "Tráfego pago para encher a sua agenda de clientes",
  "Acompanhamento próximo do briefing à entrega",
];

export default function AboutSection() {
  return (
    <section
      id="about"
      className="w-full bg-background flex items-center justify-center py-24"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="w-[90%] max-w-7xl grid grid-cols-1 md:grid-cols-5 gap-12 items-center"
      >
        <motion.div
          variants={itemVariants}
          className="col-span-3 md:col-span-2 flex justify-center md:justify-start"
        >
          <div className="w-full max-w-[400px]">
            <Image
              src="/assets/about.png"
              alt="Equipe WF3 Solutions trabalhando em soluções de software"
              width={500}
              height={500}
              className="object-contain w-full h-auto"
            />
          </div>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="col-span-3 flex flex-col text-center md:text-left gap-5"
        >
          <p className="text-secondary font-bold text-[clamp(1rem,2vw,1.25rem)]">
            Sobre a WF3
          </p>

          <h2 className="font-bold leading-tight text-[clamp(2rem,4vw,3.25rem)]">
            Tecnologia e marketing trabalhando juntos pelo seu resultado
          </h2>

          <p className="text-muted-foreground text-[clamp(1rem,1.6vw,1.125rem)] leading-relaxed">
            A WF3 nasceu pra tirar empresas do gargalo do crescimento: a gente
            constrói o produto digital (site, app, sistema) e leva o cliente
            certo até ele com tráfego pago. Tudo no mesmo time, com
            atendimento direto e processo transparente.
          </p>

          <ul className="flex flex-col gap-2.5 mt-2">
            {highlights.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 text-foreground text-base"
              >
                <CheckCircle2
                  size={20}
                  className="text-secondary shrink-0 mt-0.5"
                />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <Button
            variant="secondary"
            className="self-center md:self-start mt-4 h-14 px-6 text-base md:text-lg font-bold hover:scale-[1.03] transition-transform"
            onClick={() => window.open(WHATSAPP_URL, "_blank")}
          >
            <FaWhatsapp size={24} />
            Falar com a gente
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
}
