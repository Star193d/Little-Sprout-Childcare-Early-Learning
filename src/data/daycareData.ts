import { ProgramDetail, DailyRoutineItem } from '../types';
import heroCreativePlay from '../assets/images/hero_creative_play_1787654144518.jpg';
import heroOutdoorPlay from '../assets/images/hero_outdoor_play_1787654156982.jpg';
import heroStorytime from '../assets/images/hero_storytime_1787654169801.jpg';
import heroMealtime from '../assets/images/hero_mealtime_1787654181324.jpg';
import heroLearningActivity from '../assets/images/hero_learning_activity_1787654195907.jpg';

export const DAYCARE_IMAGES = {
  creativePlay: heroCreativePlay,
  outdoorPlay: heroOutdoorPlay,
  storytime: heroStorytime,
  mealtime: heroMealtime,
  learningActivity: heroLearningActivity,
};

export const DAYCARE_CONFIG = {
  name: 'Sunny Days Learning',
  subtitle: 'Daycare • Learn • Grow • Shine',
  tagline: 'A Safe, Fun & Nurturing Home',
  subheadline: 'Where Little Minds Grow, Learn and Shine Bright',
  description: 'Sunny Days Learning is a trusted daycare and early learning center committed to providing a safe, loving and stimulating environment for children aged 6 weeks to 5 years.',
  ageRange: '6 Weeks to 5 Years',
  operatingHours: 'Mon – Fri | 7:00 AM – 6:00 PM',
  hours: 'Mon – Fri | 7:00 AM – 6:00 PM',
  address: '123 Learning Lane, Sunshine City',
  addressPlaceholder: '[ADDRESS / LOCATION]',
  phone: '[PHONE_NUMBER]',
  phoneFormatted: '(555) 123-4567',
  email: '[EMAIL]',
  emailFormatted: 'hello@sunnydayslearning.com',
  emergencyLine: '[EMERGENCY_PHONE]',
  licenseNumber: 'State Childcare License #SDL-84920-E',
  ratiosSummary: 'Infants 1:3 • Toddlers 1:4 • Preschool 1:8',
  socials: {
    facebook: 'https://facebook.com',
    instagram: 'https://instagram.com',
    youtube: 'https://youtube.com',
    linkedin: 'https://linkedin.com'
  }
};

export const TRUST_STRIP_ITEMS = [
  {
    id: 'safe-secure',
    title: 'Safe & Secure',
    description: 'A clean, secure and caring environment',
    icon: 'Shield',
    color: 'purple',
    bg: 'bg-purple-50/80',
    border: 'border-purple-100',
    badgeBg: 'bg-purple-100 text-purple-600'
  },
  {
    id: 'early-learning',
    title: 'Early Learning',
    description: 'Play-based and structured activities',
    icon: 'BookOpen',
    color: 'pink',
    bg: 'bg-pink-50/80',
    border: 'border-pink-100',
    badgeBg: 'bg-pink-100 text-pink-600'
  },
  {
    id: 'healthy-meals',
    title: 'Healthy Meals',
    description: 'Nutritious, balanced and fresh meals',
    icon: 'Heart',
    color: 'green',
    bg: 'bg-emerald-50/80',
    border: 'border-emerald-100',
    badgeBg: 'bg-emerald-100 text-emerald-600'
  },
  {
    id: 'caring-pros',
    title: 'Caring Professionals',
    description: 'Qualified and experienced caregivers',
    icon: 'Users',
    color: 'blue',
    bg: 'bg-blue-50/80',
    border: 'border-blue-100',
    badgeBg: 'bg-blue-100 text-blue-600'
  }
];

