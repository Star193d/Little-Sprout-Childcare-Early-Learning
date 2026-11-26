import { useState, useEffect } from 'react';
import {
  Calendar,
  UserCheck,
  ChevronLeft,
  ChevronRight,
  ShieldCheck,
  Heart,
  Sparkles,
  Star,
} from 'lucide-react';
import { DAYCARE_CONFIG, DAYCARE_IMAGES } from '../data/daycareData';
import { FloatingBlobs, SplitHeadline, WaveDivider } from './MotionPrimitives';

interface HeroProps {
  onOpenTour: () => void;
  onScrollToRegistration: () => void;
  onOpenVideoTour?: () => void;
}

interface SlideItem {
  id: string;
  url: string;
  badgeNumber: string;
  title: string;
  category: string;
  description: string;
  alt: string;
}

const HERO_SLIDES: SlideItem[] = [
  {
    id: 'creative-play',
    url: DAYCARE_IMAGES.creativePlay,
    badgeNumber: '01',
    category: 'Classroom Creative Play',
    title: 'Creative Arts & Self-Expression',
    description: 'Children exploring colors and creativity with hands-on educator guidance',
    alt: 'Diverse South African children drawing and coloring at a table with their engaged, caring teacher',
  },
  {
    id: 'outdoor-play',
    url: DAYCARE_IMAGES.outdoorPlay,
    badgeNumber: '02',
    category: 'Supervised Outdoor Play',
    title: 'Sunny Playgrounds & Motor Skills',
    description: 'Energetic outdoor games in secure, grassed courtyards with watchful teachers',
    alt: 'Diverse group of young children happily playing outdoors in a sunny green daycare playground supervised by teacher',
  },
  {
    id: 'storytime',
    url: DAYCARE_IMAGES.storytime,
    badgeNumber: '03',
    category: 'Storytime & Early Literacy',
    title: 'Language & Wonder Reading Circles',
    description: 'Nurturing curiosity through interactive group storybooks and vocabulary',
    alt: 'Caring teacher reading a colorful storybook with a group of attentive, engaged children in cozy circle',
  },
  {
    id: 'mealtime',
    url: DAYCARE_IMAGES.mealtime,
    badgeNumber: '04',
    category: 'Supervised Wholesome Mealtime',
    title: 'Nutritious Dining & Social Habits',
    description: 'Fresh healthy dining promoting mealtime manners and social connection',
    alt: 'Smiling children enjoying nutritious snacks and fruit together with attentive teacher support',
  },
  {
    id: 'learning-activity',
    url: DAYCARE_IMAGES.learningActivity,
    badgeNumber: '05',
    category: 'Educational Learning Activity',
    title: 'Early STEM, Puzzles & Cognitive Play',
    description: 'Hands-on tactile materials guiding critical thinking and problem solving',
    alt: 'Teacher actively guiding children through educational puzzles, building blocks and sensory learning materials',
  },
];

