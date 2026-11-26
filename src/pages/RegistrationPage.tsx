import { RegistrationContainer } from '../components/RegistrationForm/RegistrationContainer';
import { ProgramType, PageId } from '../types';
import { Calendar, ArrowDown, CheckCircle2 } from 'lucide-react';
import { DAYCARE_CONFIG, DAYCARE_IMAGES } from '../data/daycareData';
import { HeroMiniBanner } from '../components/MotionPrimitives';

interface RegistrationPageProps {
  initialProgram?: ProgramType | null;
  onNavigate: (page: PageId) => void;
  onOpenTour: () => void;
}

export function RegistrationPage({ initialProgram, onOpenTour }: RegistrationPageProps) {
  const scrollToForm = () => {
    const el = document.getElementById('registration-wizard-start');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen">
      {/* 1. Registration Hero Banner */}
      <HeroMiniBanner
        title="Begin Your Child's Daycare Journey"
        subtitle={`Welcome to the ${DAYCARE_CONFIG.name} family. Complete our secure 5-step intake below so our admissions director and lead educators can prepare a safe, loving classroom space.`}
        bgImage={DAYCARE_IMAGES.learningActivity}
        rightSlot={
          <div className="relative mx-auto max-w-md">
            <div className="photo-morph relative overflow-hidden bg-[#2A2540]">
              <img
                src={DAYCARE_IMAGES.learningActivity}
                alt="Happy children learning with blocks and teacher support"
                className="w-full h-80 sm:h-96 object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#2A2540]/85 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-5 left-6 right-6 text-white">
                <p className="font-heading text-base sm:text-lg font-bold leading-snug">
                  Quick digital intake &amp; dedicated family onboarding
                </p>
              </div>
            </div>

            <div className="glass chip-bob hidden sm:flex items-center gap-3 p-3.5 absolute -bottom-4 -left-4 z-20 text-white">
              <div className="w-10 h-10 ico-morph bg-[#FFC81E] text-[#2A2540] flex items-center justify-center shrink-0">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <div className="text-left">
                <p className="text-xs font-extrabold text-white">Priority Placement</p>
                <p className="text-[11px] text-white/80">Fast director review &amp; confirmation</p>
              </div>
            </div>
          </div>
        }
      >
        <div className="flex flex-wrap items-center gap-3 pt-1">
          <button
            onClick={scrollToForm}
            className="btn-sprout-yel inline-flex items-center justify-center gap-2 px-6 py-3 text-sm cursor-pointer"
          >
            <ArrowDown className="w-4 h-4" />
            <span>Start 5-Step Application</span>
          </button>

          <button
            id="reg-hero-tour-btn"
            onClick={onOpenTour}
            className="btn-sprout-ghost text-white inline-flex items-center justify-center gap-2 px-5 py-3 text-sm cursor-pointer"
          >
            <Calendar className="w-4 h-4" />
            <span>Schedule Tour First</span>
          </button>
        </div>

        <div className="pt-4 grid grid-cols-3 gap-3 border-t border-white/25 max-w-xl">
          <div className="bg-white/15 backdrop-blur-md p-2.5 rounded-2xl border border-white/30 text-center">
            <p className="font-heading text-sm sm:text-base font-bold text-[#FFC81E]">5 Simple Steps</p>
            <p className="text-[11px] text-white/85 font-semibold">Guided Intake</p>
          </div>
          <div className="bg-white/15 backdrop-blur-md p-2.5 rounded-2xl border border-white/30 text-center">
            <p className="font-heading text-sm sm:text-base font-bold text-white">24-Hour</p>
            <p className="text-[11px] text-white/85 font-semibold">Director Review</p>
          </div>
          <div className="bg-white/15 backdrop-blur-md p-2.5 rounded-2xl border border-white/30 text-center">
            <p className="font-heading text-sm sm:text-base font-bold text-[#FFC81E]">No Obligation</p>
            <p className="text-[11px] text-white/85 font-semibold">Free Spot Hold</p>
          </div>
        </div>
      </HeroMiniBanner>

      {/* 2. Main Registration Wizard Container */}
      <div id="registration-wizard-start" className="scroll-mt-24">
        <RegistrationContainer initialProgram={initialProgram} />
      </div>
    </div>
  );
}
