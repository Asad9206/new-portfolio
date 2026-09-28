import React, { useState } from 'react';
import { 
  Trophy, 
  Flame, 
  Cloud, 
  Award, 
  Sparkles, 
  BookOpen, 
  ExternalLink, 
  ZoomIn, 
  CheckCircle2, 
  ChevronRight,
  TrendingUp,
  Cpu
} from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { LightboxModal } from './LightboxModal';

export const Achievements: React.FC = () => {
  const { achievements } = PORTFOLIO_DATA;
  const [modalState, setModalState] = useState<{
    isOpen: boolean;
    imageSrc: string;
    title: string;
    subtitle?: string;
    details?: string;
    externalUrl?: string;
  }>({
    isOpen: false,
    imageSrc: '',
    title: '',
  });

  const openModal = (
    imageSrc: string,
    title: string,
    subtitle?: string,
    details?: string,
    externalUrl?: string
  ) => {
    setModalState({
      isOpen: true,
      imageSrc,
      title,
      subtitle,
      details,
      externalUrl,
    });
  };

  return (
    <section id="achievements" className="py-24 relative overflow-hidden bg-[#03060f]">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-1/4 w-[600px] h-[400px] bg-blue-600/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[400px] bg-cyan-500/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950/60 border border-cyan-500/30 text-cyan-300 text-xs font-mono mb-3">
            <Trophy className="w-3.5 h-3.5 text-cyan-400" />
            <span>PROVEN MILESTONES & HONORS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            MY ACHIEVEMENTS
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 mt-3 rounded-full shadow-[0_0_10px_#00e5ff]" />
          <p className="text-sm sm:text-base text-slate-400 mt-3 max-w-2xl font-mono">
            Verified competitive milestones, algorithmic streaks, cloud rankings, national academic honors, and published AI research.
          </p>
        </div>

        {/* Highlight Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Card 1: LeetCode Consistency (Span 7) */}
          <div className="lg:col-span-7 glass-panel-elevated rounded-2xl p-6 sm:p-8 border border-amber-500/30 shadow-[0_0_30px_rgba(255,161,22,0.15)] flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-800">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-lg bg-amber-950/60 border border-amber-500/40 flex items-center justify-center text-amber-400 shadow-[0_0_15px_rgba(255,161,22,0.3)]">
                    <Flame className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-amber-400 font-bold uppercase tracking-wider block">
                      ALGORITHMIC EXCELLENCE
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-white">
                      LeetCode Problem Solving
                    </h3>
                  </div>
                </div>

                <a
                  href={achievements.leetcode.profileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-xs font-mono text-amber-400 hover:text-amber-300 transition-colors"
                >
                  <span>PROFILE</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

              {/* Numerical Badges */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
                <div className="p-3 rounded-xl bg-slate-950/70 border border-slate-800 text-center">
                  <span className="text-2xl font-extrabold text-amber-400 font-mono block">
                    {achievements.leetcode.exactSolved}
                  </span>
                  <span className="text-[11px] text-slate-400 font-mono">Problems Solved</span>
                </div>
                <div className="p-3 rounded-xl bg-slate-950/70 border border-slate-800 text-center">
                  <span className="text-2xl font-extrabold text-cyan-400 font-mono block">
                    {achievements.leetcode.streak}
                  </span>
                  <span className="text-[11px] text-slate-400 font-mono">Current Streak</span>
                </div>
                <div className="p-3 rounded-xl bg-slate-950/70 border border-slate-800 text-center">
                  <span className="text-2xl font-extrabold text-emerald-400 font-mono block">
                    {achievements.leetcode.exactActiveDays}
                  </span>
                  <span className="text-[11px] text-slate-400 font-mono">Active Days</span>
                </div>
                <div className="p-3 rounded-xl bg-slate-950/70 border border-slate-800 text-center">
                  <span className="text-2xl font-extrabold text-purple-400 font-mono block">
                    {achievements.leetcode.badgesCount}
                  </span>
                  <span className="text-[11px] text-slate-400 font-mono">Total Badges</span>
                </div>
              </div>

              {/* Breakdown Pills */}
              <div className="flex flex-wrap items-center gap-2 mb-6">
                <span className="px-3 py-1 rounded-md text-xs font-mono bg-cyan-950/60 text-cyan-300 border border-cyan-500/30">
                  Easy: {achievements.leetcode.easy}
                </span>
                <span className="px-3 py-1 rounded-md text-xs font-mono bg-amber-950/60 text-amber-300 border border-amber-500/30">
                  Med: {achievements.leetcode.medium}
                </span>
                <span className="px-3 py-1 rounded-md text-xs font-mono bg-rose-950/60 text-rose-300 border border-rose-500/30">
                  Hard: {achievements.leetcode.hard}
                </span>
                <span className="px-3 py-1 rounded-md text-xs font-mono bg-slate-800 text-slate-300">
                  Submissions (Year): {achievements.leetcode.submissionsPastYear}
                </span>
              </div>

              {/* Uploaded Screenshot Showcase with Lightbox Trigger */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div 
                  onClick={() => openModal(
                    achievements.leetcode.streakImage,
                    "LeetCode Activity & Submission Streak",
                    "447 Problems Solved • 338 Total Active Days",
                    "Verified LeetCode Profile: @ritika_2211",
                    achievements.leetcode.profileUrl
                  )}
                  className="cursor-pointer group relative rounded-xl overflow-hidden border border-slate-800 bg-slate-950/80 p-2 hover:border-amber-400/50 transition-all"
                >
                  <div className="flex items-center justify-between text-[10px] font-mono text-slate-400 mb-1.5 px-1">
                    <span>STREAK TELEMETRY</span>
                    <ZoomIn className="w-3.5 h-3.5 text-amber-400 group-hover:scale-125 transition-transform" />
                  </div>
                  <div className="aspect-[16/9] w-full overflow-hidden rounded bg-slate-900 flex items-center justify-center">
                    <img
                      src={achievements.leetcode.streakImage}
                      alt="LeetCode Streaks"
                      className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </div>

                <div 
                  onClick={() => openModal(
                    achievements.leetcode.badgesImage,
                    "LeetCode Official Badges Collection",
                    "14 Badges • 200 Days Badge 2026",
                    "Daily Challenge Medals and Continuous Streak Badges",
                    achievements.leetcode.profileUrl
                  )}
                  className="cursor-pointer group relative rounded-xl overflow-hidden border border-slate-800 bg-slate-950/80 p-2 hover:border-amber-400/50 transition-all"
                >
                  <div className="flex items-center justify-between text-[10px] font-mono text-slate-400 mb-1.5 px-1">
                    <span>BADGE COLLECTION</span>
                    <ZoomIn className="w-3.5 h-3.5 text-amber-400 group-hover:scale-125 transition-transform" />
                  </div>
                  <div className="aspect-[16/9] w-full overflow-hidden rounded bg-slate-900 flex items-center justify-center">
                    <img
                      src={achievements.leetcode.badgesImage}
                      alt="LeetCode Badges"
                      className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Card 2: Salesforce Trailhead (Span 5) */}
          <div className="lg:col-span-5 glass-panel-elevated rounded-2xl p-6 sm:p-8 border border-sky-500/30 shadow-[0_0_30px_rgba(0,161,224,0.15)] flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-800">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-lg bg-sky-950/60 border border-sky-500/40 flex items-center justify-center text-sky-400 shadow-[0_0_15px_rgba(0,161,224,0.3)]">
                    <Cloud className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-sky-400 font-bold uppercase tracking-wider block">
                      CLOUD ECOSYSTEM
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-white">
                      Salesforce Trailhead
                    </h3>
                  </div>
                </div>

                <a
                  href={achievements.salesforce.profileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-xs font-mono text-sky-400 hover:text-sky-300 transition-colors"
                >
                  <span>PROFILE</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-2 mb-6">
                <div className="p-3 rounded-xl bg-slate-950/70 border border-slate-800 text-center">
                  <span className="text-xl font-extrabold text-sky-400 font-mono block">
                    {achievements.salesforce.badges}
                  </span>
                  <span className="text-[10px] text-slate-400 font-mono">Badges</span>
                </div>
                <div className="p-3 rounded-xl bg-slate-950/70 border border-slate-800 text-center">
                  <span className="text-xl font-extrabold text-cyan-400 font-mono block">
                    {achievements.salesforce.superbadges}
                  </span>
                  <span className="text-[10px] text-slate-400 font-mono">Superbadge</span>
                </div>
                <div className="p-3 rounded-xl bg-slate-950/70 border border-slate-800 text-center">
                  <span className="text-xl font-extrabold text-amber-400 font-mono block">
                    {achievements.salesforce.points}
                  </span>
                  <span className="text-[10px] text-slate-400 font-mono">Points</span>
                </div>
              </div>

              {/* Rank pill */}
              <div className="p-3 rounded-xl bg-sky-950/40 border border-sky-500/30 flex items-center justify-between mb-6">
                <span className="text-xs font-mono text-slate-300">CURRENT RANK:</span>
                <span className="text-xs font-mono font-bold text-sky-300 px-2 py-0.5 rounded bg-sky-900/60 border border-sky-400/40">
                  {achievements.salesforce.rank.toUpperCase()}
                </span>
              </div>

              {/* Uploaded Profile Screenshot with Lightbox */}
              <div
                onClick={() => openModal(
                  achievements.salesforce.profileImage,
                  "Salesforce Trailhead Expeditioner Profile",
                  "66 Badges • 1 Superbadge • 56,400 Points",
                  "Trailblazer ID: bvrhkgo3o54jwyeb1h",
                  achievements.salesforce.profileUrl
                )}
                className="cursor-pointer group relative rounded-xl overflow-hidden border border-slate-800 bg-slate-950/80 p-2 hover:border-sky-400/50 transition-all"
              >
                <div className="flex items-center justify-between text-[10px] font-mono text-slate-400 mb-1.5 px-1">
                  <span>TRAILHEAD DASHBOARD</span>
                  <ZoomIn className="w-3.5 h-3.5 text-sky-400 group-hover:scale-125 transition-transform" />
                </div>
                <div className="aspect-[4/3] w-full overflow-hidden rounded bg-slate-900 flex items-center justify-center">
                  <img
                    src={achievements.salesforce.profileImage}
                    alt="Salesforce Profile"
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>

            </div>
          </div>

          {/* Card 3: NPTEL Java Top 5% Nationwide (Span 6) */}
          <div className="lg:col-span-6 glass-panel-elevated rounded-2xl p-6 sm:p-8 border border-emerald-500/30 shadow-[0_0_30px_rgba(16,185,129,0.15)] flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-800">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-lg bg-emerald-950/60 border border-emerald-500/40 flex items-center justify-center text-emerald-400 shadow-[0_0_15px_rgba(16,185,129,0.3)]">
                    <Award className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-emerald-400 font-bold uppercase tracking-wider block">
                      NATIONAL ACADEMIC HONOR
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-white">
                      {achievements.nptel.title}
                    </h3>
                  </div>
                </div>

                <span className="px-2.5 py-1 rounded text-xs font-mono font-bold bg-amber-400/10 text-amber-300 border border-amber-400/30">
                  TOP 5% TOPPER
                </span>
              </div>

              {/* Scores Grid */}
              <div className="grid grid-cols-3 gap-3 mb-6">
                <div className="p-3 rounded-xl bg-slate-950/70 border border-slate-800 text-center">
                  <span className="text-2xl font-extrabold text-emerald-400 font-mono block">
                    {achievements.nptel.score}
                  </span>
                  <span className="text-[10px] text-slate-400 font-mono">Consolidated</span>
                </div>
                <div className="p-3 rounded-xl bg-slate-950/70 border border-slate-800 text-center">
                  <span className="text-sm font-bold text-slate-200 font-mono block mt-1">
                    {achievements.nptel.assignmentsScore}
                  </span>
                  <span className="text-[10px] text-slate-400 font-mono">Assignments</span>
                </div>
                <div className="p-3 rounded-xl bg-slate-950/70 border border-slate-800 text-center">
                  <span className="text-sm font-bold text-slate-200 font-mono block mt-1">
                    {achievements.nptel.examScore}
                  </span>
                  <span className="text-[10px] text-slate-400 font-mono">Proctored Exam</span>
                </div>
              </div>

              {/* Level Pill */}
              <div className="p-3 rounded-xl bg-emerald-950/40 border border-emerald-500/30 flex items-center justify-between mb-6">
                <span className="text-xs font-mono text-slate-300">CERTIFICATION TIER:</span>
                <span className="text-xs font-mono font-bold text-emerald-300">
                  {achievements.nptel.level}
                </span>
              </div>

              {/* Certificate image with Lightbox trigger */}
              <div
                onClick={() => openModal(
                  achievements.nptel.image,
                  "NPTEL Elite + Gold Certificate — Programming In Java",
                  "Score: 95% • Top 5% Nationwide Topper",
                  "Issued by IIT Kharagpur / NPTEL / MoE Govt. of India"
                )}
                className="cursor-pointer group relative rounded-xl overflow-hidden border border-slate-800 bg-slate-950/80 p-2 hover:border-emerald-400/50 transition-all"
              >
                <div className="flex items-center justify-between text-[10px] font-mono text-slate-400 mb-1.5 px-1">
                  <span>OFFICIAL CERTIFICATE</span>
                  <ZoomIn className="w-3.5 h-3.5 text-emerald-400 group-hover:scale-125 transition-transform" />
                </div>
                <div className="aspect-[4/3] w-full overflow-hidden rounded bg-slate-900 flex items-center justify-center">
                  <img
                    src={achievements.nptel.image}
                    alt="NPTEL Programming in Java Certificate"
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>

            </div>
          </div>

          {/* Card 4: RAICCIT 2025 AI Research (Span 6) */}
          <div className="lg:col-span-6 glass-panel-elevated rounded-2xl p-6 sm:p-8 border border-purple-500/30 shadow-[0_0_30px_rgba(168,85,247,0.15)] flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-800">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-lg bg-purple-950/60 border border-purple-500/40 flex items-center justify-center text-purple-400 shadow-[0_0_15px_rgba(168,85,247,0.3)]">
                    <BookOpen className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-purple-400 font-bold uppercase tracking-wider block">
                      CONFERENCE PUBLICATION
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-white">
                      RAICCIT 2025
                    </h3>
                  </div>
                </div>

                <span className="px-2.5 py-1 rounded text-xs font-mono font-bold bg-purple-500/20 text-purple-300 border border-purple-400/40">
                  CO-AUTHOR
                </span>
              </div>

              {/* Research Title */}
              <div className="p-3.5 rounded-xl bg-slate-950/70 border border-slate-800 mb-4">
                <span className="text-[10px] font-mono text-purple-400 uppercase block mb-1">
                  RESEARCH PAPER TITLE
                </span>
                <h4 className="text-sm sm:text-base font-bold text-white">
                  "{achievements.research.title}"
                </h4>
              </div>

              <p className="text-xs sm:text-sm text-slate-300 mb-6 bg-purple-950/30 p-3 rounded-lg border border-purple-500/20">
                {achievements.research.description}
              </p>

              {/* Award Presentation Photo with Lightbox trigger */}
              <div
                onClick={() => openModal(
                  achievements.research.image,
                  "RAICCIT 2025 Conference Presentation Award",
                  "Co-Author: Hallucination-Free AI Strategies for Enhancing Accuracy in LLMs",
                  "National Conference on Recent Advancements & Innovations in Computing, Communication and Information Technologies"
                )}
                className="cursor-pointer group relative rounded-xl overflow-hidden border border-slate-800 bg-slate-950/80 p-2 hover:border-purple-400/50 transition-all"
              >
                <div className="flex items-center justify-between text-[10px] font-mono text-slate-400 mb-1.5 px-1">
                  <span>CONFERENCE PRESENTATION</span>
                  <ZoomIn className="w-3.5 h-3.5 text-purple-400 group-hover:scale-125 transition-transform" />
                </div>
                <div className="aspect-[4/3] w-full overflow-hidden rounded bg-slate-900 flex items-center justify-center">
                  <img
                    src={achievements.research.image}
                    alt="RAICCIT Presentation Award"
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>

            </div>
          </div>

          {/* Card 5: GFG Technical Scripter 2026 (Span 12 Full Width Highlight) */}
          <div className="lg:col-span-12 glass-panel-elevated rounded-2xl p-6 sm:p-8 border border-emerald-500/40 shadow-[0_0_35px_rgba(16,185,129,0.2)]">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              <div className="lg:col-span-7">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-500/40 text-emerald-300 text-xs font-mono mb-3">
                  <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
                  <span>PRESTIGIOUS WINNER ACCOLADE</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-2">
                  {achievements.gfg.title}
                </h3>

                <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-6 font-normal">
                  {achievements.gfg.description}
                </p>

                {/* Benefits / Rewards */}
                <div className="flex flex-wrap gap-3">
                  {achievements.gfg.benefits.map((b) => (
                    <div
                      key={b}
                      className="flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-950/50 border border-emerald-500/30 text-emerald-200 text-xs font-mono font-bold"
                    >
                      <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                      <span>{b}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Award Photo with Lightbox */}
              <div className="lg:col-span-5">
                <div
                  onClick={() => openModal(
                    achievements.gfg.image,
                    "GFG Technical Scripter / Yuva Mentorship Award",
                    "Winner Recognition & Framed Certificate Presentation",
                    "Official Award Presentation Ceremony"
                  )}
                  className="cursor-pointer group relative rounded-xl overflow-hidden border border-emerald-500/30 bg-slate-950/90 p-2 hover:border-emerald-400 transition-all shadow-xl"
                >
                  <div className="flex items-center justify-between text-[10px] font-mono text-slate-400 mb-1.5 px-1">
                    <span>AWARD CEREMONY PRESENTATION</span>
                    <ZoomIn className="w-3.5 h-3.5 text-emerald-400 group-hover:scale-125 transition-transform" />
                  </div>
                  <div className="aspect-[4/3] w-full overflow-hidden rounded bg-slate-900 flex items-center justify-center">
                    <img
                      src={achievements.gfg.image}
                      alt="GFG Award Ceremony"
                      className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>

      {/* Lightbox Modal */}
      <LightboxModal
        isOpen={modalState.isOpen}
        onClose={() => setModalState(prev => ({ ...prev, isOpen: false }))}
        imageSrc={modalState.imageSrc}
        title={modalState.title}
        subtitle={modalState.subtitle}
        details={modalState.details}
        externalUrl={modalState.externalUrl}
      />
    </section>
  );
};
