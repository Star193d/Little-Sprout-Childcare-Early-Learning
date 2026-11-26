import { ShieldCheck, HeartHandshake, Sparkles, Apple, Check, GraduationCap } from 'lucide-react';
import { CORE_VALUES, DAYCARE_CONFIG } from '../data/daycareData';

export function AboutSection() {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'ShieldCheck':
        return <ShieldCheck className="w-6 h-6 text-[#10B981]" />;
      case 'HeartHandshake':
        return <HeartHandshake className="w-6 h-6 text-[#3B82F6]" />;
      case 'Sparkles':
        return <Sparkles className="w-6 h-6 text-[#F59E0B]" />;
      case 'Apple':
        return <Apple className="w-6 h-6 text-[#10B981]" />;
      default:
        return <Sparkles className="w-6 h-6 text-[#3B82F6]" />;
    }
  };

  return (
    <section id="about" className="py-16 md:py-24 bg-white border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
            NURTURING MINDS THROUGH SAFE, HEART-LED CARE.
          </h2>
          <p className="text-slate-500 text-base sm:text-lg leading-relaxed">
            At {DAYCARE_CONFIG.name}, we believe early childhood forms the foundation for lifelong emotional security, cognitive curiosity, and joy.
          </p>
        </div>

        {/* 4 Core Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-14">
          {CORE_VALUES.map((val) => (
            <div
              key={val.id}
              className="rounded-2xl p-6 border border-slate-200 bg-white shadow-xs hover:shadow-md transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center mb-5">
                  {getIcon(val.icon)}
                </div>
                <h3 className="font-heading font-black text-xl text-slate-900 mb-2">
                  {val.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 leading-relaxed mb-4">
                  {val.description}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 space-y-2">
                {val.highlights.map((h, i) => (
                  <div key={i} className="flex items-start gap-2 text-xs text-slate-700 font-bold">
                    <Check className="w-3.5 h-3.5 text-[#10B981] shrink-0 mt-0.5" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Educator Qualifications & Ratio Highlights Bar */}
        <div className="mt-14 bg-slate-900 text-white rounded-3xl p-8 sm:p-10 shadow-lg relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-6 space-y-3">
              <h3 className="text-2xl sm:text-3xl font-black tracking-tight text-white flex items-center gap-2">
                <GraduationCap className="w-6 h-6 text-[#F59E0B] shrink-0" />
                <span>Every Caregiver is Background-Checked, Certified &amp; Degree-Educated</span>
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Our lead educators hold Bachelor’s or Master’s degrees in Early Childhood Education (ECE) and undergo FBI fingerprinting, pediatric CPR/AED recertification, and 40+ hours of annual child-development training.
              </p>
            </div>

            <div className="lg:col-span-6 grid grid-cols-2 sm:grid-cols-3 gap-4">
              <div className="bg-slate-800/80 rounded-2xl p-4 border border-slate-700 text-center">
                <div className="text-3xl font-black text-[#F59E0B] font-mono">1 : 3</div>
                <div className="text-xs text-slate-200 mt-1 font-bold">Infant Ratio</div>
                <div className="text-[10px] text-slate-400 font-medium">State max is 1:4</div>
              </div>

              <div className="bg-slate-800/80 rounded-2xl p-4 border border-slate-700 text-center">
                <div className="text-3xl font-black text-[#10B981] font-mono">1 : 4</div>
                <div className="text-xs text-slate-200 mt-1 font-bold">Toddler Ratio</div>
                <div className="text-[10px] text-slate-400 font-medium">Dedicated teams</div>
              </div>

              <div className="bg-slate-800/80 rounded-2xl p-4 border border-slate-700 text-center col-span-2 sm:col-span-1">
                <div className="text-3xl font-black text-[#3B82F6] font-mono">100%</div>
                <div className="text-xs text-slate-200 mt-1 font-bold">CPR & First Aid</div>
                <div className="text-[10px] text-slate-400 font-medium">Certified staff</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
