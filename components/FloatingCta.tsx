import React, { useState, useEffect } from "react";
import { Zap, X } from "lucide-react";

const FloatingCta: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPercentage =
        (window.scrollY /
          (document.documentElement.scrollHeight - window.innerHeight)) *
        100;

      // Show after 30% scroll
      if (scrollPercentage > 30 && !isDismissed) {
        setIsVisible(true);
      } else if (scrollPercentage <= 30) {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isDismissed]);

  const handleDismiss = () => {
    setIsDismissed(true);
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 right-4 z-50 animate-slide-up">
      <div className="glass-card rounded-2xl p-4 border-2 border-brand-accent/30 shadow-2xl shadow-brand-accent/20 max-w-sm relative">
        {/* Dismiss Button */}
        <button
          onClick={handleDismiss}
          className="absolute -top-2 -right-2 w-6 h-6 bg-slate-800 hover:bg-slate-700 rounded-full flex items-center justify-center transition-colors"
          aria-label="Fechar"
        >
          <X size={14} className="text-slate-400" />
        </button>

        <div className="flex items-center gap-4">
          <div className="flex-1">
            <p className="text-white font-bold text-lg mb-1">Oferta Especial</p>
            <p className="text-slate-400 text-sm mb-2">
              De <span className="line-through">R$ 67,00</span> por apenas
            </p>
            <p className="text-brand-glow font-extrabold text-2xl">R$ 9,97</p>
          </div>

          <a
            href="https://pay.kiwify.com.br/cPJpY3J"
            target="_blank"
            rel="noopener noreferrer"
            className="group px-6 py-3 bg-gradient-to-r from-teal-500 to-emerald-500 rounded-lg text-gray-100 font-bold shadow-lg shadow-emerald-500/25 hover:shadow-[0_0_25px_rgba(16,185,129,0.6)] transition-all hover:scale-105 hover:brightness-110 flex items-center gap-2"
          >
            <Zap size={20} className="fill-gray-100" />
            Comprar
          </a>
        </div>

        <div className="mt-3 pt-3 border-t border-brand-accent/10">
          <p className="text-xs text-slate-400 text-center">
            ✓ Acesso imediato • ✓ Garantia de 7 dias
          </p>
        </div>
      </div>
    </div>
  );
};

export default FloatingCta;
