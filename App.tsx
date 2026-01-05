import React from 'react';
import Hero from './components/Hero';
import Framework from './components/Framework';
import Chapters from './components/Chapters';
import Pricing from './components/Pricing';
import Faq from './components/Faq';
import Footer from './components/Footer';
import Tools from './components/Tools';
import BottomCta from './components/BottomCta';

function App() {
  return (
    <div className="min-h-screen bg-brand-dark font-sans selection:bg-brand-accent selection:text-brand-dark">
      {/* Navbar Overlay (Simple) */}
      <nav className="absolute top-0 w-full z-50 p-6 flex justify-between items-center max-w-7xl left-1/2 -translate-x-1/2">
        <div className="text-xl font-bold text-white tracking-tighter">
          IA MASTER<span className="text-brand-glow">2026</span>
        </div>
        <button 
          onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
          className="hidden sm:block px-5 py-2 glass-card rounded-full text-sm font-medium text-white hover:bg-brand-accent/10 hover:text-brand-accent transition-all"
        >
          Comprar Agora
        </button>
      </nav>

      <main>
        <Hero />
        <Tools />
        <Framework />
        <div className="relative">
             {/* Section Divider Gradient */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-brand-accent/30 to-transparent" />
            <Chapters />
        </div>
        <Pricing />
        <Faq />
        <BottomCta />
      </main>

      <Footer />
    </div>
  );
}

export default App;