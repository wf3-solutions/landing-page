import Link from "next/link";
import React from "react";

export default function DesktopMenu() {
  return (
    <div className=" hidden lg:flex gap-8 text-lg font-medium">
      <Link href="#" className="hover:text-primary transition-all ease-in-out">
        Início
      </Link>
      <Link href="#" className="hover:text-primary transition-all ease-in-out">
        Serviços
      </Link>
      <Link href="#" className="hover:text-primary transition-all ease-in-out">
        Projeto
      </Link>
      <Link href="#" className="hover:text-primary transition-all ease-in-out">
        Contato
      </Link>
    </div>
  );
}
