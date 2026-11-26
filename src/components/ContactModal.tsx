import { useState, FormEvent } from 'react';
import { X, Mail, Phone, Send, CheckCircle2, Clock } from 'lucide-react';
import { DAYCARE_CONFIG } from '../data/daycareData';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [formData, setFormData] = useState({
    parentName: '',
    email: '',
    phone: '',
    programInterest: 'infant',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setFormData({
      parentName: '',
      email: '',
      phone: '',
      programInterest: 'infant',
      message: '',
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-[#2A2540]/65 backdrop-blur-md flex items-center justify-center p-4 sm:p-6">
      <div
        className="glass-lt step-swap relative max-w-lg w-full p-6 sm:p-8 overflow-hidden text-[#2A2540]"
        role="dialog"
        aria-modal="true"
        aria-labelledby="contact-modal-title"
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-slate-500 hover:text-[#2A2540] hover:bg-purple-100 border border-transparent hover:border-purple-300 transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {!isSubmitted ? (
          <div className="space-y-5">
            <div>
              <h2 id="contact-modal-title" className="font-heading text-2xl font-bold text-[#2A2540] tracking-tight pr-8">
                Have Questions? We're Here to Help!
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mt-1">
                Reach out with any questions regarding enrollment, tuition rates, dietary accommodations, or our daily routine.
              </p>
            </div>

            <div className="bg-white/80 p-3.5 rounded-2xl border border-purple-200/70 text-xs text-[#2A2540] space-y-1.5">
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#7A35E0] shrink-0" />
                <span className="font-semibold">{DAYCARE_CONFIG.phoneFormatted}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#F0368A] shrink-0" />
                <span>{DAYCARE_CONFIG.emailFormatted}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                <span>{DAYCARE_CONFIG.operatingHours}</span>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-3.5">
              <div>
                <label className="block text-xs font-bold text-[#2A2540] mb-1">
                  Your Full Name <span className="text-[#F0368A]">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Sarah Jenkins"
                  value={formData.parentName}
                  onChange={(e) => setFormData({ ...formData, parentName: e.target.value })}
                  className="w-full px-3.5 py-2 text-sm rounded-xl border border-purple-200 bg-white/90"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-[#2A2540] mb-1">
                    Email Address <span className="text-[#F0368A]">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="sarah@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3.5 py-2 text-sm rounded-xl border border-purple-200 bg-white/90"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-[#2A2540] mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    placeholder="(555) 000-0000"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3.5 py-2 text-sm rounded-xl border border-purple-200 bg-white/90"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#2A2540] mb-1">
                  Program of Interest
                </label>
                <select
                  value={formData.programInterest}
                  onChange={(e) => setFormData({ ...formData, programInterest: e.target.value })}
                  className="w-full px-3.5 py-2 text-sm rounded-xl border border-purple-200 bg-white/90"
                >
                  <option value="infant">Infant Care (6 Weeks – 18 Months)</option>
                  <option value="toddler">Toddler Program (18 Months – 3 Years)</option>
                  <option value="preschool">Preschool Program (3 – 5 Years)</option>
                  <option value="general">General Inquiry / Multiple Children</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#2A2540] mb-1">
                  Your Message or Question <span className="text-[#F0368A]">*</span>
                </label>
                <textarea
                  required
                  rows={3}
                  placeholder="How can we assist you and your family today?"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-3.5 py-2 text-sm rounded-xl border border-purple-200 bg-white/90 resize-none"
                />
              </div>

              <button
                type="submit"
                className="btn-sprout w-full py-3 px-4 text-sm cursor-pointer flex items-center justify-center gap-2 mt-2"
              >
                <Send className="w-4 h-4" />
                <span>Send Message</span>
              </button>
            </form>
          </div>
        ) : (
          <div className="py-6 text-center space-y-4 step-swap">
            <div className="w-14 h-14 ico-morph bg-[#6DB93E] text-white flex items-center justify-center mx-auto border-2 border-white">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <div>
              <h3 className="font-heading text-2xl font-bold text-[#2A2540]">
                Message Received!
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-sm mx-auto">
                Thank you, <span className="font-bold text-[#2A2540]">{formData.parentName}</span>. Our admissions coordinator will get back to you shortly at <span className="font-bold text-[#7A35E0]">{formData.email}</span>.
              </p>
            </div>
            <button
              onClick={handleReset}
              className="btn-sprout-purple px-6 py-2.5 text-xs cursor-pointer"
            >
              Done
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
