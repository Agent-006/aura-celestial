// src/features/astrologers/types/index.ts

export type AstrologerStatus = "online" | "busy" | "offline";
export type AstrologerBadge =
  | "VEDIC GOLD"
  | "VEDIC FELLOW"
  | "TOP RATED"
  | "VERIFIED";

export interface Astrologer {
  id: string;
  name: string;
  title: string;
  experienceYears: number;
  rating: number;
  specialties: string[];
  languages: string[];
  pricePerMin: number;
  imageUrl: string;
  status: AstrologerStatus;
  badge?: AstrologerBadge;
}
