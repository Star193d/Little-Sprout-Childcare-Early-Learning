import { useState } from 'react';
import {
  Star,
  CheckCircle2,
  HelpCircle,
  Phone,
  Mail,
  MapPin,
  MessageSquare,
  Smile,
  Calendar,
  Home,
  Heart,
  GraduationCap,
  Camera,
  ChevronRight,
  ArrowRight,
} from 'lucide-react';
import {
  STATS,
  WHY_PARENTS_TRUST_US,
  SAMPLE_TESTIMONIAL,
  GALLERY_ITEMS,
  DAYCARE_CONFIG,
} from '../data/daycareData';
import { ProgramType } from '../types';
import { FloatingBlobs, Reveal, SectionHeading } from './MotionPrimitives';

interface MainContentSectionProps {
  onSelectProgram: (programId: ProgramType) => void;
  onOpenTour: () => void;
  onOpenContact: () => void;
  onOpenGallery: (initialIndex?: number) => void;
}

export function MainContentSection({
  onSelectProgram,
  onOpenContact,
  onOpenGallery,
}: MainContentSectionProps) {
  const [activeGalleryIndex, setActiveGalleryIndex] = useState(0);

  return (
    <section className="py-8 md:py-12 relative overflow-hidden">
      <FloatingBlobs variant="light" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* LEFT COLUMN: Our Programs, Statistics, Testimonial & Day at Sunny Days */}
          <div className="lg:col-span-8 space-y-7">
            {/* 1. Our Programs Section */}
            <div id="programs-section" className="space-y-5">
              <SectionHeading
                title="Our Programs"
                subtitle="Age-appropriate care and joyful learning tailored for every milestone"
                align="left"
                className="mb-6"
              />

              {/* 3 Gradient Morphing Program Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5">
                {/* 1. Infant Care */}
                <Reveal delayIndex={0}>
                  <div className="prog-card r p-6 flex flex-col justify-between h-full">
                    <div className="relative z-10">
                      <div className="flex items-center gap-3 mb-3.5">
                        <div className="w-12 h-12 ico-morph bg-white/25 border-2 border-white/60 flex items-center justify-center text-xl shadow-xs shrink-0">
                          👶
                        </div>
                        <div>
                          <h3 className="font-heading font-bold text-lg text-white leading-tight">
                            Infant Care
                          </h3>
                          <span className="text-[11px] font-bold text-white/90 block">
                            6 Weeks – 18 Months
                          </span>
                        </div>
                      </div>
                      <p className="text-xs sm:text-sm text-white/90 leading-relaxed mb-5">
                        A loving, shoeless sanctuary for babies to bond, explore textures, and grow at their own rhythm.
                      </p>
                    </div>
                    <button
                      onClick={() => onSelectProgram('infant')}
                      className="btn-sprout-yel relative z-10 w-full py-2.5 px-4 text-xs text-center cursor-pointer inline-flex items-center justify-center gap-1.5"
                    >
                      <span>Explore Infants</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </Reveal>

                {/* 2. Toddler Program */}
                <Reveal delayIndex={1}>
                  <div className="prog-card g p-6 flex flex-col justify-between h-full">
                    <div className="relative z-10">
                      <div className="flex items-center gap-3 mb-3.5">
                        <div className="w-12 h-12 ico-morph bg-white/25 border-2 border-white/60 flex items-center justify-center text-xl shadow-xs shrink-0">
                          🧒
                        </div>
                        <div>
                          <h3 className="font-heading font-bold text-lg text-white leading-tight">
                            Toddler Program
                          </h3>
                          <span className="text-[11px] font-bold text-white/90 block">
                            18 Months – 3 Years
                          </span>
                        </div>
                      </div>
                      <p className="text-xs sm:text-sm text-white/90 leading-relaxed mb-5">
                        Nurturing independence, early words, and joyful sensory curiosity through playful movement.
                      </p>
                    </div>
                    <button
                      onClick={() => onSelectProgram('toddler')}
                      className="btn-sprout-yel relative z-10 w-full py-2.5 px-4 text-xs text-center cursor-pointer inline-flex items-center justify-center gap-1.5"
                    >
                      <span>Explore Toddlers</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </Reveal>

                {/* 3. Preschool Program */}
                <Reveal delayIndex={2}>
                  <div className="prog-card b p-6 flex flex-col justify-between h-full">
                    <div className="relative z-10">
                      <div className="flex items-center gap-3 mb-3.5">
                        <div className="w-12 h-12 ico-morph bg-white/25 border-2 border-white/60 flex items-center justify-center text-xl shadow-xs shrink-0">
                          👦
                        </div>
                        <div>
                          <h3 className="font-heading font-bold text-lg text-white leading-tight">
                            Preschool Program
                          </h3>
                          <span className="text-[11px] font-bold text-white/90 block">
                            3 – 5 Years
                          </span>
                        </div>
                      </div>
                      <p className="text-xs sm:text-sm text-white/90 leading-relaxed mb-5">
                        Building strong phonics, early STEM, and social confidence for a joyful school transition.
                      </p>
                    </div>
                    <button
                      onClick={() => onSelectProgram('preschool')}
                      className="btn-sprout-yel relative z-10 w-full py-2.5 px-4 text-xs text-center cursor-pointer inline-flex items-center justify-center gap-1.5"
                    >
                      <span>Explore Preschool</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </Reveal>
              </div>
            </div>

            {/* 2. Frosted Glass Statistics Strip */}
            <Reveal delayIndex={1}>
              <div className="glass-lt interactive-card p-5">
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 ico-morph bg-blue-100 text-[#4F8FF0] flex items-center justify-center shrink-0 border border-blue-200">
                      <Smile className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-heading font-bold text-lg text-[#2A2540] block leading-tight">
                        {STATS[0].value}
                      </span>
                      <span className="text-[11px] text-slate-600 font-semibold">
                        {STATS[0].label}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 ico-morph bg-purple-100 text-[#7A35E0] flex items-center justify-center shrink-0 border border-purple-200">
                      <Calendar className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-heading font-bold text-lg text-[#2A2540] block leading-tight">
                        {STATS[1].value}
                      </span>
                      <span className="text-[11px] text-slate-600 font-semibold">
                        {STATS[1].label}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 ico-morph bg-amber-100 text-amber-600 flex items-center justify-center shrink-0 border border-amber-200">
                      <Star className="w-5 h-5 fill-[#FFC81E]" />
                    </div>
                    <div>
                      <span className="font-heading font-bold text-lg text-[#2A2540] block leading-tight">
                        {STATS[2].value}
                      </span>
                      <span className="text-[11px] text-slate-600 font-semibold">
                        {STATS[2].label}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 ico-morph bg-pink-100 text-[#F0368A] flex items-center justify-center shrink-0 border border-pink-200">
                      <Home className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-heading font-bold text-lg text-[#2A2540] block leading-tight">
                        {STATS[3].value}
                      </span>
                      <span className="text-[11px] text-slate-600 font-semibold">
                        {STATS[3].label}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* 3. Bottom Row: What Parents Say & A Day at Sunny Days */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 items-stretch">
              <Reveal delayIndex={1}>
                <div className="glass-lt card-sprout interactive-card p-6 flex flex-col justify-between h-full">
                  <div>
                    <div className="flex items-center gap-2.5 mb-3">
                      <div className="w-9 h-9 ico-morph bg-[#7A35E0] text-white flex items-center justify-center shadow-xs">
                        <MessageSquare className="w-4 h-4 fill-white" />
                      </div>
                      <h3 className="font-heading font-bold text-base text-[#2A2540]">
                        What Parents Say
                      </h3>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-700 italic leading-relaxed mb-4">
                      "{SAMPLE_TESTIMONIAL.quote}"
                    </p>
                  </div>
                  <div className="flex items-center justify-between pt-3 border-t border-purple-200/60">
                    <span className="text-xs font-bold text-[#2A2540]">
                      – {SAMPLE_TESTIMONIAL.author}
                    </span>
                    <div className="flex items-center gap-0.5 text-[#FFC81E]">
                      {[...Array(SAMPLE_TESTIMONIAL.rating)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-[#FFC81E]" />
                      ))}
                    </div>
                  </div>
                </div>
              </Reveal>

              <Reveal delayIndex={2}>
                <div className="glass-lt card-sprout interactive-card p-6 flex flex-col justify-between h-full">
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-2">
                        <div className="w-9 h-9 ico-morph bg-pink-100 text-[#F0368A] flex items-center justify-center border border-pink-200">
                          <Camera className="w-4 h-4" />
                        </div>
                        <h3 className="font-heading font-bold text-base text-[#2A2540]">
                          A Day at Sunny Days
                        </h3>
                      </div>
                      <button
                        onClick={() => onOpenGallery(activeGalleryIndex)}
                        className="text-xs font-bold text-[#7A35E0] hover:text-[#F0368A] flex items-center gap-0.5 cursor-pointer"
                      >
                        <span>View Gallery</span>
                        <ChevronRight className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    <div className="grid grid-cols-3 gap-2">
                      {GALLERY_ITEMS.slice(0, 6).map((item, idx) => (
                        <button
                          key={item.id}
                          onClick={() => {
                            setActiveGalleryIndex(idx);
                            onOpenGallery(idx);
                          }}
                          className="group relative rounded-xl overflow-hidden aspect-4/3 bg-white border border-purple-200/70 hover:border-[#7A35E0] cursor-pointer"
                        >
                          <img
                            src={item.imageUrl}
                            alt={item.title}
                            className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-300"
                          />
                          <div className="absolute inset-0 bg-[#2A2540]/10 group-hover:bg-transparent transition-colors" />
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-center gap-1.5 pt-3">
                    {GALLERY_ITEMS.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => setActiveGalleryIndex(idx)}
                        className={`h-2 rounded-full transition-all cursor-pointer border ${
                          activeGalleryIndex === idx
                            ? 'bg-[#7A35E0] border-[#7A35E0] w-5'
                            : 'bg-purple-200 border-purple-300 w-2 hover:bg-purple-400'
                        }`}
                        aria-label={`View photo ${idx + 1}`}
                      />
                    ))}
                  </div>
                </div>
              </Reveal>
            </div>
          </div>

          {/* RIGHT COLUMN: Why Parents Trust Us & Have Questions? */}
          <div className="lg:col-span-4 space-y-6">
            <Reveal delayIndex={1}>
              <div className="glass-lt card-sprout interactive-card p-6 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 ico-morph bg-[#7A35E0] text-white flex items-center justify-center shadow-xs shrink-0">
                    <Heart className="w-5 h-5 fill-white" />
                  </div>
                  <h3 className="font-heading font-bold text-lg text-[#2A2540] tracking-tight">
                    Why Parents Trust Us
                  </h3>
                </div>

                <ul className="space-y-2.5 pt-1">
                  {WHY_PARENTS_TRUST_US.map((point, idx) => (
                    <li
                      key={idx}
                      className="flex items-center gap-2.5 text-xs sm:text-sm text-[#2A2540] font-semibold"
                    >
                      <CheckCircle2 className="w-4 h-4 text-[#6DB93E] fill-emerald-100 shrink-0" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                <div className="pt-2">
                  <div className="bg-purple-50/90 rounded-2xl p-3.5 border border-purple-200 flex items-center gap-3 text-[#7A35E0]">
                    <GraduationCap className="w-5 h-5 text-[#7A35E0] shrink-0" />
                    <span className="font-heading font-bold text-xs tracking-tight">
                      A Strong Start Today,<br />A Brighter Tomorrow
                    </span>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal delayIndex={2}>
              <div className="glass-lt card-sprout interactive-card p-6 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 ico-morph bg-[#F0368A] text-white flex items-center justify-center shadow-xs shrink-0">
                    <HelpCircle className="w-5 h-5" />
                  </div>
                  <h3 className="font-heading font-bold text-lg text-[#2A2540] tracking-tight">
                    Have Questions?
                  </h3>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  We're here to help! Contact us for program availability or to schedule a personal tour.
                </p>

                <div className="space-y-2 text-xs text-[#2A2540] pt-1 font-semibold">
                  <div className="flex items-center gap-2">
                    <Phone className="w-3.5 h-3.5 text-[#F0368A] shrink-0" />
                    <span>{DAYCARE_CONFIG.phoneFormatted}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="w-3.5 h-3.5 text-[#F0368A] shrink-0" />
                    <span>{DAYCARE_CONFIG.emailFormatted}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-3.5 h-3.5 text-[#F0368A] shrink-0" />
                    <span>{DAYCARE_CONFIG.address}</span>
                  </div>
                </div>

                <div className="pt-1">
                  <button
                    id="main-contact-us-btn"
                    onClick={onOpenContact}
                    className="btn-sprout-purple w-full py-2.5 px-4 text-xs sm:text-sm cursor-pointer flex items-center justify-center gap-2"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Contact Us</span>
                  </button>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
