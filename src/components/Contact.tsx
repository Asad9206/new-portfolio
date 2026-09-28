import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Github, 
  Flame, 
  Cloud, 
  Send, 
  ArrowUpRight, 
  Copy, 
  CheckCircle2,
  Sparkles,
  MessageSquare
} from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const Contact: React.FC = () => {
  const { identity } = PORTFOLIO_DATA;
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const copyToClipboard = (text: string, type: 'email' | 'phone') => {
    navigator.clipboard.writeText(text);
    if (type === 'email') {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-[#03060f] tech-grid">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-blue-600/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-950/70 border border-cyan-500/30 text-cyan-300 text-xs font-mono mb-4 shadow-[0_0_15px_rgba(0,102,255,0.3)]">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>START A CONVERSATION</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
            LET'S BUILD SOMETHING
          </h2>

          <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed">
            Have a project, opportunity, or technical conversation in mind? Let's connect.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-600 mx-auto mt-4 rounded-full shadow-[0_0_12px_#00e5ff]" />
        </div>

        {/* Contact Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Direct Contact Information */}
          <div className="lg:col-span-6 glass-panel-elevated rounded-2xl p-6 sm:p-8 border border-cyan-500/30 shadow-[0_0_35px_rgba(0,102,255,0.2)] flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-cyan-400 font-mono text-xs uppercase tracking-wider mb-6 pb-3 border-b border-slate-800">
                <MessageSquare className="w-4 h-4" />
                <span>DIRECT REACH OUT CHANNELS</span>
              </div>

              {/* Email Card */}
              <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800/80 mb-4 hover:border-cyan-500/40 transition-colors">
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-blue-950/80 border border-cyan-500/40 flex items-center justify-center text-cyan-400 shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono text-slate-400 uppercase block">EMAIL ADDRESS</span>
                      <a
                        href={`mailto:${identity.contact.email}`}
                        className="text-sm sm:text-base font-mono font-bold text-white hover:text-cyan-300 transition-colors"
                      >
                        {identity.contact.email}
                      </a>
                    </div>
                  </div>

                  <button
                    onClick={() => copyToClipboard(identity.contact.email, 'email')}
                    className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-cyan-300 transition-colors"
                    title="Copy email to clipboard"
                  >
                    {copiedEmail ? <CheckCircle2 className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              {/* Phone Card */}
              <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800/80 mb-4 hover:border-cyan-500/40 transition-colors">
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-blue-950/80 border border-cyan-500/40 flex items-center justify-center text-cyan-400 shrink-0">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono text-slate-400 uppercase block">PHONE NUMBER</span>
                      <a
                        href={`tel:${identity.contact.phone.replace(/\s+/g, '')}`}
                        className="text-sm sm:text-base font-mono font-bold text-white hover:text-cyan-300 transition-colors"
                      >
                        {identity.contact.phone}
                      </a>
                    </div>
                  </div>

                  <button
                    onClick={() => copyToClipboard(identity.contact.phone, 'phone')}
                    className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-cyan-300 transition-colors"
                    title="Copy phone to clipboard"
                  >
                    {copiedPhone ? <CheckCircle2 className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              {/* Location Card */}
              <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800/80 mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-blue-950/80 border border-cyan-500/40 flex items-center justify-center text-cyan-400 shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-slate-400 uppercase block">LOCATION</span>
                    <span className="text-sm sm:text-base font-semibold text-white">
                      {identity.location}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Actions Buttons */}
            <div className="flex flex-wrap gap-3 pt-4 border-t border-slate-800">
              <a
                href={`mailto:${identity.contact.email}`}
                className="flex-1 min-w-[140px] px-5 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-mono font-bold text-xs tracking-wider flex items-center justify-center gap-2 hover:shadow-[0_0_20px_rgba(0,229,255,0.4)] transition-all"
              >
                <Mail className="w-4 h-4" />
                <span>EMAIL ME</span>
              </a>

              <a
                href={`tel:${identity.contact.phone.replace(/\s+/g, '')}`}
                className="px-5 py-3 rounded-xl bg-slate-900 border border-slate-700 text-slate-200 font-mono font-bold text-xs tracking-wider flex items-center justify-center gap-2 hover:text-white hover:border-slate-500 transition-all"
              >
                <Phone className="w-4 h-4" />
                <span>CALL DIRECT</span>
              </a>
            </div>

          </div>

          {/* Right Column: Professional Network Platforms */}
          <div className="lg:col-span-6 glass-panel-elevated rounded-2xl p-6 sm:p-8 border border-cyan-500/30 shadow-[0_0_35px_rgba(0,102,255,0.2)] flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-cyan-400 font-mono text-xs uppercase tracking-wider mb-6 pb-3 border-b border-slate-800">
                <Sparkles className="w-4 h-4" />
                <span>PROFESSIONAL & TECHNICAL PROFILES</span>
              </div>

              {/* LinkedIn */}
              <a
                href={identity.contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between p-4 rounded-xl bg-slate-950/70 border border-slate-800/80 mb-3 hover:border-blue-500/50 hover:bg-blue-950/30 transition-all"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-blue-950 border border-blue-500/40 flex items-center justify-center text-blue-400 group-hover:scale-110 transition-transform">
                    <Linkedin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white group-hover:text-blue-300 transition-colors">
                      LinkedIn Network
                    </h4>
                    <span className="text-[11px] font-mono text-slate-400">
                      Connect with Ritika Srivastava
                    </span>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-blue-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </a>

              {/* GitHub */}
              <a
                href={identity.contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between p-4 rounded-xl bg-slate-950/70 border border-slate-800/80 mb-3 hover:border-slate-600 hover:bg-slate-900/60 transition-all"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-slate-900 border border-slate-700 flex items-center justify-center text-slate-300 group-hover:scale-110 transition-transform">
                    <Github className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white group-hover:text-cyan-300 transition-colors">
                      GitHub Repositories
                    </h4>
                    <span className="text-[11px] font-mono text-slate-400">
                      Explore Open Source & Projects
                    </span>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-cyan-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </a>

              {/* LeetCode */}
              <a
                href={identity.contact.leetcode}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between p-4 rounded-xl bg-slate-950/70 border border-slate-800/80 mb-3 hover:border-amber-500/50 hover:bg-amber-950/30 transition-all"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-amber-950/70 border border-amber-500/40 flex items-center justify-center text-amber-400 group-hover:scale-110 transition-transform">
                    <Flame className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white group-hover:text-amber-300 transition-colors">
                      LeetCode Profile
                    </h4>
                    <span className="text-[11px] font-mono text-slate-400">
                      447 Problems Solved • 300+ Days Streak
                    </span>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-amber-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </a>

              {/* Salesforce Trailhead */}
              <a
                href={identity.contact.salesforce}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between p-4 rounded-xl bg-slate-950/70 border border-slate-800/80 mb-4 hover:border-sky-500/50 hover:bg-sky-950/30 transition-all"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-sky-950/70 border border-sky-500/40 flex items-center justify-center text-sky-400 group-hover:scale-110 transition-transform">
                    <Cloud className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white group-hover:text-sky-300 transition-colors">
                      Salesforce Trailhead
                    </h4>
                    <span className="text-[11px] font-mono text-slate-400">
                      Expeditioner Rank • 66 Badges
                    </span>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-sky-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </a>
            </div>

            {/* Quick Connect Actions */}
            <div className="flex flex-wrap gap-3 pt-4 border-t border-slate-800">
              <a
                href={identity.contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 px-4 py-3 rounded-xl bg-blue-600/20 border border-blue-500/40 text-blue-300 font-mono font-bold text-xs tracking-wider flex items-center justify-center gap-2 hover:bg-blue-600/30 hover:shadow-[0_0_20px_rgba(0,102,255,0.3)] transition-all"
              >
                <Linkedin className="w-4 h-4" />
                <span>CONNECT ON LINKEDIN</span>
              </a>

              <a
                href={identity.contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 px-4 py-3 rounded-xl bg-slate-900 border border-slate-700 text-slate-200 font-mono font-bold text-xs tracking-wider flex items-center justify-center gap-2 hover:text-white hover:border-slate-500 transition-all"
              >
                <Github className="w-4 h-4" />
                <span>VIEW GITHUB</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
