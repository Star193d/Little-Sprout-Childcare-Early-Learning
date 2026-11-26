import { Baby, Calendar, Heart, Sparkles, Smile, ToyBrick } from 'lucide-react';
import { ChildProfileInfo } from '../../types';
import { PROGRAMS } from '../../data/daycareData';

interface Step2Props {
  data: ChildProfileInfo;
  onChange: (data: Partial<ChildProfileInfo>) => void;
  errors: Record<string, string>;
}

export function Step2ChildProfile({ data, onChange, errors }: Step2Props) {
  return (
    <div className="space-y-6 animate-in fade-in duration-200">
      <div>
        <h3 className="font-heading text-xl font-bold text-stone-900">
          Child Profile & Care Preferences
        </h3>
        <p className="text-xs sm:text-sm text-stone-600 mt-0.5">
          Tell us about your little one so our educators can prepare a welcoming, personalized environment.
        </p>
      </div>

      <div className="space-y-4">
        {/* Child Full Name & Preferred Name */}
        <div className="grid grid-cols-1 sm:grid-cols-12 gap-4">
          <div className="sm:col-span-7">
            <label className="block text-xs font-bold text-stone-700 mb-1">
              Child Legal Full Name <span className="text-rose-500">*</span>
            </label>
            <div className="relative">
              <Baby className="w-4 h-4 text-stone-400 absolute left-3 top-3" />
              <input
                type="text"
                value={data.childFullName}
                onChange={(e) => onChange({ childFullName: e.target.value })}
                placeholder="e.g. Oliver James Thompson"
                className={`w-full pl-9 pr-3.5 py-2.5 rounded-xl border text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 ${
                  errors.childFullName ? 'border-rose-400 bg-rose-50/40 ring-1 ring-rose-300' : 'border-stone-300 bg-white'
                }`}
              />
            </div>
            {errors.childFullName && <p className="text-[11px] text-rose-600 mt-1 font-medium">{errors.childFullName}</p>}
          </div>

          <div className="sm:col-span-5">
            <label className="block text-xs font-bold text-stone-700 mb-1">
              Preferred Name / Nickname
            </label>
            <input
              type="text"
              value={data.preferredName}
              onChange={(e) => onChange({ preferredName: e.target.value })}
              placeholder="e.g. 'Ollie'"
              className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>
        </div>

        {/* Date of Birth & Gender & Potty Training */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div>
            <label className="block text-xs font-bold text-stone-700 mb-1">
              Date of Birth <span className="text-rose-500">*</span>
            </label>
            <div className="relative">
              <input
                type="date"
                value={data.dob}
                onChange={(e) => onChange({ dob: e.target.value })}
                className={`w-full px-3 py-2.5 rounded-xl border text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 ${
                  errors.dob ? 'border-rose-400 bg-rose-50/40 ring-1 ring-rose-300' : 'border-stone-300 bg-white'
                }`}
              />
            </div>
            {errors.dob && <p className="text-[11px] text-rose-600 mt-1 font-medium">{errors.dob}</p>}
          </div>

          <div>
            <label className="block text-xs font-bold text-stone-700 mb-1">
              Gender / Pronouns
            </label>
            <select
              value={data.gender}
              onChange={(e) => onChange({ gender: e.target.value as any })}
              className="w-full px-3 py-2.5 rounded-xl border border-stone-300 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
            >
              <option value="">Select...</option>
              <option value="Female">Female</option>
              <option value="Male">Male</option>
              <option value="Non-binary">Non-binary</option>
              <option value="Prefer not to say">Prefer not to say</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-bold text-stone-700 mb-1">
              Potty Training Status
            </label>
            <select
              value={data.pottyTrainingStatus}
              onChange={(e) => onChange({ pottyTrainingStatus: e.target.value as any })}
              className="w-full px-3 py-2.5 rounded-xl border border-stone-300 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
            >
              <option value="">Select Status...</option>
              <option value="Fully Trained">Fully Trained</option>
              <option value="In Progress">In Progress (Needs reminders)</option>
              <option value="Not Started">Not Started (Diapers/Pull-ups)</option>
              <option value="N/A (Infant)">N/A (Infant)</option>
            </select>
          </div>
        </div>

        {/* Target Program & Desired Schedule */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
          <div>
            <label className="block text-xs font-bold text-stone-700 mb-1">
              Target Program Tier <span className="text-rose-500">*</span>
            </label>
            <select
              value={data.programInterest}
              onChange={(e) => onChange({ programInterest: e.target.value as any })}
              className={`w-full px-3 py-2.5 rounded-xl border text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 ${
                errors.programInterest ? 'border-rose-400 bg-rose-50/40 ring-1 ring-rose-300' : 'border-stone-300 bg-white'
              }`}
            >
              <option value="">Select Program...</option>
              {PROGRAMS.map((p) => (
                <option key={p.id} value={p.id}>
                  {p.name} ({p.ageRange})
                </option>
              ))}
            </select>
            {errors.programInterest && (
              <p className="text-[11px] text-rose-600 mt-1 font-medium">{errors.programInterest}</p>
            )}
          </div>

          <div>
            <label className="block text-xs font-bold text-stone-700 mb-1">
              Days Per Week Schedule <span className="text-rose-500">*</span>
            </label>
            <select
              value={data.daysPerWeek}
              onChange={(e) => onChange({ daysPerWeek: e.target.value as any })}
              className={`w-full px-3 py-2.5 rounded-xl border text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 ${
                errors.daysPerWeek ? 'border-rose-400 bg-rose-50/40 ring-1 ring-rose-300' : 'border-stone-300 bg-white'
              }`}
            >
              <option value="">Select Schedule...</option>
              <option value="5-days">Full-Time (5 Days Mon-Fri)</option>
              <option value="3-days">Part-Time (3 Days: Mon/Wed/Fri)</option>
              <option value="2-days">Part-Time (2 Days: Tue/Thu)</option>
              <option value="drop-in">Flex / Drop-In Pass</option>
            </select>
            {errors.daysPerWeek && <p className="text-[11px] text-rose-600 mt-1 font-medium">{errors.daysPerWeek}</p>}
          </div>

          <div>
            <label className="block text-xs font-bold text-stone-700 mb-1">
              Desired Start Date <span className="text-rose-500">*</span>
            </label>
            <input
              type="date"
              value={data.desiredStartDate}
              onChange={(e) => onChange({ desiredStartDate: e.target.value })}
              className={`w-full px-3 py-2.5 rounded-xl border text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 ${
                errors.desiredStartDate ? 'border-rose-400 bg-rose-50/40 ring-1 ring-rose-300' : 'border-stone-300 bg-white'
              }`}
            />
            {errors.desiredStartDate && (
              <p className="text-[11px] text-rose-600 mt-1 font-medium">{errors.desiredStartDate}</p>
            )}
          </div>
        </div>

        {/* Child Preferences, Comfort Items & Activities */}
        <div className="space-y-4 pt-3 border-t border-stone-200">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-stone-700 mb-1 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                Favorite Toys & Activities
              </label>
              <input
                type="text"
                value={data.favoriteActivities}
                onChange={(e) => onChange({ favoriteActivities: e.target.value })}
                placeholder="e.g. Building blocks, dinosaurs, kinetic sand, water play"
                className="w-full px-3 py-2.5 rounded-xl border border-stone-300 bg-white text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-stone-700 mb-1 flex items-center gap-1.5">
                <Heart className="w-3.5 h-3.5 text-rose-500" />
                Comfort Items for Nap & Separation
              </label>
              <input
                type="text"
                value={data.comfortItems}
                onChange={(e) => onChange({ comfortItems: e.target.value })}
                placeholder="e.g. Specific yellow bunny lovey, pacifier, back pats"
                className="w-full px-3 py-2.5 rounded-xl border border-stone-300 bg-white text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-stone-700 mb-1">
              Likes, Dislikes & Soothing Habits
            </label>
            <textarea
              rows={2}
              value={data.likesAndDislikes}
              onChange={(e) => onChange({ likesAndDislikes: e.target.value })}
              placeholder="Tell us what makes them smile, any fears (e.g. loud hand-dryers, thunderstorms), and how they calm down best..."
              className="w-full p-3 rounded-xl border border-stone-300 bg-white text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 resize-none"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
