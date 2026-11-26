import { useState } from 'react';
import {
  Baby,
  Smile,
  GraduationCap,
  Sparkles,
  Check,
  Clock,
  Calendar,
  ArrowRight,
  BookOpen,
  ShieldCheck,
  ChevronRight,
  Apple,
  Plus,
} from 'lucide-react';
import {
  DAILY_ROUTINE_SCHEDULE,
  DAYCARE_IMAGES,
  FAQ_ITEMS,
  PROGRAM_DETAILS,
  SAFETY_STANDARDS,
  SAMPLE_MENU,
} from '../data/daycareData';
import { PageId, ProgramType } from '../types';
import {
  FloatingBlobs,
  HeroMiniBanner,
  Reveal,
  SectionHeading,
} from '../components/MotionPrimitives';

interface ProgramsPageProps {
  onNavigate: (page: PageId) => void;
  onOpenTour: () => void;
  onEnrollInProgram: (programId: ProgramType) => void;
  onSelectProgramDetail: (programId: ProgramType) => void;
}

export function ProgramsPage({
  onNavigate,
  onOpenTour,
  onEnrollInProgram,
}: ProgramsPageProps) {
  const [selectedTab, setSelectedTab] = useState<ProgramType>('infant');
  const [resourceTab, setResourceTab] = useState<'daily-life' | 'safety' | 'resources'>('daily-life');

  const activeProgram = PROGRAM_DETAILS[selectedTab];

  const PROGRAM_HERO_IMAGES: Record<ProgramType, string> = {
    infant: DAYCARE_IMAGES.learningActivity,
    toddler: DAYCARE_IMAGES.creativePlay,
    preschool: DAYCARE_IMAGES.storytime,
    prek: DAYCARE_IMAGES.outdoorPlay,
  };

  const getProgramIcon = (type: ProgramType) => {
    switch (type) {
      case 'infant':
        return <Baby className="w-6 h-6" />;
      case 'toddler':
        return <Smile className="w-6 h-6" />;
      case 'preschool':
        return <GraduationCap className="w-6 h-6" />;
      default:
        return <Sparkles className="w-6 h-6" />;
    }
  };

  return (
    <div className="min-h-screen">
      {/* 1. Programs Hero Banner */}
      <HeroMiniBanner
        title="Developmentally Tailored Early Learning"
        subtitle="From infant sensory tummy-time and nurturing attachments, to toddler motor discovery and preschool phonics readiness—every classroom honors your child's natural curiosity."
        bgImage={PROGRAM_HERO_IMAGES[selectedTab]}
        rightSlot={
          <div className="relative mx-auto max-w-md">
            <div className="photo-morph relative overflow-hidden bg-[#2A2540]">
              <img
                key={selectedTab}
                src={PROGRAM_HERO_IMAGES[selectedTab]}
                alt={activeProgram.name}
                className="w-full h-80 sm:h-96 object-cover object-center step-swap"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#2A2540]/85 via-transparent to-transparent pointer-events-none" />

              <div className="absolute bottom-5 left-6 right-6 text-white">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/25 backdrop-blur-md border border-white/40 text-xs font-bold mb-1.5">
                  <span>{activeProgram.ageRange}</span>
                  <span>•</span>
                  <span>{activeProgram.ratio}</span>
                </div>
                <p className="font-heading text-lg font-bold leading-snug">{activeProgram.name}</p>
              </div>
            </div>

            <div className="glass chip-bob hidden sm:flex items-center gap-3 p-3.5 absolute -bottom-4 -left-4 z-20 text-white">
              <div className="w-10 h-10 ico-morph bg-[#FFC81E] text-[#2A2540] flex items-center justify-center shrink-0">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div className="text-left">
                <p className="text-xs font-extrabold text-white">State Certified Teachers</p>
                <p className="text-[11px] text-white/80">Continuous observation &amp; care</p>
              </div>
            </div>
          </div>
        }
      >
        {/* Frosted Program Selector Tabs */}
        <div className="pt-1">
          <div className="inline-flex flex-wrap p-1.5 rounded-2xl bg-white/20 backdrop-blur-md border border-white/45 gap-1.5 max-w-full">
            <button
              onClick={() => setSelectedTab('infant')}
              className={`px-4 py-2 rounded-xl font-bold text-xs sm:text-sm transition-all flex items-center gap-2 cursor-pointer border ${
                selectedTab === 'infant'
                  ? 'bg-[#FFC81E] text-[#2A2540] border-white shadow-sm'
                  : 'text-white border-transparent hover:bg-white/15'
              }`}
            >
              <Baby className="w-4 h-4" />
              <span>Infant Care (6w–18m)</span>
            </button>
            <button
              onClick={() => setSelectedTab('toddler')}
              className={`px-4 py-2 rounded-xl font-bold text-xs sm:text-sm transition-all flex items-center gap-2 cursor-pointer border ${
                selectedTab === 'toddler'
                  ? 'bg-[#FFC81E] text-[#2A2540] border-white shadow-sm'
                  : 'text-white border-transparent hover:bg-white/15'
              }`}
            >
              <Smile className="w-4 h-4" />
              <span>Toddler (18m–3y)</span>
            </button>
            <button
              onClick={() => setSelectedTab('preschool')}
              className={`px-4 py-2 rounded-xl font-bold text-xs sm:text-sm transition-all flex items-center gap-2 cursor-pointer border ${
                selectedTab === 'preschool'
                  ? 'bg-[#FFC81E] text-[#2A2540] border-white shadow-sm'
                  : 'text-white border-transparent hover:bg-white/15'
              }`}
            >
              <GraduationCap className="w-4 h-4" />
              <span>Preschool (3y–5y)</span>
            </button>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center gap-3 pt-2">
          <button
            id="programs-hero-enroll-btn"
            onClick={() => onEnrollInProgram(selectedTab)}
            className="btn-sprout-yel inline-flex items-center justify-center gap-2 px-6 py-3 text-sm cursor-pointer"
          >
            <span>Enroll in {activeProgram.name}</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <button
            id="programs-hero-tour-btn"
            onClick={onOpenTour}
            className="btn-sprout-ghost text-white inline-flex items-center justify-center gap-2 px-6 py-3 text-sm cursor-pointer"
          >
            <Calendar className="w-4 h-4" />
            <span>Schedule Classroom Tour</span>
          </button>
        </div>
      </HeroMiniBanner>

      {/* 2. Active Program Deep Dive */}
      <section className="py-12 sm:py-16 relative overflow-hidden">
        <FloatingBlobs variant="light" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div key={selectedTab} className="glass-lt interactive-card overflow-hidden step-swap">
            {/* Top Banner for Active Program */}
            <div
              className={`p-6 sm:p-8 border-b ${
                selectedTab === 'infant'
                  ? 'bg-pink-50/75 border-pink-200/70'
                  : selectedTab === 'toddler'
                  ? 'bg-amber-50/75 border-amber-200/70'
                  : 'bg-purple-50/75 border-purple-200/70'
              }`}
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div
                    className={`w-14 h-14 ico-morph flex items-center justify-center shadow-sm ${
                      selectedTab === 'infant'
                        ? 'bg-[#F0368A] text-white'
                        : selectedTab === 'toddler'
                        ? 'bg-[#FFC81E] text-[#2A2540]'
                        : 'bg-[#7A35E0] text-white'
                    }`}
                  >
                    {getProgramIcon(selectedTab)}
                  </div>
                  <div>
                    <div className="flex flex-wrap items-center gap-2.5">
                      <h2 className="font-heading text-2xl sm:text-3xl font-bold text-[#2A2540]">
                        {activeProgram.name}
                      </h2>
                      <span
                        className={`text-xs font-bold px-3 py-1 rounded-full border ${
                          selectedTab === 'infant'
                            ? 'bg-pink-100 text-[#F0368A] border-pink-200'
                            : selectedTab === 'toddler'
                            ? 'bg-amber-100 text-amber-900 border-amber-200'
                            : 'bg-purple-100 text-[#7A35E0] border-purple-200'
                        }`}
                      >
                        {activeProgram.ageRange}
                      </span>
                    </div>
                    <p className="text-sm text-slate-600 mt-1 font-semibold">
                      {activeProgram.tagline}
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-3">
                  <button
                    onClick={() => onEnrollInProgram(selectedTab)}
                    className="btn-sprout-purple px-5 py-2.5 text-xs sm:text-sm inline-flex items-center gap-2 cursor-pointer"
                  >
                    <span>Enroll in this Program</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <button
                    onClick={onOpenTour}
                    className="px-5 py-2.5 rounded-full bg-white hover:bg-purple-50 text-[#2A2540] font-bold text-xs sm:text-sm border border-purple-200 transition-all inline-flex items-center gap-2 cursor-pointer"
                  >
                    <Calendar className="w-4 h-4 text-[#7A35E0]" />
                    <span>Book Tour</span>
                  </button>
                </div>
              </div>

              {/* Quick Stats Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-6 pt-5 border-t border-purple-200/60">
                <div className="bg-white/85 rounded-2xl p-3.5 border border-white">
                  <p className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">Staff Ratio</p>
                  <p className="font-heading text-base font-bold text-[#2A2540] mt-0.5">{activeProgram.ratio}</p>
                </div>
                <div className="bg-white/85 rounded-2xl p-3.5 border border-white">
                  <p className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">Class Capacity</p>
                  <p className="font-heading text-base font-bold text-[#2A2540] mt-0.5">{activeProgram.capacity}</p>
                </div>
                <div className="bg-white/85 rounded-2xl p-3.5 border border-white">
                  <p className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">Tuition / Schedule</p>
                  <p className="font-heading text-sm font-bold text-[#7A35E0] mt-0.5">{activeProgram.tuitionInfo}</p>
                </div>
                <div className="bg-white/85 rounded-2xl p-3.5 border border-white">
                  <p className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">Dietary Options</p>
                  <p className="font-heading text-sm font-bold text-[#6DB93E] mt-0.5">Organic &amp; Nut-Safe</p>
                </div>
              </div>
            </div>

            {/* Program Content Sections */}
            <div className="p-6 sm:p-10 space-y-9">
              <div>
                <h3 className="font-heading text-xl font-bold text-[#2A2540] mb-3 flex items-center gap-2">
                  <BookOpen className="w-5 h-5 text-[#7A35E0]" />
                  <span>Program Overview</span>
                </h3>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  {activeProgram.overview}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white/75 rounded-2xl p-6 border border-purple-200/70">
                  <h4 className="font-heading font-bold text-[#2A2540] text-base mb-4 flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-[#FFC81E]" />
                    <span>Key Developmental Milestones</span>
                  </h4>
                  <ul className="space-y-3">
                    {activeProgram.developmentGoals.map((goal, index) => (
                      <li key={index} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 font-medium">
                        <div className="w-5 h-5 rounded-full bg-emerald-100 text-[#6DB93E] flex items-center justify-center shrink-0 mt-0.5 border border-emerald-200">
                          <Check className="w-3.5 h-3.5" />
                        </div>
                        <span>{goal}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-white/75 rounded-2xl p-6 border border-purple-200/70">
                  <h4 className="font-heading font-bold text-[#2A2540] text-base mb-4 flex items-center gap-2">
                    <Clock className="w-4 h-4 text-[#7A35E0]" />
                    <span>Curriculum &amp; Daily Activities</span>
                  </h4>
                  <ul className="space-y-3">
                    {activeProgram.sampleActivities.map((act, index) => (
                      <li key={index} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 font-medium">
                        <div className="w-5 h-5 rounded-full bg-purple-100 text-[#7A35E0] flex items-center justify-center shrink-0 mt-0.5 border border-purple-200">
                          <ChevronRight className="w-3.5 h-3.5" />
                        </div>
                        <span>{act}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div>
                <h4 className="font-heading font-bold text-[#2A2540] text-base mb-4">
                  What Parents Appreciate in this Classroom:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {activeProgram.keyHighlights.map((hl, i) => (
                    <div key={i} className="p-4 rounded-2xl bg-white/85 border border-purple-200/70 shadow-xs">
                      <p className="text-xs sm:text-sm font-semibold text-[#2A2540] flex items-center gap-2.5">
                        <ShieldCheck className="w-4 h-4 text-[#6DB93E] shrink-0" />
                        <span>{hl}</span>
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-purple-50/90 border border-purple-200 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <h4 className="font-heading font-bold text-[#2A2540] text-lg">
                    Ready to reserve a spot for your child?
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 mt-0.5">
                    Complete our quick 5-step digital registration or schedule a private classroom walk-through.
                  </p>
                </div>
                <button
                  onClick={() => onEnrollInProgram(selectedTab)}
                  className="btn-sprout-yel px-6 py-3 text-xs sm:text-sm shrink-0 cursor-pointer"
                >
                  Start Registration
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. All 3 Programs Comparison Cards */}
      <section className="py-14 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="All Classroom Offerings at a Glance"
            subtitle="Select any classroom to view full details or register directly."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {(['infant', 'toddler', 'preschool'] as ProgramType[]).map((pType, idx) => {
              const item = PROGRAM_DETAILS[pType];
              const cardTheme = pType === 'infant' ? 'r' : pType === 'toddler' ? 'g' : 'b';
              return (
                <Reveal key={pType} delayIndex={idx}>
                  <div
                    className={`prog-card ${cardTheme} p-6 flex flex-col justify-between h-full ${
                      selectedTab === pType ? 'ring-4 ring-[#FFC81E]' : ''
                    }`}
                  >
                    <div className="relative z-10">
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-xs font-bold px-3 py-1 rounded-full bg-white/25 border border-white/45 text-white">
                          {item.ageRange}
                        </span>
                        <span className="text-xs font-bold text-[#FFC81E]">{item.ratio}</span>
                      </div>
                      <h4 className="font-heading text-xl font-bold text-white mb-1.5">{item.name}</h4>
                      <p className="text-xs sm:text-sm text-white/90 mb-5 line-clamp-2">{item.tagline}</p>
                    </div>
                    <div className="relative z-10 pt-4 border-t border-white/25 flex items-center justify-between gap-2">
                      <button
                        onClick={() => {
                          setSelectedTab(pType);
                          window.scrollTo({ top: 360, behavior: 'smooth' });
                        }}
                        className="text-xs font-bold text-white hover:text-[#FFC81E] cursor-pointer"
                      >
                        View Deep Dive →
                      </button>
                      <button
                        onClick={() => onEnrollInProgram(pType)}
                        className="btn-sprout-yel px-4 py-1.5 text-xs cursor-pointer"
                      >
                        Enroll
                      </button>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. Moved Sections Inside Programs: Daily Life, Safety & Resources */}
      <section className="py-14 sm:py-16 relative overflow-hidden">
        <FloatingBlobs variant="light" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionHeading
            title="Daily Life, Safety & Family Resources"
            subtitle="Explore how our daily rhythms, classroom safety protocols, and parent guides support every program."
          />

          {/* Interactive Switcher for Daily Life / Safety / Resources */}
          <div className="flex justify-center mb-8">
            <div className="inline-flex flex-wrap justify-center p-1.5 rounded-2xl glass-lt gap-1.5 border border-purple-200/70">
              <button
                onClick={() => setResourceTab('daily-life')}
                className={`px-4 sm:px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all inline-flex items-center gap-2 cursor-pointer border whitespace-nowrap ${
                  resourceTab === 'daily-life'
                    ? 'bg-[#7A35E0] text-white border-[#7A35E0] shadow-sm'
                    : 'text-[#2A2540] border-transparent hover:bg-purple-50'
                }`}
              >
                <Clock className="w-4 h-4" />
                <span>Daily Life</span>
              </button>

              <button
                onClick={() => setResourceTab('safety')}
                className={`px-4 sm:px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all inline-flex items-center gap-2 cursor-pointer border whitespace-nowrap ${
                  resourceTab === 'safety'
                    ? 'bg-[#F0368A] text-white border-[#F0368A] shadow-sm'
                    : 'text-[#2A2540] border-transparent hover:bg-pink-50'
                }`}
              >
                <ShieldCheck className="w-4 h-4" />
                <span>Safety</span>
              </button>

              <button
                onClick={() => setResourceTab('resources')}
                className={`px-4 sm:px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all inline-flex items-center gap-2 cursor-pointer border whitespace-nowrap ${
                  resourceTab === 'resources'
                    ? 'bg-[#FFC81E] text-[#2A2540] border-[#e6b00e] shadow-sm'
                    : 'text-[#2A2540] border-transparent hover:bg-amber-50'
                }`}
              >
                <BookOpen className="w-4 h-4" />
                <span>Resources</span>
              </button>
            </div>
          </div>

          {/* Tab Panel Content */}
          {resourceTab === 'daily-life' && (
            <div key="tab-daily-life" className="glass-lt interactive-card p-6 sm:p-8 space-y-6 step-swap">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-5 border-b border-purple-200/60">
                <div>
                  <h3 className="font-heading text-2xl font-bold text-[#2A2540]">
                    Daily Life &amp; Organic Nutrition
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1">
                    Balanced rhythms of morning discovery, fresh scratch-cooked meals, outdoor nature play, and peaceful rest.
                  </p>
                </div>
                <button
                  onClick={() => onNavigate('daily-life')}
                  className="btn-sprout-purple px-5 py-2.5 text-xs sm:text-sm inline-flex items-center gap-2 shrink-0 cursor-pointer"
                >
                  <span>Full Daily Schedule &amp; Menu</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                <div className="lg:col-span-7 space-y-3">
                  {DAILY_ROUTINE_SCHEDULE.slice(0, 5).map((item) => (
                    <div
                      key={item.id}
                      className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 p-4 rounded-2xl bg-white/85 border border-purple-200/60"
                    >
                      <div>
                        <p className="font-heading font-bold text-sm sm:text-base text-[#2A2540]">
                          {item.title}
                        </p>
                        <p className="text-xs text-slate-600 mt-0.5 leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                      <span className="text-xs font-mono font-bold text-[#7A35E0] shrink-0 sm:pl-4">
                        {item.time}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="lg:col-span-5 bg-white/85 rounded-2xl p-6 border border-emerald-200/80 flex flex-col justify-between space-y-5">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-11 h-11 ico-morph bg-emerald-100 text-[#6DB93E] flex items-center justify-center border border-emerald-200 shrink-0">
                        <Apple className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="font-heading font-bold text-lg text-[#2A2540]">
                          Sample Scratch-Kitchen Menu
                        </h4>
                        <p className="text-xs text-slate-500 font-semibold">
                          100% Organic &amp; Nut-Safe ({SAMPLE_MENU[0].day})
                        </p>
                      </div>
                    </div>

                    <div className="space-y-3 text-xs sm:text-sm text-slate-700">
                      <div className="p-3 rounded-xl bg-amber-50/70 border border-amber-200/60">
                        <span className="font-bold text-[#2A2540] block">Morning Breakfast</span>
                        <span className="text-slate-600">{SAMPLE_MENU[0].breakfast}</span>
                      </div>
                      <div className="p-3 rounded-xl bg-emerald-50/70 border border-emerald-200/60">
                        <span className="font-bold text-[#2A2540] block">Warm Lunch</span>
                        <span className="text-slate-600">{SAMPLE_MENU[0].lunch}</span>
                      </div>
                      <div className="p-3 rounded-xl bg-purple-50/70 border border-purple-200/60">
                        <span className="font-bold text-[#2A2540] block">Afternoon Snack</span>
                        <span className="text-slate-600">{SAMPLE_MENU[0].snack}</span>
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={() => onNavigate('daily-life')}
                    className="btn-sprout-yel w-full py-2.5 px-4 text-xs sm:text-sm cursor-pointer inline-flex items-center justify-center gap-2"
                  >
                    <span>Browse Full 5-Day Menu</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          )}

          {resourceTab === 'safety' && (
            <div key="tab-safety" className="glass-lt interactive-card p-6 sm:p-8 space-y-6 step-swap">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-5 border-b border-pink-200/60">
                <div>
                  <h3 className="font-heading text-2xl font-bold text-[#2A2540]">
                    Health, Safety &amp; Campus Security
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1">
                    Hospital-grade air filtration, controlled PIN access, allergen zones, and 100% pediatric CPR certified educators.
                  </p>
                </div>
                <button
                  onClick={() => onNavigate('safety')}
                  className="btn-sprout px-5 py-2.5 text-xs sm:text-sm inline-flex items-center gap-2 shrink-0 cursor-pointer"
                >
                  <span>Full Safety Protocols</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {SAFETY_STANDARDS.map((item) => (
                  <div
                    key={item.title}
                    className="p-5 rounded-2xl bg-white/85 border border-purple-200/60 space-y-2"
                  >
                    <div className="flex items-center justify-between gap-2">
                      <ShieldCheck className="w-5 h-5 text-[#F0368A] shrink-0" />
                      <span className="text-[11px] font-bold text-[#7A35E0]">
                        {item.badge}
                      </span>
                    </div>
                    <h4 className="font-heading font-bold text-base text-[#2A2540]">
                      {item.title}
                    </h4>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {resourceTab === 'resources' && (
            <div key="tab-resources" className="glass-lt interactive-card p-6 sm:p-8 space-y-6 step-swap">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-5 border-b border-amber-200/70">
                <div>
                  <h3 className="font-heading text-2xl font-bold text-[#2A2540]">
                    Parent Resources, Handbook &amp; FAQs
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1">
                    Answers to common enrollment questions, packing checklists, and family policies in one place.
                  </p>
                </div>
                <button
                  onClick={() => onNavigate('resources')}
                  className="btn-sprout-yel px-5 py-2.5 text-xs sm:text-sm inline-flex items-center gap-2 shrink-0 cursor-pointer"
                >
                  <span>Open Handbook &amp; Checklist</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              <div className="space-y-3">
                {FAQ_ITEMS.slice(0, 5).map((faq, idx) => (
                  <details
                    key={idx}
                    className="glass-accordion bg-white/85 rounded-2xl border border-purple-200/60 p-4 sm:p-5"
                  >
                    <summary className="flex items-center justify-between gap-4 font-heading font-bold text-sm sm:text-base text-[#2A2540]">
                      <span>{faq.q}</span>
                      <Plus className="w-4 h-4 text-[#7A35E0] shrink-0 acc-plus" />
                    </summary>
                    <div className="pt-3 mt-3 border-t border-purple-200/50 text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {faq.a}
                    </div>
                  </details>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
