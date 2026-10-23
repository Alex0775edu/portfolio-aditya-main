import React from 'react';
import { GraduationCap, Calendar, MapPin, Award, CheckCircle } from 'lucide-react';
import { EDUCATION_LIST } from '../data/portfolioData';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-24 relative bg-[#070b14] overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-10 w-96 h-96 bg-cyan-600/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/50 border border-cyan-500/20 text-cyan-400 text-xs font-mono uppercase tracking-wider">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic Background</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Education <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-300">&amp; Qualifications</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Verified academic milestones and technical diploma studies in Computer Science and Engineering.
          </p>
        </div>

        {/* Education Timeline Cards */}
        <div className="max-w-4xl mx-auto relative">
          
          {/* Vertical Timeline Guide Line */}
          <div className="hidden md:block absolute left-1/2 top-4 bottom-4 w-px bg-gradient-to-b from-cyan-500/40 via-blue-500/20 to-transparent -translate-x-1/2" />

          <div className="space-y-8">
            {EDUCATION_LIST.map((item, index) => {
              const isEven = index % 2 === 0;
              return (
                <div
                  key={index}
                  className={`relative flex flex-col md:flex-row items-center ${
                    isEven ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Timeline Dot Indicator */}
                  <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-[#080d1a] border-2 border-cyan-400 items-center justify-center z-10 shadow-[0_0_15px_rgba(0,240,255,0.4)]">
                    <span className="w-2.5 h-2.5 rounded-full bg-cyan-400" />
                  </div>

                  {/* Card Container (takes half width on desktop) */}
                  <div className="w-full md:w-[calc(50%-2rem)]">
                    <div className="p-6 rounded-3xl bg-[#0b1224]/80 border border-slate-800 hover:border-cyan-500/40 hover:bg-[#0d162d] transition-all duration-300 shadow-xl group">
                      
                      {/* Top Meta Bar */}
                      <div className="flex items-center justify-between gap-2 mb-3">
                        <span className="px-3 py-1 rounded-full text-xs font-mono bg-cyan-950 text-cyan-300 border border-cyan-800/40 font-semibold">
                          {item.badge}
                        </span>

                        <span className="flex items-center gap-1.5 text-xs font-mono text-slate-400">
                          <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                          {item.period}
                        </span>
                      </div>

                      {/* Degree Title */}
                      <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                        {item.degree}
                      </h3>

                      {/* Institution */}
                      <div className="text-sm text-cyan-400/90 font-medium mt-1 flex items-center gap-1.5">
                        <Award className="w-3.5 h-3.5 flex-shrink-0" />
                        <span>{item.institution}</span>
                      </div>

                      {item.boardOrAuthority && (
                        <div className="text-xs text-slate-400 flex items-center gap-1.5 mt-1">
                          <MapPin className="w-3 h-3 text-slate-500" />
                          <span>{item.boardOrAuthority}</span>
                        </div>
                      )}

                      {/* Description */}
                      <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mt-3 pt-3 border-t border-slate-800/80">
                        {item.details}
                      </p>

                      <div className="mt-3 flex items-center gap-1.5 text-[11px] font-mono text-emerald-400">
                        <CheckCircle className="w-3 h-3" />
                        <span>Verified Resume Milestone</span>
                      </div>

                    </div>
                  </div>

                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};
