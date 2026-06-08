export type Project = {
  slug: string;
  index: string;
  name: string;
  tagline: string;
  category: string;
  year: string;
  role: string;
  company: string;
  accent: string;
  live: boolean;
  description: string;
  impact: string[];
  stack: string[];
  challenge: string;
  solution: string;
  appStore?: string;
  playStore?: string;
};

export const projects: Project[] = [
  {
    slug: "smarthealth",
    index: "01",
    name: "SmartHealth",
    tagline: "Real-time telemedicine for patients across Nigeria",
    category: "Telemedicine · Healthcare",
    year: "2025",
    role: "Mobile / Product Engineer",
    company: "Interswitch Group Limited",
    accent: "#8b78f8",
    live: true,
    description:
      "SmartHealth is a telemedicine platform enabling real-time video and audio consultations between doctors and patients across Nigeria, built at Interswitch Group. The platform handles appointment scheduling, medical records management, and payment processing — making quality healthcare accessible to thousands of patients.",
    impact: [
      "Made quality healthcare accessible to thousands of patients across Nigeria",
      "Eliminated fragmented medical record-keeping by architecting a comprehensive records system covering diagnoses, medications, allergies, immunizations, and family history",
      "Enabled reliable virtual consultations at scale via a custom microservice architecture for video/audio management",
      "Resolved Android audio compatibility issues that previously blocked patient-doctor communication",
      "Reduced post-launch defect rate by over 50% through Firebase and Sentry instrumentation",
    ],
    stack: ["React Native", "Stream SDK", "Laravel Microservices", "Firebase Auth", "Sentry", "Firebase Analytics"],
    challenge:
      "Building reliable real-time video/audio consultations across Nigeria's diverse network conditions, while maintaining a comprehensive medical records system accessible to clinicians under time pressure.",
    solution:
      "Designed a custom microservice architecture isolating video/audio management from the core app, with graceful degradation on poor connections. Implemented a real-time search records system and Android-specific audio routing fixes that unblocked consultations across all device types.",
  },
  {
    slug: "campusgenie",
    index: "02",
    name: "CampusGenie",
    tagline: "AI-powered offline exam prep for Nigerian students",
    category: "EdTech · Offline-First · AI",
    year: "2024",
    role: "Lead Product / Mobile Engineer",
    company: "SenjuLabs Technologies",
    accent: "#2dd4bf",
    live: true,
    description:
      "CampusGenie is an offline-first AI-powered study platform covering 63+ JAMB/WAEC subjects, built for tens of thousands of Nigerian students with unreliable internet access. It features AI question generation, adaptive study planning, CBT centre mapping, and a gamification system that turns revision into a competitive social experience.",
    impact: [
      "Democratised exam preparation for tens of thousands of Nigerian students with unreliable internet access",
      "Integrated OpenAI API for intelligent question generation, adaptive study planning, and personalised recommendations tailored to each student's weak areas",
      "Increased daily active usage with a gamification system — streaks, challenge rooms, leaderboards",
      "Drove continuous improvement by deploying Mixpanel, Sentry, and LogRocket — iterating on UX weekly from real usage patterns",
      "Full offline-first architecture ensuring the app works without internet across all 63+ subjects",
    ],
    stack: ["React Native", "Expo", "OpenAI API", "Firebase", "Google Maps SDK", "TanStack Query", "Mixpanel", "Sentry", "LogRocket"],
    challenge:
      "Nigerian students face two hard constraints: unreliable internet and affordable low-spec Android devices. Building an AI-powered study platform that works fully offline on budget hardware while still delivering a premium, gamified experience.",
    solution:
      "Built a full offline-first data layer with smart sync — question banks, adaptive plans, and progress all cached locally. Optimised rendering for low-spec devices, compressed AI responses for offline queuing, and designed the gamification loop to work entirely without connectivity.",
  },
  {
    slug: "vant-app",
    index: "03",
    name: "Vant App Africa",
    tagline: "Fintech platform with AI-driven financial planning",
    category: "Fintech · AI Planning",
    year: "2023",
    role: "Mobile Software Engineer",
    company: "Vant App Africa",
    accent: "#f59e0b",
    live: true,
    description:
      "Vant App is a consumer fintech application improving financial inclusion for underbanked Nigerians. It delivers bank-to-bank transfers, bill payments, savings management, and an AI-driven financial planning tool that analyses real income, spending, and bills to generate personalised savings plans automatically.",
    impact: [
      "Improved financial inclusion for underbanked Nigerians with a full-featured consumer fintech app",
      "Built core fintech features: bank-to-bank transfers, bill payments, savings management, and real-time transaction history",
      "Integrated an AI-driven financial planning tool (OpenAI) that generates personalised savings plans from real spending data",
      "Live on Google Play with active users",
    ],
    stack: ["React Native", "Expo SDK", "OpenAI API", "Firebase Auth", "REST APIs", "Redux Toolkit"],
    challenge:
      "Making financial tools feel approachable and trustworthy for users who've never used a digital banking product before, while integrating AI personalisation that doesn't feel gimmicky.",
    solution:
      "Built a clean, guided onboarding flow that surfaces financial insights progressively. The AI planner analyses transaction history to surface concrete weekly savings targets, framed in terms users actually understand — not generic advice.",
  },
  {
    slug: "flashride",
    index: "04",
    name: "FlashRide",
    tagline: "Dual ride-sharing platform built from zero to production",
    category: "Mobility · Real-time · Maps",
    year: "2022",
    role: "Mobile Developer",
    company: "Flashride Nigeria",
    accent: "#34d399",
    live: true,
    description:
      "FlashRide is a dual ride-sharing platform — a passenger app and a driver app — both built from scratch. The system handles real-time ride requests, live driver tracking, Google Maps route optimisation, in-app messaging, and payment processing. Both apps are live on iOS App Store and Google Play.",
    impact: [
      "Built both FlashRide (passenger) and FlashDriver (driver) apps entirely from scratch",
      "Implemented real-time ride requests with live driver tracking and Google Maps route optimisation",
      "Built in-app messaging and payment processing end-to-end",
      "Successfully deployed to both iOS App Store and Google Play",
      "Optimised for performance and scalability across diverse device types common in Nigeria",
    ],
    stack: ["React Native", "Expo", "Google Maps SDK", "Firebase", "WebSockets", "Stripe"],
    challenge:
      "Building two interdependent real-time apps simultaneously — passenger and driver — that need to stay in perfect sync under load, with map accuracy across Lagos roads that Google Maps doesn't always handle well.",
    solution:
      "Used Firebase Realtime Database for sub-200ms location sync between driver and passenger. Built a custom route correction layer on top of Google Maps to handle incomplete road data in Nigerian streets. Both apps share a common utilities layer to stay in sync without duplicating logic.",
  },
  {
    slug: "scdhelper",
    index: "05",
    name: "SCDHelper",
    tagline: "AI health assistant for Sickle Cell Disease patients",
    category: "Healthcare · AI · Subscriptions",
    year: "2025",
    role: "Mobile / Product Engineer",
    company: "Geinny App",
    accent: "#f87171",
    live: true,
    description:
      "SCDHelper improves daily disease management for Sickle Cell Disease patients across Nigeria. It covers pain logging, medication adherence, vitals monitoring, and nutrition — paired with a Google Gemini AI assistant that provides 24/7 personalised guidance with emergency quick-action modes when medical professionals are unavailable.",
    impact: [
      "Improved daily disease management for thousands of Sickle Cell Disease patients across Nigeria",
      "Reduced patient isolation and improved crisis response via a Google Gemini AI assistant with emergency quick-action modes",
      "Enabled commercial viability across African markets with a multi-tier Stripe/Paystack subscription system and feature-gating middleware",
      "Increased trust and retention by shipping Face ID / Touch ID biometric authentication",
      "Shipped dark/light theming and accessibility-first component design for users with vision sensitivities",
    ],
    stack: ["React Native", "Expo", "Google Gemini API", "Stripe", "Paystack", "Firebase", "Biometrics"],
    challenge:
      "Sickle Cell patients need a health tool they can actually reach during a pain crisis — when they're least capable of navigating complex UIs. Building emergency flows that are one tap away while keeping the broader app medically accurate and commercially sustainable.",
    solution:
      "Designed an emergency mode accessible from every screen in the app — one tap surfaces AI guidance, emergency contacts, and nearest hospitals. The AI assistant is trained on SCD-specific medical context so responses are relevant, not generic. Subscription gating keeps premium features protected without blocking critical emergency functions.",
  },
  {
    slug: "farmsmarter",
    index: "06",
    name: "FarmSmarter",
    tagline: "Offline GPS farm management for rural Nigerian farmers",
    category: "AgriTech · GPS · Offline-First",
    year: "2024",
    role: "Mobile Engineer",
    company: "Farmsmarter LTD",
    accent: "#a3e635",
    live: true,
    description:
      "FarmSmarter brings modern farm management tools to smallholder farmers in remote, off-grid areas of Nigeria. The app works fully offline using Realm, and features custom GPS-powered field boundary mapping with Google Maps polygon drawing — removing the need for expensive external surveying.",
    impact: [
      "Brought modern farm management to smallholder farmers in remote, off-grid areas of Nigeria",
      "Built a full offline-first architecture with Realm — the app functions reliably where internet doesn't exist",
      "Gave farmers precise digital control over their land with custom GPS-powered field boundary mapping and interactive polygon drawing",
      "Removed the need for expensive external surveying by building it directly into the app",
      "Validated product-market fit with real farmers through field user testing sessions in rural Nigeria",
    ],
    stack: ["React Native", "Realm", "Google Maps SDK", "GPS API", "Offline-First Architecture"],
    challenge:
      "Rural Nigerian farmers have never interacted with digital map tools. The UX needed to be learnable in minutes by users with limited smartphone experience, working entirely offline on cheap Android devices, in outdoor sunlight.",
    solution:
      "Designed a tap-to-place boundary mapping interface that requires zero prior GIS knowledge. Offline-first with Realm means data persists and syncs intelligently when connectivity returns. High-contrast UI for outdoor visibility and large touch targets for field use with work gloves.",
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
