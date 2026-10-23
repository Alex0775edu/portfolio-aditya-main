import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Copy, 
  Check, 
  Send, 
  MessageSquare, 
  ExternalLink,
  Sparkles,
  AlertCircle
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon } from './BrandIcons';

export const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = 'Full name is required';
    if (!formData.email.trim() || !/^\S+@\S+\.\S+$/.test(formData.email)) {
      errs.email = 'Valid email is required';
    }
    if (!formData.subject.trim()) errs.subject = 'Subject is required';
    if (!formData.message.trim() || formData.message.length < 10) {
      errs.message = 'Message must be at least 10 characters';
    }
    return errs;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});

    // Construct mailto URL to launch user's real email client directly with prefilled parameters
    const subjectEncoded = encodeURIComponent(`[Portfolio Inquiry] ${formData.subject} - from ${formData.name}`);
    const bodyEncoded = encodeURIComponent(
      `Hello Aditya,\n\nName: ${formData.name}\nEmail: ${formData.email}\nSubject: ${formData.subject}\n\nMessage:\n${formData.message}\n\nSent from your portfolio contact form.`
    );
    window.location.href = `mailto:${PERSONAL_INFO.email}?subject=${subjectEncoded}&body=${bodyEncoded}`;
    setFormSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 relative bg-[#060a12] overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-cyan-600/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-600/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/50 border border-cyan-500/20 text-cyan-400 text-xs font-mono uppercase tracking-wider">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Direct Communication</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Get In <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-300 to-blue-400">Touch</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Reach out directly for website development, management systems, or tech collaborations.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Direct Contact Info & Working Actions (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="p-6 sm:p-8 rounded-3xl bg-[#0b1222]/90 border border-slate-800 shadow-xl space-y-6">
              <div>
                <h3 className="text-xl font-bold text-white font-mono flex items-center gap-2">
                  <span>Aditya Kumar</span>
                  <span className="w-2 h-2 rounded-full bg-emerald-400" />
                </h3>
                <p className="text-xs text-slate-400 mt-1">
                  Full Stack Web Developer • Founder @ SkillSum Innovations
                </p>
              </div>

              {/* Contact Details List */}
              <div className="space-y-4">
                
                {/* Email Item */}
                <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800/80 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono text-slate-400 flex items-center gap-2">
                      <Mail className="w-3.5 h-3.5 text-cyan-400" />
                      Email Address
                    </span>
                    <button
                      onClick={handleCopyEmail}
                      className="inline-flex items-center gap-1 text-[11px] font-mono text-cyan-400 hover:text-cyan-300 transition-colors p-1"
                      aria-label="Copy email address"
                    >
                      {copied ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-emerald-400" />
                          <span className="text-emerald-400">Copied!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5" />
                          <span>Copy</span>
                        </>
                      )}
                    </button>
                  </div>
                  <a
                    href={`mailto:${PERSONAL_INFO.email}`}
                    className="block text-sm sm:text-base font-semibold text-white hover:text-cyan-400 transition-colors truncate"
                  >
                    {PERSONAL_INFO.email}
                  </a>
                </div>

                {/* Phone Item */}
                <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800/80 space-y-1">
                  <span className="text-xs font-mono text-slate-400 flex items-center gap-2">
                    <Phone className="w-3.5 h-3.5 text-emerald-400" />
                    Phone / Call Directly
                  </span>
                  <a
                    href={`tel:${PERSONAL_INFO.phone}`}
                    className="block text-sm sm:text-base font-semibold text-white hover:text-emerald-400 transition-colors"
                  >
                    {PERSONAL_INFO.phone}
                  </a>
                </div>

                {/* Location Item */}
                <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800/80 space-y-1">
                  <span className="text-xs font-mono text-slate-400 flex items-center gap-2">
                    <MapPin className="w-3.5 h-3.5 text-blue-400" />
                    Location
                  </span>
                  <div className="text-sm font-semibold text-white">
                    {PERSONAL_INFO.location}
                  </div>
                </div>

              </div>

              {/* Working Quick-Action Buttons */}
              <div className="pt-2 grid grid-cols-2 gap-3">
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="py-2.5 px-4 rounded-xl text-xs font-mono font-bold bg-cyan-400 hover:bg-cyan-300 text-black text-center transition-colors shadow-md shadow-cyan-500/20"
                >
                  Email Aditya
                </a>
                <a
                  href={`tel:${PERSONAL_INFO.phone}`}
                  className="py-2.5 px-4 rounded-xl text-xs font-mono font-bold bg-emerald-500 hover:bg-emerald-400 text-black text-center transition-colors shadow-md shadow-emerald-500/20"
                >
                  Call Directly
                </a>
              </div>

              {/* External Profiles */}
              <div className="pt-4 border-t border-slate-800/80 space-y-3">
                <div className="text-xs font-mono text-slate-500 uppercase tracking-wider">
                  Verified Social Channels
                </div>
                <div className="flex items-center gap-2.5">
                  <a
                    href="https://github.com/Alex0775edu"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-cyan-400 hover:border-cyan-500/40 transition-all flex items-center gap-2 text-xs font-mono"
                  >
                    <GithubIcon className="w-4 h-4" />
                    <span>GitHub</span>
                  </a>

                  <a
                    href="https://www.linkedin.com/in/aditya-kumar-cse/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-blue-400 hover:border-blue-500/40 transition-all flex items-center gap-2 text-xs font-mono"
                  >
                    <LinkedinIcon className="w-4 h-4" />
                    <span>LinkedIn</span>
                  </a>

                  <a
                    href={PERSONAL_INFO.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-emerald-400 hover:border-emerald-500/40 transition-all flex items-center gap-2 text-xs font-mono"
                  >
                    <MessageSquare className="w-4 h-4 text-emerald-400" />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>

            </div>

          </div>

          {/* Right Column: Interactive Validated Contact Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-3xl bg-[#0b1222]/90 border border-slate-800 shadow-xl space-y-6">
              
              <div>
                <h3 className="text-xl font-bold text-white font-mono">
                  Send a Direct Message
                </h3>
                <p className="text-xs text-slate-400 mt-1">
                  Fill in your project requirements or message. Clicking 'Dispatch Message' opens your native email client with verified parameters.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name Input */}
                  <div className="space-y-1.5 text-left">
                    <label className="text-xs font-mono text-slate-300 flex items-center justify-between">
                      <span>Full Name *</span>
                      {errors.name && <span className="text-red-400 text-[10px]">{errors.name}</span>}
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. John Doe"
                      className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-800 text-white placeholder-slate-600 text-sm focus:border-cyan-400 focus:outline-none transition-colors"
                      required
                    />
                  </div>

                  {/* Email Input */}
                  <div className="space-y-1.5 text-left">
                    <label className="text-xs font-mono text-slate-300 flex items-center justify-between">
                      <span>Email Address *</span>
                      {errors.email && <span className="text-red-400 text-[10px]">{errors.email}</span>}
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. john@example.com"
                      className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-800 text-white placeholder-slate-600 text-sm focus:border-cyan-400 focus:outline-none transition-colors"
                      required
                    />
                  </div>
                </div>

                {/* Subject Input */}
                <div className="space-y-1.5 text-left">
                  <label className="text-xs font-mono text-slate-300 flex items-center justify-between">
                    <span>Subject / Inquiring Project *</span>
                    {errors.subject && <span className="text-red-400 text-[10px]">{errors.subject}</span>}
                  </label>
                  <input
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="e.g. Website Development or Management System"
                    className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-800 text-white placeholder-slate-600 text-sm focus:border-cyan-400 focus:outline-none transition-colors"
                    required
                  />
                </div>

                {/* Message Input */}
                <div className="space-y-1.5 text-left">
                  <label className="text-xs font-mono text-slate-300 flex items-center justify-between">
                    <span>Your Message *</span>
                    {errors.message && <span className="text-red-400 text-[10px]">{errors.message}</span>}
                  </label>
                  <textarea
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Describe your requirements, timeline, or query..."
                    className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-800 text-white placeholder-slate-600 text-sm focus:border-cyan-400 focus:outline-none transition-colors resize-none"
                    required
                  />
                </div>

                {/* Transparent Notice */}
                <div className="p-3.5 rounded-xl bg-cyan-950/20 border border-cyan-800/30 flex items-start gap-2.5 text-xs text-slate-300">
                  <AlertCircle className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                  <span>
                    No fake confirmations: submitting directly initiates an email to <span className="text-cyan-300 font-mono">aaditya0775@gmail.com</span> with your exact parameters.
                  </span>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full py-4 rounded-xl font-bold font-mono text-sm bg-gradient-to-r from-cyan-400 via-teal-400 to-blue-500 hover:from-cyan-300 hover:to-blue-400 text-black shadow-lg shadow-cyan-500/20 transition-all flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Dispatch Message to Aditya</span>
                </button>

                {formSubmitted && (
                  <div className="p-3 rounded-xl bg-emerald-950/40 border border-emerald-500/30 text-emerald-300 text-xs font-mono text-center">
                    Email client launched! If it didn't open automatically, you can directly email <a href={`mailto:${PERSONAL_INFO.email}`} className="underline font-bold">{PERSONAL_INFO.email}</a>.
                  </div>
                )}
              </form>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
