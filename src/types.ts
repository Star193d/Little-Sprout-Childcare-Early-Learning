export interface ParentGuardianInfo {
  fullName: string;
  relationship: 'Mother' | 'Father' | 'Legal Guardian' | 'Grandparent' | 'Foster Parent' | 'Other' | '';
  phone: string;
  email: string;
  address: string;
  emergencyContactName: string;
  emergencyContactPhone: string;
  emergencyContactRelation: string;
  secondaryParentName?: string;
  secondaryParentPhone?: string;
  secondaryParentRelation?: string;
}

export type ProgramType = 'infant' | 'toddler' | 'preschool' | 'prek';

export type PageId = 'home' | 'about' | 'programs' | 'daily-life' | 'safety' | 'resources' | 'registration' | 'contact';

export interface ChildProfileInfo {
  childFullName: string;
  preferredName: string;
  dob: string;
  gender: 'Female' | 'Male' | 'Non-binary' | 'Prefer not to say' | '';
  programInterest: ProgramType | '';
  desiredStartDate: string;
  daysPerWeek: '2-days' | '3-days' | '5-days' | 'drop-in' | '';
  favoriteActivities: string;
  comfortItems: string;
  likesAndDislikes: string;
  pottyTrainingStatus: 'Fully Trained' | 'In Progress' | 'Not Started' | 'N/A (Infant)' | '';
}

export interface FoodNutritionInfo {
  mealPlanType: 'daycare-provided' | 'parent-provided' | 'hybrid' | '';
  dietaryRestrictions: string[]; // e.g. ['Vegetarian', 'Nut-Free', 'Halal', etc.]
  dietaryNotes: string;
  bottleFeedingDetails?: string; // For infants: formula brand, breastmilk schedule, temperature notes
  specialFeedingSchedule: string;
}

export interface MedicalAllergyInfo {
  hasAllergies: 'none' | 'yes' | '';
  allergyTypes: string[]; // ['Food', 'Medication', 'Environmental', 'Insect']
  allergyDetails: string;
  allergySeverity: 'Mild' | 'Moderate' | 'Severe (Anaphylaxis Risk)' | 'Unknown' | '';
  hasEpiPen: boolean;
  emergencyActionPlan: string;
  pediatricianName: string;
  pediatricianPhone: string;
  pediatricClinic: string;
  chronicConditionsOrMedications: string;
  specialCareInstructions: string;
}

export interface ConsentAgreement {
  agreedToTerms: boolean;
  agreedToMedicalAuthorization: boolean;
  agreedToPhotoRelease: boolean;
  parentSignature: string;
  signatureDate: string;
}

export interface IntakeRegistrationPayload {
  registrationId: string;
  timestamp: string;
  parent: ParentGuardianInfo;
  child: ChildProfileInfo;
  nutrition: FoodNutritionInfo;
  medical: MedicalAllergyInfo;
  consent: ConsentAgreement;
  status: 'Pending Review' | 'Waitlisted' | 'Confirmed';
}

export interface ProgramDetail {
  id: ProgramType;
  name: string;
  ageRange: string;
  tagline: string;
  ratio: string;
  capacity: string;
  color: {
    bg: string;
    border: string;
    badge: string;
    accent: string;
  };
  overview: string;
  developmentGoals: string[];
  keyHighlights: string[];
  sampleActivities: string[];
  tuitionInfo: string;
}

export interface DailyRoutineItem {
  id: string;
  time: string;
  title: string;
  category: 'welcome' | 'learning' | 'meal' | 'outdoor' | 'rest' | 'creative' | 'departure';
  description: string;
  suitableFor: ProgramType[];
  icon: string;
}

export interface TourBookingData {
  parentName: string;
  email: string;
  phone: string;
  childAge: string;
  preferredProgram: ProgramType;
  preferredDate: string;
  preferredTimeSlot: 'morning' | 'midday' | 'afternoon';
  notes?: string;
}
