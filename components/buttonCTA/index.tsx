import { Zap } from "lucide-react";
import React from "react";
import { FaWhatsapp } from "react-icons/fa";

export default function ButtonCTA() {
  return (
    <a
      className={`flex items-center gap-2 justify-center h-12 p-4 bg-primary/80 border-2 border-secondary w-3/4 md:w-1/2 cursor-pointer rounded-xl hover:bg-secondary hover:border-primary text-secondary hover:text-primary  mt-6 transition-colors duration-300`}
    >
      <FaWhatsapp className="text-2xl md:text-3xl" />
      <p className="font-bold md:text-2xl">Fale conosco!</p>
    </a>
  );
}
