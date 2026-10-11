import {
  EphemerisParameters,
  PhaseProgress,
  PhaseDetails,
  DrishtiRay,
  ShantiProtocol,
} from "../types/sadesati.types";

export const EPHEMERIS_DATA: EphemerisParameters = {
  moonSign: "Kumbha (Aquarius)",
  moonDegree: "15° 20' 44\"",
  natalSaturnSign: "Makara (Capricorn)",
  natalSaturnDegree: "28° 41' 12\"",
  currentPhase: "Phase 2 (Janma Shani)",
  currentStatus: "Peak Karmic Activation",
  activeTags: [
    "Active Ashtamshani Dhaiya Detected",
    "Wisdom & Patience Return Effects",
  ],
};

export const PROGRESS_DATA: PhaseProgress = {
  overallPercentage: 76,
  currentPhasePercentage: 68,
  dhaiyaPercentage: 62,
};

export const TRAJECTORY_DATA: PhaseDetails[] = [
  {
    id: "phase1",
    title: "The Rising Phase",
    house: "12th House",
    duration: "Jan 2023 - May 2025 (Approx)",
    isActive: false,
    description:
      "Saturn enters the house preceding your natal Moon. Represents expenses, mental pressure, and foreign travels. Prepares you to face reality by stripping away illusions.",
    effects:
      "Financial stress, unexpected changes, sleep disturbances. Tests capacity for detachment.",
  },
  {
    id: "phase2",
    title: "The Peak Phase (Janma Shani)",
    house: "1st House",
    duration: "May 2025 - Aug 2027 (Active)",
    isActive: true,
    description:
      "Saturn transits directly over your natal Moon. The most psychologically demanding phase. Demands supreme patience, humility, and hard work while stripping away ego.",
    effects:
      "Intense pressure, physical strain, delays. Promotes deep inner transformation.",
  },
  {
    id: "phase3",
    title: "The Setting Phase",
    house: "2nd House",
    duration: "Aug 2027 - Nov 2029 (Approx)",
    isActive: false,
    description:
      "Saturn moves to the house of wealth and family. The focus shifts to rebuilding resources, family relationships, and securing the foundation after the storm.",
    effects:
      "Financial restructuring, family adjustments. Gradual relief from intense anxiety.",
  },
];

export const DRISHTI_DATA: DrishtiRay[] = [
  {
    ray: "3rd Drishti",
    house: "Sahaja (Siblings/Courage)",
    effect:
      "Pressure on siblings, initiative, and long-distance communication.",
  },
  {
    ray: "7th Drishti",
    house: "Kalatra (Spouse/Partners)",
    effect:
      "Tests in relationships, legal partnerships, and public interactions.",
  },
  {
    ray: "10th Drishti",
    house: "Karma (Career/Status)",
    effect:
      "Intense focus on career structure, public reputation, and authority.",
  },
];

export const SHANTI_PROTOCOLS: ShantiProtocol[] = [
  {
    id: "mantra",
    title: "Mantra Vibration",
    subtitle: "DAILY RECITATION",
    description:
      "Recite the Shani Beej Mantra 108 times at sunset. Cultivates inner discipline and aligns with Saturn's frequencies.",
    iconName: "music",
  },
  {
    id: "dana",
    title: "Dana & Charity",
    subtitle: "SATURDAY OFFERINGS",
    description:
      "Donate mustard oil, black sesame seeds, or iron utensils to the needy on Saturdays. A profound karmic balancer.",
    iconName: "gift",
  },
  {
    id: "chhaya",
    title: "Chhaya Daan (Shadow Charity)",
    subtitle: "KARMIC DETOXIFICATION",
    description:
      "Look at your reflection in a bowl of mustard oil, then donate it. Known to mitigate severe Saturnian afflictions.",
    iconName: "droplets",
  },
  {
    id: "karma",
    title: "Karma & Dharma Actions",
    subtitle: "LIFESTYLE ALIGNMENT",
    description:
      "Respect the elderly, maintain absolute honesty in work, and practice patience. Saturn rewards disciplined integrity.",
    iconName: "shield",
  },
];
