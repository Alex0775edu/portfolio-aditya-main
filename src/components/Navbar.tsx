import React, { useState, useEffect } from 'react';
import { Menu, X, Download, ExternalLink, Sparkles, Volume2, VolumeX } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { sounds } from '../utils/soundEffects';

interface NavbarProps {
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    setIsMuted(sounds.getMuted());
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleSound = () => {
    const nextMuted = sounds.toggleMute();
    setIsMuted(nextMuted);
  };

  const navLinks = [
    { label: 'Home', href: '#hero', id: 'hero' },
    { label: 'About', href: '#about', id: 'about' },
    { label: 'Workspace', href: '#workspace', id: 'workspace' },
    { label: 'Skills', href: '#skills', id: 'skills' },
    { label: 'Projects', href: '#projects', id: 'projects' },
    { label: 'SkillSum', href: '#skillsum', id: 'skillsum', highlight: true },
    { label: 'Timeline', href: '#education', id: 'education' },
    { label: 'Contact', href: '#contact', id: 'contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'py-3 bg-[#080d1a]/85 backdrop-blur-xl border-b border-cyan-500/15 shadow-[0_10px_30px_rgba(0,0,0,0.5)]'
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <a
            href="#hero"
            onClick={() => sounds.playClick()}
            className="group flex items-center gap-3 focus:outline-none"
            aria-label="Aditya - Full Stack Developer Portfolio"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 via-blue-600 to-teal-400 p-[1.5px] shadow-[0_0_20px_rgba(0,240,255,0.3)] transition-transform duration-300 group-hover:scale-105">
              <div className="w-full h-full bg-[#080d1a] rounded-[10px] flex items-center justify-center">
                <span className="font-mono font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400 text-lg">
                  A
                </span>
              </div>
            </div>
            <div className="flex flex-col text-left">
              <span className="font-bold tracking-tight text-white group-hover:text-cyan-400 transition-colors text-lg flex items-center gap-1.5 font-mono">
                Aditya
                <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              </span>
              <span className="text-[11px] text-slate-400 font-sans tracking-wide">
                Full Stack Developer
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center gap-1 bg-slate-900/60 p-1.5 rounded-full border border-slate-800/80 backdrop-blur-md">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={() => sounds.playClick()}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-mono font-medium transition-all duration-200 relative ${
                    link.highlight
                      ? isActive
                        ? 'bg-emerald-600/30 text-emerald-300 border border-emerald-500/40 shadow-[0_0_15px_rgba(16,185,129,0.3)]'
                        : 'text-emerald-400 hover:text-emerald-300 hover:bg-emerald-950/40'
                      : isActive
                      ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 shadow-[0_0_15px_rgba(0,240,255,0.2)]'
                      : 'text-slate-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {link.highlight && (
                    <Sparkles className="w-3 h-3 inline mr-1 text-emerald-400 animate-pulse" />
                  )}
                  {link.label}
                </a>
              );
            })}
          </nav>

          {/* Actions & Sound Toggle & Resume Button */}
          <div className="hidden sm:flex items-center gap-2.5">
            {/* Optional Sound Mute / Unmute Button */}
            <button
              onClick={toggleSound}
              className={`p-2 rounded-xl border text-xs font-mono flex items-center gap-1.5 transition-all ${
                isMuted
                  ? 'bg-slate-900/70 border-slate-800 text-slate-400 hover:text-white'
                  : 'bg-cyan-950/80 border-cyan-500/40 text-cyan-300 shadow-[0_0_15px_rgba(0,240,255,0.2)]'
              }`}
              title={isMuted ? 'Unmute Sound Effects' : 'Mute Sound Effects'}
              aria-label={isMuted ? 'Sound effects disabled. Click to enable' : 'Sound effects enabled. Click to mute'}
            >
              {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4 text-cyan-400 animate-pulse" />}
              <span className="text-[11px] hidden md:inline">{isMuted ? 'SFX Off' : 'SFX On'}</span>
            </button>

            <a
              href={PERSONAL_INFO.resumePath}
              download="Aditya_Kumar_Resume.pdf"
              onClick={() => sounds.playClick()}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-mono font-semibold tracking-wide text-cyan-300 bg-cyan-950/40 border border-cyan-500/30 hover:bg-cyan-500/20 hover:border-cyan-400 transition-all shadow-[0_0_15px_rgba(0,240,255,0.1)] active:scale-95"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Resume PDF</span>
            </a>

            <a
              href="https://skillsum.in"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => sounds.playClick()}
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold text-emerald-300 bg-emerald-950/50 border border-emerald-500/30 hover:bg-emerald-900/60 transition-all"
            >
              <span>skillsum.in</span>
              <ExternalLink className="w-3 h-3 text-emerald-400" />
            </a>
          </div>

          {/* Mobile Actions Toggle Button */}
          <div className="flex items-center gap-2 xl:hidden">
            <button
              onClick={toggleSound}
              className={`p-2 rounded-lg border ${
                isMuted
                  ? 'bg-slate-900 border-slate-800 text-slate-400'
                  : 'bg-cyan-950 border-cyan-500/40 text-cyan-300'
              }`}
              aria-label="Toggle Sound Effects"
            >
              {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
            </button>

            <a
              href={PERSONAL_INFO.resumePath}
              download="Aditya_Kumar_Resume.pdf"
              className="p-2 rounded-lg text-cyan-400 bg-slate-900 border border-slate-800"
              aria-label="Download Resume"
            >
              <Download className="w-4 h-4" />
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl bg-slate-900/80 border border-slate-700/60 text-slate-200 hover:text-cyan-400 focus:outline-none"
              aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden fixed inset-x-0 top-[65px] bg-[#080d1a]/95 backdrop-blur-2xl border-b border-slate-800 p-6 shadow-2xl transition-all">
          <nav className="flex flex-col gap-2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={() => {
                    sounds.playClick();
                    setMobileMenuOpen(false);
                  }}
                  className={`px-4 py-2.5 rounded-xl text-sm font-medium flex items-center justify-between ${
                    isActive
                      ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30'
                      : link.highlight
                      ? 'bg-emerald-950/40 text-emerald-400 border border-emerald-500/20'
                      : 'text-slate-300 hover:bg-white/5'
                  }`}
                >
                  <span className="flex items-center gap-2">
                    {link.highlight && <Sparkles className="w-4 h-4 text-emerald-400" />}
                    {link.label}
                  </span>
                  <span className="text-xs font-mono text-slate-500">#{link.id}</span>
                </a>
              );
            })}
            <div className="pt-4 border-t border-slate-800 flex flex-col gap-2.5 mt-2">
              <a
                href={PERSONAL_INFO.resumePath}
                download="Aditya_Kumar_Resume.pdf"
                className="w-full py-2.5 rounded-xl flex items-center justify-center gap-2 font-mono text-xs bg-gradient-to-r from-cyan-500 to-blue-600 text-black font-bold shadow-lg shadow-cyan-500/25"
              >
                <Download className="w-4 h-4" />
                Download Aditya's Resume PDF
              </a>
              <a
                href="https://skillsum.in"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 rounded-xl flex items-center justify-center gap-2 text-xs bg-emerald-950 text-emerald-300 border border-emerald-500/40"
              >
                <span>Visit SkillSum Innovations (skillsum.in)</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
