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
