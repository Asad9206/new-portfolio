import React from 'react';
import { GraduationCap, Calendar, Award, BookOpen, Building } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const Education: React.FC = () => {
  const { education } = PORTFOLIO_DATA;

  return (
    <section id="education" className="py-24 relative overflow-hidden bg-[#03060f]">
      {/* Background glow */}
      <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950/60 border border-cyan-500/30 text-cyan-300 text-xs font-mono mb-3">
            <GraduationCap className="w-3.5 h-3.5 text-cyan-400" />
            <span>ACADEMIC FOUNDATION</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            EDUCATION
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 mt-3 rounded-full shadow-[0_0_10px_#00e5ff]" />
          <p className="text-sm sm:text-base text-slate-400 mt-3 max-w-xl font-mono">
            Academic milestones spanning secondary schooling to current Computer Science & Engineering undergraduate studies.
          </p>
        </div>

        {/* Timeline Visualization: 2019 → 2022 → 2023 → 2027 */}
        <div className="relative">
          {/* Vertical Glowing Line for Desktop */}
          <div className="hidden md:block absolute left-1/2 top-4 bottom-4 -translate-x-1/2 w-0.5 bg-gradient-to-b from-blue-500 via-cyan-400 to-blue-600 shadow-[0_0_12px_rgba(0,229,255,0.4)]" />

          <div className="space-y-12">
            {education.map((item, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div 
                  key={item.degree}
                  className={`relative flex flex-col md:flex-row items-center gap-6 ${
                    isEven ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Center Node on Timeline */}
                  <div className="hidden md:flex absolute left-1/2 top-6 -translate-x-1/2 w-8 h-8 rounded-full bg-[#040711] border-2 border-cyan-400 items-center justify-center shadow-[0_0_15px_rgba(0,229,255,0.6)] z-20">
                    <span className="w-2.5 h-2.5 rounded-full bg-cyan-300" />
                  </div>

                  {/* Empty spacer for alignment */}
                  <div className="hidden md:block md:w-1/2" />

                  {/* Card Content */}
                  <div className="w-full md:w-1/2">
                    <div className="glass-panel-elevated rounded-2xl p-6 sm:p-7 border border-cyan-500/25 hover:border-cyan-400/50 transition-all duration-300 group hover:shadow-[0_0_30px_rgba(0,102,255,0.2)]">
                      
                      {/* Top Header & Year Pill */}
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-950/80 border border-cyan-500/40 text-cyan-300 text-xs font-mono">
                          <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                          <span>{item.period}</span>
                        </div>

                        {/* Score Badge */}
                        <div className="inline-flex items-center gap-1 px-3 py-1 rounded-lg bg-emerald-950/60 border border-emerald-500/40 text-emerald-300 text-xs font-mono font-bold">
                          <Award className="w-3.5 h-3.5 text-emerald-400" />
                          <span>{item.scoreLabel}: {item.score}</span>
                        </div>
                      </div>

                      {/* Degree / Standard Name */}
                      <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-cyan-300 transition-colors mb-2">
                        {item.degree}
                      </h3>

                      {/* Institution */}
                      <div className="flex items-center gap-2 text-slate-300 text-sm font-medium mb-3">
                        <Building className="w-4 h-4 text-cyan-400 shrink-0" />
                        <span>{item.institution}</span>
                      </div>

                      {/* University or Board */}
                      <div className="pt-3 border-t border-slate-800/80 flex items-center gap-2 text-xs font-mono text-slate-400">
                        <BookOpen className="w-3.5 h-3.5 text-slate-500 shrink-0" />
                        <span>Affiliation: {item.boardOrUniversity}</span>
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
