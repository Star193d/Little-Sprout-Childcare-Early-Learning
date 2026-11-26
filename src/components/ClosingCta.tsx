import { Calendar } from 'lucide-react';
import { Reveal } from './MotionPrimitives';

interface ClosingCtaProps {
  onOpenTour: () => void;
}

export function ClosingCta({ onOpenTour }: ClosingCtaProps) {
  return (
    <section className="py-10 md:py-16 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="glass-lt interactive-card relative p-7 sm:p-10 lg:p-12 overflow-hidden">
            {/* Ambient background accents */}
            <div
              className="absolute -top-12 -right-12 w-48 h-48 rounded-full bg-[#FFC81E]/25 blur-2xl pointer-events-none"
              aria-hidden="true"
            />
            <div
              className="absolute -bottom-12 -left-12 w-48 h-48 rounded-full bg-[#7A35E0]/15 blur-2xl pointer-events-none"
              aria-hidden="true"
            />

            <div className="flex flex-col lg:flex-row items-center justify-between gap-6 relative z-10">
              {/* Left: Playful Morphing Badge */}
              <div className="flex items-center gap-3.5 shrink-0">
                <div className="w-16 h-16 sm:w-20 sm:h-20 ico-morph bg-[#FFC81E] border-2 border-white flex items-center justify-center text-3xl sm:text-4xl shadow-md select-none">
                  🧑‍🤝‍🧑
                </div>
                <div className="hidden sm:block text-left">
                  <p className="font-heading text-sm font-bold text-[#7A35E0]">
                    Sunny Days Family
                  </p>
                  <p className="text-xs text-slate-600 font-semibold">
                    Enrolling 6 Weeks – 5 Years
                  </p>
                </div>
              </div>

              {/* Center: Main Headline & Subtitle */}
              <div className="text-center lg:text-left flex-1 max-w-2xl space-y-2">
                <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-[#2A2540] tracking-tight">
                  Ready to Join Our Sunny Days Family?
                </h2>
                <p className="text-xs sm:text-sm md:text-base text-slate-600 font-medium leading-relaxed">
                  Give your child the best start in life — a safe, fun, and enriching early learning experience.
                </p>
              </div>

              {/* Right: Tactile CTA Button */}
              <div className="flex items-center gap-4 shrink-0">
                <button
                  id="closing-schedule-tour-btn"
                  onClick={onOpenTour}
                  className="btn-sprout inline-flex items-center justify-center gap-2 px-7 py-3.5 text-xs sm:text-sm cursor-pointer"
                >
                  <Calendar className="w-4 h-4 text-white" />
                  <span>Schedule Your Tour Today</span>
                </button>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