export const PROGRAMS: ProgramDetail[] = [
  {
    id: 'infant',
    name: 'Infant Care',
    ageRange: '6 Weeks – 18 Months',
    tagline: 'A loving and safe space for babies to explore and grow.',
    ratio: '1 : 3 Caregiver Ratio',
    capacity: 'Max 6 babies per nursery suite',
    color: {
      bg: 'bg-[#FFF1F2]',
      border: 'border-pink-200',
      badge: 'bg-pink-100 text-pink-700 border-pink-200',
      accent: 'text-pink-600'
    },
    overview: 'Our cozy infant nursery provides gentle bonding, responsive cuddles, individualized nap/feeding schedules, and tummy-time sensory play in a calming shoeless space.',
    developmentGoals: [
      'Tummy-time strength & motor milestones',
      'High-contrast visual tracking & soft toys',
      'Babble turn-taking & early baby sign language',
      'Secure emotional bonding with primary educator'
    ],
    keyHighlights: [
      'Individualized bottle & nap logs updated live on parent app',
      'Rocking chairs & private nursing suite for visiting parents',
      'Daily sensory tummy-time mat sessions with soft natural lighting'
    ],
    sampleActivities: [
      'Sensory fabric exploration & ribbon rings',
      'Sing-along mirror games & gentle baby massage',
      'Buggy strolls in our shaded garden'
    ],
    tuitionInfo: '[TUITION_RATES] — Flexible 3 or 5-day infant schedules'
  },
  {
    id: 'toddler',
    name: 'Toddler Program',
    ageRange: '18 Months – 3 Years',
    tagline: 'Nurturing independence and curiosity through play.',
    ratio: '1 : 4 Caregiver Ratio',
    capacity: 'Max 8 toddlers per discovery room',
    color: {
      bg: 'bg-[#FEFCE8]',
      border: 'border-amber-200',
      badge: 'bg-amber-100 text-amber-800 border-amber-200',
      accent: 'text-amber-600'
    },
    overview: 'Toddlers explore active gross motor play, early language development, sensory discovery tables, arts and crafts, and supportive social sharing.',
    developmentGoals: [
      'Gross motor coordination: climbing, dancing, balancing',
      'Vocabulary building & multi-word expression',
      'Parallel to cooperative play & social turn-taking',
      'Gentle potty-training readiness & handwashing routines'
    ],
    keyHighlights: [
      'Indoor soft-foam climbing landscape & obstacle paths',
      'Sensory water, sand, and kinetic play stations',
      'Daily music & movement circle time'
    ],
    sampleActivities: [
      'Finger painting with edible safe pigments',
      'Sorting colors and shapes with natural wooden blocks',
      'Caring for classroom potted herbs and flowers'
    ],
    tuitionInfo: '[TUITION_RATES] — 2, 3, or 5 full-day schedules'
  },
  {
    id: 'preschool',
    name: 'Preschool Program',
    ageRange: '3 – 5 Years',
    tagline: 'Building strong foundations for a bright future.',
    ratio: '1 : 8 Caregiver Ratio',
    capacity: 'Max 16 children with 2 co-teachers',
    color: {
      bg: 'bg-[#EFF6FF]',
      border: 'border-blue-200',
      badge: 'bg-blue-100 text-blue-800 border-blue-200',
      accent: 'text-blue-600'
    },
    overview: 'Preschoolers dive into inquiry-led STEM activities, phonics awareness, creative storytelling, beginner math concepts, and collaborative project building.',
    developmentGoals: [
      'Phonics awareness, rhyming, and name writing',
      'Number sense (counting 1-20, spatial patterns & volume)',
      'Emotional self-regulation and peer problem solving',
      'Fine motor mastery with child-safe scissors and drawing'
    ],
    keyHighlights: [
      'Maker space with building blocks and natural loose parts',
      'Weekly music immersion & beginner sign language',
      'Dedicated quiet reading nook with curated children’s books'
    ],
    sampleActivities: [
      'Hands-on plant & nature science investigations',
      'Building bridge structures using magnetic tiles',
      'Dramatic play: veterinarian clinic, grocery market, space exploration'
    ],
    tuitionInfo: '[TUITION_RATES] — Part-time or Full-time 5-day care'
  }
];

export const STATS = [
  {
    value: '150+',
    label: 'Happy Children',
    icon: 'Smile',
    color: 'text-blue-600',
    bg: 'bg-blue-50'
  },
  {
    value: '10+',
    label: 'Years of Experience',
    icon: 'Calendar',
    color: 'text-purple-600',
    bg: 'bg-purple-50'
  },
  {
    value: '98%',
    label: 'Parent Satisfaction',
    icon: 'Star',
    color: 'text-amber-500',
    bg: 'bg-amber-50'
  },
  {
    value: '1',
    label: 'Safe & Caring Location',
    icon: 'Home',
    color: 'text-purple-600',
    bg: 'bg-purple-50'
  }
];

