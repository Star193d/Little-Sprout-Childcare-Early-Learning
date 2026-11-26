import { Check } from 'lucide-react';

interface StepIndicatorProps {
  currentStep: number;
  totalSteps: number;
  onStepClick?: (step: number) => void;
}

const STEP_LABELS = [
  { step: 1, title: 'Parent Info', short: 'Parent' },
  { step: 2, title: 'Child Profile', short: 'Child' },
  { step: 3, title: 'Nutrition & Meals', short: 'Diet' },
  { step: 4, title: 'Medical & Allergies', short: 'Medical' },
  { step: 5, title: 'Review & Consent', short: 'Review' },
];

export function StepIndicator({ currentStep, totalSteps, onStepClick }: StepIndicatorProps) {
  const progressPercent = ((currentStep - 1) / (totalSteps - 1)) * 90;

  return (
    <div className="w-full" aria-label="Registration Progress">
      {/* Desktop & Tablet Progress Bar */}
      <div className="hidden sm:flex items-center justify-between relative">
        <div className="absolute left-8 right-8 top-5 h-1.5 rounded-full bg-purple-200/70 -z-0" />
        <div
          className="absolute left-8 top-5 h-1.5 rounded-full transition-all duration-500 -z-0"
          style={{
            width: `${progressPercent}%`,
            background: 'linear-gradient(90deg, var(--purple), var(--pink), var(--yellow))',
          }}
        />

        {STEP_LABELS.map((item) => {
          const isCompleted = currentStep > item.step;
          const isCurrent = currentStep === item.step;
          const isClickable = isCompleted && onStepClick;

          return (
            <button
              key={item.step}
              type="button"
              disabled={!isClickable}
              onClick={() => isClickable && onStepClick(item.step)}
              className={`flex flex-col items-center group relative z-10 ${
                isClickable ? 'cursor-pointer' : 'cursor-default'
              }`}
              aria-current={isCurrent ? 'step' : undefined}
            >
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center font-heading font-bold text-xs transition-all duration-300 ${
                  isCompleted
                    ? 'bg-[#6DB93E] text-white border-2 border-white ring-4 ring-emerald-200/70 shadow-sm'
                    : isCurrent
                    ? 'bg-[#7A35E0] text-white border-2 border-white ring-4 ring-purple-200 shadow-md scale-110'
                    : 'bg-white text-slate-400 border-2 border-purple-200 group-hover:border-[#7A35E0]/50'
                }`}
              >
                {isCompleted ? <Check className="w-5 h-5 stroke-[2.5]" /> : item.step}
              </div>
              <span
                className={`mt-2 font-bold tracking-tight transition-colors uppercase text-[11px] ${
                  isCurrent
                    ? 'text-[#7A35E0] font-extrabold'
                    : isCompleted
                    ? 'text-[#6DB93E]'
                    : 'text-slate-400'
                }`}
              >
                {item.title}
              </span>
            </button>
          );
        })}
      </div>

      {/* Mobile Compact Progress Bar */}
      <div className="sm:hidden space-y-2">
        <div className="flex items-center justify-between text-xs font-bold text-[#2A2540]">
          <span className="text-[#7A35E0] uppercase tracking-wider text-[11px]">
            Step {currentStep} of {totalSteps}:
          </span>
          <span className="text-[#2A2540] font-extrabold">{STEP_LABELS[currentStep - 1]?.title}</span>
        </div>
        <div className="w-full bg-purple-200/60 h-2.5 rounded-full overflow-hidden">
          <div
            className="h-full transition-all duration-500 rounded-full"
            style={{
              width: `${(currentStep / totalSteps) * 100}%`,
              background: 'linear-gradient(90deg, var(--purple), var(--pink), var(--yellow))',
            }}
          />
        </div>
      </div>
    </div>
  );
}
