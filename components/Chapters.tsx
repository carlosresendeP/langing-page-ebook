import React from 'react';
import { CHAPTERS } from '../constants';
import { BookOpen } from 'lucide-react';

const Chapters: React.FC = () => {
  return (
    <section id="chapters" className="py-24 bg-brand-surface/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="flex items-center gap-2 text-brand-glow font-semibold mb-2">
              <BookOpen size={20} />
              <span>O Conteúdo</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              O Que Você Vai Dominar
            </h2>
          </div>
          <p className="text-slate-400 max-w-md text-right md:text-left">
            Um manual prático, sem teoria chata. Focado em ferramentas reais que usamos no dia a dia.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CHAPTERS.map((chapter, index) => (
            <div 
              key={index} 
              className={`glass-card p-6 rounded-2xl flex flex-col border-t-4 ${
                chapter.number === 'Bonus' ? 'border-t-brand-glow bg-brand-glow/5' : 'border-t-brand-accent'
              } hover:-translate-y-1 transition-transform duration-300`}
            >
              <div className="flex justify-between items-start mb-4">
                <span className={`text-3xl font-bold ${chapter.number === 'Bonus' ? 'text-brand-glow' : 'text-slate-700'}`}>
                  {chapter.number}
                </span>
                {chapter.number === 'Bonus' && (
                  <span className="bg-brand-glow text-slate-950 text-xs font-bold px-2 py-1 rounded">
                    EXCLUSIVO
                  </span>
                )}
              </div>
              
              <h3 className="text-xl font-bold text-white mb-3">
                {chapter.title}
              </h3>
              
              <p className="text-slate-400 text-sm mb-6 flex-grow">
                {chapter.description}
              </p>

              <div className="flex flex-wrap gap-2 mt-auto">
                {chapter.tags.map(tag => (
                  <span key={tag} className="text-xs px-2 py-1 rounded bg-slate-800 text-slate-300 border border-slate-700">
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Chapters;