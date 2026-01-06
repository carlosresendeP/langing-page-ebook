import React from "react";
import { Target, Crosshair, FileText, MessageCircle } from "lucide-react";

const Framework: React.FC = () => {
  const steps = [
    {
      id: "1",
      title: "Contexto",
      desc: "Quem você é e qual sua situação. Dê o cenário completo para a IA entender seu ponto de partida.",
      icon: Target,
      color: "text-teal-400",
    },
    {
      id: "2",
      title: "Objetivo",
      desc: "O que você quer alcançar. Seja específico sobre o resultado desejado, não apenas a tarefa.",
      icon: Crosshair,
      color: "text-emerald-400",
    },
    {
      id: "3",
      title: "Formato",
      desc: "Como você quer a resposta. Lista, tabela, passo a passo, código, texto corrido? Defina a estrutura.",
      icon: FileText,
      color: "text-cyan-400",
    },
    {
      id: "4",
      title: "Tom",
      desc: "Estilo de linguagem desejado. Formal, casual, técnico, simples? O tom muda tudo.",
      icon: MessageCircle,
      color: "text-brand-glow",
    },
  ];

  return (
    <section className="py-20 bg-brand-dark relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            A Fórmula de <span className="text-gradient">4 Ingredientes</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            Capítulo 3 do ebook revela o código secreto dos prompts. Use{" "}
            <strong className="text-brand-glow">
              Contexto + Objetivo + Formato + Tom
            </strong>{" "}
            e transforme resultados genéricos em profissionais.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="glass-card p-6 rounded-xl hover:border-brand-accent/30 transition-colors group relative"
            >
              <div
                className={`w-12 h-12 rounded-lg bg-slate-900 flex items-center justify-center mb-4 border border-slate-800 ${step.color} group-hover:scale-110 transition-transform duration-300`}
              >
                <step.icon size={24} />
              </div>
              <div className="text-5xl font-bold text-slate-800 mb-2 absolute top-4 right-6 opacity-10 select-none">
                {step.id}
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                {step.title}
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-block glass-card px-6 py-4 rounded-lg border-brand-accent/20">
            <p className="text-slate-300 text-sm">
              <span className="text-brand-glow font-bold">Exemplo:</span> "Sou
              estudante de design (Contexto) e preciso criar um portfólio que
              impressione empresas (Objetivo). Me dê um passo a passo com 5
              etapas (Formato) usando linguagem simples e direta (Tom)."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Framework;
