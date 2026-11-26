import { useState } from 'react';
import { ShieldCheck, Apple, CheckCircle2, Lock, Wind, HeartPulse, Utensils, AlertCircle } from 'lucide-react';
import { SAFETY_STANDARDS, SAMPLE_MENU } from '../data/daycareData';

export function SafetyNutritionSection() {
  const [activeTab, setActiveTab] = useState<'safety' | 'nutrition'>('safety');
  const [activeMenuDay, setActiveMenuDay] = useState<number>(0);

  return (
    <section id="safety" className="py-16 md:py-24 bg-[#FAFAF9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
            UNCOMPROMISING STANDARDS IN EVERY DETAIL.
          </h2>
          <p className="text-slate-500 text-base sm:text-lg">
            From medical-grade HEPA air filtration and biometric security to scratch-cooked organic meals, we protect your child’s health every day.
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex justify-center mt-10">
          <div className="bg-slate-200/80 p-1.5 rounded-2xl flex items-center gap-1 max-w-md w-full border border-slate-200">
            <button
              onClick={() => setActiveTab('safety')}
              className={`flex-1 py-3 px-4 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer flex items-center justify-center gap-2 ${
                activeTab === 'safety'
                  ? 'bg-slate-900 text-white shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <ShieldCheck className="w-4 h-4 text-[#10B981]" />
              <span>Safety & Security</span>
            </button>

            <button
              onClick={() => setActiveTab('nutrition')}
              className={`flex-1 py-3 px-4 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer flex items-center justify-center gap-2 ${
                activeTab === 'nutrition'
                  ? 'bg-slate-900 text-white shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Apple className="w-4 h-4 text-[#F59E0B]" />
              <span>Nutrition & Menu</span>
            </button>
          </div>
        </div>

        {/* Content Tab 1: Safety & Security */}
        {activeTab === 'safety' && (
          <div className="mt-10 space-y-8 animate-in fade-in duration-300">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {SAFETY_STANDARDS.map((std, idx) => (
                <div
                  key={idx}
                  className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-md bg-blue-50 text-[#3B82F6] border border-blue-200">
                        {std.badge}
                      </span>
                      <CheckCircle2 className="w-5 h-5 text-[#10B981]" />
                    </div>
                    <h3 className="font-heading font-black text-lg text-slate-900">
                      {std.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                      {std.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Quick security summary banner */}
            <div className="bg-slate-900 text-white rounded-3xl p-8 shadow-md grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div className="space-y-2">
                <div className="w-12 h-12 rounded-2xl bg-slate-800 border border-slate-700 mx-auto flex items-center justify-center text-[#3B82F6]">
                  <Lock className="w-6 h-6" />
                </div>
                <h4 className="font-bold text-sm text-white">Strict Authorized Pick-Up</h4>
                <p className="text-xs text-slate-400">Government ID & biometric verification for every dismissal.</p>
              </div>

              <div className="space-y-2">
                <div className="w-12 h-12 rounded-2xl bg-slate-800 border border-slate-700 mx-auto flex items-center justify-center text-[#10B981]">
                  <Wind className="w-6 h-6" />
                </div>
                <h4 className="font-bold text-sm text-white">HEPA Air Purifiers</h4>
                <p className="text-xs text-slate-400">Continuous 15-min air turnover throughout all rooms.</p>
              </div>

              <div className="space-y-2">
                <div className="w-12 h-12 rounded-2xl bg-slate-800 border border-slate-700 mx-auto flex items-center justify-center text-[#F59E0B]">
                  <HeartPulse className="w-6 h-6" />
                </div>
                <h4 className="font-bold text-sm text-white">On-Site Health Lead</h4>
                <p className="text-xs text-slate-400">Daily health screenings & dedicated pediatric isolation suite.</p>
              </div>
            </div>
          </div>
        )}

        {/* Content Tab 2: Nutrition, Seasonal Menu & Allergies */}
        {activeTab === 'nutrition' && (
          <div className="mt-10 space-y-8 animate-in fade-in duration-300">
            {/* Highlights row */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 text-[#10B981] flex items-center justify-center mb-3">
                  <Apple className="w-5 h-5" />
                </div>
                <h3 className="font-heading font-black text-sm text-slate-900 mb-1">100% Organic Produce</h3>
                <p className="text-xs text-slate-500">Locally sourced fruits and vegetables free from artificial food dyes and preservatives.</p>
              </div>

              <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs">
                <div className="w-10 h-10 rounded-xl bg-amber-50 text-[#F59E0B] flex items-center justify-center mb-3">
                  <Utensils className="w-5 h-5" />
                </div>
                <h3 className="font-heading font-black text-sm text-slate-900 mb-1">Scratch-Cooked Daily</h3>
                <p className="text-xs text-slate-500">Hot lunches and two wholesome snacks prepared fresh in our licensed commercial kitchen.</p>
              </div>

              <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs">
                <div className="w-10 h-10 rounded-xl bg-rose-50 text-rose-500 flex items-center justify-center mb-3">
                  <AlertCircle className="w-5 h-5" />
                </div>
                <h3 className="font-heading font-black text-sm text-slate-900 mb-1">Nut-Free Facility</h3>
                <p className="text-xs text-slate-500">Dedicated allergen stations accommodating dairy-free, vegetarian, gluten-free, halal, & kosher.</p>
              </div>
            </div>

            {/* Interactive Weekly Sample Menu Viewer */}
            <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-6 sm:p-8">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-200">
                <div>
                  <h3 className="font-heading font-black text-xl text-slate-900">
                    Sample Weekly Menu
                  </h3>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Developed alongside pediatric dietitians to ensure optimal micronutrients and balanced energy.
                  </p>
                </div>

                {/* Day of week buttons */}
                <div className="flex flex-wrap gap-1.5">
                  {SAMPLE_MENU.map((item, idx) => (
                    <button
                      key={item.day}
                      onClick={() => setActiveMenuDay(idx)}
                      className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                        activeMenuDay === idx
                          ? 'bg-[#3B82F6] text-white shadow-xs'
                          : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                      }`}
                    >
                      {item.day}
                    </button>
                  ))}
                </div>
              </div>

              {/* Active Day Menu Card */}
              <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="p-5 rounded-2xl bg-amber-50/70 border border-amber-200">
                  <span className="text-[10px] font-black uppercase tracking-wider text-amber-900 block mb-2">
                    🌅 Breakfast (8:30 AM)
                  </span>
                  <p className="text-xs sm:text-sm font-bold text-slate-800 leading-snug">
                    {SAMPLE_MENU[activeMenuDay].breakfast}
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-emerald-50/70 border border-emerald-200">
                  <span className="text-[10px] font-black uppercase tracking-wider text-emerald-900 block mb-2">
                    🍲 Hot Lunch (11:45 AM)
                  </span>
                  <p className="text-xs sm:text-sm font-bold text-slate-800 leading-snug">
                    {SAMPLE_MENU[activeMenuDay].lunch}
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-blue-50/70 border border-blue-200">
                  <span className="text-[10px] font-black uppercase tracking-wider text-blue-900 block mb-2">
                    🍎 Afternoon Snack (2:45 PM)
                  </span>
                  <p className="text-xs sm:text-sm font-bold text-slate-800 leading-snug">
                    {SAMPLE_MENU[activeMenuDay].snack}
                  </p>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-2">
                <span>🥛 Organic whole milk, oat milk, or filtered water served with all meals.</span>
                <span className="text-[#3B82F6] font-bold">Special diet requests captured during intake Step 3</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