export const WHY_PARENTS_TRUST_US = [
  'Qualified & Caring Staff',
  'Safe & Child-Friendly Facilities',
  'Engaging Learning Activities',
  'Nutritious Meals & Snacks',
  'Regular Progress Updates',
  'Open Communication with Parents'
];

export const CORE_VALUES = [
  {
    id: 'safety',
    title: 'Safety & Hygiene First',
    description: 'Controlled visitor access, 100% CPR-certified staff, and hospital-grade sanitization for complete peace of mind.',
    icon: 'ShieldCheck',
    highlights: ['Secure PIN entry vestibule', 'Daily eco-safe sanitization', 'MERV-13 air purifiers']
  },
  {
    id: 'nurturing',
    title: 'Warm Nurturing Bond',
    description: 'Loving educators dedicated to emotional security, responsive cuddles, and positive behavioral guidance.',
    icon: 'HeartHandshake',
    highlights: ['Low teacher-to-child ratios', 'Gentle milestone pacing', 'Warm daily emotional check-ins']
  },
  {
    id: 'learning',
    title: 'Playful Early Learning',
    description: 'Inquiry-led STEM, sensory discovery, creative arts, and phonics tailored to every developmental stage.',
    icon: 'Sparkles',
    highlights: ['Tactile loose-parts play', 'Language & sign immersion', 'Creative studio exploration']
  },
  {
    id: 'nutrition',
    title: 'Wholesome Nutrition',
    description: 'Scratch-cooked organic meals, fresh fruit snacks, and nut-safe personalized allergy protocols.',
    icon: 'Apple',
    highlights: ['100% Organic produce', 'Prepared fresh daily', 'Nut-free facility']
  }
];

export const SAMPLE_TESTIMONIAL = {
  quote: "Sunny Days Learning has been a wonderful place for my child. The teachers are caring, the environment is safe, and my child comes home happy every day!",
  author: "Parent of a 4-year-old",
  rating: 5,
  isSample: true
};

export const TESTIMONIALS = [
  {
    quote: "Sunny Days Learning has been an absolute blessing for our family. Our daughter runs in with a huge smile every single morning!",
    author: "Sarah & David M.",
    child: "Parent of 3-Year-Old (Toddler Program)",
    program: "Toddler Program",
    rating: 5
  },
  {
    quote: "The teachers are extraordinarily caring, communicative, and attentive. The daily app updates and photos bring so much joy to our workdays.",
    author: "Michael T.",
    child: "Parent of 11-Month-Old (Infant Care)",
    program: "Infant Care",
    rating: 5
  },
  {
    quote: "The preschool curriculum is wonderful. Our son has grown so confident in his early reading, social skills, and science curiosity.",
    author: "Elena R.",
    child: "Parent of 4-Year-Old (Preschool Program)",
    program: "Preschool Program",
    rating: 5
  }
];



export const PROGRAM_DETAILS: Record<string, ProgramDetail> = {
  infant: PROGRAMS[0],
  toddler: PROGRAMS[1],
  preschool: PROGRAMS[2],
};

export const STAFF_RATIOS = [
  {
    program: 'Infant Nursery',
    age: '6 Weeks – 18 Months',
    ratio: '1 : 3',
    stateLimit: '1 : 4 Max',
    focus: 'Primary caregiver attachment, individual feeding & sleeping rhythms, gentle floor play.'
  },
  {
    program: 'Toddler Discovery',
    age: '18 Months – 3 Years',
    ratio: '1 : 4',
    stateLimit: '1 : 6 Max',
    focus: 'Language explosion, gentle potty independence, gross motor coordination, sharing circles.'
  },
  {
    program: 'Preschool & Pre-K',
    age: '3 – 5 Years',
    ratio: '1 : 8',
    stateLimit: '1 : 10 Max',
    focus: 'Phonics, early STEM discovery, collaborative problem solving, emotional self-regulation.'
  }
];

