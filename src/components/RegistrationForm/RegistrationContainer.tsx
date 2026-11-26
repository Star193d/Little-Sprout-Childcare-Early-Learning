import { useState, useRef } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { StepIndicator } from './StepIndicator';
import { Step1ParentInfo } from './Step1ParentInfo';
import { Step2ChildProfile } from './Step2ChildProfile';
import { Step3FoodNutrition } from './Step3FoodNutrition';
import { Step4MedicalAllergy } from './Step4MedicalAllergy';
import { Step5ReviewConsent } from './Step5ReviewConsent';
import { SuccessConfirmation } from './SuccessConfirmation';
import { FloatingBlobs, SectionHeading } from '../MotionPrimitives';
import {
  ParentGuardianInfo,
  ChildProfileInfo,
  FoodNutritionInfo,
  MedicalAllergyInfo,
  ConsentAgreement,
  IntakeRegistrationPayload,
  ProgramType,
} from '../../types';

interface RegistrationContainerProps {
  initialProgram?: ProgramType | null;
}

export function RegistrationContainer({ initialProgram }: RegistrationContainerProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 5;

  const [parent, setParent] = useState<ParentGuardianInfo>({
    fullName: '',
    relationship: '',
    phone: '',
    email: '',
    address: '',
    emergencyContactName: '',
    emergencyContactPhone: '',
    emergencyContactRelation: '',
    secondaryParentName: '',
    secondaryParentPhone: '',
    secondaryParentRelation: '',
  });

  const [child, setChild] = useState<ChildProfileInfo>({
    childFullName: '',
    preferredName: '',
    dob: '',
    gender: '',
    programInterest: initialProgram || 'toddler',
    desiredStartDate: '',
    daysPerWeek: '5-days',
    favoriteActivities: '',
    comfortItems: '',
    likesAndDislikes: '',
    pottyTrainingStatus: '',
  });

  const [nutrition, setNutrition] = useState<FoodNutritionInfo>({
    mealPlanType: 'daycare-provided',
    dietaryRestrictions: ['None (Standard Balanced Menu)'],
    dietaryNotes: '',
    bottleFeedingDetails: '',
    specialFeedingSchedule: '',
  });

  const [medical, setMedical] = useState<MedicalAllergyInfo>({
    hasAllergies: 'none',
    allergyTypes: [],
    allergyDetails: '',
    allergySeverity: '',
    hasEpiPen: false,
    emergencyActionPlan: '',
    pediatricianName: '',
    pediatricianPhone: '',
    pediatricClinic: '',
    chronicConditionsOrMedications: '',
    specialCareInstructions: '',
  });

  const [consent, setConsent] = useState<ConsentAgreement>({
    agreedToTerms: false,
    agreedToMedicalAuthorization: false,
    agreedToPhotoRelease: true,
    parentSignature: '',
    signatureDate: new Date().toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    }),
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedPayload, setSubmittedPayload] = useState<IntakeRegistrationPayload | null>(null);

  const scrollToFormTop = () => {
    if (containerRef.current) {
      containerRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const validateStep = (step: number): boolean => {
    const errs: Record<string, string> = {};

    if (step === 1) {
      if (!parent.fullName.trim()) errs.fullName = 'Full legal name is required';
      if (!parent.relationship) errs.relationship = 'Please select relationship to child';
      if (!parent.phone.trim() || parent.phone.length < 7) errs.phone = 'Valid phone number is required';
      if (!parent.email.trim() || !parent.email.includes('@')) errs.email = 'Valid email address is required';
      if (!parent.emergencyContactName.trim()) errs.emergencyContactName = 'Emergency contact name is required';
      if (!parent.emergencyContactPhone.trim()) errs.emergencyContactPhone = 'Emergency phone is required';
    }

    if (step === 2) {
      if (!child.childFullName.trim()) errs.childFullName = "Child's legal full name is required";
      if (!child.dob) errs.dob = 'Date of birth is required';
      if (!child.programInterest) errs.programInterest = 'Please select a program tier';
      if (!child.daysPerWeek) errs.daysPerWeek = 'Please select schedule frequency';
      if (!child.desiredStartDate) errs.desiredStartDate = 'Desired start date is required';
    }

    if (step === 3) {
      if (!nutrition.mealPlanType) errs.mealPlanType = 'Please select a meal plan option';
      if (nutrition.dietaryRestrictions.length === 0) {
        errs.dietaryRestrictions = 'Please select at least one dietary status (or select None)';
      }
    }

    if (step === 4) {
      if (!medical.hasAllergies) {
        errs.hasAllergies = 'Please explicitly indicate if your child has known allergies';
      } else if (medical.hasAllergies === 'yes') {
        if (medical.allergyTypes.length === 0) errs.allergyTypes = 'Please select at least one allergy category';
        if (!medical.allergyDetails.trim()) errs.allergyDetails = 'Please specify allergen names';
        if (!medical.allergySeverity) errs.allergySeverity = 'Please specify allergy severity';
        if (!medical.emergencyActionPlan.trim()) errs.emergencyActionPlan = 'Emergency protocol and symptoms are required';
      }
    }

    if (step === 5) {
      if (!consent.agreedToTerms) errs.agreedToTerms = 'You must accept the enrollment terms & handbook agreement';
      if (!consent.agreedToMedicalAuthorization) errs.agreedToMedicalAuthorization = 'Emergency medical authorization is required';
      if (!consent.parentSignature.trim()) errs.parentSignature = 'Digital legal signature is required';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleNext = () => {
    if (validateStep(currentStep)) {
      setErrors({});
      setCurrentStep((prev) => Math.min(prev + 1, totalSteps));
      scrollToFormTop();
    }
  };

  const handleBack = () => {
    setErrors({});
    setCurrentStep((prev) => Math.max(prev - 1, 1));
    scrollToFormTop();
  };

  const handleJumpToStep = (stepNumber: number) => {
    setErrors({});
    setCurrentStep(stepNumber);
    scrollToFormTop();
  };

  const handleSubmit = () => {
    if (!validateStep(5)) return;

    setIsSubmitting(true);
    const registrationId = `SDL-${Math.floor(100000 + Math.random() * 900000)}`;
    const payload: IntakeRegistrationPayload = {
      registrationId,
      timestamp: new Date().toLocaleString('en-US', {
        dateStyle: 'medium',
        timeStyle: 'short',
      }),
      parent,
      child,
      nutrition,
      medical,
      consent,
      status: 'Pending Review',
    };

    console.log('[DAYCARE_INTAKE_SUBMISSION]', payload);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmittedPayload(payload);
      scrollToFormTop();
    }, 650);
  };

  const handleResetForm = () => {
    setSubmittedPayload(null);
    setCurrentStep(1);
    setErrors({});
    setParent({
      fullName: '',
      relationship: '',
      phone: '',
      email: '',
      address: '',
      emergencyContactName: '',
      emergencyContactPhone: '',
      emergencyContactRelation: '',
      secondaryParentName: '',
      secondaryParentPhone: '',
      secondaryParentRelation: '',
    });
    setChild({
      childFullName: '',
      preferredName: '',
      dob: '',
      gender: '',
      programInterest: 'toddler',
      desiredStartDate: '',
      daysPerWeek: '5-days',
      favoriteActivities: '',
      comfortItems: '',
      likesAndDislikes: '',
      pottyTrainingStatus: '',
    });
    setNutrition({
      mealPlanType: 'daycare-provided',
      dietaryRestrictions: ['None (Standard Balanced Menu)'],
      dietaryNotes: '',
      bottleFeedingDetails: '',
      specialFeedingSchedule: '',
    });
    setMedical({
      hasAllergies: 'none',
      allergyTypes: [],
      allergyDetails: '',
      allergySeverity: '',
      hasEpiPen: false,
      emergencyActionPlan: '',
      pediatricianName: '',
      pediatricianPhone: '',
      pediatricClinic: '',
      chronicConditionsOrMedications: '',
      specialCareInstructions: '',
    });
    setConsent({
      agreedToTerms: false,
      agreedToMedicalAuthorization: false,
      agreedToPhotoRelease: true,
      parentSignature: '',
      signatureDate: new Date().toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      }),
    });
  };

  return (
    <section id="registration" ref={containerRef} className="py-14 md:py-20 relative overflow-hidden scroll-mt-20">
      <FloatingBlobs variant="light" />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          title="Child Registration & Intake Form"
          subtitle="Complete our secure 5-step intake so we can tailor care, prepare dietary accommodations, and secure classroom placement."
        />

        {!submittedPayload ? (
          <div className="glass-lt interactive-card p-6 sm:p-10 space-y-8">
            <StepIndicator
              currentStep={currentStep}
              totalSteps={totalSteps}
              onStepClick={handleJumpToStep}
            />

            <div key={currentStep} className="pt-2 step-swap">
              {currentStep === 1 && (
                <Step1ParentInfo
                  data={parent}
                  onChange={(d) => setParent({ ...parent, ...d })}
                  errors={errors}
                />
              )}

              {currentStep === 2 && (
                <Step2ChildProfile
                  data={child}
                  onChange={(d) => setChild({ ...child, ...d })}
                  errors={errors}
                />
              )}

              {currentStep === 3 && (
                <Step3FoodNutrition
                  data={nutrition}
                  onChange={(d) => setNutrition({ ...nutrition, ...d })}
                  errors={errors}
                />
              )}

              {currentStep === 4 && (
                <Step4MedicalAllergy
                  data={medical}
                  onChange={(d) => setMedical({ ...medical, ...d })}
                  errors={errors}
                />
              )}

              {currentStep === 5 && (
                <Step5ReviewConsent
                  parent={parent}
                  child={child}
                  nutrition={nutrition}
                  medical={medical}
                  consent={consent}
                  onConsentChange={(d) => setConsent({ ...consent, ...d })}
                  onJumpToStep={handleJumpToStep}
                  onSubmit={handleSubmit}
                  isSubmitting={isSubmitting}
                  errors={errors}
                />
              )}
            </div>

            {currentStep < 5 && (
              <div className="pt-6 border-t border-purple-200/60 flex items-center justify-between gap-4">
                <button
                  type="button"
                  onClick={handleBack}
                  disabled={currentStep === 1}
                  className={`inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full border text-xs sm:text-sm font-bold transition-all ${
                    currentStep === 1
                      ? 'border-slate-200 text-slate-300 cursor-not-allowed bg-white/40'
                      : 'border-purple-200 hover:border-[#7A35E0] text-[#2A2540] bg-white hover:bg-purple-50 cursor-pointer active:scale-98'
                  }`}
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Previous Step</span>
                </button>

                <div className="text-xs text-[#7A35E0] font-bold hidden sm:block uppercase tracking-wider">
                  Step {currentStep} of {totalSteps}
                </div>

                <button
                  type="button"
                  onClick={handleNext}
                  className="btn-sprout-purple inline-flex items-center gap-1.5 px-6 py-2.5 text-xs sm:text-sm cursor-pointer"
                >
                  <span>Continue to Step {currentStep + 1}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            )}
          </div>
        ) : (
          <SuccessConfirmation
            payload={submittedPayload}
            onReset={handleResetForm}
          />
        )}
      </div>
    </section>
  );
}
