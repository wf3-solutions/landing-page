"use client";

import Link from "next/link";
import { FaWhatsapp, FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full text-background bg-linear-to-r from-primary to-primary/90 pt-16 pb-10 mt-20">
      <div className="w-[90%] max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="flex flex-col gap-3">
          <h3 className="font-semibold text-lg mb-2">Navegação</h3>

          <Link href="#hero" className="hover:translate-x-1 transition-all">
            Início
          </Link>
          <Link href="#services" className="hover:translate-x-1 transition-all">
            Serviços
          </Link>
          <Link href="#about" className="hover:translate-x-1 transition-all">
            Sobre
          </Link>
          <Link href="#clients" className="hover:translate-x-1 transition-all">
            Clientes
          </Link>
        </div>

        <div className="flex flex-col gap-3">
          <h3 className="font-semibold text-lg mb-2">Contato</h3>

          <div className="flex gap-6 mt-4">
            <a
              href="https://wa.me/559999999"
              target="_blank"
              className="flex items-center gap-3 hover:opacity-80 transition-all"
            >
              <FaWhatsapp size={26} />
            </a>
            <a href="#" target="_blank" className="hover:scale-110 transition">
              <FaInstagram size={26} />
            </a>
            <a href="#" target="_blank" className="hover:scale-110 transition">
              <FaGithub size={26} />
            </a>
            <a href="#" target="_blank" className="hover:scale-110 transition">
              <FaLinkedin size={26} />
            </a>
          </div>
        </div>

        <div>
          <h3 className="font-semibold text-lg mb-2">Receba novidades</h3>

          <p className="text-background/80 mb-3">
            Fique por dentro de atualizações e conteúdos exclusivos.
          </p>

          <form
            className="flex items-center gap-2"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="email"
              placeholder="Seu e-mail"
              className="w-full rounded-xl px-4 py-3 bg-background text-foreground outline-none border border-background/40 focus:border-background transition"
            />
            <button
              type="submit"
              className="px-5 py-3 rounded-xl bg-background text-primary font-semibold hover:bg-background/80 transition"
            >
              Enviar
            </button>
          </form>
        </div>
      </div>

      <div className="text-center text-background/60 mt-10 pt-6 border-t border-background/20">
        © {new Date().getFullYear()} WF Solutions — Todos os direitos
        reservados.
      </div>
    </footer>
  );
}
