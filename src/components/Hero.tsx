import React, { useEffect, useRef, useState } from 'react';
import { 
  ArrowRight, 
  Linkedin, 
  Github, 
  Award, 
  Flame, 
  Cloud, 
  Database, 
  Cpu, 
  Layers, 
  Radio, 
  ShieldCheck,
  Server
} from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const Hero: React.FC = () => {
  const { identity } = PORTFOLIO_DATA;
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [currentFrame, setCurrentFrame] = useState(1);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const totalFrames = 78;
  const framesRef = useRef<HTMLImageElement[]>([]);
  const animFrameIdRef = useRef<number | null>(null);
  const [activeArchNode, setActiveArchNode] = useState(0);

  // Preload hero animation frames
  useEffect(() => {
    let loadedCount = 0;
    const images: HTMLImageElement[] = [];

    for (let i = 1; i <= totalFrames; i++) {
      const img = new Image();
      const frameNum = String(i).padStart(3, '0');
      img.src = `/hero-frames/ezgif-frame-${frameNum}.png`;
      img.onload = () => {
        loadedCount++;
        if (loadedCount >= 20) {
          setImagesLoaded(true);
        }
      };
      images.push(img);
    }
    framesRef.current = images;

    // Draw frame on canvas
    const drawFrame = (frameIndex: number) => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      const img = framesRef.current[frameIndex - 1];
      if (img && img.complete && img.naturalWidth > 0) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        // Cover fit with subtle cinematic vignette
        const scale = Math.max(canvas.width / img.naturalWidth, canvas.height / img.naturalHeight);
        const x = (canvas.width - img.naturalWidth * scale) / 2;
        const y = (canvas.height - img.naturalHeight * scale) / 2;
        
        ctx.drawImage(img, x, y, img.naturalWidth * scale, img.naturalHeight * scale);

        // Tech subtle blue gradient blend at edges to seamlessly merge into dark background
        const grad = ctx.createRadialGradient(
          canvas.width / 2, canvas.height / 2, canvas.width * 0.25,
          canvas.width / 2, canvas.height / 2, canvas.width * 0.52
        );
        grad.addColorStop(0, 'rgba(4, 7, 17, 0)');
        grad.addColorStop(0.7, 'rgba(4, 7, 17, 0.35)');
        grad.addColorStop(1, 'rgba(4, 7, 17, 0.95)');
        ctx.fillStyle = grad;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      }
    };

    let frame = 1;
    let forward = true;
    let lastTime = performance.now();
    const fps = 24;
    const interval = 1000 / fps;

    const loop = (now: number) => {
      if (now - lastTime >= interval) {
        lastTime = now;
        drawFrame(frame);
        setCurrentFrame(frame);

        if (forward) {
          frame++;
          if (frame >= totalFrames) {
            forward = false;
          }
        } else {
          frame--;
          if (frame <= 1) {
            forward = true;
          }
        }
      }
      animFrameIdRef.current = requestAnimationFrame(loop);
    };

    animFrameIdRef.current = requestAnimationFrame(loop);

    return () => {
      if (animFrameIdRef.current) {
        cancelAnimationFrame(animFrameIdRef.current);
      }
    };
  }, []);

  // Architecture visual packet cycle
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveArchNode((prev) => (prev + 1) % 5);
    }, 1800);
    return () => clearInterval(timer);
  }, []);

  const archNodes = [
    { label: 'USER', sub: 'Client Request', icon: Radio },
    { label: 'API GATEWAY', sub: 'REST Endpoints', icon: Layers },
    { label: 'SPRING BOOT', sub: 'Service Layer', icon: Server },
    { label: 'BUSINESS LOGIC', sub: 'Tenant Routing', icon: Cpu },
    { label: 'POSTGRESQL', sub: 'ACID Persistence', icon: Database },
  ];

  const floatingBadges = [
    { label: 'JAVA', color: 'text-amber-400 border-amber-500/30 bg-amber-950/20' },
    { label: 'SPRING BOOT', color: 'text-emerald-400 border-emerald-500/30 bg-emerald-950/20' },
    { label: 'REST API', color: 'text-cyan-400 border-cyan-500/30 bg-cyan-950/20' },
    { label: 'POSTGRESQL', color: 'text-blue-400 border-blue-500/30 bg-blue-950/20' },
    { label: 'SALESFORCE', color: 'text-sky-400 border-sky-500/30 bg-sky-950/20' },
    { label: 'APEX', color: 'text-indigo-400 border-indigo-500/30 bg-indigo-950/20' },
    { label: 'LWC', color: 'text-teal-400 border-teal-500/30 bg-teal-950/20' },
  ];

  return (
    <section 
      id="hero" 
      className="relative min-h-screen pt-28 pb-16 flex flex-col justify-center overflow-hidden tech-grid"
    >
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[300px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Column: Identity & Typography */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            
            {/* Status tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-950/70 border border-cyan-500/30 text-cyan-300 text-xs font-mono tracking-wider w-fit mb-6 shadow-[0_0_15px_rgba(0,102,255,0.25)]">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse shadow-[0_0_8px_#00e5ff]" />
              <span>SYSTEM ACTIVE • BACKEND ARCHITECTURE</span>
            </div>

            {/* Main Name */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-extrabold tracking-tight text-white leading-[1.08] mb-4">
              RITIKA <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500 glow-blue">
                SRIVASTAVA
              </span>
            </h1>

            {/* Positioning Title */}
            <p className="text-xl sm:text-2xl font-semibold tracking-wide text-cyan-300 font-mono mb-4 flex items-center gap-2">
              <span>{identity.title}</span>
              <span className="inline-block w-12 h-[2px] bg-cyan-400/60" />
            </p>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mb-8 font-normal">
              {identity.headline}
            </p>

            {/* Floating Technical Labels */}
            <div className="flex flex-wrap gap-2 mb-8">
              {floatingBadges.map((badge) => (
                <span
                  key={badge.label}
                  className={`px-3 py-1 rounded-md text-xs font-mono font-medium tracking-wide border ${badge.color} transition-all duration-200 hover:scale-105 shadow-[0_0_10px_rgba(0,0,0,0.5)]`}
                >
                  {badge.label}
                </span>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-8">
              <a
                href="#projects"
                className="px-6 py-3 rounded-lg bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold text-sm tracking-wider flex items-center gap-2 hover:shadow-[0_0_25px_rgba(0,229,255,0.5)] transition-all transform hover:-translate-y-0.5"
              >
                <span>VIEW PROJECTS</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#achievements"
                className="px-6 py-3 rounded-lg bg-slate-900/80 border border-cyan-500/40 text-cyan-300 font-semibold text-sm tracking-wider hover:bg-cyan-500/10 hover:border-cyan-400 hover:shadow-[0_0_20px_rgba(0,229,255,0.25)] transition-all transform hover:-translate-y-0.5"
              >
                <span>EXPLORE ACHIEVEMENTS</span>
              </a>

              <a
                href="#contact"
                className="px-6 py-3 rounded-lg bg-slate-900/60 border border-slate-700 text-slate-300 font-semibold text-sm tracking-wider hover:text-white hover:border-slate-500 transition-all"
              >
                <span>CONTACT ME</span>
              </a>
            </div>

            {/* Clickable Social Platforms */}
            <div className="pt-4 border-t border-slate-800/80 flex flex-wrap items-center gap-5">
              <span className="text-xs font-mono uppercase text-slate-400 tracking-wider">
                PROFILES:
              </span>

              <a
                href={identity.contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-xs text-slate-300 hover:text-cyan-300 transition-colors font-mono"
              >
                <Linkedin className="w-4 h-4 text-blue-400" />
                <span>LinkedIn</span>
              </a>

              <a
                href={identity.contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-xs text-slate-300 hover:text-cyan-300 transition-colors font-mono"
              >
                <Github className="w-4 h-4 text-slate-300" />
                <span>GitHub</span>
              </a>

              <a
                href={identity.contact.leetcode}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-xs text-slate-300 hover:text-amber-400 transition-colors font-mono"
              >
                <Flame className="w-4 h-4 text-amber-400" />
                <span>LeetCode</span>
              </a>

              <a
                href={identity.contact.salesforce}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-xs text-slate-300 hover:text-sky-400 transition-colors font-mono"
              >
                <Cloud className="w-4 h-4 text-sky-400" />
                <span>Salesforce</span>
              </a>
            </div>

          </div>

          {/* Right Column: Hero Visual Frame Player + Interactive Architecture Simulation */}
          <div className="lg:col-span-5 flex flex-col items-center">
            
            {/* Cinematic Frame Canvas Player Container */}
            <div className="relative w-full max-w-[420px] aspect-[4/3] sm:aspect-[16/11] rounded-2xl overflow-hidden glass-panel-elevated border border-cyan-500/30 p-1.5 shadow-[0_0_40px_rgba(0,102,255,0.25)] group">
              
              {/* Corner tech accents */}
              <div className="absolute top-2 left-2 w-3 h-3 border-t-2 border-l-2 border-cyan-400 z-20" />
              <div className="absolute top-2 right-2 w-3 h-3 border-t-2 border-r-2 border-cyan-400 z-20" />
              <div className="absolute bottom-2 left-2 w-3 h-3 border-b-2 border-l-2 border-cyan-400 z-20" />
              <div className="absolute bottom-2 right-2 w-3 h-3 border-b-2 border-r-2 border-cyan-400 z-20" />

              {/* Canvas viewport */}
              <div className="relative w-full h-full rounded-xl overflow-hidden bg-slate-950">
                <canvas 
                  ref={canvasRef} 
                  width={640} 
                  height={440} 
                  className="w-full h-full object-cover block"
                />

                {/* Overlaid Tech HUD telemetry */}
                <div className="absolute top-3 left-3 z-10 flex items-center gap-2 bg-slate-950/80 backdrop-blur-md px-2.5 py-1 rounded border border-cyan-500/20 text-[10px] font-mono text-cyan-300">
                  <Radio className="w-3 h-3 text-cyan-400 animate-pulse" />
                  <span>ENG-FRAME: {String(currentFrame).padStart(3, '0')} / {totalFrames}</span>
                </div>

                <div className="absolute top-3 right-3 z-10 flex items-center gap-1.5 bg-slate-950/80 backdrop-blur-md px-2.5 py-1 rounded border border-cyan-500/20 text-[10px] font-mono text-slate-300">
                  <ShieldCheck className="w-3 h-3 text-emerald-400" />
                  <span>ID: VERIFIED</span>
                </div>

                <div className="absolute bottom-3 left-3 right-3 z-10 flex items-center justify-between bg-slate-950/80 backdrop-blur-md px-3 py-1.5 rounded-lg border border-cyan-500/20 text-[10px] font-mono text-slate-300">
                  <span className="text-cyan-400">RITIKA SRIVASTAVA</span>
                  <span className="text-slate-400">GNIT • CSE • 2023–2027</span>
                </div>
              </div>
            </div>

            {/* Architecture Data Packet Simulation Box */}
            <div className="w-full max-w-[420px] mt-6 glass-panel rounded-xl p-4 border border-cyan-500/20">
              <div className="flex items-center justify-between mb-3 pb-2 border-b border-slate-800">
                <span className="text-xs font-mono font-bold text-slate-300 tracking-wider flex items-center gap-1.5">
                  <Server className="w-3.5 h-3.5 text-cyan-400" />
                  BACKEND ARCHITECTURE FLOW
                </span>
                <span className="text-[10px] font-mono text-cyan-400/80 bg-cyan-950/50 px-2 py-0.5 rounded border border-cyan-500/30">
                  LIVE SIMULATION
                </span>
              </div>

              {/* 5-Node Pipeline */}
              <div className="grid grid-cols-5 gap-1 relative">
                {archNodes.map((node, idx) => {
                  const isActive = activeArchNode === idx;
                  const Icon = node.icon;
                  return (
                    <div
                      key={node.label}
                      onClick={() => setActiveArchNode(idx)}
                      className={`cursor-pointer flex flex-col items-center text-center p-2 rounded-lg transition-all duration-300 ${
                        isActive
                          ? 'bg-blue-600/20 border border-cyan-400 shadow-[0_0_15px_rgba(0,229,255,0.4)] scale-105'
                          : 'bg-slate-900/50 border border-slate-800 hover:border-slate-700'
                      }`}
                    >
                      <div className={`w-7 h-7 rounded-md flex items-center justify-center mb-1.5 ${
                        isActive ? 'bg-cyan-500/20 text-cyan-300' : 'bg-slate-800/80 text-slate-400'
                      }`}>
                        <Icon className="w-3.5 h-3.5" />
                      </div>
                      <span className={`text-[9px] font-mono font-bold tracking-tight leading-none ${
                        isActive ? 'text-cyan-300' : 'text-slate-400'
                      }`}>
                        {node.label}
                      </span>
                    </div>
                  );
                })}
              </div>

              {/* Node inspection details */}
              <div className="mt-3 p-2.5 rounded-lg bg-slate-950/70 border border-slate-800 text-[11px] font-mono text-slate-300 flex items-center justify-between">
                <div>
                  <span className="text-cyan-400 font-bold">{archNodes[activeArchNode].label}: </span>
                  <span>{archNodes[activeArchNode].sub}</span>
                </div>
                <span className="text-emerald-400 text-[10px]">HEALTH: OPTIMAL</span>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
