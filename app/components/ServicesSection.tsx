"use client";

import CardService from "./CardService";
import {
  Lightbulb,
  MonitorCog,
  Network,
  PanelsLeftBottom,
  PenTool,
  Smartphone,
  Megaphone,
} from "lucide-react";
import { motion, Variants } from "framer-motion";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
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

const services = [
  {
    icon: <PanelsLeftBottom size={24} />,
    title: "Landing Pages",
    description:
      "Páginas de alta conversão para captar leads, vender produtos e validar campanhas.",
  },
  {
    icon: <Smartphone size={24} />,
    title: "Apps Mobile",
    description:
      "Aplicativos iOS e Android com experiência fluida e performance nativa.",
  },
  {
    icon: <MonitorCog size={24} />,
    title: "Sistemas Web",
    description:
      "PDVs, ERPs e plataformas internas sob medida para organizar a sua operação.",
  },
  {
    icon: <Megaphone size={24} />,
    title: "Tráfego Pago",
    description:
      "Campanhas no Meta e Google Ads para gerar oportunidades qualificadas todo dia.",
  },
  {
    icon: <Network size={24} />,
    title: "Integrações & APIs",
    description:
      "Conectamos seus sistemas, pagamentos e parceiros sem retrabalho ou planilha.",
  },
  {
    icon: <PenTool size={24} />,
    title: "UX/UI Design",
    description:
      "Interfaces claras, modernas e pensadas para guiar o usuário até a conversão.",
  },
  {
    icon: <Lightbulb size={24} />,
    title: "Consultoria Tech",
    description:
      "Apoio estratégico para escolher tecnologia, escopo e roadmap do seu produto.",
  },
];

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="w-full bg-background py-24 flex items-center justify-center"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="w-[90%] max-w-7xl flex flex-col gap-12"
      >
        <motion.div
          variants={itemVariants}
          className="flex flex-col items-center text-center max-w-2xl mx-auto gap-3"
        >
          <p className="text-secondary font-bold text-base md:text-lg">
            Serviços
          </p>
          <h2 className="font-bold leading-tight text-[clamp(2rem,3.5vw,3rem)]">
            O que entregamos para você crescer
          </h2>
          <p className="text-muted-foreground text-base md:text-lg">
            Tecnologia sob medida e marketing performado — tudo em um único
            time, sem repasse e sem ficha técnica complicada.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service) => (
            <motion.div key={service.title} variants={itemVariants}>
              <CardService
                icon={service.icon}
                title={service.title}
                description={service.description}
              />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
