import { Moon, Sparkles, Hourglass } from "lucide-react";
import { CalculatorItem } from "../types/calculators-section.types";

export const CALCULATORS_DATA: CalculatorItem[] = [
  {
    id: "calc-moon",
    title: "Moon Sign (Chandra Rashi)",
    description:
      "Discover your emotional core through the exact celestial placement of the Moon at birth.",
    ctaText: "CALCULATE MOON SIGN →",
    icon: Moon,
    href: "/calculators/moon-sign", // Future route
  },
  {
    id: "calc-nakshatra",
    title: "Nakshatra & Pada Finder",
    description:
      "Identify which of the 27 lunar mansions rules your destiny and planetary overlord.",
    ctaText: "FIND NAKSHATRA →",
    icon: Sparkles,
    href: "/calculators/nakshatra", // Future route
  },
  {
    id: "calc-sadesati",
    title: "Sade Sati & Dhaiya Timer",
    description:
      "Compute Saturn's 7.5 year major karmic cycle across your natal Moon with phase milestones.",
    ctaText: "EVALUATE SADE SATI →",
    icon: Hourglass,
    href: "/calculators/sade-sati", // Future route
  },
];
