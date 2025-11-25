import Image from "next/image";
import React from "react";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="w-full h-screen bg-background flex items-center justify-center py-20"
    >
      <div className="w-[90%] max-w-7xl grid grid-cols-1 md:grid-cols-5 gap-12 items-center">
        <div className="col-span-3 md:col-span-2 flex justify-center md:justify-start">
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
        </div>

        <div className="col-span-3 flex flex-col text-center md:text-left">
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
        </div>
      </div>
    </section>
  );
}
