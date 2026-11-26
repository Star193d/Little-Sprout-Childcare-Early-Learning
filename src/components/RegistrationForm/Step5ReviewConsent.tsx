import { User, Baby, Utensils, ShieldAlert, Edit2, FileText, CheckSquare, ShieldCheck, Sparkles, Loader2 } from 'lucide-react';
import { ParentGuardianInfo, ChildProfileInfo, FoodNutritionInfo, MedicalAllergyInfo, ConsentAgreement } from '../../types';

interface Step5Props {
  parent: ParentGuardianInfo;
  child: ChildProfileInfo;
  nutrition: FoodNutritionInfo;
  medical: MedicalAllergyInfo;
  consent: ConsentAgreement;
  onConsentChange: (data: Partial<ConsentAgreement>) => void;
  onJumpToStep: (step: number) => void;
  onSubmit: () => void;
  isSubmitting: boolean;
  errors: Record<string, string>;
}

export function Step5ReviewConsent({
  parent,
  child,
  nutrition,
  medical,
  consent,
  onConsentChange,
  onJumpToStep,
  onSubmit,
  isSubmitting,
  errors
}: Step5Props) {
  return (
    <div className="space-y-6 animate-in fade-in duration-200">
      <div>
        <h3 className="font-heading text-xl font-bold text-stone-900">
          Review Intake Application & Parental Consent
        </h3>
        <p className="text-xs sm:text-sm text-stone-600 mt-0.5">
          Please review the summary below for accuracy before submitting your child's intake profile.
        </p>
      </div>

      {/* Summary Cards */}
      <div className="space-y-3">
        {/* Parent Summary Card */}
        <div className="p-4 rounded-2xl bg-white border border-stone-200 shadow-xs">
          <div className="flex items-center justify-between pb-2 border-b border-stone-100">
            <span className="text-xs font-bold text-stone-900 flex items-center gap-1.5">
              <User className="w-4 h-4 text-emerald-700" />
              1. Parent / Guardian Details
            </span>
            <button
              type="button"
              onClick={() => onJumpToStep(1)}
              className="text-xs font-semibold text-emerald-700 hover:text-emerald-800 flex items-center gap-1 cursor-pointer"
            >
              <Edit2 className="w-3 h-3" /> Edit
            </button>
          </div>
          <div className="pt-2.5 grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1.5 text-xs">
            <div>
              <span className="text-stone-500">Primary Contact:</span>{' '}
              <span className="font-bold text-stone-800">{parent.fullName || '—'}</span> ({parent.relationship})
            </div>
            <div>
              <span className="text-stone-500">Phone:</span>{' '}
              <span className="font-bold text-stone-800">{parent.phone || '—'}</span>
            </div>
            <div>
              <span className="text-stone-500">Email:</span>{' '}
              <span className="font-bold text-stone-800">{parent.email || '—'}</span>
            </div>
            <div>
              <span className="text-stone-500">Emergency Contact:</span>{' '}
              <span className="font-bold text-stone-800">{parent.emergencyContactName || '—'}</span> ({parent.emergencyContactPhone})
            </div>
          </div>
        </div>

        {/* Child Profile Summary Card */}
        <div className="p-4 rounded-2xl bg-white border border-stone-200 shadow-xs">
          <div className="flex items-center justify-between pb-2 border-b border-stone-100">
            <span className="text-xs font-bold text-stone-900 flex items-center gap-1.5">
              <Baby className="w-4 h-4 text-amber-700" />
              2. Child Profile & Program
            </span>
            <button
              type="button"
              onClick={() => onJumpToStep(2)}
              className="text-xs font-semibold text-emerald-700 hover:text-emerald-800 flex items-center gap-1 cursor-pointer"
            >
              <Edit2 className="w-3 h-3" /> Edit
            </button>
          </div>
          <div className="pt-2.5 grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1.5 text-xs">
            <div>
              <span className="text-stone-500">Child Name:</span>{' '}
              <span className="font-bold text-stone-800">{child.childFullName || '—'}</span>{' '}
              {child.preferredName ? `("${child.preferredName}")` : ''}
            </div>
            <div>
              <span className="text-stone-500">Date of Birth:</span>{' '}
              <span className="font-bold text-stone-800">{child.dob || '—'}</span>
            </div>
            <div>
              <span className="text-stone-500">Program & Schedule:</span>{' '}
              <span className="font-bold text-emerald-800 uppercase text-[11px]">{child.programInterest}</span> • {child.daysPerWeek}
            </div>
            <div>
              <span className="text-stone-500">Desired Start:</span>{' '}
              <span className="font-bold text-stone-800">{child.desiredStartDate || '—'}</span>
            </div>
            {child.favoriteActivities && (
              <div className="sm:col-span-2 text-stone-600">
                <span className="text-stone-500">Favorites:</span> {child.favoriteActivities}
              </div>
            )}
          </div>
        </div>

        {/* Nutrition Summary Card */}
        <div className="p-4 rounded-2xl bg-white border border-stone-200 shadow-xs">
          <div className="flex items-center justify-between pb-2 border-b border-stone-100">
            <span className="text-xs font-bold text-stone-900 flex items-center gap-1.5">
              <Utensils className="w-4 h-4 text-teal-700" />
              3. Food Plan & Dietary Preferences
            </span>
            <button
              type="button"
              onClick={() => onJumpToStep(3)}
              className="text-xs font-semibold text-emerald-700 hover:text-emerald-800 flex items-center gap-1 cursor-pointer"
            >
              <Edit2 className="w-3 h-3" /> Edit
            </button>
          </div>
          <div className="pt-2.5 grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1.5 text-xs">
            <div>
              <span className="text-stone-500">Meal Plan:</span>{' '}
              <span className="font-bold text-stone-800">{nutrition.mealPlanType || '—'}</span>
            </div>
            <div>
              <span className="text-stone-500">Dietary Restrictions:</span>{' '}
              <span className="font-bold text-stone-800">
                {nutrition.dietaryRestrictions.length > 0 ? nutrition.dietaryRestrictions.join(', ') : 'None'}
              </span>
            </div>
            {nutrition.bottleFeedingDetails && (
              <div className="sm:col-span-2 text-stone-600">
                <span className="text-stone-500">Bottle / Nursing:</span> {nutrition.bottleFeedingDetails}
              </div>
            )}
          </div>
        </div>

        {/* Medical & Allergies Summary Card */}
        <div className="p-4 rounded-2xl bg-white border border-stone-200 shadow-xs">
          <div className="flex items-center justify-between pb-2 border-b border-stone-100">
            <span className="text-xs font-bold text-stone-900 flex items-center gap-1.5">
              <ShieldAlert className="w-4 h-4 text-rose-700" />
              4. Medical & Allergies
            </span>
            <button
              type="button"
              onClick={() => onJumpToStep(4)}
              className="text-xs font-semibold text-emerald-700 hover:text-emerald-800 flex items-center gap-1 cursor-pointer"
            >
              <Edit2 className="w-3 h-3" /> Edit
            </button>
          </div>
          <div className="pt-2.5 space-y-1.5 text-xs">
            <div>
              <span className="text-stone-500">Allergy Status:</span>{' '}
              {medical.hasAllergies === 'none' ? (
                <span className="font-bold text-emerald-700">No Known Allergies</span>
              ) : (
                <span className="font-bold text-rose-700">
                  Yes ({medical.allergyDetails || 'Allergies Specified'} • {medical.allergySeverity})
                </span>
              )}
            </div>
            {medical.hasEpiPen && (
              <div className="text-amber-800 font-semibold">
                ⚠️ Prescribed Epinephrine Auto-Injector (EpiPen) on file.
              </div>
            )}
            {medical.pediatricianName && (
              <div>
                <span className="text-stone-500">Pediatrician:</span> {medical.pediatricianName} ({medical.pediatricClinic})
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mandatory Legal & Medical Consents */}
      <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200 space-y-4">
        <h4 className="font-heading text-sm font-bold text-stone-900 flex items-center gap-1.5">
          <ShieldCheck className="w-4 h-4 text-emerald-700" />
          Parental Authorization & Declarations
        </h4>

        {/* Consent 1: Terms & Handbook */}
        <div className="flex items-start gap-3">
          <input
            type="checkbox"
            id="terms-consent"
            checked={consent.agreedToTerms}
            onChange={(e) => onConsentChange({ agreedToTerms: e.target.checked })}
            className="mt-1 w-4 h-4 rounded text-emerald-700 focus:ring-emerald-500 border-stone-300 cursor-pointer"
          />
          <label htmlFor="terms-consent" className="text-xs text-stone-700 cursor-pointer leading-relaxed">
            <span className="font-bold text-stone-900">Childcare Policies & Enrollment Agreement *</span>: I certify that all information provided in this intake form is complete and accurate. I agree to abide by the parent handbook, tuition schedule, illness exclusion policies, and operating hours.
          </label>
        </div>
        {errors.agreedToTerms && (
          <p className="text-[11px] text-rose-600 font-medium pl-7">{errors.agreedToTerms}</p>
        )}

        {/* Consent 2: Emergency Medical Care */}
        <div className="flex items-start gap-3">
          <input
            type="checkbox"
            id="medical-consent"
            checked={consent.agreedToMedicalAuthorization}
            onChange={(e) => onConsentChange({ agreedToMedicalAuthorization: e.target.checked })}
            className="mt-1 w-4 h-4 rounded text-emerald-700 focus:ring-emerald-500 border-stone-300 cursor-pointer"
          />
          <label htmlFor="medical-consent" className="text-xs text-stone-700 cursor-pointer leading-relaxed">
            <span className="font-bold text-stone-900">Emergency Medical Authorization *</span>: In the event of a medical emergency where parents/guardians cannot be immediately reached, I authorize Sunny Days Learning staff and licensed medical personnel to administer emergency first aid, CPR, and transport to the nearest pediatric emergency hospital.
          </label>
        </div>
        {errors.agreedToMedicalAuthorization && (
          <p className="text-[11px] text-rose-600 font-medium pl-7">{errors.agreedToMedicalAuthorization}</p>
        )}

        {/* Consent 3: Photo/Video Portal Release (Optional) */}
        <div className="flex items-start gap-3">
          <input
            type="checkbox"
            id="photo-consent"
            checked={consent.agreedToPhotoRelease}
            onChange={(e) => onConsentChange({ agreedToPhotoRelease: e.target.checked })}
            className="mt-1 w-4 h-4 rounded text-emerald-700 focus:ring-emerald-500 border-stone-300 cursor-pointer"
          />
          <label htmlFor="photo-consent" className="text-xs text-stone-700 cursor-pointer leading-relaxed">
            <span className="font-bold text-stone-900">Private Daily Photo Feed Permission (Optional)</span>: I grant permission for classroom teachers to capture learning photos of my child solely for our password-protected parent portal updates and internal developmental portfolios.
          </label>
        </div>

        {/* Digital Signature & Date */}
        <div className="grid grid-cols-1 sm:grid-cols-12 gap-3 pt-3 border-t border-stone-200">
          <div className="sm:col-span-8">
            <label className="block text-xs font-bold text-stone-700 mb-1">
              Parent / Guardian Digital Signature (Type Full Legal Name) <span className="text-rose-500">*</span>
            </label>
            <input
              type="text"
              value={consent.parentSignature}
              onChange={(e) => onConsentChange({ parentSignature: e.target.value })}
              placeholder="e.g. Jessica Thompson"
              className={`w-full px-3.5 py-2.5 rounded-xl border text-sm font-serif italic focus:outline-none focus:ring-2 focus:ring-emerald-500 ${
                errors.parentSignature ? 'border-rose-400 bg-rose-50/40 ring-1 ring-rose-300' : 'border-stone-300 bg-white'
              }`}
            />
            {errors.parentSignature && (
              <p className="text-[11px] text-rose-600 mt-1 font-medium">{errors.parentSignature}</p>
            )}
          </div>

          <div className="sm:col-span-4">
            <label className="block text-xs font-bold text-stone-700 mb-1">Date</label>
            <input
              type="text"
              readOnly
              value={consent.signatureDate}
              className="w-full px-3 py-2.5 rounded-xl border border-stone-200 bg-stone-100 text-stone-600 text-sm font-mono cursor-not-allowed"
            />
          </div>
        </div>
      </div>

      {/* Submission CTA */}
      <div className="pt-3">
        <button
          type="button"
          disabled={isSubmitting}
          onClick={onSubmit}
          className="w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-emerald-700 to-teal-700 hover:from-emerald-800 hover:to-teal-800 text-white font-extrabold text-base shadow-lg hover:shadow-xl transition-all cursor-pointer flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" />
              <span>Verifying & Submitting Registration...</span>
            </>
          ) : (
            <>
              <Sparkles className="w-5 h-5 text-amber-300" />
              <span>Submit Child Intake Registration</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
}
