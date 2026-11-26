import { X, CheckCircle } from 'lucide-react';
import { SAFETY_STANDARDS, DAYCARE_CONFIG } from '../data/daycareData';

interface HealthSafetyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function HealthSafetyModal({ isOpen, onClose }: HealthSafetyModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-[#2A2540]/65 backdrop-blur-md flex items-center justify-center p-4 sm:p-6">
      <div
        className="glass-lt step-swap relative max-w-2xl w-full p-6 sm:p-8 overflow-hidden space-y-6 text-[#2A2540]"
        role="dialog"
        aria-modal="true"
        aria-labelledby="safety-modal-title"
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-slate-500 hover:text-[#2A2540] hover:bg-purple-100 border border-transparent hover:border-purple-300 transition-colors cursor-pointer"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="space-y-1.5 pr-8">
          <h2 id="safety-modal-title" className="font-heading text-2xl sm:text-3xl font-bold text-[#2A2540] tracking-tight">
            Health, Safety &amp; Cleanliness Protocols
          </h2>
          <p className="text-xs sm:text-sm text-slate-600">
            At {DAYCARE_CONFIG.name}, your child's physical safety, emotional security, and hygienic environment are our highest priorities.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-h-[60vh] overflow-y-auto pr-1">
          {SAFETY_STANDARDS.map((std, idx) => (
            <div key={idx} className="bg-white/80 p-4 rounded-2xl border border-purple-200/70 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono font-bold bg-purple-100 text-[#7A35E0] px-2.5 py-0.5 rounded-full border border-purple-200">
                  {std.badge}
                </span>
                <CheckCircle className="w-4 h-4 text-[#6DB93E]" />
              </div>
              <h3 className="font-heading font-bold text-sm text-[#2A2540]">
                {std.title}
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                {std.description}
              </p>
            </div>
          ))}
        </div>

        <div className="bg-emerald-50/90 p-4 rounded-2xl border border-emerald-200 text-xs text-emerald-950 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div>
            <span className="font-bold block">{DAYCARE_CONFIG.licenseNumber}</span>
            <span className="text-emerald-800 text-[11px]">
              Strict compliance with all state childcare and health regulations.
            </span>
          </div>
          <button
            onClick={onClose}
            className="btn-sprout-purple px-5 py-2 text-xs cursor-pointer shrink-0"
          >
            Understood
          </button>
        </div>
      </div>
    </div>
  );
}
