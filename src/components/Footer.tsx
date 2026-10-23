import React from 'react';
import { 
  ArrowUp, 
  ExternalLink,
  Sparkles,
  MapPin,
  Mail,
  Phone
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { 
  GithubIcon, 
  LinkedinIcon, 
  YoutubeIcon, 
  InstagramIcon, 
  FacebookIcon, 
  TwitterIcon 
} from './BrandIcons';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socials = [
    { name: "GitHub", url: "https://github.com/Alex0775edu", icon: GithubIcon },
    { name: "LinkedIn", url: "https://www.linkedin.com/in/aditya-kumar-cse/", icon: LinkedinIcon },
    { name: "YouTube", url: "https://www.youtube.com/@CodeWithAditya0775", icon: YoutubeIcon },
    { name: "Instagram", url: "https://www.instagram.com/_alex_0775_/", icon: InstagramIcon },
    { name: "Facebook", url: "https://www.facebook.com/_alex_0775_/", icon: FacebookIcon },
    { name: "X / Twitter", url: "https://x.com/AlexAditya0775", icon: TwitterIcon }
  ];

  return (
    <footer className="bg-[#04070e] border-t border-slate-800/80 text-slate-300 pt-16 pb-12 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-cyan-600/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800/80">
          
          {/* Brand & Identity (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 to-blue-600 p-[1.5px]">
                <div className="w-full h-full bg-[#080d1a] rounded-[10px] flex items-center justify-center">
                  <span className="font-mono font-extrabold text-cyan-400 text-lg">
                    A
                  </span>
                </div>
              </div>
              <div>
                <span className="text-xl font-bold tracking-tight text-white font-mono">
                  {PERSONAL_INFO.brand}
                </span>
                <span className="text-xs text-slate-400 block">
                  {PERSONAL_INFO.name}
                </span>
              </div>
            </div>

            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              Full Stack Web Developer crafting responsive websites, management systems, and entrepreneurial solutions through SkillSum Innovations.
            </p>

            <div className="space-y-1.5 text-xs font-mono text-slate-400 pt-1">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                <span>{PERSONAL_INFO.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-blue-400" />
                <span>{PERSONAL_INFO.email}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-emerald-400" />
                <span>{PERSONAL_INFO.phone}</span>
              </div>
            </div>
          </div>

          {/* Quick Navigation (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-mono uppercase tracking-wider text-white font-semibold">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <a href="#hero" className="hover:text-cyan-400 transition-colors">Home</a>
              </li>
              <li>
                <a href="#about" className="hover:text-cyan-400 transition-colors">About Aditya</a>
              </li>
              <li>
                <a href="#skills" className="hover:text-cyan-400 transition-colors">Technical Skills</a>
              </li>
              <li>
                <a href="#projects" className="hover:text-cyan-400 transition-colors">Featured Systems</a>
              </li>
              <li>
                <a href="#skillsum" className="hover:text-emerald-400 text-emerald-400/90 transition-colors flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>SkillSum Innovations</span>
                </a>
              </li>
              <li>
                <a href="#education" className="hover:text-cyan-400 transition-colors">Education Timeline</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-cyan-400 transition-colors">Contact Hub</a>
              </li>
            </ul>
          </div>

          {/* Social Profiles & SkillSum Quick Link (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-sm font-mono uppercase tracking-wider text-white font-semibold">
              Official Social Profiles
            </h4>
            <div className="grid grid-cols-2 gap-2">
              {socials.map((s, idx) => {
                const Icon = s.icon;
                return (
                  <a
                    key={idx}
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-800 text-slate-300 hover:text-cyan-400 hover:border-cyan-500/40 hover:bg-slate-800/80 transition-all flex items-center gap-2 text-xs font-mono"
                  >
                    <Icon className="w-3.5 h-3.5" />
                    <span className="truncate">{s.name}</span>
                  </a>
                );
              })}
            </div>

            <div className="pt-2">
              <a
                href="https://skillsum.in"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-mono font-bold bg-[#1b2d14] text-[#a8d5a2] border border-[#556b2f]/50 hover:bg-[#556b2f] hover:text-[#f8e6a8] transition-all w-full justify-center"
              >
                <span>Visit skillsum.in Live Company Website</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
          <div>
            &copy; {currentYear} Aditya Kumar ({PERSONAL_INFO.brand}). All rights reserved.
          </div>

          <div className="italic text-slate-400 text-center font-sans">
            “Designed with curiosity. Built with purpose.”
          </div>

          <button
            onClick={scrollToTop}
            className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-cyan-400 hover:border-cyan-500/40 transition-colors flex items-center gap-1.5"
            aria-label="Scroll back to top"
          >
            <span>Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
