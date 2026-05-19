"use client";

import { motion, Variants } from "framer-motion";
import { Users, ShieldCheck, Zap, Code2 } from "lucide-react";

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

const reasons = [
  {
    icon: <Users size={24} />,
    title: "Atendimento direto",
    description:
      "Você fala com quem desenvolve. Sem intermediário, sem ruído, sem perder tempo.",
  },
  {
    icon: <Zap size={24} />,
    title: "Marketing + tecnologia",
    description:
      "Construímos o produto e trazemos o cliente. Tudo no mesmo time, alinhado do início.",
  },
  {
    icon: <Code2 size={24} />,
    title: "Stack moderna",
    description:
      "Tecnologia atual que escala com o seu negócio — sem você ficar refém de gambiarra.",
  },
  {
    icon: <ShieldCheck size={24} />,
    title: "Transparência total",
    description:
      "Escopo, prazo e código são seus. Sem letra miúda, sem dependência depois da entrega.",
  },
];

export default function WhyUsSection() {
  return (
    <section
      id="why-us"
      className="relative w-full bg-background py-24 flex items-center justify-center overflow-hidden"
    >
      <div
        aria-hidden
        className="absolute inset-0 bg-grid-pattern opacity-20 [mask-image:radial-gradient(ellipse_at_center,black_10%,transparent_70%)]"
      />
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="relative z-10 w-[90%] max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
      >
        <motion.div
          variants={itemVariants}
          className="flex flex-col gap-4 text-center lg:text-left"
        >
          <p className="text-secondary font-bold text-base md:text-lg">
            Por que a WF3
          </p>
          <h2 className="font-bold leading-tight text-[clamp(2rem,3.5vw,3rem)]">
            A diferença está em como entregamos
          </h2>
          <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
            Somos um time enxuto que combina desenvolvimento e tráfego pago no
            mesmo lugar. Você sai da reunião sabendo o que vai receber, quando
            e por quanto.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {reasons.map((reason) => (
            <motion.div
              key={reason.title}
              variants={itemVariants}
              className="flex flex-col gap-3 p-5 rounded-2xl bg-card border border-border/60 hover:border-secondary/60 hover:shadow-md transition-all"
            >
              <div className="w-11 h-11 rounded-lg bg-secondary/10 text-secondary flex items-center justify-center">
                {reason.icon}
              </div>
              <h3 className="text-base font-bold">{reason.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
