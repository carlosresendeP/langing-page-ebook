import React from "react";
import { TARGET_AUDIENCE } from "../constants";

const TargetAudience: React.FC = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Effect */}
      <div className="absolute top-1/2 left-1/4 w-[600px] h-[600px] bg-brand-glow/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Este Ebook é Para <span className="text-gradient">Você</span>
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Não importa seu nível atual, você vai dominar a IA do jeito certo
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {TARGET_AUDIENCE.map((audience, idx) => {
            const Icon = audience.icon;
            return (
              <div
                key={idx}
                className="group glass-card p-6 rounded-2xl hover:border-brand-accent/50 transition-all hover:scale-105 hover:shadow-lg hover:shadow-brand-accent/10"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-brand-accent to-brand-glow rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Icon size={28} className="text-slate-950" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  {audience.title}
                </h3>
                <p className="text-slate-400 leading-relaxed">
                  {audience.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <p className="text-lg text-slate-300 font-medium">
            + Qualquer pessoa que queira{" "}
            <span className="text-brand-glow">dominar a IA em 2026</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default TargetAudience;
