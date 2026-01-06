import React from "react";
import { ArrowRight } from "lucide-react";

const BottomCta: React.FC = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-brand-accent/5"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-brand-dark via-transparent to-brand-dark"></div>

      <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
          Você vai deixar passar por <br />
          <span className="text-brand-glow">menos de um café?</span>
        </h2>

        <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto">
          O conhecimento para dominar a IA em 2026 custa apenas{" "}
          <strong>R$ 9,97</strong> hoje. O preço vai subir em breve.
        </p>

        <button
          onClick={() =>
            document
              .getElementById("pricing")
              ?.scrollIntoView({ behavior: "smooth" })
          }
          className="inline-flex items-center gap-2 px-10 py-5 bg-white text-brand-dark font-extrabold text-xl rounded-full hover:bg-brand-glow hover:text-slate-950 hover:shadow-[0_0_40px_rgba(52,211,153,0.8)] transition-all hover:scale-105 hover:brightness-110 shadow-xl shadow-white/5"
        >
          Quero Meu Acesso Agora
          <ArrowRight className="w-6 h-6" />
        </button>

        <p className="mt-6 text-sm text-slate-500">
          Pagamento único • Acesso Vitalício • Garantia de 7 dias
        </p>
      </div>
    </section>
  );
};

export default BottomCta;
