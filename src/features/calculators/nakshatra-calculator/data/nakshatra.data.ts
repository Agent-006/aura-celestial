import {
  NakshatraDetails,
  PadaDetails,
  AnatomyMetric,
  AlmanacRow,
  DoshaAnalysis,
  DharmaProtocol,
} from "../types/nakshatra.types";

export const ANURADHA_DETAILS: NakshatraDetails = {
  name: "Anuradha Nakshatra",
  translation: '"The Star of Success, Friendship and Devotion"',
  description:
    "Anuradha is governed by Saturn and represents devotion, organizational skills, and leadership. Those born under this star possess a natural ability to form partnerships and have a deep capacity for friendship and loyalty. It bridges the gap between the material and spiritual.",
  score: 94.6,
  rulingPlanet: "Shani (Saturn)",
  rulingPlanetDesc: "Discipline & Karma",
  deity: "Mitra",
  deityDesc: "God of Friendship",
};

export const PADA_TWO_DETAILS: PadaDetails = {
  padaNumber: 2,
  name: "DHARMA / ARTHA",
  description:
    "The exact degree of the Moon falls in the 2nd quarter (Pada) of Anuradha, bringing the influence of Venus (Taurus Navamsha).",
  pushkaraStatus: "Pushkara Navamsha",
  pushkaraDesc: "Active. Highly auspicious degree for healing and nourishment.",
  vargottamaStatus: "Vargottama Status",
  vargottamaDesc: "Inactive. Moon changes sign in Navamsha.",
  moonSign: "Scorpio (Vrischika)",
  degree: "04° 12' 45\" Scorpio",
};

export const ANATOMY_METRICS_DATA: AnatomyMetric[] = [
  {
    id: "1",
    iconName: "droplets",
    label: "Pancha-Mahabhuta",
    value: "Jala (Water)",
    description: "Emotion, Intuition & Depth",
  },
  {
    id: "2",
    iconName: "flame",
    label: "Ayurvedic Dosha",
    value: "Pitta (Fire/Water)",
    description: "Transformation & Heat",
  },
  {
    id: "3",
    iconName: "anchor",
    label: "Guna (Quality)",
    value: "Tamas (Inertia)",
    description: "Grounding, Deep Focus & Form",
  },
  {
    id: "4",
    iconName: "paw-print",
    label: "Yoni (Animal Symbol)",
    value: "Deer (Mriga)",
    description: "Gentleness, Elusive Nature",
  },
  {
    id: "5",
    iconName: "activity",
    label: "Nadi (Pulse)",
    value: "Madhya (Middle)",
    description: "Balance & Equilibrium",
  },
  {
    id: "6",
    iconName: "hammer",
    label: "Varna (Caste/Role)",
    value: "Shudra (Service)",
    description: "Hard Work & Grounding",
  },
  {
    id: "7",
    iconName: "sparkles",
    label: "Gana (Temperament)",
    value: "Deva (Divine)",
    description: "Compassionate & Refined",
  },
  {
    id: "8",
    iconName: "eye",
    label: "Vashya (Control Type)",
    value: "Keeta (Insect)",
    description: "Secretive & Focused",
  },
  {
    id: "9",
    iconName: "compass",
    label: "Direction",
    value: "South",
    description: "Path of ancestors, ruled by Yama",
  },
  {
    id: "10",
    iconName: "heart",
    label: "Astrological Anatomy",
    value: "Breasts / Chest",
    description: "Emotional center of the body",
  },
];

export const LUNAR_ALMANAC_DATA: AlmanacRow[] = [
  {
    number: "01",
    name: "Ashwini",
    translation: "The Horse Woman",
    deity: "Ashwini Kumaras",
    rulingPlanet: "Ketu (South Node)",
    gana: "Deva",
    varna: "Vaishya",
  },
  {
    number: "02",
    name: "Bharani",
    translation: "The Bearer",
    deity: "Yama",
    rulingPlanet: "Shukra (Venus)",
    gana: "Manushya",
    varna: "Shudra",
  },
  {
    number: "03",
    name: "Krittika",
    translation: "The Cutter",
    deity: "Agni",
    rulingPlanet: "Surya (Sun)",
    gana: "Rakshasa",
    varna: "Brahmin",
  },
  {
    number: "04",
    name: "Rohini",
    translation: "The Red One",
    deity: "Brahma",
    rulingPlanet: "Chandra (Moon)",
    gana: "Manushya",
    varna: "Shudra",
  },
  {
    number: "05",
    name: "Mrigashira",
    translation: "The Deer's Head",
    deity: "Soma",
    rulingPlanet: "Mangala (Mars)",
    gana: "Deva",
    varna: "Vaishya",
  },
  {
    number: "17",
    name: "Anuradha",
    translation: "The Star of Success",
    deity: "Mitra",
    rulingPlanet: "Shani (Saturn)",
    gana: "Deva",
    varna: "Shudra",
    active: true,
  },
];

export const DOSHA_ANALYSIS_DATA: DoshaAnalysis = {
  status: "CLEAR",
  isClear: true,
  points: [
    "No Mula Dosha Detected",
    "Anuradha does not fall in the Gandanta (karmic knot) zones.",
    "Childbirth during this nakshatra is considered safe and auspicious.",
    "No specific shanti (pacification) rituals are required.",
  ],
  warningMessage:
    "However, the Moon is approaching its debilitation point in Scorpio. Pay attention to emotional fluctuations and potential for deep-seated fears to arise.",
};

export const DHARMA_PROTOCOL_DATA: DharmaProtocol = {
  gemstone: "Blue Sapphire",
  gemDesc: "(To balance Shani)",
  mantra: "Om Mitraya Namah",
  mantraDesc: "(For friendship & devotion)",
  deity: "The Adityas",
  deityDesc: "(Solar Deities)",
  actionTitle: "108 Recitations of Anuradha Bija Mantra",
};
