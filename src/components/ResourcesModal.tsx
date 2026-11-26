import { useState } from 'react';
import { X, ChevronDown, CheckCircle } from 'lucide-react';
import { FAQS, DAYCARE_CONFIG } from '../data/daycareData';

interface ResourcesModalProps {
  isOpen: boolean;
  defaultTab?: 'faq' | 'handbook' | 'checklist';
  onClose: () => void;
}

export function ResourcesModal({ isOpen, defaultTab = 'faq', onClose }: ResourcesModalProps) {
  const [activeTab, setActiveTab] = useState<'faq' | 'handbook' | 'checklist'>(defaultTab);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-[#2A2540]/65 backdrop-blur-md flex items-center justify-center p-4 sm:p-6">
      <div
        className="glass-lt step-swap relative max-w-2xl w-full p-6 sm:p-8 overflow-hidden space-y-6 text-[#2A2540]"
        role="dialog"
        aria-modal="true"
        aria-labelledby="resources-modal-title"
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-slate-500 hover:text-[#2A2540] hover:bg-purple-100 border border-transparent hover:border-purple-300 transition-colors cursor-pointer"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="space-y-1.5 pr-8">
          <h2 id="resources-modal-title" className="font-heading text-2xl font-bold text-[#2A2540] tracking-tight">
            Parent Resources &amp; FAQ
          </h2>
          <p className="text-xs sm:text-sm text-slate-600">
            Helpful guides, enrollment questions, and developmental checklists for {DAYCARE_CONFIG.name} families.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2 border-b border-purple-200/60 pb-3">
          <button
            onClick={() => setActiveTab('faq')}
            className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer border ${
              activeTab === 'faq'
                ? 'bg-[#7A35E0] text-white border-[#7A35E0]'
                : 'text-[#2A2540] bg-white/75 border-purple-200 hover:bg-purple-50'
            }`}
          >
            Frequently Asked Questions
          </button>
          <button
            onClick={() => setActiveTab('handbook')}
            className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer border ${
              activeTab === 'handbook'
                ? 'bg-[#7A35E0] text-white border-[#7A35E0]'
                : 'text-[#2A2540] bg-white/75 border-purple-200 hover:bg-purple-50'
            }`}
          >
            Parent Handbook Highlights
          </button>
          <button
            onClick={() => setActiveTab('checklist')}
            className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer border ${
              activeTab === 'checklist'
                ? 'bg-[#7A35E0] text-white border-[#7A35E0]'
                : 'text-[#2A2540] bg-white/75 border-purple-200 hover:bg-purple-50'
            }`}
          >
            First Day Checklist
          </button>
        </div>

        <div className="max-h-[50vh] overflow-y-auto pr-1 space-y-3">
          {activeTab === 'faq' && (
            <div className="space-y-2.5">
              {FAQS.map((faq, idx) => {
                const isOpenFaq = openFaqIndex === idx;
                return (
                  <div key={idx} className="rounded-2xl border border-purple-200/70 overflow-hidden bg-white/80">
                    <button
                      onClick={() => setOpenFaqIndex(isOpenFaq ? null : idx)}
                      className="w-full p-4 text-left font-bold text-[#2A2540] text-xs sm:text-sm flex items-center justify-between gap-3 hover:bg-purple-50/60 transition-colors cursor-pointer"
                    >
                      <span>{faq.q}</span>
                      <ChevronDown
                        className={`w-4 h-4 text-[#7A35E0] shrink-0 transition-transform duration-300 ${
                          isOpenFaq ? 'rotate-180 text-[#F0368A]' : ''
                        }`}
                      />
                    </button>
                    {isOpenFaq && (
                      <div className="px-4 pb-4 pt-2 text-xs text-slate-600 leading-relaxed border-t border-purple-200/50 bg-white step-swap">
                        {faq.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          )}

          {activeTab === 'handbook' && (
            <div className="space-y-3 text-xs text-[#2A2540] step-swap">
              <div className="bg-white/80 p-5 rounded-2xl border border-purple-200/70 space-y-2.5">
                <h4 className="font-heading font-bold text-[#2A2540] text-base">Center Operating Policies</h4>
                <ul className="space-y-2 text-slate-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-[#6DB93E] shrink-0 mt-0.5" />
                    <span>
                      <strong>Operating Hours:</strong> {DAYCARE_CONFIG.operatingHours}. Prompt pick-up by 6:00 PM is appreciated.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-[#6DB93E] shrink-0 mt-0.5" />
                    <span>
                      <strong>Illness Policy:</strong> Children must be fever-free without medication for 24 hours prior to returning.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-[#6DB93E] shrink-0 mt-0.5" />
                    <span>
                      <strong>Nut-Free Zone:</strong> Strict tree nut and peanut restrictions throughout the building.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          )}

          {activeTab === 'checklist' && (
            <div className="space-y-3 text-xs text-[#2A2540] step-swap">
              <div className="bg-amber-50/90 p-5 rounded-2xl border border-amber-200 space-y-2.5">
                <h4 className="font-heading font-bold text-[#2A2540] text-base">
                  What to Bring on Your Child's First Day
                </h4>
                <ul className="space-y-2 text-slate-700">
                  <li className="flex items-start gap-2">
                    <span className="font-bold bg-[#FFC81E] text-[#2A2540] rounded-full w-4 h-4 flex items-center justify-center text-[10px] shrink-0 mt-0.5">
                      1
                    </span>
                    <span>Two complete changes of season-appropriate labeled clothes (including socks and shoes).</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-bold bg-[#FFC81E] text-[#2A2540] rounded-full w-4 h-4 flex items-center justify-center text-[10px] shrink-0 mt-0.5">
                      2
                    </span>
                    <span>Comfort item for nap time (small lovey, blanket, or pacifier).</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-bold bg-[#FFC81E] text-[#2A2540] rounded-full w-4 h-4 flex items-center justify-center text-[10px] shrink-0 mt-0.5">
                      3
                    </span>
                    <span>Non-aerosol sunscreen and sunhat for outdoor exploration.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-bold bg-[#FFC81E] text-[#2A2540] rounded-full w-4 h-4 flex items-center justify-center text-[10px] shrink-0 mt-0.5">
                      4
                    </span>
                    <span>For infants: labeled bottles with measured formula or breastmilk.</span>
                  </li>
                </ul>
              </div>
            </div>
          )}
        </div>

        <div className="pt-3 border-t border-purple-200/60 flex justify-end">
          <button
            onClick={onClose}
            className="btn-sprout-purple px-5 py-2 text-xs cursor-pointer"
          >
            Close Parent Hub
          </button>
        </div>
      </div>
    </div>
  );
}
