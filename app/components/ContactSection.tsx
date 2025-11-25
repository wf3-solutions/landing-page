// Improved responsive ContactSection code
"use client";

import React from "react";
import { Button } from "@/components/ui/button";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="w-full min-h-screen bg-background py-20 flex items-center justify-center px-4"
    >
      <div className="w-full max-w-7xl bg-muted/30 p-6 md:p-10 shadow-lg rounded-2xl grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="flex flex-col justify-center gap-6 text-center md:text-left">
          <h1 className="text-[clamp(2rem,6vw,4rem)] font-bold leading-tight text-primary">
            Vamos <br className="hidden md:block" /> conversar
          </h1>

          <p className="font-bold text-lg md:text-xl">
            Estamos aqui para ajudar você a crescer!
          </p>

          <p className="text-muted-foreground leading-relaxed max-w-md mx-auto md:mx-0">
            Preencha seus dados e nossa equipe entrará em contato.
          </p>
        </div>

        <form
          action="https://formsubmit.co/wf3solutions@gmail.com"
          method="POST"
          className="grid grid-cols-1 sm:grid-cols-2 gap-6"
        >
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_template" value="box" />
          <input
            type="hidden"
            name="_subject"
            value="Novo contato pelo site!"
          />

          <div className="flex flex-col col-span-1">
            <label className="text-sm font-medium">Nome*</label>
            <input
              type="text"
              name="nome"
              required
              className="w-full border rounded-lg px-3 h-12 bg-background"
            />
          </div>

          <div className="flex flex-col col-span-1">
            <label className="text-sm font-medium">Sobrenome*</label>
            <input
              type="text"
              name="sobrenome"
              required
              className="w-full border rounded-lg px-3 h-12 bg-background"
            />
          </div>

          <div className="flex flex-col col-span-1 sm:col-span-2">
            <label className="text-sm font-medium">Número de telefone*</label>
            <input
              type="tel"
              name="telefone"
              required
              className="w-full border rounded-lg px-3 h-12 bg-background"
            />
          </div>

          <div className="flex flex-col col-span-1 sm:col-span-2">
            <label className="text-sm font-medium">E-mail*</label>
            <input
              type="email"
              name="email"
              required
              className="w-full border rounded-lg px-3 h-12 bg-background"
            />
          </div>

          <div className="flex flex-col col-span-1 sm:col-span-2">
            <label className="text-sm font-medium">Nome da empresa*</label>
            <input
              type="text"
              name="empresa"
              required
              className="w-full border rounded-lg px-3 h-12 bg-background"
            />
          </div>

          <div className="flex flex-col col-span-1 sm:col-span-2">
            <label className="text-sm font-medium">Cargo</label>
            <select
              name="cargo"
              className="w-full border rounded-lg px-3 h-12 bg-background"
            >
              <option value="">Selecione</option>
              <option>CEO</option>
              <option>Gerente</option>
              <option>Analista</option>
            </select>
          </div>

          <div className="flex flex-col col-span-1 sm:col-span-2">
            <label className="text-sm font-medium">
              Qual solução você está buscando hoje?*
            </label>
            <select
              name="solucao"
              required
              className="w-full border rounded-lg px-3 h-12 bg-background"
            >
              <option value="">Selecione</option>
              <option>Desenvolvimento de App</option>
              <option>Site / Landing Page</option>
              <option>Sistema Corporativo</option>
            </select>
          </div>

          <div className="col-span-1 sm:col-span-2 mt-4">
            <Button
              type="submit"
              variant="secondary"
              className="w-full h-12 text-base md:text-lg"
            >
              Enviar
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
}
