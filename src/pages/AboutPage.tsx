import {
  ShieldCheck,
  HeartHandshake,
  Sparkles,
  Apple,
  Check,
  Calendar,
  PlayCircle,
  ArrowRight,
} from 'lucide-react';
import { CORE_VALUES, DAYCARE_CONFIG, DAYCARE_IMAGES, STAFF_RATIOS } from '../data/daycareData';
import { PageId } from '../types';
import {
  FloatingBlobs,
  HeroMiniBanner,
  Reveal,
  SectionHeading,
} from '../components/MotionPrimitives';

interface AboutPageProps {
  onNavigate: (page: PageId) => void;
  onOpenTour: () => void;
  onOpenVideoTour: () => void;
}

export function AboutPage({ onNavigate, onOpenTour, onOpenVideoTour }: AboutPageProps) {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'ShieldCheck':
        return <ShieldCheck className="w-6 h-6" />;
      case 'HeartHandshake':
        return <HeartHandshake className="w-6 h-6" />;
      case 'Sparkles':
        return <Sparkles className="w-6 h-6" />;
      case 'Apple':
        return <Apple className="w-6 h-6" />;
      default:
        return <Sparkles className="w-6 h-6" />;
    }
  };

  const getValueBadgeStyle = (id: string) => {
    switch (id) {
      case 'safety':
        return 'bg-[#6DB93E] text-white border border-emerald-200';
      case 'nurturing':
        return 'bg-[#F0368A] text-white border border-pink-200';
      case 'learning':
        return 'bg-[#FFC81E] text-[#2A2540] border border-amber-200';
      case 'nutrition':
        return 'bg-[#4F8FF0] text-white border border-blue-200';
      default:
        return 'bg-[#7A35E0] text-white border border-purple-200';
    }
  };

  return (
    <div className="min-h-screen">
      {/* 1. Page Header Hero Banner */}
      <HeroMiniBanner
        title="Where Every Child's Light Shines Brightly"
        subtitle={`Founded with a devotion to compassionate, inquiry-led early education, ${DAYCARE_CONFIG.name} provides infants, toddlers, and preschoolers with an enriching sanctuary for whole-child growth.`}
        bgImage={DAYCARE_IMAGES.storytime}
        rightSlot={
          <div className="relative mx-auto max-w-md">
            <div className="photo-morph relative overflow-hidden bg-[#2A2540]">
              <img
                src={DAYCARE_IMAGES.storytime}
                alt="Caring educator reading engaging story to young daycare children"
                className="w-full h-80 sm:h-96 object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#2A2540]/85 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-5 left-6 right-6 text-white">
                <p className="font-heading text-base sm:text-lg font-bold leading-snug">
                  Loving guidance, emotional warmth &amp; developmental joy
                </p>
              </div>
            </div>

            <div className="glass chip-bob hidden sm:flex items-center gap-3 p-3.5 absolute -bottom-5 -left-4 z-20 text-white">
              <div className="w-10 h-10 ico-morph bg-[#FFC81E] text-[#2A2540] flex items-center justify-center shrink-0">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div className="text-left">
                <p className="text-xs font-extrabold text-white">State Licensed Facility</p>
                <p className="text-[11px] text-white/80 font-mono">{DAYCARE_CONFIG.licenseNumber}</p>
              </div>
            </div>
          </div>
        }
      >
        <div className="flex flex-wrap items-center gap-3 pt-1">
          <button
            id="about-hero-tour-btn"
            onClick={onOpenTour}
            className="btn-sprout-yel inline-flex items-center justify-center gap-2 px-6 py-3 text-sm cursor-pointer"
          >
            <Calendar className="w-4 h-4" />
            <span>Schedule a Visit</span>
          </button>

          <button
            id="about-hero-video-btn"
            onClick={onOpenVideoTour}
            className="btn-sprout-ghost text-white inline-flex items-center justify-center gap-2 px-5 py-3 text-sm cursor-pointer"
          >
            <PlayCircle className="w-4 h-4" />
            <span>Virtual Video Tour</span>
          </button>

          <button
            onClick={() => onNavigate('registration')}
            className="btn-sprout inline-flex items-center justify-center gap-2 px-5 py-3 text-sm cursor-pointer"
          >
            <span>Enroll Now</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="pt-4 grid grid-cols-3 gap-3 border-t border-white/25 max-w-xl">
          <div className="bg-white/15 backdrop-blur-md p-2.5 rounded-2xl border border-white/30 text-center">
            <p className="font-heading text-lg sm:text-xl font-bold text-[#FFC81E]">10+ Yrs</p>
            <p className="text-[11px] text-white/85 font-semibold leading-tight">Serving Families</p>
          </div>
          <div className="bg-white/15 backdrop-blur-md p-2.5 rounded-2xl border border-white/30 text-center">
            <p className="font-heading text-lg sm:text-xl font-bold text-white">1:3 – 1:8</p>
            <p className="text-[11px] text-white/85 font-semibold leading-tight">Low Staff Ratios</p>
          </div>
          <div className="bg-white/15 backdrop-blur-md p-2.5 rounded-2xl border border-white/30 text-center">
            <p className="font-heading text-lg sm:text-xl font-bold text-[#FFC81E]">100%</p>
            <p className="text-[11px] text-white/85 font-semibold leading-tight">CPR &amp; First-Aid</p>
          </div>
        </div>
      </HeroMiniBanner>

      {/* 2. Director's Letter & Story */}
      <section className="py-16 relative overflow-hidden">
        <FloatingBlobs variant="light" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <Reveal delayIndex={0} className="lg:col-span-5 relative">
              <div className="photo-morph relative overflow-hidden bg-[#2A2540]">
                <img
                  src={DAYCARE_IMAGES.learningActivity}
                  alt="Director and early childhood educator guiding children"
                  className="w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2A2540]/85 via-transparent to-transparent" />
                <div className="absolute bottom-5 left-6 right-6 text-white">
                  <p className="font-heading font-bold text-lg">Elena Rostova, M.Ed</p>
                  <p className="text-xs text-[#FFC81E] font-semibold">
                    Director &amp; Founder, Early Childhood Development
                  </p>
                </div>
              </div>

              <div className="glass-lt chip-bob hidden sm:flex items-center gap-3 p-4 absolute -bottom-5 -right-4 z-20 max-w-xs">
                <div className="w-11 h-11 ico-morph bg-[#FFC81E] text-[#2A2540] flex items-center justify-center font-heading font-bold text-base shrink-0">
                  10+
                </div>
                <div className="text-xs">
                  <p className="font-bold text-[#2A2540]">Years of Excellence</p>
                  <p className="text-slate-600">Over 500+ happy alumni families</p>
                </div>
              </div>
            </Reveal>

            <Reveal delayIndex={1} className="lg:col-span-7 space-y-5">
              <h2 className="font-heading text-2xl sm:text-4xl font-bold text-[#2A2540] tracking-tight sec-highlight">
                A Home Away from Home Built by Parents, for Parents.
              </h2>
              <div className="glass-lt p-6 sm:p-8 space-y-4 text-slate-700 text-sm sm:text-base leading-relaxed">
                <p>
                  "When I founded {DAYCARE_CONFIG.name}, my intention was simple yet deeply personal: to create an early learning center where safety is absolute, teachers are deeply cherished, and every little learner is embraced with unhurried warmth."
                </p>
                <p>
                  Our curriculum blends play-based inquiry, Reggio Emilia inspired hands-on discovery, and structured kindergarten readiness phonics. We believe that emotional safety is the prerequisite to all true learning.
                </p>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-3">
                  <div className="p-3.5 rounded-2xl bg-purple-50/90 border border-purple-200">
                    <p className="font-heading text-xl font-bold text-[#7A35E0]">100%</p>
                    <p className="text-xs font-bold text-[#2A2540] mt-0.5">CPR &amp; First Aid</p>
                    <p className="text-[11px] text-slate-600">All staff certified</p>
                  </div>
                  <div className="p-3.5 rounded-2xl bg-emerald-50/90 border border-emerald-200">
                    <p className="font-heading text-xl font-bold text-[#6DB93E]">1:3 / 1:4</p>
                    <p className="text-xs font-bold text-[#2A2540] mt-0.5">Low Ratios</p>
                    <p className="text-[11px] text-slate-600">Individualized care</p>
                  </div>
                  <div className="p-3.5 rounded-2xl bg-pink-50/90 border border-pink-200 col-span-2 sm:col-span-1">
                    <p className="font-heading text-xl font-bold text-[#F0368A]">100%</p>
                    <p className="text-xs font-bold text-[#2A2540] mt-0.5">Nut-Free</p>
                    <p className="text-[11px] text-slate-600">Safe allergen kitchen</p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 3. Core Values Grid */}
      <section className="py-16 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Our 4 Pillars of Early Education"
            subtitle="The everyday standards that inspire every activity, cuddle, and snack."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {CORE_VALUES.map((val, idx) => (
              <Reveal key={val.id} delayIndex={idx}>
                <div className="glass-lt card-sprout interactive-card p-6 flex flex-col justify-between h-full">
                  <div>
                    <div
                      className={`w-12 h-12 ico-morph flex items-center justify-center mb-5 ${getValueBadgeStyle(
                        val.id
                      )}`}
                    >
                      {getIcon(val.icon)}
                    </div>
                    <h3 className="font-heading font-bold text-lg text-[#2A2540] mb-2">
                      {val.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                      {val.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-purple-200/60 space-y-2">
                    {val.highlights.map((h, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-[#2A2540] font-semibold">
                        <Check className="w-3.5 h-3.5 text-[#6DB93E] shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Classroom Ratios & State Standards */}
      <section className="py-16 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Low Ratios for Attentive Care"
            subtitle="We exceed state licensing mandates so your child receives the unhurried responsive care they deserve."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {STAFF_RATIOS.map((item, index) => (
              <Reveal key={index} delayIndex={index}>
                <div className="glass-lt card-sprout interactive-card p-6 text-center flex flex-col justify-between h-full">
                  <div>
                    <span className="text-xs font-bold px-3 py-1 rounded-full bg-purple-100 border border-purple-200 text-[#7A35E0] inline-block mb-3">
                      {item.age}
                    </span>
                    <h3 className="font-heading text-xl font-bold text-[#2A2540]">{item.program}</h3>
                    <div className="my-4">
                      <span className="font-heading text-4xl font-bold text-[#7A35E0]">{item.ratio}</span>
                      <span className="text-xs text-slate-600 block mt-1 font-semibold">Teacher to Children</span>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">{item.focus}</p>
                  </div>
                  <div className="pt-2.5 border-t border-purple-200/60 text-xs font-bold text-emerald-800 bg-emerald-100/70 py-2 rounded-xl border border-emerald-200">
                    State Limit: {item.stateLimit}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="mt-12 text-center">
            <button
              onClick={() => onNavigate('programs')}
              className="btn-sprout-purple inline-flex items-center gap-2 px-7 py-3.5 text-sm cursor-pointer"
            >
              <span>Explore All Classroom Programs</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