export const GALLERY_ITEMS = [
  {
    id: 1,
    title: 'Hands-On STEM & Block Building',
    category: 'Learning',
    imageUrl: DAYCARE_IMAGES.learningActivity,
    src: DAYCARE_IMAGES.learningActivity,
    description: 'Developing spatial reasoning, fine-motor coordination, and teamwork with wooden blocks.'
  },
  {
    id: 2,
    title: 'Creative Arts & Finger Painting',
    category: 'Arts & Crafts',
    imageUrl: DAYCARE_IMAGES.creativePlay,
    src: DAYCARE_IMAGES.creativePlay,
    description: 'Exploring colors, textures, and self-expression with non-toxic washable art materials.'
  },
  {
    id: 3,
    title: 'Interactive Storytime & Reading Circle',
    category: 'Reading',
    imageUrl: DAYCARE_IMAGES.storytime,
    src: DAYCARE_IMAGES.storytime,
    description: 'Early literacy, language enrichment, and empathetic listening with our caring educators.'
  },
  {
    id: 4,
    title: 'Outdoor Nature & Sensory Garden',
    category: 'Outdoor',
    imageUrl: DAYCARE_IMAGES.outdoorPlay,
    src: DAYCARE_IMAGES.outdoorPlay,
    description: 'Fresh air running, sand play, tricycle riding, and vegetable planting.'
  },
  {
    id: 5,
    title: 'Music & Movement Exploration',
    category: 'Music',
    imageUrl: DAYCARE_IMAGES.creativePlay,
    src: DAYCARE_IMAGES.creativePlay,
    description: 'Percussion instruments, joyful songs, rhythm sticks, and dance games.'
  },
  {
    id: 6,
    title: 'Warm Wholesome Family Dining',
    category: 'Nutrition',
    imageUrl: DAYCARE_IMAGES.mealtime,
    src: DAYCARE_IMAGES.mealtime,
    description: 'Organic family-style meals fostering healthy eating habits and cheerful table conversation.'
  }
];

