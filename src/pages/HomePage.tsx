import { Hero } from '../components/Hero';
import { TrustStrip } from '../components/TrustStrip';
import { MainContentSection } from '../components/MainContentSection';
import { ClosingCta } from '../components/ClosingCta';
import { PageId, ProgramType } from '../types';
import { ArrowRight, Apple, ShieldCheck, Clock, Phone, Calendar } from 'lucide-react';
import { DAYCARE_CONFIG, DAYCARE_IMAGES } from '../data/daycareData';
import { FloatingBlobs, Reveal, SectionHeading, WaveDivider } from '../components/MotionPrimitives';

interface HomePageProps {
  onNavigate: (page: PageId) => void;
  onOpenTour: () => void;
  onOpenContact: () => void;
  onOpenVideoTour: () => void;
  onOpenGallery: (index?: number) => void;
  onSelectProgram: (programId: ProgramType) => void;
}

export function HomePage({
  onNavigate,
  onOpenTour,
  onOpenContact,
  onOpenVideoTour,
  onOpenGallery,
  onSelectProgram,
}: HomePageProps) {
  return (
    <div className="space-y-0">
      {/* 1. Hero Section */}
      <Hero
        onOpenTour={onOpenTour}
        onScrollToRegistration={() => onNavigate('registration')}
        onOpenVideoTour={onOpenVideoTour}
      />

      {/* 2. Trust Strip (4 Highlights) */}
      <TrustStrip />

      {/* 3. Main 2-Column Content Showcase */}
      <MainContentSection
        onSelectProgram={onSelectProgram}
        onOpenTour={onOpenTour}
        onOpenContact={onOpenContact}
        onOpenGallery={onOpenGallery}
      />

      {/* 4. Signature Pink Glass Band (Small-Group Care & Campus Tour Callout) */}
      <section className="relative bg-[#F0368A] text-white py-20 sm:py-24 overflow-hidden">
        <WaveDivider position="top" />
        <FloatingBlobs variant="band" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            <Reveal delayIndex={0} className="lg:col-span-6 space-y-5">
              <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-[1.1]">
                Tiny Ratios. Big Hearts. Warm Daily Discovery.
              </h2>
              <p className="text-white/90 text-sm sm:text-base leading-relaxed">
                With industry-leading caregiver ratios (1:3 for infants, 1:4 for toddlers, 1:8 for preschoolers), your child is truly known, gently guided, and celebrated every single day.
              </p>

              <div className="glass p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="flex items-center gap-3.5">
                  <div className="w-11 h-11 ico-morph bg-[#FFC81E] text-[#2A2540] flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-heading font-bold text-base text-white">
                      {DAYCARE_CONFIG.phoneFormatted}
                    </p>
                    <p className="text-xs text-white/85">
                      {DAYCARE_CONFIG.operatingHours}
                    </p>
                  </div>
                </div>

                <button
                  onClick={onOpenTour}
                  className="btn-sprout-yel px-5 py-2.5 text-xs sm:text-sm inline-flex items-center gap-2 shrink-0 cursor-pointer"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book a Visit</span>
                </button>
              </div>
            </Reveal>

            <Reveal delayIndex={1} className="lg:col-span-6">
              <div className="glass p-3 sm:p-4">
                <div className="rounded-[22px] overflow-hidden border-2 border-white/50 shadow-xl aspect-[16/10]">
                  <img
                    src={DAYCARE_IMAGES.creativePlay}
                    alt="Teacher guiding small group creative painting and drawing session"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </Reveal>
          </div>
        </div>

        <WaveDivider position="bottom" />
      </section>

      {/* 5. Experience Quick Peek: A Day in Our Life & Nutrition */}
      <section className="py-16 relative overflow-hidden">
        <FloatingBlobs variant="light" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionHeading
            title="Every Day is an Adventure in Discovery"
            subtitle="Explore how we balance early STEM play, outdoor nature time, and scratch-cooked organic nutrition."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Reveal delayIndex={0}>
              <div className="glass-lt card-sprout interactive-card p-6 flex flex-col justify-between h-full">
                <div>
                  <div className="w-12 h-12 ico-morph bg-purple-100 text-[#7A35E0] flex items-center justify-center mb-4 border border-purple-200">
                    <Clock className="w-6 h-6" />
                  </div>
                  <h3 className="font-heading font-bold text-lg text-[#2A2540] mb-2">
                    Structured &amp; Gentle Routine
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                    From circle time and sensory exploration to quiet rest and outdoor motor play, our schedules give children security and confidence.
                  </p>
                </div>
                <button
                  onClick={() => onNavigate('daily-life')}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#7A35E0] hover:text-[#F0368A] transition-colors pt-3 border-t border-purple-200/60 cursor-pointer"
                >
                  <span>View Full Daily Schedule</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </Reveal>

            <Reveal delayIndex={1}>
              <div className="glass-lt card-sprout interactive-card p-6 flex flex-col justify-between h-full">
                <div>
                  <div className="w-12 h-12 ico-morph bg-emerald-100 text-[#6DB93E] flex items-center justify-center mb-4 border border-emerald-200">
                    <Apple className="w-6 h-6" />
                  </div>
                  <h3 className="font-heading font-bold text-lg text-[#2A2540] mb-2">
                    Fresh Organic Nutrition
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                    Warm, wholesome meals and crisp fruit snacks prepared fresh daily. 100% nut-free with dedicated allergy accommodations.
                  </p>
                </div>
                <button
                  onClick={() => onNavigate('daily-life')}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#6DB93E] hover:text-[#7A35E0] transition-colors pt-3 border-t border-purple-200/60 cursor-pointer"
                >
                  <span>Browse This Week's Menu</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </Reveal>

            <Reveal delayIndex={2}>
              <div className="glass-lt card-sprout interactive-card p-6 flex flex-col justify-between h-full">
                <div>
                  <div className="w-12 h-12 ico-morph bg-pink-100 text-[#F0368A] flex items-center justify-center mb-4 border border-pink-200">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <h3 className="font-heading font-bold text-lg text-[#2A2540] mb-2">
                    Hospital-Grade Safety
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                    Keycode vestibule entry, MERV-13 air purifiers, 100% CPR certified staff, and continuous sanitized touchpoints.
                  </p>
                </div>
                <button
                  onClick={() => onNavigate('safety')}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#F0368A] hover:text-[#7A35E0] transition-colors pt-3 border-t border-purple-200/60 cursor-pointer"
                >
                  <span>Read Safety Protocols</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 6. Closing CTA */}
      <ClosingCta onOpenTour={onOpenTour} />
    </div>
  );
}
