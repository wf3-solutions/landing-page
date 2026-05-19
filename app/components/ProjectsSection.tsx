"use client";

import Image from "next/image";
import { motion, Variants } from "framer-motion";
import { ArrowUpRight, Receipt } from "lucide-react";
import TiltCard from "./TiltCard";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: "easeOut" },
  },
};

type Project = {
  logo?: string;
  client: string;
  type: string;
  summary: string;
  tags: string[];
};

const projects: Project[] = [
  {
    logo: "/assets/andre-santana.png",
    client: "André Santana",
    type: "Landing Page",
    summary:
      "Página institucional pensada para captar contatos qualificados e apresentar o trabalho de forma profissional.",
    tags: ["Site Profissional", "Captação de Leads", "Mobile First"],
  },
  {
    logo: "/assets/minimercado.png",
    client: "Mini Mercado",
    type: "Sistema de PDV Automatizado",
    summary:
      "Sistema completo de ponto de venda sob medida, automatizando vendas, estoque e gestão do dia a dia da loja.",
    tags: ["Automação de Vendas", "Controle de Estoque", "Gestão Completa"],
  },
  {
    logo: "/assets/bom-jesus.png",
    client: "Bom Jesus",
    type: "Landing Page",
    summary:
      "Landing page focada em apresentar a marca e converter visitantes em contatos diretos pelo WhatsApp.",
    tags: ["Alta Conversão", "Integração WhatsApp", "Pronta pra Anúncios"],
  },
  {
    client: "Tá Na Conta",
    type: "Plataforma de Comandas Digitais",
    summary:
      "Sistema de comandas e gestão de pedidos para bares e restaurantes, com cardápio digital e fluxo de cozinha.",
    tags: ["Cardápio Digital", "Gestão de Pedidos", "Pronto pra Cozinha"],
  },
];

export default function ProjectsSection() {
  return (
    <section
      id="projects"
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
            Projetos recentes
          </p>
          <h2 className="font-bold leading-tight text-[clamp(2rem,3.5vw,3rem)]">
            Clientes que já confiam no nosso trabalho
          </h2>
          <p className="text-muted-foreground text-base md:text-lg">
            Alguns dos projetos que entregamos — cada um com escopo, prazo e
            tecnologia pensados sob medida.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((project) => (
            <motion.div key={project.client} variants={itemVariants} className="h-full">
              <TiltCard intensity={6}>
            <article
              className="group relative h-full flex flex-col gap-5 p-6 rounded-2xl bg-card border border-border/60 hover:border-secondary/60 hover:shadow-2xl transition-all duration-300"
            >
              <div className="flex items-start justify-between gap-3">
                <div className="w-16 h-16 rounded-xl bg-background flex items-center justify-center overflow-hidden border border-border/40">
                  {project.logo ? (
                    <Image
                      src={project.logo}
                      alt={`Logo ${project.client}`}
                      width={56}
                      height={56}
                      className="object-contain"
                    />
                  ) : (
                    <span className="w-full h-full flex items-center justify-center bg-linear-to-br from-primary to-secondary text-background">
                      <Receipt size={28} strokeWidth={2.2} />
                    </span>
                  )}
                </div>
                <ArrowUpRight
                  size={20}
                  className="text-muted-foreground group-hover:text-secondary group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <p className="text-xs font-semibold uppercase tracking-wider text-secondary">
                  {project.type}
                </p>
                <h3 className="text-xl font-bold leading-tight">
                  {project.client}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {project.summary}
                </p>
              </div>

              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 text-xs font-medium rounded-full bg-muted text-muted-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </article>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