export function Hero({ onOpenTour, onScrollToRegistration }: HeroProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // 5-second automated slide transition cycle
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [isPaused]);

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev === 0 ? HERO_SLIDES.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
  };

  const current = HERO_SLIDES[currentSlide];

  return (
    <section className="hero-surface pt-28 pb-24 md:pt-32 md:pb-28">
      {/* Ken Burns Atmospheric Backdrop synced to current scene */}
      <div
        className="hero-bg-photo transition-all duration-1000"
        style={{ backgroundImage: `url(${current.url})` }}
        aria-hidden="true"
      />

      {/* Ambient Floating Pastel Blobs */}
      <FloatingBlobs variant="hero" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Frosted Glass Morph Card with Split Headline */}
          <div className="lg:col-span-6">
            <div className="glass hero-card-morph p-7 sm:p-10 space-y-5 text-left">
              <SplitHeadline
                text="A Safe, Fun & Nurturing Home"
                className="font-heading text-4xl sm:text-5xl xl:text-[56px] font-bold text-white leading-[1.06]"
              />

              <h2 className="font-heading text-lg sm:text-2xl font-semibold text-[#FFC81E] tracking-tight">
                {DAYCARE_CONFIG.subheadline}
              </h2>

              <p className="text-white/90 text-sm sm:text-base leading-relaxed max-w-xl font-normal">
                {DAYCARE_CONFIG.description}
              </p>

              {/* Parent Trust Highlights */}
              <div className="grid grid-cols-3 gap-2 sm:gap-3 pt-1">
                <div className="flex items-center gap-2 p-2.5 rounded-2xl bg-white/15 backdrop-blur-md border border-white/35">
                  <ShieldCheck className="w-4 h-4 text-[#FFC81E] shrink-0" />
                  <span className="text-xs font-bold text-white leading-tight">100% Supervised</span>
                </div>
                <div className="flex items-center gap-2 p-2.5 rounded-2xl bg-white/15 backdrop-blur-md border border-white/35">
                  <Heart className="w-4 h-4 text-pink-200 shrink-0" />
                  <span className="text-xs font-bold text-white leading-tight">Loving Care</span>
                </div>
                <div className="flex items-center gap-2 p-2.5 rounded-2xl bg-white/15 backdrop-blur-md border border-white/35">
                  <Sparkles className="w-4 h-4 text-[#FFC81E] shrink-0" />
                  <span className="text-xs font-bold text-white leading-tight">ECD Curriculum</span>
                </div>
              </div>

              {/* Primary Tactile Actions */}
              <div className="flex flex-wrap items-center gap-3.5 pt-2">
                <button
                  id="hero-enroll-child-btn"
                  onClick={onScrollToRegistration}
                  className="btn-sprout-yel inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm sm:text-base cursor-pointer"
                >
                  <UserCheck className="w-5 h-5" />
                  <span>Enroll Your Child</span>
                </button>

                <button
                  id="hero-schedule-tour-btn"
                  onClick={onOpenTour}
                  className="btn-sprout-ghost text-white inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm sm:text-base cursor-pointer"
                >
                  <Calendar className="w-5 h-5" />
                  <span>Schedule a Tour</span>
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: Unified 5-Image Organic Morphing Slideshow + Bobbing Glass Chips */}
          <div className="lg:col-span-6 relative mt-4 lg:mt-0">
            <div className="relative mx-auto w-full max-w-xl">
              {/* Top-right Bobbing Glass Chip */}
              <div className="glass chip-bob-delayed hidden sm:flex items-center gap-2.5 px-4 py-2.5 absolute -top-5 -right-3 z-30 text-white">
                <div className="w-8 h-8 rounded-full bg-[#FFC81E] text-[#2A2540] flex items-center justify-center shrink-0 border border-white/70">
                  <Star className="w-4 h-4 fill-[#2A2540]" />
                </div>
                <div className="text-left">
                  <span className="text-xs font-extrabold block leading-tight">98% Parent Love</span>
                  <span className="text-[10px] text-white/85 block">6 Wks – 5 Yrs</span>
                </div>
              </div>

              {/* SINGLE UNIFIED HERO SLIDESHOW CONTAINER WITH ORGANIC MORPHING FRAME */}
              <div
                id="hero-slideshow-unified-container"
                aria-label="Sunny Days Daycare Life Slideshow"
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
                className="photo-morph relative w-full aspect-[16/10.5] overflow-hidden bg-[#2A2540] group"
              >
                {/* 5 Crossfading Slides with Smooth Zoom */}
                {HERO_SLIDES.map((slide, index) => {
                  const isActive = index === currentSlide;
                  return (
                    <div
                      key={slide.id}
                      aria-hidden={!isActive}
                      className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                        isActive ? 'opacity-100 z-10' : 'opacity-0 pointer-events-none z-0'
                      }`}
                    >
                      <img
                        src={slide.url}
                        alt={slide.alt}
                        className={`w-full h-full object-cover object-center transition-transform duration-[5000ms] ease-out ${
                          isActive ? 'scale-105' : 'scale-100'
                        }`}
                        loading={index === 0 ? 'eager' : 'lazy'}
                      />
                    </div>
                  );
                })}

                {/* Soft Gradient Overlay for Readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#2A2540]/90 via-[#2A2540]/20 to-[#2A2540]/30 z-10 pointer-events-none" />

                {/* Top Bar: Scene Category Pill & Counter */}
                <div className="absolute top-5 left-6 right-6 z-20 flex items-center justify-between pointer-events-none">
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#2A2540]/60 backdrop-blur-md border border-white/35 text-white shadow-sm pointer-events-auto">
                    <span className="w-2 h-2 rounded-full bg-[#FFC81E] animate-pulse" />
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#FFC81E]">
                      {current.category}
                    </span>
                  </div>

                  <div className="px-2.5 py-1 rounded-full bg-[#2A2540]/55 backdrop-blur-md border border-white/30 text-white text-xs font-mono font-bold tracking-widest pointer-events-auto">
                    {current.badgeNumber} <span className="text-white/50">/</span> 05
                  </div>
                </div>

                {/* Left & Right Navigation Buttons */}
                <button
                  onClick={handlePrev}
                  aria-label="Previous image"
                  className="absolute left-3.5 top-1/2 -translate-y-1/2 z-20 w-9 h-9 rounded-full bg-white/90 hover:bg-white text-[#2A2540] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-200 shadow-md cursor-pointer hover:scale-105 active:scale-95 border border-white"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={handleNext}
                  aria-label="Next image"
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 z-20 w-9 h-9 rounded-full bg-white/90 hover:bg-white text-[#2A2540] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-200 shadow-md cursor-pointer hover:scale-105 active:scale-95 border border-white"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>

                {/* Bottom Bar: Scene Info & 5 Interactive Dots */}
                <div className="absolute bottom-5 left-6 right-6 z-20 flex flex-col sm:flex-row sm:items-end justify-between gap-2.5">
                  <div className="text-left max-w-sm">
                    <h3 className="font-heading text-white font-bold text-sm sm:text-base leading-tight drop-shadow-sm">
                      {current.title}
                    </h3>
                    <p className="text-white/85 text-xs leading-snug line-clamp-1 mt-0.5">
                      {current.description}
                    </p>
                  </div>

                  <div className="flex items-center gap-1.5 bg-[#2A2540]/60 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/30 self-start sm:self-auto">
                    {HERO_SLIDES.map((slide, idx) => {
                      const isActive = idx === currentSlide;
                      return (
                        <button
                          key={slide.id}
                          onClick={() => setCurrentSlide(idx)}
                          aria-label={`View ${slide.category} (${idx + 1} of 5)`}
                          title={slide.category}
                          className={`h-2 rounded-full transition-all duration-500 cursor-pointer border ${
                            isActive
                              ? 'w-7 bg-[#FFC81E] border-white shadow-xs'
                              : 'w-2 bg-white/55 border-white/45 hover:bg-white'
                          }`}
                        />
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Bottom-left Bobbing Glass Chip */}
              <div className="glass chip-bob hidden sm:flex items-center gap-2.5 px-4 py-2.5 absolute -bottom-5 -left-3 z-30 text-white">
                <div className="w-8 h-8 rounded-full bg-[#F0368A] text-white flex items-center justify-center shrink-0 border border-white/60">
                  <Heart className="w-4 h-4 fill-white" />
                </div>
                <div className="text-left">
                  <span className="text-xs font-extrabold block leading-tight">1:3 – 1:8 Ratios</span>
                  <span className="text-[10px] text-white/85 block">State Licensed Care</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Seamless Wave Divider into Cream Canvas */}
      <WaveDivider position="bottom" />
    </section>
  );
}