export const DAILY_ROUTINE_SCHEDULE = [
  {
    id: 'r1',
    time: '7:00 AM – 8:30 AM',
    title: 'Warm Welcome & Free Choice Discovery',
    category: 'welcome' as const,
    description: 'Gentle check-in with teacher greeting, soft morning music, quiet puzzles, drawing, and open-ended table toys.',
    suitableFor: ['infant', 'toddler', 'preschool'] as ('infant' | 'toddler' | 'preschool')[],
    icon: 'Sun'
  },
  {
    id: 'r2',
    time: '8:30 AM – 9:00 AM',
    title: 'Nutritious Morning Breakfast & Hydration',
    category: 'meal' as const,
    description: 'Organic warm oatmeal with fresh berries, whole grain toast, sliced fruit, and organic milk or water.',
    suitableFor: ['toddler', 'preschool'] as ('infant' | 'toddler' | 'preschool')[],
    icon: 'Utensils'
  },
  {
    id: 'r3',
    time: '9:00 AM – 9:45 AM',
    title: 'Morning Circle & Community Gathering',
    category: 'learning' as const,
    description: 'Calendar song, weather observation, daily feelings check-in, shared storybook read-aloud, and theme introduction.',
    suitableFor: ['toddler', 'preschool'] as ('infant' | 'toddler' | 'preschool')[],
    icon: 'Users'
  },
  {
    id: 'r4',
    time: '9:45 AM – 10:45 AM',
    title: 'Small-Group Learning & Sensory Stations',
    category: 'learning' as const,
    description: 'Guided STEM experiments, loose-parts math counters, phonics games, and tactile sensory exploration.',
    suitableFor: ['infant', 'toddler', 'preschool'] as ('infant' | 'toddler' | 'preschool')[],
    icon: 'Sparkles'
  },
  {
    id: 'r5',
    time: '10:45 AM – 11:45 AM',
    title: 'Outdoor Nature Play & Motor Zone',
    category: 'outdoor' as const,
    description: 'Tricycles, sandbox castles, climbing structures, garden watering, bubble chasing, and fresh-air running.',
    suitableFor: ['infant', 'toddler', 'preschool'] as ('infant' | 'toddler' | 'preschool')[],
    icon: 'Trees'
  },
  {
    id: 'r6',
    time: '11:45 AM – 12:30 PM',
    title: 'Balanced Fresh-Prepared Lunch',
    category: 'meal' as const,
    description: 'Fresh roasted veggies, organic protein, brown rice pilaf, and fruit slices. Manners and family-style dining.',
    suitableFor: ['toddler', 'preschool'] as ('infant' | 'toddler' | 'preschool')[],
    icon: 'Heart'
  },
  {
    id: 'r7',
    time: '12:30 PM – 2:30 PM',
    title: 'Peaceful Rest & Nap Time',
    category: 'rest' as const,
    description: 'Soft white noise, dimmed lights, individual cots with home blankets. Quiet soothing books for early wakers.',
    suitableFor: ['infant', 'toddler', 'preschool'] as ('infant' | 'toddler' | 'preschool')[],
    icon: 'Moon'
  },
  {
    id: 'r8',
    time: '2:30 PM – 3:15 PM',
    title: 'Wake-Up, Handwashing & Afternoon Snack',
    category: 'meal' as const,
    description: 'Crunchy cucumber sticks with hummus, string cheese, whole grain crackers, and crisp apple wedges.',
    suitableFor: ['toddler', 'preschool'] as ('infant' | 'toddler' | 'preschool')[],
    icon: 'Apple'
  },
  {
    id: 'r9',
    time: '3:15 PM – 4:30 PM',
    title: 'Creative Arts, Music & Free Play',
    category: 'creative' as const,
    description: 'Watercolor painting, percussion instruments, theatrical dress-up, dance games, and building train tracks.',
    suitableFor: ['toddler', 'preschool'] as ('infant' | 'toddler' | 'preschool')[],
    icon: 'Palette'
  },
  {
    id: 'r10',
    time: '4:30 PM – 6:00 PM',
    title: 'Outdoor Evening Games & Parent Pick-Up',
    category: 'departure' as const,
    description: 'Garden games, cooperative stories, daily highlights review on the parent app, and warm goodbyes.',
    suitableFor: ['infant', 'toddler', 'preschool'] as ('infant' | 'toddler' | 'preschool')[],
    icon: 'Smile'
  }
];

export const FAQ_ITEMS = [
  {
    q: "What age groups do you care for at Sunny Days Learning?",
    a: "We welcome children from 6 weeks old through 5 years of age across three dedicated programs: Infant Care (6 weeks – 18 months), Toddler Program (18 months – 3 years), and Preschool Program (3 – 5 years)."
  },
  {
    q: "What are your teacher-to-child ratios?",
    a: "We maintain strict low caregiver ratios: Infants 1:3, Toddlers 1:4, and Preschool 1:8 to ensure each child receives individualized attention, warmth, and supportive guidance."
  },
  {
    q: "How can I schedule a tour or enroll my child?",
    a: "You can click 'Schedule a Tour' at the top of the page to choose an available date, or click 'Enroll Your Child' to complete our convenient online 5-step registration and intake form."
  },
  {
    q: "How are meals, snacks, and allergies managed?",
    a: "We serve wholesome, balanced, and nutritious meals and snacks daily. We are a nut-aware facility and accommodate all dietary restrictions and allergies with color-coded preparation zones."
  },
  {
    q: "How do you keep parents updated throughout the day?",
    a: "We provide regular daily communication, photos, milestone tracking, and detailed notes on meals, naps, and activities so you always know how your child's day is going."
  },
  {
    q: "What is your illness and fever policy?",
    a: "Children must be 24-hours symptom-free (without fever-reducing medication) before returning to our care. Our gentle wellness room provides soothing one-on-one attention if a child becomes unwell during the day."
  },
  {
    q: "What security measures protect the facility?",
    a: "We utilize personalized two-stage PIN code entry, continuous video surveillance, strict authorized pickup photo ID checks, and 100% CPR/First-Aid certified teachers."
  }
];

