import React, { useState } from 'react';
import { 
  GraduationCap, 
  Rocket, 
  Calendar, 
  CheckCircle, 
  Sparkles, 
  Briefcase, 
  Layers, 
  ExternalLink 
} from 'lucide-react';
import { sounds } from '../utils/soundEffects';

export interface TimelineEntry {
  id: string;
  type: 'academic' | 'builder';
  period: string;
  title: string;
  organization: string;
  description: string;
  badge: string;
  tags?: string[];
  link?: string;
  linkText?: string;
}

export const TIMELINE_DATA: TimelineEntry[] = [
  {
    id: 'skillsum-founder',
    type: 'builder',
    period: 'Founder Milestone',
    title: 'Founded SkillSum Innovations & Deployed Official Brand',
    organization: 'SkillSum Innovations (skillsum.in)',
    description: 'Founded and independently developed full company website from wireframes through live HTTPS deployment. Established a cohesive digital services brand covering web engineering, software systems, IoT, and digital media.',
    badge: 'Entrepreneurial Journey',
    tags: ['Brand Leadership', 'Web Engineering', 'skillsum.in', 'Deployment'],
    link: 'https://skillsum.in',
    linkText: 'Visit Live Platform'
  },
  {
    id: 'diploma-cse',
    type: 'academic',
    period: 'Ongoing',
    title: 'Diploma in Computer Science & Engineering',
    organization: 'Mahamaya Polytechnic of Information Technology, Dhanapur Chandauli',
    description: 'Specializing in computer science fundamentals, data structures, relational database management systems, and practical web technologies.',
    badge: 'Technical Diploma',
    tags: ['Computer Science', 'DBMS', 'Web Engineering', 'Algorithms']
  },
  {
    id: 'ems-platform',
    type: 'builder',
    period: 'System Milestone',
    title: 'Engineered Education Management System (EMS)',
    organization: 'PythonAnywhere Cloud Deployment',
    description: 'Built a full-featured web platform to organize courses, syllabus distribution, notes access, and student records supported by structured MySQL database design.',
    badge: 'Full Stack Build',
    tags: ['PHP', 'MySQL', 'Relational DB', 'JavaScript', 'Bootstrap'],
    link: 'https://aaditech2.pythonanywhere.com',
    linkText: 'Live EMS Demo'
  },
  {
    id: 'internship-system',
    type: 'builder',
    period: 'System Milestone',
    title: 'Developed Student Internship Management System',
    organization: 'Web Architecture Project',
    description: 'Created an end-to-end system to manage student internship applications, automate status tracking, and provide administrative reporting.',
    badge: 'Workflow Automation',
    tags: ['Application Tracking', 'MySQL', 'Frontend UI', 'Reporting'],
    link: 'https://aaditech.pythonanywhere.com/',
    linkText: 'Live System'
  },
  {
    id: 'attendance-system',
    type: 'builder',
    period: 'System Milestone',
    title: 'Created Attendance Management System',
    organization: 'Web Application / Vercel Edge',
    description: 'Developed a comprehensive system for recording and managing student attendance with analytics and real-time reporting features.',
    badge: 'Production Application',
    tags: ['HTML5', 'CSS3', 'JavaScript', 'Firebase/MySQL'],
    link: 'https://attendance-system-five-fawn.vercel.app/',
    linkText: 'Live Application'
  },
  {
    id: 'adca-diploma',
    type: 'academic',
    period: '2023 – 2024',
    title: 'Advanced Diploma in Computer Applications (ADCA)',
    organization: 'EDGE Education',
    description: 'Completed extensive training in computer applications, office productivity suites, accounting systems (Tally Prime), and desktop publishing.',
    badge: 'Professional Diploma',
    tags: ['ADCA', 'MS Office', 'Tally Prime', 'Photoshop']
  },
  {
    id: 'intermediate-12th',
    type: 'academic',
    period: '2024',
    title: 'Intermediate (12th Grade)',
    organization: 'UP Board',
    description: 'Completed senior secondary schooling with rigorous focus on Mathematics, Science, and Analytical logic.',
    badge: 'Senior Secondary',
    tags: ['UP Board', 'Mathematics', 'Science']
  },
  {
    id: 'high-school-10th',
    type: 'academic',
    period: '2022',
    title: 'High School (10th Grade)',
    organization: 'UP Board',
    description: 'Foundational secondary school education, establishing an early passion for technology and computing.',
    badge: 'Secondary School',
    tags: ['UP Board', 'Foundations']
  }
];

