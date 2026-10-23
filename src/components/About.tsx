import React from 'react';
import { 
  Code2, 
  Database, 
  Layout, 
  Lightbulb, 
  Rocket, 
  Briefcase, 
  CheckCircle2, 
  MapPin, 
  Mail, 
  Download,
  GraduationCap
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const About: React.FC = () => {
  const highlights = [
    {
      title: "Full Stack Web Development",
      description: "Developing responsive frontend interfaces connected to reliable backend logic and structured MySQL databases.",
      icon: Code2,
      color: "from-cyan-500/20 to-blue-500/20 text-cyan-400 border-cyan-500/30"
    },
    {
      title: "Responsive Web Design",
      description: "Creating accessible, fluid layouts engineered for peak usability across smartphones, tablets, and desktop workstations.",
      icon: Layout,
      color: "from-teal-500/20 to-emerald-500/20 text-teal-400 border-teal-500/30"
    },
    {
      title: "Database Management & Systems",
      description: "Architecting normalized database schemas, querying relational data with MySQL, and building admin dashboards.",
      icon: Database,
      color: "from-blue-500/20 to-indigo-500/20 text-blue-400 border-blue-500/30"
    },
    {
      title: "Concept-to-Deployment Delivery",
      description: "Translating wireframes and requirements into functional software, from local setup to live web production.",
      icon: Rocket,
      color: "from-purple-500/20 to-pink-500/20 text-purple-400 border-purple-500/30"
    },
    {
      title: "Entrepreneurial Leadership",
      description: "Leading SkillSum Innovations to deliver unified digital services including web platforms, IoT, and digital media.",
      icon: Briefcase,
      color: "from-emerald-500/20 to-teal-500/20 text-emerald-400 border-emerald-500/30"
    },
    {
      title: "Pragmatic Problem Solving",
      description: "Focusing on tangible business problems, user-centered workflows, and maintainable, clean code practices.",
      icon: Lightbulb,
      color: "from-amber-500/20 to-orange-500/20 text-amber-400 border-amber-500/30"
    }
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-[#070b14]">
      {/* Decorative background glow */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-cyan-500/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-emerald-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/40 border border-cyan-500/20 text-cyan-400 text-xs font-mono uppercase tracking-wider">
            <span>Identity &amp; Approach</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-300">Aditya Kumar</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            A developer combining full-stack web engineering with entrepreneurial initiative.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          
          {/* Left Column: Authentic Photo Showcase & Quick Bio Badges (5 cols) */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="relative group max-w-sm w-full">
              
              {/* Outer Glowing Border Frame */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-cyan-500 via-teal-500 to-blue-600 opacity-30 group-hover:opacity-75 blur transition duration-500" />
              
              {/* Image Container */}
              <div className="relative rounded-2xl overflow-hidden bg-slate-900 border border-slate-700/80 shadow-2xl">
                <img
                  src={PERSONAL_INFO.profileImage}
                  alt="Aditya Kumar - Full Stack Developer and Founder"
                  className="w-full h-auto max-h-[460px] object-cover object-top filter brightness-95 contrast-105 group-hover:scale-[1.02] transition-transform duration-500"
                  loading="lazy"
                />
                
                {/* Overlay Badge at Bottom */}
                <div className="absolute inset-x-0 bottom-0 p-5 bg-gradient-to-t from-black/95 via-black/70 to-transparent flex flex-col gap-1">
                  <div className="flex items-center justify-between">
                    <span className="text-white font-bold text-lg font-mono">
                      Aditya Kumar
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                      Founder
                    </span>
                  </div>
                  <span className="text-xs text-cyan-300 font-sans">
                    SkillSum Innovations • AaDiTeCh
                  </span>
                  <div className="flex items-center gap-1.5 text-[11px] text-slate-300 pt-1">
                    <MapPin className="w-3 h-3 text-cyan-400" />
                    <span>Ballia, Uttar Pradesh, India</span>
                  </div>
                </div>
              </div>

              {/* Verified Student / Developer Tag */}
              <div className="mt-4 p-3.5 rounded-xl bg-slate-900/60 border border-slate-800 text-xs font-mono text-slate-300 flex items-center justify-between">
                <span className="flex items-center gap-2">
                  <GraduationCap className="w-4 h-4 text-cyan-400" />
                  <span>Mahamaya Polytechnic (CSE)</span>
                </span>
                <span className="text-emerald-400 font-semibold">Active</span>
              </div>
            </div>
          </div>

          {/* Right Column: Bio Narrative & Verified Facts (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-4 text-slate-300 leading-relaxed text-base sm:text-lg">
              <p>
                {PERSONAL_INFO.bioParagraph1}
              </p>
              <p className="text-slate-400 text-base">
                {PERSONAL_INFO.bioParagraph2}
              </p>
            </div>

            {/* Verified Quick Stats / Credibility Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-slate-900/70 border border-slate-800 backdrop-blur-sm">
                <div className="text-2xl font-extrabold text-cyan-400 font-mono">
                  4+
                </div>
                <div className="text-xs text-slate-400 font-sans mt-1">
                  Verified Systems Built
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/70 border border-slate-800 backdrop-blur-sm">
                <div className="text-2xl font-extrabold text-emerald-400 font-mono">
                  skillsum.in
                </div>
                <div className="text-xs text-slate-400 font-sans mt-1">
                  Live Founded Brand
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/70 border border-slate-800 backdrop-blur-sm col-span-2 sm:col-span-1">
                <div className="text-2xl font-extrabold text-teal-400 font-mono">
                  100%
                </div>
                <div className="text-xs text-slate-400 font-sans mt-1">
                  Hands-On Code
                </div>
              </div>
            </div>

            {/* Verified Checklist */}
            <div className="space-y-2.5 pt-2">
              <div className="text-xs uppercase font-mono tracking-wider text-slate-400">
                Core Engineering Commitments:
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-slate-300">
                {PERSONAL_INFO.summaryStrengths.map((str, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                    <span>{str}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Action Bar */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <a
                href={PERSONAL_INFO.resumePath}
                download="Aditya_Kumar_Resume.pdf"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-black bg-cyan-400 hover:bg-cyan-300 transition-colors shadow-lg shadow-cyan-500/20 font-mono"
              >
                <Download className="w-4 h-4" />
                <span>Download Resume (PDF)</span>
              </a>

              <a
                href="mailto:aaditya0775@gmail.com"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium text-slate-300 bg-slate-800/80 hover:bg-slate-700/80 hover:text-white transition-colors border border-slate-700"
              >
                <Mail className="w-4 h-4 text-cyan-400" />
                <span>aaditya0775@gmail.com</span>
              </a>
            </div>

          </div>

        </div>

        {/* 6 Core Pillars Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-6">
          {highlights.map((h, i) => {
            const Icon = h.icon;
            return (
              <div
                key={i}
                className="group p-6 rounded-2xl bg-slate-900/50 border border-slate-800/90 hover:border-cyan-500/40 hover:bg-slate-900/90 transition-all duration-300 hover:-translate-y-1"
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center bg-gradient-to-tr ${h.color} border mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors mb-2">
                  {h.title}
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  {h.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
