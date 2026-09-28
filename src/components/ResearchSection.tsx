import React, { useState } from 'react';
import { 
  BookOpen, 
  Sparkles, 
  ZoomIn, 
  CheckCircle2, 
  ShieldCheck, 
  Workflow, 
  ArrowRight,
  BrainCircuit,
  FileCheck
} from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { LightboxModal } from './LightboxModal';

export const ResearchSection: React.FC = () => {
  const { research } = PORTFOLIO_DATA.achievements;
  const [activeStep, setActiveStep] = useState(2);
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <section className="py-16 relative bg-[#03060f] border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="glass-panel-elevated rounded-2xl p-6 sm:p-8 lg:p-10 border border-purple-500/30 shadow-[0_0_40px_rgba(168,85,247,0.18)]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Column: Research Info & Paper Mandate */}
            <div className="lg:col-span-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-950/60 border border-purple-500/40 text-purple-300 text-xs font-mono mb-3">
                <BrainCircuit className="w-4 h-4 text-purple-400" />
                <span>RESEARCH & INNOVATION • RAICCIT 2025</span>
              </div>

              <div className="flex items-center gap-3 mb-2">
                <span className="text-xs font-mono text-purple-300 bg-purple-900/60 px-2.5 py-0.5 rounded border border-purple-400/30">
                  ROLE: {research.role.toUpperCase()}
                </span>
                <span className="text-xs font-mono text-slate-400">
                  CONFERENCE PUBLICATION
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-3">
                "{research.title}"
              </h3>

              <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800 mb-6">
                <span className="text-[11px] font-mono uppercase text-purple-400 block mb-1">
                  RESEARCH FOCUS & CONTRIBUTION
                </span>
                <p className="text-sm sm:text-base text-slate-200 font-normal leading-relaxed">
                  "{research.description}"
                </p>
              </div>

              {/* Research Presentation Photo Showcase */}
              <div
                onClick={() => setModalOpen(true)}
                className="cursor-pointer group relative rounded-xl overflow-hidden border border-purple-500/30 bg-slate-950/80 p-2 hover:border-purple-400 transition-all max-w-md shadow-xl"
              >
                <div className="flex items-center justify-between text-[10px] font-mono text-slate-400 mb-1.5 px-1">
                  <span>CONFERENCE PRESENTATION PHOTO</span>
                  <ZoomIn className="w-3.5 h-3.5 text-purple-400 group-hover:scale-125 transition-transform" />
                </div>
                <div className="aspect-[16/10] w-full overflow-hidden rounded bg-slate-900 flex items-center justify-center">
                  <img
                    src={research.image}
                    alt="RAICCIT Presentation"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>
            </div>

            {/* Right Column: Interactive AI Verification Pipeline Flow */}
            <div className="lg:col-span-6">
              <div className="rounded-xl bg-slate-950/90 border border-purple-500/30 p-5 sm:p-6 shadow-2xl">
                
                <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-800">
                  <div className="flex items-center gap-2">
                    <Workflow className="w-4 h-4 text-purple-400" />
                    <span className="text-xs font-mono font-bold text-slate-200 tracking-wider">
                      AI RELIABILITY & VERIFICATION WORKFLOW
                    </span>
                  </div>
                  <span className="text-[10px] font-mono text-purple-400 bg-purple-950/80 px-2 py-0.5 rounded border border-purple-500/30">
                    CLICK STAGE
                  </span>
                </div>

                {/* 5 Steps */}
                <div className="space-y-2.5 mb-4">
                  {research.flow.map((node, idx) => {
                    const isSelected = activeStep === idx;
                    return (
                      <div
                        key={node.label}
                        onClick={() => setActiveStep(idx)}
                        className={`cursor-pointer rounded-lg p-3 transition-all duration-200 border flex items-center justify-between ${
                          isSelected
                            ? 'bg-purple-950/70 border-purple-400 shadow-[0_0_15px_rgba(168,85,247,0.3)] translate-x-1'
                            : 'bg-slate-900/40 border-slate-800 hover:border-slate-700'
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <span className={`text-[10px] font-mono font-bold ${
                            isSelected ? 'text-purple-400' : 'text-slate-500'
                          }`}>
                            {node.step}
                          </span>
                          <span className={`text-xs font-mono font-bold ${
                            isSelected ? 'text-white' : 'text-slate-300'
                          }`}>
                            {node.label}
                          </span>
                        </div>

                        <span className="text-xs text-slate-400 font-sans">
                          {node.desc}
                        </span>
                      </div>
                    );
                  })}
                </div>

                <div className="p-3.5 rounded-lg bg-purple-950/30 border border-purple-500/30 text-xs font-mono text-slate-300 flex items-center justify-between">
                  <span className="flex items-center gap-1.5 text-emerald-400">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>RAICCIT 2025 PRESENTED</span>
                  </span>
                  <span className="text-purple-300 font-bold">CO-AUTHOR CONTRIBUTION</span>
                </div>

              </div>
            </div>

          </div>
        </div>

      </div>

      <LightboxModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        imageSrc={research.image}
        title="RAICCIT 2025 Conference Presentation Award"
        subtitle="Co-Author: Hallucination-Free AI Strategies for Enhancing Accuracy in LLMs"
        details="National Conference on Recent Advancements & Innovations in Computing, Communication and Information Technologies"
      />
    </section>
  );
};
