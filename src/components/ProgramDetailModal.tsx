import { X, Check, Calendar, ArrowRight, Sparkles, Heart } from 'lucide-react';
import { ProgramType } from '../types';
import { PROGRAMS } from '../data/daycareData';

interface ProgramDetailModalProps {
  programId: ProgramType | null;
  onClose: () => void;
  onEnroll: (programId: ProgramType) => void;
  onOpenTour: () => void;
}

export function ProgramDetailModal({
  programId,
  onClose,
  onEnroll,
  onOpenTour,
}: ProgramDetailModalProps) {
  if (!programId) return null;

  const program = PROGRAMS.find((p) => p.id === programId) || PROGRAMS[0];

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-[#2A2540]/65 backdrop-blur-md flex items-center justify-center p-4 sm:p-6">
      <div
        className="glass-lt step-swap relative max-w-2xl w-full p-6 sm:p-8 overflow-hidden space-y-6 text-[#2A2540]"
        role="dialog"
        aria-modal="true"
        aria-labelledby="program-title"
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-slate-500 hover:text-[#2A2540] hover:bg-purple-100 border border-transparent hover:border-purple-300 transition-colors cursor-pointer"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="space-y-2 pr-8">
          <h2 id="program-title" className="font-heading text-2xl sm:text-3xl font-bold text-[#2A2540] tracking-tight">
            {program.name}
          </h2>
          <p className="text-sm text-[#7A35E0] font-bold">
            {program.tagline} ({program.ageRange} • Ratio: {program.ratio})
          </p>
        </div>

        <div className="bg-white/80 p-4 rounded-2xl border border-purple-200/70 text-xs sm:text-sm text-slate-700 leading-relaxed">
          {program.overview}
        </div>

        <div className="space-y-2.5">
          <h3 className="text-xs font-bold uppercase tracking-wider text-[#7A35E0] flex items-center gap-1.5">
            <Sparkles className="w-4 h-4 text-[#FFC81E]" />
            <span>Key Developmental Milestones</span>
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {program.developmentGoals.map((goal, idx) => (
              <div
                key={idx}
                className="flex items-start gap-2 text-xs text-[#2A2540] font-semibold bg-white/80 p-3 rounded-xl border border-purple-200/60"
              >
                <Check className="w-4 h-4 text-[#6DB93E] shrink-0 mt-0.5" />
                <span>{goal}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-2.5">
          <h3 className="text-xs font-bold uppercase tracking-wider text-[#F0368A] flex items-center gap-1.5">
            <Heart className="w-4 h-4 text-[#F0368A]" />
            <span>Program Highlights &amp; Care Details</span>
          </h3>
          <ul className="space-y-1.5 text-xs sm:text-sm text-slate-700">
            {program.keyHighlights.map((item, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#7A35E0] mt-2 shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="pt-4 border-t border-purple-200/60 flex flex-col sm:flex-row items-center justify-between gap-3">
          <button
            onClick={() => {
              onClose();
              onOpenTour();
            }}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-white hover:bg-purple-50 text-[#2A2540] border border-purple-200 text-xs sm:text-sm font-bold transition-all cursor-pointer"
          >
            <Calendar className="w-4 h-4 text-[#7A35E0]" />
            <span>Schedule a Tour First</span>
          </button>

          <button
            onClick={() => {
              onClose();
              onEnroll(program.id);
            }}
            className="btn-sprout-yel w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 text-xs sm:text-sm cursor-pointer"
          >
            <span>Enroll in {program.name}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
