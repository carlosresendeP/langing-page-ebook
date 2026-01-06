import React from "react";
import { Check, ShieldCheck, Zap } from "lucide-react";

const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-24 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-accent/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="glass-card rounded-3xl overflow-hidden border border-brand-accent/30 shadow-2xl shadow-brand-accent/10">
          <div className="grid md:grid-cols-2">
            <div className="p-8 md:p-12 bg-brand-surface/80">
              <h3 className="text-2xl font-bold text-white mb-6">
                Tudo o que você recebe:
              </h3>
              <ul className="space-y-4">
                {[
                  "eBook Completo (10 Capítulos)",
                  "Framework C.C.P.O Detalhado",
                  "Guia de Ferramentas No-Code",
                  "Roadmap do Engenheiro de Automação",
                  "Bônus: 10 Prompts de Ouro",
                  "Acesso a Atualizações Futuras",
                ].map((item, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-3 text-slate-300"
                  >
                    <div className="mt-1 min-w-[20px] text-brand-glow">
                      <Check size={20} />
                    </div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-8 md:p-12 bg-gradient-to-br from-brand-surface to-slate-900 flex flex-col justify-center items-center text-center relative border-t md:border-t-0 md:border-l border-brand-accent/10">
              <div className="absolute top-0 right-0 p-4">
                <div className="bg-brand-glow text-slate-950 text-xs font-bold px-3 py-1 rounded-full animate-bounce shadow-lg shadow-brand-glow/20">
                  OFERTA POR TEMPO LIMITADO
                </div>
              </div>

              <p className="text-slate-400 text-lg mb-2 line-through decoration-slate-500 decoration-2">
                De R$ 47,90
              </p>
              <div className="text-6xl font-extrabold text-white mb-2 tracking-tight">
                R$ 6
                <span className="text-3xl text-slate-400 font-bold">,99</span>
              </div>
              <p className="text-brand-highlight text-sm mb-8 font-medium bg-brand-accent/10 px-3 py-1 rounded-full border border-brand-accent/20">
                Preço de lançamento na Kiwify
              </p>

              <a
                href="https://pay.kiwify.com.br/cPJpY3J"
                target="_blank"
                rel="noopener noreferrer"
                className="group w-full py-4 bg-brand-glow hover:bg-emerald-400 text-slate-950 font-bold text-xl rounded-lg shadow-lg shadow-emerald-500/25 transition-all transform hover:scale-105 mb-6 flex items-center justify-center gap-2"
              >
                <Zap size={24} className="fill-slate-950" />
                Comprar Agora
              </a>

              <div className="flex flex-col items-center gap-3 text-slate-400 text-xs">
                <div className="flex items-center gap-2">
                  <ShieldCheck size={14} className="text-brand-glow" />
                  <span>
                    Pagamento seguro via <strong>Kiwify</strong>
                  </span>
                </div>
                <span>Acesso imediato no seu e-mail</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
