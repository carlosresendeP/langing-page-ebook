import React from 'react';
import { TOOLS_LOGOS } from '../constants';

const Tools: React.FC = () => {
  return (
    <section className="py-12 border-y border-slate-800 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4">
        <p className="text-center text-slate-500 text-sm mb-8 uppercase tracking-widest">
          Ferramentas Essenciais Abordadas
        </p>
        <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
          {TOOLS_LOGOS.map((tool) => (
            <span key={tool} className="text-xl md:text-2xl font-bold text-slate-300 select-none">
              {tool}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tools;