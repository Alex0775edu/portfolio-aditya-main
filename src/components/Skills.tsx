import React, { useState } from 'react';
import { 
  Code2, 
  Palette, 
  Braces, 
  Layout, 
  Smartphone, 
  Server, 
  Terminal, 
  Cpu, 
  Database, 
  Layers, 
  GitBranch, 
  FileText, 
  FileSpreadsheet, 
  Presentation, 
  Calculator, 
  Image, 
  BookOpen, 
  Film,
  Sparkles,
  CheckCircle
} from 'lucide-react';
import { TECHNICAL_SKILLS } from '../data/portfolioData';
import { GithubIcon } from './BrandIcons';

// Map icon strings to Lucide components
const iconMap: Record<string, React.ElementType> = {
  Code2,
  Palette,
  Braces,
  Layout,
  Smartphone,
  Server,
  Terminal,
  Cpu,
  Database,
  Layers,
  GitBranch,
  Github: GithubIcon,
  FileText,
  FileSpreadsheet,
  Presentation,
  Calculator,
  Image,
  BookOpen,
  Film
};

export const Skills: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('All');

  const filterTabs = [
    'All',
    'Frontend',
    'Backend & Programming',
    'Database',
    'Tools & Productivity'
  ];

  const filteredCategories = activeTab === 'All'
    ? TECHNICAL_SKILLS
    : TECHNICAL_SKILLS.filter(c => c.category === activeTab);

  return (
    <section id="skills" className="py-24 relative bg-[#060a12] overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-cyan-600/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-blue-600/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/50 border border-cyan-500/20 text-cyan-400 text-xs font-mono uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-300 to-blue-400">Skills &amp; Toolset</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Organized across full-stack development, relational database engineering, and digital productivity workflows.
          </p>
        </div>

        {/* Filter Navigation Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {filterTabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 ${
                activeTab === tab
                  ? 'bg-cyan-500 text-black font-bold shadow-[0_0_20px_rgba(0,240,255,0.3)] scale-105'
                  : 'bg-slate-900/80 text-slate-300 hover:text-white hover:bg-slate-800/80 border border-slate-800'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Categories Stack */}
        <div className="space-y-12">
          {filteredCategories.map((cat, catIdx) => (
            <div key={catIdx} className="space-y-4">
              
              {/* Category Subheader */}
              <div className="flex items-center gap-3">
                <span className="w-2.5 h-2.5 rounded-full bg-cyan-400" />
                <h3 className="text-xl font-bold text-white tracking-wide font-mono">
                  {cat.category}
                </h3>
                <div className="flex-1 h-px bg-gradient-to-r from-slate-800 to-transparent" />
                <span className="text-xs font-mono text-slate-500">
                  {cat.skills.length} competencies
                </span>
              </div>

              {/* Skills Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {cat.skills.map((skill, sIdx) => {
                  const IconComponent = iconMap[skill.icon] || Code2;
                  return (
                    <div
                      key={sIdx}
                      className="group p-5 rounded-2xl bg-slate-900/40 border border-slate-800/80 hover:border-cyan-500/40 hover:bg-slate-900/80 transition-all duration-300 hover:-translate-y-1 shadow-sm flex flex-col justify-between"
                    >
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <div className="w-10 h-10 rounded-xl bg-slate-800/90 border border-slate-700/80 flex items-center justify-center text-cyan-400 group-hover:text-cyan-300 group-hover:border-cyan-500/40 group-hover:bg-cyan-950/30 transition-all duration-200">
                            <IconComponent className="w-5 h-5" />
                          </div>
                          
                          <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono bg-cyan-950/60 text-cyan-300 border border-cyan-800/40">
                            {skill.level}
                          </span>
                        </div>

                        <div>
                          <h4 className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors">
                            {skill.name}
                          </h4>
                          <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                            {skill.description}
                          </p>
                        </div>
                      </div>

                      {/* Verified Focus indicator */}
                      <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-mono text-slate-500">
                        <span className="flex items-center gap-1.5 text-slate-400">
                          <CheckCircle className="w-3 h-3 text-emerald-400" />
                          Verified in Projects
                        </span>
                        <span className="text-slate-600">Active</span>
                      </div>
                    </div>
                  );
                })}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
