import React, { useState } from 'react';
import { 
  Cloud, 
  ExternalLink, 
  CheckCircle2, 
  Layers, 
  Zap, 
  Code, 
  Workflow, 
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const SalesforceSection: React.FC = () => {
  const { salesforce } = PORTFOLIO_DATA.achievements;
  const [activeEcoStep, setActiveEcoStep] = useState(2);

  return (
    <section className="py-16 relative bg-[#03060f] border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="glass-panel-elevated rounded-2xl p-6 sm:p-8 lg:p-10 border border-sky-500/30 shadow-[0_0_40px_rgba(0,161,224,0.18)]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Column: Stats & Platform Button */}
            <div className="lg:col-span-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-950/60 border border-sky-500/40 text-sky-300 text-xs font-mono mb-3">
                <Cloud className="w-4 h-4 text-sky-400" />
                <span>SALESFORCE ECOSYSTEM & TRAILHEAD</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-2">
                SALESFORCE EXPEDITIONER
              </h3>

              <p className="text-sm text-slate-300 leading-relaxed mb-6 font-normal">
                Hands-on platform experience spanning administrative configuration, custom object modeling, record-triggered flows, validation rules, formula fields, and role-based permission architectures.
              </p>

              {/* Stats Grid */}
              <div className="grid grid-cols-3 gap-3 mb-6">
                <div className="p-3.5 rounded-xl bg-slate-950/70 border border-slate-800 text-center">
                  <span className="text-2xl font-extrabold text-sky-400 font-mono block">
                    {salesforce.badges}
                  </span>
                  <span className="text-xs font-mono text-slate-400">Badges</span>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-950/70 border border-slate-800 text-center">
                  <span className="text-2xl font-extrabold text-cyan-400 font-mono block">
                    {salesforce.superbadges}
                  </span>
                  <span className="text-xs font-mono text-slate-400">Superbadge</span>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-950/70 border border-slate-800 text-center">
                  <span className="text-2xl font-extrabold text-amber-400 font-mono block">
                    {salesforce.points}
                  </span>
                  <span className="text-xs font-mono text-slate-400">Points</span>
                </div>
              </div>

              {/* View Button */}
              <a
                href={salesforce.profileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-sky-600 to-blue-600 text-white font-mono font-bold text-xs tracking-wider hover:shadow-[0_0_25px_rgba(0,161,224,0.5)] transition-all transform hover:-translate-y-0.5"
              >
                <span>VIEW SALESFORCE TRAILHEAD</span>
                <ExternalLink className="w-4 h-4 text-white" />
              </a>
            </div>

            {/* Right Column: Conceptual Data Ecosystem Visualization */}
            <div className="lg:col-span-7">
              <div className="rounded-xl bg-slate-950/90 border border-sky-500/30 p-5 sm:p-6 shadow-2xl">
                
                <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-800">
                  <div className="flex items-center gap-2">
                    <Workflow className="w-4 h-4 text-sky-400" />
                    <span className="text-xs font-mono font-bold text-slate-200 tracking-wider">
                      CONCEPTUAL SALESFORCE DATA ECOSYSTEM
                    </span>
                  </div>
                  <span className="text-[10px] font-mono text-sky-400 bg-sky-950/80 px-2 py-0.5 rounded border border-sky-500/30">
                    INTERACTIVE ECOSYSTEM
                  </span>
                </div>

                {/* 6 Conceptual Ecosystem Nodes */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 mb-4">
                  {salesforce.flow.map((node, idx) => {
                    const isSelected = activeEcoStep === idx;
                    return (
                      <button
                        key={node.label}
                        onClick={() => setActiveEcoStep(idx)}
                        className={`cursor-pointer rounded-xl p-3 text-left transition-all duration-200 border ${
                          isSelected
                            ? 'bg-sky-950/90 border-sky-400 shadow-[0_0_15px_rgba(0,161,224,0.4)] scale-105 z-10'
                            : 'bg-slate-900/50 border-slate-800 hover:border-slate-700'
                        }`}
                      >
                        <span className="text-[10px] font-mono text-sky-400 block mb-1">
                          {node.step}
                        </span>
                        <h4 className={`text-xs font-bold font-mono tracking-tight ${
                          isSelected ? 'text-white' : 'text-slate-300'
                        }`}>
                          {node.label}
                        </h4>
                      </button>
                    );
                  })}
                </div>

                {/* Inspector Detail Box */}
                <div className="p-4 rounded-xl bg-sky-950/30 border border-sky-500/30">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs font-mono font-bold text-sky-400 bg-sky-950/80 px-2 py-0.5 rounded border border-sky-500/30">
                      NODE {salesforce.flow[activeEcoStep].step}: {salesforce.flow[activeEcoStep].label}
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-sans">
                    {salesforce.flow[activeEcoStep].desc}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-mono text-slate-400">
                  <span className="text-emerald-400 flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>TRAILBLAZER VERIFIED</span>
                  </span>
                  <span className="text-sky-400">RANK: EXPEDITIONER</span>
                </div>

              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
