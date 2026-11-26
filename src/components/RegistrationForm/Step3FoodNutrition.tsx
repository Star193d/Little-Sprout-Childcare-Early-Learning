import { Utensils, Apple, Milk, Check, AlertCircle } from 'lucide-react';
import { FoodNutritionInfo } from '../../types';

interface Step3Props {
  data: FoodNutritionInfo;
  onChange: (data: Partial<FoodNutritionInfo>) => void;
  errors: Record<string, string>;
}

const DIETARY_OPTIONS = [
  'None (Standard Balanced Menu)',
  'Vegetarian',
  'Vegan',
  'Halal Certified',
  'Kosher Style',
  'Lactose Intolerant / Dairy-Free',
  'Gluten-Free / Celiac Safe',
  'Egg-Free',
  'No Pork / Beef',
  'No Added Cane Sugar'
];

export function Step3FoodNutrition({ data, onChange, errors }: Step3Props) {
  const toggleRestriction = (option: string) => {
    let updated: string[];
    if (option === 'None (Standard Balanced Menu)') {
      updated = ['None (Standard Balanced Menu)'];
    } else {
      const filtered = data.dietaryRestrictions.filter((r) => r !== 'None (Standard Balanced Menu)');
      if (filtered.includes(option)) {
        updated = filtered.filter((r) => r !== option);
      } else {
        updated = [...filtered, option];
      }
    }
    onChange({ dietaryRestrictions: updated });
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-200">
      <div>
        <h3 className="font-heading text-xl font-bold text-stone-900">
          Food System, Meals & Nutrition
        </h3>
        <p className="text-xs sm:text-sm text-stone-600 mt-0.5">
          Select your meal preferences and let us know about any specific dietary traditions, bottle schedules, or feeding guidelines.
        </p>
      </div>

      {/* Meal Plan Type Selection */}
      <div>
        <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-2">
          Meal Plan Selection <span className="text-rose-500">*</span>
        </label>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {[
            {
              id: 'daycare-provided',
              title: 'Daycare Organic Menu',
              desc: 'Includes fresh organic breakfast, hot lunch, and 2 snacks daily prepared on-site.',
              badge: 'Most Popular'
            },
            {
              id: 'parent-provided',
              title: 'Parent-Packed Meals',
              desc: 'Family brings labeled bento boxes & snacks. Stored in temperature-controlled coolers.',
              badge: 'BYO Meals'
            },
            {
              id: 'hybrid',
              title: 'Hybrid Care Plan',
              desc: 'Center provides breakfast & snacks; parents supply custom hot lunch.',
              badge: 'Flexible'
            }
          ].map((plan) => {
            const isSelected = data.mealPlanType === plan.id;
            return (
              <button
                key={plan.id}
                type="button"
                onClick={() => onChange({ mealPlanType: plan.id as any })}
                className={`p-4 rounded-2xl border text-left transition-all cursor-pointer flex flex-col justify-between ${
                  isSelected
                    ? 'bg-emerald-50/70 border-emerald-500 ring-2 ring-emerald-500/20 shadow-xs'
                    : 'bg-white border-stone-200 hover:border-stone-300'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-xs font-bold text-emerald-900 bg-emerald-100/70 px-2 py-0.5 rounded">
                      {plan.badge}
                    </span>
                    {isSelected && <Check className="w-4 h-4 text-emerald-700 font-bold" />}
                  </div>
                  <h4 className="font-heading text-sm font-bold text-stone-900">{plan.title}</h4>
                  <p className="text-xs text-stone-600 mt-1">{plan.desc}</p>
                </div>
              </button>
            );
          })}
        </div>
        {errors.mealPlanType && (
          <p className="text-[11px] text-rose-600 mt-1.5 font-medium">{errors.mealPlanType}</p>
        )}
      </div>

      {/* Dietary Restrictions Checklist */}
      <div className="pt-2">
        <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-2">
          Dietary Restrictions & Cultural Practices <span className="text-rose-500">*</span>
        </label>
        <p className="text-xs text-stone-500 mb-3">
          Select all that apply. Note: Specific medical allergies will be detailed in Step 4.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {DIETARY_OPTIONS.map((opt) => {
            const checked = data.dietaryRestrictions.includes(opt);
            return (
              <button
                key={opt}
                type="button"
                onClick={() => toggleRestriction(opt)}
                className={`flex items-center gap-2.5 p-3 rounded-xl border text-left text-xs font-semibold transition-all cursor-pointer ${
                  checked
                    ? 'bg-emerald-50/80 border-emerald-400 text-emerald-950 font-bold'
                    : 'bg-white border-stone-200 text-stone-700 hover:bg-stone-50'
                }`}
              >
                <div
                  className={`w-4 h-4 rounded flex items-center justify-center border transition-colors ${
                    checked
                      ? 'bg-emerald-700 border-emerald-700 text-white'
                      : 'border-stone-300 bg-white'
                  }`}
                >
                  {checked && <Check className="w-3 h-3 stroke-[3]" />}
                </div>
                <span>{opt}</span>
              </button>
            );
          })}
        </div>
        {errors.dietaryRestrictions && (
          <p className="text-[11px] text-rose-600 mt-1.5 font-medium">{errors.dietaryRestrictions}</p>
        )}
      </div>

      {/* Feeding Instructions or Bottle Schedules */}
      <div className="space-y-4 pt-3 border-t border-stone-200">
        <div>
          <label className="block text-xs font-bold text-stone-700 mb-1 flex items-center gap-1.5">
            <Milk className="w-3.5 h-3.5 text-stone-500" />
            Infant Bottle / Nursing Details (If Applicable)
          </label>
          <input
            type="text"
            value={data.bottleFeedingDetails || ''}
            onChange={(e) => onChange({ bottleFeedingDetails: e.target.value })}
            placeholder="e.g. 4oz pumped breastmilk warmed in hot water bath every 2.5 hours, or specific formula brand"
            className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 bg-white text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
          />
        </div>

        <div>
          <label className="block text-xs font-bold text-stone-700 mb-1">
            Specific Feeding Instructions, Food Textures, or Schedule
          </label>
          <textarea
            rows={2}
            value={data.specialFeedingSchedule}
            onChange={(e) => onChange({ specialFeedingSchedule: e.target.value })}
            placeholder="e.g. Cut grapes quartered lengthwise, prefers self-feeding with spoon, likes warm water with meals..."
            className="w-full p-3 rounded-xl border border-stone-300 bg-white text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 resize-none"
          />
        </div>
      </div>
    </div>
  );
}
