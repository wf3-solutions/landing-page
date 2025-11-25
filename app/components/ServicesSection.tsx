import React from "react";
import CardService from "./CardService";
import {
  Lightbulb,
  MonitorCog,
  Network,
  PanelsLeftBottom,
  PenTool,
  Smartphone,
} from "lucide-react";

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="w-full bg-background min-h-screen flex items-center justify-center py-20"
    >
      <div className="w-[90%] max-w-7xl flex flex-col items-center md:grid md:grid-cols-5 md:gap-12">
        <div className="col-span-2 flex flex-col justify-center text-center md:text-left mb-10 md:mb-0">
          <p
            className="text-secondary font-bold"
            style={{ fontSize: "clamp(1rem, 1vw + 0.5rem, 1.25rem)" }}
          >
            Serviços
          </p>

          <h1
            className="mb-6 font-bold leading-tight"
            style={{ fontSize: "clamp(2rem, 3vw + 1rem, 3.5rem)" }}
          >
            Nosso expertise
          </h1>

          <p
            className="text-muted-foreground"
            style={{ fontSize: "clamp(1rem, 1vw + 0.5rem, 1.125rem)" }}
          >
            Desenvolvemos soluções completas para impulsionar seu negócio —
            desde landing pages até sistemas complexos e aplicativos mobile.
          </p>
        </div>

        <div className="col-span-3 w-full grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
          <CardService
            icon={<PanelsLeftBottom size={28} />}
            title="Landing Pages"
          />
          <CardService icon={<Smartphone size={28} />} title="Apps Mobile" />
          <CardService icon={<MonitorCog size={28} />} title="Sistemas Web" />
          <CardService
            icon={<Network size={28} />}
            title="Integrações & APIs"
          />
          <CardService icon={<PenTool size={28} />} title="UX/UI Design" />
          <CardService
            icon={<Lightbulb size={28} />}
            title="Consultoria Tech"
          />
        </div>
      </div>
    </section>
  );
}
