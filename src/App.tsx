import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { DeveloperWorkspace } from './components/DeveloperWorkspace';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { SkillSumShowcase } from './components/SkillSumShowcase';
import { Timeline } from './components/Timeline';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { CustomCursor } from './components/CustomCursor';
import { PortfolioGuide } from './components/PortfolioGuide';
import { MessageCircle } from 'lucide-react';
import { PERSONAL_INFO } from './data/portfolioData';
import { sounds } from './utils/soundEffects';

export const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('hero');
  const [isLoading, setIsLoading] = useState<boolean>(true);

  // Initial clean loader
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 400);
    return () => clearTimeout(timer);
  }, []);

  // Section Observer for Active Nav Highlight
  useEffect(() => {
    const sections = ['hero', 'about', 'workspace', 'skills', 'projects', 'skillsum', 'education', 'contact'];
    
    const handleScroll = () => {
      const scrollY = window.scrollY + 200;
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollY >= top && scrollY < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#060a12] text-slate-100 selection:bg-cyan-500/30 selection:text-cyan-200 font-sans relative">
      
      {/* Custom glowing cursor */}
      <CustomCursor />

      {/* Sleek Initial Preloader */}
      {isLoading && (
        <div className="fixed inset-0 z-[10000] bg-[#060a12] flex flex-col items-center justify-center transition-opacity duration-300">
          <div className="relative w-16 h-16 flex items-center justify-center">
            <div className="absolute inset-0 rounded-2xl border-2 border-cyan-500/40 animate-spin" />
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-400 to-blue-500 flex items-center justify-center font-mono font-bold text-black text-xl">
              A
            </div>
          </div>
          <div className="mt-4 font-mono text-xs text-cyan-400 tracking-widest uppercase">
            Initialising AaDiTeCh Core...
          </div>
        </div>
      )}

      {/* Main Navbar with Audio Controller */}
      <Navbar activeSection={activeSection} />

      {/* Main Content Sections */}
      <main>
        <Hero />
        <About />
        <DeveloperWorkspace />
        <Skills />
        <Projects />
        <SkillSumShowcase />
        <Timeline />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Portfolio Guide Companion (Bottom Left) */}
      <PortfolioGuide />

      {/* Floating WhatsApp Action Pill (Bottom Right) */}
      <a
        href={PERSONAL_INFO.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => sounds.playClick()}
        className="fixed bottom-6 right-6 z-40 p-3.5 rounded-2xl bg-emerald-500 hover:bg-emerald-400 text-black shadow-[0_0_25px_rgba(16,185,129,0.4)] transition-all duration-300 transform hover:scale-110 active:scale-95 flex items-center justify-center group"
        aria-label="Direct Chat with Aditya Kumar on WhatsApp"
      >
        <MessageCircle className="w-6 h-6 fill-current" />
        <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-300 text-xs font-mono font-bold text-black group-hover:ml-2">
          Chat on WhatsApp
        </span>
      </a>

    </div>
  );
};

export default App;
