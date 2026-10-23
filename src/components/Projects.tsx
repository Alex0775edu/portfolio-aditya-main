import React, { useState, useRef } from 'react';
import { 
  ExternalLink, 
  Layers, 
  Sparkles, 
  ArrowUpRight, 
  CheckCircle2, 
  Terminal,
  Globe
} from 'lucide-react';
import { FEATURED_PROJECTS, Project } from '../data/portfolioData';
import { ProjectModal } from './ProjectModal';
import { GithubIcon } from './BrandIcons';
import { sounds } from '../utils/soundEffects';

interface ProjectCard3DProps {
  project: Project;
  onOpenModal: (project: Project) => void;
}

const ProjectCard3D: React.FC<ProjectCard3DProps> = ({ project, onOpenModal }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [transform, setTransform] = useState('');
  const [glare, setGlare] = useState({ x: 50, y: 50, opacity: 0 });

  const isSkillSum = project.isSkillSum;

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    if (window.innerWidth < 768) return; // Restrain on mobile touch

    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -6; // max 6 deg
    const rotateY = ((x - centerX) / centerX) * 6;

    setTransform(`perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) scale3d(1.02, 1.02, 1.02)`);
    setGlare({
      x: (x / rect.width) * 100,
      y: (y / rect.height) * 100,
      opacity: 0.15
    });
  };

  const handleMouseLeave = () => {
    setTransform('perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)');
    setGlare({ x: 50, y: 50, opacity: 0 });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={() => sounds.playHover()}
      style={{
        transform: transform || 'perspective(1000px) rotateX(0deg) rotateY(0deg)',
        transition: transform ? 'transform 0.1s ease-out' : 'transform 0.5s ease-out'
      }}
      className={`group rounded-3xl p-6 sm:p-8 flex flex-col justify-between relative border backdrop-blur-xl overflow-hidden shadow-2xl ${
        isSkillSum
          ? 'bg-gradient-to-b from-[#0e1f14]/85 to-[#0b1610]/95 border-emerald-500/40 hover:border-emerald-400 shadow-[0_0_35px_rgba(16,185,129,0.15)]'
          : 'bg-[#0a1224]/85 border-slate-800 hover:border-cyan-500/40'
      }`}
    >
      {/* Specular Glare Overlay */}
      <div
        className="pointer-events-none absolute inset-0 transition-opacity duration-300"
        style={{
          background: `radial-gradient(circle at ${glare.x}% ${glare.y}%, rgba(255,255,255,${glare.opacity}) 0%, transparent 60%)`
        }}
      />

      {/* Top Meta Bar */}
      <div className="space-y-4 relative z-10 text-left">
        <div className="flex items-center justify-between flex-wrap gap-2">
          <div className="flex items-center gap-2">
            <span
              className={`px-3 py-1 rounded-full text-xs font-mono font-semibold ${
                isSkillSum
                  ? 'bg-emerald-950 text-emerald-300 border border-emerald-500/40'
                  : 'bg-cyan-950/80 text-cyan-300 border border-cyan-800/40'
              }`}
            >
              {project.category}
            </span>
            <span className="text-xs font-mono text-slate-400">
              Role: {project.role}
            </span>
          </div>

          <span className="inline-flex items-center gap-1.5 text-xs font-mono text-emerald-400">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            {project.statusBadge}
          </span>
        </div>

        {/* Title & Tagline */}
        <div>
          <h3 className="text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors flex items-center gap-2">
            {project.title}
            {isSkillSum && <Sparkles className="w-5 h-5 text-emerald-400 flex-shrink-0" />}
          </h3>
          <p className="text-sm text-slate-400 mt-1 italic font-sans">
            "{project.tagline}"
          </p>
        </div>

        {/* Core Description */}
        <p className="text-sm text-slate-300 leading-relaxed font-sans">
          {project.description}
        </p>

        {/* Key Highlights */}
        <div className="space-y-2 pt-2">
          {project.features.slice(0, 2).map((feat, idx) => (
            <div key={idx} className="flex items-start gap-2 text-xs text-slate-300 font-sans">
              <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
              <span>{feat}</span>
            </div>
          ))}
        </div>

        {/* Tech Stack Pills */}
        <div className="flex flex-wrap gap-1.5 pt-3">
          {project.technologies.map((tech, tIdx) => (
            <span
              key={tIdx}
              className="px-2.5 py-1 rounded-lg text-[11px] font-mono bg-slate-900/90 text-slate-300 border border-slate-800"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Bottom Action Buttons */}
      <div className="mt-8 pt-5 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-3 relative z-10">
        <button
          onClick={() => {
            sounds.playClick();
            onOpenModal(project);
          }}
          className="inline-flex items-center gap-1.5 text-xs font-mono text-cyan-400 hover:text-cyan-300 transition-colors py-1.5"
        >
          <span>Open Full Case Study &amp; Architecture</span>
          <ArrowUpRight className="w-4 h-4" />
        </button>

        <div className="flex items-center gap-2">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => sounds.playClick()}
              className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-600 transition-all"
              aria-label={`View ${project.title} GitHub repo`}
            >
              <GithubIcon className="w-4 h-4" />
            </a>
          )}

          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => sounds.playClick()}
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-mono font-bold transition-all shadow-md ${
                isSkillSum
                  ? 'bg-emerald-500 hover:bg-emerald-400 text-slate-950 shadow-emerald-500/20'
                  : 'bg-cyan-400 hover:bg-cyan-300 text-slate-950 shadow-cyan-500/20'
              }`}
            >
              <span>{isSkillSum ? 'Visit Official Portal' : 'Live System'}</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [filter, setFilter] = useState<string>('All');

  const categories = ['All', 'Brand Platform', 'Management System', 'Web App'];

  const filteredProjects = filter === 'All'
    ? FEATURED_PROJECTS
    : FEATURED_PROJECTS.filter(p => p.category === filter);

  return (
    <section id="projects" className="py-24 relative bg-[#070c18] overflow-hidden">
      {/* Dynamic ambient backdrop */}
      <div className="absolute top-1/4 left-1/3 w-[500px] h-[500px] bg-cyan-600/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/50 border border-cyan-500/20 text-cyan-400 text-xs font-mono uppercase tracking-wider">
            <Layers className="w-3.5 h-3.5" />
            <span>Verified Portfolio</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-300 to-blue-400">Projects &amp; Systems</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Practical management systems, web applications, and corporate platforms with interactive 3D perspective depth and verified architecture.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-14">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                sounds.playClick();
                setFilter(cat);
              }}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-mono font-medium transition-all duration-200 ${
                filter === cat
                  ? 'bg-cyan-500 text-black font-bold shadow-[0_0_20px_rgba(0,240,255,0.3)] scale-105'
                  : 'bg-slate-900/80 text-slate-300 hover:text-white hover:bg-slate-800 border border-slate-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* 3D Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard3D
              key={project.id}
              project={project}
              onOpenModal={(p) => setSelectedProject(p)}
            />
          ))}
        </div>

      </div>

      {/* Project Case Study Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
