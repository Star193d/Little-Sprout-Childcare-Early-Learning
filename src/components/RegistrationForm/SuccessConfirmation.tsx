import { CheckCircle2, Download, Printer, RotateCcw, Calendar } from 'lucide-react';
import { IntakeRegistrationPayload } from '../../types';
import { DAYCARE_CONFIG } from '../../data/daycareData';

interface SuccessProps {
  payload: IntakeRegistrationPayload;
  onReset: () => void;
}

export function SuccessConfirmation({ payload, onReset }: SuccessProps) {
  const handlePrint = () => {
    window.print();
  };

  const handleDownloadJson = () => {
    const dataStr =
      'data:text/json;charset=utf-8,' +
      encodeURIComponent(JSON.stringify(payload, null, 2));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute('href', dataStr);
    downloadAnchor.setAttribute('download', `daycare-intake-${payload.registrationId}.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
  };

  return (
    <div className="glass-lt interactive-card p-6 sm:p-10 space-y-8 step-swap">
      <div className="text-center space-y-3">
        <div className="w-16 h-16 ico-morph bg-[#6DB93E] text-white mx-auto flex items-center justify-center shadow-md border-2 border-white">
          <CheckCircle2 className="w-9 h-9" />
        </div>
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-emerald-100 border border-emerald-200 text-emerald-900 text-xs font-bold font-mono">
          REF: #{payload.registrationId}
        </div>
        <h3 className="font-heading text-2xl sm:text-3xl font-bold text-[#2A2540] tracking-tight">
          Intake Application Submitted Successfully!
        </h3>
        <p className="text-sm text-slate-600 max-w-lg mx-auto leading-relaxed">
          Welcome to the {DAYCARE_CONFIG.name} family! We have received the intake record for{' '}
          <span className="font-bold text-[#2A2540]">{payload.child.childFullName}</span>. A copy of this confirmation has been sent to{' '}
          <span className="font-semibold text-[#7A35E0]">{payload.parent.email}</span>.
        </p>
      </div>

      <div className="bg-white/80 rounded-2xl p-5 sm:p-6 border border-purple-200/70 space-y-4">
        <div className="flex items-center justify-between pb-3 border-b border-purple-200/60 text-xs font-bold text-[#2A2540]">
          <span>Submission Receipt</span>
          <span className="font-mono text-slate-500">{payload.timestamp}</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
          <div>
            <span className="text-slate-500 block">Child Registered</span>
            <span className="font-bold text-[#2A2540] text-sm">{payload.child.childFullName}</span>
            <span className="text-slate-500 block">DOB: {payload.child.dob}</span>
          </div>

          <div>
            <span className="text-slate-500 block">Program &amp; Schedule</span>
            <span className="font-bold text-[#7A35E0] text-sm uppercase">{payload.child.programInterest}</span>
            <span className="text-slate-500 block">{payload.child.daysPerWeek}</span>
          </div>

          <div>
            <span className="text-slate-500 block">Primary Contact</span>
            <span className="font-bold text-[#2A2540] text-sm">{payload.parent.fullName}</span>
            <span className="text-slate-500 block">{payload.parent.phone}</span>
          </div>
        </div>

        <div className="pt-3 border-t border-purple-200/60 flex flex-wrap items-center justify-between gap-2 text-xs">
          <div>
            <span className="text-slate-500">Dietary/Allergy Status: </span>
            <span className="font-semibold text-[#2A2540]">
              {payload.medical.hasAllergies === 'yes'
                ? `Allergies Recorded (${payload.medical.allergyDetails})`
                : 'No Known Allergies'}
            </span>
          </div>
          <div>
            <span className="text-slate-500">Meal Plan: </span>
            <span className="font-semibold text-[#2A2540] capitalize">{payload.nutrition.mealPlanType}</span>
          </div>
        </div>
      </div>

      <div className="space-y-3">
        <h4 className="font-heading text-base font-bold text-[#2A2540] flex items-center gap-2">
          <Calendar className="w-4 h-4 text-[#7A35E0]" />
          What Happens Next?
        </h4>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
          <div className="p-4 rounded-2xl bg-white/80 border border-purple-200/70">
            <span className="font-bold text-[#7A35E0] block mb-1">Step 1: Director Review</span>
            <p className="text-slate-600">Our Admissions Team verifies classroom capacity and dietary prep within 24 business hours.</p>
          </div>

          <div className="p-4 rounded-2xl bg-white/80 border border-purple-200/70">
            <span className="font-bold text-[#F0368A] block mb-1">Step 2: Orientation</span>
            <p className="text-slate-600">We will call you at {payload.parent.phone} to schedule your 30-minute transition visit.</p>
          </div>

          <div className="p-4 rounded-2xl bg-white/80 border border-purple-200/70">
            <span className="font-bold text-[#6DB93E] block mb-1">Step 3: Portal Access</span>
            <p className="text-slate-600">You will receive PIN setup links for our live parent app and secure door entry.</p>
          </div>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-4 border-t border-purple-200/60">
        <div className="flex items-center gap-2 w-full sm:w-auto">
          <button
            onClick={handlePrint}
            className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-full border border-purple-200 text-[#2A2540] bg-white hover:bg-purple-50 text-xs font-bold transition-all cursor-pointer"
          >
            <Printer className="w-3.5 h-3.5" />
            <span>Print Summary</span>
          </button>

          <button
            onClick={handleDownloadJson}
            className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-full border border-purple-200 text-[#2A2540] bg-white hover:bg-purple-50 text-xs font-bold transition-all cursor-pointer"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Download Record (JSON)</span>
          </button>
        </div>

        <button
          onClick={onReset}
          className="btn-sprout-purple w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-5 py-2.5 text-xs cursor-pointer"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          <span>Register Another Sibling</span>
        </button>
      </div>
    </div>
  );
}
