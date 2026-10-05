import { KootaRow, AspectRow } from "../types/love-compatibility.types";

export const ASHTAKOOTA_DATA: KootaRow[] = [
  {
    name: "Varna",
    desc: "Work & Ego Match",
    max: 1,
    obtained: 1,
    status: "Auspicious",
  },
  {
    name: "Vashya",
    desc: "Attraction & Control",
    max: 2,
    obtained: 1,
    status: "Average",
  },
  {
    name: "Tara",
    desc: "Destiny & Health",
    max: 3,
    obtained: 3,
    status: "Auspicious",
  },
  {
    name: "Yoni",
    desc: "Intimacy & Nature",
    max: 4,
    obtained: 3,
    status: "Good",
  },
  {
    name: "Graha Maitri",
    desc: "Mental Friendship",
    max: 5,
    obtained: 5,
    status: "Auspicious",
  },
  {
    name: "Gana",
    desc: "Temperament",
    max: 6,
    obtained: 6,
    status: "Auspicious",
  },
  {
    name: "Bhakoot",
    desc: "Family & Growth",
    max: 7,
    obtained: 0,
    status: "Inauspicious",
  },
  {
    name: "Nadi",
    desc: "Health & Genes",
    max: 8,
    obtained: 8,
    status: "Auspicious",
  },
];

export const PLANETARY_SYNASTRY_DATA: AspectRow[] = [
  { p1: "Sun", p2: "Moon", aspect: "Trine (120°)", orb: "2.4°", resonance: 92 },
  {
    p1: "Venus",
    p2: "Mars",
    aspect: "Conjunction (0°)",
    orb: "1.1°",
    resonance: 98,
  },
  {
    p1: "Moon",
    p2: "Jupiter",
    aspect: "Sextile (60°)",
    orb: "4.0°",
    resonance: 85,
  },
  {
    p1: "Mars",
    p2: "Saturn",
    aspect: "Square (90°)",
    orb: "0.8°",
    resonance: 45,
  },
  {
    p1: "Mercury",
    p2: "Venus",
    aspect: "Trine (120°)",
    orb: "3.2°",
    resonance: 88,
  },
];
