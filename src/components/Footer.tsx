import React from 'react';
import { 
  Terminal, 
  Linkedin, 
  Github, 
  Flame, 
  Cloud, 
  ArrowUp,
  Heart
} from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const { identity } = PORTFOLIO_DATA;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Achievements', href: '#achievements' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="relative bg-[#02040a] text-slate-400 border-t border-cyan-500/20 pt-16 pb-12 overflow-hidden">
      
      {/* Animated Subtle Blue Neon Grid Line */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent shadow-[0_0_15px_#00e5ff] animate-pulse" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-slate-800/80">
          
          {/* Brand & Identity */}
          <div className="md:col-span-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2.5 mb-3">
                <div className="w-8 h-8 rounded-lg bg-blue-950 border border-cyan-500/40 flex items-center justify-center text-cyan-400">
                  <Terminal className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-lg font-extrabold text-white tracking-wider">
                    {identity.name}
                  </h3>
                  <p className="text-xs font-mono text-cyan-400">
                    {identity.title}
                  </p>
                </div>
              </div>
              <p className="text-xs text-slate-400 max-w-md font-mono leading-relaxed mt-2">
                Computer Science undergraduate building reliable backend systems, REST APIs, multi-tenant applications, and Salesforce solutions.
              </p>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-3 mt-6">
              <a
                href={identity.contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-cyan-300 hover:border-cyan-400/50 hover:bg-blue-950/40 transition-all"
              >
                <Linkedin className="w-4 h-4" />
              </a>

              <a
                href={identity.contact.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:border-slate-600 transition-all"
              >
                <Github className="w-4 h-4" />
              </a>

              <a
                href={identity.contact.leetcode}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LeetCode"
                className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-amber-400 hover:border-amber-400/50 transition-all"
              >
                <Flame className="w-4 h-4" />
              </a>

              <a
                href={identity.contact.salesforce}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Salesforce Trailhead"
                className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-sky-400 hover:border-sky-400/50 transition-all"
              >
                <Cloud className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="md:col-span-4">
            <h4 className="text-xs font-mono font-bold text-white uppercase tracking-wider mb-4">
              SITE MAP & ARCHITECTURE
            </h4>
            <div className="grid grid-cols-2 gap-2 text-xs font-mono">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-slate-400 hover:text-cyan-300 transition-colors py-1 flex items-center gap-1.5"
                >
                  <span className="text-cyan-500/50">›</span>
                  <span>{link.name}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Scroll to Top */}
          <div className="md:col-span-2 flex flex-col md:items-end justify-between">
            <button
              onClick={scrollToTop}
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-900 border border-slate-800 text-xs font-mono text-cyan-300 hover:bg-slate-850 hover:border-cyan-500/50 hover:shadow-[0_0_15px_rgba(0,229,255,0.2)] transition-all"
            >
              <span>TOP OF PAGE</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>

            <div className="text-[11px] font-mono text-slate-500 mt-6 md:mt-0">
              LOCATION: <br />
              <span className="text-slate-300 font-semibold">{identity.location}</span>
            </div>
          </div>

        </div>

        {/* Bottom copyright line */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
          <p>© 2026 Ritika Srivastava. All rights reserved.</p>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_6px_#10b981]" />
            <span className="text-slate-400">ENGINEERED FOR PRODUCTION</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
