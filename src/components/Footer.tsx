import {
  Sun,
  MapPin,
  Phone,
  Mail,
  Clock,
  ShieldCheck,
  Facebook,
  Instagram,
  Youtube,
  Linkedin,
  Calendar,
  UserCheck,
} from 'lucide-react';
import { DAYCARE_CONFIG } from '../data/daycareData';
import { PageId, ProgramType } from '../types';

interface FooterProps {
  onNavigate: (page: PageId) => void;
  onOpenTour: () => void;
  onSelectProgram?: (programId: ProgramType) => void;
}

export function Footer({
  onNavigate,
  onOpenTour,
  onSelectProgram,
}: FooterProps) {
  const handleNav = (page: PageId) => {
    onNavigate(page);
  };

  const handleProgram = (programId: ProgramType) => {
    if (onSelectProgram) {
      onSelectProgram(programId);
    }
    onNavigate('programs');
  };

  return (
    <footer className="bg-[#2A2540] text-white/80 pt-16 pb-10 border-t border-white/15 relative overflow-hidden">
      {/* Subtle Ambient Glows */}
      <div
        className="absolute -top-24 -left-24 w-72 h-72 rounded-full bg-[#7A35E0]/20 blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute -bottom-24 -right-24 w-72 h-72 rounded-full bg-[#F0368A]/15 blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 pb-10 border-b border-white/15">
          {/* Column 1: Brand, Tagline & Short Business Description */}
          <div className="lg:col-span-4 space-y-4">
            <button
              onClick={() => handleNav('home')}
              className="flex items-center gap-3 text-left group cursor-pointer"
            >
              <div className="logo-sprout flex items-center justify-center shrink-0">
                <Sun className="w-4 h-4 text-[#2A2540] rotate-45" />
              </div>
              <div>
                <span className="font-heading font-bold text-lg text-white tracking-tight block leading-none">
                  {DAYCARE_CONFIG.name}
                </span>
                <span className="text-[11px] text-[#FFC81E] font-bold tracking-wide block mt-1">
                  {DAYCARE_CONFIG.subtitle}
                </span>
              </div>
            </button>

            <p className="text-xs text-white/70 leading-relaxed max-w-sm">
              Providing a safe, loving, and stimulating early-learning environment for children ages{' '}
              {DAYCARE_CONFIG.ageRange}. Dedicated to whole-child development, playful inquiry, and balanced organic nutrition.
            </p>

            <div className="pt-1 flex items-center gap-2.5 text-white/75">
              <a
                href={DAYCARE_CONFIG.socials.facebook}
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="w-9 h-9 rounded-full bg-white/10 border border-white/20 flex items-center justify-center hover:text-[#2A2540] hover:bg-[#FFC81E] hover:border-[#FFC81E] transition-all"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href={DAYCARE_CONFIG.socials.instagram}
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-full bg-white/10 border border-white/20 flex items-center justify-center hover:text-white hover:bg-[#F0368A] hover:border-[#F0368A] transition-all"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={DAYCARE_CONFIG.socials.youtube}
                target="_blank"
                rel="noreferrer"
                aria-label="YouTube"
                className="w-9 h-9 rounded-full bg-white/10 border border-white/20 flex items-center justify-center hover:text-white hover:bg-[#7A35E0] hover:border-[#7A35E0] transition-all"
              >
                <Youtube className="w-4 h-4" />
              </a>
              <a
                href={DAYCARE_CONFIG.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="w-9 h-9 rounded-full bg-white/10 border border-white/20 flex items-center justify-center hover:text-[#2A2540] hover:bg-[#FFC81E] hover:border-[#FFC81E] transition-all"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>

            <div className="pt-2 text-xs text-white/70 space-y-1">
              <div className="flex items-center gap-1.5 text-emerald-300 font-semibold text-[11px]">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>{DAYCARE_CONFIG.licenseNumber}</span>
              </div>
              <p className="text-white/55 font-mono text-[11px]">{DAYCARE_CONFIG.ratiosSummary}</p>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-heading text-sm font-bold text-[#FFC81E]">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs text-white/75">
              <li>
                <button onClick={() => handleNav('home')} className="hover:text-[#FFC81E] transition-colors cursor-pointer">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('about')} className="hover:text-[#FFC81E] transition-colors cursor-pointer">
                  About Us
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('programs')} className="hover:text-[#FFC81E] transition-colors cursor-pointer">
                  Our Programs
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('daily-life')} className="hover:text-[#FFC81E] transition-colors cursor-pointer">
                  Daily Life &amp; Routine
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('safety')} className="hover:text-[#FFC81E] transition-colors cursor-pointer">
                  Health &amp; Safety
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('resources')} className="hover:text-[#FFC81E] transition-colors cursor-pointer">
                  Parent Resources &amp; FAQ
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('contact')} className="hover:text-[#FFC81E] transition-colors cursor-pointer">
                  Contact Us
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Programs */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-heading text-sm font-bold text-[#FFC81E]">
              Our Classrooms
            </h4>
            <ul className="space-y-3 text-xs text-white/75">
              <li>
                <button onClick={() => handleProgram('infant')} className="text-left hover:text-white transition-colors cursor-pointer group">
                  <span className="font-semibold text-white group-hover:text-pink-300 block transition-colors">
                    Infant Care
                  </span>
                  <span className="text-[11px] text-white/55">6 Weeks – 18 Months • 1:3 Ratio</span>
                </button>
              </li>
              <li>
                <button onClick={() => handleProgram('toddler')} className="text-left hover:text-white transition-colors cursor-pointer group">
                  <span className="font-semibold text-white group-hover:text-[#FFC81E] block transition-colors">
                    Toddler Program
                  </span>
                  <span className="text-[11px] text-white/55">18 Months – 3 Years • 1:4 Ratio</span>
                </button>
              </li>
              <li>
                <button onClick={() => handleProgram('preschool')} className="text-left hover:text-white transition-colors cursor-pointer group">
                  <span className="font-semibold text-white group-hover:text-sky-300 block transition-colors">
                    Preschool Program
                  </span>
                  <span className="text-[11px] text-white/55">3 – 5 Years • 1:8 Ratio</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Location & Hours */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-heading text-sm font-bold text-[#FFC81E]">
              Location &amp; Hours
            </h4>
            <ul className="space-y-2 text-xs text-white/75">
              <li className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#F0368A] shrink-0 mt-0.5" />
                <span>{DAYCARE_CONFIG.address}</span>
              </li>
              <li className="flex items-center gap-2">
                <Clock className="w-3.5 h-3.5 text-[#FFC81E] shrink-0" />
                <span>{DAYCARE_CONFIG.operatingHours}</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>{DAYCARE_CONFIG.phoneFormatted}</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                <span>{DAYCARE_CONFIG.emailFormatted}</span>
              </li>
            </ul>

            <div className="pt-2 flex flex-col gap-2.5">
              <button
                onClick={onOpenTour}
                className="btn-sprout-purple w-full py-2.5 px-4 text-xs text-center cursor-pointer flex items-center justify-center gap-1.5"
              >
                <Calendar className="w-3.5 h-3.5" />
                <span>Schedule a Tour</span>
              </button>
              <button
                onClick={() => handleNav('registration')}
                className="btn-sprout-yel w-full py-2.5 px-4 text-xs text-center cursor-pointer flex items-center justify-center gap-1.5"
              >
                <UserCheck className="w-3.5 h-3.5" />
                <span>Enroll Your Child</span>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-[11px] text-white/55 gap-3">
          <p>© {new Date().getFullYear()} {DAYCARE_CONFIG.name}. All rights reserved.</p>
          <div className="flex items-center space-x-4">
            <button onClick={() => handleNav('resources')} className="hover:text-[#FFC81E] transition-colors cursor-pointer">
              Privacy &amp; Policies
            </button>
            <span>•</span>
            <button onClick={() => handleNav('resources')} className="hover:text-[#FFC81E] transition-colors cursor-pointer">
              Parent Handbook
            </button>
            <span>•</span>
            <span>{DAYCARE_CONFIG.licenseNumber}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
