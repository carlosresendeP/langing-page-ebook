import React, { useState, useEffect } from "react";
import { Check, ShieldCheck, Zap, Clock } from "lucide-react";

const CountdownTimer: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 23,
    minutes: 59,
    seconds: 59,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        let { hours, minutes, seconds } = prev;

        if (seconds > 0) {
          seconds--;
        } else if (minutes > 0) {
          minutes--;
          seconds = 59;
        } else if (hours > 0) {
          hours--;
          minutes = 59;
          seconds = 59;
        } else {
          // Reset to 24 hours
          hours = 23;
          minutes = 59;
          seconds = 59;
        }

        return { hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const pad = (num: number) => String(num).padStart(2, "0");

  return (
    <div className="flex items-center justify-center gap-2 mb-6">
      <Clock size={16} className="text-brand-glow animate-pulse" />
      <div className="flex gap-2 text-white font-mono">
        <div className="bg-brand-surface/80 px-3 py-2 rounded-lg border border-brand-accent/30">
          <span className="text-2xl font-bold">{pad(timeLeft.hours)}</span>
          <span className="text-xs text-slate-400 ml-1">h</span>
        </div>
        <span className="text-2xl font-bold text-brand-accent">:</span>
        <div className="bg-brand-surface/80 px-3 py-2 rounded-lg border border-brand-accent/30">
          <span className="text-2xl font-bold">{pad(timeLeft.minutes)}</span>
          <span className="text-xs text-slate-400 ml-1">m</span>
        </div>
        <span className="text-2xl font-bold text-brand-accent">:</span>
        <div className="bg-brand-surface/80 px-3 py-2 rounded-lg border border-brand-accent/30">
          <span className="text-2xl font-bold">{pad(timeLeft.seconds)}</span>
          <span className="text-xs text-slate-400 ml-1">s</span>
        </div>
      </div>
    </div>
  );
};

const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-24 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-accent/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Invista no Seu Futuro com IA
          </h2>
          <p className="text-xl text-slate-400">
            Oferta especial por tempo limitado
          </p>
        </div>

        <div className="glass-card rounded-3xl overflow-hidden border border-brand-accent/30 shadow-2xl shadow-brand-accent/10">
          <div className="grid md:grid-cols-2">
            <div className="p-8 md:p-12 bg-brand-surface/80">
              <h3 className="text-2xl font-bold text-white mb-6">
                Tudo o que você recebe:
              </h3>
              <ul className="space-y-4">
                {[
                  "eBook Completo (10 Capítulos + Extras)",
                  "Fórmula de 4 Ingredientes para Prompts",
                  "Plano de 7 Dias Para Dominar IA",
                  "Técnicas Avançadas de Prompt Engineering",
                  "Casos de Sucesso Reais",
                  "Ecossistema Completo de Ferramentas",
                  "Garantia de 7 Dias",
                  "Acesso Imediato em PDF",
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
                  🔥 BEST SELLER
                </div>
              </div>

              <CountdownTimer />

              <p className="text-slate-400 text-lg mb-2 line-through decoration-slate-500 decoration-2">
                De R$ 67,00
              </p>
              <div className="text-6xl font-extrabold text-white mb-2 tracking-tight">
                R$ 9
                <span className="text-3xl text-slate-400 font-bold">,97</span>
              </div>
              <p className="text-brand-highlight text-sm mb-8 font-medium bg-brand-accent/10 px-3 py-1 rounded-full border border-brand-accent/20">
                85% OFF - Preço de lançamento
              </p>

              <a
                href="https://pay.kiwify.com.br/cPJpY3J"
                target="_blank"
                rel="noopener noreferrer"
                className="group w-full py-4 bg-brand-glow hover:bg-emerald-400 text-slate-950 font-bold text-xl rounded-lg shadow-lg shadow-emerald-500/25 hover:shadow-[0_0_35px_rgba(16,185,129,0.7)] transition-all transform hover:scale-105 hover:brightness-110 mb-6 flex items-center justify-center gap-2"
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
                <span className="text-brand-glow font-medium">
                  ✓ Garantia de 7 dias ou seu dinheiro de volta
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
