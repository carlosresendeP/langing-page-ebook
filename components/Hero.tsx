import React from 'react';
import { ArrowRight, Download, Sparkles } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden min-h-screen flex items-center justify-center pt-20 pb-12 px-4 sm:px-6 lg:px-8">
      {/* Background Effects matching the waves image */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
        <div className="absolute top-[10%] left-[-10%] w-[500px] h-[500px] bg-brand-accent/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-[0%] right-[-5%] w-[600px] h-[600px] bg-brand-glow/10 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center space-y-8">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card text-brand-glow text-sm font-medium animate-pulse-slow border-brand-accent/20">
          <Sparkles size={16} />
          <span>Atualizado para o cenário de 2026</span>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white leading-[1.1]">
          De Amador a <br />
          <span className="text-gradient">Orquestrador Digital</span>
        </h1>

        <p className="text-xl md:text-2xl text-slate-400 max-w-2xl mx-auto">
          Pare de receber respostas genéricas. Transforme a IA no seu "Estagiário de Elite" e construa uma máquina de automação que trabalha 24/7.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <button 
            onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
            className="group relative px-8 py-4 bg-gradient-to-r from-teal-500 to-emerald-500 rounded-lg text-slate-950 font-bold text-lg shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/40 transition-all hover:scale-105"
          >
            Quero Dominar a IA
            <ArrowRight className="inline-block ml-2 group-hover:translate-x-1 transition-transform" />
          </button>
          
          <button 
            onClick={() => document.getElementById('chapters')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-4 glass-card rounded-lg text-slate-300 font-medium hover:text-white hover:border-brand-accent/50 transition-colors"
          >
            Ver o Conteúdo
          </button>
        </div>

        <div className="pt-8 flex items-center justify-center gap-6 text-slate-500 text-sm">
          <div className="flex items-center gap-2">
            <Download size={16} className="text-brand-accent" />
            <span>Download Imediato</span>
          </div>
          <div className="w-1 h-1 bg-slate-700 rounded-full" />
          <div>+10 Prompts de Ouro Inclusos</div>
        </div>
      </div>
    </section>
  );
};

export default Hero;