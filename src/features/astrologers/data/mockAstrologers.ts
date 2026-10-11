// src/features/astrologers/data/mockAstrologers.ts
import { Astrologer } from "../types";

export const MOCK_ASTROLOGERS: Astrologer[] = [
  {
    id: "astro-1",
    name: "Acharya Devashish",
    title: "Jyotish Visharada",
    experienceYears: 14,
    rating: 4.98,
    specialties: ["Career Karma", "Navansha D9"],
    languages: ["English", "Hindi", "Sanskrit"],
    pricePerMin: 45,
    imageUrl:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=800&auto=format&fit=crop", // Placeholder
    status: "online",
    badge: "VEDIC GOLD",
  },
  {
    id: "astro-2",
    name: "Dr. K. N. Ramanathan",
    title: "PhD Jyotish Sastra",
    experienceYears: 28,
    rating: 4.99,
    specialties: ["Medical Jyotish", "Muhurta"],
    languages: ["Tamil", "Telugu", "English"],
    pricePerMin: 60,
    imageUrl:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=800&auto=format&fit=crop",
    status: "online",
    badge: "VEDIC FELLOW",
  },
  {
    id: "astro-3",
    name: "Acharya Meera Roy",
    title: "Bhrigu Nandi Nadi",
    experienceYears: 11,
    rating: 4.96,
    specialties: ["Relationships", "Prashna"],
    languages: ["Hindi", "Bengali", "English"],
    pricePerMin: 38,
    imageUrl:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800&auto=format&fit=crop",
    status: "busy",
    badge: "TOP RATED",
  },
  {
    id: "astro-4",
    name: "Pt. Vikramaditya Sen",
    title: "KP & Parashari",
    experienceYears: 9,
    rating: 4.95,
    specialties: ["KP System", "Foreign Travel"],
    languages: ["English", "Marathi", "Hindi"],
    pricePerMin: 35,
    imageUrl:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop",
    status: "online",
    badge: "VERIFIED",
  },
  {
    id: "astro-5",
    name: "Vidushi Gargi Sharma",
    title: "Vedic Astro-Psychology",
    experienceYears: 16,
    rating: 4.97,
    specialties: ["Kundli Milan", "Gemology"],
    languages: ["English", "Hindi", "Gujarati"],
    pricePerMin: 50,
    imageUrl:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop",
    status: "online",
    badge: "VEDIC GOLD",
  },
  {
    id: "astro-6",
    name: "Acharya Someshwar",
    title: "Nadi & Jaimini Sutras",
    experienceYears: 21,
    rating: 4.98,
    specialties: ["Dasha Phala", "Vastu Shastra"],
    languages: ["Hindi", "Sanskrit", "Marathi"],
    pricePerMin: 55,
    imageUrl:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=800&auto=format&fit=crop",
    status: "online",
    badge: "TOP RATED",
  },
  {
    id: "astro-7",
    name: "Dr. Ananya Mukherjee",
    title: "Prashna & Horary",
    experienceYears: 12,
    rating: 4.94,
    specialties: ["Prashna Kundli", "Career Timing"],
    languages: ["English", "Bengali", "Hindi"],
    pricePerMin: 40,
    imageUrl:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=800&auto=format&fit=crop",
    status: "busy",
    badge: "VERIFIED",
  },
  {
    id: "astro-8",
    name: "Pt. Harishchandra Joshi",
    title: "Classical Parashari",
    experienceYears: 25,
    rating: 4.99,
    specialties: ["Remedial Jyotish", "Pitra Dosha"],
    languages: ["Hindi", "English"],
    pricePerMin: 65,
    imageUrl:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=800&auto=format&fit=crop",
    status: "online",
    badge: "VEDIC FELLOW",
  },
];

export const FILTER_CATEGORIES = [
  "All Consults",
  "Love & Relationships",
  "Career & Wealth",
  "Marriage & Compatibility",
  "Vedic Shastra",
  "Tarot & Prashna",
  "Numerology",
];
