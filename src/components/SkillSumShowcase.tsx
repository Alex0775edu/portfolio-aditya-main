import React, { useState } from 'react';
import { 
  Globe, 
  Server, 
  Cpu, 
  Video, 
  TrendingUp, 
  Bot, 
  ExternalLink, 
  ArrowLeft, 
  CheckCircle, 
  Sparkles, 
  ShieldCheck, 
  Compass, 
  Layers, 
  Code2, 
  Maximize2
} from 'lucide-react';
import { SKILLSUM_DATA } from '../data/portfolioData';

// Map icon strings to Lucide components
const serviceIcons: Record<string, React.ElementType> = {
  Globe,
  Server,
  Cpu,
  Video,
  TrendingUp,
  Bot
};

export const SkillSumShowcase: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'preview' | 'code'>('preview');
  const [iframeError, setIframeError] = useState(false);

  return (
    <section 
      id="skillsum" 
      className="py-28 relative transition-colors duration-700 bg-gradient-to-b from-[#0a120d] via-[#101e14] to-[#080d1a] border-y border-emerald-900/40 text-slate-100 overflow-hidden"
    >
      {/* SkillSum Brand Glow Accents */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-[#556b2f]/15 rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[500px] h-[500px] bg-[#a8d5a2]/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Transition Badge: Personal Portfolio -> SkillSum Innovations */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-16 pb-8 border-b border-emerald-800/30">
          <div className="flex items-center gap-3">
            <span className="px-3.5 py-1.5 rounded-full text-xs font-mono font-bold bg-[#1b2d14] text-[#a8d5a2] border border-[#556b2f]/50 flex items-center gap-2 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[#a8d5a2] animate-ping" />
              FOUNDER SHOWCASE
            </span>
            <span className="text-slate-400 text-xs font-mono">
              Aditya Kumar's Founded Technology Brand
            </span>
          </div>

          <a
            href="#hero"
            className="inline-flex items-center gap-1.5 text-xs font-mono text-slate-400 hover:text-cyan-400 transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Return to Personal Portfolio</span>
          </a>
        </div>

        {/* Standout Header: Real SkillSum Logo + Tagline */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-16">
          
          <div className="lg:col-span-8 space-y-4">
            
            {/* Logo + Brand Title Cluster */}
            <div className="flex items-center gap-4 sm:gap-6">
              <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-[#1b2d14] border-2 border-[#556b2f] p-2 flex items-center justify-center shadow-[0_0_35px_rgba(85,107,47,0.4)] flex-shrink-0">
                <img
                  src={SKILLSUM_DATA.logoUrl}
                  onError={(e) => {
                    // Fallback to logo.png if webp has any decode issue
                    (e.target as HTMLImageElement).src = SKILLSUM_DATA.logoFallback;
                  }}
                  alt="SkillSum Innovations Official Logo"
                  className="w-full h-full object-contain"
                />
              </div>

              <div>
                <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white font-sans">
                  {SKILLSUM_DATA.name}
                </h2>
                <div className="text-base sm:text-xl font-mono text-[#a8d5a2] font-semibold tracking-wide flex items-center gap-2 mt-1">
                  <span>{SKILLSUM_DATA.tagline}</span>
                  <span className="text-slate-600">•</span>
                  <span className="text-xs px-2.5 py-0.5 rounded-md bg-[#556b2f]/30 text-[#f8e6a8] border border-[#556b2f]/40 font-normal">
                    skillsum.in
                  </span>
                </div>
              </div>
            </div>

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-3xl pt-2">
              {SKILLSUM_DATA.mission}
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <div className="px-3.5 py-1.5 rounded-xl bg-[#1b2d14] border border-[#556b2f]/40 text-xs font-mono text-[#a8d5a2] flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#a8d5a2]" />
                <span>Role: {SKILLSUM_DATA.foundedRole}</span>
              </div>
              <div className="px-3.5 py-1.5 rounded-xl bg-[#1b2d14] border border-[#556b2f]/40 text-xs font-mono text-[#f8e6a8] flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-[#f8e6a8]" />
                <span>Live Operational Website</span>
              </div>
            </div>

          </div>

          {/* Action CTA Box */}
          <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-center items-start lg:items-end">
            <a
              href={SKILLSUM_DATA.url}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-2xl font-bold text-sm text-[#1b2d14] bg-gradient-to-r from-[#a8d5a2] to-[#f8e6a8] hover:from-white hover:to-[#a8d5a2] shadow-[0_0_30px_rgba(168,213,162,0.35)] transition-all duration-300 transform hover:-translate-y-0.5"
            >
              <span>Visit SkillSum Website</span>
              <ExternalLink className="w-4 h-4" />
            </a>

            <p className="text-[11px] font-mono text-slate-400 text-left lg:text-right">
              Official domain: <span className="text-[#a8d5a2]">https://skillsum.in</span>
            </p>
          </div>

        </div>

        {/* Browser Mockup / Interactive Website Showcase */}
        <div className="mb-20 rounded-3xl overflow-hidden border border-[#556b2f]/40 bg-[#0d1a10] shadow-2xl">
          
          {/* Browser Chrome Header */}
          <div className="px-5 py-3.5 bg-[#142617] border-b border-[#556b2f]/40 flex items-center justify-between flex-wrap gap-2">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
              
              <div className="ml-4 px-3.5 py-1 rounded-lg bg-[#0d1a10] border border-[#556b2f]/40 text-xs font-mono text-slate-300 flex items-center gap-2 min-w-[220px] sm:min-w-[320px]">
                <Globe className="w-3.5 h-3.5 text-[#a8d5a2]" />
                <span className="truncate">https://skillsum.in</span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={() => setActiveTab('preview')}
                className={`px-3 py-1 rounded-lg text-xs font-mono transition-colors ${
                  activeTab === 'preview'
                    ? 'bg-[#556b2f] text-white font-semibold'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Simulated Preview
              </button>
              <button
                onClick={() => setActiveTab('code')}
                className={`px-3 py-1 rounded-lg text-xs font-mono transition-colors ${
                  activeTab === 'code'
                    ? 'bg-[#556b2f] text-white font-semibold'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Brand Architecture
              </button>
              
              <a
                href="https://skillsum.in"
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 rounded-lg bg-[#0d1a10] text-[#a8d5a2] hover:text-white border border-[#556b2f]/30"
                aria-label="Open SkillSum in new tab"
              >
                <Maximize2 className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Browser Viewport Content */}
          <div className="p-6 sm:p-10 min-h-[380px] bg-gradient-to-b from-[#0f2113] to-[#0a150d] relative flex flex-col justify-center">
            {activeTab === 'preview' ? (
              <div className="space-y-8 max-w-4xl mx-auto text-center">
                
                {/* Hero Inside Mockup */}
                <div className="space-y-4">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1b2d14] text-[#a8d5a2] text-xs font-mono border border-[#556b2f]/50">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>SkillSum Innovation — Official Services</span>
                  </div>

                  <h3 className="text-2xl sm:text-4xl font-extrabold text-white">
                    Practical Software &amp; Systems. <br />
                    <span className="text-[#a8d5a2]">Engineered for Real Growth.</span>
                  </h3>

                  <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto">
                    Delivering custom websites, management software, embedded IoT hardware, digital marketing, and video production under one trusted roof.
                  </p>
                </div>

                {/* Quick Service Micro-Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-left">
                  {SKILLSUM_DATA.services.slice(0, 3).map((s) => (
                    <div key={s.id} className="p-3.5 rounded-xl bg-[#142617]/70 border border-[#556b2f]/30">
                      <div className="font-semibold text-xs text-white flex items-center gap-1.5">
                        <CheckCircle className="w-3.5 h-3.5 text-[#a8d5a2]" />
                        <span>{s.title}</span>
                      </div>
                      <p className="text-[11px] text-slate-400 mt-1 line-clamp-2">
                        {s.shortDesc}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="pt-2">
                  <a
                    href="https://skillsum.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl text-xs font-mono font-bold bg-[#556b2f] hover:bg-[#3e4f22] text-[#f8e6a8] border border-[#a8d5a2]/30 shadow-lg transition-all"
                  >
                    <span>Open Live skillsum.in in New Tab</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>

              </div>
            ) : (
              <div className="space-y-4 text-left max-w-3xl mx-auto font-mono text-xs text-slate-300">
                <div className="p-4 rounded-xl bg-[#080f09] border border-[#556b2f]/40 space-y-2">
                  <div className="text-[#a8d5a2] font-bold">/* SkillSum Brand &amp; Architecture Spec */</div>
                  <div><span className="text-[#f8e6a8]">Brand:</span> SkillSum Innovations</div>
                  <div><span className="text-[#f8e6a8]">Tagline:</span> Innovate. Build. Grow.</div>
                  <div><span className="text-[#f8e6a8]">Founder &amp; Lead Dev:</span> Aditya Kumar</div>
                  <div><span className="text-[#f8e6a8]">Primary Palette:</span> #556b2f (Forest), #a8d5a2 (Mint), #f8e6a8 (Warm Cream)</div>
                  <div><span className="text-[#f8e6a8]">Deployment:</span> HTTPS Production at skillsum.in</div>
                  <div><span className="text-[#f8e6a8]">Tech Focus:</span> Full-stack web, IoT systems, SEO &amp; business automation</div>
                </div>
              </div>
            )}
          </div>

        </div>

        {/* 6 Authentic Services Grid */}
        <div className="space-y-6 mb-20">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
              Authentic SkillSum Services
            </h3>
            <p className="text-slate-400 text-sm">
              Verified directly from the live skillsum.in portal.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SKILLSUM_DATA.services.map((service) => {
              const IconComp = serviceIcons[service.iconName] || Globe;
              return (
                <div
                  key={service.id}
                  className="group p-6 rounded-2xl bg-[#112214]/80 border border-[#556b2f]/30 hover:border-[#a8d5a2] hover:bg-[#142818] transition-all duration-300 flex flex-col justify-between shadow-lg"
                >
                  <div className="space-y-3">
                    <div className="w-12 h-12 rounded-xl bg-[#1b331f] border border-[#556b2f]/50 flex items-center justify-center text-[#a8d5a2] group-hover:scale-105 group-hover:text-[#f8e6a8] transition-transform">
                      <IconComp className="w-6 h-6" />
                    </div>

                    <h4 className="text-lg font-bold text-white group-hover:text-[#a8d5a2] transition-colors">
                      {service.title}
                    </h4>

                    <p className="text-xs sm:text-sm text-slate-300 font-medium leading-relaxed">
                      {service.shortDesc}
                    </p>

                    <p className="text-xs text-slate-400 leading-relaxed pt-1">
                      {service.fullDesc}
                    </p>
                  </div>

                  <div className="mt-5 pt-3 border-t border-[#556b2f]/20 flex flex-wrap gap-1.5">
                    {service.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2 py-0.5 rounded text-[10px] font-mono bg-[#1b331f] text-[#a8d5a2] border border-[#556b2f]/40"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Building SkillSum — Founder Journey */}
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-[#122316] to-[#0c180e] border border-[#556b2f]/40 shadow-2xl">
          <div className="max-w-3xl mb-8 space-y-2">
            <span className="text-xs font-mono uppercase tracking-wider text-[#a8d5a2]">
              Honest Founder Narrative
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
              Building SkillSum Innovations
            </h3>
            <p className="text-slate-300 text-sm leading-relaxed">
              As founder and website developer, here is the honest, ground-up journey of turning an ambition into a live technology business presence:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {SKILLSUM_DATA.founderJourney.map((item) => (
              <div
                key={item.step}
                className="p-5 rounded-2xl bg-[#0e1b10] border border-[#556b2f]/30 space-y-2"
              >
                <div className="text-2xl font-extrabold font-mono text-[#a8d5a2]">
                  {item.step}
                </div>
                <h4 className="text-sm font-bold text-white">
                  {item.title}
                </h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 pt-6 border-t border-[#556b2f]/30 flex flex-wrap items-center justify-between gap-4">
            <div className="text-xs font-mono text-slate-400">
              Verified on official live platform: <span className="text-[#a8d5a2]">skillsum.in</span>
            </div>

            <a
              href="https://skillsum.in"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-mono font-bold bg-[#a8d5a2] text-[#1b2d14] hover:bg-[#f8e6a8] transition-colors"
            >
              <span>Explore skillsum.in</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
