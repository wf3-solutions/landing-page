import React from "react";
import Image from "next/image";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="w-full h-screen py-20 bg-background flex items-center justify-center"
    >
      <div className="max-w-6xl w-full px-4 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div className="flex justify-center ">
          <Image
            src="/assets/about.jpg"
            alt="Equipe WF3 Solutions"
            width={500}
            height={500}
            className="
    rounded-2xl shadow-lg object-cover
    w-full max-w-xs sm:max-w-sm md:max-w-full 
    h-auto
  "
          />
        </div>

        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Sobre Nós
          </h2>

          <p className="text-foreground/90 text-lg leading-relaxed mb-6">
            A <span className="font-semibold">WF3 Solutions</span> nasceu com o
            propósito de transformar ideias em soluções digitais de alto
            impacto. Unimos tecnologia, estratégia e inovação para criar
            softwares que realmente fazem diferença no dia a dia dos nossos
            clientes.
          </p>

          <p className="text-foreground/80 text-lg leading-relaxed mb-6">
            Trabalhamos com foco em performance, escalabilidade e experiência do
            usuário, desenvolvendo sistemas modernos que acompanham o futuro —
            desde aplicativos mobile até plataformas completas para empresas.
          </p>

          <p className="text-foreground/70 text-lg leading-relaxed">
            Nosso compromisso é entregar resultados reais, com transparência,
            excelência técnica e um relacionamento próximo em cada etapa do
            projeto.
          </p>
        </div>
      </div>
    </section>
  );
}
