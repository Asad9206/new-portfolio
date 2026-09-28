import React, { useState } from 'react';
import { 
  Code2, 
  Layers, 
  Database, 
  Cloud, 
  BookOpen, 
  Wrench, 
  Sparkles, 
  Link as LinkIcon,
  CheckCircle,
  Cpu
} from 'lucide-react';
import { PORTFOLIO_DATA, SkillItem } from '../data/portfolioData';

export const Skills: React.FC = () => {
  const { skills, skillCategories } = PORTFOLIO_DATA;
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeSkill, setActiveSkill] = useState<SkillItem>(skills[0]); // Default to Java

  const filteredSkills = selectedCategory === 'all' 
    ? skills 
    : skills.filter(s => s.category === selectedCategory);

  const getCategoryIcon = (catId: string) => {
    switch (catId) {
      case 'languages': return Code2;
      case 'frameworks': return Layers;
      case 'databases': return Database;
      case 'salesforce': return Cloud;
      case 'concepts': return BookOpen;
      case 'tools': return Wrench;
      default: return Cpu;
    }
  };

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-[#040711] tech-grid">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/3 w-[500px] h-[300px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-[400px] h-[300px] bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950/60 border border-cyan-500/30 text-cyan-300 text-xs font-mono mb-3">
              <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
              <span>INTERACTIVE TECHNICAL ECOSYSTEM</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
              TECHNICAL SKILLS
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 mt-3 rounded-full shadow-[0_0_10px_#00e5ff]" />
          </div>

          <p className="text-sm text-slate-400 max-w-md font-mono">
            Interactive skill clusters. Click or hover any technology node to inspect its architectural role and ecosystem connections.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-2 mb-10 pb-2 border-b border-slate-800">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-4 py-2 rounded-lg text-xs font-mono tracking-wider font-semibold transition-all ${
              selectedCategory === 'all'
                ? 'bg-blue-600 text-white shadow-[0_0_15px_rgba(0,102,255,0.4)]'
                : 'bg-slate-900/60 text-slate-400 hover:text-white hover:bg-slate-800'
            }`}
          >
            ALL CLUSTERS ({skills.length})
          </button>

          {skillCategories.map((cat) => {
            const Icon = getCategoryIcon(cat.id);
            const isSelected = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-mono tracking-wider font-semibold transition-all ${
                  isSelected
                    ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-400 shadow-[0_0_15px_rgba(0,229,255,0.3)]'
                    : 'bg-slate-900/60 text-slate-400 border border-transparent hover:text-slate-200 hover:border-slate-800'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{cat.title}</span>
              </button>
            );
          })}
        </div>

        {/* Two-Column Interactive Layout: Grid of Nodes + Deep Inspector Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Interactive Technical Cluster Grid */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {filteredSkills.map((skill) => {
                const isActive = activeSkill.name === skill.name;
                const isRelated = activeSkill.related.includes(skill.name);
                const Icon = getCategoryIcon(skill.category);

                return (
                  <div
                    key={skill.name}
                    onClick={() => setActiveSkill(skill)}
                    onMouseEnter={() => setActiveSkill(skill)}
                    className={`cursor-pointer rounded-xl p-3.5 transition-all duration-200 relative overflow-hidden group border ${
                      isActive
                        ? 'bg-blue-950/90 border-cyan-400 shadow-[0_0_20px_rgba(0,229,255,0.35)] scale-[1.03]'
                        : isRelated
                        ? 'bg-slate-900/90 border-blue-500/60 text-cyan-200 shadow-[0_0_12px_rgba(0,102,255,0.25)]'
                        : 'bg-slate-900/50 border-slate-800 hover:border-slate-700 hover:bg-slate-900/80'
                    }`}
                  >
                    {/* Active indicator dot */}
                    <div className="flex items-center justify-between mb-2">
                      <div className={`w-7 h-7 rounded-md flex items-center justify-center ${
                        isActive 
                          ? 'bg-cyan-400/20 text-cyan-300' 
                          : isRelated 
                          ? 'bg-blue-600/20 text-cyan-400' 
                          : 'bg-slate-800/80 text-slate-400 group-hover:text-slate-200'
                      }`}>
                        <Icon className="w-3.5 h-3.5" />
                      </div>
                      
                      {isRelated && !isActive && (
                        <span className="text-[9px] font-mono text-cyan-400 bg-cyan-950/80 px-1.5 py-0.5 rounded border border-cyan-500/30">
                          LINKED
                        </span>
                      )}
                    </div>

                    <h3 className={`text-xs sm:text-sm font-bold font-mono tracking-tight ${
                      isActive 
                        ? 'text-cyan-300' 
                        : isRelated
                        ? 'text-white'
                        : 'text-slate-300 group-hover:text-white'
                    }`}>
                      {skill.name}
                    </h3>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Node Inspector & Relationship Topology */}
          <div className="lg:col-span-5 sticky top-24">
            <div className="glass-panel-elevated rounded-2xl p-6 sm:p-7 border border-cyan-500/30 shadow-[0_0_35px_rgba(0,102,255,0.2)]">
              
              {/* Header */}
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-800">
                <span className="text-[11px] font-mono text-cyan-400 uppercase tracking-widest flex items-center gap-1.5">
                  <Cpu className="w-3.5 h-3.5" />
                  NODE TELEMETRY
                </span>
                <span className="text-[10px] font-mono text-slate-400 bg-slate-800/80 px-2 py-0.5 rounded">
                  CATEGORY: {activeSkill.category.toUpperCase()}
                </span>
              </div>

              {/* Active Skill Title */}
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-blue-900/40 border border-cyan-400/40 flex items-center justify-center text-cyan-300 shadow-[0_0_15px_rgba(0,229,255,0.3)]">
                  {React.createElement(getCategoryIcon(activeSkill.category), { className: "w-5 h-5" })}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white tracking-wide">
                    {activeSkill.name}
                  </h3>
                  <span className="text-xs font-mono text-cyan-400">
                    Engineered in Ritika's Stack
                  </span>
                </div>
              </div>

              {/* Factual Description */}
              <p className="text-sm text-slate-200 leading-relaxed font-sans mb-6 bg-slate-950/60 p-4 rounded-xl border border-slate-800">
                {activeSkill.description}
              </p>

              {/* Related Connected Technologies */}
              <div>
                <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block mb-2.5 flex items-center gap-1.5">
                  <LinkIcon className="w-3.5 h-3.5 text-cyan-400" />
                  CONNECTED TECHNOLOGIES ({activeSkill.related.length}):
                </span>

                <div className="flex flex-wrap gap-2">
                  {activeSkill.related.map((relName) => (
                    <span
                      key={relName}
                      className="px-3 py-1 rounded-lg text-xs font-mono font-medium text-cyan-300 bg-blue-950/80 border border-cyan-500/40 shadow-[0_0_10px_rgba(0,102,255,0.2)]"
                    >
                      {relName}
                    </span>
                  ))}
                </div>
              </div>

              {/* Verified Status Banner */}
              <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-mono text-slate-400">
                <span className="flex items-center gap-1.5 text-emerald-400">
                  <CheckCircle className="w-3.5 h-3.5" />
                  <span>FACTUAL DATA GROUNDED</span>
                </span>
                <span className="text-slate-500">NO ESTIMATED RATINGS</span>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
