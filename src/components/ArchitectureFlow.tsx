import React, { useState } from 'react';
import { 
  Users, 
  Send, 
  Layers, 
  Cpu, 
  Database, 
  CheckCircle2, 
  ShieldCheck, 
  Activity,
  ArrowRight
} from 'lucide-react';

interface Stage {
  id: string;
  name: string;
  badge: string;
  icon: React.ElementType;
  tech: string;
  metric: string;
  summary: string;
  details: string;
}

const STAGES: Stage[] = [
  {
    id: 'user',
    name: '01. USER CLIENT',
    badge: 'CLIENT REQUEST',
    icon: Users,
    tech: 'HTTP/HTTPS REST Client',
    metric: 'Tenant Context: Org Alpha',
    summary: 'Client initiates authenticated request with organizational payload and headers.',
    details: 'Each request encapsulates specific operations, such as task status updates or organization queries, initiating the backend request pipeline.'
  },
  {
    id: 'api',
    name: '02. API REQUEST',
    badge: 'GATEWAY ROUTING',
    icon: Send,
    tech: 'REST Controllers & X-ORG-ID',
    metric: 'Validation: 100% Passed',
    summary: 'Endpoint routing, tenant header extraction, and global exception mapping.',
    details: 'Tenant isolation begins here: the custom header X-ORG-ID is verified, binding the execution thread to the organization context.'
  },
  {
    id: 'spring',
    name: '03. SPRING BOOT',
    badge: 'CORE FRAMEWORK',
    icon: Layers,
    tech: 'Spring Boot 3.x / Java',
    metric: 'Inversion of Control: Active',
    summary: 'Dependency injection container, security filters, and request dispatcher.',
    details: 'Handles lifecycle management, autowiring, and global error handling strategies ensuring robust enterprise stability.'
  },
  {
    id: 'service',
    name: '04. SERVICE LAYER',
    badge: 'BUSINESS LOGIC',
    icon: Cpu,
    tech: 'Domain Service Handlers',
    metric: 'Data Isolation: Strict',
    summary: 'Executes core task management workflows and multi-tenant constraints.',
    details: 'Business policies, status transitions, role checks, and entity calculations are evaluated within the active organization boundary.'
  },
  {
    id: 'database',
    name: '05. DATABASE LAYER',
    badge: 'PERSISTENCE',
    icon: Database,
    tech: 'PostgreSQL + Spring Data JPA',
    metric: 'ACID Compliance: Verified',
    summary: 'Relational data persistence with tenant-scoped query execution.',
    details: 'JPA repositories automatically constrain queries with organization criteria, guaranteeing that organizations cannot read or mutate rival data.'
  }
];

export const ArchitectureFlow: React.FC = () => {
  const [selectedStage, setSelectedStage] = useState<number>(1);

  return (
    <div className="relative py-12 border-y border-cyan-500/15 bg-[#03060f]/80 backdrop-blur-md overflow-hidden fine-dots">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <div className="flex items-center gap-2 text-cyan-400 font-mono text-xs tracking-widest uppercase mb-1">
              <Activity className="w-3.5 h-3.5 animate-pulse text-cyan-300" />
              <span>Scroll-Synchronized Data Conduit</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              BACKEND REQUEST PIPELINE
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-slate-400 max-w-md font-mono">
            Interactive visualization showing how an incoming request travels seamlessly through Ritika's layered architecture to the database.
          </p>
        </div>

        {/* 5-Step Pipeline Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 relative mb-6">
          {STAGES.map((stage, idx) => {
            const isSelected = selectedStage === idx;
            const Icon = stage.icon;
            return (
              <div
                key={stage.id}
                onClick={() => setSelectedStage(idx)}
                className={`cursor-pointer rounded-xl p-4 transition-all duration-300 relative overflow-hidden group ${
                  isSelected
                    ? 'bg-blue-950/80 border-2 border-cyan-400 shadow-[0_0_25px_rgba(0,229,255,0.3)] scale-[1.02]'
                    : 'bg-slate-900/60 border border-slate-800 hover:border-cyan-500/40 hover:bg-slate-900/90'
                }`}
              >
                {/* Top glow indicator */}
                {isSelected && (
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 shadow-[0_0_8px_#00e5ff]" />
                )}

                <div className="flex items-center justify-between mb-3">
                  <span className="text-[11px] font-mono font-bold text-slate-400">
                    {stage.name}
                  </span>
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                    isSelected ? 'bg-cyan-500/20 text-cyan-300' : 'bg-slate-800 text-slate-400 group-hover:text-cyan-400'
                  }`}>
                    <Icon className="w-4 h-4" />
                  </div>
                </div>

                <div className="mb-2">
                  <span className="text-[10px] font-mono text-cyan-400/90 uppercase tracking-wider block">
                    {stage.badge}
                  </span>
                  <h3 className="text-sm font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {stage.tech}
                  </h3>
                </div>

                <div className="pt-2 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-mono text-slate-400">
                  <span>{stage.metric}</span>
                  {idx < STAGES.length - 1 && (
                    <ArrowRight className="w-3.5 h-3.5 text-cyan-500/70 hidden lg:block" />
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Selected Stage Detail Panel */}
        <div className="rounded-xl glass-panel-elevated p-5 sm:p-6 border border-cyan-500/30 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-blue-900/40 border border-cyan-500/40 flex items-center justify-center shrink-0 shadow-[0_0_15px_rgba(0,102,255,0.3)]">
              {React.createElement(STAGES[selectedStage].icon, { className: "w-6 h-6 text-cyan-300" })}
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-xs font-mono font-bold text-cyan-400 bg-cyan-950/60 px-2 py-0.5 rounded border border-cyan-500/30">
                  STAGE {selectedStage + 1} OF 5
                </span>
                <span className="text-sm font-bold text-white">
                  {STAGES[selectedStage].tech}
                </span>
              </div>
              <p className="text-sm text-slate-200 mb-1 font-medium">
                {STAGES[selectedStage].summary}
              </p>
              <p className="text-xs text-slate-400 max-w-3xl leading-relaxed">
                {STAGES[selectedStage].details}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 shrink-0 self-end md:self-center">
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-950/40 border border-emerald-500/30 text-emerald-300 text-xs font-mono">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>ISOLATION GUARANTEED</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
