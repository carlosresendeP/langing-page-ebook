import React from 'react';
import { APP_NAME } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 border-t border-slate-900 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <div className="mb-4 text-2xl font-bold text-white tracking-tighter">
          {APP_NAME}
        </div>
        <p className="text-slate-500 text-sm mb-8">
          © {new Date().getFullYear()} Todos os direitos reservados.
          <br />
          Este material é protegido por direitos autorais.
        </p>
        <div className="flex justify-center gap-6 text-sm text-slate-600">
          <a href="#" className="hover:text-brand-accent transition-colors">Termos de Uso</a>
          <a href="#" className="hover:text-brand-accent transition-colors">Privacidade</a>
          <a href="#" className="hover:text-brand-accent transition-colors">Contato</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;