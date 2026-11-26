import { useState, FormEvent } from 'react';
import { X, Calendar, User, Mail, Phone, CheckCircle2, Sparkles } from 'lucide-react';
import { ProgramType, TourBookingData } from '../types';
import { DAYCARE_CONFIG } from '../data/daycareData';

interface TourModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function TourModal({ isOpen, onClose }: TourModalProps) {
  const [formData, setFormData] = useState<TourBookingData>({
    parentName: '',
    email: '',
    phone: '',
    childAge: '',
    preferredProgram: 'toddler',
    preferredDate: '',
    preferredTimeSlot: 'morning',
    notes: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  if (!isOpen) return null;

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.parentName.trim()) newErrors.parentName = 'Parent name is required';
    if (!formData.email.trim() || !formData.email.includes('@')) newErrors.email = 'Valid email is required';
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
    if (!formData.preferredDate) newErrors.preferredDate = 'Please select a preferred date';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setFormData({
      parentName: '',
      email: '',
      phone: '',
      childAge: '',
      preferredProgram: 'toddler',
      preferredDate: '',
      preferredTimeSlot: 'morning',
      notes: '',
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#2A2540]/65 backdrop-blur-md">
      <div
        className="glass-lt step-swap max-w-lg w-full p-6 sm:p-8 relative overflow-hidden max-h-[90vh] overflow-y-auto text-[#2A2540]"
        role="dialog"
        aria-modal="true"
        aria-labelledby="tour-modal-title"
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-slate-500 hover:text-[#2A2540] hover:bg-purple-100 border border-transparent hover:border-purple-300 transition-colors cursor-pointer"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {!isSubmitted ? (
          <div>
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 ico-morph bg-[#7A35E0] text-white flex items-center justify-center">
                <Calendar className="w-5 h-5" />
              </div>
              <div>
                <h3 id="tour-modal-title" className="font-heading text-2xl font-bold text-[#2A2540] tracking-tight">
                  Schedule a Tour
                </h3>
                <span className="text-xs font-bold text-[#7A35E0] block">
                  {DAYCARE_CONFIG.name} Walkthrough
                </span>
              </div>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 mb-5">
              Tour our colorful playrooms, meet our caring educators, and see our programs in action Monday through Friday.
            </p>

            <form onSubmit={handleSubmit} className="space-y-3.5">
              <div>
                <label className="block text-xs font-bold text-[#2A2540] mb-1">
                  Parent / Guardian Full Name <span className="text-[#F0368A]">*</span>
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                  <input
                    type="text"
                    value={formData.parentName}
                    onChange={(e) => setFormData({ ...formData, parentName: e.target.value })}
                    placeholder="e.g. Sarah Jenkins"
                    className={`w-full pl-9 pr-3 py-2 rounded-xl border text-sm bg-white/90 ${
                      errors.parentName ? 'border-[#F0368A]' : 'border-purple-200'
                    }`}
                  />
                </div>
                {errors.parentName && <p className="text-[11px] text-[#F0368A] mt-1 font-semibold">{errors.parentName}</p>}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-[#2A2540] mb-1">
                    Email Address <span className="text-[#F0368A]">*</span>
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="parent@example.com"
                      className={`w-full pl-9 pr-3 py-2 rounded-xl border text-sm bg-white/90 ${
                        errors.email ? 'border-[#F0368A]' : 'border-purple-200'
                      }`}
                    />
                  </div>
                  {errors.email && <p className="text-[11px] text-[#F0368A] mt-1 font-semibold">{errors.email}</p>}
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#2A2540] mb-1">
                    Phone Number <span className="text-[#F0368A]">*</span>
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="(555) 000-0000"
                      className={`w-full pl-9 pr-3 py-2 rounded-xl border text-sm bg-white/90 ${
                        errors.phone ? 'border-[#F0368A]' : 'border-purple-200'
                      }`}
                    />
                  </div>
                  {errors.phone && <p className="text-[11px] text-[#F0368A] mt-1 font-semibold">{errors.phone}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-[#2A2540] mb-1">Program of Interest</label>
                  <select
                    value={formData.preferredProgram}
                    onChange={(e) => setFormData({ ...formData, preferredProgram: e.target.value as ProgramType })}
                    className="w-full px-3 py-2 rounded-xl border border-purple-200 bg-white/90 text-sm"
                  >
                    <option value="infant">Infant Care (6 Weeks – 18 Months)</option>
                    <option value="toddler">Toddler Program (18 Months – 3 Years)</option>
                    <option value="preschool">Preschool Program (3 – 5 Years)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#2A2540] mb-1">Child's Age</label>
                  <input
                    type="text"
                    value={formData.childAge}
                    onChange={(e) => setFormData({ ...formData, childAge: e.target.value })}
                    placeholder="e.g. 18 months"
                    className="w-full px-3 py-2 rounded-xl border border-purple-200 bg-white/90 text-sm"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-[#2A2540] mb-1">
                    Preferred Date <span className="text-[#F0368A]">*</span>
                  </label>
                  <input
                    type="date"
                    value={formData.preferredDate}
                    onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                    className={`w-full px-3 py-2 rounded-xl border text-sm bg-white/90 ${
                      errors.preferredDate ? 'border-[#F0368A]' : 'border-purple-200'
                    }`}
                  />
                  {errors.preferredDate && <p className="text-[11px] text-[#F0368A] mt-1 font-semibold">{errors.preferredDate}</p>}
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#2A2540] mb-1">Time Slot</label>
                  <select
                    value={formData.preferredTimeSlot}
                    onChange={(e) => setFormData({ ...formData, preferredTimeSlot: e.target.value as 'morning' | 'midday' | 'afternoon' })}
                    className="w-full px-3 py-2 rounded-xl border border-purple-200 bg-white/90 text-sm"
                  >
                    <option value="morning">Morning Tour (9:30 AM – 10:30 AM)</option>
                    <option value="midday">Midday Observation (11:30 AM – 12:30 PM)</option>
                    <option value="afternoon">Afternoon Tour (3:30 PM – 4:30 PM)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#2A2540] mb-1">Special Questions or Notes</label>
                <textarea
                  rows={2}
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  placeholder="Tell us about special accommodations or questions..."
                  className="w-full px-3 py-2 rounded-xl border border-purple-200 bg-white/90 text-xs sm:text-sm resize-none"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="btn-sprout-purple w-full py-3.5 px-4 text-sm cursor-pointer flex items-center justify-center gap-2"
                >
                  <Sparkles className="w-4 h-4 text-[#FFC81E]" />
                  <span>Book Tour at {DAYCARE_CONFIG.name}</span>
                </button>
              </div>
            </form>
          </div>
        ) : (
          <div className="text-center py-6 space-y-4 step-swap">
            <div className="w-16 h-16 ico-morph bg-[#6DB93E] text-white mx-auto flex items-center justify-center shadow-md border-2 border-white">
              <CheckCircle2 className="w-9 h-9" />
            </div>

            <h3 className="font-heading text-2xl font-bold text-[#2A2540]">
              Tour Scheduled!
            </h3>

            <p className="text-xs sm:text-sm text-slate-600 max-w-sm mx-auto leading-relaxed">
              Thank you, <span className="font-bold text-[#2A2540]">{formData.parentName}</span>. We look forward to welcoming you on{' '}
              <span className="font-bold text-[#7A35E0]">{formData.preferredDate}</span> ({formData.preferredTimeSlot}).
            </p>

            <div className="bg-white/80 rounded-2xl p-4 border border-purple-200/70 text-xs text-slate-600 text-left space-y-1 max-w-sm mx-auto">
              <p className="font-bold text-[#2A2540]">What to Bring:</p>
              <p>• Government-issued photo ID for visitor entry</p>
              <p>• Your child is warmly invited to explore our discovery rooms!</p>
              <p className="pt-1 text-[#7A35E0] font-semibold">Confirmation summary sent to {formData.email}</p>
            </div>

            <button
              onClick={handleReset}
              className="btn-sprout-yel mt-4 px-6 py-2.5 text-xs cursor-pointer"
            >
              Done &amp; Return
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
