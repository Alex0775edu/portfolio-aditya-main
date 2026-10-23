import React, { useState } from 'react';
import { 
  Terminal, 
  Layers, 
  ExternalLink, 
  FolderTree, 
  Database, 
  CheckCircle2, 
  Code2, 
  Activity, 
  Sparkles, 
  Cpu, 
  Maximize2 
} from 'lucide-react';
import { sounds } from '../utils/soundEffects';
import { GithubIcon } from './BrandIcons';

interface WorkspaceProject {
  id: string;
  name: string;
  badge: string;
  tech: string[];
  liveUrl?: string;
  githubUrl?: string;
  overview: string;
  mockupType: 'dashboard' | 'pipeline' | 'database';
  views: {
    title: string;
    description: string;
    dataPoints: { label: string; value: string }[];
    codeSnippet?: string;
  };
}

export const DeveloperWorkspace: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('ems');
  const [viewMode, setViewMode] = useState<'interface' | 'schema'>('interface');

  const projects: Record<string, WorkspaceProject> = {
    ems: {
      id: 'ems',
      name: 'Education Management System (EMS)',
      badge: 'Relational Database Platform',
      tech: ['PHP', 'MySQL', 'JavaScript', 'HTML5', 'Bootstrap'],
      liveUrl: 'https://aaditech2.pythonanywhere.com',
      githubUrl: 'https://github.com/Alex0775edu/EMS-AADITECH',
      overview: 'Structured academic portal built to manage courses, syllabus content, and student notes distribution with relational MySQL tables.',
      mockupType: 'database',
      views: {
        title: 'Academic Content & Schema Dispatcher',
        description: 'Organizes syllabus materials by semester and subject with direct secure document downloads.',
        dataPoints: [
          { label: 'Relational Tables', value: 'Courses, Notes, Syllabi, Students' },
          { label: 'Database Engine', value: 'MySQL (Normalized 3NF)' },
          { label: 'Deployment', value: 'PythonAnywhere / Apache' },
          { label: 'Authentication', value: 'Session-based Admin & Student' }
        ],
        codeSnippet: `-- EMS Database Table Definition
CREATE TABLE ems_syllabus (
  id INT AUTO_INCREMENT PRIMARY KEY,
  course_code VARCHAR(16) NOT NULL,
  subject_name VARCHAR(120) NOT NULL,
  file_path VARCHAR(255) NOT NULL,
  uploaded_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);`
      }
    },
    internship: {
      id: 'internship',
      name: 'Student Internship Management System',
      badge: 'Application Tracking Workflow',
      tech: ['JavaScript', 'MySQL', 'HTML5', 'CSS3', 'Python'],
      liveUrl: 'https://aaditech.pythonanywhere.com/',
      overview: 'End-to-end portal designed to record student internship applications, manage review states, and generate administrative status reports.',
      mockupType: 'pipeline',
      views: {
        title: 'Internship Pipeline Status Monitor',
        description: 'Automates applicant tracking from initial submission through verification and mentor assignment.',
        dataPoints: [
          { label: 'Pipeline Stages', value: 'Submitted → Under Review → Assigned' },
          { label: 'Tracking Logic', value: 'Automated Status Indexing' },
          { label: 'Reporting', value: 'Real-time CSV & Summary Export' },
          { label: 'Responsive Layout', value: 'Touch-optimized Mobile UI' }
        ],
        codeSnippet: `// Internship Status Dispatcher
function updateApplicationStatus(applicantId, nextStatus) {
  return db.query(
    "UPDATE applications SET status = ?, updated_at = NOW() WHERE id = ?",
    [nextStatus, applicantId]
  );
}`
      }
    },
    attendance: {
      id: 'attendance',
      name: 'Attendance Management System',
      badge: 'Real-time Records & Reports',
      tech: ['HTML5', 'CSS3', 'JavaScript', 'Firebase / MySQL', 'Bootstrap'],
      liveUrl: 'https://attendance-system-five-fawn.vercel.app/',
      overview: 'Digital attendance management platform for classroom roll-calls, real-time presence percentages, and daily record audits.',
      mockupType: 'dashboard',
      views: {
        title: 'Daily Attendance Dashboard & Registry',
        description: 'Calculates presence ratios in real-time, eliminating physical paper registry inaccuracies.',
        dataPoints: [
          { label: 'Attendance Metric', value: 'Automated % Calculation' },
          { label: 'Audit Logging', value: 'Daily / Subject Roll Logs' },
          { label: 'UI Architecture', value: 'Fast Single-Page App (SPA)' },
          { label: 'Host Deployment', value: 'Vercel Edge Production' }
        ],
        codeSnippet: `// Attendance Summary Calculation
const calculateAttendanceRatio = (presentCount, totalSessions) => {
  if (!totalSessions) return 0;
  return ((presentCount / totalSessions) * 100).toFixed(1) + "%";
};`
      }
    },
    skillsum: {
      id: 'skillsum',
      name: 'SkillSum Innovations Official Hub',
      badge: 'Production Brand Portal',
      tech: ['HTML5', 'CSS3', 'JavaScript', 'SEO Architecture', 'Digital Services'],
      liveUrl: 'https://skillsum.in',
      overview: 'Corporate web portal presenting SkillSum Innovations digital services, web development, embedded IoT, and creative production.',
      mockupType: 'dashboard',
      views: {
        title: 'Corporate Digital Service Showcase',
        description: 'Official corporate website built from wireframing to production deployment with responsive styling.',
        dataPoints: [
          { label: 'Brand Tagline', value: 'Innovate. Build. Grow.' },
          { label: 'Official Domain', value: 'https://skillsum.in' },
          { label: 'Founder & Dev', value: 'Aditya Kumar' },
          { label: 'Services', value: 'Web, Systems, IoT, Video, SEO' }
        ],
        codeSnippet: `<!-- SkillSum Meta & Service Architecture -->
<meta property="og:title" content="SkillSum Innovation - Innovate. Build. Grow.">
<meta property="og:site_name" content="SkillSum Innovation">
<link rel="canonical" href="https://skillsum.in/">`
      }
    }
  };

  const currentProject = projects[activeTab];

  return (
    <section id="workspace" className="py-24 relative bg-[#050912] overflow-hidden">
      {/* Dynamic Ambient Background */}
      <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-cyan-600/5 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-600/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 text-xs font-mono uppercase tracking-wider shadow-sm">
            <Terminal className="w-3.5 h-3.5" />
            <span>Developer Workstation</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Virtual <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-300 to-blue-400">Developer Workspace</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            An interactive inspection panel showcasing authentic system architectures, database schemas, and operational dashboards.
          </p>
        </div>

        {/* Workspace HUD Frame */}
        <div className="rounded-3xl border border-cyan-500/25 bg-[#080e1c] shadow-2xl overflow-hidden backdrop-blur-xl">
          
          {/* Top Window Titlebar */}
          <div className="px-5 py-3.5 bg-[#0b1326] border-b border-slate-800 flex flex-wrap items-center justify-between gap-3">
            
            {/* System Status Indicators */}
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
              </div>
              <span className="text-xs font-mono text-slate-400 pl-2 hidden sm:inline">
                Aditya's Workstation • v2.4
              </span>
            </div>

            {/* Project Selector Tabs */}
            <div className="flex items-center gap-1 bg-slate-900/90 p-1 rounded-xl border border-slate-800">
              {Object.values(projects).map((p) => {
                const isActive = activeTab === p.id;
                return (
                  <button
                    key={p.id}
                    onClick={() => {
                      sounds.playClick();
                      setActiveTab(p.id);
                    }}
                    className={`px-3 py-1.5 rounded-lg text-xs font-mono font-medium transition-all duration-200 ${
                      isActive
                        ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow-sm'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    {p.id.toUpperCase()}
                  </button>
                );
              })}
            </div>

            {/* View Mode Toggle */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => {
                  sounds.playClick();
                  setViewMode(viewMode === 'interface' ? 'schema' : 'interface');
                }}
                className="px-3 py-1 rounded-lg text-xs font-mono bg-slate-900 border border-slate-700 text-slate-300 hover:text-cyan-400 hover:border-cyan-500/40 transition-colors flex items-center gap-1.5"
              >
                <Code2 className="w-3.5 h-3.5 text-cyan-400" />
                <span>{viewMode === 'interface' ? 'View Schema' : 'View Interface'}</span>
              </button>
            </div>

          </div>

          {/* Workspace Body */}
          <div className="p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Column: Project Telemetry & Details (5 cols) */}
            <div className="lg:col-span-5 space-y-6 text-left">
              
              <div className="space-y-2">
                <div className="inline-flex items-center gap-2 px-3 py-0.5 rounded-full text-xs font-mono bg-cyan-950/80 text-cyan-300 border border-cyan-800/40">
                  <Activity className="w-3 h-3 text-emerald-400 animate-pulse" />
                  <span>{currentProject.badge}</span>
                </div>

                <h3 className="text-2xl font-bold text-white font-mono">
                  {currentProject.name}
                </h3>

                <p className="text-sm text-slate-300 leading-relaxed">
                  {currentProject.overview}
                </p>
              </div>

              {/* Verified Data Points Table */}
              <div className="p-4 rounded-2xl bg-slate-900/70 border border-slate-800 space-y-2.5">
                <div className="text-xs font-mono uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                  <Cpu className="w-3.5 h-3.5 text-cyan-400" />
                  <span>System Telemetry &amp; Specs</span>
                </div>
                <div className="space-y-2 pt-1 text-xs font-mono">
                  {currentProject.views.dataPoints.map((dp, idx) => (
                    <div key={idx} className="flex items-start justify-between gap-2 border-b border-slate-800/60 pb-1.5">
                      <span className="text-slate-400">{dp.label}:</span>
                      <span className="text-cyan-300 font-semibold text-right">{dp.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies */}
              <div className="space-y-2">
                <div className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                  Technology Stack
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {currentProject.tech.map((t, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded-lg text-xs font-mono bg-cyan-950/40 text-cyan-300 border border-cyan-900/50"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-wrap items-center gap-3">
                {currentProject.liveUrl && (
                  <a
                    href={currentProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => sounds.playClick()}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-mono font-bold text-black bg-cyan-400 hover:bg-cyan-300 transition-colors shadow-lg shadow-cyan-500/20"
                  >
                    <span>Launch Live System</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}

                {currentProject.githubUrl && (
                  <a
                    href={currentProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => sounds.playClick()}
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-mono text-white bg-slate-900 border border-slate-700 hover:border-slate-500 transition-colors"
                  >
                    <GithubIcon className="w-3.5 h-3.5" />
                    <span>Source Repository</span>
                  </a>
                )}
              </div>

            </div>

            {/* Right Column: Visual Mockup / Schema Inspector (7 cols) */}
            <div className="lg:col-span-7">
              <div className="rounded-2xl border border-slate-800 bg-[#060b16] p-5 shadow-inner space-y-4 text-left">
                
                {/* Panel Header */}
                <div className="flex items-center justify-between pb-3 border-b border-slate-800/80">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400" />
                    <span className="text-xs font-mono font-bold text-white">
                      {currentProject.views.title}
                    </span>
                  </div>
                  <span className="text-[10px] font-mono text-slate-500">
                    {viewMode === 'interface' ? 'Illustrative Dashboard View' : 'SQL / Code Schema'}
                  </span>
                </div>

                {viewMode === 'interface' ? (
                  /* Interface Mockup View */
                  <div className="space-y-4">
                    <div className="p-4 rounded-xl bg-slate-900/50 border border-slate-800/80 space-y-3">
                      <p className="text-xs text-slate-300 leading-relaxed">
                        {currentProject.views.description}
                      </p>

                      {/* Mockup Functional Wireframe */}
                      <div className="grid grid-cols-2 gap-3 pt-2">
                        <div className="p-3 rounded-lg bg-slate-950/80 border border-cyan-900/30 text-xs font-mono">
                          <div className="text-cyan-400 font-bold mb-1">01. Service Layer</div>
                          <div className="text-slate-400 text-[11px]">
                            Dispatches structured requests &amp; sanitizes user inputs.
                          </div>
                        </div>

                        <div className="p-3 rounded-lg bg-slate-950/80 border border-emerald-900/30 text-xs font-mono">
                          <div className="text-emerald-400 font-bold mb-1">02. Data Retrieval</div>
                          <div className="text-slate-400 text-[11px]">
                            Relational query execution with indexed lookups.
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Operational Highlights checklist */}
                    <div className="space-y-1.5 pt-1 text-xs text-slate-300">
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                        <span>Responsive mobile-first rendering confirmed</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                        <span>Database models structured for zero redundant records</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                        <span>Deployed with HTTPS production endpoints</span>
                      </div>
                    </div>
                  </div>
                ) : (
                  /* Code / Schema View */
                  <div className="rounded-xl bg-[#040811] p-4 border border-slate-800 font-mono text-xs overflow-x-auto text-cyan-300">
                    <pre className="whitespace-pre leading-relaxed">
                      {currentProject.views.codeSnippet}
                    </pre>
                  </div>
                )}

                <div className="pt-2 flex items-center justify-between text-[11px] font-mono text-slate-500">
                  <span>Authentic Project Architecture</span>
                  <span className="text-cyan-400">Verified System</span>
                </div>

              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
