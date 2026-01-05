import React from 'react';
import { Target, UserCircle, MessageSquare, FileJson } from 'lucide-react';

const Framework: React.FC = () => {
  const steps = [
    {
      id: "C",
      title: "Contexto",
      desc: "Quem você é e o que está acontecendo. Não peça apenas 'um post'. Explique o cenário.",
      icon: Target,
      color: "text-teal-400"
    },
    {
      id: "C",
      title: "Comando",
      desc: "A instrução precisa. O que exatamente a IA deve executar? Verbos de ação claros.",
      icon: MessageSquare,
      color: "text-emerald-400"
    },
    {
      id: "P",
      title: "Persona",
      desc: "Quem a IA deve fingir ser? 'Atue como um especialista em Copywriting'.",
      icon: UserCircle,
      color: "text-cyan-400"
    },
    {
      id: "O",
      title: "Output",
      desc: "Como você quer o resultado? Tabelas, código JSON, tom de voz, limite de caracteres.",
      icon: FileJson,
      color: "text-brand-glow"
    }
  ];

  return (
    <section className="py-20 bg-brand-dark relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Pare de "Pedir", Comece a <span className="text-gradient">Estruturar</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            A diferença entre um amador e um profissional em 2026 é o Framework <strong>C.C.P.O</strong>. 
            É assim que você obtém resultados de consultoria sênior.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, idx) => (
            <div key={idx} className="glass-card p-6 rounded-xl hover:border-brand-accent/30 transition-colors group">
              <div className={`w-12 h-12 rounded-lg bg-slate-900 flex items-center justify-center mb-4 border border-slate-800 ${step.color} group-hover:scale-110 transition-transform duration-300`}>
                <step.icon size={24} />
              </div>
              <div className="text-4xl font-bold text-slate-700 mb-2 absolute top-4 right-6 opacity-20 select-none">
                {step.id}
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Framework;