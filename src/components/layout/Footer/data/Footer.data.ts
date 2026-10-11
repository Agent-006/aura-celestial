import {
  Globe,
  ShieldCheck,
  GraduationCap,
  Clock,
} from "lucide-react";
import type { FooterLinkColumn, FooterFeature } from "../types/Footer.types";

export const FOOTER_LINKS: FooterLinkColumn[] = [
  {
    title: "Horoscope",
    links: [
      { label: "Daily Horoscope", href: "#", badge: "LIVE", badgeType: "green" },
      { label: "Weekly Horoscope", href: "#" },
      { label: "Monthly Horoscope", href: "#" },
      { label: "Yearly Horoscope", href: "#" },
      { label: "Love Horoscope", href: "#" },
      { label: "Career Horoscope", href: "#" },
    ],
  },
  {
    title: "Astrology Resources",
    links: [
      { label: "Nakshatras", href: "#" },
      { label: "Planets", href: "#" },
      { label: "Zodiac Signs", href: "#" },
      { label: "Yogas", href: "#" },
      { label: "Mantras", href: "#" },
      { label: "Doshas", href: "#" },
    ],
  },
  {
    title: "Free Services",
    links: [
      { label: "Free Kundli", href: "#" },
      { label: "Kundli Matching", href: "#", badge: "36/36", badgeType: "green" },
      { label: "Chat with Astrologer", href: "#", badge: "Free" },
      { label: "Talk to Astrologer", href: "#", badge: "Free" },
      { label: "Free Tarot Reading", href: "#" },
      { label: "Numerology Calculator", href: "#" },
    ],
  },
  {
    title: "Panchang",
    links: [
      { label: "Today's Panchang", href: "#" },
      { label: "Hindu Calendar", href: "#" },
      { label: "Choghadiya", href: "#" },
      { label: "Shubh Muhurat", href: "#" },
      { label: "Rahu Kaal", href: "#" },
      { label: "Gauri Shankar", href: "#" },
    ],
  },
  {
    title: "Consultations",
    links: [
      { label: "Chat with Astrologer", href: "#" },
      { label: "Talk to Astrologer", href: "#" },
      { label: "Book a Puja", href: "#" },
      { label: "Vastu Consultation", href: "#" },
      { label: "Palm Reading", href: "#" },
      { label: "Tarot Reading", href: "#" },
    ],
  },
];

export const FOOTER_FEATURES: FooterFeature[] = [
  {
    icon: Globe,
    title: "NASA JPL DE441 Ephemeris",
    desc: "Calibrated against NASA Jet Propulsion Laboratory dynamical models with sub-arcsecond sidereal precision.",
  },
  {
    icon: ShieldCheck,
    title: "100% Cryptographic Privacy",
    desc: "Birth coordinates and chart hashes computed in transient memory. Zero user profiles stored without consent.",
  },
  {
    icon: GraduationCap,
    title: "5-Stage Gurukul Verification",
    desc: "Every consulting horologist undergoes multi-level scrutiny in Sanskrit classical scriptures and ethical codes.",
  },
  {
    icon: Clock,
    title: "3-Minute Disconnect Assurance",
    desc: "Automated full-credit protection guarantee if any audio/video consultation encounters line interruption.",
  },
];
