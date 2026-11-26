import { CSSProperties, useEffect, useRef, useState } from 'react';
import {
  Sparkles,
  Apple,
  Camera,
  Baby,
  Smile,
  GraduationCap,
  Sun,
  BookOpen,
  Utensils,
  Music,
  Moon,
  Calendar,
  ArrowRight,
} from 'lucide-react';
import {
  DAILY_ROUTINE_SCHEDULE,
  SAMPLE_MENU,
  GALLERY_ITEMS,
  DAYCARE_IMAGES,
} from '../data/daycareData';
import { PageId, ProgramType } from '../types';
import {
  FloatingBlobs,
  HeroMiniBanner,
  Reveal,
  SectionHeading,
  WaveDivider,
} from '../components/MotionPrimitives';

interface DailyLifePageProps {
  onNavigate: (page: PageId) => void;
  onOpenTour: () => void;
  onOpenGallery: (index?: number) => void;
}

export function DailyLifePage({
  onNavigate,
  onOpenTour,
  onOpenGallery,
}: DailyLifePageProps) {
  const [activeFilter, setActiveFilter] = useState<'all' | ProgramType>('all');
  const [selectedMenuDay, setSelectedMenuDay] = useState<string>('Monday');
  const [timelineProgress, setTimelineProgress] = useState(15);
  const [seenIds, setSeenIds] = useState<Record<string, boolean>>({});
  const timelineWrapRef = useRef<HTMLDivElement>(null);

  const filteredSchedule =
    activeFilter === 'all'
      ? DAILY_ROUTINE_SCHEDULE
      : DAILY_ROUTINE_SCHEDULE.filter((item) => item.suitableFor.includes(activeFilter));

  const currentMenu =
    SAMPLE_MENU.find((m) => m.day === selectedMenuDay) || SAMPLE_MENU[0];

  // Scroll-driven vertical timeline fill & seen-item reveal
  useEffect(() => {
    const updateTimeline = () => {
      const wrap = timelineWrapRef.current;
      if (!wrap) return;
      const rect = wrap.getBoundingClientRect();
      const viewH = window.innerHeight;
      const raw = ((viewH * 0.65 - rect.top) / Math.max(rect.height, 1)) * 100;
      const clamped = Math.max(6, Math.min(100, raw));
      setTimelineProgress(clamped);

      const items = wrap.querySelectorAll<HTMLElement>('[data-tl-id]');
      const nextSeen: Record<string, boolean> = {};
      items.forEach((el) => {
        const id = el.dataset.tlId;
        if (!id) return;
        const itemTop = el.getBoundingClientRect().top;
        if (itemTop < viewH * 0.85) {
          nextSeen[id] = true;
        }
      });
      setSeenIds((prev) => ({ ...prev, ...nextSeen }));
    };

    updateTimeline();
    window.addEventListener('scroll', updateTimeline, { passive: true });
    window.addEventListener('resize', updateTimeline, { passive: true });
    return () => {
      window.removeEventListener('scroll', updateTimeline);
      window.removeEventListener('resize', updateTimeline);
    };
  }, [filteredSchedule.length]);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'welcome':
      case 'departure':
        return <Sun className="w-4 h-4 text-[#FFC81E]" />;
      case 'meal':
        return <Utensils className="w-4 h-4 text-emerald-300" />;
      case 'learning':
        return <BookOpen className="w-4 h-4 text-sky-300" />;
      case 'outdoor':
      case 'creative':
        return <Music className="w-4 h-4 text-pink-300" />;
      case 'rest':
        return <Moon className="w-4 h-4 text-purple-300" />;
      default:
        return <Sparkles className="w-4 h-4 text-[#FFC81E]" />;
    }
  };

  return (
    <div className="min-h-screen">
      {/* 1. Daily Life Hero Banner */}
      <HeroMiniBanner
        title="Routines Built with Rhythm, Joy & Wonder"
        subtitle="Predictable, loving daily rhythms provide children with the emotional security they need to flourish, explore, and rest peacefully every day."
        bgImage={DAYCARE_IMAGES.outdoorPlay}
        rightSlot={
          <div className="relative mx-auto max-w-md">
            <div className="photo-morph relative overflow-hidden bg-[#2A2540]">
              <img
                src={DAYCARE_IMAGES.outdoorPlay}
                alt="Children happily playing outdoors during supervised morning playground time"
                className="w-full h-80 sm:h-96 object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#2A2540]/85 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-5 left-6 right-6 text-white">
                <p className="font-heading text-base sm:text-lg font-bold leading-snug">
                  Purposeful learning play, wholesome dining &amp; rest
                </p>
              </div>
            </div>

            <div className="glass chip-bob hidden sm:flex items-center gap-3 p-3.5 absolute -bottom-4 -left-4 z-20 text-white">
              <div className="w-10 h-10 ico-morph bg-[#6DB93E] text-white flex items-center justify-center shrink-0">
                <Apple className="w-5 h-5" />
              </div>
              <div className="text-left">
                <p className="text-xs font-extrabold text-white">Organic Chef Menu</p>
                <p className="text-[11px] text-white/80">Nut-aware &amp; allergy-safe</p>
              </div>
            </div>
          </div>
        }
      >
        <div className="flex flex-wrap items-center gap-3 pt-1">
          <button
            id="daily-hero-tour-btn"
            onClick={onOpenTour}
            className="btn-sprout-yel inline-flex items-center justify-center gap-2 px-6 py-3 text-sm cursor-pointer"
          >
            <Calendar className="w-4 h-4" />
            <span>Schedule a Tour</span>
          </button>

          <button
            onClick={() => onOpenGallery(0)}
            className="btn-sprout-ghost text-white inline-flex items-center justify-center gap-2 px-5 py-3 text-sm cursor-pointer"
          >
            <Camera className="w-4 h-4" />
            <span>View Activity Photos</span>
          </button>

          <button
            onClick={() => onNavigate('registration')}
            className="btn-sprout inline-flex items-center justify-center gap-2 px-5 py-3 text-sm cursor-pointer"
          >
            <span>Enroll Your Child</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="pt-4 grid grid-cols-3 gap-3 border-t border-white/25 max-w-xl">
          <div className="bg-white/15 backdrop-blur-md p-2.5 rounded-2xl border border-white/30 text-center">
            <p className="font-heading text-sm sm:text-base font-bold text-[#FFC81E]">7 AM – 6 PM</p>
            <p className="text-[11px] text-white/85 font-semibold">Operating Hours</p>
          </div>
          <div className="bg-white/15 backdrop-blur-md p-2.5 rounded-2xl border border-white/30 text-center">
            <p className="font-heading text-sm sm:text-base font-bold text-white">3 Fresh Meals</p>
            <p className="text-[11px] text-white/85 font-semibold">Organic &amp; Balanced</p>
          </div>
          <div className="bg-white/15 backdrop-blur-md p-2.5 rounded-2xl border border-white/30 text-center">
            <p className="font-heading text-sm sm:text-base font-bold text-[#FFC81E]">Live App</p>
            <p className="text-[11px] text-white/85 font-semibold">Daily Photos &amp; Naps</p>
          </div>
        </div>
      </HeroMiniBanner>

      {/* 2. Weekly Organic Menu & Scratch Kitchen */}
      <section className="py-16 relative overflow-hidden">
        <FloatingBlobs variant="light" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionHeading
            title="Sample Weekly Organic Menu"
            subtitle="All meals are prepared fresh in our on-site certified kitchen. 100% nut-safe with dairy-free and vegetarian options."
          />

          <div className="flex flex-wrap justify-center gap-2.5 mb-8">
            {SAMPLE_MENU.map((item) => (
              <button
                key={item.day}
                onClick={() => setSelectedMenuDay(item.day)}
                className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all cursor-pointer border ${
                  selectedMenuDay === item.day
                    ? 'btn-sprout-purple'
                    : 'bg-white/80 text-[#2A2540] border-purple-200 hover:bg-purple-50 hover:border-[#7A35E0]'
                }`}
              >
                {item.day}
              </button>
            ))}
          </div>

          <div key={selectedMenuDay} className="max-w-3xl mx-auto glass-lt interactive-card p-6 sm:p-8 step-swap">
            <div className="flex items-center justify-between pb-4 border-b border-purple-200/60 mb-6">
              <span className="font-heading font-bold text-xl text-[#2A2540]">
                {currentMenu.day}'s Fresh Menu
              </span>
              <span className="text-xs font-bold px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 border border-emerald-200">
                Nut-Safe &amp; Organic
              </span>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 ico-morph bg-amber-100 text-amber-700 flex items-center justify-center shrink-0 border border-amber-200">
                  <Sun className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-bold text-[#7A35E0] uppercase tracking-wider block">
                    Morning Breakfast (8:30 AM)
                  </span>
                  <p className="text-sm sm:text-base font-bold text-[#2A2540] mt-0.5">
                    {currentMenu.breakfast}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-11 h-11 ico-morph bg-emerald-100 text-[#6DB93E] flex items-center justify-center shrink-0 border border-emerald-200">
                  <Utensils className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-bold text-[#6DB93E] uppercase tracking-wider block">
                    Warm Lunch (11:30 AM)
                  </span>
                  <p className="text-sm sm:text-base font-bold text-[#2A2540] mt-0.5">
                    {currentMenu.lunch}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-11 h-11 ico-morph bg-pink-100 text-[#F0368A] flex items-center justify-center shrink-0 border border-pink-200">
                  <Apple className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-bold text-[#F0368A] uppercase tracking-wider block">
                    Afternoon Energizing Snack (3:30 PM)
                  </span>
                  <p className="text-sm sm:text-base font-bold text-[#2A2540] mt-0.5">
                    {currentMenu.snack}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Scroll-Driven Vertical Animated Daily Routine Timeline (Navy Band) */}
      <section className="relative bg-[#2A2540] text-white py-20 sm:py-24 overflow-hidden">
        <WaveDivider position="top" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionHeading
            title="Interactive Daily Schedule"
            subtitle="Filter schedule moments by classroom or scroll down to watch your child's day unfold."
            lightText
          />

          {/* Filter Pills */}
          <div className="flex flex-wrap justify-center gap-2 p-2 rounded-full bg-white/10 backdrop-blur-md border border-white/25 max-w-fit mx-auto mb-12">
            <button
              onClick={() => setActiveFilter('all')}
              className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer border ${
                activeFilter === 'all'
                  ? 'bg-[#FFC81E] text-[#2A2540] border-white'
                  : 'text-white/90 border-transparent hover:bg-white/15'
              }`}
            >
              All Programs
            </button>
            <button
              onClick={() => setActiveFilter('infant')}
              className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all inline-flex items-center gap-1.5 cursor-pointer border ${
                activeFilter === 'infant'
                  ? 'bg-[#F0368A] text-white border-white'
                  : 'text-white/90 border-transparent hover:bg-white/15'
              }`}
            >
              <Baby className="w-3.5 h-3.5" />
              <span>Infants</span>
            </button>
            <button
              onClick={() => setActiveFilter('toddler')}
              className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all inline-flex items-center gap-1.5 cursor-pointer border ${
                activeFilter === 'toddler'
                  ? 'bg-[#6DB93E] text-white border-white'
                  : 'text-white/90 border-transparent hover:bg-white/15'
              }`}
            >
              <Smile className="w-3.5 h-3.5" />
              <span>Toddlers</span>
            </button>
            <button
              onClick={() => setActiveFilter('preschool')}
              className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all inline-flex items-center gap-1.5 cursor-pointer border ${
                activeFilter === 'preschool'
                  ? 'bg-[#7A35E0] text-white border-white'
                  : 'text-white/90 border-transparent hover:bg-white/15'
              }`}
            >
              <GraduationCap className="w-3.5 h-3.5" />
              <span>Preschool</span>
            </button>
          </div>

          {/* Scroll-Filled Vertical Timeline */}
          <div ref={timelineWrapRef} className="tl-wrap">
            <div className="tl-track" />
            <div
              className="tl-fill"
              style={{ '--p': `${timelineProgress}%` } as CSSProperties}
            />

            {filteredSchedule.map((step) => {
              const isSeen = !!seenIds[step.id];
              return (
                <div
                  key={step.id}
                  data-tl-id={step.id}
                  className={`tl-item ${isSeen ? 'seen' : ''}`}
                >
                  <div className="tl-dot" />
                  <div className="glass p-5 sm:p-6">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2.5">
                      <span className="text-xs font-bold px-3 py-1 rounded-full bg-[#FFC81E] text-[#2A2540] font-mono">
                        {step.time}
                      </span>
                      <div className="w-8 h-8 rounded-xl bg-white/15 border border-white/30 flex items-center justify-center">
                        {getCategoryIcon(step.category)}
                      </div>
                    </div>
                    <h3 className="font-heading font-bold text-lg text-white mb-1.5">
                      {step.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-white/85 leading-relaxed mb-3">
                      {step.description}
                    </p>
                    <div className="flex flex-wrap gap-1.5 pt-2 border-t border-white/15">
                      {step.suitableFor.map((prog) => (
                        <span
                          key={prog}
                          className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-white/15 border border-white/30 text-white"
                        >
                          {prog === 'infant'
                            ? 'Infant'
                            : prog === 'toddler'
                            ? 'Toddler'
                            : 'Preschool'}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <WaveDivider position="bottom" />
      </section>

      {/* 4. Activity Gallery Preview */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          <div>
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-[#2A2540] sec-highlight">
              Classroom Moments &amp; Activities
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              A glimpse into our tactile learning, outdoor garden, and creative arts.
            </p>
          </div>
          <button
            onClick={() => onOpenGallery(0)}
            className="btn-sprout-purple inline-flex items-center gap-2 px-5 py-2.5 text-xs cursor-pointer self-start sm:self-auto"
          >
            <Camera className="w-4 h-4" />
            <span>Open Fullscreen Gallery</span>
          </button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {GALLERY_ITEMS.map((item, index) => (
            <Reveal key={item.id} delayIndex={index}>
              <button
                onClick={() => onOpenGallery(index)}
                className="group relative rounded-2xl overflow-hidden aspect-square w-full cursor-pointer shadow-sm hover:shadow-xl border-2 border-white hover:border-[#7A35E0] transition-all"
              >
                <img
                  src={item.src}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-[#2A2540]/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-3 text-left">
                  <span className="text-[11px] font-bold text-white leading-tight">
                    {item.title}
                  </span>
                </div>
              </button>
            </Reveal>
          ))}
        </div>
      </section>

      {/* 5. Real-Time Parent App Preview Banner */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10">
        <Reveal>
          <div className="rounded-3xl bg-gradient-to-br from-[#7A35E0] to-[#F0368A] text-white p-8 sm:p-10 border border-white/40 shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 space-y-4">
                <h2 className="font-heading text-2xl sm:text-3xl font-bold">
                  Live Daily Communication in the Palm of Your Hand
                </h2>
                <p className="text-sm text-white/90 leading-relaxed max-w-2xl">
                  Never wonder how your little one is doing. Our dedicated parent app delivers real-time diaper logs, nap duration tracking, meal updates, and heartwarming photo moments directly to your phone.
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                  <div className="glass p-3 rounded-2xl">
                    <p className="text-xs font-bold text-white">Instant Photos</p>
                    <p className="text-[11px] text-white/80">Daily snapshots</p>
                  </div>
                  <div className="glass p-3 rounded-2xl">
                    <p className="text-xs font-bold text-white">Nap &amp; Meals</p>
                    <p className="text-[11px] text-white/80">Live rest logs</p>
                  </div>
                  <div className="glass p-3 rounded-2xl">
                    <p className="text-xs font-bold text-white">Messaging</p>
                    <p className="text-[11px] text-white/80">Lead teachers</p>
                  </div>
                  <div className="glass p-3 rounded-2xl">
                    <p className="text-xs font-bold text-white">Check-In</p>
                    <p className="text-[11px] text-white/80">Secure PIN pickup</p>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-4 text-center lg:text-right">
                <button
                  onClick={() => onNavigate('registration')}
                  className="btn-sprout-yel px-7 py-3.5 text-sm cursor-pointer"
                >
                  Enroll Your Child Today
                </button>
              </div>
            </div>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
