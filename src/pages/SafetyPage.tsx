import {
  Wind,
  Sparkles,
  HeartHandshake,
  Apple,
  CheckCircle2,
  Lock,
  Activity,
  Award,
  Calendar,
  Phone,
  ArrowRight,
  Plus,
} from 'lucide-react';
import { DAYCARE_CONFIG, DAYCARE_IMAGES } from '../data/daycareData';
import { PageId } from '../types';
import {
  FloatingBlobs,
  HeroMiniBanner,
  Reveal,
  SectionHeading,
} from '../components/MotionPrimitives';

interface SafetyPageProps {
  onNavigate: (page: PageId) => void;
  onOpenTour: () => void;
}

const POLICIES_IN_BRIEF = [
  {
    q: 'Secure 2-Stage PIN & Authorized Pickup Protocol',
    a: 'All entrances lock automatically and require a unique household PIN code. Any substitute guardian picking up a child must appear on the family authorization list and present government-issued photo ID at the desk.',
  },
  {
    q: '24-Hour Fever & Illness Exclusion Guidelines',
    a: 'To protect all classroom families, children experiencing fever (100.4°F+), vomiting, or contagious symptoms rest comfortably in our wellness suite until picked up and remain home for 24 symptom-free hours without medication.',
  },
  {
    q: 'Medication & Allergy Action Plans',
    a: 'Prescription EpiPens, inhalers, and rescue medications are kept in locked, teacher-accessible classroom pouches paired with color-coded emergency care cards and documented parent authorization.',
  },
  {
    q: 'Monthly Emergency Drills & Staff Certification',
    a: 'Every educator holds valid Pediatric CPR, AED, First-Aid, and Mandatory Reporter clearances alongside FBI background checks. We practice calm monthly fire, weather, and campus safety drills.',
  },
];

