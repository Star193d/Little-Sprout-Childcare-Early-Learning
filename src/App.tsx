/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, useRef } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { PageCurtain } from './components/MotionPrimitives';
import { HandprintSvgDefs } from './components/PaintedHandprints';

// Dedicated Full Pages
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ProgramsPage } from './pages/ProgramsPage';
import { DailyLifePage } from './pages/DailyLifePage';
import { SafetyPage } from './pages/SafetyPage';
import { ResourcesPage } from './pages/ResourcesPage';
import { RegistrationPage } from './pages/RegistrationPage';
import { ContactPage } from './pages/ContactPage';

// Modals
import { TourModal } from './components/TourModal';
import { ProgramDetailModal } from './components/ProgramDetailModal';
import { ContactModal } from './components/ContactModal';
import { VideoTourModal } from './components/VideoTourModal';
import { GalleryModal } from './components/GalleryModal';
import { HealthSafetyModal } from './components/HealthSafetyModal';
import { ResourcesModal } from './components/ResourcesModal';
import { PageId, ProgramType } from './types';

export default function App() {
  // Page Navigation State (with hash sync)
  const [currentPage, setCurrentPage] = useState<PageId>('home');
  const [curtainPhase, setCurtainPhase] = useState<'idle' | 'in' | 'out'>('idle');
  const transitionTimersRef = useRef<number[]>([]);

  // Modal states
  const [isTourModalOpen, setIsTourModalOpen] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [isVideoTourModalOpen, setIsVideoTourModalOpen] = useState(false);
  const [isGalleryModalOpen, setIsGalleryModalOpen] = useState(false);
  const [galleryInitialIndex, setGalleryInitialIndex] = useState(0);
  const [isHealthSafetyModalOpen, setIsHealthSafetyModalOpen] = useState(false);
  const [isResourcesModalOpen, setIsResourcesModalOpen] = useState(false);
  const [resourcesDefaultTab] = useState<'faq' | 'handbook' | 'checklist'>('faq');

  // Selected Program for detail modal & enrollment
  const [selectedProgramDetail, setSelectedProgramDetail] = useState<ProgramType | null>(null);
  const [selectedProgramForEnrollment, setSelectedProgramForEnrollment] = useState<ProgramType | null>(null);

  const clearTransitionTimers = () => {
    transitionTimersRef.current.forEach((id) => window.clearTimeout(id));
    transitionTimersRef.current = [];
  };

  // Sync with browser hash on load and popstate
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '') as PageId;
      if (['home', 'about', 'programs', 'daily-life', 'safety', 'resources', 'registration', 'contact'].includes(hash)) {
        setCurrentPage(hash);
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
      clearTransitionTimers();
    };
  }, []);

  const navigateToPage = (page: PageId) => {
    if (page === currentPage) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    const prefersReducedMotion =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) {
      setCurrentPage(page);
      window.location.hash = page;
      window.scrollTo({ top: 0, behavior: 'auto' });
      return;
    }

    clearTransitionTimers();
    setCurtainPhase('in');

    const midTimer = window.setTimeout(() => {
      setCurrentPage(page);
      window.location.hash = page;
      window.scrollTo({ top: 0, behavior: 'auto' });
      setCurtainPhase('out');

      const endTimer = window.setTimeout(() => {
        setCurtainPhase('idle');
      }, 820);
      transitionTimersRef.current.push(endTimer);
    }, 420);

    transitionTimersRef.current.push(midTimer);
  };

  const handleEnrollInProgram = (programId: ProgramType) => {
    setSelectedProgramForEnrollment(programId);
    navigateToPage('registration');
  };

  const handleOpenGallery = (initialIndex: number = 0) => {
    setGalleryInitialIndex(initialIndex);
    setIsGalleryModalOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col text-[#2A2540] font-sans selection:bg-amber-200 selection:text-[#2A2540]">
      {/* Shared SVG Tempera Paint & Crayon Filters for Children's Handprints */}
      <HandprintSvgDefs />

      {/* Blurred Purple-to-Pink Glass Curtain for Page Transitions */}
      <PageCurtain phase={curtainPhase} />

      {/* 1. Floating Frosted Glass Pill Header */}
      <Header
        currentPage={currentPage}
        onNavigate={navigateToPage}
        onOpenTour={() => setIsTourModalOpen(true)}
        onSelectProgram={(programId) => {
          setSelectedProgramDetail(programId);
          navigateToPage('programs');
        }}
      />

      {/* 2. Main Dedicated Page Views */}
      <main className="flex-1">
        {currentPage === 'home' && (
          <HomePage
            onNavigate={navigateToPage}
            onOpenTour={() => setIsTourModalOpen(true)}
            onOpenContact={() => setIsContactModalOpen(true)}
            onOpenVideoTour={() => setIsVideoTourModalOpen(true)}
            onOpenGallery={handleOpenGallery}
            onSelectProgram={(programId) => {
              setSelectedProgramDetail(programId);
              navigateToPage('programs');
            }}
          />
        )}

        {currentPage === 'about' && (
          <AboutPage
            onNavigate={navigateToPage}
            onOpenTour={() => setIsTourModalOpen(true)}
            onOpenVideoTour={() => setIsVideoTourModalOpen(true)}
          />
        )}

        {currentPage === 'programs' && (
          <ProgramsPage
            onNavigate={navigateToPage}
            onOpenTour={() => setIsTourModalOpen(true)}
            onEnrollInProgram={handleEnrollInProgram}
            onSelectProgramDetail={(programId) => setSelectedProgramDetail(programId)}
          />
        )}

        {currentPage === 'daily-life' && (
          <DailyLifePage
            onNavigate={navigateToPage}
            onOpenTour={() => setIsTourModalOpen(true)}
            onOpenGallery={handleOpenGallery}
          />
        )}

        {currentPage === 'safety' && (
          <SafetyPage
            onNavigate={navigateToPage}
            onOpenTour={() => setIsTourModalOpen(true)}
          />
        )}

        {currentPage === 'resources' && (
          <ResourcesPage
            onNavigate={navigateToPage}
            onOpenTour={() => setIsTourModalOpen(true)}
            onOpenContact={() => setIsContactModalOpen(true)}
          />
        )}

        {currentPage === 'registration' && (
          <RegistrationPage
            initialProgram={selectedProgramForEnrollment}
            onNavigate={navigateToPage}
            onOpenTour={() => setIsTourModalOpen(true)}
          />
        )}

        {currentPage === 'contact' && (
          <ContactPage
            onNavigate={navigateToPage}
            onOpenTour={() => setIsTourModalOpen(true)}
          />
        )}
      </main>

      {/* 3. Footer */}
      <Footer
        onNavigate={navigateToPage}
        onOpenTour={() => setIsTourModalOpen(true)}
        onSelectProgram={(programId) => {
          setSelectedProgramDetail(programId);
          navigateToPage('programs');
        }}
      />

      {/* Interactive Modals */}
      <TourModal
        isOpen={isTourModalOpen}
        onClose={() => setIsTourModalOpen(false)}
      />

      <ProgramDetailModal
        programId={selectedProgramDetail}
        onClose={() => setSelectedProgramDetail(null)}
        onEnroll={handleEnrollInProgram}
        onOpenTour={() => setIsTourModalOpen(true)}
      />

      <ContactModal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
      />

      <VideoTourModal
        isOpen={isVideoTourModalOpen}
        onClose={() => setIsVideoTourModalOpen(false)}
        onOpenTour={() => setIsTourModalOpen(true)}
      />

      <GalleryModal
        isOpen={isGalleryModalOpen}
        initialIndex={galleryInitialIndex}
        onClose={() => setIsGalleryModalOpen(false)}
      />

      <HealthSafetyModal
        isOpen={isHealthSafetyModalOpen}
        onClose={() => setIsHealthSafetyModalOpen(false)}
      />

      <ResourcesModal
        isOpen={isResourcesModalOpen}
        defaultTab={resourcesDefaultTab}
        onClose={() => setIsResourcesModalOpen(false)}
      />
    </div>
  );
}
