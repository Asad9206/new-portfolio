import React, { useEffect } from 'react';
import { X, ZoomIn, ExternalLink } from 'lucide-react';

interface LightboxModalProps {
  isOpen: boolean;
  onClose: () => void;
  imageSrc: string;
  title: string;
  subtitle?: string;
  details?: string;
  externalUrl?: string;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({
  isOpen,
  onClose,
  imageSrc,
  title,
  subtitle,
  details,
  externalUrl
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/90 backdrop-blur-xl animate-in fade-in duration-200">
      {/* Click outside to close */}
      <div className="absolute inset-0" onClick={onClose} />

      <div className="relative z-10 max-w-4xl w-full max-h-[92vh] flex flex-col rounded-2xl glass-panel-elevated border border-cyan-500/40 shadow-[0_0_50px_rgba(0,102,255,0.4)] overflow-hidden">
        
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-950/80">
          <div>
            <h3 className="text-base sm:text-lg font-bold text-white tracking-wide">
              {title}
            </h3>
            {subtitle && (
              <p className="text-xs font-mono text-cyan-400">
                {subtitle}
              </p>
            )}
          </div>

          <div className="flex items-center gap-2">
            {externalUrl && (
              <a
                href={externalUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-slate-800 text-cyan-300 hover:bg-slate-700 transition-colors"
                title="Open official link"
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            )}
            <button
              onClick={onClose}
              className="p-2 rounded-lg bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors"
              title="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Image Body with proper aspect-ratio container */}
        <div className="flex-1 overflow-auto p-4 sm:p-6 flex items-center justify-center bg-slate-950/95">
          <img
            src={imageSrc}
            alt={title}
            className="max-h-[68vh] w-auto max-w-full object-contain rounded-lg border border-slate-800 shadow-2xl"
          />
        </div>

        {/* Modal Details Footer */}
        {details && (
          <div className="px-6 py-3 border-t border-slate-800 bg-slate-950/80 text-xs font-mono text-slate-300 flex items-center justify-between">
            <span>{details}</span>
            <span className="text-[10px] text-emerald-400">VERIFIED OFFICIAL CREDENTIAL</span>
          </div>
        )}

      </div>
    </div>
  );
};
