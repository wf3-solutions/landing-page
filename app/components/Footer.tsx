"use client";

import Image from "next/image";
import { FaWhatsapp, FaInstagram, FaLinkedin } from "react-icons/fa";
import { Mail, MapPin } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/5579999133217";

const navLinks = [
  { label: "Início", href: "#hero" },
  { label: "Serviços", href: "#services" },
  { label: "Como trabalhamos", href: "#process" },
  { label: "Projetos", href: "#projects" },
  { label: "FAQ", href: "#faq" },
  { label: "Contato", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="w-full text-background bg-linear-to-r from-primary to-primary/90 pt-16 pb-8">
      <div className="w-[90%] max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        <div className="flex flex-col gap-4">
          <Image
            src="/assets/wf-white.png"
            alt="WF3 Solutions"
            width={70}
            height={70}
            className="object-contain"
          />
          <p className="text-background/80 leading-relaxed max-w-xs">
            Desenvolvimento de software e tráfego pago para empresas que querem
            crescer com previsibilidade.
          </p>

          <div className="flex gap-3 mt-2">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="w-10 h-10 rounded-full bg-background/10 hover:bg-background/20 flex items-center justify-center transition-colors"
            >
              <FaWhatsapp size={18} />
            </a>
            <span
              aria-label="Instagram (em breve)"
              className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center opacity-70 cursor-default"
            >
              <FaInstagram size={18} />
            </span>
            <span
              aria-label="LinkedIn (em breve)"
              className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center opacity-70 cursor-default"
            >
              <FaLinkedin size={18} />
            </span>
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <h3 className="font-semibold text-lg mb-2">Navegação</h3>
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-background/85 hover:text-background hover:translate-x-1 transition-all w-fit"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex flex-col gap-3">
          <h3 className="font-semibold text-lg mb-2">Contato</h3>

          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 text-background/85 hover:text-background transition-colors"
          >
            <FaWhatsapp size={18} className="shrink-0" />
            (79) 99913-3217
          </a>

          <a
            href="mailto:contato@wf3solutions.com"
            className="flex items-center gap-3 text-background/85 hover:text-background transition-colors break-all"
          >
            <Mail size={18} className="shrink-0" />
            contato@wf3solutions.com
          </a>

          <p className="flex items-center gap-3 text-background/85">
            <MapPin size={18} className="shrink-0" />
            Atendimento em todo o Brasil
          </p>
        </div>
      </div>

      <div className="w-[90%] max-w-7xl mx-auto text-center md:text-left text-background/60 text-sm mt-12 pt-6 border-t border-background/20">
        © {new Date().getFullYear()} WF3 Solutions — Todos os direitos
        reservados.
      </div>
    </footer>
  );
}