export function SafetyPage({ onNavigate, onOpenTour }: SafetyPageProps) {
  return (
    <div className="min-h-screen">
      {/* 1. Health & Safety Hero Banner */}
      <HeroMiniBanner
        title="Health, Safety & Peace of Mind"
        subtitle="Your child's physical well-being and emotional security come first. From two-stage PIN vestibules and HEPA-13 air filtration to 100% CPR-certified teachers, safety leads everything we do."
        bgImage={DAYCARE_IMAGES.mealtime}
        rightSlot={
          <div className="relative mx-auto max-w-md">
            <div className="photo-morph relative overflow-hidden bg-[#2A2540]">
              <img
                src={DAYCARE_IMAGES.mealtime}
                alt="Sanitized, safe, and nurturing daycare mealtime supervised by teacher"
                className="w-full h-80 sm:h-96 object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#2A2540]/85 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-5 left-6 right-6 text-white">
                <p className="font-heading text-base sm:text-lg font-bold leading-snug">
                  Hospital-grade clean, secure entry &amp; allergy-safe rooms
                </p>
              </div>
            </div>

            <div className="glass chip-bob hidden sm:flex items-center gap-3 p-3.5 absolute -bottom-4 -left-4 z-20 text-white">
              <div className="w-10 h-10 ico-morph bg-[#FFC81E] text-[#2A2540] flex items-center justify-center shrink-0">
                <Award className="w-5 h-5" />
              </div>
              <div className="text-left">
                <p className="text-xs font-extrabold text-white">State License Active</p>
                <p className="text-[11px] text-white/80 font-mono">{DAYCARE_CONFIG.licenseNumber}</p>
              </div>
            </div>
          </div>
        }
      >
        <div className="flex flex-wrap items-center gap-3 pt-1">
          <button
            id="safety-hero-tour-btn"
            onClick={onOpenTour}
            className="btn-sprout-yel inline-flex items-center justify-center gap-2 px-6 py-3 text-sm cursor-pointer"
          >
            <Calendar className="w-4 h-4" />
            <span>Book Safety Tour</span>
          </button>

          <button
            onClick={() => onNavigate('contact')}
            className="btn-sprout-ghost text-white inline-flex items-center justify-center gap-2 px-5 py-3 text-sm cursor-pointer"
          >
            <Phone className="w-4 h-4" />
            <span>Ask Safety Director</span>
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
            <p className="font-heading text-sm sm:text-base font-bold text-[#FFC81E]">2-Stage PIN</p>
            <p className="text-[11px] text-white/85 font-semibold">Secure Access</p>
          </div>
          <div className="bg-white/15 backdrop-blur-md p-2.5 rounded-2xl border border-white/30 text-center">
            <p className="font-heading text-sm sm:text-base font-bold text-white">HEPA-13 Air</p>
            <p className="text-[11px] text-white/85 font-semibold">Continuous Filtration</p>
          </div>
          <div className="bg-white/15 backdrop-blur-md p-2.5 rounded-2xl border border-white/30 text-center">
            <p className="font-heading text-sm sm:text-base font-bold text-[#FFC81E]">100% CPR</p>
            <p className="text-[11px] text-white/85 font-semibold">Certified Staff</p>
          </div>
        </div>
      </HeroMiniBanner>

      {/* 2. The 6 Pillars of Campus Safety */}
      <section className="py-16 relative overflow-hidden">
        <FloatingBlobs variant="light" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionHeading
            title="Six Pillars of Campus Protection"
            subtitle="Every safety layer is verified daily by our center leadership and certified educators."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Pillar 1 */}
            <Reveal delayIndex={0}>
              <div className="glass-lt card-sprout interactive-card p-6 h-full">
                <div className="w-12 h-12 ico-morph bg-[#7A35E0] text-white flex items-center justify-center mb-4">
                  <Lock className="w-6 h-6" />
                </div>
                <h3 className="font-heading text-lg font-bold text-[#2A2540] mb-2">
                  1. Controlled Secure Access
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                  Two-stage security vestibule with individualized guardian PIN codes, monitored entrances, and mandatory photo ID verification for any substitute pickup.
                </p>
                <ul className="space-y-1.5 text-xs text-[#2A2540] font-semibold">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#6DB93E]" />
                    <span>Single secure entry point</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#6DB93E]" />
                    <span>Authorized pickup registry with ID check</span>
                  </li>
                </ul>
              </div>
            </Reveal>

            {/* Pillar 2 */}
            <Reveal delayIndex={1}>
              <div className="glass-lt card-sprout interactive-card p-6 h-full">
                <div className="w-12 h-12 ico-morph bg-[#4F8FF0] text-white flex items-center justify-center mb-4">
                  <Wind className="w-6 h-6" />
                </div>
                <h3 className="font-heading text-lg font-bold text-[#2A2540] mb-2">
                  2. Medical-Grade Clean Air
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                  Every classroom features independent MERV-13 air filtration and continuous fresh air circulation capturing 99.97% of microscopic airborne particles.
                </p>
                <ul className="space-y-1.5 text-xs text-[#2A2540] font-semibold">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#6DB93E]" />
                    <span>5+ air exchanges per hour</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#6DB93E]" />
                    <span>Real-time air quality monitoring</span>
                  </li>
                </ul>
              </div>
            </Reveal>

            {/* Pillar 3 */}
            <Reveal delayIndex={2}>
              <div className="glass-lt card-sprout interactive-card p-6 h-full">
                <div className="w-12 h-12 ico-morph bg-[#FFC81E] text-[#2A2540] flex items-center justify-center mb-4">
                  <Sparkles className="w-6 h-6" />
                </div>
                <h3 className="font-heading text-lg font-bold text-[#2A2540] mb-2">
                  3. Daily Eco-Sanitization
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                  Child-safe, non-toxic botanically derived cleaners are used throughout the day. Toys and sensory tools undergo multi-stage wash cycles daily.
                </p>
                <ul className="space-y-1.5 text-xs text-[#2A2540] font-semibold">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#6DB93E]" />
                    <span>3-step sanitize after every meal</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#6DB93E]" />
                    <span>Nightly deep surface disinfection</span>
                  </li>
                </ul>
              </div>
            </Reveal>

            {/* Pillar 4 */}
            <Reveal delayIndex={0}>
              <div className="glass-lt card-sprout interactive-card p-6 h-full">
                <div className="w-12 h-12 ico-morph bg-[#F0368A] text-white flex items-center justify-center mb-4">
                  <HeartHandshake className="w-6 h-6" />
                </div>
                <h3 className="font-heading text-lg font-bold text-[#2A2540] mb-2">
                  4. 100% CPR &amp; AED Trained
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                  Every lead and assistant teacher holds Pediatric First Aid, CPR, and EpiPen certifications plus mandatory background screening.
                </p>
                <ul className="space-y-1.5 text-xs text-[#2A2540] font-semibold">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#6DB93E]" />
                    <span>Annual emergency recertification</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#6DB93E]" />
                    <span>Monthly calm evacuation drills</span>
                  </li>
                </ul>
              </div>
            </Reveal>

            {/* Pillar 5 */}
            <Reveal delayIndex={1}>
              <div className="glass-lt card-sprout interactive-card p-6 h-full">
                <div className="w-12 h-12 ico-morph bg-[#6DB93E] text-white flex items-center justify-center mb-4">
                  <Apple className="w-6 h-6" />
                </div>
                <h3 className="font-heading text-lg font-bold text-[#2A2540] mb-2">
                  5. 100% Nut-Safe Kitchen
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                  Our campus is strictly nut-free. Individualized Allergy Action Plans with color-coded prep zones safeguard children with dietary sensitivities.
                </p>
                <ul className="space-y-1.5 text-xs text-[#2A2540] font-semibold">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#6DB93E]" />
                    <span>Custom allergy badges for each child</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#6DB93E]" />
                    <span>Emergency medication locked in classroom</span>
                  </li>
                </ul>
              </div>
            </Reveal>

            {/* Pillar 6 */}
            <Reveal delayIndex={2}>
              <div className="glass-lt card-sprout interactive-card p-6 h-full">
                <div className="w-12 h-12 ico-morph bg-[#7A35E0] text-white flex items-center justify-center mb-4">
                  <Activity className="w-6 h-6" />
                </div>
                <h3 className="font-heading text-lg font-bold text-[#2A2540] mb-2">
                  6. Illness Exclusion Policy
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                  To protect all classroom families, we uphold a 24-hour symptom-free threshold before children return after fever or contagious illness.
                </p>
                <ul className="space-y-1.5 text-xs text-[#2A2540] font-semibold">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#6DB93E]" />
                    <span>Gentle, caring wellness isolation room</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#6DB93E]" />
                    <span>Instant parent notification for fever</span>
                  </li>
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 3. Animated Glass Policies Accordion Section */}
      <section className="py-12 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          title="Our Policies in Brief"
          subtitle="Clear, parent-friendly standards designed for healthy classrooms and daily transparency."
        />

        <div className="space-y-3.5">
          {POLICIES_IN_BRIEF.map((pol, idx) => (
            <Reveal key={idx} delayIndex={idx}>
              <details className="glass-accordion glass-lt interactive-card overflow-hidden" open={idx === 0}>
                <summary className="p-5 sm:p-6 flex items-center justify-between gap-4 font-heading font-bold text-[#2A2540] text-sm sm:text-base">
                  <span>{pol.q}</span>
                  <span className="w-8 h-8 rounded-full bg-purple-100 text-[#7A35E0] flex items-center justify-center shrink-0 border border-purple-200">
                    <Plus className="w-4 h-4 acc-plus" />
                  </span>
                </summary>
                <div className="px-5 sm:px-6 pb-5 pt-2 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-purple-200/50">
                  {pol.a}
                </div>
              </details>
            </Reveal>
          ))}
        </div>
      </section>

      {/* 4. Licensing & Certifications Banner */}
      <section className="py-14 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <Reveal>
          <div className="bg-[#2A2540] rounded-3xl p-8 sm:p-10 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl border border-white/20">
            <div className="space-y-2">
              <h3 className="font-heading text-2xl font-bold flex items-center gap-2.5">
                <Award className="w-6 h-6 text-[#FFC81E] shrink-0" />
                <span>Fully Licensed Early Learning Facility</span>
              </h3>
              <p className="text-xs sm:text-sm text-white/80 max-w-xl">
                License ID: <span className="font-mono text-[#FFC81E] font-bold">{DAYCARE_CONFIG.licenseNumber}</span>. We undergo regular unannounced inspections by the Department of Children and Families.
              </p>
            </div>
            <button
              onClick={onOpenTour}
              className="btn-sprout-yel px-6 py-3.5 text-xs sm:text-sm shrink-0 cursor-pointer"
            >
              See Our Safety in Person
            </button>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
