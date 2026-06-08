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
    tagline: "Telemedicine platform bringing real healthcare access to Nigeria",
    category: "Telemedicine · Healthcare · AI",
    year: "2025",
    role: "Mobile / Product Engineer",
    company: "Interswitch Group Limited",
    accent: "#8b78f8",
    live: true,
    description:
      "SmartHealth is a full-featured telemedicine platform built at Interswitch Group — enabling real-time video and audio consultations between doctors and patients across Nigeria. The system spans appointment scheduling, comprehensive medical records management, an embedded AI chatbot powered by a multi-agent Python service, real-time doctor-patient chat, and a self-hosted telemedicine layer that replaced expensive third-party SDKs.",
    impact: [
      "Made quality healthcare accessible to thousands of patients across Nigeria via a production telemedicine platform",
      "Built a multi-agent AI chatbot (Python — Guard → Classify → Specialist Agents) that lets patients book appointments, find doctors, and manage records through natural language, reusing existing SmartHealth APIs",
      "Cut infrastructure costs by replacing Stream SDK with a self-hosted LiveKit video/audio service (Node.js + Socket.IO + Redis) for consultations and persistent doctor-patient chat",
      "Architected a comprehensive medical records system covering diagnoses, medications, allergies, immunizations, and family history with real-time search",
      "Resolved Android audio compatibility issues that previously blocked patient-doctor communication across device types",
      "Reduced post-launch defect rate by over 50% through Firebase and Sentry instrumentation",
    ],
    stack: [
      "React Native",
      "Expo",
      "LiveKit (self-hosted)",
      "Node.js",
      "Socket.IO",
      "Python multi-agent AI",
      "OpenAI Agents SDK",
      "MySQL",
      "Redis",
      "Firebase Auth",
      "Sentry",
    ],
    challenge:
      "Building reliable real-time video/audio consultations across Nigeria's diverse network conditions, reducing infrastructure cost without sacrificing quality, and adding a conversational AI layer that operates safely on sensitive medical data.",
    solution:
      "Replaced Stream SDK with a self-hosted LiveKit service, cutting recurring costs while gaining full control over media routing. Built a Python multi-agent chatbot (Guard → Intent Router → Specialist Agents) that forwards the patient's existing auth token to SmartHealth APIs — no new backend endpoints required. Socket.IO with Redis pub/sub handles real-time chat with full MySQL persistence.",
    appStore: "https://apps.apple.com/ng/app/smarthealth-mobile/id1673350680",
    playStore: "https://play.google.com/store/apps/details?id=com.telemed.eclat",
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
    stack: [
      "React Native",
      "Expo",
      "OpenAI API",
      "Firebase",
      "Google Maps SDK",
      "TanStack Query",
      "Mixpanel",
      "Sentry",
      "LogRocket",
    ],
    challenge:
      "Nigerian students face two hard constraints: unreliable internet and affordable low-spec Android devices. Building an AI-powered study platform that works fully offline on budget hardware while still delivering a premium, gamified experience.",
    solution:
      "Built a full offline-first data layer with smart sync — question banks, adaptive plans, and progress all cached locally. Optimised rendering for low-spec devices, compressed AI responses for offline queuing, and designed the gamification loop to work entirely without connectivity.",
    appStore: "https://apps.apple.com/ng/app/campusgenie/id6739751652",
    playStore: "https://play.google.com/store/apps/details?id=com.campusgenie.app",
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
    appStore: "https://apps.apple.com/ng/app/vant-bank-save-invest/id6464392721",
    playStore: "https://play.google.com/store/apps/details?id=com.vant.app",
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
    appStore: "https://apps.apple.com/ng/app/flashride/id6464170940",
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
    slug: "theragist",
    index: "06",
    name: "Theragist",
    tagline: "Therapy platform with live audio rooms and real-time care",
    category: "Health Tech · Real-time · Mental Health",
    year: "2024",
    role: "Mobile Developer",
    company: "Theragist Technologies LTD",
    accent: "#e879f9",
    live: true,
    description:
      "Theragist is a mental healthcare platform connecting users with licensed therapists through real-time chat, video and audio calls, and structured booking management. It introduces 'Theragist Space' — a live audio room feature for group therapy sessions and community mental health discussions. Both user and therapist apps are live on Google Play.",
    impact: [
      "Expanded access to mental healthcare by building a full therapy platform with booking, real-time chat, and video/audio calls",
      "Created 'Theragist Space' — a live audio room enabling group therapy sessions and community mental health discussions",
      "Built dual-app architecture: separate optimised experiences for clients and therapists, both live on Google Play",
      "Implemented push notifications for session reminders, therapist alerts, and appointment updates",
      "Integrated Stream Chat SDK for reliable, low-latency real-time messaging between users and therapists",
    ],
    stack: [
      "React Native",
      "Stream Chat SDK",
      "Stream Video SDK",
      "Push Notifications",
      "REST APIs",
      "Firebase",
    ],
    challenge:
      "Mental health users need a communication layer that feels safe, fast, and private. Building live audio rooms alongside 1:1 video calls in a single app — while keeping the experience warm and approachable rather than clinical.",
    solution:
      "Used Stream SDK for both chat and video, giving a consistent real-time layer across all communication modes. Theragist Space uses the audio-only mode of Stream Video for lower bandwidth and less intimidating group sessions. Push notifications ensure neither side misses a session.",
    playStore: "https://play.google.com/store/apps/details?id=com.theragisttherapist.app",
  },
  {
    slug: "konix",
    index: "07",
    name: "Konix",
    tagline: "Luxury e-commerce for Africa — shop global brands in Naira",
    category: "E-Commerce · Fintech · Retail",
    year: "2022",
    role: "Mobile Software Engineer",
    company: "Eaglion Global Technologies",
    accent: "#fb923c",
    live: true,
    description:
      "Konix removes the biggest barrier to cross-border luxury shopping for African consumers — foreign currency cards. The app lets Nigerian users shop Adidas, Hermès, Nike, and other luxury brands with automatic Naira price conversion, a smart multi-brand cart, WebView storefronts for real brand interactions, and secure payment processing.",
    impact: [
      "Removed the foreign currency barrier for African luxury shoppers — buy Adidas and Hermès products in Naira with automatic currency conversion",
      "Built live currency conversion so prices always reflect the current Naira equivalent at checkout",
      "Developed a unified multi-brand cart handling products from multiple luxury storefronts in a single checkout flow",
      "Integrated WebView storefronts for rich, real-time brand store access within the native app experience",
      "Delivered secure payment processing and successfully deployed to Google Play",
    ],
    stack: [
      "React Native",
      "WebView",
      "Currency Conversion API",
      "REST APIs",
      "Payment Gateway",
      "Firebase",
    ],
    challenge:
      "Most luxury brand stores are web-only and priced in foreign currencies. Nigerian consumers face two blockers: no native app experience and no way to pay in local currency — without direct API partnerships with the brands.",
    solution:
      "Used WebView to embed brand storefronts while intercepting cart and checkout events to apply Naira conversion and route payment through a local gateway. Currency rates are fetched in real time so the displayed price is always accurate at checkout.",
    appStore: "https://apps.apple.com/ng/app/konix/id6464203231",
    playStore: "https://play.google.com/store/apps/details?id=com.konix",
  },
  {
    slug: "farmsmarter",
    index: "08",
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
    appStore: "https://apps.apple.com/ng/app/farmsmarter/id6670790240",
    playStore: "https://play.google.com/store/apps/details?id=com.farmsmarter.app",
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