export const Timeline: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'academic' | 'builder'>('all');

  const filteredItems = filter === 'all'
    ? TIMELINE_DATA
    : TIMELINE_DATA.filter(item => item.type === filter);

  return (
    <section id="education" className="py-24 relative bg-[#060a14] overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-cyan-600/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-emerald-600/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-500/20 text-cyan-400 text-xs font-mono uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Academic &amp; Builder Journey</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Career &amp; <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-300 to-blue-400">Builder Timeline</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            A chronological timeline connecting technical education with real software engineering milestones and SkillSum founder journey.
          </p>
        </div>

        {/* Filter Navigation */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-14">
          <button
            onClick={() => {
              sounds.playClick();
              setFilter('all');
            }}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-mono font-medium transition-all ${
              filter === 'all'
                ? 'bg-cyan-500 text-black font-bold shadow-lg shadow-cyan-500/25 scale-105'
                : 'bg-slate-900/80 text-slate-300 hover:text-white border border-slate-800'
            }`}
          >
            All Milestones ({TIMELINE_DATA.length})
          </button>
          
          <button
            onClick={() => {
              sounds.playClick();
              setFilter('builder');
            }}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-mono font-medium transition-all ${
              filter === 'builder'
                ? 'bg-emerald-500 text-black font-bold shadow-lg shadow-emerald-500/25 scale-105'
                : 'bg-slate-900/80 text-slate-300 hover:text-white border border-slate-800'
            }`}
          >
            Builder &amp; Founder Journey
          </button>

          <button
            onClick={() => {
              sounds.playClick();
              setFilter('academic');
            }}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-mono font-medium transition-all ${
              filter === 'academic'
                ? 'bg-blue-500 text-black font-bold shadow-lg shadow-blue-500/25 scale-105'
                : 'bg-slate-900/80 text-slate-300 hover:text-white border border-slate-800'
            }`}
          >
            Academic Qualifications
          </button>
        </div>

        {/* Timeline Stack */}
        <div className="max-w-4xl mx-auto relative">
          
          {/* Vertical Guide Line */}
          <div className="hidden md:block absolute left-1/2 top-4 bottom-4 w-px bg-gradient-to-b from-cyan-500/40 via-emerald-500/30 to-slate-800 -translate-x-1/2" />

          <div className="space-y-8">
            {filteredItems.map((item, index) => {
              const isEven = index % 2 === 0;
              const isBuilder = item.type === 'builder';

              return (
                <div
                  key={item.id}
                  className={`relative flex flex-col md:flex-row items-center ${
                    isEven ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Center Dot Indicator */}
                  <div className={`hidden md:flex absolute left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-[#080d1a] border-2 items-center justify-center z-10 shadow-lg ${
                    isBuilder ? 'border-emerald-400' : 'border-cyan-400'
                  }`}>
                    {isBuilder ? (
                      <Rocket className="w-3.5 h-3.5 text-emerald-400" />
                    ) : (
                      <GraduationCap className="w-3.5 h-3.5 text-cyan-400" />
                    )}
                  </div>

                  {/* Timeline Card */}
                  <div className="w-full md:w-[calc(50%-2.25rem)] text-left">
                    <div className={`p-6 sm:p-7 rounded-3xl border transition-all duration-300 hover:-translate-y-1 shadow-xl group backdrop-blur-xl ${
                      isBuilder
                        ? 'bg-gradient-to-br from-[#0c1a12]/80 to-[#08120d]/90 border-emerald-500/30 hover:border-emerald-400'
                        : 'bg-[#091122]/80 border-slate-800 hover:border-cyan-500/40'
                    }`}>
                      
                      {/* Top Header */}
                      <div className="flex items-center justify-between gap-2 mb-3">
                        <span className={`px-3 py-0.5 rounded-full text-xs font-mono font-semibold ${
                          isBuilder
                            ? 'bg-emerald-950 text-emerald-300 border border-emerald-500/40'
                            : 'bg-cyan-950 text-cyan-300 border border-cyan-800/40'
                        }`}>
                          {item.badge}
                        </span>

                        <span className="flex items-center gap-1.5 text-xs font-mono text-slate-400">
                          <Calendar className="w-3.5 h-3.5 text-slate-400" />
                          {item.period}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                        {item.title}
                      </h3>

                      {/* Organization / Context */}
                      <div className="text-xs sm:text-sm font-mono mt-1 text-slate-300 flex items-center gap-1.5">
                        <span className="text-cyan-400">@</span>
                        <span>{item.organization}</span>
                      </div>

                      {/* Description */}
                      <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mt-3 pt-3 border-t border-slate-800/80">
                        {item.description}
                      </p>

                      {/* Tags & Action Link */}
                      <div className="mt-4 pt-3 border-t border-slate-800/60 flex flex-wrap items-center justify-between gap-2">
                        <div className="flex flex-wrap gap-1.5">
                          {item.tags?.map((tag, tIdx) => (
                            <span
                              key={tIdx}
                              className="px-2 py-0.5 rounded text-[10px] font-mono bg-slate-900 text-slate-400 border border-slate-800"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>

                        {item.link && (
                          <a
                            href={item.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={() => sounds.playClick()}
                            className="inline-flex items-center gap-1 text-xs font-mono font-semibold text-emerald-400 hover:text-emerald-300 transition-colors"
                          >
                            <span>{item.linkText || 'Inspect'}</span>
                            <ExternalLink className="w-3 h-3" />
                          </a>
                        )}
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

