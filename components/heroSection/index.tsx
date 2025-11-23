import React from "react";
import Button from "../buttonCTA";
import ButtonCTA from "../buttonCTA";

export default function HeroSection() {
  return (
    <div
      className="flex mt-4 w-full h-screen items-center justify-center 
                    bg-black/60 
                    bg-[url('/assets/hero.webp')] bg-cover bg-center bg-no-repeat 
                    bg-blend-overlay"
    >
      <div className="content flex w-full h-full flex-col gap-4 items-center justify-center p-4">
        <h1 className="text-background text-3xl md:text-5xl font-bold text-center">
          Transforme Ideias em Software Inteligente. Com a WF3 Solutions, o
          futuro digital começa agora.
        </h1>
        <p className="text-xl text-background mt-4  text-center">
          Criamos soluções sob medida, utilizando as mais recentes tecnologias
          para garantir que sua empresa não apenas acompanhe o mercado, mas o
          lidere. Inovação, escalabilidade e performance em cada linha de
          código.
        </p>

        <ButtonCTA />
      </div>
    </div>
  );
}