export const DAILY_ROUTINE: DailyRoutineItem[] = [
  {
    id: 'r1',
    time: '7:00 AM – 8:30 AM',
    title: 'Warm Welcome & Free Choice Discovery',
    category: 'welcome',
    description: 'Gentle check-in with teacher greeting, soft morning music, quiet puzzles, drawing, and open-ended table toys.',
    suitableFor: ['infant', 'toddler', 'preschool'],
    icon: 'Sun'
  },
  {
    id: 'r2',
    time: '8:30 AM – 9:00 AM',
    title: 'Nutritious Morning Breakfast & Hydration',
    category: 'meal',
    description: 'Organic warm oatmeal with fresh berries, whole grain toast, sliced fruit, and organic milk or water.',
    suitableFor: ['toddler', 'preschool'],
    icon: 'Utensils'
  },
  {
    id: 'r3',
    time: '9:00 AM – 9:45 AM',
    title: 'Morning Circle & Community Gathering',
    category: 'learning',
    description: 'Calendar song, weather observation, daily feelings check-in, shared storybook read-aloud, and theme introduction.',
    suitableFor: ['toddler', 'preschool'],
    icon: 'Users'
  },
  {
    id: 'r4',
    time: '9:45 AM – 10:45 AM',
    title: 'Small-Group Learning & Sensory Stations',
    category: 'learning',
    description: 'Guided STEM experiments, loose-parts math counters, phonics games, and tactile sensory exploration.',
    suitableFor: ['infant', 'toddler', 'preschool'],
    icon: 'Sparkles'
  },
  {
    id: 'r5',
    time: '10:45 AM – 11:45 AM',
    title: 'Outdoor Nature Play & Motor Zone',
    category: 'outdoor',
    description: 'Tricycles, sandbox castles, climbing structures, garden watering, bubble chasing, and fresh-air running.',
    suitableFor: ['infant', 'toddler', 'preschool'],
    icon: 'Trees'
  },
  {
    id: 'r6',
    time: '11:45 AM – 12:30 PM',
    title: 'Balanced Fresh-Prepared Lunch',
    category: 'meal',
    description: 'Fresh roasted veggies, organic protein, brown rice pilaf, and fruit slices. Manners and family-style dining.',
    suitableFor: ['toddler', 'preschool'],
    icon: 'Heart'
  },
  {
    id: 'r7',
    time: '12:30 PM – 2:30 PM',
    title: 'Peaceful Rest & Nap Time',
    category: 'rest',
    description: 'Soft white noise, dimmed lights, individual cots with home blankets. Quiet soothing books for early wakers.',
    suitableFor: ['infant', 'toddler', 'preschool'],
    icon: 'Moon'
  },
  {
    id: 'r8',
    time: '2:30 PM – 3:15 PM',
    title: 'Wake-Up, Handwashing & Afternoon Snack',
    category: 'meal',
    description: 'Crunchy cucumber sticks with hummus, string cheese, whole grain crackers, and crisp apple wedges.',
    suitableFor: ['toddler', 'preschool'],
    icon: 'Apple'
  },
  {
    id: 'r9',
    time: '3:15 PM – 4:30 PM',
    title: 'Creative Arts, Music & Free Play',
    category: 'creative',
    description: 'Watercolor painting, percussion instruments, theatrical dress-up, dance games, and building train tracks.',
    suitableFor: ['toddler', 'preschool'],
    icon: 'Palette'
  },
  {
    id: 'r10',
    time: '4:30 PM – 6:00 PM',
    title: 'Outdoor Evening Games & Parent Pick-Up',
    category: 'departure',
    description: 'Garden games, cooperative stories, daily highlights review on the parent app, and warm goodbyes.',
    suitableFor: ['infant', 'toddler', 'preschool'],
    icon: 'Smile'
  }
];

