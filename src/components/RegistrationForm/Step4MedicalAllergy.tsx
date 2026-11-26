import { ShieldAlert, AlertTriangle, Stethoscope, HeartHandshake, Check } from 'lucide-react';
import { MedicalAllergyInfo } from '../../types';

interface Step4Props {
  data: MedicalAllergyInfo;
  onChange: (data: Partial<MedicalAllergyInfo>) => void;
  errors: Record<string, string>;
}

const ALLERGY_TYPE_OPTIONS = ['Food / Ingredients', 'Medication / Antibiotics', 'Environmental / Pollen / Dust', 'Insect Stings / Bites', 'Latex / Materials'];

export function Step4MedicalAllergy({ data, onChange, errors }: Step4Props) {
  const toggleAllergyType = (type: string) => {
    let updated: string[];
    if (data.allergyTypes.includes(type)) {
      updated = data.allergyTypes.filter((t) => t !== type);
    } else {
      updated = [...data.allergyTypes, type];
    }
    onChange({ allergyTypes: updated });
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-200">
      <div>
        <h3 className="font-heading text-xl font-bold text-stone-900">
          Medical & Allergy Intake Profile
        </h3>
        <p className="text-xs sm:text-sm text-stone-600 mt-0.5">
          Child safety is our highest responsibility. Please disclose all known medical conditions, allergies, and emergency action protocols.
        </p>
      </div>

      {/* Mandatory Allergy Radio Status */}
      <div className="p-4 bg-stone-50 rounded-2xl border border-stone-200">
        <label className="block text-xs font-bold uppercase tracking-wider text-stone-900 mb-2">
          Does your child have any known allergies? <span className="text-rose-500">*</span>
        </label>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <button
            type="button"
            onClick={() =>
              onChange({
                hasAllergies: 'none',
                allergyTypes: [],
                allergyDetails: '',
                allergySeverity: '',
                hasEpiPen: false,
                emergencyActionPlan: '',
              })
            }
            className={`p-4 rounded-xl border text-left cursor-pointer transition-all flex items-center justify-between ${
              data.hasAllergies === 'none'
                ? 'bg-emerald-50 border-emerald-500 ring-2 ring-emerald-500/20 font-bold'
                : 'bg-white border-stone-200 hover:border-stone-300'
            }`}
          >
            <div>
              <div className="text-sm text-stone-900 font-bold">No Known Allergies</div>
              <div className="text-xs text-stone-500">Child has no diagnosed food, drug, or environmental allergies.</div>
            </div>
            {data.hasAllergies === 'none' && <Check className="w-5 h-5 text-emerald-700 font-bold" />}
          </button>

          <button
            type="button"
            onClick={() => onChange({ hasAllergies: 'yes' })}
            className={`p-4 rounded-xl border text-left cursor-pointer transition-all flex items-center justify-between ${
              data.hasAllergies === 'yes'
                ? 'bg-amber-50 border-amber-500 ring-2 ring-amber-500/20 font-bold'
                : 'bg-white border-stone-200 hover:border-stone-300'
            }`}
          >
            <div>
              <div className="text-sm text-stone-900 font-bold text-amber-950">Yes, Has Known Allergies</div>
              <div className="text-xs text-stone-500">Specify allergens, severity level, and emergency action plan.</div>
            </div>
            {data.hasAllergies === 'yes' && <ShieldAlert className="w-5 h-5 text-amber-700 font-bold" />}
          </button>
        </div>

        {errors.hasAllergies && (
          <p className="text-[11px] text-rose-600 mt-2 font-medium">{errors.hasAllergies}</p>
        )}
      </div>

      {/* Expanded Allergy Details Section (Required when hasAllergies === 'yes') */}
      {data.hasAllergies === 'yes' && (
        <div className="p-5 rounded-2xl bg-amber-50/60 border border-amber-300/80 space-y-4 animate-in fade-in duration-200">
          <div className="flex items-center gap-2 text-amber-900 font-bold text-sm">
            <AlertTriangle className="w-4 h-4 text-amber-600" />
            <span>Allergy Details & Emergency Management Plan</span>
          </div>

          {/* Allergy Types */}
          <div>
            <label className="block text-xs font-bold text-stone-800 mb-1.5">
              Allergy Categories <span className="text-rose-500">*</span>
            </label>
            <div className="flex flex-wrap gap-2">
              {ALLERGY_TYPE_OPTIONS.map((type) => {
                const active = data.allergyTypes.includes(type);
                return (
                  <button
                    key={type}
                    type="button"
                    onClick={() => toggleAllergyType(type)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold border transition-all cursor-pointer ${
                      active
                        ? 'bg-amber-600 text-white border-amber-600 shadow-xs'
                        : 'bg-white text-stone-700 border-stone-300 hover:bg-stone-50'
                    }`}
                  >
                    {type}
                  </button>
                );
              })}
            </div>
            {errors.allergyTypes && (
              <p className="text-[11px] text-rose-600 mt-1 font-medium">{errors.allergyTypes}</p>
            )}
          </div>

          {/* Specific Allergen Names & Severity */}
          <div className="grid grid-cols-1 sm:grid-cols-12 gap-4">
            <div className="sm:col-span-8">
              <label className="block text-xs font-bold text-stone-800 mb-1">
                Specific Allergen Names <span className="text-rose-500">*</span>
              </label>
              <input
                type="text"
                value={data.allergyDetails}
                onChange={(e) => onChange({ allergyDetails: e.target.value })}
                placeholder="e.g. Peanuts, Cashews, Amoxicillin, Bee Stings"
                className={`w-full px-3.5 py-2 rounded-xl border text-sm bg-white focus:outline-none focus:ring-2 focus:ring-amber-500 ${
                  errors.allergyDetails ? 'border-rose-400 ring-1 ring-rose-300' : 'border-stone-300'
                }`}
              />
              {errors.allergyDetails && (
                <p className="text-[11px] text-rose-600 mt-1 font-medium">{errors.allergyDetails}</p>
              )}
            </div>

            <div className="sm:col-span-4">
              <label className="block text-xs font-bold text-stone-800 mb-1">
                Severity Level <span className="text-rose-500">*</span>
              </label>
              <select
                value={data.allergySeverity}
                onChange={(e) => onChange({ allergySeverity: e.target.value as any })}
                className={`w-full px-3.5 py-2 rounded-xl border text-sm bg-white focus:outline-none focus:ring-2 focus:ring-amber-500 ${
                  errors.allergySeverity ? 'border-rose-400 ring-1 ring-rose-300' : 'border-stone-300'
                }`}
              >
                <option value="">Select Severity...</option>
                <option value="Mild">Mild (Hives / Rash / Itch)</option>
                <option value="Moderate">Moderate (Swelling / Vomiting)</option>
                <option value="Severe (Anaphylaxis Risk)">Severe (Anaphylaxis Risk)</option>
              </select>
              {errors.allergySeverity && (
                <p className="text-[11px] text-rose-600 mt-1 font-medium">{errors.allergySeverity}</p>
              )}
            </div>
          </div>

          {/* EpiPen requirement checkbox */}
          <div className="flex items-center gap-2.5 pt-1">
            <input
              type="checkbox"
              id="epipen-check"
              checked={data.hasEpiPen}
              onChange={(e) => onChange({ hasEpiPen: e.target.checked })}
              className="w-4 h-4 rounded text-amber-600 focus:ring-amber-500 border-stone-300 cursor-pointer"
            />
            <label htmlFor="epipen-check" className="text-xs font-bold text-stone-900 cursor-pointer">
              Child has been prescribed an Epinephrine Auto-Injector (EpiPen / Auvi-Q) to be stored in the classroom medical kit.
            </label>
          </div>

          {/* Emergency Action Plan details */}
          <div>
            <label className="block text-xs font-bold text-stone-800 mb-1">
              Emergency Reaction Protocol & Symptoms <span className="text-rose-500">*</span>
            </label>
            <textarea
              rows={2}
              value={data.emergencyActionPlan}
              onChange={(e) => onChange({ emergencyActionPlan: e.target.value })}
              placeholder="Describe symptoms, immediate medication dosage (e.g., Benadryl 5ml or immediate EpiPen), and emergency instructions..."
              className={`w-full p-2.5 rounded-xl border text-xs sm:text-sm bg-white focus:outline-none focus:ring-2 focus:ring-amber-500 resize-none ${
                errors.emergencyActionPlan ? 'border-rose-400 ring-1 ring-rose-300' : 'border-stone-300'
              }`}
            />
            {errors.emergencyActionPlan && (
              <p className="text-[11px] text-rose-600 mt-1 font-medium">{errors.emergencyActionPlan}</p>
            )}
          </div>
        </div>
      )}

      {/* Pediatrician & Clinic Information */}
      <fieldset className="space-y-4 pt-2 border-t border-stone-200">
        <legend className="text-xs font-bold uppercase tracking-wider text-stone-700 flex items-center gap-1.5 mb-2">
          <Stethoscope className="w-3.5 h-3.5 text-stone-500" />
          Primary Pediatrician & Medical Provider
        </legend>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <div>
            <label className="block text-xs font-bold text-stone-700 mb-1">Pediatrician Name</label>
            <input
              type="text"
              value={data.pediatricianName}
              onChange={(e) => onChange({ pediatricianName: e.target.value })}
              placeholder="e.g. Dr. Emily Hayes, MD"
              className="w-full px-3 py-2 rounded-xl border border-stone-300 bg-white text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-stone-700 mb-1">Clinic Name</label>
            <input
              type="text"
              value={data.pediatricClinic}
              onChange={(e) => onChange({ pediatricClinic: e.target.value })}
              placeholder="e.g. Maplewood Children’s Clinic"
              className="w-full px-3 py-2 rounded-xl border border-stone-300 bg-white text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-stone-700 mb-1">Pediatrician Phone</label>
            <input
              type="tel"
              value={data.pediatricianPhone}
              onChange={(e) => onChange({ pediatricianPhone: e.target.value })}
              placeholder="[PHONE_NUMBER] — (555) 000-0000"
              className="w-full px-3 py-2 rounded-xl border border-stone-300 bg-white text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>
        </div>

        <div>
          <label className="block text-xs font-bold text-stone-700 mb-1">
            Other Chronic Medical Considerations, Routine Medications, or Mobility Notes
          </label>
          <textarea
            rows={2}
            value={data.specialCareInstructions}
            onChange={(e) => onChange({ specialCareInstructions: e.target.value })}
            placeholder="e.g. Mild asthma (inhaler attached), eczema cream instructions, glasses worn during table work, etc."
            className="w-full p-2.5 rounded-xl border border-stone-300 bg-white text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 resize-none"
          />
        </div>
      </fieldset>
    </div>
  );
}
