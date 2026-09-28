import React, { useState } from 'react';
import { 
  FolderGit2, 
  Github, 
  ExternalLink, 
  Layers, 
  Database, 
  Cpu, 
  ShieldCheck, 
  Workflow, 
  CheckCircle2, 
  Sparkles,
  Server,
  CloudLightning,
  BellRing,
  FileText
} from 'lucide-react';
import { PORTFOLIO_DATA, ProjectItem } from '../data/portfolioData';

export const Projects: React.FC = () => {
  const { projects } = PORTFOLIO_DATA;
  const multiTenantProject = projects[0];
  const careConnectProject = projects[1];

  // Multi-Tenant state
  const [activeMultiStep, setActiveMultiStep] = useState<number>(1); // Default to X-ORG-ID to immediately show tenant isolation
  const [multiAspect, setMultiAspect] = useState<'architecture' | 'api' | 'security' | 'database'>('security');

  // CareConnect state
  const [activeCareStep, setActiveCareStep] = useState<number>(2); // Default to Flow Automation
  const [careAspect, setCareAspect] = useState<'flow' | 'objects' | 'security' | 'reports'>('flow');

  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-[#040711]">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-10 w-[500px] h-[400px] bg-blue-600/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-[500px] h-[400px] bg-cyan-500/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950/60 border border-cyan-500/30 text-cyan-300 text-xs font-mono mb-3">
            <FolderGit2 className="w-3.5 h-3.5 text-cyan-400" />
            <span>PRODUCTION & ENTERPRISE ARCHITECTURES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            SELECTED PROJECTS
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 mt-3 rounded-full shadow-[0_0_10px_#00e5ff]" />
          <p className="text-sm sm:text-base text-slate-400 mt-3 max-w-2xl font-mono">
            Architected backend systems, multi-tenant data isolation frameworks, and Salesforce business logic solutions.
          </p>
        </div>

        {/* ========================================================
            PROJECT 01: Multi-Tenant Task Management System
            ======================================================== */}
        <div className="mb-20 glass-panel-elevated rounded-2xl p-6 sm:p-8 lg:p-10 border border-cyan-500/30 shadow-[0_0_40px_rgba(0,102,255,0.2)]">
          
          {/* Card Top: Number, Name, Type, Stack, GitHub */}
          <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6 pb-6 border-b border-slate-800">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <span className="text-xs font-mono font-extrabold text-cyan-400 bg-cyan-950/80 px-2.5 py-1 rounded border border-cyan-500/40">
                  PROJECT 01
                </span>
                <span className="text-xs font-mono text-slate-400">
                  {multiTenantProject.type}
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight mb-3">
                {multiTenantProject.name}
              </h3>

              {/* Tech Stack Badges */}
              <div className="flex flex-wrap gap-2">
                {multiTenantProject.stack.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-md text-xs font-mono font-medium text-cyan-300 bg-blue-950/80 border border-cyan-500/30 shadow-[0_0_10px_rgba(0,102,255,0.2)]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* GitHub Button */}
            {multiTenantProject.github && (
              <a
                href={multiTenantProject.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-blue-600/20 border border-cyan-400/50 text-cyan-300 font-mono text-xs font-bold tracking-wider hover:bg-cyan-500/20 hover:border-cyan-400 hover:shadow-[0_0_20px_rgba(0,229,255,0.4)] transition-all shrink-0"
              >
                <Github className="w-4 h-4 text-cyan-300" />
                <span>VIEW ON GITHUB</span>
                <ExternalLink className="w-3.5 h-3.5 text-cyan-400" />
              </a>
            )}
          </div>

          {/* Description */}
          <div className="my-6 p-4 rounded-xl bg-slate-950/70 border border-slate-800">
            <span className="text-[11px] font-mono uppercase text-slate-400 block mb-1">
              SYSTEM MANDATE & ARCHITECTURAL OBJECTIVE
            </span>
            <p className="text-base sm:text-lg text-slate-200 font-normal">
              "{multiTenantProject.description}"
            </p>
          </div>

          {/* Key Features & Contributions Grid */}
          <div className="mb-8">
            <h4 className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider mb-3">
              ENGINEERED CONTRIBUTIONS & CORE CAPABILITIES
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
              {multiTenantProject.features.map((feat) => (
                <div
                  key={feat}
                  className="flex items-start gap-2.5 p-3 rounded-lg bg-slate-900/50 border border-slate-800 text-xs text-slate-300"
                >
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Interactive Workflow Simulation */}
          <div className="pt-6 border-t border-slate-800">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
              <div className="flex items-center gap-2">
                <Workflow className="w-4 h-4 text-cyan-400" />
                <span className="text-xs font-mono font-bold text-slate-200 tracking-wider">
                  INTERACTIVE DATA FLOW & TENANT ISOLATION PIPELINE
                </span>
              </div>

              {/* Architectural Aspect Switcher */}
              <div className="flex items-center gap-1 bg-slate-900/80 p-1 rounded-lg border border-slate-800 text-[10px] font-mono">
                <button
                  onClick={() => { setMultiAspect('security'); setActiveMultiStep(1); }}
                  className={`px-2.5 py-1 rounded transition-colors ${multiAspect === 'security' ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40' : 'text-slate-400 hover:text-white'}`}
                >
                  SECURITY / X-ORG-ID
                </button>
                <button
                  onClick={() => { setMultiAspect('architecture'); setActiveMultiStep(4); }}
                  className={`px-2.5 py-1 rounded transition-colors ${multiAspect === 'architecture' ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40' : 'text-slate-400 hover:text-white'}`}
                >
                  SERVICE LOGIC
                </button>
                <button
                  onClick={() => { setMultiAspect('database'); setActiveMultiStep(6); }}
                  className={`px-2.5 py-1 rounded transition-colors ${multiAspect === 'database' ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40' : 'text-slate-400 hover:text-white'}`}
                >
                  DATABASE
                </button>
              </div>
            </div>

            {/* 7-Step Interactive Pipeline Flow */}
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2 mb-4">
              {multiTenantProject.workflow.map((node, idx) => {
                const isSelected = activeMultiStep === idx;
                return (
                  <button
                    key={node.id}
                    onClick={() => setActiveMultiStep(idx)}
                    className={`cursor-pointer rounded-xl p-3 text-left transition-all duration-200 border relative ${
                      isSelected
                        ? 'bg-blue-950/90 border-cyan-400 shadow-[0_0_15px_rgba(0,229,255,0.4)] scale-105 z-10'
                        : 'bg-slate-900/50 border-slate-800 hover:border-slate-700'
                    }`}
                  >
                    <span className="text-[10px] font-mono text-cyan-400 block mb-1">
                      {node.step}
                    </span>
                    <h5 className={`text-xs font-bold font-mono tracking-tight ${
                      isSelected ? 'text-white' : 'text-slate-300'
                    }`}>
                      {node.label}
                    </h5>
                  </button>
                );
              })}
            </div>

            {/* Active Workflow Inspector Box */}
            <div className="p-4 sm:p-5 rounded-xl bg-blue-950/40 border border-cyan-500/30">
              <div className="flex items-center gap-2 mb-1.5">
                <span className="text-xs font-mono font-bold text-cyan-400 bg-cyan-950/80 px-2 py-0.5 rounded border border-cyan-500/30">
                  NODE {multiTenantProject.workflow[activeMultiStep].step}: {multiTenantProject.workflow[activeMultiStep].label}
                </span>
                <span className="text-sm font-bold text-white">
                  {multiTenantProject.workflow[activeMultiStep].title}
                </span>
              </div>
              <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-sans">
                {multiTenantProject.workflow[activeMultiStep].description}
              </p>
            </div>

          </div>

        </div>


        {/* ========================================================
            PROJECT 02: CareConnect — Healthcare Management System
            ======================================================== */}
        <div className="glass-panel-elevated rounded-2xl p-6 sm:p-8 lg:p-10 border border-sky-500/30 shadow-[0_0_40px_rgba(0,161,224,0.18)]">
          
          {/* Card Top: Number, Name, Type, Stack */}
          <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6 pb-6 border-b border-slate-800">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <span className="text-xs font-mono font-extrabold text-sky-400 bg-sky-950/80 px-2.5 py-1 rounded border border-sky-500/40">
                  PROJECT 02
                </span>
                <span className="text-xs font-mono text-slate-400">
                  {careConnectProject.type}
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight mb-3">
                {careConnectProject.name}
              </h3>

              {/* Tech Stack Badges */}
              <div className="flex flex-wrap gap-2">
                {careConnectProject.stack.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-md text-xs font-mono font-medium text-sky-300 bg-sky-950/70 border border-sky-500/30 shadow-[0_0_10px_rgba(0,161,224,0.2)]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-sky-950/60 border border-sky-500/30 text-sky-300 text-xs font-mono shrink-0">
              <CloudLightning className="w-4 h-4 text-sky-400" />
              <span>SALESFORCE HEALTH PLATFORM</span>
            </div>
          </div>

          {/* Description */}
          <div className="my-6 p-4 rounded-xl bg-slate-950/70 border border-slate-800">
            <span className="text-[11px] font-mono uppercase text-slate-400 block mb-1">
              SYSTEM MANDATE & CLINICAL SCOPE
            </span>
            <p className="text-base sm:text-lg text-slate-200 font-normal">
              "{careConnectProject.description}"
            </p>
          </div>

          {/* Features Grid */}
          <div className="mb-8">
            <h4 className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider mb-3">
              IMPLEMENTED CLINICAL MODULES & AUTOMATIONS
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
              {careConnectProject.features.map((feat) => (
                <div
                  key={feat}
                  className="flex items-start gap-2.5 p-3 rounded-lg bg-slate-900/50 border border-slate-800 text-xs text-slate-300"
                >
                  <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* CareConnect Interactive Workflow Simulation */}
          <div className="pt-6 border-t border-slate-800">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
              <div className="flex items-center gap-2">
                <Workflow className="w-4 h-4 text-sky-400" />
                <span className="text-xs font-mono font-bold text-slate-200 tracking-wider">
                  SALESFORCE CLINICAL DATAFLOW & FLOW AUTOMATION
                </span>
              </div>

              {/* Automation Highlight Switcher */}
              <div className="flex items-center gap-1 bg-slate-900/80 p-1 rounded-lg border border-slate-800 text-[10px] font-mono">
                <button
                  onClick={() => { setCareAspect('flow'); setActiveCareStep(2); }}
                  className={`px-2.5 py-1 rounded transition-colors ${careAspect === 'flow' ? 'bg-sky-500/20 text-sky-300 border border-sky-500/40' : 'text-slate-400 hover:text-white'}`}
                >
                  NOTIFICATION FLOW
                </button>
                <button
                  onClick={() => { setCareAspect('objects'); setActiveCareStep(6); }}
                  className={`px-2.5 py-1 rounded transition-colors ${careAspect === 'objects' ? 'bg-sky-500/20 text-sky-300 border border-sky-500/40' : 'text-slate-400 hover:text-white'}`}
                >
                  INVOICE FLOW
                </button>
                <button
                  onClick={() => { setCareAspect('security'); setActiveCareStep(3); }}
                  className={`px-2.5 py-1 rounded transition-colors ${careAspect === 'security' ? 'bg-sky-500/20 text-sky-300 border border-sky-500/40' : 'text-slate-400 hover:text-white'}`}
                >
                  PERMISSION SETS
                </button>
              </div>
            </div>

            {/* 7-Step CareConnect Interactive Flow */}
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2 mb-4">
              {careConnectProject.workflow.map((node, idx) => {
                const isSelected = activeCareStep === idx;
                return (
                  <button
                    key={node.id}
                    onClick={() => setActiveCareStep(idx)}
                    className={`cursor-pointer rounded-xl p-3 text-left transition-all duration-200 border relative ${
                      isSelected
                        ? 'bg-sky-950/90 border-sky-400 shadow-[0_0_15px_rgba(0,161,224,0.4)] scale-105 z-10'
                        : 'bg-slate-900/50 border-slate-800 hover:border-slate-700'
                    }`}
                  >
                    <span className="text-[10px] font-mono text-sky-400 block mb-1">
                      {node.step}
                    </span>
                    <h5 className={`text-xs font-bold font-mono tracking-tight ${
                      isSelected ? 'text-white' : 'text-slate-300'
                    }`}>
                      {node.label}
                    </h5>
                  </button>
                );
              })}
            </div>

            {/* Active CareConnect Step Detail Box */}
            <div className="p-4 sm:p-5 rounded-xl bg-sky-950/30 border border-sky-500/30">
              <div className="flex items-center gap-2 mb-1.5">
                <span className="text-xs font-mono font-bold text-sky-400 bg-sky-950/80 px-2 py-0.5 rounded border border-sky-500/30">
                  NODE {careConnectProject.workflow[activeCareStep].step}: {careConnectProject.workflow[activeCareStep].label}
                </span>
                <span className="text-sm font-bold text-white">
                  {careConnectProject.workflow[activeCareStep].title}
                </span>
              </div>
              <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-sans">
                {careConnectProject.workflow[activeCareStep].description}
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
