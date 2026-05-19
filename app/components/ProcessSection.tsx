"use client";

import { motion, Variants } from "framer-motion";
import {
  MessageCircle,
  FileSearch,
  Code2,
  Rocket,
} from "lucide-react";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
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

const steps = [
  {
    icon: <MessageCircle size={26} />,
    title: "Briefing",
    description:
      "A gente entende o seu objetivo, o público e o que o projeto precisa entregar.",
  },
  {
    icon: <FileSearch size={26} />,
    title: "Proposta",
    description:
      "Você recebe escopo claro, prazo realista e investimento sem surpresa.",
  },
  {
    icon: <Code2 size={26} />,
    title: "Desenvolvimento",
    description:
      "Entregas iterativas, com você acompanhando cada etapa e validando antes do próximo passo.",
  },
  {
    icon: <Rocket size={26} />,
    title: "Entrega & Suporte",
    description:
      "Lançamos o projeto na sua conta, treinamos o time e seguimos disponíveis no pós-entrega.",
  },
];

export default function ProcessSection() {
  return (
    <section
      id="process"
      className="w-full bg-muted/40 py-24 flex items-center justify-center"
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
            Como trabalhamos
          </p>
          <h2 className="font-bold leading-tight text-[clamp(2rem,3.5vw,3rem)]">
            Um processo simples, do briefing à entrega
          </h2>
          <p className="text-muted-foreground text-base md:text-lg">
            Quatro etapas claras para você saber sempre em que pé está o seu
            projeto.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              variants={itemVariants}
              className="relative flex flex-col gap-4 p-6 rounded-2xl bg-card border border-border/60 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                  {step.icon}
                </div>
                <span className="text-4xl font-bold text-muted-foreground/20 leading-none">
                  0{index + 1}
                </span>
              </div>

              <div className="flex flex-col gap-1.5">
                <h3 className="text-lg font-bold">{step.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
