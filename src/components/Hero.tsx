import React from 'react';
import { ArrowRight, Sparkles, Mail, Phone, MapPin, ChevronDown } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Hero3D, OrbitalNodeData } from './Hero3D';
import { GithubIcon, LinkedinIcon } from './BrandIcons';
import { sounds } from '../utils/soundEffects';

export const Hero: React.FC = () => {
  const handleSelectNode = (node: OrbitalNodeData) => {
    sounds.playChime();
    const targetElement = document.querySelector(node.linkSection);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden"
    >
      {/* Dynamic Background Gradients and Light Orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-cyan-600/15 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-blue-600/15 rounded-full blur-[140px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-600/5 rounded-full blur-[160px]" />

        {/* Ambient Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(#00f0ff 1px, transparent 1px), linear-gradient(90deg, #00f0ff 1px, transparent 1px)`,
            backgroundSize: '48px 48px'
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Text & CTAs (7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-6 text-left">
            
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-slate-900/80 border border-cyan-500/30 text-cyan-300 text-xs font-mono w-fit backdrop-blur-md shadow-[0_0_20px_rgba(0,240,255,0.15)] animate-fade-in">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Full Stack Web Developer &amp; Tech Entrepreneur</span>
            </div>

            {/* Main Heading */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-6xl xl:text-7xl font-extrabold tracking-tight text-white leading-[1.1]">
                Hi, I'm <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-300 to-blue-400">
                  Aditya Kumar
                </span>
                <span className="text-cyan-400">.</span>
              </h1>

              {/* Supporting Headline */}
              <div className="text-lg sm:text-2xl font-semibold text-slate-300 font-sans tracking-wide flex flex-wrap items-center gap-2 pt-2">
                <span className="text-cyan-300">Full Stack Web Developer</span>
                <span className="text-slate-600">|</span>
                <span className="text-emerald-400 font-medium flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4 text-emerald-400 inline" />
                  Founder of SkillSum Innovations
                </span>
              </div>
            </div>

            {/* Supporting Copy */}
            <p className="text-base sm:text-lg text-slate-400 font-normal leading-relaxed max-w-2xl border-l-2 border-cyan-500/40 pl-4 py-1 italic bg-cyan-950/10 rounded-r-lg">
              {PERSONAL_INFO.tagline}
            </p>

            {/* Location & Quick Info */}
            <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-slate-400 pt-1">
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                {PERSONAL_INFO.location}
              </span>
              <span className="text-slate-700">•</span>
              <span className="flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-blue-400" />
                {PERSONAL_INFO.email}
              </span>
              <span className="text-slate-700">•</span>
              <span className="flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5 text-emerald-400" />
                {PERSONAL_INFO.phone}
              </span>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              {/* Explore My Work */}
              <a
                href="#projects"
                onClick={() => sounds.playClick()}
                className="group inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl font-medium text-sm text-slate-950 bg-gradient-to-r from-cyan-400 to-teal-400 hover:from-cyan-300 hover:to-teal-300 shadow-[0_0_25px_rgba(0,240,255,0.35)] transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0 font-sans font-bold"
              >
                <span>Explore My Work</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>

              {/* Meet SkillSum */}
              <a
                href="#skillsum"
                onClick={() => sounds.playClick()}
                className="group inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl font-medium text-sm text-emerald-300 bg-emerald-950/60 border border-emerald-500/40 hover:bg-emerald-900/60 hover:border-emerald-400 shadow-[0_0_20px_rgba(16,185,129,0.2)] transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <Sparkles className="w-4 h-4 text-emerald-400 transition-transform group-hover:rotate-12" />
                <span>Meet SkillSum</span>
              </a>

              {/* Contact Me */}
              <a
                href="#contact"
                onClick={() => sounds.playClick()}
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl font-medium text-sm text-slate-300 bg-slate-900/70 border border-slate-700/80 hover:text-white hover:border-slate-500 transition-all duration-200"
              >
                <span>Contact Me</span>
              </a>
            </div>

            {/* Social & Verified Badge Bar */}
            <div className="pt-4 flex items-center gap-6">
              <span className="text-xs uppercase tracking-wider font-mono text-slate-500">
                Connect:
              </span>
              <div className="flex items-center gap-3">
                <a
                  href="https://github.com/Alex0775edu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-800 text-slate-400 hover:text-cyan-400 hover:border-cyan-500/40 hover:shadow-[0_0_15px_rgba(0,240,255,0.2)] transition-all"
                  aria-label="Aditya Kumar GitHub"
                >
                  <GithubIcon className="w-4 h-4" />
                </a>
                <a
                  href="https://www.linkedin.com/in/aditya-kumar-cse/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-800 text-slate-400 hover:text-blue-400 hover:border-blue-500/40 hover:shadow-[0_0_15px_rgba(59,130,246,0.2)] transition-all"
                  aria-label="Aditya Kumar LinkedIn"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </a>
              </div>

              {/* Verified Founder Badge */}
              <div className="hidden sm:flex items-center gap-2 pl-4 border-l border-slate-800 text-xs font-mono text-emerald-400">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                <span>Verified Founder • skillsum.in</span>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive 3D Sphere & Real Portrait Badge (5 cols) */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            
            {/* 3D Centerpiece */}
            <div className="w-full max-w-[480px] aspect-square relative z-10 flex items-center justify-center">
              <Hero3D onSelectNode={handleSelectNode} />

              {/* Floating Real Photo Badge */}
              <div className="absolute -bottom-4 -left-4 sm:bottom-2 sm:left-2 z-20 p-3 rounded-2xl bg-[#0b1329]/90 border border-cyan-500/30 backdrop-blur-xl shadow-2xl flex items-center gap-3 max-w-[260px] animate-fade-in group hover:border-cyan-400 transition-colors">
                <div className="relative w-14 h-14 rounded-xl overflow-hidden border-2 border-cyan-400/60 flex-shrink-0 shadow-md">
                  <img
                    src={PERSONAL_INFO.profileImage}
                    alt="Aditya Kumar - Full Stack Web Developer & Founder"
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
                    loading="eager"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                </div>
                <div className="flex flex-col">
                  <span className="font-bold text-white text-xs tracking-tight">
                    Aditya Kumar
                  </span>
                  <span className="text-[10px] text-cyan-300 font-mono">
                    Founder @ SkillSum
                  </span>
                  <span className="text-[9px] text-slate-400">
                    Ballia, U.P., India
                  </span>
                </div>
              </div>

              {/* Floating Tech Orbit Tag */}
              <div className="absolute -top-3 -right-2 sm:top-4 sm:right-0 z-20 px-3.5 py-1.5 rounded-xl bg-slate-900/90 border border-slate-700/60 backdrop-blur-md shadow-lg text-[11px] font-mono text-cyan-400 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-cyan-400" />
                <span>Three.js • Interactive 3D</span>
              </div>
            </div>

          </div>

        </div>

        {/* Scroll Indicator */}
        <div className="mt-16 flex flex-col items-center justify-center text-slate-500 hover:text-cyan-400 transition-colors">
          <a
            href="#about"
            className="flex flex-col items-center gap-2 group text-xs font-mono uppercase tracking-widest"
            aria-label="Scroll to About section"
          >
            <span>Scroll to explore</span>
            <ChevronDown className="w-4 h-4 animate-bounce text-cyan-400" />
          </a>
        </div>
      </div>
    </section>
  );
};
