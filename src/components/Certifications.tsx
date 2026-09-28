import React, { useState } from 'react';
import { 
  Award, 
  ExternalLink, 
  ZoomIn, 
  CheckCircle2, 
  ShieldCheck, 
  FileCheck,
  Building2,
  Sparkles
} from 'lucide-react';
import { PORTFOLIO_DATA, CertificationItem } from '../data/portfolioData';
import { LightboxModal } from './LightboxModal';

export const Certifications: React.FC = () => {
  const { certifications } = PORTFOLIO_DATA;
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
    <section id="certifications" className="py-24 relative overflow-hidden bg-[#040711]">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-10 w-96 h-96 bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950/60 border border-cyan-500/30 text-cyan-300 text-xs font-mono mb-3">
            <FileCheck className="w-3.5 h-3.5 text-cyan-400" />
            <span>GLOBAL & INDUSTRY CREDENTIALS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            CERTIFICATIONS
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 mt-3 rounded-full shadow-[0_0_10px_#00e5ff]" />
          <p className="text-sm sm:text-base text-slate-400 mt-3 max-w-2xl font-mono">
            Verified global certifications, cloud professional credentials, national academic honors, and internship completions.
          </p>
        </div>

        {/* 5 Certification Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert) => {
            const hasImage = Boolean(cert.image || cert.badgeImage);
            const displayImage = cert.badgeImage || cert.image;

            return (
              <div
                key={cert.id}
                className="glass-panel-elevated rounded-2xl p-6 border border-cyan-500/20 hover:border-cyan-400/50 transition-all duration-300 flex flex-col justify-between group hover:shadow-[0_0_30px_rgba(0,102,255,0.2)]"
              >
                <div>
                  {/* Card Header: Issuer pill & score */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="text-[11px] font-mono text-cyan-400 bg-cyan-950/70 px-2.5 py-1 rounded border border-cyan-500/30">
                      {cert.issuer}
                    </span>
                    <span className="text-xs font-mono font-bold text-slate-300">
                      {cert.periodOrScore}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors mb-2 leading-snug">
                    {cert.title}
                  </h3>

                  {/* Details */}
                  <p className="text-xs text-slate-400 font-mono mb-4">
                    {cert.badgeOrCertDetails}
                  </p>

                  {/* Image Preview Box (if asset exists) */}
                  {displayImage && (
                    <div 
                      onClick={() => openModal(
                        cert.image || displayImage,
                        cert.title,
                        cert.periodOrScore,
                        `${cert.issuer} • ${cert.badgeOrCertDetails}`,
                        cert.url
                      )}
                      className="cursor-pointer relative rounded-xl overflow-hidden bg-slate-950/80 border border-slate-800 p-2 mb-4 hover:border-cyan-400/40 transition-all"
                    >
                      <div className="flex items-center justify-between text-[10px] font-mono text-slate-500 mb-1 px-1">
                        <span>CREDENTIAL PREVIEW</span>
                        <ZoomIn className="w-3.5 h-3.5 text-cyan-400 group-hover:scale-125 transition-transform" />
                      </div>
                      <div className="aspect-[16/10] w-full overflow-hidden rounded bg-slate-900 flex items-center justify-center">
                        <img
                          src={displayImage}
                          alt={cert.title}
                          className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    </div>
                  )}

                  {!displayImage && (
                    <div className="rounded-xl bg-slate-950/60 border border-slate-800/80 p-6 flex flex-col items-center justify-center text-center mb-4">
                      <Award className="w-10 h-10 text-cyan-400 mb-2 opacity-80" />
                      <span className="text-xs font-mono text-slate-300 font-bold">
                        {cert.title}
                      </span>
                      <span className="text-[10px] font-mono text-slate-500 mt-1">
                        {cert.issuer}
                      </span>
                    </div>
                  )}
                </div>

                {/* Card Actions */}
                <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
                  {cert.image ? (
                    <button
                      onClick={() => openModal(
                        cert.image!,
                        cert.title,
                        cert.periodOrScore,
                        `${cert.issuer} • ${cert.badgeOrCertDetails}`,
                        cert.url
                      )}
                      className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-cyan-300 hover:text-cyan-200 transition-colors"
                    >
                      <ZoomIn className="w-3.5 h-3.5" />
                      <span>VIEW CREDENTIAL</span>
                    </button>
                  ) : cert.url ? (
                    <a
                      href={cert.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-cyan-300 hover:text-cyan-200 transition-colors"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      <span>VIEW PROFILE</span>
                    </a>
                  ) : (
                    <span className="text-[11px] font-mono text-slate-500 flex items-center gap-1">
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                      <span>OFFICIAL COMPLETION</span>
                    </span>
                  )}

                  <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-500/30">
                    VERIFIED
                  </span>
                </div>

              </div>
            );
          })}
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
