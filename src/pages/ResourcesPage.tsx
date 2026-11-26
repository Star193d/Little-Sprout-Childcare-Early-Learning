import { useState } from 'react';
import {
  CheckSquare,
  HelpCircle,
  Download,
  FileText,
  Search,
  ChevronDown,
  Check,
  ShieldCheck,
  Calendar,
  Clock,
  Heart,
  MessageSquare,
  ArrowRight,
  CheckCircle2,
} from 'lucide-react';
import { FAQ_ITEMS, DAYCARE_CONFIG, DAYCARE_IMAGES } from '../data/daycareData';
import { PageId } from '../types';
import {
  FloatingBlobs,
  HeroMiniBanner,
  Reveal,
} from '../components/MotionPrimitives';

interface ResourcesPageProps {
  onNavigate: (page: PageId) => void;
  onOpenTour: () => void;
  onOpenContact: () => void;
}

export function ResourcesPage({ onNavigate, onOpenTour, onOpenContact }: ResourcesPageProps) {
  const [activeSection, setActiveSection] = useState<'faq' | 'checklist' | 'handbook'>('faq');
  const [searchQuery, setSearchQuery] = useState('');
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [handbookNotice, setHandbookNotice] = useState(false);

  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({
    'pack-1': true,
    'pack-2': true,
    'pack-3': false,
    'pack-4': false,
    'pack-5': false,
    'pack-6': false,
    'pack-7': false,
  });

  const toggleCheck = (id: string) => {
    setCheckedItems((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const handleDownloadHandbook = () => {
    const summaryText = [
      `${DAYCARE_CONFIG.name} — Parent Handbook Summary (${new Date().getFullYear()})`,
      `Operating Hours: ${DAYCARE_CONFIG.hours}`,
      `Ratios: ${DAYCARE_CONFIG.ratiosSummary}`,
      `License: ${DAYCARE_CONFIG.licenseNumber}`,
      '',
      'Key Policies:',
      '1. Drop-off recommended between 7:00 AM and 9:00 AM.',
      '2. 24-hour symptom-free wellness exclusion without fever-reducing medication.',
      '3. 100% nut-free kitchen and color-coded allergy safety plans.',
      '4. Gentle, positive behavioral guidance.',
    ].join('\n');

    const blob = new Blob([summaryText], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'sunny-days-parent-handbook.txt';
    document.body.appendChild(link);
    link.click();
    link.remove();
    URL.revokeObjectURL(url);

    setHandbookNotice(true);
    window.setTimeout(() => setHandbookNotice(false), 4500);
  };

  const PACKING_LIST = [
    { id: 'pack-1', title: '2 Complete Changes of Clothes', desc: "Weather-appropriate shirts, pants, underwear/onesies, and socks labeled with your child's name." },
    { id: 'pack-2', title: 'Comfort / Transition Item', desc: 'A favorite small stuffed animal, blanket, or family photo for rest time security.' },
    { id: 'pack-3', title: 'Diapers & Wipes (Infant/Toddler)', desc: '1 package of labeled diapers and 2 packs of wipes (we provide eco-friendly diaper cream application).' },
    { id: 'pack-4', title: 'Indoor / Outdoor Footwear', desc: 'Closed-toe velcro shoes suitable for active playground running and sandbox play.' },
    { id: 'pack-5', title: 'Sun Hat & Non-Toxic Sunscreen', desc: 'Labeled wide-brim hat for outdoor garden and sensory playtime.' },
    { id: 'pack-6', title: 'Labeled Water Cup / Sippy Cup', desc: 'Spill-proof water bottle that stays fresh with classroom water station refills.' },
    { id: 'pack-7', title: 'Infant Bottles & Formula/Milk', desc: "Prepared bottles labeled with child's name and date (stored in our infant classroom refrigerator)." },
  ];

  const filteredFaqs = FAQ_ITEMS.filter(
    (faq) =>
      faq.q.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.a.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen">
      {/* 1. Parent Hub Hero Banner */}
      <HeroMiniBanner
        title="Resources, Guides & Parent FAQs"
        subtitle={`Everything you need for a smooth, confident, and joyful transition into the ${DAYCARE_CONFIG.name} family. Explore common questions, download our policy handbook, and use our Day-1 packing guide.`}
        bgImage={DAYCARE_IMAGES.storytime}
        rightSlot={
          <div className="relative mx-auto max-w-md">
            <div className="photo-morph relative overflow-hidden bg-[#2A2540]">
              <img
                src={DAYCARE_IMAGES.storytime}
                alt="Teacher and children gathered around a colorful picture book"
                className="w-full h-80 sm:h-96 object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#2A2540]/85 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-5 left-6 right-6 text-white">
                <p className="font-heading text-base sm:text-lg font-bold leading-snug">
                  Transparent policies, daily photos &amp; supportive teachers
                </p>
              </div>
            </div>

            <div className="glass chip-bob hidden sm:flex items-center gap-3 p-3.5 absolute -bottom-4 -left-4 z-20 text-white">
              <div className="w-10 h-10 ico-morph bg-[#FFC81E] text-[#2A2540] flex items-center justify-center shrink-0">
                <FileText className="w-5 h-5" />
              </div>
              <div className="text-left">
                <p className="text-xs font-extrabold text-white">Handbook Available</p>
                <p className="text-[11px] text-white/80">Updated for {new Date().getFullYear()} School Year</p>
              </div>
            </div>
          </div>
        }
      >
        {/* Resource Tab Selector */}
        <div className="pt-1">
          <div className="inline-flex flex-wrap p-1.5 rounded-2xl bg-white/20 backdrop-blur-md border border-white/45 gap-1.5 max-w-full">
            <button
              onClick={() => setActiveSection('faq')}
              className={`px-4 py-2 rounded-xl font-bold text-xs sm:text-sm transition-all flex items-center gap-2 cursor-pointer border ${
                activeSection === 'faq'
                  ? 'bg-[#FFC81E] text-[#2A2540] border-white shadow-sm'
                  : 'text-white border-transparent hover:bg-white/15'
              }`}
            >
              <HelpCircle className="w-4 h-4" />
              <span>FAQs</span>
            </button>
            <button
              onClick={() => setActiveSection('checklist')}
              className={`px-4 py-2 rounded-xl font-bold text-xs sm:text-sm transition-all flex items-center gap-2 cursor-pointer border ${
                activeSection === 'checklist'
                  ? 'bg-[#FFC81E] text-[#2A2540] border-white shadow-sm'
                  : 'text-white border-transparent hover:bg-white/15'
              }`}
            >
              <CheckSquare className="w-4 h-4" />
              <span>Day 1 Checklist</span>
            </button>
            <button
              onClick={() => setActiveSection('handbook')}
              className={`px-4 py-2 rounded-xl font-bold text-xs sm:text-sm transition-all flex items-center gap-2 cursor-pointer border ${
                activeSection === 'handbook'
                  ? 'bg-[#FFC81E] text-[#2A2540] border-white shadow-sm'
                  : 'text-white border-transparent hover:bg-white/15'
              }`}
            >
              <FileText className="w-4 h-4" />
              <span>Parent Handbook</span>
            </button>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center gap-3 pt-2">
          <button
            id="resources-hero-tour-btn"
            onClick={onOpenTour}
            className="btn-sprout-yel inline-flex items-center justify-center gap-2 px-6 py-3 text-sm cursor-pointer"
          >
            <Calendar className="w-4 h-4" />
            <span>Schedule Campus Tour</span>
          </button>

          <button
            onClick={onOpenContact}
            className="btn-sprout-ghost text-white inline-flex items-center justify-center gap-2 px-5 py-3 text-sm cursor-pointer"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Ask a Question</span>
          </button>

          <button
            onClick={() => onNavigate('registration')}
            className="btn-sprout inline-flex items-center justify-center gap-2 px-5 py-3 text-sm cursor-pointer"
          >
            <span>Enroll Online</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </HeroMiniBanner>

      {/* 2. Content Body */}
      <section className="py-12 sm:py-16 relative overflow-hidden">
        <FloatingBlobs variant="light" />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Section 1: FAQs */}
          {activeSection === 'faq' && (
            <div key="faq" className="space-y-6 step-swap">
              <div className="glass-lt p-4 flex items-center gap-3">
                <Search className="w-5 h-5 text-[#7A35E0] shrink-0" />
                <input
                  type="text"
                  placeholder="Search questions (e.g., ratios, meals, sick policy, enrollment)..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full text-sm text-[#2A2540] placeholder-slate-500 bg-transparent border-0 outline-none focus:ring-0 focus:shadow-none!"
                />
              </div>

              <div className="space-y-3.5">
                {filteredFaqs.map((faq, idx) => (
                  <Reveal key={idx} delayIndex={idx}>
                    <div className="glass-lt interactive-card overflow-hidden">
                      <button
                        onClick={() => setOpenFaqIndex(openFaqIndex === idx ? null : idx)}
                        className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 font-heading font-bold text-[#2A2540] text-sm sm:text-base hover:bg-white/50 cursor-pointer"
                      >
                        <span>{faq.q}</span>
                        <ChevronDown
                          className={`w-5 h-5 text-[#7A35E0] shrink-0 transition-transform duration-300 ${
                            openFaqIndex === idx ? 'rotate-180 text-[#F0368A]' : ''
                          }`}
                        />
                      </button>
                      {openFaqIndex === idx && (
                        <div className="px-5 sm:px-6 pb-5 pt-2 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-purple-200/60 bg-white/50 step-swap">
                          {faq.a}
                        </div>
                      )}
                    </div>
                  </Reveal>
                ))}
              </div>

              <Reveal>
                <div className="glass-lt p-6 sm:p-7 flex flex-col sm:flex-row items-center justify-between gap-4 mt-8">
                  <div>
                    <h4 className="font-heading font-bold text-[#2A2540] text-lg">
                      Have a specific question not covered here?
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-600 mt-0.5">
                      Our admissions coordinator and lead educators are always happy to chat.
                    </p>
                  </div>
                  <button
                    onClick={onOpenContact}
                    className="btn-sprout-purple px-6 py-3 text-xs sm:text-sm cursor-pointer whitespace-nowrap"
                  >
                    Send Us a Message
                  </button>
                </div>
              </Reveal>
            </div>
          )}

          {/* Section 2: Day 1 Packing Checklist */}
          {activeSection === 'checklist' && (
            <div key="checklist" className="glass-lt interactive-card p-6 sm:p-8 space-y-6 step-swap">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-purple-200/60">
                <div>
                  <h3 className="font-heading text-2xl font-bold text-[#2A2540]">
                    First Day Packing Guide
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1">
                    Check items off as you prepare your child's labeled cubby backpack.
                  </p>
                </div>
                <span className="text-xs font-bold px-3.5 py-1.5 rounded-full bg-emerald-100 text-emerald-800 border border-emerald-200 self-start sm:self-auto">
                  {Object.values(checkedItems).filter(Boolean).length} of {PACKING_LIST.length} Packed
                </span>
              </div>

              <div className="space-y-3">
                {PACKING_LIST.map((item) => {
                  const isChecked = !!checkedItems[item.id];
                  return (
                    <button
                      type="button"
                      key={item.id}
                      onClick={() => toggleCheck(item.id)}
                      className={`w-full text-left p-4 rounded-2xl border transition-all cursor-pointer flex items-start gap-4 ${
                        isChecked
                          ? 'bg-emerald-50/80 border-emerald-300'
                          : 'bg-white/75 border-purple-200/70 hover:bg-white'
                      }`}
                    >
                      <div
                        className={`w-5 h-5 rounded-lg border flex items-center justify-center shrink-0 mt-0.5 ${
                          isChecked
                            ? 'bg-[#6DB93E] border-[#6DB93E] text-white'
                            : 'border-slate-300 bg-white'
                        }`}
                      >
                        {isChecked && <Check className="w-3.5 h-3.5" />}
                      </div>
                      <div>
                        <h4
                          className={`text-sm font-bold ${
                            isChecked ? 'text-emerald-950 line-through' : 'text-[#2A2540]'
                          }`}
                        >
                          {item.title}
                        </h4>
                        <p className="text-xs text-slate-600 mt-0.5">{item.desc}</p>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* Section 3: Parent Handbook & Key Policies */}
          {activeSection === 'handbook' && (
            <div key="handbook" className="glass-lt interactive-card p-6 sm:p-8 space-y-6 step-swap">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-purple-200/60">
                <div>
                  <h3 className="font-heading text-2xl font-bold text-[#2A2540]">
                    Parent Handbook &amp; Center Policies
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1">
                    Key guidelines ensuring a transparent, respectful, and safe community.
                  </p>
                </div>
                <button
                  onClick={handleDownloadHandbook}
                  className="btn-sprout-purple px-5 py-2.5 text-xs inline-flex items-center gap-2 cursor-pointer self-start sm:self-auto"
                >
                  <Download className="w-4 h-4 text-[#FFC81E]" />
                  <span>Download Handbook Summary</span>
                </button>
              </div>

              {handbookNotice && (
                <div className="p-3.5 rounded-2xl bg-emerald-100/90 border border-emerald-300 text-emerald-950 text-xs font-bold flex items-center gap-2 step-swap">
                  <CheckCircle2 className="w-4 h-4 text-[#6DB93E] shrink-0" />
                  <span>Sunny Days Parent Handbook summary downloaded to your device.</span>
                </div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-5 rounded-2xl bg-white/80 border border-purple-200/70">
                  <h4 className="font-heading font-bold text-base text-[#2A2540] mb-2 flex items-center gap-2">
                    <Clock className="w-4 h-4 text-[#7A35E0]" />
                    <span>Operating Hours &amp; Drop-Off</span>
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Open {DAYCARE_CONFIG.hours}. Morning drop-off is recommended between 7:00 AM – 9:00 AM to facilitate participation in the daily morning meeting and circle time.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-white/80 border border-purple-200/70">
                  <h4 className="font-heading font-bold text-base text-[#2A2540] mb-2 flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-amber-600" />
                    <span>Tuition &amp; Payment Schedule</span>
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Tuition is billed bi-weekly via automated bank draft or major credit card. A 10% sibling discount applies to the oldest enrolled child.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-white/80 border border-purple-200/70">
                  <h4 className="font-heading font-bold text-base text-[#2A2540] mb-2 flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-[#6DB93E]" />
                    <span>Illness &amp; Health Policy</span>
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Children must remain home until 24 hours fever-free (without fever-reducing medication). Immediate parent alerts sent for any observed wellness changes.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-white/80 border border-purple-200/70">
                  <h4 className="font-heading font-bold text-base text-[#2A2540] mb-2 flex items-center gap-2">
                    <Heart className="w-4 h-4 text-[#F0368A]" />
                    <span>Positive Behavioral Guidance</span>
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    We practice gentle redirection, emotional labeling, and calming breath breaks. We never use time-outs or punitive consequences.
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
