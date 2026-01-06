import React from "react";
import { ArrowRight, Download, Sparkles, Users } from "lucide-react";

const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden min-h-screen flex items-center justify-center pt-20 pb-12 px-4 sm:px-6 lg:px-8">
      {/* Background Effects matching the waves image */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
        <div className="absolute top-[10%] left-[-10%] w-[500px] h-[500px] bg-brand-accent/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-[0%] right-[-5%] w-[600px] h-[600px] bg-brand-glow/10 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="text-center lg:text-left space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card text-brand-glow text-sm font-medium animate-pulse-slow border-brand-accent/20">
              <Sparkles size={16} />
              <span>Atualizado para o cenário de 2026</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white leading-[1.1]">
              IA Sem Enrolação: <br />
              <span className="text-gradient">Aprenda do Jeito Certo</span>
            </h1>

            <p className="text-xl md:text-2xl text-slate-400 max-w-2xl">
              A IA não vai substituir você. Mas sabe quem vai? Alguém que sabe
              usar IA melhor do que você. Aprenda a fazer as perguntas certas e
              domine a tecnologia que está mudando tudo.
            </p>

            {/* Social Proof */}
            {/* <div className="flex items-center gap-3 justify-center lg:justify-start">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full bg-gradient-to-br from-brand-accent to-brand-glow border-2 border-brand-dark flex items-center justify-center"
                  >
                    <Users size={16} className="text-slate-950" />
                  </div>
                ))}
              </div>
              <p className="text-slate-400 text-sm">
                <span className="text-brand-glow font-bold">+500 pessoas</span>{" "}
                já dominaram a IA
              </p>
            </div> */}

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
              <button
                onClick={() =>
                  document
                    .getElementById("pricing")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="group relative px-8 py-4 bg-gradient-to-r from-teal-500 to-emerald-500 rounded-lg text-gray-100 font-bold text-lg shadow-lg shadow-emerald-500/20 hover:shadow-[0_0_30px_rgba(16,185,129,0.6)] hover:shadow-emerald-400 transition-all hover:scale-105 hover:brightness-110"
              >
                Quero Dominar a IA
                <ArrowRight className="inline-block ml-2 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() =>
                  document
                    .getElementById("chapters")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="px-8 py-4 glass-card rounded-lg text-slate-300 font-medium hover:text-white hover:border-brand-accent/50 hover:shadow-[0_0_20px_rgba(20,184,166,0.4)] transition-all hover:scale-105"
              >
                Ver o Conteúdo
              </button>
            </div>

            <div className="pt-8 flex items-center justify-center lg:justify-start gap-6 text-slate-500 text-sm">
              <div className="flex items-center gap-2">
                <Download size={16} className="text-brand-accent" />
                <span>Download Imediato</span>
              </div>
              <div className="w-1 h-1 bg-slate-700 rounded-full" />
              <div>+10 Prompts de Ouro Inclusos</div>
              <div className="w-1 h-1 bg-slate-700 rounded-full" />
              <div className="text-brand-glow font-medium">
                Garantia de 7 dias
              </div>
            </div>
          </div>

          {/* Right Column - Ebook Mockup */}
          <div className="relative">
            <div className="relative z-10">
              <img
                src="/ebook_mockup_3d_1767700953775.png"
                alt="IA Sem Enrolação - Ebook 3D Mockup"
                className="w-full max-w-md mx-auto drop-shadow-2xl animate-float"
              />
            </div>
            {/* Glow effect behind ebook */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-brand-glow/20 rounded-full blur-[100px] -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
