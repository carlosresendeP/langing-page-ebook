import React from "react";
import { GUARANTEES } from "../constants";

const Guarantee: React.FC = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Risco <span className="text-gradient">Zero</span> Para Você
          </h2>
          <p className="text-xl text-slate-400">Sua satisfação é garantida</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {GUARANTEES.map((guarantee, idx) => {
            const Icon = guarantee.icon;
            return (
              <div
                key={idx}
                className="glass-card p-8 rounded-2xl text-center hover:border-brand-glow/50 transition-all hover:scale-105 hover:shadow-lg hover:shadow-brand-glow/10"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-brand-accent to-brand-glow rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg shadow-brand-glow/20">
                  <Icon size={32} className="text-slate-950" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  {guarantee.title}
                </h3>
                <p className="text-slate-400 leading-relaxed">
                  {guarantee.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Main Guarantee Badge */}
        <div className="mt-16 max-w-3xl mx-auto">
          <div className="glass-card p-8 md:p-12 rounded-3xl border-2 border-brand-glow/30 bg-gradient-to-br from-brand-surface to-brand-dark relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-glow/5 rounded-full blur-[80px]" />

            <div className="relative z-10 text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-brand-accent to-brand-glow rounded-full mb-6 shadow-2xl shadow-brand-glow/30">
                <span className="text-4xl">🛡️</span>
              </div>

              <h3 className="text-3xl font-bold text-white mb-4">
                Garantia Incondicional de 7 Dias
              </h3>

              <p className="text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto">
                Experimente o ebook por 7 dias completos. Se você não ficar 100%
                satisfeito com o conteúdo, basta enviar um email e devolvemos{" "}
                <span className="text-brand-glow font-bold">
                  todo o seu dinheiro
                </span>
                . Sem perguntas, sem burocracia, sem complicação.
              </p>

              <div className="mt-8 inline-block px-6 py-3 bg-brand-accent/10 rounded-full border border-brand-accent/30">
                <p className="text-brand-glow font-semibold">
                  ✓ Você não tem nada a perder, apenas conhecimento a ganhar
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Guarantee;
