import React, { useState, useEffect } from 'react';
import { 
  Flame, 
  Code, 
  CheckCircle2, 
  Send, 
  ArrowRight, 
  ExternalLink, 
  Terminal,
  Activity
} from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const LeetCodeSection: React.FC = () => {
  const { leetcode } = PORTFOLIO_DATA.achievements;
  const [activeCycleStep, setActiveCycleStep] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveCycleStep((prev) => (prev + 1) % leetcode.flow.length);
    }, 2200);
    return () => clearInterval(timer);
  }, [leetcode.flow.length]);

  return (
    <section className="py-16 relative bg-[#040711] fine-dots border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="glass-panel-elevated rounded-2xl p-6 sm:p-8 lg:p-10 border border-amber-500/30 shadow-[0_0_40px_rgba(255,161,22,0.15)]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Column: Stats & Official Profile Button */}
            <div className="lg:col-span-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-950/60 border border-amber-500/40 text-amber-300 text-xs font-mono mb-3">
                <Flame className="w-4 h-4 text-amber-400" />
                <span>LEETCODE ENGINE • CODING CONSISTENCY</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-2">
                ALGORITHMIC PROBLEM SOLVING
              </h3>

              <p className="text-sm text-slate-300 leading-relaxed mb-6 font-normal">
                Committed to daily problem solving, deep algorithmic thinking, and rigorous complexity optimization across arrays, trees, dynamic programming, and graph data structures.
              </p>

              {/* Numbers Showcase */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-6">
                <div className="p-3.5 rounded-xl bg-slate-950/70 border border-slate-800">
                  <span className="text-3xl font-extrabold text-amber-400 font-mono block">
                    {leetcode.exactSolved}
                  </span>
                  <span className="text-xs font-mono text-slate-400">Total Solved</span>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-950/70 border border-slate-800">
                  <span className="text-3xl font-extrabold text-cyan-400 font-mono block">
                    {leetcode.streak}
                  </span>
                  <span className="text-xs font-mono text-slate-400">Daily Streak</span>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-950/70 border border-slate-800">
                  <span className="text-3xl font-extrabold text-emerald-400 font-mono block">
                    {leetcode.exactActiveDays}
                  </span>
                  <span className="text-xs font-mono text-slate-400">Active Days</span>
                </div>
              </div>

              {/* CTA Button */}
              <a
                href={leetcode.profileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-amber-600 to-amber-500 text-black font-mono font-bold text-xs tracking-wider hover:shadow-[0_0_25px_rgba(255,161,22,0.5)] transition-all transform hover:-translate-y-0.5"
              >
                <span>VIEW LEETCODE PROFILE</span>
                <ExternalLink className="w-4 h-4 text-black" />
              </a>
            </div>

            {/* Right Column: Animated Coding Consistency Pipeline & Simulated Terminal */}
            <div className="lg:col-span-6">
              
              {/* Terminal Frame */}
              <div className="rounded-xl bg-slate-950 border border-amber-500/30 overflow-hidden shadow-2xl">
                
                {/* Window Bar */}
                <div className="px-4 py-2.5 bg-slate-900/90 border-b border-slate-800 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                  </div>
                  <span className="text-[10px] font-mono text-slate-400">
                    leetcode_solution.java • STREAK ACTIVE
                  </span>
                  <div className="w-4" />
                </div>

                {/* 5-Step Animated Consistency Pipeline */}
                <div className="p-4 sm:p-5">
                  <div className="text-[10px] font-mono text-slate-400 uppercase tracking-wider mb-3 flex items-center gap-1.5">
                    <Activity className="w-3 h-3 text-amber-400" />
                    <span>DAILY SUBMISSION PIPELINE CYCLE</span>
                  </div>

                  <div className="space-y-2.5">
                    {leetcode.flow.map((node, idx) => {
                      const isActive = activeCycleStep === idx;
                      return (
                        <div
                          key={node.label}
                          onClick={() => setActiveCycleStep(idx)}
                          className={`cursor-pointer rounded-lg p-3 transition-all duration-200 border flex items-center justify-between ${
                            isActive
                              ? 'bg-amber-950/60 border-amber-400 shadow-[0_0_15px_rgba(255,161,22,0.3)] translate-x-1'
                              : 'bg-slate-900/40 border-slate-800/80 hover:border-slate-700'
                          }`}
                        >
                          <div className="flex items-center gap-3">
                            <span className={`text-[10px] font-mono font-bold ${
                              isActive ? 'text-amber-400' : 'text-slate-500'
                            }`}>
                              {node.step}
                            </span>
                            <span className={`text-xs font-mono font-bold ${
                              isActive ? 'text-white' : 'text-slate-300'
                            }`}>
                              {node.label}
                            </span>
                          </div>

                          <span className="text-[11px] font-sans text-slate-400">
                            {node.desc}
                          </span>
                        </div>
                      );
                    })}
                  </div>

                  {/* Terminal Execution Feedback */}
                  <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-mono text-slate-400">
                    <span className="text-emerald-400 flex items-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      Status: Accepted (0ms, 100%)
                    </span>
                    <span className="text-amber-400">Streak: 300+ Days</span>
                  </div>

                </div>

              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
