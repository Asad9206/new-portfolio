import React, { useState } from 'react';
import { 
  Briefcase, 
  Calendar, 
  MapPin, 
  CheckCircle2, 
  Eye, 
  Sliders, 
  ShieldCheck, 
  Sparkles,
  ArrowRight,
  Cpu
} from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const Experience: React.FC = () => {
  const { experience } = PORTFOLIO_DATA;
  const [activeStep, setActiveStep] = useState<number>(0);

  return (
    <section id="experience" className="py-24 relative overflow-hidden bg-[#03060f]">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 right-10 w-96 h-96 bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950/60 border border-cyan-500/30 text-cyan-300 text-xs font-mono mb-3">
            <Briefcase className="w-3.5 h-3.5 text-cyan-400" />
            <span>INDUSTRY INTERNSHIP</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            EXPERIENCE
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 mt-3 rounded-full shadow-[0_0_10px_#00e5ff]" />
          <p className="text-sm sm:text-base text-slate-400 mt-3 max-w-xl font-mono">
            Practical industry evaluation experience assessing AI-generated outputs for quality, precision, and prompt compliance.
          </p>
        </div>

        {/* Experience Showcase Card */}
        <div className="glass-panel-elevated rounded-2xl p-6 sm:p-8 lg:p-10 border border-cyan-500/30 shadow-[0_0_35px_rgba(0,102,255,0.2)] mb-12">
          
          {/* Header row: Role, Company, Period, Badges */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-slate-800">
            <div>
              <div className="flex flex-wrap items-center gap-2.5 mb-2">
                <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-blue-900/60 text-cyan-300 border border-cyan-500/40">
                  {experience.type}
                </span>
                <span className="px-3 py-1 rounded-full text-xs font-mono bg-emerald-950/60 text-emerald-300 border border-emerald-500/40">
                  COMPLETED
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                {experience.role}
              </h3>
              
              <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mt-2 text-slate-300 text-sm">
                <span className="font-semibold text-cyan-300">{experience.company}</span>
                <span className="text-slate-500">•</span>
                <span className="text-slate-400 font-mono text-xs">{experience.partner}</span>
              </div>
            </div>

            <div className="flex flex-wrap lg:flex-col items-start lg:items-end gap-2 text-xs font-mono text-slate-400">
              <div className="flex items-center gap-1.5 bg-slate-900/80 px-3 py-1.5 rounded-lg border border-slate-800">
                <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                <span>{experience.period}</span>
              </div>
              <div className="flex items-center gap-1.5 bg-slate-900/80 px-3 py-1.5 rounded-lg border border-slate-800">
                <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                <span>{experience.location}</span>
              </div>
            </div>
          </div>

          {/* Description statement */}
          <div className="my-6 p-4 rounded-xl bg-slate-950/70 border border-slate-800/80">
            <span className="text-[11px] font-mono uppercase text-slate-400 block mb-1">
              OFFICIAL MANDATE & SCOPE
            </span>
            <p className="text-base sm:text-lg text-slate-200 font-normal">
              "{experience.description}"
            </p>
          </div>

          {/* Interactive AI Model Annotation Visual Simulation */}
          <div className="mt-8">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <Sliders className="w-4 h-4 text-cyan-400" />
                <span className="text-xs font-mono font-bold text-slate-200 tracking-wider">
                  AI EVALUATION WORKFLOW SIMULATION
                </span>
              </div>
              <span className="text-[10px] font-mono text-cyan-400 bg-cyan-950/70 px-2 py-0.5 rounded border border-cyan-500/30">
                CLICK STEP TO INSPECT
              </span>
            </div>

            {/* 6 Steps Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5 mb-6">
              {experience.workflowSteps.map((step, idx) => {
                const isCurrent = activeStep === idx;
                return (
                  <div
                    key={step.step}
                    onClick={() => setActiveStep(idx)}
                    className={`cursor-pointer rounded-xl p-3 text-center transition-all duration-200 border ${
                      isCurrent
                        ? 'bg-blue-950/90 border-cyan-400 shadow-[0_0_15px_rgba(0,229,255,0.4)] scale-105'
                        : 'bg-slate-900/50 border-slate-800 hover:border-slate-700'
                    }`}
                  >
                    <span className="text-[10px] font-mono text-cyan-400 block mb-1">
                      STEP {step.step}
                    </span>
                    <h4 className={`text-xs font-bold font-mono tracking-tight leading-snug ${
                      isCurrent ? 'text-white' : 'text-slate-300'
                    }`}>
                      {step.label}
                    </h4>
                  </div>
                );
              })}
            </div>

            {/* Active Step Details Banner */}
            <div className="p-4 sm:p-5 rounded-xl bg-blue-950/40 border border-cyan-500/30 flex items-start gap-4">
              <div className="w-9 h-9 rounded-lg bg-blue-900/60 border border-cyan-400/50 flex items-center justify-center shrink-0">
                <Eye className="w-4 h-4 text-cyan-300" />
              </div>
              <div>
                <span className="text-xs font-mono font-bold text-cyan-300 uppercase block mb-1">
                  STAGE {experience.workflowSteps[activeStep].step}: {experience.workflowSteps[activeStep].label}
                </span>
                <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-sans">
                  {experience.workflowSteps[activeStep].description}
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
