import React from "react";
import { Star, Quote } from "lucide-react";
import { TESTIMONIALS } from "../constants";

const Testimonials: React.FC = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Effect */}
      <div className="absolute top-1/2 right-1/4 w-[500px] h-[500px] bg-brand-accent/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Quem Já Está <span className="text-gradient">Dominando a IA</span>
          </h2>
          <p className="text-xl text-slate-400">
            Veja os resultados de quem aplicou o conteúdo
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((testimonial, idx) => (
            <div
              key={idx}
              className="glass-card p-8 rounded-2xl hover:border-brand-accent/50 transition-all hover:scale-105 relative"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 opacity-10">
                <Quote size={48} className="text-brand-glow" />
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className="fill-brand-glow text-brand-glow"
                  />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-slate-300 leading-relaxed mb-6 relative z-10">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-brand-accent/10">
                <div className="w-12 h-12 bg-gradient-to-br from-brand-accent to-brand-glow rounded-full flex items-center justify-center">
                  <span className="text-slate-950 font-bold text-sm">
                    {testimonial.avatar}
                  </span>
                </div>
                <div>
                  <p className="text-white font-semibold">{testimonial.name}</p>
                  <p className="text-slate-400 text-sm">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-slate-400 text-sm">
            + Centenas de pessoas já transformaram sua relação com IA
          </p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
