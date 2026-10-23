import React, { useState } from 'react';
import { 
  Bot, 
  X, 
  Sparkles, 
  ArrowRight, 
  Terminal, 
  ExternalLink, 
  Compass, 
  ShieldCheck, 
  Send 
} from 'lucide-react';
import { sounds } from '../utils/soundEffects';

interface GuideQA {
  question: string;
  shortTag: string;
  answer: string;
  actionText?: string;
  targetId?: string;
  externalUrl?: string;
}

const GUIDE_ITEMS: GuideQA[] = [
  {
    question: "What is SkillSum Innovations?",
    shortTag: "SkillSum",
    answer: "SkillSum Innovations (skillsum.in) is a technology and digital services brand founded by Aditya Kumar. It delivers custom website engineering, software management systems, embedded IoT hardware, video production, and SEO strategy.",
    actionText: "Navigate to SkillSum Section",
    targetId: "skillsum"
  },
  {
    question: "What is the Education Management System (EMS)?",
    shortTag: "EMS Platform",
    answer: "EMS is an academic web platform built with PHP and MySQL that organizes course syllabi, notes distribution, and student records with normalized relational schemas.",
    actionText: "Inspect EMS in Workspace",
    targetId: "workspace"
  },
  {
    question: "What other management systems did Aditya build?",
    shortTag: "Systems",
    answer: "Aditya built the Student Internship Management System (automated status tracking) and the Attendance Management System (real-time presence calculations and audit logs).",
    actionText: "View Featured Systems",
    targetId: "projects"
  },
  {
    question: "What are Aditya's core technical skills?",
    shortTag: "Tech Stack",
    answer: "Frontend: HTML5, CSS3, JavaScript, Bootstrap, Responsive Design. Backend: PHP, Python, C. Databases: MySQL & DBMS. Tools: Git, GitHub, Tally Prime, Photoshop, and CapCut.",
    actionText: "Open Skills Matrix",
    targetId: "skills"
  },
  {
    question: "What is Aditya's academic background?",
    shortTag: "Education",
    answer: "Aditya is pursuing a Diploma in Computer Science & Engineering at Mahamaya Polytechnic (Dhanapur, Chandauli), holds an ADCA diploma from EDGE Education (2023–2024), and completed 12th (2024) and 10th (2022) with UP Board.",
    actionText: "View Education Timeline",
    targetId: "education"
  },
  {
    question: "How can I contact Aditya for collaboration?",
    shortTag: "Contact",
    answer: "You can email aaditya0775@gmail.com, call +91-9023208267, or message directly via WhatsApp from Ballia, Uttar Pradesh, India.",
    actionText: "Go to Contact Hub",
    targetId: "contact"
  }
];

export const PortfolioGuide: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedQA, setSelectedQA] = useState<GuideQA | null>(GUIDE_ITEMS[0]);

  const handleSelectQA = (item: GuideQA) => {
    sounds.playClick();
    setSelectedQA(item);
  };

  const handleAction = (item: GuideQA) => {
    sounds.playChime();
    setIsOpen(false);
    if (item.targetId) {
      const el = document.getElementById(item.targetId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    } else if (item.externalUrl) {
      window.open(item.externalUrl, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <>
      {/* Floating Trigger Button (Bottom Left) */}
      <button
        onClick={() => {
          sounds.playClick();
          setIsOpen(true);
        }}
        className="fixed bottom-6 left-6 z-40 px-4 py-3 rounded-2xl bg-slate-900/90 hover:bg-slate-800 text-cyan-300 border border-cyan-500/40 shadow-[0_0_25px_rgba(0,240,255,0.25)] backdrop-blur-xl transition-all duration-300 transform hover:scale-105 active:scale-95 flex items-center gap-2.5 group"
        aria-label="Open AaDiTeCh Portfolio Guide"
      >
        <div className="relative">
          <Bot className="w-5 h-5 text-cyan-400 group-hover:rotate-12 transition-transform" />
          <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
        </div>
        <span className="text-xs font-mono font-bold tracking-wide">
          AaDiTeCh Guide
        </span>
      </button>

      {/* Guide Dialog Window */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-fade-in"
          onClick={() => setIsOpen(false)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="relative w-full max-w-2xl bg-[#091122] border border-cyan-500/40 rounded-3xl p-6 sm:p-8 shadow-2xl space-y-6 text-left"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between pb-4 border-b border-slate-800">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-cyan-950/80 border border-cyan-500/40 flex items-center justify-center text-cyan-400">
                  <Bot className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white font-mono flex items-center gap-2">
                    <span>AaDiTeCh Portfolio Guide</span>
                    <span className="px-2 py-0.5 rounded-full text-[10px] font-mono bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                      Interactive Navigator
                    </span>
                  </h3>
                  <p className="text-xs text-slate-400 font-sans">
                    Fast client-side responses for exploring Aditya's projects &amp; SkillSum Innovations.
                  </p>
                </div>
              </div>

              <button
                onClick={() => setIsOpen(false)}
                className="p-2 rounded-xl bg-slate-900 border border-slate-700 text-slate-400 hover:text-white transition-colors"
                aria-label="Close Guide"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Predefined Quick Questions Chips */}
            <div className="space-y-2">
              <div className="text-xs font-mono uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                <Compass className="w-3.5 h-3.5 text-cyan-400" />
                <span>Select a topic to discover:</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {GUIDE_ITEMS.map((item, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleSelectQA(item)}
                    className={`px-3 py-1.5 rounded-xl text-xs font-mono transition-all ${
                      selectedQA?.question === item.question
                        ? 'bg-cyan-500 text-black font-bold shadow-md shadow-cyan-500/25 scale-105'
                        : 'bg-slate-900/90 text-slate-300 hover:text-white hover:bg-slate-800 border border-slate-800'
                    }`}
                  >
                    {item.shortTag}
                  </button>
                ))}
              </div>
            </div>

            {/* Selected Response Bubble */}
            {selectedQA && (
              <div className="p-5 rounded-2xl bg-slate-900/80 border border-cyan-500/30 space-y-4 shadow-inner">
                <div className="flex items-center gap-2 text-xs font-mono text-cyan-300 font-semibold">
                  <Terminal className="w-3.5 h-3.5" />
                  <span>Q: {selectedQA.question}</span>
                </div>

                <p className="text-sm text-slate-200 leading-relaxed font-sans">
                  {selectedQA.answer}
                </p>

                {selectedQA.actionText && (
                  <div className="pt-2">
                    <button
                      onClick={() => handleAction(selectedQA)}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-mono font-bold bg-cyan-400 hover:bg-cyan-300 text-black shadow-lg shadow-cyan-500/20 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
                    >
                      <span>{selectedQA.actionText}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                )}
              </div>
            )}

            {/* Transparent Security & Architecture Notice */}
            <div className="pt-2 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-mono text-slate-500">
              <span className="flex items-center gap-1.5 text-slate-400">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                Verified Client-Side Navigator (Zero API Key Exposure)
              </span>
              <span>AaDiTeCh Engine</span>
            </div>

          </div>
        </div>
      )}
    </>
  );
};

