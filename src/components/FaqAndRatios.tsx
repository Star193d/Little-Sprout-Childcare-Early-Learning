import { useState } from 'react';
import { ChevronDown, MessageSquare, Star, HelpCircle } from 'lucide-react';
import { FAQS, TESTIMONIALS, DAYCARE_CONFIG } from '../data/daycareData';

export function FaqAndRatios() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-16 md:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Parent Testimonials Carousel / Grid */}
        <div className="mb-20">
          <div className="text-center max-w-2xl mx-auto space-y-3 mb-12">
            <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
              TRUSTED BY HUNDREDS OF LOCAL FAMILIES.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t, idx) => (
              <div
                key={idx}
                className="bg-[#FAFAF9] p-6 rounded-3xl border border-slate-200 shadow-xs flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-1 text-[#F59E0B] mb-4">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#F59E0B]" />
                    ))}
                  </div>
                  <p className="text-slate-700 text-sm italic leading-relaxed mb-6 font-medium">
                    "{t.quote}"
                  </p>
                </div>
                <div className="pt-4 border-t border-slate-200">
                  <p className="font-heading font-black text-sm text-slate-900">{t.author}</p>
                  <p className="text-xs text-slate-500 font-bold">{t.child}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* FAQs */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5 space-y-4">
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              EVERYTHING YOU NEED TO KNOW BEFORE ENROLLING.
            </h2>
            <p className="text-slate-500 text-sm sm:text-base leading-relaxed">
              Choosing the right childcare is one of the most important decisions you make. Here are clear answers regarding admissions, safety, and our daily operations.
            </p>

            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 space-y-3">
              <div className="flex items-center gap-2 text-slate-900 font-black text-sm">
                <MessageSquare className="w-4 h-4 text-[#3B82F6]" />
                <span>Have a Specific Question?</span>
              </div>
              <p className="text-xs text-slate-500 font-normal">
                Our enrollment director is available directly via phone or email during standard center hours.
              </p>
              <div className="pt-2 text-xs font-mono font-bold space-y-1 text-slate-700">
                <p>📞 {DAYCARE_CONFIG.phone}</p>
                <p>✉️ {DAYCARE_CONFIG.email}</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-3">
            {FAQS.map((faq, idx) => {
              const isOpen = openIdx === idx;
              return (
                <div
                  key={idx}
                  className="rounded-2xl border border-slate-200 overflow-hidden bg-white shadow-xs"
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full p-5 text-left font-bold text-slate-900 text-sm sm:text-base flex items-center justify-between gap-4 hover:bg-slate-50 transition-colors cursor-pointer"
                    aria-expanded={isOpen}
                  >
                    <span className="font-bold">{faq.q}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-slate-500 shrink-0 transition-transform duration-200 ${
                        isOpen ? 'rotate-180 text-[#3B82F6]' : ''
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 bg-slate-50/50 animate-in fade-in duration-150">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
