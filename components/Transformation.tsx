import React from "react";
import { X, Check, ArrowRight } from "lucide-react";
import { TRANSFORMATIONS } from "../constants";

const Transformation: React.FC = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-brand-accent/30 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-brand-accent/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Sua Transformação com IA
          </h2>
          <p className="text-xl text-slate-400">
            Do amador ao orquestrador digital
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* BEFORE */}
          <div className="glass-card p-8 rounded-2xl border-red-500/20 bg-red-950/10">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-red-500/20 rounded-xl flex items-center justify-center">
                <X size={24} className="text-red-400" />
              </div>
              <h3 className="text-2xl font-bold text-white">Antes</h3>
            </div>
            <ul className="space-y-4">
              {TRANSFORMATIONS.before.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-slate-300">
                  <X size={20} className="text-red-400 mt-1 flex-shrink-0" />
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* AFTER */}
          <div className="glass-card p-8 rounded-2xl border-brand-accent/30 bg-brand-accent/5 relative">
            <div className="absolute -left-4 top-1/2 -translate-y-1/2 hidden md:block">
              <div className="w-8 h-8 bg-brand-glow rounded-full flex items-center justify-center animate-pulse">
                <ArrowRight size={20} className="text-slate-950" />
              </div>
            </div>

            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-brand-accent to-brand-glow rounded-xl flex items-center justify-center">
                <Check size={24} className="text-slate-950" />
              </div>
              <h3 className="text-2xl font-bold text-white">Depois</h3>
            </div>
            <ul className="space-y-4">
              {TRANSFORMATIONS.after.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-slate-300">
                  <Check
                    size={20}
                    className="text-brand-glow mt-1 flex-shrink-0"
                  />
                  <span className="leading-relaxed font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 text-center">
          <button
            onClick={() =>
              document
                .getElementById("pricing")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="group px-8 py-4 bg-gradient-to-r from-teal-500 to-emerald-500 rounded-lg text-gray-100 font-bold text-lg shadow-lg shadow-emerald-500/20 hover:shadow-[0_0_30px_rgba(16,185,129,0.6)] transition-all hover:scale-105 hover:brightness-110"
          >
            Quero Essa Transformação
            <ArrowRight className="inline-block ml-2 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Transformation;
