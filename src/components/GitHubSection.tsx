import React from 'react';
import { 
  Github, 
  ExternalLink, 
  FolderGit2, 
  Code2, 
  ShieldCheck, 
  Terminal,
  Database,
  Layers
} from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const GitHubSection: React.FC = () => {
  const { identity, projects } = PORTFOLIO_DATA;
  const multiTenant = projects[0];

  return (
    <section className="py-16 relative bg-[#040711] border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="glass-panel-elevated rounded-2xl p-6 sm:p-8 lg:p-10 border border-slate-700/60 shadow-[0_0_35px_rgba(0,0,0,0.5)]">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-slate-800">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-700 flex items-center justify-center text-white shadow-lg">
                <Github className="w-7 h-7" />
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs font-mono text-cyan-400 bg-cyan-950/80 px-2 py-0.5 rounded border border-cyan-500/30">
                    OPEN SOURCE REPOSITORY
                  </span>
                </div>
                <h3 className="text-2xl font-extrabold text-white tracking-tight">
                  GitHub Technical Repositories
                </h3>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <a
                href={identity.contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-slate-800 border border-slate-700 text-white font-mono text-xs font-semibold hover:bg-slate-700 hover:border-slate-500 transition-all"
              >
                <Github className="w-4 h-4" />
                <span>EXPLORE GITHUB PROFILE</span>
                <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
              </a>
            </div>
          </div>

          {/* Featured Repository Card */}
          <div className="mt-8 rounded-xl bg-slate-950/80 border border-cyan-500/30 p-6">
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-4">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <FolderGit2 className="w-4 h-4 text-cyan-400" />
                  <a
                    href={multiTenant.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg sm:text-xl font-bold font-mono text-cyan-300 hover:text-cyan-200 transition-colors flex items-center gap-1.5"
                  >
                    <span>Ritika331 / Multi-Tenant-Task-Management-System-</span>
                    <ExternalLink className="w-4 h-4 text-cyan-400" />
                  </a>
                </div>
                <p className="text-sm text-slate-300 font-sans max-w-3xl leading-relaxed">
                  {multiTenant.description}
                </p>
              </div>

              <a
                href={multiTenant.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-600/20 border border-cyan-400/50 text-cyan-300 font-mono text-xs font-bold hover:bg-cyan-500/20 transition-all shrink-0"
              >
                <span>OPEN REPOSITORY</span>
                <ExternalLink className="w-3.5 h-3.5 text-cyan-400" />
              </a>
            </div>

            {/* Tech stack tags */}
            <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-800/80">
              {multiTenant.stack.map((t) => (
                <span
                  key={t}
                  className="px-3 py-1 rounded text-xs font-mono bg-blue-950/80 border border-cyan-500/30 text-cyan-300"
                >
                  {t}
                </span>
              ))}
              <span className="px-3 py-1 rounded text-xs font-mono bg-slate-900 border border-slate-800 text-slate-400">
                Team Project
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
