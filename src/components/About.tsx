import React, { useState } from 'react';
import { 
  Layers, 
  Cpu, 
  Database, 
  Radio, 
  CheckCircle2, 
  MapPin, 
  GraduationCap, 
  Code2, 
  Server,
  CloudLightning
} from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface SystemLayer {
  name: string;
  level: string;
  role: string;
  tech: string[];
  responsibilities: string;
}

const SYSTEM_LAYERS: SystemLayer[] = [
  {
    name: "API Layer",
    level: "Layer 01",
    role: "Ingestion & Security Gateway",
    tech: ["REST Controllers", "X-ORG-ID Header", "Input Validation", "Global Exception Handler"],
    responsibilities: "Receives HTTP requests, validates incoming DTO payloads, enforces tenant header presence, and returns standardized JSON responses."
  },
  {
    name: "Service Layer",
    level: "Layer 02",
    role: "Domain Logic & Orchestration",
    tech: ["Spring Services", "Business Rules", "Transaction Management", "Multi-Tenancy Guard"],
    responsibilities: "Executes business operations, applies role checks, orchestrates data modifications, and prevents cross-organization leakage."
  },
  {
    name: "Repository Layer",
    level: "Layer 03",
    role: "Data Access Abstraction",
    tech: ["Spring Data JPA", "Entity Mappings", "Parameterized Queries", "Hibernate ORM"],
    responsibilities: "Translates domain requests into tenant-scoped database queries, managing entity relationships and lifecycle states."
  },
  {
    name: "Database Layer",
    level: "Layer 04",
    role: "Relational Persistence",
    tech: ["PostgreSQL", "MySQL", "ACID Compliance", "Normalized Schemas"],
    responsibilities: "Durable, high-throughput storage ensuring strict data consistency, index efficiency, and organizational data isolation."
  }
];

export const About: React.FC = () => {
  const { identity } = PORTFOLIO_DATA;
  const [activeLayer, setActiveLayer] = useState(0);

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-[#040711]">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-blue-600/10 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950/60 border border-cyan-500/30 text-cyan-300 text-xs font-mono mb-3">
            <Radio className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
            <span>CORE ARCHITECTURAL IDENTITY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            ABOUT ME
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 mt-3 rounded-full shadow-[0_0_10px_#00e5ff]" />
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Professional Summary & Key Fact Pills */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            
            <div className="glass-panel-elevated rounded-2xl p-6 sm:p-8 border border-cyan-500/20 mb-8">
              <p className="text-lg sm:text-xl text-slate-200 leading-relaxed font-normal mb-6">
                "{identity.about}"
              </p>

              {/* Factual Information Pills */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6 border-t border-slate-800/80">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-blue-950/70 border border-blue-500/30 flex items-center justify-center shrink-0">
                    <MapPin className="w-4 h-4 text-cyan-400" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-slate-400 block uppercase">Location</span>
                    <span className="text-sm font-semibold text-white">{identity.location}</span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-blue-950/70 border border-blue-500/30 flex items-center justify-center shrink-0">
                    <GraduationCap className="w-4 h-4 text-cyan-400" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-slate-400 block uppercase">Education</span>
                    <span className="text-sm font-semibold text-white">B.Tech CSE (2023–2027)</span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-blue-950/70 border border-blue-500/30 flex items-center justify-center shrink-0">
                    <Server className="w-4 h-4 text-cyan-400" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-slate-400 block uppercase">Primary Focus</span>
                    <span className="text-sm font-semibold text-white">Backend & Multi-Tenant Systems</span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-blue-950/70 border border-blue-500/30 flex items-center justify-center shrink-0">
                    <CloudLightning className="w-4 h-4 text-cyan-400" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-slate-400 block uppercase">Cloud Ecosystem</span>
                    <span className="text-sm font-semibold text-white">Salesforce Admin & Dev</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Core Competencies Quick Badges */}
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1.5 rounded-lg bg-slate-900/80 border border-slate-800 text-xs font-mono text-slate-300">
                Data Structures & Algorithms
              </span>
              <span className="px-3 py-1.5 rounded-lg bg-slate-900/80 border border-slate-800 text-xs font-mono text-slate-300">
                Object-Oriented Programming
              </span>
              <span className="px-3 py-1.5 rounded-lg bg-slate-900/80 border border-slate-800 text-xs font-mono text-slate-300">
                Database Management Systems
              </span>
              <span className="px-3 py-1.5 rounded-lg bg-slate-900/80 border border-slate-800 text-xs font-mono text-slate-300">
                Operating Systems
              </span>
            </div>

          </div>

          {/* Right Column: Layer-by-Layer Assembled Backend System Visual */}
          <div className="lg:col-span-6">
            <div className="glass-panel-elevated rounded-2xl p-6 sm:p-7 border border-cyan-500/30">
              
              <div className="flex items-center justify-between pb-4 mb-5 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <Layers className="w-4 h-4 text-cyan-400" />
                  <span className="text-xs font-mono font-bold text-slate-200 tracking-wider">
                    SYSTEM ARCHITECTURE ASSEMBLY
                  </span>
                </div>
                <span className="text-[10px] font-mono text-cyan-400 bg-cyan-950/60 px-2 py-0.5 rounded border border-cyan-500/30">
                  CLICK LAYER TO INSPECT
                </span>
              </div>

              {/* 4 Interactive Layers */}
              <div className="space-y-3">
                {SYSTEM_LAYERS.map((layer, index) => {
                  const isSelected = activeLayer === index;
                  return (
                    <div
                      key={layer.name}
                      onClick={() => setActiveLayer(index)}
                      className={`cursor-pointer rounded-xl p-4 transition-all duration-200 border ${
                        isSelected
                          ? 'bg-blue-950/80 border-cyan-400 shadow-[0_0_20px_rgba(0,229,255,0.25)] translate-x-1'
                          : 'bg-slate-900/60 border-slate-800 hover:border-slate-700'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-2.5">
                          <span className={`w-2 h-2 rounded-full ${isSelected ? 'bg-cyan-400 shadow-[0_0_8px_#00e5ff]' : 'bg-slate-600'}`} />
                          <h4 className="font-bold text-sm text-white">{layer.name}</h4>
                          <span className="text-[10px] font-mono text-cyan-400/80 uppercase">
                            • {layer.role}
                          </span>
                        </div>
                        <span className="text-[10px] font-mono text-slate-500">{layer.level}</span>
                      </div>

                      {/* Tech Chips */}
                      <div className="flex flex-wrap gap-1.5 mb-2">
                        {layer.tech.map((t) => (
                          <span
                            key={t}
                            className={`px-2 py-0.5 rounded text-[10px] font-mono ${
                              isSelected
                                ? 'bg-cyan-950/80 text-cyan-300 border border-cyan-500/30'
                                : 'bg-slate-800 text-slate-400'
                            }`}
                          >
                            {t}
                          </span>
                        ))}
                      </div>

                      {isSelected && (
                        <p className="text-xs text-slate-300 mt-2 pt-2 border-t border-cyan-500/20 leading-relaxed font-sans animate-in fade-in duration-150">
                          {layer.responsibilities}
                        </p>
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Status footer */}
              <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-mono text-slate-400">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  <span>LAYER ISOLATION VERIFIED</span>
                </span>
                <span className="text-cyan-400">DATA STACK: JAVA + SPRING + POSTGRESQL</span>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
