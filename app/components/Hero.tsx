import React from "react";
import { Button } from "../../components/ui/button";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="
    relative
    flex flex-col w-full h-screen items-center justify-center md:p-16 
    bg-[url('/assets/hero.webp')] bg-cover bg-center bg-no-repeat
  "
    >
      {/* Overlay azul */}
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,#0b2f78_0%,#0b2f78_40%,transparent_120%)] md:bg-[linear-gradient(to_right,#0b2f78_0%,#0b2f78_40%,transparent_120%)]"></div>

      <div className="relative z-10 flex w-full h-full mt-48 md:mt-0 flex-col gap-4 md:justify-center p-4">
        <h1 className="text-background text-3xl text-center md:text-left  md:text-4xl font-bold ">
          Transforme Ideias em <br />{" "}
          <span className="text-4xl ">Software Inteligente.</span>
        </h1>

        <p className="text-xl text-background mt-4 text-center md:text-left ">
          Criamos soluções sob medida, utilizando as mais recentes
          tecnologias...
        </p>
      </div>
    </section>
  );
}
