import { useState, FormEvent } from 'react';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  CheckCircle2,
  Calendar,
  Car,
  ArrowRight,
} from 'lucide-react';
import { DAYCARE_CONFIG, DAYCARE_IMAGES } from '../data/daycareData';
import { PageId } from '../types';
import {
  FloatingBlobs,
  HeroMiniBanner,
  Reveal,
} from '../components/MotionPrimitives';

interface ContactPageProps {
  onNavigate: (page: PageId) => void;
  onOpenTour: () => void;
}

export function ContactPage({ onNavigate, onOpenTour }: ContactPageProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    childAge: '',
    message: '',
    inquiryType: 'general',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div className="min-h-screen">
      {/* 1. Contact Hero Banner */}
      <HeroMiniBanner
        title="We'd Love to Hear From You"
        subtitle="Have questions regarding classroom availability, tuition, dietary plans, or scheduling an in-person campus visit? Reach out directly to our admissions team."
        bgImage={DAYCARE_IMAGES.outdoorPlay}
        rightSlot={
          <div className="relative mx-auto max-w-md">
            <div className="photo-morph relative overflow-hidden bg-[#2A2540]">
              <img
                src={DAYCARE_IMAGES.outdoorPlay}
                alt="Sunny outdoor playground and welcoming campus community"
                className="w-full h-80 sm:h-96 object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#2A2540]/85 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-5 left-6 right-6 text-white">
                <p className="font-heading text-base sm:text-lg font-bold leading-snug">
                  {DAYCARE_CONFIG.address}
                </p>
              </div>
            </div>

            <div className="glass chip-bob hidden sm:flex items-center gap-3 p-3.5 absolute -bottom-4 -left-4 z-20 text-white">
              <div className="w-10 h-10 ico-morph bg-[#FFC81E] text-[#2A2540] flex items-center justify-center shrink-0">
                <Car className="w-5 h-5" />
              </div>
              <div className="text-left">
                <p className="text-xs font-extrabold text-white">Convenient Drop-Off</p>
                <p className="text-[11px] text-white/80">Dedicated 15-min parent bays</p>
              </div>
            </div>
          </div>
        }
      >
        <div className="flex flex-wrap items-center gap-3 pt-1">
          <button
            id="contact-hero-tour-btn"
            onClick={onOpenTour}
            className="btn-sprout-yel inline-flex items-center justify-center gap-2 px-6 py-3 text-sm cursor-pointer"
          >
            <Calendar className="w-4 h-4" />
            <span>Book In-Person Tour</span>
          </button>

          <a
            href={`tel:${DAYCARE_CONFIG.phoneFormatted}`}
            className="btn-sprout-ghost text-white inline-flex items-center justify-center gap-2 px-5 py-3 text-sm cursor-pointer"
          >
            <Phone className="w-4 h-4" />
            <span>Call {DAYCARE_CONFIG.phoneFormatted}</span>
          </a>

          <button
            onClick={() => onNavigate('registration')}
            className="btn-sprout inline-flex items-center justify-center gap-2 px-5 py-3 text-sm cursor-pointer"
          >
            <span>Enroll Online</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="pt-4 grid grid-cols-3 gap-3 border-t border-white/25 max-w-xl">
          <div className="bg-white/15 backdrop-blur-md p-2.5 rounded-2xl border border-white/30 text-center">
            <p className="font-heading text-sm sm:text-base font-bold text-[#FFC81E]">Under 2 Hrs</p>
            <p className="text-[11px] text-white/85 font-semibold">Response Time</p>
          </div>
          <div className="bg-white/15 backdrop-blur-md p-2.5 rounded-2xl border border-white/30 text-center">
            <p className="font-heading text-sm sm:text-base font-bold text-white">Mon – Fri</p>
            <p className="text-[11px] text-white/85 font-semibold">7:00 AM – 6:00 PM</p>
          </div>
          <div className="bg-white/15 backdrop-blur-md p-2.5 rounded-2xl border border-white/30 text-center">
            <p className="font-heading text-sm sm:text-base font-bold text-[#FFC81E]">Free Parking</p>
            <p className="text-[11px] text-white/85 font-semibold">Easy Visitor Access</p>
          </div>
        </div>
      </HeroMiniBanner>

      {/* 2. Main 2-Column Contact & Tour Grid */}
      <section className="py-12 sm:py-16 relative overflow-hidden">
        <FloatingBlobs variant="light" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Left Column */}
            <div className="lg:col-span-5 space-y-6">
              <Reveal delayIndex={0}>
                <div className="glass-lt card-sprout interactive-card p-6 sm:p-8 space-y-6">
                  <h3 className="font-heading font-bold text-2xl text-[#2A2540]">
                    Campus Information
                  </h3>

                  <div className="space-y-5">
                    <div className="flex items-start gap-3.5">
                      <div className="w-10 h-10 ico-morph bg-amber-100 text-amber-700 flex items-center justify-center shrink-0 mt-0.5 border border-amber-200">
                        <MapPin className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="text-xs font-bold text-[#7A35E0] uppercase tracking-wider block">
                          Physical Location
                        </span>
                        <p className="text-sm font-bold text-[#2A2540] mt-0.5">{DAYCARE_CONFIG.address}</p>
                        <p className="text-xs text-slate-600 mt-0.5">Secure parking &amp; stroller vestibule available</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3.5">
                      <div className="w-10 h-10 ico-morph bg-emerald-100 text-[#6DB93E] flex items-center justify-center shrink-0 mt-0.5 border border-emerald-200">
                        <Phone className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="text-xs font-bold text-[#6DB93E] uppercase tracking-wider block">
                          Direct Phone
                        </span>
                        <p className="text-sm font-bold text-[#2A2540] mt-0.5">{DAYCARE_CONFIG.phoneFormatted}</p>
                        <p className="text-xs text-slate-600 mt-0.5">Available Mon–Fri, 7:00 AM – 6:00 PM</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3.5">
                      <div className="w-10 h-10 ico-morph bg-purple-100 text-[#7A35E0] flex items-center justify-center shrink-0 mt-0.5 border border-purple-200">
                        <Mail className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="text-xs font-bold text-[#7A35E0] uppercase tracking-wider block">
                          Admissions Email
                        </span>
                        <p className="text-sm font-bold text-[#2A2540] mt-0.5">{DAYCARE_CONFIG.emailFormatted}</p>
                        <p className="text-xs text-slate-600 mt-0.5">We respond within 24 business hours</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3.5">
                      <div className="w-10 h-10 ico-morph bg-pink-100 text-[#F0368A] flex items-center justify-center shrink-0 mt-0.5 border border-pink-200">
                        <Clock className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="text-xs font-bold text-[#F0368A] uppercase tracking-wider block">
                          Operating Hours
                        </span>
                        <p className="text-sm font-bold text-[#2A2540] mt-0.5">{DAYCARE_CONFIG.hours}</p>
                        <p className="text-xs text-slate-600 mt-0.5">Closed on Major Federal Holidays</p>
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-purple-200/60">
                    <button
                      onClick={onOpenTour}
                      className="btn-sprout-yel w-full py-3.5 px-4 text-sm flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <Calendar className="w-4 h-4" />
                      <span>Book an In-Person Campus Tour</span>
                    </button>
                  </div>
                </div>
              </Reveal>

              <Reveal delayIndex={1}>
                <div className="bg-[#2A2540] text-white rounded-3xl p-6 sm:p-7 space-y-3 border border-white/20 shadow-xl">
                  <h4 className="font-heading font-bold text-lg flex items-center gap-2">
                    <Car className="w-5 h-5 text-[#FFC81E]" />
                    <span>Reserved 15-Minute Drop-off Stalls</span>
                  </h4>
                  <p className="text-xs sm:text-sm text-white/80 leading-relaxed">
                    Parents enjoy designated easy-access stalls right in front of our main entrance, with covered stroller parking and electronic sign-in touchscreens in the security foyer.
                  </p>
                </div>
              </Reveal>
            </div>

            {/* Right Column: Direct Message Form */}
            <div className="lg:col-span-7">
              <Reveal delayIndex={1}>
                <div className="glass-lt interactive-card p-6 sm:p-10">
                  {isSubmitted ? (
                    <div className="text-center py-12 space-y-4 step-swap">
                      <div className="w-16 h-16 ico-morph bg-emerald-100 text-[#6DB93E] flex items-center justify-center mx-auto border border-emerald-200">
                        <CheckCircle2 className="w-8 h-8" />
                      </div>
                      <h3 className="font-heading text-2xl sm:text-3xl font-bold text-[#2A2540]">
                        Message Received!
                      </h3>
                      <p className="text-slate-600 text-sm max-w-md mx-auto leading-relaxed">
                        Thank you for reaching out to {DAYCARE_CONFIG.name}. Our admissions director will review your inquiry and contact you shortly.
                      </p>
                      <button
                        onClick={() => {
                          setIsSubmitted(false);
                          setFormData({
                            name: '',
                            email: '',
                            phone: '',
                            childAge: '',
                            message: '',
                            inquiryType: 'general',
                          });
                        }}
                        className="btn-sprout-purple px-6 py-2.5 text-xs cursor-pointer"
                      >
                        Send Another Message
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div>
                        <h3 className="font-heading text-2xl font-bold text-[#2A2540]">
                          Send an Inquiry
                        </h3>
                        <p className="text-xs sm:text-sm text-slate-600 mt-1">
                          Fill out this quick form and we'll get back to you with detailed availability and answers.
                        </p>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-bold text-[#2A2540] mb-1">
                            Your Full Name *
                          </label>
                          <input
                            type="text"
                            required
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            placeholder="e.g. Jessica Miller"
                            className="w-full px-3.5 py-2.5 rounded-xl border border-purple-200 bg-white/90 text-sm text-[#2A2540]"
                          />
                        </div>

                        <div>
                          <label className="block text-xs font-bold text-[#2A2540] mb-1">
                            Email Address *
                          </label>
                          <input
                            type="email"
                            required
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            placeholder="jessica@example.com"
                            className="w-full px-3.5 py-2.5 rounded-xl border border-purple-200 bg-white/90 text-sm text-[#2A2540]"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-bold text-[#2A2540] mb-1">
                            Phone Number *
                          </label>
                          <input
                            type="tel"
                            required
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            placeholder="(555) 000-0000"
                            className="w-full px-3.5 py-2.5 rounded-xl border border-purple-200 bg-white/90 text-sm text-[#2A2540]"
                          />
                        </div>

                        <div>
                          <label className="block text-xs font-bold text-[#2A2540] mb-1">
                            Child's Age / Expected Start
                          </label>
                          <input
                            type="text"
                            value={formData.childAge}
                            onChange={(e) => setFormData({ ...formData, childAge: e.target.value })}
                            placeholder="e.g. 2 years old, Fall start"
                            className="w-full px-3.5 py-2.5 rounded-xl border border-purple-200 bg-white/90 text-sm text-[#2A2540]"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-[#2A2540] mb-1">
                          Inquiry Category
                        </label>
                        <select
                          value={formData.inquiryType}
                          onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                          className="w-full px-3.5 py-2.5 rounded-xl border border-purple-200 bg-white/90 text-sm text-[#2A2540]"
                        >
                          <option value="general">General Program &amp; Curriculum Inquiry</option>
                          <option value="tuition">Tuition Rates &amp; Part-Time Schedules</option>
                          <option value="infant-waitlist">Infant Nursery Waitlist Status</option>
                          <option value="tour">Tour Scheduling Questions</option>
                          <option value="other">Other / Special Request</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-[#2A2540] mb-1">
                          Your Message or Questions *
                        </label>
                        <textarea
                          required
                          rows={4}
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          placeholder="Tell us about your child, questions regarding routines, or your schedule needs..."
                          className="w-full px-3.5 py-2.5 rounded-xl border border-purple-200 bg-white/90 text-sm text-[#2A2540]"
                        />
                      </div>

                      <button
                        type="submit"
                        className="btn-sprout w-full py-3.5 px-6 text-sm flex items-center justify-center gap-2 cursor-pointer"
                      >
                        <Send className="w-4 h-4" />
                        <span>Send Message</span>
                      </button>
                    </form>
                  )}
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