export const SAFETY_STANDARDS = [
  {
    title: 'Controlled Access & Secure Entry',
    description: 'Locked entry vestibule requiring verified authorized parent PIN and photo ID matching. Never an unmonitored door.',
    badge: 'High Security'
  },
  {
    title: '100% CPR & Pediatric First Aid',
    description: 'Every educator, lead teacher, and administrator maintains current certified Pediatric CPR, AED & First Aid credentials.',
    badge: 'Certified Staff'
  },
  {
    title: 'Daily Hygiene & Deep Sanitization',
    description: 'Daily multi-round high-touch toy and surface disinfection using non-toxic child-safe plant-based cleaners.',
    badge: 'Eco-Sanitized'
  },
  {
    title: 'Continuous Fresh Air & Clean Rooms',
    description: 'Commercial HVAC systems equipped with MERV-13 and HEPA air purification filters delivering regular room air turnover.',
    badge: 'Clean Air'
  },
  {
    title: 'Strict Allergen Protocols',
    description: 'Peanut-free facility with designated allergy meal preparation protocols and strict verification before serving.',
    badge: 'Allergen Safe'
  },
  {
    title: 'Live Digital Parent Communication',
    description: 'Daily parent updates detailing nap times, meals consumed, diaper/potty logs, and photo learning moments.',
    badge: 'Daily Updates'
  }
];

export const FAQS = [
  {
    q: "What age groups do you care for at Sunny Days Learning?",
    a: "We welcome children from 6 weeks old through 5 years of age across three dedicated programs: Infant Care (6 weeks – 18 months), Toddler Program (18 months – 3 years), and Preschool Program (3 – 5 years)."
  },
  {
    q: "What are your teacher-to-child ratios?",
    a: "We maintain strict low caregiver ratios: Infants 1:3, Toddlers 1:4, and Preschool 1:8 to ensure each child receives individualized attention, warmth, and supportive guidance."
  },
  {
    q: "How can I schedule a tour or enroll my child?",
    a: "You can click 'Schedule a Tour' at the top of the page to choose an available date, or click 'Enroll Your Child' to complete our convenient online 5-step registration and intake form."
  },
  {
    q: "How are meals, snacks, and allergies managed?",
    a: "We serve wholesome, balanced, and nutritious meals and snacks daily. We are a nut-aware facility and accommodate all dietary restrictions and allergies with color-coded preparation zones."
  },
  {
    q: "How do you keep parents updated throughout the day?",
    a: "We provide regular daily communication, photos, milestone tracking, and detailed notes on meals, naps, and activities so you always know how your child's day is going."
  }
];

export const SAMPLE_MENU = [
  {
    day: 'Monday',
    breakfast: 'Warm cinnamon steel-cut oatmeal with organic blueberries & sliced bananas',
    lunch: 'Baked herb-crusted chicken or lentil patties, steamed broccoli florets & brown rice pilaf',
    snack: 'Whole-grain pita triangles with fresh garlic-free hummus & cucumber slices'
  },
  {
    day: 'Tuesday',
    breakfast: 'Whole-wheat mini waffles with natural strawberry puree & organic milk',
    lunch: 'Mild turkey & vegetable chili with sweet corn, avocado cubes & mild cheddar cheese',
    snack: 'Crisp apple slices with creamy sunflower seed butter & organic animal crackers'
  },
  {
    day: 'Wednesday',
    breakfast: 'Scrambled organic eggs with diced bell peppers & warm sourdough toast',
    lunch: 'Wild-caught salmon or chickpea cakes with roasted sweet potato wedges & garden peas',
    snack: 'Greek yogurt parfait with mixed berries, chia seeds & puffed quinoa'
  },
  {
    day: 'Thursday',
    breakfast: 'Warm organic quinoa porridge with stewed cinnamon apples & oat milk',
    lunch: 'Whole-wheat penne with hidden-veggie marinara sauce, turkey meatballs & parmesan',
    snack: 'Carrot & zucchini mini muffins with string cheese'
  },
  {
    day: 'Friday',
    breakfast: 'Fresh fruit smoothie bowl (spinach, mango, banana) with hemp hearts & whole grain toast',
    lunch: 'DIY Soft whole-wheat tacos: seasoned lean beef or black beans, shredded lettuce & guacamole',
    snack: 'Watermelon slices & crunchy whole-grain pretzel twists'
  }
];

