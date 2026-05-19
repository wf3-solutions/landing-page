"use client";

import { useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { Plus } from "lucide-react";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.06 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: "easeOut" },
  },
};

const faqs = [
  {
    question: "Quanto custa um projeto com a WF3?",
    answer:
      "Cada projeto tem um escopo e uma realidade. Depois de uma conversa rápida pra entender o seu objetivo, mandamos uma proposta com escopo, prazo e investimento detalhados — sem letra miúda.",
  },
  {
    question: "Quanto tempo leva pra entregar?",
    answer:
      "Uma landing page costuma ficar pronta em 2 a 4 semanas; sistemas e apps variam conforme escopo. No briefing já te passamos uma estimativa realista e fechamos o prazo na proposta.",
  },
  {
    question: "Vocês oferecem suporte depois da entrega?",
    answer:
      "Sim. Todo projeto entra com um período de suporte pós-entrega incluso, e oferecemos planos de manutenção pra quem quer continuar evoluindo o produto com a gente.",
  },
  {
    question: "Eu fico com o código e os acessos do projeto?",
    answer:
      "Sempre. Tudo é entregue na sua conta — repositório, domínio, hospedagem, gerenciador de anúncios. Você é dono do que foi feito, sem dependência da WF3.",
  },
  {
    question: "Como funciona o serviço de tráfego pago?",
    answer:
      "Cuidamos da estratégia, criação dos anúncios e gestão diária no Meta Ads e Google Ads. Acompanhamos resultado por relatório e ajustamos as campanhas pra trazer leads qualificados.",
  },
  {
    question: "Dá pra começar com um escopo menor e crescer depois?",
    answer:
      "Dá sim, e geralmente é o caminho que mais recomendamos. Começamos por uma entrega enxuta que já gera resultado e vamos evoluindo o produto em ciclos.",
  },
  {
    question: "Vocês trabalham com contrato?",
    answer:
      "Sim. Todo projeto começa com contrato simples e claro, definindo escopo, prazos, valores e responsabilidades das duas partes.",
  },
];

function FaqItem({
  question,
  answer,
  isOpen,
  onToggle,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <motion.div
      variants={itemVariants}
      className="border border-border/60 rounded-2xl bg-card overflow-hidden hover:border-secondary/50 transition-colors"
    >
      <button
        type="button"
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-4 p-5 md:p-6 text-left"
        aria-expanded={isOpen}
      >
        <span className="font-semibold text-base md:text-lg leading-snug">
          {question}
        </span>
        <Plus
          size={22}
          className={`shrink-0 text-secondary transition-transform duration-300 ${
            isOpen ? "rotate-45" : "rotate-0"
          }`}
        />
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="overflow-hidden"
          >
            <p className="px-5 md:px-6 pb-5 md:pb-6 text-muted-foreground leading-relaxed">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section
      id="faq"
      className="w-full bg-background py-24 flex items-center justify-center"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="w-[90%] max-w-3xl flex flex-col gap-10"
      >
        <motion.div
          variants={itemVariants}
          className="flex flex-col items-center text-center gap-3"
        >
          <p className="text-secondary font-bold text-base md:text-lg">
            Perguntas frequentes
          </p>
          <h2 className="font-bold leading-tight text-[clamp(2rem,3.5vw,3rem)]">
            Tirando as dúvidas antes da conversa
          </h2>
          <p className="text-muted-foreground text-base md:text-lg">
            Não achou sua dúvida aqui? Manda no WhatsApp que a gente responde.
          </p>
        </motion.div>

        <div className="flex flex-col gap-3">
          {faqs.map((faq, index) => (
            <FaqItem
              key={faq.question}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onToggle={() =>
                setOpenIndex(openIndex === index ? null : index)
              }
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
}
