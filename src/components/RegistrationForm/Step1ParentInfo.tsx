import { User, Phone, Mail, MapPin, HeartHandshake, ShieldAlert } from 'lucide-react';
import { ParentGuardianInfo } from '../../types';

interface Step1Props {
  data: ParentGuardianInfo;
  onChange: (data: Partial<ParentGuardianInfo>) => void;
  errors: Record<string, string>;
}

export function Step1ParentInfo({ data, onChange, errors }: Step1Props) {
  return (
    <div className="space-y-6 animate-in fade-in duration-200">
      <div>
        <h3 className="font-heading text-xl font-bold text-stone-900">
          Parent / Guardian & Emergency Contact
        </h3>
        <p className="text-xs sm:text-sm text-stone-600 mt-0.5">
          Please provide primary contact information for daily notifications, billing, and emergency authorization.
        </p>
      </div>

      {/* Primary Parent/Guardian Fieldset */}
      <fieldset className="space-y-4 pt-2">
        <legend className="text-xs font-bold uppercase tracking-wider text-emerald-800 flex items-center gap-1.5 mb-3">
          <User className="w-3.5 h-3.5" />
          Primary Parent or Legal Guardian
        </legend>

        <div className="grid grid-cols-1 sm:grid-cols-12 gap-4">
          {/* Full Name */}
          <div className="sm:col-span-7">
            <label className="block text-xs font-bold text-stone-700 mb-1">
              Full Legal Name <span className="text-rose-500">*</span>
            </label>
            <div className="relative">
              <input
                type="text"
                value={data.fullName}
                onChange={(e) => onChange({ fullName: e.target.value })}
                placeholder="e.g. Jessica Thompson"
                className={`w-full px-3.5 py-2.5 rounded-xl border text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 ${
                  errors.fullName ? 'border-rose-400 bg-rose-50/40 ring-1 ring-rose-300' : 'border-stone-300 bg-white'
                }`}
              />
            </div>
            {errors.fullName && <p className="text-[11px] text-rose-600 mt-1 font-medium">{errors.fullName}</p>}
          </div>

          {/* Relationship */}
          <div className="sm:col-span-5">
            <label className="block text-xs font-bold text-stone-700 mb-1">
              Relationship to Child <span className="text-rose-500">*</span>
            </label>
            <select
              value={data.relationship}
              onChange={(e) => onChange({ relationship: e.target.value as any })}
              className={`w-full px-3.5 py-2.5 rounded-xl border text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 ${
                errors.relationship ? 'border-rose-400 bg-rose-50/40 ring-1 ring-rose-300' : 'border-stone-300 bg-white'
              }`}
            >
              <option value="">Select Relationship...</option>
              <option value="Mother">Mother</option>
              <option value="Father">Father</option>
              <option value="Legal Guardian">Legal Guardian</option>
              <option value="Grandparent">Grandparent</option>
              <option value="Foster Parent">Foster Parent</option>
              <option value="Other">Other</option>
            </select>
            {errors.relationship && <p className="text-[11px] text-rose-600 mt-1 font-medium">{errors.relationship}</p>}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Phone Number */}
          <div>
            <label className="block text-xs font-bold text-stone-700 mb-1">
              Cell Phone Number <span className="text-rose-500">*</span>
            </label>
            <div className="relative">
              <Phone className="w-4 h-4 text-stone-400 absolute left-3 top-3" />
              <input
                type="tel"
                value={data.phone}
                onChange={(e) => onChange({ phone: e.target.value })}
                placeholder="(555) 234-5678"
                className={`w-full pl-9 pr-3.5 py-2.5 rounded-xl border text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 ${
                  errors.phone ? 'border-rose-400 bg-rose-50/40 ring-1 ring-rose-300' : 'border-stone-300 bg-white'
                }`}
              />
            </div>
            {errors.phone && <p className="text-[11px] text-rose-600 mt-1 font-medium">{errors.phone}</p>}
          </div>

          {/* Email Address */}
          <div>
            <label className="block text-xs font-bold text-stone-700 mb-1">
              Email Address <span className="text-rose-500">*</span>
            </label>
            <div className="relative">
              <Mail className="w-4 h-4 text-stone-400 absolute left-3 top-3" />
              <input
                type="email"
                value={data.email}
                onChange={(e) => onChange({ email: e.target.value })}
                placeholder="parent@example.com"
                className={`w-full pl-9 pr-3.5 py-2.5 rounded-xl border text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 ${
                  errors.email ? 'border-rose-400 bg-rose-50/40 ring-1 ring-rose-300' : 'border-stone-300 bg-white'
                }`}
              />
            </div>
            {errors.email && <p className="text-[11px] text-rose-600 mt-1 font-medium">{errors.email}</p>}
          </div>
        </div>

        {/* Home Address */}
        <div>
          <label className="block text-xs font-bold text-stone-700 mb-1">
            Home Residential Address
          </label>
          <div className="relative">
            <MapPin className="w-4 h-4 text-stone-400 absolute left-3 top-3" />
            <input
              type="text"
              value={data.address}
              onChange={(e) => onChange({ address: e.target.value })}
              placeholder="123 Oak Street, City, State ZIP"
              className="w-full pl-9 pr-3.5 py-2.5 rounded-xl border border-stone-300 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>
        </div>
      </fieldset>

      {/* Emergency Contact Fieldset */}
      <div className="pt-5 border-t border-stone-200">
        <fieldset className="space-y-4">
          <legend className="text-xs font-bold uppercase tracking-wider text-rose-800 flex items-center gap-1.5 mb-2">
            <ShieldAlert className="w-3.5 h-3.5 text-rose-600" />
            Primary Emergency Contact (Other Than Primary Guardian)
          </legend>
          <p className="text-xs text-stone-500 -mt-2 mb-3">
            Authorized to be reached and pick up child if primary guardian is unreachable.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-12 gap-4">
            <div className="sm:col-span-5">
              <label className="block text-xs font-bold text-stone-700 mb-1">
                Emergency Contact Name <span className="text-rose-500">*</span>
              </label>
              <input
                type="text"
                value={data.emergencyContactName}
                onChange={(e) => onChange({ emergencyContactName: e.target.value })}
                placeholder="e.g. Robert Thompson"
                className={`w-full px-3.5 py-2.5 rounded-xl border text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 ${
                  errors.emergencyContactName ? 'border-rose-400 bg-rose-50/40 ring-1 ring-rose-300' : 'border-stone-300 bg-white'
                }`}
              />
              {errors.emergencyContactName && (
                <p className="text-[11px] text-rose-600 mt-1 font-medium">{errors.emergencyContactName}</p>
              )}
            </div>

            <div className="sm:col-span-4">
              <label className="block text-xs font-bold text-stone-700 mb-1">
                Emergency Phone <span className="text-rose-500">*</span>
              </label>
              <input
                type="tel"
                value={data.emergencyContactPhone}
                onChange={(e) => onChange({ emergencyContactPhone: e.target.value })}
                placeholder="(555) 987-6543"
                className={`w-full px-3.5 py-2.5 rounded-xl border text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 ${
                  errors.emergencyContactPhone ? 'border-rose-400 bg-rose-50/40 ring-1 ring-rose-300' : 'border-stone-300 bg-white'
                }`}
              />
              {errors.emergencyContactPhone && (
                <p className="text-[11px] text-rose-600 mt-1 font-medium">{errors.emergencyContactPhone}</p>
              )}
            </div>

            <div className="sm:col-span-3">
              <label className="block text-xs font-bold text-stone-700 mb-1">
                Relationship
              </label>
              <input
                type="text"
                value={data.emergencyContactRelation}
                onChange={(e) => onChange({ emergencyContactRelation: e.target.value })}
                placeholder="e.g. Uncle / Neighbor"
                className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>
          </div>
        </fieldset>
      </div>

      {/* Optional Secondary Parent / Co-Guardian Accordion/Field */}
      <div className="pt-4 border-t border-stone-200">
        <details className="group cursor-pointer">
          <summary className="text-xs font-bold text-stone-700 hover:text-stone-900 flex items-center justify-between py-1">
            <span className="flex items-center gap-1.5">
              <HeartHandshake className="w-3.5 h-3.5 text-stone-500" />
              + Add Secondary Parent / Co-Guardian (Optional)
            </span>
            <span className="text-[10px] text-stone-400 group-open:rotate-180 transition-transform">▼</span>
          </summary>

          <div className="pt-4 grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div>
              <label className="block text-xs text-stone-600 mb-1">Secondary Name</label>
              <input
                type="text"
                value={data.secondaryParentName || ''}
                onChange={(e) => onChange({ secondaryParentName: e.target.value })}
                placeholder="e.g. Michael Thompson"
                className="w-full px-3 py-2 rounded-xl border border-stone-300 text-xs sm:text-sm"
              />
            </div>
            <div>
              <label className="block text-xs text-stone-600 mb-1">Secondary Phone</label>
              <input
                type="tel"
                value={data.secondaryParentPhone || ''}
                onChange={(e) => onChange({ secondaryParentPhone: e.target.value })}
                placeholder="(555) 000-0000"
                className="w-full px-3 py-2 rounded-xl border border-stone-300 text-xs sm:text-sm"
              />
            </div>
            <div>
              <label className="block text-xs text-stone-600 mb-1">Relationship</label>
              <input
                type="text"
                value={data.secondaryParentRelation || ''}
                onChange={(e) => onChange({ secondaryParentRelation: e.target.value })}
                placeholder="e.g. Father / Step-Parent"
                className="w-full px-3 py-2 rounded-xl border border-stone-300 text-xs sm:text-sm"
              />
            </div>
          </div>
        </details>
      </div>
    </div>
  );
}
