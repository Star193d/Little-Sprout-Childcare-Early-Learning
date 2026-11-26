import { useState, useEffect, useRef } from 'react';
import {
  Menu,
  X,
  Calendar,
  UserCheck,
  ChevronDown,
  Baby,
  Smile,
  GraduationCap,
  Sparkles,
  ShieldCheck,
  BookOpen,
  HelpCircle,
  Clock3,
  ArrowRight,
  Sun,
} from 'lucide-react';
import { PageId, ProgramType } from '../types';

interface HeaderProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
  onOpenTour: () => void;
  onSelectProgram?: (programId: ProgramType) => void;
}

export function Header({
  currentPage,
  onNavigate,
  onOpenTour,
  onSelectProgram,
}: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [programsDropdownOpen, setProgramsDropdownOpen] = useState(false);
  const [mobileProgramsExpanded, setMobileProgramsExpanded] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);

  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setProgramsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleNavClick = (page: PageId) => {
    setMobileMenuOpen(false);
    setProgramsDropdownOpen(false);
    onNavigate(page);
  };

  const handleProgramSelect = (programId: ProgramType) => {
    setProgramsDropdownOpen(false);
    setMobileMenuOpen(false);
    if (onSelectProgram) {
      onSelectProgram(programId);
    }
    onNavigate('programs');
  };

  const linkClass = (active: boolean) =>
    `text-sm px-3 py-1.5 rounded-full whitespace-nowrap shrink-0 transition-all cursor-pointer border ${
      active
        ? isScrolled
          ? 'font-bold bg-[#7A35E0]/12 text-[#7A35E0] border-[#7A35E0]/30'
          : 'font-bold bg-white/25 text-white border-white/50 shadow-xs'
        : isScrolled
        ? 'font-semibold text-[#2A2540]/85 border-transparent hover:text-[#7A35E0] hover:bg-[#7A35E0]/8 hover:border-[#7A35E0]/20'
        : 'font-semibold text-white/90 border-transparent hover:text-white hover:bg-white/15 hover:border-white/30'
    }`;

  return (
    <>
      <header
        className={`fixed top-3.5 left-1/2 -translate-x-1/2 w-[min(1180px,calc(100%-24px))] z-50 rounded-full px-4 sm:px-6 py-2.5 site-h ${
          isScrolled ? 'scrolled' : ''
        }`}
      >
        <div className="flex items-center justify-between gap-3">
          {/* Logo & Brand (Single-line wordmark + rotating sprout mark) */}
          <button
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-2.5 text-left group cursor-pointer shrink-0 whitespace-nowrap"
          >
            <div className="logo-sprout flex items-center justify-center shrink-0">
              <Sun className="w-4 h-4 text-[#2A2540] rotate-45" />
            </div>
            <span
              className={`font-heading font-bold text-lg sm:text-xl tracking-tight leading-none transition-colors ${
                isScrolled ? 'text-[#7A35E0]' : 'text-white'
              }`}
            >
              Sunny Days Learning
            </span>
          </button>

          {/* Desktop Nav Links */}
          <nav className="hidden xl:flex items-center gap-1" aria-label="Main Navigation">
            <button onClick={() => handleNavClick('home')} className={linkClass(currentPage === 'home')}>
              Home
            </button>

            <button onClick={() => handleNavClick('about')} className={linkClass(currentPage === 'about')}>
              About Us
            </button>

            {/* Programs Dropdown Button & Menu */}
            <div className="relative shrink-0" ref={dropdownRef}>
              <button
                id="header-programs-dropdown-btn"
                onClick={() => setProgramsDropdownOpen((prev) => !prev)}
                aria-expanded={programsDropdownOpen}
                aria-haspopup="true"
                className={`${linkClass(programsDropdownOpen || currentPage === 'programs')} flex items-center gap-1`}
              >
                <span>Programs</span>
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${
                    programsDropdownOpen ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {/* Frosted Glass Dropdown Menu */}
              {programsDropdownOpen && (
                <div
                  className="absolute left-1/2 -translate-x-1/2 mt-3 w-[470px] glass-lt p-3 z-50 step-swap text-[#2A2540]"
                  role="menu"
                >
                  <div className="p-2 pb-2 border-b border-purple-200/60 flex items-center justify-between">
                    <span className="text-xs font-bold text-[#7A35E0] flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-[#FFC81E]" />
                      Classroom Programs
                    </span>
                    <button
                      onClick={() => handleNavClick('programs')}
                      className="text-xs text-[#7A35E0] hover:text-[#F0368A] font-bold flex items-center gap-1 cursor-pointer"
                    >
                      <span>All Programs</span>
                      <ArrowRight className="w-3 h-3" />
                    </button>
                  </div>

                  <div className="grid grid-cols-1 gap-1.5 py-2">
                    <button
                      onClick={() => handleProgramSelect('infant')}
                      className="flex items-center gap-3 p-2.5 rounded-2xl hover:bg-pink-50/85 border border-transparent hover:border-pink-200 transition-all text-left group cursor-pointer"
                    >
                      <div className="w-9 h-9 rounded-xl bg-pink-100 text-[#F0368A] flex items-center justify-center shrink-0 border border-pink-200 group-hover:scale-105 transition-transform">
                        <Baby className="w-5 h-5" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-bold text-[#2A2540] group-hover:text-[#F0368A]">
                            Infant Care
                          </span>
                          <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-pink-100 text-[#F0368A] border border-pink-200">
                            6 Wks – 18 Mos
                          </span>
                        </div>
                        <p className="text-xs text-slate-600 line-clamp-1 mt-0.5">
                          Gentle bonding, sensory tummy-time &amp; loving caregivers
                        </p>
                      </div>
                    </button>

                    <button
                      onClick={() => handleProgramSelect('toddler')}
                      className="flex items-center gap-3 p-2.5 rounded-2xl hover:bg-amber-50/85 border border-transparent hover:border-amber-200 transition-all text-left group cursor-pointer"
                    >
                      <div className="w-9 h-9 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center shrink-0 border border-amber-200 group-hover:scale-105 transition-transform">
                        <Smile className="w-5 h-5" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-bold text-[#2A2540] group-hover:text-amber-700">
                            Toddler Program
                          </span>
                          <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-amber-100 text-amber-800 border border-amber-200">
                            18 Mos – 3 Yrs
                          </span>
                        </div>
                        <p className="text-xs text-slate-600 line-clamp-1 mt-0.5">
                          Curiosity, motor exploration, early words &amp; active play
                        </p>
                      </div>
                    </button>

                    <button
                      onClick={() => handleProgramSelect('preschool')}
                      className="flex items-center gap-3 p-2.5 rounded-2xl hover:bg-purple-50/85 border border-transparent hover:border-purple-200 transition-all text-left group cursor-pointer"
                    >
                      <div className="w-9 h-9 rounded-xl bg-purple-100 text-[#7A35E0] flex items-center justify-center shrink-0 border border-purple-200 group-hover:scale-105 transition-transform">
                        <GraduationCap className="w-5 h-5" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-bold text-[#2A2540] group-hover:text-[#7A35E0]">
                            Preschool Program
                          </span>
                          <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-purple-100 text-[#7A35E0] border border-purple-200">
                            3 – 5 Years
                          </span>
                        </div>
                        <p className="text-xs text-slate-600 line-clamp-1 mt-0.5">
                          Kindergarten readiness, phonics, STEM &amp; social confidence
                        </p>
                      </div>
                    </button>
                  </div>

                  <div className="pt-2 border-t border-purple-200/60 grid grid-cols-2 gap-1.5 bg-white/55 p-2 rounded-2xl">
                    <button
                      onClick={() => handleNavClick('daily-life')}
                      className="flex items-center gap-2 p-2 rounded-xl hover:bg-white text-left text-xs font-semibold text-[#2A2540] hover:text-[#7A35E0] transition-all border border-transparent hover:border-purple-200 cursor-pointer"
                    >
                      <Clock3 className="w-4 h-4 text-amber-500 shrink-0" />
                      <span>Daily Life &amp; Routine</span>
                    </button>

                    <button
                      onClick={() => handleNavClick('safety')}
                      className="flex items-center gap-2 p-2 rounded-xl hover:bg-white text-left text-xs font-semibold text-[#2A2540] hover:text-[#7A35E0] transition-all border border-transparent hover:border-purple-200 cursor-pointer"
                    >
                      <ShieldCheck className="w-4 h-4 text-emerald-500 shrink-0" />
                      <span>Health &amp; Safety</span>
                    </button>

                    <button
                      onClick={() => handleNavClick('resources')}
                      className="flex items-center gap-2 p-2 rounded-xl hover:bg-white text-left text-xs font-semibold text-[#2A2540] hover:text-[#7A35E0] transition-all border border-transparent hover:border-purple-200 cursor-pointer"
                    >
                      <BookOpen className="w-4 h-4 text-[#7A35E0] shrink-0" />
                      <span>Parent Resources</span>
                    </button>

                    <button
                      onClick={() => handleNavClick('resources')}
                      className="flex items-center gap-2 p-2 rounded-xl hover:bg-white text-left text-xs font-semibold text-[#2A2540] hover:text-[#7A35E0] transition-all border border-transparent hover:border-purple-200 cursor-pointer"
                    >
                      <HelpCircle className="w-4 h-4 text-[#F0368A] shrink-0" />
                      <span>Parent FAQs</span>
                    </button>
                  </div>
                </div>
              )}
            </div>

            <button onClick={() => handleNavClick('daily-life')} className={linkClass(currentPage === 'daily-life')}>
              Daily Life
            </button>

            <button onClick={() => handleNavClick('safety')} className={linkClass(currentPage === 'safety')}>
              Safety
            </button>

            <button onClick={() => handleNavClick('resources')} className={linkClass(currentPage === 'resources')}>
              Resources
            </button>

            <button onClick={() => handleNavClick('contact')} className={linkClass(currentPage === 'contact')}>
              Contact
            </button>
          </nav>

          {/* Desktop CTA Action Buttons */}
          <div className="hidden md:flex items-center gap-2.5 shrink-0">
            <button
              id="header-schedule-tour-btn"
              onClick={onOpenTour}
              className={`inline-flex items-center gap-1.5 px-4 py-2 text-xs lg:text-sm font-bold rounded-full whitespace-nowrap shrink-0 cursor-pointer border ${
                isScrolled
                  ? 'bg-[#7A35E0]/10 hover:bg-[#7A35E0]/18 text-[#7A35E0] border-[#7A35E0]/35'
                  : 'btn-sprout-ghost text-white'
              }`}
            >
              <Calendar className="w-3.5 h-3.5 shrink-0" />
              <span>Schedule Tour</span>
            </button>

            <button
              id="header-enroll-child-btn"
              onClick={() => handleNavClick('registration')}
              className="btn-sprout-yel inline-flex items-center gap-1.5 px-4.5 py-2 text-xs lg:text-sm whitespace-nowrap shrink-0 cursor-pointer"
            >
              <UserCheck className="w-3.5 h-3.5 shrink-0" />
              <span>Enroll Your Child</span>
            </button>
          </div>

          {/* Mobile menu toggle */}
          <div className="flex items-center xl:hidden shrink-0">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 rounded-full border cursor-pointer ${
                isScrolled
                  ? 'text-[#2A2540] bg-[#7A35E0]/10 border-[#7A35E0]/25 hover:bg-[#7A35E0]/15'
                  : 'text-white bg-white/20 border-white/45 hover:bg-white/30'
              }`}
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Frosted Glass Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-x-3 top-20 z-50 xl:hidden glass-dark text-white p-5 space-y-3 step-swap max-h-[80vh] overflow-y-auto">
          <div className="flex flex-col space-y-1.5">
            <button
              onClick={() => handleNavClick('home')}
              className={`text-left px-3.5 py-2.5 text-sm rounded-2xl font-bold border ${
                currentPage === 'home'
                  ? 'bg-white/25 border-white/45 text-white'
                  : 'border-transparent text-white/90 hover:bg-white/10'
              }`}
            >
              Home
            </button>
            <button
              onClick={() => handleNavClick('about')}
              className={`text-left px-3.5 py-2.5 text-sm rounded-2xl font-bold border ${
                currentPage === 'about'
                  ? 'bg-white/25 border-white/45 text-white'
                  : 'border-transparent text-white/90 hover:bg-white/10'
              }`}
            >
              About Us
            </button>

            <div className="rounded-2xl bg-white/10 border border-white/20 p-2.5 space-y-1.5">
              <button
                onClick={() => setMobileProgramsExpanded(!mobileProgramsExpanded)}
                className="w-full flex items-center justify-between px-2 py-1 text-sm font-bold text-white"
              >
                <span className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-[#FFC81E]" />
                  Programs &amp; Classrooms
                </span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform ${mobileProgramsExpanded ? 'rotate-180' : ''}`}
                />
              </button>

              {mobileProgramsExpanded && (
                <div className="space-y-1 pl-2 pt-1 border-l-2 border-white/30 ml-2">
                  <button
                    onClick={() => handleProgramSelect('infant')}
                    className="w-full flex items-center justify-between p-2 text-xs font-semibold text-white/90 hover:bg-white/15 rounded-xl cursor-pointer"
                  >
                    <span>🍼 Infant Care (6 Wks – 18 Mos)</span>
                  </button>
                  <button
                    onClick={() => handleProgramSelect('toddler')}
                    className="w-full flex items-center justify-between p-2 text-xs font-semibold text-white/90 hover:bg-white/15 rounded-xl cursor-pointer"
                  >
                    <span>🧸 Toddler Program (18 Mos – 3 Yrs)</span>
                  </button>
                  <button
                    onClick={() => handleProgramSelect('preschool')}
                    className="w-full flex items-center justify-between p-2 text-xs font-semibold text-white/90 hover:bg-white/15 rounded-xl cursor-pointer"
                  >
                    <span>🎨 Preschool Program (3 – 5 Yrs)</span>
                  </button>
                  <button
                    onClick={() => handleNavClick('programs')}
                    className="w-full flex items-center gap-2 p-2 text-xs font-bold text-[#FFC81E] hover:bg-white/15 rounded-xl cursor-pointer"
                  >
                    <ArrowRight className="w-3.5 h-3.5" />
                    <span>View All Programs Overview</span>
                  </button>
                </div>
              )}
            </div>

            <button
              onClick={() => handleNavClick('daily-life')}
              className={`text-left px-3.5 py-2.5 text-sm rounded-2xl font-bold border ${
                currentPage === 'daily-life'
                  ? 'bg-white/25 border-white/45 text-white'
                  : 'border-transparent text-white/90 hover:bg-white/10'
              }`}
            >
              Daily Life &amp; Routine
            </button>

            <button
              onClick={() => handleNavClick('safety')}
              className={`text-left px-3.5 py-2.5 text-sm rounded-2xl font-bold border ${
                currentPage === 'safety'
                  ? 'bg-white/25 border-white/45 text-white'
                  : 'border-transparent text-white/90 hover:bg-white/10'
              }`}
            >
              Health &amp; Safety
            </button>

            <button
              onClick={() => handleNavClick('resources')}
              className={`text-left px-3.5 py-2.5 text-sm rounded-2xl font-bold border ${
                currentPage === 'resources'
                  ? 'bg-white/25 border-white/45 text-white'
                  : 'border-transparent text-white/90 hover:bg-white/10'
              }`}
            >
              Parent Resources &amp; FAQ
            </button>

            <button
              onClick={() => handleNavClick('contact')}
              className={`text-left px-3.5 py-2.5 text-sm rounded-2xl font-bold border ${
                currentPage === 'contact'
                  ? 'bg-white/25 border-white/45 text-white'
                  : 'border-transparent text-white/90 hover:bg-white/10'
              }`}
            >
              Contact
            </button>
          </div>

          <div className="pt-3 border-t border-white/20 flex flex-col gap-2.5">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenTour();
              }}
              className="btn-sprout-ghost w-full py-2.5 px-4 text-center font-bold text-xs text-white cursor-pointer"
            >
              Schedule Tour
            </button>
            <button
              onClick={() => handleNavClick('registration')}
              className="btn-sprout-yel w-full py-2.5 px-4 text-center font-bold text-xs cursor-pointer"
            >
              Enroll Your Child
            </button>
          </div>
        </div>
      )}
    </>
  );
}
