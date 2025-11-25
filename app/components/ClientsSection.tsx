import Image from "next/image";
import React from "react";

export default function ClientsSection() {
  return (
    <section
      id="about"
      className="w-full h-[50vh] py-20 px-6 flex flex-col items-center justify-center"
    >
      <div className="text-center max-w-xl mb-12">
        <h2 className="text-4xl font-semibold text-foreground">
          Nossos Clientes
        </h2>
        <p className="text-muted-foreground mt-1">
          Conheça alguns de nossos clientes que confiam em nossos serviços.
        </p>
      </div>

      {/* Logos */}
      <div
        className="
          flex flex-wrap items-center justify-center 
          gap-10 sm:gap-14
          opacity-80
        "
      >
        <Image
          src="/assets/andre-santana.png"
          width={100}
          height={100}
          alt="Logo"
          className="object-contain grayscale hover:grayscale-0 transition"
        />
        <Image
          src="/assets/minimercado.png"
          width={100}
          height={100}
          alt="Logo"
          className="object-contain grayscale"
        />
        <Image
          src="/assets/bom-jesus.png"
          width={100}
          height={100}
          alt="Logo"
          className="object-contain grayscale"
        />
      </div>
    </section>
  );
}
