import { useState } from 'react';
import { Sparkles, Check, ArrowRight, Clock, Users, BookOpen } from 'lucide-react';
import { PROGRAMS } from '../data/daycareData';
import { ProgramType } from '../types';

interface ProgramsSectionProps {
  onSelectProgramForEnrollment: (programId: ProgramType) => void;
}

export function ProgramsSection({ onSelectProgramForEnrollment }: ProgramsSectionProps) {
  const [activeTab, setActiveTab] = useState<ProgramType>('infant');

  const selectedProgram = PROGRAMS.find((p) => p.id === activeTab) || PROGRAMS[0];

  return (
    <section id="programs" className="py-16 md:py-24 bg-[#FAFAF9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
            TAILORED PROGRAMS FOR EVERY DEVELOPMENTAL LEAP.
          </h2>
          <p className="text-slate-500 text-base sm:text-lg">
            From gentle sensory floor-time for infants to inquiry-led STEM and early literacy for pre-kindergarteners.
          </p>
        </div>

        {/* Program Age Group Selector Tabs */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mt-10">
          {PROGRAMS.map((program) => {
            const isActive = activeTab === program.id;
            return (
              <button
                key={program.id}
                onClick={() => setActiveTab(program.id)}
                className={`px-5 py-3 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer flex items-center gap-2 border ${
                  isActive
                    ? 'bg-slate-900 text-white border-slate-900 shadow-md'
                    : 'bg-white text-slate-700 hover:bg-slate-50 border-slate-200 shadow-xs'
                }`}
              >
                <span>{program.name}</span>
                <span
                  className={`text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded-md ${
                    isActive ? 'bg-slate-700 text-white' : 'bg-slate-100 text-slate-500'
                  }`}
                >
                  {program.ageRange}
                </span>
              </button>
            );
          })}
        </div>

        {/* Active Program Spotlight Detail View */}
        <div className="mt-8 bg-white rounded-3xl border border-slate-200 shadow-sm p-6 sm:p-10 transition-all duration-300">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Col: Overview & Badges */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <div className="flex flex-wrap items-center gap-2 mb-3">
                  <span className="text-xs font-bold px-3 py-1 rounded-full bg-blue-50 text-[#3B82F6] border border-blue-200 uppercase tracking-wide">
                    {selectedProgram.ageRange}
                  </span>
                  <span className="text-xs font-bold px-3 py-1 rounded-full bg-slate-100 text-slate-700 border border-slate-200 font-mono">
                    Ratio: {selectedProgram.ratio}
                  </span>
                </div>
                <h3 className="font-heading font-black text-2xl sm:text-3xl text-slate-900 tracking-tight">
                  {selectedProgram.name}
                </h3>
                <p className="text-sm font-bold text-[#3B82F6] mt-1">
                  {selectedProgram.tagline}
                </p>
              </div>

              <p className="text-slate-600 text-sm leading-relaxed">
                {selectedProgram.overview}
              </p>

              {/* Classroom Key Stats */}
              <div className="bg-slate-50 rounded-2xl p-4 border border-slate-200 space-y-2.5">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-slate-500 flex items-center gap-1.5 font-bold uppercase tracking-wider text-[11px]">
                    <Users className="w-4 h-4 text-slate-600" />
                    Class Capacity:
                  </span>
                  <span className="font-bold text-slate-900">{selectedProgram.capacity}</span>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-slate-500 flex items-center gap-1.5 font-bold uppercase tracking-wider text-[11px]">
                    <Clock className="w-4 h-4 text-slate-600" />
                    Tuition & Schedule:
                  </span>
                  <span className="font-bold text-slate-900">{selectedProgram.tuitionInfo}</span>
                </div>
              </div>

              {/* Enroll button for this specific program */}
              <button
                onClick={() => onSelectProgramForEnrollment(selectedProgram.id)}
                className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl text-sm font-bold text-white bg-[#3B82F6] hover:bg-blue-600 shadow-md shadow-blue-200 transition-all cursor-pointer"
              >
                <span>Enroll in {selectedProgram.name}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Right Col: Developmental Milestones & Daily Highlights */}
            <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-6 bg-slate-50 p-6 rounded-2xl border border-slate-200">
              {/* Developmental Goals */}
              <div className="space-y-4">
                <h4 className="font-heading text-sm font-bold uppercase tracking-wider text-slate-900 flex items-center gap-2">
                  <div className="w-6 h-6 rounded-lg bg-emerald-100 text-[#10B981] flex items-center justify-center text-xs">
                    <Sparkles className="w-3.5 h-3.5" />
                  </div>
                  Developmental Goals
                </h4>
                <ul className="space-y-2.5">
                  {selectedProgram.developmentGoals.map((goal, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 font-medium">
                      <Check className="w-4 h-4 text-[#10B981] shrink-0 mt-0.5" />
                      <span>{goal}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Activities & Environment */}
              <div className="space-y-4">
                <h4 className="font-heading text-sm font-bold uppercase tracking-wider text-slate-900 flex items-center gap-2">
                  <div className="w-6 h-6 rounded-lg bg-amber-100 text-[#F59E0B] flex items-center justify-center text-xs">
                    <BookOpen className="w-3.5 h-3.5" />
                  </div>
                  Daily Activities
                </h4>
                <ul className="space-y-2.5">
                  {selectedProgram.sampleActivities.map((act, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#F59E0B] shrink-0 mt-2" />
                      <span>{act}</span>
                    </li>
                  ))}
                </ul>

                <div className="pt-3 border-t border-slate-200">
                  <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1">Classroom Feature</p>
                  <p className="text-xs text-slate-700 bg-white p-2.5 rounded-xl border border-slate-200 font-medium">
                    {selectedProgram.keyHighlights[0]}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* All 4 Programs Grid Summary Overview */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
          {PROGRAMS.map((p) => (
            <div
              key={p.id}
              onClick={() => setActiveTab(p.id)}
              className={`p-4 rounded-2xl border transition-all cursor-pointer text-left ${
                activeTab === p.id
                  ? 'bg-blue-50/50 border-[#3B82F6] ring-2 ring-blue-500/20'
                  : 'bg-white border-slate-200 hover:border-slate-300'
              }`}
            >
              <div className="flex items-center justify-between mb-1">
                <span className="text-xs font-bold text-slate-900">{p.name}</span>
                <span className="text-[10px] font-mono font-bold text-slate-500">{p.ratio}</span>
              </div>
              <p className="text-[11px] text-slate-500 line-clamp-2">{p.tagline}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
