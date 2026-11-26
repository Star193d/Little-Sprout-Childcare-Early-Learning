import { useState } from 'react';
import {
  SunMedium,
  Utensils,
  Users,
  Shapes,
  Trees,
  Soup,
  Moon,
  Apple,
  Palette,
  Smile,
  Clock,
  Filter
} from 'lucide-react';
import { DAILY_ROUTINE } from '../data/daycareData';
import { ProgramType } from '../types';

export function DailyRoutineSection() {
  const [selectedAge, setSelectedAge] = useState<ProgramType | 'all'>('all');
  const [categoryFilter, setCategoryFilter] = useState<string>('all');

  const getIconComponent = (iconName: string) => {
    const props = { className: "w-5 h-5" };
    switch (iconName) {
      case 'SunMedium': return <SunMedium {...props} className="w-5 h-5 text-[#F59E0B]" />;
      case 'Utensils': return <Utensils {...props} className="w-5 h-5 text-[#10B981]" />;
      case 'Users': return <Users {...props} className="w-5 h-5 text-[#3B82F6]" />;
      case 'Shapes': return <Shapes {...props} className="w-5 h-5 text-indigo-600" />;
      case 'Trees': return <Trees {...props} className="w-5 h-5 text-[#10B981]" />;
      case 'Soup': return <Soup {...props} className="w-5 h-5 text-[#F59E0B]" />;
      case 'Moon': return <Moon {...props} className="w-5 h-5 text-indigo-600" />;
      case 'Apple': return <Apple {...props} className="w-5 h-5 text-rose-600" />;
      case 'Palette': return <Palette {...props} className="w-5 h-5 text-fuchsia-600" />;
      case 'Smile': return <Smile {...props} className="w-5 h-5 text-teal-600" />;
      default: return <Clock {...props} className="w-5 h-5 text-slate-600" />;
    }
  };

  const getCategoryBadge = (category: string) => {
    switch (category) {
      case 'meal':
        return <span className="text-[10px] font-black uppercase tracking-wider px-2.5 py-0.5 rounded-md bg-amber-100 text-amber-900">Nutrition</span>;
      case 'outdoor':
        return <span className="text-[10px] font-black uppercase tracking-wider px-2.5 py-0.5 rounded-md bg-emerald-100 text-emerald-900">Nature & Motor</span>;
      case 'learning':
        return <span className="text-[10px] font-black uppercase tracking-wider px-2.5 py-0.5 rounded-md bg-blue-100 text-blue-900">STEM & Literacy</span>;
      case 'rest':
        return <span className="text-[10px] font-black uppercase tracking-wider px-2.5 py-0.5 rounded-md bg-indigo-100 text-indigo-900">Rest Time</span>;
      case 'creative':
        return <span className="text-[10px] font-black uppercase tracking-wider px-2.5 py-0.5 rounded-md bg-fuchsia-100 text-fuchsia-900">Arts & Music</span>;
      case 'welcome':
      case 'departure':
        return <span className="text-[10px] font-black uppercase tracking-wider px-2.5 py-0.5 rounded-md bg-slate-100 text-slate-800">Connection</span>;
      default:
        return null;
    }
  };

  const filteredRoutine = DAILY_ROUTINE.filter((item) => {
    const ageMatch = selectedAge === 'all' || item.suitableFor.includes(selectedAge);
    const catMatch = categoryFilter === 'all' || item.category === categoryFilter;
    return ageMatch && catMatch;
  });

  return (
    <section id="routine" className="py-16 md:py-24 bg-white border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
            PREDICTABLE RHYTHMS, JOYFUL FLEXIBILITY.
          </h2>
          <p className="text-slate-500 text-base sm:text-lg">
            Young children thrive when their day is anchored by consistent routines with room for curiosity, rest, and outdoor play.
          </p>
        </div>

        {/* Filter Bar */}
        <div className="mt-10 p-4 bg-slate-50 rounded-2xl border border-slate-200 flex flex-col md:flex-row md:items-center justify-between gap-4">
          {/* Age selection */}
          <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
            <span className="text-xs font-bold text-slate-500 mr-1 flex items-center gap-1 uppercase tracking-wider text-[11px]">
              <Filter className="w-3.5 h-3.5 text-[#3B82F6]" /> Age:
            </span>
            {[
              { id: 'all', label: 'All Ages' },
              { id: 'infant', label: 'Infants' },
              { id: 'toddler', label: 'Toddlers' },
              { id: 'preschool', label: 'Preschool' },
              { id: 'prek', label: 'Pre-K' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setSelectedAge(tab.id as any)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  selectedAge === tab.id
                    ? 'bg-slate-900 text-white shadow-xs'
                    : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Activity Category */}
          <div className="flex items-center gap-2 text-xs">
            <span className="text-slate-500 font-bold uppercase tracking-wider text-[11px]">Activity:</span>
            <select
              value={categoryFilter}
              onChange={(e) => setCategoryFilter(e.target.value)}
              className="bg-white border border-slate-300 text-slate-800 font-bold rounded-xl px-3 py-1.5 focus:outline-none focus:ring-2 focus:ring-[#3B82F6] cursor-pointer"
            >
              <option value="all">All Activities</option>
              <option value="meal">Meals & Snacks</option>
              <option value="learning">STEM & Learning</option>
              <option value="outdoor">Outdoor Nature</option>
              <option value="rest">Nap & Rest</option>
              <option value="creative">Arts & Music</option>
            </select>
          </div>
        </div>

        {/* Timeline representation */}
        <div className="mt-10 relative">
          {/* Vertical central bar on desktop */}
          <div className="hidden md:block absolute left-1/2 top-4 bottom-4 w-0.5 bg-slate-200 -translate-x-1/2" />

          <div className="space-y-6 md:space-y-8">
            {filteredRoutine.map((item, index) => {
              const isEven = index % 2 === 0;
              return (
                <div
                  key={item.id}
                  className={`relative flex flex-col md:flex-row items-center ${
                    isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Timeline Center Node */}
                  <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-white border-2 border-[#3B82F6] shadow-md items-center justify-center z-10">
                    {getIconComponent(item.icon)}
                  </div>

                  {/* Content Card (Half width on desktop) */}
                  <div className="w-full md:w-[46%]">
                    <div className="bg-[#FAFAF9] p-5 sm:p-6 rounded-2xl border border-slate-200 shadow-xs hover:shadow-md transition-all">
                      <div className="flex items-center justify-between gap-2 mb-2">
                        <span className="text-xs font-mono font-black text-[#3B82F6] bg-blue-50 px-2.5 py-1 rounded-lg border border-blue-200">
                          {item.time}
                        </span>
                        {getCategoryBadge(item.category)}
                      </div>

                      <h3 className="font-heading font-black text-lg text-slate-900 flex items-center gap-2">
                        <span className="md:hidden inline-flex">{getIconComponent(item.icon)}</span>
                        {item.title}
                      </h3>

                      <p className="text-slate-600 text-xs sm:text-sm mt-2 leading-relaxed font-normal">
                        {item.description}
                      </p>

                      <div className="mt-3 pt-3 border-t border-slate-200 flex items-center gap-2">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Suitable For:</span>
                        <div className="flex flex-wrap gap-1">
                          {item.suitableFor.map((g) => (
                            <span
                              key={g}
                              className="text-[10px] uppercase font-bold px-2 py-0.5 rounded-md bg-white text-slate-700 border border-slate-200"
                            >
                              {g}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Empty spacing box for opposite side */}
                  <div className="hidden md:block md:w-[46%]" />
                </div>
              );
            })}
          </div>
        </div>

        {/* Infant Flexible Routine Note */}
        <div className="mt-12 p-6 rounded-2xl bg-amber-50 border border-amber-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <h4 className="font-heading text-base font-black text-amber-950">
              🍼 Personalized Infant Sleep & Feeding Schedules
            </h4>
            <p className="text-xs sm:text-sm text-amber-900/80">
              For babies under 12 months, we honor each infant’s natural home feeding times, nursing breaks, and nap cues rather than enforcing a rigid schedule.
            </p>
          </div>
          <span className="shrink-0 text-xs font-black uppercase tracking-wider px-3.5 py-1.5 rounded-xl bg-[#F59E0B] text-white shadow-xs">
            On-Demand Care
          </span>
        </div>
      </div>
    </section>
  );
}
